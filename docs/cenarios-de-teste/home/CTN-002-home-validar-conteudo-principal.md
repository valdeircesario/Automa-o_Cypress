# CTN-002 — Validar Conteúdo Principal da Página Home

**Caso de Teste:** CT-HOME-002

**Objetivo:** Validar que o corpo da página home exibe corretamente o banner principal, textos descritivos e seções de estatísticas.

**Prioridade:** Alta

**Tipo:** E2E - End-to-End

**Automatizado:** ✅ Sim

---

## Dados de Teste

| Campo | Valor |
|-------|-------|
| URL | http://localhost:5173/ |
| Estado do Usuário | Não autenticado |
| Elemento-chave | Banner gradiente `.via-teal-600 > .relative` |

---

## Passos

1. Acessar a URL `http://localhost:5173/`
2. Aguardar o carregamento completo da página
3. Validar presença do banner gradiente com seletor `.via-teal-600 > .relative`
4. Validar presença do badge "Plataforma Pública de Saúde" com seletor `.relative > .rounded-full`
5. Validar presença do título "Sistema Integrado de Saúde do Cidadão" com seletor `.text-4xl`
6. Validar descrição contendo "Conectando pacientes, unidades de saúde..."
7. Validar botão "Cadastre-se Gratuitamente" com seletor `.flex-col > .bg-white`
8. Validar botão "Acesso Profissionais" com seletor `.flex-col > .border`
9. Validar card "Consultar Medicamentos" com seletor `.bg-slate-100`
10. Validar seções de estatísticas: "Unidades de Saúde", "Pacientes Cadastrados", "Satisfação"

---

## Resultado Esperado

- ✅ Banner gradiente é renderizado com cores corretas (teal)
- ✅ Todos os textos descritivos são exibidos corretamente
- ✅ Botões "Cadastre-se Gratuitamente" e "Acesso Profissionais" estão visíveis
- ✅ Seção de estatísticas mostra os 3 cards com valores
- ✅ Card de medicamentos está visível na seção
- ✅ Nenhum elemento está quebrado ou com erro de renderização

---

## Critérios de Aceitação

- ✅ O banner principal é visível e com gradiente aplicado
- ✅ Todos os CTA (Call-To-Action) são renderizados corretamente
- ✅ As estatísticas são numéricas e legíveis
- ✅ O layout é responsivo e bem estruturado
- ✅ Nenhuma mensagem de erro no console

---

## Fluxo de Teste

```
Acessar Home → Validar Banner → Validar Textos → Validar Botões → Validar Estatísticas
```

---

## Evidência

### Screenshots Capturados

| Screenshot | Descrição | Path |
|------------|-----------|------|
| Banner Principal | View do banner gradiente teal | `screenshots/home/CTN-002-banner-gradiente.png` |
| Badge Platform | Destaque do badge Plataforma Pública de Saúde | `screenshots/home/CTN-002-badge-plataforma.png` |
| Título Principal | Título Sistema Integrado de Saúde do Cidadão | `screenshots/home/CTN-002-titulo-principal.png` |
| Descrição Completa | Texto descritivo de proposta de valor | `screenshots/home/CTN-002-descricao-valor.png` |
| Botões CTA | Botões Cadastre-se Gratuitamente e Acesso Profissionais | `screenshots/home/CTN-002-botoes-cta.png` |
| Seção Medicamentos | Card Consultar Medicamentos | `screenshots/home/CTN-002-card-medicamentos.png` |
| Estatísticas | Seção com Unidades, Pacientes, Satisfação | `screenshots/home/CTN-002-estatisticas.png` |
| Conteúdo Completo | View completa do conteúdo principal | `screenshots/home/CTN-002-conteudo-completo.png` |

---

## Observações

- Este teste valida o conteúdo central da página home
- Essencial para garantir que o valor proposto ao usuário é claro
- Deve ser executado em todas as versões
- Tempo de carregamento esperado: < 3 segundos
