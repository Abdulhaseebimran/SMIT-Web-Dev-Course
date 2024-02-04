// for loop, flag, break, continue, nested for loop

// for loop

let arr = ["Abdul", "Basit", "Ali", "Ahmed", "Khan"];

// for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
// }

let findName = "Ali";
let isNameFound = false;

for(let i = 0; i < arr.length; i++){
    if(arr[i] === findName){
        isNameFound = true;
        break;  // the loop will break if the name is found
    }
}

// ham flag use karte han, or condition loop ke bahar bhi check karte han

if(isNameFound){
    console.log("Name is found" + " " + findName);
}else{
    console.log("Name is not found" + " " + findName);
}

// print table

// let table = +prompt("Enter the number for table");
// let rangeOfTable = +prompt("Enter the range of table");

// for(let i = 1; i <= rangeOfTable; i++){
//     console.log(table + " x " + i + " = " + table*i);
// }

// nested for loop
// bhair wala loop aik dafa or ander wala loop har bar chale ga

// for(let i = 0; i <= 5; i++){
//     for (let j = 0; j <= 5; j++) {
//         console.log(i + " " + j);
//     }
// }


// delete duplicate values from array

let arr1 = ["H","A", "S", "S", "A", "N"];

for(let i = 0; i < arr1.length; i++){
    for(let j = i+1; j < arr1.length; j++){
        if(arr1[i] === arr1[j]){
            arr1.splice(j, 1);
        }
    }
}

console.log(arr1);

// another way to delete duplicate values from array

let arr2 = ["H","A", "S", "S", "A", "N"];
let unique = [];

for(let i = 0; i <arr2.length; i++){
    if(unique.indexOf(arr2[i]) === -1){
        unique.push(arr2[i]);
    }
}

console.log(unique);

// palindrome words

let word = prompt("Enter the word");
let reverse = "";


for(let i = 0; i < word.length; i++){
    reverse = word[i] + reverse; 
}

if(word === reverse){
    console.log("The word is palindrome");
}else{
    console.log("The word is not palindrome");
}