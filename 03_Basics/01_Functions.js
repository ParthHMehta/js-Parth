function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){ 
//
//     console.log(number1+number2);
// }
function addTwoNumbers(number1, number2){

    return number1 + number2
    
}

const result = addTwoNumbers(3, 4)

// console.log("result:", result);

function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in` 
}

// console.log(loginUserMessage("Hitesh"))
// console.log(loginUserMessage())


function calculateCartPrice(...num1){
    return num1
}
console.log( calculateCartPrice(200, 400, 500));

const user ={
    username: "Parth",
    prices: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [100, 200, 300, 500]

function getSecondValue(getArray){
    return getArray[1]
}

console.log(getSecondValue(myNewArray));
console.log(getSecondValue([100, 200, 300, 500]));







