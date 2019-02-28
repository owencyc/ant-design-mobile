webpackJsonp([5],{1196:function(n,s,a){n.exports={accept:a(1331),basic:a(1332),custom:a(1333),length:a(1334)}},1331:function(n,s){n.exports={content:[],meta:{order:2,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u6587\u4ef6\u7c7b\u578b","en-US":"Cutom file accept"},filename:"components/image-picker/demo/accept.md",id:"components-image-picker-demo-accept"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ImagePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2121\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2122\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ImagePickerExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    files<span class="token punctuation">:</span> data<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      files<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> files <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePicker</span>\n          <span class="token attr-name">files</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">selectable</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>image/gif,image/jpeg,image/jpg,image/png<span class="token punctuation">"</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePickerExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}]}},1332:function(n,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u7b80\u5355\u7684\u56fe\u7247\u9009\u62e9\u7ec4\u4ef6","en-US":"Simple image picker"},filename:"components/image-picker/demo/basic.md",id:"components-image-picker-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ImagePicker<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> SegmentedControl <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2121\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2122\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ImagePickerExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    files<span class="token punctuation">:</span> data<span class="token punctuation">,</span>\n    multiple<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      files<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onSegChange <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> index <span class="token operator">=</span> e<span class="token punctuation">.</span>nativeEvent<span class="token punctuation">.</span>selectedSegmentIndex<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      multiple<span class="token punctuation">:</span> index <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> files <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SegmentedControl</span>\n          <span class="token attr-name">values</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'\u5207\u6362\u5230\u5355\u9009\'</span><span class="token punctuation">,</span> <span class="token string">\'\u5207\u6362\u5230\u591a\u9009\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">selectedIndex</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>multiple <span class="token operator">?</span> <span class="token number">1</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onSegChange<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePicker</span>\n          <span class="token attr-name">files</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">selectable</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">7</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">multiple</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>multiple<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePickerExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}]}},1333:function(n,s){n.exports={content:[],meta:{order:1,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u9009\u62e9\u56fe\u7247\u7684\u65b9\u6cd5","en-US":"Cutom how to choose file"},filename:"components/image-picker/demo/custom.md",id:"components-image-picker-demo-custom"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ImagePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2121\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2122\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ImagePickerExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    files<span class="token punctuation">:</span> data<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      files<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onAddImageClick <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      files<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>files<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">,</span>\n        id<span class="token punctuation">:</span> <span class="token string">\'3\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onTabChange <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> files <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePicker</span>\n          <span class="token attr-name">files</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">selectable</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onAddImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onAddImageClick<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePickerExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}]}},1334:function(n,s){n.exports={content:[],meta:{order:3,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u6570\u91cf","en-US":"Custom the length"},filename:"components/image-picker/demo/length.md",id:"components-image-picker-demo-length"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ImagePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2121\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">\'2122\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ImagePickerExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    files<span class="token punctuation">:</span> data<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      files<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onAddImageClick <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      files<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>files<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        url<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">,</span>\n        id<span class="token punctuation">:</span> <span class="token string">\'3\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onTabChange <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> files <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePicker</span>\n          <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span>\n          <span class="token attr-name">files</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> fs<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">selectable</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>files<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">7</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onAddImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onAddImageClick<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePickerExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}]}}});