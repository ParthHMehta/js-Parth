// Primitive datatypes
// 7 types : String , number, boolean, null, undefined, symbol, BigInt


const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let UserEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bigNumber = 247851451154544545456n

// Reference or non-primitive 

// Array, Obejcts, Functions, 

const heros = ["shaktiman", "naagraj","doga"]; // Array
 // objects

 let myObj= {
    name: "Parth",
    age: 21,
 }

 // function

 const myFunction = function(){
    console.log("Hello World");
 }
 console.log(typeof scoreValue);
 
//  https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (Non-Primitive)

let myYoutubeName = "Parthmehta1024"


let AnotherName = myYoutubeName
AnotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(AnotherName);

let userOne = {
   email: "Parth@gmail.com",
   upi: "parth@okhdfcbank",
}

let usertwo = userOne

usertwo.email = "Parth123@gmail.com",

console.log(userOne.email);
console.log(usertwo.email);


