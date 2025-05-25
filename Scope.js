
// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

if (true) {
    let a = 10
    const b = 20
    var c = 30
}
console.log(a);// a isnot defined 
console.log(b);// b is not defined
console.log(c);// output - 30, this is the problem with var 



function one(){
    const username = "Tanisha"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // two()////if we execute fun two() with console.log ("website "), output - website is not defined

    //if we execute fun two() without console.log ("website ")
    two() //output - Tanisha
}
//one()

if (true) {
    const username = "Tanisha"
    if (username === "Tanisha") {
        const website = " youtube"
        console.log(username + website);
    }
     console.log(website);//output- website is not defined 
}

 console.log(username);//output- username  is not defined 



// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))//humne function ko initialize karne se pahle execute kiya he tab bhi bina err ke output 6 aa rha he 
function addone(num){
    return num + 1
}

//but jab hum expressions ki tarah likhe huye function me initialization ke pahle execute karne ki try karte he then we will get error 
//error -  cannot access addTwo before initialization
addTwo(5)
const addTwo = function(num){
    return num + 2
}
