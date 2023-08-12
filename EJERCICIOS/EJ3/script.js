let contenedorTexto = document.getElementById("textContainer")
edad = parseInt(prompt("Ingrese su edad"))
mensaje = (edad >= 18) ? "Usted es mayor de edad" : "Usted es menor de edad";
contenedorTexto.textContent = mensaje;