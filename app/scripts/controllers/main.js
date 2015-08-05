'use strict';

/**
 * @ngdoc function
 * @name matadorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the matadorApp
 */
angular.module('matadorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.addyInputToAwesoeThings = function() {
    	$scope.awesomeThings.push($scope.myInput);
    	$scope.myInput = '';
    }
  });
