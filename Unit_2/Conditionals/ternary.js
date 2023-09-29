/* 
    Ternary Conditional Statement
    - Super cool syntax
    - A shortcut for writing an if, if/else, or else/if statement
    - Ternaries require the default/else catch all, must have both true and false results for conditions
    - (condition) ? true result : false result;
*/

let num = 6;

//Ternary

(num > 0) ? console.log('Yes!') : console.log('Nope!');

//Instead of:
if (num > 0) {
    console.log('Yes!');
}
else {
    console.log('Nadda!');
}

//Ternary with two condition vs Else If statement

let x = 1

//Else if statement
if (x == 0) {
    console.log("hello");
} else if (x < 0) {
    console.log("hi");
} else {
    console.log("goodbye");
}

//Ternary
(x==0) ? console.log("Hello!"): (x < 0) ? console.log("hi") : console.log("goodbye");

//Other way to write ternary
(x==0) ? console.log("Hello!")
    : (x < 0) ? console.log("hi")
    : console.log("goodbye");

