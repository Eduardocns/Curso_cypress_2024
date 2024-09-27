describe('Cypress basics', ()=> {
    it('Should visit a page and assert title', ()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

      //  const title = cy.title()
       // console.log(title)

       cy.title().should('be.equal', 'Campo de Treinamento' )
       cy.title().should('contain', 'Campo' )

       //outra forma legilibilidade
       cy.title()
       .should('be.equal', 'Campo de Treinamento' )
       .and('contain', 'Campo')


    })
    it.only('Should find and interact with an element', ()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })  
})