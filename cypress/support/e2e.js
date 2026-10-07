// Importar comandos customizados
import "./commands";

// Configurações globais
Cypress.on("uncaught:exception", () => {
  // Retornar false para impedir que o Cypress falhe o teste
  // em caso de exceção não tratada
  // CUIDADO: Use isso com moderação, prefira sempre tratar exceções no código da aplicação
  return false;
});

// Hooks globais
beforeEach(() => {
  // Configurações antes de cada teste
  cy.clearCookies();
});

afterEach(() => {
  // Limpeza após cada teste
  // adicione aqui ações de limpeza necessárias
});
