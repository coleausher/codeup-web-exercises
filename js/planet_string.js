"use strict";
(function(){

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
let planetsArray = planetsString.split("|")

    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    let planetsBr = planetsArray.join("<br>");
    console.log(planetsBr)

let planetUl = "<ul></ul>" + planetsArray.join("<li></li>") + "<ul></ul>"
    console.log(planetUl)

    //   let ulPlanets;
    //   let liString;
// planetsArray.forEach(function (planet){
//   liString = "<li>" + planets "</li>";
//    ulPlanets += liString;
//
// })
//      ulPlanets += "</ul>"
//      console.log(ulPlanets)

})();

