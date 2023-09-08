import styled, { css } from 'styled-components'

interface ButtonProps {
  $isBottomLeft: boolean
  $isBottomRight: boolean
  $isEqual: boolean
  $isTopRow: boolean
  $position: string
}

export const StyledButton = styled.button<ButtonProps>`
  ${({ $isBottomLeft, $isEqual, $isTopRow, $position, $isBottomRight }) => {
    let bgColor = $isTopRow ? 'var(--black)' : 'var(--grey)'
    if ($isEqual) {
      bgColor = 'var(--main-color)'
    }

    return css`
      appearance: none;
      border: 1px solid transparent;
      border-radius: 0;
      color: var(--white);
      padding-inline: 0.5rem;
      padding-block: 1rem;
      font-size: 2em;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.3s;
      background-color: ${bgColor};
      &:hover {
        border-color: var(--main-color);
      }
      &:focus,
      :focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      ${$isBottomLeft
        ? css`
            border-end-start-radius: var(--border-radius);
          `
        : ''}
      ${$isBottomRight
        ? css`
            border-end-end-radius: var(--border-radius);
          `
        : ''}

    grid-area: ${$position};
    `
  }}
`

export const StyledScreen = styled.input`
  border: none;
  border-start-start-radius: var(--border-radius);
  border-start-end-radius: var(--border-radius);
  grid-area: screen;
  text-align: right;
  color: var(--black);
  font-size: 2rem;
  padding: 2rem;
  min-height: 4rem;
  font-family: monospace;
  background-color: var(--green);
`

export const StyledCalculator = styled.section`
  margin: auto;
  display: grid;
  grid-template-areas:
    'screen screen screen screen'
    'screen screen screen screen'
    'clear inverse divide multiply'
    'seven eight nine power'
    'four five six modulo'
    'one two three subtract'
    'zero dot equal add';
  max-width: 500px;
  border-radius: var(--border-radius);
  box-shadow: 3px 3px 5px 0px var(--dark-grey);
  background-color: var(--dark);
`
