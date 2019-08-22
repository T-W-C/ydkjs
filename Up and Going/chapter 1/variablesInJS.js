// JS uses dynamic programming

var a = 5;

a = "hello";

// variables are not bound to a type...


// SCOPE IN JS  

// var, let and const

// var and let:
// the values to these variables can be reassigned and changed!
// VAR: uses function level scope
// LET: uses block level scope

// var defines a variable that can be accessed within the function


// hello only accessible within this block
{
let hello = 0;
}

var hello = 0;

var aFunc = () => {
    var hello = 4;
    var aFuncInAFunc = () => {
        var hello = 2;
        console.log(hello);
    };
    console.log(hello);
    aFuncInAFunc();
};

aFunc();

console.log(hello);

// side note - if assigning variables without scope declared:
//  hello = 4;
// this actually assigns it to a global variable... which is accessible anywhere in the scope. 
// or reassigns it to a previously assigned variable titled hello
// this functionality SHOULD be avoided - it is good practice to always define scope when coding


// const - these 