https://getpantry.cloud/
42246c73-26f8-4874-8219-dd4ead8eea31

por si acaso:
[
  {
    "title":"El Libro De La Vida",
    "review":"Wenanga",
    "rating":"9",
    "image":"https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810",
    "deleted":false,
  },
  {
    "title":"Scott Pilgrim",
    "review":"Obra maestra",
    "rating":"10",
    "image":"https://pics.filmaffinity.com/Scott_Pilgrim_contra_el_mundo-809979700-large.jpg",
    "deleted":false,
  },
  {
    "title":"The Rocky Horror Picture Show",
    "review":"Neta complicado, porque la peli malísima pero como que es buena por eso",
    "rating":"?",
    "image":"https://m.media-amazon.com/images/M/MV5BOGIzYjM3YzMtMjk5ZS00NDY2LTllMjEtNjYwZjhmMDNhMDBkXkEyXkFqcGdeQXVyODUzMjQxMTA@._V1_.jpg",
    "deleted":false,
  },
  {
    "title":"Coco",
    "review":"Mediocre y derivativa",
    "rating":"5",
    "image":"https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810",
    "deleted":false,
  },
  {
    "title":"Pokémon: Mewtwo Strikes Back",
    "review":"Más o menos +3 por nostalgia creo, pero igual es buena nojoda",
    "rating":"10",
    "image":"https://m.media-amazon.com/images/I/615VN0Q649L.jpg",
    "deleted":false,
  },
]


curl -XPOST -H "Content-type: application/json" -d '{"movies":[{"image":"https://m.media-amazon.com/images/M/MV5BMTkzOTgzNDYzOF5BMl5BanBnXkFtZTgwOTgxMTkyMjE@._V1_.jpg","title":"El Libro De La Vida","rating":"9","review":"Wenanga"},{"image":"https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810","title":"Coco","rating":"5","review":"Mediocre y derivativa"},{"image":"https://pics.filmaffinity.com/Scott_Pilgrim_contra_el_mundo-809979700-large.jpg","title":"Scott Pilgrim","rating":"10","review":"Obra maestra"},{"image":"https://m.media-amazon.com/images/M/MV5BOGIzYjM3YzMtMjk5ZS00NDY2LTllMjEtNjYwZjhmMDNhMDBkXkEyXkFqcGdeQXVyODUzMjQxMTA@._V1_.jpg","title":"The Rocky Horror Picture Show","rating":"?","review":"Neta complicado, porque la peli malísima pero como que es buena por eso"},{"image":"https://m.media-amazon.com/images/I/615VN0Q649L.jpg","title":"Pokémon: Mewtwo Strikes Back","rating":"10","review":"Más o menos +3 por nostalgia creo, pero igual es buena nojoda"}]}' 'https://getpantry.cloud/apiv1/pantry/42246c73-26f8-4874-8219-dd4ead8eea31/basket/movies'