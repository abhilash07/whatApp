angular.module('sayWhat.controller', [])
	.controller('startCtrl', function($http, $scope) {
		$http.get('http://localhost:8080/api/v1/question').then(function successFunc(res) {
			$scope.questions = res.data.questions;
		}, function errorFunc(res) {

		})
	})
	.controller('addCtrl', function($http, $scope) {

		$scope.sendQuestion = function() {
			console.log('Frage senden!');
		}

	})