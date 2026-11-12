(() => {
  const search = document.querySelector(".mv-search");
  if (!search) return;

  const input = search.querySelector(".mv-search__input");
  const clearButton = search.querySelector(".mv-search__clear");
  const results = search.querySelector(".mv-search__results");
  const status = search.querySelector("[data-search-status]");
  const indexUrl = search.dataset.searchIndex;

  if (!(input instanceof HTMLInputElement) || !(clearButton instanceof HTMLButtonElement) ||
      !(results instanceof HTMLDivElement) || !(status instanceof HTMLElement) || !indexUrl) {
    console.error("Search interface is missing required elements or index URL.");
    return;
  }

  const normalize = (value) => value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const indexPromise = fetch(indexUrl)
    .then((response) => {
      if (!response.ok) throw new Error(`Search index request failed: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      if (!Array.isArray(data.items)) throw new Error("Search index has no items array.");
      return data.items.map((item) => {
        const text = new DOMParser().parseFromString(item.text || "", "text/html").body.textContent || "";
        const path = Array.isArray(item.path) ? item.path.join(" ") : "";
        return {
          title: item.title || "",
          path,
          text,
          location: item.location || ".",
          normalizedTitle: normalize(item.title || ""),
          normalizedPath: normalize(path),
          normalizedText: normalize(text)
        };
      });
    })
    .catch((error) => {
      console.error("Unable to load the site search index.", error);
      status.textContent = "No se pudo cargar el índice de búsqueda.";
      throw error;
    });

  let matches = [];
  let activeIndex = -1;

  const hideResults = () => {
    results.hidden = true;
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
    activeIndex = -1;
  };

  const setActiveResult = (index) => {
    activeIndex = index;
    const options = results.querySelectorAll(".mv-search__result");
    options.forEach((option, optionIndex) => {
      option.setAttribute("aria-selected", String(optionIndex === activeIndex));
    });
    const activeOption = options[activeIndex];
    if (activeOption) {
      input.setAttribute("aria-activedescendant", activeOption.id);
      activeOption.scrollIntoView({ block: "nearest" });
    } else {
      input.removeAttribute("aria-activedescendant");
    }
  };

  const renderResults = (query) => {
    results.replaceChildren();
    matches = [];
    activeIndex = -1;

    const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
    if (!terms.length) {
      hideResults();
      status.textContent = "";
      return;
    }

    status.textContent = "Buscando...";
    indexPromise.then((items) => {
      const currentTerms = normalize(input.value).trim().split(/\s+/).filter(Boolean);
      if (currentTerms.join(" ") !== terms.join(" ")) return;

      const ranked = items.flatMap((item) => {
        const combined = `${item.normalizedTitle} ${item.normalizedPath} ${item.normalizedText}`;
        if (!terms.every((term) => combined.includes(term))) return [];

        const score = terms.reduce((total, term) => total +
          (item.normalizedTitle.startsWith(term) ? 8 : item.normalizedTitle.includes(term) ? 5 : 0) +
          (item.normalizedPath.includes(term) ? 3 : 0) +
          (item.normalizedText.includes(term) ? 1 : 0), 0);
        return [{ item, score }];
      }).sort((a, b) => b.score - a.score);

      const resultCount = ranked.length;
      matches = ranked.slice(0, 8).map(({ item }) => item);
      const rootUrl = new URL(".", new URL(indexUrl, document.baseURI));

      for (const [resultIndex, item] of matches.entries()) {
        const link = document.createElement("a");
        link.className = "mv-search__result";
        link.id = `mv-search-result-${resultIndex}`;
        link.setAttribute("role", "option");
        link.setAttribute("aria-selected", "false");
        link.href = new URL(item.location, rootUrl).href;

        const title = document.createElement("span");
        title.className = "mv-search__result-title";
        title.textContent = item.title;
        link.append(title);

        if (item.path) {
          const path = document.createElement("span");
          path.className = "mv-search__result-path";
          path.textContent = item.path;
          link.append(path);
        }

        const excerpt = item.text.replace(/\s+/g, " ").trim().slice(0, 180);
        if (excerpt) {
          const description = document.createElement("span");
          description.className = "mv-search__result-excerpt";
          description.textContent = excerpt;
          link.append(description);
        }

        results.append(link);
      }

      results.hidden = false;
      input.setAttribute("aria-expanded", "true");
      status.textContent = resultCount
        ? `Se muestran ${matches.length} de ${resultCount} resultados.`
        : "No se encontraron resultados.";
    }).catch(() => {
      hideResults();
      status.textContent = "No se pudo cargar el índice de búsqueda.";
    });
  };

  input.addEventListener("input", () => {
    clearButton.hidden = !input.value;
    renderResults(input.value);
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" && matches.length) {
      event.preventDefault();
      setActiveResult(Math.min(activeIndex + 1, matches.length - 1));
    } else if (event.key === "ArrowUp" && matches.length) {
      event.preventDefault();
      setActiveResult(Math.max(activeIndex - 1, 0));
    } else if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      results.querySelectorAll(".mv-search__result")[activeIndex]?.click();
    } else if (event.key === "Escape") {
      hideResults();
    }
  });

  input.addEventListener("focus", () => {
    if (input.value) renderResults(input.value);
  });

  clearButton.addEventListener("click", () => {
    input.value = "";
    clearButton.hidden = true;
    hideResults();
    status.textContent = "";
    input.focus();
  });

  document.addEventListener("click", (event) => {
    if (!search.contains(event.target)) hideResults();
  });
})();
