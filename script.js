
const cronograma = [
  {
    semana: 1,
    fecha: '12-Mar-26',
    modulo: 'M1 - Fundamentos',
    tema: 'Presentación. ¿Qué significa diseñar software profesional? Modelado simple en Java puro.',
    categoria: '—',
    patrones: '—',
    capas: 'Dominio (sin capas formales)',
    arquitectura: 'Sin capas',
    objetivo: 'Comprender qué es el dominio',
    tipo: 'Teórico–Práctica',
    actividades: 'Configurar entorno (Java 21, Git). Crear repo. Modelar caso simple y dibujar UML básico.'
  },
  {
    semana: 2,
    fecha: '19-Mar-26',
    modulo: 'M1 - Fundamentos',
    tema: 'Construcción del Modelo de Dominio: clases, relaciones y responsabilidades claras.',
    categoria: '—',
    patrones: '—',
    capas: 'Dominio (modelo + reglas)',
    arquitectura: 'Sin capas',
    objetivo: 'Pensamiento orientado a objetos',
    tipo: 'Teórico–Práctica',
    actividades: 'Modelar dominio Distribuidora (Cliente/Producto/Pedido). Escribir 5 reglas de negocio. Mini-demo en consola.'
  },
  {
    semana: 3,
    fecha: '26-Mar-26',
    modulo: 'M2 - Calidad',
    tema: 'Testing profesional (JUnit, TDD) y persistencia básica con SQLite.',
    categoria: 'Creacional',
    patrones: 'Singleton (gestión de recursos: conexión/EMF)',
    capas: 'Dominio + Infra (DAO SQLite)',
    arquitectura: 'Sin capas (Maven + SQLite)',
    objetivo: 'Calidad desde el inicio',
    tipo: 'Teórico–Práctica',
    actividades: 'Crear proyecto Maven. Implementar DAO SQLite (1–2 tablas). Escribir tests JUnit + (opcional) JaCoCo.'
  },
  {
    semana: 4,
    fecha: '2-Apr-26',
    modulo: 'M2 - Calidad',
    tema: 'Aplicación práctica de SOLID sobre el dominio. Refactor guiado.',
    categoria: 'Comportamiento',
    patrones: 'Strategy + Template Method (refactor y reglas enchufables)',
    capas: 'Dominio + Aplicación (casos de uso) + Infra',
    arquitectura: 'Con capas (modularización interna)',
    objetivo: 'Diseño mantenible',
    tipo: 'Teórico–Práctica',
    actividades: 'Refactor SOLID: extraer validaciones/estrategias. Implementar Strategy/Template en reglas. Tests de regresión.'
  },
  {
    semana: 5,
    fecha: '9-Apr-26',
    modulo: 'M3 - Patrones Estructurales',
    tema: 'Composite: estructuras jerárquicas y recursividad en objetos.',
    categoria: 'Estructural',
    patrones: 'Composite',
    capas: 'Dominio (modelado jerárquico)',
    arquitectura: 'Con capas',
    objetivo: 'Modelado complejo',
    tipo: 'Teórico–Práctica',
    actividades: 'Implementar Composite para catálogo jerárquico (categorías/productos). Reporte recursivo de stock. Test recursivo.'
  },
  {
    semana: 6,
    fecha: '16-Apr-26',
    modulo: 'M3 - Patrones Estructurales',
    tema: 'Decorator: extensión dinámica del comportamiento sin modificar clases base.',
    categoria: 'Estructural',
    patrones: 'Decorator',
    capas: 'Dominio (extensión dinámica)',
    arquitectura: 'Con capas',
    objetivo: 'Diseño flexible',
    tipo: 'Teórico–Práctica',
    actividades: 'Implementar Decorator para total (IVA/desc/recargo). Comparar vs if-else. Tests de combinaciones.'
  },
  {
    semana: 7,
    fecha: '23-Apr-26',
    modulo: 'M3 - Integración',
    tema: 'Integración de patrones. Consolidación y mejora del modelo.',
    categoria: 'Estructural',
    patrones: 'Composite + Decorator (integración)',
    capas: 'Dominio + Infra (persistencia) + Tests',
    arquitectura: 'Con capas',
    objetivo: 'Pensamiento sistémico',
    tipo: 'Teórico–Práctica',
    actividades: 'Integrar: Composite + Decorator + persistencia mínima. Crear 1 test integrador. Generar evidencia JaCoCo.'
  },
  {
    semana: 8,
    fecha: '30-Apr-26',
    modulo: 'Hito 1',
    tema: 'Primer Parcial: diseño + código + tests.',
    categoria: '— (Evaluación)',
    patrones: '—',
    capas: 'Integración (evaluación)',
    arquitectura: '—',
    objetivo: 'Integración de saberes',
    tipo: '—',
    actividades: 'Parcial 1: entrega en Git con tag. Defensa breve. README reproducible + tests pasando.'
  },
  {
    semana: 9,
    fecha: '7-May-26',
    modulo: 'M4 - Arquitectura',
    tema: 'Introducción a arquitectura en capas. Exponer el dominio con Spring Boot.',
    categoria: '— (Arquitectura)',
    patrones: '—',
    capas: 'API + Aplicación + Dominio + Infra (Capas)',
    arquitectura: 'Monolito modular (capas) — Spring Boot',
    objetivo: 'Separación de responsabilidades',
    tipo: 'Teórico–Práctica',
    actividades: 'Spring Boot + capas: Controller/Service/Repo. CRUD mínimo (clientes/productos). Manejo de errores (400/404).'
  },
  {
    semana: 10,
    fecha: '14-May-26',
    modulo: 'M4 - Arquitectura',
    tema: 'Patrones de comportamiento: Command y Observer aplicados.',
    categoria: 'Comportamiento',
    patrones: 'Command + Observer',
    capas: 'API + Aplicación (Commands) + Dominio + Infra',
    arquitectura: 'Monolito modular (capas)',
    objetivo: 'Desacoplamiento',
    tipo: 'Teórico–Práctica',
    actividades: 'Implementar Command (crear pedido) + Observer (auditoría). Separar lógica del controller. Test del flujo.'
  },
  {
    semana: 11,
    fecha: '21-May-26',
    modulo: 'M5 - Eventos',
    tema: 'Eventos internos y mensajería dentro del monolito.',
    categoria: 'Comportamiento',
    patrones: 'Observer (eventos internos)',
    capas: 'API + Aplicación + Dominio + Infra + Eventos',
    arquitectura: 'Monolito modular con eventos',
    objetivo: 'Diseño orientado a eventos',
    tipo: 'Teórico–Práctica',
    actividades: 'Eventos internos: publicar/escuchar. Agregar logs/trazas. Test de evento (publicación→auditoría).'
  },
  {
    semana: 12,
    fecha: '28-May-26',
    modulo: 'M6 - Microservicios',
    tema: 'Separación en servicios independientes. Bounded Context.',
    categoria: '— (Arquitectura/DDD)',
    patrones: '—',
    capas: 'Servicios separados: API + App + Dominio + Infra (por servicio)',
    arquitectura: 'Microservicios (2 servicios)',
    objetivo: 'Escalabilidad',
    tipo: 'Teórico–Práctica',
    actividades: 'Separar en 2 servicios. Definir contrato (HTTP). Ejecutar ambos. Prueba end-to-end documentada.'
  },
  {
    semana: 13,
    fecha: '4-Jun-26',
    modulo: 'M6 - Microservicios',
    tema: 'RabbitMQ y comunicación entre servicios.',
    categoria: 'Comportamiento',
    patrones: 'Observer distribuido (Pub/Sub)',
    capas: 'Servicios + Mensajería (Publisher/Consumer)',
    arquitectura: 'Microservicios + RabbitMQ',
    objetivo: 'Mensajería profesional',
    tipo: 'Teórico–Práctica',
    actividades: 'Levantar RabbitMQ con Docker. Pub/Sub: pedidos publica, catálogo consume. Evidencia: logs + endpoint debug.'
  },
  {
    semana: 14,
    fecha: '11-Jun-26',
    modulo: 'Hito 2',
    tema: 'Segundo Parcial: integración distribuida.',
    categoria: '— (Evaluación)',
    patrones: '—',
    capas: 'Integración distribuida (evaluación)',
    arquitectura: '—',
    objetivo: 'Arquitectura real',
    tipo: '—',
    actividades: 'Parcial 2: integración distribuida. README + pasos. Demostración de mensajes y trazabilidad.'
  },
  {
    semana: 15,
    fecha: '18-Jun-26',
    modulo: 'M7 - Consolidación',
    tema: 'Repaso estratégico. Trade-offs arquitectónicos.',
    categoria: '— (Integración)',
    patrones: '—',
    capas: 'Endurecimiento: logs, errores, trade-offs',
    arquitectura: 'Microservicios (hardening)',
    objetivo: 'Criterio profesional',
    tipo: 'Teórico–Práctica',
    actividades: 'Hardening: manejo de errores, reintentos conceptuales, idempotencia (discusión). Checklist de mejoras.'
  },
  {
    semana: 16,
    fecha: '25-Jun-26',
    modulo: 'Cierre',
    tema: 'Devoluciones finales y visión profesional del desarrollo de software.',
    categoria: '—',
    patrones: '—',
    capas: 'Cierre y retroalimentación',
    arquitectura: '—',
    objetivo: 'Cierre reflexivo',
    tipo: '—',
    actividades: 'Devoluciones finales, integración del recorrido y proyección profesional.'
  }
];

