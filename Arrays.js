/*
Arrays is data structure used to store multiple values in a single variable .
In js, arrays can hold varios data types values in same array and allows for dynamic resizing .
elements are accesed by their index 
o based indexing is odne in arrays 
*/

const myArr = [1,2,4,6,8];
// arrays in js are resizable
// arrays in js make shallow copy - look into it(basically changes conatin same reference)

//accesing araays
console.log(myArr[0]);

/* 
modification in array elements can be done by 
assigning new values to specific indices
*/

myArr[3] = 10;
console.log(myArr);//output - [ 1, 2, 4, 10, 8 ] 



//-----------------------Array methods-------------------------------


//1. push-adds one or more elemnets to the end of an array 
myArr.push(12);
console.log(myArr);//[ 1, 2, 4, 10, 8, 12 ]

//2. pop - removes last elements in arrays
myArr.pop();

//3. unshift- insert something at starting of array
myArr.unshift(0)

//4. shift- removes something from start of the array 
myArr.shift(0)
//console.log(myArr);

//5. indexof - returns the index of elements
console.log(myArr.indexOf(10));

//6. includes - search for a value in array 
console.log(myArr.includes(9));

//7 slice - return new array containing a portion of the original array 
console.log("A ", myArr)//output - A  [ 1, 2, 4, 10, 8 ]
const myn1 = myArr.slice(1,3)
console.log(myn1);//ouput -[ 2, 4 ]
console.log("B ", myArr);//output - B  [ 1, 2, 4, 10, 8 ]

//8. splice - used to insert and remove elements in btw the array . it performs the changes in original array
const myn2 = myArr.splice( 1,3)
console.log("C", myArr);// C [ 1, 8 ],  splice se 1-3 ke elements remove ho gaye
console.log(myn2); // [ 2, 4, 10 ]

//joins the array in to new arr and convert into a string
const newArr = myArr.join()
console.log(newArr);//1,8-output will be in string form 
console.log(typeof newArr);//string



const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros); 
/* ye work nhi karta he acchese , as we can see isme array ko hi ek single elememt bana ke add kar diya he - 
[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] */

//9. concat method - used to concatenate two or more arrays 
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//we can also use spread operator - ...
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//10. flat - Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);/* output - [
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ] */



console.log(Array.isArray("Hitesh"));// verifies that it is array or not, output -  false
console.log(Array.from("Hitesh"));//converts into array -[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting case - as we didnt defien that kisko convert karna he array me key ko ya value ko , to ye [] empty array provide karega 

let score1 = 100
let score2 = 200
let score3 = 300

//array.of - Returns a new array from a set of elements.
console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]