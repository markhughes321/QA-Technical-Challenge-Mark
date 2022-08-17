/// <reference types="cypress" />
const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const articleTitle = `articleTitle${id}`
const articleSubtitle = `articleSubtitle${id}`
const articleDescription = `articleDescription${id}`
const articleTag = `articleTag${id}`

describe('New Post', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Navigates to the Conduit Homepage', () => {
    cy.visit('https://react-redux.realworld.io')
  })

  it('Clicks the "New Post" menu item', () => {
    cy.contains('New Post').click()
  })

  it('Enters article information', () => {
    cy.get('[placeholder="Article Title"]').type(articleTitle)
    cy.get('[placeholder*="this article about?"]').type(articleSubtitle)
    cy.get('[placeholder*="Write your article"]').type(articleDescription)
    cy.get('[placeholder="Enter tags"]').type(articleTag)  
  })

  it('Publishes new article', () => {
    cy.get('.btn').contains('Publish Article').click()
  })

  it('Navigates to the Global Feed page', () => {
    cy.visit('https://react-redux.realworld.io')
    cy.get('[class*="active"]').contains('Global Feed').click()
  })

  it('Asserts Article Title is present', () => {
    cy.contains(articleTitle)
  })

  it('Asserts Article Subtitle is present', () => {
    cy.contains(articleSubtitle)
  })

  it('Asserts Article Tag is present', () => {
    cy.contains(articleTag)
  })

  it('Clicks into the article for more information', () => {
    cy.contains(articleTitle).click()
  })

  it('Asserts Article Description is present', () => {
    cy.contains(articleDescription)
  })
})
