"use strict";


//                    array
let dogs = ["Misty", "Misty", "Nebula", "Shadow", "Hubert"];
console.log(dogs);
// dogs.unshift adds the item ("Robert") to start of the array
dogs.unshift("Robert");
// dogs.push adds the item("Hub") to end of the array
dogs.push("Hub")
// dogs.pop removes the item from the end of the array
dogs.pop();
// dogs.shift removes the item from the start of the array
dogs.shift();
//console.log(dogs)

// will return index of passed in argument at it's first instance get back index of 0 bc it the first index(Misty) the console finds
// if argument doesn't exist it will return undefined or -1
let index = dogs.indexOf("Misty");
console.log(index);

// will return last index instance of passed in argument. get back the last Misty in the array
// if argument doesn't exist it will return undefined or -1
let lastIndex = dogs.lastIndexOf("Misty");
console.log(lastIndex);

// second argument is exclusive(everything up to) and second is inclusive(includes)
// slice method doesn't manipulate the actual array just shows an example
// will return a copy of the array, you can pass in 2 arguments, the start and ending index; this will return only that portion in between the index of that array.
// first argument(your start index) is inclusive, second argument(your end index) is exclusive.
let newDogsArray = dogs.slice(1, 3);
console.log(newDogsArray);
// this will still be the og dogs array, the slice method does not re-assign the array
console.log(dogs)

// reverse an array
 let reverseDogs = dogs.reverse();
console.log(reverseDogs)

// sort array by alphanumeric
let alphanumericDogs = dogs.sort();
console.log(alphanumericDogs)

// splitting array : converting string into array
let animals = "dogs, cats, hedgehogs";
// everytime it finds the value "s" it creates a separate item in the array
let animalArray = animals.split("s");
console.log(animalArray)

// joining array: convert an array into a string
// it joins the values and separates them by the "|"
let animalString = animalArray.join("|");
console.log(animalString)




