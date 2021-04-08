![alt text](https://raw.githubusercontent.com/CrystallizeAPI/crystallize-content-transformer/HEAD/media/logo.png 'Pie with slice')

# Crystallize Content Transformer

Validation, parsing and transforming for [Crystallize Content](https://crystallize.com/developers/react-components/crystallize-content-transformer). Makes it easy to build React Commerce solutions with [Product Information Management](https://crystallize.com/product/product-information-management) powered by [Crystallize](https://crystallize.com) that enable [Fast Ecommerce API](https://crystallize.com/product/graphql-commerce-api).

## Install

```
yarn add @crystallize/content-transformer
```

## Validate

```
import validator from '@crystallize/content-transformer';

const isValid = validator.isModelValid(myModel);
const validationDetails = validator.isModelValidVerbose(myModel);
```

## toHTML

```
import toHTML from '@crystallize/content-transformer/toHTML';

toHtml(contentModel);
```

## toText

```
import toText from '@crystallize/content-transformer/toText';

toText(contentModel);
```

## React

See [@crystallize/react-content-transformer](https://www.npmjs.com/package/@crystallize/react-content-transformer)
