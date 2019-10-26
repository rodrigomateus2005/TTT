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
var R_O_Prod = /** @class */ (function (_super) {
    __extends(R_O_Prod, _super);
    function R_O_Prod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_O_Prod.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_O_Prod.prototype, "txtVendedor", {
        get: function () {
            return window['txtVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_O_Prod.prototype, "txtCidade", {
        get: function () {
            return window['txtCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_O_Prod.prototype, "lstSituacao", {
        get: function () {
            return window['lstSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_O_Prod.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_O_Prod.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_O_Prod.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_O_Prod.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            var codVendedores;
            var codCidades;
            var situacoes = this.lstSituacao.GetValues().join(",");
            codVendedores = this.txtVendedor.SourceLista.map(function (item) { return item.Value; }).join(",");
            if (!String.IsNullOrWhiteSpace(codVendedores) && CNum(this.txtVendedor.txtProcura.GetText()) > 0) {
                codVendedores = codVendedores + "," + this.txtVendedor.txtProcura.GetText();
            }
            else if (String.IsNullOrWhiteSpace(codVendedores) && CNum(this.txtVendedor.txtProcura.GetText()) > 0) {
                codVendedores = this.txtVendedor.txtProcura.GetText();
            }
            codCidades = this.txtCidade.SourceLista.map(function (item) { return item.Value; }).join(",");
            if (!String.IsNullOrWhiteSpace(codCidades) && CNum(this.txtCidade.txtProcura.GetText()) > 0) {
                codCidades = codCidades + "," + this.txtCidade.txtProcura.GetText();
            }
            else if (String.IsNullOrWhiteSpace(codCidades) && CNum(this.txtCidade.txtProcura.GetText()) > 0) {
                codCidades = this.txtCidade.txtProcura.GetText();
            }
            try {
                parametros = {
                    dataInicial: this.Filtro.Periodo_Inicial,
                    dataFinal: this.Filtro.Periodo_Final,
                    codGrupo: CNum(this.Filtro.Grupo),
                    codVendedores: codVendedores,
                    codFormaPagamento: CNum(this.Filtro.Forma_Pagamento),
                    tipoData: this.Filtro.Tipo_Data,
                    codCidades: codCidades,
                    codCliente: CNum(this.Filtro.Cliente),
                    codConvenio: CNum(this.Filtro.Convenio),
                    situacoesOrcamento: situacoes,
                    orcamentoInicial: CNum(this.Filtro.Orcamento_Inicial),
                    orcamentoFinal: CNum(this.Filtro.Orcamento_Final),
                    comVenda: this.Filtro.Com_Venda,
                    codMarca: CNum(this.Filtro.Marca),
                    codZonaVenda: CNum(this.Filtro.Zona_Venda),
                    agrupar: this.Filtro.Agrupar_Grupo
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    if (_this.Filtro.Agrupar_Grupo) {
                        _this.grid.GroupBy("DescricaoGrupo");
                    }
                    _this.AccordionFiltros.SetExpanded(false);
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
    R_O_Prod.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtCidade.Limpar();
        this.Filtro.Cliente = 0;
        this.Filtro.Convenio = 0;
        this.Filtro.Marca = 0;
        this.Filtro.Orcamento_Final = "0";
        this.Filtro.Orcamento_Inicial = "0";
        this.Filtro.Forma_Pagamento = "0";
        this.Filtro.Grupo = 0;
        this.Filtro.Zona_Venda = "0";
        this.Filtro.Tipo_Data = "O";
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.txtVendedor.Limpar();
        this.Filtro.Agrupar_Grupo = false;
        this.Filtro.Com_Venda = false;
        this.lstSituacao.LimparSelecao();
        this.grid.PreencherGrid(null);
        this.grid.Grid.clearGrouping();
        this.RefreshAngular();
    };
    return R_O_Prod;
}(MouraPageRelacaoAngular));
var r_O_Prod = new R_O_Prod();
//# sourceMappingURL=R_O_Prod.js.map