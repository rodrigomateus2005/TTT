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
var R_RedZ = /** @class */ (function (_super) {
    __extends(R_RedZ, _super);
    function R_RedZ() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RedZ.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RedZ.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RedZ.prototype, "lstEmpresa", {
        get: function () {
            return window["lstEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_RedZ.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_RedZ.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid)
            adicionarEventoMoura(this.grid.CellPrepared, this.OnCellPrepared, this);
    };
    //
    R_RedZ.prototype.OnCellPrepared = function (s, e) {
        if (e.rowIndex > 0) {
            var reducaoZ = e.data["Reducao_Z"];
            var venda_fiscal = e.data["Venda_Fiscal"];
            if (reducaoZ != venda_fiscal)
                e.cellElement.css("color", "red");
        }
    };
    //
    R_RedZ.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.lstEmpresa.LimparSelecao();
        this.lstEmpresa.SetValues(["1"]);
        this.grid.PreencherGrid(null);
        this.grid.GroupBy("Data");
        this.grid.GroupBy("Empresa");
        this.AccordionFiltros.SetExpanded(true);
        this.RefreshAngular();
    };
    R_RedZ.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            abrirEspera("");
            parametros = {
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final,
                empresas: this.lstEmpresa.GetValues().join(",")
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.grid.GroupBy("Data");
                    _this.grid.GroupBy("Empresa");
                    _this.AccordionFiltros.SetExpanded(false);
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
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
    return R_RedZ;
}(MouraPageRelacaoAngular));
var r_RedZ = new R_RedZ();
//# sourceMappingURL=R_RedZ.js.map