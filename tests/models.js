const validModels = {};
const invalidModels = {};

/* The most basic model */
validModels.singleElement = {
  ccc: {
    kind: 'block',
    type: 'none',
    textContent: 'Hello'
  }
};

/* A top element, styled as a paragraph */
validModels.singleElementParagraph = {
  ccc: {
    kind: 'block',
    type: 'paragraph',
    textContent: 'Hello'
  }
};

/* A top element, styled as strong */
validModels.singleElementStrong = {
  ccc: {
    kind: 'block',
    type: 'strong',
    textContent: 'Hello'
  }
};

/* A top element, styled as emphasized */
validModels.singleElementEmphasized = {
  ccc: {
    kind: 'block',
    type: 'emphasized',
    textContent: 'Hello'
  }
};

/* A top element, styled as quote */
validModels.singleElementQuote = {
  ccc: {
    kind: 'block',
    type: 'quote',
    textContent: 'Hello'
  }
};

/* A top element with children */
validModels.withNodeChildren = {
  ccc: {
    kind: 'block',
    type: 'paragraph',
    children: [
      {
        kind: 'inline',
        type: 'none',
        textContent: 'See '
      },
      {
        kind: 'inline',
        type: 'strong',
        textContent: 'you'
      },
      {
        kind: 'inline',
        type: 'none',
        textContent: ' later'
      }
    ]
  }
};

/* A complex chunk */
validModels.complex = {
  ccc: {
    kind: 'block',
    type: 'none',
    children: [
      {
        kind: 'block',
        type: 'paragraph',
        children: [
          {
            kind: 'inline',
            type: 'strong',
            textContent: 'Hello you'
          }
        ]
      },
      {
        kind: 'inline',
        type: 'link',
        textContent: 'How are you ',
        metadata: {
          href: '#',
          target: '_blank'
        }
      },
      {
        kind: 'inline',
        type: 'strong',
        textContent: 'doing?'
      },
      {
        kind: 'block',
        type: 'list',
        metadata: {
          listType: 'ordered'
        },
        children: [
          {
            kind: 'block',
            type: 'listitem',
            textContent: 'List item 1'
          },
          {
            kind: 'block',
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
    kind: 'bullshit kind',
    type: 'none',
    textContent: ''
  }
};

// The node is an object with invalid Type set
invalidModels.nodeHasInvalidType = {
  ccc: {
    kind: 'block',
    type: 'bullshit type',
    textContent: ''
  }
};

// A children is set, but is not an array
invalidModels.nodeChildrenIsInvalid = {
  ccc: {
    kind: 'block',
    type: 'none',
    children: 123
  }
};

// Wrong metadata for link
invalidModels.metadataForLinkIsInvalid = {
  ccc: {
    kind: 'inline',
    type: 'link',
    textContent: 'click me',
    metadata: {
      crap: ''
    }
  }
};

// Wrong metadata for list
invalidModels.metadataForLinkIsInvalid = {
  ccc: {
    kind: 'block',
    type: 'list',
    metadata: {
      listType: 'crap'
    },
    children: []
  }
};

module.exports = {
  validModels,
  invalidModels
};
