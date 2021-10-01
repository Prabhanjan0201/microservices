const express = require('express')
const mongoose = require('mongoose')
const app=express()
const port =6666;

const comments=require('./route-comment')


mongoose.connect("mongodb://localhost/Post-Comment")
    .then(()=>console.log('Connected to mongoDb...'))
    .catch((err)=>console.log('Could not connect to mongoDb',err))

app.use(express.json())
app.use('/api/comments',comments)




app.listen(port, ()=>console.log(`Listening to port ${port}..`))