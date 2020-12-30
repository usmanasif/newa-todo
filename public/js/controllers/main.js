angular.module('userController', [])

	.controller('mainController', ['$scope','$http','Users', function($scope, $http, Users) {
		$scope.formData = {};

		$scope.createUser = function() {

			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				Users.create($scope.formData)
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {};
						$scope.user = data;
					});
			}
		};
	}]);
