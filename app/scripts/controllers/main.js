'use strict';

/**
 * @ngdoc function
 * @name sfdSmvduApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sfdSmvduApp
 */

angular.module('sfdSmvduApp')
  .controller('MainCtrl', function ($scope) {
   
    $scope.summary = [];

    $scope.showSummary = function(index) {
      $scope.summary[index] = true;
    };

    $scope.hideSummary = function(index) {
      $scope.summary[index] = false;
    };

    var date20 = '20th September';
    var place1 = 'Sanskriti Kaksh', place2 = 'Lecture Hall-D', place3 = 'Internet Lab';
    var listApart = {
        'time': '',
        'date': '',
        'place': '',
        'title': '',
        'summary': ''
      };

    $scope.events = [
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
        'time': '11:45 - 13:15',
        'date': date20,
        'place': place2,
        'title': 'Linux Workshop',
        'summary': 'Linux Workshop will cover the basics of linux installation and usage.'
      },
      listApart,
      {
        'time': '13:15 - 14:00',
        'date': date20,
        'place': '',
        'title': 'Lunch',
        'summary': ''
      },
      listApart,
      {
        'time': '14:00 - 15:30',
        'date': date20,
        'place': place3,
        'title': 'Python Workshop',
        'summary': 'Basics of Python. Why Python is all the rage right now.'
      },
      listApart, 
      {
        'time': '15:45 - 17:00',
        'date': date20,
        'place': place2,
        'title': 'Wikipedia Workshop',
        'summary': 'How to transform from just an user to a contributor of one of the ' +
        'most informative resource of internet - Wikipedia.'
      }
    ];

    $scope.checkListApart = function(index) {
      if( index%2 !== 0) {
        return 'list-apart';
      }
    };

  });
