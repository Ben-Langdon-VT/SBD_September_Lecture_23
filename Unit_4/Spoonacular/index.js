//! Constants

import apiKey from "./key.js";
const baseURL = 'https://api.spoonacular.com/recipes/random';

let saved = [];

const searchForm = document.querySelector('form');
const randomCard = document.querySelector('.random-card');
const keptCards = document.getElementById('kept-cards');

//!DOM Events
const genCard = (recipe, random) => {
    //* Create Elements
    let card = document.createElement('div');
    let img = document.createElement('img');
    let body = document.createElement('div');
    let title = document.createElement('h5');
    let p = document.createElement('p');
    let btn = document.createElement('a');

    //* Set Attributes

    // console.log(recipe);
    card.className = 'card';
    card.style.width = '18rem';
    img.src = recipe.img;
    img.className = 'card-img-top';
    img.alt = recipe.title;
    body.className = 'card-body';
    title.className = 'card-title';
    title.textContent = recipe.title;
    btn.className = "btn btn-primary";
    btn.textContent = "Add";
    p.innerHTML = recipe.text;

    btn.onclick = () => {
        if (!saved.includes(recipe)) {
            saved.push(recipe);
            setTable();
        }
    }

    //*Attach Elements
    body.appendChild(title);
    if (random) {
        body.appendChild(btn);
    }
    else {
        body.append(p);
    }
    card.appendChild(img);
    card.appendChild(body);
    // console.log(card);
    return card;
}

//! Event Listeners
searchForm.addEventListener('submit', e => {
    e.preventDefault();
    fetchRandomRecipe();
    return;
});

//! Async functions
const fetchRandomRecipe = async () => {
    try {
        let response = await fetch(buildURL(baseURL, apiKey));
        let data = await response.json();
        // console.log(data);
        let recipe = data.recipes[0];
        // console.log(recipe);
        let obj = {
            title: recipe.title,
            img: recipe.image,
            src: recipe.sourceUrl,
            text: recipe.summary,
        };
        // console.log(obj);
        clearChildElements(randomCard);
        let card = genCard(obj, true);
        randomCard.appendChild(card);
    }
    catch (error) {
        console.error(error);
    }
}

//! Other Functions

function buildURL(base, key) {
    return `${base}?apiKey=${apiKey}`;
}

const clearChildElements = (rootElement) => {
    while (rootElement.firstChild) {
        rootElement.removeChild(rootElement.lastChild);
    }
}

const setTable = () => {
    clearChildElements(keptCards);
    saved.map((obj) => {
        let card = genCard(obj, false);
        keptCards.append(card);
    })
}

clearChildElements(keptCards);
fetchRandomRecipe();