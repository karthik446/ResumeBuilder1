/**
 * Created by karthik on 5/15/2015.
 */
//save these in the database
angular.module('app').factory('stacks',function(){
    //this should not be done in the client Side Service...should reside in Node JS Controller
    //TODO: make sure that this is addressed
    var microsoftStack = ['ASP.NET 4.5', 'ASP MVC', 'ASP WEBFORMS', 'Sharepoint','ADO.NET','Visual Studio 2013', 'Entity Framework 6.0', 'TFS 2013', 'MS TEST','SQL Server 2008/2012'],
        jsStack = ['JQUERY','Angular Js', 'React Js','Knockout Js', 'MVVM','Node JS','Google Closure', 'QUnit'],
        uiStack= [ 'JQUERY UI','Kendo UI','Telerik Rad controls', 'SyncFusion Controls', 'LESS', 'STYLUS', 'BootStrap 3.0','Jade', 'HandleBars'],
        sqlStack = [ 'SQL Server 2008 R2', 'Oracle Sql Developer', 'Oracle 9i/11i' ],
        noSqlStack=['RavenDB','MongoDB', 'MongoLab'],
        nodeStack=['Node JS','NPM','Express','Bower','Jade','Mongoose','Passport', 'Sessions'],
        patternsStack=['MVC','MVVM','MV*','Singleton Pattern','Repository Pattern','Factory Pattern','Command Pattern'];

    return {
        getEnvironmentsByStack: function(stackName){
            switch (stackName){
                case 'Microsoft':
                    return microsoftStack;
                    break;
                case 'Javascript':
                    return jsStack;
                    break;
                case 'UX/UI':
                    return uiStack;
                    break;
                case 'Sql':
                    return sqlStack ;
                    break;
                case 'Database':
                    return sqlStack.concat(noSqlStack);
                    break;
                case 'NoSql':
                    return noSqlStack ;
                    break;
                case 'NodeJS':
                    return nodeStack ;
                    break;
                case 'Patterns':
                    return patternsStack ;
                    break;
                case 'HP':
                    return ['HP ALM'] ;
                    break;
                default:
                    return microsoftStack;
                    break;
            }
        },
        getAllStacks: function(){
            return ['Microsoft','Javascript','NodeJS', 'Database','NoSql', 'UX/UI', 'Patterns']
        }
    }
})
