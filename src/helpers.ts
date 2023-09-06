import { Operator } from './types'

const operationRegEx = /[+\-*/%^]/

export const calculate = (
  leftValue: number,
  operator: Operator,
  rightValue: number,
): number => {
  if (!operationRegEx.test(operator)) {
    throw new Error(`This sign (${operator}) is not valid`)
  }
  switch (operator) {
    case '+':
      return leftValue + rightValue
    case '-':
      return leftValue - rightValue
    case '/':
      if (rightValue === 0) throw new Error('Cannot divide by 0')
      return leftValue / rightValue
    case '*':
      return leftValue * rightValue
    case '%':
      return ((leftValue < 0 ? -1 : 1) * leftValue) % rightValue
    case '^':
      return leftValue ** rightValue
    default:
      throw new Error('Something unexpected happened')
  }
}

export const concatenatePreviousValueAndNext =
  (value: string) =>
  (previousValue: string): string =>
    `${previousValue}${value}`.trim()
