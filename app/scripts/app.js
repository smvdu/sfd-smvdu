'use strict';

/**
 * @ngdoc overview
 * @name sfdSmvduApp
 * @description
 * # sfdSmvduApp
 *
 * Main module of the application.
 */
var app = angular
  .module('sfdSmvduApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'myDirectives',
    'duScroll',
    'timer',
    'firebase'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.factory('CollegesFactory', function(){
  var factory = {};
  factory.colleges = [
    {
      id : 1,
      name : 'Shri Mata Vaishno Devi University',
      place : 'Katra',
      abbr : 'SMVDU'
    },
    {
      id : 2,
      name : 'National Institute of Technology',
      place: 'Srinagar',
      abbr : 'NIT'
    },
    {
      id : 3,
      name : 'Government College of Engineering and Technology',
      place: 'Jammu',
      abbr : 'GCET'
    },
    {
      id : 4,
      name : 'Islamic University of Science and Technology',
      place: 'Pulwama',
      abbr : 'IUST'
    },
    {
      id : 5,
      name : 'Baba Ghulam Shah Badshah University',
      place: 'Jammu',
      abbr : 'BGSBU'
    },
    {
      id : 6,
      name : 'MBS College of Engineering of Technology',
      place: 'Jammu',
      abbr : 'MBSCET'
    },
    {
      id : 7,
      name : 'Sher-e-Kashmir University of Agricultural Sciences and Technology',
      place: 'Jammu',
      abbr : 'SKUAST'
    },
    {
      id : 8,
      name : 'SSM College of Engineering',
      place: 'Baramulla',
      abbr : 'SSMCE'
    },
    {
      id : 9,
      name : 'Yogananda College of Engineering and Technology',
      place: 'Jammu',
      abbr : 'YCET'
    }
  ];

  return factory;
});

app.factory('EventsFactory', function(){

  var factory = {};
  var date12='12th September';
  var date13='13th September';
  var date14='14th September';
  var date15='15th September';
  var date16='16th September';
  var date17='17th September';
  var date18='18th September';    
  var place1 = 'Lecture Hall - D', place2 = 'Lecture Hall - D', place3 = 'Internet Lab';
  var listApart = {
      'time': '',
      'date': '',
      'place': '',
      'title': '',
      'summary': ''
    };

  factory.events = [
      {
      'time':'17:50 - 18:45',
      'date': date12,
      'place': place1,
      'title': 'Inaugural Ceremony along with an interactive session',
      'organizer': '',
      'summary': 'An interactive session will be conducted'+
                '& short speeches by Mr. V.V Verma, Dr. Ajay Kaul and Dr. Naveen Gondhi'
    },
      listApart,
    {
      'time': '18:45 - 19:45',
      'date': date12,
      'place': place2,
      'title': 'What is FOSS',
      'organizer': 'Abhishek Tiwary, Vijay Krishnavanshi',
      'summary': 'Brief about Free & Open Source Software'
    },
      listApart,
    {
      'time': '18:10 - 19:45',
      'date': date13,
      'place': place2,
      'title': 'Web Technologies',
      'organizer':'Sumit Srivastava,Shivam Luthra, Ariga Tejasimha',
      'summary': 'This workshop covers the basic technologies like HTML and CSS' +
                 'which are behind every web page on Internet.' + 
                 'HTML stands for Hyper Text Markup Language' + 
                 ' which is the most widely used language on Web to' + 
                 'develop web pages. CSS is used to control the style' + 
                 ' of a web document in a simple and easy way. CSS is the acronym for "Cascading Style Sheet".' 
    },
    listApart,
    {
      'time': '18:35 - 19:45',
      'date': date14,
      'place': place2,
      'title': 'Python Workshop',
      'organizer': 'Akash Goel,Tanay Agarwal, Piyush Sharma',
      'summary': 'Python, being one of the most widely used language' + 
      ' with applications in almost every field of computer science is' +
      ' a must for every computer engineer.' + 
      ' Some of our senior students, who already possess good knowledge of' +
      ' Python will be taking up the task of imparting the basic knowledge of Python among students.'
    },
      listApart,
    {
      'time': '18:10 - 19:45',
      'date': date15,
      'place': place2,
      'title': 'Internet Security Workshop',
      'organizer': 'Abhishek Bundela, Sameer Senger, Amit Yadav',
      'summary':'Along with the highly connected world comes' +
       ' the issue of data and network security as well. This' +
       ' workshop will focus on showing the students how the power' +
       ' of open source tools like Wireshark can be leveraged to' +
       ' create threat-proof and reliable systems.'
    },
      listApart,
    {
      'time': '18:10 - 19:45',
      'date': date16,
      'place': place2,
      'title': 'Linux Workshop',
      'organizer': 'Pulkit Goyal, Rushal Verma',
      'summary': 'Unix/Linux are generally seen as the root of Open' +
      ' Source revolution. Hence, it is a mandatory knowledge for any' +
      ' one who is going to work with computers. Open Source is at the' +
      ' heart of Linux which allows so many programmers all around the' +
      ' globe to make it better by contributing in it.' +
      ' Linux is being used by people not only in computer' +
      ' field but in every field of engineering and even for day to' +
      ' day tasks by non-technical people as well.'
    },
      listApart,
    {
      'time': '11:00 - 12:30',
      'date': date17,
      'place': place2,
      'title': 'Github Workshop',
      'organizer': 'Mohit Bajoria, Iresh Mishra',
      'summary':'In past 6 years Github has turned out to be the' +
      ' most widely used platform for programmers and organizations' +
      ' all around the globe to share and collaborate on open source' +
      ' projects. Created by the father of Linux, Linus Trovalds himself,' +
      ' Github makes the process of contributing to open source world as' +
      ' simple and straight forward as possible. Like Linux it is also a' +
      ' must to know knowledge for any programmer.'
    },
      listApart,
    {
      'time': '14:30 - 15:00',
      'date': date17,
      'place': place3,
      'title': 'Web maker Competition',
      'organizer': '',
      'summary': 'This competition is very beginner friendly which is based on HTML and CSS' +
      '  The students are asked to create a basic web page with HTML and style it with CSS' +
      ' The web page which includes all the HTML elements ' +
      ' as asked and beautifully styled will be the winner.' +
      ' The first three students who complete the task will be winners' +
      ' The task will be based on the web technologies workshop.' +
      ' Time Limit: 30 Minutes.'
    },
      listApart,
    {
      'time': '17:30 - 19:30',
      'date': date17,
      'place': place2,
      'title': 'Guest Lecture by Gaurav Saini',
      'organizer': '',
      'summary':'An innovative session by Gaurav Saini' + 
      ' Open-source Enthusiastic, Apache OFBiz Consultant & Developer, Internet Marketing and E-commerce expert' + 
      'Currently researching on VOIP technologies, beacons stack and Material design.' +
        'Google Summer of Code 2014 with Mifos Initiative worked on AngularJs based Community-app.' +
        'Also, selected as delegate for GSOC Summit in San Fransico and Mifos Summit in Dubai.'    
    },
    listApart,
    {
      'time': '10:30 - 12:00',
      'date': date18,
      'place': place3,
       'title': 'Git Py',
       'organizer': '',
      'summary':'This competition will check the knowledge of participants' +
      ' about Python and Github. It will be based on the Python and Github' +
      ' Workshops. Each group will be given similar task of creating a python' +
      ' script and then push it on Github and do some Github based operations' +
      ' on it. Team with correct python code, and which takes least time to' +
      ' complete all the Github tasks will be the winner.'+
      ' There will be a maximum of 2 members in a team.' +
      ' Maximum Team Members Allowed: 2, Time Limit: 90 Minutes.'
    },
      listApart,
    {
      'time': '14:00 - 14:20',
      'date': date18,
      'place': place2,
       'title': 'Open Source-The Movie',
       'organizer': '',
      'summary': 'A Short movie on the various open sources resources available.'
    },
      listApart,
    {
      'time': '14:30 - 16:30',
      'date': date18,
      'place': place1,
       'title': 'Presentation Competition',
       'organizer': '',
      'summary': 'Participating students will give a presentation in a group of '+
                 'two on any topic based on Open Source. It can be about any '+ 
                 'platform, organization and technology. Participants will be '+
                  'evaluated based on their presentation skills, authenticate '+ 
                  'information, understanding of open source, etc.' +
                  ' Maximum Team Members Allowed: 2, Time Limit: 10 - 12 Minutes.'
    },
      listApart,
    {
      'time': '17:00 - 19:00',
      'date': date18,
      'place': place2,
      'title': 'Guest Lecture by Rishabh Shukla',
      'organizer': '',
      'summary':'An innovative session by Rishabh Shukla, alumni SMVDU'+
        'CTO/Deep Learning Researcher(NLP) at Neuron.' +
        'Supervises the research and development work of Neuron\'\s core NLP platform.'
    },
     listApart,
    {
      'time': '19:00 - 20:00',
      'date': date18,
      'place': place1,
       'title': 'Closing Ceremony',
       'organizer': '',
      'summary': 'Closing Ceremony and Prize distribution of SFD SMVDU 2016.'
    }
  ];

  return factory;
});

