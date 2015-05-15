/**
 * Created by karthik on 5/14/2015.
 */

var Project = require('mongoose').model('Project');

exports.getProjects = function(req, res){
    Project.find({}).exec(function(err, collection){
        res.send(collection);
    })
};
exports.getProjectsById = function(req, res){
    Project.findOne({_id: req.params.id}).exec(function(err, project){
        res.send(project);
    });
};
