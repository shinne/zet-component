(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./docs/quickstart.mdx":function(e,n,t){"use strict";var a=t("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=a(t("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),o=a(t("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck.js")),m=a(t("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass.js")),r=a(t("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),p=a(t("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=a(t("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits.js")),s=a(t("./node_modules/umi-build-dev/node_modules/react/index.js")),u=t("./node_modules/@mdx-js/tag/dist/index.js"),c=function(e){function n(e){var t;return(0,o.default)(this,n),(t=(0,r.default)(this,(0,p.default)(n).call(this,e))).layout=null,t}return(0,d.default)(n,e),(0,m.default)(n,[{key:"render",value:function(){var e=this.props,n=e.components;(0,l.default)(e,["components"]);return s.default.createElement(u.MDXTag,{name:"wrapper",components:n},s.default.createElement(u.MDXTag,{name:"h1",components:n,props:{id:"\u5feb\u901f\u5f00\u59cb"}},"\u5feb\u901f\u5f00\u59cb"),s.default.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"\u5b89\u88c5"}},"\u5b89\u88c5"),s.default.createElement(u.MDXTag,{name:"p",components:n},s.default.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"yarn"),"\u548c",s.default.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm"),"\u90fd\u53ef\u4ee5\u5b89\u88c5\u4f9d\u8d56\uff0c\u5efa\u8bae\u7528\u4e00\u79cd\u65b9\u5f0f\uff0c\u4e0d\u8981\u6df7\u88c5"),s.default.createElement(u.MDXTag,{name:"pre",components:n},s.default.createElement(u.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"(yarn || npm) install zet-component\n")),s.default.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"\u793a\u4f8b"}},"\u793a\u4f8b"),s.default.createElement(u.MDXTag,{name:"pre",components:n},s.default.createElement(u.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"import { Resource } from 'zet-component';\nReactDOM.render(<DatePicker>);\n")),s.default.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"\u672c\u5730\u5f00\u53d1"}},"\u672c\u5730\u5f00\u53d1"),s.default.createElement(u.MDXTag,{name:"pre",components:n},s.default.createElement(u.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"$ git clone git@github.com:9-web/zet-component.git\n$ cd zet-component\n$ yarn bootstrap\n$ yarn dev\n")),s.default.createElement(u.MDXTag,{name:"h2",components:n,props:{id:"\b\u547d\u4ee4\u64cd\u4f5c"}},"\b\u547d\u4ee4\u64cd\u4f5c"),s.default.createElement(u.MDXTag,{name:"ul",components:n},s.default.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},s.default.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"yarn bootstrap")," \u5b89\u88c5\b\u9879\u76ee\u4f9d\u8d56"),s.default.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},s.default.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"yarn dev")," \u542f\u52a8\u5f00\u53d1\u73af\u5883"),s.default.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},s.default.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"yarn build")," \u6784\u5efa\u7ec4\u4ef6\u4ea7\u7269"),s.default.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},s.default.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"yarn build:watch")," \u6587\u4ef6\u6539\u53d8\u81ea\u52a8\u6784\u5efa\u7ec4\u4ef6\u4ea7\u7269"),s.default.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},s.default.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"yarn build:doc")," \u6784\u5efa\u7ec4\u4ef6\u6587\u6863\u4ea7\u7269"),s.default.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},s.default.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"yarn deploy:doc")," \u628a\u6587\u6863\u4ea7\u7269\u53d1\u5e03\u5230\bgithub pages\u4e0a"),s.default.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},s.default.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"yarn publish")," \u53d1\u5e03\u7ec4\u4ef6\u5230npm\b\u4ed3\u5e93\u4e0a"),s.default.createElement(u.MDXTag,{name:"li",components:n,parentName:"ul"},s.default.createElement(u.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"\byarn deploy")," \b\u6784\u5efa\u7ec4\u4ef6\u5e76\u5e76\u628a\u7ec4\u4ef6\u53d1\u5e03\u5230npm\b\u4ed3\u5e93\u4e0a")))}}]),n}(s.default.Component);n.default=c}}]);
//# sourceMappingURL=docs-quickstart.66d95062b88f8c192bd5.js.map