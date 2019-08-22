/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Chunk from '../src/react-chunk';

const model = {
  kind: 'block',
  type: 'paragraph',
  children: [
    {
      kind: 'block'
    },
    {
      kind: 'inline',
      type: 'link',
      children: [
        {
          kind: 'inline',
          textContent: 'Mal arbeidsavtale fast ansettelse'
        }
      ],
      metadata: {
        href:
          'https://origamipaperworks.com/maler/mal-arbeidsavtale-fast-ansettelse'
      }
    },
    {
      kind: 'block'
    }
  ]
};

ReactDOM.render(
  <div>
    <Chunk {...model} />
  </div>,
  document.getElementById('root')
);
