const express = require('express')
const mongoose = require('mongoose')
const app = express()
const login= require('./login-route')
const port = 7777;

mongoose.connect("mongodb://localhost/RegisterLogin")
    .then(()=>console.log('Connected to mongoDb...'))
    .catch((err)=>console.log('Could not connect to mongoDb',err))

app.use(express.json())

app.use('/api/login',login)

app.listen (port,()=>console.log(`Listening to port ${port}`))