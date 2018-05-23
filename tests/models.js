const validModels = {};
const invalidModels = {};

/* The most basic model */
validModels.basic = {
  ccc: []
};

/* A top element */
validModels.singleElement = {
  ccc: [
    {
      type: 'block',
      style: 'none',
      textContent: 'Hello'
    }
  ]
};

/* A top element, styled as a paragraph */
validModels.singleElementParagraph = {
  ccc: [
    {
      type: 'block',
      style: 'paragraph',
      textContent: 'Hello'
    }
  ]
};

/* A top element, styled as strong */
validModels.singleElementStrong = {
  ccc: [
    {
      type: 'block',
      style: 'strong',
      textContent: 'Hello'
    }
  ]
};

/* A top element, styled as emphasized */
validModels.singleElementEmphasized = {
  ccc: [
    {
      type: 'block',
      style: 'emphasized',
      textContent: 'Hello'
    }
  ]
};

/* A top element, styled as quote */
validModels.singleElementQuote = {
  ccc: [
    {
      type: 'block',
      style: 'quote',
      textContent: 'Hello'
    }
  ]
};

/* A top element with children */
validModels.withNodeChildren = {
  ccc: [
    {
      type: 'block',
      style: 'paragraph',
      children: [
        {
          type: 'inline',
          style: 'none',
          textContent: 'See '
        },
        {
          type: 'inline',
          style: 'strong',
          textContent: 'you'
        },
        {
          type: 'inline',
          style: 'none',
          textContent: ' later'
        }
      ]
    }
  ]
};

/* A complex chunk */
validModels.complex = {
  ccc: [
    {
      type: 'block',
      style: 'none',
      children: [
        {
          type: 'block',
          style: 'paragraph',
          children: [
            {
              type: 'inline',
              style: 'strong',
              textContent: 'Hello you'
            }
          ]
        },
        {
          type: 'inline',
          style: 'link',
          textContent: 'How are you ',
          metaData: {
            href: '#',
            target: '_blank'
          }
        },
        {
          type: 'inline',
          style: 'strong',
          textContent: 'doing?'
        },
        {
          type: 'block',
          style: 'list',
          metaData: {
            listType: 'ordered'
          },
          children: [
            {
              type: 'block',
              style: 'listitem',
              textContent: 'List item 1'
            },
            {
              type: 'block',
              style: 'listitem',
              textContent: 'List item 2'
            }
          ]
        }
      ]
    }
  ],
  html: `<div><p><b>Hello you</b></p><a href="#" target="_blank">How are you </a><b>doing?</b><ol><li>List item 1</li><li>List item 2</li></ol></div>`
};

// No data
invalidModels.basic = {
  ccc: null
};

// Has fields, but it is not an array
invalidModels.basic = {
  ccc: {}
};

// The first node is a string, not an object
invalidModels.nodeIsString = {
  ccc: ['sadasd']
};

// The first node is a number, not an object
invalidModels.nodeIsNumber = {
  ccc: [123]
};

// The first node is an empty object
invalidModels.nodeIsEmptyObject = {
  ccc: [{}]
};

// The first node is an object with invalid type set
invalidModels.nodeHasInvalidType = {
  ccc: [
    {
      type: 'bullshit type',
      style: 'none',
      textContent: ''
    }
  ]
};

// The first node is an object with invalid style set
invalidModels.nodeHasInvalidStyle = {
  ccc: [
    {
      type: 'block',
      style: 'bullshit style',
      textContent: ''
    }
  ]
};

// A child has invalid style
invalidModels.nodeChildHasInvalidStyle = {
  ccc: [
    {
      type: 'block',
      style: 'none',
      children: 123
    }
  ]
};

invalidModels.nodeIsInvalidLInk = {
  ccc: [
    {
      type: 'inline',
      style: 'link',
      textContent: 'link',
      metaData: {
        crap: ''
      }
    }
  ]
};

module.exports = {
  validModels,
  invalidModels
};
