// Este módulo centraliza el contenido Lorem Ipsum y los fondos gráficos generados.
import heroImg from '../assets/IMAGEN PORTADA.jpeg'
import synopsisVideo from '../assets/VIDEO ROBOT SINOPSIS.mp4'
import page2Img from '../assets/CAPITULO 1.jpeg'
import page3Img from '../assets/CAPITULO 2.jpeg'
import chapter3Img from '../assets/CAPITULO 3.jpeg'
import chapter4Video from '../assets/VIDEO CAPITULO 4.mp4'
import chapter5Img from '../assets/CAPITULO 5.png'
import chapterFinalImg from '../assets/CAPITULO FINAL.jpeg'

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
  subtitle: 'El impacto de la Inteligencia Artificial en la vida humana.',
  description: 'Hubo un tiempo en que pensar era algo puramente nuestro, un proceso natural e íntimo. Pero algo cambió. Casi sin darnos cuenta, hemos empezado a compartir esa tarea. Hoy, la gran pregunta no es qué puede hacer la tecnología, sino qué está haciendo con nosotros.',
  cta: 'Comenzar el recorrido',
  video: {
    webm: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
    mp4: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
}

export const storySections = [
  {
    id: 'chapter-sinopsis',
    title: 'Sinopsis',
    paragraphs: [
      'En un mundo donde la Inteligencia Artificial se ha vuelto omnipresente, enfrentamos una pregunta crucial: ¿estamos utilizando la tecnología como herramienta para potenciar nuestras capacidades, o nos estamos permitiendo que reprograme la forma en que pensamos?',
      'Este recorrido te invita a reflexionar sobre cómo la IA se ha infiltrado cada rincón de nuestras vidas, modificando nuestros hábitos de búsqueda, nuestras decisiones y nuestra capacidad de concentración. A través de cinco momentos clave, exploraremos la delgada línea entre la delegación y la amplificación, entre perder nuestro pensamiento y potenciarlo.',
      'La pregunta no es si la IA es buena o mala. La pregunta verdadera es: ¿Qué estamos haciendo nosotros con ella? ¿O qué está haciendo ella con nosotros?'
    ],
    tagline: 'Un viaje por el impacto transformador de la Inteligencia Artificial en nuestro pensamiento.',
    video: {
      mp4: synopsisVideo,
    },
    accent: '#a78bfa',
    align: 'left',
    transition: 'fadeUp',
  },
  {
    id: 'chapter-01',
    title: 'Buscar antes de dudar',
    paragraphs: [
      '¿Te acordás de lo que se sentía no saber algo? Antes, tener una duda nos obligaba a detenernos. Teníamos que buscar, comparar, y armar la respuesta en nuestra cabeza. Era un pequeño esfuerzo, pero era nuestro esfuerzo.',
      'Hoy, ese proceso casi desapareció. Frente a cualquier pregunta, la reacción es automática: buscar en Google o preguntarle a una IA. Ganamos tiempo, es verdad, pero estamos perdiendo la capacidad de pensar profundamente y aprender a convivir con la incertidumbre.',
    ],
    tagline: 'La consecuencia oculta de la respuesta inmediata.',
    // Usamos la imagen proporcionada como fondo para la primera historia (Página 2).
    backgroundImage: `linear-gradient(135deg, rgba(10,12,20,0.24), rgba(10,12,20,0.62)), url("${page2Img}")`,
    accent: '#c4a2ff',
    align: 'left',
    transition: 'fade',
  },
  {
    id: 'chapter-02',
    title: 'Creemos que elegimos nosotros',
    paragraphs: [
      'El problema no es solo que preguntamos, sino a quién le preguntamos. Creemos que las herramientas digitales son neutrales, pero no lo son. Cada vez que buscas o eliges algo, el sistema aprende. Y decide mostrarte solo lo que sabe que te gusta. Nos encierra en burbujas donde todo confirma lo que ya pensamos.',
      'El riesgo real no es volvernos dependientes, sino terminar creyendo que las decisiones que toma un sistema son ideas propias.'
    ],
    tagline: 'Cuando el algoritmo ordena tu realidad.',
    // Usamos la imagen proporcionada como fondo integrado para la Página 3
    backgroundImage: `linear-gradient(135deg, rgba(10,12,20,0.22), rgba(10,12,20,0.56)), url("${page3Img}")`,
    accent: '#d4b8ff',
    align: 'right',
    transition: 'slideUp',
  },
  {
    id: 'chapter-03',
    title: 'Dejar que la máquina decida',
    paragraphs: [
      'Aquí es donde la historia se vuelve complicada. Al principio era cómodo, pero ahora estamos delegando tareas que requieren razonamiento real. Esta imagen es una advertencia. Muestra qué pasa cuando perdemos el control sobre nuestras propias ideas. Si dejamos que la tecnología haga el trabajo mental difícil, corremos el riesgo de convertirnos en simples supervisores de lo que hace una máquina, olvidando cómo crear y pensar por nosotros mismos.',
    ],
    tagline: 'La línea que no deberíamos cruzar.',
    backgroundImage: `linear-gradient(135deg, rgba(10,12,20,0.24), rgba(10,12,20,0.62)), url("${chapter3Img}")`,
    accent: '#7abaef',
    align: 'left',
    transition: 'scaleIn',
  },
]

