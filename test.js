var chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const owlbot = require('./index.js')

chai.use(chaiAsPromised);

it('Should throw an error if Owlbot client initiated without a token', () => {
  chai.expect(function(){owlbot();}).to.throw();
})

it('Should throw an error if define method is called without a word',  async() => {
  const client = owlbot('123');
  await chai.expect(client.define()).to.be.rejected
})
