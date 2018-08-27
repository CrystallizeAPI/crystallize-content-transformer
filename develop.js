const { fromHTML, toHTML } = require('./src');

const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Content-Style-Type" content="text/css">
<title></title>
<meta name="Generator" content="Cocoa HTML Writer">
<meta name="CocoaVersion" content="1561.6">
<style type="text/css">
p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 11.0px 'Helvetica Neue'; color: #000000; -webkit-text-stroke: #000000}
p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 11.0px 'Helvetica Neue'; color: #000000; -webkit-text-stroke: #000000; min-height: 12.0px}
p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 17.0px 'Helvetica Neue'; color: #000000; -webkit-text-stroke: #000000; min-height: 20.0px}
span.s1 {font-kerning: none}
</style>
</head>
<body>
<p class="p1"><span class="s1">Aaaa</span></p>
<p class="p1"><span class="s1">A</span></p>
<p class="p3"><br /></p>
</body>
</html>
`;
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
