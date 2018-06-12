const { fromHTML, toHTML } = require('./src');

const html = `
    <p><br>
    Gjennom åhandlehososs
    </p>
    `;
debugger;
console.log(toHTML(fromHTML(html)));
