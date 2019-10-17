const express = require('express');
const departments = require('./dep/dep-router')
const server = express();


server.use(express.json());
server.use('/api', departments);


server.get('/', (req, res) => {
    res.send("It's working!");
});




module.exports = server;
