// src/lib/utils.ts

export function localizeHref(path: string, locale: string) {
  return `/${locale}${path}`;
}
