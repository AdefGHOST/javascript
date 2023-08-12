const PI = Math.PI;
radio = parseInt(prompt("Ingrese el radio de una circunferencia"));
let area = Math.round(PI * (radio * radio));
let perimetro = Math.round(2 * PI * radio);

textArea.textContent = `El area: ${area}`
textPerimetro.textContent = `El perimetro: ${perimetro}`