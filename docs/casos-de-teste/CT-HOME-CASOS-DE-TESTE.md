# Casos de Teste - Página Home (HOME)
## Especificação de Casos de Teste - Padrão ISO/IEC 29119

**Projeto:** SISC-Saúde (Sistema Integrado de Saúde do Cidadão)  
**Módulo:** Página Home  
**Data de Criação:** 2026-08-30  
**Versão:** 1.0  
**Executor:** Cypress E2E

---

## CT-HOME-001: Validar Cabeçalho (Header) da Página Home

| Campo | Valor |
|-------|-------|
| **ID do Caso de Teste** | CT-HOME-001 |
| **Título** | Validar Cabeçalho (Header) da Página Home |
| **Prioridade** | Alta |
| **Tipo de Teste** | Funcional |
| **Pré-condições** | • Aplicação iniciada<br/>• Usuário não autenticado<br/>• Página home acessível em http://localhost:5173/ |
| **Objetivo** | Validar que o cabeçalho (header) da página home exibe corretamente o logo, título da aplicação e botões de navegação |

### Passos do Teste

| # | Ação | Resultado Esperado |
|---|------|------------------|
| 1 | Acessar http://localhost:5173/ | Página home carrega com sucesso |
| 2 | Validar elemento SVG logo na navegação | Logo SVG é visível |
| 3 | Validar título "SISC-Saúde" com classe `.space-x-3 > .bg-gradient-to-r` | Texto "SISC-Saúde" está visível |
| 4 | Validar botão "Entrar" com classe `.bg-blue-600 > span` | Botão "Entrar" está visível com texto correto |
| 5 | Validar botão "Cadastre-se" com classe `.bg-green-600` | Botão "Cadastre-se" está visível com texto correto |

### Dados de Teste
- URL: `http://localhost:5173/`
- Idioma: Português

### Resultado Esperado
✅ Todos os elementos do cabeçalho são renderizados corretamente e estão visíveis

### Status
- **Resultado Atual:** PASSOU
- **Data da Execução:** 2026-08-30

---

## CT-HOME-002: Validar Conteúdo Principal da Página Home

| Campo | Valor |
|-------|-------|
| **ID do Caso de Teste** | CT-HOME-002 |
| **Título** | Validar Conteúdo Principal da Página Home |
| **Prioridade** | Alta |
| **Tipo de Teste** | Funcional |
| **Pré-condições** | • Aplicação iniciada<br/>• Página home carregada<br/>• Usuário não autenticado |
| **Objetivo** | Validar que o corpo da página home exibe corretamente o banner principal, textos descritivos e botões de acesso |

### Passos do Teste

| # | Ação | Resultado Esperado |
|---|------|------------------|
| 1 | Verificar banner gradiente principal com classe `.via-teal-600 > .relative` | Banner é visível |
| 2 | Validar badge "Plataforma Pública de Saúde" com classe `.relative > .rounded-full` | Texto "Plataforma Pública de Saúde" está visível |
| 3 | Validar título principal "Sistema Integrado de Saúde do Cidadão" com classe `.text-4xl` | Título está visível com texto correto |
| 4 | Validar descrição principal contendo "Conectando pacientes, unidades de saúde..." | Descrição está visível |
| 5 | Validar botão "Cadastre-se Gratuitamente" com classe `.flex-col > .bg-white` | Botão está visível |
| 6 | Validar botão "Acesso Profissionais" com classe `.flex-col > .border` | Botão está visível |
| 7 | Validar botão "Consultar Medicamentos" com classe `.bg-slate-100` | botão está visível |
| 8 | Validar baner "Unidades de Saúde" | Texto visível |
| 9 | Validar baner "Pacientes Cadastrados" com classe `:nth-child(2) > .text-2xl` | Seção visível |
| 10 | Validar baner "Satisfação" | Texto visível |

### Dados de Teste
- Não aplicável

### Resultado Esperado
✅ Todos os elementos do conteúdo principal são renderizados e visíveis

### Status
- **Resultado Atual:** PASSOU
- **Data da Execução:** 2026-08-30

---

## CT-HOME-003: Validar Seção de Campanhas e Notícias

| Campo | Valor |
|-------|-------|
| **ID do Caso de Teste** | CT-HOME-003 |
| **Título** | Validar Seção de Campanhas e Notícias |
| **Prioridade** | Média |
| **Tipo de Teste** | Funcional |
| **Pré-condições** | • Aplicação iniciada<br/>• Página home carregada<br/>• Seção de campanhas visível |
| **Objetivo** | Validar que a seção de campanhas e notícias exibe corretamente o conteúdo |

### Passos do Teste

