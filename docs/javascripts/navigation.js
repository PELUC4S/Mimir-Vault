(() => {
  const navigation = document.querySelector(".md-tabs");
  if (!navigation) return;

  const dropdowns = [...navigation.querySelectorAll(".md-tabs__dropdown")];
  if (typeof HTMLElement.prototype.showPopover !== "function") {
    navigation.classList.add("mv-tabs--no-popover");
    return;
  }

  const positionMenu = (details) => {
    const summary = details.querySelector("summary");
    const menu = details.querySelector(".md-tabs__submenu");
    if (!summary || !menu?.matches(":popover-open")) return;

    const summaryRect = summary.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();
    const maxLeft = innerWidth - menuRect.width - 12;
    const maxTop = innerHeight - menuRect.height - 12;
    const left = Math.max(12, Math.min(summaryRect.left, maxLeft));
    const top = Math.max(12, Math.min(navigation.getBoundingClientRect().bottom + 6, maxTop));

    menu.style.left = `${left}px`;
    menu.style.top = `${top}px`;
  };

  for (const details of dropdowns) {
    const menu = details.querySelector(".md-tabs__submenu");
    if (!menu) continue;

    details.addEventListener("toggle", () => {
      if (details.open) {
        if (!menu.matches(":popover-open")) menu.showPopover();
        positionMenu(details);
      } else if (menu.matches(":popover-open")) {
        menu.hidePopover();
      }
    });

    menu.addEventListener("toggle", () => {
      if (!menu.matches(":popover-open") && details.open) details.open = false;
    });
  }

  const repositionOpenMenus = () => {
    for (const details of dropdowns) positionMenu(details);
  };

  window.addEventListener("resize", repositionOpenMenus);
  window.addEventListener("scroll", repositionOpenMenus, true);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      for (const details of dropdowns) {
        if (details.open) details.open = false;
      }
    }
  });
})();
