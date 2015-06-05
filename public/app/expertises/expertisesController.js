/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/**
 * Expertises Controllers Controller file
 * Created by Karthik S 5/17/2015
 * Has dependencies to angular factoriy expertises
 * */
angular.module('app').controller('expertisesController',
    function($scope, expertises){
    $scope.summary = expertises.query();
    
    console.log("points" +  $scope.summary);
});