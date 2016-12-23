require('../aee.js')
const expect = require('chai').expect
const sinon = require('sinon')
const data = require('./data')

describe('#index', () => {
  it('returns -1 when no spec is sent', () => {
    expect(data.people.index()).to.be.equal(-1)
    expect(data.numbers.index()).to.be.equal(-1)
  })

  it('returns the correct element when spec is a value or object', () => {
    expect(data.numbers.index(2)).to.equal(2)
    expect(data.letters.index('b')).to.equal(1)
    expect(data.children.index({name: 'bany', sex: 'm'})).to.equal(5)
  })

  it('returns the correct index when using a function as spec', () => {
    let specSpy = sinon.spy(child => child.sex === 'm' && child.name.length > 4)
    let result = data.children.index(specSpy)
    expect(result).to.equal(8)
    expect(specSpy.callCount).to.equal(9)
    specSpy = sinon.spy(child => child.sex === 'f' && child.name.length < 4)
    result = data.children.index(specSpy)
    expect(result).to.equal(0)
    expect(specSpy.callCount).to.equal(1)
    specSpy = sinon.spy(dev => dev.skills.any('PHP'))
    result = data.devs.index(specSpy)
    expect(result).to.equal(1)
    expect(specSpy.callCount).to.equal(2)
  })

  it('sends the correct arguements to the function spec', () => {
    let specSpy = sinon.spy(person => child.name.length === 6)
    let result = data.people.index(specSpy)
    expect(result.name).to.be.equal('Pancho')
    expect(specSpy.firstCall.calledWithExactly(data.people[0], 0)).to.be.true
    expect(specSpy.firstCall.returnValue).to.be.false
    expect(specSpy.lastCall.calledWithExactly(data.people[3], 3)).to.be.true
    expect(specSpy.lastCall.returnValue).to.be.true
  })

  it('returns -1 when no element matches the spec', () => {
    let result = data.people.index(person => person.name.length > 20)
    expect(result).to.equal(-1)
    result = data.devs.index(dev => dev.skills.any('Go'))
    expect(result).to.equal(-1)
  })
})
