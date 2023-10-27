//! Object Oriented Programming
/* 
    - Javascript has both Functional and Procedural aspects.
        -It's a multi-paradigm language like all computer languages basically.
    
    - Core Concepts of OOP:
        - Encapsulated data and behavior through an exposed interface.
        - Allow for inheritance of behavior
        - Abstraction of complexity
        - Polymorphism of behavior
*/

/* 
* Encapsulation
    - set of data within an object
        -properties / methods
*/

class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    speak() {
        return `${this.name} says ${this.voice}`;
    }

    fly() {
        if(this.flies === true){
            return `${this.name} takes to the skies!`;
        }
        else {
            return `${this.name} can only gaze upward...`;
        }
    }

}

// let buttons = new Pet('buttons', 'brown');
// console.log(buttons.speak());

/* 
* Inheritance
    -A child class can gain (inherit) properties from a parent class
*/

class Dog extends Pet {
    constructor(name, color, voice){
        super(name, color);
        this.voice = voice;
    }
}

let buttons = new Dog('Buttons', 'brown', 'ruff!');
console.log(buttons.speak());

class Cat extends Pet{
    constructor(name, color, voice) {
        super(name,color);
        this.voice = voice;
    }
}

let mayo = new  Cat('Mayo', 'black', 'mew');
// console.log(mayo);
console.log(mayo.speak());

/* 
    * Abstraction
    Hide complexity via an objects methods
*/

class Tab{
    constructor(sub, tax) {
        this.subtotal = sub;
        this.tax = tax;
        this.tip = 0;
    }

    tipAmount(x) {
        let total = this.subtotal + this.tax;
        this.tip = (total * x);
        let final = total + this.tip;
        return final.toFixed(2);
    }
}

let saleTax = 0.075;
let tipPercent = .2;

let dinnerBill = new Tab(42.83, saleTax);

function calcTip(bill) {
    return (bill.tipAmount(tipPercent));
}

console.log(`Final Cost: $${calcTip(dinnerBill)}`);
console.log(`With a tip of $${dinnerBill.tip.toFixed(2)}`);


/* 
    *Polymorphism
        - How objects respond in relationship from child to parent.
            -ex: same methods
        - Siblings cannot respond to each others methods/ properties
            -unless shared w/ parent.
        -Perform a single action in different forms
            - when a method is called from a child but is that method is within a parent.

*/

class A {
    show() {
        console.log('From A');
    }
}

class B extends A {}

let b = new B();
b.show();

/* 
    !Challenge
        - Create a bird class that extends pets.
        - Provide it a new key property called "flies" that will hold a boolean value.
        -Create a method within the parent class called "fly" that checks to see if our object can fly and returns as such:
            If so: "{pet} takes to the skies!"
            if not: "{pet} can only gaze upward..."

        -Create a new bird (give whatever values to its attributes)
            -hint: make sure it is "true" that it can fly.
        - Within a console.log(), check the fly method of the new bird and another using either the dog or cat just created.
*/

class Bird extends Pet{
    constructor(name, color, voice) {
        super(name,color);
        this.voice = voice;
        this.flies = true;
    }
}

bird = new Bird("Tweetie", "Blue", "Tweet");

console.log(bird.fly());
console.log(mayo.fly());