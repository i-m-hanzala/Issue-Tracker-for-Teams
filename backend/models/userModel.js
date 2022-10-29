const {Schema, model} = require('../connection');

const myschema = new Schema({
    username : String,
    email : String,
    mobileno : String,
    password : String,
    age : Number,
});

module.exports = model('users', myschema);