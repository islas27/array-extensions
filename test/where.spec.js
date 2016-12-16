require('../aee.js')
const expect = require('chai').expect
const sinon = require('sinon')
const data = require('./data')

describe('#where', () => {
  it('checks if the function returns a smaller array', () => {
    var newArray = []
    newArray = data.devs.where(dev => dev.skills.indexOf('Gaming') > -1)
    expect(newArray).to.have.lengthOf(1)
    newArray = data.devs.where(dev => dev.skills.indexOf('C#') > -1)
    expect(newArray.length).to.be.equal(2)
    newArray = data.devs.where(dev => dev.skills.indexOf('cooking') > -1)
    expect(newArray.length).to.be.equal(0)
    // console.log(data.devs.where((dev) => dev.skills.where((skill) => skill === 'HTML/CSS')))
  })

  it('checks if the method if chainable', () => {
    callbackSpy = sinon.spy()
    data.devs
      .where(dev => dev.skills.indexOf('HTML/CSS') > -1)
      .each(callbackSpy)
    expect(callbackSpy.callCount).to.equal(1)
    expect(callbackSpy.getCall(0).args[0].name).to.equal('Jonathan')
  })

  it('checks if index is correctly passed and used', () => {
    var idxResults = []
    function callback (element, index) {
      idxResults.push(index)
    }
    callbackSpy = sinon.spy(callback)
    data.devs
     .where(dev => dev.skills.indexOf('C#') > -1)
     .each(callbackSpy)
    expect(callbackSpy.getCall(1).args[1]).to.equal(1)
    expect(idxResults).to.eql([0, 1])
  })
})
