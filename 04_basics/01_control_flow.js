if (true) {
    // console.log("Manisha");
}
//for-of loop
const arr = [1,3,5,6,7,9];
const arr1 = [{},{},{}];
for(var num of arr){
    // console.log(num);
}
//for-in loop:- it returns keys
for(var num in arr){
    // console.log(arr[num])
}
//map :- unique items with the order in which the items are inserted
const countries = new Map();
countries.set("IN","India");
countries.set("Fr","France");
countries.set("USA","United States of America");
countries.set("Fr","France"); // won't be inserted as a new key-value pair as map stores unique key
// console.log(countries);
//printing map
for(var [countryCode,countryName] of countries){//map isn't iterable so for-in doesn't work
    // console.log(`${countryCode} :- ${countryName}`);
}

//for-in loop mostly used for objects
const obj = {
    "js":"JavaScript",
    "cpp":"C++",
    "cs":"C#",
    ".py":"Python"
}
for(var key in obj){
    // console.log(`${key} extension for ${obj[key]}`);
}

const langs = ["js","cpp","py","ruby","java"]
// langs.forEach(function (x){console.log(x)});//regular function
// langs.forEach((x)=>{console.log(x)});//arrow function
// langs.forEach(printMe);
function printMe(x){
    console.log(x);
}
// langs.forEach((item,idx,arrlist)=>console.log(`${item} at index ${idx} and array is ${arrlist}`));

const myCoding = [
    {
        langName:"Python",
        langFileName:".py"
    },
    {
        langName:"Java",
        langFileName:".java"
    },
    {
        langName:"C++",
        langFileName:".cpp"
    }
]
// console.log(myCoding)
// myCoding.forEach((item)=>{console.log(item.langFileName)})
const myNums=[1,2,3,4,5,6,7,8,9,10];
let filteredNums = myNums.filter((num)=>{     // when there is a scope {} return must be added
    return num>2;
});
// console.log(filteredNums);
filteredNums = myNums.filter((num)=> num>2);
// console.log(filteredNums);

let myNewNums = [];
myNums.forEach((num,iter,arr)=>{
    if(num>4){
        myNewNums.push(num);
    }
})
// console.log(myNewNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let userbooks = books.filter((bk)=>bk.genre=="History");
userbooks = books.filter((bk)=>{return bk.genre=="History" && bk.publish>=1990})
console.log(userbooks)