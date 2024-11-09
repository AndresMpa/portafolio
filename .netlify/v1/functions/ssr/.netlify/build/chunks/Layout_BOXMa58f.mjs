import { c as createComponent, r as renderTemplate, u as unescapeHTML, b as addAttribute, d as createAstro, m as maybeRenderHead, a as renderComponent, e as renderHead, f as renderSlot } from './astro/server_aSm7G1vp.mjs';
import { a as als, c as clientId } from './internal_aCWP1Ea_.mjs';
/* empty css                         */
import _i18next from 'i18next';
import { $ as $$Image } from './_astro_assets_DaMmrxVp.mjs';

const _getConfig = () => als.getStore();
const _getI18next = () => _i18next;
const _envCheck = (name, { serverOnly = false, clientFeatures = [] } = {}) => {
  if (serverOnly && false) {
    throw new Error(`\`${name}\` is only available on the server`);
  }
  if (clientFeatures.length > 0 && false) {
    const config = _getConfig();
    if (!config) {
      throw new Error(
        `\`${name}\` on the client requires using the \`<I18nClient />\` component`
      );
    }
    for (const feature of Object.keys(config.clientOptions)) {
      if (clientFeatures.includes(feature) && !config[feature]) {
        throw new Error(
          `\`${name}\` on the client requires setting \`client: { ${feature}: true }\` in the integration config`
        );
      }
    }
  }
};
const _withoutTrailingSlash = (path) => path.endsWith("/") ? path.slice(0, -1) : path;
const t = (...args) => {
  _envCheck("t", { clientFeatures: ["data", "translations"] });
  const config = _getConfig();
  const i18next = _getI18next();
  if (!config.translations.initialized) {
    i18next.init({
      lng: config.data.locale,
      defaultNS: config.translations.i18nextConfig.defaultNamespace,
      ns: config.translations.i18nextConfig.namespaces,
      resources: config.translations.i18nextConfig.resources
    });
    config.translations.initialized = true;
  }
  return i18next.t(...args);
};
const getLocale = () => {
  _envCheck("getLocale", { clientFeatures: ["data"] });
  return _getConfig().data.locale;
};
const getLocales = () => {
  _envCheck("getLocales", { clientFeatures: ["data"] });
  return _getConfig().data.locales;
};
const getLocalePath = (path, params = {}, _locale = getLocale()) => {
  _envCheck("getLocalePath", { clientFeatures: ["data", "paths"] });
  const config = _getConfig();
  const route = config.paths.routes.find(
    (route2) => route2.locale === _locale && route2.pattern === path
  );
  if (!route) {
    const prefix = config.paths.strategy === "prefix" ? `/${_locale}` : _locale === config.data.defaultLocale ? "" : `/${_locale}`;
    return `${prefix}${path}`;
  }
  let newPath = route.injectedRoute.pattern;
  for (const param of route.params) {
    const value = params[param];
    if (!value) {
      throw new Error(`Must provide "${param}" param`);
    }
    newPath = newPath.replace(`[${param}]`, value);
  }
  return newPath;
};
const switchLocalePath = (locale) => {
  _envCheck("switchLocalePath", { clientFeatures: ["data", "paths"] });
  const config = _getConfig();
  const currentLocaleRoutes = config.paths.routes.filter(
    (route2) => route2.locale === getLocale()
  );
  let currentLocaleRoute = currentLocaleRoutes.filter((route2) => route2.params.length === 0).find(
    (route2) => route2.injectedRoute.pattern === _withoutTrailingSlash(config.paths.pathname)
  );
  if (!currentLocaleRoute) {
    currentLocaleRoute = currentLocaleRoutes.filter((route2) => route2.params.length > 0).find(
      (route2) => JSON.stringify(route2.params.sort()) === JSON.stringify(
        Object.keys(config.paths.dynamicParams?.[locale] ?? {}).sort()
      )
    );
  }
  if (!currentLocaleRoute) {
    currentLocaleRoute = currentLocaleRoutes.sort(
      (a, b) => a.pattern.length - b.pattern.length
    )[0];
  }
  const route = config.paths.routes.find(
    (route2) => route2.locale === locale && currentLocaleRoute.pattern === route2.pattern
  );
  if (!route) {
    throw new Error("Couldn't find a route. Open an issue");
  }
  return getLocalePath(
    route.pattern,
    config.paths.dynamicParams?.[locale] ?? void 0,
    locale
  );
};
const getSwitcherData = () => {
  _envCheck("getSwitcherData", { clientFeatures: ["data", "paths"] });
  return getLocales().map((locale) => ({
    locale,
    href: switchLocalePath(locale)
  }));
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro();
const $$I18NClient = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$I18NClient;
  const config = als.getStore();
  if (!config) {
    throw new Error(
      "Using `<I18nClient />` requires adding the `i18n` integration to your Astro config."
    );
  }
  const { clientOptions } = config;
  const enabledClientFeatures = Object.entries(clientOptions).map(([name, enabled]) => ({ name, enabled })).filter((e) => e.enabled);
  if (enabledClientFeatures.length === 0) {
    throw new Error(
      "You need to enabled at least one client feature (`client: {...}`) in the integration config to use `<I18nClient />`."
    );
  }
  const data = clientOptions.data ? config.data : void 0;
  const translations = clientOptions.translations ? { ...config.translations, initialized: false } : void 0;
  const paths = clientOptions.paths ? config.paths : void 0;
  return renderTemplate(_a || (_a = __template(['<script type="application/json"', ">", "<\/script>"])), addAttribute(clientId, "id"), unescapeHTML(JSON.stringify({ clientOptions, data, translations, paths })));
}, "C:/Users/andre/Desktop/portafolio/node_modules/.pnpm/@astrolicious+i18n@0.5.1_astro@4.16.7_rollup@4.24.0_typescript@5.6.3__i18next@23.16.5/node_modules/@astrolicious/i18n/assets/components/I18nClient.astro", void 0);

