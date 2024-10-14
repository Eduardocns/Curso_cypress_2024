describe('Work with radio buttons',() =>{

   
    before(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })


    beforeEach(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    it('RaioButton', () =>{
        cy.reload()
        cy.get('#formSexoFem')
        .click()
        .should('be.checked')

        cy.get('#formSexoMasc')
        .should('not.be.checked')

        cy.get("[name='formSexo']").should('have.length', 2)
       
    })

})