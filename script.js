// Declaración de Variables

var cm = 0;
var m = 0;
var km = 0;
var ft = 0;
var inc = 0;
var mi = 0;


// Función que empieza al presionar el botón
function convertir(e) {

  // Centímetros a Metros   m = cm / 100
  if (e.target.name == "Centímetros-a-Metros") { // Chequear el nombre del botón
    cm = document.getElementById("cantidad").value; //  Se obtiene el número desde el input
    
    m = cm / 100; // Se realiza la operación

    document.getElementById("mensaje").innerHTML = "Metros: " + m; // Se modifica el div para mostrar el resultado

  }

  // Metros a Centimetros  cm = m * 100
  else if (e.target.name == "Metros-a-Centimetros"){ // Chequear el nombre del botón
    m = document.getElementById("cantidad").value; //  Se obtiene el número desde el input

    cm = m * 100; // Se realiza la operación

    document.getElementById("mensaje").innerHTML = ("Centímetros: " + cm); // Se modifica el div para mostrar el resultado

  }

  // Metros a Kilómetros km = m / 1000
  else if (e.target.name == "Metros-a-Kilometros"){ // Chequear el nombre del botón
    m = document.getElementById("cantidad").value; //  Se obtiene el número desde el input

    km = m / 1000; // Se realiza la operación

    document.getElementById("mensaje").innerHTML = ("Kilómetros: " + km); // Se modifica el div para mostrar el resultado

  }

  // Kilometros a Metros m = km * 1000
  else if (e.target.name == "Kilometros-a-Metros"){ // Chequear el nombre del botón
    km = document.getElementById("cantidad").value; //  Se obtiene el número desde el input
 
    m = km * 1000; // Se realiza la operación
 
    document.getElementById("mensaje").innerHTML = ("Metros: " + m); // Se modifica el div para mostrar el resultado

  }

  // Kilometros a Millas mi = km / 1.609
  else if (e.target.name == "Kilometros-a-Millas"){ // Chequear el nombre del botón
    km = document.getElementById("cantidad").value; //  Se obtiene el número desde el input

    mi = km / (1.609); // Se realiza la operación

    document.getElementById("mensaje").innerHTML = ("Millas: " + mi.toFixed(3)); // Se modifica el div para mostrar el resultado

  }

  // Millas a Kilometros km = mi * 1.609
  else if (e.target.name == "Millas-a-Kilometros"){ // Chequear el nombre del botón
    mi = document.getElementById("cantidad").value; //  Se obtiene el número desde el input

    km = mi * (1.609); // Se realiza la operación

    document.getElementById("mensaje").innerHTML = ("Kilometros: " + km.toFixed(3) ); // Se modifica el div para mostrar el resultado

  }

  // Centimetros a Pulgadas inc = cm / (2.54)
  else if (e.target.name == "Centimetros-a-Pulgadas"){ // Chequear el nombre del botón
    cm = document.getElementById("cantidad").value; //  Se obtiene el número desde el input

    inc = cm / (2.54); // Se realiza la operación

    document.getElementById("mensaje").innerHTML = ("Pulgadas: " + inc.toFixed(3) ); // Se modifica el div para mostrar el resultado

  }

  // Pulgadas a Centimetros cm = inc * (2.54)
  else if (e.target.name == "Pulgadas-a-Centimetros"){ // Chequear el nombre del botón
    inc = document.getElementById("cantidad").value; //  Se obtiene el número desde el input

    cm = inc * (2.54); // Se realiza la operación

    document.getElementById("mensaje").innerHTML = ("Centímetros: " + cm.toFixed(3) ); // Se modifica el div para mostrar el resultado

  }

  // Metros a Pies   ft = m * (3.281)
  else if (e.target.name == "Metros-a-Pies"){ // Chequear el nombre del botón
    m = document.getElementById("cantidad").value; //  Se obtiene el número desde el input

    ft = m * (3.281); // Se realiza la operación

    document.getElementById("mensaje").innerHTML = ("Pies: " + ft.toFixed(3) );

  }
     
  // Pies a Metros m = ft / (3.281)
  else{ // última opción
  ft = document.getElementById("cantidad").value; //  Se obtiene el número desde el input

  m = ft / (3.281); // Se realiza la operación
   
  document.getElementById("mensaje").innerHTML = ("Metros: " + m.toFixed(3) );
  }

}