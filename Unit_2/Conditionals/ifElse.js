/* 
    Conditionals:
    - It's a way for us (as devs) to ask a questions and provide a response based on the condition of what we are asking.
    - Devs ~= Inventor: we design and ask the question but also determine the answer options.
    - Conditionals focus on a think being true or being false.
    - Evaluates an expression and respons if it is true.
    -Falsy
        -False
        -0
        -empty strings
        - null
        -undefined
        - NaN (not a number)
*/

// If conditional statements

let isOn = true;

if (isOn == true) {
    console.log('The light is on in the room!');
}

/* 
    Structure:
    if (condition evaluated) {
        code that runs if expression is true
    }
*/

if (isOn) {
    console.log('The light is on, heck yeah!');
}

else {
    console.log('The light is off, oh no!');
}

let weather = 68;

if (weather < 70) {
    console.log("Some people might need to grab a jacket.")
}

// If Else conditional Statement

else {
    console.log("oh boy its shorts weather!")
}

// AND, &&, check to see if both are equal

let username = 'myUserName';
let password = '12345';

if (username == 'myUserName' && password == '1234') {
    console.log('Welcome user! You are logged in.')
}
else {
    console.log('Login error, begone!');
}

// OR, ||, check if one statement is true or the other
let input = 'coo0'
let email = 'myemail@email.com'
let uName = 'coolCat100'

if ( email == input || uName == input) {
    console.log('Welcome user!')
}
else {
    console.log('Login info was incorrect.')
}

//NOT

let rain = true;

if (!rain) {
    console.log("It's nice outside");
}
else {
    console.log("I should bring my umbrella.");
}

/*
Challenge 1: 
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'

Silver:
    If It is your name, console log 'Hello, my name is <name>'

Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

input = 'Joe'
targetName = 'Ben'

if (input == targetName) {
    console.log(`Hello, my name is ${input}`);
}
else {
    console.log(`Hello, is your name ${input}?`);
}
//else if Conditional Statement
// This can let us check more than one condition (asking multiple questions)
// Once one of the conditions is met (results in true) it will exit the statement /code block

let grade = 92;

if (grade >= 90){
    console.log("killing it");
}
else if (grade >= 80) {
    console.log("fairly good");
}
else if (grade >= 70) {
    console.log("passing");
}
else if (grade >= 60) {
    console.log("just barely making it chief");
}
else {
    console.log("yikes.");
}

/*
Challenge 3:

    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

age = 25

if (age >= 25) {
    console.log("You can rent a car!");
}
else if (age >= 21) {
    console.log("You can drink!");
}
else if (age >= 18) {
    console.log("You can vote!");
}
else {
    console.log("Sorry, you're too young to do anything.");
}