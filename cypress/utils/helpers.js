/**
 * Utilitários gerais para testes
 */

export function gerarUsuario(prefix = "usuario teste") {
  const random = Math.floor(Math.random() * 10000);
  return `${prefix}.${random}`;
}

export function gerarEmail(prefix = "usuarioteste") {
  return `${gerarUsuario(prefix)}@example.com`;
}

export function gerarSenha() {
  return `Senha@${Math.floor(Math.random() * 100000)}`;
}

export function calcularDigito(valor, pesoInicial) {
  const soma = valor
    .split("")
    .reduce(
      (total, digito, indice) =>
        total + Number(digito) * (pesoInicial - indice),
      0,
    );
  const resto = soma % 11;
  return resto < 2 ? 0 : 11 - resto;
}

export function gerarCPF() {
  const base = String(Math.floor(Math.random() * 1e9)).padStart(9, "0");
  const primeiroDigito = calcularDigito(base, 10);
  const segundoDigito = calcularDigito(`${base}${primeiroDigito}`, 11);
  return `${base.slice(0, 3)}.${base.slice(3, 6)}.${base.slice(6)}-${primeiroDigito}${segundoDigito}`;
}

export function gerarCNS() {
  let base;
  let digito;
  do {
    base = `1${String(Math.floor(Math.random() * 1e13)).padStart(13, "0")}`;
    const soma = base
      .split("")
      .reduce(
        (total, valor, indice) => total + Number(valor) * (15 - indice),
        0,
      );
    digito = (11 - (soma % 11)) % 11;
  } while (digito === 10);
  return `${base}${digito}`;
}

/**
 * Geradores de dados de teste
 */
export const dataGenerator = {
  gerarUsuario,
  gerarEmail,
  gerarSenha,
  gerarCPF,
  gerarCNS,
  calcularDigito,
};

/**
 * Utilitários de data e hora
 */
export const dateUtils = {
  /**
   * Retorna a data de hoje em formato DD/MM/YYYY
   *
   * @returns {string} Data formatada
   */
  obterDataHoje() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, "0");
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const ano = hoje.getFullYear();
    return `${dia}/${mes}/${ano}`;
  },

  /**
   * Retorna a data de amanhã em formato DD/MM/YYYY
   *
   * @returns {string} Data formatada
   */
  obterDataAmanha() {
    const amanha = new Date();
    amanha.setDate(amanha.getDate() + 1);
    const dia = String(amanha.getDate()).padStart(2, "0");
    const mes = String(amanha.getMonth() + 1).padStart(2, "0");
    const ano = amanha.getFullYear();
    return `${dia}/${mes}/${ano}`;
  },

  /**
   * Retorna a hora atual em formato HH:MM
   *
   * @returns {string} Hora formatada
   */
  obterHoraAtual() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");
    return `${horas}:${minutos}`;
  },
};

/**
 * Helpers gerais
 */
export const helpers = {
  /**
   * Aguarda um tempo específico (use com moderação!)
   * Prefira usar cy.get() com timeout ou cy.waitForElement()
   *
   * @param {number} ms - Tempo em milissegundos
   */
  esperar(ms) {
    cy.wait(ms);
  },

  /**
   * Log de informação para debug
   *
   * @param {string} mensagem - Mensagem a registrar
   */
  log(mensagem) {
    cy.log(`📝 ${mensagem}`);
  },

  /**
   * Log de sucesso
   *
   * @param {string} mensagem - Mensagem a registrar
   */
  logSucesso(mensagem) {
    cy.log(`✅ ${mensagem}`);
  },

  /**
   * Log de erro
   *
   * @param {string} mensagem - Mensagem a registrar
   */
  logErro(mensagem) {
    cy.log(`❌ ${mensagem}`);
  },

  /**
   * Log de aviso
   *
   * @param {string} mensagem - Mensagem a registrar
   */
  logAviso(mensagem) {
    cy.log(`⚠️ ${mensagem}`);
  },

  /**
   * Tira uma screenshot com nome personalizado
   *
   * @param {string} nome - Nome do arquivo
   */
  screenshot(nome) {
    cy.screenshot(`${nome}-${new Date().getTime()}`);
  },
};
