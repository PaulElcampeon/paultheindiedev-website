(this["webpackJsonpxeno-wolf-game-studios"]=this["webpackJsonpxeno-wolf-game-studios"]||[]).push([[0],{28:function(e,t,a){e.exports=a(40)},33:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(12),l=a.n(o),r=(a(33),a(4)),s=a(8),m=function(e){return{type:"UPDATE_TOKEN",token:e}},c=function(e){return{type:"UPDATE_MESSAGE",message:e}},g=function(e){return{type:"LOGGED_IN",loggedIn:e}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGED_IN":return t.loggedIn;default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_MESSAGE":return t.message;default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_TOKEN":return t.token;default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PROJECTS":return t.projects;default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGING_IN":return t.logginIn;default:return e}},A=Object(s.c)({loggingIn:f,projects:h,loggedIn:u,genericMessage:p,token:d}),E=function(e){var t=e.email,a=e.password;return t.includes(".")&&t.includes("@")&&a.length>=5},w=a(14),v=function e(){Object(w.a)(this,e),this.unsubscribeListener=null};v.storeUserData=function(e){sessionStorage.setItem("xeno-wolf-game-studios",JSON.stringify(e))},v.doesUserDataExist=function(){return sessionStorage.getItem("xeno-wolf-game-studios")},v.getUserData=function(){return JSON.parse(sessionStorage.getItem("xeno-wolf-game-studios"))},v.removeUserData=function(){v.unsubscribeListener(),sessionStorage.removeItem("xeno-wolf-game-studios")},v.updateSession=function(){v.unsubscribeListener=O.subscribe((function(){sessionStorage.setItem("xeno-wolf-game-studios",JSON.stringify(O.getState()))}))},v.restoreSession=function(){if(v.doesUserDataExist()){v.unsubscribeListener||v.updateSession();var e=v.getUserData();O.dispatch(m(e.token)),O.dispatch(g(!0)),O.dispatch(c(null))}};var k=v,b=function(e){return function(e){return function(t){switch(t.type){case"LOGIN":E(t.credential)?(a=t.credential,fetch("/user/authenticate",{method:"post",body:JSON.stringify(a),headers:{Accept:"application/json","Content-Type":"application/json"}})).then((function(e){return e.json()})).then((function(e){e.status&&202!==e.status?O.dispatch(c("Something wrong happened")):(k.updateSession(),O.dispatch(m(e.jwt)),O.dispatch(g(!0)),O.dispatch(c(null)))})).catch((function(e){console.log(e.message),O.dispatch(c("Something wrong happened"))})):O.dispatch(c("Credentials are not valid"));break;default:e(t)}var a}}},_=function(e){return function(e){return function(t){switch(t.type){case"LOGOUT":O.dispatch(g(!1)),O.dispatch(m(null)),O.dispatch(c(null)),k.removeUserData();break;default:e(t)}}}},y=[{title:"Stimp's Rage",releaseInfo:"Realase: In Development",gameImages:[{image:"../../../game_img/Stimps_Rage/pic_1.png"},{image:"../../../game_img/Stimps_Rage/pic_2.png"},{image:"../../../game_img/Stimps_Rage/pic_3.png"}],gameInfo:"Stimp's Rage is a 2D top down action adventure game with role playing elements, set in America during the 80's. A mass shooting has taken place and Stimp's family were killed by the masked gun men. This is the story of how Stimp, an officer of the Stonerville police department, goes undercover as a gang member to try to exact revenge on those that killed his wife and kids however he later finds out that the people he had worked alongside with who were his friends and team mates, are the ones who carried out that brutal shooting that killed his family. He becomes aware of how corrupt the police force are and in turn, slowly starts to corrupt him self and work for the gang which he thought was to blame.",itchioLink:"",downloadLink:[{link:""},{link:""}]},{title:"Deriko Delta",releaseInfo:"Realase: 18th of June 2020",gameImages:[{image:"../../../game_img/Deriko_Delta/pic_1.png"},{image:"../../../game_img/Deriko_Delta/pic_2.png"},{image:"../../../game_img/Deriko_Delta/pic_3.png"}],gameInfo:"Deriko Delta is a 2D top down survivor strategy game with the main aim of protecting your core from being destroyed by the waves of enemies. If you manage to get upto the 20th wave and neutralize the enemies without your core being destroyed, then you would have successfully completed the game.",downloadLink:[{link:"../downloads/deriko_delta_window.zip"},{link:"../downloads/deriko_delta_mac.zip"}],itchioLink:"https://paultheindiedev.itch.io/deriko-delta"},{title:"Apparition",releaseInfo:"Realase: 16th of May 2020",gameImages:[{image:"../../../game_img/Apparition/pic_1.png"},{image:"../../../game_img/Apparition/pic_2.png"},{image:"../../../game_img/Apparition/pic_3.png"},{image:"../../../game_img/Apparition/pic_4.png"},{image:"../../../game_img/Apparition/pic_5.png"},{image:"../../../game_img/Apparition/pic_6.png"},{image:"../../../game_img/Apparition/pic_7.png"}],gameInfo:"Apparition is a 2D puzzle platformer that had its intial conception and development, during The Global Game Jam which is held every year between 29th - 31st of January. This was first game I worked on as a programmer using the Unity Engine and ignited a passion for game development. I worked on this game with a group of 8 other indivduals, illustrators, animators, sound engineers, project managers, level designers and other programmers. \nGhosts always have unfinished business. For Hector, he feels he needs to make things right with his family before he can move on, having hurt each of them in small ways before his untimely and unexpected passing. You play as Hector\u2019s apparition, working to reconcile with each member of your family in the hopes of moving on to the afterlife. But be careful! If your family sees you possessing and moving objects, they will become fearful and call a priest to exorcise you!",downloadLink:[{link:"../downloads/apparition_window.zip"},{link:"../downloads/apparition_mac.zip"}],itchioLink:"https://unfinished.itch.io/apparition"},{title:"Light The Way",releaseInfo:"Realase: 10th of May 2020",gameImages:[{image:"../../../game_img/Light_The_Way/pic_4.png"},{image:"../../../game_img/Light_The_Way/pic_1.png"},{image:"../../../game_img/Light_The_Way/pic_2.png"},{image:"../../../game_img/Light_The_Way/pic_3.png"}],gameInfo:"Light The Way is a 2D puzzle platform with the main goal of the game being to get the player to the pace of refuge. The player is able to reach the refuge by traversing the platforms however the play is only able to see a small radius of what is around them. The player has to throw lights into the in order to light the path before them so they dont make a mistake and fall to their doom. The player also has to be on the lookout for the enemies that lurk in the shadow that move ever so close to you with each second.",downloadLink:[{link:"../downloads/light_the_way_window.zip"},{link:"../downloads/light_the_way_mac.zip"}],itchioLink:"https://paultheindiedev.itch.io/light-the-way"},{title:"Tribeka",releaseInfo:"Realase: 2nd of June 2020",gameImages:[{image:"../../../game_img/Tribeka/pic_1.png"},{image:"../../../game_img/Tribeka/pic_2.png"}],gameInfo:"Tribeka is a 2D puzzle game, with the main goal of the game being to get from the entrance to the exit of the level without being hit be the lazers attached to the enemy patrols. The levels are randomly generated with few constraints on level generation",downloadLink:[{link:"../downloads/tribeka_window.zip"},{link:"../downloads/tribeka_mac.zip"}],itchioLink:"https://paultheindiedev.itch.io/tribeka"},{title:"Brokul",releaseInfo:"Realase: 29th of May 2020",gameImages:[{image:"../../../game_img/Brokul/pic_1.png"},{image:"../../../game_img/Brokul/pic_2.png"},{image:"../../../game_img/Brokul/pic_3.png"},{image:"../../../game_img/Brokul/pic_4.png"}],gameInfo:"Brokul is a 2D puzzle game, with the main goal to get your little one (white square) to the yellow square, which can be reached by you, the player creating the path for your little one, by click on the squares to make them dissapear underneath yorur little one. The levels are randomly generated and there is always a solution for each level as a breadth first search is used verify that each generated level has a possible solution.",downloadLink:[{link:"../downloads/brokul_window.zip"},{link:"../downloads/brokul_mac.zip"}],itchioLink:"https://paultheindiedev.itch.io/brokul"},{title:"Tokembu",releaseInfo:"Realase: 22nd of May 2020",gameImages:[{image:"../../../game_img/Tokembu/pic_3.png"},{image:"../../../game_img/Tokembu/pic_1.png"},{image:"../../../game_img/Tokembu/pic_2.png"},{image:"../../../game_img/Tokembu/pic_4.png"}],gameInfo:"Tokembu is a 2D puzzle game with the main goal being to get the correct coloured balls into their corresponding sockets. The levels are randomly generated with ablls having varying speeds which helps create the challnege as the difficulty increases.",downloadLink:[{link:"../downloads/tokembu_window.zip"},{link:"../downloads/tokembu_mac.zip"}],itchioLink:"https://paultheindiedev.itch.io/tokembu"}],I=function(e){return function(e){return function(t){switch(t.type){case"GET_PROJECTS":O.dispatch({type:"UPDATE_PROJECTS",projects:y});break;default:e(t)}}}},D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,O=Object(s.e)(A,D(Object(s.a)(b,_,I))),S=(a(38),a(9)),T=a(2),N=a(22),L=function(e){var t=e.image;return i.a.createElement("div",{className:"each-slide"},i.a.createElement("div",{style:{backgroundImage:"url(".concat(t,")")}}))},C={duration:5e3,transitionDuration:500,infinite:!0,indicators:!0,arrows:!0,pauseOnHover:!0,onChange:function(e,t){console.log("slide transition from ".concat(e," to ").concat(t))}},G=function(e){var t=e.images;return i.a.createElement("div",{className:"imageSlider-parent"},i.a.createElement("div",{className:"slide-container"},i.a.createElement(N.Slide,C,t.map((function(e,t){return i.a.createElement(L,{key:t,image:e.image})})))))},M=[{image:"../../../game_img/Apparition/pic_1.png"},{image:"../../../game_img/Tribeka/pic_1.png"},{image:"../../../game_img/Brokul/pic_1.png"},{image:"../../../game_img/Tokembu/pic_3.png"},{image:"../../../game_img/Light_The_Way/pic_4.png"},{image:"../../../game_img/Deriko_Delta/pic_2.png"},{image:"../../../game_img/Stimps_Rage/pic_1.png"}],R=function(){return i.a.createElement("div",{className:"home-parent-div"},i.a.createElement(G,{images:M}),i.a.createElement("div",{className:"personal-info"},i.a.createElement("div",{className:"personal-info-inner"},i.a.createElement("h1",null,"Introduction"),i.a.createElement("p",null,"Hello my name is Paul Oladele and this is my website."),i.a.createElement("p",null,"This website is meant to demostrate my web development skills and also to share my passion for game development.")),i.a.createElement("div",{className:"personal-info-inner"},i.a.createElement("h1",null,"Work History"),i.a.createElement("div",null,i.a.createElement("p",null,"I started work in the web develpment field in June 2018 as a technical apprentice for Gamesys Group which is an online software development and gaming business, till June 2020 when my contract ended."),i.a.createElement("p",null,"I was part of the Poker team and our main goal was to develop and maintain the Poker product."),i.a.createElement("p",null,"The poker teams front end is built using difference technologies, the lobby is built using ",i.a.createElement("span",null,"React")," and the poker table is built using ",i.a.createElement("span",null,"PixiJS"),"."),i.a.createElement("p",null,"Our backend systems were built in ",i.a.createElement("span",null,"Java")," using the ",i.a.createElement("span",null,"Spring framework"),". We used ",i.a.createElement("span",null," ActiveMQ")," as our message broker."),i.a.createElement("p",null,"During that period of time I used technologies such as:"),i.a.createElement("ul",{className:"skills-list-work-history"},i.a.createElement("li",null,"React"),i.a.createElement("li",null,"Redux"),i.a.createElement("li",null,"SASS"),i.a.createElement("li",null,"Spring"),i.a.createElement("li",null,"MongoDB")))),i.a.createElement("div",{className:"personal-info-inner"},i.a.createElement("h1",null,"Technologies"),i.a.createElement("p",null,"Technolgies used to create this website:"),i.a.createElement("ul",{className:"skills-list-personal"},i.a.createElement("li",null,"React for the UI"),i.a.createElement("li",null,"SCSS for styling"),i.a.createElement("li",null,"Redux for state management"),i.a.createElement("li",null,"Java Springboot for the backend"),i.a.createElement("li",null,"MongoDB for the database"),i.a.createElement("li",null,"Heroku to deploy the application")))),i.a.createElement("div",{className:"tools_images_holder"},i.a.createElement("div",null,i.a.createElement("img",{src:"https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png",alt:""})),i.a.createElement("div",null,i.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",alt:""})),i.a.createElement("div",null,i.a.createElement("img",{src:"https://miro.medium.com/max/1200/0*U2DmhXYumRyXH6X1.png",alt:""})),i.a.createElement("div",null,i.a.createElement("img",{src:"https://dzone.com/storage/temp/12434118-spring-boot-logo.png",alt:""})),i.a.createElement("div",null,i.a.createElement("img",{src:"https://codehustler.org/wp-content/uploads/2012/12/java_logo.png",alt:""})),i.a.createElement("div",null,i.a.createElement("img",{src:"https://www.pngkey.com/png/full/383-3838923_open-mongodb-icon.png",alt:""})),i.a.createElement("div",null,i.a.createElement("img",{src:"https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/unity-512.png",alt:""}))))},j=function(){return i.a.createElement("div",{className:"nav"},i.a.createElement("div",{className:"title"},i.a.createElement("p",null,"Paul Oladele")),i.a.createElement("div",{className:"links"},i.a.createElement("div",null,i.a.createElement(S.b,{activeClassName:"active",to:"/home"},"HOME")),i.a.createElement("div",null,i.a.createElement(S.b,{activeClassName:"active",to:"/games"},"GAMES")),i.a.createElement("div",null,i.a.createElement(S.b,{activeClassName:"active",to:"/admin"},"ADMIN"))))},B=function(e){var t=e.gameData,a=t.releaseInfo,n=t.gameImages,o=t.gameInfo,l=t.downloadLink,r=t.title;console.log(a),console.log(n),console.log(o),console.log(l);var s=function(e,t){window.location.href=t};return i.a.createElement("div",{className:"gameListItem"},i.a.createElement("div",{className:"gameListItem_left"},i.a.createElement("p",null,i.a.createElement("span",null,r)," ",a),i.a.createElement("img",{className:"gameListItem_image",alt:n[0].image,src:n[0].image})),i.a.createElement("div",{className:"gameListItem_right"},i.a.createElement("p",null,o),""!==l[0].link?i.a.createElement("button",{className:"gameListBtn windowBtn",onClick:function(){s(l[0].link)}}," DOWNLOAD WINDOW "):"",""!==l[1].link?i.a.createElement("button",{className:"gameListBtn macBtn",onClick:function(){s(l[1].link)}}," DOWNLOAD MAC "):""))},z=function(e){var t=Object(r.d)((function(e){return e})).projects;return i.a.createElement("div",null,i.a.createElement("ul",{className:"gameList_unorderedList"},t.map((function(e,t){return i.a.createElement(B,{key:t,gameData:e})}))))},J=function(){return i.a.createElement("div",null,i.a.createElement(z,null))},x=a(23),U=a(24),Q=a(27),P=a(25),H=function(e){Object(Q.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(w.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,i=t.value;n.setState(Object(x.a)({},a,i))},n.handleSubmit=function(e){e.preventDefault(),n.setState({submitted:!0});var t=n.state,a=t.username,i=t.password;a&&i&&(n.props.logginInAction(),n.props.attemptToLogin({username:a,password:i}))},n.state={username:"",password:"",submitted:!1},n}return Object(U.a)(a,[{key:"render",value:function(){var e=this.props.loggingIn,t=this.state,a=t.username,n=t.password,o=t.submitted;return i.a.createElement("div",{className:"adminDiv"},i.a.createElement("div",{className:"loginForm"},i.a.createElement("h2",null,"Login"),i.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},i.a.createElement("div",null,i.a.createElement("input",{type:"text",className:"loginInput",name:"username",placeholder:"username",value:a,onChange:this.handleChange}),o&&!a&&i.a.createElement("div",{className:"help-block"},"Username is required")),i.a.createElement("div",null,i.a.createElement("input",{type:"password",className:"loginInput",name:"password",placeholder:"password",value:n,onChange:this.handleChange}),o&&!n&&i.a.createElement("div",{className:"help-block"},"Password is required")),i.a.createElement("div",null,i.a.createElement("button",{className:"loginButton"},"Login"),e&&i.a.createElement("img",{src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="})))))}}]),a}(n.Component),W=Object(r.b)((function(e){return{message:e.genericMessage,loggedIn:e.loggedIn,token:e.token,loggingIn:e.logginIn}}),(function(e){return{loggingInAction:function(){e({type:"LOGGING_IN",loggingIn:!0})},attemptToLogin:function(t){e(function(e){return{type:"LOGIN",credential:e}}(t))}}}))(H),K=function(e){var t=Object(r.d)((function(e){return e})),a=Object(r.c)(),n=t.loggedIn;return i.a.createElement("div",null,!n&&e.history.push("/"),i.a.createElement("h1",null,"This is the Dashboard"),i.a.createElement("div",null,i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){a({type:"LOGOUT"})}}))))},Y=a(26),F=function(e){var t=e.component,a=Object(Y.a)(e,["component"]),n=Object(r.d)((function(e){return e})).token;return i.a.createElement(T.b,Object.assign({},a,{render:function(e){return n?i.a.createElement(t,e):i.a.createElement(T.a,{to:{pathname:"/admin",state:{from:e.location}}})}}))};var V=function(){return Object(r.c)()({type:"GET_PROJECTS"}),i.a.createElement(S.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(j,null),i.a.createElement(T.d,null,i.a.createElement(T.b,{exact:!0,path:"/",component:function(){return i.a.createElement(T.a,{to:"/home"})}}),i.a.createElement(T.b,{exact:!0,path:"/home",component:R}),i.a.createElement(T.b,{path:"/games",component:J}),i.a.createElement(T.b,{path:"/admin",component:W}),i.a.createElement(F,{exact:!0,path:"/admin/dashboard",component:K}),i.a.createElement(F,{exact:!0,path:"/admin/dashboard/create",component:K}),i.a.createElement(F,{exact:!0,path:"/admin/dashboard/security",component:K}),i.a.createElement(T.b,{path:"*",component:function(){return"404 NOT FOUND"}}))))};l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(r.a,{store:O},i.a.createElement(V,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.be4de020.chunk.js.map