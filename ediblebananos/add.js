async function getMovieList(){
  let movie_list = [];
  try {
    let response = await fetch("https://api.npoint.io/274635c026d1a5d65148");
    let parsed_response = await response.json();
    movie_list = parsed_response.movies;
  } catch(err) {
    console.log(err);
  }
  return movie_list;
}

async function addMovie(movie){
  try{
    fetch("https://getpantry.cloud/apiv1/pantry/42246c73-26f8-4874-8219-dd4ead8eea31/basket/movies", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,es;q=0.8",
        "content-type": "application/json;charset=UTF-8",
      },
      "body": JSON.stringify({movies:[movie]}),
      "method": "PUT",
    });
  } catch(err){
    console.log(err);
  }
}

function getMovie(){
  let movie = {
    title: $("#title")[0].value,
    review: $("#review")[0].value,
    image: $("#image")[0].value,
    rating: $("#rating")[0].value,
  };
  if(!movie.title || !movie.review || !movie.image || !movie.rating){
    alert("ya pe llena bien los datos weon lptm me cago");
  }
  return movie;
}

async function submitMovie(){
  console.log("submitting");
  let movie = getMovie();
  addMovie(movie);
}

$(document).ready(function(){
  $("#metalebtn").click(submitMovie);
});