| # | Ação | Resultado Esperado |
|---|------|------------------|
| 1 | Validar container da seção de campanhas com classe `:nth-child(3)` | Container é visível |
| 2 | Validar badge "Ativo agora" | Texto "Ativo agora" está visível |
| 3 | Validar título "Campanhas e Notícias" | Título está visível |
| 4 | Validar descrição "Fique por dentro das campanhas de saúde e informações importantes" | Descrição está visível |

### Dados de Teste
- Não aplicável

### Resultado Esperado
✅ Seção de campanhas e notícias exibe todos os elementos corretamente

### Status
- **Resultado Atual:** PASSOU
- **Data da Execução:** 2026-08-30

---

## CT-HOME-004: Validar Seção de Consulta de Medicamentos

| Campo | Valor |
|-------|-------|
| **ID do Caso de Teste** | CT-HOME-004 |
| **Título** | Validar Seção de Consulta de Medicamentos |
| **Prioridade** | Alta |
| **Tipo de Teste** | Funcional e Interativo |
| **Pré-condições** | • Aplicação iniciada<br/>• Página home carregada<br/>• Seção de medicamentos visível |
| **Objetivo** | Validar que a seção de consulta de medicamentos exibe corretamente o conteúdo e permite abrir o formulário de consulta |

### Passos do Teste

| # | Ação | Resultado Esperado |
|---|------|------------------|
| 1 | Validar container da seção com classe `.mb-8` | Container é visível |
| 2 | Validar título "Consulta de Medicamentos" | Título está visível |
| 3 | Validar subtítulo "Verifique os medicamentos disponíveis nas UBS" | Subtítulo está visível |
| 4 | Validar descrição "Qualquer usuário pode consultar os medicamentos..." | Descrição está visível |
| 5 | Clicar no botão "Abrir Consulta de Medicamentos" com classe `.mb-8 > .inline-flex` | Modal de consulta de medicamentos abre |
| 6 | Validar título do modal "Consulta de medicamentos" | Título do modal está visível |
| 7 | Validar descrição do modal "Pesquise por nome e veja em qual UBS..." | Descrição está visível |
| 8 | Clicar no botão "Fechar" | Modal fecha com sucesso |
| 9 | Validar retorno à página home com título "Consulta de Medicamentos" visível | Página home é exibida novamente |

### Dados de Teste
- URL: `http://localhost:5173/`
- Idioma: Português

### Resultado Esperado
✅ Seção de medicamentos abre modal corretamente e permite fechá-lo

### Status
- **Resultado Atual:** PASSOU
- **Data da Execução:** 2026-08-30

---

## CT-HOME-005: Validar Seção de Funcionalidades Principais

| Campo | Valor |
|-------|-------|
| **ID do Caso de Teste** | CT-HOME-005 |
| **Título** | Validar Seção de Funcionalidades Principais |
| **Prioridade** | Alta |
| **Tipo de Teste** | Funcional |
| **Pré-condições** | • Aplicação iniciada<br/>• Página home carregada<br/>• Seção de funcionalidades visível após scroll |
| **Objetivo** | Validar que a seção de funcionalidades principais exibe corretamente todos os 4 cards com ícones e descrições |

### Passos do Teste

| # | Ação | Resultado Esperado |
|---|------|------------------|
| 1 | Fazer scroll até container com classe `.bg-slate-50.py-16` | Container da seção é visível |
| 2 | Validar título "Funcionalidades" | Título está visível |
| 3 | Validar subtítulo "Funcionalidades Principais" | Subtítulo está visível |
| 4 | Validar descrição "Tudo que você precisa para gerenciar sua saúde..." | Descrição está visível |
| 5 | Validar card "Histórico Médico" com ícone rosa `.bg-rose-500.inline-flex` | Card está visível com descrição |
| 6 | Validar descrição "Acesse todo seu histórico médico em um só lugar" | Descrição está visível |
| 7 | Validar card "Cartão de Vacinas" com ícone verde `.bg-emerald-500.inline-flex` | Card está visível com descrição |
| 8 | Validar descrição "Consulte suas vacinas e próximas doses" | Descrição está visível |
| 9 | Validar card "Exames" com ícone azul `.bg-sky-500.inline-flex` | Card está visível com descrição |
| 10 | Validar descrição "Visualize resultados e baixe laudos" | Descrição está visível |
| 11 | Validar card "Agendamentos" com ícone roxo `.bg-violet-500.inline-flex` | Card está visível com descrição |
| 12 | Validar descrição "Solicite consultas e acompanhe agendamentos" | Descrição está visível |

### Dados de Teste
- Cores dos ícones: Rosa, Verde, Azul, Roxo
- Idioma: Português

### Resultado Esperado
✅ Todos os 4 cards de funcionalidades são renderizados com ícones coloridos e descrições

