const {Schema, model} = require('../connection');

const myschema = new Schema({
    title : String,
    type : String,
    assignedBy : String,
    assignedTo : String,
    status : String,
    createdAt: Date
});

module.exports = model('issues', myschema);