// for of 

//["", "", ""]
//[{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const greeting = "Hello World"
for (const greet of greeting) {
    if (greet == " ") {
        continue
    }
    //console.log(greet);
}

const map = new Map()
map.set('Ind',"India")
map.set('USA',"United States")
map.set('Fr',"France")


//console.log(map);
for (const [key, value] of map) {
    console.log(key, ':-', value)
    }