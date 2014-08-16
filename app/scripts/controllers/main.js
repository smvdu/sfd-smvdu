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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.scrollTo = function(id) {
    	var element =  document.getElementById(id);
    	var pos = element.offsetTop;
    	var windowPos = $(document).scrollTop();
      var timeInterval;

      var intervalId = setInterval(function(){
        if(windowPos < pos) {
          window.scrollTo(0, windowPos += 10);
          timeInterval = pos - windowPos;
          if(windowPos >= pos) {
            clearInterval(intervalId);
          }
        } else {
          window.scrollTo(0, windowPos -= 10);
          timeInterval = windowPos - pos;
          if(windowPos <= pos) {
            clearInterval(intervalId);
          }
        }   
      }, timeInterval);
    };
  });
