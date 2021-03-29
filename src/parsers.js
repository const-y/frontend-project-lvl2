import { readFileSync } from 'fs';
import yaml from 'js-yaml';
import path from 'path';

const getParser = (format) => {
  switch (format) {
    case '.json': return JSON.parse;
    case '.yml': return yaml.load;
    default: throw Error('Unknown format');
  }
};

export default (filepath) => {
  const format = path.extname(filepath);
  return getParser(format)(readFileSync(filepath, 'utf-8'));
};
