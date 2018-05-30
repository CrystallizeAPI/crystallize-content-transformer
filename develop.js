const { fromHTML } = require('./src');

const { validModels } = require('./tests/models');

console.log(fromHTML(`<p>asd<b>hello</b><i>Yes</i></p>`));
