# Estratégia de Testes

## Visão Geral

Este documento descreve a estratégia de testes automatizados E2E (End-to-End) para o projeto.

---

## Objetivos

1. **Garantir Qualidade**: Validar funcionalidades críticas
2. **Documentação Viva**: Manter testes como documentação
3. **Confiabilidade**: Detectar regressões rapidamente
4. **Escalabilidade**: Fácil adicionar novos testes
5. **Manutenibilidade**: Código limpo e reutilizável

---

## Escopo

### ✅ Incluso

Este documento descreve a estratégia de testes automatizados E2E (End-to-End) do projeto Cypress, considerando os módulos atualmente implementados: home, cadastro e login.

- Validações de UI/UX
- Fluxos principais de negócio
- Testes de validação de formulários
- Testes de segurança básica

### ❌ Excluído

| Login | 1 | 1 | 1 | 4 |
| Cadastro | 1 | Vários | Vários | Vários |
| Home | N/A | N/A | Vários | Vários |

- Testes de performance (usar ferramentas específicas)
- Testes de acessibilidade (usar ferramentas específicas)
- Testes de SEO
- Testes de carga

---

Execução headless de um módulo:

```bash
npx cypress run --spec "cypress/e2e/login/loginUser.cy.js"
```

## Tipos de Testes

### 1. Teste Happy Path

Valida o fluxo esperado com dados válidos.

> O script `test:login` deve ser conferido quando o nome do spec mudar. O arquivo atualmente utilizado é `cypress/e2e/login/loginUser.cy.js`.

**Exemplo:** Login com credenciais corretas

- Use `cypress.env.json` local para credenciais do Cypress; o arquivo é ignorado pelo Git
- Versione somente `cypress.env.example.json` sem credenciais reais
- Use perfis como `user` e `loginInvalido` por meio de `cy.loginComPerfil()`
  Valida comportamento com dados inválidos.

**Exemplo:** Login com senha errada

### 3. Teste de Validação

2. **Alternativa atual**: atributos semânticos, como `[name="email"]` e `[name="senha"]`
3. **Último recurso**: classes CSS estáveis ou texto visível
   **Exemplo:** Campo obrigatório não preenchido

### 4. Teste de Regressão

Valida que funcionalidades existentes continuam funcionando.

---

## Padrão AAA (Arrange-Act-Assert)

Todos os testes devem seguir este padrão:

```javascript
it("Descrição do teste", () => {
  // Arrange - Preparar dados e cenário
  // Act - Executar a ação
  // Assert - Validar resultado
});
```

---

## Cobertura de Testes

### Por Módulo

| Módulo   | Happy Path | Negativo | Validação | Total |
| -------- | ---------- | -------- | --------- | ----- |
| Login    | 1          | 2        | 2         | 5     |
| Usuários | TBD        | TBD      | TBD       | TBD   |

### Alvo de Cobertura

- **Meta**: 80% de cobertura dos fluxos críticos
- **Mínimo aceitável**: 60%
- **Ideal**: 100% dos fluxos críticos

---

## Execução dos Testes

### Ambiente Local

```bash
npm run cypress:open
```

### CI/CD

```bash
npm run test:report
```

### Frequência

| Tipo                | Frequência      | Objetivo               |
| ------------------- | --------------- | ---------------------- |
| Desenvolvimento     | A cada commit   | Feedback imediato      |
| Integração Contínua | A cada push     | Validar antes de merge |
| Nightly             | Diariamente     | Validar regressões     |
| Release             | Antes de deploy | Validar release        |

---

## Prioridade de Testes

### Crítica (P0)

- Autenticação
- Autorização
- Operações financeiras
- Fluxos de dados críticos

### Alta (P1)

- Funcionalidades principais
- Cálculos importantes
- Integrações externas

### Média (P2)

- Funcionalidades secundárias
- UI/UX
- Validações de formulário

### Baixa (P3)

- Features futuras
- Melhorias cosméticas

---

## Seletores

### Estratégia de Seleção

1. **Preferido**: `[data-testid="..."]`
2. **Alternativa**: `[data-cy="..."]`
3. **Último recurso**: Classes CSS estáveis

### Exemplo

```html
<!-- ✅ BOM -->
<input data-testid="input-usuario" />

<!-- ❌ RUIM -->
<input class="form__input--large" />
<input #usuarioInput />
```

---

## Dados de Teste

### Organização

- **Fixtures**: Dados estáticos em JSON
- **Gerador**: Dados dinâmicos no código
- **API**: Criar dados via backend quando apropriado

### Segurança

- **NUNCA** versione credenciais reais
- Use `.env` para dados sensíveis
- Crie usuários de teste no ambiente
- Limpe dados após testes quando necessário

