import { it, expect } from '@jest/globals';
import genDiff from '../src/genDiff';

it('should compare correctly', () => {
  const value1 = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };
  const value2 = {
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  };
  const result = genDiff(value1, value2);
  expect(result).toBe(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});
