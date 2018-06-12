const { fromHTML } = require('../src');

describe(`fromHTML special cases`, () => {
  it(`Meta tags should be stripped`, () => {
    const html = `
        <meta charset='utf-8'>
        <meta charset="utf-8">
        <p>hello</p>`;
    expect(fromHTML(html)).toEqual([
      { kind: 'block', type: 'paragraph', textContent: 'hello' }
    ]);
  });

  it(`More than 2 spaces should be converted to single`, () => {
    const html = `<p>  he    llo </p>`;
    expect(fromHTML(html)).toEqual({
      kind: 'block',
      type: 'paragraph',
      textContent: ' he llo '
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
            kind: 'block',
            type: 'line-break'
          },
          {
            kind: 'inline',
            type: null,
            textContent: 'Gjennom åhandlehososs'
          }
        ]
      }
    ]);
  });

  it(`Whitelisting works`, () => {
    const html = `<p>1</p><b>2</b>`;
    expect(fromHTML(html, { whitelistTags: ['b'] })).toEqual([
      {
        kind: 'block',
        type: 'container',
        textContent: '1'
      },
      {
        kind: 'inline',
        type: 'emphasized',
        textContent: '2'
      }
    ]);
  });

  it(`Blacklisting works`, () => {
    const html = `<p>1</p><b>2</b>`;
    expect(fromHTML(html, { blacklistTags: ['b'] })).toEqual([
      {
        kind: 'block',
        type: 'paragraph',
        textContent: '1'
      },
      {
        kind: 'inline',
        type: 'container',
        textContent: '2'
      }
    ]);
  });
});
