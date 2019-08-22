// objects have properties that can be accessed through the '.' notation... obj.a, or obj['a'] in another syntax
obj = {
    a: 1,
    b: 2,
    c: 3987,
    d: 4,
};

console.log(typeof obj);


console.log(obj.a);
console.log(obj["a"]);

objKeys = Object.keys(obj)
console.log(objKeys);


// OF KEYWORD USED FOR ITERABLES SUCH AS ARRAYS AND STRINGS...

console.log('values: ');
// obtaining the values individually of object
for(let key of objKeys) {
    console.log(obj[key]);
}


console.log('arrays:');
arrayEx = [1,2,3,4,5,6];

for(let el of arrayEx) {
    console.log(el);
}

console.log('indexes: ');
// in keyword with arrays used to loop over index values of an iterable like array or string
// obtaining index of the keys in the object
for(let index in objKeys) {
    console.log(index);
}

console.log('looping over the object: ');
// IN KEYWORD USED FOR LOOPING OVER OBJECTS - OR OBTAINING INDEXES FROM ARRAYS
for(let key in obj) {
    console.log(key, ': ', obj[key]);
}

// What type are functions?

// functions are sub types of objects:

console.log(typeof function() {})

// they are listed as their own type, however they can, like objects have properties assocaited to them. 

function example() {
    return 1;
}

example.hello = 4;
console.log(example.hello + example());

