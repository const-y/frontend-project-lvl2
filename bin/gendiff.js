#!/usr/bin/env node

import { readFileSync } from 'fs';
import program from 'commander';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageData = readFileSync(join(__dirname, '..', '/package.json'));
const { version, description } = JSON.parse(packageData);

program
    .version(version)
    .description(description)

program.parse();
