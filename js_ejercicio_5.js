function calculate(operation) {
  // 1. Obtener valores
  const n1 = document.getElementById("num1").value;
  const n2 = document.getElementById("num2").value;
  const resultDiv = document.getElementById("result");

  // 2. Validación de entradas vacías
  if (n1 === "" || n2 === "") {
    showResult("Error: Campos vacíos", true);
    return;
  }

  const num1 = parseFloat(n1);
  const num2 = parseFloat(n2);
  let result = 0;

  // 3. Lógica de operación y validación de división por cero
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        showResult("Error: División por 0", true);
        return;
      }
      result = num1 / num2;
      break;
  }

  // 4. Mostrar resultado
  showResult(`Resultado: ${result}`, false);
}

function showResult(message, isError) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = message;
  resultDiv.className = isError ? "error" : "success";
}
