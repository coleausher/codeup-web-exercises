"use strict";

(function(){

    let planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
// // .unshift adds to the beginning
    let addSun = planets.unshift("The Sun");
    console.log(addSun);
    console.log(planets);

// // .push adds to the end
    let addPluto = planets.push("Pluto");
    console.log(addPluto);
    console.log(planets);

// // .shift removes from the beginning
   let removeSun = planets.shift();
    console.log(removeSun);
    console.log(planets);

// // .pop removes from the end
    let removePluto = planets.pop();
    console.log(removePluto);
    console.log(planets);

//  // .indexOf finds the index of a item in the array
   let index = planets.indexOf("Earth");
    console.log("The index of Earth is: " + index);

// // .reverse reverses the array
   let reversePlanets = planets.reverse();
    console.log(reversePlanets);
    console.log(planets);

// // .sort sorts alphanumerically
    let alphanumericPlanets = planets.sort();
    console.log(alphanumericPlanets);
    console.log(planets);
})();