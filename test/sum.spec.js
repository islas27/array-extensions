require('../aee')
const expect = require('chai').expect
const sinon = require('sinon')
const data = require('./data')

describe('#sum', () => {
  it('returns 0 when the array is empty', () => {
    expect([].sum()).to.equal(0)
    expect([].sum(x => x * 2)).to.equal(0)
  })

  it('returns a string when the elements of the array are strings', () => {
    expect(data.letters.sum()).to.equal('abc')
    const result = data.children
      .where((child, index) => index < 3)
      .select(child => child.name)
      .sum()
    expect(result).to.equal('anafostojane')
  })

  it('returns the sum of the elements when no spec() is defined', () => {
    expect(data.numbers.sum()).to.equal(45)
    expect(data.evenNumbers.sum()).to.equal(110)
    expect(data.oddNumbers.sum()).to.equal(100)
  })

  it('returns the correct answer when a spec is defined', () => {
    expect(data.numbers.sum(number => number * 2)).to.equal(90)
    expect(data.evenNumbers.sum(number => number / 2)).to.equal(55)
    expect(data.oddNumbers.sum(number => number * number)).to.equal(1330)
    const result = data.children
      .where((child, index) => index < 3)
      .sum(child => child.name)
    expect(result).to.equal('anafostojane')
  })
})
