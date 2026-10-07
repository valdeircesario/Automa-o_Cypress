# Cypress Automation Lab

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-v20.13.1-2ea44f?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-10.5.2-CB3837?style=for-the-badge&logo=npm)](https://www.npmjs.com/)
[![Cypress](https://img.shields.io/badge/Cypress-15.21.1-17202A?style=for-the-badge&logo=cypress)](https://www.cypress.io/)
[![ESLint](https://img.shields.io/badge/ESLint-v10.9.1-4B32C3?style=for-the-badge&logo=eslint)](https://eslint.org/)
[![License](https://img.shields.io/badge/License-MIT-FFD43B?style=for-the-badge)](LICENSE)

</div>

<p align="center">
  <img src="https://img.shields.io/badge/Automation-E2E%20Testing-0A4D8A?style=for-the-badge" alt="E2E Testing" />
  <img src="https://img.shields.io/badge/Stack-Cypress%20%2B%20JavaScript-14B8A6?style=for-the-badge" alt="Cypress + JavaScript" />
</p>

> Projeto de estudo, aprendizagem e referência em automação de testes E2E com Cypress, estruturado para ser profissional, organizado e reutilizável.

---

## ✨ Visão geral

Este repositório foi desenvolvido como uma base sólida para aprendizado prático em automação de testes com Cypress e JavaScript. O objetivo principal é demonstrar boas práticas de qualidade, organização e manutenção em testes end-to-end, mantendo uma estrutura clara e escalável para uso em projetos reais.

Além disso, ele funciona como uma referência visual e técnica para quem deseja evoluir em automação, mantendo padrões profissionais de desenvolvimento e documentação.

### Principais objetivos

- ✅ Aprender Cypress na prática
- ✅ Organizar testes por módulos e responsabilidades
- ✅ Aplicar boas práticas de QA e automação
- ✅ Usar Page Object Model (POM) e reutilização de código
- ✅ Criar uma base elegante e expandível para novos casos de teste

### Filosofia do projeto

- Simplicidade com qualidade
- Estrutura clara e sustentável
- Reuso de código e dados
- Facilidade de manutenção
- Alto valor como referência acadêmica e profissional

---

## 🧭 Índice

1. [Objetivo](#-objetivo)
2. [Stack tecnológica](#-stack-tecnologica)
3. [Arquitetura](#-arquitetura)
4. [Estrutura do projeto](#-estrutura-do-projeto)
5. [Cobertura de testes](#-cobertura-de-testes)
6. [Configuração e instalação](#-configuração-e-instalação)
7. [Execução](#-execução)
8. [Boas práticas](#-boas-praticas)
9. [Relatórios](#-relatórios)
10. [Checklist de setup](#-checklist-de-setup)

---

## 🎯 Objetivo

O projeto simula uma automação E2E de uma aplicação web com foco em cenários reais de usabilidade, validação de regras de negócio e navegação principal. Os fluxos implementados incluem:

- autenticação do usuário
- cadastro de paciente
- validação de erros e campos obrigatórios
- navegação e visualização da home
- verificação da interface principal da aplicação

Essa abordagem ajuda a reforçar conceitos importantes da automação, como organização por módulos, validações de UI, manutenção de seletors e redução de duplicação de código.

---

## 🧰 Stack tecnológica

| Tecnologia  | Versão    | Finalidade                                  |
| ----------- | --------- | ------------------------------------------- |
| Node.js     | v20.13.1+ | Runtime da aplicação e execução do ambiente |
| npm         | 10.5.2+   | Gerenciamento de pacotes                    |
| Cypress     | 15.21.1   | Framework de automação E2E                  |
| JavaScript  | ES6+      | Linguagem principal                         |
| ESLint      | v10.9.1   | Qualidade e padronização de código          |
| Mochawesome | ^8.0.1    | Relatórios HTML/JSON                        |

---

## 🏗 Arquitetura

A estrutura foi pensada em camadas para manter a manutenção simples e os testes mais legíveis.

```text
┌──────────────────────────────────────────────────────────────┐
│                     CAMADA DE TESTES                         │
│  cypress/e2e/login/loginUser.cy.js                           │
│  cypress/e2e/cadastro/cadastro.cy.js                        │
│  cypress/e2e/home/home.cy.js                                 │
└──────────────────────┬───────────────────────────────────────┘
                       │
┌──────────────────────▼───────────────────────────────────────┐
│                      PAGE OBJECT MODEL                       │
│  cypress/pages/LoginPage.js                                  │
│  Encapsula elementos, ações e validações da página           │
└──────────────────────┬───────────────────────────────────────┘
                       │
┌──────────────────────▼───────────────────────────────────────┐
│                  SUPORTE E UTILITÁRIOS                       │
│  commands.js | e2e.js | helpers.js | fixtures               │
│  Reuso, dados de teste e configuração global                 │
└──────────────────────┬───────────────────────────────────────┘
                       │
┌──────────────────────▼───────────────────────────────────────┐
│                        CYPRESS API                            │
│  Interação com a interface, navegação e assertions           │
│  relatórios, screenshots, validações e evidências            │
└──────────────────────────────────────────────────────────────┘
```

### Camadas principais

- Testes: separados por funcionalidade e módulo
- Page Objects: encapsulam interações e estados da UI
- Fixtures: dados estáticos reutilizáveis
- Custom Commands: comandos para fluxos repetidos
- Utilitários: funções auxiliares para suporte e geração de dados
- Relatórios: evidências de execução e diagnóstico de falhas

---

## 📁 Estrutura do projeto

```text
projetocypressteste01/
├── cypress/
│   ├── e2e/
│   │   ├── login/
│   │   │   └── loginUser.cy.js
│   │   ├── cadastro/
│   │   │   └── cadastro.cy.js
│   │   └── home/
│   │       └── home.cy.js
│   │
│   ├── fixtures/
│   │   └── login.json
│   │
│   ├── pages/
│   │   └── LoginPage.js
│   │
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│   │
│   ├── utils/
│   │   └── helpers.js
│   │
│   └── schemas/
│
├── docs/
│   ├── casos-de-teste/
│   └── cenarios-de-teste/
│
├── reports/
├── screenshots/
├── videos/
├── .gitignore
├── .eslintrc.js
├── cypress.config.js
├── cypress.env.example.json
├── cypress.env.json
├── eslint.config.js
├── package.json
├── package-lock.json
├── PROJECT_SUMMARY.md
├── QUICK_START.md
├── README.md
├── LICENSE
└── .env
```

### Organização por responsabilidade

| Diretório           | Finalidade                                      |
| ------------------- | ----------------------------------------------- |
| `cypress/e2e/`      | Testes organizados por módulo                   |
| `cypress/pages/`    | Page Object Model e encapsulamento da interface |
| `cypress/fixtures/` | Dados estáticos e reutilizáveis                 |
| `cypress/support/`  | Comandos globais e configuração central         |
| `cypress/utils/`    | Auxiliares, geração de dados e utilidades       |
| `docs/`             | Casos de teste, cenários e documentação         |
| `reports/`          | Relatórios gerados pela execução                |
| `screenshots/`      | Evidências visuais de falhas                    |
| `videos/`           | Gravações de execução                           |

---

## 🧪 Cobertura de testes

A base de testes já contempla cenários relevantes para validar autenticação, regras de cadastro e navegação da aplicação.

### 1) Módulo de Login

| ID      | Cenário                                  | Status |
| ------- | ---------------------------------------- | ------ |
| CTN-001 | Validar página de login e seus elementos | ✅     |
| CTN-002 | Login sem preencher email e senha        | ✅     |
| CTN-003 | Login com credenciais inválidas          | ✅     |
| CTN-004 | Login válido                             | ✅     |

### 2) Módulo de Cadastro

| ID      | Cenário                              | Status |
| ------- | ------------------------------------ | ------ |
| CTN-001 | Exibir campos e seções do formulário | ✅     |
| CTN-002 | Cadastrar usuário válido             | ✅     |
| CTN-003 | CPF já cadastrado                    | ✅     |
| CTN-004 | Cadastro sem nome                    | ✅     |
| CTN-005 | Cadastro sem nome e CPF              | ✅     |
| CTN-006 | CPF inválido                         | ✅     |
| CTN-007 | Email já cadastrado                  | ✅     |
| CTN-008 | Endereço obrigatório                 | ✅     |
| CTN-009 | CEP obrigatório                      | ✅     |
| CTN-010 | Email obrigatório                    | ✅     |
| CTN-011 | Validar mensagem de CPF inválido     | ✅     |

### 3) Módulo Home

| ID      | Cenário                          | Status |
| ------- | -------------------------------- | ------ |
| CTN-001 | Validar cabeçalho e navegação    | ✅     |
| CTN-002 | Validar corpo da página inicial  | ✅     |
| CTN-003 | Validar campanhas e notícias     | ✅     |
| CTN-004 | Validar consulta de medicamentos | ✅     |
| CTN-005 | Validar seção de funcionalidades | ✅     |
| CTN-006 | Validar card de criação de conta | ✅     |

### Cobertura aplicada

- validação visual de componentes
- mensagens de erro e feedback ao usuário
- regras de obrigatoriedade e duplicidade
- autenticação bem-sucedida
- fluxo principal de navegação da plataforma

---

## ⚙️ Configuração e instalação

### Pré-requisitos

- Node.js v20.13.1+
- npm 10.5.2+
- Git (opcional, mas recomendado)

### Passo a passo

1. Clone o projeto:

```bash
cd projetocypressteste01
```

2. Instale as dependências:

```bash
npm install
```

3. Verifique o ambiente:

```bash
npx cypress --version
npm run lint --help
```

4. Configure o arquivo local de ambiente, se necessário:

```bash
copy cypress.env.example.json cypress.env.json
```

> Importante: o arquivo `cypress.env.json` não deve ser versionado com credenciais reais.

### Configuração principal

O arquivo `cypress.config.js` centraliza parâmetros como:

- URL base da aplicação
- viewport padrão
- timeout de ações
- relatório Mochawesome
- screenshot em falhas
- gravação de vídeo

```javascript
module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:5173",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    reporter: "mochawesome",
    screenshotOnRunFailure: true,
  },
});
```

---

## ▶️ Execução

### Scripts disponíveis

```bash
# Executa todos os testes em modo headless
npm test

# Abre a interface gráfica do Cypress
npm run cypress:open

# Executa em modo headed
npm run test:headed

# Executa em Chrome
npm run test:chrome

# Executa em Firefox
npm run test:firefox

# Executa em Edge
npm run test:edge

# Executa somente testes de login
npm run test:login

# Gera relatório após execução
npm run test:report

# Valida lint do projeto
npm run lint

# Corrige problemas detectados automaticamente
npm run lint:fix
```

### Exemplos práticos

```bash
npx cypress run --spec "cypress/e2e/login/loginUser.cy.js"
```

```bash
npx cypress run --spec "cypress/e2e/cadastro/cadastro.cy.js"
```

```bash
npx cypress run --spec "cypress/e2e/home/home.cy.js"
```

### Observações

- modo headless é ideal para CI/CD
- modo interativo é útil para desenvolvimento
- screenshots são capturados em falhas para facilitar o diagnóstico
- relatórios em HTML e JSON já estão configurados

---

## 🧩 Boas práticas

### Page Object Model (POM)

O projeto utiliza POM para separar lógica de teste da lógica da interface, deixando os testes mais limpos, legíveis e fáceis de manter.

```javascript
class LoginPage {
  get emailInput() {
    return cy.get('[name="email"]');
  }

  get senhaInput() {
    return cy.get('[name="senha"]');
  }

  visitarLogin() {
    cy.visit("/");
  }

  fazerLogin(email, senha) {
    this.emailInput.clear().type(email);
    this.senhaInput.clear().type(senha);
    cy.contains("Entrar").click();
  }
}

export default new LoginPage();
```

### Fixtures

Os dados de teste ficam centralizados em fixtures para reduzir repetição e garantir organização.

### Custom Commands

Comandos reutilizáveis ficam em `cypress/support/commands.js` para evitar duplicação de ações recorrentes.

### Padrão AAA

Os testes seguem o padrão Arrange, Act, Assert, deixando o fluxo do cenário explícito e mais fácil de entender.

### Boas práticas adotadas

- ✅ nomes claros para testes e funções
- ✅ validações explícitas da interface
- ✅ reaproveitamento de dados e ações
- ✅ ausência de sleeps desnecessários
- ✅ uso de seletores mais estáveis
- ✅ screenshots em falhas
- ✅ ESLint para manter qualidade do código

---

## 📊 Relatórios

O projeto já está preparado para produção de relatórios com Mochawesome.

### Geração

```bash
npm run test:report
```

### Resultado

Os artefatos são salvos em `reports/` em formato HTML e JSON, sendo úteis para:

- análise visual dos resultados
- identificação de falhas e tempo de execução
- documentação de evidências de teste

---

## ✅ Checklist de setup

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

## 📌 Observação final

Este projeto representa uma base sólida de estudo e referência para automação de testes com Cypress. Ele foi estruturado com foco em aprendizagem, organização e boas práticas de qualidade, e pode ser usado como modelo para projetos mais robustos e profissionais no futuro.

A intenção é que ele funcione não apenas como um laboratório de aprendizado, mas também como um material bem apresentado e valioso como referência para quem deseja evoluir em automação E2E.

---

## 📝 Licença

MIT - Sinta-se livre para usar, modificar e distribuir este projeto.

---

<p align="center">
  <strong>Projeto criado para estudo, aprendizado e referência em automação de testes com Cypress.</strong>
</p>
