describe('transferencias', () => {
    beforeEach(() => {
         cy.visit('/')
        cy.fixture('credenciais').then((credenciais) => {
            cy.get('#username').click().type(credenciais.valida.usuario)
            cy.get('#senha').click().type(credenciais.valida.senha)
        })
        cy.contains('button','Entrar').click()
    })

    it('deve realizar uma transferencia quando os dados forem validos', () => {
        cy.get('label[for="conta-origem"]').parent().as('campoContaOrigem')
        cy.get('@campoContaOrigem').click()
        cy.get('@campoContaOrigem').contains('João da Silva').click()

        cy.get('label[for="conta-destino"]').parent().as('campoContaDestino')
        cy.get('@campoContaDestino').click()
        cy.get('@campoContaDestino').contains('Maria Oliveira').click()
   
        cy.get('#valor').click().type('500')
        cy.contains('button', 'Transferir').click()

        cy.get('.toast').should('have.text', 'Transferência realizada!')

    })
})