require('../aee')
const expect = require('chai').expect
const sinon = require('sinon')
const data = require('./data')

describe('#min', () => {
  it('returns null when the array is empty', () => {
    expect([].min()).to.be.null
    expect([].min((a, b) => a - b)).to.be.null
  })

  it('returns the correct value even if all the array is the same', () => {
    expect([5, 5, 5, 5].min()).to.equal(5)
    expect(['i', 'i', 'i', 'i'].min()).to.equal('i')
  })

  it('returns the smaller element when no comparer is defined and the elements are numbers', () => {
    expect(data.randomNumbers.min()).to.equal(3)
    expect(data.peopleAge.min()).to.equal(15)
    expect([3, 2, 1].min()).to.equal(1)
    expect([-25, -76, -3].min()).to.equal(-76)
  })

  it('returns the smaller element when no comparer is defined and the elements are letters', () => {
    expect(data.letters.min()).to.equal('a')
    expect(data.randomLetters.min()).to.equal('b')
  })

  it('sends the correct arguments when using a comparer and the array contains numbers', () => {
    let comparerSpy = sinon.spy((elementA, elementB) => elementA - elementB)
    const result = data.randomNumbers.min(comparerSpy)
    expect(result).to.equal(3)
    expect(comparerSpy.callCount).to.equal(data.randomNumbers.length - 1)
    expect(comparerSpy.firstCall.calledWithExactly(741, 3)).to.be.true
    expect(comparerSpy.getCall(3).calledWithExactly(3, 444)).to.be.true
    expect(comparerSpy.lastCall.calledWithExactly(3, 713)).to.be.true
  })

  it('sends the correct arguments when using a comparer and the array contains letters', () => {
    let comparerSpy = sinon.spy((elementA, elementB) => elementA.localeCompare(elementB))
    const result = data.randomLetters.min(comparerSpy)
    expect(result).to.equal('b')
    expect(comparerSpy.callCount).to.equal(data.randomLetters.length - 1)
    expect(comparerSpy.firstCall.calledWithExactly('b', 'd')).to.be.true
    expect(comparerSpy.getCall(3).calledWithExactly('b', 'm')).to.be.true
    expect(comparerSpy.lastCall.calledWithExactly('b', 'u')).to.be.true
  })

  it('returns the correct object when using comparer to select with numbers', () => {
    let comparerSpy = sinon.spy((elementA, elementB) => elementA.age - elementB.age)
    let result = data.people.min(comparerSpy)
    expect(result.name).to.equal('Juan')
    result = data.devs.min(comparerSpy)
    expect(result.name).to.equal('juan')
  })

  it('returns the correct object when using comparer to select with letters', () => {
    let comparerSpy = sinon.spy((elementA, elementB) => elementA.name.localeCompare(elementB.name))
    let result = data.femaleChildren.min(comparerSpy)
    expect(result.name).to.equal('ana')
    result = data.maleChildren.min(comparerSpy)
    expect(result.name).to.equal('bany')
  })
})
