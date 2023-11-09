//Singleton
//Object.Create()

//object literals
//const obj = {}
const mySym = Symbol("xyz");
const obj = {
    name:"Hitesh",
    age:18,
    location:"jaipur",
    email:"xyz@test.com",
    lastLoggedIn:"Monday",
    "full Name":"Hitesh Agarwal",
    [mySym]: "abc"
}
// Object.freeze(obj);
obj.name="merry";
obj.greeting = function(){
    console.log(`my age is ${this.age}`);
}
// console.log(obj["name"]);
// console.log(obj.location);
// console.log(obj["location"]);
// console.log(obj["full Name"]);
// obj.greeting();
// console.log(obj);
const regularUser = {
    fullName:{
        userfullname:{
            firstName:"Manisha"
        }
    }
}
// console.log(regularUser.fullName?.userfullname?.firstName);

const obj1 = {1:'a',2:'b'};
const obj2 = {3:'c',4:'d'};
// const obj3 = Object.assign({},obj1,obj2);
const obj3 = {...obj1,...obj2};
// console.log(obj3);
const users = [
    {
        id:1,
        email:"abc@test.com"
    },
    {
        id:2,
        email:"abcd@test.com"
    }
]
// console.log(users[0]["email"]);
// console.log(users[0].email);
// console.log(Object.keys(obj));
const course = {
    courseInstructor:"Hitesh",
    coursePrice:"$1000"
}
course.greeting=({time})=>{
    return `Good ${time}`;
}
const {courseInstructor:a}=course;
const {greeting:g}=course
// console.log(a);
// console.log(g({time:"Morning"}));
const result = fetch("https://jsonplaceholder.typicode.com/todos/1");
result.then(res => 
    res.json()).then(d => { 
        console.log(d) 
    }) 