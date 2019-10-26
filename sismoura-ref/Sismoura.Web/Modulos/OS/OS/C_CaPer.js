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
var C_CaPer = /** @class */ (function (_super) {
    __extends(C_CaPer, _super);
    function C_CaPer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CaPer.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CaPer.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CaPer.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CaPer.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        var parametros;
        parametros = {};
        try {
            var retorno = this.ExecutarFuncaoServerSideSynch("ValidarCompatibility", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        this.LimparCampos();
    };
    C_CaPer.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Campos = 0;
        this.Filtro.Valor = "";
        this.Grid.PreencherGrid(null);
        this.accCadastro.SetExpanded(true);
        this.RefreshAngular();
    };
    C_CaPer.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    C_CaPer.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            var parametros;
            parametros = {
                campos: CNum(this.Filtro.Campos),
                valor: this.Filtro.Valor
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.Grid.PreencherGrid(retorno);
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_CaPer;
}(MouraPageRelacaoAngular));
var c_CaPer = new C_CaPer();
//# sourceMappingURL=C_CaPer.js.map