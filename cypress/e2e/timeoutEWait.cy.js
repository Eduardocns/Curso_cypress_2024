describe('timeoutEWait',() =>{

   
    before(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })


    beforeEach(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    it('timeout ', () => {
       // cy.get('#buttonDelay').click()
      //  cy.get('#novoCampo', {timeout: 1000}).should('exist')

      /*
      cy.get('#buttonListDOM').click()
      cy.wait(5000) //Não usar na aplicação real
      cy.get('#lista li span')
      .should('contain', 'Item 2')
      */

    cy.get('#buttonListDOM').click()
    cy.get('#lista li span')
        .should('have.length', 1)
    cy.get('#lista li span')
        .should('have.length', 2)
    })
      
        
}) 
   

