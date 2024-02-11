// Primitive

// 7 types : String, number, Boolean, null, undefined, symbol, BigInt

let Name = "Suman";
const marks = 98;
const marksPercentage = 98.8;

const isLoggedIn = true;
const outSideTemp  =null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 2545545451n;

// Reference (Non Primitive)

// Array, Objects, Functions

const names = ["Suman", "Anjali"];

let myObj = {
    name: "Suman",
    age: 22
}

// console.log(names);
// console.log(myObj);

const myFunction = function(){
    console.log("Hey Suman");
}

myFunction();

console.log(typeof myFunction);