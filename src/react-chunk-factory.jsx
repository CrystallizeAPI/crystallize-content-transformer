/* eslint no-use-before-define: 0, react/prop-types: 0 */
import React from 'react';

export default function ChunkFactory(components = {}) {
  const cmps = Object.assign(
    {
      div: p => <div>{render(p)}</div>,
      span: p => <span>{render(p)}</span>,
      emphasized: p => <em>{render(p)}</em>,
      strong: p => <strong>{render(p)}</strong>,
      code: p => <code>{render(p)}</code>,
      underline: p => <u>{render(p)}</u>,
      paragraph: p => <p>{render(p)}</p>,
      preformatted: p => <pre>{render(p)}</pre>,
      'unordered-list': ({ children }) => <ul>{render({ children })}</ul>,
      'ordered-list': ({ children }) => <ol>{render({ children })}</ol>,
      list: ({ children }) => <ul>{render({ children })}</ul>,
      'list-item': p => <li>{render(p)}</li>,
      link: ({ metadata, ...rest }) => (
        <a href={metadata.href}>{render(rest)}</a>
      ),
      'line-break': () => <br />,
      quote: p => {
        if (p.kind === 'block') {
          return <blockquote>{render(p)}</blockquote>;
        }
        return <q>{render(p)}</q>;
      }
    },
    components
  );

  function render({ children = [], textContent }) {
    return textContent || children.map(renderChunkChild);
  }

  function renderChunkChild(c, i) {
    return <Chunk key={i} {...c} />;
  }

  function Chunk(props) {
    const spreadedArray = '0' in props;

    if (spreadedArray) {
      const children = Object.keys(props).reduce((arr, key) => {
        const index = parseInt(key, 10);
        if (!Number.isNaN(index)) {
          arr.push(props[key]);
        }
        return arr;
      }, []);
      return children.map(renderChunkChild);
    }

    let Component;
    if ('type' in props) {
      const { type, kind } = props;
      let Cmp = cmps[type];

      if (!Cmp) {
        if (type === 'container') {
          if (kind === 'inline') {
            Cmp = cmps.span;
          }
          Cmp = cmps.div;
        } else if (type === null && props.textContent) {
          return props.textContent;
        }
      }
      Component = Cmp;
    }

    if (Component) {
      return <Component {...props} />;
    }

    return null;
  }

  return Chunk;
}
