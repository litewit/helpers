export const toSubstring = (str?: string, length = 0, endsWith = '') =>
  str && str?.length >= length ? str.slice(0, length - 1) + endsWith : str;

export const isPromise = (foo: any) => !!foo?.then && typeof foo.then === 'function';

export const parseNum = (num: number | string | undefined | null) =>
  parseInt(String(num), 10) || 0;

export const equalNum = (
  num1: number | string | undefined | null,
  num2: number | string | undefined | null,
) => !!num1 && !!num2 && parseNum(num1) === parseNum(num2);

export function reduceUniqueIds<T>(ids: T[], id?: T) {
	if (id && !ids.includes(id)) {
		ids.push(id);
	}
	return ids;
}

export const sortById = (id1?: number, id2?: number, desc = false): number => {
  if (!id1 ) {
    return 1;
  }
  if (!id2 ) {
    return -1;
  }
  if (desc) {
    return id2 != id1 ? (id2 - id1 > 0 ? 1 : -1) : 0;
  } else {
    return id2 != id1 ? (id1 - id2 > 0 ? 1 : -1) : 0;
  }
};

export const sortByDate = (d1?: string, d2?: string, desc = false): number => {
  if (!d1 ) {
    return 1;
  }
  if (!d2 ) {
    return -1;
  }
  if (desc) {
    return d2 != d1 ? (new Date(d2).getTime() - new Date(d1).getTime() > 0 ? 1 : -1) : 0;
  } else {
    return d2 != d1 ? (new Date(d1).getTime() - new Date(d2).getTime() > 0 ? 1 : -1) : 0;
  }
};
