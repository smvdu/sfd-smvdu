'use strict';

/**
 * @ngdoc function
 * @name sfdSmvduApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sfdSmvduApp
 */

angular.module('sfdSmvduApp')
  .controller('MainCtrl', function ($scope, $firebase, EventsFactory, CollegesFactory) {

    /* Registration Form Js code starts here */
    var ref = new Firebase("https://sfd-smvdu.firebaseio.com/");
    // create an AngularFire reference to the data
    var sync = $firebase(ref);

    // fetch all data
    $scope.users = sync.$asArray();

    // default user details object
    var defaultUser = {
      name : "",
      email : "",
      university : "",
      password : "",
      location : "",
    };

    // form status object
    $scope.form ={
      submit : false,
      userExist : false
    };

    $scope.tmp = {
      university1 : '',
      university2 : ''
    };

    // register user and push data to firebase
    $scope.registerUser = function(){
      $scope.user.university = $scope.tmp.university1==='other'?$scope.tmp.university2 : $scope.tmp.university1;
      trimData($scope.user);
      if(!isUserExists($scope.user)){
        sync.$push($scope.user);
        $scope.form.submit = true;
      }else{
        $scope.form.userExist = true;
      }

      $scope.registerForm.$setPristine();
      $scope.user = defaultUser;
      $scope.tmp.university1 = '';
      $scope.tmp.university2 = '';
    };

    // trim the data
    var trimData = function(data){
      angular.forEach(data, function(value, key){
        $scope.user[key] = value.trim();
      });
    };

    // checks if user exists or not
    var isUserExists = function(userData){
      var found = false;
      angular.forEach($scope.users, function(user){
        if(angular.isObject(user) && user.email===userData.email){
          console.log("Found email= "+ user.email);
          found = true;
        }
      });
      return found;
    }

    /* ends here*/

    $scope.summary = [];
    $scope.colleges = CollegesFactory.colleges;
    $scope.events = EventsFactory.events;

    $scope.showSummary = function(index) {
      $scope.summary[index] = true;
    };

    $scope.hideSummary = function(index) {
      $scope.summary[index] = false;
    };

    $scope.checkListApart = function(index) {
      if( index%2 !== 0) {
        return 'list-apart';
      }
    };

  });
