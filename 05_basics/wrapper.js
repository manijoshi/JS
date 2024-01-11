function outer(fun){
    return function inner(...args){
        return fun(...args);
    }
}
const addFun = (a,b)=>(a+b);
let obj = outer(addFun);

console.log(obj(2,3));

