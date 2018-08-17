const parse5 = require('parse5');
// const ow = require('ow');

const helpers = require('./helpers');

function getTextContent(node, opt = {}) {
  function parseText(text = '') {
    let t = text;
    if (node.parentNode.nodeName !== 'code') {
      // If line breaks are present, remove all line breaks and first and last whitespace
      if (text.match(/\r?\n|\r/g)) {
        t = text.replace(/\r?\n|\r/g, '');

        if (!opt.keepSpaces) {
          t = t.trim();
        }
      }

      // Replace double white space with a single
      if (!opt.keepSpaces) {
        t = t.replace(/\s{2,}/g, ' ');
      }
    } else {
      // Normalize whitespace
      if (!opt.keepSpaces) {
        t = t.replace(/\s/g, ' ');
      }

      // Remove line breaks
      t = text.replace(/\r?\n|\r/g, '');
    }

    return t;
  }

  if (node.nodeName === '#text') {
    return parseText(node.value);
  }

  return (
    node.childNodes &&
    node.childNodes.length === 1 &&
    node.childNodes[0].nodeName === '#text' &&
    parseText(node.childNodes[0].value)
  );
}

function getMetadataFromNode(node) {
  const metadata = {};

  if (node.attrs && node.attrs.length > 0) {
    const validAttrs = helpers.getValidAttributes(node);
    if (validAttrs) {
      validAttrs.forEach(attr => {
        const attrOnNode = node.attrs.find(a => a.name === attr);
        if (attrOnNode) {
          metadata[attr] = attrOnNode.value;
        }
      });
    }
  }

  if (Object.keys(metadata).length > 0) {
    return metadata;
  }

  return null;
}

const nodeTypesThatCannotHaveDirectTextChildren = 'ul ol table thead tbody tfoot tr th td img'.split(
  ' '
);

function nodeHasContent(node) {
  if (node.nodeName === '#text') {
    if (
      nodeTypesThatCannotHaveDirectTextChildren.includes(
        node.parentNode.nodeName
      )
    ) {
      return false;
    }
  }
  return true;
}

function chunkHasContent(chunk) {
  // Empty, inline chunks
  if (
    chunk &&
    chunk.kind === 'inline' &&
    chunk.type === null &&
    !chunk.textContent
  ) {
    return false;
  }

  if (chunk) {
    return true;
  }

  return false;
}

function fromHTML(html, opt) {
  const options = opt || {};

  // ow(html, ow.string);
  // ow(options.whitelistTags, ow.any(ow.nullOrUndefined, ow.array));
  // ow(options.blacklistTags, ow.any(ow.nullOrUndefined, ow.array));

  function getChunkDefinition({ tagName }) {
    const definition = helpers.HTMLElementToTypeMap[tagName];
    if (definition) {
      if (options.blacklistTags) {
        if (options.blacklistTags.includes(tagName)) {
          return {
            ...definition,
            type: 'container'
          };
        }
      } else if (options.whitelistTags) {
        if (!options.whitelistTags.includes(tagName)) {
          return {
            ...definition,
            type: 'container'
          };
        }
      }

      return definition;
    }

    return {
      kind: 'inline',
      type: null
    };
  }

  function parseChunk(node) {
    const chunkDefinition = getChunkDefinition(node);

    const chunk = {};
    Object.assign(chunk, chunkDefinition);

    const metadata = getMetadataFromNode(node);
    if (metadata) {
      if (!chunk.metadata) {
        chunk.metadata = {};
      }
      Object.assign(chunk.metadata, metadata);
    }

    const textContent = getTextContent(node, opt);
    if (textContent) {
      chunk.textContent = textContent;
    } else if (node.childNodes && node.childNodes.length > 0) {
      chunk.children = Array.from(node.childNodes)
        .filter(nodeHasContent)
        .map(parseChunk)
        .filter(chunkHasContent);
    }

    return chunk;
  }

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
