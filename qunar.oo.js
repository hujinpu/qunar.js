qunar.Class = function() {
  return qunar.oo.create.apply(this, arguments);
}

qunar.oo = {
  create: function(methods) {
    function klass() {
      this.initialize.apply(this, arguments);
    };

    // Copy the passed in methods
    qunar.oo.extend(klass.prototype, methods);

    // Set the constructor
    klass.prototype.constructor = klass;

    // If there's no initialize method, set an empty one
    if (!klass.prototype.initialize)
      klass.prototype.initialize = function() {};

    return klass;
  },

  extend: function(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
  }
};