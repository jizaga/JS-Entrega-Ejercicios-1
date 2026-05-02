function generarPassword() {
  const input = document.getElementById("longitud");
  const resultado = document.getElementById("resultado");
  const mensaje = document.getElementById("mensaje");

  const longitud = parseInt(input.value);

  resultado.textContent = "";
  mensaje.textContent = "";

  // Validación
  if (isNaN(longitud) || longitud < 4) {
    mensaje.textContent = "Error: la longitud debe ser mayor o igual a 4.";
    return;
  }

  // Caracteres disponibles
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";

  let password = "";

  // Generar contraseña aleatoria
  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);

    password += caracteres[indiceAleatorio];
  }

  resultado.textContent = password;
}
