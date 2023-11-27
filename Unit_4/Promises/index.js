/* 
    !Promises

    3 Main States:
        -Pending
        -Filled
        -
    In an object that may produce a singular value in the future.

    Takes in two parameters
        - Resolve
        - Reject

    Always return an object
*/

//? Mock internet send
function getData() {
    setTimeout(() => {
        return "some data";
    }, 3000);
}

// let data = getData();
//* the value comes late - 3 seconds
//console.log(data);
//* We get an undefined because the information is delayed when it is compiled.

function getDataAgain(cb) {
    setTimeout(() => {
        cb("some Data");
    }, 3000);
}

// getDataAgain(data => console.log(data));
// console.log('Hello World');

function returnData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) {
                resolve('some data from Promise');
            }
            else {
                reject('This is a rejection');
            }
        }, 3000);
    })
}

// console.log(returnData());

/* 
    !Resolvers
        - When returned, the returnData() function will return a promise instead of a given string.

        - Chained with a resolver
            *Keywords:
                -then(cb) 
                    - if success
                    -can be chained together
                - .catch(cb)
                    -if error
                    -handle error without failing, ex 404 page not found
                - Takes in a callback function
                - only put the semicolon(;) after the last resolver
*/

returnData()
    .then(data => console.log('From Response: ', data))
    .then(() => {
        let x = 1;
        let y = 2;
        console.log(x+y);
    })
    .catch(function(err) { 
        console.error(`This is the catch: ${err}`);
    });

    /* 
        * The Process
            - Creating a new Promise
                - resolve / reject are parameters of a cb function
            - setTimeout is acting as our "waiting" for a resource/data
            -resolve() or reject() said promise
            -When returned, returns a promise object - not a string
            - use of resolvers (.then()/.catch()) with cb to extrapolate the info from that promise.
     */