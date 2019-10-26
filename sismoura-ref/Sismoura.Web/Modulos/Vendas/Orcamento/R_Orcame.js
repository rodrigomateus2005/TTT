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
var R_Orcame = /** @class */ (function (_super) {
    __extends(R_Orcame, _super);
    function R_Orcame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Orcame.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Orcame.prototype, "lstSitOrcamento", {
        get: function () {
            return window['lstSitOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Orcame.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Orcame.prototype, "txtHoraInicial", {
        get: function () {
            return window['txtHoraInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Orcame.prototype, "txtHoraFinal", {
        get: function () {
            return window['txtHoraFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Orcame.prototype, "txtVendedor", {
        get: function () {
            return window['txtVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Orcame.prototype, "txtCidade", {
        get: function () {
            return window['txtCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Orcame.prototype, "gridAgrupada", {
        get: function () {
            return window['gridAgrupada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Orcame.prototype, "gridDiscriminada", {
        get: function () {
            return window['gridDiscriminada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Orcame.prototype, "gridResumida", {
        get: function () {
            return window['gridResumida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Orcame.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_Orcame.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_Orcame.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Tipo_Periodo = "O";
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Cliente = 0;
        this.Filtro.Operador = 0;
        this.Filtro.Convenio = 0;
        this.Filtro.Doc_Bancario = "0";
        this.Filtro.Estado = "";
        this.Filtro.Tipo_Pesquisa = "0";
        this.Filtro.Zona_Venda = "0";
        this.lstSitOrcamento.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.txtHoraFinal.textBoxHorario.SetDate(null);
        this.txtHoraInicial.textBoxHorario.SetDate(null);
        this.txtCidade.Limpar();
        this.txtVendedor.Limpar();
        this.Filtro.Romaneio = "";
        this.Filtro.Nome_Cliente = "";
        this.Filtro.Orcamento_Inicial = 0;
        this.Filtro.Orcamento_Final = 0;
        this.Filtro.Total_Acrescimo = "";
        this.Filtro.Total_Desconto = "";
        this.Filtro.Total_Imposto = "";
        this.Filtro.Total_Orcamento = "";
        this.Filtro.Total_Produto = "";
        this.Filtro.Valor_Total_Final = "";
        this.gridAgrupada.PreencherGrid(null);
        this.gridDiscriminada.PreencherGrid(null);
        this.gridResumida.PreencherGrid(null);
        this.gridDiscriminada.Grid.clearGrouping();
        this.RefreshAngular();
    };
    R_Orcame.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            try {
                parametros = {
                    tipoData: this.Filtro.Tipo_Periodo,
                    dataInicial: this.Filtro.Periodo_Inicial,
                    dataFinal: this.Filtro.Periodo_Final,
                    codCliente: CNum(this.Filtro.Cliente),
                    codVendedores: this.txtVendedor.SourceLista.map(function (item) { return item.Value; }),
                    codCidades: this.txtCidade.SourceLista.map(function (item) { return item.Value; }),
                    codOperador: CNum(this.Filtro.Operador),
                    codConvenio: CNum(this.Filtro.Convenio),
                    horaInicial: this.txtHoraInicial.textBoxHorario.GetDate() == null ? "" : this.txtHoraInicial.textBoxHorario.GetText(),
                    horaFinal: this.txtHoraFinal.textBoxHorario.GetDate() == null ? "" : this.txtHoraFinal.textBoxHorario.GetText(),
                    orcamentoInicial: CNum(this.Filtro.Orcamento_Inicial),
                    orcamentoFinal: CNum(this.Filtro.Orcamento_Final),
                    tipoPesquisa: this.Filtro.Tipo_Pesquisa,
                    codZonaVenda: CNum(this.Filtro.Zona_Venda),
                    codEstado: this.Filtro.Estado,
                    docBancario: CNum(this.Filtro.Doc_Bancario),
                    romaneio: CNum(this.Filtro.Romaneio),
                    listaSitOrcamento: this.lstSitOrcamento.GetValues(),
                    codEmpresas: this.lstEmpresa.GetValues(),
                    nomeCliente: this.Filtro.Nome_Cliente
                };
                abrirEspera("Aguarde. Gerando relação...");
                this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (retorno) {
                        _this.gridResumida.PreencherGrid(retorno.Grid_Resumida);
                        _this.gridAgrupada.PreencherGrid(retorno.Grid_Agrupada);
                        _this.gridDiscriminada.PreencherGrid(retorno.Grid_Discriminada);
                        _this.Filtro.Total_Produto = retorno.Total_Produto;
                        _this.Filtro.Total_Desconto = retorno.Total_Desconto;
                        _this.Filtro.Total_Acrescimo = retorno.Total_Acrescimo;
                        _this.Filtro.Total_Orcamento = retorno.Total_Orcamento;
                        _this.Filtro.Valor_Total_Final = retorno.Valor_Total_Final;
                        _this.Filtro.Total_Imposto = retorno.Total_Imposto;
                        _this.gridDiscriminada.GroupBy("Codigo_Orcamento");
                    }
                    _this.AccordionFiltros.SetExpanded(false);
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
    return R_Orcame;
}(MouraPageRelacaoAngular));
var r_Orcame = new R_Orcame();
//# sourceMappingURL=R_Orcame.js.map