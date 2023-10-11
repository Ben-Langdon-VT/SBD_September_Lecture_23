/* 
    ? While Loops
    - While loop, loops through a a block of code while a specific condition is true.
    - used when you don't necessarily know how many time you will be looping, unlike with for loops which you use when you have a list or a count.
    - you can use both loops both ways, its just better grammar to use them this way.

    Structure:
    while (condition) {
        ...execute code
    }
*/
let n = 1;

while (n < 10) {
    console.log(`n before addition, start of loop: ${n}`); // string interpolation
    n++;
    console.log(`n before addition, end of loop: ${n}`);
    console.log("\n");
}

console.log(`While loop complete, final value: ${n}`);

// Use a while loop to create and log a string, pretend online cart
let cartMsg = '';
let z = 0;
while(z < 5){
    z++;
    cartMsg = `You have ${z} items in your cart!`;
    console.log(cartMsg);
}

console.log(`You have ${z} items in your cart, want to checkout now?`);
//Something you would actually use a while loop for

n1 = 1;
n2 = 1;
while (n2 < 1000){
    console.log(`${n1}, ${n2}`);
    temp = n1;
    n1 = n2;
    n2 = n2 + temp;
}

console.log(`${n1}, ${n2}`);

// Create a spider man story line with a while loop and an array!
let city = [
    'building',
    'building',
    'light pole',
    'bridge',
    'light pole',
    'tree',
    'light pole',
    'empty street'
];
let pos = 0;
console.log("Welcome to the adventures of Spider Man!! Looks like there's a thief on the loose!")
structure = city[pos];

while(structure != 'empty street'){
    console.log(`SpiderMan swings from the ${structure} in pursuit of the thief!`);
    pos++;
    structure = city[pos];
    console.log(`SpiderMan lands on the ${structure}`);
    console.log("\n");
}

console.log(`Spider Man lands in the ${structure}! He corners and confronts the thief! Spidey saves the day again!!`);

/* 
    ? Do While Loops
    - Also loop through a block of code while a specified condition is true
    !BUT
    -loop will run the code block once, before checking if the condition is true.
    -Will keep running as long as condition stays true.
    Structure:
    do {
        code
    } while ( condition )
*/

let num = 5;
do {
    console.log(`The number is ${num}`);
    num ++;
} while (num < 10)

console.log(`Final value is ${num}`);

// Do code block will run once, even if condition is not true
let value = 20;
do {
    value *=2;
    console.log("Do code block is running...")
} while (value > 100);

console.log(value);// 40

// Mock switch a group of accounts from deactivated to active, use a boolean
let accounts = {
    acct1: false,
    acct2: false,
    acct3: false,
    acct4: false,
    acct5: false
};

let acctNum = 1;
key = `acct${acctNum}`
do {
    
    console.log(
        `${key} is currently inactive: set to ${accounts[key]}.`
    );
    console.log('Activating.....');
    accounts[key] = true;
    console.log(`${key} is now set to ${accounts[key]}`);
    acctNum++;
    key = `acct${acctNum}`
    console.log(key, accounts[key]);
} while(accounts[key] != undefined)

console.log("All accounts activated.");
console.table(accounts); // used .table() instead of .log() for an interesting format for objects/arrays