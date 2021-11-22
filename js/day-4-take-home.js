function day4() {
    let x = parseInt(prompt("Enter the first number."));
    while (!x) { //anything other than a number returns NaN which is falsy
        x = parseInt(prompt("Enter a actual first number please."));
    }

    let y = parseInt(prompt("Enter second number number."));
    while (!y) {
        y = parseInt(prompt("Enter a actual second number please."));
    }
    if (x === y) {
        alert("Numbers are equal!");
    } else {
        (x > y) ? alert(x): alert(y);
    }
}