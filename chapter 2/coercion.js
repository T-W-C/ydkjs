// there are two main types of coercion: implicit, explicit

// explicit coercion is a visible conversion that is to take place in the code
// an example:

var a = "42";

var b = Number(a);


console.log( b );



// implicit coercion is shown below:
var a = "42";
var b = a * 1;
console.log(a, typeof a);
console.log(b, typeof b);

// note that b has been converted to an actual number



// TRUTHY AND FALSY
var num1 = 9;
var bool = Boolean(num1);
console.log(bool);

// what is considered false, when converting from a boolean to a non-boolean type
/*
null
undefined
0
-0
NaN
''
false
*/

// any other value of any other type are truthy!
// this includes things like functions