function openForm() {
	document.getElementById("myForm").style.display = "block";
	scroll();
}

function htmlentities(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function identifica() {
	nomeMittente = prompt("Inserisci il tuo nome");
	//console.log(nomeMittente);
}

function cambiaTema(){
	objDiv = document.getElementById("chat");
	var wall = document.getElementById("all");
	//console.log(wall)
	var theme = document.getElementById("tema").value;
	var cssPage = document.getElementById("pagcss");
		if (theme === "chiaro") {
			objDiv.style.backgroundImage = "url(sfondochiaro.jpg)";
			objDiv.style.border = "solid 0.5px #84452d"
			wall.style.backgroundImage = "url(wallpaperchiaro.jpg)";
			cssPage.setAttribute("href", "light.css")
		} else if (theme === "scuro") {
			objDiv.style.backgroundImage = "url(sfondo.jpg)";
			objDiv.style.border = "solid 0.5px white"
			wall.style.backgroundImage = "url(wallpaper.jpg)";
			cssPage.setAttribute("href", "dark.css")
		}
}

function closeForm() {
  	document.getElementById("myForm").style.display = "none";
} 
		
function sendMsg(){
	var testoMsg = document.getElementById("msg").value;
	var pag = document.getElementById("chat");
	if (testoMsg !== ""){
		pag.innerHTML = pag.innerHTML + '<div class="contenitore"><div class="messaggio"><p>' + nomeMittente + ' : ' + testoMsg + '</p></div></div>';
	}		
}

function scroll(){
	objDiv = document.getElementById("chat");
	objDiv.scrollTop = objDiv.scrollHeight;
}
		
function leggiMsg(){
	$.ajax({
		url : "leggi.php",
		crossDomain: true, 
		dataType : "JSON",
		success : function (data, stato) {
			var str = "<div><p></p></div>";
			//console.log(data);
			for (var i=0; i<data.length; i++){
				//console.log(data[i]);
				if (data[i].mittente === nomeMittente){
					str += ('<div class="contenitore"><div class="messaggio" style="background-color: #' + data[i].colore + ';"><p>' + data[i].mittente + ' : ' + data[i].testo + '</p><p style="font-size: 8px; margin-top: -18px; float: right;">' + data[i].tempo + '</p></div><img class="avatar" src="'+ data[i].avatar +'"></div>');
				} else {
					str += ('<div class="contenitore"><img class="avatarletto" src="'+ data[i].avatar +'"><div class="messaggioletto" style="background-color: #' + data[i].colore + ';"><p>' + data[i].mittente + ' : ' + data[i].testo + '</p><p style="font-size: 8px; margin-top: -18px; float: right;">' + data[i].tempo + '</p></div></div>');
				}
			}
			$("#chat").html(str);
			//var cliente = objDiv.clientHeight;
			//var posizione = objDiv.scrollTop;
			//var altezza = objDiv.scrollHeight;
			//var maxScroll = altezza - cliente;
			//console.log("pos: " + posizione);
			//console.log("cliente: " + cliente);
			//console.log("alt: " + altezza);
			//console.log("maxScroll: " + maxScroll);
			objDiv = document.getElementById("chat");
			if ((objDiv.scrollTop + objDiv.clientHeight + 80) === objDiv.scrollHeight) {
  				scroll();
				// document.getElementBy("risultato").innerHTML = "ciao " + data.nome; stessa comando di sopra;
				//var cliente = objDiv.clientHeight;
				//var posizione = objDiv.scrollTop;
				//var altezza = objDiv.scrollHeight;
				//var maxScroll = altezza - cliente;
				//console.log("pos: " + posizione);
				//console.log("cliente: " + cliente);
				//console.log("alt: " + altezza);
				//console.log("maxScroll: " + maxScroll);
			}
		},
		error : function (richiesta, stato, errori){
			console.log(stato);
		}
	});
	/*objDiv = document.getElementById("chat")
	if (objDiv.scrollTop + objDiv.clientHeight === objDiv.scrollHeight) {
  		objDiv.scrollTop = objDiv.scrollHeight;
	}
	objDiv = document.getElementById("chat");
	var cliente = objDiv.clientHeight;
	var posizione = objDiv.scrollTop;
	var altezza = objDiv.scrollHeight;
	var maxScroll = altezza - cliente;
	console.log("pos: " + posizione);
	console.log("cliente: " + cliente);
	console.log("alt: " + altezza);
	console.log("maxScroll: " + maxScroll);
	if (posizione === maxScroll) {
		objDiv.scrollTop = objDiv.scrollHeight;
	}
	//scroll();
	var objDiv = document.getElementById("chat");
	objDiv.scrollTop = objDiv.scrollHeight;
	var cliente = objDiv.clientHeight;
	var posizione = objDiv.scrollTop;
	var altezza = objDiv.scrollHeight;
	console.log("pos: " + posizione);
	console.log("cliente: " + cliente);
	console.log("alt: " + altezza);
	console.log(altezza - cliente);*/
}

function inviaMsg(){
	scegliAvatar = document.getElementById("img").value;
	var testoMessaggio = document.getElementById("msg").value;
	var scegliColore = document.getElementById("miocolore").value;
	scegliColore = scegliColore.slice(1);
	//scegliColore = parseInt(scegliColore,16);
	//console.log(scegliColore);
	$.ajax({
		url : "send.php",
		type : "POST",  
		data : {"mittente" : nomeMittente, "testo" : htmlentities(testoMessaggio), "colore" : scegliColore, "foto" : scegliAvatar},
		success : function (data) {
			//console.log("sono dentro");
			//console.log(scegliSesso);
			document.getElementById("msg").value = "";
			scroll();
			//console.log(scegliColore);
		},
		error : function (richiesta, stato, errori){
			console.log(stato);
		}
	});
	document.getElementById("msg").value = "";
}

$(document).ready(function(){
	identifica();
	cambiaTema();
	leggiMsg();	
	setInterval(cambiaTema, 1000);
	setInterval(leggiMsg, 1000);
	scroll();
});