(function(global) {
  var qunar = {};

  qunar.VERSION = '0.0.1';
  qunar.lesson = 'L1: namespace';

  if (global.qunar) {
    throw new Error('qunar has already been defined');
  } else {
    global.qunar = qunar;
  }
})(this);