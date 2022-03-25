var conciertos=[{nombre:"AC/DC", valor:"acdc", precio:100},
{nombre:"Barón Rojo", valor:"baron", precio:80},
{nombre:"Iron Butterfly", valor:"iron", precio:120}
]

function crearDesplegable()
{
	var select=document.createElement("select");
	select.id="conciertos";
	select.addEventListener("change", cambiarConcierto);

	var option=document.createElement("option");
	option.innerText="Seleccione una opción";
	option.selected=true;
	option.disabled=true;
	select.appendChild(option);
	for(i=0; i<conciertos.length; i++)
	{
		var option=document.createElement("option");
		option.innerText=conciertos[i].nombre;
		option.value=conciertos[i].valor;
		select.appendChild(option);

	}
	
	document.getElementById("desplegable").appendChild(select);

}
function cambiarConcierto()
{
	
	var select=document.getElementById("conciertos");
	var indice=select.selectedIndex-1;
	var nombre=conciertos[indice].nombre;
	var precio=conciertos[indice].precio;
	var texto="El concierto de "+nombre+" cuesta "+precio+"€";
	//alert(texto);
	var parrafo=document.getElementById("tprecio");
	if (parrafo==null)
	{
	var parrafo=document.createElement("p");
	parrafo.id="texto_precio";
	parrafo.innerHTML=texto;
	document.getElementById("precio").appendChild(parrafo);
	}
	else
	{
	parrafo.innerHTML=texto;
	}

	
	

}