const validator = require('is-my-json-valid');

const schema = {
  definitions: {
    node: {
      type: ['object', 'null'],
      properties: {
        display: {
          required: true,
          enum: ['block', 'inline'],
          description: 'The way this node should be displayed'
        },
        type: {
          required: true,
          type: 'string',
          description: 'The content type',
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
            $ref: '#/definitions/node'
          }
        },
        metaData: {
          oneOf: [
            {
              $ref: '#/definitions/metaDataList'
            },
            {
              $ref: '#/definitions/metaDataLink'
            }
          ]
        }
      }
    },

    metaDataList: {
      type: 'object',
      properties: {
        listType: {
          required: true,
          type: 'string',
          enum: ['ordered', 'unordered']
        }
      }
    },

    metaDataLink: {
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
    }
  },

  $ref: '#/definitions/node'
};

const isModelValid = validator(schema);
const isModelValidVerbose = validator(schema, {
  verbose: true
});

module.exports = { isModelValid, isModelValidVerbose };
