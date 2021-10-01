const mongoose = require ('mongoose');
const Joi =  require('joi');
const express = require('express');
const lodash = require ('lodash');
const router = express.Router();
const jwt = require('jsonwebtoken')
const register = require('./register-route');
const port = 9999;


const app = express();
mongoose.connect('mongodb://localhost/RegisterLogin')
    .then(()=>console.log('Connected to RegisterLogin....'))
    .catch(err => console.log('Connection not possible'))

app.use(express.json());
app.use('/api/register',register);
app.listen (port,()=>console.log(`Listening to port ${port}`))