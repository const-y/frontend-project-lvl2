import { it, expect } from '@jest/globals';
import genDiff from '../src/genDiff';

it('should compare correctly', () => {
  const value1 = {};
  const value2 = {};
  const result = genDiff(value1, value2);
  expect(result).toEqual({});
});
