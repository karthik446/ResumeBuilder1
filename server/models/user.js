
var  mongoose = require('mongoose'),
    crypto = require("crypto");
//User Schema
var userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    userName:String,
    salt:String,
    hashed_pwd:String
});
//Methods  on the model
userSchema.methods ={
    authenticate:function(passwordMatch){
        return hashPassword(this.salt, passwordMatch) === this.hashed_pwd;
    }
};
//this statement creates the mongo model
var User = mongoose.model('User',userSchema);

//if there are no users, adding the users
function populateUsers() {
    User.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            var salt, hash;
            salt = createSalt();
            hash = hashPassword(salt, 'ksaras');
            User.create({firstName: 'Karthik', lastName: 'Saraswa', userName: 'ksaras', salt: salt, hashed_pwd: hash});
            salt = createSalt();
            hash = hashPassword(salt, 'jpapa');
            User.create({firstName: 'John', lastName: 'Papa', userName: 'jpapa', salt: salt, hashed_pwd: hash});
            salt = createSalt();
            hash = hashPassword(salt, 'dwahlin')
            User.create({firstName: 'Dan', lastName: 'Wahlin', userName: 'dwahlin', salt: salt, hashed_pwd: hash});
        }
    });
    function createSalt() {
        return crypto.randomBytes(128).toString('base64')
    }

    function hashPassword(salt, pwd) {
        var hmac = crypto.createHmac('sha1', salt);
        return hmac.update(pwd).digest('hex');
    }
}

exports.populateUsers = populateUsers;
