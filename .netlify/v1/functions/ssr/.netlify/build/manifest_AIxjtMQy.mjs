import { g as decodeKey } from './chunks/astro/server_aSm7G1vp.mjs';
import './chunks/shared_7fDa3uFo.mjs';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/andre/Desktop/portafolio/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.16.7_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B5GXAdQZ.css"},{"type":"inline","content":".single-img[data-astro-cid-gld6jnbj]{box-shadow:#9b9c9f6b 0 60px 123px -25px,#9b9c9f14 0 35px 75px -35px;transform:perspective(800px) rotateY(25deg) scale(.8) rotateX(10deg);transition:transform .6s ease,box-shadow .6s ease}.single-img[data-astro-cid-gld6jnbj]:hover{box-shadow:0 19px 67px -38px #9b9c9fcc;transform:perspective(800px) rotateY(-15deg) translateY(-50px) rotateX(10deg) scale(1)}.flipped[data-astro-cid-gld6jnbj]{transform:perspective(800px) rotateY(-25deg) scale(.8) rotateX(10deg)}.flipped[data-astro-cid-gld6jnbj]:hover{transform:perspective(800px) rotateY(15deg) translateY(-50px) rotateX(10deg) scale(1)}@keyframes scroll{0%{transform:translate(40%)}to{transform:translate(-100%)}}.animate-scroll[data-astro-cid-zhxkjw2l]{display:inline-flex;animation:scroll 15s linear infinite}.scrollbar-hidden[data-astro-cid-xpq65ryk]::-webkit-scrollbar{display:none}.scrollbar-hidden[data-astro-cid-xpq65ryk]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/es","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":".astro/astro-i18n/entrypoints/es/index.astro","pathname":"/es","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B5GXAdQZ.css"},{"type":"inline","content":".single-img[data-astro-cid-gld6jnbj]{box-shadow:#9b9c9f6b 0 60px 123px -25px,#9b9c9f14 0 35px 75px -35px;transform:perspective(800px) rotateY(25deg) scale(.8) rotateX(10deg);transition:transform .6s ease,box-shadow .6s ease}.single-img[data-astro-cid-gld6jnbj]:hover{box-shadow:0 19px 67px -38px #9b9c9fcc;transform:perspective(800px) rotateY(-15deg) translateY(-50px) rotateX(10deg) scale(1)}.flipped[data-astro-cid-gld6jnbj]{transform:perspective(800px) rotateY(-25deg) scale(.8) rotateX(10deg)}.flipped[data-astro-cid-gld6jnbj]:hover{transform:perspective(800px) rotateY(15deg) translateY(-50px) rotateX(10deg) scale(1)}@keyframes scroll{0%{transform:translate(40%)}to{transform:translate(-100%)}}.animate-scroll[data-astro-cid-zhxkjw2l]{display:inline-flex;animation:scroll 15s linear infinite}.scrollbar-hidden[data-astro-cid-xpq65ryk]::-webkit-scrollbar{display:none}.scrollbar-hidden[data-astro-cid-xpq65ryk]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/","pattern":"^\\/$","segments":[],"params":[],"component":".astro/astro-i18n/entrypoints/en/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B5GXAdQZ.css"}],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B5GXAdQZ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/andre/Desktop/portafolio/.astro/astro-i18n/entrypoints/en/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/andre/Desktop/portafolio/.astro/astro-i18n/entrypoints/es/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/andre/Desktop/portafolio/src/pages/es/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/andre/Desktop/portafolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.16.7_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:.astro/astro-i18n/entrypoints/es/index@_@astro":"pages/es.astro.mjs","\u0000@astro-page:.astro/astro-i18n/entrypoints/en/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"pages/es.astro2.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro2.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_AIxjtMQy.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/muvim.qid5MGEd.png","/_astro/advice.BsM_czX7.png","/_astro/Lyra.DYbsEjMu.png","/_astro/game.Bpx9mVJP.png","/_astro/babylon.6HhKaI1K.jpg","/_astro/parking.BppdfNIt.png","/_astro/ubuco.BtzoS5AZ.png","/_astro/arch.yTfJ7z-G.png","/_astro/NFT.CFBjo9UN.png","/_astro/flisol.B5Z00GDo.png","/_astro/todo.DXoq6eT1.png","/_astro/forest.w4asJRa4.png","/_astro/dotfiles.DeJexuHe.png","/_astro/download.CK93mGLT.svg","/_astro/theme.Cj5iaG5W.svg","/_astro/share.BrOi9gwG.svg","/_astro/icon.a_xcZ1I7.svg","/_astro/gmail.ClOVcIBS.svg","/_astro/linkedin.p2AUPbn4.svg","/_astro/telegram.CKzhEttm.svg","/_astro/github.B6PhdAlP.svg","/_astro/link.4iJAfVfH.svg","/_astro/index.B5GXAdQZ.css","/favicon.ico","/robots.txt"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"DYSxhq/YkahQtDAvHBTvAD3Bv+gLpZmQ8VmBXYcQ36g=","experimentalEnvGetSecretEnabled":false});

export { manifest };
