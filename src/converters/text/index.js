/* eslint no-param-reassign: 0 */
const isarray = require('isarray');

function toText(model) {
  function getTextFromNode(node) {
    if (node.children) {
      node.childrenText = node.children.reduce(
        (acc, n) => acc + getTextFromNode(n),
        ''
      );
    }

    let content = '';

    content += node.textContent || node.childrenText || '';

    if (node.kind === 'block') {
      content = `\n${content}\n`;
    }

    return content;
  }

  if (isarray(model)) {
    return model.map(getTextFromNode).join('');
  }

  return getTextFromNode(model);
}

module.exports = { toText };
