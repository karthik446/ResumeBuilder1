/// <reference path="../../typings/angular/angularjs.d.ts" />
angular.module('app',['ngResource','ngRoute']);

angular.module('app').config(function( $routeProvider, $locationProvider){
    $locationProvider.html5Mode({
     enabled: true,
     requireBase: false
    });
    
    $routeProvider
        .when("/",{templateUrl:"/partials/main/main",
            controller:"mainController"})
        .when("/projects",{templateUrl:"/partials/projects/project-list",
            controller:"projectsController"})
        .when("/projects/:id",{templateUrl:"/partials/projects/project-details",
            controller:"projectDetailsController"})
        .when("/expertises",{templateUrl:"/partials/expertises/expertises-list",
            controller:"expertisesController"});
});
