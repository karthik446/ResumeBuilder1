/**
 * Created by karthik on 5/15/2015.
 */

angular.module('app').controller('projectDetailsController',
    function($scope, projects, stacks, $routeParams){
    $scope.project = projects.get({_id:$routeParams.id});
    $scope.enableStackSkills = true;
    $scope.currentStack = null;

    $scope.showStackSkills = function(stack){
        $scope.enableStackSkills = true;
        $scope.currentStack = stack;
    }
    $scope.getEnvForStack = function(){
        return stacks.getEnvironmentsByStack($scope.currentStack);
    }
});