//function definition
function sayMyName(){
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
}
sayMyName()


function addTwoNumbers(number1, number2){//number1 and number2 are parameters 
    console.log(number1 + number2);
 }
addTwoNumbers()//Iska output aayega NaN - kyuki abhi humne koi bhi argument pass nahi kiya he 
addTwoNumbers(3, 5)//Iska output aayega 7



function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);


function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Tanzz"))
/*
agar duntion is type se likha hota -

function loginUserMessage(username ){
    return `${username} just logged in`
}
console.log(loginUserMessage("Tanisha"))

then agar aap console.log(loginUserMessage(""))pass karenge then it will output - just logged in and
 if you pass console.log(loginUserMessage())-then it will output undefined just logged in , 
 isliye uis chiz ko avoid karne ke liye we have used if condition here 
 */

  
//when we dont know the numbers og arguments then we can use rest operator (...) to deal with this kind of condtions
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))

//how to pass object in function and how they work 
const user = {
    username: "Tanisha",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

//it is not necessary ki alag se hi object banaye hum function me hi object create karke pass kar sakte he 
handleObject({
    username: "sam",
    price: 399
})

//functions with arrays 
const myNewArray = [200, 400, 100, 600]
//this function return the second value of an array 
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
//or we can directly pass the array as an argument 
console.log(returnSecondValue([200, 400, 500, 1000]));