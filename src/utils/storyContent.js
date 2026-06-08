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

const loremShort =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'

const loremMedium =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper.'

const loremLong =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo.'

export const heroSection = {
  title: 'Lorem Ipsum Dolor Amet',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna.',
  creator: 'Mateo Mirarchi',
  video: {
    webm: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
    mp4: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
}

export const storySections = [
  {
    id: 'chapter-01',
    eyebrow: 'Capítulo 01',
    title: 'Lorem ipsum nascitur ridiculus mus',
    paragraphs: [loremMedium, loremLong],
    backgroundImage: buildBackground({
      base: '#17405c',
      accent: '#dd6c55',
      detail: '#f1d9b2',
      label: 'I',
    }),
    accent: '#ffd7b2',
    align: 'left',
  },
  {
    id: 'chapter-02',
    eyebrow: 'Capítulo 02',
    title: 'Lorem ipsum euismod semper velit',
    paragraphs: [loremShort, loremMedium],
    backgroundImage: buildBackground({
      base: '#3b214e',
      accent: '#5cb7b5',
      detail: '#f0ede1',
      label: 'II',
    }),
    accent: '#c4fff8',
    align: 'right',
  },
  {
    id: 'chapter-03',
    eyebrow: 'Capítulo 03',
    title: 'Lorem ipsum ultricies vehicula elit',
    paragraphs: [loremLong, loremShort],
    backgroundImage: buildBackground({
      base: '#241b34',
      accent: '#e0a649',
      detail: '#f6f2eb',
      label: 'III',
    }),
    accent: '#ffe6b8',
    align: 'left',
  },
]

export const timelineEntries = [
  {
    year: '1998',
    copy:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  },
  {
    year: '2004',
    copy:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.',
  },
  {
    year: '2011',
    copy:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
  },
  {
    year: '2018',
    copy:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis.',
  },
  {
    year: '2026',
    copy:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod.',
  },
]

export const additionalSections = [
  {
    id: 'chapter-04',
    eyebrow: 'Capítulo 04',
    title: 'Lorem ipsum dictum porta mollis',
    paragraphs: [loremMedium, loremShort],
    backgroundImage: buildBackground({
      base: '#0d3840',
      accent: '#e87a62',
      detail: '#f3efe4',
      label: 'IV',
    }),
    accent: '#ffd3c8',
    align: 'right',
  },
  {
    id: 'chapter-05',
    eyebrow: 'Capítulo 05',
    title: 'Lorem ipsum inceptos himenaeos nibh',
    paragraphs: [loremLong, loremMedium],
    backgroundImage: buildBackground({
      base: '#42212c',
      accent: '#5d90d7',
      detail: '#f0d8c7',
      label: 'V',
    }),
    accent: '#d3e6ff',
    align: 'left',
  },
]

export const finalSection = {
  title: 'Lorem ipsum finibus et suspendisse',
  copy:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.',
  credits: 'Mateo Mirarchi y Tobias Accorinti',
  backgroundImage: buildBackground({
    base: '#1e2438',
    accent: '#9c4f68',
    detail: '#f2ca87',
    label: 'FIN',
  }),
}