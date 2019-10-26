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
var C_MarPro = /** @class */ (function (_super) {
    __extends(C_MarPro, _super);
    function C_MarPro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_MarPro.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_MarPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_MarPro.prototype.OnGravouSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
        this.RefreshAngular();
    };
    C_MarPro.prototype.OnExcluiuSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
        this.OnDepoisLimpar(this.GetScope().Entity);
    };
    C_MarPro.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        return true;
    };
    C_MarPro.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        this.OnDepoisLimpar(this.GetScope().Entity);
        return true;
    };
    C_MarPro.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.data.Id);
    };
    C_MarPro.prototype.OnDepoisLimpar = function (Entity) {
        this.GetCadastrados();
        this.RefreshAngular();
    };
    C_MarPro.prototype.GetCadastrados = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MarPro.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    return C_MarPro;
}(MouraPageCadastroAngular));
var c_MarPro = new C_MarPro();
//# sourceMappingURL=C_MarPro.js.map