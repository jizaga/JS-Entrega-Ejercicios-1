// 1. Obtener elementos del DOM
const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("lista");

// 2. Función para agregar elemento
function addItem() {
  const text = itemInput.value;

  if (text === "") {
    alert("Por favor, escribe algo.");
    return;
  }

  // 3. Crear el elemento li
  const li = document.createElement("li");
  li.innerHTML = `
                <span>${text}</span>
                <button class="delete-btn">Eliminar</button>
            `;

  // 4. Agregar funcionalidad al botón eliminar
  li.querySelector(".delete-btn").addEventListener("click", function () {
    li.remove();
  });

  // 5. Agregar el li a la lista
  list.appendChild(li);

  // 6. Limpiar input y enfocar
  itemInput.value = "";
  itemInput.focus();
}

// 7. Eventos
addBtn.addEventListener("click", addItem);

// 8. Permitir agregar con la tecla "Enter"
itemInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});
