require('../aee.js')
const expect = require('chai').expect
const sinon = require('sinon')
const data = require('./data')

describe('#count', () => {
  it('returns the length of the array if no spec() is defined', () => {
    expect(data.letters.count()).to.equal(3)
    expect(data.devs.count()).to.equal(4)
  })

  it('returns the correct number of matching elements', () => {
    expect(data.people.count(person => person.age > 100)).to.equal(0)
    expect(data.devs.count(dev => dev.skills.any('PHP'))).to.equal(1)
    expect(data.devs.count(dev => dev.age < 25)).to.equal(2)
  })

  it('returns the correct values when dealing with empty arrays', () => {
    expect([].count()).to.equal(0)
    expect([].count((element) => element.something)).to.equal(0)
  })

  it('sends the correct arguments to spec()', () => {
    let specSpy = sinon.spy(person => person.age > 50)
    const result = data.people.count(specSpy)
    expect(result).to.equal(0)
    expect(specSpy.callCount).to.equal(6)
    expect(specSpy.lastCall.calledWithExactly(data.people[5], 5)).to.be.true
    expect(specSpy.lastCall.returnValue).to.be.false
  })
})
