![alt text](https://raw.githubusercontent.com/snowballdigital/crystallize-content-chunk/HEAD/media/logo.png 'Pie with slice')

# crystallize-content-chunk

Validation, parsing and React rendering for Crystallize Content Chunk

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
