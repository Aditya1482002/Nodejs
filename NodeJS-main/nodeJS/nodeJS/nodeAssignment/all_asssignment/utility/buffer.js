var buffer1=Buffer.alloc(100);
buffer1.write("i am here");
var a=buffer1.toString('utf-8');
console.log(a);


var bufferSrc=new Buffer('ABC');
var bufferDest=Buffer.alloc(3);
bufferSrc.copy(bufferDest);
var Data=bufferDest.toString('utf-8');
console.log(Data);

//slice or filter the data
var bufferOld=new Buffer("India is great");
var bufferNew=bufferOld.slice(0,4);
console.log(bufferNew.toString());


//concat 2 buffers
var bufferOne=new Buffer('India');
var bufferTwo=new Buffer('Is great');
var bufferThree=Buffer.concat([bufferOne,bufferTwo]);
console.log(bufferThree.toString());
