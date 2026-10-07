# 🚀 GUIA DE INÍCIO RÁPIDO

## 1️⃣ INSTALAÇÃO E CONFIGURAÇÃO

### Pré-requisitos:

- Node.js v20+ (✅ já instalado: v20.13.1)
- npm v10+ (✅ já instalado: v10.5.2)

### Passos:

```bash
# 1. Navegar para o projeto
cd projetocypressteste01

# 2. Instalar dependências (já feito)
npm install

# 3. Criar arquivo .env com suas credenciais
cp .env.example .env

# 4. Editar .env com dados reais
notepad .env
```

---

## 2️⃣ CONFIGURAÇÃO DO .env

Edite o arquivo `.env` com:

```env
CYPRESS_BASE_URL=http://sua-aplicacao.com
CYPRESS_USERNAME=seu-usuario
CYPRESS_PASSWORD=sua-senha
CYPRESS_ENV=development
```

---

## 3️⃣ EXECUTAR TESTES

### Opção A: Interface Gráfica (Recomendado para desenvolvimento)

```bash
npm run cypress:open
```

Abre o Cypress UI onde você pode:

- Selecionar spec files
- Executar testes individualmente
- Ver resultados em tempo real
- Usar o seletor de elementos

### Opção B: Headless (Recomendado para CI/CD)

```bash
npm test
```

Executa todos os testes rapidamente sem interface

### Opção C: Com navegador visível

```bash
npm run test:headed
```

### Opção D: Navegador específico

```bash
npm run test:chrome        # Apenas Chrome
npm run test:firefox       # Apenas Firefox
npm run test:edge          # Apenas Edge
```

### Opção E: Apenas Login

```bash
npm run test:login
```

---

## 4️⃣ VALIDAÇÃO DE CÓDIGO

### Verificar qualidade:

```bash
npm run lint
```

### Corrigir automaticamente:

```bash
npm run lint:fix
```

---

## 5️⃣ GERAR RELATÓRIOS

Após executar os testes:

```bash
npm run test:report
```

Abre um relatório HTML interativo em:
`reports/mochawesome.html`

---

## 6️⃣ ENTENDER A ESTRUTURA

### Onde adicionar novos testes?

```
cypress/e2e/[modulo]/[nome].cy.js
Exemplo: cypress/e2e/usuarios/criar-usuario.cy.js
```

### Onde criar Page Objects?

```
cypress/pages/[NomePage].js
Exemplo: cypress/pages/UsuariosPage.js
```

### Onde adicionar dados de teste?

```
cypress/fixtures/[modulo].json
Exemplo: cypress/fixtures/usuarios.json
```

### Onde adicionar comandos customizados?

```
cypress/support/commands.js
```

---

## 7️⃣ ANATOMIA DE UM TESTE

```javascript
it("CTN-001 — Login com credenciais válidas", () => {
  // ARRANGE - Preparar dados
  cy.fixture("login.json").then((dados) => {
    // ACT - Executar ações
    loginPage.visit();
    loginPage.preencherUsuario(dados.usuarioValido.usuario);
    loginPage.preencherSenha(dados.usuarioValido.senha);
    loginPage.clicarEntrar();

    // ASSERT - Validar resultados
    loginPage.validarLoginRealizado();
    cy.url().should("not.include", "/login");
  });
});
```

---

## 8️⃣ MODIFICAR SELETORES

Se os seletores não funcionarem com sua aplicação:

1. Abrir o Cypress: `npm run cypress:open`
2. Clicar em "Select element" (ícone de alvo)
3. Clicar no elemento na tela
4. Copiar o seletor sugerido
5. Editar `cypress/pages/LoginPage.js`
6. Substituir no getter correspondente:

```javascript
// Antes
get usuarioInput() {
  return cy.get('[data-testid="login-usuario"]');
}

// Depois
get usuarioInput() {
  return cy.get('[data-testid="input-usuario-login"]'); // novo seletor
}
```

---

## 9️⃣ ADICIONAR NOVO MÓDULO

### Exemplo: Criar testes para "Usuários"

**1. Criar Page Object**

```bash
# Criar: cypress/pages/UsuariosPage.js
```

**2. Criar Fixtures**

```bash
# Criar: cypress/fixtures/usuarios.json
```

**3. Criar Test Cases**

```bash
# Criar: docs/casos-de-teste/CT-002-usuarios.md
```

**4. Criar Scenarios**

```bash
# Criar: docs/cenarios-de-teste/usuarios/CTN-001.md
```

**5. Criar Tests**

```bash
# Criar: cypress/e2e/usuarios/usuarios.cy.js
```

---

## 🔟 TROUBLESHOOTING

### Erro: "Can't find spec file"

- Verificar caminho do arquivo
- Confirmar extensão .cy.js
- Verificar pasta cypress/e2e

### Erro: "Element not found"

- Validar seletor com `npm run cypress:open`
- Verificar se elemento está visível
- Usar `cy.wait()` se necessário

### Erro: "Credentials invalid"

- Verificar arquivo .env
- Validar dados em cypress/fixtures/
- Testar login manual na aplicação

### Testes muito lentos?

- Aumentar timeouts em cypress.config.js
- Usar `cy.waitForStable()` em elementos dinâmicos
- Considerar Lighthouse audits

---

## 📞 DÚVIDAS FREQUENTES

**P: Como debug um teste?**
A: Use `cy.pause()` ou clique em "Step" no Cypress UI

**P: Como tomar screenshot?**
A: Use `cy.screenshot('nome')` ou será automático em falha

**P: Como usar dados dinâmicos?**
A: Veja `cypress/utils/helpers.js` para `dataGenerator`

**P: Como esperar elemento aparecer?**
A: Use `cy.get().should('exist')` com timeout

**P: Como rodar em CI/CD?**
A: Use `npm test` em seu pipeline (GitHub Actions, Jenkins, etc)

---

## 📚 RECURSOS ADICIONAIS

- [Documentação Cypress](https://docs.cypress.io)
- [README.md](./README.md) - Documentação completa
- [estrategia-de-testes.md](./docs/estrategia-de-testes.md) - Padrões
- [padrao-de-nomenclatura.md](./docs/padrao-de-nomenclatura.md) - Convenções
- [arquitetura.md](./docs/arquitetura.md) - Arquitetura

---

## ✨ Você está pronto!

1. Configure o `.env`
2. Execute `npm run cypress:open`
3. Clique em `cypress/e2e/login/login.cy.js`
4. Veja os 5 testes de Login em ação! 🎯

Bom teste! 🚀
