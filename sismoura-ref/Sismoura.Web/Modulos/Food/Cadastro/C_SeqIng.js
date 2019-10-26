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
var C_SeqIng = /** @class */ (function (_super) {
    __extends(C_SeqIng, _super);
    function C_SeqIng() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SeqIng.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqIng.prototype, "Cadastrados", {
        get: function () {
            if (!this.GetScope()['Cadastrados']) {
                this.GetScope()['Cadastrados'] = [];
            }
            return this.GetScope()['Cadastrados'];
        },
        set: function (value) {
            this.GetScope()['Cadastrados'] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_SeqIng.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.Grid.SelecionouLinha, this.OnGrdSelecionouItem, this);
        }
    };
    C_SeqIng.prototype.OnGrdSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
        this.RefreshAngular();
    };
    C_SeqIng.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().OnMudouSubGrupo) {
            this.GetScope().OnMudouSubGrupo = $.proxy(this.OnMudouSubGrupo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.SubGrupo; }, this.GetScope().OnMudouSubGrupo);
        }
        this.OnDepoisLimpar(this.EntityTela);
    };
    C_SeqIng.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGrade();
    };
    C_SeqIng.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_SeqIng.prototype.PreencherGrade = function () {
        try {
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Cadastrados = retorno;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SeqIng.prototype.OnMudouSubGrupo = function () {
        try {
            var parametros = {
                codSubGrupo: CNum(this.EntityTela.SubGrupo)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetSequenciaByCodSubGrupo", parametros);
            if (CNum(retorno) > 0) {
                this.EntityTela.Codigo = CNum(retorno);
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_SeqIng;
}(MouraPageCadastroAngular));
var c_SeqIng = new C_SeqIng();
//# sourceMappingURL=C_SeqIng.js.map