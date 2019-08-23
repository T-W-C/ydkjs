/**
 * * the module pattern is a common way of using closures in JS
 * modules allow one to define private implementation details
 * (i.e. variables and functions) that are hidden to the outside
 * world, as well as a public API that is accessible from the outside
 */

 function User() {
     var username, password;

     function doLogin(user, pw) {
        username = user;
        password = pw;
        //  TODO: rest of login work
     }

     function getUsername() {
         return username;
     }

     var publicAPI = { 
         login: doLogin,
         username: getUsername
     };

     return publicAPI;
 }

var fred = User();

fred.login('Fred', '12345');
console.log(fred.username());
