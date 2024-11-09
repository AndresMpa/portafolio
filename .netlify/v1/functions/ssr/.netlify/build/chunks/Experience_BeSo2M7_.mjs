import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as createAstro, a as renderComponent, F as Fragment } from './astro/server_aSm7G1vp.mjs';
import { t, a as $$Reference } from './Layout_BOXMa58f.mjs';
import { $ as $$Image } from './_astro_assets_DaMmrxVp.mjs';
/* empty css                         */

const $$Astro$6 = createAstro();
const $$DockRoute = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$DockRoute;
  const { name, ref } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="mr-6"> <a${addAttribute(ref, "href")} class="text-bold uppercase text-accent hover:brightness-125 hover:drop-shadow-[0_0_5px_#0bc7c3] transition duration-300">${name}</a> </li>`;
}, "C:/Users/andre/Desktop/portafolio/src/components/DockRoute.astro", void 0);

const $$Dock = createComponent(($$result, $$props, $$slots) => {
  const dockName = t("dock").split(" ");
  const dockRoutes = [
    "home",
    "experience",
    "projects",
    "education",
    "communities",
    "contact"
  ];
  const dockData = dockName.map((data, index) => {
    return { name: data, route: dockRoutes[index] };
  });
  return renderTemplate`${maybeRenderHead()}<aside class="hidden md:flex justify-center absolute bottom-4 md:bottom-12 left-0 right-0 z-10"> <ul class="flex rounded-lg border-white border-2 md:border-4 p-1 md:p-2 px-2 md:px-4 bg-white/80 backdrop-blur-sm"> ${dockData.map((data) => renderTemplate`${renderComponent($$result, "DockRoute", $$DockRoute, { "name": data.name, "ref": data.route })}`)} </ul> </aside>`;
}, "C:/Users/andre/Desktop/portafolio/src/components/Dock.astro", void 0);

const $$Greeter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center justify-center md:min-h-screen min-h-80"> <article class="mt-[-40px] sm:mt-[-80px]"> <h1 class="text-4xl sm:text-5xl md:text-6xl mx-12 uppercase text-center"> ${t("greeter.title")} </h1> </article> <article class="flex justify-center mt-12 md:pb-60"> <h2 class="text-lg sm:text-xl md:text-2xl w-full mx-5 sm:w-10/12 md:w-8/12 text-center"> ${t("greeter.description1")}<strong class="text-bold text-accent hover:brightness-125 hover:drop-shadow-[0_0_5px_#0bc7c3] transition duration-300"> ${t("greeter.key1")}</strong> ${t("greeter.description2")} <strong class="text-bold text-accent hover:brightness-125 hover:drop-shadow-[0_0_5px_#0bc7c3] transition duration-300"> ${t("greeter.key2")}</strong>. ${t("greeter.description3")} <strong class="text-bold text-accent hover:brightness-125 hover:drop-shadow-[0_0_5px_#0bc7c3] transition duration-300">${t("greeter.key3")}</strong> </h2> </article> </section>`;
}, "C:/Users/andre/Desktop/portafolio/src/components/Greeter.astro", void 0);

