//! Classes
/* 
    - Introduce in 2015
    - A function that helps us create objects
    - defines a category of objects

    * Base Structure

    class NameOfClass {
        constructor(parameter){
            this.key = parameter;
        }

        methodName(){
            ...code block
        }
    }
*/

class NewObject {
    constructor() {
        this.name;
        this.desc;
    }
}

let one = new NewObject();
one.name = 'sample';
// console.log(one);

//1        2
class Item {
//  3                   4
    constructor(name = "", desc = "", price = 0.00) {
//      5   6   7
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}

/* 
    1. Keyword to establish what type of "function".
    2. The name of our class should be pascal Case (Capital first Letter of each word)
    3. Keyword - is automatically run when the class is instantiated.
    4. The parameters for our constructed object. Est. values of new object.
    5/6/7 normal code block stuff, creates internal class variables that can be referenced in other functions
*/

let itemZero = new Item();

// console.log(itemZero);

let itemOne = new Item('beans','canned', 0.89);

// console.log(itemOne);

//Must call new before constructing a class because it assigns to heap not stack
//let brokenItem = Item();

//! Factory Functions

let iType = 'tomato soup';
let iDesc = 'canned';
let iCost = 1.29;
function processItem(i,d,c) {
    return new Item(i,d,c);
}

//! Methods
class DeptInventory {
    constructor(dept) {
        this.department = dept;
        this.items = [];
    }

    AddItem(newItem) {
        this.items.push(newItem);
        console.log("added Item", newItem)
    }

    PrintGoods(){
        return this.items.toString();
    }
}

let dryGoods = new DeptInventory("Dry Goods");
let itemTwo = new Item("corn", "canned", 0.79)
dryGoods.AddItem(itemTwo);


/* 
    1. Est. name of the method.
    2. This methods requires a parameter. (not all methods will need this)
    3. "this" keyword references the specific object(dry goods)
    4. Using an array method to add the "item object" to the items array.
    5. Creating new objects (Dept / Item)
    6. Invoking the method available to dryGoods object.
*/

//! Factory Methods
class Expense {
    static addUpchargeForProfit(wholesale) {
        let upcharge = wholesale + (wholesale * .25);
        return new Expense(wholesale, upcharge);
    }

    constructor(w,s){
        this.purchased_price = w;
        this.sell_at = s;
        this.sales_tax;
    }

    addTax(x) {
        let percentage = x;
        let saleCost = this.sell_at;

        this.sales_tax = (saleCost + (saleCost * percentage).toFixed(2));
    }
}

let itemToSell = Expense.addUpchargeForProfit(1);
itemToSell.addTax(0.07);
console.log(itemToSell);

let anotherItem = Expense.addUpchargeForProfit(5);
anotherItem.addTax(.06);
console.log(anotherItem);

