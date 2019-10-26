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
var C_TipPro = /** @class */ (function (_super) {
    __extends(C_TipPro, _super);
    function C_TipPro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_TipPro.prototype, "GridTipPro", {
        get: function () {
            return window['GridTipPro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipPro.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipPro.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_TipPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridTipPro) {
            adicionarEventoMoura(this.GridTipPro.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_TipPro.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_TipPro.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_TipPro.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_TipPro.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_TipPro.prototype.OnAntesDeletar = function () {
        try {
            var parametros;
            parametros = { codTipo: this.EntityTela.Codigo };
            var quantTipPro = this.ExecutarFuncaoServerSideSynch("VerificaTipPro", parametros);
            if (quantTipPro > 0) {
                MostrarAlerta("Impossível excluir. Existem Profissionais cadastrados com este tipo!");
                this.LimparCampos();
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return true;
    };
    C_TipPro.prototype.LimparCampos = function () {
        this.txtCodigo.Limpar();
        this.txtDescricao.Limpar();
    };
    C_TipPro.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.GridTipPro.PreencherGrid(cad);
            this.GridTipPro.Refresh();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_TipPro;
}(MouraPageCadastroAngular));
var c_TipPro = new C_TipPro();
//# sourceMappingURL=C_TipPro.js.map