require('./config/config.js');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const rtsIndex = require('./routes/index.router');

var app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api', rtsIndex);//configer the middleware

//error handler
app.use((err, req, res, next) =>{
    if(err.name === 'ValidationError'){
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});  

//start server
app.listen(process.env.PORT, () => console.log(`Server start at port: ${process.env.PORT}`));