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
var C_ComCob = /** @class */ (function (_super) {
    __extends(C_ComCob, _super);
    function C_ComCob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    C_ComCob.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    C_ComCob.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    C_ComCob.prototype.Limpar = function () {
        _super.prototype.Limpar.call(this);
        this.EntityTela.Codigo = 0;
        this.EntityTela.Descricao = "";
        this.EntityTela.Msgaposparcelas = "";
        this.EntityTela.Msgrodape = "";
        this.EntityTela.Espacocabecalho = 0;
        this.RefreshAngular();
    };
    C_ComCob.prototype.OnDepoisClickNovo = function () {
        _super.prototype.OnDepoisClickNovo.call(this);
        this.Limpar();
        return true;
    };
    return C_ComCob;
}(MouraPageCadastroAngular));
var c_ComCob = new C_ComCob();
//# sourceMappingURL=C_ComCob.js.map