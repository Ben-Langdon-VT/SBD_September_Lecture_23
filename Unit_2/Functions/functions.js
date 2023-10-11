/* 
    ! Functions
        - Block of code that performs a particular task.
        - simplified programs that run a task when invoked.
*/

/* 
    ! Function Declaration
    (1)     (2)
    function hi() {
        console.log('Hi')
    }

    1: Keyword
    2: Name of the function
        - parenthesis is for parameters
*/

let x = 1;

function hi() {
    console.log('Hi!');
}

hi();

console.log(x);

/* 
    ! Function Expression
    (1)
    let hey = function hi() {
        console.log('Hi!');
    }

    1: the variable "hey" is now representative of the function "hi"


*/

let hey = function () {
    return 'Hello again!';
}

console.log(hey());

function greetings() {
    console.log('Hello');
}

greetings;
greetings();
console.log(greetings);

//Create a function that, when invoked, lists out the number 1-10. Name our function "counting".

function counting() {
    for(let x=1; x<=10; x++){
        console.log(x);
    }
}

counting();

// Given an array, create a function that lists out the values individually.

function printArray(array1) {
    for(item of array1) {
        console.log(item);
    }
}

let arr = ['This', 'is', 'really', 'cool'];

printArray(arr);


let dogArray = [
    "Husky",
    "Shih Tzu",
    "Corgi",
    "Catahoula",
    "Shiba",
    "Golden Retriever"
]

function callDogs(){
    for(a in dogArray){
        console.log(dogArray[a]);
    }
}

callDogs();