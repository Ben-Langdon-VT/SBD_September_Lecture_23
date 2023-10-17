/*
    Array
        -Denoted by square brackets
        - like an object but everythings key is their index number.
        -using a property called length we can find the sum of the data stored.
*/

let list = ['milk', 'bread', 'chicken', 'coffee'];
//          0       1           2           3

console.log(list[2]);
console.log(list.length);


list[0] = 'chocolate milk';
console.log(list);
console.log(typeof list)

let notavengers = {
    'yadda': 1,
    'badda': 2
}

let avengers = [
    'Nick', 2, false, 'Steve', 'Bruce', [
        'Tony', 8, true
    ]
]

console.log(typeof avengers);
console.log(avengers);
console.log(avengers instanceof Array);
console.log(notavengers instanceof Array);

console.log(avengers[4]);
console.log(avengers[5][2]);
console.log(`Hello ${avengers[0]}, Hello ${avengers[5][0]}`)

//! Array Methods
//.push()
let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog']

food.push('pizza'); // add new item to end of array
console.log('PUSH: ', food);

//.splice(position, how many, with what)

food.splice(1, 1, 'Tacos');//insert item at index 1, remove 1 item, insert 'Tacos'
console.log(food);

food.splice(1,0,'Steak');//insert item at index 1, remove none, insert 'Steak'
console.log(food);

let entry = food.pop();//Take item off of end and return
console.log('POP: ', food);
console.log(entry);

let entry2 = food.shift();// removes item from beginning of array.
console.log("Shift: ", food);
console.log(entry2);

//.unshift(item, optional additional items)
food.unshift("Hamburger", "Salad");
console.log("UnShift: ",food);

// .toString()

let rgb = ['red', 'green', 'blue'];

rgbString = rgb.toString();
console.log(rgb);
console.log(rgbString);