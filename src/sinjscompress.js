var xhr;
function enviarPeticionAJAX(evento){
var norte=document.getElementById("idnorte").value;
var sur=document.getElementById("idsur").value;
var oeste=document.getElementById("idoeste").value;
var este=document.getElementById("ideste").value;
//var url="coordenadas-ciudades.xml?north=" + norte + "&south=" + sur + "&east=" + este + "&west=" + oeste + "&username=demo";
var url="coordenadas-ciudades.xml";
evento.target.disabled=true;
xhr=new XMLHttpRequest();
xhr.addEventListener("readystatechange",gestionarRespuesta,false);
xhr.open("GET",url,true)
xhr.send(null);

}

function gestionarRespuesta(evento){
	if (evento.target.readyState==4 && evento.target.status==200){
	document.getElementById("contenido").innerHTML=evento.target.responseText;
	var docXML=evento.target.responseXML;
	//recuerda textContent.
	//document.getElementById("poblacion").value=docXML.getElementsByTagName('cityname')[0].textContent;
	document.getElementById("poblacion").value=docXML.getElementsByTagName('cityname')[0].getAttribute('nombre');
	document.getElementById("boton").disabled=false;
	}

}