var a = "bob fred john frank freddy tommy   ";

const upperCaseFirstLetter = (input) => {
    return String(input).substring(0,1).toUpperCase() + String(input).substring(1,);
};

const deleteBlankElements = (arr) => {
    let correctedArr = [];
    arr.forEach(element => element == '' ? console.log('empty element discarded') : correctedArr.push(element));
    return correctedArr;
}

console.log(a.length);
console.log(a.toUpperCase());

console.log();
let aSplit = deleteBlankElements(a.split(' '))
                .map(val => upperCaseFirstLetter(val));
console.log(aSplit);

var num1 = 3.238547298572893;

// toFixed rounds the number to the number of decimal places that it has been supplied.
console.log(num1.toFixed(3));

// HOW DOES toUpperCase() work on a primitive string type?

// primitive types do not have methods bound to them
// however there are available function calls because of the String wrapper (note not string, but String)
// javascript 'boxes' the string variable type to the wrapper counterpart String
// it is in the wrapper String which is where the method toUpperCase() among others are found

let h = String("hello there");

console.log(typeof String("string"));
"hello".toUpperCase()
