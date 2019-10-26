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
var C_Exame = /** @class */ (function (_super) {
    __extends(C_Exame, _super);
    function C_Exame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Exame.prototype, "GridJS", {
        get: function () {
            return window['GridJS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Exame.prototype, "txtTipoExame", {
        get: function () {
            return window['txtTipoExame_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Exame.prototype, "txtExame", {
        get: function () {
            return window['txtExame_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Exame.prototype, "btnAdicionar", {
        get: function () {
            return window['btnAdicionar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Exame.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridJS) {
            adicionarEventoMoura(this.GridJS.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.btnAdicionar) {
            adicionarEventoMoura(this.btnAdicionar.Click, this.OnClickAdicionar, this);
        }
    };
    C_Exame.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_Exame.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
        this.LimparCampos();
    };
    C_Exame.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
        this.LimparCampos();
    };
    C_Exame.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Exame.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {
                codTipoExame: this.txtTipoExame.GetText().CNum()
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetGradeByTipoExame", parametros);
            this.GridJS.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Exame.prototype.OnClickAdicionar = function (s, e) {
        e.processOnServer = false;
        if (this.txtExame.GetText().CNum() == 0) {
            MostrarAlerta("Informe um exame!");
            return false;
        }
        this.EntityTela.Calculo = "<" + this.txtExame.GetText().CNum() + ">";
        this.GetScope().$applyAsync();
    };
    C_Exame.prototype.LimparCampos = function () {
        this.txtExame.Limpar();
    };
    return C_Exame;
}(MouraPageCadastroAngular));
var c_Exame = new C_Exame();
//# sourceMappingURL=C_Exame.js.map