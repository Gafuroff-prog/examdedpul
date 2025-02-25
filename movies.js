const movies = [
    {
        name: "Patton Oswalt: Annihilation",
        img: "https://www.google.com/imgres?q=dedpul&imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2F8IRAJantwDju48RC42P-x07gdRXRYfDmxSmNtUD7ul8CbMM0EfHMFYvxOZH0QN2fu6ZW%3Dw240-h480-rw&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fmovies%2Fdetails%2FDeadpool%3Fid%3D6fdwkD9G8v8%26hl%3Dru&docid=wr1OJqfJK_wBrM&tbnid=8nUqLc26Ilw2vM&vet=12ahUKEwipvfP798yLAxXYHRAIHWhXJv8QM3oECBoQAA..i&w=240&h=348&hcb=2&ved=2ahUKEwipvfP798yLAxXYHRAIHWhXJv8QM3oECBoQAA",
        year: 2017,
        runtime: "1h 6m",
        rating: 7.4,
        category: "Uncategorized"
    },
    {
        name: "New York Doll",
        img: "https://www.google.com/imgres?q=dedpul&imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2F8IRAJantwDju48RC42P-x07gdRXRYfDmxSmNtUD7ul8CbMM0EfHMFYvxOZH0QN2fu6ZW%3Dw240-h480-rw&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fmovies%2Fdetails%2FDeadpool%3Fid%3D6fdwkD9G8v8%26hl%3Dru&docid=wr1OJqfJK_wBrM&tbnid=8nUqLc26Ilw2vM&vet=12ahUKEwipvfP798yLAxXYHRAIHWhXJv8QM3oECBoQAA..i&w=240&h=348&hcb=2&ved=2ahUKEwipvfP798yLAxXYHRAIHWhXJv8QM3oECBoQAA",
        year: 2005,
        runtime: "1h 15m",
        rating: 7.9,
        category: "Documentary Music"
    },
    {
        name: "Mickey's Magical Christmas",
        img: "https://www.google.com/imgres?q=dedpul&imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2F8IRAJantwDju48RC42P-x07gdRXRYfDmxSmNtUD7ul8CbMM0EfHMFYvxOZH0QN2fu6ZW%3Dw240-h480-rw&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fmovies%2Fdetails%2FDeadpool%3Fid%3D6fdwkD9G8v8%26hl%3Dru&docid=wr1OJqfJK_wBrM&tbnid=8nUqLc26Ilw2vM&vet=12ahUKEwipvfP798yLAxXYHRAIHWhXJv8QM3oECBoQAA..i&w=240&h=348&hcb=2&ved=2ahUKEwipvfP798yLAxXYHRAIHWhXJv8QM3oECBoQAA",
        year: 2001,
        runtime: "1h 5m",
        rating: 6.9,
        category: "Animation Comedy"
    },
    {
        name: "And Then I Go",
        img: "https://www.google.com/imgres?q=dedpul&imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2F8IRAJantwDju48RC42P-x07gdRXRYfDmxSmNtUD7ul8CbMM0EfHMFYvxOZH0QN2fu6ZW%3Dw240-h480-rw&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fmovies%2Fdetails%2FDeadpool%3Fid%3D6fdwkD9G8v8%26hl%3Dru&docid=wr1OJqfJK_wBrM&tbnid=8nUqLc26Ilw2vM&vet=12ahUKEwipvfP798yLAxXYHRAIHWhXJv8QM3oECBoQAA..i&w=240&h=348&hcb=2&ved=2ahUKEwipvfP798yLAxXYHRAIHWhXJv8QM3oECBoQAA",
        year: 2017,
        runtime: "1h 39m",
        rating: 7.5,
        category: "Drama"
    },
    {
        name: "An Extremely Goofy Movie",
        img: "https://www.google.com/imgres?q=dedpul&imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2F8IRAJantwDju48RC42P-x07gdRXRYfDmxSmNtUD7ul8CbMM0EfHMFYvxOZH0QN2fu6ZW%3Dw240-h480-rw&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fmovies%2Fdetails%2FDeadpool%3Fid%3D6fdwkD9G8v8%26hl%3Dru&docid=wr1OJqfJK_wBrM&tbnid=8nUqLc26Ilw2vM&vet=12ahUKEwipvfP798yLAxXYHRAIHWhXJv8QM3oECBoQAA..i&w=240&h=348&hcb=2&ved=2ahUKEwipvfP798yLAxXYHRAIHWhXJv8QM3oECBoQAA",
        year: 2000,
        runtime: "1h 19m",
        rating: 6.4,
        category: "Animation Comedy Family"
    },
    {
        name: "Peter Rabbit",
        img: "https://www.google.com/imgres?q=dedpul&imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2F8IRAJantwDju48RC42P-x07gdRXRYfDmxSmNtUD7ul8CbMM0EfHMFYvxOZH0QN2fu6ZW%3Dw240-h480-rw&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fmovies%2Fdetails%2FDeadpool%3Fid%3D6fdwkD9G8v8%26hl%3Dru&docid=wr1OJqfJK_wBrM&tbnid=8nUqLc26Ilw2vM&vet=12ahUKEwipvfP798yLAxXYHRAIHWhXJv8QM3oECBoQAA..i&w=240&h=348&hcb=2&ved=2ahUKEwipvfP798yLAxXYHRAIHWhXJv8QM3oECBoQAA",
        year: 2018,
        runtime: "1h 35m",
        rating: 6.6,
        category: "Adventure Animation Comedy"
    }
];

export default movies;

