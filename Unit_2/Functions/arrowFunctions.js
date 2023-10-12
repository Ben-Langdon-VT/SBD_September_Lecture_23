let hi = () => {
    console.log('hi');
}

//! Concise Body

let hello = () => console.log("hi");

/* 
    let hi = () => {
        (1)
        return 'hi';
    }

    let newName = hi();

    console.log(newName);

    1. the keyword that brings our data out of our function.
*/

function capitalizeName(name) {
    let capName = '';

    for(l in name) {
        if(l==0) {
            capName += name[l].toUpperCase();
        }
        else {
            capName += name[l];
        }
    }

    return capName;
}

oldName = "undertaker"
const newName = capitalizeName(name = oldName);
console.log(newName)

/* 
    Make a tip calculator using a function
    have it return the value
    capture that returned value in a VARIABLE
    print that variable (console log)
*/

function calculateTip(value, tipPercentage) {
    return (value + value * tipPercentage).toFixed()
}

value = 100.00
tipPercentage = .2

let fullPrice = calculateTip(value, tipPercentage)
console.log(fullPrice)