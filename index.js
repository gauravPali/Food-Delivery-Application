var express = require('express');
var app = express();


app.get('/',function(req,res){
    res.send('');
})  

var listner = app.listen('8080',function(){
    console.log(`server listening at ${listner.address().port} `);
})
