require('../aee.js')
const expect = require('chai').expect
const data = require('./data')

describe('#pluck', () => {
  it('returns an empty array when pluck is applied on an empty array', () => {
    expect([].pluck('property')).to.be.empty
  })

  it('returns a null when no argument is sent to the function', () => {
    expect(data.cars.pluck()).to.be.null
  })

  it('returns an array of selected properties', () => {
    expect(data.people.pluck('age')).to.eql(data.peopleAge)
    expect(data.people.pluck('name')).to.eql(data.peopleNames)
  })

  it('returns a null for every element that lacks the selected property', () => {
    expect(data.cars.pluck('owner')).to.eql(data.carOwners)
  })
})
