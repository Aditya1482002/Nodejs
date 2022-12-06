const {MongoClient}= require('mongodb');
const url='mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0';
const client =new MongoClient(url);
async function getData(){
    let result = await client.connect(); 
    let db=result.db('college');
    let  collection=db.collection('student');
    let response=await collection.find({}).toArray();
    console.log(response); 
}
getData();