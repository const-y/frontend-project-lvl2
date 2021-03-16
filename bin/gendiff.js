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
    console.log(genDiff(filepath1, filepath2));
  });

program.parse();

const options = program.opts();

if (options.format) {
  console.log(`- ${options.format}`);
}
