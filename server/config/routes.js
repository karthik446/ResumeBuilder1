var auth = require('./auth'),
    project = require('../controllers/projects');

module.exports = function(app){

app.get('/api/projects', project.getProjects);
app.get('/api/projects/:id', project.getProjectsById);

//Partial Route
app.get('/partials/*',function(req, res) {
    res.render('../../public/app/'+ req.params[0]);
});

app.post('/login', auth.authenticate);

app.post('/logout', function(req,res){
    req.logout();
    res.end();
});

app.all('/api/*',function(req, res){
    res.send(404);
});

// Default Route
app.get('*',function(req,res){
    res.render('index');
});

};