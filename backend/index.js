// Main File to run and manage backend server
const express = require('express');

const userRouter = require('./routers/userRouter');
const issueRouter = require('./routers/issueRouter');
const cors = require('cors');

const app = express();

const port = 5000;

// middleware
// for converting json data to javascript object
app.use(express.json());

// for allowing frontend to make request
app.use(cors( {
    origin : [ 'http://localhost:3000' ]
} ));

app.use('/user', userRouter);
app.use('/issue', issueRouter);


// processing the request

// route or endpoint
app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/home', (req, res) => {
    res.send('response from home');
})

// app.get('*', (req, res) => {
//     res.send('404 invalid route');
// })

// starting the express server
app.listen(port, () => {
    console.log('express server started');
});