'use strict';
/* Modules */
var app = angular.module('postmanManager', [
    'postmanControllers',
    'postmanServices',
    'postmanDirectives',
    'ngRoute'
]);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/new', {
        templateUrl: '/bundles/app/partials/postman-form.html',
        controller: 'CreatePostmanFormCtrl'
    }).
	when('/postmanroad', {
        templateUrl: '/bundles/app/partials/postman-roadlist.html',
        controller: 'PostmanRoadListCtrl'
    }).
    otherwise({
        templateUrl: '/bundles/app/partials/postman-list.html',
        controller: 'PostmanListCtrl'
    });
}]);