/* 
we can create an object in two ways - as a literal and as a constructor 
singleton is made when we declare objects as a constructor(object.create)
objects can be declared in 2 ways - literals , constructor 
*/

//-------------------------objects literals----------------------------------------
//objects conatains key/value pairs
const mySym = Symbol("key1")

const JsUser = {
    name : "Tanisha",
    "full name": "Tanisha Dhakad",
    [mySym]: "myKey1", //using symbols as a key 
    age: 21,
    location: "Indore",
    email: "Tanisha@apple.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// objects names or also called keys are stored as strings so to call those keys we have to call it like strings for example- 
console.log(JsUser.email)- // it is not  right way to access
onsole.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

// to overide anything in a object
JsUser.email = "Tanisha@microsoft.com"
console.log(JsUser.email)
/* 
prev: Tanisha@apple.com
Updated/Overide : Tanisha@microsoft.com
*/

// lock or freeze any object
Object.freeze(JsUser) 
JsUser.email = "Tanisha@google.com"
console.log(JsUser.email)


// before freezing : Tanisha@microsoft.com
//after freezing : Tanisha@microsoft.com(didnt change to Aniket@google.com)


//udating objects via use of funtion
JsUser.greeting = function(){
    console.log("Hello Coders ");
}
console.log(JsUser.greeting());


//calling objet values using function
// string interpolation
//string interpolation syntax-->  console.log(`Hello User, ${this.name}`);
JsUser.greetingTwo = function(){
    console.log(`Hello User, ${this.name}`);
}
console.log(JsUser.greetingTwo());


/*difference between greeting and greetingTwo outputs 
greeting-Hello User
greetingTwo-Hello User, Aniket
*/



//---------------------------- singleton object------------------------------
//const tinderUser = new Object() --> singleton object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

// objects inside objects
const regularUser = {
    email : "sysstumm@gmail.com",
    fullname:{
        userfullname :{
            firstname: "Tanzz",
            lastname: "Dhakad"
        }
    }
}
// ? used to check if , it exists or not bascially can be treated as if else
console.log(regularUser.fullname?.userfullname.firstname);



//merging object
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
//const obj3 ={obj1, obj2}-cant do these same array vali problem hogiii
//op : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// just like the arrays we dont need to do this and its wrong 
//console.log(obj3);


//correct way like concatenation using assign
const obj4 = Object.assign({}, obj1, obj2)
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// spread method same as array(...)
//mostly used
const obj5 = {...obj1, ...obj2}
//console.log(obj3);


//objects in array 
const users = [
    {
        id  : 1,
        email : "a@g.com"
    },
    {
        id  : 1,
        email : "a@g.com"
    },
    {
        id  : 1,
        email : "a@g.com"
    },
    {
        id  : 1,
        email : "a@g.com"
    }
]
 console.log(users[1].email);
 
 //some more methods 
 // 1. .keys , .values , .lenght , .entries , 
 // 2. .hasOwnProperty('') --> check if our object have a property named , gives true/false
 console.log(tinderUser);
 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));

 console.log(tinderUser.hasOwnProperty('isLoggedIn'));