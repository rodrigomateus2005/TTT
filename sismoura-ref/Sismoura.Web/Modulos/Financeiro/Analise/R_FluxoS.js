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
var R_FluxoS = /** @class */ (function (_super) {
    __extends(R_FluxoS, _super);
    function R_FluxoS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_FluxoS.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FluxoS.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FluxoS.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_FluxoS.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_FluxoS.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnCellPrepared, this);
        }
    };
    R_FluxoS.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        if (this.ValidarCamposObrigatorios()) {
            var parametros = void 0;
            try {
                parametros = {
                    empresas: this.lstEmpresa.GetValues(),
                    dataInicial: this.Filtro.Data
                };
                abrirEspera("Aguarde. Gerando relação ...");
                this.ExecutarFuncaoServerSideAsynch("RelacaoFluxoCaixaSemanal", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.Colunas = retorno.ColunasGrade;
                    _this.grid.iniciarGrid();
                    _this.ConfigurarGrade();
                    var colunasAgrupamento = retorno.ColunasGrade.filter(function (item) { return item.IsColunaAgrupamento; })
                        .map(function (item) { return item.IsColunaAgrupamento; });
                    for (var x = 1; x <= colunasAgrupamento.length; x++) {
                        _this.grid.MoverColunaParaAgrupamento("Agrupamento_" + x, "Previsto_Semana_" + x);
                        _this.grid.MoverColunaParaAgrupamento("Agrupamento_" + x, "Realizado_Semana_" + x);
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
    R_FluxoS.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Data = this.DataServidor();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.AccordionFiltros.SetExpanded(true);
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_FluxoS.prototype.ConfigurarGrade = function () {
        var opt = this.grid.Grid.option("paging");
        opt.pageSize = 50;
        this.grid.Grid.option("paging", opt);
        this.grid.Grid.option("height", 425);
    };
    R_FluxoS.prototype.OnCellPrepared = function (s, e) {
        if (e.rowType == "data") {
            if (e.data["IsNegrito"] == "S") {
                e.cellElement.css("font-weight", "bold");
            }
        }
    };
    return R_FluxoS;
}(MouraPageRelacaoAngular));
var r_FluxoS = new R_FluxoS();
//# sourceMappingURL=R_FluxoS.js.map