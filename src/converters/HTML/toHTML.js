/* eslint no-param-reassign: 0 */
const isarray = require('isarray');

const helpers = require('./helpers');

function getTagFromChunk({ kind, type, metadata }) {
  const mapInstance = helpers.findHTMLTagByChunk({ kind, type, metadata });
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

function getHtmlFromChunk(chunk) {
  const tagName = getTagFromChunk(chunk);

  let childrenHtml;
  if (isarray(chunk.children)) {
    childrenHtml = chunk.children.reduce(
      (acc, n) => acc + getHtmlFromChunk(n),
      ''
    );
  }

  const content = chunk.textContent || childrenHtml || '';

  if (tagName) {
    const attrs = getAttributes({ tagName, ...chunk });

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
    return model.map(getHtmlFromChunk).join('');
  }

  return getHtmlFromChunk(model);
}

module.exports = toHTML;
