//! Iteration Methods
/* 
    - Do not destroy the original array
    - take in callback function
    -loop through arrays
    -must a return
*/

let fruits = ['apple', 'pear', 'mango', 'orange', 'pineapple'];

const filteredFruit = fruits.filter(fruit => {
    // console.log('Parameter: ', fruit);
    let result = fruit !== 'mango';
    // console.log('Result: ', result);
    return result;
});

// console.log(filteredFruit);

const filteredFruit2 = fruits.filter(fruit => fruit !== 'mango');

// console.log(filteredFruit2);

let fruit1 = 'pineapple';
// console.log(fruit1.includes('apple'));

const filteredFruit3 = fruits.filter(fruit => !fruit.includes('apple'));
// console.log(filteredFruit3)

//Function Example

function removeMango(fruit){
    return fruit !== 'mango';
}

const filteredFruit4 = fruits.filter(removeMango);

//console.log(filteredFruit4);

/* 
    ! Challenge:
    remove the 5s
*/

let myNumberArray = [3,5,7,3,5,5,5,2,7,2,12,5];

let newArray = myNumberArray.filter(num => num !== 5);
console.log(newArray);