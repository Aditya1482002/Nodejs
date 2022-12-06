function f1(a){
    let b=10;
    function f2(){
        var sum=a+b;
        console.log(sum);
        function f3(){
            var mul=a*b;
            console.log(mul);
        }
        f3();
    }
    f2();
}
f1(4);