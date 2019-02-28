webpackJsonp([22],{1268:function(n,s,a){n.exports={basic:a(1372)}},1372:function(n,s){n.exports={content:[["p","Switch. (",["a",{title:null,href:"https://github.com/react-component/form"},"rc-form document"],")"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/switch/demo/basic.md",id:"components-switch-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'rc-form\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">SwitchExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      checked<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      checked1<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> getFieldProps <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>form<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span>\n        <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'Form switch\'</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n          <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Switch\n            checked<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>checked<span class="token punctuation">}</span>\n            onChange<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                checked<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>checked<span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>Off<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>List<span class="token punctuation">.</span>Item\n          extra<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Switch\n            <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'Switch1\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              initialValue<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>checked1<span class="token punctuation">,</span>\n              valuePropName<span class="token punctuation">:</span> <span class="token string">\'checked\'</span><span class="token punctuation">,</span>\n              onChange<span class="token punctuation">:</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token comment" spellcheck="true">// Do not `setState` with rc-form</span>\n                <span class="token comment" spellcheck="true">// this.setState({ checked1: val });</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n            onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token comment" spellcheck="true">// set new value</span>\n              <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>form<span class="token punctuation">.</span><span class="token function">setFieldsValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                Switch1<span class="token punctuation">:</span> checked<span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>On <span class="token punctuation">(</span><span class="token keyword">with</span> rc<span class="token operator">-</span>form<span class="token punctuation">)</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n          <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Switch\n            <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'Switch3\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              initialValue<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n              valuePropName<span class="token punctuation">:</span> <span class="token string">\'checked\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">disabled</span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>Disabled off<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n          <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Switch\n            <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'Switch4\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              initialValue<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n              valuePropName<span class="token punctuation">:</span> <span class="token string">\'checked\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">disabled</span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>Disabled on<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n          <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Switch\n            <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'Switch5\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              initialValue<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n              valuePropName<span class="token punctuation">:</span> <span class="token string">\'checked\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>Style <span class="token keyword">for</span> Android<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n          <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Switch\n            <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'Switch6\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              initialValue<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n              valuePropName<span class="token punctuation">:</span> <span class="token string">\'checked\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>android<span class="token punctuation">"</span></span>\n            <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>Color <span class="token keyword">for</span> Android<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n          <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Switch\n            <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'Switch7\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              initialValue<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n              valuePropName<span class="token punctuation">:</span> <span class="token string">\'checked\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ios<span class="token punctuation">"</span></span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>Style <span class="token keyword">for</span> iOS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n          <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Switch\n            <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">getFieldProps</span><span class="token punctuation">(</span><span class="token string">\'Switch8\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n              initialValue<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n              valuePropName<span class="token punctuation">:</span> <span class="token string">\'checked\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">platform</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ios<span class="token punctuation">"</span></span>\n            <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>Color <span class="token keyword">for</span> iOS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> Se <span class="token operator">=</span> <span class="token function">createForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>SwitchExample<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Se</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}]}}});