const $$Astro$5 = createAstro();
const $$ProjectDescription = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ProjectDescription;
  const {
    title,
    context,
    authors = []
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="md:w-6/12 px-12"> <h4 class="text-2xl text-accent py-6"> ${title} </h4> <p class="pl-6 py-6"> ${context} </p> ${authors.map((author) => renderTemplate`<a${addAttribute(author.link, "href")} target="_blank" rel="noopener noreferrer"> <span class="bg-accent/30 text-accent text-sm text-center px-3 py-1 mx-2 rounded-full font-semibold hover:bg-accent hover:text-text transition-colors duration-200">
@${author.user} </span> </a>`)} </div>`;
}, "C:/Users/andre/Desktop/portafolio/src/components/ProjectDescription.astro", void 0);

const $$Astro$4 = createAstro();
const $$ProjectLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProjectLink;
  const {
    url,
    image,
    topics,
    alt = "Project link",
    flip = true
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-gld6jnbj> <a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-gld6jnbj> ${renderComponent($$result, "Image", $$Image, { "src": image, "width": 450, "height": 300, "loading": "lazy", "decoding": "async", "alt": `${alt}: ${url}`, "class": `rounded single-img ${flip ? "flipped" : ""}`, "data-astro-cid-gld6jnbj": true })} </a> <p${addAttribute(`${flip ? "flex justify-end" : ""} px-5 mt-5`, "class")} data-astro-cid-gld6jnbj> ${topics.split(",").map((topic) => renderTemplate`<span class="bg-accent/30 text-accent text-sm text-center px-3 py-1 mx-2 rounded-full font-semibold hover:bg-accent hover:text-text transition-colors duration-200" data-astro-cid-gld6jnbj> ${topic} </span>`)} </p> </div> `;
}, "C:/Users/andre/Desktop/portafolio/src/components/ProjectLink.astro", void 0);

const Lyra = new Proxy({"src":"/_astro/Lyra.DYbsEjMu.png","width":1280,"height":720,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/projects/Lyra.png";
							}
							
							return target[name];
						}
					});

const MuVim = new Proxy({"src":"/_astro/muvim.qid5MGEd.png","width":1366,"height":768,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/projects/muvim.png";
							}
							
							return target[name];
						}
					});

const NFT = new Proxy({"src":"/_astro/NFT.CFBjo9UN.png","width":1354,"height":621,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/projects/NFT.png";
							}
							
							return target[name];
						}
					});

const Game = new Proxy({"src":"/_astro/game.Bpx9mVJP.png","width":1366,"height":649,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/projects/game.png";
							}
							
							return target[name];
						}
					});

const Babylon = new Proxy({"src":"/_astro/babylon.6HhKaI1K.jpg","width":1344,"height":768,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/projects/babylon.jpg";
							}
							
							return target[name];
						}
					});

const Advice = new Proxy({"src":"/_astro/advice.BsM_czX7.png","width":1338,"height":687,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/projects/advice.png";
							}
							
							return target[name];
						}
					});

const Parking = new Proxy({"src":"/_astro/parking.BppdfNIt.png","width":1920,"height":889,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/projects/parking.png";
							}
							
							return target[name];
						}
					});

const TODO = new Proxy({"src":"/_astro/todo.DXoq6eT1.png","width":1344,"height":722,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/projects/todo.png";
							}
							
							return target[name];
						}
					});

const Dotfiles = new Proxy({"src":"/_astro/dotfiles.DeJexuHe.png","width":1366,"height":768,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/projects/dotfiles.png";
							}
							
							return target[name];
						}
					});

