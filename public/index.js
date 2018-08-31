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

const arr = [{ kind: 'block', type: null, textContent: 'heiASD' }];

ReactDOM.render(
  <Chunk {...validModels.complex.ccc} overrides={overrides} />,
  document.getElementById('root')
);
