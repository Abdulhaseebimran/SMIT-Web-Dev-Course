// ES6 class 1 : Advanced JS 


// var, let and const variables
// var name; 


// console.log(name); // undefined
var name = "John";
var name = "Doe";

// console.log(name); // Doe

// var can be re-declared and re-assigned 


// console.log(name1); // undefined
let name1 = "John";
name1 = "Doe";

console.log(name1); // Doe

// let can be re-assigned but not re-declared

const name2 = "John";
// name2 = "Doe";  // value cannot be re-assigned

console.log(name2); // Error


const std = {name: "haseeb", age: 20};

std.name = "Ali"; // value can be changed not object because it's const variable

console.log(std); // {name: "Ali", age: 20}

// Desctructuring  => Array and Objects

let myObj = {myName: "haseeb", age: 20, city: "Karachi",
    details: {className: "BS", rollNo: 123}
};

let {myName, age, city, details} = myObj;
let {className, rollNo} = details;

console.log(myName, age, city); // haseeb 20 Karachi
console.log(className, rollNo); // BS 123

let myArr = ["Abdul", "Haseeb"];

let [a, b] = myArr;

console.log(a);
console.log(b);

// function myName1(myObj){
//     console.log(myObj);
// }

// myName1({name: "Haseeb"});

function myName1({myName, age}){
    console.log(myName);
    console.log(age);
}

// myName1({myName: "Abdul Haseeb", age: 20});

function restFunc (...rest){
    console.log(rest);
}

restFunc(1,2,3,4,5);






