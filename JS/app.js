let calculateValue = 0;
let displayValue = "";

function calc() {
  let lblOutput = document.getElementById("output");
  lblOutput.innerHTML = calculateValue;

  if (displayValue.endsWith(" + ") || displayValue.endsWith(" - ") || displayValue.endsWith(" x ") || displayValue.endsWith(" / ")) {
    displayValue = displayValue.slice(0, -3);
    document.getElementById("value_display").innerHTML = displayValue;
  }
}

function insertOperator(operator) {
  let inputElement = document.getElementById("input_value");
  let inputValue = parseFloat(inputElement.value);

  if (isNaN(inputValue)) {
    alert("Please enter a valid number.");
    return;
  }

  switch (operator) {
    case "+":
      calculateValue += inputValue;
      break;
    case "-":
      calculateValue -= inputValue;
      break;
    case "*":
      calculateValue *= inputValue;
      break;
    case "/":
      calculateValue /= inputValue;
      break;
    default:
      alert("Invalid Operator!");
      return;
  }

  displayValue += String(inputValue) + " " + String(operator) + " ";
  let lblDisplay = document.getElementById("value_display");
  lblDisplay.innerHTML = displayValue;

  inputElement.value = "";
}

function clearCalculator() {
  calculateValue = 0;
  displayValue = "";
  document.getElementById("value_display").innerHTML = "0";
  document.getElementById("output").innerHTML = "";
  document.getElementById("input_value").value = "";
}
