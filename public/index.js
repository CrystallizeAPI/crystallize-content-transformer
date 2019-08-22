/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Content from '../src/react';

const model = [
  {
    kind: 'block',
    type: 'paragraph',
    children: [
      {
        kind: 'inline',
        textContent: 'Mal arbeidsavtale midlertidig ansettelse.'
      }
    ],
    metadata: {}
  },
  {
    kind: 'block',
    type: 'paragraph',
    children: [
      {
        kind: 'inline',
        textContent: 'Vi har også skrevet en bloggpost på '
      },
      {
        kind: 'inline',
        type: 'link',
        children: [
          {
            kind: 'inline',
            textContent: 'hvordan ansette og skal en arbeidsavtale inneholde '
          }
        ],
        metadata: {
          href:
            'https://origamipaperworks.com/blogg/hvordan-ansette-og-hva-skal-en-arbeidsavtale-inneholde'
        }
      },
      {
        kind: 'inline',
        textContent: '.'
      }
    ],
    metadata: {}
  },
  {
    kind: 'block',
    type: 'paragraph',
    children: [
      {
        kind: 'inline',
        textContent: 'Andre maler for arbeidskontrakter finner du her'
      }
    ],
    metadata: {}
  },
  {
    kind: 'block',
    type: 'unordered-list',
    children: [
      {
        kind: 'block',
        type: 'list-item',
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
        ],
        metadata: {}
      },
      {
        kind: 'block',
        type: 'list-item',
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
                textContent: 'Mal arbeidsavtale fast ansettelse på engelsk'
              }
            ],
            metadata: {
              href:
                'https://origamipaperworks.com/maler/mal-arbeidsavtale-fast-ansettelse-engelsk'
            }
          },
          {
            kind: 'block'
          }
        ],
        metadata: {}
      },
      {
        kind: 'block',
        type: 'list-item',
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
                textContent:
                  'Mal arbeidsavtale midlertidig ansettelse på engelsk'
              }
            ],
            metadata: {
              href:
                'https://origamipaperworks.com/maler/mal-arbeidsavtale-midlertidig-ansettelse-engelsk'
            }
          },
          {
            kind: 'block'
          }
        ],
        metadata: {}
      }
    ],
    metadata: {}
  }
];

ReactDOM.render(
  <div>
    <Content {...model} />
  </div>,
  document.getElementById('root')
);
