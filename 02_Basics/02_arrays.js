const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros) //push keyword pushes in the exsisting array
console.log(marvel_heros); // not a good method 

const allheros = marvel_heros.concat(dc_heros) //concat keyword returns a new array 
console.log(allheros);

const all_heros =  [...marvel_heros,...dc_heros]
console.log(all_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Parth"));
console.log(Array.from("Parth"));
console.log(Array.from({name:"Parth"})); //if Array can't be converted it gives an empty array *imp*

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));






