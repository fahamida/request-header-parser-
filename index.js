var express = require('express');
var app = express();
var cors = require('cors');
var ip = require('ip');


app.use(cors({optionSuccessStatus: 200})); 

app.get("/api/whoami",function(req,res){

    res.status(200).send({
        "ipaddress":ip.address(),
        "language": req.headers['accept-language'],
        "software":req.headers['user-agent']
    })
})

app.listen(3000,function(){
    console.log("app is running on port "+ 3000);
})