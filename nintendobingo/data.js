async function getEntries(res){
  console.log("entries:",res);
  return Object.values(res.entries);
}

async function getEntryList(){
  let entry_list = [];
  try {
    let response = await fetch("https://getpantry.cloud/apiv1/pantry/42246c73-26f8-4874-8219-dd4ead8eea31/basket/bingo");
    let parsed_response = await response.json();
    entry_list = getEntries(parsed_response);
  } catch(err) {
    console.log(err);
  }
  return entry_list;
}

async function setEntries(entry_list){
  entry_list.forEach(entry => {
    if(entry.deleted){
      return;
    }
    let entry_row = jQuery('<tr>', {
    });
    let entry_name = jQuery('<td>', {
    });
    entry_name.append(entry.nombre);
    entry_row.append(entry_name);

    for(let i = 1 ; i <= 25 ; i++){
      let entry_data = jQuery('<td>', {
      });
      entry_data.append(entry[`opcion${i}`] ? "SI" : "NO" );
      entry_row.append(entry_data);
    }
    $("#data-container").append(entry_row);
  });
}

$(document).ready(async function(){
  // let entry_list = [{
  //   "title":"El Libro De La Vida",
  //   "review":"Wenanga",
  //   "rating":"9",
  //   "image":"https://m.media-amazon.com/images/M/MV5BMTkzOTgzNDYzOF5BMl5BanBnXkFtZTgwOTgxMTkyMjE@._V1_.jpg"
  // }]
  console.log("getting entries");
  let entry_list = await getEntryList();
  setEntries(entry_list);
});