
$(document).ready(function () {
    new Clipboard('#copiar_resultado');
    //document.getElementById("input_hora_imagen").value = new Date($.now());
});

function CheckAndRun(){
  //var hora_imagen = new Date($("#input_hora_imagen")[0].value);
  //var tiempo_restante = new Date($("#input_tiempo_restante")[0].value);
  var hora_actual = new Date($.now()).getTime() % (100800000);
  var hora_imagen = document.getElementById("input_hora_imagen").valueAsNumber + 14400000;
  var tiempo_restante_img = document.getElementById("input_tiempo_restante").valueAsNumber;// * 60000;
  var eclosionado = $("#input_eclosionado")[0].checked;

  console.log(hora_actual);
  console.log(hora_imagen);

  if(isNaN(hora_imagen) || isNaN(tiempo_restante_img))
  {
    console.log("missing data");
    return;
  }

  if(eclosionado == false)
  {
    tiempo_restante_img = tiempo_restante_img + 45;
  }
//50
//30
//20
  var tiempo_raid = null;
  var tiempo_rezagados = null;
  var tiempo_restante = tiempo_restante_img - (hora_actual - hora_imagen)/60000;

  if(tiempo_restante <= 20)
  {
    tiempo_raid = tiempo_restante - 5;
  }
  else if(tiempo_restante <= 40)
  {
    tiempo_raid = tiempo_restante - 10;
  }
  else if(tiempo_restante <= 45)
  {
    tiempo_raid = 30;
  }
  else if(tiempo_restante <= 65)
  {
    tiempo_raid = 30;
    tiempo_rezagados = 50;
  }
  else
  {
    tiempo_raid = tiempo_restante - 40;
    tiempo_rezagados = tiempo_restante - 20;
  }
  var tiempo_raid = (hora_actual + (tiempo_raid * 60000));
  var tiempo_rezagados = (hora_actual + (tiempo_rezagados * 60000));
  var tiempo_fin = (hora_imagen + (tiempo_restante_img * 60000));

  var PKMN = $("#input_pkmn")[0].selectedOptions[0];
  var GYM = document.getElementById("input_gym_name").value;
  var DIR = document.getElementById("input_gym_dir").value;
  var TIME_RAID = new Date(tiempo_raid).toTimeString().split(' ')[0].substring(0,5);
  //var TIME_RAID = new Date((hora_imagen)).toTimeString().split(' ')[0].substring(0,5);
  var TIME_RAID2 = new Date(tiempo_rezagados).toTimeString().split(' ')[0].substring(0,5);
  var TIME_END = new Date(tiempo_fin).toTimeString().split(' ')[0].substring(0,5);

  var resultado = "";
  resultado += "RAID " + PKMN.name + "\n";
  for(i = 0; i< PKMN.level;i++)
    resultado += PKMN.icon;
  resultado += "\n";
  resultado += "GYM " + GYM + "\n";
  resultado += "\n";
  resultado += DIR + "\n";
  resultado += "Hora raid: " + TIME_RAID + "\n";
  resultado += "Se va: " + TIME_END + "\n";
  resultado += "Quorum necesario: " + PKMN.rec_low + " a " + PKMN.rec_high + " personas\n";
  resultado += "\n";
  resultado += "\n";
  resultado += "Lista de confirmados:\n";
  for(i = 1; i <= PKMN.rec_high;i++)
    resultado += i + ")\n";
  resultado += "\n";
  resultado += "*Lista Oficial*\n";
  resultado += "Suerte Gente!🇧🇴\n";

  $("#texto_resultado").text(resultado);
}
