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
var R_Psicot = /** @class */ (function (_super) {
    __extends(R_Psicot, _super);
    function R_Psicot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Psicot.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Psicot.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Psicot.prototype, "lstPortaria", {
        get: function () {
            return window["lstPortaria_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_Psicot.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_Psicot.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid)
            adicionarEventoMoura(this.grid.CellPrepared, this.OnCellPrepared, this);
    };
    //
    R_Psicot.prototype.OnCellPrepared = function (s, e) {
        if (e.rowType == "data") {
            if (this.Filtro.Inconsistente) {
                e.cellElement.css("color", "red");
            }
        }
    };
    R_Psicot.prototype.SelecionarTodos = function () {
        var lista = [];
        lista = this.lstPortaria.GetValuesRelacao();
        this.lstPortaria.SetValues(lista);
    };
    //
    R_Psicot.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.SelecionarTodos();
        this.Filtro.Estoque = false;
        this.Filtro.Inconsistente = false;
        this.grid.PreencherGrid(null);
        this.AccordionFiltros.SetExpanded(true);
        this.RefreshAngular();
    };
    R_Psicot.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        try {
            abrirEspera();
            var parametros = {};
            parametros = {
                estoque: this.Filtro.Estoque,
                inconsistencia: this.Filtro.Inconsistente,
                portaria: this.lstPortaria.GetValues().join(",")
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
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
    return R_Psicot;
}(MouraPageRelacaoAngular));
var r_Psicot = new R_Psicot();
//# sourceMappingURL=R_Psicot.js.map