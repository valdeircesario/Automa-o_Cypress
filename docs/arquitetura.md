# Arquitetura do Projeto

## Visão Geral

Este projeto implementa automação E2E com Cypress para validar as funcionalidades de home, cadastro e login. A organização separa especificações, comandos compartilhados, Page Objects, utilitários, fixtures, configuração e documentação.

O estado atual combina specs que interagem diretamente com os elementos e abstrações reutilizáveis. Novos testes devem preferir comandos ou Page Objects quando houver repetição, sem reestruturar os testes existentes sem necessidade.

---

## Camadas

```
┌─────────────────────────────────────────────────────────────┐
│         CAMADA DE TESTES (cypress/e2e/)                    │
│  Especificação de comportamento e cenários de uso           │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│      CAMADA DE PAGE OBJECTS (cypress/pages/)               │
│  Encapsulamento opcional de elementos e ações de UI        │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│    CAMADA DE SUPORTE (cypress/support/)                    │
│  Comandos customizados, hooks, configurações globais       │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│    CAMADA DE UTILITÁRIOS (cypress/utils/)                  │
│  Funções auxiliares, geradores de dados, helpers            │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│      CAMADA DE DADOS (fixtures e ambiente local)           │
│  Massa estática e credenciais fora do versionamento         │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│         CYPRESS API / BROWSER                              │
│  Interação com aplicação web                               │
└─────────────────────────────────────────────────────────────┘
```

---

## Camada de Testes

### Responsabilidade

Especificar comportamentos esperados em linguagem natural/código.

### Localização

`cypress/e2e/[modulo]/[teste].cy.js`

### Características

- Independentes e isolados
- Podem seguir padrão AAA (Arrange-Act-Assert)
- Usam seletores reais da aplicação, principalmente `name` e texto
- Podem usar Page Objects e comandos compartilhados
- São relacionados aos casos (CT) e cenários (CTN) da documentação

### Exemplo

```javascript
describe("Home e Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("deve validar login valido", () => {
    cy.get(".bg-blue-600 > span").click();
    cy.loginComPerfil("user");
    cy.contains("Entrar").click();
    cy.contains("Portal do Paciente").should("be.visible");
  });
});
```

---

## Camada de Page Objects

### Responsabilidade

Encapsular elementos e ações de uma página.

### Localização

`cypress/pages/[Page].js`

### Padrão

```javascript
class [Page] {
  // Elementos (getters)
  get elemento() {
    return cy.get('[data-testid="..."]');
  }

  // Ações
  acao() {
    this.elemento.click();
  }

  // Validações
  validar() {
    cy.url().should('include', '...');
  }
}

export default new [Page]();
```

### Benefícios

✅ Manutenção centralizada
✅ Testes limpos
✅ Reutilização
✅ Isolamento de mudanças UI

### Quando Criar um Novo Page Object

1. Nova página na aplicação
2. Página com muitos elementos
3. Múltiplos testes na mesma página

O projeto possui `cypress/pages/LoginPage.js`. O spec atual de login também usa diretamente os seletores e o comando `loginComPerfil`; não é necessário migrar testes existentes apenas para aplicar o Page Object.

---

## Camada de Suporte

### Responsabilidade

Fornecer funcionalidades compartilhadas entre testes.

### Localização

`cypress/support/`

### Arquivos

#### e2e.js

Configuração global de testes:

- Import de comandos
- Hooks globais (beforeEach, afterEach)
- Event listeners
- Configurações de erro

#### commands.js

Comandos customizados reutilizáveis:

- Login simplificado
- Waits customizados
- Validações comuns
- Ações frequentes

### Exemplo

```javascript
// commands.js
Cypress.Commands.add("login", (user, pass) => {
  cy.get('[data-testid="input-user"]').type(user);
  cy.get('[data-testid="input-pass"]').type(pass);
  cy.get('[data-testid="btn-login"]').click();
});

// Uso no teste
cy.login("user", "pass");
```

### Padrão de Custom Commands

Use quando:
✅ Ação reutilizada em 2+ testes
✅ Fluxo complexo que pode ser abstraído
✅ Setup/teardown comum

