const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography , network
    setTimeout(() => {
        console.log('Async task is Comple');
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2")
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({userName: "skr", email: "Skr@example.com"})
    }, 1000);
})

promiseThree.then(function(user){
console.log(user);
console.log(user.email);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Suman", password: "121"})
        }else{
            reject('Error: Something went wrong')
        }
    }, 1000);
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
console.log("The promise is either resolved or reject");
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "JavaScript", password: "121"})
        }else{
            reject('Error: JS went wrong')
        }
    }, 1000);
})

async function ConsumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

ConsumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data)=>
{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})