require('./commands')

Cypress.Commands.add('logIn', () => {
  cy.request({
    method: 'POST',
    url: 'https://conduit.productionready.io/api/users/login',
    body: {
      user: {
        email: 'HeniQA@gmail.com',
        password: 'HeniQA321@'
      }
    }
  })
  .then((resp) => {
    window.localStorage.setItem('jwt', resp.body.user.token)
  })
})

Cypress.Commands.add('logOut', () => {
  cy.contains('Settings').click()
  cy.contains('logout').click()
  cy.contains('Sign in')
})