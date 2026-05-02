// Obtener referencias a los elementos DOM
const campoBusqueda = document.getElementById("campoBusqueda");
const lista = document.getElementById("listaElementos");
const elementos = lista.getElementsByTagName("li");

// Escuchar el evento 'input' (se dispara cada vez que cambia el texto)
campoBusqueda.addEventListener("input", function (e) {
  const textoBusqueda = e.target.value.toLowerCase();

  // Iterar sobre los elementos de la lista
  Array.from(elementos).forEach(function (item) {
    const nombreAnimal = item.textContent.toLowerCase();

    // Comprobar si el elemento contiene el texto buscado
    if (nombreAnimal.includes(textoBusqueda)) {
      item.classList.remove("oculto"); // Mostrar
    } else {
      item.classList.add("oculto"); // Ocultar
    }
  });
});
