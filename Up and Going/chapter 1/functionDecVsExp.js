// In javascript functions can be declared or expressed:

// function declaration:
function fun1() {
    return 'test1';
}

console.log(fun1());

var fun1 = function() {
    return 'test2';
}

console.log(fun1());

// function declarations can be called from anywhere - they are hoisted to the top
// function expressions are not - they have to be called from after they are declared

// all declarations both functions and variables are hoisted to the top of the containing scope before any part of code is executed
// first functions, then variables


const testHoisting = () => {
    let a = scope + 3;

    var scope = 2;

    console.log(a);
}

testHoisting();
