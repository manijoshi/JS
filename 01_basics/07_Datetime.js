const myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.getDate());
console.log(myDate.getDay()+1);
console.log(myDate.getFullYear());
console.log(myDate.getMonth()+1);

let myCreatedDate = new Date("2023,11,23");
console.log(myCreatedDate.getTime());
let myTimeStamp = Date.now();
console.log(myTimeStamp);