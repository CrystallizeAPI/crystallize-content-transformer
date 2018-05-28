const validator = require('is-my-json-valid');

const schema = {
  definitions: {
    node: {
      type: ['object', 'null'],
      properties: {
        kind: {
          required: true,
          enum: ['block', 'inline'],
          description: 'The node kind'
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
          description: 'If set, this is the raw text content to be kinded'
        },
        children: {
          type: 'array',
          items: {
            $ref: '#/definitions/node'
          }
        },
        metadata: {
          oneOf: [
            {
              $ref: '#/definitions/metadataList'
            },
            {
              $ref: '#/definitions/metadataLink'
            }
          ]
        }
      }
    },

    metadataList: {
      type: 'object',
      properties: {
        listType: {
          required: true,
          type: 'string',
          enum: ['ordered', 'unordered']
        }
      }
    },

    metadataLink: {
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

  oneOf: [
    {
      $ref: '#/definitions/node'
    },
    {
      type: 'array',
      items: {
        $ref: '#/definitions/node'
      }
    }
  ]
};

const isModelValid = validator(schema);
const isModelValidVerbose = validator(schema, {
  verbose: true
});

module.exports = { isModelValid, isModelValidVerbose };
