
let btn = document.querySelector("#enter")


btn.addEventListener("click", function () {

    
    let input_box = document.getElementById("input-box").value;
    if (input_box == "") {
        alert("please enter a valid Movie name!");
    }
    else {
        let apiKey = "abd13736"
        let apiurl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${input_box}`
        
        fetch(apiurl).then((res) =>
            res.json()).then((final) =>
                Display(final)
            ).catch((error) =>
                console.log(error))
    }


})


function Display(movie){
    let poster = document.querySelector("#poster");

    let image = document.createElement('img');
    image.src = movie.Poster
    
    let movieTitle = document.createElement('h2');
    movieTitle.textContent = `Movie Title: ${movie.Title}`

    let released = document.createElement('p');
    released.textContent = `movie released data: ${movie.Released}`

    let Director = document.createElement('p');
    Director.textContent = `Movie Director : ${movie.Director}`

    let Country = document.createElement('p');
    Country.textContent = `Country : ${movie.Country}`

    let Genre = document.createElement('p');
    Genre.textContent = `Genre: ${movie.Genre}`

    poster.append(image,movieTitle,released,Director,Country,Genre)

   
}