let myName = 'Manisha';
let myName1 = "manisha";
let myName2 = `manisha`;
let myNameStringObject = new String('manisha');
let myRepoCount = 10;
//concatenate
console.log(`My name is ${myName} and my repo count is ${myRepoCount}`);
//accessing char
console.log("cat"[2]);
console.log("cat".charAt(2));

//relational operator
const a1="a";
const b="b";
if(a1<b)
    console.log(`${a1} is smaller than ${b}`);
console.log(myName.toUpperCase());
console.log(myName.toLocaleLowerCase());
console.log(myName);

const n1 = "2+2"
console.log(eval(n1));
const n2 = new String("2+2");
console.log(eval(n2));
console.log(eval(n2.valueOf()))
console.log(eval(""));
console.log(eval(null));

const n3 = 154;
console.log(n3.toString(16));
const hex = "CAFEBABE";
console.log(parseInt(hex,16).toString(2));
console.log(Number.MAX_SAFE_INTEGER);//2^53-1
console.log(Number.MAX_SAFE_INTEGER+2==Number.MAX_SAFE_INTEGER+1);//Number.MAX_SAFE_INTEGER+2 = false 
                                                                //Number.MAX_SAFE_INTEGER+1=false and false == false => true

console.log(String.fromCharCode(65,97,66));
console.log("manisha".at(3));//accepts negative as well as positive indexes
console.log("manisha".charAt(3));
console.log("manisha".charCodeAt(1));