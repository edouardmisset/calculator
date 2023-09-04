import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  ${({
  isZero,
  isOne,
  isTwo,
  isThree,
  isFour,
  isFive,
  isSix,
  isSeven,
  isEight,
  isNine,
  isEqual,
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
    background-color: ${isEqual ? 'var(--main-color)' : 'var(--grey)'};
    &:hover {
      border-color: var(--main-color);
    }
    &:focus,
    :focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    grid-area: ${isZero
    ? 'zero'
    : isOne
      ? 'one'
      : isTwo
        ? 'two'
        : isThree
          ? 'three'
          : isFour
            ? 'four'
            : isFive
              ? 'five'
              : isSix
                ? 'six'
                : isSeven
                  ? 'seven'
                  : isEight
                    ? 'eight'
                    : isNine
                      ? 'nine'
                      : isEqual
                        ? 'equal'
                        : ''};
  `}
`
// export const StyledButton = styled.button`

// `
// export const StyledButton = styled.button`

// `
