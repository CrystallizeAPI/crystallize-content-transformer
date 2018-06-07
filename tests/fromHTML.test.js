const { fromHTML } = require('../src');

describe(`fromHTML special cases`, () => {
  it(`"Meta tags should be stripped`, () => {
    const html = `
        <meta charset='utf-8'>
        <meta charset="utf-8">
        <p>hello</p>`;
    expect(fromHTML(html)).toEqual([
      { kind: 'block', type: 'paragraph', textContent: 'hello' }
    ]);
  });

  it(`"More than 2 spaces should be converted to single`, () => {
    const html = `<p>  he    llo </p>`;
    expect(fromHTML(html)).toEqual({
      kind: 'block',
      type: 'paragraph',
      textContent: ' he llo '
    });
  });
});
