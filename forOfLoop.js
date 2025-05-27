// for of

// ["", "", ""]
// [{}, {}, {}]

//example of for of loop 
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps- the map object holds key value pairs and remembers the original insertion order of the keys . 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")// it will not print anything as In india already defined in the start , map objects are specifically known for unique values 

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


//for of loop doesnt work with object 
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}


//no sense of this it will cause err -  myobject is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }