describe('Work with combo',() =>{

   
    before(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })


    beforeEach(() =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    it('Combo', () =>{
        cy.reload()
        cy.get('[data-test="dataEscolaridade"]')
        .select('2o grau completo')
        .should('have.value', '2graucomp') 
    })
    it.only('Combo mutiplo', ()=>{
       cy.get('[data-testid="dataEsportes"]')
       .select(['natacao','Corrida','nada'])
    })
})