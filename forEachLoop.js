//for each loop calls the  provided function once for each elemnet of the array .

const coding = ["js", "ruby", "java", "python", "cpp"]
//one way to write  for each loop
coding.forEach( function (val){
    console.log(val);
} )

//second way to write  for each loop
coding.forEach( (item) => {
    console.log(item);
} )


//third way to use for each loop
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)


//we can also accesss the index and completwe array with item .
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )




const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

