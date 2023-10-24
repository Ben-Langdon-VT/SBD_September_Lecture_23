let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    season: {
        'season one': [],
        'season two': [],
        'season three': []
    },
    currently_running: true,
};

// *Object.keys()
// console.log(Object.keys(theSimpsons));
// console.log(listKeys)

//* Object.values() - returns an array of values

// console.log(Object.values(theSimpsons));

//* Object.assign() - copies all enumerable properties from one or more sources

let objOne = {name: 'Bob'};
let objTwo = {work: 'Manager'};

let newObject = Object.assign(objOne, objTwo);
// console.log(newObject);

let futurama = Object.assign(theSimpsons);
// console.log("Futurama: ", futurama);

console.log("Before: ", Object.keys(futurama));
delete futurama.currently_running;
console.log("After: ", Object.keys(futurama));

Object.freeze(theSimpsons);

theSimpsons.id = 2;
console.log()