var args = require('yargs').argv;
var baudio = require('baudio');
var foever = require('forever');
var mSecond = 0;
var second = args.s || args.second || void 0;
var minute = args.m || args.minute || void 0;
var hour = args.hour || args.hour || void 0;

if (typeof second === 'number' && second > 0) {
  mSecond += second * 1000;
}

if (typeof second === 'number' && minute > 0) {
  mSecond += minute * 1000 * 60;
}

if (typeof hour === 'number' && hour > 0) {
  mSecond += hour * 1000 * 60 * 60;
}

setTimeout(function () {
  var b = baudio(function (t, i) {
    if (i === 100000) process.exit(0);
    // taken from some demoscene video
    return ((
      (i & 0x71) * Math.floor(i / 3571) * Math.floor(i / 3559)
    ) % 256) / 128 - 1;
  });
  b.play();
}, mSecond);
