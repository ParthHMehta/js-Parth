const coding = ["js", "python", "java", "cpp", "rb"]

const values = coding.forEach( (items) => {
    console.log(items);
    
})
console.log(values);

const mynums = [1,2,3,4,5,6,7,8,9,10]

const newnums = mynums.filter( (nums) => {
    return nums>5                           //If we open a scope it is mandatory to use return keyword 
}) 
console.log(newnums);

const mynumss = [1,2,3,4,5,6,7,8,9,10]

const newnumss = mynums.filter( (nums) => nums > 5 ) //in this case there is no need of return keyword 
console.log(newnumss);

