const { fromHTML, toHTML } = require('./src');

const html = `<p>hei</p>`;

console.log(toHTML(fromHTML(html, { whitelistTags: ['p'] })));
