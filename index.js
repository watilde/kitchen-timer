var yargs = require('yargs');
var baudio = require('baudio');
var foever = require('forever');

console.log(yargs);

var b = baudio(function (t, i) {
  if (i === 1000000) process.exit(0);
  // taken from some demoscene video
  return ((
    (i & 0x71) * Math.floor(i / 3571) * Math.floor(i / 3559)
  ) % 256) / 128 - 1;
});
b.play();
