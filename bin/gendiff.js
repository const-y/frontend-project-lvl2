#!/usr/bin/env node

import { readFileSync } from 'fs';
import program from 'commander';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const filename = fileURLToPath(import.meta.url);

const packageData = readFileSync(join(dirname(filename), '..', '/package.json'));
const { version, description } = JSON.parse(packageData);

program.version(version).description(description);

program.parse();
