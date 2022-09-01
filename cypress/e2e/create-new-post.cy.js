/// <reference types="cypress" />

const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()

describe('Create a New Post', () => {
  beforeEach(() => {
    cy.logIn()
  })

  it('Navigates to the New Post page', () => {
    cy.visit('/')
    cy.contains('New Post').click()
  })

  it('Enters article info', () => {
    cy.get('[placeholder="Article Title"]').type(`articleTitle${id}`)
    cy.get('[placeholder*="this article about?"]').type(`articleSubtitle${id}`)
    cy.get('[placeholder*="Write your article"]').type(`articleDescription${id}`)
    cy.get('[placeholder="Enter tags"]').type(`articleTag${id}`)  
  })

  it('Clicks "Publish Article"', () => {
    cy.get('.btn').contains('Publish Article').click()
  })

  it('Navigates to the "Global Feed" page', () => {
    cy.visit('https://react-redux.realworld.io')
    cy.get('[class*="active"]').contains('Global Feed').click()
  })

  it('Asserts Article Title, Subtitle and Tag is visible', () => {
    cy.contains(`articleTitle${id}`)
    cy.contains(`articleSubtitle${id}`)
    cy.contains(`articleTag${id}`)
  })

  it('Opens the article for more information', () => {
    cy.contains(`articleTitle${id}`).click()
  })

  it('Asserts Article Description is visible', () => {
    cy.contains(`articleDescription${id}`)
  })

  it('Deletes the article', () => {
    cy.contains("Delete Article").click()
  })

  it('Asserts the article has been deleted', () => {
    cy.visit('https://react-redux.realworld.io')
    cy.get('[class*="active"]').contains('Global Feed').click()
    cy.contains(`articleTitle${id}`).should('not.exist');
  })

  it('Logout', () => {
    cy.logOut()
  })

})
