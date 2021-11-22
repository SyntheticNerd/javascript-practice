let adj1 = "Slimy";
// Assign an adjective
let adj2 = "wretched";
// Assign an adjective
let adj3 = "fluffy";
// Assign an adjective
let adj4 = "icky";
// Assign an adjective
let adj5 = "evanescent";
// Assign an adjective
let adj6 = "towering";
// Assign an adverb
let adverb = "Limply";
// Assign a color
let color = "Blue";
// Assign a noun
let noun1 = "Coaster";
// Assign a noun
let noun2 = "Roller Coaster";
// Assign a noun
let noun3 = "Eifel Tower";
// Assign a noun
let noun4 = "Car";
// Assign a noun
let noun5 = "Table";
// Assign a noun
let noun6 = "Rug";
// Assign a number
let num = 4;
// Assign a plural noun
let pnoun1 = "Houses";

let story = `It has often been said that a dog is a man's best ${noun1}. Dogs are very ${adj1} and can be taught many ${adj2}
tricks. A dog can be trained to carry a ${noun2} in his mouth.
If you throw his ${noun3}, he will run and fetch it. Dogs
will also bark ${adverb} if someone tries to break into your
${noun4} during the night. One of the most popular canine pets
today is the ${noun5} Spaniel. Spaniels have curly ${color}
coats and ${adj3} ears. They also have very ${adj4}
dispositions and live to be ${num} years old. Other popular dogs
are ${adj5} Terriers, German ${pnoun1}, and the
${adj6} Poodle. Every ${noun6} should have a loyal dog.`;

document.getElementById("madlib").innerHTML = story;

// function updatemadlib() { //this function gets values from input checks if they exist and updates the document
//     new_adj1 = document.getElementById("new_adj1").value;
//     new_adj2 = document.getElementById("new_adj2").value;
//     new_adj3 = document.getElementById("new_adj3").value;
//     new_adj4 = document.getElementById("new_adj4").value;
//     new_adj5 = document.getElementById("new_adj5").value;
//     new_adj6 = document.getElementById("new_adj6").value;
//     new_adverb = document.getElementById("new_adverb").value;
//     new_color = document.getElementById("new_color").value;
//     new_noun1 = document.getElementById("new_noun1").value;
//     new_noun2 = document.getElementById("new_noun2").value;
//     new_noun3 = document.getElementById("new_noun3").value;
//     new_noun4 = document.getElementById("new_noun4").value;
//     new_noun5 = document.getElementById("new_noun5").value;
//     new_noun6 = document.getElementById("new_noun6").value;
//     new_num = document.getElementById("new_num").value;
//     new_pnoun1 = document.getElementById("new_pnoun1").value;

//     if (new_adj1) {
//         adj1 = new_adj1;
//     }
//     if (new_adj2) {
//         adj2 = new_adj2;
//     }
//     if (new_adj3) {
//         adj3 = new_adj3;
//     }
//     if (new_adj4) {
//         adj4 = new_adj4;
//     }
//     if (new_adj5) {
//         adj5 = new_adj5;
//     }
//     if (new_adj6) {
//         adj6 = new_adj6;
//     }
//     if (new_adverb) {
//         adverb = new_adverb;
//     }
//     if (new_color) {
//         color = new_color;
//     }
//     if (new_noun1) {
//         noun1 = new_noun1;
//     }
//     if (new_noun2) {
//         noun2 = new_noun2;
//     }
//     if (new_noun3) {
//         noun3 = new_noun3;
//     }
//     if (new_noun4) {
//         noun4 = new_noun4;
//     }
//     if (new_noun5) {
//         noun5 = new_noun5;
//     }
//     if (new_noun6) {
//         noun6 = new_noun6;
//     }
//     if (new_pnoun1) {
//         pnoun1 = new_pnoun1;
//     }

//     let story = `It has often been said that a dog is a man's best ${noun1}. Dogs are very ${adj1} and can be taught many ${adj2}
//     tricks. A dog can be trained to carry a ${noun2} in his mouth.
//     If you throw his ${noun3}, he will run and fetch it. Dogs
//     will also bark ${adverb} if someone tries to break into your
//     ${noun4} during the night. One of the most popular canine pets
//     today is the ${noun5} Spaniel. Spaniels have curly ${color}
//     coats and ${adj3} ears. They also have very ${adj4}
//     dispositions and live to be ${num} years old. Other popular dogs
//     are ${adj5} Terriers, German ${pnoun1}, and the
//     ${adj6} Poodle. Every ${noun6} should have a loyal dog.`;

//     document.getElementById("madlib").innerHTML = story;
// };