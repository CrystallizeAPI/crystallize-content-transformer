/* eslint no-use-before-define: 0, react/prop-types: 0 */
import React from 'react';
import isarray from 'isarray';

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
      'unordered-list': ({ children }) => <ul>{render({ children })}</ul>,
      'ordered-list': ({ children }) => <ol>{render({ children })}</ol>,
      list: ({ children }) => <ul>{render({ children })}</ul>,
      'list-item': p => <li>{render(p)}</li>,
      link: ({ metadata, ...rest }) => (
        <a href={metadata.href}>{render(rest)}</a>
      ),
      'line-break': () => <br />,
      quote: p => <quote>{render(p)}</quote>
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
    if (isarray(props)) {
      return props.map(renderChunkChild);
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
        } else if (type === null && kind === 'inline') {
          return props.textContent;
        }
      }
      Component = Cmp;
    }

    if (Component) {
      return <Component {...props} />;
    }

    if (props.children) {
      if (isarray(props.children)) {
        return props.children.map(renderChunkChild);
      }

      return <Chunk {...props.children} />;
    }

    return null;
  }

  return Chunk;
}
