// app.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("Check app title", () => {
    it("should render a title", () => {
        cy.visit("http://localhost:3000")
        cy.contains("Nathan's Amazing Web Store")
    })
})