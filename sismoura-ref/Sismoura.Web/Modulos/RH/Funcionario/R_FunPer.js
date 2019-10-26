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
var R_FunPer = /** @class */ (function (_super) {
    __extends(R_FunPer, _super);
    function R_FunPer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_FunPer.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FunPer.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FunPer.prototype, "chkPerfil", {
        get: function () {
            return window["chkPerfil_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FunPer.prototype, "txtDescricao", {
        get: function () {
            return window["txtDescricao_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_FunPer.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_FunPer.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid)
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
    };
    //
    R_FunPer.prototype.OnSelecionouLinha = function (s, e) {
        try {
            abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroPerfilFuncionario), e.data["Codigo"]);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    //
    R_FunPer.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Descricacao = "";
        this.Filtro.Setor = 0;
        this.chkPerfil.LimparSelecao();
        this.chkPerfil.SetValues([""]);
        this.grid.PreencherGrid(null);
        this.AccordionFiltros.SetExpanded(true);
        this.RefreshAngular();
    };
    R_FunPer.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            abrirEspera("");
            var palavraChave = this.Filtro.Descricacao;
            parametros = {
                palavraChave: palavraChave.toLocaleLowerCase(),
                setor: CNum(this.Filtro.Setor),
                perfil: this.chkPerfil.GetValues().join(",")
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.AccordionFiltros.SetExpanded(false);
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
                }
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
    return R_FunPer;
}(MouraPageRelacaoAngular));
var r_FunPer = new R_FunPer();
//# sourceMappingURL=R_FunPer.js.map