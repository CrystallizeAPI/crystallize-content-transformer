/* eslint no-use-before-define: 0, react/prop-types: 0, react/no-array-index-key: 0 */
const React = require('react');

console.warn(`@crystallize/content-transformer/react is deprecated and is not maintained any longer. Please use @crystallize/react-content-transformer instead`)

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
    'unordered-list': ({ children, chldrn }) => (
      <ul>{this.renderNode({ children, chldrn })}</ul>
    ),
    'ordered-list': ({ children, chldrn }) => (
      <ol>{this.renderNode({ children, chldrn })}</ol>
    ),
    list: ({ children, chldrn }) => (
      <ul>{this.renderNode({ children, chldrn })}</ul>
    ),
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

  renderNode = ({ chldrn, children = [], textContent }) =>
    this.renderTextContent(textContent) ||
    (chldrn || children).map(this.renderNodeChild);

  renderTextContent = text => {
    if (!text) {
      return text;
    }

    // Handle line breaks (\n) in text content
    const partsBetweenLineBreaks = text.split(/\n/g);
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
    <Transformer
      key={i}
      {...c}
      overrides={this.overrides}
      renderNode={this.renderNode}
    />
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
      return children.map(this.renderNodeChild);
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
    } else {
      const chldrn = props.chldrn || props.children;
      if (chldrn && chldrn.length > 0) {
        return chldrn.map(this.renderNodeChild);
      }
    }

    if (Component) {
      return (
        <Component {...props} renderTextContent={this.renderTextContent} />
      );
    }

    return null;
  }
}

export default Transformer;
