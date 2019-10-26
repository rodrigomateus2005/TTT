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
var C_SitOrc_BanNuv = /** @class */ (function (_super) {
    __extends(C_SitOrc_BanNuv, _super);
    function C_SitOrc_BanNuv() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.respontaGravar = function (result) {
            if (result.Resultado == MsgBoxResult.Yes) {
                this.respondeuGravar = true;
                this.ClicarGravar();
            }
            else if (result.Resultado == MsgBoxResult.No) {
                this.GetScope().Entity.Padrao = false;
                this.respondeuGravar = true;
                this.ClicarGravar();
            }
        };
        return _this;
    }
    Object.defineProperty(C_SitOrc_BanNuv.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SitOrc_BanNuv.prototype, "chkPadrao", {
        get: function () {
            return window['chkPadrao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SitOrc_BanNuv.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SitOrc_BanNuv.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grd) {
            adicionarEventoMoura(this.grd.SelecionouLinha, this.onGridSelecionouLinha, this);
        }
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        this.AtualizarGrid();
    };
    C_SitOrc_BanNuv.prototype.OnGravouSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_SitOrc_BanNuv.prototype.OnExcluiuSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_SitOrc_BanNuv.prototype.onGridSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
    };
    C_SitOrc_BanNuv.prototype.AtualizarGrid = function () {
        var parametros = {};
        var situacaoOrcamentos = this.ExecutarFuncaoServerSideSynch("CarregarSituacaoOrcamentos", parametros);
        this.grd.PreencherGrid(situacaoOrcamentos);
    };
    C_SitOrc_BanNuv.prototype.OnAntesGravar = function () {
        if (_super.prototype.OnAntesGravar.call(this)) {
            if (this.chkPadrao.Check.checked) {
                if (!this.respondeuGravar) {
                    var parametros = {};
                    var padraoExistente = this.ExecutarFuncaoServerSideSynch("ExisteSiuacaoOrcamentoPadrao", parametros);
                    if (padraoExistente != null && this.chkPadrao.Check.checked && padraoExistente.Codigo != this.txtCodigo.GetText().CNum()) {
                        MsgBoxJS("Já existe uma Situação marcada como Padrão, deseja que a situação atual substitua a existente?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.respontaGravar, this));
                        return false;
                    }
                }
            }
        }
        this.respondeuGravar = false;
        return true;
    };
    return C_SitOrc_BanNuv;
}(MouraPageCadastroAngular));
var c_SitOrc_BanNuv = new C_SitOrc_BanNuv();
//# sourceMappingURL=C_SitOrc_BanNuv.js.map