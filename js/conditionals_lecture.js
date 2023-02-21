"use strict";

// if _ else statements
let age = 16;

if(age >= 16){
    console.log("Old enough to drive")
// else _ if 'true or false' creates a range to look through
} else if (age > 0 && age < 16) {
    console.log("Not old enough")
} else {
    console.log("Not a valid age")
}
// if only 2 conditions just use 'if_else' if more than 2 use if_else_if
// if/else if/else example:
let daysOfTheWeek = prompt("Enter a day of the week");

// if (daysOfTheWeek === "Monday"){
//     console.log("I hate " + daysOfTheWeek)
// } else if (daysOfTheWeek === "Tuesday") {
//     console.log("Tuesdays are better")
// } else if (daysOfTheWeek === "Wednesday") {
//     console.log(daysOfTheWeek + " is fun")
// } else if (daysOfTheWeek === "Thursday") {
//     console.log("Thursday")
// } else if (daysOfTheWeek === "Friday") {
//     console.log(daysOfTheWeek + " is my favorite day")
// } else {
//     console.log("Not a valid day of the week")
// }

// or could do 'OR' inside if statement to shorten spacing

if (daysOfTheWeek === "Monday" || daysOfTheWeek === "Tuesday" || daysOfTheWeek === "Wednesday" || daysOfTheWeek === "Thursday" || daysOfTheWeek === "Friday"){
    console.log(daysOfTheWeek + " is my favorite day too!")
} else {
    console.log("Not a valid day of the week")
}
//

let num = 42;
 if (typeof Num === "string") {
    console.log("typeof 'num' is a number")
} else {
    console.log("typeof is not a number")
}
 // another example of if/else if/else 'if && or || be sure it's at the front'

let username = "user";
let password = "password";

let userUsername = prompt("Enter your username").toLowerCase();
let userPassword = prompt("Enter your password").toLowerCase();
// .toLowerCase forces any input of the prompt to go lowercase ie. making it a valid username/password to login based on the hardcode

if (username === userUsername && password === userPassword) {
    console.log("successfully logged in")
} else if (username !== userUsername && password !== userPassword) {
        console.log("Invalid username and password")

} else if (username !== userUsername){
    console.log("Invalid username")
} else if (password !== userPassword){
    console.log("Invalid password")
} else if (username !== userUsername && password !== userPassword) {
    console.log("Invalid username and password")
}

/////password >= 6 character
/////password must not include spaces
// let password = prompt("Please enter a password")
// if(password.length >= 6) {
// console.log("Valid password") {
// } else { console.log("password has not met requirements")


//--------------------ternary operators-----------------------------
// condition         ? = if         : = else

let name = "Cole"
let greeting = name === "Cole" ? "Hello " + name : "Hello stranger";
console.log(greeting);
//-------these are the same-------
// if (name === "Cole") {
//     console.log("Hello " + name)
// } else {
//     console.log("Hello stranger")
// }

//--------------------switch statement--------------------------
// case = else if          break; (stops the code from continue)
let grade = "B";

switch(grade) {
    case "A":
        console.log("Way to go!")
        break;
    case "B":
        console.log("Good work!")
        break;
    case "C":
        console.log("Not bad!")
        break;
    case "D":
        console.log("Keep trying")
        break;
    case "F":
        console.log("Not good")
        break;
    default:
        console.log(grade + " is not a valid letter grade")
        break;
}
//-----these are the same-------
// if(grade = "A") {
// console.log("Way to go!")
// } else if (grade = "B") {
// console.log("Good work!")