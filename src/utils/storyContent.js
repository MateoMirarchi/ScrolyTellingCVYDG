// Este módulo centraliza el contenido Lorem Ipsum y los fondos gráficos generados.

function buildBackground({ base, accent, detail, label }) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${base}" />
          <stop offset="50%" stop-color="${accent}" />
          <stop offset="100%" stop-color="${detail}" />
        </linearGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#g)" />
      <circle cx="260" cy="220" r="180" fill="rgba(255,255,255,0.16)" />
      <circle cx="1260" cy="210" r="140" fill="rgba(255,255,255,0.11)" />
      <circle cx="1220" cy="780" r="260" fill="rgba(0,0,0,0.24)" />
      <path d="M0 730 C 310 520 580 960 920 710 S 1450 490 1600 670 L1600 1000 L0 1000 Z" fill="rgba(7,8,15,0.32)" />
      <path d="M0 240 C 260 110 540 420 760 270 S 1170 90 1600 240" fill="none" stroke="rgba(255,255,255,0.24)" stroke-width="6" stroke-dasharray="20 18" />
      <text x="90" y="910" fill="rgba(255,255,255,0.68)" font-size="92" font-family="Georgia, serif">${label}</text>
    </svg>
  `.trim()

  return `linear-gradient(135deg, rgba(10, 12, 20, 0.24), rgba(10, 12, 20, 0.62)), url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

