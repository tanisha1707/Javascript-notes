const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

console.log(balance.toString().length); //.toString string me convert kar dega
console.log(balance.toFixed(1));//output-100.0 , .toFixed badi values ko ek standard par fix karne ke liye use karte he 

const otherNumber = 123.8966; 
console.log(otherNumber.toPrecision(4));//output-124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//output - 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math.abs(-4));//output-4
console.log(Math.round(4.6));//output-4,roundoff kardega
console.log(Math.ceil(4.2));//output-5, higher value to roundof 
console.log(Math.floor(4.9));//output-4, lowervalue to roundof
console.log(Math.min(4, 3, 6, 8));//output-3
console.log(Math.max(4, 3, 6, 8));//output-8

console.log(Math.random());//output - any random value
console.log((Math.random()*10) + 1); //output in range of 0-10
console.log(Math.floor(Math.random()*10) + 1);//output in range of 0-10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)