Evite quando:
❌ Ação específica de um teste
❌ Lógica simples (use Page Object)

---

## Camada de Utilitários

### Responsabilidade

Fornecer funções auxiliares genéricas.

### Localização

`cypress/utils/`

### Módulos

#### helpers.js

Funções auxiliares:

- `dataGenerator.gerarUsuario()`
- `dateUtils.obterDataHoje()`
- `helpers.log()`, `helpers.screenshot()`

#### Outros

Crie módulos conforme necessário:

- `validadores.js`
- `conversor.js`
- `calculadora.js`

### Exemplo

```javascript
import { dataGenerator, helpers } from "../../utils/helpers";

it("Teste", () => {
  const usuario = dataGenerator.gerarUsuario();
  helpers.log("Usando: " + usuario);
});
```

---

## Camada de Dados

### Responsabilidade

Armazenar dados estáticos reutilizáveis.

### Localização

`cypress/fixtures/[modulo].json`

### Exemplo

```json
{
  "usuarioValido": {
    "usuario": "user@example.com",
    "senha": "senha123"
  },
  "mensagens": {
    "erro": "Erro na autenticação"
  }
}
```

### Carregamento

```javascript
cy.fixture("login.json").then((dados) => {
  cy.login(dados.usuarioValido.usuario, dados.usuarioValido.senha);
});
```

### Credenciais locais

- `cypress.env.json` contém credenciais locais e é ignorado pelo Git.
- `cypress.env.example.json` é o modelo versionável, sem segredos reais.
- O acesso ocorre por `Cypress.env("usuarios")` e `cy.loginComPerfil("user")`.
- Nunca coloque senhas reais em fixtures, specs, screenshots, logs ou documentação.

### Boas Práticas

✅ Dados por módulo
✅ Estrutura hierárquica
✅ Comentários explicativos
❌ Dados sensíveis em fixtures versionadas
❌ Dados muito grandes

---

## Interações Entre Camadas

### Fluxo de um Teste

```
Teste (E2E)
    ↓
Page Object (UI)
    ↓
Cypress API (Browser)
    ↓
Aplicação Web
```

### Dependências

```
E2E           Depende de:
├── Pages     ← Page Object
├── Utils     ← Utilitários
├── Fixtures  ← Dados
└── Cypress   ← Framework
```

### Exemplo Completo

```javascript
// 1. Teste (E2E) - Camada de Testes
import loginPage from "../../pages/LoginPage";
import { helpers } from "../../utils/helpers";

describe("CT-001", () => {
  it("CTN-001", () => {
    // 2. Page Object - Camada de UI
    cy.fixture("login.json").then((dados) => {
      // 3. Dados - Camada de Dados

      loginPage.acessarPagina();
      // ↓ Camada de Page Object
      // cy.visit('/login')
      // ↓ Cypress API
      // Browser navega para /login

      loginPage.realizarLogin(
        dados.usuarioValido.usuario,
        dados.usuarioValido.senha,
      );
      // ↓ Camada de Page Object + Utilitários
      // Preenche formulário
      // ↓ Cypress API
      // Browser interage com elementos

      loginPage.validarLoginRealizado();
      // ↓ Cypress API + Assertions
      // Validação do resultado
    });
  });
});
```

---

## Separação de Responsabilidades

### O que vai aonde?

| Questão                          | Resposta                      | Local                                     |
| -------------------------------- | ----------------------------- | ----------------------------------------- |
| Onde são os seletores?           | Page Object                   | `cypress/pages/`                          |
| Como fazer login?                | Custom Command ou Page Object | `cypress/support/commands.js` ou `pages/` |
| Qual é o dado de teste?          | Fixture                       | `cypress/fixtures/`                       |
| Como gerar um usuário aleatório? | Helper                        | `cypress/utils/`                          |
| Qual é a lógica do teste?        | Teste                         | `cypress/e2e/`                            |
| Como estruturar o teste?         | Page Object                   | Qualquer teste                            |

---

## Arquitetura de Dados

### Fixtures (Estático)

```
login.json
├── usuarioValido
├── usuarioInvalido
└── mensagens
```

