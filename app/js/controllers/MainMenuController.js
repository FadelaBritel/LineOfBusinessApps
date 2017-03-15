'use strict';

eventsApp.controller('MainMenuController', 
    function EventController($scope, $location) {
        $scope.createEvent = function(n){
            $location.url('/NewEvent');
        };
        $scope.EventsList = function(n){
            $location.url('/Events');
        };
        $scope.EditProfile = function(n){
            $location.url('/EditProfile');
        };
        $scope.Sample = function(n){
            $location.url('/Sample');
        };
    }
);