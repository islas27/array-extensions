var should = require('chai').should(),
    nvec = require('../aee.js')
    people = [
      {name: 'Pedro', age: 19 },
      {name: 'Juan', age: 15 },
      {name: 'Pablo', age: 16 },
      {name: 'Pancho', age: 20 },
      {name: 'Topo', age: 18 },
      {name: 'Jonathan', age: 24}
    ];

describe('Setting up the environment', function() {
  it('checks if testing works', function() {
    var theTruth = true;
    theTruth.should.equal(true);
  });
});
