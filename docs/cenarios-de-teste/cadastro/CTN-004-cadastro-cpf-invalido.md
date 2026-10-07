# CTN-004 — Validar CPF inválido

**Caso de Teste:** CT-002-06

**Objetivo:** Garantir que o sistema rejeita CPF com estrutura inválida ou dígitos incorretos.

**Prioridade:** Alta

**Tipo:** E2E - End-to-End

**Automatizado:** ✅ Sim

---

## Dados de Teste

| Campo              | Valor                       |
| ------------------ | --------------------------- |
| Nome               | Gerado por `gerarUsuario()` |
| CPF                | 123.456.789-00              |
| CNS                | Gerado por `gerarCNS()`     |
| Data de Nascimento | 1990-01-01                  |
| Endereço           | Rua Exemplo, 123            |
| CEP                | 12345-678                   |
| Telefone           | (11) 91234-5678             |
| Email              | Gerado por `gerarEmail()`   |
| Senha              | Senha@123                   |
| Confirmar Senha    | Senha@123                   |

---

## Passos

1. Abrir a tela de cadastro
2. Preencher os campos válidos
3. Informar um CPF inválido
4. Clicar em `Criar Conta`
5. Verificar a mensagem de erro exibida

---

## Resultado Esperado

- ✅ O sistema exibe a mensagem `CPF inválido`
- ✅ O cadastro não é concluído
- ✅ O usuário permanece na tela para correção

---

## Critérios de Aceitação

- ✅ CPF inválido é rejeitado
- ✅ Mensagem objetiva e específica aparece na interface
- ✅ Não há criação de registro com dados inválidos

---

## Fluxo de Teste

```
Abrir Cadastro → Informar CPF Inválido → Clicar em Criar Conta → Validar Mensagem de Erro
```

---

## Evidência

Screenshot: `screenshots/cadastro/CTN-004-cadastro-cpf-invalido.png`

---

## Observações

- Este teste valida uma regra crítica de integridade do cadastro.
- O sistema deve respeitar a validação do dígito verificador do CPF.
