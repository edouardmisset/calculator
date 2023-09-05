import { useEffect, useState } from 'react'
import './App.css'
import { calculate, concatenatePreviousValueAndNext } from './helpers'
import { StyledButton, StyledCalculator, StyledScreen } from './styles'
import {
  INDEX_TO_WORD,
  initialFirstNumber,
  initialSecondNumber,
  topRow,
  initialScreenValue,
} from './constants'

function App() {
  const [firstNumber, setFirstNumber] = useState(initialFirstNumber)
  const [secondNumber, setSecondNumber] = useState(initialSecondNumber)
  const [isFirstNumberSelected, setIsFirstNumberSelected] = useState(true)
  const [operator, setOperator] = useState()
  const [screenValue, setScreenValue] = useState(initialScreenValue)

  const changeSign = () => {
    if (isFirstNumberSelected) {
      setFirstNumber(previousValue => -previousValue)
    } else {
      setSecondNumber(previousValue => -previousValue)
    }
  }

  const handleNumberClick = event => {
    const value = event?.target?.value
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

  const handleOperatorClick = event => {
    const op = event?.target?.value
    if (op === undefined) {
      console.log('No operator')
      return
    }
    setOperator(op)
    setIsFirstNumberSelected(state => !state)
  }

  const handleCalculate = () => {
    const result = calculate(
      Number(firstNumber),
      operator,
      Number(secondNumber),
    )
    setScreenValue(result)
    setSecondNumber('')
    setFirstNumber(result)
    setIsFirstNumberSelected(state => !state)
  }

  const handleClear = () => {
    setScreenValue('')
    setFirstNumber('')
    setSecondNumber('')
    setOperator()
    setIsFirstNumberSelected(true)
  }

  const functionButtons = [
    { position: 'inverse', value: '+/-', text: '+/-', handler: changeSign },
    { position: 'clear', value: 'C', text: 'C', handler: handleClear },
    { position: 'divide', value: '/', text: '÷', handler: handleOperatorClick },
    {
      position: 'multiply',
      value: '*',
      text: 'x',
      handler: handleOperatorClick,
    },
    { position: 'add', value: '+', text: '+', handler: handleOperatorClick },
    {
      position: 'subtract',
      value: '-',
      text: '-',
      handler: handleOperatorClick,
    },
    { position: 'equal', value: '=', text: '=', handler: handleCalculate },
    { position: 'dot', value: '.', text: '.', handler: handleNumberClick },
  ]

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
      <StyledCalculator>
        <StyledScreen value={screenValue} readOnly />
        {buttons.map(({ value, position, text, handler }) => (
          <StyledButton
            $isZero={value === 0}
            $isEqual={value === '='}
            onClick={handler}
            $isTopRow={topRow.has(value)}
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
