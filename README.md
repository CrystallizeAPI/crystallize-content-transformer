![alt text](https://raw.githubusercontent.com/snowballdigital/crystallize-content-chunk/HEAD/media/logo.png 'Pie with slice')

# crystallize-content-chunk

Validation, parsing and React rendering for [Crystallize Content Chunk](https://crystallize.com/developers/react-components/crystallize-content-chunk). Makes it easy to build React Commerce solutions with [Product Information Management](https://crystallize.com/product/product-information-management) powered by [Crystallize](https://crystallize.com) that enable [Fast Ecommerce API](https://crystallize.com/product/graphql-commerce-api).

## Install

```
yarn add @crystallize/content-chunk
```

## Validate

```
import CCC from '@crystallize/content-chunk'

const isValid = CCC.isModelValid(myModel)
const validationDetails = CCC.isModelValidVerbose(myModel)
```

## React chunk

```
import Chunk from '@crystallize/content-chunk/reactChunk';

const overrides = {
  link: p => <MyLinkComponent href={p.metadata.href}>{p.textContent}</MyLinkComponent>
};

<Chunk {...cccModel} overrides={overrides} />
```

## toHTML

```
import toHTML from '@crystallize/content-chunk/toHTML';

toHtml(cccModel);
```

## toText

```
import toText from '@crystallize/content-chunk/toText';

toText(cccModel);
```
