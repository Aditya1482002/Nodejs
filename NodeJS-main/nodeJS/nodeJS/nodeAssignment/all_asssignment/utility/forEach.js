const arr=['giraffe','lion','tiger'];
const arr2=[1,2,3,4];
function push(){
    arr.push('ants');
}
push();
arr.forEach(element=>{
    console.log(element);
});
arr2.forEach(element=>{
    console.log(element);
});


const fruits=['banana','orange'];
fruits.unshift('apple');
console.log(fruits);
var x=fruits.findIndex(findFruit);
function findFruit(fruit){
    return fruit=="orange";
}
console.log(x);
// const ages=[2,3,4];
// ages.find