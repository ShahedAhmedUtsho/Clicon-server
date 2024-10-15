// server.js

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app'); // Import the Express app from app.js
const PORT = process.env.PORT || 3000;
const server = require('http').createServer(app); 

const io = require('socket.io')(server);
dotenv.config();





server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);


});