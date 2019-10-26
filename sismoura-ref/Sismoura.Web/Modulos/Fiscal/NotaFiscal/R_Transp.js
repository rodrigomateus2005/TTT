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
var R_Transp = /** @class */ (function (_super) {
    __extends(R_Transp, _super);
    function R_Transp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Transp.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Transp.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_Transp.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_Transp.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid)
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
    };
    //
    R_Transp.prototype.OnSelecionouLinha = function (s, e) {
        try {
            abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeTransportadora), e.data["Codigo"]);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    //
    R_Transp.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Cidade = 0;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_Transp.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            abrirEspera("");
            parametros = {
                codCidade: CNum(this.Filtro.Cidade)
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
    return R_Transp;
}(MouraPageRelacaoAngular));
var r_Transp = new R_Transp();
//# sourceMappingURL=R_Transp.js.map