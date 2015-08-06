'use strict';

/**
 * @ngdoc overview
 * @name matadorApp
 * @description
 * # matadorApp
 *
 * Main module of the application.
 */
angular
  .module('matadorApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/blogDetail/:blogId', {
        templateUrl: 'views/blogdetail.html',
        controller: 'BlogdetailCtrl',
        controllerAs: 'blogDetail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
