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

  var date23='23th September';
  var date24 = '24th September';
  var date25='25th September';
  var date26='26th September';
  var date27='27th September';
  var date28='28th September';
  var place1 = 'Sanskriti Kaksh', place2 = 'Lecture Hall-A', place3 = 'Internet Lab';
  var listApart = {
      'time': '',
      'date': '',
      'place': '',
      'title': '',
      'summary': ''
    };

  factory.events = [
    {
      'time': '18:00 - 19:30',
      'date': date23,
      'place': place2,
      'title': 'Python Workshop',
      'organizer': 'Parbhat Puri, CSE 3rd Year',
      'summary': 'Python, being one of the most widely used language' + 
      ' with applications in almost every field of computer science is' +
      ' a must for every computer engineer.' + 
      ' Some of our senior students, who already possess good knowledge of' +
      ' Python will be taking up the task of imparting the basic knowledge of Python among students.'
    },
    listApart,
    {
      'time': '18:00 - 19:30',
      'date': date24,
      'place': place2,
      'title': 'Linux Workshop',
      'organizer': 'Ishit, CSE 3rd Year',
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
      'time': '18:00 - 19:30',
      'date': date25,
      'place': place2,
      'title': 'Github Workshop',
      'organizer': 'Rishabh, CSE 4th Year',
      'summary': 'In past 6 years Github has turned out to be the' +
      ' most widely used platform for programmers and organizations' +
      ' all around the globe to share and collaborate on open source' +
      ' projects. Created by the father of Linux, Linus Trovalds himself,' +
      ' Github makes the process of contributing to open source world as' +
      ' simple and straight forward as possible. Like Linux it is also a' +
      ' must to know knowledge for any programmer.'
    },
listApart,
    {
      'time': '18:00 - 19:30',
      'date': date26,
      'place': place2,
      'title': 'Wikipedia Workshop',
      'organizer': 'CSE 3rd Year Students',
      'summary': 'Wikipedia is the greatest source of “Open” data' +
      ' on the internet. It has revolutionized the way we search for' +
      ' and share the data over internet. But most of the times we are' +
      ' only confined to be an user of such a platform. This workshop is' +
      ' focused on the contributions that one can make on Wikipedia.'
    },listApart,
    {
      'time': '11:00 - 13:00',
      'date': date27,
      'place': place2,
      'title': 'Network Security Workshop',
      'organizer': 'Ravi Prakash Giri, CSE 4th Year',
      'summary': 'Along with the highly connected world comes' +
      ' the issue of data and network security as well. This' +
      ' workshop will focus on showing the students how the power' +
      ' of open source tools like Wireshark can be leveraged to' +
      ' create threat-proof and reliable systems.'
    },listApart,
    {
      'time': '14:00 - 15:30',
      'date': date27,
      'place': place2,
      'title': 'Arduino Workshop',
      'organizer': '',
      'summary': 'Arduino is an open source microcontroller intended '+ 
                  ' to make applications of interactive objects.'+
                  ' It is a major component of robotics and intelligent' +
                  ' electronic and mechanical devices. Since Arduino is' +
                  ' an open source platform licensed under creative common' +
                  ' license, it can be used to extend it’s basic functionality' +
                  ' by coding new operations.' +
                  ' This workshop is more of a generic nature'+ 
                  ' intended towards all the engineering students as a whole.'
    },listApart,
    {
      'time': '15:30 - 17:00',
      'date': date27,
      'place': place2,
      'title': 'Android Workshop',
      'organizer': 'Shubham Tiwari, CSE 4th Year',
      'summary':'Android has revolutionized the mobile computing '+ 
                ' by leveraging the power of open source, considering that '+
                ' Android is itself based on Linux.'+ 
                ' This workshop will give an insight to students about'+ 
                ' basics of android development'
    },listApart,
    {
      'time': '17:00 - 18:00',
      'date': date27,
      'place': place2,
      'title': 'Open Source-The Movie',
      'organizer': '',
      'summary': 'A medium length movie to based on the philoshophy of open data.'
    },
    listApart,
    {
      'time': '10:30 - 11:30',
      'date': date28,
      'place': place3,
      'title': 'Quiz Competition',
      'organizer': '',
      'summary': 'This will be an online quiz competition to' +
      ' test the knowledge of participants about open source.' +
      ' Multiple choice questions will be served to participants' +
      ' and the one submitting first and the highest number of correct' +
      ' solutions will be crowned as winner. We’ll have Junior and Senior' +
      ' Sections, considering the fact that Junior students might not be' +
      ' as familiar with open source as Senior students are.' +
      ' This quiz competition will be generic in nature covering' +
      ' all the fields of engineering where open source is used.'
    },
    listApart,
    {
      'time': '11:30 - 13:00',
      'date': date28,
      'place': place3,
      'title': 'Giton Competition',
      'organizer': '',
      'summary': 'This competition will check the knowledge of participants' +
      ' about Python and Github. It will be based on the Python and Github' +
      ' Workshops. Each group will be given similar task of creating a python' +
      ' script and then push it on Github and do some Github based operations' +
      ' on it. Team with correct python code, and which takes least time to' +
      ' complete all the Github tasks will be the winner.'+
      ' There will be a maximum of 2 members in a team.'
    },listApart,
    {
      'time': '13:00 - 13:20',
      'date': date28,
      'place': place2,
       'title': 'Open Source-The Movie',
       'organizer': '',
      'summary': 'A short movie on the various open sources resources available.'
    } ,listApart,
    {
      'time': '14:00 - 16:00',
      'date': date28,
      'place': place1,
       'title': 'Presentation Competition',
       'organizer': '',
      'summary': 'Participating students will give a presentation in a group of '+
                 'two on any topic based on Open Source. It can be about any '+ 
                 'platform, organization and technology. Participants will be'+
                  'evaluated based on their presentation skills, authenticate '+ 
                  'information, understanding of open source, etc'
    },listApart,
    {
      'time': '16:00 - 17:30',
      'date': date28,
      'place': place1,
       'title': 'Closing Ceremony',
       'organizer': '',
      'summary': 'Closing Ceremony and Prize distribution of SFD SMVDU 2014.'
    }
  ];

  return factory;
});

