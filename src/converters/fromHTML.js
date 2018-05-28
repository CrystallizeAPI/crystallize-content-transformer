const parse5 = require('parse5');

const blockElements = 'div figure p table ul ol li'.split(' ');
const htmlTagNameToType = {
  div: 'none',
  span: 'none',
  p: 'paragraph',
  ul: 'list',
  ol: 'list',
  li: 'listitem',
  a: 'link',
  b: 'strong',
  strong: 'strong'
};

const validAttrsMap = {
  a: ['href', 'target']
};

function getKindFromNode({ tagName }) {
  if (blockElements.includes(tagName)) {
    return 'block';
  }
  return 'inline';
}

function getTypeFromNode({ tagName }) {
  return htmlTagNameToType[tagName];
}

function getTextContent(node) {
  return (
    node.childNodes &&
    node.childNodes.length === 1 &&
    node.childNodes[0].nodeName === '#text' &&
    node.childNodes[0].value
  );
}

function getMetadataFromNode(node) {
  const metadata = {};

  const validAttrs = validAttrsMap[node.tagName];
  if (validAttrs) {
    validAttrs.forEach(attr => {
      const attrOnNode = node.attrs.find(a => a.name === attr);
      if (attrOnNode) {
        metadata[attr] = attrOnNode.value;
      }
    });
  }

  // List has implied metadata from the type
  if (['ul', 'ol'].includes(node.tagName)) {
    metadata.listType = node.tagName === 'ul' ? 'unordered' : 'ordered';
  }

  if (Object.keys(metadata).length > 0) {
    return metadata;
  }

  return null;
}

function parseNode(node) {
  const chunk = {};

  chunk.kind = getKindFromNode(node);
  chunk.type = getTypeFromNode(node);

  const metadata = getMetadataFromNode(node);
  if (metadata) {
    chunk.metadata = metadata;
  }

  const textContent = getTextContent(node);
  if (textContent) {
    chunk.textContent = textContent;
  } else if (node.childNodes) {
    chunk.children = [...node.childNodes].map(parseNode);
  }

  return chunk;
}

function fromHTML(html) {
  if (!html) {
    return null;
  }

  const fragment = parse5.parseFragment(html);

  if (fragment.childNodes.length === 1) {
    return parseNode(fragment.childNodes[0]);
  }

  return fragment.childNodes.map(parseNode);
}

module.exports = fromHTML;
