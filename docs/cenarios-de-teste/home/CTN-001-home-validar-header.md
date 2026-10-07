# CTN-001 — Validar Cabeçalho (Header) da Página Home

**Caso de Teste:** CT-HOME-001

**Objetivo:** Validar que o cabeçalho (header) da página home exibe corretamente o logo, título da aplicação e botões de navegação.

**Prioridade:** Alta

**Tipo:** E2E - End-to-End

**Automatizado:** ✅ Sim

---

## Dados de Teste

| Campo | Valor |
|-------|-------|
| URL | http://localhost:5173/ |
| Estado do Usuário | Não autenticado |
| Idioma | Português |

---

## Passos

1. Acessar a URL `http://localhost:5173/`
2. Aguardar o carregamento completo da página
3. Validar presença do logo SVG na navegação com seletor `nav a svg`
4. Validar presença do título "SISC-Saúde" com seletor `.space-x-3 > .bg-gradient-to-r`
5. Validar presença do botão "Entrar" com seletor `.bg-blue-600 > span`
6. Validar presença do botão "Cadastre-se" com seletor `.bg-green-600`

---

## Resultado Esperado

- ✅ Logo SVG é renderizado e visível
- ✅ Título "SISC-Saúde" é exibido corretamente
- ✅ Botão "Entrar" está visível com texto correto
- ✅ Botão "Cadastre-se" está visível com texto correto
- ✅ Todos os elementos do header possuem as classes esperadas
- ✅ Nenhum erro de console é exibido

---

## Critérios de Aceitação

- ✅ O header é renderizado na primeira carga
- ✅ Todos os elementos estão visíveis e sem erros CSS
- ✅ As cores do botão "Entrar" (azul) e "Cadastre-se" (verde) estão corretas
- ✅ O header permanece fixo no topo durante o scroll

---

## Fluxo de Teste

```
Acessar Home → Validar Header → Verificar Logo → Verificar Título → Verificar Botões
```

---

## Evidência

### Screenshots Capturados

| Screenshot | Descrição | Path |
|------------|-----------|------|
| Header Completo | View do header com logo, título e botões | `screenshots/home/CTN-001-header-completo.png` |
| Logo SVG | Destaque do logo SVG na navegação | `screenshots/home/CTN-001-logo-svg.png` |
| Título SISC-Saúde | Destaque do título da aplicação | `screenshots/home/CTN-001-titulo-sisc.png` |
| Botões de Ação | Botões Entrar (azul) e Cadastre-se (verde) | `screenshots/home/CTN-001-botoes-acao.png` |
| Header Responsivo | View do header em mobile | `screenshots/home/CTN-001-header-mobile.png` |

---

## Observações

- Este teste valida a estrutura visual crítica do cabeçalho
- É um teste fundamental pois o header é usado em todas as páginas
- Deve ser executado em toda new release
- Usar viewport padrão desktop (1280x720)
