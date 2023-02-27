"use strict";

// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
// 1. create function named showMultiplicationTable
// 2. have function accept(take in) a number as an argument
// 3. console.log multiplication table from 1 to 10(for loop)
function showMultiplicationTable (num){
    for ( let i = 1; i <=10 ; i++) {
        // OR let sum = num * i --> console.log(num + "*" + i + " = " + sum)
        console.log("7 x " + i + " = " + i * 7)
 }
}
showMultiplicationTable(1)


// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
// 1. have a for loop that will generate 10 random numbers(for loop)
// 2. ensure that random numbers are between 20 adn 200(Math.Random function)
// 3. check to see if random number is even or odd(if statement / conditional)


for (let i = 1; i < 10; i++) {              // max - min   min
    let randomNum = Math.floor(Math.random() * 180) + 20;
    if (randomNum % 2 === 0) {
        console.log(randomNum + " is even");
    }else if(randomNum % 3 === 0){
        console.log(randomNum + " is odd");
    }
}


//Question 3 Create a for loop that uses console.log to create the output shown below
//1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
for (let c = 1; c <= 9; c++) {
   console.log(String(c).repeat(c))
}



//Question 4 Create a for loop that uses console.log to create the output shown below.
//100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

 for (let b = 100; b >= 5; b-=5) {
     console.log(b)
 }