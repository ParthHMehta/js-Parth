// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("Five");
    }
    //console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`inner loop value:${j} and inner loop valus ${i}`);
        //console.log(`${i} * ${j} = ${i*j}`);
    }
    
}
let myArray = ["flase", "superman", "Batman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}


// break and continue 
console.log("Continue");

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("detected 5");
        continue
    }
    console.log(`value is: ${i}`);
    
}

console.log("Break");

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("detected 5");
        break
    }
    console.log(`value is: ${i}`);
    
}