### Gerador (Dinâmico)

```javascript
gerarUsuario("prefix");
gerarEmail();
gerarSenha();
gerarCPF();
gerarCNS();
```

### Combinação

```javascript
cy.fixture("login.json").then((dados) => {
  const usuario = dataGenerator.gerarUsuario();
  const senha = dados.senhaValida;
  loginPage.realizarLogin(usuario, senha);
});
```

---

## Escalabilidade

### Adicionando Novo Módulo

1. **Crie estrutura:**

   ```
   cypress/e2e/novo-modulo/
   cypress/pages/NovoPage.js
   cypress/fixtures/novo-modulo.json
   docs/casos-de-teste/CT-XXX.md
   ```

2. **Implemente Page Object:**

   ```javascript
   class NovoPage {
     // Elementos e ações
   }
   export default new NovoPage();
   ```

3. **Crie Fixture:**

   ```json
   { "dados": {} }
   ```

4. **Implemente Testes:**
   ```javascript
   import novoPage from "../../pages/NovoPage";
   describe("CT-XXX", () => {
     it("CTN-XXX", () => {
       // Teste
     });
   });
   ```

---

## Performance

### Otimizações

1. **Reutilizar elementos:**

   ```javascript
   const elemento = cy.get('[data-testid="..."]');
   elemento.click();
   elemento.should("be.visible");
   ```

2. **Fixtures cache:**

   ```javascript
   cy.fixture("dados.json");
   cy.fixture("dados.json"); // Cache automático
   ```

3. **Parallel execution:**
   ```bash
   cypress run --parallel
   ```

---

## Manutenção

### Atualizando Seletores

1. Atualizar em `Page Object`
2. Testes continuam funcionando
3. Mudança centralizada

### Adicionando Novo Seletor

1. Criar getter no Page Object
2. Usar nos testes
3. Fácil manutenção

### Removendo Funcionalidade

1. Identificar testes afetados
2. Remover testes ou atualizar
3. Remover Page Object se necessário

---

## Exemplo Prático: Adicionar Novo Teste

### Passo 1: Documentação

Criar `docs/casos-de-teste/CT-005.md` e cenários.

### Passo 2: Page Object

```javascript
// cypress/pages/NovaPage.js
class NovaPage {
  get elemento() {
    return cy.get('[data-testid="elemento"]');
  }
  acessar() {
    cy.visit("/nova");
  }
  validar() {
    cy.url().should("include", "/nova");
  }
}
export default new NovaPage();
```

### Passo 3: Fixture

```json
// cypress/fixtures/nova.json
{
  "dados": { "campo": "valor" }
}
```

### Passo 4: Teste

```javascript
// cypress/e2e/nova/nova.cy.js
import novaPage from "../../pages/NovaPage";
describe("CT-005", () => {
  it("CTN-005", () => {
    cy.fixture("nova.json").then((dados) => {
      novaPage.acessar();
      novaPage.validar();
    });
  });
});
```

### Passo 5: Executar

```bash
npm test
```

---

## Conclusão

## Configuração e execução atuais

- A URL padrão está em `cypress.config.js` como `baseUrl`.
- Uma URL diferente pode ser informada por `CYPRESS_BASE_URL`.
- `cypress.env.json` é local e não deve ser commitado.
- Screenshots, vídeos e relatórios gerados são ignorados pelo Git.
- `package-lock.json` deve ser versionado para garantir reprodutibilidade.

Execução por módulo:

```bash
npx cypress run --spec "cypress/e2e/login/loginUser.cy.js"
npx cypress run --spec "cypress/e2e/cadastro/cadastro.cy.js"
npx cypress run --spec "cypress/e2e/home/home.cy.js"
```

Esta arquitetura em camadas garante:

- ✅ Código limpo e legível
- ✅ Fácil manutenção
- ✅ Reutilização eficiente
- ✅ Escalabilidade
- ✅ Profissionalismo
- ✅ Melhor organização

Siga este padrão para novos testes e mantenha a consistência!

---

**Versão**: 2.0
**Última atualização**: 23/09/2026
