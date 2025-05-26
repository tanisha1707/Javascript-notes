//for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}


for (let i = 0 ; i <= 10 ; i++){
    console.log(`Outer loop values: ${i}`);
    for (let j = 0; j <= 10; j++) {
        
        console.log(`Inner values ${j} and inner loop ${i}`) ;
    }
}


//break and continue
for (let index = 1; index <=20; index++) {
    if (index== 5){
        console.log(`detected 5`);
        break
    }
    console.log(`value of index is ${index}`)
    
}


for (let index = 1; index <=20; index++) {
    if (index== 5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of index is ${index}`)
    
}