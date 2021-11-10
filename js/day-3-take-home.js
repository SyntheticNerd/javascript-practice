// Ask for the user's first name
// Ask for the user's last name
// Log the user's first name to the console
// Alert the user's last name

// *BONUS* 
// Ask for the user's birthday
// Ask the user to confirm their birthday input
// Alert the user's birthday
function doFunction() {
    let firstname = prompt("What is your first name?");
    let lastname = prompt("What is your last name?");

    console.log(firstname);
    alert(lastname);

    var bday = prompt("What is your Birthday", "00/00/0000")
    while (!bday.match("^\\d{2}/\\d{2}/\\d{4}")) {
        bday = prompt("Incorect format try again", "00/00/0000")
    } //super annoying website practice
    confirmit();
    //call the confirm function

    function askbday() {
        bday = prompt("What is your Birthday", "00/00/0000")

        while (!bday.match("^\\d{2}/\\d{2}/\\d{4}")) {
            var bday = prompt("Incorect format try again", "00/00/0000")
        }
        console.log("you are here");
        confirmit();
    }
    //create a function to call if confirm fails

    function confirmit() {
        if (confirm("You Entered: " + bday + " is this correct?")) {
            var bdate = new Date(bday);
            //could have stopped here but I didnt want to alert to have the seconds

            var monthName = {
                month: 'long'
            };
            var month1 = Intl.DateTimeFormat('en-US', monthName).format(bdate);
            //this is the method for getting the long form of the months otherwise months will be (0-11)
            var date = bdate.getDate();
            //getDate works fine for the day
            var wd = {
                weekday: 'long'
            };
            //had to use a similar method to get the name oif the day otherwise you get a number (0-6)
            var day = Intl.DateTimeFormat('en-US', wd).format(bdate);
            var year = bdate.getFullYear();

            alert("Your Birthday is: " + day + " " + month1 + " " + date + " " + year);

            var today = new Date();
            var age = today.getFullYear() - bdate.getFullYear();
            var m = today.getMonth() - bdate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            alert("You are " + age + " years old");
        } else {
            askbday();
        }
    }
    //created a confirm funnction to call in the askbday function
}