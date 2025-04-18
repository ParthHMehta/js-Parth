// var a = 100
// if (true) {
//     const a = 10
//     let b = 20
//     var c = 30

//     // console.log("Inner:" ,a);  
// }
// console.log(a);
// console.log(b);
// console.log(c);


// function one (){
//     const username = "Parth"
    
//     function two (){
//         const website = "Youtube"
//         console.log(username);
        
//     }
//     // console.log(website);

//     two()

// }

// one()

// if(true){
//     const username = "Parth"
//     if(username==="Parth"){
//         const website = " Youtube"
//         console.log(username + website);
        // console.log(website);
        
        // }
        // console.log(website); X
        // console.log(username);
// }
// console.log(username); X


// ++++++++++++++++++++++++++++++++++++++++++++++ intresting ++++++++++++++++++++++++++++++++++++++++++++++++++++

// addOne(5) can be used before initialization

function addOne (num){
    return num + 1
}



// addTwo(5)  cannot be used before initialization
const addTwo = function(num){
    return num + 2
}

