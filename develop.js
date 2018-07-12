const { fromHTML, toHTML } = require('./src');

const html = `<pre><code>&lt;div&gt;<br>
&nbsp;&nbsp;&nbsp;indented<br>
&lt;/div&gt;</code></pre>`;
const model = fromHTML(html);

console.log(JSON.stringify(model, null, 3));
console.log(toHTML(model));
