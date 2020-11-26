const { toText } = require('./src');

const model = [
  {
    "kind": "block",
    "type": "paragraph",
    "metadata": {},
    "children": [
      {
        "kind": "inline",
        "metadata": {},
        "textContent": "The only really good place to buy lumber is at a store where the lumber has already been cut and attached together in the form of furniture finished and put inside boxes."
      }
    ]
  }
];

console.log(toText(model));
