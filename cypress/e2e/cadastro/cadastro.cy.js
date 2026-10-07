import {
  gerarUsuario,
  gerarCPF,
  gerarCNS,
  gerarEmail,
} from "../../utils/helpers";

let usuarioCadastrado = {
  cpf: null,
  cns: null,
  email: null,
};

describe("Cadastro", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("deve exibir os textos, seções e campos do cadastro", () => {
    cy.get(".bg-green-600", { timeout: 1000 }).click();
    cy.get(".bg-gradient-to-r")
      .should("be.visible")
      .and("contain.text", "SISC");
    cy.contains("Cadastro de Paciente").should("be.visible");
    cy.contains(
      "Crie sua conta e tenha acesso completo ao seu histórico de saúde",
    ).should("be.visible");
    cy.contains("Dados Pessoais").should("be.visible");
    cy.contains("Endereço").should("be.visible");
    cy.contains("Segurança").should("be.visible");
    cy.contains("Nome Completo").should("be.visible");
    cy.contains("CPF").should("be.visible");
    cy.contains("CNS").should("be.visible");
    cy.contains("Data de Nascimento").should("be.visible");
    cy.contains("Endereço Completo").should("be.visible");
    cy.contains("CEP").should("be.visible");
    cy.contains("Telefone").should("be.visible");
    cy.contains("Email").should("be.visible");
    cy.contains("Senha").should("be.visible");
    cy.contains("Confirmar Senha").should("be.visible");
    cy.screenshot("cadastro01");
    cy.contains("Criar Conta").should("be.visible");
    cy.contains("Já tem uma conta? Faça login aqui").should("be.visible");
    cy.contains("Voltar ao início").should("be.visible");
  });

  it("deve cadastrar um usuario valido", () => {
    usuarioCadastrado.cpf = gerarCPF();
    usuarioCadastrado.cns = gerarCNS();
    usuarioCadastrado.email = gerarEmail();

    cy.get(".bg-green-600", { timeout: 1000 }).click();
    cy.get('[name="nome"]').should("be.visible").type(gerarUsuario());
    cy.get('[name="cpf"]').should("be.visible").type(usuarioCadastrado.cpf);
    cy.get('[name="cns"]').should("be.visible").type(usuarioCadastrado.cns);
    cy.get('[name="nascimento"]').should("be.visible").type("1990-01-01");
    cy.get('[name="endereco"]').should("be.visible").type("Rua Exemplo, 123");
    cy.get('[name="cep"]').should("be.visible").type("12345-678");
    cy.get('[name="telefone"]').should("be.visible").type("(11) 91234-5678");
    cy.get('[name="email"]').should("be.visible").type(usuarioCadastrado.email);
    cy.get('[name="senha"]').should("be.visible").type("Senha@123");
    cy.get('[name="confirmarSenha"]').should("be.visible").type("Senha@123");
    // Logs para conferência
    cy.log(`CPF utilizado: ${usuarioCadastrado.cpf}`);
    cy.log(`CNS utilizado: ${usuarioCadastrado.cns}`);
    cy.log(`E-mail utilizado: ${usuarioCadastrado.email}`);
    cy.contains("Criar Conta").should("be.visible").click();
    cy.contains("Cadastro realizado com sucesso!", { timeout: 15000 }).should(
      "be.visible",
    );
    cy.screenshot("cadastro02");
    cy.contains("Portal do Paciente").should("be.visible");
    cy.get(".space-y-6 > .bg-gradient-to-br").should("be.visible");
    cy.screenshot("cadastro02.2");
  });

  it("deve validar cpf de usuario ja cadastrado", () => {
    cy.get(".bg-green-600", { timeout: 1000 }).click();
    cy.get('[name="nome"]').should("be.visible").type(gerarUsuario());
    cy.get('[name="cpf"]').should("be.visible").type(usuarioCadastrado.cpf);
    cy.get('[name="cns"]').should("be.visible").type(gerarCNS());
    cy.get('[name="nascimento"]').should("be.visible").type("1990-01-01");
    cy.get('[name="endereco"]').should("be.visible").type("Rua Exemplo, 123");
    cy.get('[name="cep"]').should("be.visible").type("12345-678");
    cy.get('[name="telefone"]').should("be.visible").type("(11) 91234-5678");
    cy.get('[name="email"]').should("be.visible").type(gerarEmail());
    cy.get('[name="senha"]').should("be.visible").type("Senha@123");
    cy.get('[name="confirmarSenha"]').should("be.visible").type("Senha@123");
    cy.contains("Criar Conta").should("be.visible").click();
    cy.contains("Este CPF já está cadastrado", { timeout: 1000 }).should(
      "be.visible",
    );
    cy.screenshot("cadastro06");
  });

  it("deve cadastrar um usuario sem informar nome", () => {
    cy.get(".bg-green-600", { timeout: 1000 }).click();
    cy.get('[name="cpf"]').should("be.visible").type(gerarCPF());
    cy.get('[name="cns"]').should("be.visible").type(gerarCNS());
    cy.get('[name="nascimento"]').should("be.visible").type("1990-01-01");
    cy.get('[name="endereco"]').should("be.visible").type("Rua Exemplo, 123");
    cy.get('[name="cep"]').should("be.visible").type("12345-678");
    cy.get('[name="telefone"]').should("be.visible").type("(11) 91234-5678");
    cy.get('[name="email"]').should("be.visible").type(gerarEmail());
    cy.get('[name="senha"]').should("be.visible").type("Senha@123");
    cy.get('[name="confirmarSenha"]').should("be.visible").type("Senha@123");
    cy.contains("Criar Conta").should("be.visible").click();
    cy.contains("Nome é obrigatório", { timeout: 1000 }).should("be.visible");
    cy.screenshot("cadastro03");
  });

  it("deve cadastrar um usuario sem informar nome e cpf", () => {
    cy.get(".bg-green-600", { timeout: 1000 }).click();
    cy.get('[name="cns"]').should("be.visible").type(gerarCNS());
    cy.get('[name="nascimento"]').should("be.visible").type("1990-01-01");
    cy.get('[name="endereco"]').should("be.visible").type("Rua Exemplo, 123");
    cy.get('[name="cep"]').should("be.visible").type("12345-678");
    cy.get('[name="telefone"]').should("be.visible").type("(11) 91234-5678");
    cy.get('[name="email"]').should("be.visible").type(gerarEmail());
    cy.get('[name="senha"]').should("be.visible").type("Senha@123");
    cy.get('[name="confirmarSenha"]').should("be.visible").type("Senha@123");
    cy.contains("Criar Conta").should("be.visible").click();
    cy.contains("Nome é obrigatório", { timeout: 1000 }).should("be.visible");
    cy.contains("CPF é obrigatório", { timeout: 1000 }).should("be.visible");
    cy.screenshot("cadastro04");
  });
  it("deve impedir cadastrar um usuario sem com cpf invalido", () => {
    cy.get(".bg-green-600", { timeout: 1000 }).click();
    cy.get('[name="nome"]').should("be.visible").type(gerarUsuario());
    cy.get('[name="cpf"]').should("be.visible").type("123.456.789-00");
    cy.get('[name="cns"]').should("be.visible").type(gerarCNS());
    cy.get('[name="nascimento"]').should("be.visible").type("1990-01-01");
    cy.get('[name="endereco"]').should("be.visible").type("Rua Exemplo, 123");
    cy.get('[name="cep"]').should("be.visible").type("12345-678");
    cy.get('[name="telefone"]').should("be.visible").type("(11) 91234-5678");
    cy.get('[name="email"]').should("be.visible").type(gerarEmail());
    cy.get('[name="senha"]').should("be.visible").type("Senha@123");
    cy.get('[name="confirmarSenha"]').should("be.visible").type("Senha@123");
    cy.contains("Criar Conta").should("be.visible").click();
    cy.contains("CPF inválido", { timeout: 1000 }).should("be.visible");
    cy.screenshot("cadastro05");
  });

  it("deve validar mensagem Este email já está cadastrado", () => {
    cy.get(".bg-green-600", { timeout: 1000 }).click();
    cy.get('[name="nome"]').should("be.visible").type(gerarUsuario());
    cy.get('[name="cpf"]').should("be.visible").type(gerarCPF());
    cy.get('[name="cns"]').should("be.visible").type(gerarCNS());
    cy.get('[name="nascimento"]').should("be.visible").type("1990-01-01");
    cy.get('[name="endereco"]').should("be.visible").type("Rua Exemplo, 123");
    cy.get('[name="cep"]').should("be.visible").type("12345-678");
    cy.get('[name="telefone"]').should("be.visible").type("(11) 91234-5678");
    cy.get('[name="email"]').should("be.visible").type(usuarioCadastrado.email);
    cy.get('[name="senha"]').should("be.visible").type("Senha@123");
    cy.get('[name="confirmarSenha"]').should("be.visible").type("Senha@123");
    cy.contains("Criar Conta").should("be.visible").click();
    cy.contains("Este email já está cadastrado", { timeout: 1000 }).should(
      "be.visible",
    );
    cy.screenshot("cadastro07");
  });

  it("deve validar campo endenreço nulo", () => {
    cy.get(".bg-green-600", { timeout: 1000 }).click();
    cy.get('[name="nome"]').should("be.visible").type(gerarUsuario());
    cy.get('[name="cpf"]').should("be.visible").type(gerarCPF());
    cy.get('[name="cns"]').should("be.visible").type(gerarCNS());
    cy.get('[name="nascimento"]').should("be.visible").type("1990-01-01");
    cy.get('[name="cep"]').should("be.visible").type("12345-678");
    cy.get('[name="telefone"]').should("be.visible").type("(11) 91234-5678");
    cy.get('[name="email"]').should("be.visible").type(gerarEmail());
    cy.get('[name="senha"]').should("be.visible").type("Senha@123");
    cy.get('[name="confirmarSenha"]').should("be.visible").type("Senha@123");
    cy.contains("Criar Conta").should("be.visible").click();
    cy.contains("Endereço é obrigatório", { timeout: 1000 }).should(
      "be.visible",
    );
    cy.screenshot("cadastro08");
  });

  it("deve validar campo CP nulo", () => {
    cy.get(".bg-green-600", { timeout: 1000 }).click();
    cy.get('[name="nome"]').should("be.visible").type(gerarUsuario());
    cy.get('[name="cpf"]').should("be.visible").type(gerarCPF());
    cy.get('[name="cns"]').should("be.visible").type(gerarCNS());
    cy.get('[name="nascimento"]').should("be.visible").type("1990-01-01");
    cy.get('[name="endereco"]').should("be.visible").type("Rua Exemplo, 123");
    cy.get('[name="telefone"]').should("be.visible").type("(11) 91234-5678");
    cy.get('[name="email"]').should("be.visible").type(gerarEmail());
    cy.get('[name="senha"]').should("be.visible").type("Senha@123");
    cy.get('[name="confirmarSenha"]').should("be.visible").type("Senha@123");
    cy.contains("Criar Conta").should("be.visible").click();
    cy.contains("CEP é obrigatório", { timeout: 1000 }).should("be.visible");
    cy.get(".grid > :nth-child(2) > .flex").should("be.visible");
    cy.screenshot("cadastro09");
  });

  it("deve validar span de email obrigatorio", () => {
    cy.get(".bg-green-600", { timeout: 1000 }).click();
    cy.get('[name="nome"]').should("be.visible").type(gerarUsuario());
    cy.get('[name="cpf"]').should("be.visible").type(gerarCPF());
    cy.get('[name="cns"]').should("be.visible").type(gerarCNS());
    cy.get('[name="nascimento"]').should("be.visible").type("1990-01-01");
    cy.get('[name="endereco"]').should("be.visible").type("Rua Exemplo, 123");
    cy.get('[name="cep"]').should("be.visible").type("12345-678");
    cy.get('[name="telefone"]').should("be.visible").type("(11) 91234-5678");
    cy.get('[name="senha"]').should("be.visible").type("Senha@123");
    cy.get('[name="confirmarSenha"]').should("be.visible").type("Senha@123");
    cy.contains("Criar Conta").should("be.visible").click();
    cy.get(".gap-1").and("be.visible");
    cy.contains("Email é obrigatório", { timeout: 1000 }).should("be.visible");
    cy.screenshot("cadastro10");
  });

  it("deve validar span cpf invalido", () => {
    cy.get(".bg-green-600", { timeout: 1000 }).click();
    cy.get('[name="nome"]').should("be.visible").type(gerarUsuario());
    cy.get('[name="cpf"]').should("be.visible").type("123.45");
    cy.get('[name="cns"]').should("be.visible").type(gerarCNS());
    cy.get('[name="nascimento"]').should("be.visible").type("1990-01-01");
    cy.get('[name="endereco"]').should("be.visible").type("Rua Exemplo, 123");
    cy.get('[name="cep"]').should("be.visible").type("12345-678");
    cy.get('[name="telefone"]').should("be.visible").type("(11) 91234-5678");
    cy.get('[name="email"]').should("be.visible").type(gerarEmail());
    cy.get('[name="senha"]').should("be.visible").type("Senha@123");
    cy.get('[name="confirmarSenha"]').should("be.visible").type("Senha@123");
    cy.contains("Criar Conta").should("be.visible").click();
    cy.get(".grid > :nth-child(2) > .flex", { timeout: 100 }).should(
      "be.visible",
    );
    cy.contains("CPF inválido", { timeout: 1000 }).should("be.visible");
    cy.screenshot("cadastro11");
  });

  it("deve validar span campo cns nulo", () => {
    cy.get(".bg-green-600", { timeout: 1000 }).click();
    cy.get('[name="nome"]').should("be.visible").type(gerarUsuario());
    cy.get('[name="cpf"]').should("be.visible").type(gerarCPF());
    //cy.get('[name="cns"]').should("be.visible").type(gerarCNS());
    cy.get('[name="nascimento"]').should("be.visible").type("1990-01-01");
    cy.get('[name="endereco"]').should("be.visible").type("Rua Exemplo, 123");
    cy.get('[name="cep"]').should("be.visible").type("12345-678");
    cy.get('[name="telefone"]').should("be.visible").type("(11) 91234-5678");
    cy.get('[name="email"]').should("be.visible").type(gerarEmail());
    cy.get('[name="senha"]').should("be.visible").type("Senha@123");
    cy.get('[name="confirmarSenha"]').should("be.visible").type("Senha@123");
    cy.contains("Criar Conta").should("be.visible").click();
    cy.get(".grid > :nth-child(3) > .flex", { timeout: 100 }).should(
      "be.visible",
    );
    cy.contains("CNS é obrigatório", { timeout: 1000 }).should("be.visible");
    cy.screenshot("cadastro12");
  });

  it("deve validar span campo cns para 15 digitos", () => {
    cy.get(".bg-green-600", { timeout: 1000 }).click();
    cy.get('[name="nome"]').should("be.visible").type(gerarUsuario());
    cy.get('[name="cpf"]').should("be.visible").type(gerarCPF());
    cy.get('[name="cns"]').should("be.visible").type("78965412");
    cy.get('[name="nascimento"]').should("be.visible").type("1990-01-01");
    cy.get('[name="endereco"]').should("be.visible").type("Rua Exemplo, 123");
    cy.get('[name="cep"]').should("be.visible").type("12345-678");
    cy.get('[name="telefone"]').should("be.visible").type("(11) 91234-5678");
    cy.get('[name="email"]').should("be.visible").type(gerarEmail());
    cy.get('[name="senha"]').should("be.visible").type("Senha@123");
    cy.get('[name="confirmarSenha"]').should("be.visible").type("Senha@123");
    cy.contains("Criar Conta").should("be.visible").click();
    cy.get(".grid > :nth-child(3) > .flex", { timeout: 100 }).should(
      "be.visible",
    );
    cy.contains("CNS deve ter 15 dígitos", { timeout: 1000 }).should(
      "be.visible",
    );
    cy.screenshot("cadastro13");
  });

  it("deve validar campo Data Nascimento nulo", () => {
    cy.get(".bg-green-600", { timeout: 1000 }).click();
    cy.get('[name="nome"]').should("be.visible").type(gerarUsuario());
    cy.get('[name="cpf"]').should("be.visible").type(gerarCPF());
    cy.get('[name="cns"]').should("be.visible").type(gerarCNS());
    //cy.get('[name="nascimento"]').should("be.visible").type("1990-01-01");
    cy.get('[name="endereco"]').should("be.visible").type("Rua Exemplo, 123");
    cy.get('[name="cep"]').should("be.visible").type("12345-678");
    cy.get('[name="telefone"]').should("be.visible").type("(11) 91234-5678");
    cy.get('[name="email"]').should("be.visible").type(gerarEmail());
    cy.get('[name="senha"]').should("be.visible").type("Senha@123");
    cy.get('[name="confirmarSenha"]').should("be.visible").type("Senha@123");
    cy.contains("Criar Conta").should("be.visible").click();
    cy.contains("Data de nascimento é obrigatória", { timeout: 1000 }).should(
      "be.visible",
    );
    cy.get(":nth-child(4) > .gap-1").should("be.visible");
    cy.screenshot("cadastro14");
  });

  it("deve validar cns ja cadastrado", () => {
    cy.get(".bg-green-600", { timeout: 1000 }).click();
    cy.get('[name="nome"]').should("be.visible").type(gerarUsuario());
    cy.get('[name="cpf"]').should("be.visible").type(gerarCPF());
    cy.get('[name="cns"]').should("be.visible").type(usuarioCadastrado.cns);
    cy.get('[name="nascimento"]').should("be.visible").type("1990-01-01");
    cy.get('[name="endereco"]').should("be.visible").type("Rua Exemplo, 123");
    cy.get('[name="cep"]').should("be.visible").type("12345-678");
    cy.get('[name="telefone"]').should("be.visible").type("(11) 91234-5678");
    cy.get('[name="email"]').should("be.visible").type(gerarEmail());
    cy.get('[name="senha"]').should("be.visible").type("Senha@123");
    cy.get('[name="confirmarSenha"]').should("be.visible").type("Senha@123");
    cy.contains("Criar Conta").should("be.visible").click();
    cy.contains("Este CNS já está cadastrado", { timeout: 1500 }).should(
      "be.visible",
    );
    cy.screenshot("cadastro15");
  });

  it("deve validar campo senha nulo", () => {
    cy.get(".bg-green-600", { timeout: 1000 }).click();
    cy.get('[name="nome"]').should("be.visible").type(gerarUsuario());
    cy.get('[name="cpf"]').should("be.visible").type(gerarCPF());
    cy.get('[name="cns"]').should("be.visible").type(gerarCNS());
    cy.get('[name="nascimento"]').should("be.visible").type("1990-01-01");
    cy.get('[name="endereco"]').should("be.visible").type("Rua Exemplo, 123");
    cy.get('[name="cep"]').should("be.visible").type("12345-678");
    cy.get('[name="telefone"]').should("be.visible").type("(11) 91234-5678");
    cy.get('[name="email"]').should("be.visible").type(gerarEmail());
    cy.get('[name="confirmarSenha"]').should("be.visible").type("Senha@123");
    cy.contains("Criar Conta").should("be.visible").click();
    cy.contains("Senha é obrigatória", { timeout: 1000 }).should("be.visible");
    cy.get(":nth-child(1) > .gap-1").should("be.visible");
    cy.contains("As senhas não coincidem", { timeout: 1000 }).should(
      "be.visible",
    );
    cy.get(":nth-child(2) > .gap-1").should("be.visible");
    cy.screenshot("cadastro16");
  });

  it("deve validar span Senha deve ter pelo menos 6 caracteres", () => {
    cy.get(".bg-green-600", { timeout: 1000 }).click();
    cy.get('[name="nome"]').should("be.visible").type(gerarUsuario());
    cy.get('[name="cpf"]').should("be.visible").type(gerarCPF());
    cy.get('[name="cns"]').should("be.visible").type(gerarCNS());
    cy.get('[name="nascimento"]').should("be.visible").type("1990-01-01");
    cy.get('[name="endereco"]').should("be.visible").type("Rua Exemplo, 123");
    cy.get('[name="cep"]').should("be.visible").type("12345-678");
    cy.get('[name="telefone"]').should("be.visible").type("(11) 91234-5678");
    cy.get('[name="email"]').should("be.visible").type(gerarEmail());
    cy.get('[name="senha"]').should("be.visible").type("123");
    cy.get('[name="confirmarSenha"]').should("be.visible").type("Senha@123");
    cy.contains("Criar Conta").should("be.visible").click();
    cy.contains("Senha deve ter pelo menos 6 caracteres", {
      timeout: 1000,
    }).should("be.visible");
    cy.get(":nth-child(1) > .gap-1").should("be.visible");
    cy.contains("As senhas não coincidem", { timeout: 1000 }).should(
      "be.visible",
    );
    cy.get(":nth-child(2) > .gap-1").should("be.visible");
    cy.screenshot("cadastro17");
  });

  it("deve validar span Senha As senhas não coincidem", () => {
    cy.get(".bg-green-600", { timeout: 1000 }).click();
    cy.get('[name="nome"]').should("be.visible").type(gerarUsuario());
    cy.get('[name="cpf"]').should("be.visible").type(gerarCPF());
    cy.get('[name="cns"]').should("be.visible").type(gerarCNS());
    cy.get('[name="nascimento"]').should("be.visible").type("1990-01-01");
    cy.get('[name="endereco"]').should("be.visible").type("Rua Exemplo, 123");
    cy.get('[name="cep"]').should("be.visible").type("12345-678");
    cy.get('[name="telefone"]').should("be.visible").type("(11) 91234-5678");
    cy.get('[name="email"]').should("be.visible").type(gerarEmail());
    cy.get('[name="senha"]').should("be.visible").type("Senha@123");
    cy.get('[name="confirmarSenha"]').should("be.visible").type("Senha@1233");
    cy.contains("Criar Conta").should("be.visible").click();
    cy.contains("As senhas não coincidem", { timeout: 1000 }).should(
      "be.visible",
    );
    cy.get(":nth-child(2) > .gap-1").should("be.visible");
    cy.screenshot("cadastro18");
  });
});
