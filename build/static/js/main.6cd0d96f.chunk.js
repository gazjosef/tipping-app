(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(42)},28:function(e,t,a){},29:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(19),r=a.n(s),o=a(2),c=(a(27),a(3)),i=a(4),m=a(6),u=a(5),d=a(7),p=(a(28),a(29),function(e){var t=e.onRouteChange,a=e.name;return e.isSignedIn?l.a.createElement(n.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-default"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar"},l.a.createElement("span",{className:"sr-only"},"Toggle navigation"),l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"})),l.a.createElement(o.b,{to:"/",className:"navbar-brand"},"FootyTips")),l.a.createElement("div",{id:"navbar",className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"nav navbar-nav"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Tips")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/comp"},"Comp"))),l.a.createElement("ul",{className:"nav navbar-nav navbar-right"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Welcome, ",a)),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/",onClick:function(){return t("Signout")}},"Sign Out"))))))):l.a.createElement(n.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-default"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar"},l.a.createElement("span",{className:"sr-only"},"Toggle navigation"),l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"})),l.a.createElement(o.b,{to:"/",className:"navbar-brand"},"FootyTips")),l.a.createElement("div",{id:"navbar",className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"nav navbar-nav navbar-right"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/",onClick:function(){return t("Signin")}},"Sign In")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/",onClick:function(){return t("Register")}},"Register")))))))}),h=(a(38),function(){return l.a.createElement(n.Fragment,null,l.a.createElement("header",{id:"header"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row text-left"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h1",null,l.a.createElement("i",{className:"fas fa-football-ball"})," Footy Tips"," ",l.a.createElement("small",null,"NRL")))))))}),E=(a(39),function(){return l.a.createElement(n.Fragment,null,l.a.createElement("footer",{id:"footer"},l.a.createElement("p",null,"Copyright Gareth Hind \xa9 2019")))}),g=a(11),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={fixtures:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://tipping-app-api.herokuapp.com/table",{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.setState({fixtures:t})})}},{key:"render",value:function(){var e=[],t=[],a=[];this.state.fixtures.map(function(e,a){return t.push(e.home)&&t.push(e.away)}),t.forEach(function(t){-1===e.indexOf(t)&&e.push(t)}),e.forEach(function(e){var t={name:e,wins:0,losses:0,homePointsScored:0,homePointsConceded:0,awayPointsScored:0,awayPointsConceded:0,points:0};a.push(t)}),this.state.fixtures.forEach(function(e){var t=a.find(function(t){return t.name===e.home}),n=a.find(function(t){return t.name===e.away});t.homePointsScored+=+parseInt(e.result_home),t.homePointsConceded+=+parseInt(e.result_away),n.awayPointsScored+=+parseInt(e.result_away),n.awayPointsConceded+=+parseInt(e.result_home),parseInt(e.result_home)>parseInt(e.result_away)&&(t.wins+=1,t.points+=2,n.losses+=1),parseInt(e.result_away)>parseInt(e.result_home)&&(n.wins+=1,n.points+=2,t.losses+=1)}),a.sort(function(e,t){return e.points<t.points?1:-1});var n=a.map(function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("th",{scope:"row"},t+1),l.a.createElement("td",null),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.wins),l.a.createElement("td",null,e.losses),l.a.createElement("td",null,e.points))});return l.a.createElement("div",{className:"SideTable"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"panel panel-default"},l.a.createElement("div",{className:"panel-heading main-color-bg"},l.a.createElement("h3",{className:"panel-title"},"League Table")),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"P"),l.a.createElement("th",{scope:"col"}),l.a.createElement("th",{scope:"col"},"Team"),l.a.createElement("th",{scope:"col"},"W"),l.a.createElement("th",{scope:"col"},"L"),l.a.createElement("th",{scope:"col"},"Pts"))),l.a.createElement("tbody",null,n)))))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={tips:[],users:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:5000/comp",{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){console.log("tips: ",t),e.setState({tips:t})}),fetch("https://tipping-app-api.herokuapp.com/fixtures",{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){console.log("fixtures: ",t),e.setState({fixtures:t})}),fetch("http://localhost:5000/users",{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){console.log("users: ",t),e.setState({users:t})})}},{key:"render",value:function(){console.log(this.state);var e=[];this.state.users.forEach(function(t){var a={name:t.name,email:t.email,wins:0,losses:0,paid:""};e.push(a)}),console.log(e);var t=e.map(function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("th",{scope:"row"},t+1),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.wins),l.a.createElement("td",null,e.losses),l.a.createElement("td",null,e.points))});return l.a.createElement("div",{className:"compTable"},l.a.createElement("div",{className:"col-md-9"},l.a.createElement("div",{className:"panel panel-default"},l.a.createElement("div",{className:"panel-heading main-color-bg"},l.a.createElement("h3",{className:"panel-title"},"Competition Table")),l.a.createElement("div",{className:"panel panel-default"},l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"P"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Email"),l.a.createElement("th",{scope:"col"},"W"),l.a.createElement("th",{scope:"col"},"L"),l.a.createElement("th",{scope:"col"},"Paid"))),l.a.createElement("tbody",null,t))))))}}]),t}(n.Component),v=(a(40),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={fixtures:[],selectedRound:""},a.selectHomeTeam=function(e){console.log("clicked"),a.selectTeam(e.target.value,"home")},a.selectAwayTeam=function(e){a.selectTeam(e.target.value,"away")},a.selectTeam=function(e,t){var n=a.state.fixtures;n[e].selection=t,a.setState({fixtures:n})},a.selectRound=function(e){console.log("round selected"),a.setState({selectedRound:e.target.value})},a.filterFixtures=function(){return a.state.fixtures.filter(function(e,t){return e.round===a.state.selectedRound})},a.onSubmitTip=function(){for(var e=a.filterFixtures(),t=0;t<e.length;++t){var n=e[t],l={userid:"gazjoseph@gmail.com",fixtureid:n.fixture_id,selection:n.selection},s=JSON.stringify(l);console.log(n),console.log(s),fetch("http://localhost:5000/tips",{method:"post",headers:{"Content-Type":"application/json"},body:s}).then(function(e){return e.json()}).then(function(e){return console.log(e)})}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://tipping-app-api.herokuapp.com/fixtures",{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.setState({fixtures:t})}),this.setState({selectedRound:"Round 1"})}},{key:"render",value:function(){var e=this,t=this.filterFixtures().map(function(t,a){return l.a.createElement("div",{key:a,className:"tipping-row"},l.a.createElement("div",{className:"squad home-squad"},l.a.createElement("div",{className:"radio home-radio"},l.a.createElement("label",{htmlFor:""},l.a.createElement("input",{type:"radio",className:"ml-2 mr-2",value:a,checked:"home"===t.selection,onChange:e.selectHomeTeam}))),l.a.createElement("div",{className:"home-name"},t.home),l.a.createElement("div",{className:"home-logo"}),l.a.createElement("div",{className:"home-score"}," ",t.resulthome)),l.a.createElement("div",{className:"game-details text-center"},l.a.createElement("div",{className:"game-date"},t.day,"  ",t.date),l.a.createElement("div",{className:"game-time"},t.time),l.a.createElement("div",{className:"game-venue"},t.stadium)),l.a.createElement("div",{className:"squad away-squad text-right"},l.a.createElement("div",{className:"away-score"},t.resultaway),l.a.createElement("div",{className:"away-logo"}),l.a.createElement("div",{className:"away-name"},t.away),l.a.createElement("div",{className:"radio away-radio"},l.a.createElement("label",{htmlFor:""},l.a.createElement("input",{type:"radio",className:"ml-2 mr-2",value:a,checked:"away"===t.selection,onChange:e.selectAwayTeam})))))}),a=[];return this.state.fixtures.map(function(e){return e.round}).forEach(function(e){-1===a.indexOf(e)&&a.push(e)}),l.a.createElement("div",{className:"col-md-9"},l.a.createElement("div",{className:"panel panel-default"},l.a.createElement("div",{className:"panel-heading main-color-bg"},l.a.createElement("h3",{className:"panel-title"},"Latest Tips")),l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"tipping-container"},l.a.createElement("div",{className:"form-group select-round"},l.a.createElement("label",{htmlFor:"gender"},"Select Round"),l.a.createElement("select",{className:"form-control text-right",id:"selectRound",onChange:this.selectRound,value:this.state.selectedRound},a.map(function(t,a){return l.a.createElement("option",{key:a,className:e.state.selectedRound===t?"selected":""},t)}))),t,l.a.createElement("div",{className:"submit-button text-right"},l.a.createElement("button",{onClick:this.onSubmitTip,type:"submit",className:"btn btn-default"},"Submit"))))))}}]),t}(n.Component)),N=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(o.a,null,l.a.createElement("section",{id:"main"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(f,null),l.a.createElement(g.c,null,l.a.createElement(g.a,{exact:!0,path:"/",component:v}),l.a.createElement(g.a,{exact:!0,path:"/comp",component:b})))))))},y=(a(41),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("https://tipping-app-api.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then(function(e){return e.json()}).then(function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("Dashboard"))})},a.state={signInEmail:"",signInPassword:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"form-signin"},l.a.createElement("h2",{className:"form-signin-heading"},"Sign In"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputEmail",className:"sr-only"},"Email address"),l.a.createElement("input",{onChange:this.onEmailChange,type:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",required:!0,autoFocus:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputPassword",className:"sr-only"},"Password"),l.a.createElement("input",{onChange:this.onPasswordChange,type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0})),l.a.createElement("button",{onClick:this.onSubmitSignIn,className:"btn btn-lg btn-primary btn-block",type:"submit"},"Sign in"),l.a.createElement("button",{onClick:function(){return e("Register")},className:"btn btn-lg btn-danger btn-block",type:"submit"},"Register")))}}]),t}(n.Component)),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("https://tipping-app-api.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.state.name,email:a.state.email,password:a.state.password})}).then(function(e){return e.json()}).then(function(e){e&&(a.props.loadUser(e),a.props.onRouteChange("Dashboard"))})},a.state={name:"",email:"",password:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"form-signin"},l.a.createElement("h2",{className:"form-signin-heading"},"Register"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputName"},"Name"),l.a.createElement("input",{onChange:this.onNameChange,type:"text",id:"inputName",name:"name",className:"form-control",placeholder:"Enter name",required:!0,autoFocus:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputEmail"},"Email address"),l.a.createElement("input",{onChange:this.onEmailChange,type:"email",id:"inputEmail",className:"form-control",placeholder:"Enter email address",required:!0,autoFocus:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputPassword"},"Password"),l.a.createElement("input",{onChange:this.onPasswordChange,type:"password",id:"inputPassword",className:"form-control",placeholder:"Enter password",required:!0})),l.a.createElement("button",{onClick:this.onSubmitSignIn,className:"btn btn-lg btn-primary btn-block pointer",type:"submit",value:"register"},"Register")))}}]),t}(l.a.Component),C=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.onRouteChange=function(t){"Signout"===t?e.setState({isSignedIn:!1}):"Dashboard"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={route:"Signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.route;return l.a.createElement("div",{className:"App"},l.a.createElement(p,{isSignedIn:t,name:this.state.user.name,onRouteChange:this.onRouteChange}),l.a.createElement(h,null),"Dashboard"===a?l.a.createElement(N,null):"Signin"===a?l.a.createElement(y,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):l.a.createElement(w,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}),l.a.createElement(E,null))}}]),t}(n.Component);r.a.render(l.a.createElement(o.a,null,l.a.createElement(C,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.6cd0d96f.chunk.js.map