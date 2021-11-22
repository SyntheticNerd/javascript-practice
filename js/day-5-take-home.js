function formReader() {
    let x = document.getElementById("writeMe").value;
    let text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.charAt(i);
    }
    return text;
}

function enterPW() {
    let password = formReader();
    console.log(password);
    if (password.length > 20 || password.length < 6) {
        document.getElementById("warning").innerHTML =
            "HAS TO BE 6 - 20 CHARCTERS!";
        if (parseInt(password.charAt(0))) {
            document.getElementById("warning").innerHTML =
                "HAS TO START WITH A LETTER! <br>HAS TO BE 6 - 20 CHARCTERS!";
        }
        document.getElementById("writeMe").value = "";
    } else if (parseInt(password.charAt(0))) {
        document.getElementById("warning").innerHTML =
            "HAS TO START WITH A LETTER!";
        document.getElementById("writeMe").value = "";
    } else {
        document.getElementById("warning").innerHTML =
            "Your password has been accepted!";
        document.getElementById("writeMe").value = "";
    }
}

function testLength(length) {
    if (length <= 20 && length >= 6) {
        document.getElementById("req2").style.color = "var(--clr-g2)";
    } else {
        document.getElementById("req2").style.color = "var(--clr-p2)";
    }
}

function testLetter(char) {
    if (/[a-zA-Z]/.test(char)) {
        document.getElementById("req1").style.color = "var(--clr-g2)";
    } else {
        document.getElementById("req1").style.color = "var(--clr-p2)";
    }
}

document.addEventListener("keyup", function () {
    let y = formReader().length;
    let firstLetter = formReader().charAt(0);
    testLength(y);
    testLetter(firstLetter);
});