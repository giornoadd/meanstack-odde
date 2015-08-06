'use strict';

/**
 * @ngdoc service
 * @name matadorApp.blogService
 * @description
 * # blogService
 * Service in the matadorApp.
 */
angular.module('matadorApp')
  .service('blogService', function BlogService($http) {
  	var blogs = [];
	this.findAllBlogs = function(refreshBlogs, errorOccur){
		$http.get('http://localhost:9001/blogs')
		.then(function(response) {
			blogs = response.data;
			refreshBlogs(blogs);
	    }, function(response){
	    	errorOccur(response);
	    });
	};

	this.getBlogById = function(blogId){
		return $http.get('http://localhost:9001/blogs/' + blogId);
	}

    this.createNewPost = function(newPost) {
    	createNewPost.comments = [];
    	return $http.post('http://localhost:9001/blogs', newPost);
    };  
});
