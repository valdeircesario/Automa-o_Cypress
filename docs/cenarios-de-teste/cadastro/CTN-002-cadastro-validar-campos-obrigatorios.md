# CTN-002 — Validar campos obrigatórios do cadastro

**Caso de Teste:** CT-002-03

**Objetivo:** Verificar que os campos principais do formulário de cadastro são obrigatórios e que a validação aparece ao tentar enviar um formulário incompleto.

**Prioridade:** Alta

**Tipo:** E2E - End-to-End

**Automatizado:** ✅ Sim

---

## Dados de Teste

| Campo           | Valor |
| --------------- | ----- |
| Nome            | Vazio |
| CPF             | Vazio |
| CNS             | Vazio |
| Endereço        | Vazio |
| CEP             | Vazio |
| Email           | Vazio |
| Senha           | Vazia |
| Confirmar Senha | Vazia |

---

## Passos

1. Abrir o formulário de cadastro
2. Não preencher um ou mais campos obrigatórios
3. Clicar em `Criar Conta`
4. Observar as mensagens de validação exibidas

---

## Resultado Esperado

- ✅ Mensagens de erro são exibidas para campos obrigatórios
- ✅ O sistema impede o envio do formulário com campos vazios
- ✅ Cada campo apresenta feedback claro para o usuário

---

## Critérios de Aceitação

- ✅ Nenhum cadastro incompleto é aceito
- ✅ A mensagem de obrigatoriedade aparece na interface
- ✅ O usuário permanece na tela de cadastro para corrigir os dados

---

## Fluxo de Teste

```
Abrir Cadastro → Deixar Campos Vazios → Clicar em Criar Conta → Validar Mensagens de Obrigatoriedade
```

---

## Evidência

Screenshot: `screenshots/cadastro/CTN-002-cadastro-validar-campos-obrigatorios.png`

---

## Observações

- Este cenário cobre os principais gate checks de validação do formulário.
- Deve ser executado toda vez que houver alteração na regra de obrigatoriedade de campos.
