// const tinderuser = new Object()  a singleton obejct 
const tinderuser = {}   //a non-singleton obeject the only internal obeject 

tinderuser.id = "123abc"
tinderuser.name = "Parth"
tinderuser. isLoggedIn = false 

// console.log(tinderuser);

const regularuser ={
    email: "some@gmail.com",
    fullname: {
        username: {
            firstname: "Parth",
            lastname: "Mehta",
        }
    }
}

// console.log(regularuser.fullname.username);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

const users = [
    {
        id : 1,
        email : "P@gmail.com",
    },
    {
        id : 1,
        email : "P@gmail.com",
    },
    {
        id : 1,
        email : "P@gmail.com",
    },
]

users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.keys(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLogged'));


const course = {
    coursename:"js in hindi",
    price: "999",
    courseinstructor: "Hitesh",
}

// course.courseinstructor()

const {courseinstructor:instructor} = course

console.log(instructor);

// {
//     name: "Parth",
//     coursename: "js in hindi",
//     price: "free",
// }


