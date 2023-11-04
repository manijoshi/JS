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
console.log("mnhsh".localeCompare("n"));
const names = ["pranav","aman",'pooja','bhupendra'];
console.log(names.sort((a,b)=>a.localeCompare(b)));
const fullnames = ["paul rana","merry rawat","vishwas dubey","alia sharma"];
fullnames.sort((a,b)=>a.split(' ')[1].localeCompare(b.split(' ')[1]));
console.log(fullnames);
const regex = /[A-Z]/g;
const stmt = "The quick brown fox jumps over the little lazy Dog.";
const found = stmt.match(regex);
console.log(found);
const myContact = "9871234512";
console.log(myContact.slice(-4).padStart(myContact.length,'*'));
console.log(myContact.repeat(2));

const nickName = "kunnu";
console.log(nickName.slice(1,5));
console.log(nickName)

const cars = ["Saab", "Volvo", "BMW"];
cars.splice(1,0,'Suzuki');
console.log(cars);
console.log(cars.slice(1,5));
const num = ["2","1","4","55","45","3"];
const numCopy = [...num];//copy an array using spread 
const numCopy1 = num.slice();
console.log(numCopy.sort((a,b)=>b-a));//descending order sorting
console.log(num);

const str1 = "ansi Khurana";
const reg = /[A-Z]/;
console.log(str1.search(reg));

const num3 = ["2","1","4","55","45","3"];
// console.log(num3.toSorted());//prevents inplace sorting
console.log(num3.sort((a,b)=>b.localeCompare(a)));
console.log(num3);


const regexp = /foo[a-z]*/g;
const strr = "table football, foosball";
let match;
const abc = Array.from(strr.matchAll(regexp),(m)=>m[0]);
console.log(abc);
while((match = regexp.exec(strr))!==null){
    console.log(
        `Found ${match[0]} start=${match.index} end=${regexp.lastIndex}`
    );
}
