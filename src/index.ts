export const toSubstring = (str?: string, length = 0, endsWith = '') =>
  str && str?.length >= length ? str.slice(0, length - 1) + endsWith : str;
