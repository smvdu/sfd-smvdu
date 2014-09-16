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
  var place1 = 'Sanskriti Kaksh', place2 = 'Lecture Hall-D', place3 = 'Internet Lab';
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
      'place': place3,
      'title': 'Python Workshop',
      'summary': 'Basics of Python. Why Python is all the rage right now.'
    },listApart,
    {
      'time': '18:00 - 19:30',
      'date': date24,
      'place': place1,
      'title': 'Inaugural Ceremony',
      'summary': 'Inaugural Ceremony for SFD 2014 at SMVDU.' +
       ' Convener and Chief Guest will address the participating students.'
    },
    listApart,
    {
      'time': '18:00 - 19:30',
      'date': date24,
      'place': place2,
      'title': 'Linux Workshop',
      'summary': 'Linux Workshop will cover the basics of linux installation and usage.'
    },
    listApart,
    {
      'time': '18:00 - 19:30',
      'date': date25,
      'place': place2,
      'title': 'Github Workshop',
      'summary': 'Basics of Github and how you can add your projects and work on a github repository.'
    },
listApart,
    {
      'time': '18:00 - 19:30',
      'date': date26,
      'place': place2,
       'title': 'Wikipedia Workshop',
      'summary': 'How to transform from just an user to a contributor of one of the ' +
      'most informative resource of internet - Wikipedia.'
    },listApart,
    {
      'time': '11:00 - 13:00',
      'date': date27,
      'place': place2,
      'title': 'Network Security Workshop',
      'summary': 'Learning the basics of networks and various security aspects.'
    },listApart,
    {
      'time': '14:00 - 15:30',
      'date': date27,
      'place': place2,
      'title': 'Arduino Workshop',
      'summary': 'Arduino is an open source microcontroller intended '+ 
                  ' to make applications of interactive objects'+
                  ' This workshop is more of a generic nature'+ 
                  ' intended towards all the engineering students as a whole.'
    },listApart,
    {
      'time': '15:30 - 17:00',
      'date': date27,
      'place': place2,
      'title': 'Android Workshop',
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
      'summary': 'A medium length movie to show the student '+
      'open source community and how they work.'
    },
    listApart,
    {
      'time': '10:30 - 11:30',
      'date': date28,
      'place': place2,
      'title': 'Quiz Competition',
      'summary': 'This quiz competition will be generic in nature covering '+ 
                 'all the fields of engineering where open source is used.'
    },
    listApart,
    {
      'time': '11:30 - 13:00',
      'date': date28,
      'place': place2,
       'title': 'Giton Competition',
      'summary': 'This competition will check the knowledge of participants about '+ 
                 'Python and Github. It will be based on the Python and Github Workshops'
    },listApart,
    {
      'time': '13:00 - 13:20',
      'date': date28,
      'place': place2,
       'title': 'Open Source-The Movie',
      'summary': 'A short movie on the various open sources resources available.'
    } ,listApart,
    {
      'time': '14:00 - 16:00',
      'date': date28,
      'place': place2,
       'title': 'Presentation Competition',
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
      'summary': 'Closing Ceremony for wrapping up such a big event SFD 2014 at SMVDU.'
    }
  ];

  return factory;
});

