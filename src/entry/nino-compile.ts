#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();
import { compile } from '../compile';

program
  .option('-e, --entry <path>', 'set entry path. defaults to ~/src', 'src')
  .option('--lib-output', 'set cjs output path. defaults to ~/lib', 'lib')
  .option('--es-output', 'set es output path. defaults to ~/es', 'es')
  .parse(process.argv);

compile(program.opts());
