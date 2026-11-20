<!--
  GUÍA PARA EDITAR ESTE PERFIL:
  - Para agregar proyectos o writeups de CTF: copiá y pegá la plantilla comentada
    ubicada justo arriba de la grilla en la sección correspondiente (## Proyectos o ## CTFs y Writeups)
    dentro del contenedor <div class="nacho-grid">.
  - Para activar nuevos botones en el Hero (p. ej. HackTheBox o TryHackMe): descomentá el bloque
    correspondiente dentro de <div class="nacho-hero-actions"> y agregá la URL de tu perfil.
-->

<style>
.nacho-hero {
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid var(--mv-border, rgb(255 255 255 / 8%));
}
.nacho-hero-title {
  margin: 0.25rem 0 0.5rem 0;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  color: var(--mv-heading, #c9d1d9);
  line-height: 1.2;
}
.nacho-subtitle {
  display: block;
  margin: 0.5rem 0 0.75rem 0;
  color: var(--mv-cyan, #38bdf8);
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.nacho-location {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 0.85rem;
  color: var(--mv-muted, #8b98a8);
  font-size: 0.85rem;
}
.nacho-location svg {
  color: var(--mv-cyan, #38bdf8);
}
.nacho-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.25rem;
}
.nacho-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.9rem;
  color: var(--mv-text, #c9d1d9) !important;
  background: rgb(56 189 248 / 8%);
  border: 1px solid rgb(56 189 248 / 25%);
  border-radius: 4px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: all 0.2s ease;
}
.nacho-btn:hover {
  color: #fff !important;
  background: rgb(56 189 248 / 18%);
  border-color: var(--mv-cyan, #38bdf8);
  box-shadow: 0 0 12px rgb(56 189 248 / 25%);
  transform: translateY(-1px);
}
.nacho-btn svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
  flex-shrink: 0;
}
.nacho-card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
}
.nacho-btn--sm {
  padding: 0.3rem 0.65rem;
  font-size: 0.75rem;
}
.nacho-timeline {
  position: relative;
  margin: 1.5rem 0 2rem 0.5rem;
  padding-left: 1.5rem;
  border-left: 2px solid rgb(56 189 248 / 25%);
}
.nacho-timeline-item {
  position: relative;
  margin-bottom: 1.5rem;
}
.nacho-timeline-item:last-child {
  margin-bottom: 0;
}
.nacho-timeline-dot {
  position: absolute;
  left: calc(-1.5rem - 5px);
  top: 0.25rem;
  width: 8px;
  height: 8px;
  background: var(--mv-cyan, #38bdf8);
  box-shadow: 0 0 8px rgb(56 189 248 / 70%);
}
.nacho-timeline-date {
  display: inline-block;
  padding: 0.15rem 0.45rem;
  margin-bottom: 0.3rem;
  color: var(--mv-cyan, #38bdf8);
  background: rgb(56 189 248 / 8%);
  border: 1px solid rgb(56 189 248 / 20%);
  border-radius: 3px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  font-weight: 600;
}
.nacho-timeline-title {
  margin: 0 0 0.15rem 0;
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--mv-heading, #c9d1d9);
  line-height: 1.35;
}
.nacho-timeline-inst {
  margin: 0;
  font-size: 0.85rem;
  color: var(--mv-muted, #8b98a8);
}
.nacho-exp-grid {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 1.5rem 0;
}
.nacho-exp-card {
  padding: 1.25rem;
  background: var(--mv-surface, #111827);
  border: 1px solid var(--mv-border, rgb(255 255 255 / 8%));
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
.nacho-exp-card:hover {
  border-color: rgb(56 189 248 / 35%);
  box-shadow: 0 0 16px rgb(56 189 248 / 8%);
}
.nacho-exp-header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
  padding-bottom: 0.65rem;
  border-bottom: 1px solid var(--mv-border, rgb(255 255 255 / 8%));
}
.nacho-exp-title {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--mv-heading, #c9d1d9);
}
.nacho-exp-company {
  color: var(--mv-cyan, #38bdf8);
  font-weight: 600;
}
.nacho-exp-date {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  color: var(--mv-muted, #8b98a8);
}
.nacho-exp-list {
  margin: 0;
  padding-left: 1.25rem;
}
.nacho-exp-list li {
  margin-bottom: 0.45rem;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--mv-text, #c9d1d9);
}
.nacho-exp-list li:last-child {
  margin-bottom: 0;
}
.nacho-skills-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}
.nacho-skill-card {
  padding: 1.15rem;
  background: var(--mv-surface, #111827);
  border: 1px solid var(--mv-border, rgb(255 255 255 / 8%));
}
.nacho-skill-card h3 {
  margin: 0 0 0.75rem 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--mv-heading, #c9d1d9);
  letter-spacing: -0.01em;
}
.nacho-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.25rem 0;
}
.nacho-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 1.25rem;
  background: var(--mv-surface, #111827);
  border: 1px solid var(--mv-border, rgb(255 255 255 / 8%));
  text-decoration: none !important;
  color: inherit !important;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
  overflow-wrap: break-word;
  word-break: break-word;
}
.nacho-card:hover {
  border-color: rgb(56 189 248 / 50%);
  box-shadow: 0 0 20px rgb(56 189 248 / 12%);
  transform: translateY(-2px);
}
.nacho-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}
.nacho-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.5rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 3px;
}
.nacho-tag--project {
  color: #10b981;
  background: rgb(16 185 129 / 10%);
  border: 1px solid rgb(16 185 129 / 30%);
}
.nacho-tag--ctf {
  color: var(--mv-cyan, #38bdf8);
  background: rgb(56 189 248 / 10%);
  border: 1px solid rgb(56 189 248 / 30%);
}
.nacho-tag--muted {
  color: var(--mv-muted, #8b98a8);
  background: rgb(255 255 255 / 5%);
  border: 1px solid rgb(255 255 255 / 15%);
}
.nacho-card-arrow {
  color: var(--mv-cyan, #38bdf8);
  font-size: 1.1rem;
  transition: transform 0.2s ease;
}
.nacho-card:hover .nacho-card-arrow {
  transform: translateX(4px);
}
.nacho-card-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--mv-heading, #c9d1d9);
  line-height: 1.35;
}
.nacho-card-desc {
  margin: 0 0 1rem 0;
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--mv-text, #c9d1d9);
  flex-grow: 1;
}
.nacho-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
}
.nacho-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.15rem 0.45rem;
  color: #7dd3fc;
  background: rgb(56 189 248 / 8%);
  border: 1px solid rgb(56 189 248 / 25%);
  border-radius: 3px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  letter-spacing: 0.03em;
  line-height: 1.4;
}
.nacho-card--empty {
  border: 1px dashed rgb(56 189 248 / 35%);
  background: rgb(17 24 39 / 40%);
  cursor: default;
}
.nacho-card--empty:hover {
  transform: none;
  box-shadow: none;
  border-color: rgb(56 189 248 / 45%);
}
@media (max-width: 640px) {
  .nacho-hero .avatar {
    float: none;
    display: block;
    margin: 0 auto 1.25rem;
    width: 8rem;
    height: 8rem;
  }
  .nacho-hero {
    text-align: center;
  }
  .nacho-location {
    justify-content: center;
  }
  .nacho-hero-actions {
    justify-content: center;
  }
  .nacho-skills-grid,
  .nacho-grid {
    grid-template-columns: 1fr;
  }
  .nacho-exp-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
@media (max-width: 360px) {
  .nacho-card,
  .nacho-exp-card,
  .nacho-skill-card {
    padding: 0.9rem;
  }
  .nacho-btn {
    width: 100%;
    justify-content: center;
  }
  .nacho-timeline {
    padding-left: 1.25rem;
  }
  .nacho-timeline-dot {
    left: calc(-1.25rem - 5px);
  }
}
@media (prefers-reduced-motion: reduce) {
  .nacho-card,
  .nacho-btn,
  .nacho-card-arrow,
  .nacho-exp-card {
    transition: none !important;
    transform: none !important;
  }
}
</style>

<div class="profile-hero nacho-hero">
<img class="avatar" src="../assets/img/nachoide.png" alt="Foto de perfil de Ignacio Vendrell">
<h1 class="nacho-hero-title">Ignacio Vendrell</h1>
<span class="profile-role">[CIBERSEGURIDAD · INFORMÁTICA FORENSE · DESARROLLO]</span>
<span class="nacho-subtitle">Estudiante de Ciberseguridad · Perito Informático Forense (CPCI) · Desarrollador de software</span>
<div class="nacho-location">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Villa Carlos Paz, Córdoba, Argentina</span>
</div>
<p class="profile-bio">Estudiante de la Tecnicatura Universitaria en Ciberseguridad con base en desarrollo de software y soporte técnico. Me especializo en informática forense y redes, y participo del equipo Mimir Vault, donde armamos laboratorios y recursos de ciberseguridad.</p>
<div class="nacho-hero-actions">
<a href="https://www.linkedin.com/in/ignacio-vendrell" class="nacho-btn" target="_blank" rel="noopener">
<svg viewBox="0 0 24 24"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/></svg>
<span>LinkedIn</span>
</a>
<a href="https://github.com/nachove24" class="nacho-btn" target="_blank" rel="noopener">
<svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
<span>GitHub</span>
</a>
<!-- ➕ DESCOMENTÁ PARA AGREGAR HACKTHEBOX O TRYHACKME:
<a href="https://app.hackthebox.com/users/TU_ID" class="nacho-btn" target="_blank" rel="noopener">
<svg viewBox="0 0 24 24"><path d="M12 1L3 6v12l9 5 9-5V6L12 1zm0 2.18l7 3.89v7.86l-7 3.89-7-3.89V7.07l7-3.89z"/></svg>
<span>HackTheBox</span>
</a>
<a href="https://tryhackme.com/p/TU_USUARIO" class="nacho-btn" target="_blank" rel="noopener">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z"/></svg>
<span>TryHackMe</span>
</a>
-->
</div>
</div>

## Formación

<div class="nacho-timeline">
<div class="nacho-timeline-item">
<span class="nacho-timeline-dot"></span>
<span class="nacho-timeline-date">2026 – Actualidad</span>
<h3 class="nacho-timeline-title">Tecnicatura Universitaria en Ciberseguridad</h3>
<p class="nacho-timeline-inst">Universidad Provincial de Córdoba</p>
</div>
<div class="nacho-timeline-item">
<span class="nacho-timeline-dot"></span>
<span class="nacho-timeline-date">2026</span>
<h3 class="nacho-timeline-title">Perito Informático Forense</h3>
<p class="nacho-timeline-inst">CPCI (Consejo Profesional de Ciencias Informáticas)</p>
</div>
<div class="nacho-timeline-item">
<span class="nacho-timeline-dot"></span>
<span class="nacho-timeline-date">2026</span>
<h3 class="nacho-timeline-title">Network Support and Security</h3>
<p class="nacho-timeline-inst">Cisco Networking Academy</p>
</div>
<div class="nacho-timeline-item">
<span class="nacho-timeline-dot"></span>
<span class="nacho-timeline-date">2026</span>
<h3 class="nacho-timeline-title">Programación y Reparación de Celulares</h3>
<p class="nacho-timeline-inst">UTN (Universidad Tecnológica Nacional)</p>
</div>
<div class="nacho-timeline-item">
<span class="nacho-timeline-dot"></span>
<span class="nacho-timeline-date">2024</span>
<h3 class="nacho-timeline-title">Técnico Superior en Desarrollo de Software</h3>
<p class="nacho-timeline-inst">Instituto Superior N°46 "Domingo Guzmán Silva"</p>
</div>
<div class="nacho-timeline-item">
<span class="nacho-timeline-dot"></span>
<span class="nacho-timeline-date">2019</span>
<h3 class="nacho-timeline-title">Bachiller en Humanidades</h3>
<p class="nacho-timeline-inst">E.E.S. Orientada N°332 "Domingo Faustino Sarmiento"</p>
</div>
</div>

## Experiencia

<div class="nacho-exp-grid">
<article class="nacho-exp-card">
<div class="nacho-exp-header">
<h3 class="nacho-exp-title">Asistente Técnico Informático — <span class="nacho-exp-company">SIDECOM (Santa Fe)</span></h3>
<span class="nacho-exp-date">2024 – 2025</span>
</div>
<ul class="nacho-exp-list">
<li>Diagnóstico y resolución de fallas de hardware y software, reduciendo tiempos de atención.</li>
<li>Soporte técnico presencial de 1.° y 2.° nivel: relevamiento de incidentes y soluciones.</li>
<li>Instalación y configuración de sistemas operativos y software; mantenimiento preventivo.</li>
<li>Asistencia en redes y conectividad: verificación de configuraciones y reporte de fallas.</li>
<li>Asesoramiento a clientes en compra de tecnología; control de stock e inventario.</li>
</ul>
</article>
<article class="nacho-exp-card">
<div class="nacho-exp-header">
<h3 class="nacho-exp-title">Desarrollador de Software y Soporte Técnico <span class="nacho-exp-company">Independiente</span></h3>
<span class="nacho-exp-date">2023 – Actualidad</span>
</div>
<ul class="nacho-exp-list">
<li>Desarrollo de aplicaciones a medida para resolver necesidades concretas de usuarios.</li>
<li>Soporte técnico a clientes particulares: mantenimiento, diagnóstico y reparación de equipos.</li>
</ul>
</article>
</div>

## Habilidades

<div class="nacho-skills-grid">
<div class="nacho-skill-card">
<h3>Programación y datos</h3>
<div class="tech-pills">
<span class="tech-pill">Java</span>
<span class="tech-pill">Python</span>
<span class="tech-pill">PHP</span>
<span class="tech-pill">MySQL</span>
<span class="tech-pill">PowerShell</span>
</div>
</div>
<div class="nacho-skill-card">
<h3>Herramientas</h3>
<div class="tech-pills">
<span class="tech-pill">Git / GitHub</span>
<span class="tech-pill">Microsoft Office / Office 365</span>
<span class="tech-pill">TeamViewer</span>
</div>
</div>
<div class="nacho-skill-card">
<h3>Soporte y redes</h3>
<div class="tech-pills">
<span class="tech-pill">Diagnóstico HW &amp; SW</span>
<span class="tech-pill">Instalación de SO</span>
<span class="tech-pill">Redes</span>
<span class="tech-pill">Mantenimiento preventivo</span>
</div>
</div>
<div class="nacho-skill-card">
<h3>Idiomas</h3>
<div class="tech-pills">
<span class="tech-pill">Inglés intermedio (B1)</span>
<span class="tech-pill">Italiano básico</span>
</div>
</div>
</div>

## Proyectos

<!-- ➕ NUEVO PROYECTO: copiá este bloque dentro de <div class="nacho-grid"> y completá los campos
<a href="URL_DEL_PROYECTO" class="nacho-card" target="_blank" rel="noopener">
<div class="nacho-card-header">
<span class="nacho-tag nacho-tag--project">Proyecto</span>
<span class="nacho-card-arrow">→</span>
</div>
<p class="nacho-card-title">NOMBRE DEL PROYECTO</p>
<p class="nacho-card-desc">Descripción corta del proyecto, tecnologías y objetivo.</p>
<div class="nacho-chips">
<span class="nacho-chip">Tecnología 1</span>
<span class="nacho-chip">Tecnología 2</span>
</div>
</a>
-->

<div class="nacho-grid">
<a href="https://github.com/PELUC4S/Mimir-Vault" class="nacho-card" target="_blank" rel="noopener">
<div class="nacho-card-header">
<span class="nacho-tag nacho-tag--project">Proyecto</span>
<span class="nacho-card-arrow">→</span>
</div>
<p class="nacho-card-title">Mimir Vault</p>
<p class="nacho-card-desc">Portal colaborativo de ciberseguridad (MkDocs Material + GitHub Pages) con laboratorios SOC, writeups y recursos del equipo.</p>
<div class="nacho-chips">
<span class="nacho-chip">MkDocs</span>
<span class="nacho-chip">GitHub Actions</span>
<span class="nacho-chip">Markdown</span>
</div>
</a>

<div class="nacho-card">
<div class="nacho-card-header">
<span class="nacho-tag nacho-tag--project">Proyecto · Hackathon</span>
<span class="nacho-card-arrow">↗</span>
</div>
<p class="nacho-card-title">FieldShift — NASA Space Apps Challenge</p>
<p class="nacho-card-desc">Solución desarrollada para el desafío de la NASA para la adaptación agrícola mediante datos satelitales (NASA POWER API) y backend en FastAPI, implementada con enfoque DevSecOps y auditoría de seguridad en IA.</p>
<div class="nacho-card-actions">
<a href="https://github.com/PELUC4S/FieldShift" class="nacho-btn nacho-btn--sm" target="_blank" rel="noopener">
<svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
<span>GitHub</span>
</a>
<a href="https://fieldshift-api.onrender.com/" class="nacho-btn nacho-btn--sm" target="_blank" rel="noopener">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
<span>Demo / API</span>
</a>
</div>
<div class="nacho-chips">
<span class="nacho-chip">FastAPI</span>
<span class="nacho-chip">Python</span>
<span class="nacho-chip">NASA POWER API</span>
<span class="nacho-chip">DevSecOps</span>
<span class="nacho-chip">Render</span>
</div>
</div>
</div>

## CTFs y Writeups

<!-- ➕ NUEVO CTF: copiá este bloque dentro de <div class="nacho-grid"> y completá los campos
<a href="URL_DEL_WRITEUP" class="nacho-card" target="_blank" rel="noopener">
<div class="nacho-card-header">
<span class="nacho-tag nacho-tag--ctf">CTF</span>
<span class="nacho-card-arrow">→</span>
</div>
<p class="nacho-card-title">NOMBRE · Plataforma (HTB / THM / CTFd)</p>
<p class="nacho-card-desc">Qué se explotó y cómo, en una o dos líneas.</p>
<div class="nacho-chips">
<span class="nacho-chip">Categoría</span>
<span class="nacho-chip">Dificultad</span>
</div>
</a>
-->

<div class="nacho-grid">
<div class="nacho-card nacho-card--empty">
<div class="nacho-card-header">
<span class="nacho-tag nacho-tag--muted">Próximamente</span>
</div>
<p class="nacho-card-title">Próximamente: acá van mis writeups de CTF</p>
<p class="nacho-card-desc">Espacio reservado para próximas resoluciones de máquinas y desafíos en plataformas como HackTheBox, TryHackMe y CTFs de la comunidad.</p>
</div>
</div>
