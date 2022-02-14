const { fromHTML, isModelValid } = require('../src');

describe(`fromHTML special cases`, () => {
  it(`Meta tags should be stripped`, () => {
    const html = `
        <meta charset='utf-8'>
        <meta charset="utf-8">
        <p>hello</p>`;
    expect(fromHTML(html)).toEqual([
      { kind: 'block', type: 'paragraph', textContent: 'hello' },
    ]);
  });

  it(`More than 2 spaces should be converted to single`, () => {
    const html = `<p>  he    llo </p>`;
    expect(fromHTML(html)).toEqual({
      kind: 'block',
      type: 'paragraph',
      textContent: ' he llo ',
    });
  });

  it(`Keeps pre and code tags`, () => {
    const html = `<pre><code>var x = 0;</code></pre>`;
    expect(fromHTML(html)).toEqual({
      kind: 'block',
      type: 'preformatted',
      children: [
        {
          kind: 'block',
          type: 'code',
          textContent: 'var x = 0;',
        },
      ],
    });
  });

  it('Should keep spaces in a code block', () => {
    const html = `<pre><code>&lt;div&gt;<br>  indented<br>&lt;/div&gt;</code></pre>`;
    expect(fromHTML(html)).toEqual({
      kind: 'block',
      type: 'preformatted',
      children: [
        {
          kind: 'block',
          type: 'code',
          children: [
            {
              kind: 'inline',
              type: null,
              textContent: '<div>',
            },
            {
              kind: 'inline',
              type: 'line-break',
            },
            {
              kind: 'inline',
              type: null,
              textContent: '  indented',
            },
            {
              kind: 'inline',
              type: 'line-break',
            },
            {
              kind: 'inline',
              type: null,
              textContent: '</div>',
            },
          ],
        },
      ],
    });
  });

  it("Should keep spaces in an inline 'null' element", () => {
    const html = `
    <p><br>
    Gjennom åhandlehososs
    </p>
    `;
    expect(fromHTML(html)).toEqual([
      {
        kind: 'block',
        type: 'paragraph',
        children: [
          {
            kind: 'inline',
            type: 'line-break',
          },
          {
            kind: 'inline',
            type: null,
            textContent: 'Gjennom åhandlehososs',
          },
        ],
      },
    ]);
  });

  it(`Whitelisting works`, () => {
    const html = `<p>1</p><b>2</b>`;
    expect(fromHTML(html, { whitelistTags: ['b'] })).toEqual([
      {
        kind: 'block',
        type: 'container',
        textContent: '1',
      },
      {
        kind: 'inline',
        type: 'strong',
        textContent: '2',
      },
    ]);
  });

  it(`Blacklisting works`, () => {
    const html = `<p>1</p><b>2</b>`;
    expect(fromHTML(html, { blacklistTags: ['b'] })).toEqual([
      {
        kind: 'block',
        type: 'paragraph',
        textContent: '1',
      },
      {
        kind: 'inline',
        type: 'container',
        textContent: '2',
      },
    ]);
  });

  it(`<strong> tags work`, () => {
    expect(
      isModelValid({
        kind: 'block',
        type: 'paragraph',
        children: [
          {
            kind: 'inline',
            type: 'strong',
            textContent: 'sad',
          },
          {
            kind: 'inline',
            type: null,
            textContent: 'asd',
          },
        ],
      })
    ).toBe(true);
  });

  it(`can parse a certain paragraph`, () => {
    const html = `<p>Begi deg ut på veien mot autonom kjøring: De mest moderne systemene hjelper deg med å tilpasse farten, styre og skifte felt, alt etter situasjonen, samt ved fare for kollisjon. Ulykkesrisikoen reduseres – passasjerer og medtrafikanter beskyttes effektivt. Dermed kommer du trygt og avslappet frem.</p>`;
    expect(typeof fromHTML([html])).toBe('object');
  });
});
