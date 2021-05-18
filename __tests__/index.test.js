import { describe, expect, test } from '@jest/globals';
import path from 'path';
import { readFileSync } from 'fs';
import { __dirname } from '../src/projectPath';
import genDiff from '../index.js';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

describe('genDiff()', () => {
  const expected = readFile('formattedDiff');

  test('comparing flat json files', () => {
    const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
    expect(result).toBe(expected);
  });

  test('comparing flat yml files', () => {
    const result = genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'));
    expect(result).toBe(expected);
  });
});
