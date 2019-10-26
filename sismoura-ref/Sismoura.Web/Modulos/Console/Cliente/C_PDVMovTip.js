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
var C_PDVMovTip = /** @class */ (function (_super) {
    __extends(C_PDVMovTip, _super);
    function C_PDVMovTip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_PDVMovTip.prototype, "grdTipoPdv", {
        get: function () {
            return window['grdTipoPdv_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_PDVMovTip.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdTipoPdv) {
            adicionarEventoMoura(this.grdTipoPdv.SelecionouLinha, this.OnGridSelecionouLinha, this);
        }
    };
    C_PDVMovTip.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_PDVMovTip.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGrade();
    };
    C_PDVMovTip.prototype.PreencherGrade = function () {
        try {
            var parametros = {};
            var registros = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.grdTipoPdv.PreencherGrid(registros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PDVMovTip.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Data_Inclusao = this.DataServidor();
        this.RefreshAngular();
        return true;
    };
    C_PDVMovTip.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_PDVMovTip.prototype.OnGridSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    return C_PDVMovTip;
}(MouraPageCadastroAngular));
var c_PDVMovTip = new C_PDVMovTip();
//# sourceMappingURL=C_PDVMovTip.js.map