describe('login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000')
  })
  
  it('login com dados validos deve permitir o acesso', () => {

    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button','Entrar').click()
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('login com dados invalidos não deve permitir o acesso', () => {
  
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('111111')
    cy.contains('button','Entrar').click()
    
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})