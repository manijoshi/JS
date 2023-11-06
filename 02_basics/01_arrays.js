//Array:- Non-primitive datatype which is resizable and stores mix-data;follows 0-based indexing;
//Declaration
const myArray = ["Alka","Monika","Manisha"];
const myArray1 = new Array(4);
const myArray2 = new Array(11,2,3,4,5,6,7,8,9);
// console.log([...myArray1]);
// console.log(myArray[2]);
// console.log(typeof myArray1[1]);
// console.log(myArray2.copyWithin(1,2,6));//0 is the index telling where to copy;//2 to 6 is the indices of the elements which to be copied on index 0 to length of (6-2-1)
// for(const [index,val] of myArray.entries())
//     console.log(index,val);
// for(const ele of [,"a"].entries())
//     console.log(ele);
const myArray3 = {
    length:3,
    0:"abc",
    1:"def",
    2:"ghi",
    3:"jkl"
}
// for(const ele of Array.prototype.entries.call(myArray3))
//     console.log(ele);
// console.log(myArray2.every((x)=>x<10,0));

// let arr = [1, 2,3, 3, 4];
// arr.every((ele,idx,arr)=>{
//     arr.pop();
//     console.log(`[${arr}][${idx}] => ${ele}`);
//     return ele<4;

// })

// console.log(myArray1.fill(3));
// console.log([...myArray.fill("xxxx",1,1)]);
// const arr2 = Array(3).fill({});
// arr2[1].hi = "hii";
// console.log([...arr2]);

// console.log(myArray2.filter((x)=>x<10));
// console.log(myArray2.find((e)=>e>10));
// console.log(myArray2.findIndex((e)=>e>11));
// const arr2 = new Array(1,2,new Array(3,6,new Array(10,20)));
// console.log(arr2.flat());

// const array2 = [1, , 3, ["a", , ["d", , "e"]]];
// console.log(array2.flat()); // [ 1, 3, "a", ["d", empty, "e"] ]

// console.log(myArray2.flatMap((num)=>num===2?[2,2]:100));
// console.log(new Array(1,2,3,4,5,6,7,8,9,10).forEach((x)=>console.log(x*2)));
// console.log(myArray2.includes(11));
// console.log(myArray2.indexOf(11));
// console.log(myArray2.join(" "));
// const keys = myArray2.keys();
// for(const key of keys) console.log(key);
// console.log(new Array(1,2,3,3,3,3,4,5).lastIndexOf(3));
// console.log(new Array("1","2"));
// console.log(new Array("1","2").map((x)=>parseInt(x)));
// console.log(new Array(1,2,3,4).reduce((acc,curVal)=>acc+curVal,1));
// console.log(new Array(1,40).reduce((acc,curVal)=>Math.min(acc,curVal),1000));
// console.log(new Array(1,2,3,4).push(4));
// console.log(new Array(2,3,4).pop());
// console.log(myArray2.shift());//changes length of the array
// console.log(myArray2.shift());
// console.log(myArray2.slice(1,5));
// console.log(myArray2.some((x)=>x>15));
// console.log(new Array(3,1,50,6,0).sort((a,b)=>b-a));
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1,0,"Feb");
console.log(months);
months.unshift("0");
console.log(months);
console.log(months.values());