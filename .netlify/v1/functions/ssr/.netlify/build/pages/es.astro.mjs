/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_aSm7G1vp.mjs';
import { t, $ as $$Layout } from '../chunks/Layout_BOXMa58f.mjs';
import { $ as $$Greeter, a as $$Dock, b as $$Experience, c as $$Project, d as $$Education, e as $$Community } from '../chunks/Experience_BeSo2M7_.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = `${t("title")}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Greeter", $$Greeter, {})} ${renderComponent($$result2, "Dock", $$Dock, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Project", $$Project, {})} ${renderComponent($$result2, "Education", $$Education, {})} ${renderComponent($$result2, "Community", $$Community, {})} ` })}`;
}, "C:/Users/andre/Desktop/portafolio/.astro/astro-i18n/entrypoints/es/index.astro", void 0);

const $$file = "C:/Users/andre/Desktop/portafolio/.astro/astro-i18n/entrypoints/es/index.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
