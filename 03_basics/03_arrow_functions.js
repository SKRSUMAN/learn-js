const user = {
    username: "Skr Suman",
    price : 777,

    welcomeMessage : function()
    {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Suman"
// user.welcomeMessage()

// console.log(this);

// function chai()
// {
//     let username = "Skr Suman"
//     // console.log(this);
//     // console.log(this.username);
// }

// chai()

// const chai = function()
// {
//     let username = "Skr Suman"
//     console.log(this.username);
// }

const chai = () =>
{
    let username = "Skr Suman"
    console.log(this.username);
}

// chai()


// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) =>( {username : "skr suman"})

console.log(addTwo(4,3))

// const myArray = [1, 2, 3, 4]

