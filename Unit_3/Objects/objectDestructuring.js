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
    characters: [
        "Homer","Marge","Bart","Lisa","Maggie"
    ]
};


const{ characters, seasons} = theSimpsons;
// console.log(characters);

characters.push("Meo");
characters[5] = "Moe";
// console.log(theSimpsons);

const { currently_running: on_air} = theSimpsons;

// console.log(on_air);
// console.log(theSimpsons.currently_running);

//! Spread with Objects
const simpsonsCharacters = {
    simpsonHouse: [
        "Homer","Marge","Bart","Lisa","Maggie"
    ],
    moesTavern: ["Moe","Barney"],
};

const generalLocations = {
    park: 'statue',
    beach: "Dock",
    lake: "3-eyed fish",
}

const locations = {
    ...simpsonsCharacters,
    dmv: ["Patty","Selma"],
    ...generalLocations,
};

// console.log(locations);
console.log(locations.simpsonHouse);