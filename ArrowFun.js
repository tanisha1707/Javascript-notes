// this keyword 
// this keyword is used when we have to refer something from the current context 
// like from the current scope we have call some value of the object 
// we use this keyword 

const user = {
    username: "Tanisha",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);//this is used to denote the current context
    }

}

user.welcomeMessage() //output- Tanisha welcome to website
user.username = "sam" //output- sam welcome to website
user.welcomeMessage()


function chai(){
    let username = "Tanisha"
    console.log(this.username);//output - undefined
}
chai()

//normal function
const chai = function () {
    let username = "hitesh"
    console.log(this.username);
}

//arrow function
const chai =  () => {
    let username = "Tanisha"
    console.log(this);
}
chai()

//there are diff diff ways to write arrow function

//basic arrow function
     const addTwo = (num1, num2) => {
      return num1 + num2
         }



/*
   implicit return in arrow function
   we assume that we dont need reutrn statement because we have a simple one line problem
   we remove parenthesis and return and take all values in one line
*/
 const addNum = (num1, num2) =>  num1 + num2
 const add2 = (num1, num2) => ( num1 + num2 )
console.log(add2(3, 4))


const myArray = [2, 5, 3, 7, 8]
myArray.forEach(() => {})//arrow fun syntax with array