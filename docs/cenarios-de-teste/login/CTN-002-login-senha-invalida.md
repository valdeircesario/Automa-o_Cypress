# CTN-002 — Login com credenciais inválidas

**Caso de Teste:** CT-001

**Objetivo:** Validar que o sistema rejeita credenciais inválidas e exibe uma mensagem genérica de autenticação.

**Prioridade:** Alta

**Tipo:** E2E - End-to-End

**Automatizado:** ✅ Sim

---

## Dados de Teste

| Campo  | Valor                             |
| ------ | --------------------------------- |
| Perfil | `loginInvalido`                   |
| Email  | Configurado em `cypress.env.json` |
| Senha  | Configurada em `cypress.env.json` |

---

## Passos

1. Acessar a home.
2. Clicar em `Entrar`.
3. Executar `cy.loginComPerfil("loginInvalido")`.
4. Clicar no botão `Entrar`.

---

## Resultado Esperado

- O login falha.
- A mensagem `Email ou senha inválidos` é exibida.
- O usuário não é autenticado nem acessa o portal.

---

## Critérios de Aceitação

- ✅ A autenticação é rejeitada.
- ✅ A mensagem esperada fica visível em até 15 segundos.
- ✅ O cenário não expõe credenciais no arquivo `.cy.js`.

---

## Observações

- Teste negativo automatizado no terceiro `it()` do spec.
- As credenciais são lidas do perfil local `loginInvalido`.
