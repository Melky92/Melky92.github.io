
var pkmn =
[
  {"Name" : "LEVEL 1","Level" : 1,"Icon" : "❓"},
  {"Name" : "LEVEL 2","Level" : 2,"Icon" : "❓"},
  {"Name" : "LEVEL 3","Level" : 3,"Icon" : "❓"},
  {"Name" : "LEVEL 4","Level" : 4,"Icon" : "❓"},
  {"Name" : "LEVEL 5","Level" : 5,"Icon" : "❓"},
  {"Name" : "MAGIKARP","Level" : 1,"Icon" : "_"},
  {"Name" : "MAGMAR","Level" : 2,"Icon" : "a"},
  {"Name" : "MACHAMP","Level" : 3,"Icon" : "🏋"},
  {"Name" : "BLASTOISE","Level" : 3,"Icon" : "💦"},
  {"Name" : "JOLTEON","Level" : 3,"Icon" : "c"},
  {"Name" : "VAPOREON","Level" : 3,"Icon" : "d"},
  {"Name" : "CHARIZARD","Level" : 4,"Icon" : "&"},
  {"Name" : "RHYDON","Level" : 4,"Icon" : "🦏"},
  {"Name" : "GENGAR","Level" : 4,"Icon" : "👻"},
  {"Name" : "LAPRAS","Level" : 4,"Icon" : "🐳"},
  {"Name" : "SNORLAX","Level" : 4,"Icon" : "🐻"},
  {"Name" : "TYRANITAR","Level" : 4,"Icon" : "🦎"},
  {"Name" : "ENTERI","Level" : 5,"Icon" : "🦁"},
  {"Name" : "RAIKOU","Level" : 5,"Icon" : "º"},
  {"Name" : "SUICUNE","Level" : 5,"Icon" : "-"},
  {"Name" : "ARTICUNO","Level" : 5,"Icon" : "*"},
  {"Name" : "ZAPDOS","Level" : 5,"Icon" : "="},
  {"Name" : "MOLTRES","Level" : 5,"Icon" : ","}
];

var gyms =
[
  {"Name" : "El Cristo",
  "Address" : "El Cristo, Segundo anillo"},
  {"Name" : "Iglesia San Andres",
  "Address" : "Calle Charcas esquina Beni"},
  {"Name" : "Aslam",
  "Address" : "Campus UAGRAM cerca 2do anillo"},
];
//var gyms =["El Cristo","Iglesia San Andres","Aslam"];
//var dirs =["El Cristo, Segundo anillo","Calle Charcas esquina Beni","Campus UAGRAM cerca 2do anillo"];

$(document).ready(function () {
  //console.log($("#input_gym_name")[0]);
  for(i=0;i<gyms.length;i++)
  {
    $("#input_gym_name")[0][i].text = gyms[i].Name;
    $("#input_gym_name")[0][i].name = gyms[i].Name;
    $("#input_gym_name")[0][i].address = gyms[i].Address;
  }
  LvlChanged();
  GymSelected();
});

function LvlChanged()
{
  lvl = $("#input_pkmn_lvl")[0].selectedOptions[0].value;
  j = 0;
  for(i = 0;i<pkmn.length;i++)
  {
    if(pkmn[i].Level == lvl)
    {
      $("#input_pkmn")[0][j].text = pkmn[i].Name;
      $("#input_pkmn")[0][j].name = pkmn[i].Name;
      $("#input_pkmn")[0][j].level = pkmn[i].Level;
      $("#input_pkmn")[0][j].icon = pkmn[i].Icon;
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
