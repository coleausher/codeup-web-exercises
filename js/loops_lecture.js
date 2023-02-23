"use strict";

// ----------- 1. While Loops -------------
// checks for condition ie. a < 10 and if true then it executes the { body }, then checks again until false

//                     while (/*condition*/) {
//                              //body
//                      }

let a = 0;
while (a < 10){
    console.log("while loop prints #" + a )
    a++;
}
// increment by 2 --> i += 2
//                   1. i + 2
//                   2. i = i + 2


// prints #0 - #9 and stops at #10 because 10 is not < 10
// if i = 10 the loop would not print anything because 10 is not < 10

// initially the value of yes is true and in the while can change due to the confirm selection by the user
let yes = true; // this variable is global and can be called anywhere bc it's outside
    while (yes){
      yes = confirm("click ok to continue")
    }

// ----------- 2. Do-While Loops -------------
// the condition in the do block {} gets checked once before while loop is checked. then condition is checked to see if it should keep going

//executes the body once and then checks for condition ie. b < 10 and if true continues unitl false

//                       do {
//                              //body
//                       } while(/*condition*/);

let b = 0
do {
    console.log("Do-while loop prints #" + b)
    b++;
} while (b < 10);



// ----------- 3. For Loops -------------
// for loop takes in 3 expressions
// for (/*initialization*/; /*condition*/; /*increment*/) {
    // body
// }

// initialization (set a variable) --> let c = 0
// condition ()

for (let c = 1; c <= 10; c++) {
    console.log('for loop prints #' + c);
}

let school = "codeup"
for(let i = 0; i < school.length; i++){
    console.log(school.charAt(i))
}

// ----------- 4. break / continue -------------

//continue allows you to skip (if)body and go to next (for loop)body
let conti;
for (let d = 1; d <= 10; d++) {
    console.log("here is your book" + d)
    if(!conti){
        continue;
    }

    console.log("you finished book");
}

//break allows you to break out of the entire loop itself and stops the code
let cont;
for (let e = 1; e <= 10; e++) {
    console.log("here is book" + e)
   cont = confirm("click ok to continue")
    if(!cont){
        break;
    }
}