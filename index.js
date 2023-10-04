const express = require('express');
const app = express();
const axios = require('axios');
const proxy = require('express-http-proxy');
const GreenlockExpress =require("greenlock-express");
app.use("/",(req,res,next)=>{
    const host = req.header('Host');
    if(host == 'upay-dev.seedbox.ph'){
        return proxy('http://localhost:9324')(req,res,next)
    } else if (host == "standalone-proxy-dev.seedbox.ph"){
        return proxy('http://localhost:9327')(req,res,next)
    } else if (host == "standalone-proxy-staging.seedbox.ph"){
        return proxy('http://localhost:9328')(req,res,next)
    }
});


GreenlockExpress
    .init({
        packageRoot: __dirname,
        configDir: "./greenlock.d",
 
        // contact for security and critical bug notices
        maintainerEmail: "cedrick.campoto@seedbox.ph",
 
        // whether or not to run at cloudscale
        cluster: true
    })
    // Serves on 80 and 443
    // Get's SSL certificates magically!
    .serve(app);

// app.listen(80,(err)=>{
//     if(err){
//         return console.log('app failed to start ',err);
//     };
//     console.log('listening to port ',80);
// });