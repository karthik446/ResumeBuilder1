/**
 * Mongoose Configuration file
 * Created by Karthik S 5/17/2015
 * Has dependencies to server side models, project user and expertise
 * Connects the mongoose and opens the connection and populates inital data
 * */

 var mongoose = require("mongoose"),
    projectModel = require('../models/project'),
    userModel = require('../models/user'),
    expertiseModel = require('../models/expertiseModel');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection failed...'));
    db.once('open', function callback() {
        console.log('mean Beginner db opened');
    });

    //Configuring all the models,populating them if they donot exist in the database
    userModel.populateUsers();
    projectModel.createDefaultProjects();
    expertiseModel.populateExpertise();
};