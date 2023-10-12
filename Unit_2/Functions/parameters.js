//! Paremeters and Arguments
/* 
    (1)
    funciton hi(name) {
        console.log(`Hi, ${name}`);
                            (2)

    }
    (3)
    hi('Bruce');

    1: The parameter(s) that the function is accepting or holding.
    2: Using string interpolation, we can refer to the parameter that was given to the function.
    3: This is where we define what the parameter's value will be.
        -known as an argument.
*/



function order(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}!`);
}

order('cheese pizza');
order('burger');
order('milk shake');

/* 
    -Write a function that takes two parameters:
        -one parameter is the first name,
        -one is the last name
        -add them together into a new parameter
        print the name
*/

function FullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    console.log(`Hello, my name is ${fullName}`);
}

FullName('Ben', 'Langdon');

let x = 1;

function one(){
    x = 2;
}

one();

function check() {
    if(x === 2) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

check();

console.log(x);

function test1(asdf, zxcv){
    return asdf + zxcv;
}

console.log(test1(asdf = 1234, zxcv = 10000))

// console.table(arr);

let num1 = 1;
let num2 = 2;
let newNum = 5;

function addTwoNumbers(one,two) {
    let sum = one + two;
    console.log(sum);
}

addTwoNumbers(num1, num2);
addTwoNumbers(num1, newNum);