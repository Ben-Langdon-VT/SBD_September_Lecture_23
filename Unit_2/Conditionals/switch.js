/* 
    Switch Conditional Statement
    - A switch statement executes/runs a block of code depending on different cases
    -  The switch is used together with a break or a default keyword, sometimes both
        - these are both optional.
        - Break: a keyword that will break out of the switch block.
        - If a break is omitted / not added the next code block in the switch will run (as well).
        -Default: keyword that specifies code to run if no case matches the input (think what our else did in if statements).
*/

let officeCharacter = "Jim";

switch (officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`); 
}

// We can use backticks `` to create string that can use the value of variables!
// The variable must be surrounded by ${}, cash money curly bois

let num = -40;

switch (true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran');
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log('did not work');
}

/*
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessert = 'pie'

switch (true) {
    case (dessert== "pie"):
        console.log('Pie, pie, me oh my!');
        break;
    case (dessert == "cake"):
        console.log('Cake is great!');
        break;
    case (dessert == "ice cream"):
        console.log('I scream for ice cream!');
        break;
    default:
        console.log("not on the menu.");
}

//Rework as ternary