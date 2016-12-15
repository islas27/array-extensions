require('../aee.js')
const expect = require('chai').expect
const sinon = require('sinon')
const data = require('./data')

describe('#each', () => {
  it('checks if the arguments recieved matches the data', () => {
    var cb = sinon.spy()
    data.letters.each(cb)
    expect(cb.getCall(0).args).to.eql([ 'a', 0 ])
    expect(cb.getCall(1).args).to.eql([ 'b', 1 ])
    expect(cb.getCall(2).args).to.eql([ 'c', 2 ])
  })

  it('checks if the # of callbacks equals length of the array', () => {
    var cb = sinon.spy()
    data.people.each(cb)
    expect(cb.callCount).to.equal(data.people.length)
  })

  it('checks if the callback its executed', () => {
    var outputAge = []
    data.people.each((element) => outputAge.push(element.age))
    expect(outputAge).to.eql(data.peopleAge)
  })

  it('checks if chainable by returning the original obj', () => {
    expect(data.letters).to.eql(data.letters.each(() => {}))
  })
})
