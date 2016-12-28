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

  it('keeps the original array unmodified, returning a \'new\' copy', () => {
    expect(data.unflattenedArrayNumbersS.flatten()).to.eql(data.flattenedArrayNumbersS)
    expect(data.unflattenedArrayNumbersS.length).to.equal(4)
    expect(data.unflattenedArrayNumbersL.flatten()).to.eql(data.flattenedArrayNumbersL)
    expect(data.unflattenedArrayLettersS.length).to.equal(6)
  })

  it('returns the correct answer in more complex arrays', () => {
    expect(data.unflattenedArrayLettersS.flatten()).to.eql(data.flattenedArrayLettersS)
    expect(data.unflattenedArrayLettersL.flatten()).to.eql(data.flattenedArrayLettersL)
  })
})
