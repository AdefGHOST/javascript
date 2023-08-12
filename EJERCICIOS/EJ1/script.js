let estadoFinal = document.getElementById("textContainer");
let estado;
while(!(estado === "soleado" || estado === "nublado" || estado === "lloviendo")) {
    estado = prompt("¿Como esta el dia de hoy?").toLowerCase();
}
estadoFinal.textContent = `El dia de hoy esta ${estado}`;