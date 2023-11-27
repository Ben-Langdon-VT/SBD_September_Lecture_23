//! Global Variables
const image = document.querySelector('#SwansonImage');
const h3 = document.querySelector('h3');
const baseURL = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';

//! Event Listener
image.addEventListener('click', e => {
    getQuote();
});

//! Display (function)

const getQuote = async() => {
    // fetch(baseURL)
    //     .then(response => response.json())
    //     .then(object => {
    //         let quote = object[0];
    //         h3.textContent = quote;
    //     })

    const response = await fetch(baseURL);
    const data = await response.json();

    h3.textContent = data[0];
}