const coding = ["js", "python", "java", "cpp", "rb"]

// coding.forEach(function (item) {
//     console.log(item);
    
// })
// coding.forEach( (val)=>{
//     console.log(val);
    
// })

function printme(val){
    //console.log(val);
    
}

coding.forEach(printme)

coding.forEach((item, index, arr) => {
    //console.log(item, index, arr);
    
})

const mycoding = [
    {
        LanguageName: "javascript",
        LanguageFileName: "js",
    },
    {
        LanguageName: "python",
        LanguageFileName: "py",
    },
    {
        LanguageName: "ruby",
        LanguageFileName: "rb",
    },
]

mycoding.forEach((val)=>{
    console.log(val.LanguageName);
    
})