const reposPorSemana = {
  1: 'https://drive.google.com/drive/folders/1aqY5iG8VLxrqyAC6qP9o02UeTVTrkO7Y?usp=sharing',
  2: 'https://drive.google.com/drive/folders/12s_XpRArnhbkE38x0NjEmH8DSbn9fZ7d?usp=sharing',
  3: 'https://drive.google.com/drive/folders/137SxYqybp_vrM8kNNXKfQGpbVdW1KSSv?usp=sharing',
  4: 'https://drive.google.com/drive/folders/1mnguiLzDrQGLUxKw37A1w4CgVyrk2wjs?usp=sharing',
  5: 'https://drive.google.com/drive/folders/1J1tcVh4tM_Mb7tKnVcOQO13SyRkhaSWK?usp=sharing',
  6: 'https://drive.google.com/drive/folders/1munGABavj_WSppKAZifySvE1MfbBDTM4?usp=sharing',
  7: 'https://drive.google.com/drive/folders/1m-YeHWSW7jJKfErL6UmRa-276OybLQ0_?usp=sharing',
  8: 'https://drive.google.com/drive/folders/1H1r8FoQFd9v46vaaKn2Q5vM3T3FI-Tju?usp=sharing',
  9: 'https://drive.google.com/drive/folders/1IndGjhi85nOrpD7ZYZ2w88nEbEiKqgRl?usp=sharing',
  10: 'https://drive.google.com/drive/folders/1QnzFwDcXoRF99ATZqVpVx0uhb6BkExrD?usp=sharing',
  11: 'https://drive.google.com/drive/folders/1opLt49_qCaIO2lmICQ0Z_9fyoU-EQnqn?usp=sharing',
  12: 'https://drive.google.com/drive/folders/1HN2B3mFP8N6_UQuFpBUhKtHBWqL8vELT?usp=sharing',
  13: 'https://drive.google.com/drive/folders/116DxO3MZ0H_WbJdChYryZShOW8TPOQxi?usp=sharing',
  14: 'https://drive.google.com/drive/folders/1BOIRa02RSTN3flfLvCUWUtrwx2fKxIRE?usp=sharing',
  15: 'https://drive.google.com/drive/folders/1meijpnayyMpvYrhiOxMsy_SzmPuusqik?usp=sharing',
};


