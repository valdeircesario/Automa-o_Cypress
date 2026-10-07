# CT-001 — Login do paciente

## Objetivo

Validar a apresentação, a validação dos campos e a autenticação do paciente na tela de login acessada a partir da home.

## Escopo

Este caso cobre:

- Abertura e apresentação da tela de login
- Retorno para a home
- Validação de email e senha obrigatórios
- Rejeição de credenciais inválidas
- Autenticação com credenciais válidas

## Pré-condições

- A aplicação está disponível em `Cypress.config("baseUrl")`.
- A home pode ser acessada por `cy.visit("/")`.
- Os perfis `user` e `loginInvalido` estão configurados no `cypress.env.json` local.
- O arquivo `cypress.env.json` não deve ser versionado.

## Cenários

| ID      | Título                                  | Automação                                   |
| ------- | --------------------------------------- | ------------------------------------------- |
| CTN-001 | Validar tela de login e retorno à home  | Implementado                                |
| CTN-002 | Validar login com credenciais inválidas | Implementado                                |
| CTN-003 | Validar login com usuário inexistente   | Documentado; não separado no spec atual     |
| CTN-004 | Validar login sem email                 | Coberto no spec atual junto com senha vazia |
| CTN-005 | Validar login sem senha                 | Documentado; teste isolado recomendado      |
| CTN-006 | Validar login com credenciais válidas   | Implementado                                |

## Critérios de entrada

- Página inicial carregada.
- Botão `Entrar` visível.
- Usuários de teste disponíveis no ambiente.

## Resultado esperado geral

- O acesso é concedido somente para credenciais válidas.
- Credenciais inválidas geram `Email ou senha inválidos`.
- Campos vazios geram `Email é obrigatório` e `Senha é obrigatória`.
- Login válido exibe `Portal do Paciente` e `Campanhas Ativas`.
- Falhas mantêm o usuário no fluxo de autenticação.

## Dependências

- `cypress/e2e/login/loginUser.cy.js`
- `cypress/support/commands.js`
- `cypress.env.json` local
- Ambiente da aplicação disponível

## Execução

```bash
npx cypress run --spec "cypress/e2e/login/loginUser.cy.js"
```

## Prioridade

Alta - funcionalidade crítica de autenticação.

## Observações

- Os campos reais são identificados por `[name="email"]` e `[name="senha"]`.
- O comando `cy.loginComPerfil("user")` carrega credenciais válidas.
- O comando `cy.loginComPerfil("loginInvalido")` carrega credenciais inválidas.
- Os testes devem ser independentes; dados persistentes devem ser preparados antes da execução.
