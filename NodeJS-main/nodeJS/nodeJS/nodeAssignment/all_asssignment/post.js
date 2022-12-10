var express=require('express');
var app=express();
app.post('/hello',(req, res)=>{
    res.send("You just called the post method at '/hello'!\n");
 });
//  var server=app.listen(3000,function(){
//     var host=server.address().address;
//     var port=server.address().port;
//     console.log(host);
//     console.log(port);
//     console.log("application runs at http://",host,port);
// });
app.listen(2000);