const moduleColors = {
  'M1 - Fundamentos': '#6d87b6',
  'M2 - Calidad': '#62a880',
  'M3 - Patrones Estructurales': '#8a78b6',
  'M3 - Integración': '#8a78b6',
  'Hito 1': '#cf8f5d',
  'M4 - Arquitectura': '#b6c578',
  'M5 - Eventos': '#5aa4c4',
  'M6 - Microservicios': '#8fabc6',
  'Hito 2': '#cf8f5d',
  'M7 - Consolidación': '#7686a7',
  'Cierre': '#8a8f98'
};

const cardsView = document.getElementById('cardsView');
const tableBody = document.getElementById('tableBody');
const stats = document.getElementById('stats');
const legend = document.getElementById('legend');
const searchInput = document.getElementById('searchInput');
const tableView = document.getElementById('tableView');
const toggleViewBtn = document.getElementById('toggleView');
const tabs = [...document.querySelectorAll('.tab')];

function uniqueModules(data) {
  return [...new Set(data.map(item => item.modulo))];
}

function renderStats() {
  const evaluaciones = cronograma.filter(item => item.modulo.includes('Hito')).length;
  const conPatrones = cronograma.filter(item => item.patrones !== '—').length;
  const modulos = uniqueModules(cronograma).length;
  const items = [
    { value: cronograma.length, label: 'Semanas planificadas' },
    { value: (cronograma.length -3), label: 'Semanas Teórica/practica' },
    { value: conPatrones, label: 'Clases con patrones GoF' },
    { value: modulos, label: 'Módulos' },
    { value: evaluaciones, label: 'Hitos evaluativos' }
  ];

  stats.innerHTML = items.map(item => `
    <article class="stat">
      <strong>${item.value}</strong>
      <span>${item.label}</span>
    </article>
  `).join('');
}

