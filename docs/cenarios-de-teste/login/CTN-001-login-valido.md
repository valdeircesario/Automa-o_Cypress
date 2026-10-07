# CTN-001 — Validar tela de login e retorno à home

**Caso de Teste:** CT-001

**Objetivo:** Validar a abertura da tela de login, seus elementos principais e o retorno à home.

**Prioridade:** Alta

**Tipo:** E2E - End-to-End

**Automatizado:** ✅ Sim

---

## Dados de Teste

| Campo          | Valor                         |
| -------------- | ----------------------------- |
| URL            | `Cypress.config("baseUrl")`   |
| Estado inicial | Home, usuário não autenticado |
| Credenciais    | Não utilizadas neste cenário  |

---

## Passos

1. Acessar a home com `cy.visit("/")`.
2. Clicar no botão `Entrar`.
3. Validar `SISC Saúde`, `Área do Paciente` e a descrição.
4. Validar os campos `[name="email"]` e `[name="senha"]`.
5. Validar `Esqueci minha senha`, `Não tem uma conta?` e `Cadastre-se aqui`.
6. Clicar em `← Voltar ao início`.

---

## Resultado Esperado

- A tela de login é exibida com todos os elementos esperados.
- A home retorna a ser exibida após o clique em `← Voltar ao início`.
- O botão `Cadastre-se` e o conteúdo principal da home permanecem visíveis.

---

## Critérios de Aceitação

- ✅ A tela de login é carregada sem erro.
- ✅ Os campos de email e senha estão visíveis.
- ✅ O retorno para a home funciona.

---

## Evidência

Screenshot: `screenshots/loginUser01.png` e `screenshots/loginUser01-1.png`

---

## Observações

- Este cenário valida a interface e a navegação, não a autenticação.
- A autenticação válida é coberta pelo CTN-006.