### Status
- **Resultado Atual:** PASSOU
- **Data da Execução:** 2026-08-30

---

## CT-HOME-006: Validar Card de Criar Conta

| Campo | Valor |
|-------|-------|
| **ID do Caso de Teste** | CT-HOME-006 |
| **Título** | Validar Card de Criar Conta |
| **Prioridade** | Alta |
| **Tipo de Teste** | Funcional e Interativo |
| **Pré-condições** | • Aplicação iniciada<br/>• Página home carregada<br/>• Card de criar conta visível após scroll |
| **Objetivo** | Validar que o card de criar conta exibe corretamente o conteúdo e permite abrir o formulário de cadastro |

### Passos do Teste

| # | Ação | Resultado Esperado |
|---|------|------------------|
| 1 | Fazer scroll até container com classe `.to-teal-600` | Container é visível |
| 2 | Validar título "Pronto para começar?" | Título está visível |
| 3 | Validar descrição "Cadastre-se agora e tenha acesso completo ao seu histórico de saúde" | Descrição está visível |
| 4 | Clicar no botão "Criar Conta Gratuita" com classe `.to-teal-600 > .mx-auto > .inline-flex` | Modal de cadastro abre |
| 5 | Validar título "Cadastro de Paciente" | Título do formulário está visível |
| 6 | Validar botão "Criar Conta" com classe `.gap-2` | Botão está visível |
| 7 | Clicar no link "← Voltar ao início" com classe `.max-w-2xl > :nth-child(3) > .text-sm` | Modal fecha e retorna para home |
| 8 | Validar que a página home é exibida novamente | Card de criar conta é visível |

### Dados de Teste
- URL: `http://localhost:5173/`
- Idioma: Português

### Resultado Esperado
✅ Card de criar conta abre formulário de cadastro e permite retornar à home

### Status
- **Resultado Atual:** PASSOU
- **Data da Execução:** 2026-08-30

---

## CT-HOME-007: Validar Rodapé (Footer)

| Campo | Valor |
|-------|-------|
| **ID do Caso de Teste** | CT-HOME-007 |
| **Título** | Validar Rodapé (Footer) |
| **Prioridade** | Média |
| **Tipo de Teste** | Funcional |
| **Pré-condições** | • Aplicação iniciada<br/>• Página home carregada<br/>• Rodapé visível após scroll |
| **Objetivo** | Validar que o rodapé exibe corretamente o logo, marca, links e informações de copyright |

### Passos do Teste

| # | Ação | Resultado Esperado |
|---|------|------------------|
| 1 | Fazer scroll até footer com classe `footer.bg-gray-950` | Footer é visível |
| 2 | Validar ícone de coração com classe `footer .lucide-heart` | Ícone de coração está visível |
| 3 | Validar logo/marca "SISC — Saúde" | Texto está visível |
| 4 | Validar link "Acesso Profissionais" | Link está visível com texto correto |
| 5 | Validar separador "•" | Separador está visível |
| 6 | Validar texto de copyright "© 2026 Sistema Integrado de Saúde do Cidadão" | Texto está visível |

### Dados de Teste
- Não aplicável

### Resultado Esperado
✅ Todos os elementos do rodapé são renderizados corretamente

### Status
- **Resultado Atual:** PASSOU
- **Data da Execução:** 2026-08-30

---

## Resumo de Execução

| ID Caso de Teste | Título | Status | Data |
|------------------|--------|--------|------|
| CT-HOME-001 | Validar Cabeçalho (Header) | ✅ PASSOU | 2026-08-30 |
| CT-HOME-002 | Validar Conteúdo Principal | ✅ PASSOU | 2026-08-30 |
| CT-HOME-003 | Validar Campanhas e Notícias | ✅ PASSOU | 2026-08-30 |
| CT-HOME-004 | Validar Consulta de Medicamentos | ✅ PASSOU | 2026-08-30 |
| CT-HOME-005 | Validar Funcionalidades Principais | ✅ PASSOU | 2026-08-30 |
| CT-HOME-006 | Validar Card de Criar Conta | ✅ PASSOU | 2026-08-30 |
| CT-HOME-007 | Validar Rodapé (Footer) | ✅ PASSOU | 2026-08-30 |

**Total de Casos de Teste:** 7  
**Casos Aprovados:** 7  
**Casos Falhados:** 0  
**Taxa de Sucesso:** 100%

---

## Referências

- **ISO/IEC 29119:** Software Testing - Part 3: Test Documentation
- **IEEE 829:** Standard for Software and System Test Documentation
- **Cypress Documentation:** https://docs.cypress.io/
- **Tailwind CSS:** https://tailwindcss.com/

---

**Documento preparado em:** 2026-08-30  
**Responsável:** QA  
**Status:** Revisado e Aprovado
