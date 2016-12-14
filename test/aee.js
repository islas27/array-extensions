require('../aee.js')
const expect = require('chai').expect
const sinon = require('sinon')
const data = require('./testData')

describe('Setting up the environment', () => {
  it('checks if testing works', () => {
    const theTruth = true
    expect(theTruth).to.equal(true)
  })
})

describe('#each', () => {
  it('checks if the callback its executed', () => {
    var outputAge = []
    data.people.each((element) => {
      outputAge.push(element.age)
    })
    expect(outputAge).to.eql(data.peopleAge)
  })

  it('checks if the method is chainable', () => {
    var outputNames = []
    var outputAge = []
    data.people.each((element) => {
      outputAge.push(element.age)
    }).each((element) => {
      outputNames.push(element.name)
    })
    expect(outputAge).to.eql(data.peopleAge)
    expect(outputNames).to.eql(data.peopleName)
  })

  it('checks is the index recieved corresponds to the element', () => {
    var outputIdx = []
    data.people.each((element, index) => {
      outputIdx.push(index)
    })
    expect(outputIdx).to.eql(data.peopleIdx)
  })

  it('checks if the callback is used the same number of times as the length of the array', () => {
    var cb = sinon.spy()
    data.people.each(cb)
    expect(cb.callCount).to.equal(6)
  })
})
