// root import


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const createError = require('http-errors');
const { createServer } = require('http');
const server = createServer(app);
const io = require('socket.io')(server);
const helmet = require('helmet');
const cors = require('cors');





// internal import







//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());









//routing 



app.get('/', (req, res) => {
    res.send('Hello World');
})









// Middleware to handle 404 errors
app.use((req, res, next) => {
    next(createError(404, 'Not Found'));
});






// Error-handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            message: err.message,
        },
    });
});




module.exports = app;