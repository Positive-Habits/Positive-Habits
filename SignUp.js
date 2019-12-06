//Sign up javascript

signUp();

function signUp() {
    // Create a new instance of the user class
    var user = new Parse.User();
    user.set("email", "email@example.com");
    user.set("username", "my name");
    user.set("password", "my pass");
    user.set("rpassword", "rep pass");


    user.signUp().then(function(user) {
        console.log('User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
    }).catch(function(error){
        console.log("Error: " + error.code + " " + error.message);
    });
}
