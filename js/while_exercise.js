"use strict";

// WHILE LOOP

let i = 1;
while(i < 65536){
    i *= 2
    console.log(i)
}

// DO WHILE LOOP
// 1. generate a random number between 50 and 100 (cones to sell)
// 2. construct a do while loop that will generate a number between 1 and 5 (cones bought)
// 3. console.log how many cones are sold by each person

// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
let soldCones;
do{
    // This expression will generate a random number between 1 and 5
    soldCones = Math.floor(Math.random() * 5) + 1;
    if(allCones < soldCones) {
        console.log("Cannot sell you " + soldCones + " cones I only have " + allCones);
      continue;
    }
    allCones -= soldCones;
    console.log(soldCones + " cones sold...")
}while(allCones > 0)
console.log("Yay I sold all the cones")

