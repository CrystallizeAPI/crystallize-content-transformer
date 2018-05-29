const parse5 = require('parse5');

const helpers = require('./helpers');

function getChunkDefinition({ tagName }) {
  return helpers.HTMLElementToTypeMap[tagName];
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

  const validAttrs = helpers.getValidAttributes(node);
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

function chunkHasContent(chunk) {
  return !!chunk;
}

function parseChunk(node) {
  const chunkDefinition = getChunkDefinition(node);
  if (!chunkDefinition) {
    return null;
  }

  const chunk = {};
  Object.assign(chunk, chunkDefinition);

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
  } else if (node.childNodes && node.childNodes.length > 0) {
    chunk.children = [...node.childNodes]
      .map(parseChunk)
      .filter(chunkHasContent);
  }

  return chunk;
}

function fromHTML(html) {
  if (!html) {
    return null;
  }

  const fragment = parse5.parseFragment(html);

  if (fragment.childNodes.length === 1) {
    return parseChunk(fragment.childNodes[0]);
  }

  return fragment.childNodes.map(parseChunk).filter(chunkHasContent);
}

module.exports = fromHTML;
