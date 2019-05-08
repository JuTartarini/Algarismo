const { assert } = require('chai');
const romanToInt = require('../index');
const intToRoman = require('../index');

describe('Conversor de Algarismos Romanos para números inteiros e vice e versa', () => {
    describe('romano para inteiro', () => {
      it("XXVI", () => {
        assert.equal(romanToInt("III"), 3)
      });
      it('CDI', () => {
        assert.equal(romanToInt("CDI"), 401);
      });
      it('vazio', () => {
        assert.equal(romanToInt(""), false);
      });
    })
    describe('inteiro para romano', () => {
      it('28', () => {
        assert.equal(intToRoman(28), 'XXVIII');
      });
      it('121', () => {
        assert.equal(intToRoman(121),"CXXI");
      });
      it('0', () => {
        assert.equal(intToRoman(0), false);
      });
      it('-1', () => {
        assert.equal(intToRoman(-1), false);
      });
    })});
  