export const timelineEntries = [
  {
    year: '1956',
    title: 'El origen de la computación',
    copy: 'En la década de 1950, la computación se encontraba en su primera generación, caracterizada por el uso de tubos de vacío (como la ENIAC o la IBM 701) y la programación en lenguaje de máquina o ensamblador. Las computadoras eran activos exclusivamente militares o de grandes centros de investigación. El contexto de la Posguerra y el inicio de la Guerra Fría impulsaron el financiamiento estatal hacia proyectos de cálculo balístico y criptografía, sentando las bases operativas para la teoría de la información.',
  },
  {
    year: '1997',
    title: 'La tecnología se supera día a día',
    copy: 'Hacia finales del siglo XX, la informática de consumo masivo ya se había consolidado a través de la arquitectura de la PC de escritorio y los microprocesadores de silicio de alta densidad (como la transición a los procesadores Intel Pentium). Es el año de la expansión comercial de Internet (la Web 1.0) y la transición hacia sistemas operativos de interfaz gráfica maduros (Windows 95/NT). Tras los períodos de desfinanciamiento conocidos como "Inviernos de la IA", la disciplina encontró viabilidad comercial specializándose en sistemas expertos y algoritmos de optimización.',
  },
  {
    year: '2017',
    title: 'La IA pisa fuerte en la vida cotidiana',
    copy: 'A mediados de la década de 2010, la digitalización global, los smartphones y las redes sociales generaron una explosión de datos sin precedentes (Big Data). Paralelamente, la industria de los videojuegos impulsó el desarrollo de las GPUs (Unidades de Procesamiento Gráfico). Investigadores como Geoffrey Hinton demostraron que las GPUs eran idóneas para procesar cálculos matriciales en paralelo, lo que permitió revivir y escalar las redes neuronales artificiales que habían sido teóricamente planteadas en los años 80 pero abandonadas por falta de potencia hardware.',
  },
  {
    year: '2026',
    title: 'Inteligencia Artificial el fundamento de la tecnología moderna',
    copy: 'En el año actual, 2026, la Inteligencia Artificial ha dejado de ser una aplicación aislada para convertirse en una tecnología de infraestructura generalizada (similar a la adopción histórica de la red eléctrica). Los centros de datos operan con clusters masivos de microchips optimizados para IA (como las arquitecturas avanzadas de GPUs y TPUs). La disciplina ha superado la etapa de los transformadores puramente basados en texto y se encuentra integrada verticalmente en los sistemas operativos, la automatización industrial, el desarrollo de software y la investigación científica predictiva.',
  },
]

export const additionalSections = [
  {
    id: 'chapter-04',
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
    video: {
      mp4: chapter4Video,
    },
  },
  {
    id: 'chapter-05',
    title: 'Recordando cómo era recordar',
    paragraphs: [
      'Llegando al final del recorrido, el espectador debería reflexionar sobre lo que hemos perdido. No se trata solo de la capacidad de pensar, sino de la capacidad de recordar lo que pensamos. Ya nadie retiene fechas, nombres o ideas complejas. La memoria se ha externalizado y con ella, la conexión con nuestro propio proceso mental. A veces parece que la tecnología nos ayuda a no olvidar, pero en realidad nos hace olvidar que olvidamos.',
    ],
    tagline: 'Adaptarnos sí, olvidar no.',
    backgroundImage: `linear-gradient(135deg, rgba(10,12,20,0.24), rgba(10,12,20,0.62)), url("${chapter5Img}")`,
    accent: '#d9c4ff',
    align: 'left',
    transition: 'fadeUp',
  },
]

export const finalSection = {
  copy: 'Para el cierre de esta historia se deja en claro que el verdadero impacto de la IA radica en la delgada línea entre usarla como sustituto o como amplificador: el mal uso ocurre cuando delegamos por completo el pensamiento, la escritura o el diseño en el algoritmo, provocando una atrofia cognitiva donde el cerebro deja de ejercitar la memoria, pierde capacidad de resolución y homogeneiza la creatividad al saltarse el valioso proceso de enfrentarse a la hoja en blanco; por el contrario, el buen uso se logra cuando se la adopta como un copiloto o ayudante técnico que optimiza tareas mecánicas, rompe bloqueos iniciales y organiza información compleja, sirviendo como un trampolín para que el humano aporte el valor diferencial de la intuición, la empatía y la retórica. En síntesis, no está mal usar la IA para potenciar y acelerar nuestras capacidades, pero si lo está para reprogramar el pensamiento.',
  credits: 'Mateo Mirarchi y Tobías Accorinti',
  backgroundImage: `linear-gradient(135deg, rgba(10, 12, 20, 0.24), rgba(10, 12, 20, 0.62)), url("${chapterFinalImg}")`,
}