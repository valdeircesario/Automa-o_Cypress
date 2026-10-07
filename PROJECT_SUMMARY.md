# 📦 Cypress Automation Lab

> Projeto de estudo e referência em automação de testes com Cypress, organizado com boas práticas de manutenção, documentação e escalabilidade.

## 🌟 Visão geral

Este repositório foi estruturado para servir como base sólida para aprendizagem e desenvolvimento de automação E2E com Cypress, seguindo padrões profissionais como POM, fixtures, custom commands, organização por módulos e documentação técnica.

Ele foi pensado para ser:

- um laboratório de estudo
- uma referência para outras pessoas
- uma base reutilizável para projetos maiores
- um projeto organizado e legível para manutenção futura

---

## 🧱 Estrutura do projeto

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
├── 📄 .env.example                      # Exemplo de variáveis de ambiente
├── 📄 .gitignore                        # Arquivos ignorados pelo Git
├── 📄 README.md                         # Documentação principal
├── 📄 PROJECT_SUMMARY.md                # Resumo do projeto
└── 📄 LICENSE                           # Licença do projeto
```

---

## 📊 Estatísticas do projeto

| Item                         | Valor                               |
| ---------------------------- | ----------------------------------- |
| Arquivos criados             | 20+                                 |
| Diretórios                   | 11                                  |
| Pacotes npm instalados       | 258                                 |
| Vulnerabilidades             | 0                                   |
| Erros de ESLint              | 0                                   |
| Casos de teste implementados | 5                                   |
| Padrões adotados             | POM, AAA, Fixtures, Custom Commands |

---

## 🧪 Casos de teste implementados

- CTN-001: Login com credenciais válidas
- CTN-002: Login com senha inválida
- CTN-003: Login com usuário inexistente
- CTN-004: Login sem preencher usuário
- CTN-005: Login sem preencher senha

---

## 🛠️ Stack tecnológica

- Cypress v15.21.1 — framework de automação E2E
- Node.js v20.13.1 — runtime da aplicação
- npm v10.5.2 — gerenciador de pacotes
- ESLint v10.9.1 — qualidade e padronização do código
- Mochawesome v8.0.1 — geração de relatórios de execução

---

## 📋 Scripts disponíveis

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
- `npm run cypress:open` — abre a interface do Cypress
- `npm run test:headed` — executa os testes com navegador visível
- `npm run test:chrome` — executa apenas em Chrome
- `npm run test:firefox` — executa apenas em Firefox
- `npm run test:edge` — executa apenas em Edge
- `npm run test:login` — executa apenas os testes de login
- `npm run lint` — valida a qualidade do código com ESLint
- `npm run lint:fix` — corrige automaticamente problemas do ESLint

---

## ✨ Práticas e padrões adotados

- ✅ Page Object Model (POM) para encapsular a interface
- ✅ Fixtures para centralização de dados de teste
- ✅ Custom Commands para reutilização de ações recorrentes
- ✅ Padrão AAA (Arrange, Act, Assert)
- ✅ Geração dinâmica de dados para cenários variáveis
- ✅ Tratamento de erros e validação consistente
- ✅ Captura de screenshots em falhas
- ✅ Relatórios HTML/JSON com Mochawesome
- ✅ Validação de código com ESLint
- ✅ Estrutura pronta para controle com Git

---

## 📚 Documentação incluída

1. `README.md`
   - arquitetura detalhada
   - guia de instalação
   - explicação dos padrões adotados
   - exemplos de uso

2. `docs/estrategia-de-testes.md`
   - estratégia geral de automação
   - seletores prioritários
   - boas práticas de assertivas
   - expectativas de desempenho

3. `docs/padrao-de-nomenclatura.md`
   - convenções CT-XXX e CTN-XXX
   - padronização de variáveis e funções
   - formato de commits e organização de artefatos

4. `docs/arquitetura.md`
   - visão em camadas da solução
   - diagramas e dependências
   - padrões de escalabilidade e manutenção

---

## 🚀 Próximos passos

1. Ajustar URLs e dados de teste para o ambiente real da aplicação
2. Personalizar seletores com `data-testid` conforme o HTML final
3. Expandir para outros módulos, como usuários, produtos e checkout
4. Integrar a automação em pipeline de CI/CD
5. Configurar ambientes de staging e produção

---

## 📝 Observação final

Este projeto está pronto para ser usado como base de estudo, aprendizado e referência para automação de testes com Cypress. Ele foi estruturado para demonstrar boas práticas de organização, manutenção e qualidade, além de servir como ponto de partida para projetos mais robustos e profissionais.

A arquitetura adotada favorece clareza, reutilização e expansão contínua, tornando o código mais compreensível tanto para quem está começando quanto para quem precisa evoluir a automação em novos cenários.

---

## ✅ Status final

- Estrutura completa: ✓
- Documentação abrangente: ✓
- Validação ESLint: ✓
- Casos de teste executáveis: ✓
- Base pronta para evolução: ✓

========================================
Projeto criado com sucesso! ✨
ESLint validation: PASSOU ✓
Estrutura: COMPLETA ✓
Documentação: ABRANGENTE ✓
========================================
