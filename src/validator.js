const validator = require('is-my-json-valid');

const schemaMetaDataLink = {
  type: 'object',
  properties: {
    href: {
      description: 'The destination to link to',
      required: true,
      type: 'string'
    },
    id: {
      description:
        'In HTML, this is a unique identifier used to make anchor links',
      required: false,
      type: 'string'
    },
    target: {
      description: 'In HTML, this defines in which window the link openes',
      required: false,
      type: 'string'
    }
  }
};

const schemaMetaDataList = {
  type: 'object',
  properties: {
    listType: {
      required: true,
      type: 'string',
      enum: ['ordered', 'unordered']
    }
  }
};

const schemaNode = {
  type: 'object',
  properties: {
    type: {
      required: true,
      enum: ['block', 'inline'],
      description: 'The way this node should be displayed'
    },
    style: {
      required: true,
      type: 'string',
      description: 'The content style',
      enum: [
        'none',
        'paragraph',
        'heading',
        'strong',
        'emphasized',
        'quote',
        'link',
        'list',
        'listitem'
      ]
    },
    textContent: {
      type: 'string',
      description: 'If set, this is the raw text content to be displayed'
    },
    children: {
      type: 'array',
      items: {
        $ref: '#schemaNode'
      }
    },
    metaData: {
      oneOf: [
        {
          $ref: '#schemaMetaDataLink'
        },
        {
          $ref: '#schemaMetaDataList'
        }
      ]
    }
  }
};

const schema = {
  type: 'array',
  required: true,
  items: {
    $ref: '#schemaNode'
  }
};

const isModelValid = validator(schema, {
  schemas: { schemaNode, schemaMetaDataLink, schemaMetaDataList }
});
const isModelValidVerbose = validator(schema, {
  schemas: { schemaNode },
  verbose: true
});

module.exports = { isModelValid, isModelValidVerbose };
