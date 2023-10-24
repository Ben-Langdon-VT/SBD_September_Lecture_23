
/*

!   Challenge Details:
    - Create an object called "hulu".
    - This object will have 3 main keys:
        - id, movies, and shows.
    - id will simply be an integer.
    - movies will be an array of objects that represent individual movies.
        These objects will have:
                - title will be a string
                - genre will be an array of strings
                - rating will be a string
                - run time will be an integer representing total minutes (whole number)
                - year released will be an integer.
    - shows will be an array of objects that represent individual shows.
        - These shows will have the following keys:
            - title will be a string
            - number of seasons an integer
            - seasons will be an array of objects that will represent individual seasons.
                - A season will have the following keys:
                    - season will be an integer
                    - number of episodes will be an iteger
                    - episodes will be an array of objects that hold individual episodes.
                        - Episodes will only detail the title of the episode and an original aired date.
    
    - There should be at least 2 movie objects.
    - There will only need to be 1 show object.
        - The show should detail 2 seasons with only 2 episodes each season.
    
    * This information can be 100% fabricated
    
    - After the hulu object has been created:
        - write 3 console logs
            - detail the array of movies
            - show the title of the first show
            - show the title of episode 1 of the second season of the first show.
*/

let hulu = {
    id: 1,
    movies: [
        {
            title: "Serenity",
            genre: ["Sci-Fi","Western"],
            rating: "10/10",
            runtime: 119,
            year: 2005
        },
        {
            title: "Cowboy Bebop: The Movie",
            genre: ["Western","Opera", "Jazz"],
            rating: "Also a 10/10, maybe I have a type",
            runtime: 115,
            year: 2001
        }
    ],
    shows: [
        {
            title: "Firefly",
            seasonCount: 2,
            seasons: [
                {
                    season: 1,
                    episodeCount: 2,
                    episodes: [
                        {
                            title: "Serenity",
                            aired: "2002-9-20"
                        },
                        {
                            title: "The Train Job",
                            aired: "2002-9-27"
                        }
                    ]
                },
                {
                    season: 2,
                    episodeCount: 2,
                    episodes: [
                        {
                            title: "Why was there not a second season",
                            aired: "2003-9-20"
                        },
                        {
                            title: "There should have been a second season",
                            aired: "2003-9-27"
                        }
                    ]
                }
            ]
        }
    ]
}

console.log(hulu["movies"]);
console.log(hulu.shows[0].title);
console.log(hulu.shows[0].seasons[1].episodes[0].title);