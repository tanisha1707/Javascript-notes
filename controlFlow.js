//conditional statement 
// if else 
// <, >, <=, >=, ==, !=, ===, !==

const temperature = 41
if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}



const score = 200
if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`);// output err - power is not defined , it is because of scope issue 



const balance = 1000
if (balance > 500) console.log("test"),console.log("test2");//not a good practice to write code this way

//if else if example 
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
     } else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");
}



const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard ) {
    console.log("Allow to buy course");
}


const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++SWITCH STATEMENT+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

switch (key) {
    case value:
        
        break;

    default:
        break;
}

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}



//+++++++++++++++++++++++++++++++++++++++++++++++++++ TRUTHY AND FALSY IN JS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// falsy values- false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values - "0", 'false', " ", [], {}, function(){}


const userEmail = "tanz@gmail.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
//output - got user email


const userEmail2 = ""

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
//output - Don't have user email

const userEmail3 = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
//output - got user email



if (userEmail.length === 0) {
    console.log("Array is empty");
}


const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}



// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")