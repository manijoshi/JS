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
const c=undefined;
console.log("a".charCodeAt(1));
console.log("manisha ".concat("joshi ","ji"));
const namesList = ["anisha",'manisha','isha'];
console.log(...namesList);
console.log("the quick brown fox jumps over the little lazy dog!".endsWith("dog",50));
console.log("the quick brown fox jumps over the little lazy dog!".includes('the'));
const str ="dog is a pet animal. dog is most loveable pet."
const idxOfFirstDog = str.indexOf("dog");
console.log(str.indexOf("dog",idxOfFirstDog+1));//indexOf is case-sensitive
console.log(str.lastIndexOf("dog"));
console.log("manisha".substring(1,4))