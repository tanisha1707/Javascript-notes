console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2!=1);
console.log(2==1);


console.log("2" > 1);//output- true
console.log("02" > 1); //outpur- true

console.log(null>0);//output - false
console.log(null==0);//output - false
console.log(null>=0);//output - true
/* the reason is that an equality  check == and 
comaparisons > < >= <= work deferently.
Comparisons convert null to a number , treating it as 0.
that's why(3) null >= 0 is true and (1) null >= is false 
 */