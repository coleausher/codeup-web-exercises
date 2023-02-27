"use strict";
// an empty array []

// an array with one element [1]

// an array with 5 elements [1, 2, 3, 4, 5]

// an array with 3 elements all of different types ["one", 42, [8, 9, 10]]
// notice that the array above does *not* have 5 elements, rather the last
// element is itself an array with 3 elements in it
//let name = "joe";
//                   strings   booleans    numbers variables
//let myFirstArray = ["Bob", "Joe", 1, 2, true, false, name];
//     array         0       1    2  3  4      5      6
//                   ^       ^    ^  ^  ^      ^      ^
//                   |       |    |  |  |      |      |
//    indecies       1       2    3  4  5      6      7

// displays the length of values in the array ie. 7
//console.log(myFirstArray.length)

// getting index of an array
//console.log("My 3rd index is " + myFirstArray[2]);
//console.log("My 1st index is " + myFirstArray[0]);
// UNDEFINED this will return undefined because the index of 12 deos not exist in tge array
//console.log("This is an out of bound element(exeption) " + myFirstArray[12]);
//console.log(myFirstArray[-1]);


//iterating through arrays
 let namesArray = ["Bob", "Joe", "mama", "guts", "will"];
//
// //loop through the array and log the values using regular enhanced for loop
// for(let i = 0; i < namesArray.length; i++){
//     let greeter = "Hello " + namesArray[i]
//     console.log(greeter)
// }

//             these are the same ^

// loop through array and log values via for-Each loop
namesArray.forEach(function(namesCurrentIndex){
    let greeter = "Hello " + namesCurrentIndex;
    console.log(greeter)
})