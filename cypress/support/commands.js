/**
 * Custom Commands do Cypress
 *
 * Use custom commands somente quando houver necessidade real de reutilização.
 * Prefer Page Objects para manter os testes limpos e legíveis.
 */

/**
 * Command: login
 * Realiza login na aplicação
 *
 * @param {string} username - Usuário para login
 * @param {string} password - Senha para login
 *
 * Exemplo:
 * cy.login('usuario', 'senha');
 */
Cypress.Commands.add("login", (username, password) => {
  cy.get('[data-testid="input-usuario"]').clear().type(username);
  cy.get('[data-testid="input-senha"]').clear().type(password);
  cy.get('[data-testid="btn-entrar"]').click();
  cy.url().should("include", "/home");
});

Cypress.Commands.add("loginComPerfil", (perfil) => {
  const usuarios = Cypress.env("usuarios");
  const usuario = usuarios?.[perfil];

  if (!usuario?.email || !usuario?.senha) {
    throw new Error(
      `Credenciais do perfil "${perfil}" não configuradas em cypress.env.json`,
    );
  }

  cy.get('[name="email"]').clear().type(usuario.email);
  cy.get('[name="senha"]').clear().type(usuario.senha);
});

/**
 * Command: logout
 * Realiza logout da aplicação
 *
 * Exemplo:
 * cy.logout();
 */
Cypress.Commands.add("logout", () => {
  cy.get('[data-testid="btn-logout"]').click();
  cy.url().should("include", "/login");
});

/**
 * Command: waitForElement
 * Aguarda um elemento estar visível
 *
 * @param {string} selector - Seletor do elemento
 * @param {number} timeout - Timeout em ms (padrão: 5000)
 *
 * Exemplo:
 * cy.waitForElement('[data-testid="elemento"]');
 */
Cypress.Commands.add("waitForElement", (selector, timeout = 5000) => {
  cy.get(selector, { timeout }).should("be.visible");
});

/**
 * Command: hasText
 * Valida se um elemento contém o texto esperado
 *
 * @param {string} selector - Seletor do elemento
 * @param {string} text - Texto esperado
 *
 * Exemplo:
 * cy.get('[data-testid="msg"]').hasText('Bem-vindo');
 */
Cypress.Commands.add("hasText", { prevSubject: true }, (subject, text) => {
  cy.wrap(subject).should("contain", text);
  return subject;
});

// Overrides de comandos existentes (usar com cuidado!)
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
//   const newUrl = url.startsWith('http') ? url : Cypress.config().baseUrl + url;
//   return originalFn(newUrl, options);
// });
