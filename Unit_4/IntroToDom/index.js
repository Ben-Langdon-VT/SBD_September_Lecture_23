/* 
    !DOM
        -Document Object Model
        - Only through the browser
    
    Frame:
        - Document HTML page (in the browser)
            - "document" - is a global variable
        - Object: Elements and comments (nodes)
        - Model: arrangement

    -Data representation of objects that compromise the structure and content of a document on the web.

    *BOM
        -Browser Object Model
        - "window" - global variable
        - various methods available
*/

//console.log('Test')

function askForStuff(){
    test = prompt();
    console.log(test);
}

// askForStuff();
console.log(document);
console.log(document.URL);
console.log(document.title);
console.log(document.location);

document.title = "DOM it";
console.log(document.title);

let h1 = document .createElement('h1');
console.log(h1);

/* 
    our variable now has access to our various properties
        -innerHTML: can inject a block of HTML
        -innerText: returns the visible text contained in a node
        -textContent: return the full text

        ex:
            <p>Hello <b>World<\p>
            ~innerText would return just Hello
            textContent woudl return Hello World 
*/

h1.innerText = 'Creating my first DOM element!';
console.log(h1);

/* 
    *Chain of Events:
    1. create the element
    2. apply the value/properties
    3. place the element
*/

//console.log(document.body);
document.body.appendChild(h1);

/* 
    !Finding Elements

    *HTMLCollection
        -An array-like object
        -Allow access to index, properties, and methods to help navigate and modify.
        - Does NOT allow to modify a group of elements all at once.
        - Can loop through it.
        - Can use .length property to get the size of the list.

    Accessing Multiple elements requires these methods:
        - getElementByTagName()
        - querySelectorAll()
        - getElementByClassName()
*/

let li = document.getElementsByTagName('li');
console.log(li);
console.log(li[0]);

// let bathroom = li[0];
// bathroom.style.color = 'red';

for (i of li) {
    i.style.color = 'green';
}


/* 
    .addEventListener()
        -DOM node method
        -requires an event to liston for or type and callback function

        ex: node.addEventListener('click', {} => {});
*/