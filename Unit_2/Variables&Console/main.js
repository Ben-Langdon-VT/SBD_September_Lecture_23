// Single Line Comment

/* 
    Multiline Comment
    shift+alt+a
*/

// ! Variables

/* 
    Variables are named containers for storing data values.

    We name the variables so that we can refer to them and the values they hold at a later time. Consider that we are naming these variables to help us be directed to a value type.

    We can create a variable through 3 different keywords
    1. var
    2. let
    3. const
    4. (none) secret keyword
*/

let a = 2;

//  (1)     (2)     (3)     (4)
    let     b       =       1;

/* 
    1. Use JS keyword to denote the create of a variable.
    2. The name of the variable, what the developer refers to/calls on to get the stored value. Variable names should be to the point/ pertain to the data. theyShouldAllBeCamelCase.
    3. Assignment operator: equal sing, =
    4. The initial variable value, it's starting data value.
*/

// ! Variable Declaration Vs Initialization

// Declaration: declaring the variable but not assigning it a value
let x;
console.log("Declaration of x: ", x);

let apple;
console.log("Declaration of apple: ", apple);

// initialization: declare a variable and give it a value
let y = 4;
console.log("Initialization of y: ", y);

let life = 42;
console.log("Initialization of life: ", life);

// Reassign a variable value, can reassign declared or initialized variables (const keyword variables cannot be reassigned)
x = 20;
console.log("Reassigned x to 20: ", x);

x = 100;
console.log("Reassigned x to 100: ", x);

apple = 12;
console.log("Reassigned apple to 12: ", apple);

// Assigning to other variables / create variables from variables!

let firstName = "Kate"; // string datatype
let lastName = "Lockhart";
let fullName = firstName + " " + lastName;
let fullN = firstName + lastName;

/* 
    ! Console

    - A place to see text output / code results.
    - There is a console object attached to the browser (web).
    - We have a console in VSC to view results/what is logged.
*/

console.log(fullName);  //Kate Lockhart

console.log(2+2);   //4

// Use multiple items/variables in a console.log()

let today = "Great!";
const javaScript = "So much fun!";

console.log(today, javaScript);

today = "Super!";
// trying to reassign a constant variable will cause an error.
// javaScript = "Meh.";

console.log(today, javaScript);