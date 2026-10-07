# CTN-003 — Preencher cadastro com dados válidos

**Caso de Teste:** CT-002-03

**Objetivo:** Validar que um cadastro preenchido com dados válidos é aceito e conclui com sucesso.

**Prioridade:** Alta

**Tipo:** E2E - End-to-End

**Automatizado:** ✅ Sim

---

## Dados de Teste

| Campo              | Valor                       |
| ------------------ | --------------------------- |
| Nome               | Gerado por `gerarUsuario()` |
| CPF                | Gerado por `gerarCPF()`     |
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
2. Preencher todos os campos com dados válidos
3. Clicar no botão `Criar Conta`
4. Aguardar a resposta do sistema

---

## Resultado Esperado

- ✅ O formulário aceita todos os valores informados
- ✅ O cadastro é enviado corretamente
- ✅ A mensagem `Cadastro realizado com sucesso!` é exibida
- ✅ A navegação para a próxima etapa ou página do paciente é concluída

---

## Critérios de Aceitação

- ✅ O cadastro com dados válidos é bem-sucedido
- ✅ Nenhuma mensagem de erro aparece
- ✅ O fluxo de confirmação do sistema é exibido corretamente

---

## Fluxo de Teste

```
Abrir Cadastro → Preencher Dados Válidos → Clicar em Criar Conta → Validar Sucesso
```

---

## Evidência

Screenshot: `screenshots/cadastro/CTN-003-cadastro-preencher-dados-validos.png`

---

## Observações

- Este é o cenário happy path do cadastro.
- A geração dinâmica de dados evita colisões e facilita a execução repetida do teste.
