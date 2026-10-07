# CTN-006 — Login com credenciais válidas

**Caso de Teste:** CT-001

**Objetivo:** Validar que um paciente com credenciais válidas consegue acessar o portal.

**Prioridade:** Alta

**Tipo:** E2E - End-to-End

**Automatizado:** ✅ Sim

---

## Dados de Teste

| Campo  | Valor                             |
| ------ | --------------------------------- |
| Perfil | `user`                            |
| Email  | Configurado em `cypress.env.json` |
| Senha  | Configurada em `cypress.env.json` |

---

## Passos

1. Acessar a home.
2. Clicar no botão `Entrar`.
3. Executar `cy.loginComPerfil("user")`.
4. Clicar no botão `Entrar`.
5. Aguardar o carregamento do portal.

---

## Resultado Esperado

- O login é concluído com sucesso.
- A aplicação exibe `Portal do Paciente`.
- A seção `Campanhas Ativas` fica visível.
- O usuário acessa a área protegida sem mensagem de erro.

---

## Critérios de Aceitação

- ✅ O perfil válido é aceito.
- ✅ O portal do paciente é carregado.
- ✅ O conteúdo principal da área autenticada é exibido.
- ✅ Nenhuma mensagem de credencial inválida aparece.

---

## Evidência

Screenshot: `screenshots/loginUser04.png`

---

## Observações

- As credenciais são carregadas pelo comando `cy.loginComPerfil("user")`.
- O email e a senha reais não devem ser escritos no arquivo `.cy.js` nem versionados.
