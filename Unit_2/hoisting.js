/* 
    !Hoisting
    -JS reads from top to bottom in two passes when executing code.

    1st Pass:
        - Made by the compiler. This is where hoisting is initiated.
        - Compiled for execution.
    
    2nd Pass:
        - Variables are assigned.
        - Executes any hoisted code.
*/

let names = 'Everly';
console.log(names);

b();

function b() {
    console.log("I have been hoisted!");
}

caches();

let c = () => {
    console.log("Hoisted?");
}


//FizzBuzz

/* 
    Write a program that uses a loop, conditionals, and console log to print all the numbers from 1 to 30 inclusive and follows the rules below:

    1. For numbers evenly divisible by 3, print "Fizz" instead of the number.
    2. For numbers evenly divisible by 5, print "Buzz" instead of the number.
    3. For numbers that are evenly divisible by both 3 and 5, print "Fizz Buzz" instead of the number, making sure that the program still prints "Fizz" or "Buzz" for numbers divisible by only 3 or 5 and not both.
    4. For any number that is not divisible by either 3 or 5, print the number itself.
*/

function fizzbuzz(count) {
    let fizz = 0;
    let buzz = 0;
    let fizzbuzz = 0;
    for(i = 1; i <= count; i++){
        let word = "";
        if((i%3 == 0)){
            word += "Fizz";
            fizz++;
        }
        if(i%5 == 0){
            word += "Buzz";
            if (word == "FizzBuzz"){
                fizz--;
                fizzbuzz ++;
            }
            else{
                buzz++;
            }
        }
        if(word == ""){
            word += i.toString();
        }
        console.log(word);
    }
    console.log(`Fizz: ${fizz}; Buzz: ${buzz}; FizzBuzz: ${fizzbuzz}`)
}

fizzbuzz(100);