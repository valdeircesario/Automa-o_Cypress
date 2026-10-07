# CTN-004 — Validar Seção de Consulta de Medicamentos

**Caso de Teste:** CT-HOME-004

**Objetivo:** Validar que a seção de consulta de medicamentos exibe o conteúdo e permite abrir o modal de consulta com sucesso.

**Prioridade:** Alta

**Tipo:** E2E - End-to-End (Funcional + Interativo)

**Automatizado:** ✅ Sim

---

## Dados de Teste

| Campo | Valor |
|-------|-------|
| URL | http://localhost:5173/ |
| Estado do Usuário | Não autenticado |
| Seletor do Container | `.mb-8` |
| Botão de Ação | "Abrir Consulta de Medicamentos" |

---

## Passos

1. Acessar a URL `http://localhost:5173/`
2. Fazer scroll até a seção de medicamentos (elemento `.mb-8`)
3. Validar presença da seção com seletor `.mb-8`
4. Validar presença do título "Consulta de Medicamentos"
5. Validar presença do subtítulo "Verifique os medicamentos disponíveis nas UBS"
6. Validar presença da descrição "Qualquer usuário pode consultar os medicamentos..."
7. Clicar no botão "Abrir Consulta de Medicamentos" com seletor `.mb-8 > .inline-flex`
8. Validar que o modal é aberto e contém o título "Consulta de medicamentos"
9. Validar descrição do modal "Pesquise por nome e veja em qual UBS o medicamento está disponível"
10. Clicar no botão "Fechar"
11. Validar retorno à página home

---

## Resultado Esperado

- ✅ Seção de medicamentos é renderizada corretamente
- ✅ Todos os textos descritivos estão visíveis
- ✅ Botão "Abrir Consulta de Medicamentos" é clicável
- ✅ Modal é aberto com conteúdo correto
- ✅ Modal contém campo de pesquisa ou formulário
- ✅ Botão "Fechar" fecha o modal corretamente
- ✅ Usuário retorna à página home após fechar

---

## Critérios de Aceitação

- ✅ O modal abre sem delay perceptível (< 500ms)
- ✅ Conteúdo do modal é bem formatado e legível
- ✅ Não há erros de console ao abrir/fechar modal
- ✅ Funcionalidade é acessível via teclado (Enter para botão)
- ✅ Modal é responsivo em diferentes resoluções

---

## Fluxo de Teste

```
Acessar Home → Scroll → Validar Seção → Clicar Botão → Modal Abre → Validar Conteúdo → Fechar → Retornar Home
```

---

## Evidência

### Screenshots Capturados

| Screenshot | Descrição | Path |
|------------|-----------|------|
| Seção Medicamentos | Seção de medicamentos na home | `screenshots/home/CTN-004-secao-medicamentos.png` |
| Título Medicamentos | Título Consulta de Medicamentos | `screenshots/home/CTN-004-titulo-medicamentos.png` |
| Descrição Completa | Descrição e instruções da seção | `screenshots/home/CTN-004-descricao-medicamentos.png` |
| Botão Ação | Botão Abrir Consulta de Medicamentos | `screenshots/home/CTN-004-botao-abrir.png` |
| Modal Aberto | Modal de consulta de medicamentos aberto | `screenshots/home/CTN-004-modal-medicamentos.png` |
| Campo Pesquisa | Campo de pesquisa dentro do modal | `screenshots/home/CTN-004-modal-pesquisa.png` |
| Botão Fechar | Botão Fechar no modal | `screenshots/home/CTN-004-modal-botao-fechar.png` |
| Retorno Home | Página home após fechar modal | `screenshots/home/CTN-004-retorno-home.png` |
| Layout Mobile | Modal em viewport mobile | `screenshots/home/CTN-004-modal-mobile.png` |

---

## Observações

- Este é um teste crítico pois valida funcionalidade interativa
- Modal deve ser acessível e intuitivo para usuários não autenticados
- Campo de pesquisa é essencial para a funcionalidade
- Deve funcionar em múltiplos navegadores
