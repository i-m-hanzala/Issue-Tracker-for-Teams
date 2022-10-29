const mongoose = require('mongoose');

const dbName = "issuetracker";
const url = `mongodb+srv://hanzala:hanzala@cluster0.1fm4ywe.mongodb.net/${dbName}?retryWrites=true&w=majority`;


// Promise - a special type of object which needs to be resolved
// asynchronous function - return promise

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;