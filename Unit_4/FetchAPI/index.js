/* 
    !API
        -Application Programming Interface
        -Code is large and complicated, we make interfaces to break up modules so every person doesnt need to understand everything/ do everything from scratch on a project
        -Client (front end) to communicate with server(database)
        -Allows HTTP requests and response lifecycles

*/

/* 
    !Fetch
    - Before fetch(), we would have to use an httpRequest through items like jQuery/Ajax
    - Is an API
    - Is a method that requires 1 argument
        - The location we are trying to obtain data from (url)
    - Handles the request and response.
    - returns a promise
        - Allows us access to resolvers (.then() / .catch())
*/

const testEndpoint = 'https://jsonplaceholder.typicode.com/posts/1';
fetch(testEndpoint)
    // .then(response => console.log(response));
    .then(res => console.log(res.url))
    // .then(res => console.log(res.body));

/* 
    !JSON
        - Javascript object notation
        - very ligthweight for storing and transfering data
        - easy to understand
    * Syntax
    {
        "key": "value",
        "key": true,
        "key": 0
    }
    
    -all keys are strings, no comments in json file
    -data types are booleans, numbers and strings, cant store functions/ objects in data
    - Everything is wrapped inq quotes with some minor exceptions like integers and booleans.
    - Data is all separated by a coma
    - CANNOT hold comments or functions
*/

fetch(testEndpoint)
    .then(response => response.json())
    .then(data => {
        displayIt(data.body);
    })

function displayIt(info) {
    const body = document.querySelector('body');
    const p = document.createElement('p');
    p.textContent = info;

    body.appendChild(p);
}

//* JSON.parse(string);
let myText = '{"name": "Gollum", "lost_ring":true}';
// console.log(JSON.parse(myText));
// console.log(myText);

let parseJSON = JSON.parse(myText);
console.log(parseJSON.name)

const url =  'https://meowfacts.herokuapp.com/'

// function getCatFacts() {
//     fetch(url)
//         .then(res => res.json())
//         .then(obj => {
//             // console.log(obj);
//             // console.log(obj.date);
//             console.log(obj.data[0]);
//             displayIt.log(obj.data[0]);
//         })
// }

/* 
    !Error Handling
    keywords: 
        -try
        -catch

    *Syntax
    try{
        ...normal code
    }
    catch(err){
        fail safely
    }
*/

const getCatFacts = async() => {
    try{
        let res = await fetch(url);
        let results = await res.json();
        let data = results.data[0];
        console.log(data);
        displayIt(data);
    }
    catch(err){
        console.error(err);
    }
}

getCatFacts();

fetch('./local.json')
.then(res => res.json())
.then(data => {
    let members = data.fellowship;
    console.log(members);
    for(m of members){
        displayIt(m.name);
    }
})
.catch(err => console.error(err));