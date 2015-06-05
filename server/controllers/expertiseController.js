/**
 * Created by karthik on 5/14/2015.
 */
// Below is the Expertise mongoose model
var Expertise = require('mongoose').model('Expertise');

exports.getExpertises = function(req, res){
   
    //Get all Experistes and return the points..as of now there is only single expertise
    Expertise.find({}).exec(function(err, collection){
         
    console.log("Summary is " + collection );
    res.send(collection[0].points);
    });
};

