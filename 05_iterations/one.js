// for

for (let i= 0; i < 10; i++) {
    const element = i;
    if(i==7)
    {
        // console.log("7 is the Best Number");
    }
    // console.log(element);
    
}
for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop Value : ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value : ${j}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
}


let myArray = ['flash','batman', 'superman']

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

//break and continue

for (let i = 1; i <= 20; i++) {
    if(i==5)
    {
        // console.log(`Detected ${i}`);
        break;
    }
    // console.log(`Value of i is ${i}`);
}


for (let i = 1; i <= 20; i++) {
    if(i==5)
    {
        console.log(`Detected ${i}`);
       continue
    }
    console.log(`Value of i is ${i}`);
} 

console.log("Hey");