// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
    it('Visits the app root url', () => {
        cy.visit('/')
            .getByTestId("displayDropdown").should('be.visible').click()
            .getByTestId("titleOpenedDropdown").should("be.visible");
    });
});
