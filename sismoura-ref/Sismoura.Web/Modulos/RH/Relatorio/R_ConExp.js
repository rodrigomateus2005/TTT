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
var R_ConExp = /** @class */ (function (_super) {
    __extends(R_ConExp, _super);
    function R_ConExp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ConExp.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConExp.prototype, "cboEmpresa", {
        get: function () {
            return window["cboEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConExp.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_ConExp.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_ConExp.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnCellsPrepared, this);
        }
    };
    //
    R_ConExp.prototype.OnCellsPrepared = function (s, e) {
        var Venc;
        var Now = this.DataServidor();
        if (e.rowType == "data") {
            e.cellElement.css("color", "blue");
            var diasPro = e.data["DiasPro"];
            var vencimento = e.data["Vcto1Contrato"];
            var vencimento2 = e.data["Vcto2Contrato"];
            if (diasPro == 0) {
                if (ConvertToDate(vencimento)) {
                    Venc = vencimento;
                }
            }
            else if (diasPro > 0) {
                if (ConvertToDate(vencimento2)) {
                    Venc = vencimento2;
                }
            }
            if (ConvertToDate(vencimento)) {
                if (Venc < Now) {
                    e.cellElement.css("color", "blue");
                }
                else if (Venc > Now) {
                    e.cellElement.css("color", "red");
                }
            }
        }
    };
    //
    R_ConExp.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.Filtro.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_ConExp.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            abrirEspera("");
            parametros = {
                empresa: CNum(this.cboEmpresa.GetValue()),
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.AccordionFiltros.SetExpanded(false);
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
    return R_ConExp;
}(MouraPageRelacaoAngular));
var r_ConExp = new R_ConExp();
//# sourceMappingURL=R_ConExp.js.map