import _ from 'lodash';

const operations = ['-', '+', ' '];

const formatDiffs = (diffs) => {
  const resultBody = diffs.reduce((acc, item) => {
    const { operation, key, value } = item;
    return `${acc}  ${operations[operation]} ${key}: ${value}\n`;
  }, '');
  return `{\n${resultBody}}`;
};

export default (value1, value2) => {
  const notChangedKeys = Object.keys(value1).filter((key) => value1[key] === value2[key]);
  const removedKeys = Object.keys(value1).filter((key) => !notChangedKeys.includes(key));
  const addedKeys = Object.keys(value2).filter((key) => !notChangedKeys.includes(key));
  const diff = [
    ...removedKeys.map((key) => ({ operation: 0, key, value: value1[key] })),
    ...addedKeys.map((key) => ({ operation: 1, key, value: value2[key] })),
    ...notChangedKeys.map((key) => ({ operation: 2, key, value: value1[key] })),
  ];
  const sortedDiff = _.sortBy(diff, ['key', 'operation']);

  return formatDiffs(sortedDiff);
};
