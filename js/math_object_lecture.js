"use strict";

// math object is pre-constructed in javascript
// method is a function specific to an object math(object) . random(method) math.random
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math this link shows all Math.' ' methods
// max value is

function getRandomInt(min, max){
//               (max-min + 1) + min
   return Math.random() * (180 + 1) + 20;
}


// will round decimal to the nearest whole number ie. 7
console.log(Math.round(6.96));

// will round down decimal to the nearest whole number ie. 6
console.log(Math.floor(6.96));

// will round up decimal to the nearest whole number ie. 4
console.log(Math.ceil(3.24));

// will return the value of base number to the power of the exponent argument
// first argument will be the base number and second will be the exponent
// ex: Math.pow(base, exponent)
console.log(Math.pow(2, 2));

// will return the square root of number being passed in as the argument
console.log(Math.sqrt(64));

// -------------------------------------------------- Constants ------------------------------------------------------
// represents the base of natural logarithms
console.log(Math.E);
// represents the ratio of the circumference of a circle to its diameter
console.log(Math.PI);
