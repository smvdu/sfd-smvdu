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

  var date19='19th September';
  var date20 = '20th September';
  var date21='21th September';
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
      'time': '17:30 - 19:00',
      'date': date19,
      'place': place3,
      'title': 'Python Workshop',
      'summary': 'Basics of Python. Why Python is all the rage right now.'
    },listApart,
    {
      'time': '10:30 - 11:30',
      'date': date20,
      'place': place1,
      'title': 'Inaugural Ceremony',
      'summary': 'Inaugural Ceremony for SFD 2014 at SMVDU.' +
       ' Convener and Chief Guest will address the participating students.'
    },
    listApart,
    {
      'time': '11:45 - 13:45',
      'date': date20,
      'place': place2,
      'title': 'Linux Workshop',
      'summary': 'Linux Workshop will cover the basics of linux installation and usage.'
    },
    listApart,
    {
      'time': '13:45 - 14:00',
      'date': date20,
      'place': '',
      'title': 'Lunch',
      'summary': ''
    },
    listApart,
    {
      'time': '14:00 - 15:30',
      'date': date20,
      'place': place2,
      'title': 'Github Workshop',
      'summary': 'Basics of Github and how you can add your projects and work on a github repository.'
    },


    listApart,
    {
      'time': '15:45 - 17:00',
      'date': date20,
      'place': place2,
      'title': 'Network Security Workshop',
      'summary': 'Learning the basics of networks and various security aspects.'
    },listApart,
    {
      'time': '17:00 - 17:30',
      'date': date20,
      'place': place2,
      'title': 'Quiz Competition',
      'summary': 'This Competition is only to check the awareness about the open source among the student.'
    }, listApart,
    {
      'time': '17:30 - 19:00',
      'date': date20,
      'place': place2,
      'title': 'Open Source-The Movie',
      'summary': 'A medium length movie to show the student '+
      'open source community and how they work.'
    },

    listApart,
    {
      'time': '10:30 - 11:30',
      'date': date21,
      'place': place2,
       'title': 'Wikipedia Workshop',
      'summary': 'How to transform from just an user to a contributor of one of the ' +
      'most informative resource of internet - Wikipedia.'
    },listApart,
    {
      'time': '11:30 - 13:00',
      'date': date21,
      'place': place2,
       'title': 'Giton Competition',
      'summary': 'How to transform from just an user to a contributor of one of the ' +
      'most informative resource of internet - Wikipedia.'
    },listApart,
    {
      'time': '13:00 - 13:20',
      'date': date21,
      'place': place2,
       'title': 'Open Source-The Movie',
      'summary': 'A short movie on the various open sources resources available.'
    } ,listApart,
    {
      'time': '14:00 - 16:00',
      'date': date21,
      'place': place2,
       'title': 'Presentation Competition',
      'summary': 'Make a small presentation on the given task'
    },listApart,
    {
      'time': '16:00 - 17:30',
      'date': date21,
      'place': place1,
       'title': 'Closing Ceremony',
      'summary': 'Closing Ceremony for wrapping up such a big event SFD 2014 at SMVDU.'
    }
  ];

  return factory;
});

