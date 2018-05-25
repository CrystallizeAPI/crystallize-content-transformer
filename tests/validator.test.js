const { isModelValid, toHTML, fromHTML } = require('../src');
const { validModels, invalidModels } = require('./models');

function testModels(collection, expectedResult) {
  describe(`With ${expectedResult ? 'valid' : 'invalid'} models`, () => {
    Object.keys(collection).forEach(key => {
      const model = collection[key];

      it(`"${key}" should ${
        expectedResult ? 'validate' : 'not validate'
      }`, () => {
        expect(isModelValid(model.ccc)).toBe(expectedResult);
      });

      if (model.html) {
        it(`"${key}" toHTML should ${
          expectedResult ? 'match' : 'not match'
        } the predefined HTML`, () => {
          expect(toHTML(model.ccc)).toBe(model.html);
        });

        it(`"${key}" fromHTML should ${
          expectedResult ? 'match' : 'not match'
        } the ccc model`, () => {
          expect(fromHTML(model.html)).toEqual(model.ccc);
        });
      }
    });
  });
}

testModels(validModels, true);
testModels(invalidModels, false);
