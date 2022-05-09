import { equalNum, isPromise, parseNum, reduceUniqueIds, sortByDate, sortById, toSubstring } from '../index';

describe('helpers fucntions', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    // return initializeFoodDatabase();
  });

  test('toSubstring', () => {
    expect(toSubstring('Hello Carl', 6, '...')).toBe('Hello...');
  });
  
  test('isPromise', () => {
    const promiseFn = async () => { return Promise.resolve(() => console.log('Hello world!')) }
    const nonPromiseFn = () => { console.log('Hello world!')}
    expect(isPromise(promiseFn())).toBe(true);
    expect(isPromise(nonPromiseFn())).toBe(false);
  });
  
  test('parseNum', () => {
    expect(parseNum('1')).toBe(1);
    expect(parseNum(1)).toBe(1);
    expect(parseNum('one')).toBe(0);
    expect(parseNum(undefined)).toBe(0);
    expect(parseNum(null)).toBe(0);
  });
  
  test('equalNum', () => {
    expect(equalNum('1', 1)).toBe(true);
    expect(equalNum(1, 1)).toBe(true);
    expect(equalNum(1, undefined)).toBe(false);
    expect(equalNum(0, undefined)).toBe(false);
    expect(equalNum(1, null)).toBe(false);
    expect(equalNum(0, null)).toBe(false);
    expect(equalNum(0, 0)).toBe(false);
    expect(equalNum('0', 0)).toBe(false);
  });
  
  test('reduceUniqueIds', () => {
    const randomIds = [23, 43, 11, 11, 22, 22];
    const randomObjs = [{key: "abc"}, {key: "abc"}, {key: "def"}, {key: "abc"}];
    const ids = randomIds.reduce<number[]>(
      (ids, id) => reduceUniqueIds(ids, id),
      [],
    );
    const keys = randomObjs.reduce<string[]>(
      (keys, {key}) => reduceUniqueIds(keys, key),
      [],
    );
    expect(ids).toEqual([23, 43, 11, 22]);
    expect(keys).toEqual(["abc", "def"]);
  });
  
  test('sortById', () => {
    const randomObjs = [{id: 12, value: "abc"}, {id: 2, value: "def"}, {id: 22, value: "ghi"}];
    randomObjs.sort(({id: id1}, {id: id2}) => sortById(id1, id2));
    expect(randomObjs).toEqual([{id: 2, value: "def"}, {id: 12, value: "abc"}, {id: 22, value: "ghi"}]);
    randomObjs.sort(({id: id1}, {id: id2}) => sortById(id1, id2, true));
    expect(randomObjs).toEqual([{id: 22, value: "ghi"}, {id: 12, value: "abc"}, {id: 2, value: "def"}]);
  });
  
  test('sortByDate', () => {
    const randomObjs = [{id: 12, date: "5-15-2022"}, {id: 12, date: "5-12-2022"}, {id: 12, date: "5-1-2022"}];
    randomObjs.sort(({date: d1}, {date: d2}) => sortByDate(d1, d2));
    expect(randomObjs).toEqual([{id: 12, date: "5-1-2022"}, {id: 12, date: "5-12-2022"}, {id: 12, date: "5-15-2022"}]);
    randomObjs.sort(({date: d1}, {date: d2}) => sortByDate(d1, d2, true));
    expect(randomObjs).toEqual([{id: 12, date: "5-15-2022"}, {id: 12, date: "5-12-2022"}, {id: 12, date: "5-1-2022"}]);
  });

});