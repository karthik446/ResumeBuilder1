/// <reference path="../../../typings/angular/angularjs.d.ts"/>
/**
 * Main Controller file
 * Created by Karthik S 5/17/2015
 * Has dependencies to angular factories like projects stacks expertises
 * The main controller for Main Portion of the application
 * */
angular.module('app').controller('mainController',
    function($scope, projects, stacks, expertises){
    $scope.stacks = stacks.getAllStacks();
    $scope.projects = projects.query();
    $scope.summary = expertises.query();
    
    $scope.showcompleteSummary = false;

    $scope.enableStackSkills = false;
    $scope.currentStack = 'Microsoft';
    $('.less').hide();

    $scope.showStackSkills = function(stack){
        $scope.enableStackSkills = true;
        $scope.currentStack = stack;
    };
    
    $scope.showExpertise = function(){
        alert("OKAY");
    };
    
   // TODO: Open the summary in a kendoi window
    $scope.ToggleSummary = function(show){
        $scope.showcompleteSummary = show;
        $('.more').toggle();
        $('.less').toggle();
    };
    
    $scope.getEnvForStack = function(){
        return stacks.getEnvironmentsByStack($scope.currentStack);
    };
});