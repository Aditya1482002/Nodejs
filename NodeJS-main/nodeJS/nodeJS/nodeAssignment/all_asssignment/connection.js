//function con(){
    const {MongoClient}= require('mongodb');
    const url='mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0';
    const client =new MongoClient(url);
// MongoClient.connect(url,function(err,db){
//     if(err) throw err;
    
// });
//}
module.exports = { MongoClient ,url,client }