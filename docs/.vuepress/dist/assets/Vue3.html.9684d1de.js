import{_ as i,o as p,c,a as s,b as t,e as n,t as o,d as a,r as l}from"./app.fc55b8db.js";const u={},d=a('<h1 id="vue3\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#vue3\u9762\u8BD5\u9898" aria-hidden="true">#</a> Vue3\u9762\u8BD5\u9898</h1><p>\u6B63\u5728\u52AA\u529B\u5EFA\u8BBE\u4E2D...</p><h2 id="_1-vue3\u4E0Evue2\u6709\u54EA\u4E9B\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#_1-vue3\u4E0Evue2\u6709\u54EA\u4E9B\u4E0D\u540C" aria-hidden="true">#</a> 1. vue3\u4E0Evue2\u6709\u54EA\u4E9B\u4E0D\u540C</h2><p>\u5927\u7684\u6539\u52A8\uFF1A</p><ul><li>proxy\u4EE3\u66FFObject.definPrototety\u54CD\u5E94\u5F0F\u7CFB\u7EDF</li><li>ts\u4EE3\u66FFflow\u7C7B\u578B\u68C0\u67E5</li><li>\u91CD\u6784\u4E86\u76EE\u5F55\u7ED3\u6784\uFF0C\u5C06\u4EE3\u7801\u4E3B\u8981\u5206\u6210\u4E09\u4E2A\u72EC\u7ACB\u7684\u6A21\u5757\uFF0C\u66F4\u5229\u4E8E\u957F\u671F\u7EF4\u62A4</li><li>\u91CD\u5199vdom\uFF0C\u4F18\u5316\u7F16\u8BD1\u6027\u80FD</li><li>\u652F\u6301tree shaking</li><li>\u589E\u52A0\u4E86composition api(setup)\uFF0C\u8BA9\u4EE3\u7801\u66F4\u6613\u4E8E\u7EF4\u62A4</li></ul><p>\u5C0F\u7684\u6539\u52A8:</p><ul><li>\u5F02\u6B65\u7EC4\u4EF6\u9700\u8981 defineAsyncComponent \u65B9\u6CD5\u6765\u521B\u5EFA</li><li>v-model \u7528\u6CD5</li><li><code>v-if\u4F18\u5148\u7EA7\u9AD8\u4E8Ev-for</code></li><li>destroyed \u751F\u547D\u5468\u671F\u9009\u9879\u88AB\u91CD\u547D\u540D\u4E3A unmounted</li><li>beforeDestroy \u751F\u547D\u5468\u671F\u9009\u9879\u88AB\u91CD\u547D\u540D\u4E3A beforeUnmount</li><li>render\u51FD\u6570\u9ED8\u8BA4\u53C2\u6570createElement\u79FB\u9664\u6539\u4E3A\u5168\u5C40\u5F15\u5165</li><li>\u7EC4\u4EF6\u4E8B\u4EF6\u73B0\u5728\u9700\u8981\u5728 emits \u9009\u9879\u4E2D\u58F0\u660E</li></ul><p>\u65B0\u7279\u6027\uFF1A</p><ul><li>\u7EC4\u5408\u5F0F API</li><li>Teleport</li><li>framents\uFF08\u7EC4\u4EF6\u652F\u6301\u591A\u4E2A\u6839\u8282\u70B9\uFF09</li><li>createRenderer\uFF08\u8DE8\u5E73\u53F0\u7684\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668\uFF09</li></ul>',9),r=n("\u6CA1\u6709\u5217\u4E3E\u5B8C\uFF0C\u63A8\u8350\u770B\u5B98\u7F51\u7684"),v={href:"https://v3.cn.vuejs.org/guide/migration/introduction.html",target:"_blank",rel:"noopener noreferrer"},k=n("v3\u8FC1\u79FB\u6307\u5357"),m=a(`<h2 id="_2-vue3\u5728\u54EA\u4E9B\u65B9\u9762\u63D0\u5347\u4E86\u6027\u80FD" tabindex="-1"><a class="header-anchor" href="#_2-vue3\u5728\u54EA\u4E9B\u65B9\u9762\u63D0\u5347\u4E86\u6027\u80FD" aria-hidden="true">#</a> 2. vue3\u5728\u54EA\u4E9B\u65B9\u9762\u63D0\u5347\u4E86\u6027\u80FD</h2><h3 id="_1-\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#_1-\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u63D0\u5347" aria-hidden="true">#</a> 1. \u54CD\u5E94\u5F0F\u7CFB\u7EDF\u63D0\u5347</h3><p>vue2\u5728\u521D\u59CB\u5316\u7684\u65F6\u5019\uFF0C\u901A\u8FC7Object.defineProperty\u5BF9data\u7684\u6BCF\u4E2A\u5C5E\u6027\u8FDB\u884C\u8BBF\u95EE\u548C\u4FEE\u6539\u7684\u62E6\u622A\uFF0Cgetter\u8FDB\u884C\u4F9D\u8D56\u6536\u96C6\u3001setter\u6D3E\u53D1\u66F4\u65B0\u3002\u5728\u5C5E\u6027\u503C\u662F\u5BF9\u8C61\u7684\u65F6\u5019\u8FD8\u9700\u8981\u9012\u5F52\u8C03\u7528defineproperty\u3002\u770B\u4E0B\u5927\u81F4\u5B9E\u73B0\u7684\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function observe(target) {
  if (target &amp;&amp; typeof target === &quot;Object&quot;) {
    Object.keys(target).forEach((key) =&gt; {
      defineReactive(target, key, target[key])
    })
  }
}
function defineReactive(obj, key, val) {
  const dep = new Dep();
  observe(val) // \u5982\u679C\u5C5E\u6027\u503C\u662F\u5BF9\u8C61\u5C31\u904D\u5386\u5B83\u7684\u5C5E\u6027
  Object.defineProperty(obj, key, {
    get() {
      return val
    },
    set(v) {
      val = v
      dep.notify();
    }
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u800C\u5982\u679C\u5C5E\u6027\u662F\u6570\u7EC4\uFF0C\u8FD8\u9700\u8981\u8986\u76D6\u6570\u7EC4\u7684\u4E03\u4E2A\u65B9\u6CD5(\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\u7684\u4E03\u4E2A\u65B9\u6CD5)\u8FDB\u884C\u53D8\u66F4\u7684\u901A\u77E5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto)
const methodsToPatch = [
  &#39;push&#39;,
  &#39;pop&#39;,
  &#39;shift&#39;,
  &#39;unshift&#39;,
  &#39;splice&#39;,
  &#39;sort&#39;,
  &#39;reverse&#39;
]

methodsToPatch.forEach(function (method) {
  const original = arrayProto[method]
  def(arrayMethods, method, function mutator (...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    ob.dep.notify()
    return result
  })
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u8FD9\u51E0\u6BB5\u4EE3\u7801\u53EF\u4EE5\u770B\u51FAObject.defineProperty\u7684\u51E0\u4E2A\u7F3A\u70B9\uFF1A</p><ul><li>\u521D\u59CB\u5316\u65F6\u9700\u8981\u904D\u5386\u5BF9\u8C61\u6240\u6709key\uFF0C\u5C42\u7EA7\u591A\u7684\u60C5\u51B5\u4E0B\uFF0C\u6027\u80FD\u6709\u4E00\u5B9A\u5F71\u54CD</li><li>\u52A8\u6001\u65B0\u589E\u3001\u5220\u9664\u5BF9\u8C61\u5C5E\u6027\u65E0\u6CD5\u62E6\u622A\uFF0C\u53EA\u80FD\u7528set/delete api\u4EE3\u66FF</li><li>\u4E0D\u652F\u6301\u65B0\u7684Map\u3001Set\u7B49\u6570\u636E\u7ED3\u6784</li><li>\u65E0\u6CD5\u76D1\u63A7\u5230\u6570\u7EC4\u4E0B\u6807\u7684\u53D8\u5316(\u76D1\u542C\u7684\u6027\u80FD\u4EE3\u4EF7\u592A\u5927)</li></ul><p>\u6240\u4EE5\u5728vue3\u4E2D\u7528\u4E86proxy\u5168\u9762\u4EE3\u66FFObject.defineProperty\u7684\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u3002proxy\u662F\u6BD4\u8F83\u65B0\u7684\u6D4F\u89C8\u5668\u7279\u6027\uFF0C\u62E6\u622A\u7684\u662F\u6574\u4E2A\u5BF9\u8C61\u800C\u4E0D\u662F\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u53EF\u4EE5\u62E6\u622A\u591A\u79CD\u65B9\u6CD5\uFF0C\u5305\u62EC\u5C5E\u6027\u7684\u8BBF\u95EE\u3001\u8D4B\u503C\u3001\u5220\u9664\u7B49\u64CD\u4F5C\uFF0C\u4E0D\u9700\u8981\u521D\u59CB\u5316\u7684\u65F6\u5019\u904D\u5386\u6240\u6709\u5C5E\u6027\uFF0C\u5E76\u4E14\u662F\u61D2\u6267\u884C\u7684\u7279\u6027\uFF0C\u4E5F\u5C31\u662F\u5728\u8BBF\u95EE\u5230\u7684\u65F6\u5019\u624D\u4F1A\u89E6\u53D1\uFF0C\u5F53\u8BBF\u95EE\u5230\u5BF9\u8C61\u5C5E\u6027\u7684\u65F6\u5019\u624D\u4F1A\u9012\u5F52\u4EE3\u7406\u8FD9\u4E2A\u5BF9\u8C61\u5C5E\u6027\uFF0C\u6240\u4EE5\u6027\u80FD\u6BD4vue2\u6709\u660E\u663E\u7684\u4F18\u52BF\u3002</p><p>\u603B\u7ED3\u4E0Bproxy\u7684\u4F18\u52BF\uFF1A</p><ul><li>\u53EF\u4EE5\u76D1\u542C\u591A\u79CD\u64CD\u4F5C\u65B9\u6CD5\uFF0C\u5305\u62EC\u52A8\u6001\u65B0\u589E\u7684\u5C5E\u6027\u548C\u5220\u9664\u5C5E\u6027\u3001has\u3001apply\u7B49\u64CD\u4F5C</li><li>\u53EF\u4EE5\u76D1\u542C\u6570\u7EC4\u7684\u7D22\u5F15\u548C length \u7B49\u5C5E\u6027</li><li>\u61D2\u6267\u884C\uFF0C\u4E0D\u9700\u8981\u521D\u59CB\u5316\u7684\u65F6\u5019\u9012\u5F52\u904D\u5386</li><li>\u6D4F\u89C8\u5668\u65B0\u6807\u51C6\uFF0C\u6027\u80FD\u66F4\u597D\uFF0C\u5E76\u4E14\u6709\u6301\u7EED\u4F18\u5316\u7684\u53EF\u80FD</li></ul><p>\u770B\u4E0B\u5927\u81F4\u5B9E\u73B0\u62E6\u622A\u5BF9\u8C61\u7684\u65B9\u6CD5\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span>target<span class="token operator">:</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>target <span class="token keyword">as</span> Target<span class="token punctuation">)</span><span class="token punctuation">[</span>ReactiveFlags<span class="token punctuation">.</span><span class="token constant">IS_READONLY</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>
    target<span class="token punctuation">,</span>
    <span class="token boolean">false</span><span class="token punctuation">,</span>
    mutableHandlers<span class="token punctuation">,</span>
    mutableCollectionHandlers
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>
  target<span class="token operator">:</span> Target<span class="token punctuation">,</span>
  isReadonly<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
  baseHandlers<span class="token operator">:</span> ProxyHandler<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  collectionHandlers<span class="token operator">:</span> ProxyHandler<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>
    target<span class="token punctuation">,</span>
    baseHandlers
  <span class="token punctuation">)</span>
  proxyMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> proxy<span class="token punctuation">)</span> <span class="token comment">// \u7528weakMap\u6536\u96C6</span>
  <span class="token keyword">return</span> proxy
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u7F16\u8BD1\u4F18\u5316-\u865A\u62DFdom\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_2-\u7F16\u8BD1\u4F18\u5316-\u865A\u62DFdom\u4F18\u5316" aria-hidden="true">#</a> 2. \u7F16\u8BD1\u4F18\u5316\uFF08\u865A\u62DFdom\u4F18\u5316\uFF09</h3><p>\u7F16\u8BD1\u4F18\u5316\u4E3B\u8981\u662F\u901A\u8FC7\u91CD\u5199\u865A\u62DFdom\u3002\u4F18\u5316\u7684\u70B9\u5305\u62EC<code>\u7F16\u8BD1\u6A21\u677F\u7684\u9759\u6001\u6807\u8BB0</code>\u3001<code>\u9759\u6001\u63D0\u5347</code>\u3001<code>\u4E8B\u4EF6\u7F13\u5B58</code></p><ul><li>\u9759\u6001\u6807\u8BB0\uFF08PatchFlag\uFF09</li></ul><p>\u6839\u636E\u5C24\u5927\u76F4\u64AD\u6240\u8BF4\uFF0C\u66F4\u65B0\u7684\u6027\u80FD\u63D0\u53471.3~2\u500D\uFF0Cssr\u63D0\u53472~3\u500D\u3002 \u5728\u5BF9\u66F4\u65B0\u7684\u8282\u70B9\u8FDB\u884C\u5BF9\u6BD4\u7684\u65F6\u5019\uFF0C\u53EA\u4F1A\u53BB\u5BF9\u6BD4\u5E26\u6709\u9759\u6001\u6807\u8BB0\u7684\u8282\u70B9\u3002\u5E76\u4E14 PatchFlag \u679A\u4E3E\u5B9A\u4E49\u4E86\u5341\u51E0\u79CD\u7C7B\u578B\uFF0C\u7528\u4EE5\u66F4\u7CBE\u786E\u7684\u5B9A\u4F4D\u9700\u8981\u5BF9\u6BD4\u8282\u70B9\u7684\u7C7B\u578B\u3002</p><p>\u770B\u8FD9\u6BB5\u4EE3\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div id=&quot;app&quot;&gt;
    &lt;p&gt;\u54B1\u4EEC\u5708\u513F&lt;/p&gt;
    &lt;div&gt;{{message}}&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue2\u7F16\u8BD1\u540E\u7684\u6E32\u67D3\u51FD\u6570\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function render() {
  with(this) {
    return _c(&#39;div&#39;, {
      attrs: {
        &quot;id&quot;: &quot;app&quot;
      }
    }, [_c(&#39;p&#39;, [_v(&quot;\u54B1\u4EEC\u5708\u513F&quot;)]), _c(&#39;div&#39;, [_v(
      _s(message))])])
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2Arender\u51FD\u6570\u4F1A\u8FD4\u56DEvnode\uFF0C\u540E\u9762\u66F4\u65B0\u7684\u65F6\u5019vue2\u4F1A\u8C03<code>patch</code>\u51FD\u6570\u6BD4\u65E7vnode\u8FDB\u884Cdiff\u7B97\u6CD5\u66F4\u65B0\uFF08\u5728\u6211\u7684\u4E0A\u7BC7\u6587\u7AE0\u6709\u89E3\u6790\u8FC7\uFF09\uFF0C\u8FD9\u65F6\u5019\u5BF9\u6BD4\u662F\u6574\u4E2Avnode\uFF0C\u5305\u62EC\u91CC\u9762\u7684\u9759\u6001\u8282\u70B9<code>&lt;p&gt;\u54B1\u4EEC\u5708\u513F&lt;/p&gt;</code>\uFF0C\u8FD9\u6837\u5C31\u4F1A\u6709\u4E00\u5B9A\u7684\u6027\u80FD\u635F\u8017\u3002</p><p>vue3\u7F16\u8BD1\u540E\u7684\u6E32\u67D3\u51FD\u6570:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { createVNode as _createVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createBlock as _createBlock } from &quot;vue&quot;

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock(&quot;div&quot;, { id: &quot;app&quot; }, [
    _createVNode(&quot;p&quot;, null, &quot;\u54B1\u4EEC\u5708\u513F&quot;),
    _createVNode(&quot;div&quot;, null, _toDisplayString(_ctx.message), 1 /* TEXT */)
  ]))
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),b=n("\u53EA\u6709"),f=s("code",null,"_createVNode",-1),g=n("\u8FD9\u4E2A\u51FD\u6570\u5E26\u6709\u7B2C\u56DB\u4E2A\u53C2\u6570\u7684\u624D\u662F\u975E\u9759\u6001\u8282\u70B9\uFF0C\u4E5F\u5C31\u662F\u9700\u8981\u540E\u7EEDdiff\u7684\u8282\u70B9\u3002\u7B2C\u56DB\u4E2A\u53C2\u6570\u662F\u8FD9\u4E2A\u8282\u70B9\u5177\u4F53\u5305\u542B\u9700\u8981\u88ABdiff\u7684\u7C7B\u578B\uFF0C\u6BD4\u5982\u662F"),y=s("code",null,"text",-1),h=a(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  TEXT = 1,// \u52A8\u6001\u7684\u6587\u672C\u8282\u70B9
  CLASS = 1 &lt;&lt; 1,  // 2\uFF0C\u52A8\u6001Class\u7684\u8282\u70B9
  STYLE = 1 &lt;&lt; 2,  // 4\uFF0C\u8868\u793A\u52A8\u6001\u6837\u5F0F
  PROPS = 1 &lt;&lt; 3,  // 8\uFF0C\u52A8\u6001\u5C5E\u6027
  FULL_PROPS = 1 &lt;&lt; 4,  // 16 \u52A8\u6001\u952E\u540D
  HYDRATE_EVENTS = 1 &lt;&lt; 5,  // 32 \u5E26\u6709\u4E8B\u4EF6\u76D1\u542C\u5668\u7684\u8282\u70B9
  STABLE_FRAGMENT = 1 &lt;&lt; 6,   // 64 \u4E00\u4E2A\u4E0D\u4F1A\u6539\u53D8\u5B50\u8282\u70B9\u987A\u5E8F\u7684
  KEYED_FRAGMENT = 1 &lt;&lt; 7, // 128 \u5E26\u6709 key \u5C5E\u6027
  UNKEYED_FRAGMENT = 1 &lt;&lt; 8, // 256 \u5B50\u8282\u70B9\u6CA1\u6709 key
  NEED_PATCH = 1 &lt;&lt; 9,   // 512
  DYNAMIC_SLOTS = 1 &lt;&lt; 10,  // \u52A8\u6001\u63D2\u69FD
  HOISTED = -1,  // \u9759\u6001\u63D0\u5347\u7684\u6807\u8BB0\uFF0C\u4E0D\u4F1A\u88ABdiff\uFF0C\u4E0B\u9762\u7684\u9759\u6001\u63D0\u5347\u4F1A\u63D0\u5230
  BAIL = -2 //
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u9759\u6001\u63D0\u5347</li></ul><p>\u9759\u6001\u63D0\u5347\u7684\u610F\u601D\u5C31\u662F\u628A\u51FD\u6570\u91CC\u7684\u67D0\u4E9B\u53D8\u91CF\u653E\u5230\u5916\u9762\u6765\uFF0C\u8FD9\u6837\u518D\u6B21\u6267\u884C\u8FD9\u4E2A\u51FD\u6570\u7684\u65F6\u5019\u5C31\u4E0D\u4F1A\u91CD\u65B0\u58F0\u660E\u3002vue3\u5728\u7F16\u8BD1\u9636\u6BB5\u505A\u4E86\u8FD9\u4E2A\u4F18\u5316\u3002\u8FD8\u662F\u4E0A\u9762\u90A3\u6BB5\u4EE3\u7801\uFF0C\u5206\u522B\u770B\u4E0Bvue2\u548Cvue3\u7F16\u8BD1\u540E\u7684\u4E0D\u540C</p><p>vue2:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function render() {
  with(this) {
    return _c(&#39;div&#39;, {
      attrs: {
        &quot;id&quot;: &quot;app&quot;
      }
    }, [_c(&#39;p&#39;, [_v(&quot;\u54B1\u4EEC\u5708\u513F&quot;)]), _c(&#39;div&#39;, [_v(_s(message))])])
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue3:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { createVNode as _createVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createBlock as _createBlock } from &quot;vue&quot;

const _hoisted_1 = { id: &quot;app&quot; }
const _hoisted_2 = /*#__PURE__*/_createVNode(&quot;p&quot;, null, &quot;\u54B1\u4EEC\u5708\u513F&quot;, -1 /* HOISTED */)

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createBlock(&quot;div&quot;, _hoisted_1, [
    _hoisted_2,
    _createVNode(&quot;div&quot;, null, _toDisplayString(_ctx.message), 1 /* TEXT */)
  ]))
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230vue3\u5C06\u4E0D\u53D8\u7684\u8282\u70B9\u58F0\u660E\u653E\u5230\u4E86\u5916\u9762\u53BB\u6267\u884C\uFF0C\u540E\u9762\u518D\u6E32\u67D3\u7684\u65F6\u5019\u76F4\u63A5\u53BB_hoited\u53D8\u91CF\u5C31\u884C\uFF0C\u800Cvue2\u6BCF\u6B21render\u90FD\u9700\u8981\u6267\u884C_c\u751F\u6210\u65B0\u7684\u8282\u70B9\u3002\u8FD9\u91CC\u8FD8\u6709\u4E00\u4E2A\u70B9\uFF0C_hoisted_2\u7684_createVNode\u7B2C\u56DB\u4E2A\u53C2\u6570-1\uFF0C\u6807\u8BB0\u8FD9\u4E2A\u8282\u70B9\u6C38\u8FDC\u4E0D\u9700\u8981diff\u3002</p><ul><li>\u4E8B\u4EF6\u7F13\u5B58</li></ul><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E8B\u4EF6\u88AB\u8BA4\u4E3A\u662F\u52A8\u6001\u53D8\u91CF\uFF0C\u6240\u4EE5\u6BCF\u6B21\u66F4\u65B0\u89C6\u56FE\u7684\u65F6\u5019\u90FD\u4F1A\u8FFD\u8E2A\u5B83\u7684\u53D8\u5316\u3002\u4F46\u662F\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u7684 @click\xA0\u4E8B\u4EF6\u5728\u89C6\u56FE\u6E32\u67D3\u524D\u548C\u6E32\u67D3\u540E\uFF0C\u90FD\u662F\u540C\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u57FA\u672C\u4E0A\u4E0D\u9700\u8981\u53BB\u8FFD\u8E2A\u5B83\u7684\u53D8\u5316\uFF0C\u6240\u4EE5 Vue 3.0 \u5BF9\u6B64\u4F5C\u51FA\u4E86\u76F8\u5E94\u7684\u4F18\u5316\u53EB\u4E8B\u4EF6\u76D1\u542C\u7F13\u5B58</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div id=&quot;app&quot;&gt;
    &lt;p @click=&quot;handleClick&quot;&gt;\u54B1\u4EEC\u5708\u513F&lt;/p&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue3\u7F16\u8BD1\u540E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from &quot;vue&quot;

const _hoisted_1 = { id: &quot;app&quot; }

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createBlock(&quot;div&quot;, _hoisted_1, [
    _createVNode(&quot;p&quot;, {
      onClick: _cache[1] || (_cache[1] = (...args) =&gt; (_ctx.handleClick &amp;&amp; _ctx.handleClick(...args)))
    }, &quot;\u54B1\u4EEC\u5708\u513F&quot;)
  ]))
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230onClick\u6709\u4E00\u4E2A_cache\u5224\u65AD\u7F13\u5B58\u8D4B\u503C\u7684\u64CD\u4F5C\uFF0C\u4ECE\u800C\u53D8\u6210\u9759\u6001\u8282\u70B9</p><h3 id="_3-\u6E90\u7801\u4F53\u79EF\u7684\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_3-\u6E90\u7801\u4F53\u79EF\u7684\u4F18\u5316" aria-hidden="true">#</a> 3. \u6E90\u7801\u4F53\u79EF\u7684\u4F18\u5316</h3><p>vue3\u901A\u8FC7\u91CD\u6784\u5168\u5C40api\u548C\u5185\u90E8api\uFF0C\u652F\u6301\u4E86tree shaking\uFF0C\u4EFB\u4F55\u4E00\u4E2A\u51FD\u6570\uFF0C\u5982ref\u3001reavtived\u3001computed\u7B49\uFF0C\u4EC5\u4EC5\u5728\u7528\u5230\u7684\u65F6\u5019\u624D\u6253\u5305\uFF0C\u6CA1\u7528\u5230\u7684\u6A21\u5757\u90FD\u88AB\u6447\u6389\uFF0C\u6253\u5305\u7684\u6574\u4F53\u4F53\u79EF\u53D8\u5C0F</p><h2 id="_3-\u4ECB\u7ECD\u4E0Bcomposition-api" tabindex="-1"><a class="header-anchor" href="#_3-\u4ECB\u7ECD\u4E0Bcomposition-api" aria-hidden="true">#</a> 3. \u4ECB\u7ECD\u4E0Bcomposition api</h2><p>Composition API\u662Fvue3\u6700\u91CD\u8981\u7684\u7279\u6027\u4E4B\u4E00\uFF0C\u4E3A\u7684\u662F\u66F4\u597D\u7684<code>\u903B\u8F91\u590D\u7528\u548C\u4EE3\u7801\u7EC4\u7EC7</code>\uFF0C\u89E3\u51B3options api\u5728\u5927\u578B\u9879\u76EE\u4E2D\uFF0Coptions api\u4E0D\u597D\u62C6\u5206\u548C\u91CD\u7528\u7684\u95EE\u9898\u3002</p><p>Composition api\u58F0\u660E\u5728<code>setup</code>\u51FD\u6570\u5185\uFF0Csetup\u662F\u5728\u521B\u5EFA\u7EC4\u4EF6\u4E4B\u524D\u6267\u884C\uFF0C\u8FD9\u4E5F\u610F\u5473\u7740\u8FD9\u65F6\u5019\u7EC4\u4EF6\u5B9E\u4F8B\u5C1A\u672A\u88AB\u521B\u5EFA\uFF0C\u56E0\u6B64\u5728 setup \u9009\u9879\u4E2D\u6CA1\u6709 this\u3002</p><p>setup\u63A5\u53D7<code>props</code>\u548C<code>context</code>\u4E24\u4E2A\u53C2\u6570\uFF0Cprops\u662F\u7236\u7EC4\u4EF6\u4F20\u9012\u7684\u53C2\u6570\uFF0C\u5E76\u4E14\u539F\u672C\u5C31\u662F\u54CD\u5E94\u5F0F\u7684\uFF0Ccontext\u5219\u662F\u4E00\u4E2A\u666E\u901A\u7684\u5BF9\u8C61\uFF0C\u5305\u542B<code>attrs</code>\u3001<code>slots</code> \u3001<code>emit</code>\u4E09\u4E2A\u5C5E\u6027\u3002setup\u7684\u8FD4\u56DE\u503C\u53EF\u4EE5\u5728\u6A21\u677F\u548C\u5176\u4ED6\u9009\u9879\u4E2D\u8BBF\u95EE\u5230\uFF0C\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u6E32\u67D3\u51FD\u6570\u3002</p><p>vue2\u662F\u5C06data\u9009\u9879\u7684\u6570\u636E\u8FDB\u884C\u5904\u7406\u540E\u6210\u4E3A\u54CD\u5E94\u5F0F\u6570\u636E\uFF0C\u800C\u5728vue3\u4E2D\u8981\u901A\u8FC7<code>reactive</code>\u548C<code>ref</code>\u51FD\u6570\u6765\u8FDB\u884C\u6570\u636E\u5B9A\u4E49\u540E\u624D\u662F\u54CD\u5E94\u5F0F\u6570\u636E\u3002\u8FD9\u6837\u505A\u7684\u4E00\u4E2A\u597D\u5904\u5C31\u662F\u6A21\u677F\u7ED1\u5B9A\u7684\u6570\u636E\u4E0D\u4E00\u5B9A\u662F\u9700\u8981\u54CD\u5E94\u5F0F\u7684\uFF0Cvue3\u901A\u8FC7\u7528\u6237\u81EA\u884C\u51B3\u5B9A\u9700\u8981\u54CD\u5E94\u5F0F\u7684\u6570\u636E\u6765\u5904\u7406\uFF0C\u800Cvue2\u4E2D\u8981\u5728\u6A21\u677F\u4E2D\u4F7F\u7528\u53D8\u91CF\u53EA\u80FD\u901A\u8FC7\u5728data\u91CC\u58F0\u660E\uFF0C\u8FD9\u6837\u5C31\u9020\u6210\u4E86\u4E00\u5B9A\u7684\u6027\u80FD\u6D6A\u8D39\u3002</p><p>\u56E0\u4E3Asetup\u662F\u5728\u7EC4\u4EF6\u521B\u5EFA\u4E4B\u524D\u6267\u884C\uFF0C\u9700\u8981\u8BBF\u95EE\u7EC4\u4EF6\u5B9E\u4F8B\u6216\u8005 \u751F\u547D\u5468\u671F\u5219\u8981\u901A\u8FC7\u5F15\u5165vue\u63D0\u4F9B\u7684\u51FD\u6570\uFF0C<code>getCurrentInstance</code>\u3001<code>onMounted</code>\u7B49\u7B49\uFF0C\u8FD9\u5C31\u662F\u51FD\u6570\u5F0F\u7F16\u7A0B\u7684\u65B9\u5F0F\uFF0C\u4E5F\u66F4\u5229\u4E8E\u4EE3\u7801\u903B\u8F91\u7684\u62C6\u5206\uFF0C\u518D\u4E5F\u4E0D\u9700\u8981mixin\u6765\u6DF7\u5165\u5404\u79CD\u9009\u9879\u4E86\u3002</p><p>\u5229\u7528\u8FD9\u4E2A\u7279\u6027\uFF0C\u53EF\u4EE5\u5C06\u4E00\u4E9B\u590D\u7528\u7684\u4EE3\u7801\u62BD\u79BB\u51FA\u6765\u4F5C\u4E3A\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EA\u8981\u5728\u4F7F\u7528\u7684\u5730\u65B9\u76F4\u63A5\u8FDB\u884C\u8C03\u7528\uFF0C\u975E\u5E38\u7075\u6D3B\uFF0C\u770B\u4E0B\u5B98\u65B9\u63D0\u4F9B\u7684\u4F8B\u5B50\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { toRefs, reactive, onUnmounted, onMounted } from &#39;vue&#39;;
function useMouse(){
    const state = reactive({x:0,y:0});
    const update = e=&gt;{
        state.x = e.pageX;
        state.y = e.pageY;
    }
    onMounted(()=&gt;{
        window.addEventListener(&#39;mousemove&#39;,update);
    })
    onUnmounted(()=&gt;{
        window.removeEventListener(&#39;mousemove&#39;,update);
    })

    return toRefs(state);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EC4\u4EF6\u4F7F\u7528\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import useMousePosition from &#39;./mouse&#39;
export default {
    setup() {
        const { x, y } = useMousePosition()
        return { x, y }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u6E90\u7801\u770B\u4E0Bsetup\u51FD\u6570\u7684\u5B9E\u73B0\u548C\u8C03\u7528\u903B\u8F91\uFF1A \u521B\u5EFA\u7EC4\u4EF6\u7684\u65F6\u5019\u4F1A\u8C03<code>mountComponent</code>\uFF0C\u5728mountComponent\u8C03\u7528<code>setupComponent</code>\uFF0C\u518D<code>setupStatefulComponent</code>\u51FD\u6570\u5904\u7406\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function setupComponent(
  instance: ComponentInternalInstance,
  isSSR = false
) {
  isInSSRComponentSetup = isSSR

  const { props, children, shapeFlag } = instance.vnode
  const isStateful = shapeFlag &amp; ShapeFlags.STATEFUL_COMPONENT
  initProps(instance, props, isStateful, isSSR)
  initSlots(instance, children)

  const setupResult = isStateful
    ? setupStatefulComponent(instance, isSSR)
    : undefined
  isInSSRComponentSetup = false
  return setupResult // \u6700\u7EC8\u8FD4\u56DEsetup\u5904\u7406\u540E\u7684\u7ED3\u679C
}
function setupStatefulComponent(
  instance: ComponentInternalInstance,
  isSSR: boolean
) {
  const Component = instance.type as ComponentOptions

  if (__DEV__) {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config)
    }
    if (Component.components) {
      const names = Object.keys(Component.components)
      for (let i = 0; i &lt; names.length; i++) {
        validateComponentName(names[i], instance.appContext.config)
      }
    }
    if (Component.directives) {
      const names = Object.keys(Component.directives)
      for (let i = 0; i &lt; names.length; i++) {
        validateDirectiveName(names[i])
      }
    }
  }
  // 0. create render proxy property access cache
  instance.accessCache = Object.create(null)
  // 1. create public instance / render proxy
  // also mark it raw so it&#39;s never observed
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers)
  if (__DEV__) {
    exposePropsOnRenderContext(instance)
  }
  // 2. call setup()
  const { setup } = Component
  // \u5982\u679C\u6709setup\u9009\u9879\u5C31\u8FDB\u53BBsetup\u7684\u5904\u7406
  if (setup) {
    const setupContext = (instance.setupContext =
      setup.length &gt; 1 ? createSetupContext(instance) : null)

    currentInstance = instance
    pauseTracking()
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      ErrorCodes.SETUP_FUNCTION,
      [__DEV__ ? shallowReadonly(instance.props) : instance.props, setupContext]
    )
    // \u6682\u505C\u4F9D\u8D56\u6536\u96C6
    resetTracking()
    currentInstance = null
    
  } else {
    finishComponentSetup(instance, isSSR)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5224\u65AD\u6709setup\u9009\u9879\u5C31\u901A\u8FC7<code>callWithErrorHandling</code>\u5F00\u59CB\u6267\u884Csetup\uFF0C\u8FD9\u4E2A\u51FD\u6570\u6267\u884Csetup\u9009\u9879\u5E76\u505A\u4E86\u9519\u8BEF\u5904\u7406\u673A\u5236\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function callWithErrorHandling(
  fn: Function, // \u8FD9\u4E2Afn\u5C31\u662Fsetup\u9009\u9879
  instance: ComponentInternalInstance | null,
  type: ErrorTypes,
  args?: unknown[]
) {
  let res
  try {
    res = args ? fn(...args) : fn()
  } catch (err) {
    handleError(err, instance, type)
  }
  return res
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u5B8C\u540E\u5728\u8C03<code>handleSetupResult</code>\u5BF9setup\u7684\u8FD4\u56DE\u503C\u8FDB\u884C\u5224\u65AD\u662F\u5426\u5408\u6CD5\uFF0C\u6700\u7EC8<code>finishComponentSetup</code>\u5B8C\u6210setup\u5904\u7406\uFF0C\u770BfinishComponentSetup\u51FD\u6570\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function finishComponentSetup(
  instance: ComponentInternalInstance,
  isSSR: boolean
) {
  const Component = instance.type as ComponentOptions

  // template / render function normalization
  if (__NODE_JS__ &amp;&amp; isSSR) {
    if (Component.render) {
      instance.render = Component.render as InternalRenderFunction
    }
  } else if (!instance.render) {
    // could be set from setup()
    if (compile &amp;&amp; Component.template &amp;&amp; !Component.render) {
      if (__DEV__) {
        startMeasure(instance, \`compile\`)
      }
      Component.render = compile(Component.template, {
        isCustomElement: instance.appContext.config.isCustomElement,
        delimiters: Component.delimiters
      })
      if (__DEV__) {
        endMeasure(instance, \`compile\`)
      }
    }

    instance.render = (Component.render || NOOP) as InternalRenderFunction

    if (instance.render._rc) {
      instance.withProxy = new Proxy(
        instance.ctx,
        RuntimeCompiledPublicInstanceProxyHandlers
      )
    }
  }

  // support for 2.x options
  if (__FEATURE_OPTIONS_API__) {
    currentInstance = instance
    applyOptions(instance, Component)
    currentInstance = null
  }
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u51FD\u6570\u662F\u5C06\u7ED1\u5B9Arender\u51FD\u6570\u5230\u5F53\u524D\u5B9E\u4F8B instance\uFF0C\u7136\u540E\u518D\u8C03<code>applyOptions</code>\u51FD\u6570\u5BF9setup\u4E4B\u5916\u7684<code>data</code>\u3001<code>computed</code>\u3001<code>watch</code>\u4E4B\u7C7B\u9009\u9879\u8FDB\u884C\u5904\u7406\u548C\u751F\u547D\u5468\u671F\u94A9\u5B50\u7684\u8C03\u7528\u3002\u6240\u4EE5\u53EF\u4EE5\u5F97\u51FA\u7ED3\u8BBA\uFF0Csetup\u91CC\u662F\u8BBF\u95EE\u4E0D\u5230data\u8FD9\u4E9B\u9009\u9879\u548C\u5176\u4ED6\u751F\u547D\u5468\u671F\u3002</p><h2 id="_4-vue3\u7684\u54CD\u5E94\u5F0F\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_4-vue3\u7684\u54CD\u5E94\u5F0F\u5B9E\u73B0" aria-hidden="true">#</a> 4. vue3\u7684\u54CD\u5E94\u5F0F\u5B9E\u73B0</h2><p>\u5728\u524D\u9762\u6709\u8BF4\u8FC7\uFF0Cvue3\u7684\u54CD\u5E94\u5F0F\u662F\u901A\u8FC7proxy\u5B9E\u73B0\u7684\uFF0C\u5728\u6E90\u7801\u7684<code>/packages/reactivity</code>\u76EE\u5F55\u4E0B\u3002</p><p>\u6574\u4E2A\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u7684\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><p>1\u3001\u901A\u8FC7state = <code>reactive</code>(target) \u6765\u5B9A\u4E49\u54CD\u5E94\u5F0F\u6570\u636E(\u4EE3\u7406get\u3001set\u3001deleteProperty\u3001has\u3001ownKeys\u7B49\u64CD\u4F5C)</p><p>2\u3001\u901A\u8FC7 <code>effect</code> \u58F0\u660E\u4F9D\u8D56\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u51FD\u6570cb ( \u4F8B\u5982\u89C6\u56FE\u6E32\u67D3\u51FD\u6570render\u51FD\u6570)\uFF0C\u5E76\u6267\u884Ccb\u51FD\u6570\uFF0C\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u89E6\u53D1\u54CD\u5E94\u5F0F\u6570\u636E <code>getter</code></p><p>3\u3001\u5728\u54CD\u5E94\u5F0F\u6570\u636E <code>getter</code>\u4E2D\u8FDB\u884C <code>track</code>\u4F9D\u8D56\u6536\u96C6\uFF1A\u5B58\u50A8\u54CD\u5E94\u5F0F\u6570\u636E\u4E0E\u66F4\u65B0\u51FD\u6570 <code>cb</code> \u7684\u6620\u5C04\u5173\u7CFB\uFF0C\u5B58\u50A8\u4E8E<code>targetMap</code></p><p>4\u3001\u5F53\u53D8\u66F4\u54CD\u5E94\u5F0F\u6570\u636E\u65F6\uFF0C\u89E6\u53D1<code>trigger</code>\uFF0C\u6839\u636E<code>targetMap</code>\u627E\u5230\u5173\u8054\u7684<code>cb</code>\u5E76\u6267\u884C</p><p>\u901A\u8FC7\u6E90\u7801\u6765\u770B\u4E0B\u8FD9\u51E0\u4E2A\u5173\u952E\u51FD\u6570\u7684\u5B9E\u73B0\uFF1A</p><h3 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive" aria-hidden="true">#</a> reactive</h3><p><code>/packages/reactivity/reactive</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function reactive(target: object) {
  // \u5982\u679C\u5C1D\u8BD5\u89C2\u5BDF\u53EA\u8BFB\u4EE3\u7406\uFF0C\u5219\u8FD4\u56DE\u53EA\u8BFB\u7248\u672C
  if (target &amp;&amp; (target as Target)[ReactiveFlags.IS_READONLY]) {
    return target
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  )
}
function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler&lt;any&gt;,
  collectionHandlers: ProxyHandler&lt;any&gt;,
  proxyMap: WeakMap&lt;Target, any&gt;
) {
  // \u5982\u679C\u4E0D\u662F\u5BF9\u8C61\uFF0C\u76F4\u63A5\u8FD4\u56DE\u5373\u53EF
  if (!isObject(target)) {
    if (__DEV__) {
      console.warn(\`value cannot be made reactive: \${String(target)}\`)
    }
    return target
  }
  // \u4EE3\u7406\u7684\u76EE\u6807\u672C\u8EAB\u5C31\u662F\u4EE3\u7406\u7684proxy\uFF0C\u76F4\u63A5\u8FD4\u56DE\u81EA\u8EAB
  if (
    target[ReactiveFlags.RAW] &amp;&amp;
    !(isReadonly &amp;&amp; target[ReactiveFlags.IS_REACTIVE])
  ) {
    return target
  }
  // \u4EE3\u7406\u7684\u76EE\u6807\u5DF2\u7ECF\u88AB\u4EE3\u7406\u8FC7\u4E86\uFF0C\u76F4\u63A5\u8FD4\u56DE\u4EE3\u7406\u5BF9\u8C61
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }
  // \u53EA\u80FD\u4EE3\u7406\u53EF\u4EE5\u4EE3\u7406\u7684\u767D\u540D\u5355\u7C7B\u578B\u5BF9\u8C61.
  const targetType = getTargetType(target)
  if (targetType === TargetType.INVALID) {
    return target
  }
  // \u5224\u65AD\u4EE3\u7406\u7684\u5BF9\u8C61\u7C7B\u578B\uFF0C\u6765\u6839\u636E\u4E0D\u540C\u7684\u7C7B\u578B\u505A\u4E0D\u540C\u7684\u4EE3\u7406\u5904\u7406
  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
  )
  // \u4FDD\u5B58\u5728proxyMap\uFF0C\u9632\u6B62\u76EE\u6807\u5BF9\u8C61\u88AB\u91CD\u590D\u4EE3\u7406
  proxyMap.set(target, proxy)
  return proxy
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7reactive\u8C03\u7528<code>createReactiveObject</code>\u751F\u6210\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u5BF9\u4F20\u5165\u7684target\u6709\u505A\u4E0D\u540C\u60C5\u51B5\u7684\u5904\u7406\uFF0Cproxy\u7684handler\u7528\u4F20\u5165\u7684<code>baseHandlers</code>\uFF0C\u8FD9\u91CC\u9ED8\u8BA4\u4F20\u5165\u7684\u662F<code>mutableHandlers</code>\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4ECE<code>reactivity/baseHandlers</code>\u5BFC\u5165\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>mutableHandlers<span class="token operator">:</span> ProxyHandler<span class="token operator">&lt;</span>object<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  get<span class="token punctuation">,</span>
  set<span class="token punctuation">,</span>
  deleteProperty<span class="token punctuation">,</span>
  has<span class="token punctuation">,</span>
  ownKeys
<span class="token punctuation">}</span>
<span class="token keyword">const</span> get <span class="token operator">=</span> <span class="token comment">/*#__PURE__*/</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token comment">/*#__PURE__*/</span> <span class="token function">createSetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">createGetter</span><span class="token punctuation">(</span>isReadonly <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> shallow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token operator">:</span> Target<span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span> receiver<span class="token operator">:</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token operator">...</span>
    
    <span class="token comment">// \u5BF9\u6570\u7EC4\u505A\u7279\u6B8A\u7684\u8BFB\u53D6\u503C\u5904\u7406</span>
    <span class="token keyword">const</span> targetIsArray <span class="token operator">=</span> <span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isReadonly <span class="token operator">&amp;&amp;</span> targetIsArray <span class="token operator">&amp;&amp;</span> <span class="token function">hasOwn</span><span class="token punctuation">(</span>arrayInstrumentations<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>arrayInstrumentations<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> res <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
    
    <span class="token comment">// track \u4F9D\u8D56\u6536\u96C6</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isReadonly<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">track</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> TrackOpTypes<span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
   
    <span class="token operator">...</span>
    
    <span class="token comment">// \u5982\u679C\u8BFB\u53D6\u7684\u503C\u662F\u5BF9\u8C61\uFF0C\u9012\u5F52\u8C03\u7528reactive\uFF0C\u4F7F\u4E4B\u6210\u4E3A\u54CD\u5E94\u5F0F\u5BF9\u8C61</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> isReadonly <span class="token operator">?</span> <span class="token keyword">readonly</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">reactive</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">createSetter</span><span class="token punctuation">(</span>shallow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">set</span><span class="token punctuation">(</span>
    target<span class="token operator">:</span> object<span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span>
    receiver<span class="token operator">:</span> object
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> oldValue <span class="token operator">=</span> <span class="token punctuation">(</span>target <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span>
 
    <span class="token operator">...</span>
    
    <span class="token comment">// \u5224\u65AD\u662F\u65B0\u589E\u8FD8\u662F\u5220\u9664\u5C5E\u6027</span>
    <span class="token keyword">const</span> hadKey <span class="token operator">=</span>
      <span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isIntegerKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token operator">?</span> <span class="token function">Number</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">&lt;</span> target<span class="token punctuation">.</span>length
        <span class="token operator">:</span> <span class="token function">hasOwn</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
    <span class="token comment">// don&#39;t trigger if target is something up in the prototype chain of original</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">===</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>receiver<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>hadKey<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// trigger\u66F4\u65B0\u51FD\u6570</span>
        <span class="token function">trigger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> TriggerOpTypes<span class="token punctuation">.</span><span class="token constant">ADD</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasChanged</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">trigger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> TriggerOpTypes<span class="token punctuation">.</span><span class="token constant">SET</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mutableHandlers\u5BF9get\u3001set\u3001deleteProperty\u7B49\u5C5E\u6027\u64CD\u4F5C\u505A\u4E86\u5904\u7406\uFF0C\u8FD9\u8FB9\u53EA\u5206\u6790get \u548Cset\u3002\u5728get\u7684\u65F6\u5019\u4F1A\u8FDB\u884C<code>track</code>\u4F9D\u8D56\u6536\u96C6\uFF0C\u5982\u679Cget\u7684\u5C5E\u6027\u503C\u662F\u5BF9\u8C61\u8FD8\u4F1A\u8FDB\u884C\u9012\u5F52\u54CD\u5E94\u5F0F\u5904\u7406\uFF0Cset\u5219\u4F1A<code>trigger</code>\u8FDB\u884C\u66F4\u65B0\u3002</p><h3 id="track" tabindex="-1"><a class="header-anchor" href="#track" aria-hidden="true">#</a> track</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">track</span><span class="token punctuation">(</span>target<span class="token operator">:</span> object<span class="token punctuation">,</span> type<span class="token operator">:</span> TrackOpTypes<span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>shouldTrack <span class="token operator">||</span> activeEffect <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u83B7\u53D6target\u5BF9\u5E94\u4F9D\u8D56\u8868</span>
  <span class="token keyword">let</span> depsMap <span class="token operator">=</span> targetMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>depsMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    targetMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">(</span>depsMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u83B7\u53D6key\u5BF9\u5E94\u7684\u54CD\u5E94\u51FD\u6570\u96C6\u5408</span>
  <span class="token keyword">let</span> dep <span class="token operator">=</span> depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dep<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u52A8\u6001\u521B\u5EFA\u4F9D\u8D56\u5173\u7CFB</span>
    depsMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">(</span>dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// activeEffect\u4E34\u65F6\u53D8\u91CF\uFF0Cgetter\u89E6\u53D1\u4F9D\u8D56\u6536\u96C6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u53EF\u80FD\u662Frender\u6216\u8005effect\u751F\u6210\u7684\u526F\u4F5C\u7528\u51FD\u6570</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dep<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>activeEffect<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    dep<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>activeEffect<span class="token punctuation">)</span>
    activeEffect<span class="token punctuation">.</span>deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> activeEffect<span class="token punctuation">.</span>options<span class="token punctuation">.</span>onTrack<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      activeEffect<span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">onTrack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        effect<span class="token operator">:</span> activeEffect<span class="token punctuation">,</span>
        target<span class="token punctuation">,</span>
        type<span class="token punctuation">,</span>
        key
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>track\u4F9D\u8D56\u6536\u96C6\u7684\u65F6\u5019\uFF0C\u5148\u5224\u65AD<code>targetMap</code>\u662F\u5426\u5B58\u5728\u8BBF\u95EE\u7684\u8FD9\u4E2A\u5BF9\u8C61\uFF0CtargetMap\u662F\u4E00\u4E2AweakMap\u7684\u7ED3\u6784\uFF0C\u683C\u5F0F\u4E3A<code>{target\uFF1A{ key: [fn1,fn2]}}</code>\uFF0Ctarget\u4E3AweakMap\u7684key\uFF0Cvalue\u662F\u4E00\u4E2Amap\u7C7B\u578B\uFF0Ckey\u4E3A\u8BBF\u95EE\u5230\u7684target\u7684\u5C5E\u6027\uFF0C\u503C\u4E3A\u8FD9\u4E2A\u5C5E\u6027\u5BF9\u5E94\u7684<code>\u56DE\u8C03\u51FD\u6570\u96C6\u5408</code>\u3002\u6700\u540E\u9762\u6709\u4E00\u4E2A<code>activeEffect</code>\u7684\u5224\u65AD\uFF0C\u8FD9\u4E2A\u5224\u65AD\u4F9D\u8D56\u6536\u96C6\u7684<code>\u526F\u4F5C\u7528\u51FD\u6570</code>\uFF0C\u8FD9\u4E2A\u526F\u4F5C\u7528\u51FD\u6570\u53EF\u80FD\u662F<code>ffect</code>\u4E34\u65F6\u751F\u6210\uFF0C\u4E5F\u6709\u53EF\u80FD\u662F\u5728<code>render\u6E32\u67D3\u51FD\u6570</code>\u4E34\u65F6\u751F\u6210\u7684\u526F\u4F5C\u7528\u51FD\u6570\u3002</p><h3 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger" aria-hidden="true">#</a> trigger</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">trigger</span><span class="token punctuation">(</span>
  target<span class="token operator">:</span> object<span class="token punctuation">,</span>
  type<span class="token operator">:</span> TriggerOpTypes<span class="token punctuation">,</span>
  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span>
  newValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span>
  oldValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span>
  oldTarget<span class="token operator">?</span><span class="token operator">:</span> Map<span class="token operator">&lt;</span><span class="token builtin">unknown</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token operator">|</span> Set<span class="token operator">&lt;</span><span class="token builtin">unknown</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6\u89E6\u53D1\u66F4\u65B0\u7684target\u5BF9\u5E94\u7684\u5C5E\u6027\u6620\u5C04\u96C6\u5408</span>
  <span class="token keyword">const</span> depsMap <span class="token operator">=</span> targetMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>depsMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// never been tracked</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> effects <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set<span class="token operator">&lt;</span>ReactiveEffect<span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span>effectsToAdd<span class="token operator">:</span> Set<span class="token operator">&lt;</span>ReactiveEffect<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>effectsToAdd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      effectsToAdd<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>effect <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>effect <span class="token operator">!==</span> activeEffect <span class="token operator">||</span> effect<span class="token punctuation">.</span>allowRecurse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          effects<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>effect<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> TriggerOpTypes<span class="token punctuation">.</span><span class="token constant">CLEAR</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// collection being cleared</span>
    <span class="token comment">// trigger all effects for target</span>
    depsMap<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&#39;length&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    depsMap<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>dep<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&#39;length&#39;</span> <span class="token operator">||</span> key <span class="token operator">&gt;=</span> <span class="token punctuation">(</span>newValue <span class="token keyword">as</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">add</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// schedule runs for SET | ADD | DELETE</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">!==</span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">add</span><span class="token punctuation">(</span>depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// also run for iteration key on ADD | DELETE | Map.SET</span>
    <span class="token comment">// \u6839\u636E\u89E6\u53D1\u7684\u64CD\u4F5C\u7C7B\u578B\u505A\u4E0D\u540C\u7684\u56DE\u8C03\u51FD\u6570\u5904\u7406</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> TriggerOpTypes<span class="token punctuation">.</span><span class="token constant">ADD</span><span class="token operator">:</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">add</span><span class="token punctuation">(</span>depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">ITERATE_KEY</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isMap</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">add</span><span class="token punctuation">(</span>depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">MAP_KEY_ITERATE_KEY</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isIntegerKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// new index added to array -&gt; length changes</span>
          <span class="token function">add</span><span class="token punctuation">(</span>depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;length&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> TriggerOpTypes<span class="token punctuation">.</span><span class="token constant">DELETE</span><span class="token operator">:</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">add</span><span class="token punctuation">(</span>depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">ITERATE_KEY</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isMap</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">add</span><span class="token punctuation">(</span>depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">MAP_KEY_ITERATE_KEY</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> TriggerOpTypes<span class="token punctuation">.</span><span class="token constant">SET</span><span class="token operator">:</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isMap</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">add</span><span class="token punctuation">(</span>depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">ITERATE_KEY</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token punctuation">(</span>effect<span class="token operator">:</span> ReactiveEffect<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> effect<span class="token punctuation">.</span>options<span class="token punctuation">.</span>onTrigger<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      effect<span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">onTrigger</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        effect<span class="token punctuation">,</span>
        target<span class="token punctuation">,</span>
        key<span class="token punctuation">,</span>
        type<span class="token punctuation">,</span>
        newValue<span class="token punctuation">,</span>
        oldValue<span class="token punctuation">,</span>
        oldTarget
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>effect<span class="token punctuation">.</span>options<span class="token punctuation">.</span>scheduler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      effect<span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">scheduler</span><span class="token punctuation">(</span>effect<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u6267\u884C\u6240\u6709\u7684\u56DE\u8C03\u51FD\u6570\u96C6\u5408</span>
  effects<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>run<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>trigger\u89E6\u53D1\u66F4\u65B0\uFF0C\u6839\u636E<code>targetsMap</code>\u627E\u5230target\u5BF9\u5E94\u7684\u5C5E\u6027\u4F9D\u8D56\u96C6\u5408\uFF0C\u518D\u6839\u636Ekey\u627E\u5230\u56DE\u8C03\u51FD\u6570\u96C6\u5408\uFF0C\u7136\u540E\u8FD8\u8981\u6839\u636E\u64CD\u4F5C\u7C7B\u578B\u505A\u5904\u7406\u540E\uFF0C\u6267\u884C\u6240\u6709\u7684\u56DE\u8C03\u51FD\u6570\u96C6\u5408\u3002</p><h3 id="effect" tabindex="-1"><a class="header-anchor" href="#effect" aria-hidden="true">#</a> effect</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// effect\u6808\uFF0C\u4FDD\u5B58\u6240\u6709\u7684effect\u526F\u4F5C\u7528\u51FD\u6570</span>
<span class="token keyword">const</span> effectStack<span class="token operator">:</span> ReactiveEffect<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">effect</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  options<span class="token operator">:</span> ReactiveEffectOptions <span class="token operator">=</span> <span class="token constant">EMPTY_OBJ</span>
<span class="token punctuation">)</span><span class="token operator">:</span> ReactiveEffect<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEffect</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fn <span class="token operator">=</span> fn<span class="token punctuation">.</span>raw
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> effect <span class="token operator">=</span> <span class="token function">createReactiveEffect</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">.</span>lazy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> effect
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">createReactiveEffect</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  options<span class="token operator">:</span> ReactiveEffectOptions
<span class="token punctuation">)</span><span class="token operator">:</span> ReactiveEffect<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">effect</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">reactiveEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>effect<span class="token punctuation">.</span>active<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> options<span class="token punctuation">.</span>scheduler <span class="token operator">?</span> <span class="token keyword">undefined</span> <span class="token operator">:</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// effectStack\u662F\u5426\u5B58\u5728\u5F53\u524D\u6267\u884C\u7684\u526F\u4F5C\u7528\u51FD\u6570</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>effectStack<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>effect<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">cleanup</span><span class="token punctuation">(</span>effect<span class="token punctuation">)</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">enableTracking</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        effectStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>effect<span class="token punctuation">)</span>
        activeEffect <span class="token operator">=</span> effect
        <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        effectStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">resetTracking</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        activeEffect <span class="token operator">=</span> effectStack<span class="token punctuation">[</span>effectStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">as</span> ReactiveEffect
  effect<span class="token punctuation">.</span>id <span class="token operator">=</span> uid<span class="token operator">++</span>
  effect<span class="token punctuation">.</span>allowRecurse <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>allowRecurse
  effect<span class="token punctuation">.</span>_isEffect <span class="token operator">=</span> <span class="token boolean">true</span>
  effect<span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token boolean">true</span>
  effect<span class="token punctuation">.</span>raw <span class="token operator">=</span> fn
  effect<span class="token punctuation">.</span>deps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  effect<span class="token punctuation">.</span>options <span class="token operator">=</span> options
  <span class="token keyword">return</span> effect
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>effectStack</code>\u6808\u7ED3\u6784\u7684\u6570\u7EC4\uFF0Ceffect\u7684\u65F6\u5019\uFF0C\u5C06\u526F\u4F5C\u7528\u51FD\u6570\u653E\u5165<code>effectStack</code>\u4E2D\uFF0C\u518D\u5C06<code>activeEffect</code>\u4E34\u65F6\u8D4B\u503C\u4E3A\u5F53\u524D\u6267\u884C\u7684<code>effect</code>\u51FD\u6570\uFF0C\u7528\u4E8E<code>track</code>\u7684\u65F6\u5019\u5C06effect\u51FD\u6570\u653E\u5165\u54CD\u5E94\u5F0F\u6570\u636E\u7684key\u7684\u56DE\u8C03\u51FD\u6570\u96C6\u5408\uFF0Ceffect\u6267\u884C\u5B8C\u518D\u5C06<code>activeEffect</code>\u8D4B\u503C\u56DE\u539F\u6765<code>effectStack</code>\u7684\u672B\u4F4D\u51FD\u6570\u3002</p><h2 id="_5-vue3\u7684hook\u4E0Ereact\u7684hook\u6709\u4EC0\u4E48\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#_5-vue3\u7684hook\u4E0Ereact\u7684hook\u6709\u4EC0\u4E48\u4E0D\u540C" aria-hidden="true">#</a> 5. vue3\u7684hook\u4E0Ereact\u7684hook\u6709\u4EC0\u4E48\u4E0D\u540C</h2><p>\u6BEB\u65E0\u7591\u95EE\uFF0Cvue3\u7684hook\u662F\u501F\u9274\u4E86react\u7684hook\u601D\u60F3\uFF0Cvue3\u4E2D\u81EA\u5B9A\u4E49hook\u7684\u5199\u6CD5\u4E0Ereact\u770B\u8D77\u6765\u5F88\u7C7B\u4F3C\uFF0C\u4F46\u5B9E\u9645\u4F7F\u7528\u662F\u6709\u4E9B\u8BB8\u4E0D\u540C\uFF0C\u800C\u5185\u90E8\u5B9E\u73B0\u539F\u7406\u66F4\u662F\u5B8C\u5168\u4E0D\u4E00\u6837\u3002</p><p>\u9996\u5148\u8BF4\u4E0Breact hook\u7684\u4E24\u4E2A\u9650\u5236\uFF1A</p><ol><li><code>\u53EA\u5728\u6700\u9876\u5C42\u4F7F\u7528 Hook</code>\uFF0C<code>\u4E0D\u8981\u5728\u5FAA\u73AF\uFF0C\u6761\u4EF6\u6216\u5D4C\u5957\u51FD\u6570\u4E2D\u8C03\u7528 Hook</code></li><li><code>\u53EA\u5728 React \u51FD\u6570\u4E2D\u8C03\u7528 Hook</code>\uFF0C<code>\u4E0D\u8981\u5728\u666E\u901A\u7684 JavaScript \u51FD\u6570\u4E2D\u8C03\u7528 Hook</code></li></ol>`,60),_=n("\u8FD9\u5728"),x={href:"https://zh-hans.reactjs.org/docs/hooks-rules.html#explanation",target:"_blank",rel:"noopener noreferrer"},w=n("react\u5B98\u7F51"),E=n("\u4E5F\u6709\u4E13\u95E8\u4ECB\u7ECD\u3002"),T=a('<p>\u53EA\u80FD\u5728\u6700\u9876\u5C42\u4F7F\u7528Hook\uFF0C\u8FD9\u662F\u56E0\u4E3Areact\u7684hook\u662F\u4F9D\u9760\u8C03\u7528\u7684\u987A\u5E8F\u6765\u786E\u8BA4state\u5BF9\u5E94\u7684hook\uFF0C\u6BCF\u6B21\u91CD\u65B0\u6E32\u67D3\u90FD\u4F1A\u518D\u8C03\u7528hook\uFF0C\u6240\u4EE5\u9700\u8981\u786E\u4FDDhook\u7684\u8C03\u7528\u987A\u5E8F\u662F\u4E0D\u4F1A\u53D8\u7684\u3002</p><p>\u518D\u8BF4\u4E0Bvue\u4E0Ereact\u4F7F\u7528\u7684\u4E0D\u540C\u4E4B\u5904\uFF1A</p><ol><li>setup\u53EA\u6267\u884C\u4E00\u904D\uFF0C\u800Creact\u6BCF\u6B21\u6E32\u67D3\u90FD\u4F1A\u91CD\u65B0\u6267\u884Chook</li><li>Hook\u9700\u8981\u66F4\u65B0\u503C\u65F6Vue\u53EF\u4EE5\u76F4\u63A5\u8D4B\u503C\uFF0C\u800Creact\u5219\u9700\u8981\u8C03\u7528hook\u7684\u8D4B\u503C\u51FD\u6570</li><li>\u8C03\u7528\u987A\u5E8F\u65E0\u8981\u6C42\uFF0C\u4E5F\u53EF\u4EE5\u653E\u5728\u6761\u4EF6\u8BED\u53E5\u91CC</li></ol><p>\u5B9E\u73B0\u539F\u7406\u7684\u4E0D\u540C\uFF1A</p><p>vue\u4E2D\u7684hook\u662F<code>\u54CD\u5E94\u5F0F\u5BF9\u8C61</code>\uFF0C\u5728render\u7684\u65F6\u5019\u8BFB\u53D6\u5230\u5C31\u4F1A\u88AB<code>\u4F9D\u8D56\u6536\u96C6</code>\u3002</p><p>react\u4E2D\u7684hook\u672C\u8D28\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u6BCF\u6B21\u91CD\u65B0\u6E32\u67D3\u90FD\u9700\u8981\u518D\u6B21\u8C03\u7528\uFF0C\u5728\u58F0\u660E\u7684\u65F6\u5019\u6309\u7167\u8C03\u7528\u987A\u5E8F\u901A\u8FC7{ value1, setValue1} -&gt; { value2, setValue2 }\u7684<code>\u94FE\u8868</code>\u7ED3\u6784\u5B58\u50A8\uFF0C\u6240\u4EE5\u9700\u8981\u4E25\u683C\u9650\u5236 Hook \u7684\u6267\u884C\u987A\u5E8F\u548C\u7981\u6B62\u6761\u4EF6\u8C03\u7528\u3002</p><h2 id="_6-vue3\u7684dom-diff\u4E0Ereact\u7684dom-diff\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#_6-vue3\u7684dom-diff\u4E0Ereact\u7684dom-diff\u4E0D\u540C" aria-hidden="true">#</a> 6. vue3\u7684dom diff\u4E0Ereact\u7684dom diff\u4E0D\u540C</h2><p>\u5728\u524D\u9762\u7684vue3\u6027\u80FD\u63D0\u5347\u7684\u4F18\u5316\u70B9\u6709\u8BF4\u8FC7\u4E86vdom\u7F16\u8BD1\u4F18\u5316\u901A\u8FC7<code>\u9759\u6001\u8282\u70B9\u3001\u9759\u6001\u63D0\u5347\u548C\u4E8B\u4EF6\u7F13\u5B58</code>\uFF0C\u800C\u5728react\u662F\u6CA1\u6709\u505A\u8FD9\u4E2A\u5B9E\u73B0\u7684\u3002</p><p>react\u662F\u901A\u8FC7\u628Avdom\u6811\u4EE5\u94FE\u8868\u7684\u7ED3\u6784\uFF0C\u5229\u7528\u6D4F\u89C8\u5668\u7684\u7A7A\u95F2\u65F6\u95F4\u6765\u505Adiff\uFF0C\u4E5F\u5C31\u662F<code>\u65F6\u95F4\u5207\u7247</code>\u7684\u6982\u5FF5\uFF0C\u5982\u679C\u8D85\u8FC7\u4E8616ms\uFF0C\u6709\u52A8\u753B\u6216\u8005\u7528\u6237\u4EA4\u4E92\u7684\u4EFB\u52A1\uFF0C\u5C31\u628A\u4E3B\u8FDB\u7A0B\u63A7\u5236\u6743\u8FD8\u7ED9\u6D4F\u89C8\u5668\uFF0C\u7B49\u7A7A\u95F2\u4E86\u7EE7\u7EEDdiff\u3002\u7528\u7684\u662F<code>requestIdleCallback</code>\u8FD9\u4E2A\u6D4F\u89C8\u5668\u7684api\u5B9E\u73B0\u3002</p>',9);function S(R,C){const e=l("ExternalLinkIcon");return p(),c("div",null,[d,s("p",null,[r,s("a",v,[k,t(e)])]),m,s("p",null,[b,f,g,y,n("\u8282\u70B9\uFF0C\u53EA\u6709"+o()+"\u8FD9\u79CD\u6A21\u677F\u53D8\u91CF\u7684\u7ED1\u5B9A\uFF0C\u540E\u7EED\u53EA\u9700\u8981\u5BF9\u6BD4\u8FD9\u4E2Atext\u5373\u53EF\uFF0C\u770B\u4E0B\u6E90\u7801\u4E2D\u5B9A\u4E49\u4E86\u54EA\u4E9B\u679A\u4E3E\u7684\u5143\u7D20\u7C7B\u578B:",1)]),h,s("p",null,[_,s("a",x,[w,t(e)]),E]),T])}var q=i(u,[["render",S],["__file","Vue3.html.vue"]]);export{q as default};
