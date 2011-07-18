function Vector(x, y) {
  this.constructor = arguments.callee; //正确维护constructor，以便回溯外部原型链

  this.x = x;
  this.y = y;
}

Vector.prototype.toString = function() {
  return 'x: ' + this.x + ', y: ' + this.y;
}

var v = new Vector(1, 2);
print(v); // x: 1, y: 2

Vector.prototype.add = function(vector) {
  this.x += vector.x;
  this.y += vector.y;
  return this;
}

v.add(new Vector(5, 5));
print(v); // x: 6, y: 7

function Point(x, y, colour) {
  this.constructor.prototype.constructor.apply(this, arguments); //super

  this.constructor = arguments.callee; //正确维护constructor，以便回溯外部原型链

  this.colour = colour;
}

Point.prototype = new Vector;
// Point.prototype.constructor = Point;
// http://jinpu.wordpress.com/2010/03/21/master-javascript-object-system/

var p = new Point(1, 2, 'red');

print(p.constructor);
print(p.constructor.prototype.constructor);

print(p.colour); // red
print(p.x); // 1

print(p.hasOwnProperty('colour')); // true