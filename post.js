const mongoose = require ('mongoose');
const Joi =  require('joi');
const express = require('express');
const router = express.Router();
const post = require('./route-post');
const port = 8888;

// const comment = require('./routes/comment');

const app = express();
require('dotenv').config();

mongoose.connect('mongodb://localhost/Post-Comment')
    .then(()=>console.log('Connected to testblog....'))
    .catch(err => console.log('Connection not possible'))

app.use(express.json());
app.use('/api/post',post);
// app.use('api/comment',comment)

app.listen(port,()=>{
    console.log(`Listing -> port -> ${port}`)
});