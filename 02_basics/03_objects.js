// singleton
// Object.create

// object literals

const mySym = Symbol("Key1")


const jsUser = {
    name : "Suman",
    "full name" : "Skr Suman",
    [mySym] : "myKey1",
    age : 18,
    location : "Chennai",
    email : "Suman@dev.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email = "suman@ai.com"
// console.log(jsUser["email"]);
// Object.freeze(jsUser)
jsUser.name = "Skr"
// console.log(jsUser);
// console.log(jsUser["name"]);

jsUser.greeting = function()
{
    console.log("Hello JS user");
}

jsUser.greetingTwo = function()
{
console.log(`Hello JS user ${this.name}`);
}


// console.log(jsUser.greeting);
// console.log(jsUser.greeting());
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
