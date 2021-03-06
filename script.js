const screen = document.querySelector('#screen');
let firstNumber = '0',
  secondNumber = '',
  temp = '',
  variableIsFirstNumber = true,
  isAddition = false,
  isSubstraction = false,
  isMultiplication = false,
  isDivision = false;

function display(input) {
  screen.innerHTML = input;
}

function clearOperation() {
  isAddition = false;
  isSubstraction = false;
  isMultiplication = false;
  isDivision = false;
}

function clearVariables() {
  firstNumber = '';
  secondNumber = '';
  temp = '';
  variableIsFirstNumber = true;
}

function memoryClear() {
  clearOperation();
  clearVariables();
  display('0');
}

function switchVariable() {
  if (firstNumber !== '') {
    variableIsFirstNumber = !variableIsFirstNumber;
  } else if (secondNumber === '') {
    variableIsFirstNumber = false;
  }
  temp = '';
}

function assign(input) {
  // Assigning value to 'a' (or 'b')
  temp += `${input}`;
  display(temp);
  variableIsFirstNumber
    ? (firstNumber = Number(temp))
    : (secondNumber = Number(temp));
}

function selectOperator(operator) {
  // We declare the operation that we are going to carry out from the received operator
  switch (operator) {
    case '+':
      isAddition = true;
      break;
    case '-':
      isSubstraction = true;
      break;
    case 'x':
      isMultiplication = true;
      break;
    case '÷':
      isDivision = true;
      break;
  }
  switchVariable();
}

function doOperation(a, b) {
  // We do the operation depending on the activated operator
  if (isAddition) {
    a += b;
  } else if (isSubstraction) {
    a -= b;
  } else if (isMultiplication) {
    a *= b;
  } else if (isDivision) {
    a /= b;
  }
  firstNumber = a;
  secondNumber = '';
  temp = '';
  switchVariable();
  display(firstNumber);
}

function changeSign() {
  firstNumber = -firstNumber;
  display(firstNumber);
}
