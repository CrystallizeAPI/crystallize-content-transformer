const { isModelValidVerbose } = require('./src');

const { validModels } = require('./tests/models');

console.log(isModelValidVerbose(validModels.singleElementSharedMetadata.ccc));
console.log(isModelValidVerbose.errors);
