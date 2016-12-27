require('../aee')
const expect = require('chai').expect
const sinon = require('sinon')
const data = require('./data')

describe('#max', () => {
  it('returns null when the array is empty', () => {
    expect([].max()).to.be.null
    expect([].max((a, b) => a - b)).to.be.null
  })

  it('returns the correct value even if all the array is the same', () => {
    expect([5, 5, 5, 5].max()).to.equal(5)
    expect(['i', 'i', 'i', 'i'].max()).to.equal('i')
  })

  it('returns the bigger element when no comparer is defined and the elements are numbers', () => {
    expect(data.randomNumbers.max()).to.equal(801)
    expect(data.peopleAge.max()).to.equal(24)
    expect([3, 2, 1].max()).to.equal(3)
  })

  it('returns the bigger element when no comparer is defined and the elements are letters', () => {
    expect(data.letters.max()).to.equal('c')
    expect(data.randomLetters.max()).to.equal('z')
  })

  it('throws a ReferenceError when the array is made of objects and no comparer is defined', () => {
    expect(() => data.devs.max(), null, null).to.throw(ReferenceError)
  })

  it('sends the correct arguments when using a comparer and the array contains numbers', () => {
    let comparerSpy = sinon.spy((elementA, elementB) => elementA - elementB)
    const result = data.randomNumbers.max(comparerSpy)
    expect(result).to.equal(801)
    expect(comparerSpy.callCount).to.equal(data.randomNumbers.length - 1)
    expect(comparerSpy.firstCall.calledWithExactly(741, 3)).to.be.true
    expect(comparerSpy.getCall(3).calledWithExactly(801, 444)).to.be.true
    expect(comparerSpy.lastCall.calledWithExactly(801, 713)).to.be.true
  })

  it('sends the correct arguments when using a comparer and the array contains letters', () => {
    let comparerSpy = sinon.spy((elementA, elementB) => elementA.localeCompare(elementB))
    const result = data.randomLetters.max(comparerSpy)
    expect(result).to.equal('z')
    expect(comparerSpy.callCount).to.equal(data.randomLetters.length - 1)
    expect(comparerSpy.firstCall.calledWithExactly('b', 'd')).to.be.true
    expect(comparerSpy.getCall(3).calledWithExactly('z', 'm')).to.be.true
    expect(comparerSpy.lastCall.calledWithExactly('z', 'u')).to.be.true
  })

  it('returns the correct object when using comparer to select with numbers', () => {
    let comparerSpy = sinon.spy((elementA, elementB) => elementA.age - elementB.age)
    let result = data.people.max(comparerSpy)
    expect(result.name).to.equal('Jonathan')
    result = data.devs.max(comparerSpy)
    expect(result.name).to.equal('pedro')
  })

  it('returns the correct object when using comparer to select with letters', () => {
    let comparerSpy = sinon.spy((elementA, elementB) => elementA.name.localeCompare(elementB.name))
    let result = data.femaleChildren.max(comparerSpy)
    expect(result.name).to.equal('yadi')
    result = data.maleChildren.max(comparerSpy)
    expect(result.name).to.equal('rod')
  })
})
