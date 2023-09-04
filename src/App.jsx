import { useEffect, useState } from 'react'
import './App.css'
import { calculate, concatenatePreviousValueAndNext } from './helpers'
import { StyledButton } from './styles'

const initialScreenValue = ''
const initialFirstNumber = ''
const initialSecondNumber = ''

function App() {
  const [firstNumber, setFirstNumber] = useState(initialFirstNumber)
  const [secondNumber, setSecondNumber] = useState(initialSecondNumber)
  const [isFirstNumberSelected, setIsFirstNumberSelected] = useState(true)
  const [operator, setOperator] = useState()
  const [screenValue, setScreenValue] = useState(initialScreenValue)

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

  const changeSign = () => {
    if (isFirstNumberSelected) {
      setFirstNumber(previousValue => -previousValue)
    } else {
      setSecondNumber(previousValue => -previousValue)
    }
  }

  return (
    <>
      <header>
        <h1>Awesome Calculator 🔥</h1>
      </header>
      <section className="calculator dark shadow">
        <input
          className="screen green"
          id="screen"
          value={screenValue}
          readOnly
        />

        <button className="secondary btn black" onClick={handleClear}>
          C
        </button>
        <button className="secondary btn black" onClick={changeSign}>
          +/-
        </button>
        <button
          className="secondary btn black"
          onClick={handleOperatorClick}
          value="/"
        >
          ÷
        </button>
        <button
          className="secondary btn black"
          onClick={handleOperatorClick}
          value="*"
        >
          x
        </button>
        <button
          className="btn grey"
          value={7}
          onClick={handleNumberClick}
        >
          7
        </button>
        <button
          className="btn grey"
          value={8}
          onClick={handleNumberClick}
        >
          8
        </button>
        <button
          className="btn grey"
          value={9}
          onClick={handleNumberClick}
        >
          9
        </button>
        <button
          className="btn grey"
          onClick={handleOperatorClick}
          value="-"
        >
          -
        </button>
        <button
          className="btn grey"
          value={4}
          onClick={handleNumberClick}
        >
          4
        </button>
        <button
          className="btn grey"
          value={5}
          onClick={handleNumberClick}
        >
          5
        </button>
        <button
          className="btn grey"
          value={6}
          onClick={handleNumberClick}
        >
          6
        </button>
        <button
          className="btn grey"
          onClick={handleOperatorClick}
          value="+"
        >
          +
        </button>
        <button
          className="btn grey"
          value={1}
          onClick={handleNumberClick}
        >
          1
        </button>
        <button
          className="btn grey"
          value={2}
          onClick={handleNumberClick}
        >
          2
        </button>
        <button
          className="btn grey"
          value={3}
          onClick={handleNumberClick}
        >
          3
        </button>
        <button className="btn orange equal" onClick={handleCalculate}>
          =
        </button>
        <StyledButton
          className="btn grey zero"
          value={0}
          onClick={handleNumberClick}
          isZero
        >
          0
        </StyledButton>
        <button
          className="btn grey"
          value="."
          onClick={handleNumberClick}
        >
          .
        </button>
      </section>
    </>
  )
}

export default App
