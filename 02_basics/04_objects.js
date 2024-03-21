// const tinderUser = new Object() //- singleton Object 
const tinderUser = {}    // non-singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Skr Suman"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname:{
            firstname : " Skr",
            lastname : "Suman"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
// const obj4 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);
// console.log(obj4);

const user = [
    {
        id: 1,
        email : "Skr@gmail.com"
    },
    {
        id: 1,
        email : "Skr@gmail.com"
    }
]

// console.log(user[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
