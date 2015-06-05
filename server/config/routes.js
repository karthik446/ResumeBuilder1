/**
 * Routes Configuration file
 * Created by Karthik S 5/17/2015
 * Has dependencies to server side controllers
 * Contains all the API routes and also partials routes to display angular partials
 * */

 var auth = require('./auth'),
    project = require('../controllers/projects'),
    expertise = require('../controllers/expertiseController');

module.exports = function(app){
// /api/expertises -- More to come
app.get('/api/expertises', expertise.getExpertises);

// /api/projects Api
app.get('/api/projects', project.getProjects);
app.get('/api/projects/:id', project.getProjectsById);

//Partial Route - routes to all anguar...hiding the public app folder
app.get('/partials/*',function(req, res) {
    console.log(req.params);
    res.render('../../public/app/'+ req.params[0]);
});

//Login and logout
app.post('/login', auth.authenticate);

app.post('/logout', function(req,res){
    req.logout();
    res.end();
});

// Bad URL
app.all('/api/*',function(req, res){
    res.send(404);
});

// Default Route
app.get('*',function(req,res){
    res.render('index');
});

};