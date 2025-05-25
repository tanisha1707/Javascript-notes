/*variable is a container (box) that holds a value. 
A variable is simple the name of a storage collection.
 variable hum tin tarike se declare kar skte he 
 */

const nameId = 170204; //ek bar value assign kar di phir change nahi kar skte agar hum const use karte he 
let emailName = "tanishadhakad07@gmail.com";
var accPass = "121212";
yourCity = "Indore";//not a good practice to decalre variables these way 
/* 
 prefer not to use var, beacuse 
 of issue in block scope and functional scope
*/

/*
verification that you can't update value whch are declared using const
nameId = 345345;
console.log(nameId);
*/

emailName= "tanu@gmail.com";
accPass="212121";
yourCity="Ratlam";

console.table([emailName,accPass,yourCity ]);//using console.table we can print multiple variable together 

/*
variable agar decalare kar diya and value nahi assign kari
to print karane par vo vavriable ki value undefined print hogi.
*/