# CTN-003 — Validar Seção de Campanhas e Notícias

**Caso de Teste:** CT-HOME-003

**Objetivo:** Validar que a seção de campanhas e notícias exibe corretamente o conteúdo e informações relacionadas à promoção de saúde.

**Prioridade:** Média

**Tipo:** E2E - End-to-End

**Automatizado:** ✅ Sim

---

## Dados de Teste

| Campo | Valor |
|-------|-------|
| URL | http://localhost:5173/ |
| Estado do Usuário | Não autenticado |
| Badge | "Ativo agora" |
| Seção | Campanhas e Notícias |

---

## Passos

1. Acessar a URL `http://localhost:5173/`
2. Fazer scroll até a seção de campanhas (elemento `:nth-child(3)`)
3. Validar presença da seção com seletor `:nth-child(3)`
4. Validar presença do badge "Ativo agora"
5. Validar presença do título "Campanhas e Notícias"
6. Validar presença da descrição "Fique por dentro das campanhas de saúde e informações importantes"
7. Verificar que a seção contém pelo menos um card de campanha

---

## Resultado Esperado

- ✅ A seção de campanhas é renderizada corretamente
- ✅ Badge "Ativo agora" está visível e destacado
- ✅ Título "Campanhas e Notícias" é exibido
- ✅ Descrição informativa está visível
- ✅ Pelo menos uma campanha/notícia é listada
- ✅ A seção é responsiva em diferentes tamanhos de tela

---

## Critérios de Aceitação

- ✅ O badge "Ativo agora" tem estilo visual diferenciado
- ✅ Todos os textos são legíveis e não sobrepostos
- ✅ O conteúdo está alinhado corretamente
- ✅ Imagens de campanhas (se existentes) carregam sem erros
- ✅ A seção é acessível via scroll

---

## Fluxo de Teste

```
Acessar Home → Fazer Scroll → Validar Seção → Validar Conteúdo → Validar Badges
```

---

## Evidência

### Screenshots Capturados

| Screenshot | Descrição | Path |
|------------|-----------|------|
| Seção Campanhas | View completa da seção de campanhas | `screenshots/home/CTN-003-secao-campanhas.png` |
| Badge Ativo | Destaque do badge Ativo agora | `screenshots/home/CTN-003-badge-ativo.png` |
| Título Campanhas | Título Campanhas e Notícias | `screenshots/home/CTN-003-titulo-campanhas.png` |
| Descrição Info | Texto descritivo da seção | `screenshots/home/CTN-003-descricao-campanhas.png` |
| Card Campanha | Exemplo de card de campanha/notícia | `screenshots/home/CTN-003-card-campanha.png` |
| Layout Responsivo | View da seção em mobile | `screenshots/home/CTN-003-campanhas-mobile.png` |

---

## Observações

- Esta seção é importante para manter usuários informados sobre campanhas de saúde
- Conteúdo dinâmico pode variar, validar pelo menos a estrutura
- Recomendado executar após atualizações de conteúdo
- Verificar se links de campanhas funcionam corretamente
