/**
 * Created by karthik on 5/19/2015.
 */
angular.module('app').factory('expertises',function($resource){
    //This calls the api/Expertises... Not exposing any of the expertise things to the client
    // Simple Restful Api interface using Node and Angular
    return $resource('/api/expertises/');
});