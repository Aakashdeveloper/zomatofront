(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{32:function(e,t,n){},60:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(33),c=n.n(s),i=n(12),r=n(2),l=n(4),o=n(5),d=n(7),j=n(6),h=n(13),u=n.n(h),b=(n(60),n(0)),m=function(e){return Object(b.jsx)("div",{id:"content",children:function(e){var t=e.listData;return t?t.length>0?t.map((function(e){return Object(b.jsx)("div",{className:"item",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-5",children:Object(b.jsx)("img",{className:"Image",alt:e.restaurant_name,src:e.restaurant_thumb})}),Object(b.jsx)("div",{className:"col-md-7",children:Object(b.jsxs)("div",{className:"hotel_name",children:[Object(b.jsx)(i.b,{to:"/details/".concat(e.restaurant_id),children:e.restaurant_name}),Object(b.jsx)("div",{className:"city_name",children:e.address}),Object(b.jsx)("div",{className:"city_name rating",children:e.rating_text}),Object(b.jsxs)("div",{className:"city_name rating",children:["Rs.",e.cost]}),Object(b.jsxs)("div",{className:"labelDiv",children:[Object(b.jsx)("span",{className:"label label-primary",children:e.mealTypes[0].mealtype_name})," \xa0",Object(b.jsx)("span",{className:"label label-success",children:e.mealTypes[1].mealtype_name})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"label label-warning",children:e.cuisines[0].cuisine_name})," \xa0",Object(b.jsx)("span",{className:"label label-danger",children:e.cuisines[1].cuisine_name})]})]})})]})},e._id)})):Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"No Data For this filter"})}):Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:"/images/loader.gif",alt:"loader"}),Object(b.jsx)("h3",{children:"loading...."})]})}(e)})},O=(n(32),"https://zomatoajulypi.herokuapp.com/filter"),p=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).filterCuisine=function(t){var n,a=sessionStorage.getItem("mealId"),s=t.target.value;n=""==s?"".concat(O,"/").concat(a):"".concat(O,"/").concat(a,"?cuisine=").concat(s),u.a.get(n).then((function(t){e.props.restPerCusinie(t.data)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"cusineFilter",children:[Object(b.jsx)("center",{children:Object(b.jsx)("h3",{children:"Cuisine Filter"})}),Object(b.jsxs)("div",{onChange:this.filterCuisine,children:[Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:""}),"All"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"1"}),"North Indian"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"2"}),"South Indian"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"3"}),"Chinese"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"4"}),"Fast Food"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"5"}),"Street Food"]})]})]})}}]),n}(a.Component),x=p,v="https://zomatoajulypi.herokuapp.com/filter",f=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).filterCost=function(t){var n,a=sessionStorage.getItem("mealId"),s=t.target.value.split("-"),c=s[0],i=s[1];n=""==t.target.value?"".concat(v,"/").concat(a):"".concat(v,"/").concat(a,"?lcost=").concat(c,"&hcost=").concat(i),u.a.get(n).then((function(t){e.props.restPerCost(t.data)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"cusineFilter",children:[Object(b.jsx)("center",{children:Object(b.jsx)("h3",{children:"Cost Filter"})}),Object(b.jsxs)("div",{onChange:this.filterCost,children:[Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:""}),"All"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"200-300"}),"201-300"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"301-600"}),"301-600"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"601-1000"}),"601-1000"]}),Object(b.jsxs)("label",{className:"radio",children:[Object(b.jsx)("input",{type:"radio",name:"cuisine",value:"1001-1500"}),"1001-1500"]})]})]})}}]),n}(a.Component),g=f,y=(n(67),function(){return Object(b.jsx)("header",{id:"header",children:Object(b.jsxs)("div",{id:"logo_main",children:[Object(b.jsx)(i.b,{to:"/",children:Object(b.jsx)("h1",{id:"headingListing",children:"E!"})}),Object(b.jsx)(i.b,{to:"/viewOrder",children:"Orders"})]})})}),N=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this)).setDataAsPerFilter=function(e){a.setState({restaurantList:e})},a.state={restaurantList:""},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)(y,{}),Object(b.jsxs)("div",{id:"mainListing",children:[Object(b.jsxs)("div",{id:"filter",children:[Object(b.jsx)("center",{children:Object(b.jsx)("h2",{children:"Filter"})}),Object(b.jsx)(x,{restPerCusinie:function(t){e.setDataAsPerFilter(t)}}),Object(b.jsx)("hr",{}),Object(b.jsx)(g,{restPerCost:function(t){e.setDataAsPerFilter(t)}}),Object(b.jsx)("hr",{})]}),Object(b.jsx)(m,{listData:this.state.restaurantList})]})]})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.mealId;sessionStorage.setItem("mealId",t),u.a.get("".concat("https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id=").concat(t)).then((function(t){e.setState({restaurantList:t.data})}))}}]),n}(a.Component),C=(n(68),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this)).renderCity=function(e){if(e)return e.map((function(e){return Object(b.jsx)("option",{value:e.state_id,children:e.state},e.state_id)}))},a.renderRestaurants=function(e){if(e)return e.map((function(e){return Object(b.jsxs)("option",{value:e.restaurant_id,children:[e.restaurant_name," | ",e.address]})}))},a.handleCity=function(e){console.log(e.target.value);var t=e.target.value;fetch("".concat("https://zomatoajulypi.herokuapp.com/restaurant?stateId=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(e){a.setState({restaurant:e})}))},a.handleRest=function(e){a.props.history.push("/details/".concat(e.target.value))},a.state={location:"",restaurant:""},a}return Object(o.a)(n,[{key:"render",value:function(){return console.log(this.state.restaurant),Object(b.jsxs)("div",{id:"search",children:[Object(b.jsxs)("div",{id:"login",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"https://facebook.com/",children:"Login"}),"\xa0",Object(b.jsx)("a",{href:"https://youtube.com/",children:"Create an Account"})]}),Object(b.jsx)("div",{id:"logo",children:Object(b.jsx)("span",{children:"e!"})}),Object(b.jsxs)("div",{id:"heading",children:["Find The Best Rest\xe5ur\xe2nts, Caf\xe9s and b\xe4rs ",Object(b.jsx)("span",{id:"usercity"})]}),Object(b.jsxs)("div",{id:"dropdown",children:[Object(b.jsxs)("select",{id:"city",onChange:this.handleCity,children:[Object(b.jsx)("option",{children:"---SELECT LOCATION---"}),this.renderCity(this.state.location)]}),Object(b.jsx)("select",{id:"restaurants",onChange:this.handleRest,children:this.renderRestaurants(this.state.restaurant)})]})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://zomatoajulypi.herokuapp.com/location",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({location:t})}))}}]),n}(a.Component)),k=Object(r.e)(C),_=(n(69),function(e){return Object(b.jsxs)("div",{id:"quicksearch",children:[Object(b.jsx)("span",{id:"QuickHeading",children:"Quick Searches"}),Object(b.jsx)("span",{id:"QuickSubHeading",children:"Discover rest\xe5ur\xe2nts by type of meal"}),Object(b.jsx)("div",{id:"mainTileContainer",children:function(e){var t=e.quickData;if(t)return t.map((function(e){return Object(b.jsx)(i.b,{to:"/list/".concat(e.mealtype_id),children:Object(b.jsxs)("div",{className:"tileContainer",children:[Object(b.jsx)("div",{className:"tileComponent1",children:Object(b.jsx)("img",{src:e.meal_image,alt:"breakfast"})}),Object(b.jsxs)("div",{className:"tileComponent2",children:[Object(b.jsx)("div",{className:"componentHeading",children:e.mealtype}),Object(b.jsx)("div",{className:"componentSubHeading",children:e.content})]})]})},e.mealtype_id)}))}(e)})]})}),I=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={QuickData:""},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)(_,{quickData:this.state.QuickData})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://zomatoajulypi.herokuapp.com/quicksearch").then((function(e){return e.json()})).then((function(t){e.setState({QuickData:t})}))}}]),n}(a.Component),S=function(){return Object(b.jsxs)("div",{id:"main",children:[Object(b.jsx)(k,{}),Object(b.jsx)(I,{})]})},w=n(22),D=n.n(w),P=n(36),L=(n(71),n(15)),A=(n(72),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).orderId=[],e.placeOrder=function(t){e.orderId.push("".concat(t)),e.props.finalOrder(e.orderId)},e.removeOrder=function(t){e.orderId.splice(e.orderId.indexOf(t.toString()),1),e.props.finalOrder(e.orderId)},e.renderMenu=function(t){var n=t.menudata;if(n)return n.map((function(t){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"col-md-7",children:[Object(b.jsx)("b",{children:t.menu_id})," \xa0",Object(b.jsx)("img",{src:t.menu_image,alt:t.menu_name,style:{height:80,width:80}}),"\xa0\xa0 ",t.menu_name," - ",t.menu_price]}),Object(b.jsxs)("div",{className:"col-md-4",children:[Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){e.placeOrder(t.menu_id)},children:Object(b.jsx)("span",{className:"glyphicon glyphicon-plus"})})," \xa0",Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){e.removeOrder(t.menu_id)},children:Object(b.jsx)("span",{className:"glyphicon glyphicon-minus"})})]}),Object(b.jsx)("br",{})]},t.menu_id)}))},e.renderCart=function(e){if(e)return e.map((function(e,t){return Object(b.jsxs)("b",{children:[" ",e," \xa0\xa0 "]},t)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"col-md-12 bg-success",children:[Object(b.jsx)("h1",{children:"Item Added"}),"Item Number ",this.renderCart(this.orderId)," added"]}),Object(b.jsx)("div",{className:"col-md-12 bg-info",children:this.renderMenu(this.props)})]})}}]),n}(a.Component)),F=Object(r.e)(A),T=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).addToCart=function(t){console.log("data in card",t),e.setState({userItem:t})},e.proceed=function(){sessionStorage.setItem("menu",e.state.userItem),e.props.history.push("/placeOrder/".concat(e.state.details.restaurant_name))},e.state={details:"",menuList:"",userItem:""},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.details;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y,{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"panel panel-danger",children:[Object(b.jsx)("div",{className:"panel-heading",children:Object(b.jsx)("h3",{children:this.state.details.restaurant_name})}),Object(b.jsxs)("div",{className:"panel-body",children:[Object(b.jsx)("img",{src:t.restaurant_thumb,alt:t.restaurant_name,className:"sliderImage"}),Object(b.jsx)("button",{className:"btn btn-danger galButton",type:"button","data-toggle":"modal","data-target":"#myGal",children:"Click to See Image Gallery"}),Object(b.jsx)("hr",{}),Object(b.jsx)("h2",{children:t.restaurant_name}),Object(b.jsx)("h2",{children:t.rating_text}),Object(b.jsxs)("h2",{children:[t.average_rating," Star"]}),Object(b.jsxs)(L.d,{children:[Object(b.jsxs)(L.b,{children:[Object(b.jsx)(L.a,{children:"Details"}),Object(b.jsx)(L.a,{children:"Contact"}),Object(b.jsx)(L.a,{children:"Menu"})]}),Object(b.jsx)(L.c,{children:Object(b.jsxs)("p",{children:[t.restaurant_name," is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]})}),Object(b.jsx)(L.c,{children:Object(b.jsx)("h2",{children:"Any content 2"})}),Object(b.jsxs)(L.c,{children:[Object(b.jsx)("h2",{children:"Menu"}),Object(b.jsx)(F,{menudata:this.state.menuList,finalOrder:function(t){e.addToCart(t)}})]})]}),Object(b.jsx)("button",{className:"btn btn-success",onClick:this.proceed,children:"Proceed"})]})]})})]})}},{key:"componentDidMount",value:function(){var e=Object(P.a)(D.a.mark((function e(){var t,n,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.restId,e.next=3,u.a.get("".concat("https://zomatoajulypi.herokuapp.com/details","/").concat(t));case 3:return n=e.sent,e.next=6,u.a.get("".concat("https://zomatoajulypi.herokuapp.com/menu","/").concat(t));case 6:a=e.sent,console.log(n.data),console.log(a.data),this.setState({details:n.data[0],menuList:a.data});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(a.Component),z=T,M=n(37),R=(n(73),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(M.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){fetch("https://zomatoajulypi.herokuapp.com/placeOrder",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(a.state)}).then(a.props.history.push("/viewOrder"))},a.renderItems=function(e){return e?e.map((function(e){return Object(b.jsxs)("div",{className:"items",children:[Object(b.jsx)("img",{src:e.menu_image,alt:e.menu_name}),Object(b.jsx)("h3",{children:e.menu_name}),Object(b.jsxs)("h4",{children:["Rs ",e.menu_price]})]},e.menu_id)})):Object(b.jsx)("img",{src:"/images/loader.gif",alt:"loader"})},a.state={details:"",tPrice:"",hotel_name:a.props.match.params.restName,name:"",phone:"",email:"",address:"",status:"Pending"},a}return Object(o.a)(n,[{key:"render",value:function(){return console.log(this.state),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(y,{}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"panel panel-info",children:[Object(b.jsx)("div",{className:"panel-heading",children:Object(b.jsxs)("h3",{children:["Your order from ",this.props.match.params.restName," is below:"]})}),Object(b.jsxs)("div",{className:"panel-body",children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Name"}),Object(b.jsx)("input",{className:"form-control",name:"name",value:this.state.name,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"EmailId"}),Object(b.jsx)("input",{className:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Phone"}),Object(b.jsx)("input",{className:"form-control",name:"phone",value:this.state.phone,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Address"}),Object(b.jsx)("input",{className:"form-control",name:"address",value:this.state.address,onChange:this.handleChange})]})})]})}),this.renderItems(this.state.details),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("h2",{children:["Total Cost is Rs.",this.state.tPrice]})})}),Object(b.jsx)("button",{className:"btn btn-success",onClick:this.handleSubmit,children:"Checkout"})]})]})]})}},{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("menu"),n=[];t.split(",").map((function(e){return n.push(parseInt(e)),"ok"})),fetch("https://zomatoajulypi.herokuapp.com/menuItem",{method:"POST",headers:{accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){var n=0;t.map((function(e){return n+=parseInt(e.menu_price),"ok"})),e.setState({details:t,tPrice:n})}))}}]),n}(a.Component)),E=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("center",{children:Object(b.jsx)("h3",{children:"Orders"})}),Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Rest Name"}),Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Phone"}),Object(b.jsx)("th",{children:"Email"}),Object(b.jsx)("th",{children:"Address"}),Object(b.jsx)("th",{children:"Price"}),Object(b.jsx)("th",{children:"Status"})]})}),Object(b.jsx)("tbody",{children:function(e){var t=e.orderData;if(t)return t.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.hotel_name}),Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.phone}),Object(b.jsx)("td",{children:e.email}),Object(b.jsx)("td",{children:e.address}),Object(b.jsxs)("td",{children:["Rs.",e.tPrice]}),Object(b.jsx)("td",{children:e.status})]})}))}(e)})]})]})},Q=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={orders:""},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(y,{}),Object(b.jsx)(E,{orderData:this.state.orders})]})}},{key:"componentDidMount",value:function(){var e=this;u.a.get("https://zomatoajulypi.herokuapp.com/viewOrder").then((function(t){e.setState({orders:t.data})}))}}]),n}(a.Component),q=function(){return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",component:S}),Object(b.jsx)(r.a,{path:"/list/:mealId",component:N}),Object(b.jsx)(r.a,{path:"/details/:restId",component:z}),Object(b.jsx)(r.a,{path:"/placeOrder/:restName",component:R}),Object(b.jsx)(r.a,{path:"/viewOrder",component:Q})]})};c.a.render(Object(b.jsx)(q,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.cb26716d.chunk.js.map