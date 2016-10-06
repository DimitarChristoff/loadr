#!/bin/env node
'use strict';
const Loadr               = require('..').default;
const stdin               = process.stdin;
const stdout              = process.stdout;
const colors              = require('colors');
const dance               = [' o'.yellow + '/'.red + '< '.cyan, ' o'.yellow + '\\'.red + '< '.cyan];
const cols                = ['green', 'red'];
const spinner             = '⠁⠂⠄⡀⢀⠠⠐⠈'.split('');

let i = 0;
const instance            = new Loadr(null, {
  after: '...'.green,
  before: ' ' + spinner[i] + ' '
});

// without this, we would only get streams once enter is pressed
stdin.setRawMode(true);

// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
stdin.resume();

function getMessage(){
  stdout.clearLine();  // clear current text
  stdout.cursorTo(0);
  stdout.write(instance.get());
  i = i < spinner.length-1 ? i+1 : 0;
  instance.options.before = ' ' + spinner[i][cols[~~(Math.random() * cols.length)]] + ' ';
  setTimeout(getMessage, 1000);
}

console.log('');
console.log('   _  ___'+'.oOo.'.yellow+'____'+'loadr'.green+'____'+'.oOo.'.yellow+'_______________________ ____  __    _  .');
console.log('');
getMessage();

stdin.on('data', function(){
  stdout.clearLine();  // clear current text
  stdout.cursorTo(0);
  console.log('Bye.'.red);
  process.exit();
});
