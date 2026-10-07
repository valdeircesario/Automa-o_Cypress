# CTN-004 — Login sem preencher usuário

**Caso de Teste:** CT-001

**Objetivo:** Validar que o sistema exige o preenchimento do campo de email.

**Prioridade:** Alta

**Tipo:** E2E - End-to-End

**Automatizado:** ✅ Sim

---

## Dados de Teste

| Campo | Valor               |
| ----- | ------------------- |
| Email | Vazio               |
| Senha | Vazio no spec atual |

---

## Passos

1. Acessar a home e clicar em `Entrar`.
2. Deixar `[name="email"]` vazio.
3. Deixar `[name="senha"]` vazio.
4. Clicar em `Entrar`.

---

## Resultado Esperado

- O formulário não é enviado
- A mensagem `Email é obrigatório` é exibida.
- O formulário não é autenticado.
- O usuário permanece no fluxo de login.

---

## Critérios de Aceitação

- ✅ A validação do email é executada.
- ✅ A mensagem corresponde ao campo email.
- ✅ O formulário não concede acesso.

---

## Observações

- O teste atual também valida `Senha é obrigatória` no mesmo fluxo.
- Para isolamento completo, recomenda-se um `it()` exclusivo para email vazio.
