//FINDING ALL DOCUMENTS 
// const {MongoClient}= require('mongodb');
// const url='mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0';
// MongoClient.connect(url,function(err,db){
//     if(err) throw err;
//     var dbo=db.db('college');
//     dbo.collection('student').find({}).toArray((err,result)=>{
//         if(err) throw err;
//         console.log(result);
//         db.close();
//     });
// });


//FINDING ONLY NAMES OF ALL DOCUMENTS
// const {MongoClient}= require('mongodb');
// const url='mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0';
// MongoClient.connect(url,function(err,db){
//     if(err) throw err;
//     var dbo=db.db('college');
//     dbo.collection('student').find({},{projection: {name:1}}).toArray((err,result)=>{
//         if(err) throw err;
//         console.log(result);
//         db.close();
//     });
// });


//FILTER
const {MongoClient}= require('mongodb');
const url='mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0';
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db('college');
    var query={name:'yashika'};
    dbo.collection('student').find(query).toArray((err,result)=>{
        if(err) throw err;
        console.log(result);
        db.close();
    });
});

