const { toHTML } = require('./src');

const model = {
  kind: 'block',
  type: 'paragraph',
  children: [
    {
      kind: 'block'
    },
    {
      kind: 'inline',
      type: 'link',
      children: [
        {
          kind: 'inline',
          textContent: 'Mal arbeidsavtale fast ansettelse'
        }
      ],
      metadata: {
        href:
          'https://origamipaperworks.com/maler/mal-arbeidsavtale-fast-ansettelse'
      }
    },
    {
      kind: 'block'
    },
    {
      kind: 'inline',
      type: 'link',
      children: [
        {
          kind: 'block'
        }
      ],
      metadata: {
        href:
          'https://origamipaperworks.com/maler/mal-arbeidsavtale-fast-ansettelse'
      }
    },
    {
      kind: 'block'
    }
  ],
  metadata: {}
};

console.log(toHTML(model));
