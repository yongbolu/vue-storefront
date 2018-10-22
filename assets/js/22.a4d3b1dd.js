(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{148:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Vue Storefront generates the Server Side rendered pages to improve the SEO results. In the latest version of Vue Storefront we've added the Output cache option (disabled by default) to improve the performance.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),a("p",[t._v("The tags can be used to invalidate the Varnish cache if You're using it. "),a("a",{attrs:{href:"https://www.drupal.org/docs/8/api/cache-api/cache-tags-varnish",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more on that"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("You can manualy clear Redis cache for specific tags by running the following command:")]),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[a("strong",[t._v("Dynamic cache invalidation:")]),t._v(" Recent version of "),a("a",{attrs:{href:"https://github.com/DivanteLtd/mage2vuestorefront",target:"_blank",rel:"noopener noreferrer"}},[t._v("mage2vuestorefront"),a("OutboundLink")],1),t._v(" do support output cache invalidation. Output cache is being tagged with the product and categories id (products and categories used on specific page). Mage2vuestorefront can invalidate cache of product and category pages if You set the following ENV variables:")]),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),a("p",[t._v("This line:")]),t._v(" "),t._m(22),a("p",[t._v("... is in charge of assigning the specific tag with current HTTP request output.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"ssr-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssr-cache","aria-hidden":"true"}},[this._v("#")]),this._v(" SSR Cache")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The output cache is set by the following "),s("code",[this._v("config/local.json")]),this._v(" variables:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token property"}},[t._v('"server"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"host"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"localhost"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"port"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"http"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"api"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"api"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"useOutputCacheTagging"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"useOutputCache"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"outputCacheDefaultTtl"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("86400")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"redis"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"host"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"localhost"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"port"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("6379")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"db"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"dynamic-tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-tags","aria-hidden":"true"}},[this._v("#")]),this._v(" Dynamic tags")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The dynamic tags config uption: "),s("code",[this._v("useOutputCacheTaging")]),this._v(" - if set to true, Vue Storefront is generating the special HTTP Header "),s("code",[this._v("X-VS-Cache-Tags")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setHeader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'X-VS-Cache-Tags'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cacheTags"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Cache tags are assigned regarding the products and categories which are used on the specific page. Typical "),s("code",[this._v("X-VS-Cache-Tags")]),this._v(" tag looks like this:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("X-VS-Cache-Tags: P1852 P198 C20\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis","aria-hidden":"true"}},[this._v("#")]),this._v(" Redis")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("If both "),a("code",[t._v("useOutputCache")]),t._v(" and "),a("code",[t._v("useOutputCacheTagging")]),t._v(" options are set to "),a("code",[t._v("true")]),t._v(" - Vue Storefront is using Output Cache stored in Redis (configured in the "),a("code",[t._v("redis")]),t._v(" section of the config file). Cache is tagged with Dynamic tags and can be invalidated using special webhook:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Example call to clear all pages containing specific product and category:\n"),s("code",[this._v("curl http://localhost:3000/invalidate?tag=P1852,C20")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Example call to clear all product, category and home pages:\n"),s("code",[this._v("curl http://localhost:3000/invalidate?tag=product,category,home")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("WARNING:")]),this._v("\nWe strongly recommend You to NOT USE Output cache in the development mode. By using it You won't be able to refresh the UI changes after modyfing the Vue components etc.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"cli-cache-clear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-cache-clear","aria-hidden":"true"}},[this._v("#")]),this._v(" CLI cache clear")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run cache "),a("span",{attrs:{class:"token function"}},[t._v("clear")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run cache "),a("span",{attrs:{class:"token function"}},[t._v("clear")]),t._v(" -- --tag"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("product,category\n"),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run cache "),a("span",{attrs:{class:"token function"}},[t._v("clear")]),t._v(" -- --tag"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("P198\n"),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run cache "),a("span",{attrs:{class:"token function"}},[t._v("clear")]),t._v(" -- --tag"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("*\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Available tag keys are set in the "),s("code",[this._v("config.server.availableCacheTags")]),this._v(" (by default: "),s("code",[this._v('"product", "category", "home", "checkout", "page-not-found", "compare", "my-account", "P", "C"')]),this._v(")")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("export")]),t._v(" VS_INVALIDATE_CACHE_URL"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("http://localhost:3000/invalidate?key"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("SECRETKEY"),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("tag"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("export")]),t._v(" VS_INVALIDATE_CACHE"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("1\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("SECURITY NOTE:")]),this._v(" Please note that "),s("code",[this._v("key=SECRETKEY")]),this._v(" should be equal to "),s("code",[this._v("vue-storefront/config/local.json")]),this._v(" value of "),s("code",[this._v("server.invalidateCacheKey")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"adding-new-types-cache-tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-types-cache-tags","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding new types / cache tags")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If You're adding new type of page ("),s("code",[this._v("core/pages")]),this._v(") and "),s("code",[this._v("config.server.useOutputCache=true")]),this._v(" - You should also extend the "),s("code",[this._v("config.server.availableCacheTags")]),this._v(" of new general purpose tag that will be connected with the URLs connected with this new page.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("After doing so, please add the "),s("code",[this._v("asyncData")]),this._v(" method to Your page code assigning the right tag (please take a look at "),s("code",[this._v("core/pages/Home.js")]),this._v(" for instance):")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token function"}},[t._v("asyncData")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" store"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" route "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// this is for SSR purposes to prefetch data")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      store"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestContext"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("outputCacheTags"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`home`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Entering asyncData for Home root '")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      EventBus"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("$emitFilter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'home-after-load'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" store"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" store"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" route"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" route "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("results"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("reject")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("store"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestContext"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("outputCacheTags"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`home`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="ssr-cache.md";s.default=e.exports}}]);