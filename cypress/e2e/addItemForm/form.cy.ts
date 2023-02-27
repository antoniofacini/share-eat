describe('Add Item Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/1/adicionar-item')
  })

  it('should success', () => {
    cy.get('input[data-test-id="name"]').type('Hamburguer')
    cy.get('input[data-test-id="price"]').type('20')
    cy.get('input[data-test-id="description"]').type('Pão, alface, carne, queijo, ovo')

    cy.contains('Salvar').click()
  })

  it('should show error', () => {
    cy.get('input[data-test-id="name"]').type('Hamburguer')
    cy.get('input[data-test-id="description"]').type('Pão, alface, carne, queijo, ovo')

    cy.contains('Salvar').click()

    cy.contains('*Campo Obrigatório')
  })
})
