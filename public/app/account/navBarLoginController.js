angular.module('app').controller('navBarLoginController',
    function($scope, $http, $location, identity, notifier, auth){
    $scope.identity = identity;

    $scope.signin = function(username,password){
        auth.authenticateUser(username,password).then(function(success){
            success
                ? notifier.notify('You have successfullly Signed in ')
                : notifier.notify("Wrong Username/Password");
        });
    }

    $scope.signout = function(){
        auth.logoutUser().then(function(){
            $scope.username = "";
            $scope.password = "";
            notifier.notify("You have succesfully signed out");
            $location.path('/');

        });
    }
});

