# CTN-001 — Validar tela de cadastro

**Caso de Teste:** CT-002-01

**Objetivo:** Validar que a página de cadastro é exibida corretamente a partir da home e que todos os elementos principais da tela estão disponíveis.

**Prioridade:** Alta

**Tipo:** E2E - End-to-End

**Automatizado:** ✅ Sim

---

## Dados de Teste

| Campo             | Valor                           |
| ----------------- | ------------------------------- |
| URL               | http://localhost:5173/          |
| Estado do Usuário | Não autenticado                 |
| Ação inicial      | Abrir a home e acessar cadastro |

---

## Passos

1. Acessar a URL `http://localhost:5173/`
2. Validar que a página home foi carregada
3. Clicar no botão `Cadastre-se`
4. Verificar se o formulário de cadastro é exibido
5. Validar presença dos textos principais e campos obrigatórios

---

## Resultado Esperado

- ✅ O formulário de cadastro é exibido ao clicar em `Cadastre-se`
- ✅ Os textos `SISC`, `Cadastro de Paciente` e a descrição aparecem na tela
- ✅ As seções `Dados Pessoais`, `Endereço` e `Segurança` são exibidas
- ✅ Os campos `Nome Completo`, `CPF`, `CNS`, `Data de Nascimento`, `Endereço Completo`, `CEP`, `Telefone`, `Email`, `Senha` e `Confirmar Senha` estão visíveis
- ✅ O botão `Criar Conta` está disponível

---

## Critérios de Aceitação

- ✅ A tela de cadastro é carregada sem erros
- ✅ Todos os elementos visuais da tela estão presentes
- ✅ A navegação da home para cadastro funciona corretamente

---

## Fluxo de Teste

```
Acessar Home → Clicar em Cadastre-se → Validar Tela de Cadastro → Verificar Campos
```

---

## Evidência

Screenshot: `screenshots/cadastro/CTN-001-cadastro-validar-tela.png`

---

## Observações

- Este cenário valida a base da funcionalidade.
- Ele deve ser executado em cada release para garantir que a interface do cadastro não foi quebrada.
