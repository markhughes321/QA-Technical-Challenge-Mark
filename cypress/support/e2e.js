require('./commands')

Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: 'https://conduit.productionready.io/api/users/login',
    body: {
      user: {
        email: 'TesterMark@gmail.com',
        password: 'TesterMark321@'
      }
    }
  })
  .then((resp) => {
    window.localStorage.setItem('jwt', resp.body.user.token)
  })
})