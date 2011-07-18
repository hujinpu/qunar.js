load('riot.js');
Riot.require('../qunar.core.js');

Riot.context('qunar.core.js', function() {
  given('the qunar object', function() {
    should('be global and accessible', qunar).isNotNull();
    should('return a VERSION', qunar.VERSION).isNotNull();
    should('be qunar complete', true).isTrue();
  });
});

Riot.run();