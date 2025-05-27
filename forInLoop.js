//for in loop
/*for in loop used to iterate over the propertis of an object .
 The for-in loop iterates only over those keys of an object which have their enumeable proper set to true ,
*/

//for-in loop with objects 
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


//for-in loop with arrays 
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
}



const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
//iteration over map using for in loop but with is also is not possible to iterate over map 
for (const key in map) {
    console.log(key);
}