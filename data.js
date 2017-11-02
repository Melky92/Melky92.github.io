
var pkmn =
[
  {"Name" : "LEVEL 1","Level" : 1,"Icon" : "❓","Rec_Low" : "1", "Rec_High" : "2"},
  {"Name" : "LEVEL 2","Level" : 2,"Icon" : "❓","Rec_Low" : "2", "Rec_High" : "4"},
  {"Name" : "LEVEL 3","Level" : 3,"Icon" : "❓","Rec_Low" : "4", "Rec_High" : "6"},
  {"Name" : "LEVEL 4","Level" : 4,"Icon" : "❓","Rec_Low" : "6", "Rec_High" : "8"},
  {"Name" : "LEVEL 5","Level" : 5,"Icon" : "❓","Rec_Low" : "8", "Rec_High" : "10"},

  {"Name" : "MAGIKARP","Level" : 1,"Icon" : "_","Rec_Low" : "1", "Rec_High" : "2"},
  {"Name" : "CROCONAW","Level" : 1,"Icon" : "_","Rec_Low" : "1", "Rec_High" : "2"},
  {"Name" : "QUILAVA","Level" : 1,"Icon" : "_","Rec_Low" : "1", "Rec_High" : "2"},
  {"Name" : "BAYLEAF","Level" : 1,"Icon" : "_","Rec_Low" : "1", "Rec_High" : "2"},

  {"Name" : "EXEGGUTOR","Level" : 2,"Icon" : "_","Rec_Low" : "2", "Rec_High" : "4"},
  {"Name" : "MUK","Level" : 2,"Icon" : "_","Rec_Low" : "2", "Rec_High" : "4"},
  {"Name" : "MAGMAR","Level" : 2,"Icon" : "_","Rec_Low" : "2", "Rec_High" : "4"},
  {"Name" : "ELECTABUZZ","Level" : 2,"Icon" : "_","Rec_Low" : "2", "Rec_High" : "4"},
  {"Name" : "WEEZING","Level" : 2,"Icon" : "_","Rec_Low" : "2", "Rec_High" : "4"},

  {"Name" : "MACHAMP","Level" : 3,"Icon" : "🏋","Rec_Low" : "2", "Rec_High" : "4"},
  {"Name" : "GENGAR","Level" : 3,"Icon" : "👻","Rec_Low" : "6", "Rec_High" : "8"},
  {"Name" : "ALAKAZAM","Level" : 3,"Icon" : "_","Rec_Low" : "4", "Rec_High" : "6"},
  {"Name" : "ARCANINE","Level" : 3,"Icon" : "_","Rec_Low" : "4", "Rec_High" : "6"},
  {"Name" : "JOLTEON","Level" : 3,"Icon" : "_","Rec_Low" : "4", "Rec_High" : "6"},
  {"Name" : "VAPOREON","Level" : 3,"Icon" : "_","Rec_Low" : "4", "Rec_High" : "6"},
  {"Name" : "FLAREON","Level" : 3,"Icon" : "_","Rec_Low" : "4", "Rec_High" : "6"},

  {"Name" : "BLASTOISE","Level" : 4,"Icon" : "💦","Rec_Low" : "6", "Rec_High" : "8"},
  {"Name" : "VENUSAUR","Level" : 4,"Icon" : "_","Rec_Low" : "6", "Rec_High" : "8"},
  {"Name" : "CHARIZARD","Level" : 4,"Icon" : "_","Rec_Low" : "6", "Rec_High" : "8"},
  {"Name" : "RHYDON","Level" : 4,"Icon" : "🦏","Rec_Low" : "6", "Rec_High" : "8"},
  {"Name" : "LAPRAS","Level" : 4,"Icon" : "🐳","Rec_Low" : "6", "Rec_High" : "8"},
  {"Name" : "SNORLAX","Level" : 4,"Icon" : "🐻","Rec_Low" : "6", "Rec_High" : "8"},
  {"Name" : "TYRANITAR","Level" : 4,"Icon" : "🦎","Rec_Low" : "6", "Rec_High" : "8"},

  {"Name" : "ENTEI","Level" : 5,"Icon" : "🦁","Rec_Low" : "8", "Rec_High" : "10"},
  {"Name" : "RAIKOU","Level" : 5,"Icon" : "🐯","Rec_Low" : "8", "Rec_High" : "10"},
  {"Name" : "SUICUNE","Level" : 5,"Icon" : "🦄","Rec_Low" : "8", "Rec_High" : "10"},
  {"Name" : "ARTICUNO","Level" : 5,"Icon" : "_","Rec_Low" : "8", "Rec_High" : "10"},
  {"Name" : "ZAPDOS","Level" : 5,"Icon" : "_","Rec_Low" : "8", "Rec_High" : "10"},
  {"Name" : "MOLTRES","Level" : 5,"Icon" : "_","Rec_Low" : "8", "Rec_High" : "10"},
];

