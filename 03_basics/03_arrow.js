user = {
    name:"manisha",
    age:23,
    greeting:function(){
        console.log(this);
        return this.name;
    }
}
// console.log(user.greeting());   //{ name: 'manisha', age: 23, greeting: [Function: greeting] }
// console.log(this);              //{}
function addTwoNo(){
    let userName="manisha";
    console.log(this);   //'this' binding works with regular function
}
addTwoNo();

// const addTwoNo1 = ()=> {
//     // let userName="manisha";
//     // console.log(this);      //'this' binding doesn't works with arrow function
// }
// addTwoNo1();

// const addTwoNo=(a,b)=> (a+b);    //implicit type arrow function: here return keyword by default works
// console.log(addTwoNo(4,6));

// const addTwoNo=(a,b)=> ({userName:"manisha"});
// console.log(addTwoNo(4,6));