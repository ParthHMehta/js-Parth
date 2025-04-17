var a = 100
if (true) {
    const a = 10
    let b = 20
    var c = 30

    console.log("Inner:" ,a);  
}
console.log(a);
// console.log(b);
console.log(c);
