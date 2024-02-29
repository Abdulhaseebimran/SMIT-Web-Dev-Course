let firstName = "Abdul";

const myobj = {
    firstName,
    lastName: "Haseeb",
    ["class" + "name"]: "React",
}

// console.log(myobj);

// ternary operator

// let age = 20;

// let isEiligible = age > 18 ? "Yes" : "No";

// console.log(isEiligible);

// let num = 100_00_000_000_00;

// console.log(num);

// let userInput = prompt("Enter your name");

// let name = userInput === "" ? "Guest" : userInput;

// console.log(name);


// callBackFunction 

// function greet(call) {
//     console.log("Hello");
//     function call() {
//         console.log("I am a callback function");
//     }
//     call();
// }

// console.log(greet());

function abc(callback) {
    // console.log("I am a callback function", callback);
    callback();
}

function greet() {
    console.log("Hello");
}

// abc(greet);

// Higher Order Function

function num(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
 
// console.log(num(2)(3)(4));


// Recursion

var count = 0;
function countNum(){
    count++;
    console.log(count);
    if(count < 10){
        countNum();
    }
}

// countNum();

// promise 

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise is resolved");
    }, 5000);
});


// console.log(promise);

// promise.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// let data;
// fetch("https://fakestoreapi.com/products")
// .then(res => res.json())
// .then(res => {
//     data = res;
// }).catch(err => console.log(err));


let getData = new Promise ((resolve, reject) => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(res => {
        resolve(res);
    }).catch(err => reject(err));
}) 

// getData.then(res => console.log(res));
// getData.catch(err => console.log(err));

let sendData = async () => {
    try {
        let data = await getData;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

sendData();

