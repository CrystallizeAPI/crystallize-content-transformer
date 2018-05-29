const parse5 = require('parse5');

const { HTMLElementToTypeMap, validAttributesMap } = require('./shared');

function getChunkDefinition({ tagName }) {
  return HTMLElementToTypeMap[tagName];
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

  const validAttrs = validAttributesMap[node.tagName];
  if (validAttrs) {
    validAttrs.forEach(attr => {
      const attrOnNode = node.attrs.find(a => a.name === attr);
      if (attrOnNode) {
        metadata[attr] = attrOnNode.value;
      }
    });
  }

  if (Object.keys(metadata).length > 0) {
    return metadata;
  }

  return null;
}

function parseNode(node) {
  const chunk = {};

  const chunkDefinition = getChunkDefinition(node);
  if (chunkDefinition) {
    Object.assign(chunk, chunkDefinition);
  }

  const metadata = getMetadataFromNode(node);
  if (metadata) {
    if (!chunk.metadata) {
      chunk.metadata = {};
    }
    Object.assign(chunk.metadata, metadata);
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
