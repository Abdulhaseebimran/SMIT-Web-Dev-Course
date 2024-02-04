// string methods

const name = "JOHN";
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.length);

const myName = "Abdul Haseeb";

console.log(myName.slice(0,5)); // Abdul
console.log(myName.slice(6)); // Haseeb
console.log(myName.slice(-6)); // Haseeb

// Index of

console.log(myName.indexOf("b")); // 1 
console.log(myName.indexOf("a")); // 7


let myArr = ["Abdul", "Haseeb", "Ali"];
// let userInput = prompt("Enter a name");

var flag = false; //  flag variable = 0 (Flase)

// for(let i = 0; i < myArr.length; i++){
//     if (userInput === myArr[i]) {
//         flag = true;
//         break;
//     }
// }

// if(flag === true){
//     console.log("Found");
// }else{
//     console.log("Not Found");
// }

// console.log(myArr.indexOf("Haseeb")); // 1

// if(myArr.indexOf("Abdul") !== -1){
//     console.log("Abdul is in the array");
// }


// if(myArr.indexOf(userInput) !== -1){
//     console.log(`${userInput} is in the array`);
// }

// for(let i = 0; i < myArr.length; i++){
//     if(userInput === myArr[i]){
//         console.log("Found");
//         break;
//     }
// }

// console.log(myArr.join("\n"));

// lastIndexOf : returns the last index of the element

// console.log(myName.lastIndexOf("e"));
// console.log(myName.indexOf("e"));


// charAt : returns the character at the given index

let myStr = "Hello World";

// console.log(myStr[0]); 

// console.log(myStr.charAt(0));

let str = "This is test product";

let word = "test";
let replace = "best";

for(let i = 0; i < str.length; i++){
    // console.log(str.slice(i, i + word.length));
    if (str.slice(i, i + word.length) === word) {
        str = str.slice(0, i) + replace + str.slice(i + replace.length);
        break;
    }
}

// console.log(str);

// console.log(str.replace(word,replace));
// console.log(str.replace(/test/g,replace));


// math methods

console.log(Math.random() * 100 + 1);

console.log(Math.ceil(5.2)); // 6
console.log(Math.floor(5.9)); // 5
console.log(Math.round(5.3)); // 5
console.log(Math.round(5.5)); // 6

console.log(Math.pow(2,3)); // 8
console.log(Math.abs(-5)); // 5

console.log(parseInt("5.3")); // 5
console.log(parseFloat("5.3")); // 5.3

console.log(Number("5.3")); // 5.3


const num = 23.34224;
console.log(num.toFixed(4)); // 23.3422 value return as string

console.log(num.toPrecision(4)); // 23.34 value return as string

console.log(num.toString()); // 23.34224 value return as string