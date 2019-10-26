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
var R_FluxoD = /** @class */ (function (_super) {
    __extends(R_FluxoD, _super);
    function R_FluxoD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_FluxoD.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FluxoD.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FluxoD.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_FluxoD.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_FluxoD.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnCellPrepared, this);
        }
    };
    R_FluxoD.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        if (this.ValidarCamposObrigatorios()) {
            var parametros = void 0;
            try {
                parametros = {
                    empresas: this.lstEmpresa.GetValues(),
                    dataInicial: this.Filtro.DataInicial,
                    dataFinal: this.Filtro.DataFinal
                };
                abrirEspera("Aguarde. Gerando relação ...");
                this.ExecutarFuncaoServerSideAsynch("RelacaoFluxoCaixaDiario", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.Colunas = retorno.ColunasGrade;
                    _this.grid.iniciarGrid();
                    _this.ConfigurarGrade();
                    var colunasAgrupamento = retorno.ColunasGrade.filter(function (item) { return item.IsColunaAgrupamento; })
                        .map(function (item) { return item.IsColunaAgrupamento; });
                    for (var x = 1; x <= colunasAgrupamento.length; x++) {
                        _this.grid.MoverColunaParaAgrupamento("Agrupamento_" + x, "Previsto_Dia_" + x);
                        _this.grid.MoverColunaParaAgrupamento("Agrupamento_" + x, "Realizado_Dia_" + x);
                    }
                    _this.grid.MoverColunaParaAgrupamento("Total", "Total_Previsto");
                    _this.grid.MoverColunaParaAgrupamento("Total", "Total_Realizado");
                    _this.grid.GroupBy("Tipo_Agrupar");
                    _this.grid.OrderBy("Contador", "asc");
                    _this.grid.PreencherGrid(retorno.Dados);
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
    R_FluxoD.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.DataInicial = this.PrimeiroDiaMes();
        this.Filtro.DataFinal = this.DataServidor();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.AccordionFiltros.SetExpanded(true);
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_FluxoD.prototype.ConfigurarGrade = function () {
        var opt = this.grid.Grid.option("paging");
        opt.pageSize = 50;
        this.grid.Grid.option("paging", opt);
        this.grid.Grid.option("height", 400);
    };
    R_FluxoD.prototype.OnCellPrepared = function (s, e) {
        if (e.rowType == "data") {
            if (e.data["IsNegrito"] == "S") {
                e.cellElement.css("font-weight", "bold");
            }
        }
    };
    R_FluxoD.prototype.ValidarCamposObrigatorios = function () {
        var retorno = _super.prototype.ValidarCamposObrigatorios.call(this);
        if (retorno) {
            if (!this.ValidarDatas()) {
                retorno = false;
            }
        }
        return retorno;
    };
    R_FluxoD.prototype.ValidarDatas = function () {
        var retorno = true;
        var diffTime = Math.abs(this.Filtro.DataFinal.getTime() - this.Filtro.DataInicial.getTime());
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays >= 31) {
            MostrarAlerta("Não é possível gerar a relação de fluxo de caixa de um período maior do que 31 dias.");
            retorno = false;
        }
        return retorno;
    };
    return R_FluxoD;
}(MouraPageRelacaoAngular));
var r_FluxoD = new R_FluxoD();
//# sourceMappingURL=R_FluxoD.js.map