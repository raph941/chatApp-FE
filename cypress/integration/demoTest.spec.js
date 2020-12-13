const { get } = require("js-cookie")

/// <reference types="cypress" />

describe('My First cypress test', () => {
    beforeEach(() => {
        cy.clearLocalStorage()
        cy.visit('/')
    })
    
    it('Login test', ()=> {
        cy.contains('CLICK HERE').click()
        cy.get('[name=username]').type('johndoe')
        cy.get('[name=password').type('nigerians')
        cy.get('[type=submit]').click()
    })

    it('Signup Test', ()=> {
        cy.contains('CLICK HERE').click()
        cy.contains('Signup').click()
        cy.get('[name=fullname]').type('Cypress User')
        cy.get('[name=username]').type('cypressUser')
        cy.get('[name=password1]').type('nigerians')
        cy.get('[name=password2]').type('nigerians')

    })
})

