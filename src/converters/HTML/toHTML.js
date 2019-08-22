/* eslint no-param-reassign: 0 */
const isarray = require('isarray');

const helpers = require('./helpers');

function getTagFromNode({ kind, type, metadata }) {
  const mapInstance = helpers.findHTMLTagByNode({ kind, type, metadata });
  if (mapInstance) {
    return mapInstance.tagName;
  }

  return null;
}

function getAttributes({ tagName, metadata }) {
  const validAttributes = helpers.getValidAttributes({ tagName });
  if (!validAttributes) {
    return '';
  }

  const attributes = [];

  if (metadata) {
    Object.keys(metadata)
      .filter(key => validAttributes.includes(key))
      .forEach(key => attributes.push(`${key}="${metadata[key]}"`));
  }

  if (!attributes.length) {
    return '';
  }

  return ` ${attributes.join(' ')}`;
}

function parseTextContent(unsafeString) {
  return unsafeString
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getHtmlFromNode(contentNode) {
  const tagName = getTagFromNode(contentNode);

  let childrenHtml;
  if (isarray(contentNode.children)) {
    childrenHtml = contentNode.children.reduce(
      (acc, n) => acc + getHtmlFromNode(n),
      ''
    );
  }

  let content = '';
  if (contentNode.textContent) {
    content = parseTextContent(contentNode.textContent);
  } else if (childrenHtml) {
    content = childrenHtml;
  }

  if (tagName) {
    const attrs = getAttributes({ tagName, ...contentNode });

    const isSelfClosing = helpers.selfClosingTags.includes(tagName);
    if (isSelfClosing) {
      return `<${tagName}${attrs}/>`;
    }

    return `<${tagName}${attrs}>${content}</${tagName}>`;
  }

  return content;
}

function toHTML(model) {
  if (!model) {
    return '';
  }

  if (isarray(model)) {
    return model.map(getHtmlFromNode).join('');
  }

  return getHtmlFromNode(model);
}

module.exports = toHTML;
