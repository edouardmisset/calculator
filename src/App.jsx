import { useEffect, useState } from 'react'
import './App.css'
import { calculate, concatenatePreviousValueAndNext } from './helpers'
import { StyledButton, StyledCalculator, StyledScreen } from './styles'

const initialScreenValue = ''
const initialFirstNumber = ''
const initialSecondNumber = ''

const INDEX_TO_WORD = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
]

const topRow = new Set(['+/-', 'C', '/', '*'])

const numberButtons = INDEX_TO_WORD.map((text, index) => ({
  position: text,
  value: index,
  text: index,
}))

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

  useEffect(() => {
    if (isFirstNumberSelected === true) {
      setScreenValue(firstNumber)
    } else {
      setScreenValue(secondNumber)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstNumber, secondNumber])

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

  const buttons = [...numberButtons, ...functionButtons]

  return (
    <>
      <header>
        <h1>Awesome Calculator 🔥</h1>
      </header>
      <StyledCalculator>
        <StyledScreen value={screenValue} readOnly />

        {buttons.map(({ value, position, text, handler }) => (
          <StyledButton
            isZero={value === 0}
            isEqual={value === '='}
            onClick={handler}
            isTopRow={topRow.has(value)}
            key={value}
            position={position}
            value={value}
          >
            {text}
          </StyledButton>
        ))}

        <StyledButton isTopRow onClick={handleClear}>
          C
        </StyledButton>
        <StyledButton isTopRow onClick={changeSign}>
          +/-
        </StyledButton>
        <StyledButton isTopRow onClick={handleOperatorClick} value="/">
          ÷
        </StyledButton>
        <StyledButton isTopRow onClick={handleOperatorClick} value="*">
          x
        </StyledButton>
        <StyledButton value={7} onClick={handleNumberClick}>
          7
        </StyledButton>
        <StyledButton value={8} onClick={handleNumberClick}>
          8
        </StyledButton>
        <StyledButton value={9} onClick={handleNumberClick}>
          9
        </StyledButton>
        <StyledButton onClick={handleOperatorClick} value="-">
          -
        </StyledButton>
        <StyledButton value={4} onClick={handleNumberClick}>
          4
        </StyledButton>
        <StyledButton value={5} onClick={handleNumberClick}>
          5
        </StyledButton>
        <StyledButton value={6} onClick={handleNumberClick}>
          6
        </StyledButton>
        <StyledButton onClick={handleOperatorClick} value="+">
          +
        </StyledButton>
        <StyledButton value={1} onClick={handleNumberClick}>
          1
        </StyledButton>
        <StyledButton value={2} onClick={handleNumberClick}>
          2
        </StyledButton>
        <StyledButton value={3} onClick={handleNumberClick}>
          3
        </StyledButton>
        <StyledButton isEqual onClick={handleCalculate}>
          =
        </StyledButton>
        <StyledButton isZero value={0} onClick={handleNumberClick}>
          0
        </StyledButton>
        <StyledButton value="." onClick={handleNumberClick}>
          .
        </StyledButton>
      </StyledCalculator>
    </>
  )
}

export default App
