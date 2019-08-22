// lexical scope rules state that code in one scope can access variables inside or outside of that scope


let a = 5;

var func = () => {
    console.log(a);

    var b = 2;

    var c = a + b;
    a = 20;
    console.log(c);

}

func();

console.log(a);