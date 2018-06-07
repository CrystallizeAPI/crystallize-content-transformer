const invalidModels = {};

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

// The root array has mixed types
invalidModels.rootArrayHasMixedTypes = {
  ccc: [
    {
      kind: 'block',
      type: 'container',
      textContent: ''
    },
    123
  ]
};

// The node is an object with invalid type set
invalidModels.nodeHasInvalidType = {
  ccc: {
    kind: 'bullshit kind',
    type: 'container',
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
    type: 'container',
    children: 123
  }
};

module.exports = {
  invalidModels
};
