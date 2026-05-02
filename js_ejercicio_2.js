// 1. Inicializar el contador
let clics = 0;

// 2. Seleccionar los elementos del DOM
const boton = document.getElementById("btnClics");
const indicador = document.getElementById("contador");

// 3. Añadir el evento de escucha (click)
boton.addEventListener("click", () => {
  // Aumentar el contador
  clics++;
  // 4. Modificar el texto en el <span>
  indicador.textContent = "Clics: " + clics;
});
