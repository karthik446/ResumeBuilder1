/**
 * Created by karthik on 5/14/2015.
 */

angular.module('app').value('toastr',toastr);

angular.module('app').factory('notifier',function(toastr){
    return {
        notify:function(message){
            toastr.success(message)
        }
    }
    }
);

