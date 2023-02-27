"use strict";

(function(){

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ["John", "Jacob", "Luke", "Mike"]

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    let index1 = "John"
    let index2 = "Jacob"
    let index3 = "Luke"
    let index4 = "Mike"
    console.log(index1);
    console.log(index2);
    console.log(index3);
    console.log(index4);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(let i = 0; i <= 3; i++) {
        let greeter = "Hello " + names[i]
     console.log(greeter)
    }


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(namesIndex) {
        let greeter = "Hi " + namesIndex;
        console.log(greeter)
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


        let num1 = [1, 2, 3, 4, 5]
        console.log("the first index is: " + num1[0]);


        let num2= [1, 2, 3, 4, 5]
        console.log("the second index is: " + num2[1]);


        let num3 = [1, 2, 3, 4, 5]
        console.log("the last index is: " + num3[4]);

})();