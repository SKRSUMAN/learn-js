// var c = 300

let a = 100

if(true)
{
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner:",a);
}

// console.log(a);
// console.log(b);
// console.log(c);

//Nested Scope

function one()
{
    const username = "Skr Suman"

    function two()
    {
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
}

one()

if(true)
{
    const username = "Skr Suman"
    if(username === "Skr Suman")
    {
       const website = " Youtube" 
    //    console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++ Interesting +++++++++++++

console.log(addone(6)); 

function addone(num)
{
    return num+1
}

// addTwo(5) error

const addTwo = function(num)
{
    return num+2
}

addTwo(5)