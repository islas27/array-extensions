require('../aee')
const expect = require('chai').expect
const data = require('./data')

describe('#flatten', () => {
  it('returns empty array when applied on an empty array', () => {
    expect([].flatten()).to.be.empty
  })

  it('returns the same array when no flatten is needed', () => {
    expect(data.numbers.flatten()).to.eql(data.numbers)
    expect(data.letters.flatten()).to.eql(data.letters)
    expect(['a']).to.eql(['a'])
  })

  it('returns the correct answer', () => {
    expect(data.unflattenedArrayNumbersS.flatten()).to.eql(data.flattenedArrayNumbersS)
    expect(data.unflattenedArrayNumbersL.flatten()).to.eql(data.flattenedArrayNumbersL)
    expect(data.unflattenedArrayLettersS.flatten()).to.eql(data.flattenedArrayLettersS)
    expect(data.unflattenedArrayLettersL.flatten()).to.eql(data.flattenedArrayLettersL)
  })
})
