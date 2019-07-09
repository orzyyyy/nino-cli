#!/usr/bin/env node

import program from 'commander';
import { joinWithRootPath } from '../utils/common';
const proc = program.runningCommand;
const info = require(joinWithRootPath('package.json'));

program
  .version(info.version, '-v, --version')
  .usage('[command] [options]')
  .command('go [options]', 'to start a server, for development')
  .command(
    'koei [options]',
    'to build and write static files to `config.output`',
  )
  .command('test [options]', 'run test, using jest and enzyme')
  .command('compile [options]', 'es6 -> es5')
  .command('prettier [options]', 'prettier for code')
  .command('eslint [options]', 'check lint style')
  .parse(process.argv);

process.on('SIGINT', function() {
  if (proc) {
    proc.kill('SIGKILL');
  }
  process.exit(0);
});

if (proc) {
  proc.on('error', () => {
    process.exit(1);
  });
  proc.on('close', process.exit.bind(process));
}
