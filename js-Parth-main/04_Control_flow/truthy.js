const userEmail = []

if(userEmail){
    // console.log("got user email");
}else{
    // console.log("dont have user email");    
}

//falsy value

// false, 0, -0, BigInt(0n), "", null, undefined, NaN

// truty values 

// true, " ", 'false', "0", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// nullish coalescing operator (??): null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1);
