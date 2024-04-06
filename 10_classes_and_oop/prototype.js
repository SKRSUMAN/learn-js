// let myName = "Suman    "
// let mychanel = "SkrSuman    "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.SkrSuman = function(){
    console.log(`Skr Suman is present in all objects`);
}

Array.prototype.heySuman = function(){
    console.log(`Suman says hello`);
}
// heroPower.SkrSuman()
// myHeros.SkrSuman()
// myHeros.heySuman()
// heroPower.heySuman()

// inheritance 

const User = {
    name : "Suman",
    email : "Skr@examlple.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    Assignment : 'JS Assignment',
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "SkrSuman     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"suman".trueLength()
"kumar".trueLength()