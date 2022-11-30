const fs=require('fs');
fs.readFile("./sample.txt","utf-8",(err,data)=>{
    if(err){
        return err;
    }
    //console.log(data);
    for(let i=1;i<=10;i++){
        if(i%2==0){
            console.log(i);
        }
    }
})