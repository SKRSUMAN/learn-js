function sayMyName() {
    console.log("S");
console.log("k");
console.log("r");
console.log("S");
console.log("u");
console.log("m");
console.log("a");
console.log("n");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//   console.log(number1 + number2);
// }


function addTwoNumbers(number1,number2){
//    let result = number1 + number2
//    return result

      return number1 + number2

}

const result =  addTwoNumbers(3,4)

// console.log("Result :" ,result);

function loginUserMessage(username = "skr"){
    // if(username === undefined)
    // {
    //     console.log("Plese enter a username");
        
    // }

    if(!username)
    {
        console.log("Plese enter a username");
        return
    }
    
        return `${username} just logged in`

    
}

// console.log(loginUserMessage("Skr Suman"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
  return num1
}

// console.log(calculateCartPrice(200, 400, 500, 600, 4562));

const user = {
    username : "Skr Suman",
    price : 199
}

function handelObject(anyObject)
{
   console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handelObject(user)
handelObject({
    username : "skr",
    price : 777
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray)
{
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([107,701,705,777]));