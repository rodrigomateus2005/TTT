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
var R_RHFor = /** @class */ (function (_super) {
    __extends(R_RHFor, _super);
    function R_RHFor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RHFor.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RHFor.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RHFor.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RHFor.prototype, "cboTipoEmpresa", {
        get: function () {
            return window['cboTipoEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_RHFor.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (this.lstEmpresa.GetAllValues().length == 1) {
            this.cboTipoEmpresa.Enabled = false;
        }
    };
    R_RHFor.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnCellPrepared, this);
        }
    };
    R_RHFor.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Fornecedor = 0;
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.Filtro.DocMercantil = "";
        this.Filtro.Total = "";
        this.Filtro.TipoEmpresa = "P";
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_RHFor.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            parametros = {
                codEmpresas: this.lstEmpresa.GetValues(),
                codFornecedor: CNum(this.Filtro.Fornecedor),
                docMercantil: this.Filtro.DocMercantil,
                tipoEmpresa: this.Filtro.TipoEmpresa
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (retorno) {
                    _this.grid.PreencherGrid(retorno.Dados_Grade);
                    _this.Filtro.Total = retorno.Total;
                    _this.grid.GroupBy("Tipo");
                    _this.AccordionFiltros.SetExpanded(false);
                    _this.RefreshAngular();
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
    R_RHFor.prototype.OnCellPrepared = function (s, e) {
        if (e.rowType == "data") {
            if (CNum(e.data["Valor_Vencido"]) > 0) {
                e.cellElement.css("color", "blue");
            }
            else if (CNum(e.data["Valor_Pago_Atrasado"]) > 0) {
                e.cellElement.css("color", "green");
            }
        }
    };
    return R_RHFor;
}(MouraPageRelacaoAngular));
var r_RHFor = new R_RHFor();
//# sourceMappingURL=R_RHFor.js.map