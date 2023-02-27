"use script";
//  let number = prompt ("Please enter an odd number between 1 and 50");
//  let skipNumber = "27"
//  number = parseInt (number);
//  console.log ("Number to skip: " + skipNumber);
//  for(let a = 1; a <= 50; a += 2) {
//      if (a === number) {
//          console.log("Uh oh! skipping this number: " + number);
//         continue;
//
//
//     }
//     console.log("Here is an odd number: " + a)
// }


let isNotValid;
 let userNum;
 do {
      userNum = Number(prompt("Enter a number between 1 and 50"));
   if((userNum > 50 || userNum < 1) || userNum % 2 === 0){
       isNotValid = true;
   }else{
      break;
   }
     console.log(isNotValid)
 }while(isNotValid);

 console.log("Number to skip is " + userNum);

for(let i = 1; i < 50; i += 2){
     if(i === userNum){
         console.log("Yikes, skipping number: " + i)
         continue;
     }
     console.log("Here is your odd number " + i)

 }