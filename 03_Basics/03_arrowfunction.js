const user = {
    username: "Parth",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Parth"
//     console.log(this.username);  
// }
// chai()

// const chai = function(){
//     let username = "Parth"
//         console.log(this.username);  
//     }
//     chai()

const chai = () => {
    let username = "Parth"
        console.log(this);  
    }
    chai()
    
// ()=>{}   arrow function

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "Parth"})


console.log(addTwo(3, 4));

