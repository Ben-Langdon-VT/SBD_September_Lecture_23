let x = 12;

function scope() {
    let x = 33;
    console.log(x);
}

scope();
console.log(x);

let y = 12;

function scope2() {
    y = 33;
    console.log(y);
}

scope2();
console.log(y);

/* 
    Variable keywords:
        -Const: Cannot be reassigned.
        -var: scoped to nearest function.
        -let: scoped to the nearest enclosing block.

*/

//var

var myVariable = 12;

function varTest() {
    var myVariable = 33;
    if(true){
        var myVariable = 45;
        console.log(`Var- Within if: ${myVariable}`);
    }
    console.log(`Var - Outside If: ${myVariable}`);
}

varTest();
console.log(`Var - Outside Function: ${myVariable}`);



//Let

let myVariable2 = 12;
function varTest() {
    let myVariable2 = 33;
    if(true){
        let myVariable2 = 45;
        console.log(`Let- Within if: ${myVariable2}`);
    }
    console.log(`Let- Outside If: ${myVariable2}`);
}

varTest();
console.log(`Let- Outside Function: ${myVariable2}`);

//const, also block level

function constTest() {
    const scope = 1;
    if(true){
        const scope = 2;
        console.log(scope);
    }
    console.log(scope);
}

constTest();