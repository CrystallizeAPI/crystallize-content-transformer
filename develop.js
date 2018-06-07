const { fromHTML } = require('./src');

const html = `
<meta charset='utf-8'>
<meta charset="utf-8">
<b style="font-weight:normal;" id="docs-internal-guid-53464c6b-d906-a91a-82e0-2d33a237bc96">
    <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;">
        <span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">
            hello
        </span>
    </p>
</b>`;

console.log(JSON.stringify(fromHTML(html), null, 3));
