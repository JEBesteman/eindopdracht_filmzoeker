const movieList = document.getElementById("movie-list"); //ul

const addMoviesToDom = movies => {
    while (movieList.firstChild) {
        movieList.removeChild(movieList.firstChild); //verwijderd vorige lijst helemaal
    }
    //met .forEach beter ipv .map, 30% minder geheugenverbruik en niet nodig speciaal!!
    movies.forEach(movie => {
        const newLi = document.createElement("li");
        // const textNode = document.createTextNode(movie.Title); 
        // newLi.appendChild(textNode);
        // newLi.appendChild(textNode);
        const link = document.createElement("a");
        link.target = "_blank";
        link.href = `https://www.imdb.com/title/${movie.imdbID}`;
        const img = document.createElement("img");
        img.src = movie.Poster;
        link.appendChild(img);
        newLi.appendChild(link);
        movieList.appendChild(newLi);
    });
};
addMoviesToDom(movies);

const radiobuttons = document.getElementsByName("category");

radiobuttons.forEach((btn) => btn.addEventListener("change", e => handleOnChangeEvent(e)));

const handleOnChangeEvent = (e => {
    let value = e.target.value; //komt string uit
    const filterMovies = movies.filter(movie => movie.Title.toLowerCase().includes(value));
    console.log(filterMovies);
    
    const filterLatestMovies = movies.filter(movie => movie.Year >= 2014);
    console.log(filterLatestMovies);
    
    switch (value) {
        case "latest":
            addMoviesToDom(filterLatestMovies);
            break;
        case "avengers":
            addMoviesToDom(filterMovies);
            break;
        case "x-men":
            addMoviesToDom(filterMovies);
            break;
        case "princess":
            addMoviesToDom(filterMovies);
            break;
        case "batman":
            addMoviesToDom(filterMovies);
            break;
        default:
            addMoviesToDom(movies);
            break;
    };
});

//searchField, input value en movie.Title toLowerCase om te vergelijken
addSearchMovieToDom = (searchMovieTitle) => {
    const filterSearchMovie = movies.filter(movie => 
        movie.Title.toLowerCase().includes(searchMovieTitle.toLowerCase()));
    addMoviesToDom(filterSearchMovie);
    searchField.value = "";
};

//enter keyup toevoegen, searchField.value gebruiken
const searchField = document.getElementById("searchField");
searchField.addEventListener("keyup", e => {
    if (e.code === "Enter") {
        addSearchMovieToDom(searchField.value);
    } return;
});

