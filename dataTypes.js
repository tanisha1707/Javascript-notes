"use strict"; //it means treat all JS code as newer version
//tc39 and mdn is documentation for JS 


/* memory are of two types - stack and heap
stack memory is for primitive datatype
heap memory is for non premitive datatypes
*/


//datatypes are categorised in two categories based on their storage and access in memory
/* primitive and non primittive
 primitive- 7 types(call by reference- changes done in their copy)
 String
 number
 boolean
 null
 undefined
 bigint
 symbol

 non premitive or reference type- Array, objects, Functions
*/




/* 
data types in JS

 1.number => 2 to power 53
 2.bigint
 3.string =>""
 4.boolean => true/false
 5.null 
 6.undefined
 7.symbol =>used to find uniqueness
 */

let name = "Tanisha" //string datatype
let age = 21; //number datatype
let isLoggedIn = false //boplean data type
let state = null //null datatype
let email; //undefined datatype

console.log(typeof age);
console.log(typeof undefined);//output is undefined
console.log(typeof null);//output will show that null is of object type


//converssion in JS
let score = 33;
console.log(typeof score); //output - number

let num = "21abc"
console.log(typeof num); //output- string

let valueInNumber = Number(num);//conversion in number
console.log(typeof valueInNumber);
console.log(valueInNumber); //output - NaN