(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/automl/algorithm/_mock/condition.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{id:"1",name:"\u7279\u5f81\u62bd\u6837\u7b56\u7565",desc:"\u7279\u5f81\u62bd\u6837\u7b56\u7565\u7279\u5f81\u62bd\u6837\u7b56\u7565\u7279\u5f81\u62bd\u6837\u7b56\u7565f",params:[{key:"max_features",name:"\u7279\u5f81\u62bd\u8c61\u7b56\u7565",type:"select",data:[{name:"one",value:"one"},{name:"two",value:"two"},{name:"three",value:"max_features##array"},{name:"four",value:"max_features##number"},{name:"five",value:"five"}],default:"max_features##array"},{key:"max_features##array",name:"three_detail",type:"tag-input",default:[12,12,12]},{key:"max_features##number",name:"number_detail",type:"input-number",default:1},{key:"diff",name:"aaaaaaaa",type:"input-number",default:0,condition:"max_features$$five"},{key:"diff2",name:"aaaaaaaa",type:"input-number",default:.1224,condition:"max_features$$five"},{key:"randomState",name:"randomState",type:"select",data:[{name:"\u968f\u673a",value:"none"},{name:"\u81ea\u5b9a\u4e49",value:"randomState##number"}],default:"none"},{key:"randomState##number",name:"randomStateNumber",min:0,type:"input-number",default:.1}]}]},"./src/automl/algorithm/_mock/dataItem.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.value=t.item=void 0;t.item={id:"1",name:"\u7279\u5f81\u62bd\u6837\u7b56\u7565",desc:"\u7279\u5f81\u62bd\u6837\u7b56\u7565\u7279\u5f81\u62bd\u6837\u7b56\u7565\u7279\u5f81\u62bd\u6837\u7b56\u7565f",params:[{key:"tree",name:"\u6811\u7684\u4e2a\u6570",type:"tag-input",default:[10],extra:"\u6811\u7684\u6570\u91cf"},{key:"max_features",name:"\u7279\u5f81\u62bd\u8c61\u7b56\u7565",type:"select",data:[{name:"one",value:"one"},{name:"two",value:"two"},{name:"three",value:"max_features##array"},{name:"four",value:"max_features##number"},{name:"five",value:"five"}],default:"max_features##array"},{key:"max_features##array",name:"three_detail",type:"tag-input",default:[23,232,23]},{key:"max_features##number",name:"number_detail",type:"inputnumber",default:.4},{key:"diff",name:"aaaaaaaa",type:"inputnumber",default:.14,condition:"max_features$$five"},{key:"diff2",name:"aaaaaaaa",type:"inputnumber",default:.1224,condition:"max_features$$five"}]};t.value={id:"1",name:"\u7279\u5f81\u62bd\u6837\u7b56\u7565",params:{tree:[1,2,3,4,5,6],max_features:[1,2,3]}}},"./src/automl/algorithm/_mock/list.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{id:"d1010bce-2050-4beb-855b-d9ebcae81598",name:"VGG19",desc:"VGG19",params:[{key:"norm_size",name:"norm_size4",extra:"norm_size4",min:48,max:224,type:"input-number",default:48}]},{id:"component-item",name:"component-item",desc:"component-item",params:[{key:"radioGroup",name:"radioGroup",type:"radio-group",extra:"radio-group",data:[{name:"A",value:1},{name:"B",value:2},{name:"C",value:3}],default:1},{key:"timeSelect",name:"timeSelect",type:"time-select",extra:"time-select",data:{seconds:{key:"seconds",selectData:[1,5,10,20,30],displayUnit:"\u79d2"},minutes:{key:"minutes",selectData:[1,5,10,20,30],displayUnit:"\u5206\u949f"},hours:{key:"hours",selectData:[1,2,4,8,12,18],displayUnit:"\u5c0f\u65f6"}},default:180}]}]},"./src/automl/algorithm/index.mdx":function(e,t,a){"use strict";var n=a("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),o=n(a("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck.js")),u=n(a("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass.js")),m=n(a("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),r=n(a("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=n(a("./node_modules/babel-preset-umi/node_modules/@babel/runtime/helpers/inherits.js")),d=n(a("./node_modules/umi-build-dev/node_modules/react/index.js")),s=a("./node_modules/@mdx-js/tag/dist/index.js"),c=a("./node_modules/docz/dist/index.m.js"),p=a("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),f=a("./node_modules/antd/es/index.js"),b=a("./src/index.tsx"),v=a("./src/automl/algorithm/_mock/dataItem.js"),g=n(a("./src/automl/algorithm/_mock/list.js")),_=n(a("./src/automl/algorithm/_mock/condition.js")),y=function(e){function t(e){var a;return(0,o.default)(this,t),(a=(0,m.default)(this,(0,r.default)(t).call(this,e))).layout=null,a}return(0,i.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,a=(0,l.default)(e,["components"]);return d.default.createElement(s.MDXTag,{name:"wrapper",components:t},d.default.createElement(s.MDXTag,{name:"h1",components:t,props:{id:"alogrithm"}},"Alogrithm"),d.default.createElement(s.MDXTag,{name:"h2",components:t,props:{id:"\u4f7f\u7528"}},"\u4f7f\u7528"),d.default.createElement(s.MDXTag,{name:"p",components:t},"Alogrithm"),d.default.createElement(s.MDXTag,{name:"h2",components:t,props:{id:"\u53c2\u6570\u6a21\u677f"}},"\u53c2\u6570\u6a21\u677f"),d.default.createElement(s.MDXTag,{name:"h3",components:t,props:{id:"\u7ec4\u4ef6\u8f93\u51fa\u63a5\u53e3\u6570\u636e"}},"\u7ec4\u4ef6\u8f93\u51fa\u63a5\u53e3\u6570\u636e"),d.default.createElement(s.MDXTag,{name:"pre",components:t},d.default.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"[\n  {\n    id: 'd1010bce-2050-4beb-855b-d9ebcae81598',\n    name: 'VGG19',\n    desc: 'VGG19',\n    params: [{\n      key: 'norm_size',\n      name: 'norm_size4',\n      extra: 'norm_size4',\n      min: 48,\n      max: 224,\n      type: 'input-number',\n      default: 48,\n    }]\n  }\n]\n")),d.default.createElement(s.MDXTag,{name:"h2",components:t,props:{id:"\u6848\u4f8b\u4ecb\u7ecd"}},"\u6848\u4f8b\u4ecb\u7ecd"),d.default.createElement(c.Playground,{__codesandbox:"undefined",__position:0,__code:"<State initial={{ disabled: false, value: [] }}>\n  {({ state, setState }) => (\n    <React.Fragment>\n      <Button\n        style={{ marginBottom: '10px' }}\n        type=\"primay\"\n        onClick={() => {\n          setState({ disabled: !state.disabled })\n        }}\n      >\n        {state.disabled ? '\u542f\u7528' : '\u7981\u7528'}\n      </Button>\n      <Button\n        style={{ marginBottom: '10px', marginLeft: '20px' }}\n        type=\"primay\"\n        onClick={() => {\n          setState({\n            value: [\n              {\n                id: 'component-item',\n                name: 'component-item',\n                params: { radioGroup: 1, timeSelect: 1600 },\n              },\n            ],\n          })\n        }}\n      >\n        \u8bbe\u7f6eValue\u53d7\u63a7\n      </Button>\n      <LocaleProvider locale={'zh_CN'}>\n        <React.Fragment>\n          <AutoML.Algorithm\n            disabled={state.disabled}\n            value={state.value}\n            data={list}\n            onChange={value => setState({ value })}\n          />\n          {/* <AutoML.Algorithm.Item value={state.value} data={item} onChange={(value) => (setState({ value }))} /> */}\n          <span>change value: {JSON.stringify(state.value)}</span>\n        </React.Fragment>\n      </LocaleProvider>\n    </React.Fragment>\n  )}\n</State>",__scope:{props:this?this.props:a,State:p.State,Toggle:p.Toggle,Button:f.Button,AutoML:b.AutoML,LocaleProvider:b.LocaleProvider,item:v.item,value:v.value,list:g.default,conditionList:_.default}},d.default.createElement(p.State,{initial:{disabled:!1,value:[]}},function(e){var t=e.state,a=e.setState;return d.default.createElement(d.default.Fragment,null,d.default.createElement(f.Button,{style:{marginBottom:"10px"},type:"primay",onClick:function(){a({disabled:!t.disabled})}},t.disabled?"\u542f\u7528":"\u7981\u7528"),d.default.createElement(f.Button,{style:{marginBottom:"10px",marginLeft:"20px"},type:"primay",onClick:function(){a({value:[{id:"component-item",name:"component-item",params:{radioGroup:1,timeSelect:1600}}]})}},"\u8bbe\u7f6eValue\u53d7\u63a7"),d.default.createElement(b.LocaleProvider,{locale:"zh_CN"},d.default.createElement(d.default.Fragment,null,d.default.createElement(b.AutoML.Algorithm,{disabled:t.disabled,value:t.value,data:g.default,onChange:function(e){return a({value:e})}}),d.default.createElement("span",null,"change value: ",JSON.stringify(t.value)))))})),d.default.createElement(s.MDXTag,{name:"h3",components:t,props:{id:"condition\u6761\u4ef6\u914d\u7f6e"}},"condition(\u6761\u4ef6\u914d\u7f6e)"),d.default.createElement(c.Playground,{__codesandbox:"undefined",__position:1,__code:"<State initial={{ disabled: false, value: [] }}>\n  {({ state, setState }) => (\n    <React.Fragment>\n      <Button\n        style={{ marginBottom: '10px' }}\n        type=\"primay\"\n        onClick={() => {\n          setState({ disabled: !state.disabled })\n        }}\n      >\n        {state.disabled ? '\u542f\u7528' : '\u7981\u7528'}\n      </Button>\n      <LocaleProvider locale={'zh_CN'}>\n        <React.Fragment>\n          <AutoML.Algorithm\n            disabled={state.disabled}\n            value={state.value}\n            data={conditionList}\n            onChange={value => setState({ value })}\n          />\n          {/* <AutoML.Algorithm.Item value={state.value} data={item} onChange={(value) => (setState({ value }))} /> */}\n          <span>change value: {JSON.stringify(state.value)}</span>\n        </React.Fragment>\n      </LocaleProvider>\n    </React.Fragment>\n  )}\n</State>",__scope:{props:this?this.props:a,State:p.State,Toggle:p.Toggle,Button:f.Button,AutoML:b.AutoML,LocaleProvider:b.LocaleProvider,item:v.item,value:v.value,list:g.default,conditionList:_.default}},d.default.createElement(p.State,{initial:{disabled:!1,value:[]}},function(e){var t=e.state,a=e.setState;return d.default.createElement(d.default.Fragment,null,d.default.createElement(f.Button,{style:{marginBottom:"10px"},type:"primay",onClick:function(){a({disabled:!t.disabled})}},t.disabled?"\u542f\u7528":"\u7981\u7528"),d.default.createElement(b.LocaleProvider,{locale:"zh_CN"},d.default.createElement(d.default.Fragment,null,d.default.createElement(b.AutoML.Algorithm,{disabled:t.disabled,value:t.value,data:_.default,onChange:function(e){return a({value:e})}}),d.default.createElement("span",null,"change value: ",JSON.stringify(t.value)))))})),d.default.createElement(s.MDXTag,{name:"h2",components:t,props:{id:"api"}},"API"),d.default.createElement(c.PropsTable,{of:b.AutoML.Algorithm}))}}]),t}(d.default.Component);t.default=y}}]);
//# sourceMappingURL=src-automl-algorithm-index.66d95062b88f8c192bd5.js.map