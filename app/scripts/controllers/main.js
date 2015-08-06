'use strict';

/**
 * @ngdoc function
 * @name matadorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the matadorApp
 */
angular.module('matadorApp')
  .controller('MainCtrl', function ($scope, $filter, blogService) {
    $scope.blogs = [];

    var refreshBlogs = function(blogs) {
        $scope.blogs = blogs
    };

    var errorOccur = function(error){
        $scope.error = error;
    };

    blogService.findAllBlogs(refreshBlogs, errorOccur);

    $scope.addNewBlog = function() {
        blogService.createNewPost($scope.blog)
        .then(function() {
            $scope.blogs.push($scope.blog);
            $scope.blog = {};
        });
    };
  });
