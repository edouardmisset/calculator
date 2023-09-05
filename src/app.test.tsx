import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import '@testing-library/jest-dom'
import App from './app'

describe('App', () => {
  it('Loads and displays the calculator', () => {
    // ARRANGE
    render(<App />)

    // ACT

    // ASSERT
    expect(screen.getByTestId('calculator')).toMatchSnapshot()
  })
})
