// Strings are sequences of characters 
// Strings are immutable

// String Declaration
const str1 = new String("Tanzz-coder");

// we can access a particular character of string 
console.log(str1[3]);  // Output: z

/* String concatenation using + sign (outdated syntax) */
const name = new String("Tanisha");
const age = new String("21");
console.log(name + age); // Output: Tanisha21

/* Modern way of concatenation - using backticks */
console.log(`Hey my name is ${name} and my age is ${age}`);

// ++++++++++++++++++++++++++++++++++++++++++++++++++
// STRING METHODS
console.log(str1.length);          // Output: 11
console.log(str1.toUpperCase());   // Output: TANZZ-CODER
console.log(str1.charAt(4));       // Output: z
console.log(str1.indexOf("z"));    // Output: 3 (first "z" found at index 3)

// substring method to create a substring of a string
let str1Substring = str1.substring(0, 4);
console.log(str1Substring);        // Output: Tanz

// slice method extracts part of a string
let strSlice = str1.slice(0, 3);
console.log(strSlice); // Output: Tan

// trim method to remove unwanted space
let strTrim = "    tannzz     ";
console.log(strTrim.trim()); // Output: "tannzz"

// replace method example
let strReplace = "Hello World";
console.log(strReplace.replace("World", "Tanisha"));  // Output: Hello Tanisha

/*includes method example-the includes() method is used to check if a string contains a specified substring. 
It returns a boolean value:
true if the substring is found.
false if not found.*/
console.log(strReplace.includes('Tanz'));