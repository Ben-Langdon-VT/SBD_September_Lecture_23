/* 
    !Operators
    These are what help us manipulate our data so that we can update, increase, separate, or simply change it all together.
    - Plus        +
    - Times       *
    - Power       **
    - Dot         .
    - Assignment  =
    - Comparison  ==
    
    Used to:
        - Assign
        - Compare
        - Arithmetic
        - Logical
        - Conditional

    Expressions & Statement:

    keyword name (expression) {
        code block that runs
    }
*/

/* 
    Comparison Operators
    - JS is helpful and does something called "coercion" when comparing values.
        -Coercion is the process of converting on values from one type to another.
*/

//Equal To ==

console.log("1" == 1);

//Strict Equal To ===

console.log(1 === 1);
console.log("1" === 1);

// Not Equal To, != 

console.log("3" != 3);
console.log("3" != 4);

// Strict Not Equal To, !==

console.log("3" !== 3);
console.log(3 !== 3);

//Greater Than
3 > 2;

//Less Than
4 < 6;

//Greater than or equal to
//! The Greater than operator must be used before the equal sign in order to work/execute correctly

console.log( 3 >= 2);
console.log(2 >= 2);
console.log(1 >= 2);

// And, &&

console.log (true && true);
console.log(true && false);

//OR , or ||

console.log(false || true);
console.log(false || false);

/* 
    Logical Operators
    - Arithmetic operators
*/

//Addition Operator
r = 1
r += 1
console.log(r)

//Subtraction operator

r-=3
console.log (r);

//Multiplication operator

r *= 2
console.log(r)

//Division operator

r /= 2
console.log(r)

//Remainder OPerator (Modulus Operator)

r %= 1
console.log(r)

// Exponential operator
r **= 1;