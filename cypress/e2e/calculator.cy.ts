/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Calculator', () => {
  it('works!', () => {
    cy.visit('http://localhost:5173/calculator/')
    const button1 = cy.contains('1')
    const buttonPlus = cy.get('button[value="+"]')
    const buttonEqual = cy.contains('=')
    button1.click()
    cy.get('input[readonly]').should('contain.value', '1')
    buttonPlus.click()
    button1.click()
    buttonEqual.click()
    cy.get('input[readonly]').should('contain.value', '2')
  })
})
