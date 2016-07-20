// Menu hamburguer

function slidetoggle() {
      var slider = document.getElementById("content-menu");
      document.getElementById("shadow").className += " is-active";
      if(slider.style.left == "0px") {
        slider.style.left = "-500px";
        
      }
      else {
        slider.style.left = "0px";
      }
    }
function slideclose() {
      var slider = document.getElementById("content-menu");
      document.getElementById("shadow").className = "shadow";
      slider.style.left = "-500px";
    }

// Criar esportes

for(var i=0; i< esp.length; i++) {
  var idEsp = esp[i].id;
    window['esporte_'+ idEsp] = esp[i];
};