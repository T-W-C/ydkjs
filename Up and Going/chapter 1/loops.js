for(var i = 0; i < 10; i++) {
    console.log(i);
}

while(i > 0) {
    console.log(i);
    i--;
}

do {
    let x = i++;
    i += 10;
    console.log(x);
} while(i < 500);


while(true) {
    if(i > 0) {
        i -= 10;
        console.log(i);
    } else {
        break;
    }
}