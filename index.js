const express = require('express');
const app = express();


app.use("/",(req,res,next)=>{
    console.log('origin ',req.header('Origin'));
    console.log('host ',req.header('Host'));
});


require("greenlock-express")
    .init({
        packageRoot: __dirname,
        configDir: "./greenlock.d",
 
        // contact for security and critical bug notices
        maintainerEmail: "jon@example.com",
 
        // whether or not to run at cloudscale
        cluster: false
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