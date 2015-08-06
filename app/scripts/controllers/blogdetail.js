'use strict';

/**
 * @ngdoc function
 * @name matadorApp.controller:BlogdetailCtrl
 * @description
 * # BlogdetailCtrl
 * Controller of the matadorApp
 */
angular.module('matadorApp')
  .controller('BlogdetailCtrl', function ($scope, blogService, $routeParams) {

  	blogService.getBlogById($routeParams.blogId).then(function(response){
  		$scope.post = response.data;
  	});
  });
