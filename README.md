# Projeto de Automação de Testes E2E com Cypress

[![Node.js](https://img.shields.io/badge/Node.js-v20.13.1-green)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-10.5.2-blue)](https://www.npmjs.com/)
[![Cypress](https://img.shields.io/badge/Cypress-15.21.1-blue)](https://www.cypress.io/)
[![ESLint](https://img.shields.io/badge/ESLint-v10.9.1-red)](https://eslint.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🎯 Visão Geral

Este projeto foi desenvolvido como uma base de estudo e referência para automação de testes E2E com Cypress e JavaScript. O objetivo principal é praticar boas práticas de qualidade, organização e manutenção em testes automatizados, ao mesmo tempo em que cria uma estrutura profissional e reutilizável para novos projetos.

A estrutura foi pensada para ser clara, escalável e didática, servindo tanto como material de aprendizado quanto como referência para outros projetos de automação.

### Propósito do projeto

- ✅ Aprender Cypress na prática
- ✅ Estruturar testes com organização e padronização
- ✅ Aplicar boas práticas de QA e automação
- ✅ Usar Page Object Model (POM) e arquitetura modular
- ✅ Criar um projeto fácil de evoluir e reutilizar

### Filosofia da solução

- Simplicidade na estrutura
- Clareza nos testes
- Reuso de código e dados
- Facilidade de manutenção
- Alto valor como referência acadêmica e profissional

---

## 🧭 Índice

1. [Objetivo](#-objetivo)
2. [Tecnologias](#-tecnologias)
3. [Arquitetura do Projeto](#-arquitetura-do-projeto)
4. [Estrutura de Diretórios](#-estrutura-de-diretórios)
5. [Casos de Teste Implementados](#-casos-de-teste-implementados)
6. [Configuração e Instalação](#-configuração-e-instalação)
7. [Execução dos Testes](#-execução-dos-testes)
8. [Padrões e Boas Práticas](#-padrões-e-boas-práticas)
9. [Relatórios](#-relatórios)
10. [Checklist de Setup](#-checklist-de-setup)

---

## 🎯 Objetivo

O projeto busca demonstrar uma automação de testes E2E com Cypress aplicada em cenários reais de navegação e validação de interface, incluindo autenticação, cadastro e navegação principal de uma aplicação web.

Além disso, a estrutura foi montada para ser fácil de entender e reaproveitar em outras jornadas de automação. Isso permite que o projeto funcione como uma referência útil para quem está aprendendo a automatizar testes com qualidade e organização.

### Princípios aplicados

- ✅ Escalabilidade: a estrutura permite expandir por módulos
- ✅ Manutenibilidade: foco em código legível e organizado
- ✅ Reuso:fixtures, commands e POM reduzem duplicação
- ✅ Robustez: uso de validações de UI e screenshots em falhas
- ✅ Didática: organização que favorece aprendizagem e referência

---

## 🛠 Tecnologias

| Tecnologia  | Versão    | Finalidade                                 |
| ----------- | --------- | ------------------------------------------ |
| Node.js     | v20.13.1+ | Runtime da aplicação e execução dos testes |
| npm         | 10.5.2+   | Gerenciamento de dependências              |
| Cypress     | 15.21.1   | Framework de automação E2E                 |
| JavaScript  | ES6+      | Linguagem principal                        |
| ESLint      | v10.9.1   | Padronização e qualidade de código         |
| Mochawesome | ^8.0.1    | Geração de relatórios HTML e JSON          |

---

## 🏗 Arquitetura do Projeto

A arquitetura do projeto foi organizada em camadas para manter os testes legíveis, reutilizáveis e fáceis de evoluir.

```text
┌─────────────────────────────────────────────────────────────┐
│                     CAMADA DE TESTES                        │
│  cypress/e2e/login/loginUser.cy.js                       │
│  cypress/e2e/cadastro/cadastro.cy.js                     │
│  cypress/e2e/home/home.cy.js                              │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                  PAGE OBJECT MODEL                         │
│  cypress/pages/LoginPage.js                               │
│  Encapsula elementos e ações da interface                  │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                SUPORTE E UTILITÁRIOS                      │
│  commands.js | e2e.js | helpers.js | fixtures             │
│  Reaproveitamento, configuração e dados de teste          │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                        CYPRESS API                         │
│  Interação com elementos, navegação, assertions e captura │
│  de evidências (screenshots e relatórios)                 │
└─────────────────────────────────────────────────────────────┘
```

### Camadas principais

- Testes: organização por funcionalidade e módulo
- Page Objects: encapsulam elementos e fluxos da interface
- Fixtures: dados reutilizáveis para cenários
- Custom Commands: ações repetidas e padrões compartilhados
- Utilitários: funções auxiliares para geração e suporte
- Relatórios: evidências de execução e análise de falhas

---

## 📁 Estrutura de Diretórios

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
└── LICENSE
```

### Justificativa da estrutura

| Diretório           | Finalidade                                      |
| ------------------- | ----------------------------------------------- |
| `cypress/e2e/`      | Armazena os testes automatizados por módulo     |
| `cypress/pages/`    | Encapsula elementos e ações das páginas (POM)   |
| `cypress/fixtures/` | Dados estáticos e reutilizáveis                 |
| `cypress/support/`  | Comandos personalizados e configurações globais |
| `cypress/utils/`    | Funções auxiliares e geração de dados           |
| `docs/`             | Documentação de casos, cenários e estratégias   |
| `reports/`          | Relatórios gerados pela execução                |
| `screenshots/`      | Evidências visuais de falhas                    |
| `videos/`           | Gravações de execução                           |

---

## 🧪 Casos de Teste Implementados

Este projeto já contém testes prontos para os principais fluxos da aplicação, com foco em estudo e validação prática do comportamento da interface.

### 1) Módulo Login

| ID      | Cenário                                     | Status |
| ------- | ------------------------------------------- | ------ |
| CTN-001 | Validar página de login e elementos da tela | ✅     |
| CTN-002 | Login sem preencher email e senha           | ✅     |
| CTN-003 | Login com email e/ou senha inválidos        | ✅     |
| CTN-004 | Login válido                                | ✅     |

Cobertura:

- Validação visual da tela de login
- Verificação de campos obrigatórios
- Mensagens de erro
- Fluxo de autenticação bem-sucedida
- Redirecionamento para a área do paciente

### 2) Módulo Cadastro

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

Cobertura:

- Validação de campos obrigatórios
- Regras de negócio de cadastro
- Mensagens de feedback para o usuário
- Cadastro com sucesso
- Prevenção de duplicidade

### 3) Módulo Home

| ID      | Cenário                          | Status |
| ------- | -------------------------------- | ------ |
| CTN-001 | Validar cabeçalho e navegação    | ✅     |
| CTN-002 | Validar corpo da página inicial  | ✅     |
| CTN-003 | Validar campanhas e notícias     | ✅     |
| CTN-004 | Validar consulta de medicamentos | ✅     |
| CTN-005 | Validar seção de funcionalidades | ✅     |
| CTN-006 | Validar card de criação de conta | ✅     |

Cobertura:

- Header e navegação principal
- Seções informativas da home
- Carrossel/landing de campanhas
- Consulta de medicamentos
- Funcionalidades principais da plataforma
- CTA para cadastro

---

## ⚙️ Configuração e Instalação

### Pré-requisitos

- Node.js v20.13.1+
- npm 10.5.2+
- Git (opcional, mas recomendado)

### Passo a passo

1. Clone ou abra o projeto localmente:

```bash
cd projetocypressteste01
```

2. Instale as dependências:

```bash
npm install
```

3. Verifique se o ambiente está funcionando:

```bash
npx cypress --version
npm run lint --help
```

4. Configure o arquivo de ambiente local, se necessário:

```bash
copy cypress.env.example.json cypress.env.json
```

> Importante: o arquivo `cypress.env.json` não deve ser versionado com credenciais reais.

### Arquivo de configuração principal

O projeto utiliza `cypress.config.js` para definir:

- URL base da aplicação
- resolução da viewport
- timeout padrão
- relatório Mochawesome
- screenshot em falhas
- gravação de vídeos

Exemplo de configuração:

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

## ▶️ Execução dos Testes

### Scripts disponíveis

```bash
# Executa todos os testes em modo headless
npm test

# Abre a interface gráfica do Cypress
npm run cypress:open

# Executa no navegador em modo headed
npm run test:headed

# Executa em Chrome
npm run test:chrome

# Executa em Firefox
npm run test:firefox

# Executa em Edge
npm run test:edge

# Executa apenas testes de login
npm run test:login

# Gera relatório após execução
npm run test:report

# Verifica lint do projeto
npm run lint

# Corrige problemas detectados automaticamente
npm run lint:fix
```

### Exemplos de uso

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

- A execução pode ser feita em modo headless para CI/CD ou em modo interativo para desenvolvimento.
- Screenshots são capturados em falhas para facilitar diagnóstico.
- O projeto já está preparado para geração de relatórios em HTML.

---

## 🧩 Padrões e Boas Práticas

### Page Object Model (POM)

O projeto utiliza POM para separar a lógica de teste da lógica de interface, deixando os testes mais legíveis e fáceis de manter.

Exemplo:

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

Os dados de teste são armazenados em fixtures para facilitar reutilização e organização.

### Custom Commands

Comandos reutilizáveis são criados em `cypress/support/commands.js` para reduzir repetição entre testes.

### Padrão AAA

Os testes seguem o padrão Arrange, Act, Assert, deixando a leitura clara e o raciocínio do cenário explícito.

### Boas práticas adotadas

- ✅ Nomeação clara para testes e funções
- ✅ Validações explícitas de UI
- ✅ Reuso de dados e ações
- ✅ Evitação de sleeps desnecessários
- ✅ uso de seletores estáveis e legíveis
- ✅ screenshots em cenários de falha
- ✅ ESLint para manter a qualidade do código

---

## 📊 Relatórios

O projeto já está configurado para gerar relatórios com Mochawesome.

### Comando para geração

```bash
npm run test:report
```

### Saída

Os relatórios são gerados em `reports/` em formato HTML e JSON, permitindo:

- análise visual dos resultados;
- identificação de falhas e tempo de execução;
- documentação das evidências de testes.

---

## ✅ Checklist de Setup

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

## 📌 Observação Final

Este projeto representa uma base sólida de estudo e referência para automação de testes com Cypress. Ele foi estruturado com foco em aprendizagem, organização e bons padrões de qualidade, e pode servir como modelo para projetos maiores e mais complexos no futuro.

A intenção é que, além de demonstrar conhecimento técnico, ele também funcione como um material profissional e bem organizado para quem deseja aprender, evoluir e reutilizar boas práticas em automação de testes.

---

## 📝 Licença

MIT - Sinta-se livre para usar, modificar e distribuir este projeto.

---

**Projeto criado para estudo, aprendizado e referência em automação de testes com Cypress.**
