const screen = document.getElementById("screen");
let a = "0",
  b = "",
  temp = "",
  variableIsA = true,
  isAddition = false,
  isSubstraction = false,
  isMultiplication = false,
  isDivision = false;

function display(input) {
  screen.innerHTML = input;
}

function clearOperation() {
  isAddition = isSubstraction = isMultiplication = isDivision = false;
}

function clearVariables() {
  a = b = temp = "";
  variableIsA = true;
}

function memoryClear() {
  clearOperation();
  clearVariables();
  display("0");
}

function switchVariable() {
  if (a !== "") {
    variableIsA = !variableIsA;
  } else if (b === "") {
    variableIsA = false;
  }
  temp = "";
}

function assign(input) {
  // Assigning a value to 'a' (or 'b')
  temp = temp + "" + input;
  variableIsA ? (a = Number(temp)) : (b = Number(temp));
  display(temp);
  console.log(`a : ${a} b : ${b} temp : ${temp} variableIsA : ${variableIsA}`);
}

function selectOperator(operator) {
  // We declare the operation that we are going to carry out from the received operator
  switch (operator) {
    case "+":
      isAddition = true;
      break;
    case "-":
      isSubstraction = true;
      break;
    case "x":
      isMultiplication = true;
      break;
    case "÷":
      isDivision = true;
      break;
  }
  switchVariable();
  console.log(`a : ${a} b : ${b} temp : ${temp} variableIsA : ${variableIsA}`);
}

function doOperation(a, b) {
  // We do the operation depending on the activated operator
  if (isAddition) {
    a = a + b;
  } else if (isSubstraction) {
    a = a - b;
  } else if (isMultiplication) {
    a = a * b;
  } else if (isDivision) {
    a = a / b;
  }
  b = "";
  temp = "";
  switchVariable();
  display(a);
  console.log(`a : ${a} b : ${b} temp : ${temp} variableIsA : ${variableIsA}`);
}

function changeSign() {
  a = 0 - a;
  display(a);
}
