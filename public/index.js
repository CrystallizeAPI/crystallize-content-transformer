/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { validModels } from '../tests/models';

import Chunk from '../src/react-chunk';

const overrides = {
  link: p => (
    <h1>
      <a href={p.metadata.href}>{p.textContent}</a>
    </h1>
  )
};

ReactDOM.render(
  <div>
    <Chunk
      {...{
        kind: 'inline',
        type: 'link',
        textContent: 'Overridden',
        metadata: {
          href: ''
        }
      }}
      overrides={overrides}
    />

    <Chunk
      {...{
        kind: 'inline',
        type: 'link',
        textContent: 'Pure',
        metadata: {
          href: ''
        }
      }}
    />

    <Chunk
      {...{
        kind: 'inline',
        type: 'link',
        textContent: 'Overridden again',
        metadata: {
          href: ''
        }
      }}
      overrides={overrides}
    />
  </div>,
  document.getElementById('root')
);
