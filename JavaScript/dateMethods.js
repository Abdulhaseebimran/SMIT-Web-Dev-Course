// Date Methods in js

// var date =  Date.now();

let date = new Date();

console.log(date);
// console.log(date.toLocaleString()); // 9/30/2021, 7:00:00 PM
// console.log(date.toLocaleDateString()); // 9/30/2021
// console.log(date.toLocaleTimeString()); // 7:00:00 PM
// console.log(date.toUTCString()); // Thu, 30 Sep 2021 13:00:00 GMT
// console.log(date.toDateString()); // Thu Sep 30 2021
// console.log(date.toTimeString()); // 19:00:00 GMT+0500 (Pakistan Standard Time)

// console.log(typeof date); // object

// let strDate = date.toString();

// console.log(strDate.slice(0,11));
 
// console.log(date.toDateString()); // Thu Sep 30 2023
// console.log(date.toISOString()); // 2021-09-30T13:00:00.000Z
// console.log(date.toTimeString()); // 19:00:00 GMT+0500 (Pakistan Standard Time)

// const date1 = new Date("21 may 2002").getDay();

// console.log(date1);


// ramzan 2024

const date2 = new Date().getTime();
const ramzan = new Date("21 March 2024").getTime();


const diff = ramzan - date2;

const daysLeft = diff / (1000 * 60 * 60 * 24); // 1000ms = 1s, 60s = 1m, 60m = 1h, 24h = 1d
// const TimeLeft = diff / (1000 * 60 * 60 * 24 * 30 * 12); // 1000ms = 1s, 60s = 1m, 60m = 1h, 24h = 1d, 30d = 1m, 12m = 1y
const hoursLeft = diff / (1000 * 60 * 60);
const SecondsLeft = diff / (1000);

console.log("Days Left: ", Math.floor(daysLeft));
// console.log("Time Left: ", Math.floor(TimeLeft));
console.log("Hours Left: ", Math.floor(hoursLeft));
console.log("Seconds Left: ", Math.floor(SecondsLeft));

// set date

// let setDate = new Date();
// console.log(setDate.setFullYear(2024));
// console.log(setDate.setMonth(2));
// console.log(setDate.setDate(21));
// console.log(setDate.setHours(0));
// console.log(setDate.setMinutes(0));
// console.log(setDate.setSeconds(0));
// console.log(setDate.setMilliseconds(0));
