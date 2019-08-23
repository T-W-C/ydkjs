// ways of declaring a function in javascript:
"use strict";


function aFunction() {
};

const aFunction2 = function () {
};

const aFunction3 = () => {
};



function func() {
    let b = 9; // this is declared as a global since no scope assigned 



    foo();

    function foo() {
        a = 3;

        console.log(a);

        var a = 0; // this declaration is hoisted to the top of the function (top of its scope)
    }

    a = 2;

    console.log(a);

    var a;
}

func();

// console.log(global.b); // b is accessed as a property to the global object



function foo2() {
    var a = 1;

    function bar() {
        var b = 2;

        function baz() {
            var c = 3;

            console.log( a, b, c );// 1, 2, 3
        }

        baz();
        console.log( a, b ); // 1, 2
    }

    bar();
    console.log( a ); // 1
}

// If variables are attempted to be accessed in a scope where its not available you'll get a ReferenceError thrown



// functions can be assigned to variables
// either anonmously or not...

// arrow functions should only be used when functions act as data

var anonymousFunction = function() {
    console.log('hmm');
}

var NotAnonymousFunction = function boo() {
    console.log('hahahaha');
}


NotAnonymousFunction();
