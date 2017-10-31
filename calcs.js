
$(document).ready(function () {
    new Clipboard('#copiar_resultado');
});

function CheckAndRun(){
  //var hora_imagen = new Date($("#input_hora_imagen")[0].value);
  //var tiempo_restante = new Date($("#input_tiempo_restante")[0].value);
  var hora_imagen = document.getElementById("input_hora_imagen").valueAsNumber+ 14400000;
  var tiempo_restante = document.getElementById("input_tiempo_restante").valueAsNumber;

  if(isNaN(hora_imagen) || isNaN(tiempo_restante))
  {
    console.log("missing data");
    return;
  }

  var PKMN = $("#input_pkmn")[0].selectedOptions[0];
  var GYM = document.getElementById("input_gym_name").value;
  var DIR = document.getElementById("input_gym_dir").value;
  var TIME_RAID = new Date((hora_imagen + (tiempo_restante*3/4))).toTimeString().split(' ')[0].substring(0,5);
  //var TIME_RAID = new Date((hora_imagen)).toTimeString().split(' ')[0].substring(0,5);
  var TIME_END = new Date((hora_imagen + (tiempo_restante))).toTimeString().split(' ')[0].substring(0,5);

  var resultado = "";
  resultado += "RAID " + PKMN.name + "\n";
  for(i = 0; i< PKMN.level;i++)
    resultado += PKMN.icon;
  resultado += "\n";
  resultado += "GYM " + GYM + "\n";
  resultado += "\n";
  resultado += DIR + "\n";
  resultado += "Hora: " + TIME_RAID + "\n";
  resultado += "Se va: " + TIME_END + "\n";
  resultado += "\n";
  resultado += "\n";
  resultado += "Lista de confirmados:\n";
  resultado += "1)\n";
  resultado += "2)\n";
  resultado += "3)\n";
  resultado += "4)\n";
  resultado += "5)\n";
  resultado += "6)\n";
  resultado += "7)\n";
  resultado += "8)\n";
  resultado += "9)\n";
  resultado += "10)\n";
  resultado += "\n";
  resultado += "*Lista Oficial*\n";
  resultado += "Suerte Gente!🇴🇴\n";

  $("#texto_resultado").text(resultado);
}
