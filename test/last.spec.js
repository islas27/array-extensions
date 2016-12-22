require('../aee.js')
const expect = require('chai').expect
const sinon = require('sinon')
const data = require('./data')

describe('#last', () => {
  it('returns the last element of the array when no spec is defined', () => {
    const result = data.letters.last()
    expect(result).to.have.length(1)
    expect(result).to.equal('c')
  })

  it('returns the last element of the array that matches spec()', () => {
    let result = data.people.last(person => person.age < 22).name
    expect(result).to.equal('Topo')
    result = data.devs.last(dev => dev.skills.any('C#')).name
    expect(result).to.equal('juan')
  })

  it('returns null if no element matches spec()', () => {
    expect(data.devs.last(dev => dev.skills.any('Ruby'))).to.be.null
    expect(data.people.last(person => person.age > 80)).to.be.null
  })

  it('calls spec() the least amount of times as possible', () => {
    let specSpy = sinon.spy(dev => dev.age === 23)
    const result = data.devs.last(specSpy).name
    expect(result).to.equal('juan')
    expect(specSpy.callCount).to.equal(3)
  })

  it('it sends the correct arguments to spec()', () => {
    let specSpy = sinon.spy(person => person.age < 18)
    const result = data.people.last(specSpy).name
    expect(result).to.equal('Pablo')
    expect(specSpy.callCount).to.equal(4)
    expect(specSpy.firstCall.calledWithExactly(data.people[5], 5)).to.be.true
    expect(specSpy.firstCall.returnValue).to.be.false
    expect(specSpy.lastCall.calledWithExactly(data.people[2], 2)).to.be.true
    expect(specSpy.lastCall.returnValue).to.be.true
  })
})
