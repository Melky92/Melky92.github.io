async function getMovies(res){
  return Object.values(res.movies2);
}

async function getMovieList(){
  let movie_list = [];
  try {
    let response = await fetch("https://getpantry.cloud/apiv1/pantry/42246c73-26f8-4874-8219-dd4ead8eea31/basket/movies");
    let parsed_response = await response.json();
    movie_list = getMovies(parsed_response);
  } catch(err) {
    console.log(err);
  }
  return movie_list;
}

async function setMovies(movie_list){
  movie_list.forEach(movie => {
    if(movie.deleted){
      return;
    }
    let movie_div = jQuery('<div>', {
      class: 'col-sm-2 mb-5',
    });
    let movie_card = jQuery('<div>', {
      class: 'card text-white bg-primary text-center',
    });
    let movie_img = jQuery('<img>', {
      src: movie.image,
      class: 'card-img-top',
    });
    let card_body = jQuery('<div>', {
      class: 'card-body',
    });
    let card_title = jQuery('<h5>', {
      class: 'card-title',
    });
    card_title.append(movie.title);
    let card_review = jQuery('<p>', {
      class: 'card-text',
    });
    card_review.append(movie.review);
    let card_rating = jQuery('<p>', {
      class: 'card-text',
    });
    card_rating.append(`${movie.rating}/10`);


    card_body.append(card_title);
    card_body.append(card_review);
    card_body.append(card_rating);
    movie_card.append(movie_img);
    movie_card.append(card_body);
    movie_div.append(movie_card);
    $("#movie-container").append(movie_div);
  });
}

$(document).ready(async function(){
  // let movie_list = [{
  //   "title":"El Libro De La Vida",
  //   "review":"Wenanga",
  //   "rating":"9",
  //   "image":"https://m.media-amazon.com/images/M/MV5BMTkzOTgzNDYzOF5BMl5BanBnXkFtZTgwOTgxMTkyMjE@._V1_.jpg"
  // }]
  let movie_list = await getMovieList();
  setMovies(movie_list);
});