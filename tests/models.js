const validModels = {};
const invalidModels = {};

/* The most basic model */
validModels.singleElement = {
  ccc: {
    display: 'block',
    type: 'none',
    textContent: 'Hello'
  }
};

/* A top element, styled as a paragraph */
validModels.singleElementParagraph = {
  ccc: {
    display: 'block',
    type: 'paragraph',
    textContent: 'Hello'
  }
};

/* A top element, styled as strong */
validModels.singleElementStrong = {
  ccc: {
    display: 'block',
    type: 'strong',
    textContent: 'Hello'
  }
};

/* A top element, styled as emphasized */
validModels.singleElementEmphasized = {
  ccc: {
    display: 'block',
    type: 'emphasized',
    textContent: 'Hello'
  }
};

/* A top element, styled as quote */
validModels.singleElementQuote = {
  ccc: {
    display: 'block',
    type: 'quote',
    textContent: 'Hello'
  }
};

/* A top element with children */
validModels.withNodeChildren = {
  ccc: {
    display: 'block',
    type: 'paragraph',
    children: [
      {
        display: 'inline',
        type: 'none',
        textContent: 'See '
      },
      {
        display: 'inline',
        type: 'strong',
        textContent: 'you'
      },
      {
        display: 'inline',
        type: 'none',
        textContent: ' later'
      }
    ]
  }
};

/* A complex chunk */
validModels.complex = {
  ccc: {
    display: 'block',
    type: 'none',
    children: [
      {
        display: 'block',
        type: 'paragraph',
        children: [
          {
            display: 'inline',
            type: 'strong',
            textContent: 'Hello you'
          }
        ]
      },
      {
        display: 'inline',
        type: 'link',
        textContent: 'How are you ',
        metaData: {
          href: '#',
          target: '_blank'
        }
      },
      {
        display: 'inline',
        type: 'strong',
        textContent: 'doing?'
      },
      {
        display: 'block',
        type: 'list',
        metaData: {
          listType: 'ordered'
        },
        children: [
          {
            display: 'block',
            type: 'listitem',
            textContent: 'List item 1'
          },
          {
            display: 'block',
            type: 'listitem',
            textContent: 'List item 2'
          }
        ]
      }
    ]
  },
  html: `<div><p><b>Hello you</b></p><a href="#" target="_blank">How are you </a><b>doing?</b><ol><li>List item 1</li><li>List item 2</li></ol></div>`
};

// Has fields, but it is empty
invalidModels.basic = {
  ccc: {}
};

// The node is a string, not an object
invalidModels.nodeIsString = {
  ccc: 'sadasd'
};

// The node is a number, not an object
invalidModels.nodeIsNumber = {
  ccc: 123
};

// The node is an object with invalid type set
invalidModels.nodeHasInvalidType = {
  ccc: {
    display: 'bullshit display',
    type: 'none',
    textContent: ''
  }
};

// The node is an object with invalid Type set
invalidModels.nodeHasInvalidType = {
  ccc: {
    display: 'block',
    type: 'bullshit type',
    textContent: ''
  }
};

// A children is set, but is not an array
invalidModels.nodeChildrenIsInvalid = {
  ccc: {
    display: 'block',
    type: 'none',
    children: 123
  }
};

invalidModels.nodeIsInvalidLInk = {
  ccc: {
    display: 'inline',
    type: 'link',
    textContent: 'click me',
    metaData: {
      crap: ''
    }
  }
};

module.exports = {
  validModels,
  invalidModels
};
