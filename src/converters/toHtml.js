const { validModels } = require('../../tests/models');

function getTagFromNode({ type, style, children, metaData }) {
  if (type === 'block') {
    switch (style) {
      case 'paragraph':
        return 'p';
      case 'list':
        const { listType } = metaData;
        if (listType && listType === 'ordered') {
          return 'ol';
        }
        return 'ul';
      case 'listitem':
        return 'li';
      default:
        return 'div';
    }
  } else if (type === 'inline') {
    switch (style) {
      case 'strong':
        return 'b';
      case 'link':
        return 'a';
      default:
        if (children && children.length) {
          return 'span';
        }
        return null;
    }
  }

  return null;
}

// The valid attributes for each element
const validAttributesMap = {
  link: 'id href target'.split(' ')
};

function getAttrsFromNode({ metaData, style }) {
  const validAttributes = validAttributesMap[style];
  if (!validAttributes) {
    return '';
  }

  const attrs = [];

  if (metaData) {
    Object.keys(metaData)
      .filter(key => validAttributes.includes(key))
      .forEach(key => attrs.push(`${key}="${metaData[key]}"`));
  }

  if (!attrs.length) {
    return '';
  }

  return ` ${attrs.join(' ')}`;
}

// Add a reference to the parent for each node
function addParentToNode(node, parent) {
  if (parent) {
    node.parent = parent;
  }

  if (node.children) {
    node.children.forEach(n => addParentToNode(n, node));
  }
}

function toHtml(model) {
  function getHtmlFromNode(node) {
    if (node.children) {
      node.childrenHtml = node.children.reduce(
        (acc, n) => acc + getHtmlFromNode(n),
        ''
      );
    }

    const tag = getTagFromNode(node);
    const content = node.textContent || node.childrenHtml || '';

    if (tag) {
      const attrs = getAttrsFromNode(node);
      return `<${tag}${attrs}>${content}</${tag}>`;
    }

    return content;
  }

  return model.map(getHtmlFromNode).join('');
}

module.exports = toHtml;
