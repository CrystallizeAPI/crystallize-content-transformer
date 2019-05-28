/* eslint no-use-before-define: 0, react/prop-types: 0, react/no-array-index-key: 0 */
import React from 'react';

export default class Chunk extends React.Component {
  defaultComponents = {
    div: p => <div>{this.renderChunk(p)}</div>,
    span: p => <span>{this.renderChunk(p)}</span>,
    emphasized: p => <em>{this.renderChunk(p)}</em>,
    strong: p => <strong>{this.renderChunk(p)}</strong>,
    code: p => <code>{this.renderChunk(p)}</code>,
    underline: p => <u>{this.renderChunk(p)}</u>,
    paragraph: p => <p>{this.renderChunk(p)}</p>,
    preformatted: p => <pre>{this.renderChunk(p)}</pre>,
    'unordered-list': ({ children }) => (
      <ul>{this.renderChunk({ children })}</ul>
    ),
    'ordered-list': ({ children }) => <ol>{this.renderChunk({ children })}</ol>,
    list: ({ children }) => <ul>{this.renderChunk({ children })}</ul>,
    'list-item': p => <li>{this.renderChunk(p)}</li>,
    link: ({ metadata, ...rest }) => (
      <a href={metadata.href}>{this.renderChunk(rest)}</a>
    ),
    'line-break': () => <br />,
    quote: p => {
      if (p.kind === 'block') {
        return <blockquote>{this.renderChunk(p)}</blockquote>;
      }
      return <q>{this.renderChunk(p)}</q>;
    }
  };

  renderChunk = ({ children = [], textContent }) =>
    textContent || children.map(this.renderChunkChild);

  renderChunkChild = (c, i) => (
    <Chunk key={i} {...c} overrides={this.overrides} />
  );

  render() {
    const { overrides, ...props } = this.props;

    const currentCmps = Object.assign({}, this.defaultComponents);
    if (overrides) {
      this.overrides = overrides;
      Object.assign(currentCmps, overrides);
    }

    // An array has been passed to props
    const spreadedArray = '0' in props;
    if (spreadedArray) {
      const children = Object.keys(props).reduce((arr, key) => {
        const index = parseInt(key, 10);
        if (!Number.isNaN(index)) {
          arr.push(props[key]);
        }
        return arr;
      }, []);
      return children.map(this.renderChunkChild);
    }

    // A node has been passed to props
    let Component;
    if ('type' in props) {
      const { type, kind } = props;
      let Cmp = currentCmps[type];

      if (!Cmp) {
        if (type === 'container') {
          if (kind === 'inline') {
            Cmp = currentCmps.span;
          }
          Cmp = currentCmps.div;
        } else if (type === null && props.textContent) {
          return props.textContent;
        }
      }
      Component = Cmp;
    } else if (props.kind === 'inline' && props.textContent) {
      return props.textContent;
    }

    if (Component) {
      return <Component {...props} />;
    }

    return null;
  }
}