const $$Project = createComponent(($$result, $$props, $$slots) => {
  const projectsData = [
    {
      description: {
        title: "Lyra: Your Cosmic Companion",
        context: t("projects.context1"),
        authors: [
          { link: "https://github.com/AndresMpa", user: "AndresMpa" },
          { link: "https://github.com/xcerock", user: "xcerock" }
        ]
      },
      link: {
        url: "https://github.com/AndresMpa/lyra",
        topics: "AI,JavaScript,Python",
        alt: "Lyra's proyect",
        image: Lyra
      }
    },
    {
      description: {
        title: "MuVim",
        context: t("projects.context2")
      },
      link: {
        url: "https://github.com/AndresMpa/mu-vim",
        topics: "GNU/Linux,Shell,Dockerfile,JavaScript,Lua",
        alt: "MuVim",
        image: MuVim
      }
    },
    {
      description: {
        title: "Dotfiles",
        context: t("projects.context3")
      },
      link: {
        url: "https://github.com/AndresMpa/dotfiles",
        topics: "GNU/Linux,Shell,Dockerfile,Python,Lua,C/C++",
        alt: "Dotfile",
        image: Dotfiles
      }
    },
    {
      description: {
        title: "Rock, Paper, Scissors, Spock, Lizard",
        context: t("projects.context4")
      },
      link: {
        url: "https://github.com/AndresMpa/rock-paper-scissors-spock-lizard",
        topics: "JavaScript,SCSS,HTML",
        alt: "Rock, Paper, Scissors, Spock, Lizard",
        image: Game
      }
    },
    {
      description: {
        title: "TODO App",
        context: t("projects.context5")
      },
      link: {
        url: "https://github.com/AndresMpa/todo-app",
        topics: "JavaScript,Stylus,HTML",
        alt: "TODO App",
        image: TODO
      }
    },
    {
      description: {
        title: "Advice Generator App",
        context: t("projects.context6")
      },
      link: {
        url: "https://github.com/AndresMpa/advice-generator-app",
        topics: "JavaScript,Less,CSS,HTML",
        alt: "Advice Generator App",
        image: Advice
      }
    },
    {
      description: {
        title: "NFT-Card Preview",
        context: t("projects.context7")
      },
      link: {
        url: "https://andresmpa.github.io/NFT-card-preview/",
        topics: "SCSS,HTML",
        alt: "NFT-Card Preview",
        image: NFT
      }
    },
    {
      description: {
        title: "Parking system",
        context: t("projects.context8")
      },
      link: {
        url: "https://github.com/AndresMpa/parking-system",
        topics: "UI,Vue,Vuex,Vue Router",
        alt: "Parking system",
        image: Parking
      }
    },
    {
      description: {
        title: "Babylon: Resources for developers",
        context: t("projects.context9")
      },
      link: {
        url: "https://github.com/AndresMpa/babylon",
        topics: "JavaScript,TypeScript,HTML,SCSS,CSS,Stylus,Less",
        alt: "Babylon: Resources for developers",
        image: Babylon
      }
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="projects"> <article class="flex flex-col items-end mb-6 pb-12 pr-12"> <h3 class="text-4xl uppercase text-accent"> ${t("projects.title")} </h3> </article> <article> ${projectsData.map((data, index) => renderTemplate`<div${addAttribute(`${index % 2 === 0 ? "" : "flex-row-reverse"} md:flex justify-around my-12`, "class")}> ${renderComponent($$result, "ProjectDescription", $$ProjectDescription, { "title": data.description.title, "context": data.description.context, "authors": data.description.authors })} ${renderComponent($$result, "ProjectLink", $$ProjectLink, { "url": data.link.url, "image": data.link.image, "topics": data.link.topics, "alt": data.link.alt, "flip": index % 2 === 0 })} </div>`)} </article> </section>`;
}, "C:/Users/andre/Desktop/portafolio/src/components/Project.astro", void 0);

const link = new Proxy({"src":"/_astro/link.4iJAfVfH.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/link.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$TableItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TableItem;
  const { type, ref, bolder, context } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<td${addAttribute(type === "chip" ? "flex justify-center items-center h-24" : "", "class")}> ${type === "chip" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${context.split(",").map((text) => renderTemplate`<div class="bg-accent/30 text-accent text-sm text-center px-3 py-1 mx-2 rounded-full font-semibold hover:bg-accent hover:text-text transition-colors duration-200"> ${text} </div>`)}` })}` : renderTemplate`<div${addAttribute(`${type === "title" ? "text-white font-bold" : ""} ${bolder ? "text-bold" : ""} p-6`, "class")}> ${ref ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Reference", $$Reference, { "icon": link, "link": context, "styledClass": `${type === "reference" ? "text-white/80 hover:text-accent relative transition-colors duration-200" : ""}`, "alt": context.replace(/(^\w+:|^)\/\//, "").replace(/^www\./, "").split("/")[0], "width": 15, "underline": true, "useAlt": true })} ` })}` : renderTemplate`<p>${context}</p>`} </div>`} </td>`;
}, "C:/Users/andre/Desktop/portafolio/src/components/TableItem.astro", void 0);

