/*
IIFE:- Immediately Invoked Function Expression
these functions execute immediately
these expression are used to remove the pollution of global scope variables
so, incase of regular function: global variable is created with the function name
*/
//named IIFE
(function chai(){console.log("chai")})();

//unnamed IIFE
((name)=>{console.log(`chai aur code with ${name}`)})("manisha")

/*
Global Execution Context
Everything in JS happens inside Global execution context.
It has two components Code container and Execution container.
Code container: assigns the memory to the vars and fun
Execution contatiner: assign the values to the vars and executes the code 
Then Global Execution container gets destroyed.
*/