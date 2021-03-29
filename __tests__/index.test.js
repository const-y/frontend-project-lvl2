import { describe, expect, test } from '@jest/globals';
import path from 'path';
import { __dirname } from '../src/projectPath';
import genDiff from '../index.js';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const getFixturePaths = (...filePaths) => filePaths.map((filepath) => getFixturePath(filepath));

describe('genDiff()', () => {
  const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

  test('comparing flat json files', () => {
    const result = genDiff(...getFixturePaths('file1.json', 'file2.json'));
    expect(result).toBe(expected);
  });

  test('comparing flat yml files', () => {
    const result = genDiff(...getFixturePaths('file1.yml', 'file2.yml'));
    expect(result).toBe(expected);
  });
});
