/* 
    ?Loops

    Loops loop through a block of code a number of times
    
    For loops are generally limited by external input, we set boundary conditions to make sure it has a finite amount and iterate through a number of times

    Possible to implement them a different way, such as skip or add a step, but considered bad grammar

    ! If stuck in an accidental infinitely running loop:

    ? For Loops:
        Take in 3 parameters (the things the ( ) of a statement)
            - initial condition
            - condition
            - increment expression
    
    Structure:
    for (initial expression ; condition ; increment expression) {
        loop stuff;
    }
*/

for (i = 0; i <= 10; i ++){
    console.log(i);
}
console.log("Finished for loop!");

// Start at 0 increasing by 2 to 20
for (i=0; i<=20; i+=2){
    console.log(i);
    if (i%10 == 0){
        console.log("You get a 50% coupon!");
    }
}

//Start at 10 and decrease by 1 till we reach 0
for (i=10; i>=0; i--){
    console.log(i);
}

//If using a straight return (one item is returning from a statement): we don't need to use curly brackets.
for(i = 5; i >= 0; i--) console.log(i);

// SPell out a word letter for letter
let firstName = "Michael";
console.log(firstName.length);

for(let i = 0; i < firstName.length; i++){
    console.log(i, firstName[i]);
}

//Change the value of a number in a loop
let sum = 0;
console.log (`Sum equals ${sum} before for loop.`);
for(let i = 0; i <= 5; i++){
    console.log("Before: ", sum);
    sum += i;
    console.log("After: ". sum);
}

console.log(`Sum equals ${sum} after for loop.`);

/* 
    ? For in loops

    - Loop through the properties of an object
    
    Structure:
    for (key in object){
        ...code
    }

    -key is a random variable name of our choice
    -object refers to the name of the object we are targeting



*/

let student = {
    name: "Harry",
    animal: "owl",
    degree: "magic",
    boyWhoLived: true
}

for (key in student){
    console.log(key, student[key]);
}


//Array is considered an object by js

let catArray = ['lion', 'tigers', 'pumas', 'leopards', 'cheetahs', 'maine coon', 'rag doll', 'tabby', 'russian grey', 'norwegian ridgeback'];

for (catIndex in catArray){
    console.log(catIndex, catArray[cat]);
}

/* 
    For in loops can be used on objects and arrays.
    But if array index order is important, it's better to use a :
        -for loop
        -for of loop
        -Array.forEach()
*/

/* 
    ? For of loops:

    -Loops through the values of an iterable object
        iterable - an object that has iterable properties(stuff it can count/go through)

    STructure:
    for( variable of iterableData) {
        ..Code
    }

    - variable is any word we choose to use, iterableDta is the name of any iterable "thing"

    Can loop over Arrays, Strings, etc.
*/

//!for of does not play well with objects, only iterables like arrays
/*
let student2 = {
    name: "Harry",
    animal: "owl",
    degree: "magic",
    boyWhoLived: true
}

for(value of student2){
    console.log(value);
}
*/

let dogArray = ["Husky", "Shih Tzu", "Corgi", "Catahoula", "Shiba", "Golden Retriever"];

/* for (pupper of dogArray){
    console.log("For of loop:",pupper);
} */
//Conditional
for (doggo of dogArray) {
    //if conditional
    if(doggo === "Husky"){
        console.log(`I think the ${doggo} is yelling for his breakfast!`);
    }
    else if (doggo === "Shiba") {
        console.log(`The ${doggo} is sitting there judging everyone.`);
    }
    else if (doggo === "Golden Retriever"){
        console.log(`The ${doggo} is a good boy.`);
    }
    else{
        console.log(`The ${doggo} is sitting there quietly.`);
    }
}