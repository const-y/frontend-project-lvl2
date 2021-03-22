#!/usr/bin/env node

import { readFileSync } from 'fs';
import program from 'commander';
import { join } from 'path';
import genDiff from '../src/genDiff.js';
import { __dirname } from '../src/projectPath';

const packageData = readFileSync(
  join(__dirname, '..', '/package.json'),
  'utf-8',
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
