const express = require('express');
const gateway = require('fast-gateway');
const port = 2222;

// const auth = (req,res,next)=>{
//     if (req.headers.token && req.headers.token != ""){
//         next();
//     }else{
//         res.send(JSON.stringify({
//             status:401,
//             message:'Authentication failed...attach a valid token'
//         }))
//     }
// }

const server = gateway({
    routes:[{
        prefix:'/post',
        target:'http://localhost:8888/',
        methods:['GET','POST']
    },
    {
        prefix:'/comment',
        target:'http://localhost:6666/',
        methods:['GET','POST']
    },
    {
        prefix:'/register',
        target:'http://localhost:9999/',
        methods:['POST']
    },
    {
        prefix:'/login',
        target:'http://localhost:7777/',
        methods:['POST']
    }
]
});
server.start(port).then(()=>{
    console.log(`Api-gateway -> Listening -> port -> ${port}`);
}).catch((err)=>{
    console.log(err);
});