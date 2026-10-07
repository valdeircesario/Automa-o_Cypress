# Projeto de Automação de Testes E2E com Cypress

[![Node.js](https://img.shields.io/badge/Node.js-v20.13.1-green)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-10.5.2-blue)](https://www.npmjs.com/)
[![Cypress](https://img.shields.io/badge/Cypress-latest-blue)](https://cypress.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📋 Índice

1. [Objetivo](#objetivo)
2. [Tecnologias](#tecnologias)
3. [Arquitetura](#arquitetura)
4. [Estrutura de Diretórios](#estrutura-de-diretórios)
5. [Instalação](#instalação)
6. [Configuração](#configuração)
7. [Execução dos Testes](#execução-dos-testes)
8. [Padrões e Boas Práticas](#padrões-e-boas-práticas)
9. [Page Object Model](#page-object-model)
10. [Fixtures](#fixtures)
11. [Custom Commands](#custom-commands)
12. [Relatórios](#relatórios)
13. [Adicionando Novos Testes](#adicionando-novos-testes)
14. [Documentação](#documentação)
15. [Contribuindo](#contribuindo)

---

## 🎯 Objetivo

Este projeto implementa uma estrutura profissional de automação de testes E2E (End-to-End) utilizando **Cypress** e **JavaScript**, seguindo as melhores práticas da indústria.

### Princípios

- ✅ **Escalabilidade**: Estrutura preparada para crescimento
- ✅ **Manutenibilidade**: Código limpo e bem documentado
- ✅ **Reutilização**: Componentes reutilizáveis
- ✅ **Qualidade**: Testes independentes e confiáveis
- ✅ **Profissionalismo**: Padrão de projeto corporativo

---

## 🛠 Tecnologias

| Tecnologia      | Versão    | Propósito                |
| --------------- | --------- | ------------------------ |
| **Node.js**     | v20.13.1+ | Runtime JavaScript       |
| **npm**         | 10.5.2+   | Gerenciador de pacotes   |
| **Cypress**     | latest    | Framework de testes E2E  |
| **Mochawesome** | ^8.0.0    | Relatórios HTML          |
| **ESLint**      | latest    | Linting de código        |
| **JavaScript**  | ES6+      | Linguagem de programação |

---

## 🏗 Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                    CAMADA DE TESTES                         │
│  cypress/e2e/login/loginUser.cy.js (Testes Automatizados)  │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│               CAMADA DE PAGE OBJECTS                        │
│    cypress/pages/LoginPage.js  (Encapsulamento de UI)      │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│           CAMADA DE SUPORTE E UTILITÁRIOS                   │
│  Custom Commands | Env local | Fixtures | Helpers         │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                 CYPRESS API                                 │
│   Interação com a Aplicação Web e Browser                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 Estrutura de Diretórios

```
projeto-automacao-cypress/
│
├── cypress/
│   ├── e2e/                          # Testes automatizados
│   │   ├── login/
│   │   │   └── loginUser.cy.js       # Testes do módulo Login
│   │   ├── cadastro/
│   │   │   └── cadastro.cy.js        # Testes do cadastro
│   │   └── home/
│   │       └── home.cy.js            # Testes da home
│   │
│   ├── fixtures/                     # Massa de dados estática
│   │   └── login.json                # Dados de teste para login
│   │
│   ├── pages/                        # Page Objects (POM)
│   │   └── LoginPage.js              # Objeto para página de login
│   │
│   ├── support/                      # Arquivos de suporte
│   │   ├── commands.js               # Comandos customizados
│   │   └── e2e.js                    # Configuração global
│   │
│   ├── utils/                        # Utilitários
│   │   └── helpers.js                # Funções auxiliares
│   │
│   └── schemas/                      # Schemas de validação (futuro)
│
├── docs/                             # Documentação
│   ├── casos-de-teste/               # Especificação de casos
│   │   └── CT-001-login.md
│   │
│   └── cenarios-de-teste/            # Especificação de cenários
│       ├── login/
│       │   ├── CTN-001-login-valido.md
│       │   └── CTN-006-login-valido.md
│       ├── cadastro/
│       └── home/
│
├── reports/                          # Relatórios gerados
├── screenshots/                      # Screenshots de falhas
├── videos/                           # Vídeos de execução
│
├── cypress.env.example.json           # Modelo de perfis sem segredos
├── .eslintrc.js                      # Configuração do ESLint
├── .gitignore                        # Arquivos ignorados pelo Git
├── cypress.config.js                 # Configuração do Cypress
├── package.json                      # Dependências e scripts
└── README.md                         # Este arquivo
```

### Justificativa da Estrutura

| Diretório                             | Propósito                                         |
| ------------------------------------- | ------------------------------------------------- |
| `cypress/e2e/`                        | Organiza testes por módulo/funcionalidade         |
| `cypress/pages/`                      | Encapsula elementos e ações de cada página (POM)  |
| `cypress/fixtures/`                   | Dados reutilizáveis não versionados como fixtures |
| `cypress/support/`                    | Código compartilhado entre todos os testes        |
| `cypress/utils/`                      | Funções auxiliares genéricas                      |
| `docs/`                               | Documentação de casos e cenários                  |
| `reports/`, `screenshots/`, `videos/` | Artefatos gerados                                 |

---

## 🚀 Instalação

### Pré-requisitos

- **Node.js** v20.13.1 ou superior
- **npm** 10.5.2 ou superior
- **Git** (recomendado)

### Passos

1. **Clone o repositório** (ou abra o projeto):

```bash
cd projetocypressteste01
```

2. **Instale as dependências**:

```bash
npm install
```

3. **Verifique a instalação**:

```bash
npx cypress --version
npm run lint --help
```

---

## ⚙️ Configuração

### Variáveis de Ambiente

1. **Use o modelo local de credenciais**:

```bash
copy cypress.env.example.json cypress.env.json
```

2. **Configure os perfis em `cypress.env.json`**:

```env
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

> ⚠️ **IMPORTANTE**: Nunca versione `cypress.env.json` com credenciais reais. O arquivo já está no `.gitignore`.

A URL padrão fica em `cypress.config.js` e pode ser substituída por `CYPRESS_BASE_URL`.

### Arquivo `cypress.config.js`

Configurações principais:

```javascript
baseUrl; // URL base da aplicação
viewportWidth / Height; // Resolução de tela
defaultCommandTimeout; // Timeout padrão
reporter; // Formato de relatório
reporterOptions; // Configurações do Mochawesome
video; // Gravação de vídeos
screenshotOnRunFailure; // Screenshots em falhas
```

### Arquivo `.eslintrc.js`

Regras de lint para código JavaScript/Cypress:

- Aspas simples obrigatórias
- Ponto e vírgula obrigatório
- Sem variáveis não utilizadas
- Indentação de 2 espaços
- Assertions antes de screenshots (Cypress)

---

## ▶️ Execução dos Testes

### Scripts npm

```bash
# Executar todos os testes em modo headless (CLI)
npm test

# Executar em modo interactive (Cypress GUI)
npm run cypress:open

# Executar o spec de login atual
npx cypress run --spec "cypress/e2e/login/loginUser.cy.js"

# Executar com navegador específico
npm run test:chrome
npm run test:firefox
npm run test:edge

# Executar com visualização do navegador aberto (headed)
npm run test:headed

# Executar e gerar relatório
npm run test:report

# Validar código com ESLint
npm run lint

# Corrigir problemas detectáveis automaticamente
npm run lint:fix
```

### Exemplos de Uso

**Executar testes do módulo login:**

```bash
npx cypress run --spec "cypress/e2e/login/loginUser.cy.js"
```

**Executar um teste específico:**

```bash
npx cypress run --spec "cypress/e2e/login/loginUser.cy.js"
```

**Executar em modo watch (para desenvolvimento):**

```bash
npx cypress open
```

**Executar em modo headless com relatório:**

```bash
npm run test:report
```

---

## 📝 Padrões e Boas Práticas

### Nomenclatura

#### Arquivos de Teste

```
[modulo].cy.js
Exemplo: loginUser.cy.js, usuarios.cy.js
```

#### Variáveis

```javascript
// Use camelCase
const usuarioValido = "user@example.com";
const senhaCorreta = "abc123456";

// Constantes em SCREAMING_SNAKE_CASE
const TIMEOUT_PADRAO = 5000;
const URL_INICIAL = "/";
```

#### Funções

```javascript
// Use verbos descritivos
function preencherEmail(email) {}
function validarMensagemErro(mensagem) {}
function clicarBotaoEntrar() {}
```

### Padrão AAA (Arrange-Act-Assert)

Todos os testes devem seguir este padrão:

```javascript
it("CTN-001 — Login válido", () => {
  // Arrange - Preparar dados e cenário
  const email = "user@example.com";
  const senha = "senha123";

  // Act - Executar a ação
  loginPage.acessarPagina();
  loginPage.preencherEmail(email);
  loginPage.preencherSenha(senha);
  loginPage.clicarEntrar();

  // Assert - Validar resultado
  loginPage.validarLoginRealizado();
});
```

### Seletores Recomendados

**Prioridade de uso:**

1. **data-testid** (RECOMENDADO) - Estável e seguro

```html
<input data-testid="input-email" />
```

```javascript
cy.get('[data-testid="input-email"]');
```

2. **data-cy** - Alternativa também aceitável

```html
<button data-cy="btn-login" />
```

3. **Classes CSS estáveis** - Se forem específicas

```html
<form class="login-form" />
```

```javascript
cy.get("form.login-form");
```

**Evite:**

- ❌ nth-child, nth-of-type
- ❌ Classes geradas dinamicamente
- ❌ IDs dinâmicos
- ❌ XPath completo

### Independência de Testes

```javascript
// ✅ BOM: Cada teste é independente
it("CTN-001 — Login válido", () => {
  loginPage.acessarPagina();
  // ... teste completo
});

it("CTN-002 — Senha inválida", () => {
  loginPage.acessarPagina();
  // ... teste diferente
});

// ❌ RUIM: Testes dependentes
it("Login", () => {
  /* testa login */
});
it("Dashboard", () => {
  // Depende do teste anterior passar
  cy.get(".dashboard");
});
```

### Evite Sleeps

```javascript
// ❌ RUIM
cy.wait(3000);
cy.get('[data-testid="elemento"]').click();

// ✅ BOM
cy.get('[data-testid="elemento"]', { timeout: 10000 }).click();

// ✅ BOM - Com comando customizado
cy.waitForElement('[data-testid="elemento"]');
```

---

## 🎭 Page Object Model

### O que é Page Object Model (POM)?

POM é um padrão de design que encapsula elementos e ações de uma página em uma classe, mantendo os testes limpos e legíveis.

### Exemplo: LoginPage.js

```javascript
class LoginPage {
  // Elementos (getters)
  get emailInput() {
    return cy.get('[name="email"]');
  }

  get senhaInput() {
    return cy.get('[data-testid="input-senha"]');
  }

  get btnEntrar() {
    return cy.get('[data-testid="btn-entrar"]');
  }

  // Ações
  acessarPagina(url = "/") {
    cy.visit(url);
  }

  preencherEmail(email) {
    this.emailInput.clear().type(email);
  }

  preencherSenha(senha) {
    this.senhaInput.clear().type(senha);
  }

  clicarEntrar() {
    this.btnEntrar.click();
  }

  // Assertions
  validarLoginRealizado() {
    cy.contains("Portal do Paciente").should("be.visible");
  }
}

export default new LoginPage();
```

### Usando no Teste

```javascript
import loginPage from "../../pages/LoginPage";

describe("CT-001 — Login", () => {
  it("CTN-001 — Login válido", () => {
    loginPage.acessarPagina();
    loginPage.preencherEmail("user@example.com");
    loginPage.preencherSenha("senha123");
    loginPage.clicarEntrar();
    loginPage.validarLoginRealizado();
  });
});
```

### Benefícios

✅ Testes limpos e legíveis
✅ Fácil manutenção
✅ Reutilização de código
✅ Isolamento de mudanças UI

### Criando um Novo Page Object

1. Crie arquivo em `cypress/pages/NovaPagina.js`
2. Identifique os elementos principais
3. Crie getters para cada elemento
4. Implemente métodos de ação
5. Implemente métodos de validação
6. Exporte uma instância única (singleton)

---

## 📦 Fixtures

Fixtures são dados estáticos reutilizáveis em testes.

### Localização

`cypress/fixtures/login.json`

### Exemplo

```json
{
  "usuarioValido": {
    "email": "usuario@example.com",
    "senha": "senha-local"
  },
  "usuarioInvalido": {
    "email": "inexistente@example.com",
    "senha": "senha-invalida"
  }
}
```

### Uso no Teste

```javascript
it("CTN-001 — Login válido", () => {
  cy.fixture("login.json").then((dados) => {
    const email = dados.usuarioValido.email;
    const senha = dados.usuarioValido.senha;

    loginPage.realizarLogin(email, senha);
  });
});
```

### Quando Usar

✅ Dados estáticos e reutilizáveis
✅ Massa de dados de teste
✅ Configurações específicas
✅ Respostas de API mockadas

### Quando NÃO Usar

❌ Dados sensíveis (use `cypress.env.json`)
❌ Dados dinâmicos (gere no teste)
❌ Dados muito grandes (pode desacelerar testes)

---

## 🎮 Custom Commands

Custom commands reutilizam ações comuns nos testes.

### Localização

`cypress/support/commands.js`

### Exemplo

```javascript
Cypress.Commands.add("loginComPerfil", (perfil) => {
  const usuario = Cypress.env("usuarios")[perfil];
  cy.get('[name="email"]').clear().type(usuario.email);
  cy.get('[name="senha"]').clear().type(usuario.senha);
});
```

### Uso

```javascript
cy.loginComPerfil("user");
```

### Quando Usar

✅ Ação complexa reutilizada em múltiplos testes
✅ Fluxo comum (login, logout, etc)
✅ Setup/teardown repetitivo

### Quando NÃO Usar

❌ Ações simples (use Page Object direto)
❌ Lógica específica de um teste
❌ Assertions (mantenha no teste)

---

## 📊 Relatórios

### Mochawesome

Gera relatórios HTML profissionais.

### Geração

```bash
npm run test:report
```

### Localização

`reports/` - Arquivos de relatório gerados

### Visualização

1. Abra `reports/mochawesome.html` no navegador
2. Visualize resultados em tempo real
3. Acesse screenshots em caso de falhas
4. Analise duração de cada teste

### Configuração

Em `cypress.config.js`:

```javascript
reporter: 'mochawesome',
reporterOptions: {
  reportDir: 'reports',
  reportFilename: '[status]_[datetime]-report',
  html: true,
  json: true,
  overwrite: false,
  timestamp: 'mm/dd/yyyy_HH:MM:ss',
}
```

---

## ➕ Adicionando Novos Testes

### Passo 1: Criar Documentação

**Arquivo:** `docs/casos-de-teste/CT-XXX-nome.md`

```markdown
# CT-XXX — Descrição do Caso

## Objetivo

Descrever o objetivo...

## Cenários

- CTN-XXX-01 — Primeiro cenário
- CTN-XXX-02 — Segundo cenário
```

**Arquivo:** `docs/cenarios-de-teste/nome/CTN-XXX-01.md`

```markdown
# CTN-XXX-01 — Descrição do Cenário

**Caso de Teste:** CT-XXX

**Objetivo:** Descrever...

**Passos:**

1. Passo 1
2. Passo 2

**Resultado Esperado:**
Esperado...
```

### Passo 2: Criar Page Object (se necessário)

**Arquivo:** `cypress/pages/NovaPagina.js`

```javascript
class NovaPagina {
  get elemento() {
    return cy.get('[data-testid="elemento"]');
  }

  acessarPagina(url = "/nova-pagina") {
    cy.visit(url);
  }

  realizarAcao() {
    this.elemento.click();
  }

  validarResultado() {
    cy.url().should("include", "/resultado");
  }
}

export default new NovaPagina();
```

### Passo 3: Criar Fixtures (se necessário)

**Arquivo:** `cypress/fixtures/novo-modulo.json`

```json
{
  "dados": {
    "campo1": "valor1",
    "campo2": "valor2"
  }
}
```

### Passo 4: Criar Arquivo de Teste

**Arquivo:** `cypress/e2e/novo-modulo/novo-modulo.cy.js`

```javascript
import novaPagina from "../../pages/NovaPagina";
import { helpers } from "../../utils/helpers";

describe("CT-XXX — Novo Módulo", () => {
  beforeEach(() => {
    helpers.log("Iniciando teste");
    novaPagina.acessarPagina();
  });

  it("CTN-XXX-01 — Primeiro cenário", () => {
    // Arrange
    cy.fixture("novo-modulo.json").then((dados) => {
      // Act
      novaPagina.realizarAcao();

      // Assert
      novaPagina.validarResultado();
    });
  });
});
```

### Passo 5: Executar Testes

```bash
npm run test
```

---

## 📚 Documentação

### Estrutura de Documentação

```
docs/
├── casos-de-teste/          # Especificação de casos
│   ├── CT-001-login.md
│   ├── CT-002-usuarios.md
│   └── ...
│
└── cenarios-de-teste/       # Especificação detalhada de cada cenário
    ├── login/
    │   ├── CTN-001-login-valido.md
    │   ├── CTN-002-login-senha-invalida.md
    │   └── ...
    │
    └── usuarios/
        ├── CTN-XXX-criar-usuario.md
        └── ...
```

### Template de Caso de Teste (CT)

```markdown
# CT-XXX — Descrição

## Objetivo

Descrever objetivo...

## Cenários

- CTN-XXX-01 — Cenário 1
- CTN-XXX-02 — Cenário 2

## Resultado Esperado

Descrever...

## Dependências

- Item 1
- Item 2

## Prioridade

Alta/Média/Baixa
```

### Template de Cenário (CTN)

```markdown
# CTN-XXX-01 — Descrição

**Caso de Teste:** CT-XXX

**Objetivo:** Descrever...

**Prioridade:** Alta

**Tipo:** E2E

**Automatizado:** Sim

## Dados de Teste

| Campo  | Valor  |
| ------ | ------ |
| campo1 | valor1 |

## Passos

1. Passo 1
2. Passo 2

## Resultado Esperado

- Resultado 1
- Resultado 2

## Critérios de Aceitação

- ✅ Critério 1
- ✅ Critério 2
```

---

## 🤝 Contribuindo

### Padrão de Commits

```
feat: adiciona novo módulo de testes
fix: corrige seletor inválido
docs: atualiza documentação
refactor: melhora estrutura de POM
style: ajusta formatação
test: adiciona novo cenário
```

### Code Review Checklist

- [ ] Testes independentes?
- [ ] Page Object utilizado?
- [ ] Seletores estáveis?
- [ ] Sem hardcoding de dados?
- [ ] Sem sleeps desnecessários?
- [ ] ESLint passando?
- [ ] Documentação atualizada?
- [ ] Nomes descritivos?

### Dúvidas?

- Consulte a documentação de casos em `docs/`
- Verifique exemplos em `cypress/e2e/`
- Revise o Page Object em `cypress/pages/`

---

## 📋 Checklist de Setup

- [x] Estrutura de diretórios criada
- [x] npm configurado
- [x] Cypress instalado
- [x] ESLint configurado
- [x] Page Objects criados
- [x] Fixtures preparadas
- [x] Custom Commands definidos
- [x] Testes implementados
- [x] Relatórios configurados
- [x] Documentação completa

---

## 📄 Licença

MIT - Sinta-se livre para usar, modificar e distribuir.

---

## 📞 Suporte

Para dúvidas ou sugestões:

1. Verifique a documentação em `docs/`
2. Consulte exemplos em `cypress/e2e/`
3. Revise os Page Objects em `cypress/pages/`

---

**Criado com ❤️ para QA Profissionais**

_Última atualização: 29/08/2026_
