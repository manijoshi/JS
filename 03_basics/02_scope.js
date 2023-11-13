
var c=1000
if(true){
    let a=10;
    const b=20;
    var c;
    // console.log(`a = ${a}`);
}
// console.log(a);
// console.log(b);
// console.log(c);

function outerFunction(){
    let var1 = 100;
    function innerFunction(){
        let var2 = 1009;
        return var1;        //Closure:- inner function can access outer function properties.
    }
    console.log(var2);
    return innerFunction();
}
// console.log(outerFunction());

addTwoNum();            // Hoisting works
function addTwoNum(){
    console.log(1+3);
}
// addThreeNum();       //error:- ReferenceError: Cannot access 'addThreeNum' before initialization
const addThreeNum=function(){
    console.log(1+2+3);
}