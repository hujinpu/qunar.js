load('riot.js');
Riot.require('../qunar.core.js');
Riot.require('../qunar.oo.js');

Riot.context('qunar.oo.js', function() {

  given('create a class', function() {
    var User = qunar.Class({
      initialize: function(name, age) {
        this.name = name;
        this.age  = age;
      }
    });

    var jinpu = new User('jinpu', 27);
    should('jinpu\'s age is 27', jinpu.age).equals(27);
    should('jinpu\'s name is jinpu', jinpu.name).equals('jinpu');
  });

});

Riot.run();