import { it, expect } from '@jest/globals';
import path from 'path';
import genDiff from '../index.js';

const getFixturePath = (filename) => path.join('__fixtures__', filename);

it('should compare files correctly', () => {
  const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  expect(result).toBe(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});