const $$Astro$2 = createAstro();
const $$TableIterator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TableIterator;
  const { headers, entries } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<table class="m-12"> <thead> <tr class="border-b-2 border-white"> ${headers.map((header) => renderTemplate`<th class="p-6">${header}</th>`)} </tr> </thead> <tbody> ${entries.map((entryData) => renderTemplate`<tr class="border-t border-gray-800/50"> ${entryData.map((entryDetail) => renderTemplate`${renderComponent($$result, "TableItem", $$TableItem, { "type": entryDetail.type, "ref": entryDetail.ref, "bolder": entryDetail.bolder, "context": entryDetail.context })}`)} </tr>`)} </tbody> </table>`;
}, "C:/Users/andre/Desktop/portafolio/src/components/TableIterator.astro", void 0);

const $$Education = createComponent(($$result, $$props, $$slots) => {
  const headers = t("education.headers").split(" ");
  const entries = [
    [
      {
        type: "title",
        ref: false,
        border: true,
        context: t("education.description1")
      },
      {
        type: "reference",
        ref: true,
        border: false,
        context: "https://www.utp.edu.co/"
      },
      {
        type: "chip",
        ref: false,
        border: false,
        context: "Architecture,AI"
      },
      {
        type: "title",
        ref: false,
        border: true,
        context: "2025"
      }
    ],
    [
      {
        type: "title",
        ref: false,
        border: true,
        context: t("education.description2")
      },
      {
        type: "reference",
        ref: true,
        border: false,
        context: "https://www.utp.edu.co/"
      },
      {
        type: "chip",
        ref: false,
        border: false,
        context: "Software,Engineering"
      },
      {
        type: "title",
        ref: false,
        border: true,
        context: "2023"
      }
    ],
    [
      {
        type: "title",
        ref: false,
        border: true,
        context: t("education.description3")
      },
      {
        type: "reference",
        ref: true,
        border: false,
        context: "https://www.utp.edu.co/"
      },
      {
        type: "chip",
        ref: false,
        border: false,
        context: "Software,Engineering"
      },
      {
        type: "title",
        ref: false,
        border: true,
        context: "2021"
      }
    ],
    [
      {
        type: "title",
        ref: false,
        border: true,
        context: "JavaScript Fullstack Developer"
      },
      {
        type: "reference",
        ref: true,
        border: false,
        context: "https://platzi.com/p/AndresMpa/ruta/100-javascript-full-stack/diploma/detalle/"
      },
      {
        type: "chip",
        ref: false,
        border: false,
        context: "JavaScript,Backend"
      },
      {
        type: "title",
        ref: false,
        border: true,
        context: "2022"
      }
    ],
    [
      {
        type: "title",
        ref: false,
        border: true,
        context: "Node.js Backend Developer"
      },
      {
        type: "reference",
        ref: true,
        border: false,
        context: "https://platzi.com/p/AndresMpa/ruta/55-backend-javascript/diploma/detalle/"
      },
      {
        type: "chip",
        ref: false,
        border: false,
        context: "JavaScript,Backend"
      },
      {
        type: "title",
        ref: false,
        border: true,
        context: "2022"
      }
    ],
    [
      {
        type: "title",
        ref: false,
        border: true,
        context: "Python for Data Science, AI & Development"
      },
      {
        type: "reference",
        ref: true,
        border: false,
        context: "https://www.coursera.org/account/accomplishments/certificate/JCG8E2UP6ES8"
      },
      {
        type: "chip",
        ref: false,
        border: false,
        context: "Python,AI"
      },
      {
        type: "title",
        ref: false,
        border: true,
        context: "2022"
      }
    ],
    [
      {
        type: "title",
        ref: false,
        border: true,
        context: "JavaScript Basics"
      },
      {
        type: "reference",
        ref: true,
        border: false,
        context: "https://www.coursera.org/account/accomplishments/verify/49636X93ZJUP"
      },
      {
        type: "chip",
        ref: false,
        border: false,
        context: "JavaScript,Backend"
      },
      {
        type: "title",
        ref: false,
        border: true,
        context: "2022"
      }
    ]
  ];
  return renderTemplate`${maybeRenderHead()}<section id="education"> <article class="flex flex-col items-start my-6 p-6 pr-12"> <h3 class="text-4xl uppercase text-accent"> ${t("education.title")} </h3> <div class="mx-auto md:w-8/12 w-full"> <div class="mx-auto overflow-x-auto"> ${renderComponent($$result, "TableIterator", $$TableIterator, { "headers": headers, "entries": entries })} </div> <div class="flex justify-center w-full text-accent text-center align-middle mb-6 mt-0 mx-auto"> <a class="p-2 mx-auto text-xl rounded-full font-semibold hover:bg-accent hover:text-text transition-colors duration-200" href="https://www.linkedin.com/in/andresmpa/details/certifications/" rel="noopener noreferrer" target="_blank"> ${t("education.more")} </a> </div> </div> </article> </section>`;
}, "C:/Users/andre/Desktop/portafolio/src/components/Education.astro", void 0);

const arch = new Proxy({"src":"/_astro/arch.yTfJ7z-G.png","width":256,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/arch.png";
							}
							
							return target[name];
						}
					});

const ubuco = new Proxy({"src":"/_astro/ubuco.BtzoS5AZ.png","width":256,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/ubuco.png";
							}
							
							return target[name];
						}
					});

const flisol = new Proxy({"src":"/_astro/flisol.B5Z00GDo.png","width":256,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/flisol.png";
							}
							
							return target[name];
						}
					});

const forest = new Proxy({"src":"/_astro/forest.w4asJRa4.png","width":256,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/forest.png";
							}
							
							return target[name];
						}
					});

const $$Community = createComponent(($$result, $$props, $$slots) => {
  const communitiesData = [
    {
      icon: ubuco,
      link: "https://launchpad.net/~andresmpa",
      alt: "Ubuntu - Launchpad: https://launchpad.net/~andresmpa"
    },
    {
      icon: flisol,
      link: "https://flisol.info/AndresMpa",
      alt: "FLISoL: https://flisol.info/AndresMpa"
    },
    {
      icon: arch,
      // TODO: I forgot the pass again
      link: "",
      alt: ""
    },
    {
      icon: forest,
      // TODO: Complete page
      link: "",
      alt: ""
    }
  ];
  const headers = t("community.headers").split(" ");
  const entries = [
    // 2021
    [
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "Reconocimiento a la excelencia por parte del gobierno de Colombia - Ministerio de las TIC - (Post de referencia)"
      },
      {
        type: "title",
        ref: false,
        bolder: true,
        context: "Evento de Clausura de MisionTic 20/22"
      },
      {
        type: "chip",
        ref: false,
        bolder: false,
        context: "Reconocimiento p\xFAblico"
      },
      {
        type: "reference",
        ref: true,
        bolder: false,
        context: "https://comunicaciones.utp.edu.co/49241/noticias/mision-tic-recibio-a-sus-tripulantes-en-la-utp-y-abrio-su-nueva-convocatoria/"
      },
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "2021"
      }
    ],
    // 2023
    [
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "UbuConLA 2023 - Web Speech API y una proxy bolita"
      },
      {
        type: "title",
        ref: false,
        bolder: true,
        context: "UbuConLa - C4TA"
      },
      {
        type: "chip",
        ref: false,
        bolder: false,
        context: "Conferencia Internacional"
      },
      {
        type: "reference",
        ref: true,
        bolder: false,
        context: "https://www.youtube.com/live/ytPTSV_plrQ?feature=shared"
      },
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "2023"
      }
    ],
    [
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "FLISOL2023/Colombia/Pereira - FLISOL"
      },
      {
        type: "title",
        ref: false,
        bolder: true,
        context: "Festival Latinoamericano de Instalaci\xF3n de Software Libre"
      },
      {
        type: "chip",
        ref: false,
        bolder: false,
        context: "FLISoL, FOSS"
      },
      {
        type: "reference",
        ref: true,
        bolder: false,
        context: "https://flisol.info/FLISOL2023/Colombia/Pereira"
      },
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "2023"
      }
    ],
    // 2024
    [
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "En Pereira se realizar\xE1 el Festival Latinoamericano de Instalaci\xF3n de Software Libre - El Diario"
      },
      {
        type: "title",
        ref: false,
        bolder: true,
        context: "Entrevista"
      },
      {
        type: "chip",
        ref: false,
        bolder: false,
        context: "FLISoL, FOSS"
      },
      {
        type: "reference",
        ref: true,
        bolder: false,
        context: "https://www.eldiario.com.co/noticias/economia/en-pereira-se-realizara-el-festival-latinoamericano-de-instalacion-de-software-libre/"
      },
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "2024"
      }
    ],
    [
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "FLISOL2024/Colombia/Pereira - FLISOL"
      },
      {
        type: "title",
        ref: false,
        bolder: true,
        context: "Festival Latinoamericano de Instalaci\xF3n de Software Libre"
      },
      {
        type: "chip",
        ref: false,
        bolder: false,
        context: "FLISoL, FOSS"
      },
      {
        type: "reference",
        ref: true,
        bolder: false,
        context: "https://flisol.info/FLISOL2024/Colombia/Pereira"
      },
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "2024"
      }
    ],
    [
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "Flisol UTP 2024: 20 A\xF1os trabajando por la libertad digital"
      },
      {
        type: "title",
        ref: false,
        bolder: true,
        context: "Entrevista"
      },
      {
        type: "chip",
        ref: false,
        bolder: false,
        context: "FLISoL, FOSS"
      },
      {
        type: "reference",
        ref: true,
        bolder: false,
        context: "https://comunicaciones.utp.edu.co/62220/facultades/flisol-utp-2024-20-anos-trabajando-por-la-libertad-digital/"
      },
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "2024"
      }
    ],
    [
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "De mortal a developer y otras cosas geniales que puedes hacer con Linux | 20 | Flisol Bogot\xE1 DC 2024"
      },
      {
        type: "title",
        ref: false,
        bolder: true,
        context: "Entrevista"
      },
      {
        type: "chip",
        ref: false,
        bolder: false,
        context: "FLISoL, FOSS"
      },
      {
        type: "reference",
        ref: true,
        bolder: false,
        context: "https://flisolbogota.org/2024/2024/04/23/754/"
      },
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "2024"
      }
    ],
    [
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "La IA puede quitarme el trabajo y otras mentiras que escucharas pronto | 20 | Flisol Bogot\xE1 DC 2024"
      },
      {
        type: "title",
        ref: false,
        bolder: true,
        context: "Entrevista"
      },
      {
        type: "chip",
        ref: false,
        bolder: false,
        context: "FLISoL, FOSS"
      },
      {
        type: "reference",
        ref: true,
        bolder: false,
        context: "https://flisolbogota.org/2024/2024/04/22/722/"
      },
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "2024"
      }
    ],
    [
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "Caf\xE9 FLISoL - \xBFLa IA puede quitarme el trabajo? - Con el Ing. Andr\xE9s Prieto"
      },
      {
        type: "title",
        ref: false,
        bolder: true,
        context: "Conferencia"
      },
      {
        type: "chip",
        ref: false,
        bolder: false,
        context: "FLISoL, FOSS, AI"
      },
      {
        type: "reference",
        ref: true,
        bolder: false,
        context: "https://www.youtube.com/watch?v=JnAxmNA25ak"
      },
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "2024"
      }
    ],
    [
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "Ingenieros en Pereira desarrollan asistente de IA para programar c\xF3digo abierto"
      },
      {
        type: "title",
        ref: false,
        bolder: true,
        context: "Entrevista"
      },
      {
        type: "chip",
        ref: false,
        bolder: false,
        context: "FOSS, AI, Lyra"
      },
      {
        type: "reference",
        ref: true,
        bolder: false,
        context: "https://www.youtube.com/watch?v=KLSnCxgulKw"
      },
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "2024"
      }
    ],
    [
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "Dos ingenieros en Pereira crean herramientas de IA para programar en c\xF3digo abierto - Ep.32 2024"
      },
      {
        type: "title",
        ref: false,
        bolder: true,
        context: "Entrevista"
      },
      {
        type: "chip",
        ref: false,
        bolder: false,
        context: "FOSS, AI, Lyra"
      },
      {
        type: "reference",
        ref: true,
        bolder: false,
        context: "https://www.youtube.com/watch?v=eayh7u85Jhk"
      },
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "2024"
      }
    ],
    [
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "C\xF3mo y por qu\xE9 hacer proyectos Open Source"
      },
      {
        type: "title",
        ref: false,
        bolder: true,
        context: "Conferencia"
      },
      {
        type: "chip",
        ref: false,
        bolder: false,
        context: "FOSS, OS"
      },
      {
        type: "reference",
        ref: true,
        bolder: false,
        context: "https://youtu.be/5_qyNXwqpE8?t=2656"
      },
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "2024"
      }
    ],
    [
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "Proyecto Lyra. \xBFC\xF3mo pasar del pensar en IA a introducirla en tu sistema operativo? (Virtual)"
      },
      {
        type: "title",
        ref: false,
        bolder: true,
        context: "IX SIMPOSIO INTERNACIONAL DE INGENIER\xCDA DE SISTEMAS"
      },
      {
        type: "chip",
        ref: false,
        bolder: false,
        context: "AI, Lyra"
      },
      {
        type: "reference",
        ref: true,
        bolder: false,
        context: "https://comunicaciones.cecar.edu.co/congresos-internacionales/ix-simposio-internacional.html#ponentes"
      },
      {
        type: "title",
        ref: false,
        bolder: false,
        context: "2024"
      }
    ]
  ];
  return renderTemplate`${maybeRenderHead()}<section id="communities"> <div class="flex flex-row"> <article class="hidden md:block bg-accent p-12"> <h2 class="text-9xl font-bold p-16 uppercase">