/*var gyms =
[
  {"Name" : "El Cristo",
  "Address" : "El Cristo, Segundo anillo"},
  {"Name" : "Iglesia San Andres",
  "Address" : "Calle Charcas esquina Beni"},
  {"Name" : "Aslam",
  "Address" : "Campus UAGRAM cerca 2do anillo"},
];*/
//var gyms =["El Cristo","Iglesia San Andres","Aslam"];
//var dirs =["El Cristo, Segundo anillo","Calle Charcas esquina Beni","Campus UAGRAM cerca 2do anillo"];

$(document).ready(function () {
  //console.log($("#input_gym_name")[0]);
  $.getJSON("https://melky92.github.io/data.txt", function(data) {
    //console.log( "data" );
    gyms = data.gimnasios;
    var $input_gym_name = $("#input_gym_name");
    $input_gym_name.empty();
    for(i=0;i<gyms.length;i++)
    {
      $input_gym_name.append( '<option></option>' );
      $input_gym_name[0][i].text = gyms[i].Name;
      $input_gym_name[0][i].name = gyms[i].Name;
      $input_gym_name[0][i].address = gyms[i].Dir;
    }
  }).done(function() {
  }).fail(function() {
    console.log( "error" );
  }).always(function() {
    LvlChanged();
    GymSelected();
  });;
});

function LvlChanged()
{
  lvl = $("#input_pkmn_lvl")[0].selectedOptions[0].value;
  j = 0;
  $("#input_pkmn").empty();
  for(i = 0;i<pkmn.length;i++)
  {
    if(pkmn[i].Level == lvl)
    {
      $("#input_pkmn").append( '<option></option>' );

      $("#input_pkmn")[0][j].text = pkmn[i].Name;
      $("#input_pkmn")[0][j].name = pkmn[i].Name;
      $("#input_pkmn")[0][j].level = pkmn[i].Level;
      $("#input_pkmn")[0][j].icon = pkmn[i].Icon;
      $("#input_pkmn")[0][j].rec_low = pkmn[i].Rec_Low;
      $("#input_pkmn")[0][j].rec_high = pkmn[i].Rec_High;
      j++;
    }
  }
  for(;j<$("#input_pkmn")[0].length;j++)
  {
    $("#input_pkmn")[0][j].text = "";
  }
  CheckAndRun();
}

function GymSelected(){
  var x = -1;
  document.getElementById("input_gym_dir").value = $("#input_gym_name")[0].selectedOptions[0].address;
  /*for(i = 0; i < gyms.length; i++)
  {
    //console.log($("#input_gym_name"));
    if(document.getElementById("input_gym_name").value == gyms[i].Name)
    {
      x = i;
    }
  }
  if(x != -1)
  {
    document.getElementById("input_gym_dir").value = dirs[x];
  }
  else {
    document.getElementById("input_gym_dir").value = "direccion no encontrada";
  }*/
  CheckAndRun();
}
