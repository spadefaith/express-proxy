const express = require('express');
const app = express();


app.use("/",(req,res,next)=>{
    console.log('origin ',req.header('Origin'));
    console.log('host ',req.header('Host'));
});

app.listen(80,"0.0.0.0",(err)=>{
    if(err){
        return console.log('app failed to start ',err);
    };
    console.log('listening to port ',80);
});