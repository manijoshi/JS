//Number
const score = 100;
const balance = new Number(23.33);
console.table([typeof score,typeof balance]);
console.log(score.toFixed(4));
console.log(balance.toPrecision(1));
console.log((Math.pow(2,53)-1)==Number.MAX_SAFE_INTEGER);

//Math
console.log(Math.abs(-3));
console.log(Math.max(2,4,5,1));
console.log(Math.min(2,3,4,5));
console.log(Math.PI);
console.log(Math.round(4.5));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));
console.log(Math.random());
const max = 20;
const min = 10;
console.log(Math.floor(Math.random()*(max-min+1))+min);//numbers between 10 and 20