"use strict"; // use all JS code as newer version of js
let age = 98;
let name = "Merry";
let isMarried = false;
let graduated = null;
let isWorking;
let a = Symbol('122');
let b = Symbol('122');
console.log(a==b);
console.table([typeof age,typeof name,typeof isMarried, typeof graduated, typeof isWorking]);
/*
Primittive/Call By Value Types:-
number => 2 to the power 53
bigint
string => ""
boolean => true/false
null => standalone value
undefined => undefined
symbol => define uniqueness

Non-Primittive/Referencing Types:-
Array
Object,
Function
*/

const empNames = ["John","Malti","NinjaD","Michale"];
const myObj = {name:"teepu",
age:95,
generation:"The Silent Generation"};
const greet = function(){
    console.log("Hello World");
}
console.table([typeof empNames,typeof(myObj),typeof greet]);