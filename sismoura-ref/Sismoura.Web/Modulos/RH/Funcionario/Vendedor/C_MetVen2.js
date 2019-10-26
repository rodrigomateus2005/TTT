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
var C_MetVen2 = /** @class */ (function (_super) {
    __extends(C_MetVen2, _super);
    function C_MetVen2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_MetVen2.prototype, "grdCad", {
        get: function () {
            return window['grdCad_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_MetVen2.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdCad) {
            adicionarEventoMoura(this.grdCad.SelecionouLinha, this.OnGridSelecionouLinha, this);
        }
    };
    C_MetVen2.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherCampos(this.EntityTela);
        this.PreencherGrade();
        this.RefreshAngular();
        if (!this.GetScope().OnChangeFuncionario) {
            this.GetScope().OnChangeFuncionario = $.proxy(this.OnChangeFuncionario, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Funcionario; }, this.GetScope().OnChangeFuncionario);
        }
    };
    C_MetVen2.prototype.OnChangeFuncionario = function () {
        if (!this.EntityTela.Data || this.EntityTela.Funcionario <= 0) {
            return;
        }
        try {
            var parametros = {
                codFuncionario: this.EntityTela.Funcionario,
                dataMeta: ConvertToDate(this.EntityTela.Data)
            };
            var codMeta = this.ExecutarFuncaoServerSideSynch("GetMetaFuncionarioData", parametros);
            if (codMeta > 0) {
                this.PreencherEntidade(codMeta);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MetVen2.prototype.PreencherCampos = function (Entity) {
        if (Entity) {
            Entity.Data = this.DataServidor();
            Entity.Tipo_Meta = 0;
            Entity.Tipo_Bonificacao = 0;
        }
    };
    C_MetVen2.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.grdCad.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MetVen2.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherCampos(Entity);
    };
    C_MetVen2.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_MetVen2.prototype.OnGridSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    return C_MetVen2;
}(MouraPageCadastroAngular));
var c_MetVen2 = new C_MetVen2();
//# sourceMappingURL=C_MetVen2.js.map