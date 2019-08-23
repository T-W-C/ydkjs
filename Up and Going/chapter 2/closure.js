// a closure is a way to remember and continue to access a functions scope
// and its variables even once the function has finished running

function makeAdder(x) {
    function add(y) {
        return y + x;
    };
    return add;
}

// below returns a reference to the inner add(...)
// the x variable passed in (10) is remembered
var plusOne = makeAdder(10);
// now we call the add(...) reference passing in 5
console.log(plusOne(5));

