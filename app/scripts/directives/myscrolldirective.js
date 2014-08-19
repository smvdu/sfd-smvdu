'use strict';

/**
 * @ngdoc directive
 * @name myDirectives.directive:myScrollDirective
 * @description
 * # myScrollDirective
 */
angular.module('myDirectives', []);

angular.module('myDirectives')
  .directive('myScrollDirective', function () {
    return {
		restrict: 'A',
    	link: function() {
	        var hHeight, home, header;
	        home = document.getElementById('home');
	        header = document.getElementById('main-header');
	        hHeight = home.offsetHeight;
	        window.onscroll = function() {
	          var scrollTop;
	          scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	          if (scrollTop > hHeight - header.offsetHeight/2) {
	            header.setAttribute('class', 'shrink');
	          } else {
	            header.setAttribute('class', '');
	          }
	        };
      	}
  	};
  });
