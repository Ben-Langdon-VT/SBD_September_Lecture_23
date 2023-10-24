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


let movies = [
    { name: 'Top Gun 2', category: 'Action'},
    { name: 'Scary Movie 5', category: 'Horror'}
];

let obj = { name: 'top Gun 2', category: 'Action'}

console.log(movies[0].name)

movies.push({ name: 'It', category: 'Horror'})
movies.push({ name: 'Get Out', category: 'Horror'})
movies.push({ name: 'Taken', category: 'Action'})

/* 
    filter to see just horror or just action
*/

let actionMovies = movies.filter(movie => movie.category === 'Action');
let horrorMovies = movies.filter(movie => movie.category === 'Horror');

console.log("Action ", actionMovies);
console.log("Horror: ", horrorMovies);

//! .forEach()
let newFoodList = [
    'apple', 'pear', 'mushroom', 'cheese', 'peach'
];

for (let i = 0; i < newFoodList.length; i++){
    console.log("ForLoop: ",newFoodList[i]);
}

newFoodList.forEach((food, index) => {
    console.log("ForEach: ", food, "index: ", index);
});

/* 
    - go look at MDN docs to remind you:
    -Create an array containing movie titles
    -Use .forEach() to list your movies
    -Add another movie at the end
    - And replace one of your existing movies with another one
*/

let newMovies = [
    'Top Gun',
    'Top Gun 2: Electric Boogaloo',
    'Fellowship of the Ring',
    'Two Towers',
    'Return of the king',
    'Black Swan',
    'Saw X',
    'Pearl',
    'Jeepers Creepers'
];

newMovies.forEach(movie => console.log("Initial List: ", movie));
newMovies.push('Evil Dead Rise');
newMovies.forEach(movie => console.log("After Push: ", movie));
newMovies.splice(6,1,'Barbie');
newMovies.forEach(movie => console.log("After Splice: ",movie));

//Find
let tmnt = [
    'Michelangelo', 'Donatello', 'Leonardo', 'Raphael', 'Splinter', 'Shredder', 'Baxter'
];

let character = 'Leonardo';
console.log('Find: ', tmnt.find(c => c == character));

character = 'April';
console.log("Find Again: ", tmnt.find(c => c == character));
character = 'Splinter';
tmnt.find((c,i) => console.log('Index: ', c == character, "index: ", i));

//! .map()
let numArray = [];
let fizzBuzzArray = [];
let fizzArray = [];
let buzzArray = [];

for(let i = 0; i < 101; i ++) numArray.push(i);

numArray.map(x =>{
    if(x % 15 === 0) fizzBuzzArray.push(x);
    else if(x % 5 === 0) fizzArray.push(x);
    else if (x%3 === 0) buzzArray.push(x);
    console.log(x);
});

console.log(fizzBuzzArray);
console.log(buzzArray);
console.log(fizzArray);

/* 
    Challenge:
    if object is an array:
        using method, flip the values within array
        -using a method, print the values of the newly arranged array
        hint: 
*/

let arr = [1,2,3,4,5];

if(arr instanceof Array){
    let newArray2 = arr.reverse();
    newArray2.forEach(value => console.log(value));
}

//Ternary
let newArray3 = [];

(arr instanceof Array) ? newArray3 = arr : console.log("Not an array");
newArray3.forEach(value => console.log(value));