Think <br>
Out <br>
Of <br>
Code
</h2> </article> <article class="flex flex-col items-end my-6 p-6 pr-12"> <h3 class="text-4xl mb-6 uppercase text-accent"> ${t("community.title")} </h3> <p class="text-right w-10/12 text-2xl py-6"> ${t("community.description1")} <strong class="text-accent">${t("community.key1")}</strong>, ${t("community.description2")} <strong class="text-accent">${t("community.key2")}</strong> ${t("community.description3")}<strong class="text-accent"> ${t("community.key3")} </strong>${t("community.description4")} <strong class="text-accent">${t("community.key4")}</strong> ${t("community.description5")} <strong class="text-accent"> ${t("community.key5")} </strong> ${t("community.description6")} </p> <div class="md:mt-auto mt-12 flex"> ${communitiesData.map((data) => renderTemplate`${renderComponent($$result, "Reference", $$Reference, { "icon": data.icon, "link": data.link, "alt": data.alt, "useSvg": false, "width": 65 })}`)} </div> </article> </div> <article class="overflow-x-auto mx-auto"> ${renderComponent($$result, "TableIterator", $$TableIterator, { "headers": headers, "entries": entries })} </article> </section>`;
}, "C:/Users/andre/Desktop/portafolio/src/components/Community.astro", void 0);

const $$Astro$1 = createAstro();
const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { year, company, title, description, topics } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center items-start" data-astro-cid-zhxkjw2l> <div class="flex flex-col items-center max-w-[21rem] md:mx-12 mx-auto" data-astro-cid-zhxkjw2l> <div class="flex flex-col items-center" data-astro-cid-zhxkjw2l> <div class="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-white font-bold mb-2 shadow-lg shadow-blue-300/50" data-astro-cid-zhxkjw2l> ${year} </div> <h3 data-astro-cid-zhxkjw2l>${title}</h3> <h4 data-astro-cid-zhxkjw2l>${company}</h4> </div> <p class="text-center text-gray-700" data-astro-cid-zhxkjw2l> ${description} </p> <div class="py-6 w-full overflow-hidden whitespace-nowrap" data-astro-cid-zhxkjw2l> <div class="inline-flex animate-scroll" data-astro-cid-zhxkjw2l> ${topics.split(",").map((topic) => renderTemplate`<span class="bg-accent/30 text-accent text-sm text-center px-3 py-1 mx-2 rounded-full font-semibold hover:bg-accent hover:text-text transition-colors duration-200" data-astro-cid-zhxkjw2l> ${topic} </span>`)} </div> </div> </div> </div> `;
}, "C:/Users/andre/Desktop/portafolio/src/components/Timeline.astro", void 0);

