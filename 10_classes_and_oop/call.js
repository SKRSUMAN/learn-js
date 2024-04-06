function SetUserName(username){
    // Complex DB calls
    this.username = username
    console.log("Called");
}

function createUSer(username, email, password){
    SetUserName.call(this, username)
    this.email = email;
    this.password = password;
}

const skr = new createUSer("Skr", "Skr@skr.com", "121")
console.log(skr);