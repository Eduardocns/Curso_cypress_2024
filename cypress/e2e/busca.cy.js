describe('Buscas',() =>{

   
    before(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })


    beforeEach(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    it('Busca', () =>{
       cy.get('#buttonList').click()
       cy.get('#lista li')
        .find('span')
        .should('contain', 'Item 1')
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

})