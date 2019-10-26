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
var R_RecKit = /** @class */ (function (_super) {
    __extends(R_RecKit, _super);
    function R_RecKit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RecKit.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RecKit.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_RecKit.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_RecKit.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_RecKit.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        try {
            abrirEspera();
            var parametros = {};
            parametros = {
                kit: CNum(this.Filtro.Materia),
                deposito: CNum(this.Filtro.Deposito)
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    if (retorno.Total == 0) {
                        MostrarAlerta("Kit não encontrado!");
                        _this.grid.PreencherGrid(null);
                        _this.Filtro.TotalKit = retorno.Total;
                    }
                    else {
                        _this.grid.PreencherGrid(retorno.dt);
                        _this.grid.GroupBy("Nome_Produto");
                        _this.Filtro.TotalKit = retorno.Total;
                        _this.AccordionFiltros.SetExpanded(false);
                    }
                    _this.RefreshAngular();
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
    //
    R_RecKit.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Materia = 0;
        this.Filtro.TotalKit = "0";
        this.Filtro.Deposito = ValoresSismoura.DepositoPadrao;
        this.grid.PreencherGrid(null);
        this.grid.GroupBy("Nome_Produto");
        this.RefreshAngular();
    };
    return R_RecKit;
}(MouraPageRelacaoAngular));
var r_RecKit = new R_RecKit();
//# sourceMappingURL=R_RecKit.js.map