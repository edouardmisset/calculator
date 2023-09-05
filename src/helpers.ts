import { Operator } from "./types"

const operationRegEx = /[+\-*/%^]/gi

export const calculate = (leftValue: number, operator: Operator, rightValue: number): number => {
  if (!operationRegEx.test(operator)) {
    throw new Error(`This sign (${operator}) is not valid`)
  }
  switch (operator) {
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
      throw new Error('Something unexpected happened')
  }
}

export const concatenatePreviousValueAndNext = (value: string) => (previousValue: string): string =>
  `${previousValue}${value}`.trim()
