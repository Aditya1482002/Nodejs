//adding two numbers
function add(){
    var num1=2;
    var num2=4;
    var sum=num1+num2;
    //console.log(sum);
    return sum;
}    
console.log(add());

//closure
function f1(a){
    let b=10;
    var sum =a+b;
    function f2(){
        console.log(sum);
    }
    f2();
}
f1(2);


//hoisting


function f3(a){
    //let b=10;
    b=10;
    var sum =a+b;
    var b;
    function f4(){
        console.log(sum);
    }
    f2();
}
f1(2);
