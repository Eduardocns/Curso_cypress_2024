describe('Work with radio buttons',() =>{

   
    before(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })


    beforeEach(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    it('RaioButton', () =>{
        cy.reload()
        cy.get('#formComidaPizza')
        .click()
        .should('be.checked')
       
        cy.get('[name=formComidaFavorita]')
        .click({multiple:true})

        cy.get('#formComidaPizza')
        .should('not.be.checked')

        cy.get('#formComidaVegetariana').should('be.checked')
    })

})