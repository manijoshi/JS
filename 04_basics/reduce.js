let myNums = [1,2,3,4,5]
let initialValue = 0;
// let result = myNums.reduce(function (acc,currVal,idx,arr)
//     {
//         console.log(`acc : ${acc} | currVal : ${currVal}`)
//         return acc+currVal
//     },10);
// console.log(result);

// let result = myNums.reduce((acc,currVal,idx,arr)=>
//     {
//         console.log(`acc : ${acc} | currVal : ${currVal}`)
//         return acc+currVal
//     },10);

result = myNums.reduce((acc,curr)=>acc+curr,0)
// console.log(result);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: "12999"
    },
]
//add prices in shopping cart
let output = shoppingCart.reduce((acc,item)=>{
    
    return acc+parseInt(item.price)
},0)
// console.log(output);
