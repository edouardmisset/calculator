import { MouseEventHandler, useEffect, useState } from 'react'
import {
  INDEX_TO_WORD,
  initialFirstNumber,
  initialScreenValue,
  initialSecondNumber,
  topRow,
} from './constants'
import './global-styles.css'
import { calculate, concatenatePreviousValueAndNext } from './helpers'
import { StyledButton, StyledCalculator, StyledScreen } from './styles'
import { Operator, operatorSchema } from './types'

function App(): JSX.Element {
  const [firstNumber, setFirstNumber] = useState(initialFirstNumber)
  const [secondNumber, setSecondNumber] = useState(initialSecondNumber)
  const [isFirstNumberSelected, setIsFirstNumberSelected] = useState(true)
  const [operator, setOperator] = useState<Operator>()
  const [screenValue, setScreenValue] = useState<number | string>(
    initialScreenValue,
  )

  const changeSign: VoidFunction = () => {
    if (isFirstNumberSelected) {
      setFirstNumber(previousValue => (-1 * Number(previousValue)).toString())
    } else {
      setSecondNumber(previousValue => (-1 * Number(previousValue)).toString())
    }
  }

  const handleNumberClick: MouseEventHandler<HTMLButtonElement> = event => {
    if (!(event.target instanceof HTMLButtonElement)) return
    const { value } = event.target
    if (value === undefined) return
    const setNumber = concatenatePreviousValueAndNext(value)
    if (isFirstNumberSelected === true) {
      setFirstNumber(setNumber)
      setScreenValue(firstNumber)
    } else {
      setSecondNumber(setNumber)
      setScreenValue(secondNumber)
    }
  }

  const toggleSelectedNumber: VoidFunction = () =>
    setIsFirstNumberSelected(state => !state)

  const handleOperatorClick: MouseEventHandler<HTMLButtonElement> = event => {
    if (!(event.target instanceof HTMLButtonElement)) return
    const op = event.target.value
    if (op === undefined) {
      window.console.log('No operator')
      return
    }
    const parsedOperator = operatorSchema.parse(op)
    setOperator(parsedOperator)
    toggleSelectedNumber()
  }

  const handleCalculate: VoidFunction = () => {
    if (operator === undefined) return

    const result = calculate(
      Number(firstNumber),
      operator,
      Number(secondNumber),
    )
    setScreenValue(result)
    setSecondNumber('')
    setFirstNumber(result.toString())
    toggleSelectedNumber()
  }

  const handleClear: VoidFunction = () => {
    setScreenValue('')
    setFirstNumber('')
    setSecondNumber('')
    setOperator(undefined)
    setIsFirstNumberSelected(true)
  }

  const functionButtons = [
    {
      position: 'inverse',
      value: '+/-',
      text: '+/-',
      handler: changeSign,
    },
    {
      position: 'clear',
      value: 'C',
      text: 'C',
      handler: handleClear,
    },
    {
      position: 'divide',
      value: '/',
      text: '÷',
      handler: handleOperatorClick,
    },
    {
      position: 'multiply',
      value: '*',
      text: 'x',
      handler: handleOperatorClick,
    },
    {
      position: 'add',
      value: '+',
      text: '+',
      handler: handleOperatorClick,
    },
    {
      position: 'subtract',
      value: '-',
      text: '-',
      handler: handleOperatorClick,
    },
    {
      position: 'equal',
      value: '=',
      text: '=',
      handler: handleCalculate,
    },
    {
      position: 'dot',
      value: '.',
      text: '.',
      handler: handleNumberClick,
    },
    {
      position: 'power',
      value: '^',
      text: '^',
      handler: handleOperatorClick,
    },
    {
      position: 'modulo',
      value: '%',
      text: '%',
      handler: handleOperatorClick,
    },
  ] as const

  const numberButtons = INDEX_TO_WORD.map((text, index) => ({
    position: text,
    value: index,
    text: index,
    handler: handleNumberClick,
  }))

  const buttons = [...numberButtons, ...functionButtons]

  useEffect(() => {
    if (isFirstNumberSelected === true) {
      setScreenValue(firstNumber)
    } else {
      setScreenValue(secondNumber)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstNumber, secondNumber])

  return (
    <>
      <header>
        <h1>Awesome Calculator 🔥</h1>
      </header>
      <StyledCalculator data-testid="calculator">
        <StyledScreen value={screenValue} readOnly />
        {buttons.map(({ value, position, text, handler }) => (
          <StyledButton
            $isBottomLeft={value === 0}
            $isBottomRight={value === '+'}
            $isEqual={value === '='}
            onClick={handler}
            $isTopRow={topRow.has(value.toString())}
            key={value}
            $position={position}
            value={value}
          >
            {text}
          </StyledButton>
        ))}
      </StyledCalculator>
    </>
  )
}

export default App
