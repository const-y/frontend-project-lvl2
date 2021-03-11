#!/usr/bin/env node

import { readFileSync } from 'fs';
import program from 'commander';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import genDiff from '../src/genDiff.js';

const filename = fileURLToPath(import.meta.url);

const packageData = readFileSync(
  join(dirname(filename), '..', '/package.json'),
);
const { version, description } = JSON.parse(packageData);

program
  .version(version)
  .arguments('<filepath1> <filepath2>')
  .description(description)
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    try {
      const data1 = JSON.parse(readFileSync(filepath1));
      const data2 = JSON.parse(readFileSync(filepath2));
      console.log(genDiff(data1, data2));
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.error(`File '${error.path}' not found`);
      } else {
        console.error(error);
      }
    }
  });

program.parse();

const options = program.opts();

if (options.format) {
  console.log(`- ${options.format}`);
}
