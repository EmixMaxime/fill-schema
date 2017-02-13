const fillSchema = require('../index');

const chai = require('chai');
const expect = chai.expect;

describe('fillSchema', () => {

  it('It should fill my schema without extrat fields from my schema', () => {
    const fakeSchema = { title: String, description: String };
    const fakeData = { title: 'lol' };
    const data = fillSchema(fakeSchema)(fakeData);

    expect(data).to.eql(fakeData);
  });

  it('It should fill my schema without extrat fields from my data', () => {
    const fakeSchema = { title: String, description: String };
    const fakeData = { title: 'lol', description: 'lolland', csrf: 'qgo!5gM' };
    const data = fillSchema(fakeSchema)(fakeData);
    delete fakeData.csrf;

    expect(data).to.eql(fakeData);
  });

});
