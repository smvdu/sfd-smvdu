'use strict';

describe('Directive: myScrollDirective', function () {

  // load the directive's module
  beforeEach(module('sfdSmvduApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-scroll-directive></my-scroll-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myScrollDirective directive');
  }));
});
