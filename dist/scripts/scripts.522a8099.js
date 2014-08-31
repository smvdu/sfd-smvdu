"use strict";var app=angular.module("sfdSmvduApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","myDirectives","duScroll","timer","firebase"]);app.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),app.factory("CollegesFactory",function(){var a={};return a.colleges=[{id:1,name:"Shri Mata Vaishno Devi University",place:"Katra",abbr:"SMVDU"},{id:2,name:"National Institute of Technology",place:"Srinagar",abbr:"NIT"},{id:3,name:"Government College of Engineering and Technology",place:"Jammu",abbr:"GCET"},{id:4,name:"Islamic University of Science and Technology",place:"Pulwama",abbr:"IUST"},{id:5,name:"Baba Ghulam Shah Badshah University",place:"Jammu",abbr:"BGSBU"},{id:6,name:"MBS College of Engineering of Technology",place:"Jammu",abbr:"MBSCET"},{id:7,name:"Sher-e-Kashmir University of Agricultural Sciences and Technology",place:"Jammu",abbr:"SKUAST"},{id:8,name:"SSM College of Engineering",place:"Baramulla",abbr:"SSMCE"},{id:9,name:"Yogananda College of Engineering and Technology",place:"Jammu",abbr:"YCET"}],a}),app.factory("EventsFactory",function(){var a={},b="19th September",c="20th September",d="21th September",e="Sanskriti Kaksh",f="Lecture Hall-D",g="Internet Lab",h={time:"",date:"",place:"",title:"",summary:""};return a.events=[{time:"17:30 - 19:00",date:b,place:g,title:"Python Workshop",summary:"Basics of Python. Why Python is all the rage right now."},h,{time:"10:30 - 11:30",date:c,place:e,title:"Inaugural Ceremony",summary:"Inaugural Ceremony for SFD 2014 at SMVDU. Convener and Chief Guest will address the participating students."},h,{time:"11:45 - 13:45",date:c,place:f,title:"Linux Workshop",summary:"Linux Workshop will cover the basics of linux installation and usage."},h,{time:"13:45 - 14:00",date:c,place:"",title:"Lunch",summary:""},h,{time:"14:00 - 15:30",date:c,place:f,title:"Github Workshop",summary:"Basics of Github and how you can add your projects and work on a github repository."},h,{time:"15:45 - 17:00",date:c,place:f,title:"Network Security Workshop",summary:"Learning the basics of networks and various security aspects."},h,{time:"17:00 - 17:30",date:c,place:f,title:"Quiz Competition",summary:"This Competition is only to check the awareness about the open source among the student."},h,{time:"17:30 - 19:00",date:c,place:f,title:"Open Source-The Movie",summary:"A medium length movie to show the student open source community and how they work."},h,{time:"10:30 - 11:30",date:d,place:f,title:"Wikipedia Workshop",summary:"How to transform from just an user to a contributor of one of the most informative resource of internet - Wikipedia."},h,{time:"11:30 - 13:00",date:d,place:f,title:"Giton Competition",summary:"How to transform from just an user to a contributor of one of the most informative resource of internet - Wikipedia."},h,{time:"13:30 - 13:20",date:d,place:f,title:"Open Source-The Movie",summary:"A short movie on the various open sources resources available."},h,{time:"14:00 - 16:00",date:d,place:f,title:"Presentation Competition",summary:"Make a small presentation on the given task"},h,{time:"16:00 - 17:30",date:d,place:e,title:"Closing Ceremony",summary:"Closing Ceremony for wrapping up such a big event SFD 2014 at SMVDU."}],a}),angular.module("sfdSmvduApp").controller("MainCtrl",["$scope","$firebase","EventsFactory","CollegesFactory",function(a,b,c,d){var e=new Firebase("https://sfd-smvdu.firebaseio.com/"),f=b(e);a.users=f.$asArray();var g={name:"",email:"",university:"",password:"",location:""};a.form={submit:!1,userExist:!1},a.tmp={university1:"",university2:""},a.registerUser=function(){a.user.university="other"===a.tmp.university1?a.tmp.university2:a.tmp.university1,h(a.user),i(a.user)?a.form.userExist=!0:(f.$push(a.user),a.form.submit=!0),a.registerForm.$setPristine(),a.user=g,a.tmp.university1="",a.tmp.university2=""};var h=function(b){angular.forEach(b,function(b,c){a.user[c]=b.trim()})},i=function(b){var c=!1;return angular.forEach(a.users,function(a){angular.isObject(a)&&a.email===b.email&&(console.log("Found email= "+a.email),c=!0)}),c};a.summary=[],a.colleges=d.colleges,a.events=c.events,a.showSummary=function(b){a.summary[b]=!0},a.hideSummary=function(b){a.summary[b]=!1},a.checkListApart=function(a){return a%2!==0?"list-apart":void 0};var j=new Date,k=new Date(2014,8,20,10,30);a.endTime=Math.abs(k.getTime()-j.getTime())/1e3}]),angular.module("myDirectives",[]),angular.module("myDirectives").directive("myScrollDirective",function(){return{restrict:"A",link:function(){var a,b,c;b=document.getElementById("home"),c=document.getElementById("main-header"),a=b.offsetHeight;var d;window.onscroll=function(){d=document.documentElement.scrollTop||document.body.scrollTop,d>a-c.offsetHeight/2?c.setAttribute("class","shrink"):c.setAttribute("class","")}}}});