/**
 * Created by karthik on 5/14/2015.
 */

angular.module('app').factory('identity',function(){
    return {
        currentUser: undefined,
        isAuthenitcated:function(){
            return !!this.currentUser
        }
    }
})