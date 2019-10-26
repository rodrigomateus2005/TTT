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
var R_Pro_Se = /** @class */ (function (_super) {
    __extends(R_Pro_Se, _super);
    function R_Pro_Se() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Pro_Se.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Pro_Se.prototype, "GridResumida", {
        get: function () {
            return window['GridResumida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Pro_Se.prototype, "GridDiscriminada", {
        get: function () {
            return window['GridDiscriminada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Pro_Se.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Pro_Se.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Pro_Se.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_Pro_Se.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_Pro_Se.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.GridDiscriminada.PreencherGrid(null);
        this.GridResumida.PreencherGrid(null);
        this.tab.SetActiveTabIndex(0);
        this.RefreshAngular();
    };
    R_Pro_Se.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            var parametros;
            parametros = {
                servico: CNum(this.Filtro.Servico)
            };
            var retornoResumida = this.ExecutarFuncaoServerSideSynch("PreencherGridResumida", parametros);
            var retornoDiscriminada = this.ExecutarFuncaoServerSideSynch("PreencherGridDiscriminada", parametros);
            this.GridResumida.PreencherGrid(retornoResumida);
            this.GridDiscriminada.PreencherGrid(retornoDiscriminada);
            this.accCadastro.SetExpanded(false);
            //this.tab.SetActiveTabIndex(0);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_Pro_Se;
}(MouraPageRelacaoAngular));
var r_Pro_Se = new R_Pro_Se();
//# sourceMappingURL=R_Pro_Se.js.map