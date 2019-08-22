// equality operator is ==

// identity/strict equality operator is ===


// the == operator only compares the values of the variables:

let x = 10;

let y = 20;

// returns false
console.log( x == y );

x = "20";

// returns true since the value is the same

console.log( x == y );

// identity/strict equality - only returns true if the TYPE is also the same

console.log( x === y );


// single and double quotes for strings (or termed literals) are just stylistic and are the same thing
string1 = 'Test';
string2 = "Test";

console.log( string1 == string2 );
console.log( string1 === string2 );


// IMPLICIT COERSION:
// this involves the conversion of types in order to match one another for a scenario. 
// It isnt good design practice to RELY on implicit coersion 
// i.e.

num1 = "99.9";
num2 = 99.9;

console.log( num1 == num2 );
// whilst the above is true, it relies on implicit coersion so is NOT a good practice
