/**
 * Created by karthik on 5/14/2015.
 */

angular.module('app').factory('projects',function($resource){
    var projectResource = $resource('/api/projects/:_id',{_id: "@id"},{
        update:{method:'PUT',isArray:false}
    });

    return projectResource;
})
