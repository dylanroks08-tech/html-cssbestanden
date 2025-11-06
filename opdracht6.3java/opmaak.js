let value = false;

function kleur_aanpassen() {
  if (value==false) { 
    document.getElementById("robot").style.color = "lime";
    document.getElementById("robot").innerHTML = "lemon";
    value = true;
  }else {
    document.getElementById("robot").style.color = "yellow";
    document.getElementById("robot").innerHTML = "citroen";
    value = false;}
}