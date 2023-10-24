/* 
    - Syntax is on the left side of the assignment operator
    - Great for pulling info out of an array and assigning data to it's own variable.
*/
const fullName = ['Jane', 'Doe'];
const fName = fullName[0];
const lName = fullName[1];
const [firstName, lastName] = fullName;
// console.log(fName, firstName);
// console.log(lName, lastName);
// console.log(`Hello Mrs. ${lastName}`);
let obj = {
    first: 'John',
    last: 'Doe'
}
const { first, last} = obj;
let database = [{},{},{}];
let myObj = {
    first, last
}
//! Spread
/* 
    Denoted by three consecutive periods: ...
    - pulls out all elements of an array and gives them to you as a standalone list of elements.

    *concept of the spread operator - NOT syntax

const fullName = ['Rocket', 'Racoon'];

    ...fullName // 'Rocket', 'Racoon'
    
    const elements = ...fullName;
*/

const copiedFullName = [...fullName];
// const copiedFullName = [fullName];
// console.log(copiedFullName);

fullName.push('Mrs.')
// console.log(fullName, copiedFullName);

console.log(Math.min(1,5,-3));

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(prices);
console.log(...prices);
console.log(Math.min(...prices));

//! Rest
const fullName2 = [
    'Jane', 'Doe', 'Mrs.', {month: 3, date: 22, year: 1973}
];

const [fName2, lName2] = fullName2;

console.log(fName2, lName2, fullName2);