export const calculate = (leftValue, operation, rightValue) => {
  const operationRegEx = /[+\-*/%^]/gi
  if (!operationRegEx.test(operation)) {
    console.log(`This sign (${operation}) is not valid`)
    return
  }
  switch (operation) {
    case '+':
      return leftValue + rightValue
    case '-':
      return leftValue - rightValue
    case '/':
      return leftValue / rightValue
    case '*':
      return leftValue * rightValue
    case '%':
      return leftValue % rightValue
    case '^':
      return leftValue ** rightValue
    default:
      console.log('Something unexpected happened')
      break
  }
}

export const concatenatePreviousValueAndNext = value => previousValue =>
  `${previousValue}${value}`.trim()
