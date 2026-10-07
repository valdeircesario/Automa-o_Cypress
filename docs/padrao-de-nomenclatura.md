# Padrão de Nomenclatura

Este documento define as convenções de nomes para testes, documentação, dados e código do projeto Cypress.

## 1. Identificadores de Teste

### Caso de Teste (CT)

Representa uma funcionalidade ou objetivo funcional completo.

**Formato:** `CT-XXX — Descrição`

**Exemplos:**

- `CT-001 — Login do paciente`
- `CT-002 — Cadastro de paciente`
- `CT-HOME — Funcionalidades da home`

### Cenário de Teste (CTN)

Representa uma condição específica dentro de um caso de teste.

**Formato:** `CTN-XXX — Descrição do cenário`

**Exemplos atuais:**

- `CTN-001 — Validar tela de login e retorno à home`
- `CTN-002 — Login com credenciais inválidas`
- `CTN-006 — Login com credenciais válidas`

A numeração dos cenários reinicia dentro de cada módulo ou caso documentado.

## 2. Arquivos e Diretórios

### Specs Cypress

**Formato:** `cypress/e2e/[modulo]/[funcionalidade].cy.js`

**Exemplos do projeto:**

```text
cypress/e2e/login/loginUser.cy.js
cypress/e2e/cadastro/cadastro.cy.js
cypress/e2e/home/home.cy.js
```

Use nomes legíveis em minúsculas ou camelCase quando necessário para distinguir fluxos.

### Page Objects

**Formato:** `cypress/pages/[Nome]Page.js`

**Exemplo:** `cypress/pages/LoginPage.js`

Use PascalCase e o sufixo `Page`.

### Fixtures

**Formato:** `cypress/fixtures/[modulo].json`

**Exemplo:** `cypress/fixtures/login.json`

Fixtures podem conter massas estáticas não sensíveis. Credenciais reais devem ficar em `cypress.env.json`, que não é versionado.

### Utilitários

**Formato:** `cypress/utils/[nome].js`

**Exemplos:** `helpers.js`, `validadores.js`, `dateUtils.js`.

Use camelCase e nomes que descrevam a responsabilidade do módulo.

### Documentação

Casos de teste:

```text
docs/casos-de-teste/CT-001-login.md
docs/casos-de-teste/CT-002-cadastro.md
```

Cenários de teste:

```text
docs/cenarios-de-teste/login/CTN-001-login-valido.md
docs/cenarios-de-teste/cadastro/CTN-001-cadastro-validar-tela.md
```

## 3. Variáveis e Constantes

### Variáveis

Use camelCase:

```javascript
const usuarioCadastrado = {};
const mensagemErro = "Email ou senha inválidos";
const dadosCadastro = {};
```

### Constantes

Use SCREAMING_SNAKE_CASE somente para valores realmente constantes:

```javascript
const TIMEOUT_PADRAO = 10000;
const URL_INICIAL = "/";
```

### Booleanos

Use prefixos que expressem condição, como `is`, `has`, `should` ou `can`:

```javascript
const isAutenticado = true;
const hasMensagemErro = false;
```

### Coleções

Use nomes no plural:

```javascript
const usuarios = [];
const cenarios = [];
```

## 4. Funções e Comandos

Funções devem usar camelCase e começar com um verbo:

```javascript
gerarUsuario();
gerarEmail();
gerarCPF();
gerarCNS();
preencherCadastro(dados);
validarMensagemErro(mensagem);
```

Prefixos recomendados:

| Prefixo     | Responsabilidade | Exemplo                 |
| ----------- | ---------------- | ----------------------- |
| `acessar`   | Navegação        | `acessarPagina()`       |
| `preencher` | Entrada de dados | `preencherCadastro()`   |
| `validar`   | Assertions       | `validarMensagemErro()` |
| `clicar`    | Ação de clique   | `clicarBotaoEntrar()`   |
| `gerar`     | Dados dinâmicos  | `gerarCPF()`            |
| `obter`     | Retorno de valor | `obterDataHoje()`       |

Comandos Cypress compartilhados ficam em `cypress/support/commands.js`:

```javascript
cy.loginComPerfil("user");
cy.loginComPerfil("loginInvalido");
```

## 5. Specs e Blocos de Teste

Os nomes dos `describe` e `it` devem descrever o comportamento, sem incluir dados sensíveis.

```javascript
describe("Home e Login", () => {
  it("deve validar login valido", () => {
    cy.visit("/");
    cy.get(".bg-blue-600 > span").click();
    cy.loginComPerfil("user");
    cy.get(".mt-2").click();
    cy.contains("Portal do Paciente").should("be.visible");
  });
});
```

Quando houver rastreabilidade explícita no spec, use os IDs documentais `CT-XXX` e `CTN-XXX`. Os documentos em `docs/` são a fonte detalhada de objetivo, passos e resultado esperado.

## 6. Seletores

Para novos elementos, prefira atributos estáveis:

```html
<input data-testid="input-email" /> <button data-cy="btn-entrar">Entrar</button>
```

Na aplicação atual também são usados seletores semânticos:

```javascript
cy.get('[name="email"]');
cy.get('[name="senha"]');
cy.contains("Portal do Paciente");
```

Ordem de preferência:

1. `data-testid` ou `data-cy`
2. atributos semânticos, como `name`
3. texto visível para conteúdo estável
4. classes CSS estáveis
5. seletores posicionais, somente como último recurso

## 7. Dados e Segurança

Perfis de login ficam em `cypress.env.json`:

```json
{
  "usuarios": {
    "user": {
      "email": "usuario@example.com",
      "senha": "senha-local"
    },
    "loginInvalido": {
      "email": "inexistente@example.com",
      "senha": "senha-invalida"
    }
  }
}
```

Regras:

- Nunca versionar `cypress.env.json`.
- Versionar somente `cypress.env.example.json` sem segredos reais.
- Não colocar credenciais em specs, fixtures, screenshots, logs ou documentação.
- Usar geradores para CPF, CNS, email e demais dados que precisem ser únicos.

## 8. Documentação, Branches e Commits

Branches:

```text
feature/CT-001-login
bugfix/CT-002-validacao
docs/atualizar-arquitetura
```

Commits:

```text
feat: adicionar cenário de login válido
fix: corrigir seletor do botão entrar
docs: atualizar estratégia de testes
test: adicionar cenário CTN-006
```

## 9. Checklist

- [ ] Arquivo está no diretório correto.
- [ ] Nome usa a convenção do módulo.
- [ ] Variáveis usam camelCase.
- [ ] Funções começam com verbo.
- [ ] Seletores são estáveis e semânticos.
- [ ] IDs CT/CTN estão rastreáveis na documentação.
- [ ] Nenhuma credencial real aparece no código ou na documentação.
- [ ] Documentação foi atualizada junto com o teste.

**Versão:** 2.0  
**Última atualização:** 23/09/2026
