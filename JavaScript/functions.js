// Function in JavaScript

function hello(){
    console.log("Hello World");
}

hello(); // calling the function

// function with parameters and arguments

function greet (name){
    name = prompt("Enter your name");
    console.log(`Hello, ${name}`);
}

// greet(); // calling the function

// function with return statement

function sum (a, b){
    return a + b;
    // return "Hello World";
}

// console.log(sum(2, 3));
// console.log(sum(5, 7));
// console.log(sum(10, 20));

function fullName (firstName, lastName){
    return `${firstName} ${lastName}`;
}

// console.log(fullName("Abdul")); // Abdul undefined
// console.log(fullName("Abdul", "Haseeb")); // Abdul Haseeb

function getTime (){
    const date = new Date();
    let getHours = date.getHours();
    let getMinutes = date.getMinutes();
    let getSeconds = date.getSeconds();
    let type = "";
    if(getHours >= 12){
        if(getHours === 12){
            getHours = 12;
        }else{
            getHours = getHours % 12;
        }
        type = "PM";
    }else{
        type = "AM";
        getHours = getHours % 12; 
    }
    console.log(`Current Time: ${getHours}:${getMinutes}:${getSeconds}:${type}`);
    // console.log(date.toLocaleTimeString());
}

getTime();

function ageCalculator(birthYear){
    birthYear = +prompt("Enter your birth year: ");
    const date = new Date();
    const currentYear = date.getFullYear();
    const age = currentYear - birthYear;
    console.log(`You are ${age} years old`);
}

// ageCalculator();

function ageInDays (birthYear){
    birthYear = +prompt("Enter your birth year: ");
    const date = new Date();
    const currentYear = date.getFullYear();
    const age = currentYear - birthYear;
    const days = age * 365;
    console.log(`You are ${days} days old`);
}

// ageInDays();

var a = "Hello";

function hello(){
    console.log(a);
    var a = "World";
    console.log(a);
}

hello();
console.log(a);

