const { isModelValid, toHtml } = require('../src');
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
        it(`"${key}" toHtml should ${
          expectedResult ? 'match' : 'not match'
        } the predefined HTML`, () => {
          expect(toHtml(model.ccc)).toBe(model.html);
        });
      }
    });
  });
}

testModels(validModels, true);
testModels(invalidModels, false);
