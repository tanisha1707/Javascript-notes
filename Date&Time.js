/*In JavaScript, date objects are created with new Date().*/
let myDate = new Date()
console.log(myDate);//output - 2025-05-03T15:34:13.440Z
console.log(myDate.toDateString());//output - Sat May 03 2025
console.log(myDate.toLocaleDateString());//output -5/3/2025
console.log(myDate.toLocaleString());//output -5/3/2025, 3:41:15 PM

console.log(typeof myDate);//object

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate. toDateString)//Mon Jan 23 2023

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

`${newDate.getDay()} and the time ` 

newDate.toLocaleString('default', {
    weekday: "long",
    
})