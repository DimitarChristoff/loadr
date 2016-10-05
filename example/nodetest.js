#!/bin/env node
const Loadr               = require('..').default;
const stdin               = process.stdin;
const stdout              = process.stdout;
const colors              = require('colors');
const dance               = [' o'.yellow + '/'.red + '< '.cyan, ' o'.yellow + '\\'.red + '< '.cyan];
const instance            = new Loadr(null, {
  after: '...'.green,
  before: dance[0]
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
  instance.options.before = instance.options.before === dance[0] ? dance[1] : dance[0];
  setTimeout(getMessage, 1000);
}

getMessage();

stdin.on('data', function(){
  process.exit();
  console.log('Bye');
});
