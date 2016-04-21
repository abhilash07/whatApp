// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('sayWhat', ['ionic', '$http'])

.run(function($ionicPlatform, $http) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }


    // load all 
    $http.get('http://localhost:8080/api/v1/question').then(function successFunc(res) {
      $scope.questions = res.data.questions;
    }, function errorFunc(res) {
      console.log("Fehler");
    })
  });
})
