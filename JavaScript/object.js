// object class

// let obj = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     email: "john@gmail.com",
//     enroll: true,
// }

// console.log(obj.name);
// console.log(obj.age);
// console.log(typeof obj.email);
// console.log(typeof obj);
// console.log(obj["email"]);

// console.log(obj.firstName); // undefined values 

// obj.classes = ["math", "science", "english"];

// console.log(obj);

// delete obj.city; 
// delete obj["enroll"];
// console.log(obj);

// delete multiple values

// for(let key in obj){
//     console.log(delete obj[key]);
// }

// in keyword 

// check values in object

let student = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York",
    email: "john@gmail.com",
    classTiming: { //method
        morning: "9am",
        evening: "6pm",
    },
    getFUllName: function() {
        console.log("this", this);
        return `${this.firstName} ${this.lastName}`;
    }
}

// console.log(student.getFUllName());
// let getName = student.getFUllName;
// getName();
// student.getFUllName();
// console.log(`firstName ${student.firstName} and lastName ${student.lastName}`);
// console.log("city" in student);


// Hoisting concept
// function abc(){
//     console.log("Hello World");
// }
// pora function utha k uper le jata hai 

// abc();

// function abc(){
//     console.log("Hello World");
// }

// let Myname; // or sirf variable uper le jata hai value nhi
// console.log(Myname);

// let Myname = "Haseeb";

// let abc;
// abc(); // error 

// let abc = function(){
//     console.log("Hello World");
// }


let student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York",
    email: "john@gmail.com",
    enroll: true,
}

// let userInput = prompt("Enter the key");

// if(userInput in student1){
//     console.log("Yes, it is in student1 object", student1[userInput]);
// }else{
//     console.log("No, it is not in student1 object", student1[userInput]);
// }

// for(let key in student1){
//     console.log(key + " : " + student1[key]);
// }


for(let key in student1){
    console.log(student1[key]);
}


// Task
let carObj = {
    Toyota: {
        grande:{
           Name: "Grande",
           Model: 2020,
           Gates: 4
        },
        Atlis: {
            Name: "Atlis",
            Model: 2021,
            Gates: 4 
        }
    },
    Suzuki: {
        Alto: {
            Name: "Alto",
            Model: 2015,
            Gates: 4,
        }
    }
}


let carCompany = prompt("Enter the car company");
let carName = prompt("Enter the car name");

for(let key in carObj){
    if(key === carCompany){
        for(let key1 in carObj[key]){
            if(key1 === carName){
                console.log(carObj[key][key1]);
            }else {
                console.log("Car name not found");
            }
        }
    }
}

