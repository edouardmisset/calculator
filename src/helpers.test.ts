import { describe, it, expect } from 'vitest'
import { calculate, concatenatePreviousValueAndNext } from './helpers'

describe('Calculations', () => {
  it('Addition', () => {
    expect(calculate(4, '+', 2)).toEqual(6)
    expect(calculate(4.5, '+', -0.5)).toEqual(4)
  })
  it('Subtraction', () => {
    expect(calculate(4.5, '-', -0.5)).toEqual(5)
    expect(calculate(4, '-', 1)).toEqual(3)
  })
  it('Multiplication', () => {
    expect(calculate(4, '*', 2)).toEqual(8)
    expect(calculate(4.5, '*', -2)).toEqual(-9)
  })
  it('Division', () => {
    expect(calculate(5, '/', 2)).toEqual(2.5)
    expect(calculate(-1, '/', 2)).toEqual(-0.5)
    expect(() => calculate(1, '/', 0)).toThrowError('Cannot divide by 0')
  })
  it('Modulo', () => {
    expect(calculate(5, '%', 2)).toEqual(1)
    expect(calculate(2, '%', 2)).toEqual(0)
    expect(calculate(4, '%', 2)).toEqual(0)
    expect(calculate(-1, '%', 1)).toEqual(0)
    expect(calculate(1, '%', -1)).toEqual(0)
  })
  it('Square', () => {
    expect(calculate(5, '^', 2)).toEqual(25)
    expect(calculate(-1, '^', 2)).toEqual(1)
    expect(calculate(-1, '^', 3)).toEqual(-1)
    expect(calculate(2, '^', 3)).toEqual(8)
  })
})


describe('Concatenate', () => {
  it('should concatenate string', () => {
    expect(concatenatePreviousValueAndNext('5')('5')).toEqual('55')
  })
})