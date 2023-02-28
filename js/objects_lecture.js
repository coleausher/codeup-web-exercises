"use strict";
// ----------------------------------------------- Making Object ------------------------------------------------------
// typically you store objects in a variable
// new Object();     creates a new object
// this will define a new dog object by using the 'new' keyword to make a new object prototype

// let dog = new Object(); //
// console.log(typeof dog) //

// literal notation {}         literal notation (simplified) to create a new object
// making an object using object literal notation
// let dog = {}; //
// console.log(typeof dog) //

// ----------------------------------- Setting object properties (to custom objects) ----------------------------------
// ----------------- Dot notation ----------------
// defining / initializing property name 'breed' belonging to 'dog' object (first time we call/name the property is where the declaration happens)
let dog = {};

// defining breed property .breed
dog.breed = "german shepard";
// calling object property
console.log(dog.breed)

// re-initializing .breed property(you can do this y calling the object followed by .propertyname)
dog.breed = "pit bull";
// we are displaying dog breed by referencing property
console.log(dog.breed);
// properties are only accessible through your object dog.breed
// the snippit below will throw me an error because i can not access breed(property) without accessing dog(object) first ex. 'dog.breed'
// console.log(breed);


// ----------------- array notation ----------------
// the value inside of square brackets will be my property name
// i must have property name in quotes " " in order to define the property
// declaring / initializing color property for dog object using array notation []
dog["color"] = "black";
// re-initializing my property value
dog["color"] = "golden";
// we are displaying dog color by referencing property
console.log(dog["color"]);


// you can set the property of your object while initializing your object as shown below
let cat = {
    name: "finn",
    color: "black",
    gender: "female"
}
// prints all properties
console.log(cat)
// prints color property
console.log(cat.color)
// another way to print specific property
console.log(cat["color"])


// ---------------------------------------- Nesting values (data structures)-------------------------------------------
let shelter = {
    name: "myShelter",
    location: "dallas, tx",
    rating: 5,
    // nesting an array in our object
    shelteredAnimals: ["dogs", "cats", "birds", "hamsters"],
    // nesting a list of objects within an array in our object
    employees: [
        {
            name: "Steve Jones",
             position: "Clerk",
            skills: ["customer service", "people ops"]
        },
        {
            name: "Howard Johnson",
            position: "Janitor",
            skills: ["customer service", "people ops"]

        },
        {
            name: "Alicia Chavez",
            position: "animal specialist",
            skills: ["customer service", "people ops"]

        },
    ],
    // nesting an object in our object
    manager: {
        name: "Jordy Muniz",
        position: "team operator",

    }
}

//accessing manager name
console.log(shelter.manager.name);
//accessing first index of sheltered animal within shelter object
console.log(shelter.shelteredAnimals[0]);
// accessing first employee name
console.log(shelter.employees[0].name);
// accessing first employee first skill
console.log(shelter.employees[0].skills[0]);


shelter.employees.forEach(function (employee){
    console.log("good morning " + employee.name);
    employee.skills.forEach(function(skill){
        console.log("your skill set is " + employee.skills[0])
    })
})


// ------------------------------ Assigning (nesting) functions to objects --------------------------------------------
// assigning function to cat object as property (this function is now a method because it belongs to an object)
// cat.meow = function meow(){
//     alert("MEOW");
// }
// console.log(cat)
//
// // calling our meow function by accessing our cat object(needs () after function name in order to call function)
// cat.meow();


// --------------------------------------------- 'This' Keyword -------------------------------------------------------
cat.meow = function (){
    // 'this' = cat
    alert(this.name + " goes MEOW");
}
cat.meow();




// ------------------------------ extra (storing function as property use case) ---------------------------------------
let user = {
    userName: "cole.usher97",
    email: "coleausher@yahoo.com",
    password: "password",
    greeter: function(){
        alert("Hello " + this.userName + " welcome to your batcave :}");
    }

}
user.greeter()



// // code
// comment