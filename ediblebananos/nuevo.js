function makeMovieKey(movie_title){
  return movie_title.toLowerCase().replace(/\s/g, '');
}

async function getMovieList(){
  let movie_list = [];
  try {
    let response = await fetch("https://getpantry.cloud/apiv1/pantry/42246c73-26f8-4874-8219-dd4ead8eea31/basket/movies");
    let parsed_response = await response.json();
    movie_list = parsed_response.movies2;
  } catch(err) {
    console.log(err);
  }
  return movie_list;
}

async function getMovie(movie_title){
  let movie_key = makeMovieKey(movie_title);
  let movies = await getMovieList();
  return movies[movie_key];
}

async function findMovie(){
  console.log("finding");
  let movie = await getMovie($("#title")[0].value);
  if(movie){
    $("#title")[0].value = movie.title;
    $("#review")[0].value = movie.review;
    $("#image")[0].value = movie.image;
    $("#rating")[0].value = movie.rating;
  } else {
    alert("No hay tu peli, agregajla");
  }
}

async function addMovie(movie){
  try{
    fetch("https://getpantry.cloud/apiv1/pantry/42246c73-26f8-4874-8219-dd4ead8eea31/basket/movies", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,es;q=0.8",
        "content-type": "application/json;charset=UTF-8",
      },
      "body": JSON.stringify({movies2:movie}),
      "method": "PUT",
    });
  } catch(err){
    console.log(err);
  }
}

function createMovie(){
  let movie = {
    title: $("#title")[0].value,
    review: $("#review")[0].value,
    image: $("#image")[0].value,
    rating: $("#rating")[0].value,
    deleted: false,
  };
  if(!movie.title || !movie.review || !movie.image || !movie.rating){
    alert("ya pe llena bien los datos weon lptm me cago");
    return null;
  }

  let movie_key = makeMovieKey(movie.title);

  return { [movie_key] : movie};
}

async function submitMovie(){
  let movie = createMovie();
  if(movie){
    addMovie(movie);
    $("#title")[0].value = "";
    $("#review")[0].value = "";
    $("#image")[0].value = "";
    $("#rating")[0].value = "";
    alert("Bien hecho");
  }
}

$(document).ready(function(){
  $("#metalebtn").click(submitMovie);
  $("#buscarbtn").click(findMovie);
});