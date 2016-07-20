//Gerar esporte

for (var i=0; i<= esp.length; i++) {
	var esportes = document.getElementById("esportesaqui"); 
	var img = esp[i].nome.toLowerCase(); //coloca em letra minuscula
	var linkimg = img.replace(/ /g,"_"); //cria a url da img nome_do_esporte	
		for (var e=0; e < categoria.length; e++) {
			if (categoria[e].idesporte == esp[i].idesporte)
				if (categoria[e].idmodalidade == -1) { //verifica se tem modalidade	
			    link = "categoria.html?id="+ esp[i].idesporte ; //pag seguinte se n tiver modalidade    
				}
				else {
				link = "modalidades.html?id="+ esp[i].idesporte ; //pag seguinte se tiver modalidade		
				};
			};
	var inserirInfos = '<div class="linha"><div class="pc30 icon"><a href="' +
	 link +	'"><img src="images/' + linkimg +
	'.png"></div><div class="pc70"><h2 class="esportesh2"> ' + esp[i].nome +
	'</h2></div></div></a>'; //gera o HTML
	esportes.innerHTML += inserirInfos; //insere o html
};

