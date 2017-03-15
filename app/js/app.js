'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider){
        $routeProvider.when('/NewEvent',
        {
            templateUrl :'templates/NewEvent.html',
            controller: 'EditEventController'
        });
        $routeProvider.when('/EditProfile',
        {
            templateUrl :'templates/EditProfile.html',
            controller: 'EditProfileController'
        });
        $routeProvider.when('/Events',
        {
            templateUrl :'templates/EventList.html',
            controller: 'EventListController'
        });
        $routeProvider.when('/Event/:eventId',
        {
            templateUrl :'templates/EventDetails.html',
            controller: 'EventController',
            resolve: {
                    event: function($route, eventData) {
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
        });
        $routeProvider.when('/Sample', 
        {
            templateUrl: 'templates/SampleDirective.html',
            controller : 'SampleDirectiveController'
        });
        $routeProvider.otherwise({redirectTo: '/Events'});

        $locationProvider.html5Mode(true);
    });
