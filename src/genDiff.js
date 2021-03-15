const prefixes = {
  added: '+',
  removed: '-',
  nothing: ' ',
};

const compareByKey = (value1, value2, key) => {
  if (value1 === value2) {
    // not changed
    return [`${prefixes.nothing} ${key}: ${value1}`];
  }
  if (value1 === undefined) {
    // value was added
    return [`${prefixes.added} ${key}: ${value2}`];
  }
  if (value2 === undefined) {
    // value was removed
    return [`${prefixes.removed} ${key}: ${value1}`];
  }
  // both values is set - changed
  return [
    `${prefixes.removed} ${key}: ${value1}`,
    `${prefixes.added} ${key}: ${value2}`,
  ];
};

const formatDiffs = (diffs) => {
  let result = '{\n';
  diffs.forEach((diff) => {
    result += `  ${diff}\n`;
  });
  result += '}';
  return result;
};

export default (value1, value2) => {
  const diffs = [];
  const sortedKeys = [...new Set([...Object.keys(value1), ...Object.keys(value2)])].sort();

  sortedKeys.forEach((key) => {
    diffs.push(...compareByKey(value1[key], value2[key], key));
  });

  return formatDiffs(diffs);
};
