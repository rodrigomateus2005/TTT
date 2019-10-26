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
var C_SitLoc = /** @class */ (function (_super) {
    __extends(C_SitLoc, _super);
    function C_SitLoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SitLoc.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SitLoc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouCodigo, this.SelecionarRegistro, this);
        }
    };
    C_SitLoc.prototype.OnGravouSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_SitLoc.prototype.OnExcluiuSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_SitLoc.prototype.AtualizarGrid = function () {
        if (this.Grid) {
            this.Grid.PerformCallback('atualizar');
        }
    };
    C_SitLoc.prototype.SelecionarRegistro = function (s, e) {
        this.PreencherEntidade(e.CodigoSelecionado);
    };
    return C_SitLoc;
}(MouraPageCadastroAngular));
var c_SitLoc = new C_SitLoc();
//# sourceMappingURL=C_SitLoc.js.map