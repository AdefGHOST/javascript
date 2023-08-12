console.log("Ejemplo");

let circulo = document.getElementById("circulo");
let container = document.getElementById("container");

//Ancho y alto de la ventana
windowHeight = window.innerHeight;
windowWidth = window.innerWidth;

circuloRadio = (circulo.clientHeight / 2);

container.style.margin = `${circuloRadio}px`;
container.style.height = `${windowHeight - 50}px`;
container.style.width = `${windowWidth - 50}px`;

document.addEventListener("keydown", function(event) {
  tecla = event.key;

  if (tecla === "ArrowDown") {
    event.preventDefault();
    circulo.style.top = (windowHeight - 50)+"px";
  }
  if (tecla === "ArrowLeft") {
    event.preventDefault();
    circulo.style.left = 0+"px";
  }
  if (tecla === "ArrowRight") {
    event.preventDefault();
    circulo.style.left = (windowWidth - 50)+"px";
  }
  if (tecla === "ArrowUp") {
    event.preventDefault();
    circulo.style.top = 0+"px";
  }
});

function moverCirculo() {
  if (circulo.style.top > windowHeight) {
    circulo.style.top = 0;
  }
  if (circulo.style.left > windowWidth) {
    circulo.style.left = 0;
  }
  if (circulo.style.top < 0) {
    circulo.style.top = windowHeight;
  }
  if (circulo.style.left < 0) {
    circulo.style.left = windowWidth;
  }
}

/*
document.addEventListener("keydown", function(event) {
  tecla = event.key;

  if (tecla === "ArrowDown") {
    event.preventDefault();
    circulo.style.top = windowHeight+"px";
  }
  if (tecla === "ArrowLeft") {
    event.preventDefault();
    circulo.style.left = 0+"px";
  }
  if (tecla === "ArrowRight") {
    event.preventDefault();
    circulo.style.left = windowWidth+"px";
  }
  if (tecla === "ArrowUp") {
    event.preventDefault();
    circulo.style.top = 0+"px";
  }
});
*/

let arr = ["pera","banana","manzana"];

arr.forEach(function(valor, index, array){
  array[index] = valor.replace(valor[0], valor[0].toUpperCase());
}, arr);

console.log(arr);

for (const value of arr) {
  console.log(value);
  
}