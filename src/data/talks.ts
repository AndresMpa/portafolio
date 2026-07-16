// src/data/talks.ts

export interface Talk {
  title: string;
  kind: string;
  tags: string[];
  url: string;
  year: string;
}

export const talks: Talk[] = [
  {
    title:
      "Reconocimiento a la excelencia por parte del gobierno de Colombia - Ministerio de las TIC - (Post de referencia)",
    kind: "Evento de Clausura de MisionTic 20/22",
    tags: ["Reconocimiento público"],
    url: "https://comunicaciones.utp.edu.co/49241/noticias/mision-tic-recibio-a-sus-tripulantes-en-la-utp-y-abrio-su-nueva-convocatoria/",
    year: "2021",
  },
  {
    title: "UbuConLA 2023 - Web Speech API y una proxy bolita",
    kind: "UbuConLa - C4TA",
    tags: ["Conferencia Internacional"],
    url: "https://www.youtube.com/live/ytPTSV_plrQ?feature=shared",
    year: "2023",
  },
  {
    title: "FLISOL2023/Colombia/Pereira - FLISOL",
    kind: "Festival Latinoamericano de Instalación de Software Libre",
    tags: ["FLISoL", "FOSS"],
    url: "https://flisol.info/FLISOL2023/Colombia/Pereira",
    year: "2023",
  },
  {
    title:
      "En Pereira se realizará el Festival Latinoamericano de Instalación de Software Libre - El Diario",
    kind: "Entrevista",
    tags: ["FLISoL", "FOSS"],
    url: "https://www.eldiario.com.co/noticias/economia/en-pereira-se-realizara-el-festival-latinoamericano-de-instalacion-de-software-libre/",
    year: "2024",
  },
  {
    title: "FLISOL2024/Colombia/Pereira - FLISOL",
    kind: "Festival Latinoamericano de Instalación de Software Libre",
    tags: ["FLISoL", "FOSS"],
    url: "https://flisol.info/FLISOL2024/Colombia/Pereira",
    year: "2024",
  },
  {
    title: "Flisol UTP 2024: 20 Años trabajando por la libertad digital",
    kind: "Entrevista",
    tags: ["FLISoL", "FOSS"],
    url: "https://comunicaciones.utp.edu.co/62220/facultades/flisol-utp-2024-20-anos-trabajando-por-la-libertad-digital/",
    year: "2024",
  },
  {
    title:
      "De mortal a developer y otras cosas geniales que puedes hacer con Linux | 20 | Flisol Bogotá DC 2024",
    kind: "Entrevista",
    tags: ["FLISoL", "FOSS"],
    url: "https://flisolbogota.org/2024/2024/04/23/754/",
    year: "2024",
  },
  {
    title:
      "La IA puede quitarme el trabajo y otras mentiras que escucharas pronto | 20 | Flisol Bogotá DC 2024",
    kind: "Entrevista",
    tags: ["FLISoL", "FOSS"],
    url: "https://flisolbogota.org/2024/2024/04/22/722/",
    year: "2024",
  },
  {
    title: "Café FLISoL - ¿La IA puede quitarme el trabajo? - Con el Ing. Andrés Prieto",
    kind: "Conferencia",
    tags: ["FLISoL", "FOSS", "AI"],
    url: "https://www.youtube.com/watch?v=JnAxmNA25ak",
    year: "2024",
  },
  {
    title: "Ingenieros en Pereira desarrollan asistente de IA para programar código abierto",
    kind: "Entrevista",
    tags: ["FOSS", "AI", "Lyra"],
    url: "https://www.youtube.com/watch?v=KLSnCxgulKw",
    year: "2024",
  },
  {
    title:
      "Dos ingenieros en Pereira crean herramientas de IA para programar en código abierto - Ep.32 2024",
    kind: "Entrevista",
    tags: ["FOSS", "AI", "Lyra"],
    url: "https://www.youtube.com/watch?v=eayh7u85Jhk",
    year: "2024",
  },
  {
    title: "Cómo y por qué hacer proyectos Open Source",
    kind: "Conferencia",
    tags: ["FOSS", "OS"],
    url: "https://youtu.be/5_qyNXwqpE8?t=2656",
    year: "2024",
  },
  {
    title:
      "Proyecto Lyra. ¿Cómo pasar del pensar en IA a introducirla en tu sistema operativo? (Virtual)",
    kind: "IX SIMPOSIO INTERNACIONAL DE INGENIERÍA DE SISTEMAS",
    tags: ["AI", "Lyra"],
    url: "https://comunicaciones.cecar.edu.co/congresos-internacionales/ix-simposio-internacional.html#ponentes",
    year: "2024",
  },
  {
    title: "Tribu Dev - Cartago",
    kind: "Charla",
    tags: ["Charla"],
    url: "https://www.instagram.com/p/DNn3yxjAElw/?igsh=MXhtbWI0MjNqajhwcQ==",
    year: "2025",
  },
  {
    title: "QA Conf",
    kind: "Ponente",
    tags: ["Conferencia", "QA"],
    url: "https://www.instagram.com/reel/DOesmTKlPYT/?igsh=MzU2NjRhOWV4MTA5",
    year: "2025",
  },
  {
    title: "Open Tech Hackathon",
    kind: "Líder del evento",
    tags: ["Hackathon"],
    url: "https://www.instagram.com/p/DPzOZQLj7_x/?igsh=MXI5ODNsMzJlZGNyOQ==",
    year: "2025",
  },
];
