require('../aee.js')
const expect = require('chai').expect
const data = require('./data')

describe('#pluck', function () {
  it('returns an empty array when pluck is applied on an empty array', function () {
    expect([].pluck('property')).to.be.empty
  })

  it('throws an error message when no argument is sent to the function', function () {
    const result = data.cars.pluck
    expect(result).to.throw(ReferenceError)
  })

  it('returns an array of selected properties', function () {
    expect(data.people.pluck('age')).to.eql(data.peopleAge)
    expect(data.people.pluck('name')).to.eql(data.peopleNames)
  })

  it('returns a null for every element that lacks the selected property', function () {
    expect(data.cars.pluck('owner')).to.eql(data.carOwners)
  })

  it('returns null\'s for every element that is an actual null or undefined', () => {
    let cars2 = data.cars
    cars2.push(null, undefined)
    let carOwners2 = data.carOwners
    carOwners2.push(null, null)
    expect(cars2.pluck('owner')).to.eql(carOwners2)
  })
})
