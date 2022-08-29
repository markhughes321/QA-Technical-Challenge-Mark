/// <reference types="cypress" />

describe('Successful Login', () => {
  it('Navigates to the Conduit Homepage', () => {
    cy.visit('/')
  })

  it('Clicks the "Sign In" menu item', () => {
    cy.contains('Sign in').click()
  })

  it('Asserts the header and sub-header is visible', () => {
    cy.contains('Sign In')
    cy.contains('Need an account?')
  })

  it('Enters the users credientials', () => {
    const email = 'HeniQA@gmail.com'
    const password = 'HeniQA321@'
    cy.get('[placeholder=Email]').type(email)
    cy.get('[placeholder=Password]').type(password)
  })

  it('Logs the user in', () => {
    cy.get('.btn').contains('Sign in').click()
  })

  it('Redirects the user to "Your Feed" page', () => {
    cy.get('a.nav-link.active').should('have.text', 'Your Feed')
  })

  it('Logout', () => {
    cy.logOut()
  })
  
})