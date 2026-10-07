# CT-002 - Cadastro de paciente

## Objetivo

Validar o comportamento da tela de cadastro de paciente, incluindo a renderização da interface, obrigatoriedade de campos, regras de validação de dados, comportamento de mensagens de erro e conclusão do cadastro com sucesso.

## Escopo

Este caso de teste cobre:

- Abertura do formulário de cadastro a partir da home
- Validação visual dos textos e seções da tela
- Validação de campos obrigatórios
- Regras de CPF e CNS
- Validação de senha e confirmação
- Cadastro com dados válidos
- Retorno à tela inicial

## Pré-condições

- A aplicação está disponível em `http://localhost:5173/`.
- O usuário acessa a página inicial.
- O botão `Cadastre-se` está visível na home.
- O navegador está configurado para executar os testes automatizados em ambiente local.

## Casos de teste

| ID        | Título                                        | Status          |
| --------- | --------------------------------------------- | --------------- |
| CT-002-01 | Exibir tela de cadastro a partir da home      | ✅ Implementado |
| CT-002-02 | Validar textos, seções e campos do formulário | ✅ Implementado |
| CT-002-03 | Cadastrar usuário válido                      | ✅ Implementado |
| CT-002-04 | Validar nome obrigatório                      | ✅ Implementado |
| CT-002-05 | Validar nome e CPF obrigatórios               | ✅ Implementado |
| CT-002-06 | Validar CPF inválido                          | ✅ Implementado |
| CT-002-07 | Validar CPF já cadastrado                     | ✅ Implementado |
| CT-002-08 | Validar email já cadastrado                   | ✅ Implementado |
| CT-002-09 | Validar endereço obrigatório                  | ✅ Implementado |
| CT-002-10 | Validar CEP obrigatório                       | ✅ Implementado |
| CT-002-11 | Validar email obrigatório                     | ✅ Implementado |
| CT-002-12 | Validar CNS obrigatório                       | ✅ Implementado |
| CT-002-13 | Validar CNS com menos de 15 dígitos           | ✅ Implementado |
| CT-002-14 | Validar data de nascimento obrigatória        | ✅ Implementado |
| CT-002-15 | Validar CNS já cadastrado                     | ✅ Implementado |
| CT-002-16 | Validar senha obrigatória                     | ✅ Implementado |
| CT-002-17 | Validar senha com menos de 6 caracteres       | ✅ Implementado |
| CT-002-18 | Validar confirmação de senha divergente       | ✅ Implementado |
| CT-002-19 | Voltar ao início sem concluir cadastro        | ✅ Implementado |

## Detalhamento dos casos de teste

### CT-002-01 — Exibir tela de cadastro a partir da home

- Objetivo: Verificar que a navegação até o formulário de cadastro está correta.
- Dados de teste: nenhum dado obrigatório; execução direta na home.
- Passos:
  1. Acessar a home em `http://localhost:5173/`.
  2. Clicar no botão `Cadastre-se`.
  3. Observar a abertura do formulário.
- Resultado esperado:
  - O formulário de cadastro é exibido.
  - Os campos e mensagens de orientação ficam visíveis.

### CT-002-02 — Validar textos, seções e campos do formulário

- Objetivo: Confirmar que a tela de cadastro exibe corretamente os títulos, seções e campos esperados.
- Dados de teste: nenhum.
- Passos:
  1. Abrir o formulário de cadastro.
  2. Verificar a presença dos textos `SISC`, `Cadastro de Paciente` e descrição do formulário.
  3. Validar a existência das seções `Dados Pessoais`, `Endereço` e `Segurança`.
  4. Verificar a presença dos campos `Nome Completo`, `CPF`, `CNS`, `Data de Nascimento`, `Endereço Completo`, `CEP`, `Telefone`, `Email`, `Senha`, `Confirmar Senha`.
  5. Confirmar a presença dos links/ações `Criar Conta`, `Já tem uma conta? Faça login aqui` e `Voltar ao início`.
- Resultado esperado:
  - Todos os textos, campos e ações da tela são exibidos corretamente.

### CT-002-03 — Cadastrar usuário válido

- Objetivo: Validar que um cadastro com dados válidos é aceito e concluído com sucesso.
- Dados de teste:
  - Nome: gerado por `gerarUsuario()`
  - CPF: gerado por `gerarCPF()`
  - CNS: gerado por `gerarCNS()`
  - Nascimento: `1990-01-01`
  - Endereço: `Rua Exemplo, 123`
  - CEP: `12345-678`
  - Telefone: `(11) 91234-5678`
  - Email: gerado por `gerarEmail()`
  - Senha: `Senha@123`
