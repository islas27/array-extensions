var expect = require('chai').expect,
    nvec = require('../aee.js')
    people = [
      {name: 'Pedro', age: 19 },
      {name: 'Juan', age: 15 },
      {name: 'Pablo', age: 16 },
      {name: 'Pancho', age: 20 },
      {name: 'Topo', age: 18 },
      {name: 'Jonathan', age: 24}
    ];

describe('Setting up the environment', function () {
  it('checks if testing works', function() {
    var theTruth = true;
    expect(theTruth).to.equal(true);
  });
});

describe('#each', function () {
  it('checks if the callback its executed', function () {
    var ageResults = [19, 15, 16, 20, 18, 24];
    var falseAgeResults = [19, 15, 16, 20, 18, 25];
    var outputAge = [];
    people.each(function (element) {
      outputAge.push(element.age);
    });
    expect(outputAge).to.eql(ageResults);
    expect(outputAge).to.not.eql(falseAgeResults);
  });
  it('checks if the method is chainable', function () {
    var nameResults = ["Pedro", "Juan", "Pablo", "Pancho", "Topo", "Jonathan"];
    var ageResults = [19, 15, 16, 20, 18, 24];
    var outputNames = [], outputAge = [];
    people.each(function (element) {
      outputAge.push(element.age);
    }).each(function (element) {
      outputNames.push(element.name)
    });
    expect(outputAge).to.eql(ageResults);
    expect(outputNames).to.eql(nameResults);
  })
})
