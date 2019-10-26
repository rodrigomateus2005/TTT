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
var R_RB_PP = /** @class */ (function (_super) {
    __extends(R_RB_PP, _super);
    function R_RB_PP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RB_PP.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RB_PP.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RB_PP.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RB_PP.prototype, "lstContaCorrente", {
        get: function () {
            return window['lstContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RB_PP.prototype, "lstPosicoesTitulos", {
        get: function () {
            return window['lstPosicoesTitulos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RB_PP.prototype, "infVenda", {
        get: function () {
            return window['infVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RB_PP.prototype, "cboEstado", {
        get: function () {
            return window['cboEstado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RB_PP.prototype, "txtCidade", {
        get: function () {
            return window['txtCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RB_PP.prototype, "txtHora1", {
        get: function () {
            return window['txtHora1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RB_PP.prototype, "txtHora2", {
        get: function () {
            return window['txtHora2_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_RB_PP.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouEstado) {
            this.GetScope().MudouEstado = $.proxy(this.MudouEstado, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Filtro.Estado; }, this.GetScope().MudouEstado);
        }
        if (this.ParametrosTela) {
            var dataInicio = ConvertToDate(this.ParametrosTela.dataInicial);
            var dataFim = ConvertToDate(this.ParametrosTela.dataFinal);
            var empresa = this.ParametrosTela.empresa;
            this.Filtro.Periodo_Inicial = dataInicio;
            this.Filtro.Periodo_Final = dataFim;
            if (!String.IsNullOrWhiteSpace(empresa)) {
                var empresas;
                empresas = empresa.split(",");
                this.lstEmpresa.SetValues(empresas);
                this.PreencherGrade();
            }
        }
    };
    R_RB_PP.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.OnClickDetalhes, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.OnSelecionouEmpresa, this);
        }
    };
    R_RB_PP.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Vendedor = 0;
        this.Filtro.Cidade = 0;
        this.Filtro.Zona_Venda = 0;
        this.Filtro.Convenio = 0;
        this.Filtro.Usuario_Responsavel = 0;
        this.Filtro.Centro_Custo = 0;
        this.Filtro.Conta_Contabil = 0;
        this.lstContaCorrente.Lista.LimparSelecao();
        this.Filtro.Nosso_Numero = "";
        this.Filtro.Hora_Um = null;
        this.Filtro.Hora_Dois = null;
        this.lstPosicoesTitulos.LimparSelecao();
        this.Filtro.Tipo_Data = "B";
        this.Filtro.Tipo_Descricao_Cliente = "S";
        this.Filtro.Tipo_Cliente = "TODS";
        this.Filtro.Situacao = "TD";
        this.Filtro.Agrupamento = "NE";
        this.Filtro.Documento_Mercantil = "0";
        this.Filtro.Forma_Pagamento = "0";
        this.Filtro.Estado = "0";
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        if (ValoresSismoura.ConfiguracoesRetaguarda.Conta_Vendedor_Cliente) {
            this.Filtro.Tipo_Vendedor = "C";
        }
        else {
            this.Filtro.Tipo_Vendedor = "V";
        }
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.lstContaCorrente.Preencher(this.lstEmpresa.GetValuesNumber(), true);
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_RB_PP.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                codVendedor: CNum(this.Filtro.Vendedor),
                formaPagamento: CNum(this.Filtro.Forma_Pagamento),
                docMercantil: CNum(this.Filtro.Documento_Mercantil),
                codCidade: CNum(this.Filtro.Cidade),
                codZonaVenda: CNum(this.Filtro.Zona_Venda),
                codConvenio: CNum(this.Filtro.Convenio),
                codUsuarioResponsavel: CNum(this.Filtro.Usuario_Responsavel),
                codCentroCusto: CNum(this.Filtro.Centro_Custo),
                codContaContabil: CNum(this.Filtro.Conta_Contabil),
                tipoData: this.Filtro.Tipo_Data,
                situacao: this.Filtro.Situacao,
                posicaoTitulo: this.lstPosicoesTitulos.GetValues(),
                nossoNumero: this.Filtro.Nosso_Numero,
                tipoDescricaoCliente: this.Filtro.Tipo_Descricao_Cliente,
                listaEmpresas: this.lstEmpresa.GetValues(),
                hora1: this.Filtro.Hora_Um || "",
                hora2: this.Filtro.Hora_Dois || "",
                tipoCliente: this.Filtro.Tipo_Cliente,
                tipoVendedor: this.Filtro.Tipo_Vendedor,
                contasCorrentes: this.lstContaCorrente.Lista.GetValues(),
                estado: this.Filtro.Estado
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno);
                _this.AccordionFiltros.SetExpanded(false);
                _this.grid.Grid.clearGrouping();
                switch (_this.Filtro.Agrupamento) {
                    case "CL":
                        _this.grid.GroupBy("Nome_Cliente");
                        break;
                    case "DB":
                        _this.grid.GroupBy("Data_Baixa");
                        break;
                }
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    R_RB_PP.prototype.OnSelecionouLinha = function (s, e) {
        abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeContasAReceber), e.data["Codigo"]);
    };
    R_RB_PP.prototype.OnClickDetalhes = function (s, e) {
        if (e.commandName == "DETALHES") {
            this.infVenda.Abrir(CNum(e.data["Venda"]));
        }
    };
    R_RB_PP.prototype.MudouEstado = function () {
        this.txtCidade.LimparParametros();
        this.txtCidade.AddParametro("estado", this.Filtro.Estado);
    };
    R_RB_PP.prototype.OnSelecionouEmpresa = function (s, e) {
        this.lstContaCorrente.Preencher(this.lstEmpresa.GetValuesNumber(), true);
    };
    return R_RB_PP;
}(MouraPageRelacaoAngular));
var r_RB_PP = new R_RB_PP();
//# sourceMappingURL=R_RB_PP.js.map