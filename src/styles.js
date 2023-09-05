import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  ${({
  $isZero,
  $isEqual,
  $isTopRow,
  $position
}) => css`
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
    background-color: ${$isEqual ? 'var(--main-color)' : $isTopRow ? 'var(--black)' : 'var(--grey)'};
    &:hover {
      border-color: var(--main-color);
    }
    &:focus,
    :focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    ${$isZero
    ? css`
          border-end-start-radius: var(--border-radius);
        `
    : ''}

    ${$isEqual
    ? css`
          border-end-end-radius: var(--border-radius);
          background-color: var(--main-color);
        `
    : ''}

    grid-area: ${$position};
`}
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
    'seven eight nine add'
    'four five six subtract'
    'one two three equal'
    'zero zero dot equal';
  max-width: 500px;
  border-radius: var(--border-radius);
  box-shadow: 3px 3px 5px 0px var(--dark-grey);
  background-color: var(--dark);
`