- Passos:
  1. Abrir o formulário.
  2. Preencher todos os campos com dados válidos.
  3. Clicar em `Criar Conta`.
- Resultado esperado:
  - A aplicação exibe `Cadastro realizado com sucesso!`.
  - O usuário é direcionado para a área de portal/página seguinte.

### CT-002-04 — Validar nome obrigatório

- Objetivo: Verificar que o campo nome é obrigatório.
- Dados de teste:
  - Nome vazio
  - Demais campos válidos
- Passos:
  1. Abrir cadastro.
  2. Não preencher nome.
  3. Preencher demais campos válidos.
  4. Clicar em `Criar Conta`.
- Resultado esperado:
  - A mensagem `Nome é obrigatório` é exibida.

### CT-002-05 — Validar nome e CPF obrigatórios

- Objetivo: Verificar que a tela bloqueia o envio quando nome e CPF não são preenchidos.
- Dados de teste:
  - Nome vazio
  - CPF vazio
- Passos:
  1. Abrir cadastro.
  2. Deixar nome e CPF em branco.
  3. Preencher demais campos válidos.
  4. Clicar em `Criar Conta`.
- Resultado esperado:
  - As mensagens `Nome é obrigatório` e `CPF é obrigatório` são exibidas.

### CT-002-06 — Validar CPF inválido

- Objetivo: Confirmar a rejeição de CPF com dígitos inválidos.
- Dados de teste:
  - CPF: `123.456.789-00`
- Passos:
  1. Abrir cadastro.
  2. Preencher todos os campos válidos, exceto o CPF.
  3. Informar um CPF inválido.
  4. Clicar em `Criar Conta`.
- Resultado esperado:
  - A mensagem `CPF inválido` é exibida.

### CT-002-07 — Validar CPF já cadastrado

- Objetivo: Garantir que CPF duplicado seja bloqueado.
- Dados de teste:
  - CPF já cadastrado: `788.883.906-18`
- Passos:
  1. Abrir cadastro.
  2. Preencher todos os campos com dados válidos.
  3. Informar o CPF já existente.
  4. Clicar em `Criar Conta`.
- Resultado esperado:
  - A mensagem `Este CPF já está cadastrado` é exibida.

### CT-002-08 — Validar email já cadastrado

- Objetivo: Garantir que um email duplicado seja rejeitado.
- Dados de teste:
  - Email já cadastrado: `usuarioteste.2424@example.com`
- Passos:
  1. Abrir cadastro.
  2. Informar dados válidos, exceto o email.
  3. Usar um email já cadastrado.
  4. Clicar em `Criar Conta`.
- Resultado esperado:
  - Aparece a mensagem `Este email já está cadastrado`.

### CT-002-09 — Validar endereço obrigatório

- Objetivo: Verificar que endereço é obrigatório.
- Dados de teste:
  - Campo de endereço vazio
- Passos:
  1. Preencher todos os campos válidos menos endereço.
  2. Clicar em `Criar Conta`.
- Resultado esperado:
  - A mensagem `Endereço é obrigatório` aparece.

### CT-002-10 — Validar CEP obrigatório

- Objetivo: Garantir que o CEP seja obrigatório.
- Dados de teste:
  - CEP vazio
- Passos:
  1. Informar dados válidos em todos os campos.
  2. Deixar o CEP em branco.
  3. Clicar em `Criar Conta`.
- Resultado esperado:
  - A mensagem `CEP é obrigatório` é exibida.

### CT-002-11 — Validar email obrigatório

- Objetivo: Garantir que o email seja obrigatório.
- Dados de teste:
  - Email em branco
- Passos:
  1. Preencher todos os outros campos com dados válidos.
  2. Deixar o campo email vazio.
  3. Clicar em `Criar Conta`.
- Resultado esperado:
  - A mensagem `Email é obrigatório` é exibida.

### CT-002-12 — Validar CNS obrigatório

- Objetivo: Verificar que o CNS seja obrigatório.
- Dados de teste:
  - CNS vazio
- Passos:
  1. Preencher todos os campos válidos, exceto o CNS.
  2. Clicar em `Criar Conta`.
- Resultado esperado:
  - A mensagem `CNS é obrigatório` aparece.

### CT-002-13 — Validar CNS com menos de 15 dígitos

- Objetivo: Validar regra de tamanho do CNS.
- Dados de teste:
  - CNS: `78965412`
