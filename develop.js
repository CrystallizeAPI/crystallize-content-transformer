const { isModelValid } = require('./src');

console.log(
  isModelValid([
    {
      kind: 'block',
      type: 'paragraph',
      textContent: 'dsa'
    },
    {
      kind: 'block',
      type: 'paragraph',
      textContent: 'asd'
    },
    {
      kind: 'block',
      type: 'paragraph',
      textContent: 'ads'
    },
    {
      kind: 'block',
      type: 'paragraph',
      children: [
        {
          kind: 'block',
          type: 'line-break'
        }
      ]
    }
  ])
);
