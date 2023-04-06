// ------------------------------------------ Exponentiation operator --------------------------------------------------


//   old way uses Math object
                //console.log(Math.pow(2, 5));

// Exponent operator
//   new way w/ es6 uses exponent operator
                //console.log(2 ** 5);


// --------------------------------------------- let Variable ----------------------------------------------------------


// using the var keyword to declare a variable you will set that var to a global scope that can be accessed outside its initial scope
                //for (var i = 0; i < 10; i ++){ // <--- this the beginning of your scope
                //  console.log(i)
                //}  <--- this is the end of your scope

                //console.log("this i variable is still in global scope" + i);

// using the let keyword to declare a variable you will now only be able to reference this variable within the scope {} it was declared in
                //for (let i = 10; i> 0; i--){
                //    console.log(i)
                //}

// this will throw you an error due to the fact that i was declared in a more nested scope, hence it does not have access to it
                //console.log(i)




// ------------------------------------------- template strings --------------------------------------------------------
            //let name = "joe";
            //let order = "burger";
            //let condition = "cardiac arrest";

// concatenation + sbdsdh + shdbcb + kjsdbjk
            //console.log("hey " + name + " your " + order + " might give you a " + condition );

// template strings
// to use template strings:
// 1. use a back tick `
// 2. use the syntax ${`variable name`} in order to include variable value within your string
            //console.log(`hey ${name} your ${order} might give you a ${condition}`)


// ----------------------------------------------- for .. of -----------------------------------------------------------
                  let numbers = [1, 2, 3, 4, 5]
//             individual item ---- list to iterate over
//                   vvvv                 vvvv
            for (let number           of numbers){
             console.log(number);
            }


            let collection = ["book", "map", "loot", "evo shield"]

            for (let item of collection){
              console.log("the current item is: " + item);
            }

// -------------------------------------------- Arrow functions --------------------------------------------------------
// using regular function declaration
            // function sayHello(){
            //     console.log("Hello World")
            // }

            // sayHello();

// using arrow function declaration (declaring it as such will only allow for one statement in your body)
            // const sayHello = ()=> console.log("Hello World")
            // sayHello();

// setting up multiple statements within arrow function
            // const add = (num1, num2) => {
            //    let sum = num1 + num2;
            //   console.log(sum);
            //}

// ------------------------------------------- Default Parameters ------------------------------------------------------
// the parameter is passed in a default value in the event there is no argument when this function is called
            // function sayHello(name = "dude"){
            //    console.log(`hello ${name}`);
            // }
// if we call this without any argument it will have a default value of 'hello dude'
            // sayHello();
// if we call this now we should see 'hello joe'
            // sayHello("joe");


// -------------------------------------------- Object Shorthand  ------=-----------------------------------------------
            // let hedgehogName = "hubert";
            // let spike = "dark";
            // let personality = "shy";

            // let hedgehog = {
// property has the name of the variable I'm referencing, and it has the value of that variable
            //  hedgehogName,
            //   spike,
            //   personality
            // }
            //  console.log(hedgehog)
            // console.log(hedgehog.hedgehogName)
// ----------------------------------- Object assignment and deconstruction --------------------------------------------
const hedgehog = {
    hedgehogName: "hubert",
        spike: "dark",
        personality: "shy"
}
            const {hedgehogName, spike, personality} = hedgehog


// old way
            // function tellMeAbout(person) {
            //     let name = person.name;
            //     let age = person.age;
            //     console.log(name); // 'codeup'
            //     console.log(age); // 4
            // }
            //
            // const person = { name: 'codeup', age: 4 };
            // tellMeAbout(person);

// new way
            function tellMeAbout({ name, age }) {
                console.log(name); // 'codeup'
                console.log(age); // 4
            }

            const person = { name: 'codeup', age: 4 };
            tellMeAbout(person);


// deconstruct array
const myArray = [1, 2, 3, 4, 5];
const [x, y ,z] = myArray;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 3