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
var R_Orc_Pr = /** @class */ (function (_super) {
    __extends(R_Orc_Pr, _super);
    function R_Orc_Pr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Orc_Pr.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Orc_Pr.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Orc_Pr.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Orc_Pr.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (ValoresSismoura.ConfiguracoesRetaguarda.Produto_Inativo_Pesquisa) {
            this.txtProduto.SomenteAtivos = false;
        }
        else {
            this.txtProduto.SomenteAtivos = true;
        }
    };
    R_Orc_Pr.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
    };
    R_Orc_Pr.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Produto = 0;
        this.Filtro.Situacao = "0";
        this.Filtro.Valor_Total = "";
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_Orc_Pr.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            try {
                parametros = {
                    dataInicial: this.Filtro.Periodo_Inicial,
                    dataFinal: this.Filtro.Periodo_Final,
                    codProduto: CNum(this.Filtro.Produto),
                    codSituacao: CNum(this.Filtro.Situacao)
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.Filtro.Valor_Total = _this.grid.DataSource.Sum("Valor_Total").Format(ValoresSismoura.CasasDecimaisValor);
                    _this.RefreshAngular();
                }, function (erro) {
                    fecharEspera();
                    LogarException(erro);
                }, this);
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }
    };
    R_Orc_Pr.prototype.OnSelecionouLinha = function (s, e) {
        abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroOrcamento), e.data["Codigo"]);
    };
    return R_Orc_Pr;
}(MouraPageRelacaoAngular));
var r_Orc_Pr = new R_Orc_Pr();
//# sourceMappingURL=R_Orc_Pr.js.map