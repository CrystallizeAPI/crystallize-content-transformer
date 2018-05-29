/* eslint no-param-reassign: 0 */
const isarray = require('isarray');

const {
  findHTMLTagByChunk,
  getValidAttributesFromTagName
} = require('./shared');

function getTagFromNode({ kind, type, metadata }) {
  const mapInstance = findHTMLTagByChunk({ kind, type, metadata });
  if (mapInstance) {
    return mapInstance.tagName;
  }

  return null;
}

function getAttrs({ tagName, metadata }) {
  const validAttributes = getValidAttributesFromTagName(tagName);
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

    const tagName = getTagFromNode(node);
    const content = node.textContent || childrenHtml || '';

    if (tagName) {
      const attrs = getAttrs({ tagName, ...node });
      return `<${tagName}${attrs}>${content}</${tagName}>`;
    }

    return content;
  }

  if (isarray(model)) {
    return model.map(getHtmlFromNode).join('');
  }

  return getHtmlFromNode(model);
}

module.exports = toHtml;
