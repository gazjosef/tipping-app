(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,a,t){},,,,function(e,a,t){e.exports=t(38)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(14),s=t.n(o),l=t(6),c=(t(22),t(23),t(1)),i=t(2),m=t(4),u=t(3),d=t(5),p=(t(24),t(25),function(e){var a=e.onRouteChange,t=e.name;return e.isSignedIn?r.a.createElement("div",{className:"NavBar"},r.a.createElement("nav",{className:"navbar navbar-default"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar"},r.a.createElement("span",{className:"sr-only"},"Toggle navigation"),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement(l.b,{to:"/",className:"navbar-brand"},"FootyTips")),r.a.createElement("div",{id:"navbar",className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"Welcome, ",t)),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/",onClick:function(){return a("Signout")}},"Sign Out"))))))):r.a.createElement("div",{className:"NavBar"},r.a.createElement("nav",{className:"navbar navbar-default"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar"},r.a.createElement("span",{className:"sr-only"},"Toggle navigation"),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement(l.b,{to:"/",className:"navbar-brand"},"FootyTips")),r.a.createElement("div",{id:"navbar",className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/",onClick:function(){return a("Signin")}},"Sign In")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/",onClick:function(){return a("Register")}},"Register")))))))}),h=(t(34),function(){return r.a.createElement("div",null,r.a.createElement("header",{id:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row text-left"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-football-ball"})," Footy Tips"," ",r.a.createElement("small",null,"NRL")))))))}),f=(t(35),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("footer",{id:"footer"},r.a.createElement("p",null,"Copyright Gareth Hind \xa9 2019")))}}]),a}(n.Component)),g=(t(36),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Breadcrumb"},r.a.createElement("section",{id:"breadcrumb"},r.a.createElement("div",{className:"container text-left"},r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("li",{className:"active"},"Dashboard")))))}}]),a}(n.Component)),E=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={fixtures:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://tipping-app-api.herokuapp.com/table",{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(a){e.setState({fixtures:a})})}},{key:"render",value:function(){var e=[],a=[],t=[];this.state.fixtures.map(function(e,t){return a.push(e.home)&&a.push(e.away)}),a.forEach(function(a){-1===e.indexOf(a)&&e.push(a)}),e.forEach(function(e){var a={name:e,wins:0,losses:0,homePointsScored:0,homePointsConceded:0,awayPointsScored:0,awayPointsConceded:0,points:0};t.push(a)}),this.state.fixtures.forEach(function(e){var a=t.find(function(a){return a.name===e.home}),n=t.find(function(a){return a.name===e.away});a.homePointsScored+=+parseInt(e.result_home),a.homePointsConceded+=+parseInt(e.result_away),n.awayPointsScored+=+parseInt(e.result_away),n.awayPointsConceded+=+parseInt(e.result_home),parseInt(e.result_home)>parseInt(e.result_away)&&(a.wins+=1,a.points+=2,n.losses+=1),parseInt(e.result_away)>parseInt(e.result_home)&&(n.wins+=1,n.points+=2,a.losses+=1)}),t.sort(function(e,a){return e.points<a.points?1:-1});var n=t.map(function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("th",{scope:"row"},a+1),r.a.createElement("td",null),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.wins),r.a.createElement("td",null,e.losses),r.a.createElement("td",null,e.points))});return r.a.createElement("div",{className:"SideTable"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading main-color-bg"},r.a.createElement("h3",{className:"panel-title"},"League Table")),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"P"),r.a.createElement("th",{scope:"col"}),r.a.createElement("th",{scope:"col"},"Team"),r.a.createElement("th",{scope:"col"},"W"),r.a.createElement("th",{scope:"col"},"L"),r.a.createElement("th",{scope:"col"},"Pts"))),r.a.createElement("tbody",null,n)))))}}]),a}(n.Component),b=(n.Component,t(13),n.Component,function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).selectHomeTeam=function(e){console.log("clicked"),t.selectTeam(e.target.value,"home")},t.selectAwayTeam=function(e){t.selectTeam(e.target.value,"away")},t.selectTeam=function(e,a){var n=t.state.fixtures;n[e].selection=a,t.setState({fixtures:n})},t.selectRound=function(e){console.log("round selected"),t.setState({selectedRound:e.target.value})},t.filterFixtures=function(){return t.state.fixtures.filter(function(e,a){return e.round===t.state.selectedRound})},t.onSubmitTip=function(){for(var e=t.filterFixtures(),a=0;a<e.length;++a){var n=e[a],r={userid:"gazjoseph@gmail.com",fixtureid:n.fixture_id,selection:n.selection},o=JSON.stringify(r);console.log(n),console.log(o),fetch("http://localhost:5000/tips",{method:"post",headers:{"Content-Type":"application/json"},body:o}).then(function(e){return e.json()}).then(function(e){return console.log(e)})}},t.state={fixtures:[],selectedRound:""},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://tipping-app-api.herokuapp.com/fixtures",{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(a){console.log("fixtures: ",a),e.setState({fixtures:a})}),this.setState({selectedRound:"Round 1"})}},{key:"render",value:function(){var e=this,a=this.filterFixtures().map(function(a,t){return r.a.createElement("div",{key:t,className:"tipping-row"},r.a.createElement("div",{className:"squad home-squad"},r.a.createElement("div",{className:"radio home-radio"},r.a.createElement("label",{htmlFor:""},r.a.createElement("input",{type:"radio",className:"ml-2 mr-2",value:t,checked:"home"===a.selection,onChange:e.selectHomeTeam}))),r.a.createElement("div",{className:"home-name"},a.home),r.a.createElement("div",{className:"home-logo"}),r.a.createElement("div",{className:"home-score"}," ",a.resulthome)),r.a.createElement("div",{className:"game-details text-center"},r.a.createElement("div",{className:"game-date"},a.day,"  ",a.date),r.a.createElement("div",{className:"game-time"},a.time),r.a.createElement("div",{className:"game-venue"},a.stadium)),r.a.createElement("div",{className:"squad away-squad text-right"},r.a.createElement("div",{className:"away-score"},a.resultaway),r.a.createElement("div",{className:"away-logo"}),r.a.createElement("div",{className:"away-name"},a.away),r.a.createElement("div",{className:"radio away-radio"},r.a.createElement("label",{htmlFor:""},r.a.createElement("input",{type:"radio",className:"ml-2 mr-2",value:t,checked:"away"===a.selection,onChange:e.selectAwayTeam})))))}),t=[];return this.state.fixtures.map(function(e){return e.round}).forEach(function(e){-1===t.indexOf(e)&&t.push(e)}),console.log(t),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading main-color-bg"},r.a.createElement("h3",{className:"panel-title"},"Latest Tips")),r.a.createElement("div",{className:"panel-body"},r.a.createElement("div",{className:"tipping-container"},r.a.createElement("div",{className:"form-group select-round"},r.a.createElement("label",{htmlFor:"gender"},"Select Round"),r.a.createElement("select",{className:"form-control text-right",id:"selectRound",onChange:this.selectRound,value:this.state.selectedRound},t.map(function(a,t){return r.a.createElement("option",{key:t,className:e.state.selectedRound===a?"selected":""},a)}))),a,r.a.createElement("div",{className:"submit-button text-right"},r.a.createElement("button",{onClick:this.onSubmitTip,type:"submit",className:"btn btn-default"},"Submit"))))))}}]),a}(n.Component)),v=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Dashboard"},r.a.createElement("section",{id:"main"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(g,null),r.a.createElement(E,null),r.a.createElement(b,null)))))}}]),a}(n.Component),N=(t(37),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).onEmailChange=function(e){t.setState({signInEmail:e.target.value})},t.onPasswordChange=function(e){t.setState({signInPassword:e.target.value})},t.onSubmitSignIn=function(){fetch("https://tipping-app-api.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.state.signInEmail,password:t.state.signInPassword})}).then(function(e){return e.json()}).then(function(e){e.id&&(t.props.loadUser(e),t.props.onRouteChange("Dashboard"))})},t.state={signInEmail:"",signInPassword:""},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"form-signin"},r.a.createElement("h2",{className:"form-signin-heading"},"Sign In"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"Email address"),r.a.createElement("input",{onChange:this.onEmailChange,type:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",required:!0,autoFocus:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputPassword",className:"sr-only"},"Password"),r.a.createElement("input",{onChange:this.onPasswordChange,type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0})),r.a.createElement("button",{onClick:this.onSubmitSignIn,className:"btn btn-lg btn-primary btn-block",type:"submit"},"Sign in"),r.a.createElement("button",{onClick:function(){return e("Register")},className:"btn btn-lg btn-danger btn-block",type:"submit"},"Register")))}}]),a}(n.Component)),y=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).onNameChange=function(e){t.setState({name:e.target.value})},t.onEmailChange=function(e){t.setState({email:e.target.value})},t.onPasswordChange=function(e){t.setState({password:e.target.value})},t.onSubmitSignIn=function(){fetch("https://tipping-app-api.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t.state.name,email:t.state.email,password:t.state.password})}).then(function(e){return e.json()}).then(function(e){e&&(t.props.loadUser(e),t.props.onRouteChange("Dashboard"))})},t.state={name:"",email:"",password:""},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"form-signin"},r.a.createElement("h2",{className:"form-signin-heading"},"Register"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputName"},"Name"),r.a.createElement("input",{onChange:this.onNameChange,type:"text",id:"inputName",name:"name",className:"form-control",placeholder:"Enter name",required:!0,autoFocus:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputEmail"},"Email address"),r.a.createElement("input",{onChange:this.onEmailChange,type:"email",id:"inputEmail",className:"form-control",placeholder:"Enter email address",required:!0,autoFocus:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputPassword"},"Password"),r.a.createElement("input",{onChange:this.onPasswordChange,type:"password",id:"inputPassword",className:"form-control",placeholder:"Enter password",required:!0})),r.a.createElement("button",{onClick:this.onSubmitSignIn,className:"btn btn-lg btn-primary btn-block pointer",type:"submit",value:"register"},"Register")))}}]),a}(r.a.Component),w=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(m.a)(this,Object(u.a)(a).call(this))).loadUser=function(a){e.setState({user:{id:a.id,name:a.name,email:a.email,entries:a.entries,joined:a.joined}})},e.onRouteChange=function(a){"Signout"===a?e.setState({isSignedIn:!1}):"Dashboard"===a&&e.setState({isSignedIn:!0}),e.setState({route:a})},e.state={route:"Signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.isSignedIn,t=e.route;return r.a.createElement("div",{className:"App"},r.a.createElement(p,{isSignedIn:a,name:this.state.user.name,onRouteChange:this.onRouteChange}),r.a.createElement(h,null),"Dashboard"===t?r.a.createElement(v,null):"Signin"===t?r.a.createElement(N,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):r.a.createElement(y,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}),r.a.createElement(f,null))}}]),a}(n.Component),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(l.a,null,r.a.createElement(w,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/tipping-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/tipping-app","/service-worker.js");C?(function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):j(e)})}}()}],[[17,1,2]]]);
//# sourceMappingURL=main.861e6dcd.chunk.js.map