const $$Astro = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Experience;
  const timelineData = [
    {
      year: "2017",
      company: "H.E. GME",
      title: "Junior Software Developer",
      description: t("experience.description1"),
      topics: "Custom Software,Databases,Desktop Virtualization,Microsoft Access,SQL,Software Engineering,Software Infrastructure"
    },
    {
      year: "2018",
      company: "Woldev SAS",
      title: "Junior Software Engineer",
      description: t("experience.description2"),
      topics: "C++,Web Development,Web 2.0,Bootstrap,CSS,An\xE1lisis web,HTML,JavaScript,GNU/Linux"
    },
    {
      year: "2021",
      company: "Pulsatrix",
      title: "Blockchain Developer",
      description: t("experience.description3"),
      topics: "GNU/Linux,Testing,Node.js,Blockchain,Docker,Bash,JavaScript,REST,Web RESTful"
    },
    {
      year: "2022",
      company: "Delphi",
      title: "Software Engineer",
      description: t("experience.description4"),
      topics: "Django,AI,Web Development,Lidership,JavaScript,Vue.js,React.js,GNU/Linux,Analysis,APIPython,Database,Docker,Software Development,Custom Software,Software Infraestructure,RESTful,Web RESTful"
    },
    {
      year: "2023",
      company: "Ubuntu Colombia",
      title: "Project Development Manager",
      description: t("experience.description5"),
      topics: "JavaScript,Python,Lidership,Project management,Marketing"
    },
    {
      year: "2023",
      company: "Forest Software Community",
      title: "Co-Founder",
      description: t("experience.description6"),
      topics: "Web Development,Lidership,GNU/Linux,Analysis,FOSS,Open Source,Software Development,Python,JavaScript,React.js,Vue.js,Astro.js"
    },
    {
      year: "2023",
      company: "Freelancer",
      title: "Technical Advisor",
      description: t("experience.description7"),
      topics: "HTML5,CSS,GNU/Linux,Software Development,Software Infraestructure,Docker,JavaScript,Python"
    },
    {
      year: "2024",
      company: "Freelancer",
      title: "Software Developer",
      description: t("experience.description8"),
      topics: "Software Development,React.js,Vue.js,JavaScript,TypeScript,GNU/Linux,Docker,Git,Python,Software Infraestructure,Marketing,Lidership"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="experience" data-astro-cid-xpq65ryk> <article class="flex flex-col items-start mt-6 px-6 pr-12" data-astro-cid-xpq65ryk> <h3 class="text-4xl uppercase text-accent mb-12" data-astro-cid-xpq65ryk> ${t("experience.title")} </h3> <div class="flex overflow-x-auto space-x-4 py-4 max-w-full scrollbar-hidden" data-astro-cid-xpq65ryk> <div class="flex space-x-4" data-astro-cid-xpq65ryk> ${timelineData.map((data) => renderTemplate`${renderComponent($$result, "Timeline", $$Timeline, { "year": data.year, "company": data.company, "title": data.title, "description": data.description, "topics": data.topics, "data-astro-cid-xpq65ryk": true })}`)} </div> </div> </article> </section> `;
}, "C:/Users/andre/Desktop/portafolio/src/components/Experience.astro", void 0);

export { $$Greeter as $, $$Dock as a, $$Experience as b, $$Project as c, $$Education as d, $$Community as e };