function renderLegend() {
  legend.innerHTML = uniqueModules(cronograma).map(modulo => `
    <li>
      <span class="legend__dot" style="background:${moduleColors[modulo] || '#1d4f91'}"></span>
      <span>${modulo}</span>
    </li>
  `).join('');
}

function createCard(item) {
  const repoUrl = reposPorSemana[item.semana];
  return `
    <article class="card" style="--module-color:${moduleColors[item.modulo] || '#1d4f91'}">
      <div class="card__top">
        <div class="card__week">
          <strong>Semana ${item.semana}</strong>
          <span class="card__date">${item.fecha}</span>
        </div>
        <span class="pill">${item.modulo}</span>
      </div>

      <div class="meta">
        <div class="meta__row">
          <span class="meta__label">Tema</span>
          <h3>${item.tema}</h3>
        </div>

        <div class="card__chips">
          <span class="chip">${item.categoria}</span>
          <span class="chip">${item.tipo}</span>
          <span class="chip">${item.arquitectura}</span>
        </div>

        <div class="meta__row">
          <span class="meta__label">Patrón(es)</span>
          <p class="meta__value">${item.patrones}</p>
        </div>

        <div class="meta__row">
          <span class="meta__label">Capas trabajadas</span>
          <p class="meta__value">${item.capas}</p>
        </div>

        <div class="meta__row">
          <span class="meta__label">Objetivo pedagógico</span>
          <p class="meta__value">${item.objetivo}</p>
        </div>

        <div class="meta__row">
          <span class="meta__label">Actividades esperadas</span>
          <p class="meta__value">${item.actividades}</p>
        </div>

        <div class="card__actions">
          ${repoUrl ? '<a class="btn-repo" href="' + repoUrl + '" target="_blank" rel="noopener noreferrer">Ir a repo</a>' : ''}
        </div>
      </div>
    </article>
  `;
}

function createRow(item) {
  return `
    <tr>
      <td>${item.semana}</td>
      <td>${item.fecha}</td>
      <td>${item.modulo}</td>
      <td>${item.tema}</td>
      <td>${item.patrones}</td>
      <td>${item.arquitectura}</td>
      <td>${item.objetivo}</td>
      <td>${item.tipo}</td>
    </tr>
  `;
}

function filterData(term) {
  const q = term.trim().toLowerCase();
  if (!q) return cronograma;

  return cronograma.filter(item => Object.values(item).some(value =>
    String(value).toLowerCase().includes(q)
  ));
}

function render(data) {
  if (!data.length) {
    cardsView.innerHTML = '<div class="empty">No se encontraron resultados para la búsqueda realizada.</div>';
    tableBody.innerHTML = '<tr><td colspan="8">No se encontraron resultados.</td></tr>';
    return;
  }

  cardsView.innerHTML = data.map(createCard).join('');
  tableBody.innerHTML = data.map(createRow).join('');
}

function setView(view) {
  const isCards = view === 'cards';
  cardsView.classList.toggle('hidden', !isCards);
  tableView.classList.toggle('hidden', isCards);
  tabs.forEach(tab => tab.classList.toggle('is-active', tab.dataset.view === view));
  toggleViewBtn.textContent = isCards ? 'Cambiar a tabla' : 'Cambiar a tarjetas';
}

searchInput.addEventListener('input', e => render(filterData(e.target.value)));

tabs.forEach(tab => tab.addEventListener('click', () => setView(tab.dataset.view)));

toggleViewBtn.addEventListener('click', () => {
  const currentCards = !cardsView.classList.contains('hidden');
  setView(currentCards ? 'table' : 'cards');
});

renderStats();
renderLegend();
render(cronograma);
setView('cards');
