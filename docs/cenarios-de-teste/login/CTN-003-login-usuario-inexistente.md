# CTN-003 — Login com usuário inexistente

**Caso de Teste:** CT-001

**Objetivo:** Documentar a rejeição de login quando o email não existe no sistema.

**Prioridade:** Alta

**Tipo:** E2E - End-to-End

**Automatizado:** ✅ Sim

---

## Dados de Teste

| Campo | Valor                                            |
| ----- | ------------------------------------------------ |
| Email | Email inexistente configurado no perfil de teste |
| Senha | Senha qualquer                                   |

---

## Passos

1. Acessar a home e clicar em `Entrar`.
2. Informar um email inexistente no campo `[name="email"]`.
3. Informar uma senha no campo `[name="senha"]`.
4. Clicar em `Entrar`.

---

## Resultado Esperado

- O login falha
- A mensagem genérica `Email ou senha inválidos` é exibida.
- O usuário não acessa o portal.

---

## Critérios de Aceitação

- ✅ A autenticação é rejeitada
- ✅ A mensagem não revela se o email existe.
- ✅ O acesso protegido não é concedido.

---

## Observações

- Este cenário está documentado, mas não possui um `it()` separado no spec atual.
- O cenário CTN-002 cobre a mesma regra com o perfil `loginInvalido`.
