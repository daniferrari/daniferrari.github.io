var aux = true;

function abrir_menu (){

	if (aux == true) { 
		document.getElementById("menu_mobile").style = "display:block";
		aux = false;
	}
	else
	{
		document.getElementById("menu_mobile").style = "display:none";
		aux = true;
	}
	
}

function fechar_menu (){
	document.getElementById("menu_mobile").style = "display: none;";
	aux = true;
}