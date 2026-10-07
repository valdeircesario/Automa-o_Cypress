# CTN-005 — Validar Seção de Funcionalidades Principais

**Caso de Teste:** CT-HOME-005

**Objetivo:** Validar que a seção de funcionalidades principais exibe corretamente os 4 cards de funcionalidades com ícones coloridos e descrições.

**Prioridade:** Alta

**Tipo:** E2E - End-to-End

**Automatizado:** ✅ Sim

---

## Dados de Teste

| Campo | Valor |
|-------|-------|
| URL | http://localhost:5173/ |
| Estado do Usuário | Não autenticado |
| Container | `.bg-slate-50.py-16` |
| Cards | 4 (Histórico Médico, Vacinas, Exames, Agendamentos) |
| Cores dos Ícones | Rosa, Verde, Azul, Roxo |

---

## Passos

1. Acessar a URL `http://localhost:5173/`
2. Fazer scroll até a seção de funcionalidades (elemento `.bg-slate-50.py-16`)
3. Validar presença do container da seção
4. Validar presença do título "Funcionalidades"
5. Validar presença do subtítulo "Funcionalidades Principais"
6. Validar descrição "Tudo que você precisa para gerenciar sua saúde..."
7. **Card 1 - Histórico Médico:**
   - Validar título "Histórico Médico"
   - Validar ícone rosa com classe `.bg-rose-500.inline-flex`
   - Validar descrição "Acesse todo seu histórico médico em um só lugar"
8. **Card 2 - Cartão de Vacinas:**
   - Validar título "Cartão de Vacinas"
   - Validar ícone verde com classe `.bg-emerald-500.inline-flex`
   - Validar descrição "Consulte suas vacinas e próximas doses"
9. **Card 3 - Exames:**
   - Validar título "Exames"
   - Validar ícone azul com classe `.bg-sky-500.inline-flex`
   - Validar descrição "Visualize resultados e baixe laudos"
10. **Card 4 - Agendamentos:**
    - Validar título "Agendamentos"
    - Validar ícone roxo com classe `.bg-violet-500.inline-flex`
    - Validar descrição "Solicite consultas e acompanhe agendamentos"

---

## Resultado Esperado

- ✅ Todos os 4 cards são renderizados corretamente
- ✅ Ícones possuem cores esperadas (Rosa, Verde, Azul, Roxo)
- ✅ Títulos dos cards estão visíveis e legíveis
- ✅ Descrições informativas estão presentes
- ✅ Cards possuem efeito hover (se implementado)
- ✅ Layout é grid responsivo
- ✅ Nenhum card está truncado ou sobreposto

---

## Critérios de Aceitação

- ✅ Cada card possui icon, título e descrição
- ✅ Cores dos ícones são diferenciadas (contraste adequado)
- ✅ Fontes são legíveis (tamanho >= 14px)
- ✅ Espaçamento entre cards é consistente
- ✅ Cards são responsivos em mobile (stack vertical)
- ✅ Nenhuma sobreposição de elementos

---

## Fluxo de Teste

```
Acessar Home → Scroll → Validar Container → Validar Título → Validar Descrição → Validar 4 Cards com Ícones
```

---

## Evidência

### Screenshots Capturados

| Screenshot | Descrição | Path |
|------------|-----------|------|
| Seção Completa | View completa da seção de funcionalidades | `screenshots/home/CTN-005-secao-funcionalidades.png` |
| Título Principal | Título Funcionalidades Principais | `screenshots/home/CTN-005-titulo-funcionalidades.png` |
| Descrição | Descrição Tudo que você precisa... | `screenshots/home/CTN-005-descricao-funcionalidades.png` |
| Card 1 - Histórico | Card Histórico Médico com ícone rosa | `screenshots/home/CTN-005-card-historico.png` |
| Card 2 - Vacinas | Card Cartão de Vacinas com ícone verde | `screenshots/home/CTN-005-card-vacinas.png` |
| Card 3 - Exames | Card Exames com ícone azul | `screenshots/home/CTN-005-card-exames.png` |
| Card 4 - Agendamentos | Card Agendamentos com ícone roxo | `screenshots/home/CTN-005-card-agendamentos.png` |
| Todos os Cards | View dos 4 cards juntos | `screenshots/home/CTN-005-cards-completos.png` |
| Ícones Coloridos | Destaque dos 4 ícones com cores | `screenshots/home/CTN-005-icones-coloridos.png` |
| Layout Mobile | Grid de cards em viewport mobile | `screenshots/home/CTN-005-funcionalidades-mobile.png` |

---

## Observações

- Esta é uma seção crítica que apresenta o valor do sistema
- Os 4 cards representam as funcionalidades principais
- Cores dos ícones são importante para diferenciação visual
- Validar hover effects e animações se implementadas
- Deve ser testado em diferentes tamanhos de viewport
