// src/lib/utils.ts

export function localizeHref(path: string, locale: string) {
  return `/${locale}${path}`;
}

export function titleCase(value: string) {
  return value.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}