const icon = new Proxy({"src":"/_astro/icon.a_xcZ1I7.svg","width":480,"height":480,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/icon.svg";
							}
							
							return target[name];
						}
					});

const theme = new Proxy({"src":"/_astro/theme.Cj5iaG5W.svg","width":67,"height":67,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/theme.svg";
							}
							
							return target[name];
						}
					});

const share = new Proxy({"src":"/_astro/share.BrOi9gwG.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/share.svg";
							}
							
							return target[name];
						}
					});

const download = new Proxy({"src":"/_astro/download.CK93mGLT.svg","width":32,"height":32,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/download.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$HeaderBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderBtn;
  const { icon, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="p-2 mr-2 rounded-full bg-accent hover:bg-accent active:bg-accent focus:outline-none focus:ring focus:ring-accent" data-astro-cid-l4tbvqox> <img${addAttribute(icon, "src")}${addAttribute(alt, "alt")}${addAttribute(15, "width")} class="white-svg" data-astro-cid-l4tbvqox><img data-astro-cid-l4tbvqox> </button> `;
}, "C:/Users/andre/Desktop/portafolio/src/components/HeaderBtn.astro", void 0);

const $$LocaleSwitcher = createComponent(($$result, $$props, $$slots) => {
  const locale = getLocale();
  const data = getSwitcherData();
  return renderTemplate`${maybeRenderHead()}<div class="inline-block relative mx-3"> <select class="appearance-none w-full bg-accent hover:bg-accent active:bg-accent focus:outline-none focus:ring focus:ring-accent text-gray-700 py-2 px-4 pr-8 rounded-full shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onchange="location = this.value;"> ${data.map((e) => renderTemplate`<option${addAttribute(e.href, "value")}${addAttribute(e.locale === locale, "selected")}> ${e.locale} </option>`)} </select> <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"> <svg class="fill-current h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> <path d="M5.5 8l4.5 4.5L14.5 8z"></path> </svg> </div> </div>`;
}, "C:/Users/andre/Desktop/portafolio/src/components/LocaleSwitcher.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const buttonData = [
    {
      icon: theme,
      alt: "Theme"
    },
    {
      icon: download,
      alt: "Download"
    },
    {
      icon: share,
      alt: "Share"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<nav id="home" class="flex justify-between p-4"> <img${addAttribute(icon.src, "src")}${addAttribute("Menu icon", "alt")}${addAttribute(45, "width")} class="ml-2"><img> <div class="flex items-center"> ${renderComponent($$result, "LocaleSwitcher", $$LocaleSwitcher, {})} ${buttonData.map((data) => renderTemplate`${renderComponent($$result, "HeaderBtn", $$HeaderBtn, { "icon": data.icon.src, "alt": data.alt })}`)} </div> </nav>`;
}, "C:/Users/andre/Desktop/portafolio/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Reference = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Reference;
  const {
    icon,
    link,
    alt,
    width = 35,
    useSvg = true,
    useAlt = false,
    styledClass = "",
    underline = false
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`${useSvg ? "flex" : "flex items-center justify-center mx-2"} ${styledClass}`, "class")} data-astro-cid-e5g6tzce> ${useAlt ? renderTemplate`<p${addAttribute(`${underline ? "underline-animation" : ""}`, "class")} data-astro-cid-e5g6tzce>${alt}</p>` : ""} ${renderComponent($$result, "Image", $$Image, { "src": icon, "alt": alt, "width": width, "class": `${useSvg ? "white-svg mx-5" : ""} m-auto`, "data-astro-cid-e5g6tzce": true })} </a> `;
}, "C:/Users/andre/Desktop/portafolio/src/components/Reference.astro", void 0);

const linkedin = new Proxy({"src":"/_astro/linkedin.p2AUPbn4.svg","width":50,"height":50,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/linkedin.svg";
							}
							
							return target[name];
						}
					});

