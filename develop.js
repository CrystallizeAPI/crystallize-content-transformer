const { fromHTML, toHTML } = require('./src');

const html = `<meta charset='utf-8'><div style="color: #d4d4d4;background-color: #1e1e1e;font-family: Menlo, Monaco, 'Courier New', monospace;font-weight: normal;font-size: 12px;line-height: 18px;white-space: pre;"><div><span style="color: #569cd6;">var</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">connectionPool</span><span style="color: #d4d4d4;"> </span><span style="color: #d4d4d4;">=</span><span style="color: #d4d4d4;"> </span><span style="color: #9cdcfe;">mysql</span><span style="color: #d4d4d4;">.</span><span style="color: #dcdcaa;">createPool</span><span style="color: #d4d4d4;">({</span></div><div><span style="color: #d4d4d4;">  </span><span style="color: #9cdcfe;">host:</span><span style="color: #d4d4d4;"> </span><span style="color: #ce9178;">'127.0.0.1'</span><span style="color: #d4d4d4;">,</span></div><div><span style="color: #d4d4d4;">  </span><span style="color: #9cdcfe;">user:</span><span style="color: #d4d4d4;"> </span><span style="color: #ce9178;">'********'</span><span style="color: #d4d4d4;">,</span></div><div><span style="color: #d4d4d4;">  </span><span style="color: #9cdcfe;">password:</span><span style="color: #d4d4d4;"> </span><span style="color: #ce9178;">'*******'</span><span style="color: #d4d4d4;">,</span></div><div><span style="color: #d4d4d4;">  </span><span style="color: #9cdcfe;">database:</span><span style="color: #d4d4d4;"> </span><span style="color: #ce9178;">'********'</span><span style="color: #d4d4d4;">,</span></div><div><span style="color: #d4d4d4;">  </span><span style="color: #9cdcfe;">port:</span><span style="color: #d4d4d4;"> </span><span style="color: #ce9178;">'3306'</span></div><div><span style="color: #d4d4d4;">});</span></div><br><div><span style="color: #4ec9b0;">module</span><span style="color: #d4d4d4;">.</span><span style="color: #4ec9b0;">exports</span><span style="color: #d4d4d4;"> </span><span style="color: #d4d4d4;">=</span><span style="color: #d4d4d4;"> {</span></div><div><span style="color: #d4d4d4;">  </span><span style="color: #dcdcaa;">getConnection</span><span style="color: #9cdcfe;">:</span><span style="color: #d4d4d4;"> </span><span style="color: #569cd6;">function</span><span style="color: #d4d4d4;">() {</span></div><div><span style="color: #d4d4d4;">    </span><span style="color: #c586c0;">return</span><span style="color: #d4d4d4;"> </span><span style="color: #569cd6;">new</span><span style="color: #d4d4d4;"> </span><span style="color: #4ec9b0;">Promise</span><span style="color: #d4d4d4;">(</span><span style="color: #569cd6;">function</span><span style="color: #d4d4d4;">(</span><span style="color: #9cdcfe;">resolve</span><span style="color: #d4d4d4;">, </span><span style="color: #9cdcfe;">reject</span><span style="color: #d4d4d4;">) {</span></div><div><span style="color: #d4d4d4;">      </span><span style="color: #9cdcfe;">connectionPool</span></div><div><span style="color: #d4d4d4;">        .</span><span style="color: #dcdcaa;">getConnection</span><span style="color: #d4d4d4;">()</span></div><div><span style="color: #d4d4d4;">        .</span><span style="color: #dcdcaa;">then</span><span style="color: #d4d4d4;">(</span><span style="color: #569cd6;">function</span><span style="color: #d4d4d4;">(</span><span style="color: #9cdcfe;">connection</span><span style="color: #d4d4d4;">) {</span></div><div><span style="color: #d4d4d4;">          </span><span style="color: #dcdcaa;">resolve</span><span style="color: #d4d4d4;">(</span><span style="color: #9cdcfe;">connection</span><span style="color: #d4d4d4;">);</span></div><div><span style="color: #d4d4d4;">        })</span></div><div><span style="color: #d4d4d4;">        .</span><span style="color: #dcdcaa;">catch</span><span style="color: #d4d4d4;">(</span><span style="color: #569cd6;">function</span><span style="color: #d4d4d4;">(</span><span style="color: #9cdcfe;">error</span><span style="color: #d4d4d4;">) {</span></div><div><span style="color: #d4d4d4;">          </span><span style="color: #dcdcaa;">reject</span><span style="color: #d4d4d4;">(</span><span style="color: #9cdcfe;">error</span><span style="color: #d4d4d4;">);</span></div><div><span style="color: #d4d4d4;">        });</span></div><div><span style="color: #d4d4d4;">    });</span></div><div><span style="color: #d4d4d4;">  }</span></div><div><span style="color: #d4d4d4;">};</span></div><br></div>`;
const model = fromHTML(html, { keepSpaces: true });

console.log(JSON.stringify(model, null, 3));
console.log(toHTML(model));
