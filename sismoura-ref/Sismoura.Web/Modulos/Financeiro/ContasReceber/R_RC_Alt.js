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
var R_RC_Alt = /** @class */ (function (_super) {
    __extends(R_RC_Alt, _super);
    function R_RC_Alt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RC_Alt.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Alt.prototype, "lstContaCorrente", {
        get: function () {
            return window['lstContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Alt.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Alt.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Alt.prototype, "infVenda", {
        get: function () {
            return window['infVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_RC_Alt.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_RC_Alt.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.OnClickBotaoLinha, this);
            adicionarEventoMoura(this.grid.CellPrepared, this.OnCellPrepared, this);
        }
    };
    R_RC_Alt.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.DataServidor();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Cliente = 0;
        this.lstContaCorrente.Lista.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_RC_Alt.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            try {
                parametros = {
                    dataInicial: this.Filtro.Periodo_Inicial,
                    dataFinal: this.Filtro.Periodo_Final,
                    codCliente: CNum(this.Filtro.Cliente),
                    codContasCorrentes: this.lstContaCorrente.Lista.GetValues(),
                    codEmpresas: this.lstEmpresa.GetValues()
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
    R_RC_Alt.prototype.OnSelecionouLinha = function (s, e) {
        abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeContasAReceber), e.data["Codigo_Receber"]);
    };
    R_RC_Alt.prototype.OnClickBotaoLinha = function (s, e) {
        this.infVenda.Abrir(CNum(e.data["Venda"]));
    };
    R_RC_Alt.prototype.OnCellPrepared = function (s, e) {
        if (e.column["dataField"] == "Detalhes") {
            if (e.data) {
                if (CNum(e.data["Venda"]) <= 0) {
                    e.cellElement.find("input").attr("disabled", "true");
                }
            }
        }
    };
    return R_RC_Alt;
}(MouraPageRelacaoAngular));
var r_RC_Alt = new R_RC_Alt();
//# sourceMappingURL=R_RC_Alt.js.map