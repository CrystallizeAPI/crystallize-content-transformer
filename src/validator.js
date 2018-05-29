const validator = require('is-my-json-valid');

const schema = {
  title: 'Crystallize Content Chunk model',
  version: '0.0.2',

  definitions: {
    chunk: {
      type: ['object', 'null'],
      additionalProperties: false,
      properties: {
        kind: {
          required: true,
          enum: ['block', 'inline'],
          description: 'The chunk kind'
        },
        type: {
          required: true,
          type: ['string', 'null'],
          description: 'The content type',
          enum: [
            null,
            'abbrevition',
            'abbrevition',
            'address',
            'article',
            'aside',
            'code',
            'deleted',
            'details',
            'emphasized',
            'figcaption',
            'figure',
            'heading1',
            'heading2',
            'heading3',
            'heading4',
            'heading5',
            'heading6',
            'highlight',
            'horizontal-line',
            'image',
            'italic',
            'line-break',
            'link',
            'unordered-list',
            'ordered-list',
            'list-item',
            'paragraph',
            'picture',
            'quote',
            'section',
            'subscripted',
            'superscripted',
            'table',
            'table-body',
            'table-caption',
            'table-cell',
            'table-footer',
            'table-head',
            'table-head-cell',
            'table-row',
            'time',
            'title-of-a-work',
            'underlined'
          ]
        },
        textContent: {
          type: 'string',
          description: 'If set, this is the raw text content'
        },
        children: {
          type: 'array',
          items: {
            $ref: '#/definitions/chunk'
          }
        },
        metadata: {
          type: 'object'
          // oneOf: [
          //   {
          //     $ref: '#/definitions/metadataShared'
          //   },
          //   {
          //     $ref: '#/definitions/metadataList'
          //   },
          //   {
          //     $ref: '#/definitions/metadataLink'
          //   }
          // ]
        }
      }
    },

    metadataShared: {
      properties: {
        id: {
          description:
            'In HTML, this is a unique identifier used to make anchor links',
          required: false,
          type: 'string'
        }
      }
    },

    metadataLink: {
      allOf: [
        {
          $ref: '#/definitions/metadataShared'
        },
        {
          properties: {
            href: {
              description: 'The destination to link to',
              required: true,
              type: 'string'
            },
            target: {
              description:
                'In HTML, this defines in which window the link openes',
              required: false,
              type: 'string'
            }
          }
        }
      ]
    }
  },

  oneOf: [
    {
      $ref: '#/definitions/chunk'
    },
    {
      type: 'array',
      items: {
        $ref: '#/definitions/chunk'
      }
    }
  ]
};

const isModelValid = validator(schema);
const isModelValidVerbose = validator(schema, {
  verbose: true
});

module.exports = { isModelValid, isModelValidVerbose };
