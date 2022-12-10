const express=require('express');
const app=express();
const path=require('path');
const { MongoClient, url, client} = require('./connection.js');
// const {MongoClient}= require('mongodb');
//     const url='mongodb://127.0.0.1:27017';
//     const client =new MongoClient(url);
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.post('/process_post',(req,res)=>{
    
    MongoClient.connect(url,(err,db)=>{
        if(err) throw err;
        var dbo=db.db('college');
        dbo.collection('student').findOne({},function(err,result){
            if(err) throw err;
            res.send(result);
            //db.close();
        });
    });  

});


app.listen(4000,()=>{
    console.log('working...');
})
