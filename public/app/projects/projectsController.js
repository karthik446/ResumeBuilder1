/**
 * Created by karthik on 5/14/2015.
 */
angular.module('app').controller('projectsController', function($scope, projects){
    $scope.projects = projects.query();
});