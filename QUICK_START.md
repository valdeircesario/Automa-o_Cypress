# 🚀 Quick Start

> Guia rápido para configurar, executar e evoluir o projeto de automação Cypress com eficiência.

## 1. Visão geral

Este projeto foi estruturado para servir como base de estudo, referência e evolução em automação E2E com Cypress. Ele já inclui organização por módulos, Page Object Model, fixtures, comandos reutilizáveis e documentação técnica.

Antes de começar, confirme que o ambiente já está preparado:

- Node.js v20+
- npm v10+
- projeto clonado e dependências instaladas

---

## 2. Pré-requisitos

```bash
node -v
npm -v
```

Se estiver tudo correto, siga para a próxima etapa.

---

## 3. Instalação e configuração

```bash
# entrar na pasta do projeto
cd projetocypressteste01

# instalar dependências
npm install

# criar o arquivo de ambiente a partir do exemplo
cp .env.example .env
```

Agora edite o arquivo `.env` com os valores reais do projeto:

```env
CYPRESS_BASE_URL=http://sua-aplicacao.com
CYPRESS_USERNAME=seu-usuario
CYPRESS_PASSWORD=sua-senha
CYPRESS_ENV=development
```

> Ajuste os valores conforme a sua aplicação e ambiente de execução.

---

## 4. Executando testes

### Opção A — interface visual do Cypress

```bash
npm run cypress:open
```

Essa é a melhor opção para desenvolvimento e depuração. Você consegue:

- selecionar arquivos de teste
- executar cenários individualmente
- validar elementos em tempo real
- analisar falhas com mais clareza

### Opção B — execução headless

```bash
npm test
```

Use essa opção em CI/CD ou em execução automatizada, sem abrir a interface gráfica.

### Opção C — execução com navegador visível

```bash
npm run test:headed
```

### Opção D — execução em navegadores específicos

```bash
npm run test:chrome
npm run test:firefox
npm run test:edge
```

### Opção E — executar apenas os testes de login

```bash
npm run test:login
```

---

## 5. Validação de código

Antes de continuar ou enviar alterações, valide a qualidade do código:

```bash
npm run lint
```

Se quiser corrigir automaticamente problemas simples:

```bash
npm run lint:fix
```

---

## 6. Geração de relatórios

Após os testes, você pode gerar relatórios em HTML e JSON:

```bash
npm run test:report
```

Os artefatos ficam em:

```text
reports/
```

Esse relatório é útil para:

- verificar falhas
- acompanhar tempo de execução
- registrar evidências do teste
- compartilhar resultados com a equipe

---

## 7. Estrutura da automação

### Onde ficam os testes?

```text
cypress/e2e/[modulo]/[nome].cy.js
```

Exemplo:

```text
cypress/e2e/login/login.cy.js
```

### Onde ficam os Page Objects?

```text
cypress/pages/[NomePage].js
```

Exemplo:

```text
cypress/pages/LoginPage.js
```

### Onde ficam os dados de teste?

```text
cypress/fixtures/[modulo].json
```

Exemplo:

```text
cypress/fixtures/login.json
```

### Onde ficam os comandos reutilizáveis?

```text
cypress/support/commands.js
```

### Onde ficam funções utilitárias?

```text
cypress/utils/helpers.js
```

---

## 8. Anatomia de um teste

```javascript
it("CTN-001 — Login com credenciais válidas", () => {
  cy.fixture("login.json").then((dados) => {
    // ARRANGE
    const usuario = dados.usuarioValido.usuario;
    const senha = dados.usuarioValido.senha;

    // ACT
    loginPage.visit();
    loginPage.preencherUsuario(usuario);
    loginPage.preencherSenha(senha);
    loginPage.clicarEntrar();

    // ASSERT
    loginPage.validarLoginRealizado();
    cy.url().should("not.include", "/login");
  });
});
```

Esse padrão segue a abordagem AAA:

- Arrange: prepara os dados e o cenário
- Act: executa a ação principal
- Assert: valida o resultado esperado

---

## 9. Ajustando seletores

Caso a aplicação tenha mudado e os seletores não funcionem mais:

1. execute `npm run cypress:open`
2. use o seletor visual do Cypress
3. identifique o novo elemento
4. ajuste o getter ou método correspondente em `cypress/pages`

Exemplo:

```javascript
// Antes
get usuarioInput() {
  return cy.get('[data-testid="login-usuario"]');
}

// Depois
get usuarioInput() {
  return cy.get('[data-testid="input-usuario-login"]');
}
```

---

## 10. Adicionando um novo módulo

### Exemplo: usuários

1. criar a página de objeto em `cypress/pages/UsuariosPage.js`
2. criar o fixture em `cypress/fixtures/usuarios.json`
3. criar os casos de teste em `docs/casos-de-teste/`
4. criar cenários em `docs/cenarios-de-teste/`
5. criar os testes em `cypress/e2e/usuarios/usuarios.cy.js`

---

## 11. Troubleshooting

### Erro: "Can't find spec file"

- confira o caminho do arquivo
- verifique a extensão `.cy.js`
- confirme que ele está dentro de `cypress/e2e`

### Erro: "Element not found"

- valide o seletor no navegador
- use o Cypress UI para inspecionar o elemento
- verifique se o componente está visível antes da ação

### Erro: "Credentials invalid"

- revise o arquivo `.env`
- confirme os valores em `cypress/fixtures`
- teste o login manualmente na aplicação

### Testes lentos

- ajuste timeouts em `cypress.config.js`
- use esperas mais assertivas com `should()`
- evite overuse de waits manuais

---

## 12. Dúvidas frequentes

**Como depurar um teste?**
Use `cy.pause()` ou o modo step-by-step no Cypress UI.

**Como capturar screenshot?**
Use `cy.screenshot('nome-do-arquivo')` ou deixe o Cypress capturar automaticamente em falhas.

**Como usar dados dinâmicos?**
Consulte `cypress/utils/helpers.js` para helpers e geração de dados.

**Como executar em CI/CD?**
Use o comando `npm test` no pipeline da sua ferramenta de integração contínua.

---

## 13. Recursos úteis

- [Documentação oficial do Cypress](https://docs.cypress.io)
- [README.md](./README.md)
- [docs/estrategia-de-testes.md](./docs/estrategia-de-testes.md)
- [docs/padrao-de-nomenclatura.md](./docs/padrao-de-nomenclatura.md)
- [docs/arquitetura.md](./docs/arquitetura.md)

---

## 14. Próximo passo

1. configure o arquivo `.env`
2. execute `npm run cypress:open`
3. selecione o arquivo de login
4. acompanhe os 5 testes em ação

Pronto para começar! 🚀