---

## Assertions

### Boas Práticas

```javascript
// ✅ BOM - Claro e específico
cy.contains("Email ou senha inválidos")
  .should("be.visible")
  .and("contain", "Email ou senha inválidos");

// ✅ BOM - Validar múltiplas coisas
loginPage.validarLoginRealizado();

// ❌ RUIM - Muito vago
cy.get("div").should("exist");

// ❌ RUIM - Sem contexto
expect(true).to.be.true;
```

---

## Waits e Timeouts

### Recomendação

Evite `cy.wait()` com tempo fixo. Use assertions com timeout:

```javascript
// ✅ BOM
cy.get('[data-testid="elemento"]', { timeout: 10000 }).should("be.visible");

// ❌ RUIM
cy.wait(5000);
cy.get('[data-testid="elemento"]').click();
```

---

## Page Objects

### Benefícios

✅ Testes legíveis
✅ Fácil manutenção
✅ Reutilização

### Estrutura

```
cypress/pages/
├── LoginPage.js
├── HomePage.js
├── UsuarioPage.js
└── BasePage.js (opcional)
```

### Template

```javascript
class PageName {
  // Elementos
  get elemento() {
    return cy.get('[data-testid="elemento"]');
  }

  // Ações
  acessar() {
    cy.visit("/url");
  }

  // Assertions
  validar() {
    cy.url().should("include", "/url");
  }
}

export default new PageName();
```

O projeto possui `cypress/pages/LoginPage.js`, mas o spec atual `loginUser.cy.js` usa diretamente os seletores da tela e o comando `cy.loginComPerfil()`. As duas abordagens são válidas; novos fluxos repetidos devem preferir a abstração adequada.

---

## Relatórios

### Mochawesome

Gerado automaticamente com:

```bash
npm run test:report
```

### Análise

- Visualizar resultados em `reports/mochawesome.html`
- Verificar screenshots em caso de falha
- Analisar duração de cada teste
- Identificar testes flaky

---

## Integração Contínua

### GitHub Actions (Exemplo)

```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run test:report
```

---

## Debugging

### Modos de Debug

```bash
# Modo interativo
npm run cypress:open

# Com logs
DEBUG=cypress:* npm test

# Parar em erro
// Adicione no teste:
cy.debug();
```

---

## Boas Práticas

### ✅ Faça

- Testes independentes
- Nomes descritivos
- Assertions claras
- Dados em fixtures
- Page Objects reutilizáveis
- Documentação atualizada
- Code review antes de merge
- Testes rápidos (< 30s cada)

### ❌ Evite

- Testes dependentes
- Sleeps com timeout fixo
- Assertions vagas
- Dados hardcoded
- Page Objects complexos
- Código duplicado
- Testes lentos
- Seletores frágeis

---

## Estado atual e lacunas

- O login possui quatro testes automatizados: interface/retorno, campos vazios, credenciais inválidas e credenciais válidas.
- O cenário de campos vazios valida email e senha no mesmo teste; cenários isolados podem ser adicionados para diagnóstico mais preciso.
- O relatório Mochawesome é gravado em `reports/`.
- Screenshots de evidência são gravados pelo Cypress e ignorados pelo Git.

## Manutenção

### Atualizar Testes

Quando a UI muda:

1. Atualizar seletores no Page Object ou no spec, conforme o ponto de uso
2. Testar manualmente
3. Reexecutar testes automatizados
4. Documentar mudança

### Adicionar Novos Testes

1. Criar documentação (CT-XXX, CTN-XXX)
2. Criar Page Object (se nova página)
3. Criar Fixtures (se necessário)
4. Implementar testes
5. Executar e validar
6. Code review
7. Merge

---

## Métricas

### Monitorar

- Taxa de sucesso
- Tempo de execução
- Cobertura de cenários
- Testes flaky
- Manutenção (quantas vezes atualizado)

### Alertas

- Taxa de sucesso < 95%
- Testes flaky detectados
- Tempo de execução > 5 minutos
- Cobertura < 60%

---

## Roadmap

### Curto Prazo (1 mês)

- [ ] Implementar 5 casos de teste críticos
- [ ] Configurar CI/CD

### Médio Prazo (3 meses)

- [ ] 20+ testes implementados
- [ ] Coverage > 80%

### Longo Prazo (6+ meses)

- [ ] 50+ testes
- [ ] API testes E2E
- [ ] Testes de performance
- [ ] Testes visual regression

---

## Contato

Para dúvidas sobre estratégia de testes:

1. Consulte documentação em `docs/`
2. Revise exemplos em `cypress/e2e/`
3. Pergunte ao lead de QA

---

**Versão**: 1.0
**Última atualização**: 23/09/2026
