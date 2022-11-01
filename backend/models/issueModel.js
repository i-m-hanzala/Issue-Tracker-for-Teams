const {Schema, model} = require('../connection');

const myschema = new Schema({
    title : String,
    type : String,
    assignedBy : String,
    assignedTo : String,
    status : {type : String, default: 'pending'},
    closed : {type : Boolean, default: false},
    createdAt: Date
});

module.exports = model('issues', myschema);