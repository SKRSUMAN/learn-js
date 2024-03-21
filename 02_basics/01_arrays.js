const myArr = [0, 1, 2, 3, 4, 5]

const myHeors = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[2]);
// console.log(myHeors[1]);
// console.log(myArr2);

// myArr2.push(5)
// myArr2.push(6)
// myArr2.pop()

myArr2.unshift(8)
myArr2.shift()

// console.log(myArr2);

// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(2));
// console.log(myArr2.includes(1));

const newArr = myArr.join()

// console.log(newArr);
// console.log(myArr);


// Slice , splice

console.log("A " , myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);

