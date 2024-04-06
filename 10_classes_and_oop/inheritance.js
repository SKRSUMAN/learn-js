class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;

    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const skr = new Teacher("Skr", "Skr@gmail.com", "121")
skr.addCourse()

const suman = new User("Suman")
// suman.addCourse()
suman.logMe()

// console.log(skr === suman);
// console.log(skr instanceof Teacher);
console.log(skr instanceof User);