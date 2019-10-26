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
var R_Encome = /** @class */ (function (_super) {
    __extends(R_Encome, _super);
    function R_Encome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Encome.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Encome.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_Encome.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_Encome.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
    };
    //
    R_Encome.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Cliente = 0;
        this.Filtro.Situacao = 0;
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_Encome.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            abrirEspera("");
            parametros = {
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final,
                situacao: CNum(this.Filtro.Situacao),
                cliente: CNum(this.Filtro.Cliente)
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
    R_Encome.prototype.OnSelecionouLinha = function (s, e) {
        abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroEncomenda), e.data["Codigo"]);
    };
    return R_Encome;
}(MouraPageRelacaoAngular));
var r_Encome = new R_Encome();
//# sourceMappingURL=R_Encome.js.map