const { fromHTML, toHTML } = require('./src');

const html = `<pre><code>&lt;div&gt;<br>&nbsp;&nbsp;indented<br>&lt;/div&gt;&nbsp;</code></pre>`;

console.log(JSON.stringify(fromHTML(html), null, 3));
