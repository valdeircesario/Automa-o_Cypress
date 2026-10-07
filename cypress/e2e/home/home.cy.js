describe("Home e Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  //Validar cabeçalho Heeader
  it("deve validar o heeder cabeçalho", () => {
    // heeder cabeçalho
    cy.get(".max-w-7xl > .justify-between").should("be.visible");
    //lidar logo SVG na navegação
    cy.get("nav a svg").should("be.visible");

    // Validar título da aplicação
    cy.get(".space-x-3 > .bg-gradient-to-r")
      .should("be.visible")
      .and("contain.text", "SISC-Saúde");

    // Validar botão Entrar (apenas uma vez)
    cy.get(".bg-blue-600 > span")
      .should("be.visible")
      .and("contain.text", "Entrar");

    // Validar botão Cadastre-se
    cy.get(".bg-green-600")
      .should("be.visible")
      .and("contain.text", "Cadastre-se");
    cy.get(".max-w-7xl > .justify-between", { timeout: 10000 })
      .should("be.visible")
      .screenshot("home/heaader/001");
    cy.screenshot("home/heaader/002");
  });
  // Validar corpo da pagina home
  it("deve validar o corpo pagina home", () => {
    cy.get(".via-teal-600 > .relative").should("be.visible");
    cy.get(".relative > .rounded-full")
      .should("be.visible")
      .and("contain.text", "Plataforma Pública de Saúde");
    cy.get(".text-4xl")
      .should("be.visible")
      .and("contain.text", "Sistema Integrado deSaúde do Cidadão");
    cy.get(".via-teal-600 > .relative > .mx-auto")
      .should("be.visible")
      .and(
        "contain.text",
        "Conectando pacientes, unidades de saúde e laboratórios em uma única plataforma. Seu histórico médico sempre ao seu alcance.",
      );
    cy.get(".flex-col > .bg-white")
      .should("be.visible")
      .and("contain.text", "Cadastre-se Gratuitamente");
    cy.get(".flex-col > .border")
      .should("be.visible")
      .and("contain.text", "Acesso Profissionais");
    cy.get(".bg-slate-100")
      .should("be.visible")
      .and("contain.text", "Consultar Medicamentos");
    cy.get(".flex-col > .bg-white").should("be.visible");
    cy.contains("Unidades de Saúde");
    cy.get(":nth-child(2) > .text-2xl").should("be.visible");
    cy.contains("Pacientes Cadastrados");
    cy.get(":nth-child(3) > .text-2xl").should("be.visible");
    cy.contains("Satisfação");
    cy.get(".via-teal-600 > .relative", { timeout: 100000 })
      .should("be.visible")
      .screenshot("home/corpo/001");
    cy.screenshot("home/corpo/002");
  });
  // valida campanhas
  it("deve validar campanhas pagina home", () => {
    cy.get(":nth-child(3) > .max-w-6xl", { timeout: 10000 }).should(
      "be.visible",
    );
    cy.contains("Ativo agora").should("be.visible");
    cy.contains("Campanhas e Notícias").should("be.visible");
    cy.contains(
      "Fique por dentro das campanhas de saúde e informações importantes",
      { timeout: 1000 },
    ).should("be.visible");
    cy.get(":nth-child(3) > .max-w-6xl", { timeout: 100000 })
      .should("be.visible")
      .screenshot("home/campanhas/001");
    cy.screenshot("home/campanhas/002");
  });

  //Validar Consultas medicamentos
  it("deve validar consultas medicamentos pagina home", () => {

    cy.get(".min-h-screen > :nth-child(4)").should(
      "be.visible",
    );
    cy.get(".mb-8",{ timeout:10000}).should("be.visible");
    cy.contains("Consulta de Medicamentos").should("be.visible");
    cy.contains("Verifique os medicamentos disponíveis nas UBS").should(
      "be.visible",
    );
    cy.contains(
      "Qualquer usuário pode consultar os medicamentos disponíveis, filtrar pelo nome e ver o status de estoque.",
    ).should("be.visible");
    cy.get(".mb-8 > .inline-flex")
      .should("be.visible")
      .and("contain.text", "Abrir Consulta de Medicamentos")
      .click();
    // testa o botão clicar e abre o formulario de medicamento
    cy.contains("Consulta de medicamentos").should("be.visible");
    //verifica e valida o formulario
    cy.contains(
      "Pesquise por nome e veja em qual UBS o medicamento está disponível.",
    ).should("be.visible");
    cy.get(".fixed", { timeout: 10000 })
      .should("be.visible")
      .screenshot("home/medicamentos/001");
    //fechar e voltar
    cy.contains("Fechar").should("be.visible").click();
    //valida que voltou ao home
    cy.contains("Consulta de Medicamentos").should("be.visible");
    cy.get('.min-h-screen > :nth-child(4)',{ timeout:10000}).should("be.visible").screenshot("home/medicamentos/002") ;
    cy.screenshot("home/medicamentos/003");
  });

  // validar funcionalidades principais - seção de features
  it("deve validar a seção de funcionalidades principais", () => {
    // Validar container principal da seção e fazer scroll

    cy.get(".bg-slate-50.py-16").scrollIntoView().should("be.visible");
    cy.get(".bg-slate-50.py-16", { timeout: 10000 }).should(
      "be.visible",
    );

    // Validar título "Funcionalidades"
    cy.contains("Funcionalidades").scrollIntoView().should("be.visible");

    // Validar subtítulo "Funcionalidades Principais"
    cy.contains("Funcionalidades Principais")
      .scrollIntoView()
      .should("be.visible");

    // Validar descrição principal
    cy.contains(
      "Tudo que você precisa para gerenciar sua saúde de forma digital e integrada",
    )
      .scrollIntoView()
      .should("be.visible");

    // Validar card Histórico Médico (ícone rosa)
    cy.contains("Histórico Médico")
      .scrollIntoView()
      .should("be.visible")
      .closest("div")
      .find(".bg-rose-500.inline-flex")
      .should("be.visible");
    cy.contains("Acesse todo seu histórico médico em um só lugar")
      .scrollIntoView()
      .should("be.visible");

    // Validar card Cartão de Vacinas (ícone verde)
    cy.contains("Cartão de Vacinas")
      .scrollIntoView()
      .should("be.visible")
      .closest("div")
      .find(".bg-emerald-500.inline-flex")
      .should("be.visible");
    cy.contains("Consulte suas vacinas e próximas doses")
      .scrollIntoView()
      .should("be.visible");

    // Validar card Exames (ícone azul)
    cy.contains("Exames")
      .scrollIntoView()
      .should("be.visible")
      .closest("div")
      .find(".bg-sky-500.inline-flex")
      .should("be.visible");
    cy.contains("Visualize resultados e baixe laudos")
      .scrollIntoView()
      .should("be.visible");

    // Validar card Agendamentos (ícone roxo)
    cy.contains("Agendamentos")
      .scrollIntoView()
      .should("be.visible")
      .closest("div")
      .find(".bg-violet-500.inline-flex")
      .should("be.visible");
    cy.contains("Solicite consultas e acompanhe agendamentos", {
      timeout: 10000,
    })
      .scrollIntoView()
      .should("be.visible");
    cy.get(".bg-slate-50.py-16", { timeout: 10000 })
      .should("be.visible")
      .screenshot("home/funcionalidades/001");
    cy.screenshot("home/funcionalidades/002");
  });
  // deve validar card de criar conta
  it("deve validar card de criar conta", () => {
    // Validar container principal com gradiente
    cy.get(".to-teal-600", { timeout: 1000 })
      .scrollIntoView()
      .should("be.visible");

    // Validar título do card
    cy.contains("Pronto para começar?").scrollIntoView().should("be.visible");

    // Validar descrição do card
    cy.contains(
      "Cadastre-se agora e tenha acesso completo ao seu histórico de saúde",
      { timeout: 10000 },
    )
      .scrollIntoView()
      .should("be.visible");
    // Validar botão "Criar Conta Gratuita" e clicar
    cy.get(".to-teal-600 > .mx-auto > .inline-flex")
      .scrollIntoView()
      .should("be.visible")
      .and("contain.text", "Criar Conta Gratuita")
      .click();

    cy.get(".shadow-xl", { timeout: 10000 }).should("be.visible");

    // Validar que o modal/formulário de cadastro abriu
    cy.contains("Cadastro de Paciente").scrollIntoView().should("be.visible");

    // Validar botão "Criar Conta" no formulário
    cy.get(".gap-2")
      .scrollIntoView()
      .should("be.visible")
      .and("contain.text", "Criar Conta");

    cy.get(".shadow-xl", { timeout: 100000 })
      .should("be.visible")
      .screenshot("home/criarconta/001");

    // Validar link "Voltar ao início" e clicar
    cy.get(".max-w-2xl > :nth-child(3) > .text-sm")
      .scrollIntoView()
      .should("be.visible")
      .and("contain.text", "← Voltar ao início")
      .click();
    //valida tela inicial
    cy.get(".to-teal-600", { timeout: 100000 })
      .scrollIntoView()
      .should("be.visible")
      .screenshot("home/criarconta/002");
    cy.screenshot("home/criarconta/003");
  });

  //valida o footer
  it.only("deve validar o footer", () => {
    // Validar container footer
    cy.get("footer.bg-gray-950", { timeout: 10000 })
      .scrollIntoView()
      .should("be.visible");

    // Validar ícone de coração (heart) - usar .first() pois pode haver múltiplos
    cy.get("footer .lucide-heart").first().should("be.visible");

    // Validar logo/marca SISC — Saúde
    cy.contains("SISC — Saúde").scrollIntoView().should("be.visible");

    // Validar link "Acesso Profissionais"
    cy.contains("Acesso Profissionais").should("be.visible");

    // Validar separador bullet
    cy.contains("•").should("be.visible");

    // Validar texto de copyright
    cy.contains("© 2026 Sistema Integrado de Saúde do Cidadão")
      .scrollIntoView()
      .should("be.visible");
    cy.get('.bg-gray-950', { timeout: 10000 })
      .should("be.visible")
      .screenshot("home/footer/001");
    cy.screenshot("home/footer/002");
  });
});
