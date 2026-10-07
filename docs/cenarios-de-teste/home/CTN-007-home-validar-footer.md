# CTN-007 — Validar Rodapé (Footer)

**Caso de Teste:** CT-HOME-007

**Objetivo:** Validar que o rodapé exibe corretamente o logo, marca, links de navegação e informações de copyright.

**Prioridade:** Média

**Tipo:** E2E - End-to-End

**Automatizado:** ✅ Sim

---

## Dados de Teste

| Campo | Valor |
|-------|-------|
| URL | http://localhost:5173/ |
| Estado do Usuário | Não autenticado |
| Container Footer | `footer.bg-gray-950` |
| Ano Copyright | 2026 |

---

## Passos

1. Acessar a URL `http://localhost:5173/`
2. Fazer scroll até o final da página para visualizar o footer (elemento `footer.bg-gray-950`)
3. Validar presença do container footer
4. Validar presença do ícone de coração (heart) com seletor `footer .lucide-heart`
5. Validar presença do logo/marca "SISC — Saúde"
6. Validar presença do link "Acesso Profissionais" com `href="/login-sistema"`
7. Validar presença do separador bullet "•"
8. Validar presença do texto de copyright "© 2026 Sistema Integrado de Saúde do Cidadão"
9. Validar que o link "Acesso Profissionais" é clicável (opcional)
10. Validar layout responsivo do footer (testar em diferentes viewports)

---

## Resultado Esperado

- ✅ Footer é renderizado com fundo cinza escuro (bg-gray-950)
- ✅ Ícone de coração é visível com cor rosa/vermelha
- ✅ Logo "SISC — Saúde" é exibido com fonte bold
- ✅ Link "Acesso Profissionais" está funcional
- ✅ Separador bullet "•" está presente e visível
- ✅ Texto de copyright está correto com ano 2026
- ✅ Todos os elementos estão bem alinhados
- ✅ Footer não sobrepõe conteúdo da página

---

## Critérios de Aceitação

- ✅ Footer é fixo ou sticky conforme design
- ✅ Ícone de coração possui cor diferenciada (alto contraste)
- ✅ Texto de copyright é legível (cor clara em fundo escuro)
- ✅ Link é identificável como link (sublinhado ou com cor diferente no hover)
- ✅ Conteúdo do footer não é truncado em mobile
- ✅ Footer responde corretamente em viewports de 320px a 1920px

---

## Fluxo de Teste

```
Acessar Home → Scroll até Fim → Validar Footer → Validar Logo → Validar Ícone → Validar Links → Validar Copyright
```

---

## Evidência

### Screenshots Capturados

| Screenshot | Descrição | Path |
|------------|-----------|------|
| Footer Completo | View completo do footer em desktop | `screenshots/home/CTN-007-footer-completo.png` |
| Fundo Footer | Background cinza escuro (bg-gray-950) | `screenshots/home/CTN-007-footer-fundo.png` |
| Ícone Coração | Ícone heart em rosa/vermelho | `screenshots/home/CTN-007-icone-coracao.png` |
| Logo SISC | Logo/marca SISC Saúde | `screenshots/home/CTN-007-logo-sisc.png` |
| Link Profissionais | Link Acesso Profissionais | `screenshots/home/CTN-007-link-profissionais.png` |
| Hover Link | Estado hover do link | `screenshots/home/CTN-007-link-hover.png` |
| Separador | Separador bullet | `screenshots/home/CTN-007-separador-bullet.png` |
| Copyright | Texto 2026 Sistema Integrado... | `screenshots/home/CTN-007-copyright.png` |
| Footer Mobile | Footer em viewport mobile | `screenshots/home/CTN-007-footer-mobile.png` |
| Layout Responsivo | Comparativo desktop vs mobile | `screenshots/home/CTN-007-footer-responsivo.png` |

---

## Observações

- Footer é presente em todas as páginas, testes aqui refletem todo o sistema
- Ícone de coração reforça aspecto humanitário do projeto
- Link "Acesso Profissionais" direciona para portal separado
- Copyright deve ser atualizado anualmente
- Footer deve ser testado em múltiplos navegadores
- Validar que links externos abrem em nova aba se aplicável
