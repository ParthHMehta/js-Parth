//Immediately invoke function expression two types 

//Named IIFE
(function chai(){
    console.log(`DB Connected`);
})();


//Unnamed IIFE
( (name) => {
    console.log(`DB CONNECTED ${name}`);
} )('Parth')