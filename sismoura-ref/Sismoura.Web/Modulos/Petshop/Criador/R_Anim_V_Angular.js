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
var R_Anim_V_Angular = /** @class */ (function (_super) {
    __extends(R_Anim_V_Angular, _super);
    function R_Anim_V_Angular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Anim_V_Angular.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Anim_V_Angular.prototype, "grdAnimais", {
        get: function () {
            return window['grdAnimais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Anim_V_Angular.prototype, "txtProprietario", {
        get: function () {
            return window['txtProprietario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Anim_V_Angular.prototype, "txtCriador", {
        get: function () {
            return window['txtCriador_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Anim_V_Angular.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Anim_V_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_Anim_V_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_Anim_V_Angular.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var codEmpresas = this.lstEmpresa.GetValues();
        var empresas;
        if (codEmpresas) {
            empresas = codEmpresas.join(",");
        }
        try {
            var parametros = {
                proprietario: this.txtProprietario.GetText().CNum(),
                criador: this.txtCriador.GetText().CNum(),
                empresas: empresas + ""
            };
            this.grdAnimais.PreencherGrid(this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros));
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Anim_V_Angular.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Proprietario = "";
        this.Filtro.Criador = "";
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.grdAnimais.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_Anim_V_Angular;
}(MouraPageRelacaoAngular));
var r_Anim_V_Angular = new R_Anim_V_Angular();
//# sourceMappingURL=R_Anim_V_Angular.js.map