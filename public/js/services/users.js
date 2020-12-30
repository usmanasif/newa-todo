angular.module('userService', [])

	.factory('Users', ['$http',function($http) {
		return {
			create : function(userData) {
				return $http.post('/users', userData);
			},
		}
	}]);
