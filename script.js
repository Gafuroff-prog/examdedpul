import movies from './movies.js';


    const movieContainer = document.getElementById("movieContainer");
    const searchInput = document.getElementById("searchInput");
    const filterGenre = document.getElementById("filterGenre");
    const sortBy = document.getElementById("sortBy");
    const searchButton = document.getElementById("searchButton");

    function generateMovies(movieList){
        movieContainer.innerHTML = '';
        movieList.forEach(movie =>{
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <h3>${movie.name}</h3>
    <img src="${movie.img}" alt="${movie.name}">
    <p>Genre: ${movie.category}</p>
    <p>Rating: ${movie.rating}</p>
`;

            movieContainer.appendChild(card);
        });
    }

    function searchMovies(){
        let filteredMovies = movies;

        const searchValue = searchInput.value.toLowerCase();
        if(searchValue){
            filteredMovies = filteredMovies.filter(movie => 
                movie.name.toLowerCase().includes(searchValue)
                );  
        }
    }

    const sortValue = sortBy.value;
    if(sortValue === "alphabeticalAsc"){
        filteredMovies.sort((a,b) => a.name.localeCompare(b.name));
    }else if(sortValue === "alphabeticalDesc"){
        filteredMovies.sort((a,b) => b.name.localeCompare(a.name));
    }else if(sortValue === "ratingAsc"){
        filteredMovies.sort((a,b) => a.rating.localeCompare(b.rating));
    }else if(sortValue === "ratingDesc"){
        filteredMovies.sort((a,b) => b.rating.localeCompare(a.rating));
    }

    if (filteredMovies.length === 0) {
        movieContainer.innerHTML = `<p style="color:white; font-size:120px; text-align:center;">No movies found</p>`;
        return;
    }
    

    generateMovies(filteredMovies);

    searchButton.addEventListener('click', searchMovies);
    searchInput.addEventListener('keyup', (event) => {
        if(event.key === "Enter"){
            searchMovies();
        }
    });

    sortBy.addEventListener("change", searchMovies);

    generateMovies()

    searchButton.addEventListener('click', filter)
