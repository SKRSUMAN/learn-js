// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUSerName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

const skr = new User("Skr", "Skr@gmail.com", "121")

// console.log(skr.encryptPassword());
// console.log(skr.changeUSerName());

// behind the scene

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUSerName = function(){
    return `${this.username.toUpperCase()}`
}

const sk = new User("Skr", "Skr@gmail.com", "121")

console.log(skr.encryptPassword());
console.log(skr.changeUSerName());