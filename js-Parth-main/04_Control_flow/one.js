// if statement 
const isUserLoggedIn = true

const temperature = 46
if(temperature >= 50 ){
    // console.log("YES");
}else{
    // console.log("NO its not  greater than 50");
}
// console.log("executed");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score>100){
//     var power = "Fly"
//     console.log(`User Power: ${power}`);
    
// }
// console.log(`User Power: ${power}`); //Thats why we dont use Var keyword to define variables because Var defines the Variable globally which is not acceptable instead use let and const

// const balance = 1000

// // if(balance > 500) console.log("test"), console.log("test2");
// if(balance < 500){

//     console.log("less than 500");

// }else if(balance < 750){

//     console.log("less than 750");

// }else if(balance < 900){

//     console.log("less than 900");
    
// }else{

//     console.log(`Balance is ${balance} `);
    
// }

const userLoggrdIn = true
const debitCard = true 
const userLoggrdInFromGoogle = false
const userLoggrdInFromEmail = true

if (userLoggrdIn && debitCard) {
    console.log("Allowed to buy course");
}

if (userLoggrdInFromGoogle || userLoggrdInFromEmail) {
    console.log("user logged in");
    
}


