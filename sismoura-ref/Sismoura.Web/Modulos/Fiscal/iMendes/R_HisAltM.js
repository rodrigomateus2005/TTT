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
var R_HisAltM = /** @class */ (function (_super) {
    __extends(R_HisAltM, _super);
    function R_HisAltM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_HisAltM.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisAltM.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisAltM.prototype, "txtUsuario", {
        get: function () {
            return window['txtUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisAltM.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisAltM.prototype, "grdRegra", {
        get: function () {
            return window['grdRegra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisAltM.prototype, "grdProduto", {
        get: function () {
            return window['grdProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_HisAltM.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_HisAltM.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_HisAltM.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros = {
            dataInicio: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
            dataFim: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
            descricao: this.txtDescricao.GetText(),
            usuario: this.txtUsuario.GetText().CNum()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch('PreencherGrade', parametros);
        this.grdRegra.PreencherGrid(retorno.Regra);
        this.grdProduto.PreencherGrid(retorno.Produto);
    };
    R_HisAltM.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtPeriodo.Iniciar();
        this.txtDescricao.Limpar();
        this.txtUsuario.Limpar();
        this.grdRegra.PreencherGrid(null);
        this.grdProduto.PreencherGrid(null);
    };
    return R_HisAltM;
}(MouraPageRelacaoAngular));
var r_HisAltM = new R_HisAltM();
//# sourceMappingURL=R_HisAltM.js.map