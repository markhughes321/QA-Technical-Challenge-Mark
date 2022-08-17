/// <reference types="cypress" />

describe('Sign Up', () => {

  it('Navigates to Conduit Homepage', () => {
    cy.visit('https://react-redux.realworld.io')
  })

  it('Clicks the Sign Up menu-item', () => {
    cy.contains('Sign up').click()
  })

  it('Enters users credientials', () => {
    const username = 'mark321@'
    const email = 'mark321@gmail.com'
    const password = 'mark321@'
    cy.get('[placeholder=Username]').type(username)
    cy.get('[placeholder=Email]').type(email)
    cy.get('[placeholder=Password]').type(password)
  })

  it('Signs the new user in', () => {
    cy.get('.btn').contains('Sign in').click()
  })
  
})