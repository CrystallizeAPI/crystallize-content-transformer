/* eslint no-param-reassign: 0 */
const isarray = require('isarray');

function getTagFromNode({ kind, type, children, metadata }) {
  if (kind === 'block') {
    switch (type) {
      case 'paragraph':
        return 'p';
      case 'list':
        {
          const { listType } = metadata;
          if (listType && listType === 'ordered') {
            return 'ol';
          }
        }
        return 'ul';
      case 'listitem':
        return 'li';
      default:
        return 'div';
    }
  } else if (kind === 'inline') {
    switch (type) {
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

function getAttrsFromNode({ metadata, type }) {
  const validAttributes = validAttributesMap[type];
  if (!validAttributes) {
    return '';
  }

  const attrs = [];

  if (metadata) {
    Object.keys(metadata)
      .filter(key => validAttributes.includes(key))
      .forEach(key => attrs.push(`${key}="${metadata[key]}"`));
  }

  if (!attrs.length) {
    return '';
  }

  return ` ${attrs.join(' ')}`;
}

function toHtml(model) {
  function getHtmlFromNode(node) {
    let childrenHtml;
    if (node.children) {
      childrenHtml = node.children.reduce(
        (acc, n) => acc + getHtmlFromNode(n),
        ''
      );
    }

    const tag = getTagFromNode(node);
    const content = node.textContent || childrenHtml || '';

    if (tag) {
      const attrs = getAttrsFromNode(node);
      return `<${tag}${attrs}>${content}</${tag}>`;
    }

    return content;
  }

  if (isarray(model)) {
    return model.map(getHtmlFromNode).join('');
  }

  return getHtmlFromNode(model);
}

module.exports = toHtml;
