// @ts-nocheck
describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/test/reset')
    // create here a user to backend
    cy.createUser('valerie', 'yunx2', 'password')
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    // ...
    cy.contains('username')
    cy.contains('password')
    cy.get('.login-button').contains('login')
  })

  describe('Login',function() {
    it('succeeds with correct credentials', function() {
      // ...
      cy.get('#username').type('yunx2')
      cy.get('#password').type('password')
      cy.get('.login-button').click()

      cy.get('#content').contains('valerie logged in')
    })

    it('fails with wrong credentials', function() {
      // ...
      cy.get('#username').type('yunx2')
      cy.get('#password').type('notpassword')
      cy.get('.login-button').click()

      cy.get('.error').contains('wrong credentials')
    })
  })

  describe('When logged in', function() {
    beforeEach(function() {
      // log in user here
      cy.get('#username').type('yunx2')
      cy.get('#password').type('password')
      cy.get('.login-button').click()
    })

    it('A blog can be created', function() {
      // ...
      cy.get('.buttonLabel').contains('add blog').click()

      cy.get('#title').type('my fav blog')
      cy.get('#author').type('fav author')
      cy.get('#url').type('www.bestblog.com')
      cy.get('button').contains('add this blog').click()

      cy.get('.error').contains('added my fav blog to favorites')
    })
  })
})