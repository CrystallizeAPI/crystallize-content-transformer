/* eslint no-use-before-define: 0, react/prop-types: 0, react/no-array-index-key: 0 */
import React from 'react';

function renameChildrenToChldrn(obj) {
  // An array has been passed
  if ('0' in obj) {
    const retObj = {};
    Object.keys(obj).forEach(key => {
      retObj[key] = renameChildrenToChldrn(obj[key]);
    });
    return retObj;
  }

  if ('children' in obj) {
    const { children: chldrn, ...rest } = obj;

    return {
      ...rest,
      chldrn: chldrn.map(renameChildrenToChldrn)
    };
  }

  return obj;
}

const TransformerWrapper = props => (
  <Transformer {...renameChildrenToChldrn(props)} />
);

class Transformer extends React.Component {
  defaultComponents = {
    div: p => <div>{this.renderNode(p)}</div>,
    span: p => <span>{this.renderNode(p)}</span>,
    emphasized: p => <em>{this.renderNode(p)}</em>,
    strong: p => <strong>{this.renderNode(p)}</strong>,
    code: p => <code>{this.renderNode(p)}</code>,
    underline: p => <u>{this.renderNode(p)}</u>,
    paragraph: p => <p>{this.renderNode(p)}</p>,
    preformatted: p => <pre>{this.renderNode(p)}</pre>,
    'unordered-list': ({ chldrn }) => <ul>{this.renderNode({ chldrn })}</ul>,
    'ordered-list': ({ chldrn }) => <ol>{this.renderNode({ chldrn })}</ol>,
    list: ({ chldrn }) => <ul>{this.renderNode({ chldrn })}</ul>,
    'list-item': p => <li>{this.renderNode(p)}</li>,
    link: ({ metadata, ...rest }) => (
      <a href={metadata.href}>{this.renderNode(rest)}</a>
    ),
    'line-break': () => <br />,
    quote: p => {
      if (p.kind === 'block') {
        return <blockquote>{this.renderNode(p)}</blockquote>;
      }
      return <q>{this.renderNode(p)}</q>;
    }
  };

  renderNode = ({ chldrn = [], textContent }) => {
    return (
      this.renderTextContent(textContent) || chldrn.map(this.renderNodeChild)
    );
  };

  renderTextContent = text => {
    const partsBetweenLineBreaks = (text || '').split(/\n/g);
    if (partsBetweenLineBreaks.length === 1) {
      return text;
    }
    return partsBetweenLineBreaks.map((part, index) => {
      if (index === partsBetweenLineBreaks.length - 1) {
        return part;
      }
      return (
        <React.Fragment>
          {part}
          <br />
        </React.Fragment>
      );
    });
  };

  renderNodeChild = (c, i) => (
    <Transformer key={i} {...c} overrides={this.overrides} />
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
      const chldrn = Object.keys(props).reduce((arr, key) => {
        const index = parseInt(key, 10);
        if (!Number.isNaN(index)) {
          arr.push(props[key]);
        }
        return arr;
      }, []);
      return chldrn.map(this.renderNodeChild);
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
          return this.renderTextContent(props.textContent);
        }
      }
      Component = Cmp;
    } else if (props.textContent) {
      return this.renderTextContent(props.textContent);
    } else if (props.chldrn && props.chldrn.length > 0) {
      return props.chldrn.map(this.renderNodeChild);
    }

    if (Component) {
      return <Component {...props} renderNode={this.renderNode} />;
    }

    return null;
  }
}

export default TransformerWrapper;
