const baseEndpoint = "http://www.omdbapi.com/?apikey=6a86e7e";
const movieContainer = document.querySelector(".movie-container");
const movieDescription = document.querySelector(".movie-description");
const posterContainer = document.querySelector(".poster");
const input = document.querySelector("input");
const button = document.querySelector("button");

const getMovie = async (movie) => {
    
    const fetchData = await fetch(`${baseEndpoint}&t=${movie}`)
    const movieData = await fetchData.json();
    
    if (movieData.Response === "False") {
        return console.log("doesn't work");
    }

    const moviePoster = document.createElement('img');
    moviePoster.src = movieData.Poster;
    posterContainer.appendChild(moviePoster)
        
    const movieYear = document.createElement('span')
    movieYear.innerText = movieData.Year;
    
    const movieTitle = document.createElement('h1')
    movieTitle.innerText = `${movieData.Title} (${movieYear.textContent})`;
    movieDescription.appendChild(movieTitle)
    
    const movieGenre = document.createElement("h4");
    movieGenre.innerText = `Genre: ${movieData.Genre}`;
    movieDescription.appendChild(movieGenre);
    
    const moviePlot = document.createElement("p");
    moviePlot.innerText = `Plot: ${movieData.Plot}`;
    movieDescription.appendChild(moviePlot);
    
    const movieDirector = document.createElement("h4");
    movieDirector.innerText = `Actors: ${movieData.Director}`;
    movieDescription.appendChild(movieDirector);
    
    const movieActors = document.createElement("h4");
    movieActors.innerText = `Actors: ${movieData.Actors}`;
    movieDescription.appendChild(movieActors);
    
    const movieRating = document.createElement("h3");
    movieRating.innerText = `Rating:`;
    movieDescription.appendChild(movieRating);
    
    const IMDBRating = document.createElement("h4");
    IMDBRating.innerText = `IMDB: ${movieData.Ratings[0].Value}`;
    movieDescription.appendChild(IMDBRating);
    
    const rottenRating = document.createElement("h4");
    rottenRating.innerText = `${movieData.Ratings[1].Source}: ${movieData.Ratings[1].Value}`;
    movieDescription.appendChild(rottenRating);
    
    const metacriticRating = document.createElement("h4");
    metacriticRating.innerText = `${movieData.Ratings[2].Source}: ${movieData.Ratings[2].Value}`;
    movieDescription.appendChild(metacriticRating);
    
    console.log(movieData);
}

input.addEventListener('input',(e) => {
    for (let i = 0; i < 3; i++) {
        
    }
    console.log(input.value);
})

button.addEventListener('click',(e) => {
    movieDescription.innerHTML = '';
    posterContainer.innerHTML = '';
    e.preventDefault();
    const inputMovie = input.value;
    input.value = '';
    getMovie(inputMovie).catch((err = console.log(err)));
})