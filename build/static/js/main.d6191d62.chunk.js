(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(57)},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),c=a.n(r),o=a(60),u=a(58),i=(a(31),a(62)),s=a(59),m=a(61),d=function(){return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(m.a,{exact:!0,to:"/",className:"NLink",activeClassName:"NLink-active"},"HOME")),l.a.createElement("li",null,l.a.createElement(m.a,{to:"/contacts",className:"NLink",activeClassName:"NLink-active"},"CONTACTS")),l.a.createElement("li",null,l.a.createElement(m.a,{to:"/about",className:"NLink",activeClassName:"NLink-active"},"ABOUT"))),l.a.createElement("hr",null))},h=function(){return l.a.createElement("h1",null,'HERE IS CONTENT "HOME"')},p=a(6),v=a(7),E=a(9),f=a(8),b=a(10),g=a(12),N=a.n(g);N.a.defaults.baseUrl="http://localhost:3001/users";var y="http://localhost:3001/users",O=function(e){return N.a.delete("".concat(y,"/").concat(e)).then(function(e){return 200===e.status})},C=function(e){return N.a.post(y,e).then(function(e){return e.data})},k=function(e){var t=e.user,a=e.update,n=e.index;return l.a.createElement("tr",{onClick:function(){return a({active:n})}},l.a.createElement("td",null,l.a.createElement("img",{src:"../../media/".concat(t.image,".jpg"),alt:"",className:"user-image"})),l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.phone))},M=function(e){var t=e.data,a=e.update;if(!t)return l.a.createElement("p",null,"Loading...");var n=t.map(function(e,t){return l.a.createElement(k,{user:e,index:t,key:"user-".concat(t),update:a})});return l.a.createElement("table",{className:"user-list table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Image"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Phone"))),l.a.createElement("tbody",null,n))},j=function(e){var t=e.data,a=e.active;if(!t||!t[a])return l.a.createElement("h4",null," Nothing found :(");var n=t[a];return l.a.createElement("div",{className:"thumbnail"},l.a.createElement("img",{src:"../../media/".concat(n.image,".jpg"),alt:""}),l.a.createElement("div",{className:"thumbnail-caption"},l.a.createElement("h3",null,n.name),l.a.createElement("table",{className:"user-info table table-responsive"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Favorite animal:"),l.a.createElement("td",null,n.image)),l.a.createElement("tr",null,l.a.createElement("td",null,"Phone:"),l.a.createElement("td",null,n.phone)))),l.a.createElement("p",null,l.a.createElement("b",null,"Favorite phrase: "),n.phrase)))},w=function(e){var t=e.dataSearch,a=e.term,n=e.data,r=e.update;return t=function(e){var t=e.target.value.toLowerCase(),a=n.filter(function(e){return e.name.toLowerCase().includes(t)});r({data:a,active:0,term:t})},l.a.createElement("div",{className:"searchbar form-group"},l.a.createElement("input",{value:a,type:"text",className:"form-control",placeholder:"Search people by name...",onChange:t}))},S=a(13),D={name:"",phone:"",phrase:""},P=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state=Object(S.a)({},D),a.handleKeyPress=function(e){"Escape"===e.code&&a.props.closeModal()},a.reset=function(){a.setState(Object(S.a)({},D))},a.handleSubmit=function(e){var t=a.props,n=t.data,l=t.update;(0,t.closeModal)(),N.a.put("http://localhost:3001/users/".concat(e.id),{name:e.name,phone:e.phone,image:e.image}).then(function(e){l({data:n,active:0})})},a.handleChangeName=function(e){var t=a.props,n=t.data,l=t.active;a.setState({name:e.target.value}),n[l].name=e.target.value},a.handleChangePhrase=function(e){var t=a.props,n=t.data,l=t.active;a.setState({phrase:e.target.value}),n[l].phrase=e.target.value},a.handleChange2=function(e){var t=a.props,n=t.data,l=t.active;a.setState({phone:e.target.value});e.target.value.match(/[(]\d{3}[)]\d{3}[-]\d{2}[-]\d{2}/g)&&(n[l].phone=e.target.value)},a}return Object(b.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this,t=this.props,a=t.closeModal,n=t.data,r=t.active,c=this.state,o=c.name,u=c.phone,i=c.phrase;return l.a.createElement("div",{className:"FormModal"},l.a.createElement("input",{type:"text",name:"name",value:o,onChange:function(t){return e.handleChangeName(t)},placeholder:"Name and Surname"}),l.a.createElement("br",null),l.a.createElement("label",null,"\u2116 \u0442\u0435\u043b. \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 (111)111-11-11"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"phoneNumber",value:u,onChange:function(t){return e.handleChange2(t)},placeholder:"Phone Number"}),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"phrase",value:i,onChange:function(t){return e.handleChangePhrase(t)},placeholder:"Favorite Phrase"}),l.a.createElement("br",null),l.a.createElement("button",{type:"button",onClick:a},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"),l.a.createElement("button",{type:"button",onClick:function(){return e.handleSubmit(n[r])}},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435"))}}]),t}(n.Component),L=a(16),x={name:"",phone:"",phrase:""},A=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state=Object(S.a)({},x),a.handleKeyPress=function(e){"Escape"===e.code&&a.props.closeModal()},a.reset=function(){a.setState(Object(S.a)({},x))},a.handleSubmit=function(e,t){var n=a.props,l=n.closeModal,r=n.load;l(),t.preventDefault(),C(e).then(function(e){r()})},a.handleChange1=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(L.a)({},n,l))},a.handleChange2=function(e){a.setState({phone:e.target.value.match(/[(]\d{3}[)]\d{3}[-]\d{2}[-]\d{2}/g)})},a}return Object(b.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this,t=this.props.closeModal,a=this.state,n=a.name,r=a.phone,c=a.phrase;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(t){return e.handleSubmit({name:n,phone:r,phrase:c},t)}},l.a.createElement("input",{type:"text",name:"name",value:n,onChange:this.handleChange1,placeholder:"Name and Surname"}),l.a.createElement("br",null),l.a.createElement("label",null,"\u2116 \u0442\u0435\u043b. \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 (111)111-11-11"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"phoneNumber",value:r,onChange:function(t){return e.handleChange2(t)},placeholder:"Phone Number"}),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"phrase",value:c,onChange:this.handleChange1,placeholder:"Favorite Phrase"}),l.a.createElement("br",null),l.a.createElement("button",{type:"button",onClick:t},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"),l.a.createElement("button",{type:"submit"},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435")))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={isModalOpen1:!1,isModalOpen2:!1,isSignAdd:!1},a.openModal1=function(){return a.setState({isModalOpen1:!0,isModalOpen2:!1})},a.openModal2=function(){return a.setState({isModalOpen2:!0,isModalOpen1:!1})},a.closeModal=function(){return a.setState({isModalOpen1:!1,isModalOpen2:!1})},a.rem=function(e){var t=a.props,n=t.data,l=t.update;n.find(function(t){return t.id===e.id})&&O(e.id).then(function(t){t&&l({data:n.filter(function(t){return t.id!==e.id}),active:0})})},a}return Object(b.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.isModalOpen1,n=t.isModalOpen2,r=this.props,c=r.update,o=r.data,u=r.active,i=r.load;return l.a.createElement("div",{className:"toolbar"},l.a.createElement("button",{className:"btn btn-default",onClick:function(){return e.rem(o[u])}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),l.a.createElement("button",{className:"btn btn-default",onClick:function(){return e.openModal1()}},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),l.a.createElement("button",{className:"btn btn-default",onClick:function(){return e.openModal2()}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),a&&l.a.createElement(P,{closeModal:this.closeModal,data:o,active:u,update:c}),n&&l.a.createElement(A,{closeModal:this.closeModal,data:o,load:i}))}}]),t}(n.Component),K=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={users:[],data:null,term:"",active:0},a}return Object(b.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;N.a.get(y).then(function(e){return e.data}).then(function(t){e.initialData=t,e.setState({data:e.initialData})})}},{key:"updateData",value:function(e){this.setState(e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"app container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(w,{term:this.state.term,data:this.initialData,update:this.updateData.bind(this)}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(T,{data:this.state.data,active:this.state.active,update:this.updateData.bind(this),load:this.loadData.bind(this)}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4 col-md-3 col-lg-2"},l.a.createElement(j,{data:this.state.data,active:this.state.active})),l.a.createElement("div",{className:"col-sm-8 col-md-9 col-lg-10"},l.a.createElement(M,{data:this.state.data,update:this.updateData.bind(this)}))))}}]),t}(n.Component),F=function(){return l.a.createElement("h1",null,'HERE IS CONTENT "ABOUT"')};a(55);c.a.render(l.a.createElement(o.a,null,l.a.createElement(u.a,{component:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(i.a,null,l.a.createElement(u.a,{path:"/",exact:!0,component:h}),l.a.createElement(u.a,{path:"/contacts",component:K}),l.a.createElement(u.a,{path:"/about",component:F}),l.a.createElement(s.a,{to:"/"})))}})),document.querySelector("#root"))}},[[26,2,1]]]);
//# sourceMappingURL=main.d6191d62.chunk.js.map