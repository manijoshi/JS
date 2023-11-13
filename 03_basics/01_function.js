function addTwoNumber(number1,number2){
    console.log(number1+number2);
}
// addTwoNumber(3,"3");
// addTwoNumber(3,3);
// addTwoNumber(3,null);
// addTwoNumber(3,-"3")
function loggedInUser(userName){
    return `${userName} just logged in.`;
}
// console.log(loggedInUser("manisha"));

/*
... (triple dots) operator is used as rest/spread operator depends upon its usecase
if used with function, it's called rest operator else spread operator
*/
function calculateCartPrice(...num1){
    console.log(num1[Math.floor(Math.random()*num1.length)]);
    let sum=0;
    num1.forEach(x=>{
        sum+=x
    });
    console.log(num1.reduce(function(x,y){return x+y},0));
    console.log(sum);
}
// calculateCartPrice(12,23,1,2,44,10,55);

function sumArray(index,arr){
    if(index===arr.length){
        return 0;
    }
    return arr[index]+sumArray(index+1,arr);
}
// console.log(sumArray(0,[1,2,3,4,5,6,7]));

const user={
    product1:"LED",
    price:200,
    arr:[3,2,4,66,3],
    maxInArray: function(){
        console.log(this.arr);
        console.log(typeof this.arr);
        return Math.max(...this.arr);
    }
}
function handleObject(object){
    return `Product is ${object.product1} and Price is ${object.price}`;
}
console.log(handleObject(user));
console.log(user.maxInArray())
