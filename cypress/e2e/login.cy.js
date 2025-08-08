describe('login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000')
  })
  
  it('login com dados validos deve permitir o acesso', () => {
    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.contains('button','Entrar').click()
    cy.contains('h4','Realizar Transferência').should('be.visible')
  })

  it('login com dados invalidos não deve permitir o acesso', () => {
    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button','Entrar').click()
    
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})