const user = {
    userName: "SkrSuman",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`UserName: ${this.userName}`);
        console.log(this);
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User("Skr Suman", 9, true)
const userTwo = new User("Skr", 9, false)

console.log(userOne.constructor);
// console.log(userOne);
// console.log(userTwo);