# CTN-005 — Login sem preencher senha

**Caso de Teste:** CT-001

**Objetivo:** Validar que o sistema exige o preenchimento do campo de senha.

**Prioridade:** Alta

**Tipo:** E2E - End-to-End

**Automatizado:** ✅ Sim

---

## Dados de Teste

| Campo | Valor               |
| ----- | ------------------- |
| Email | Vazio no spec atual |
| Senha | Vazia               |

---

## Passos

1. Acessar a home e clicar em `Entrar`.
2. Deixar `[name="email"]` vazio.
3. Deixar `[name="senha"]` vazio.
4. Clicar em `Entrar`.

---

## Resultado Esperado

- O formulário não é enviado
- A mensagem `Senha é obrigatória` é exibida.
- O formulário não é autenticado.
- O usuário permanece no fluxo de login.

---

## Critérios de Aceitação

- ✅ A validação da senha é executada.
- ✅ A mensagem corresponde ao campo senha.
- ✅ O formulário não concede acesso.

---

## Observações

- O teste atual também valida `Email é obrigatório` no mesmo fluxo.
- Para isolamento completo, recomenda-se um `it()` exclusivo para senha vazia.
