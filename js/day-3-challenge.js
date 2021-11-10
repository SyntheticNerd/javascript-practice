// CHALLENGE 1
// Prompt the user for their first name
//prompt("What is your Name");
// Store their input to a variable
// Reverse your user’s name
// alert the reversed string
//alert(rstr);
var name = prompt("What is your Name");
const nameArray = name.split("");
const rarray = nameArray.reverse();
var rname = rarray.join(""); //use empty space for seperator to not default to commas
//let rname2 = rname.replace(/,/g,"")
alert(rname);
// Challenge 2
// Prompt for a number value (provide a default of 10)
// Prompt for a second number value (provide a default of 10)
// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result
let x = parseInt(prompt("Enter a Number", 10)); //prompt returns a stringm so you have to parse the string into an int
let y = parseInt(prompt("Enter a Number", 10));
alert(x + y);