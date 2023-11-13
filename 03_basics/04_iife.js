/*
IIFE:- Immediately Invoked Function Expression
these functions execute immediately
these expression are used to remove the pollution of global scope variables
*/
//named IIFE
(function chai(){console.log("chai")})();

//unnamed IIFE
((name)=>{console.log(`chai aur code with ${name}`)})("manisha")