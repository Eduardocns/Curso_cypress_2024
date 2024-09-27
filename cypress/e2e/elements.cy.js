const { should } = require("chai")

describe('Work with basic elements',() =>{

   /*
    before(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
*/
    beforeEach(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    it.only('Text', ()=> {
    cy.reload()
    cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...')
    })

    //LINKS
    it('Links', ()=>{
        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('TextFields', () =>{
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')

        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value','textarea')

            cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
                .type('???')

                cy.get('[data-cy="dataSobrenome"]')
                .type('Teste12345{backspace}{backspace}')
                .should('have.value', 'Teste123')
    })
})