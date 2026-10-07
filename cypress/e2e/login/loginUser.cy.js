describe("Home e Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("deve validar a pagina login user", () => {
    cy.get(".bg-blue-600 > span", { timeout: 10000 })
      .should("be.visible")
      .and("contain.text", "Entrar")
      .click();
    cy.get(".mb-5 > .flex").should("be.visible");
    cy.contains("SISC Saúde").should("be.visible");
    cy.contains("Área do Paciente").should("be.visible");
    cy.contains("Acesse seu histórico médico e informações de saúde").should(
      "be.visible",
    );
    cy.contains("Email").should("be.visible");
    cy.get('[name="email"]').should("be.visible");
    cy.contains("Senha").should("be.visible");
    cy.get('[name="senha"]').should("be.visible");
    cy.contains("Esqueci minha senha").should("be.visible");
    cy.contains("Entrar").should("be.visible");
    cy.contains("ou").should("be.visible");
    cy.contains("Não tem uma conta?").should("be.visible");
    cy.contains("Cadastre-se aqui").should("be.visible");
    cy.screenshot("loginUser01");
    cy.contains("← Voltar ao início").should("be.visible").click();
    cy.contains("Plataforma Pública de Saúde", { timeout: 10000 }).should(
      "be.visible",
    );

    cy.get(".bg-green-600")
      .should("be.visible")
      .and("contain.text", "Cadastre-se");
    cy.get(".relative > .rounded-full").should("be.visible");
    cy.screenshot("loginUser01-1");
  });

  it("deve validar login sem preencher os campos email e senha", () => {
    cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
    cy.get(".bg-blue-600 > span", { timeout: 10000 })
      .should("be.visible")
      .and("contain.text", "Entrar")
      .click();
    cy.get(".mb-5 > .flex").should("be.visible");
    cy.contains("SISC Saúde").should("be.visible");
    cy.contains("Área do Paciente").should("be.visible");
    cy.contains("Acesse seu histórico médico e informações de saúde").should(
      "be.visible",
    );
    cy.contains("Email").should("be.visible");
    cy.contains("Senha").should("be.visible");
    cy.contains("Entrar", { timeout: 1000 }).should("be.visible").click();
    cy.contains("Senha é obrigatória").should("be.visible");
    cy.contains("Email é obrigatório").should("be.visible");
    cy.screenshot("loginUser02");
  });

  it("deve validar login com os campos email ou senha invalido", () => {
    cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
    cy.get(".bg-blue-600 > span", { timeout: 10000 })
      .should("be.visible")
      .and("contain.text", "Entrar")
      .click();
    cy.get(".mb-5 > .flex").should("be.visible");
    cy.contains("SISC Saúde").should("be.visible");
    cy.contains("Área do Paciente").should("be.visible");
    cy.contains("Acesse seu histórico médico e informações de saúde").should(
      "be.visible",
    );
    cy.contains("Email").should("be.visible");
    cy.get('[name="email"]').should("be.visible");
    cy.contains("Senha").should("be.visible");
    cy.get('[name="senha"]').should("be.visible");
    cy.loginComPerfil("loginInvalido");
    cy.contains("Entrar", { timeout: 1000 }).should("be.visible").click();
    cy.contains("Email ou senha inválidos", { timeout: 15000 }).should(
      "be.visible",
    );
    cy.screenshot("loginUser03");
  });

  it("deve validar login valido", () => {
    cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
    cy.get(".bg-blue-600 > span", { timeout: 10000 })
      .should("be.visible")
      .and("contain.text", "Entrar")
      .click();
    cy.get(".mb-5 > .flex").should("be.visible");
    cy.contains("SISC Saúde").should("be.visible");
    cy.contains("Área do Paciente").should("be.visible");
    cy.contains("Acesse seu histórico médico e informações de saúde").should(
      "be.visible",
    );
    cy.contains("Email").should("be.visible");
    cy.get('[name="email"]').should("be.visible");
    cy.contains("Senha").should("be.visible");
    cy.get('[name="senha"]').should("be.visible");
    cy.loginComPerfil("user");
    cy.contains("Entrar", { timeout: 1000 }).should("be.visible").click();
    cy.contains("Portal do Paciente", { timeout: 15000 }).should("be.visible");
    cy.contains("Campanhas Ativas", { timeout: 1000 }).should("be.visible");
    cy.screenshot("loginUser04");
  });
});
