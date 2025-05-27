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



//below code for coding.foreach will not work as for each loop does not return anything , it can just print .

// const coding = ["js", "ruby", "java", "python", "cpp"]
// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } ) 
// console.log(values);



//lets consider more examples to understand filter , map and redced method of array 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => {
    return num > 4
} )

//try to do same with for each
const newNums1 = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums1.push(num)
    }
} )

console.log(newNums1);


//one more example of filter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);