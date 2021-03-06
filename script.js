const screen = document.getElementById("screen");

let a = "0",
  b = "",
  result = "",
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
  a = "";
  b = "";
  result = 0;
  variableIsA = true;
}

function memoryClear() {
  clearOperation();
  clearVariables();
  display("");
}

function switchVariable() {
  if (a !== "") {
    variableIsA = !variableIsA;
  }
}

function assign(input) {
  // Assigning a value to 'a' (or 'b')
  if (variableIsA) {
    a = stringedDigits(a, input);
    display(a);
  } else {
    b = stringedDigits(b, input);
    display(b);
  }

  function stringedDigits(vari, input) {
    vari = Number(vari + "" + input);
    return vari;
  }
  console.log("a : " + a + " b : " + b);
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
}

function doOperation(a, b) {
  switchVariable();

  // We do the operation depending on the activated operator
  if (isAddition) {
    result = a + b;
  } else if (isSubstraction) {
    result = a - b;
  } else if (isMultiplication) {
    result = a * b;
  } else if (isDivision) {
    result = a / b;
  }
  a = result;
  display(result);
  console.log("a : " + a + " b : " + b + " r : " + result);
}

function changeSign() {
  a = 0 - a;
  display(a);
}
