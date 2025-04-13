// singleton
// Object.create - constructor method 
// constructor se singleton banega

//object literals 

const mysym = Symbol("key1") 

const JsUser = {
    name: "Parth",
    "full name": "Parth Mehta", //this object cant be access using dot method 
    age: 18,
    [mysym]: "mysym1", 
    location : "Mumbai",
    email : "Parthmehta215@gmail.com",
    isLogedIn : false,
    lastLoggedIn: ["monday", "Saturday"],
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

JsUser.email = "Parth@yahoo.com"
// Object.freeze(JsUser)
JsUser.email = "Parth@gmail.com"

// console.log(JsUser);

JsUser.greeting = function() {
    console.log(`hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());





