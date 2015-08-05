'use strict';

/**
 * @ngdoc function
 * @name matadorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the matadorApp
 */
angular.module('matadorApp')
  .controller('MainCtrl', function ($scope, $http, $filter) {
    $scope.awesomeThings = [];

    $http.get('http://localhost:9001/blogs')
    .then(function(response) {
    	$scope.awesomeThings = response.data;
    }, function(response){
    	$scope.error = response;
    });

    $scope.addyInputToAwesoeThings = function() {
        $scope.blog.comments = [];
        $http.post('http://localhost:9001/blogs', $scope.blog)
        .then(function() {
            $scope.awesomeThings.push($scope.blog);
            $scope.blog = {};
        });
    };
  });
