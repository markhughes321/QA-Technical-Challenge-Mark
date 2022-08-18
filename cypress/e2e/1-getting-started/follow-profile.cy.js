/// <reference types="cypress" />

describe('Follow Profile', () => {
  beforeEach(() => {
    cy.logIn()
  })

  it('Navigates to the "Global Feed" page', () => {
    cy.visit('/')
    cy.get('[class*="active"]').contains('Global Feed').click()
  })

  it('Clicks on the profiles username', () => {
    cy.contains('Gerome').click()
  })

  it('Clicks the "Follow" button', () => {
    cy.get('.btn').contains('Follow').click()
  })

  it('Asserts new articles are visible on the "Your Feed" page', () => {
    cy.visit('/')
    cy.get('[class*="active"]').contains('Your Feed').click()
    cy.contains('Gerome')
  })

  it('Unfollows the profile', () => {
    cy.contains('Gerome').click()
    cy.get('.btn').contains('Unfollow').click()
  })

  it('Asserts articles are not visible on the "Your Feed" page', () => {
    cy.visit('https://react-redux.realworld.io')
    cy.get('[class*="active"]').contains('Your Feed').click()
    cy.contains('Gerome').should('not.exist');
  })

  it('Logout', () => {
    cy.logOut()
  })
})