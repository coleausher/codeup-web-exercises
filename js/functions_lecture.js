"use strict";

// IIFE allows you to have a function produce without calling out the function IIFE = (function inside parenthesis)
(function(){
    alert("hello and welcome to my webpage")
}());

// -------------------------------------how to invoke/call a Function---------------------------------------------------
console.log("functions lecture")

alert("this is my functions lecture!");

//------------------------------------Storing a function in a variable--------------------------------------------------
let userDay = prompt("How's your day going?");

alert("I'm having a " + userDay + " day too!");

// -----------------------------------------defining a function---------------------------------------------------------
// all functions dont need a name
// must have () after function, inside () is a "parameter" a parameter is a placeholder for an "argument"
function greeter(name, message){
    //----------^^^parameter^^^-----------------------------------------------------------------------------------------
    return "Hello " + name + ", " + message + ".";
}

//--------------------------------calling a function (after curly bracket)----------------------------------------------

alert(greeter ("Cole", "have a great day"));
//---------------------^^^---arguments-------^^^^^^---------------------------------------------------------------------
// the argument defines what you want the parameter to be ie. parameter is 'name' and the argument is what you want the name to be ie. 'Cole'

let userName = prompt("what is your name?");
let message = prompt("What would you like your message to be?");

console.log(greeter(userName, message));

// -------------------call a function in a function ie. increment(increment)(increment)(3)------------------------------
function increment(x){
    return x + 1;
}
let four = increment(3);
let six = increment(increment(increment(3)));

// code stops at the first return ('return' or 'console.log')
//---------------------------------------------Anonymous functions-----------------------------------------------------
let greet =  function (name, message){
    return "Hello " + name + " " + message + ".";
}
// ----------------------------------------------Function scoping--------------------------------------------------------
// Global scope (anyone can access from anywhere) height is outside function {--} so its global
let height = "3ft";
function jump(){
   let name = "cole";      // this variable 'name' only accessible inside the function  {--}
    return name + " you jumped " + height;
}
console.log(jump());
console.log(name);

//