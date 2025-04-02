const accountId = 144553
let accountEmail = "parth@google.com"
let accountPassword = "12345"
accountCity = "Mumbai"
let accountState;
// accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword = "67890"
accountCity = "Jaipur" 

/*
use let instead of var becz of issue in block scope and functional scope 
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
