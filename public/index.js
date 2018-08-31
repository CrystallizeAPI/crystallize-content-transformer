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

const arr = [
  {
    kind: 'block',
    type: 'paragraph',
    textContent:
      'We partner with the owners to optimize growth, scalability and value over the company lifecycle.'
  },
  {
    kind: 'block',
    type: 'paragraph',
    children: [
      {
        kind: 'inline',
        type: 'line-break'
      }
    ]
  },
  {
    kind: 'block',
    type: 'paragraph',
    textContent:
      'Our unique Growth Model focus on the growth drivers throughout a company lifecycle. We engage long term from start-up to realization. '
  },
  {
    kind: 'block',
    type: 'paragraph',
    children: [
      {
        kind: 'inline',
        type: 'line-break'
      }
    ]
  },
  {
    kind: 'block',
    type: 'paragraph',
    textContent:
      'We work systematically to bring out the potential of the people and the technology.'
  },
  {
    kind: 'block',
    type: 'paragraph',
    children: [
      {
        kind: 'inline',
        type: 'line-break'
      }
    ]
  },
  {
    kind: 'block',
    type: 'paragraph',
    textContent:
      'Are an owner of a digital ambitious growth company, either as investor or founder?'
  },
  {
    kind: 'block',
    type: 'paragraph',
    textContent:
      'Do you want to learn more about how Assetto can help you bring out the potential of your company?'
  },
  {
    kind: 'block',
    type: 'paragraph',
    children: [
      {
        kind: 'inline',
        type: 'line-break'
      }
    ]
  },
  {
    kind: 'block',
    type: 'paragraph',
    textContent: 'Feel free to contact us.'
  },
  {
    kind: 'block',
    type: 'paragraph',
    children: [
      {
        kind: 'inline',
        type: 'line-break'
      }
    ]
  }
];

ReactDOM.render(
  <div>
    <Chunk {...arr} />
  </div>,
  document.getElementById('root')
);
