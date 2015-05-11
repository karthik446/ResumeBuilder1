/**
 * Created by karthik on 5/11/2015.
 */

var express = require("express"),
    stylus = require("stylus"),
    logger = require("morgan"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str,path){
    return stylus(str).set('filename',path);
}

app.set('views',__dirname + '/server/views');

app.set('view engine','jade');

app.use(logger('dev'));
app.use(bodyParser());

app.use(stylus.middleware(
    {
        src:__dirname +'/public',
        compile:compile
    }
));

app.use(express.static(__dirname +'/public'));

//Mongo DB

if(env=='development') {
    mongoose.connect('mongodb://localhost/mean');
}
else {
    mongoose.connect('mongodb://kar446:meanproject@ds045511.mongolab.com:45511/mean');
}

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection failed...'));
db.once('open', function callback(){
    console.log('mean Beginner db opened');
});


var messageSchema = mongoose.Schema({message:String});
var Message = mongoose.model('Message',messageSchema);
var mongoMessage;

Message.findOne().exec(function(error,messageDoc){
    mongoMessage = messageDoc.message;
    console.log("found one " + messageDoc.message);
});

app.get('/partials/:partialPath',function(req, res) {
    res.render('partials/'+ req.params.partialPath);
});

app.get('*',function(req,res){
    res.render('index',{
        mm: 'ABASC',
        dude:mongoMessage
    });
});

app.listen(process.env.PORT || 3000);

console.log("Listening on Port " + process.env.PORT + "...");
