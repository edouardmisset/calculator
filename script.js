const screen = document.querySelector('#screen')
let firstNumber = '0'
let secondNumber = ''
let temp = ''
let variableIsFirstNumber = true
let isAddition = false
let isSubtraction = false
let isMultiplication = false
let isDivision = false

function display(input) {
  screen.value = input
}

function clearOperation() {
  isAddition = false
  isSubtraction = false
  isMultiplication = false
  isDivision = false
}

function clearVariables() {
  firstNumber = ''
  secondNumber = ''
  temp = ''
  variableIsFirstNumber = true
}

function memoryClear() {
  clearOperation()
  clearVariables()
  display('0')
}

function switchVariable() {
  if (firstNumber !== '') {
    variableIsFirstNumber = !variableIsFirstNumber
  } else if (secondNumber === '') {
    variableIsFirstNumber = false
  }
  temp = ''
}

function assign(input) {
  // Assigning value to 'a' (or 'b')
  temp += `${input}`
  display(temp)
  variableIsFirstNumber
    ? (firstNumber = Number(temp))
    : (secondNumber = Number(temp))
}

function selectOperator(operator) {
  // We declare the operation that we are going to carry out from the received operator
  switch (operator) {
    case '+':
      isAddition = true
      break
    case '-':
      isSubtraction = true
      break
    case 'x':
      isMultiplication = true
      break
    case '÷':
      isDivision = true
      break
  }
  switchVariable()
}

function doOperation(a, b) {
  // We do the operation depending on the activated operator
  if (isAddition) {
    a += b
  } else if (isSubtraction) {
    a -= b
  } else if (isMultiplication) {
    a *= b
  } else if (isDivision) {
    a /= b
  }
  firstNumber = a
  secondNumber = ''
  temp = ''
  switchVariable()
  display(firstNumber)
}

function changeSign() {
  firstNumber = -1 * Number(firstNumber)
  display(firstNumber.toString())
}
