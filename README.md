# crystallize-content-chunk

Validation and parsing for CCC

## React chunk

```
import ChunkFactory from '@crystallize/content-chunk/reactChunkFactory';

const Chunk = ChunkFactory({
  link: p => <MyLinkComponent href={p.metadata.href}>{p.textContent}</MyLinkComponent>
})

<Chunk {...model}>
```

## toHTML

```
import toHTML from '@crystallize/content-chunk/toHTML';

toHtml(cccModel);
```
