//  Dates

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2025, 0, 14, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate1 = new Date("2025-01-20")
// console.log(myCreatedDate1.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday:"long",
})
console.log(newDate);