- Passos:
  1. Abrir cadastro.
  2. Informar dados válidos e inserir CNS com 8 dígitos.
  3. Clicar em `Criar Conta`.
- Resultado esperado:
  - A mensagem `CNS deve ter 15 dígitos` é apresentada.

### CT-002-14 — Validar data de nascimento obrigatória

- Objetivo: Confirmar que a data de nascimento é obrigatória.
- Dados de teste:
  - Campo de nascimento vazio
- Passos:
  1. Preencher todos os campos válidos, exceto a data de nascimento.
  2. Clicar em `Criar Conta`.
- Resultado esperado:
  - A mensagem `Data de nascimento é obrigatória` é exibida.

### CT-002-15 — Validar CNS já cadastrado

- Objetivo: Confirmar que o sistema bloqueia a duplicidade de CNS.
- Dados de teste:
  - CNS já cadastrado: `123456789123456`
- Passos:
  1. Abrir cadastro.
  2. Informar todos os demais campos válidos.
  3. Preencher o CNS duplicado.
  4. Clicar em `Criar Conta`.
- Resultado esperado:
  - A mensagem `Este CNS já está cadastrado` aparece.

### CT-002-16 — Validar senha obrigatória

- Objetivo: Confirmar que a senha é obrigatória.
- Dados de teste:
  - Senha em branco
  - Confirmação preenchida
- Passos:
  1. Preencher todos os campos válidos.
  2. Deixar senha vazia.
  3. Preencher confirmação de senha.
  4. Clicar em `Criar Conta`.
- Resultado esperado:
  - A mensagem `Senha é obrigatória` é exibida.
  - A mensagem `As senhas não coincidem` também pode ser exibida, conforme lógica da validação.

### CT-002-17 — Validar senha com menos de 6 caracteres

- Objetivo: Garantir que a política mínima de senha seja aplicada.
- Dados de teste:
  - Senha: `123`
- Passos:
  1. Informar todos os dados válidos.
  2. Digitar senha com 3 caracteres.
  3. Clicar em `Criar Conta`.
- Resultado esperado:
  - A mensagem `Senha deve ter pelo menos 6 caracteres` é exibida.

### CT-002-18 — Validar confirmação de senha divergente

- Objetivo: Confirmar que a confirmação deve bater com a senha informada.
- Dados de teste:
  - Senha: `Senha@123`
  - Confirmação: `Senha@1233`
- Passos:
  1. Preencher todos os campos válidos.
  2. Inserir senha diferente na confirmação.
  3. Clicar em `Criar Conta`.
- Resultado esperado:
  - A mensagem `As senhas não coincidem` é exibida.

### CT-002-19 — Voltar ao início sem concluir cadastro

- Objetivo: Verificar navegação de retorno à página inicial.
- Dados de teste: nenhum.
- Passos:
  1. Abrir o formulário de cadastro.
  2. Clicar em `Voltar ao início`.
- Resultado esperado:
  - O usuário volta para a home.
  - A tela inicial com o botão `Cadastre-se` fica disponível novamente.

## Massa de dados

- Nome: `Maria da Silva Santos`
- CPF válido: gerado por `gerarCPF()`
- CNS válido: gerado por `gerarCNS()`
- Nascimento: `1990-01-01`
- Endereço: `Rua Exemplo, 123`
- CEP: `12345-678`
- Telefone: `(11) 91234-5678`
- Email válido: gerado por `gerarEmail()`
- Senha válida: `Senha@123`
- CPF duplicado: `788.883.906-18`
- Email duplicado: `usuarioteste.2424@example.com`
- CNS duplicado: `123456789123456`

## Critérios de aceitação

- O formulário deve apresentar mensagens de erro específicas para cada regra de validação.
- Nenhum campo pode aceitar dados inválidos sem feedback visual.
- O cadastro válido deve ser concluído com sucesso.
- O sistema deve impedir duplicidade de CPF e CNS e rejeitar email já cadastrado.

## Automação

Os cenários deste documento estão implementados em `cypress/e2e/cadastro/cadastro.cy.js` e podem ser executados com:

```bash
npx cypress run --spec "cypress/e2e/cadastro/cadastro.cy.js"
```

## Observações

- Os casos foram estruturados seguindo a abordagem de testes orientados por regras de negócio e validações de integridade de dados.
- A automatização utiliza geração dinâmica de dados para reduzir colisões e garantir isolamento entre execuções.
- O arquivo pode ser ampliado para incorporar novos cenários de regressão ou casos de borda de validação.
