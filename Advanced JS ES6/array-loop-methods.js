// Array methods

// let arr = [1,2,4,5,6,7,8,9,10];

// arr.forEach((val, index) => {
//     console.log(val, index);
// });


// arr.forEach(function (val, index) {
//     // console.log(val, index);
//     if(val % 2 === 0){
//         console.log(val, index);
//     }
// })

// Map method

let newArr = [2,3,6,8,9,10];

let mapArr = newArr.map(function (val,index){
    return val * 20;
});

// console.log(mapArr);

// Reduce method

let newArr1 = [2,3,6,8,9,10];


let reduceArr = newArr1.reduce(function (acc, currVal){
    return acc + currVal;
},10);

let reduceArr1 = newArr1.reduce(function (acc, currVal){
    return acc * currVal;
})


// console.log(reduceArr);
// console.log(reduceArr1);


let objArr = [{num: 2}, {num: 3}, {num: 6}, {num: 8}, {num: 9}, {num: 10}];

let reduceArr2 = objArr.reduce(function (acc, currVal){
    return {num: acc.num + currVal.num};
});

// console.log(reduceArr2.num);

// Filter method

let filterArr = objArr.filter(function (val, idx){
     return val.num % 2 === 0;
})

// console.log(filterArr);

// find methods 

let findArr = objArr.find(function (val, idx){
    return val.num === 6;
})

// console.log(findArr);

// findIndex method

let findIndexArr = objArr.findIndex(function (val, idx){
    return val.num === 6;
})

// console.log(findIndexArr);

// concat methods

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

let concatArr = arr1.concat(arr2);
// console.log(concatArr);

// some methods

let someArr = [1,2,3,4,5,6,7,8,9,10];

let someArr1 = someArr.some (function (val,idx){
    return val > 5;
})

// console.log(someArr1);

// Every method

let everyArr = [1,2,3,4,5,6,7,8,9,10];

let everyArr1 = everyArr.every (function (val,idx){
    return val > 5;
})

// console.log(everyArr1);

// arrows functions


let myName = (a,b) => {
    return a + b;
}


// console.log(myName(5,5));

function abc(){
    console.log(arguments);
    console.log(arguments[0]);
}

// abc("Abdul", "Haseeb", "Imran");


