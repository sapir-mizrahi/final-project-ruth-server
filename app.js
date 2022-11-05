const express = require('express');
const app = express();
const morgan = require('morgan');
const categoryRouter = require('./router/categoryRouter');
const courseRouter = require('./router/courseRourer');
const packagesRouter = require('./router/packagesRouter');
const userRouter = require('./router/userRouter');
const requestsRouter = require('./router/requestsRouter');
const packagesByUsersRouter= require('./router/packagesByUsersRouter')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect("mongodb+srv://sapir:CF472cV2qLQMpA7x@finaly-project-ruth.gqqde21.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log("MongoDB connected");
})

app.use(morgan("dev"));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
})
// const userRouter = require('./router/userRouter');
// const lessonRouter = require('./router/lessonRouter');
// const stageRouter = require('./router/stageRouter');
// const courseRouter = require('./router/courseRourer');
// parse application/json
app.use(bodyParser.json())

app.use('/user', userRouter)
app.use('/categories', categoryRouter)
app.use('/courses', courseRouter)
app.use('/packages', packagesRouter)
app.use('/packagesByUsers', packagesByUsersRouter)
app.use('/requests', requestsRouter)
// app.use('/stage', stageRouter);
// app.use('/lesson', lessonRouter);


//Routes

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;