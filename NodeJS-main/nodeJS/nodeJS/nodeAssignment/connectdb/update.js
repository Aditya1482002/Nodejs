const {MongoClient}= require('mongodb');
const url='mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0';
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db('college');
    var pquery={name:'aditya'};
    var newvalue={$set:{name:"rohan"}}
    dbo.collection('student').updateOne(pquery,newvalue,(err,result)=>{
        if(err) throw err;
        console.log(result);
        db.close();
    });
});
