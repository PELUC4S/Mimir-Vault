<div class="profile-hero" markdown="1">

# Pedro

<span class="profile-role">[CYBER RISK / BLUE TEAM]</span>

<p class="profile-bio">Analista en Ciberseguridad orientado a la defensa activa, gobernanza, normativas y gestión de riesgos informáticos (Cyber Risk Insurance). Interesado en la convergencia entre el análisis técnico de amenazas y la responsabilidad legal.</p>

</div>

## Perfil / Áreas de Interés

<div class="profile-grid">
  <article class="profile-card">
    <span class="badge">GOVERNANCE / RISK</span>
    <h3>Cyber Risk y aspectos legales</h3>
    <p>Transferencia de riesgo, pólizas de ciberriesgo, cumplimiento normativo y marcos de gobernanza (GRC).</p>
  </article>
  <article class="profile-card">
    <span class="badge">DEFENSIVE OPERATIONS</span>
    <h3>Blue Team y análisis técnico</h3>
    <p>Respuesta a incidentes, análisis forense de tráfico de red y detección de malware y ransomware.</p>
  </article>
  <article class="profile-card">
    <span class="badge">OSINT / HARDWARE</span>
    <h3>Investigación y hardware</h3>
    <p>OSINT (Inteligencia de Fuentes Abiertas) y electrónica general aplicada a la seguridad.</p>
  </article>
</div>

## Laboratorios / Casos Prácticos

<div class="lab-grid">
  <article class="lab-card">
    <div class="lab-header">
      <span class="badge">DFIR / Malware</span>
      <h4>Bluesky Ransomware — Detección y Forense</h4>
    </div>
    <p class="lab-goal"><strong>Objetivo:</strong> Investigación de un incidente provocado por el ransomware Bluesky, analizando evidencias de ejecución, mecanismos de persistencia y artefactos en el sistema impactado.</p>
    <div class="lab-tags">
      <span class="lab-tag">Análisis de logs</span>
      <span class="lab-tag">IoCs</span>
      <span class="lab-tag">Cifrado</span>
      <span class="lab-tag">CyberDefenders</span>
    </div>
  </article>

  <article class="lab-card">
    <div class="lab-header">
      <span class="badge">Network Forensics / Wireshark</span>
      <h4>Packet Maze — Análisis Forense de Red</h4>
    </div>
    <p class="lab-goal"><strong>Objetivo:</strong> Inspección de capturas de tráfico (<code>.pcap</code>) para reconstruir comunicaciones maliciosas, extraer payloads y detectar exfiltración de datos.</p>
    <div class="lab-tags">
      <span class="lab-tag">TCP / UDP</span>
      <span class="lab-tag">HTTP / DNS</span>
      <span class="lab-tag">Wireshark</span>
      <span class="lab-tag">CyberDefenders</span>
    </div>
  </article>

  <article class="lab-card lab-card--wide">
    <div class="lab-header">
      <span class="badge">Threat Modeling / TryHackMe</span>
      <h4>Simple CTF — Análisis y mapeo MITRE ATT&amp;CK</h4>
    </div>
    <p class="lab-goal"><strong>Objetivo:</strong> Análisis controlado de la cadena de ataque con MITRE ATT&amp;CK para comprender las tácticas y técnicas desde una perspectiva defensiva.</p>
    <div class="lab-tags">
      <span class="lab-tag">MITRE ATT&amp;CK</span>
      <span class="lab-tag">Threat modeling</span>
      <span class="lab-tag">Análisis defensivo</span>
    </div>

    <h5>Flujo del ataque según MITRE ATT&amp;CK</h5>
    <div class="table-scroll">
      <table>
        <thead>
          <tr>
            <th>Fase del ataque</th>
            <th>Táctica (MITRE)</th>
            <th>Técnica ID</th>
            <th>Descripción del evento / herramienta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Reconocimiento</strong></td>
            <td>Reconnaissance</td>
            <td><code>T1595</code></td>
            <td>Escaneo de puertos y servicios con Nmap (FTP, HTTP, SSH).</td>
          </tr>
          <tr>
            <td><strong>Búsqueda de nombres</strong></td>
            <td>Reconnaissance</td>
            <td><code>T1589.002</code></td>
            <td>Obtención del nombre de usuario objetivo (mitch).</td>
          </tr>
          <tr>
            <td><strong>Enumeración web</strong></td>
            <td>Reconnaissance</td>
            <td><code>T1595.003</code></td>
            <td>Fuzzing con Gobuster para descubrir el directorio /simple (CMS Made Simple).</td>
          </tr>
          <tr>
            <td><strong>Acceso inicial web</strong></td>
            <td>Initial Access</td>
            <td><code>T1190</code></td>
            <td>Explotación de una vulnerabilidad de SQL injection (CVE-2019-9053) en el CMS.</td>
          </tr>
          <tr>
            <td><strong>Acceso a credenciales</strong></td>
            <td>Credential Access</td>
            <td><code>T1110.002</code></td>
            <td>Uso de Hashcat para obtener la contraseña del hash extraído de la base de datos.</td>
          </tr>
          <tr>
            <td><strong>Acceso vía SSH</strong></td>
            <td>Lateral Movement</td>
            <td><code>T1021.004</code></td>
            <td>Conexión remota por SSH con las credenciales obtenidas (mitch).</td>
          </tr>
          <tr>
            <td><strong>Descubrimiento del sistema</strong></td>
            <td>Discovery</td>
            <td><code>T1082</code></td>
            <td>Enumeración local del sistema y descubrimiento del usuario sunbath.</td>
          </tr>
          <tr>
            <td><strong>Escalado de privilegios</strong></td>
            <td>Privilege Escalation</td>
            <td><code>T1548.003</code></td>
            <td>Abuso de sudo y sudo caching mediante la ejecución de vim con privilegios root.</td>
          </tr>
          <tr>
            <td><strong>Shell root</strong></td>
            <td>Execution</td>
            <td><code>T1059.004</code></td>
            <td>Inicio de una shell interactiva como root para acceder a root.txt.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <img src="../../assets/img/SIMPLE-CTFpedro.png" alt="Flujo MITRE ATT&amp;CK del laboratorio Simple CTF">
  </article>
</div>

## Herramientas / Entornos

- **Análisis y detección:** Wireshark, CyberChef y herramientas OSINT.
- **Marcos y metodologías:** MITRE ATT&amp;CK y gestión de riesgos cibernéticos.
