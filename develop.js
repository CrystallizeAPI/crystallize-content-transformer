const { fromHTML } = require('./src');

const { validModels } = require('./tests/models');

console.log(JSON.stringify(validModels.complex.ccc, 0, 3));
console.log('---');
console.log(JSON.stringify(fromHTML(validModels.complex.html), 0, 3));
