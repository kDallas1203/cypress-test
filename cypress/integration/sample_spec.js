describe("Log in test", function () {
    before(function () {
        cy.visitSite()
    });

    it("Should calculate the degree ", function () {
        cy.get('#t1')
            .type("5")
            .should("have.value", "5");
        cy.get("#t2")
            .type("5")
            .should("have.value", "5");

        cy.get("[value='Вычислить'")
            .click();

        cy.get('#t3')
            .should('contain', '3125')
    });

    it("Should return an error in input validation", function () {
        cy.get('#t1')
            .clear()
            .type("error")
            .should("have.value", "error");
        cy.get("#t2")
            .clear()
            .type("5")
            .should("have.value", "5");

        cy.get("[value='Вычислить'")
            .click();

        cy.get('#t3')
            .should("contain", "Ошибка ввода чисел!")
    });

    describe('should go to another calculator', function () {
        it('should visit calcs list', function () {
            cy.get('.post')
                .click();

            cy.url().should('equal', "https://umath.ru/calc/")
        });

        it('should go to another calc', function () {
            cy.get('.example > a').eq(1).click()
        })
    })
});