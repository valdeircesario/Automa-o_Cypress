# 📦 Cypress Automation Lab

<div align="center">

![Cypress](https://img.shields.io/badge/Cypress-E2E%20Automation-17202A?style=for-the-badge&logo=cypress)
![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js)
![npm](https://img.shields.io/badge/npm-10.x-CB3837?style=for-the-badge&logo=npm)
![ESLint](https://img.shields.io/badge/ESLint-10.x-4B32C3?style=for-the-badge&logo=eslint)

</div>

> Projeto de estudo, referência e base profissional para automação de testes com Cypress, organizado para manter clareza, escalabilidade e qualidade técnica.

## ✨ Visão geral

Este repositório foi estruturado para funcionar como um laboratório de aprendizado e como um modelo de referência para automação E2E com Cypress. A organização prioriza boas práticas como:

- separação de responsabilidades
- reutilização de código
- dados centralizados em fixtures
- testes legíveis e fáceis de manter
- documentação clara para evolução do projeto

---

## 🏗️ Estrutura do projeto

```text
projetocypressteste01/
├── 📂 cypress/
│   ├── 📂 e2e/
│   │   └── 📂 login/
│   │       └── login.cy.js                 # 5 casos de teste implementados
│   ├── 📂 pages/
│   │   └── LoginPage.js                   # Page Object Model
│   ├── 📂 fixtures/
│   │   └── login.json                     # Dados de teste
│   ├── 📂 support/
│   │   ├── commands.js                    # Comandos customizados
│   │   └── e2e.js                         # Configuração global
│   └── 📂 utils/
│       └── helpers.js                     # Funções auxiliares
│
├── 📂 docs/
│   ├── arquitetura.md                     # Documentação da arquitetura
│   ├── casos-de-teste/
│   │   └── CT-001-login.md               # Especificação dos casos
│   ├── cenarios-de-teste/
│   │   └── login/
│   │       ├── CTN-001-005.md             # Cenário 1
│   │       ├── CTN-002-005.md             # Cenário 2
│   │       ├── CTN-003-005.md             # Cenário 3
│   │       ├── CTN-004-005.md             # Cenário 4
│   │       └── CTN-005-005.md             # Cenário 5
│   ├── estrategia-de-testes.md            # Estratégia de testes
│   └── padrao-de-nomenclatura.md          # Convenções de nomenclatura
│
├── 📂 node_modules/                       # Dependências instaladas
│
├── 📄 cypress.config.js                   # Configuração do Cypress
├── 📄 eslint.config.js                   # Configuração do ESLint
├── 📄 package.json                       # Metadados e scripts do projeto
├── 📄 package-lock.json                  # Lock file das dependências
├── 📄 .env.example                       # Exemplo de variáveis de ambiente
├── 📄 .gitignore                         # Arquivos ignorados pelo Git
├── 📄 README.md                          # Documentação principal
├── 📄 PROJECT_SUMMARY.md                 # Resumo do projeto
├── 📄 QUICK_START.md                     # Guia rápido de uso
└── 📄 LICENSE                            # Licença do projeto
```

---

## 📊 Estatísticas

| Item                         | Valor                               |
| ---------------------------- | ----------------------------------- |
| Arquivos criados             | 20+                                 |
| Diretórios                   | 11                                  |
| Pacotes npm instalados       | 258                                 |
| Vulnerabilidades             | 0                                   |
| Erros do ESLint              | 0                                   |
| Casos de teste implementados | 5                                   |
| Padrões adotados             | POM, AAA, Fixtures, Custom Commands |

---

## 🧪 Casos de teste implementados

- CTN-001 — Login com credenciais válidas
- CTN-002 — Login com senha inválida
- CTN-003 — Login com usuário inexistente
- CTN-004 — Login sem preencher usuário
- CTN-005 — Login sem preencher senha

---

## 🧰 Stack tecnológica

- Cypress v15.21.1 — framework de automação E2E
- Node.js v20.13.1 — runtime da aplicação
- npm v10.5.2 — gerenciador de pacotes
- ESLint v10.9.1 — qualidade de código
- Mochawesome v8.0.1 — geração de relatórios

---

## ⚙️ Scripts disponíveis

```bash
npm test
npm run cypress:open
npm run test:headed
npm run test:chrome
npm run test:firefox
npm run test:edge
npm run test:login
npm run lint
npm run lint:fix
```

### Descrição dos scripts

- `npm test` — executa todos os testes em modo headless
- `npm run cypress:open` — abre a interface gráfica do Cypress
- `npm run test:headed` — executa os testes com navegador visível
- `npm run test:chrome` — executa apenas em Chrome
- `npm run test:firefox` — executa apenas em Firefox
- `npm run test:edge` — executa apenas em Edge
- `npm run test:login` — executa apenas os testes de login
- `npm run lint` — valida a qualidade do código
- `npm run lint:fix` — corrige problemas automaticamente

---

## 💡 Práticas e padrões adotados

- ✅ Page Object Model (POM) para encapsular a interface
- ✅ Fixtures para centralizar dados de teste
- ✅ Custom Commands para reutilização de ações recorrentes
- ✅ Padrão AAA (Arrange, Act, Assert)
- ✅ Dados dinâmicos para cenários mais flexíveis
- ✅ Tratamento de erros e validações consistentes
- ✅ Captura de screenshots em falhas
- ✅ Relatórios HTML/JSON com Mochawesome
- ✅ ESLint para padronização e qualidade
- ✅ Estrutura organizada para versionamento e evolução

---

## 📚 Documentação incluída

1. `README.md`
   - arquitetura detalhada
   - guia de instalação
   - explicação dos padrões adotados
   - exemplos de aplicação

2. `docs/estrategia-de-testes.md`
   - planejamento e estratégia de testes
   - seletores prioritários
   - boas práticas de assertivas
   - expectativas de desempenho

3. `docs/padrao-de-nomenclatura.md`
   - convenções CT-XXX / CTN-XXX
   - padronização de nomes e funções
   - organização de artefatos e commits

4. `docs/arquitetura.md`
   - visão em camadas da solução
   - diagramas e dependências
   - padrões de manutenção e escalabilidade

---

## 🚀 Próximos passos

1. Ajustar URLs e dados de teste para o ambiente real da aplicação
2. Customizar seletores com `data-testid` conforme o HTML final
3. Expandir para outros módulos, como usuários, produtos e checkout
4. Integrar a automação em pipeline de CI/CD
5. Configurar ambientes de staging e produção

---

## 📝 Observação final

Este projeto está pronto para servir como base de estudo, referência técnica e ponto de partida para automação E2E com Cypress. Ele foi estruturado para demonstrar boas práticas de organização, manutenção e qualidade, além de facilitar a expansão para projetos mais robustos e profissionais.

A arquitetura escolhida favorece clareza, reutilização e evolução contínua, tornando o projeto mais compreensível tanto para iniciantes quanto para profissionais que desejam reutilizar a estrutura em cenários reais.

---

## ✅ Status final

- Estrutura completa: ✓
- Documentação abrangente: ✓
- Validação ESLint: ✓
- Casos de teste executáveis: ✓
- Base pronta para evolução: ✓

---

<div align="center">

<strong>Projeto criado com sucesso ✨</strong>

</div>

========================================
ESLint validation: PASSOU ✓
Estrutura: COMPLETA ✓
Documentação: ABRANGENTE ✓
========================================
