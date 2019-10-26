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
var C_ComiGS = /** @class */ (function (_super) {
    __extends(C_ComiGS, _super);
    function C_ComiGS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ComiGS.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComiGS.prototype, "txtGrupo", {
        get: function () {
            return window['txtGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ComiGS.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.txtGrupo) {
            adicionarEventoMoura(this.txtGrupo.Procurou, this.OnDepoisProcurou, this);
        }
    };
    C_ComiGS.prototype.OnDepoisProcurou = function () {
        var _this = this;
        try {
            if (this.EntityTela.Grupo) {
                var parametros = {
                    grupo: this.EntityTela.Grupo
                };
                abrirEspera();
                this.ExecutarFuncaoServerSideAsynch("GetGrupoExistente", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.EntityTela.Id = retorno.Id;
                    _this.EntityTela.Grupo = retorno.Grupo;
                    _this.EntityTela.Subgrupo = retorno.Subgrupo;
                    _this.EntityTela.Comissao = retorno.Comissao;
                    _this.RefreshAngular();
                }, function (erro) {
                    fecharEspera();
                    LogarException(erro);
                }, this);
            }
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    C_ComiGS.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.data.Id);
        this.GetScope().$applyAsync();
    };
    C_ComiGS.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    C_ComiGS.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        debugger;
        this.EntityTela.Subgrupo == undefined ? null : this.EntityTela.Subgrupo;
        return true;
    };
    C_ComiGS.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_ComiGS.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_ComiGS.prototype.PreencherGrade = function () {
        var _this = this;
        try {
            var parametros = {};
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("GetCadastrados", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno);
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    return C_ComiGS;
}(MouraPageCadastroAngular));
var c_ComiGS = new C_ComiGS();
//# sourceMappingURL=C_ComiGS.js.map