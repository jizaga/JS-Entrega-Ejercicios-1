// Seleccionar el botón y el body
const boton = document.getElementById("btnColor");
const body = document.body;

// Función para generar color hexadecimal aleatorio
function generarColorAleatorio() {
  // Genera un número aleatorio, lo pasa a base 16 y toma 6 caracteres
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return color;
}

// Escuchar el evento click
boton.addEventListener("click", function () {
  body.style.backgroundColor = generarColorAleatorio();
});
