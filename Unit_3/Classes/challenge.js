/*
Part 1 
    - Create a class that is meant to create a vehicle.
        - Should have these keys:
            - make, model, no_wheels, color
        - Should have two methods
            - The first method will print (console log):
                "The [color] [make] [model] turns on its engine"
            - The second method will print (console log):
                "The [color] [make] [model] turns off its engine"
    - Create a vehicle using the class and "turn on" and "turn off" the vehicle.
    - Print (console log) the complete object created.
*/
/*  
    - Using the Vehicle Class
        - Update the Vehicle Class to include a new propter called "engine_on". Have it hold no value.
        - Update both methods to change the value of "engine_on" to either "true" if the vehicle is on or "false" if the vehicle is off.
    - Create a Sedan class that extends from the Vehicle class
        - The constructor will use all the values from the Vehicle class and add a "tank".
            - The "tank" will hold a numeric value (10-14 typically).
        - The Sedan class will need to have a factory method called "parkedCar". 
            - This will set the "engine_on" value to "false"
            - Create a new Sedan passing in the expected arguments.
                (make,model,no_wheels,color,tank)
        - This class will have a method called "drive" that accepts a parameter called "gallons".
            - This will need to evaluate:
                - Is the sedan on?
                    - If off, console.log "The [color] [model] needs to be turned on."
                    - If on,
                        - Does it have enough gas?
                            - If it does: console.log "You drive around and use up [gallons] gallons of gas.".
                                - adjust the number of gallons current in the tank.
                            - If it does not: console.log "There isn't enough gas in the [make] to drive that many miles."
*/

class Vehicle {
    constructor(make, model, no_wheels, engine_on, color){
        this.make = make;
        this.model = model;
        this.no_wheels = no_wheels;
        this.engine_on = engine_on;
        this.color = color;
    }
    turnOn(){
        (this.engine_on === false)
            ? console.log(`The ${this.color} ${this.make} ${this.model} turns on its engine.`)
            : console.log("The engine is already on.");
        this.engine_on = true;
    }
    turnOff(){
        (this.engine_on === true) ? 
            console.log(`The ${this.color} ${this.make} ${this.model} turns off its engine.`)
            : console.log("The engine is already off.");
        this.engine_on = false;
    }
}

class Sedan extends Vehicle{
    static parkedCar(make, model, no_wheels, color, tank){
        return new Sedan(make, model, no_wheels, false, color, tank);
    }

    constructor(make, model, no_wheels, engine_on, color, tank){
        super(make, model, no_wheels, engine_on, color);

        this.tank = tank;
    }

    drive(gallons){
        if( this.engine_on === false){
            console.log(`The ${this.color} ${this.model} needs to be turned on.`)
            return;
        }

        if(gallons <= this.tank){
            console.log(`You drive around and use up ${gallons} ${gallons} of gas.`);
            this.tank -= gallons;
        }

        else {
            console.log(`There isn't enough gas in the ${this.make} to drive that many miles.`);
        }
    }


}

let car1 = new Vehicle("Prius", 2007, 4, true, "Blue");
car1.turnOn();
car1.turnOff();
console.log(car1);

let car2 = Sedan.parkedCar("Prius", 2007, 4, "Blue", 14);

car2.turnOn();
car2.drive(5);
car2.drive(5);
car2.drive(5);
car2.turnOff();