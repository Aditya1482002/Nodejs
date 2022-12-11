var express=require('express');
var app=express();
app.get("/",function(req,res){
    res.send("welcome");
});
app.listen(8000);
var express = require('express');
var app = express();

// app.get('/hello', function(req, res){
//    res.send("Hello World!");
// });

// app.listen(3000);