// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('mobileAudioApp', ['ionic','ngTouch'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller("AppController",function($scope){
  var tada = new Audio();
  tada.src = "media/TaDa.mp3";

  $scope.heading = "My Audio App";

  $scope.playSound = function(){
    console.log("Play Sound!");
    tada.play();
  }

  $scope.swiped = function(){
    console.log("Hello World");
  }
})

.directive('ngTap',function(){
  return {
    link: function(scope, element, attrs) {
      $(element).on('touchstart',function(e){
        console.log("Touchstart Event Fired from jQuery");
      })
/*      element.bind('touchstart',function(e){
        console.log("Touchstart Event Fired");
      });
*/      element.bind('touchmove', function(e) {
        // console.log("Touchmove Event Fired",e.targetTouches[0].clientX,e.targetTouches[0].clientY);
        console.log("Touchmove Event Fired",e);
      });
      element.bind('touchend',function(e){
        console.log("Touchend Event Fired");
      });
    }
  }
})
