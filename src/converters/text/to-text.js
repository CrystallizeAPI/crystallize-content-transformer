/* eslint no-param-reassign: 0 */
const isarray = require('isarray');

function trim(string) {
  if (!string) {
    return '';
  }

  // Remove first and last new line
  return string.replace(/^\r|\n/, '').replace(/\r|\n$/, '');
}

function toText(model) {
  function getTextFromNode(node) {
    if (!node) {
      return '';
    }

    let childrenText = '';
    if (node.children) {
      childrenText = node.children.reduce(
        (acc, n) => acc + getTextFromNode(n),
        ''
      );
    }

    let content = '';

    content += node.textContent || childrenText || '';

    if (node.kind === 'block') {
      content = `\n${content}\n`;
    }

    return content;
  }

  if (isarray(model)) {
    return trim(model.map(getTextFromNode).join(''));
  }

  return trim(getTextFromNode(model));
}

module.exports = toText;
