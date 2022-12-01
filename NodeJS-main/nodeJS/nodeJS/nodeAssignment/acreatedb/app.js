const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0/college",
{ useNewUrlParser : true, })
.then(()=> console.log("connection successful")).catch((err)=>console.log(err));

