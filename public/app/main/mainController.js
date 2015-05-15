angular.module('app').controller('mainController',
    function($scope, projects, stacks, summary){
    $scope.stacks = stacks.getAllStacks();
    $scope.projects = projects.query();
    $scope.showcompleteSummary = false;

    $scope.enableStackSkills = true;
    $scope.currentStack = null;
    $scope.summary = summary.getSummary();
    $('.less').hide();

    $scope.showStackSkills = function(stack){
        $scope.enableStackSkills = true;
        $scope.currentStack = stack;
    };
   // need to refactor
    $scope.ShowSummary = function(){
        $scope.showcompleteSummary = true;
        $('.more').hide();
        $('.less').show();
    };

    $scope.HideSummary = function(){
        $scope.showcompleteSummary = false;
        $('.more').show();
        $('.less').hide();
    };

    $scope.getEnvForStack = function(){
        return stacks.getEnvironmentsByStack($scope.currentStack);
    };
});