import _ from 'lodash';
import { readFileSync } from 'fs';

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

const genDiff = (filepath1, filepath2) => {
  const data1 = JSON.parse(readFileSync(filepath1));
  const data2 = JSON.parse(readFileSync(filepath2));
  return genObjectsDiff(data1, data2);
};

export default genDiff;
