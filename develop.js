const { fromHTML } = require('./src');

const html = `<b>hey</b><i>i</i>`;
const model = fromHTML(html, {
  whitelistTags: [
    'p',
    'b',
    'i',
    'u',
    'ol',
    'ul',
    'li',
    'blockquote',
    'code',
    'pre',
    'a'
  ]
});

console.log(JSON.stringify(model, null, 3));
// console.log(toHTML(model));
