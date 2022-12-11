const express=require('express');
const app=express();
const path=require('path');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.post('/process_post',(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    res.send(`<h1>name:${name} <br> email:${email} </h1>`);
});
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/view.html'));
})



app.listen(2000,()=>{
    console.log('working..');
});
