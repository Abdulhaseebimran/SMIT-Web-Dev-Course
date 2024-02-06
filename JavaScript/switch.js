let arr = [11, 12, 13, 14, 16, 17, 18, 19, 20];

// one Number is missing in the array
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i + 1] - arr[i] === 2) {
//     console.log(arr[i] + 1);
//   }
// }

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] !== i + 11){
//         console.log("The missing number in array is: ", i + 11);
//         break;
//     }
// }


// Two Number is missing in the array

let twoArray = [21, 22, 23, 26, 27, 29,31];

for(let i = 0; i < twoArray.length - 1; i++){
    let diff = twoArray[i + 1] - twoArray[i];
    if(diff !== 1){
        for(let j = 1; j < diff; j++){
            console.log(twoArray[i] + j);
        }
    }
}


// for(let i = 0; i < twoArray.length - 1; i++){
//     if(twoArray[i + 1] - twoArray[i] === 2){
//         console.log(twoArray[i] + 1);
//     }
// }


// switchCase statement


let day = prompt("Enter the day: ");

switch(day){
    case "monday":
        console.log("Today is Monday");
        break;
    case "tuesday":
        console.log("Today is Tuesday");
        break;
    case "wednesday":
        console.log("Today is Wednesday");
        break;
    case "thursday":
        console.log("Today is Thursday");
        break;
    case "friday":
        console.log("Today is Friday");
        break;
    case "saturday":
        console.log("Today is Saturday");
        break;
    case "sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}


let month = prompt("Enter the month: ");

switch(month){
    case "january":
        console.log("This is January");
        break;
    case "february":
        console.log("This is February");
        break;
    case "march":
        console.log("This is March");
        break;
    case "april":
        console.log("This is April");
        break;
    case "may":
        console.log("This is May");
        break;
    case "june":
        console.log("This is June");
        break;
    case "july":
        console.log("This is July");
        break;
    case "august":
        console.log("This is August");
        break;
    case "september":
        console.log("This is September");
        break;
    case "october":
        console.log("This is October");
        break;
    case "november":
        console.log("This is November");
        break;
    case "december":
        console.log("This is December");
        break;
    default:
        console.log("Invalid month");
        break;
}