const telegram = new Proxy({"src":"/_astro/telegram.CKzhEttm.svg","width":50,"height":50,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/telegram.svg";
							}
							
							return target[name];
						}
					});

const github = new Proxy({"src":"/_astro/github.B6PhdAlP.svg","width":50,"height":50,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/github.svg";
							}
							
							return target[name];
						}
					});

const gmail = new Proxy({"src":"/_astro/gmail.ClOVcIBS.svg","width":50,"height":50,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/andre/Desktop/portafolio/src/assets/gmail.svg";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const todayDate = /* @__PURE__ */ new Date();
  const today = todayDate.toISOString().split("-")[0];
  const socialMedia = [
    {
      icon: github,
      link: "https://github.com/AndresMpa",
      alt: "GitHub"
    },
    {
      icon: telegram,
      link: "https://t.me/Andres_Mpa",
      alt: "Telegram"
    },
    {
      icon: linkedin,
      link: "https://www.linkedin.com/in/andresmpa/",
      alt: "LinkedIn"
    },
    {
      icon: gmail,
      link: "mailto:ing.andres.m.prieto@gmail.com",
      alt: "Correo: ing.andres.m.prieto@gmail.com"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer id="contact" class="mx-auto bg-accent py-12"> <p class="text-center">
&copy; Copyright ${today}. ${t("footer.rights")}. ${t("footer.made")} <a href="https://github.com/AndresMpa" rel="noopener noreferrer" class="font-bold" target="_blank">@AndresMpa</a> </p> <div class="border border-white w-11/12 mx-auto my-10"></div> <div class="flex justify-center"> ${socialMedia.map((data) => renderTemplate`${renderComponent($$result, "Reference", $$Reference, { "icon": data.icon, "link": data.link, "alt": data.alt })}`)} </div> </footer>`;
}, "C:/Users/andre/Desktop/portafolio/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><!--General metadata--><meta charset="UTF-8"><meta name="description" content="I'm a software engineer focused on solving problems through top-of-the-edge technologies. I think out of code to focus on solutions"><meta name="viewport" content="width=device-width"><title>${title}</title><!--Favicon stuff--><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="theme-color" content="#09090d"><!-- Open Graph Meta Tags --><meta property="og:title" content="AndresMpa - FullStack Software Engineer"><meta property="og:site_name" content="AndresMpa's Portfolio"><meta property="og:url" content="https://andresmpa.github.io/portafolio/"><meta property="og:description" content="I'm a software engineer focused on solving problems through top-of-the-edge technologies. I think out of code to focus on solution."><meta property="og:type" content="profile"><meta property="og:image" content="https://raw.githubusercontent.com/AndresMpa/portafolio/refs/heads/main/.doc/assets/favicon.png"><!-- Twitter Card Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="AndresMpa - FullStack Software Engineer"><meta name="twitter:description" content="I'm a software engineer focused on solving problems through top-of-the-edge technologies. I think out of code to focus on solution."><meta name="twitter:url" content="https://andresmpa.github.io/portafolio/"><meta name="twitter:image" content="https://raw.githubusercontent.com/AndresMpa/portafolio/refs/heads/main/.doc/assets/favicon.png"><meta name="twitter:site" content="@AndresMpa"><meta name="twitter:creator" content="@AndresMpa">${renderComponent($$result, "I18nClient", $$I18NClient, {})}${renderHead()}</head> <body class="bg-background text-text"> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/andre/Desktop/portafolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Reference as a, t };
