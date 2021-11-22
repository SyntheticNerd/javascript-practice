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

//Day 4 control Flow

//if(){}
//else if(){}
//else(){}

//&& and, || or
//   var === condition /*truth/falsy*/ ? "exprIfTrue" : "exprIfFalse" //turnary operator used for simple if else
//  switch (expression.valueinform) { //switch statement
//     case "casename": //expression
//         break;//have to have a break statement to exit the switch statement
//     case "casediferent": //expression
//         break;
//     default :
//         break;
// }

//Building objects
// let npc = {
//     thing1: "Thing",
//     thing2: "other thing",
// }


// let x = parseInt(prompt("Enter another number."));
// while (!x) { //anything other than a number returns NaN which is falsy
//     x = +(prompt("Enter a actual number please."));
// }

// let y = parseInt(prompt("Enter another number."));
// while (!y) {
//     y = +(prompt("Enter a actual number please."));
// }

// (x > y) ? alert(x): alert(y);


//   if ( x > y) {
//   alert(x)
// } else {
//   alert (y)
// }

// promises are like an IOU represents something that has pnot been done yet.
// Promise has 3 sstates Pending Resolved and Rejected
//Asynchronous, doesnt happen at the same time.

// const asynchronousFunction = new Promise((resolve, reject) => {
//     // reject(new Error("Failed to retrieve message"))
//     setTimeout(() => {
//         resolve("An asynchronous message");
//     }, 4000)
// });
// //4000 is the number of miliseconds making this delay for 4 seconds
// function alertUserWithMessage(message) {
//   console.log(message)
// }

// function logError(error) {
//   console.log(error.message);
// }

// asynchronousFunction.then(alertUserWithMessage, logError);
// //.then(1,2) is saying once this function is resolved do 1 for resolve and 2 for reject

// asynchronousFunction
//   .then(telephoneMessage, logError)
//   .then(alertUserWithMessage, logError)
//   .catch(logError);
//you can chain multiple promises
//.catch will catch all rejected
//.finally(() => {
//       run function
//   }) 
// you can use new Error("To create new errors")

// similar to
// try {

// } catch (ex) {

// } finally {

// }
//trycatch good if you are using
//so if you need multiple tings to happen you can use Promise.all([])

//check out async and await functions

// fetch("http://api.com/getData").then(response => {  
// })
// A callback is a function passed as an argument to another function.
// Using a callback, you could call a functionA (myCalculator) with a callback, and let the functionB run the callback after the FunctionA is finished:
// function myDisplayer(some) {
//   alert(some);
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }
// myCalculator(5, 5, myDisplayer);

// When you pass a function as an argument, remember not to use parenthesis.
// Right: myCalculator(5, 5, myDisplayer);
// Wrong: myCalculator(5, 5, myDisplayer());

// PROMISES!!!!!!!!
// let myPromise = new Promise(function(myResolve, myReject) {
//   // "Producing Code" (May take some time)

//     myResolve(); // when successful
//     myReject();  // when error
//   });

//   // "Consuming Code" (Must wait for a fulfilled Promise)
//   myPromise.then(
//     function(value) { /* code if successful */ },
//     function(error) { /* code if some error */ }
//   );


// Promise.then() takes two arguments, a callback for success and another for failure.
// Both are optional, so you can add a callback for success or failure only.

// const myPromise = new Promise(function(myResolve, myReject) {
//   setTimeout(function(){ myResolve("I love You !!"); }, 3000);
// });

// myPromise.then(function(value) {
//   document.getElementById("demo").innerHTML = value;
// });
// EXAMPLE USING PROMISES TO ERROR CHECKR EADING A FILE!!!
// let myPromise = new Promise(function(myResolve, myReject) {
//   let req = new XMLHttpRequest();
//   req.open('GET', "mycar.htm");
//   req.onload = function() {
//     if (req.status == 200) {
//       myResolve(req.response);
//     } else {
//       myReject("File not Found");
//     }
//   };
//   req.send();
// });

// myPromise.then(
//   function(value) {myDisplayer(value);},
//   function(error) {myDisplayer(error);}
// );

// NOTES on APIS
// checkValidity() 	Returns true if an input element contains valid data.
// setCustomValidity() 	Sets the validationMessage property of an input element.
//----------------------------------------------------------------
//FETCH APIS DATA
//https://www.javascripttutorial.net/javascript-fetch-api/ great resource for learning about fetching apis
// The fetch() method returns a Promise so you can use the then() and catch() methods to handle it:
// When the request completes, the resource is available. At this time, the promise will resolve into a "Response" object.
// If the contents of the response are in the raw text format, you can use the text() method. The text() method returns a 
// Promise that resolves with the complete contents of the fetched resource:

// USING ASYNC and AWAIT with FETCH
// async function fetchText() {
//   let response = await fetch('/readme.txt');
//   let data = await response.text();
//   console.log(data);
// }


// The Response object provides the status code and status text via the status and statusText properties. 
// When a request is successful, the status code is 200 and status text is OK:
// async function fetchText() {
//   let response = await fetch('/readme.txt');

//   console.log(response.status); // 200
//   console.log(response.statusText); // OK

//   if (response.status === 200) {
//       let data = await response.text();
//       // handle data
//   }
// }

// fetchText();

// let response = await fetch('/non-existence.txt');

// console.log(response.status); // 400
// console.log(response.statusText); // Not Found


//JOSN Notes
// var text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 

// var obj = JSON.parse(text); 

// document.getElementById("demo").innerHTML =
// obj.employees[1].firstName + " " + obj.employees[1].lastName;

// When sending data to a web server, the data has to be a string.
// Convert a JavaScript object into a string with JSON.stringify().

// const obj = {name: "John", age: 30, city: "New York"};
// const myJSON = JSON.stringify(obj); 
// The result will be a string following the JSON notation.

// Stringify a JavaScript Array

// It is also possible to stringify JavaScript arrays: