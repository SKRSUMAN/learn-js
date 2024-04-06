class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Usename : ${this.username}`);
    }

    static createId(){
        return `121`
    }
}

const skr = new User("Suman")
// console.log(skr.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());