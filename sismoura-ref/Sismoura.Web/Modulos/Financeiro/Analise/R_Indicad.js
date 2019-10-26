var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var R_Indicad = /** @class */ (function (_super) {
    __extends(R_Indicad, _super);
    function R_Indicad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Indicad.prototype, "grid", {
        //Mapeando os componentes
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Indicad.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Indicad.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Indicad.prototype, "mdInformacao", {
        get: function () {
            return window['mdInformacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Indicad.prototype, "txtInformacao", {
        get: function () {
            return window['txtInformacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Indicad.prototype, "AccordionFiltros", {
        //Mapeando o Accordion
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Indicad.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_Indicad.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.OnClickBotaDetalhe, this);
        }
    };
    R_Indicad.prototype.OnClickBotaDetalhe = function (s, e) {
        //Abrir um modal de venda com um btnGenerico no grid
        if (e.commandName == "btnAjuda") { //e.data["Coluna"] serve para obter o valor da celula
            this.mdInformacao.Show(); //abrindo o modal
            var informacao = {};
            var indicador = {};
            indicador = e.data["Descricao"];
            switch (indicador) {
                case "Faturamento Total R$":
                    informacao = "Faturamento Total R$ \n\n" +
                        "O Faturamento total representa a somatória de todas as vendas realizadas em um determinado período. \n" +
                        "Devemos sempre analisar o resultado deste índice comparando com o resultado obtido no mesmo período de um ano anterior. \n\n" +
                        "Exemplo: Se no mês de agosto de 2015 a empresa faturou R$200.000, 00 e em agosto de 2016 R$150.000, 00, podemos concluir que " +
                        "o número de vendas realizadas diminuiu ou que os vendedores estão concedendo muitos descontos, fazendo com que " +
                        "a margem de lucro das vendas diminua.";
                    break;
                case "CMV + CSV R$":
                    informacao = "CMV + CSV R$\n\n" +
                        "A apuração do custo das mercadorias vendidas está diretamente relacionada aos estoques da empresa, " +
                        "pois representa a baixa efetuada nas contas dos estoques por vendas realizadas no período.\n\n" +
                        "O CMV demonstra o valor de CUSTO de todas as mercadorias vendidas em um determinado período.\n\n" +
                        "Assim como o CMV temos o CSV (Custo dos Serviços Vendidos), também conhecidos como CSP " +
                        "(Custo dos Serviços Prestados), e também servem para apurar o custo de todos os serviços prestados" +
                        "sobre o valor do faturamento que eles retornaram.";
                    break;
                case "Custo Fixo Mensal R$":
                    informacao = "Custo Fixo Mensal R$\n\n" +
                        "Custos Fixos são os gastos que permanecem constantes, independente de aumentos ou diminuições na quantidade " +
                        "produzida e vendida. Os custos fixos fazem parte da estrutura do negócio.\n\n" +
                        "Exemplos:\n" +
                        "Contas de água;\n" +
                        "Aluguel;\n" +
                        "Material de limpeza;\n" +
                        "Salários.\n\n" +
                        "Analisando o valor das despesas fixas é possível identificar que determinado centro de custo" +
                        "teve um aumento considerável em relação a um período anterior.\n" +
                        "Exemplo: A conta de água do mês de maio foi de R$100,00 enquanto a de junho foi de R$150,00.";
                    break;
                case "Custo Variável Mensal R$":
                    informacao = "Custo Variável Mensal R$\n\n" +
                        "Custos variáveis são aqueles que variam diretamente com a quantidade produzida ou vendida, na mesma proporção.\n\n" +
                        "Exemplo:\n" +
                        "Em uma indústria de móveis, são produzidas, por mês, 250 cadeiras. \n" +
                        "Para a produção, é contratada mão de obra temporária, que varia de acordo com a empreitada. " +
                        "O pagamento é feito também por trabalho. " +
                        "Como estas produções exigem maior gasto de energia, quando a produção " +
                        "aumenta a conta de energia sobe 40%. Este percentual é um exemplo de custo variável.";
                    break;
                case "Margem de Contribuição R$":
                    informacao = "Margem de Contribuição R$\n\n" +
                        "O termo Margem de Contribuição tem um significado igual ao termo " +
                        "Ganho Bruto sobre as Vendas. Isso indica para o empresário o quanto sobra " +
                        "das vendas para que a empresa possa pagar suas despesas fixas e gerar lucro.\n" +
                        "Margem de Contribuição é igual ao valor das Vendas menos o valor " +
                        "dos Custos Variáveis e das Despesas Variáveis.\n\n" +
                        "Fórmula:\n" +
                        "Margem de Contribuição = Total do Faturamento – (Custos Variáveis + Despesas Variáveis)\n";
                    break;
                case "Margem de Contribuição %":
                    informacao = "Margem de Contribuição %\n\n" +
                        "O termo Margem de Contribuição tem um significado igual ao termo " +
                        "Ganho Bruto sobre as Vendas. Isso indica para o empresário o quanto sobra " +
                        "das vendas para que a empresa possa pagar suas despesas fixas e gerar lucro.\n" +
                        "Margem de Contribuição é igual ao valor das Vendas menos o valor " +
                        "dos Custos Variáveis e das Despesas Variáveis.\n\n" +
                        "Fórmula:\n" +
                        "Margem de Contribuição = Total do Faturamento – (Custos Variáveis + Despesas Variáveis)";
                    break;
                case "Ponto de Equilíbrio Operacional R$":
                    informacao = "Ponto de Equilíbrio Operacional R$\n\n" +
                        "O ponto de equilíbrio nos mostra quanto é necessário vender para que as" +
                        "receitas se igualem aos custos, pois ele é um indicador de segurança do" +
                        "negócio. Ele indica em que momento, a partir das projeções de vendas do" +
                        "empreendedor, a empresa estará igualando suas receitas e seus custos." +
                        "Com isso, é eliminada a possibilidade de prejuízo em sua operação.\n\n" +
                        "Fórmula:\n" +
                        "Ponto de Equilíbrio = (Custo Fixo / (Receita - Custo Variável)) * 100\n\n" +
                        "Exemplo:\n" +
                        "Imagine uma empresa que tenha o custo fixo de R$ 19.500,00. Se ela" +
                        "tem uma receita de R$ 100.000,00 e um custo variável de R$ 70.000,00," +
                        "o seu ponto de equilíbrio seria: \n" +
                        "Ponto de Equilíbrio = (R$ 19.500,00 / (R$ 100.000,00 – R$ 70.000,00)) * 100 = 65%\n" +
                        "Se esse percentual for calculado sobre o faturamento projetado, teremos o seguinte resultado:\n" +
                        "R$ 100.000,00 x 65% = R$ 65.000,00.\n" +
                        "Ou seja, R$ 65.000,00 seria o valor mínimo que a empresa teria que vender.\n";
                    break;
                case "Prazo Médio de Pagamento (em dias)":
                    informacao = "Prazo Médio de Pagamento (em dias)\n" +
                        "O período médio de pagamento, ou idade média das duplicatas a pagar, é calculado" +
                        "do mesmo modo que o período médio de cobrança." +
                        "Quanto menor for o prazo médio de pagamentos, maior será a necessidade de" +
                        "capital de giro da empresa, pois caso a empresa receba de seus clientes com um prazo de " +
                        "60 dias, porém tenha que pagar seu fornecedor a cada 30 dias, significa que a empresa " +
                        "dependerá do dinheiro de terceiros (emprestimos bancários) para pagar suas contas.\n" +
                        "\n" +
                        "Fórmula: \n" +
                        "Prazo Médio de Pagamentos = Duplicatas a Pagar / (Compras anuais / 360)\n\n" +
                        "Exemplo:\n" +
                        "R$ 50.000,00 / (R$ 240.000,00 / 360) = 75 dias\n" +
                        "Ou seja, para cada compra que a empresa realiza, em média ela efetua o pagamento em 75 dias.";
                    break;
                case "Prazo Médio de Recebimento (em dias)":
                    informacao = "Prazo Médio de Recebimento (em dias)\n\n" +
                        "O prazo médio de recebimentos, ou idade média das duplicatas a receber, é útil" +
                        "na avaliação das políticas de crédito e cobrança." +
                        "Quanto maior for o prazo médio de recebimentos, maior será a necessidade de" +
                        "capital de giro da empresa, pois caso a empresa receba de seus clientes com um prazo de " +
                        "60 dias, porém tenha que pagar seu fornecedor a cada 30 dias, significa que a empresa " +
                        "dependerá do dinheiro de terceiros (emprestimos bancários) para pagar suas contas.\n\n" +
                        "Fórmula: " +
                        "Período Médio de Recebimentos = Duplicatas a Receber / (Vendas anuais / 360)\n\n" +
                        "Exemplo:\n" +
                        "Exemplo: R$ 50.000,00 / (R$ 480.000,00 / 360) = 37,5 dias\n" +
                        "Ou seja, para cada venda a prazo que a empresa realiza, em média ela receberá o pagamento em 37,5 dias.";
                    break;
                case "Ticket Médio R$":
                    informacao = "Ticket Médio R$\n\n" +
                        "Ticket médio é o valor médio das vendas de um determinado estabelecimento comercial." +
                        "Este cálculo é obtido pela divisão do volume de vendas, em determinado período" +
                        "(pode ser dia, semana, mês), pelo número de Cupons Fiscais emitidos no período.\n\n" +
                        "Por exemplo, se, em um determinado dia o estabelecimento comercial faturou R$ 1.000,00 " +
                        "e foram emitidos 250 cupons fiscais, basta dividir R$ 1.000,00 por 250, " +
                        "que será calculado o valor do ticket médio, que seria, no caso, R$ 4,00. \n\n" +
                        "Fórmula:\n" +
                        "Ticket Médio = Faturamento Bruto / Volume Total de Vendas";
                    break;
                case "Lucro R$":
                    informacao = "Lucro R$\n\n" +
                        "Lucro quando conceituado de uma forma simplificada, nada mais é do que o resultado" +
                        "positivo deduzido das vendas os custos e despesas.";
                    break;
                case "Lucratividade %":
                    informacao = "Lucratividade %\n\n" +
                        "Lucratividade é a relação do valor do lucro com o montante de vendas, ou seja, divide-se o " +
                        "valor do lucro pelo valor total do faturamento.\n" +
                        "Para os pequenos negócios é importante que os lucros gerados sejam equivalentes a 3% " +
                        "ao mês em média do valor dos investimentos próprios.\n" +
                        "Com relação à lucratividade (lucros sobre as vendas) para as micros e pequenas empresas" +
                        "ela varia entre 5% a 10% para indústria e comércio.\n" +
                        "No caso de prestadoras de serviços ficam em torno de 15% a 20%.\n\n" +
                        "Para análise correta da lucratividade, as considerações são as seguintes: " +
                        "quanto maior, melhor para a empresa; a mesma deverá ser comparada com média do " +
                        "setor em que a empresa atua; e deverá atender a expectativa do empreendedor.";
                    break;
                case "INPC":
                    informacao = "INPC - Índice Nacional de Preços ao Consumidor\n\n" +
                        "É medido pelo IBGE (Instituto Brasileiro de Geografia" +
                        "e Estatística desde setembro de 1979.\n" +
                        "Ele é obtido a partir dos Índices de Preços ao" +
                        "Consumidor regionais e tem como objetivo oferecer a variação dos preços no mercado varejista," +
                        "mostrando, assim, o aumento do custo de vida da população.\n\n" +
                        "Como é calculado o INPC?\n" +
                        "O período de coleta do INPC vai do dia 1º ao dia 30 ou 31," +
                        "dependendo do mês. A pesquisa é realizada em estabelecimentos" +
                        "comerciais, prestadores de serviços, domicílios (para verificar valores de aluguel) e " +
                        "concessionárias de serviços públicos. Os preços obtidos" +
                        "são os efetivamente cobrados ao consumidor, para pagamento à vista.\n\n" +
                        "Para que é usado o INPC?\n" +
                        "O índice é utilizado para negociação de reajustes salariais.\n" +
                        "É possível atualizar o valor deste índice acessando Financeiro > Análise > Cadastro de Índice Financeiro.";
                    break;
                case "IGP-M":
                    informacao = "IGP-M - Índice Geral de Preços do Mercado\n\n" +
                        "É medido pela Fundação Getulio Vargas (FGV) e registra a inflação de" +
                        "preços desde matérias-primas agrícolas e industriais até bens e serviços finais.\n" +
                        "Esse índice é formado pelo IPA-M (Índice de Preços por Atacado - Mercado), IPC-M" +
                        "(Índice de Preços ao Consumidor - Mercado) e INCC-M" +
                        "(Índice Nacional do Custo da Construção - Mercado), com pesos de 60%," +
                        "30% e 10%, respectivamente. A pesquisa de preços é feita entre o dia 21" +
                        "do mês anterior até o dia 20 do mês atual.\n\n" +
                        "O IGP-M mede a inflação para que parcela da população?\n" +
                        "Abrange toda a população, sem restrição de nível de renda.\n\n" +
                        "Para que é usado o IGP-M?\n" +
                        "Contratos de aluguel, reajustes de tarifas públicas e planos e seguros" +
                        "de saúde (nos contratos mais antigos).\n\n" +
                        "É possível atualizar o valor deste índice acessando Financeiro > Análise > Cadastro de Índice Financeiro.";
                    break;
                default:
                    informacao = "Nenhuma ajuda disponível.";
                    break;
            }
            this.Filtro.Informacao = informacao;
            this.RefreshAngular();
        }
    };
    R_Indicad.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        try {
            abrirEspera();
            var parametros = {};
            if (this.ValidarCamposObrigatorios()) {
                parametros = {
                    dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                    dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                    empresas: this.lstEmpresa.GetValuesRelacao().join(",")
                };
            }
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = "";
                    retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno.grid);
                    _this.AccordionFiltros.SetExpanded(false);
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
                }
            }, function (error) {
                fecharEspera();
                LogarException(error);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    R_Indicad.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.lstEmpresa.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_Indicad;
}(MouraPageRelacaoAngular));
var r_Indicad = new R_Indicad();
//# sourceMappingURL=R_Indicad.js.map