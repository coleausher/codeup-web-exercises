"use strict";

// console.log("this is my external js file");
// let quantity = 3;
// console.log(quantity);
//
// let myAge = 25;
// console.log(myAge);
//
// // alert("Have a good day")
//
// let submit = confirm("Are you sure you want to resubmit this form?");
// console.log(submit);
//
// let age = prompt("what is your age?")
// alert("Wow, you're old. You're " + age)


console.log("Hello from external JavaScript");

 alert("Welcome to my Website!");

 let color = prompt("What is your favorite color?");
     alert("No way! " + color + " is my favorite color too!");

// Problem 1
 let TheLittleMermaid = Number(prompt('How many days do you want to rent The Little Mermaid'));
 let BrotherBear = Number(prompt("How many days do yuo want to rent Brother Bear?"));
 let Hercules = Number(prompt("How many days do you want to rent Hercules"));
  let totalCost = (TheLittleMermaid + BrotherBear + Hercules) * 3;

  alert("Movie rentals cost $3 per day, your total is $" + totalCost);

// Problem 2
 let googlePay = Number(prompt("How much do you get paid per hour at Google?"));
  let amazonPay = Number(prompt("How much do you get paid per hour at Amazon?"));
 let facebookPay = Number(prompt("How much do you get paid per hour at Facebook?"));
 let totalPay = (googlePay * 6) + (amazonPay * 4) + (facebookPay * 10);

 prompt("Your allotted hours to work at each company are, 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon per week, your weekly paycheck would be $" + totalPay);

//  Problem 3
let classEmpty = confirm("Is the class empty?");
let emptySchedule = confirm("Do you have an empty schedule for this class?")
let enroll = (classEmpty && emptySchedule)
    alert("You're enrollment status is: " + enroll)

// Problem 4
let quantityBought = confirm("Did you buy more than 2 items?");
let offerNotExpired = confirm("Is the offer expired?");
let premiumMember = confirm("Are you a premium member?");
let offer = (quantityBought >= 2 && offerNotExpired || premiumMember );

alert("The Offer has been applied: " + offer);