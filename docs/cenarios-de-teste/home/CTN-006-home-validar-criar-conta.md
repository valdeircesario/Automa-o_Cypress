# CTN-006 — Validar Card de Criar Conta

**Caso de Teste:** CT-HOME-006

**Objetivo:** Validar que o card de criar conta exibe corretamente o conteúdo e permite abrir o formulário de cadastro com sucesso.

**Prioridade:** Alta

**Tipo:** E2E - End-to-End (Funcional + Interativo)

**Automatizado:** ✅ Sim

---

## Dados de Teste

| Campo | Valor |
|-------|-------|
| URL | http://localhost:5173/ |
| Estado do Usuário | Não autenticado |
| Container | `.to-teal-600` |
| Botão Principal | "Criar Conta Gratuita" |
| Modal | "Cadastro de Paciente" |

---

## Passos

1. Acessar a URL `http://localhost:5173/`
2. Fazer scroll até o card de criar conta (elemento `.to-teal-600`)
3. Validar presença do container com gradiente teal
4. Validar presença do título "Pronto para começar?"
5. Validar presença da descrição "Cadastre-se agora e tenha acesso completo ao seu histórico de saúde"
6. Validar presença do botão "Criar Conta Gratuita" com seletor `.to-teal-600 > .mx-auto > .inline-flex`
7. Clicar no botão "Criar Conta Gratuita"
8. Validar que o modal de cadastro é aberto
9. Validar presença do título "Cadastro de Paciente" no modal
10. Validar presença do botão "Criar Conta" com seletor `.gap-2`
11. Validar presença do link "← Voltar ao início" com seletor `.max-w-2xl > :nth-child(3) > .text-sm`
12. Clicar no link "Voltar ao início"
13. Validar retorno à página home com card teal visível

---

## Resultado Esperado

- ✅ Card de criar conta é renderizado com gradiente teal
- ✅ Título e descrição são visíveis e bem estruturados
- ✅ Botão "Criar Conta Gratuita" é clicável
- ✅ Modal de cadastro abre com sucesso
- ✅ Formulário "Cadastro de Paciente" contém campos obrigatórios
- ✅ Botão "Criar Conta" está presente no formulário
- ✅ Link "Voltar ao início" fecha o modal corretamente
- ✅ Usuário retorna à página home após fechar

---

## Critérios de Aceitação

- ✅ Card possui gradiente visual atrativo
- ✅ Modal abre sem delay perceptível (< 500ms)
- ✅ Formulário é responsivo em diferentes resoluções
- ✅ Campos de formulário são validados antes de submissão
- ✅ Não há erros de console durante abertura/fechamento
- ✅ Link "Voltar" não submete dados incompletos

---

## Fluxo de Teste

```
Acessar Home → Scroll → Validar Card → Clicar Botão → Modal Cadastro Abre → Validar Formulário → Clicar Voltar → Retornar Home
```

---

## Evidência

### Screenshots Capturados

| Screenshot | Descrição | Path |
|------------|-----------|------|
| Card Criar Conta | Card com gradiente teal na home | `screenshots/home/CTN-006-card-criar-conta.png` |
| Título Card | Título Pronto para começar? | `screenshots/home/CTN-006-titulo-card.png` |
| Descrição Card | Descrição Cadastre-se agora e tenha acesso... | `screenshots/home/CTN-006-descricao-card.png` |
| Botão Principal | Botão Criar Conta Gratuita | `screenshots/home/CTN-006-botao-criar-conta.png` |
| Hover Botão | Estado hover do botão | `screenshots/home/CTN-006-botao-hover.png` |
| Modal Aberto | Modal de cadastro de paciente aberto | `screenshots/home/CTN-006-modal-cadastro.png` |
| Formulário | Campos de formulário de cadastro | `screenshots/home/CTN-006-formulario-cadastro.png` |
| Botão Criar | Botão Criar Conta no formulário | `screenshots/home/CTN-006-botao-criar-formulario.png` |
| Link Voltar | Link Voltar ao início | `screenshots/home/CTN-006-link-voltar.png` |
| Retorno Home | Página home após fechar modal | `screenshots/home/CTN-006-retorno-home.png` |
| Modal Mobile | Modal em viewport mobile | `screenshots/home/CTN-006-modal-mobile.png` |

---

## Observações

- Este é um CTA (Call-To-Action) crítico para aquisição de usuários
- Modal deve ser intuitivo e não intimidador
- Deve haver clara opção de retorno sem perda de dados
- Formulário deve solicitar informações essenciais apenas
- Recomendado testar com dados válidos e inválidos
- Verificar validação de campos (email, senha, etc)
