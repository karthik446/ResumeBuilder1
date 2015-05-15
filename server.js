/**
 * Created by karthik on 5/11/2015.
 */

var express = require("express"),
    passport = require("passport"),
    mongoose = require("mongoose"),
    localStrategy = require("passport-local").Strategy,
    app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config= require('./server/config/config')[env]

require('./server/config/express')(app,config);
require('./server/config/mongoose')(config);
require('./server/config/routes')(app);


var User = mongoose.model("User");
passport.use(new localStrategy(

    function(username, password, done){
        User.findOne({userName: username}).exec(function(err, user){
            return user && user.authenticate(password)
                ?  done(null, user)
                : done(null, false);
        })
    }
));

app.use(function(req, res, next){
    console.log("hello " + req.user);
    next();
});

//Tell the passport to Serialize user...
passport.serializeUser(function(user,done){
    if(user){
        done(null, user._id);
    }
});

passport.deserializeUser(function(id, done){

    User.findOne({_id:id}).exec(function(err, user){
        //if there is a user we call the done method...
        //who calls the deserialize??? and whats the done method ?
        return user ?  done(null, user) : done(null, false);
    });
});

app.listen(config.port);
console.log("Listening on Port " +config.port + "...");
