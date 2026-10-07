/**
 * LoginPage - Page Object Model
 *
 * Encapsula todos os elementos e ações relacionados à página de login
 * Mantém os testes limpos e focados no comportamento
 */

class LoginPage {
  /**
   * Elementos da página
   */
  get emailInput() {
    return cy.get('[name="email"]');
  }

  get senhaInput() {
    return cy.get('[name="senha"]');
  }

  get btnEntrar() {
    return cy.get(".mt-2");
  }

  get forgotPasswordLink() {
    return cy.get(".text-right > .text-xs");
  }

  get msgErro() {
    return cy.get('[data-testid="msg-erro"]');
  }

  get lblUsuarioObrigatorio() {
    return cy.get('[data-testid="erro-usuario"]');
  }

  get lblSenhaObrigatoria() {
    return cy.get('[data-testid="erro-senha"]');
  }

  /**
   * Ações da página
   */

  /**
   * Acessa a página de login
   *
   * @param {string} url - URL da página (opcional)
   */
  acessarPagina(url = "/") {
    cy.visit(url);

    cy.location("pathname").then((pathname) => {
      if (pathname !== "/login" && pathname !== "/") {
        cy.visit("/");
      }
    });

    cy.get("body").then(($body) => {
      const loginButton = $body.find(
        'a[href*="login"], button:contains("Login"), button:contains("Entrar"), [data-testid*="login"], [aria-label*="login"]',
      );

      if (loginButton.length > 0) {
        cy.wrap(loginButton.first()).click();
      }
    });

    this.validarPaginaCarregada();
  }

  /**
   * Preenche o campo de email
   *
   * @param {string} email - Email a ser digitado
   */
  preencherEmail(email) {
    this.emailInput.clear().type(email);
  }

  /**
   * Preenche o campo de senha
   *
   * @param {string} senha - Senha a ser digitada
   */
  preencherSenha(senha) {
    this.senhaInput.clear().type(senha);
  }

  /**
   * Clica no botão Entrar
   */
  clicarEntrar() {
    this.btnEntrar.click();
  }

  /**
   * Realiza login com os dados fornecidos
   *
   * @param {string} usuario - Usuário
   * @param {string} senha - Senha
   */
  realizarLogin(email, senha) {
    this.preencherEmail(email);
    this.preencherSenha(senha);
    this.clicarEntrar();
  }

  /**
   * Limpa os campos do formulário
   */
  limparFormulario() {
    this.emailInput.clear();
    this.senhaInput.clear();
  }

  /**
   * Validações / Assertions
   */

  /**
   * Valida que a página de login foi carregada
   */
  validarPaginaCarregada() {
    cy.location("pathname").then((pathname) => {
      const isLoginPage = pathname.includes("/login") || pathname === "/";
      expect(isLoginPage).to.be.true;
    });

    cy.get("body").then(($body) => {
      const hasLoginInputs =
        $body.find(
          '[name="email"], [name="senha"], [data-testid="input-usuario"], [data-testid="input-email"], input[name*="usuario"], input[name*="user"], input[name*="login"]',
        ).length > 0;

      if (hasLoginInputs) {
        this.emailInput.should("be.visible");
        this.senhaInput.should("be.visible");
        this.btnEntrar.should("be.visible");
      }
    });
  }

  /**
   * Valida que o login foi realizado com sucesso
   */
  validarLoginRealizado() {
    cy.url().should("include", "/home");
    // Adicione mais validações conforme necessário
  }

  /**
   * Valida que uma mensagem de erro é exibida
   *
   * @param {string} mensagem - Mensagem esperada
   */
  validarMensagemErro(mensagem) {
    this.msgErro.should("be.visible");
    this.msgErro.should("contain", mensagem);
  }

  /**
   * Valida que o erro de campo obrigatório é exibido para usuário
   */
  validarErroUsuarioObrigatorio() {
    this.lblUsuarioObrigatorio.should("be.visible");
    this.lblUsuarioObrigatorio.should("contain", "Campo usuário é obrigatório");
  }

  validarTextoEsqueciMinhaSenha() {
    this.forgotPasswordLink.should("be.visible");
    this.forgotPasswordLink.should("have.text", "Esqueci minha senha");
  }

  /**
   * Valida que o erro de campo obrigatório é exibido para senha
   */
  validarErroSenhaObrigatoria() {
    this.lblSenhaObrigatoria.should("be.visible");
    this.lblSenhaObrigatoria.should("contain", "Campo senha é obrigatório");
  }

  /**
   * Valida que o usuário permanece na página de login
   */
  validarPermanenciaLoginPage() {
    cy.url().should("include", "/login");
  }
}

export default new LoginPage();
