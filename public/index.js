/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { validModels } from '../tests/models';

import Chunk from '../src/react-chunk';

ReactDOM.render(
  <div>
    <Chunk {...validModels.paragraphWithEmptyBlocksAndLinks.ccc} />
  </div>,
  document.getElementById('root')
);
