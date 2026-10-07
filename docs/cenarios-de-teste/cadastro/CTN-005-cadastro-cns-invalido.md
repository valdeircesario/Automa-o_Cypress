# CTN-005 — Validar CNS inválido

**Caso de Teste:** CT-002-13

**Objetivo:** Garantir que o sistema rejeita CNS com tamanho ou estrutura inválida, mesmo quando possui 15 dígitos mas não atende à regra de validação.

**Prioridade:** Alta

**Tipo:** E2E - End-to-End

**Automatizado:** ✅ Sim

---

## Dados de Teste

| Campo              | Valor                                                |
| ------------------ | ---------------------------------------------------- |
| Nome               | Gerado por `gerarUsuario()`                          |
| CPF                | Gerado por `gerarCPF()`                              |
| CNS                | 78965412 (8 dígitos) ou valor de 15 dígitos inválido |
| Data de Nascimento | 1990-01-01                                           |
| Endereço           | Rua Exemplo, 123                                     |
| CEP                | 12345-678                                            |
| Telefone           | (11) 91234-5678                                      |
| Email              | Gerado por `gerarEmail()`                            |
| Senha              | Senha@123                                            |
| Confirmar Senha    | Senha@123                                            |

---

## Passos

1. Abrir a tela de cadastro
2. Preencher os campos válidos
3. Informar CNS inválido
4. Clicar em `Criar Conta`
5. Verificar a mensagem de erro visível

---

## Resultado Esperado

- ✅ O sistema detecta que o CNS é inválido
- ✅ A mensagem `CNS deve ter 15 dígitos` ou equivalente aparece na tela
- ✅ O cadastro não é concluído

---

## Critérios de Aceitação

- ✅ CNS fora do padrão é rejeitado
- ✅ Mensagem de erro específica é exibida
- ✅ O usuário consegue corrigir o valor sem perder os demais dados

---

## Fluxo de Teste

```
Abrir Cadastro → Informar CNS Inválido → Clicar em Criar Conta → Validar Mensagem de Erro
```

---

## Evidência

Screenshot: `screenshots/cadastro/CTN-005-cadastro-cns-invalido.png`

---

## Observações

- Este cenário é essencial para validar a regra de integridade do CNS.
- A regra deve ser revisada sempre que a política de números do CNS for alterada.
