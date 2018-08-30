/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { validModels } from '../tests/models';

import ChunkFactory from '../src/react-chunk-factory';

const Chunk = ChunkFactory({
  link: p => <a href={p.metadata.href}>{p.textContent}</a>
});

const arr = [{ kind: 'block', type: null, textContent: 'heiASD' }];

ReactDOM.render(<Chunk {...arr} />, document.getElementById('root'));
