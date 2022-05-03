import { toSubstring } from '../index';

test('toSubstring', () => {
  expect(toSubstring('Hello Carl', 6, '...')).toBe('Hello...');
});