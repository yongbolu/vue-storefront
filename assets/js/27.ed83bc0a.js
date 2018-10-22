(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{172:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("As a first step, you need to to install "),a("a",{attrs:{href:"https://github.com/DivanteLtd/mage2vuestorefront",target:"_blank",rel:"noopener noreferrer"}},[t._v("mage2vuestorefront "),a("OutboundLink")],1),t._v(":")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),a("p",[t._v("As you can see, you can override the defaults by ENV variables as well.")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("As you should have the products and categories already synchronized you may want to send some orders back to Magento or synchronize the shopping carts in the real time.")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),a("p",[t._v("After setting up the Magento access you just need to run the Order2Magento worker which works on Redis based queue to process all the orders made by users:")]),t._v(" "),t._m(23),a("p",[t._v("The code of this script is "),a("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront-api/blob/master/src/worker/order_to_magento2.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("located here"),a("OutboundLink")],1),t._v(" -  so you can easily check how it’s working.")]),t._v(" "),t._m(24),t._v(" "),a("p",[t._v("By default shopping carts are not synchronized in the real time  -  just after the order is placed, Magento2 cart is created etc.")]),t._v(" "),a("p",[t._v("This was limiting behavior because you need to keep the user cart most current all the time to get Magento2 shopping cart promotion rules into the action .")]),t._v(" "),t._m(25),t._v(" "),t._m(26),a("p",[t._v("to "),a("code",[t._v("cart")]),t._v(" section. Please check the "),a("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/193cf44a6e936136fc19e22b45fe8dbc4b33f844/config/default.json#L8",target:"_blank",rel:"noopener noreferrer"}},[t._v("default config for reference"),a("OutboundLink")],1),t._v(".")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"integration-with-magento-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integration-with-magento-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Integration with Magento 2")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"integrating-magento2-with-your-local-instance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integrating-magento2-with-your-local-instance","aria-hidden":"true"}},[this._v("#")]),this._v(" Integrating Magento2 with your local instance")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("git")]),this._v(" clone https://github.com/DivanteLtd/mage2vuestorefront.git mage2vs\n"),s("span",{attrs:{class:"token function"}},[this._v("cd")]),this._v(" mage2vs/src\nyarn "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The tool is using Magento2 API via OAuth authorization, so you need to prepare Magento Integration access at first. Go to your Magento2 admin panel and click: "),s("em",[this._v("System -> Integrations")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/vue-storefront/magento_1.png",alt:"Magento Admin Panel"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Then click "),s("em",[this._v("Add new integration")]),this._v(" and just fill:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("name (whatever)")]),this._v(" "),s("li",[this._v("your password to confirm the changes,")]),this._v(" "),s("li",[this._v("check Catalog, Sales, My Account and Carts on API permissions tab — save")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/vue-storefront/magento_2.png",alt:"Magento API"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In the result you’ll click "),s("em",[this._v("Activate")]),this._v(" and get some oauth access tokens:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/vue-storefront/magento_3.png",alt:"Magento tokens"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Now please edit the "),s("code",[this._v("src/config.js")]),this._v(" file in your "),s("code",[this._v("mage2vuestorefront")]),this._v(" directory to set the following section:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("magento"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("MAGENTO_URL")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"http://your-magento-url.com/rest/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" change to your Magento "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("URL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  consumerKey"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("MAGENTO_CONSUMER_KEY")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'alva6h6hku9qxrpfe02c2jalopx7od1q'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  consumerSecret"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("MAGENTO_CONSUMER_SECRET")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'9tgfpgoojlx9tfy21b8kw7ssfu2aynpm'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  accessToken"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("MAGENTO_ACCESS_TOKEN")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'rw5w0si9imbu45h3m9hkyrfr4gjina8q'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  accessTokenSecret"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("MAGENTO_ACCESS_TOKEN_SECRET")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'00y9dl4vpxgcef3gn5mntbxtylowjcc9'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The rest of config.js entries points out to your "),s("code",[this._v("vue-storefront-api")]),this._v(" based Docker and Redis instances which are required by "),s("code",[this._v("mage2nosql")]),this._v(" to work.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To import all the Products, Categories and other important stuff to your Elastic Search instance you should run the following commands (the sequence of commands is important  -  as for example "),s("code",[this._v("node cli.js categories")]),this._v(" populates Redis cache for the further use of "),s("code",[this._v("node cli.js")]),this._v(" products and so on)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("node cli.js taxrule\nnode cli.js attributes\nnode cli.js categories\nnode cli.js productcategories\nnode cli.js products\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("It’s safe to run these commands over and over as they’re doing "),s("code",[this._v("upsert")]),this._v(" operation  - so inserts or updates the existing records.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("cli.js")]),this._v(" has a lot of other modes to be run in. Dynamic changes, queue support etc. You may experiment with them, but remember  -  the basic sequence for syncing the whole Magento2 database is like just shown.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"synchronizing-orders-and-magento-images"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synchronizing-orders-and-magento-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Synchronizing orders and Magento images")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("vue-storefront-api")]),t._v(" is responsible for this write access to Magento. You may want just edit your "),a("code",[t._v("conf/local.json")]),t._v(" within "),a("code",[t._v("vue-storefront-api")]),t._v(" directory to set the OAuth Magento API access ("),a("code",[t._v("magento2")]),t._v(" section):")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v('"magento2"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"url"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"http://your-magento-url.com"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"imgUrl"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"http://your-magento-url.com/media/catalog/product"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"assetPath"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"/../var/magento2-sample-data/pub/media"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"api"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"url"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"http://your-magento-url.com/rest/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"consumerKey"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"alva6h6hku9qxrpfe02c2jalopx7od1q"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"consumerSecret"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"9tgfpgoojlx9tfy21b8kw7ssfu2aynpm"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"accessToken"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"rw5w0si9imbu45h3m9hkyrfr4gjina8q"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"accessTokenSecret"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"00y9dl4vpxgcef3gn5mntbxtylowjcc9"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("To allow "),a("code",[t._v("vue-storefront-api")]),t._v(" to resize your Magento’s images, please edit the "),a("code",[t._v("imgUrl")]),t._v(" property under "),a("code",[t._v("magento2")]),t._v(" section and add your Magento’s domain to "),a("code",[t._v("imageable")]),t._v(" -> "),a("code",[t._v("whitelist")]),t._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v('"imageable"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"namespace"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"maxListeners"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("512")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"imageSizeLimit"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1024")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"timeouts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"convert"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("15000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"identify"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("300")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"download"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5000")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"whitelist"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"allowedHosts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('".*your-magento-url.com"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('".*divante.pl"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('".*vuestorefront.io"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"localhost"')]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"trustedHosts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('".*your-magento-url.com"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('".*divante.pl"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('".*vuestorefront.io"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"localhost"')]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),s("p",[this._v("After changing the config files you need to restart "),s("code",[this._v("yarn dev")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("yarn o2m\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"synchronizing-shopping-carts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synchronizing-shopping-carts","aria-hidden":"true"}},[this._v("#")]),this._v(" Synchronizing shopping carts")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("We have option for that! If you have Magento2 API configured within the "),s("code",[this._v("vue-storefront-api")]),this._v(" you just need to go to "),s("code",[this._v("vue-storefront/conf/local.json")]),this._v(" and add")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("synchronize"),s("span",{attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" "),s("span",{attrs:{class:"token boolean"}},[this._v("true")]),s("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])}],!1,null,null,null);e.options.__file="magento.md";s.default=e.exports}}]);