export const heroSection = {
  title: 'REprogramando el pensamiento',
  subtitle: 'El impacto de la tecnología en nuestra capacidad de decidir.',
  description: 'Hubo un tiempo en que pensar era algo puramente nuestro, un proceso natural e íntimo. Pero algo cambió. Casi sin darnos cuenta, hemos empezado a compartir esa tarea. Hoy, la gran pregunta no es qué puede hacer la tecnología, sino qué está haciendo con nosotros.',
  cta: 'Comenzar el recorrido',
  video: {
    webm: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
    mp4: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
}

export const storySections = [
  {
    id: 'chapter-01',
    eyebrow: 'Página 2',
    title: 'Recordando cómo era dudar',
    paragraphs: [
      '¿Te acuerdas de lo que se sentía no saber algo? Antes, tener una duda nos obligaba a detenernos. Teníamos que buscar, comparar, y armar la respuesta en nuestra cabeza. Era un pequeño esfuerzo, pero era nuestro esfuerzo.',
      'Hoy, ese proceso casi desapareció. Frente a cualquier pregunta, la reacción es automática: buscar en Google o preguntarle a una IA. Ganamos tiempo, es verdad, pero estamos perdiendo la capacidad de pensar profundamente y aprender a convivir con la incertidumbre.',
    ],
    tagline: 'La consecuencia oculta de la respuesta inmediata.',
    backgroundImage: buildBackground({
      base: '#2a1d4a',
      accent: '#5d3f9a',
      detail: '#8b7fc9',
      label: 'II',
    }),
    accent: '#c4a2ff',
    align: 'left',
    transition: 'fade',
  },
  {
    id: 'chapter-02',
    eyebrow: 'Página 3',
    title: 'Creemos que elegimos nosotros',
    paragraphs: [
      'El problema no es solo que preguntamos, sino a quién le preguntamos. Creemos que las herramientas digitales son neutrales, pero no lo son.',
      'Cada vez que buscas o eliges algo, el sistema aprende. Y decide mostrarte solo lo que sabe que te gusta. Nos encierra en burbujas donde todo confirma lo que ya pensamos. El riesgo real no es volvernos dependientes, sino terminar creyendo que las decisiones que toma un sistema son ideas propias.',
    ],
    tagline: 'Cuando el algoritmo ordena tu realidad.',
    backgroundImage: buildBackground({
      base: '#3d2d5c',
      accent: '#6b4fa0',
      detail: '#9977cc',
      label: 'III',
    }),
    accent: '#d4b8ff',
    align: 'right',
    transition: 'slideUp',
  },
  {
    id: 'chapter-03',
    eyebrow: 'Página 5',
    title: 'Dejar que la máquina decida',
    paragraphs: [
      'Aquí es donde la historia se vuelve complicada. Al principio era cómodo, pero ahora estamos delegando tareas que requieren razonamiento real.',
      'Esta imagen es una advertencia. Muestra qué pasa cuando perdemos el control sobre nuestras propias ideas. Si dejamos que la tecnología haga el trabajo mental difícil, corremos el riesgo de convertirnos en simples supervisores de lo que hace una máquina, olvidando cómo crear y pensar por nosotros mismos.',
    ],
    tagline: 'La pérdida de nuestra autonomía.',
    backgroundImage: buildBackground({
      base: '#0a0c14',
      accent: '#1a3a52',
      detail: '#3d5f7f',
      label: 'V',
    }),
    accent: '#7abaef',
    align: 'left',
    transition: 'scaleIn',
  },
]

export const timelineEntries = [
  {
    year: '2017',
    title: 'El origen en la traducción',
    copy: 'Los investigadores buscaban una forma de mejorar los traductores automáticos. Lograron que la máquina dejara de traducir palabra por palabra y empezara a "leer" la oración completa para entender el contexto. Este avance invisible fue el motor de todo lo que vendría después.',
  },
  {
    year: '2022',
    title: 'El boom en nuestras manos',
    copy: 'Herramientas como ChatGPT o los creadores de imágenes salen a la luz pública. La inteligencia artificial deja de ser un experimento de laboratorio y cualquier persona, desde su casa, puede pedirle a una pantalla que redacte un texto o dibuje algo desde cero.',
  },
  {
    year: '2024',
    title: 'El asistente que ve y escucha',
    copy: 'La tecnología se vuelve una herramienta de trabajo diario. Las plataformas empiezan a incorporar la IA para usos más complejos: resumir videos largos, clonar voces, editar imágenes automáticamente o analizar grandes tablas de datos en segundos.',
  },
  {
    year: '2026',
    title: 'La adopción invisible',
    copy: 'La actualidad. Ya no hace falta entrar a una página especial para usar IA; está metida en nuestros teléfonos, programas de diseño y buscadores de internet. Es un compañero constante que nos ahorra tiempo, pero que también empieza a intervenir en cómo tomamos decisiones y armamos nuestras ideas.',
  },
]

export const additionalSections = [
  {
    id: 'chapter-04',
    eyebrow: 'Página 6',
    title: 'Nos estamos volviendo espectadores',
    paragraphs: [
      'Es una paradoja extraña. Estamos usando todo nuestro ingenio humano para crear máquinas que imiten nuestra forma de razonar. Y mientras ellas se vuelven más inteligentes, nosotros nos volvemos más pasivos.',
      'Al hacernos todo tan fácil y rápido, la tecnología está debilitando nuestra capacidad de concentrarnos y reflexionar a fondo. La máquina se queda con el proceso y nosotros nos quedamos solo con el resultado final, sin entender cómo llegamos ahí.',
    ],
    tagline: 'Una inversión de roles que debería llamarnos la atención.',
    backgroundImage: buildBackground({
      base: '#2a1d4a',
      accent: '#5d3f9a',
      detail: '#8b7fc9',
      label: 'VI',
    }),
    accent: '#c4a2ff',
    align: 'right',
    transition: 'slideDown',
  },
  {
    id: 'chapter-05',
    eyebrow: 'Página 7',
    title: 'Construir nuevas formas de pensar',
    paragraphs: [
      'Llegamos al final de este recorrido, pero es el principio del verdadero trabajo. El futuro no se trata de apagar la tecnología, sino de aprender a usarla sin perdernos en el proceso.',
      'Necesitamos cambiar el modelo. Ya no sirve solo memorizar información. El objetivo hoy, en las escuelas y en la vida, es formar mentes que sepan interpretar, cuestionar y usar estas herramientas como apoyo, pero nunca como un reemplazo de nuestra propia capacidad de pensar.',
    ],
    tagline: 'Adaptarnos, sí, pero sin perder la capacidad crítica.',
    backgroundImage: buildBackground({
      base: '#4a3366',
      accent: '#6b5a99',
      detail: '#9988bb',
      label: 'VII',
    }),
    accent: '#d9c4ff',
    align: 'left',
    transition: 'fadeUp',
  },
]

export const finalSection = {
  title: 'Construir nuevas formas de pensar',
  copy: 'Llegamos al final de este recorrido, pero es el principio del verdadero trabajo. El futuro no se trata de apagar la tecnología, sino de aprender a usarla sin perdernos en el proceso.',
  credits: 'Mateo Mirarchi y Tobías Accorinti',
  backgroundImage: buildBackground({
    base: '#1a1428',
    accent: '#5d3f9a',
    detail: '#8b7fc9',
    label: 'FIN',
  }),
}