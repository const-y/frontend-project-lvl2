import _ from 'lodash';
import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const operations = ['-', '+', ' '];

const formatDiffs = (diffs) => {
  const resultBody = diffs.reduce((acc, { operation, key, value }) => `${acc}  ${operations[operation]} ${key}: ${value}\n`, '{\n');
  return `${resultBody}}`;
};

export const genObjectsDiff = (obj1, obj2) => {
  const notChangedKeys = Object.keys(obj1).filter((key) => obj1[key] === obj2[key]);
  const removedKeys = Object.keys(obj1).filter((key) => !notChangedKeys.includes(key));
  const addedKeys = Object.keys(obj2).filter((key) => !notChangedKeys.includes(key));
  const diff = [
    ...removedKeys.map((key) => ({ operation: 0, key, value: obj1[key] })),
    ...addedKeys.map((key) => ({ operation: 1, key, value: obj2[key] })),
    ...notChangedKeys.map((key) => ({ operation: 2, key, value: obj1[key] })),
  ];
  const sortedDiff = _.sortBy(diff, ['key', 'operation']);

  return formatDiffs(sortedDiff);
};

const parseFile = (filepath) => {
  const fileExt = path.extname(filepath);
  switch (fileExt) {
    case '.json': return JSON.parse(readFileSync(filepath, 'utf-8'));
    case '.yml': return yaml.load(readFileSync(filepath, 'utf-8'));
    default: throw Error('Unknown format');
  }
};

const genDiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
  return genObjectsDiff(data1, data2);
};

export default genDiff;
