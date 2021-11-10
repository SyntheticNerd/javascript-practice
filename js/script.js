//debugger; good for stepping through logic
//console.log("Andrew Schroepfer");
//console.log("Apple Pie");

/* multi line comment
multi line comment
multi line comment
multi line comment*/

//white space is not meaning ful in JS
//naming anything JS is case sensitive
//TODO: Make notes comments can be used by other programs like CANBAN and github
//Semi-Colons are optional?
//let element = document.getElementById('hello');

/*let name = "Andrew";
greeting = `hello ${name}`;
greeting.length
greeting.padStart(25, 'H');
greeting.split(' ');
typeof(name); //get the type of the variable
Number.isFinite(variable)// check the validity of the number make sure its not infinite
//always check for null and undefined values
let bigOne = 1n;
typeof(bigOne); 
//big int stores big numbers... */

/*var num1 = 1; //has scope rules
let num2 = 2; // let can only be declared once
const num3 = 3; //can not change?*/

//Hoisting brings an oject to the top of the scope
//== compares values === compares type

// a back tick "`" is used to make template literal can be used for concatanation

//String Methods --  Array and String Methods
//Make an array with brackets [] 
//arr[arr.length - 1] // gets the last element of an Array
//strings behave a lot like arrays
//arr.indexOf(x) to get the thing storeed in that index dont forget arrays start at 0
//str.slice(str.indexOf("Wo")) //searches for the first matohching string value and print whats next
//arr.slice(2, 3).join(", ") // .join iss used to add element to an array
//array.reverse will reverse an array only works on arrays
// string.toUpperCase(); // string.toLowerCase();
//string.replace("Original", "New");
//string.replaceALL("Original", "New");
//String.repeat(x) //where x is the number of repotiions
//str.startsWhith(""); //str.endsWith("");
//str.includes("");

//Popup Methods

//alert(""); //creates a pop-up from the browser.
//Confirm();
//Prompt("Prompt Words", x); // where x is default value prompt always passes a string

//Math Properties

//Math.ceil //rounds up to the next whole integer
//Math.floor // is the opposite
//Math.round
//Math.max
//... spread operator takes whats in an object and spreads it?
//Math.min // returns the smallest vallue in a list
//Math.pow(10,2) // 100
//Math.sqrt

//Dates

//Date() // returns a string of the current date and time
//new Date();
//Date.now() // returns a UTC number coordinated universal time
//Date.parce("11/11/2021") // returs the UTC number
//new Date(2021, 11, 9, 0 , 0, 0, 0);
//let nextMonth = Date(tomorrow.getFullYear(), tomorrow.getMonth() + 1, tomorrow.getDate();)

// let current_datetime = new Date()
// let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
// console.log(formatted_date)
// console.log(current_datetime.toDateString("yyy-mm-dd hh:mm:ss"));
//info on date support: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString