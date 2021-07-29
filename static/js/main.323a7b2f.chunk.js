(this.webpackJsonpclient_blaze=this.webpackJsonpclient_blaze||[]).push([[0],{193:function(e,t,r){},194:function(e,t,r){},291:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(27),s=r.n(c),i=(r(193),r(194),r(195),r(29)),o=r(82),u=r(22),l=r(24),d=r.n(l),j=r(32),b=r(25),O=r(298),h=r(304),x=r(294),p=r(295),f=r(42),m=r(297),v=r(179),y=r(5),g=function(e,t,r){return"prev"===t?Object(y.jsx)(f.a,{children:"Previous"}):"next"===t?Object(y.jsx)(f.a,{children:"Next"}):r},C=function(e){var t=e.total,r=e.onChange;return Object(y.jsx)(v.a,{defaultCurrent:1,total:10*t,itemRender:g,onChange:r})},S=r(72),k={pageNumber:0,pageSize:4,sortBy:"id",orderBy:0,category:null,name:null,customer:null,status:null},I={totalItems:0,paginate:{totalPages:1}},T={id:"",name:"",category:"Cookies",unitPrice:0,status:!0},w={id:"",orderNumber:0,status:"Pending",date:"",customer:"",subTotal:0,totalTaxes:0,totalAmount:0,taxes:{cityTax:0,countryTax:0,stateTax:0,federalTax:0},productOrderList:[]},N=r(172),P=r.n(N).a.create({baseURL:"https://blaze-services.herokuapp.com/"}),E=a.a.createContext({}),B=function(e){var t=e.onClickDelet,r=void 0===t?function(){}:t,n=e.onClickEdit,a=void 0===n?function(){}:n,c=e.isEdit,s=void 0!==c&&c,i=e.dataSource,o=void 0===i?[]:i,u=e.size,l=void 0===u?"middle":u,d=e.className,j=void 0===d?"":d,b=e.actions,O=[{title:"N\xb0",dataIndex:"productOrderNumber"},{title:"Name",render:function(e,t){return t.product.name}},{title:"Quantity",dataIndex:"quantity"},{title:"Unit Price",render:function(e,t){return t.product.unitPrice}},{title:"Cost",dataIndex:"cost"}];return(void 0===b||b)&&O.push({title:"Action",width:"15%",render:function(e,t){return Object(y.jsxs)(h.b,{size:"middle",children:[s?Object(y.jsx)(f.a,{type:"link",onClick:function(){return a(t)},children:"Edit"}):"",Object(y.jsx)(f.a,{type:"link",onClick:function(){return r(t)},children:"Delete"})]})}}),Object(y.jsx)(m.a,{rowKey:"productOrderNumber",columns:O,dataSource:o,pagination:!1,size:l,className:j})},L=r(181),A=r(299),D=r(300),z=r(302),q=r(103),V=r(301),F=r(303),M=function(e){var t=e.modalVisible,r=e.handleCancelModal,a=Object(n.useContext)(E),c=a.state,s=a.removeItem,i=a.addItem,o=a.addCustomer,l=a.saveOrder,O=Object(n.useState)([]),h=Object(b.a)(O,2),m=h[0],v=h[1],g=Object(n.useState)({product:{},quantity:1}),C=Object(b.a)(g,2),S=C[0],k=C[1],I=Object(n.useState)(!1),T=Object(b.a)(I,2),w=T[0],N=T[1];Object(n.useEffect)((function(){M()}),[]);var M=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("product/status");case 2:t=e.sent,v(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsx)(A.a,{title:"Create Order",visible:t,confirmLoading:w,onCancel:r,width:1e3,footer:null,children:Object(y.jsxs)(x.a,{children:[Object(y.jsx)(p.a,{sm:24,lg:15,className:"mb-20",children:Object(y.jsxs)(x.a,{children:[Object(y.jsx)(p.a,{span:24,children:Object(y.jsx)(D.a.Item,{label:"Customer",children:Object(y.jsx)(z.a,{type:"text",onChange:function(e){return o(e.target.value)},value:c.customer})})}),Object(y.jsx)(p.a,{span:11,children:Object(y.jsx)(D.a.Item,{label:"Product\xa0\xa0",children:Object(y.jsx)(q.a,{showSearch:!0,onChange:function(e){var t=m.find((function(t){return t.id===e}));k(Object(u.a)(Object(u.a)({},S),{},{product:Object(u.a)({},t)}))},optionFilterProp:"name",filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:m.map((function(e){return Object(y.jsx)(q.a.Option,{value:e.id,children:e.name},e.id)}))})})}),Object(y.jsx)(p.a,{span:7,offset:1,children:Object(y.jsx)(D.a.Item,{label:"Quantity",children:Object(y.jsx)(V.a,{min:1,max:999,defaultValue:1,onChange:function(e){return t=e,k(Object(u.a)(Object(u.a)({},S),{},{quantity:t}));var t}})})}),Object(y.jsx)(p.a,{span:4,offset:1,children:Object(y.jsx)(f.a,{type:"primary",style:{width:"100%"},onClick:function(){return i(S)},children:"Add"})}),Object(y.jsx)(p.a,{span:24,children:Object(y.jsx)(B,{onClickDelet:s,dataSource:c.productOrderList,size:"small"})})]})}),Object(y.jsx)(p.a,{sm:24,lg:8,offset:1,className:"mb-20",children:Object(y.jsxs)(F.b,{title:"Taxes",bordered:!0,children:[Object(y.jsx)(F.b.Item,{span:3,label:"Sub Total",children:c.subTotal}),Object(y.jsxs)(F.b.Item,{span:3,label:"Taxes",children:[Object(y.jsxs)("h4",{style:{width:"100%"},children:["cityTax: ",c.taxes.cityTax]}),Object(y.jsxs)("h4",{style:{width:"100%"},children:["countryTax: ",c.taxes.countryTax]}),Object(y.jsxs)("h4",{style:{width:"100%"},children:["stateTax: ",c.taxes.stateTax]}),Object(y.jsxs)("h4",{style:{width:"100%"},children:["federalTax: ",c.taxes.federalTax]})]}),Object(y.jsx)(F.b.Item,{span:3,label:"Total Taxes",children:c.totalTaxes}),Object(y.jsx)(F.b.Item,{span:3,label:"Total",children:c.totalTaxes+c.subTotal})]})}),Object(y.jsx)(p.a,{span:8,offset:8,children:Object(y.jsx)(f.a,{type:"primary",onClick:function(){return 0===c.customer.length||""===c.customer?L.b.error("Error: Customer is required!"):c.productOrderList.length<=0?L.b.error("Error: Insert at least one Product"):(N(!0),void l().then((function(e){r(!0),L.b.success("Success!, Created Order",5)})).catch((function(e){return L.b.error("Error: ".concat(e))})).finally((function(){return N(!1)})))},loading:w,block:!0,children:"Create Product"})})]})})},R=z.a.Search,K=q.a.Option,Q=function(e){var t=e.onChange;return Object(y.jsx)(D.a,{layout:"horizontal",children:Object(y.jsxs)(x.a,{children:[Object(y.jsx)(p.a,{sm:24,md:{span:6},children:Object(y.jsx)(D.a.Item,{children:Object(y.jsx)(R,{placeholder:"Search Customer",allowClear:!0,onSearch:function(e){return t(e.toString(),"customer")}})})}),Object(y.jsx)(p.a,{sm:8,md:{span:5,offset:1},children:Object(y.jsx)(D.a.Item,{label:"SortBy",children:Object(y.jsxs)(q.a,{defaultValue:"id",style:{width:120},onChange:function(e){return t(e,"sortBy")},placeholder:"Select SortBy",children:[Object(y.jsx)(K,{value:"id",children:"Id"}),Object(y.jsx)(K,{value:"customer",children:"Customer"}),Object(y.jsx)(K,{value:"status",children:"Status"}),Object(y.jsx)(K,{value:"date",children:"Date"}),Object(y.jsx)(K,{value:"totalAmounts",children:"Total"})]})})}),Object(y.jsx)(p.a,{sm:8,md:{span:5,offset:0},children:Object(y.jsx)(D.a.Item,{label:"OrderBy",children:Object(y.jsxs)(q.a,{defaultValue:0,style:{width:120},onChange:function(e){return t(e,"orderBy")},placeholder:"Select OrderBy",children:[Object(y.jsx)(K,{value:0,children:"---"}),Object(y.jsx)(K,{value:1,children:"Ascending"}),Object(y.jsx)(K,{value:2,children:"Descending"})]})})}),Object(y.jsx)(p.a,{sm:8,md:{span:7,offset:0},children:Object(y.jsx)(D.a.Item,{label:"Status",children:Object(y.jsxs)(q.a,{defaultValue:null,style:{width:120},onChange:function(e){return t(e,"status")},placeholder:"Select Status",children:[Object(y.jsx)(K,{value:null,children:"---"}),Object(y.jsx)(K,{value:"Pending",children:"Pending"}),Object(y.jsx)(K,{value:"Completed",children:"Completed"}),Object(y.jsx)(K,{value:"Rejected",children:"Rejected"})]})})})]})})},U=O.a.Title;function $(){Object(i.f)();var e=Object(n.useContext)(E).clearOrder,t=Object(n.useState)(!1),r=Object(b.a)(t,2),a=r[0],c=(r[1],Object(n.useState)(!1)),s=Object(b.a)(c,2),l=s[0],O=s[1],v=Object(n.useState)([]),g=Object(b.a)(v,2),T=g[0],w=g[1],N=Object(n.useState)(k),B=Object(b.a)(N,2),L=B[0],A=B[1],D=Object(n.useState)(I),z=Object(b.a)(D,2),q=z[0],V=z[1],F=Object(n.useState)(!1),R=Object(b.a)(F,2),K=R[0],$=R[1],J=[{title:"N\xb0",dataIndex:"orderNumber",key:"orderNumber"},{title:"Customer",dataIndex:"customer",key:"customer"},{title:"Status",dataIndex:"status",key:"status"},{title:"Date",dataIndex:"date",key:"date"},{title:"Total",key:"totalAmounts",render:function(e){return e.totalAmounts.toFixed(2)}},{title:"Action",key:"action",render:function(e,t){return Object(y.jsx)(h.b,{size:"middle",children:Object(y.jsx)(S.b,{to:"/orders/".concat(t.id),children:"Edit"})})}}];Object(n.useEffect)((function(){_()}),[L]);var _=function(){var e=Object(j.a)(d.a.mark((function e(){var t,r,n,a,c,s,i,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),t=L.pageNumber,r=L.pageSize,n=L.sortBy,a=L.orderBy,c=L.customer,s=L.status,i="paginate?pageNumber=".concat(t,"&pageSize=").concat(r,"&sortBy=").concat(n,"&orderBy=").concat(a,"&customer=").concat(c,"&status=").concat(s),e.next=5,P.get("order/"+i);case 5:200===(o=e.sent).status&&(console.log(o.data.paginate.content),w(o.data.paginate.content),V(o.data)),O(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A(Object(u.a)(Object(u.a)({},L),{},{pageNumber:t-1})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(U,{level:2,children:["Orders (",q.totalItems,") "]}),Object(y.jsxs)(x.a,{children:[Object(y.jsx)(p.a,{sm:24,lg:20,children:Object(y.jsx)(Q,{onChange:function(e,t){return A(Object(u.a)(Object(u.a)({},L),{},Object(o.a)({},t,e)))}})}),Object(y.jsx)(p.a,{sm:24,lg:4,children:Object(y.jsx)(f.a,{type:"primary",block:!0,onClick:function(){return $(!0),void e()},children:"Create Order"})}),Object(y.jsx)(p.a,{span:24,className:"mb-20",children:Object(y.jsx)(m.a,{loading:l,rowKey:"id",columns:J,dataSource:T,pagination:!1})}),Object(y.jsx)(p.a,{span:24,children:Object(y.jsx)(x.a,{justify:"end",children:Object(y.jsx)(C,{total:q.paginate.totalPages,onChange:G})})})]}),Object(y.jsx)(M,{modalVisible:K,modalLoading:a,handleCancelModal:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e(),$(!1),t&&_()}})]})}var J=r(187),_=O.a.Title,G={product:{},quantity:1};var H=function(){var e=Object(i.g)().id,t=Object(i.f)(),r=Object(n.useContext)(E),a=r.state,c=r.setOrder,s=r.updateStatus,o=r.deleteItem,l=r.ServiceAddItem,O=r.saveOrder,h=Object(n.useState)(!1),m=Object(b.a)(h,2),v=m[0],g=m[1],C=Object(n.useState)(!1),S=Object(b.a)(C,2),k=S[0],I=(S[1],Object(n.useState)([])),T=Object(b.a)(I,2),w=T[0],N=T[1],z=Object(n.useState)(!1),M=Object(b.a)(z,2),R=M[0],K=M[1],Q=Object(n.useState)(!1),U=Object(b.a)(Q,2),$=U[0],H=U[1],Z=Object(n.useState)(G),W=Object(b.a)(Z,2),X=W[0],Y=W[1];Object(n.useEffect)((function(){ee(),te()}),[]);var ee=function(){var t=Object(j.a)(d.a.mark((function t(){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g(!0),t.next=3,P.get("order/"+e);case 3:200===(r=t.sent).status&&(null==r.data.productOrderList[0]&&(r.data.productOrderList=[]),c(r.data)),g(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),te=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("product/status");case 2:t=e.sent,N(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!=e?(Y(e),K(!0)):(Y(G),K(!1)),H(!0)},ne=function(e){return A.a.confirm({title:"Confirm ".concat("Completed"===e?"Complete":"Recject"," Order?"),icon:Object(y.jsx)(J.a,{}),okText:"Ok",cancelText:"Cancel",onOk:function(){return ce(e)}})},ae=function(e){o(e).then((function(){ee(),L.b.success("Success!, Item Delated",5)})).catch((function(e){L.b.error("Error!, ".concat(e),5)}))},ce=function(e){s(e).then((function(){ee(),L.b.success("Success!, Order Updated",5)})).catch((function(e){L.b.error("Error!, ".concat(e),5)}))};return v?Object(y.jsx)("h1",{children:"Loading...."}):k?Object(y.jsx)("h1",{children:"Id not found"}):(console.log(a),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(x.a,{justify:"space-between",children:[Object(y.jsx)(_,{level:2,children:"Orders N\xb0 1 "}),Object(y.jsx)(f.a,{type:"primary",size:"large",style:{backgroundColor:"#3f3f3f",border:"1px solid #ccc"},onClick:function(){return t.push("/orders")},children:"Back"})]}),Object(y.jsx)(x.a,{children:Object(y.jsxs)(F.b,{bordered:!0,className:"mb-20",children:[Object(y.jsx)(F.b.Item,{span:3,label:"Customer",children:a.customer}),Object(y.jsx)(F.b.Item,{span:3,label:"Status",children:a.status}),Object(y.jsx)(F.b.Item,{span:3,label:"Date",children:a.date})]})}),Object(y.jsx)(x.a,{children:Object(y.jsx)(p.a,{span:24,children:Object(y.jsx)(B,{onClickDelet:function(e){return A.a.confirm({title:"Delete Item ".concat(e.productOrderNumber,"?"),icon:Object(y.jsx)(J.a,{}),okText:"Ok",cancelText:"Cancel",onOk:function(){return ae(e)}})},onClickEdit:re,isEdit:!0,dataSource:a.productOrderList,className:"mb-20",actions:"Pending"===a.status})})}),Object(y.jsxs)(x.a,{children:["Pending"===a.status&&Object(y.jsx)(p.a,{sm:24,md:8,offset:21,className:"mb-20",children:Object(y.jsx)(f.a,{type:"primary",onClick:function(){return re()},children:"Add Item+"})}),Object(y.jsx)(p.a,{sm:24,md:8,offset:16,className:"mb-20",children:Object(y.jsxs)(F.b,{title:"Taxes",bordered:!0,children:[Object(y.jsx)(F.b.Item,{span:3,label:"Sub Total",children:a.subTotal}),Object(y.jsxs)(F.b.Item,{span:3,label:"Taxes",children:[Object(y.jsxs)("h4",{style:{width:"100%"},children:["cityTax: ",a.taxes.cityTax]}),Object(y.jsxs)("h4",{style:{width:"100%"},children:["countryTax: ",a.taxes.countryTax]}),Object(y.jsxs)("h4",{style:{width:"100%"},children:["stateTax: ",a.taxes.stateTax]}),Object(y.jsxs)("h4",{style:{width:"100%"},children:["federalTax: ",a.taxes.federalTax]})]}),Object(y.jsx)(F.b.Item,{span:3,label:"Total Taxes",children:a.totalTaxes}),Object(y.jsx)(F.b.Item,{span:3,label:"Total",children:a.totalTaxes+a.subTotal})]})}),"Pending"===a.status&&Object(y.jsx)(p.a,{sm:24,md:8,offset:16,className:"mb-20",children:Object(y.jsxs)(x.a,{justify:"space-around",children:[Object(y.jsxs)(f.a,{style:{backgroundColor:"#489766",color:"white"},onClick:function(){return ne("Completed")},children:["Complete Order"," "]}),Object(y.jsxs)(f.a,{style:{backgroundColor:"tomato",color:"white"},onClick:function(){return ne("Rejected")},children:[" ","Reject Order"," "]})]})})]}),Object(y.jsx)(A.a,{title:R?"Edit item":"Add Item",visible:$,onOk:function(){H(!1)},onCancel:function(){H(!1)},width:600,footer:null,children:Object(y.jsxs)(x.a,{children:[Object(y.jsx)(p.a,{span:11,children:Object(y.jsx)(D.a.Item,{label:"Product\xa0\xa0",children:Object(y.jsx)(q.a,{showSearch:!0,onChange:function(e){var t=w.find((function(t){return t.id===e}));Y(Object(u.a)(Object(u.a)({},X),{},{product:Object(u.a)({},t)}))},value:X.product.name,optionFilterProp:"name",filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:R?Object(y.jsx)(q.a.Option,{value:X.product.id,children:X.product.name},X.product.id):w.map((function(e){return Object(y.jsx)(q.a.Option,{value:e.id,children:e.name},e.id)}))})})}),Object(y.jsx)(p.a,{span:7,offset:1,children:Object(y.jsx)(D.a.Item,{label:"Quantity",children:Object(y.jsx)(V.a,{min:1,max:999,defaultValue:1,value:X.quantity,onChange:function(e){return t=e,Y(Object(u.a)(Object(u.a)({},X),{},{quantity:t}));var t}})})}),Object(y.jsx)(p.a,{span:4,offset:1,children:Object(y.jsx)(f.a,{type:"primary",style:{width:"100%"},onClick:function(){return 0===Object.keys(X.product).length?L.b.error("Error: Item is required!"):0===X.quantity?L.b.error("Error: Quantity can't be lees then 0!"):void(R?O(!0,X).then((function(){ee(),L.b.success("Success!, Item Updated",5),H(!1)})).catch((function(e){L.b.error("Error!, ".concat(e),5)})):l(X).then((function(){ee(),L.b.success("Success!, Item Added",5),H(!1)})).catch((function(e){L.b.error("Error!, ".concat(e),5)})))},children:R?"Edit":"Add"})})]})})]}))},Z=r(128),W={required:"${label} it's required!"},X={required:!0},Y=function(e){var t=e.form,r=e.isEdit,n=e.modalLoading,a=e.modalVisible,c=e.handleCancelModal,s=e.productInitialValues,i=e.fecthProduct;return Object(y.jsx)(A.a,{title:r?"Edit Product":"Create Product",visible:a,confirmLoading:n,onCancel:c,width:400,footer:null,children:Object(y.jsxs)(D.a,{form:t,validateMessages:W,initialValues:s,requiredMark:!0,onFinish:i,layout:"vertical",children:[Object(y.jsx)(D.a.Item,{hidden:!0,name:"id",children:Object(y.jsx)(z.a,{})}),Object(y.jsx)(D.a.Item,{rules:[X],name:"name",label:"Name",children:Object(y.jsx)(z.a,{})}),Object(y.jsx)(D.a.Item,{rules:[X],name:"category",label:"Category",children:Object(y.jsxs)(q.a,{children:[Object(y.jsx)(q.a.Option,{value:"Cookies",children:"Cookies"}),Object(y.jsx)(q.a.Option,{value:"Candies",children:"Candies"}),Object(y.jsx)(q.a.Option,{value:"Cakes",children:"Cakes"}),Object(y.jsx)(q.a.Option,{value:"Desserts",children:"Desserts"}),Object(y.jsx)(q.a.Option,{value:"Drinks",children:"Drinks"})]})}),Object(y.jsxs)(x.a,{children:[Object(y.jsx)(p.a,{span:12,children:Object(y.jsx)(D.a.Item,{name:"unitPrice",label:"Price $",rules:[X,{type:"number",min:1,max:9999,message:"Price must be between $1 and $9999"}],children:Object(y.jsx)(V.a,{})})}),Object(y.jsx)(p.a,{span:12,children:Object(y.jsx)(D.a.Item,{rules:[X],name:"status",label:"Status",children:Object(y.jsxs)(Z.a.Group,{children:[Object(y.jsx)(Z.a.Button,{value:!0,children:"Active"}),Object(y.jsx)(Z.a.Button,{value:!1,children:"Inactive"})]})})})]}),Object(y.jsx)(D.a.Item,{children:Object(y.jsxs)(f.a,{type:"primary",htmlType:"submit",style:{width:"100%"},loading:n,children:[r?"Edit":"Create"," Product"]})})]})})},ee=z.a.Search,te=q.a.Option,re=function(e){var t=e.onChange;return Object(y.jsx)(D.a,{layout:"horizontal",children:Object(y.jsxs)(x.a,{children:[Object(y.jsx)(p.a,{sm:24,md:{span:6},children:Object(y.jsx)(D.a.Item,{children:Object(y.jsx)(ee,{placeholder:"Search Name",allowClear:!0,onSearch:function(e){return t(e.toString(),"name")}})})}),Object(y.jsx)(p.a,{sm:8,md:{span:5,offset:1},children:Object(y.jsx)(D.a.Item,{label:"SortBy",children:Object(y.jsxs)(q.a,{defaultValue:"id",style:{width:120},onChange:function(e){return t(e,"sortBy")},placeholder:"Select SortBy",children:[Object(y.jsx)(te,{value:"id",children:"Id"}),Object(y.jsx)(te,{value:"name",children:"Name"}),Object(y.jsx)(te,{value:"category",children:"Category"}),Object(y.jsx)(te,{value:"unitPrice",children:"Price"}),Object(y.jsx)(te,{value:"status",children:"Status"})]})})}),Object(y.jsx)(p.a,{sm:8,md:{span:5,offset:0},children:Object(y.jsx)(D.a.Item,{label:"OrderBy",children:Object(y.jsxs)(q.a,{defaultValue:0,style:{width:120},onChange:function(e){return t(e,"orderBy")},placeholder:"Select OrderBy",children:[Object(y.jsx)(te,{value:0,children:"---"}),Object(y.jsx)(te,{value:1,children:"Ascending"}),Object(y.jsx)(te,{value:2,children:"Descending"})]})})}),Object(y.jsx)(p.a,{sm:8,md:{span:7,offset:0},children:Object(y.jsx)(D.a.Item,{label:"Category",children:Object(y.jsxs)(q.a,{defaultValue:null,style:{width:120},onChange:function(e){return t(e,"category")},placeholder:"Select Category",children:[Object(y.jsx)(te,{value:null,children:"---"}),Object(y.jsx)(te,{value:"Cookies",children:"Cookies"}),Object(y.jsx)(te,{value:"Candies",children:"Candies"}),Object(y.jsx)(te,{value:"Cakes",children:"Cakes"}),Object(y.jsx)(te,{value:"Desserts",children:"Desserts"}),Object(y.jsx)(te,{value:"Drinks",children:"Drinks"})]})})})]})})},ne=O.a.Title;var ae=[{path:"/",component:$},{path:"/products",component:function(){var e=D.a.useForm(),t=Object(b.a)(e,1)[0],r=Object(n.useState)(!1),a=Object(b.a)(r,2),c=a[0],s=a[1],i=Object(n.useState)(!1),l=Object(b.a)(i,2),O=l[0],h=l[1],v=Object(n.useState)([]),g=Object(b.a)(v,2),S=g[0],w=g[1],N=Object(n.useState)(k),E=Object(b.a)(N,2),B=E[0],A=E[1],z=Object(n.useState)(I),q=Object(b.a)(z,2),V=q[0],F=q[1],M=Object(n.useState)(!1),R=Object(b.a)(M,2),K=R[0],Q=R[1],U=Object(n.useState)(!1),$=Object(b.a)(U,2),J=$[0],_=$[1],G=[{title:"N\xb0",dataIndex:"n",render:function(e,t){return S.indexOf(t)+1+B.pageNumber*B.pageSize}},{title:"Name",dataIndex:"name"},{title:"Category",dataIndex:"category"},{title:"Price",dataIndex:"unitPrice"},{title:"Status",dataIndex:"status",render:function(e,t){return t.status?"Active":"Inactive"}},{title:"Action",render:function(e,t){return Object(y.jsx)(f.a,{type:"link",onClick:function(){return W(t)},children:"Edit"})}}];Object(n.useEffect)((function(){H()}),[B]);var H=function(){var e=Object(j.a)(d.a.mark((function e(){var t,r,n,a,c,s,i,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),t=B.pageNumber,r=B.pageSize,n=B.sortBy,a=B.orderBy,c=B.category,s=B.name,i="paginate?pageNumber=".concat(t,"&pageSize=").concat(r,"&sortBy=").concat(n,"&orderBy=").concat(a,"&category=").concat(c,"&name=").concat(s),e.next=5,P.get("product/"+i);case 5:200===(o=e.sent).status&&(w(o.data.paginate.content),F(o.data)),h(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(j.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(!0),r=!1,!J){e.next=8;break}return e.next=5,P.put("product",t).catch((function(e){return L.b.error("Error: ".concat(e))}));case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,P.post("product",t).catch((function(e){return L.b.error("Error: ".concat(e))}));case 10:r=e.sent;case 11:r&&(L.b.success("Success!, ".concat(J?"Edited":"Created"," Product"),5),H(),X()),s(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(j.a)(d.a.mark((function e(r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r?(_(!0),t.setFieldsValue(r)):_(!1),Q(!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){t.resetFields(),Q(!1)},ee=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A(Object(u.a)(Object(u.a)({},B),{},{pageNumber:t-1})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(ne,{level:2,children:["Products (",V.totalItems,") "]}),Object(y.jsxs)(x.a,{children:[Object(y.jsx)(p.a,{sm:24,lg:20,children:Object(y.jsx)(re,{onChange:function(e,t){return A(Object(u.a)(Object(u.a)({},B),{},Object(o.a)({},t,e)))}})}),Object(y.jsx)(p.a,{sm:24,lg:4,children:Object(y.jsx)(f.a,{type:"primary",block:!0,onClick:function(){return W(!1)},children:"Create Product"})}),Object(y.jsx)(p.a,{span:24,className:"mb-20",children:Object(y.jsx)(m.a,{loading:O,rowKey:"id",columns:G,dataSource:S,pagination:!1})}),Object(y.jsx)(p.a,{span:24,children:Object(y.jsx)(x.a,{justify:"end",children:Object(y.jsx)(C,{total:V.paginate.totalPages,onChange:ee})})})]}),Object(y.jsx)(Y,{form:t,isEdit:J,modalLoading:c,modalVisible:K,handleCancelModal:X,productInitialValues:T,fecthProduct:Z})]})}},{path:"/orders/:id",component:H},{path:"/orders",component:$}],ce=function(){return Object(y.jsx)(i.c,{children:ae.map((function(e,t){return Object(y.jsx)(i.a,{path:e.path,exact:!0,component:e.component},t)}))})},se=r(296),ie=r(79),oe=[{to:"/orders",title:"Orders"},{to:"/products",title:"Products"}],ue=r(150),le=function(){var e=Object(n.useState)(w),t=Object(b.a)(e,2),r=t[0],a=t[1];Object(n.useEffect)((function(){c()}),[r.productOrderList]);var c=function(){var e=0,t=s(.1*r.subTotal);e+=t;var n=s(.05*(r.subTotal+e));e+=n;var c=s(.08*(r.subTotal+e));e+=c;var i=s(.02*(r.subTotal+e));e+=i,a(Object(u.a)(Object(u.a)({},r),{},{totalTaxes:s(e),taxes:{cityTax:t,countryTax:n,stateTax:c,federalTax:i}}))},s=function(e){return parseFloat(e.toFixed(2))};return{addItem:function(e){var t=e.product,n=e.quantity;if(0===Object.keys(t).length)return!1;if(0===n)return!1;var c={product:t,quantity:n};c.productOrderNumber=r.productOrderList.length+1,c.cost=c.product.unitPrice*c.quantity,a(Object(u.a)(Object(u.a)({},r),{},{subTotal:r.subTotal+c.cost,productOrderList:[].concat(Object(ue.a)(r.productOrderList),[c])}))},removeItem:function(e){a(Object(u.a)(Object(u.a)({},r),{},{subTotal:r.subTotal-e.cost,productOrderList:r.productOrderList.filter((function(t){return t.productOrderNumber!==e.productOrderNumber}))}))},addCustomer:function(e){a(Object(u.a)(Object(u.a)({},r),{},{customer:e}))},saveOrder:function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,a,c,s=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.length>0&&void 0!==s[0]&&s[0],n=s.length>1?s[1]:void 0,a=!1,!t){e.next=13;break}return c=Object(u.a)({},r),n.cost=n.product.unitPrice*n.quantity,c=Object(u.a)(Object(u.a)({},r),{},{productOrderList:[].concat(Object(ue.a)(r.productOrderList.filter((function(e){return e.product.id!==n.product.id}))),[n])}),console.log(c),e.next=10,P.put("order",c);case 10:a=e.sent,e.next=16;break;case 13:return e.next=15,P.post("order",r);case 15:a=e.sent;case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),clearOrder:function(){return a(w)},setOrder:function(e){return a(e)},updateStatus:function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(u.a)(Object(u.a)({},r),{},{status:t}),e.next=3,P.put("order/status",n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteItem:function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,P.delete("order/item?idOrder=".concat(r.id,"&idProductOrder=").concat(t.id));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ServiceAddItem:function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={id:r.id,productOrderList:[t]},console.log(n),e.next=4,P.post("order/item",n);case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),state:r}},de=se.a.Header,je=se.a.Content,be=function(){return Object(y.jsxs)(se.a,{className:"layout",children:[Object(y.jsxs)(de,{className:"header",children:[Object(y.jsx)("div",{className:"logo",children:"BLAZE"}),Object(y.jsx)(ie.a,{theme:"light",mode:"horizontal",defaultSelectedKeys:["0"],children:oe.map((function(e,t){return Object(y.jsx)(ie.a.Item,{children:Object(y.jsx)(S.b,{to:e.to,children:e.title})},t)}))})]}),Object(y.jsx)(je,{style:{padding:"50px 50px"},children:Object(y.jsx)("div",{className:"site-layout-content",children:Object(y.jsx)(ce,{})})})]})};var Oe=function(){var e=le();return Object(y.jsx)(E.Provider,{value:e,children:Object(y.jsx)(S.a,{children:Object(y.jsx)(be,{})})})};s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(Oe,{})}),document.getElementById("root"))}},[[291,1,2]]]);
//# sourceMappingURL=main.323a7b2f.chunk.js.map