const esPangrama = () => {
    const ALFABETO_MINUSCULAS = "abcdefghijklmnñopqrstuvwxy";
    let cadena = document.getElementById("textoIngresado").value;
	cadena = cadena.toLowerCase();
	let alfabetoComoArreglo = Array.from(ALFABETO_MINUSCULAS);

	for (let indice = 0; indice < alfabetoComoArreglo.length; indice++) {
		let letraActual = alfabetoComoArreglo[indice];
		if (!cadena.includes(letraActual)){
            document.getElementById('resultado').innerHTML= "El texto ingresado NO es pangrama."; 
            return;
        } 
	}
	// Se termina el ciclo y no se rompió arriba, ¡así que la cadena es pangrama!
    document.getElementById('resultado').innerHTML= "El texto ingresado SI es pangrama.";
    
};

const esBisiesto = () =>{
	let nro = document.getElementById("numero").value;
	let nroInt = Number.parseInt(nro);
	if (isNaN(nroInt)) {
		alert("Error!, Ingrese un año correcto!.");
		return;
	}
	if(((nroInt%4 ===0)&& (nroInt%100!==0)) || (nroInt%400===0)){
		document.getElementById('resultado').innerHTML= `El año ${nroInt} es bisiesto`; 
		return;
	}else{
		document.getElementById('resultado').innerHTML= `El año ${nroInt} no es bisiesto`; 
		return;
	}
}

const listaRepetidos = () =>{
	let lista = document.getElementById("listica").value;
	let listaSeparada = lista.split(",");
	let listaEnteros = [];
	let vecesRepetidos;
	let listaFinal=[];
	//comprobar que se ingresó una lista de enteros.
	for (var i = 0; i < listaSeparada.length; i++) {
		listaEnteros[i] = Number.parseInt(listaSeparada[i]);
		if (isNaN(listaEnteros[i])) {
			alert("Error!, lista de enteros mal ingresada.");
			return;
		}
	}
	for (var i = 0; i < listaEnteros.length; i++) {	
		vecesRepetidos = vecesRepetido(listaEnteros,listaEnteros[i]);
		if(vecesRepetidos>1){
			listaFinal.push(listaEnteros[i]);
		}
		
	}
	document.getElementById('resultado').innerHTML= "[ " + listaFinal + " ]"; 
	return;
}

function vecesRepetido(lista,nro) {
	let veces=0;
	for(var i=0;i<lista.length;i++){
		if(lista[i]==nro){
			veces++;
		}
	}
	return veces;
}


const convertirRomano = () =>{
	let nro = document.getElementById("numero").value;
	//se comprueba si el numero es valido
	let nroInt = Number.parseInt(nro);
	if (isNaN(nroInt) || nroInt>3999 || nroInt <0) {
		alert("Error!, Ingrese un numero entero mayor que 0 y menor que 3999");
		return;
	}
	nroIngresado=Array.from(nro);
	let resultado;
	let resultadoFinal="";
	switch(nroIngresado.length){
		case 4:
			resultado= calcularRomano(nroIngresado,4);
			break;
		case 3:
			resultado= calcularRomano(nroIngresado,3);;
			break;
		case 2:
			resultado= calcularRomano(nroIngresado,2);;
			break;
		case 1:
			resultado= calcularRomano(nroIngresado,1);;
			break;
		default:
			break;
	}
	for(var i=0;i<resultado.length;i++){
		resultadoFinal=resultadoFinal+resultado[i];
	}
	document.getElementById('resultado').innerHTML= `El numero ${nro} en romano es:`; 
	document.getElementById('numeroRomanox').innerHTML= `${resultadoFinal}`; 

}

	function calcularRomano(nro,tamaño) {
		const diccionarioMil=["","M","MM","MMM"];
		const diccionarioCien=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
		const diccionarioDiez=["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
		const diccionarioUnidad=["","I","II","III","IV","V","VI","VII","VIII","IX"];
		let resuelto=[];
		let posicionDiccionario;
		if(tamaño===4){
			for(var i=0;i<tamaño;i++){
				posicionDiccionario=Number.parseInt(nro[i]);
				console.log("entrada",diccionarioMil[posicionDiccionario],"y ",posicionDiccionario, "xD ", i);
				if(i===0){
					resuelto.push(diccionarioMil[posicionDiccionario]);
				}
				if(i===1){
					resuelto.push(diccionarioCien[posicionDiccionario]);
				}
				if(i===2){
					resuelto.push(diccionarioDiez[posicionDiccionario]);
				}
				if(i===3){
					resuelto.push(diccionarioUnidad[posicionDiccionario]);
				}
			}
		}
		if(tamaño===3){
			for(var i=0;i<tamaño;i++){
				posicionDiccionario=Number.parseInt(nro[i]);
				if(i===0){
					resuelto.push(diccionarioCien[posicionDiccionario]);
				}
				if(i===1){
					resuelto.push(diccionarioDiez[posicionDiccionario]);
				}
				if(i===2){
					resuelto.push(diccionarioUnidad[posicionDiccionario]);
				}
			
			}
		}
		if(tamaño===2){
			for(var i=0;i<tamaño;i++){
				posicionDiccionario=Number.parseInt(nro[i]);
				if(i===0){
					resuelto.push(diccionarioDiez[posicionDiccionario]);
				}
				if(i===1){
					resuelto.push(diccionarioUnidad[posicionDiccionario]);
				}
			
			}
		}
		if(tamaño===1){
			for(var i=0;i<tamaño;i++){
				posicionDiccionario=Number.parseInt(nro[i]);
			    resuelto.push(diccionarioUnidad[posicionDiccionario]);
			}
		}
			

		return resuelto;
	}


