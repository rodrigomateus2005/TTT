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
var R_RB_Cli = /** @class */ (function (_super) {
    __extends(R_RB_Cli, _super);
    function R_RB_Cli() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RB_Cli.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RB_Cli.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RB_Cli.prototype, "lstContaCorrente", {
        get: function () {
            return window['lstContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RB_Cli.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RB_Cli.prototype, "infVenda", {
        get: function () {
            return window['infVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RB_Cli.prototype, "lstPosicaoTitulos", {
        get: function () {
            return window['lstPosicaoTitulos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_RB_Cli.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_RB_Cli.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.OnClickBotaoLinha, this);
        }
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.OnMudouEmpresa, this);
        }
    };
    R_RB_Cli.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Cliente = 0;
        this.Filtro.Vendedor = 0;
        this.Filtro.Somente_Fiscal = false;
        this.lstContaCorrente.Lista.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        if (ValoresSismoura.ConfiguracoesRetaguarda.Conta_Vendedor_Cliente) {
            this.Filtro.Tipo_Vendedor = "C";
        }
        else {
            this.Filtro.Tipo_Vendedor = "V";
        }
        this.Filtro.Tipo_Periodo = "B";
        this.lstContaCorrente.Preencher(this.lstEmpresa.GetValuesNumber(), true);
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_RB_Cli.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            try {
                parametros = {
                    dataInicial: this.Filtro.Periodo_Inicial,
                    dataFinal: this.Filtro.Periodo_Final,
                    tipoPeriodo: this.Filtro.Tipo_Periodo,
                    codContasCorrentes: this.lstContaCorrente.Lista.GetValues(),
                    codEmpresas: this.lstEmpresa.GetValues(),
                    codVendedor: CNum(this.Filtro.Vendedor),
                    tipoVendedor: this.Filtro.Tipo_Vendedor,
                    codCliente: CNum(this.Filtro.Cliente),
                    somenteFiscal: this.Filtro.Somente_Fiscal,
                    codPosicoes: this.lstPosicaoTitulos.GetValues()
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.AccordionFiltros.SetExpanded(false);
                }, function (erro) {
                    fecharEspera();
                    LogarException(erro);
                }, this);
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }
    };
    R_RB_Cli.prototype.OnSelecionouLinha = function (s, e) {
        abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeContasAReceber), e.data["Codigo"]);
    };
    R_RB_Cli.prototype.OnClickBotaoLinha = function (s, e) {
        if (e.commandName === "DETALHES") {
            this.infVenda.Abrir(CNum(e.data["Venda"]));
        }
    };
    R_RB_Cli.prototype.OnMudouEmpresa = function (s, e) {
        this.lstContaCorrente.Preencher(this.lstEmpresa.GetValuesNumber(), true);
    };
    return R_RB_Cli;
}(MouraPageRelacaoAngular));
var r_RB_Cli = new R_RB_Cli();
//# sourceMappingURL=R_RB_Cli.js.map