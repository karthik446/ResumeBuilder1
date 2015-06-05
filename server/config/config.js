/// <reference path="../../typings/node/node.d.ts"/>
var path = require('path');
var rootPath= path.normalize(__dirname + '/../../');

module.exports ={
    development:{
        db:'mongodb://localhost/mean',
        rootPath:rootPath,
        port:3000
    },
    production:{
        db:'mongodb://kar446:meanproject@ds045511.mongolab.com:45511/mean',
        rootPath:rootPath,
        port:process.env.PORT || 80
    }
};