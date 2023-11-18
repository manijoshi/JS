let myNum = (Math.random()*10+1|0)+10         //can use |0 to replace Math.filter()
console.log(myNum);

let myNums1= Array(10).fill().map(()=>Math.random()*40|0);
// console.log(myNums1);

let myNums2 = [...Array(10)].map(()=>Math.random()*30+1|0)
// console.log(myNums2);

let x = new Map();
x.set({name:"manisha",age:"23"});
// console.log(x)

let nums = [3,4,5,6,1];
let x1 = nums.map((num)=>{return num+2})

x1 = nums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40)


console.log(x1)

let x2= Array.from({length:10},()=>Math.random()*10+1|0,0)
console.log(x2);
console.log(Array.from({length:4},_=>(Math.random()*10+1|0)*2))