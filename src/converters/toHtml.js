/* eslint no-param-reassign: 0 */
const isarray = require('isarray');

function getTagFromNode({ display, type, children, metaData }) {
  if (display === 'block') {
    switch (type) {
      case 'paragraph':
        return 'p';
      case 'list':
        {
          const { listType } = metaData;
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
  } else if (display === 'inline') {
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

function getAttrsFromNode({ metaData, type }) {
  const validAttributes = validAttributesMap[type];
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

  if (isarray(model)) {
    return model.map(getHtmlFromNode).join('');
  }

  return getHtmlFromNode(model);
}

module.exports = toHtml;
