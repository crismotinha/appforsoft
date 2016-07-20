/*busca o id na url da pagina*/

function queryString(parameter) {  
              var loc = location.search.substring(1, location.search.length);   
              var param_value = false;   
              var params = loc.split("&");   
              for (i=0; i<params.length;i++) {   
                  param_name = params[i].substring(0,params[i].indexOf('='));   
                  if (param_name == parameter) {                                          
                      param_value = params[i].substring(params[i].indexOf('=')+1)   
                  }   
              }   
              if (param_value) {   
                  return param_value;   
              }   
              else {   
                  return false;   
              }   
        }

var idPagina = queryString("id");
console.log(idPagina);
var idInterno = queryString("idInt");
console.log(idInterno);
/* fim da busca ao id na url da pagina*/

if (idInterno == false) { //se nao tiver vindo de uma modalidade, e sim direto do esporte...
for (var i=0; i < categoria.length; i++) {
	if (categoria[i].idesporte == idPagina) { //se o id for igual o da pagina é a categ do esporte selecionado
		var categ = document.getElementById("categ");
		if (i % 2 == 0) {
			var inserirInfos = '<li class="impar">' + categoria[i].nome + '</li>'
		}
		else {
			var inserirInfos = '<li class="par">' + categoria[i].nome + '</li>'
		}
		categ.innerHTML += inserirInfos;
	}
};
}
else { //se tiver vindo de uma modalidade e depois categoria
for (var i=0; i < categoria.length; i++) {
  if (categoria[i].idesporte == idPagina) {
    if (categoria[i].idmodalidade == idInterno) { //pra selecionar as modalidades só da categoria escolhida
    var categ = document.getElementById("categ");
      if (i % 2 == 0) {
        var inserirInfos = '<li class="impar">' + categoria[i].nome + '</li>'
      }
      else {
        var inserirInfos = '<li class="par">' + categoria[i].nome + '</li>'
      };
    categ.innerHTML += inserirInfos;
    };
  };
};
}