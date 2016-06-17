'use strict';
/* Controllers */
var postmanControllers = angular.module('postmanControllers', []);
postmanControllers.controller('PostmanListCtrl', ['$scope', 'Postman',
    function($scope, Postman) {
        $scope.postmans = Postman.query();
    }]);
postmanControllers.controller('CreatePostmanFormCtrl', ['$scope', '$window',
    'Postman', function($scope, $window, Postman) {
        $scope.submit = function() {
            Postman.save($scope.postman, function() {
                $window.location.href = '#';
            });
        };
    }]);
	
postmanControllers.controller('PostmanRoadListCtrl', ['$scope', 'PostmanRoad',
    function($scope, PostmanRoad) {
        //$scope.postmanroads = PostmanRoad.query();
		$scope.postmanroads = [{"postman_id": 1, "lat": 22.223, "lang": 222.333, "distance": 123, "timestamp": "12-02-2016T23:20:30"}, {"postman_id": 2, "lat": 22.223, "lang": 222.333, "distance": 123, "timestamp": "12-02-2016T23:20:30"}, {"postman_id": 3, "lat": 22.223, "lang": 222.333, "distance": 123, "timestamp": "12-02-2016T23:20:30"}];
    }]);