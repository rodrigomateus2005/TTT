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
var R_OS = /** @class */ (function (_super) {
    __extends(R_OS, _super);
    function R_OS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_OS.prototype, "AccordionFiltros", {
        get: function () {
            return window["accCadastro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS.prototype, "grdAnalitico", {
        get: function () {
            return window['grdAnalitico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS.prototype, "tabModal", {
        get: function () {
            return window['tabModal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS.prototype, "grdProdutos", {
        get: function () {
            return window['grdProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS.prototype, "grdServicos", {
        get: function () {
            return window['grdServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS.prototype, "txtCodigoCliente", {
        get: function () {
            return window['txtCodigoCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS.prototype, "txtNomeCliente", {
        get: function () {
            return window['txtNomeCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS.prototype, "grdSintetico", {
        get: function () {
            return window['grdSintetico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS.prototype, "txtCNPJ", {
        get: function () {
            return window['txtCNPJ_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS.prototype, "txtCPF", {
        get: function () {
            return window['txtCpf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS.prototype, "mdDetalhes", {
        get: function () {
            return window['mdDetalhes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS.prototype, "btnDetalhe", {
        get: function () {
            return window['btnDetalhe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS.prototype, "Carregamento", {
        get: function () {
            if (!this.GetScope()["Filtro"]) {
                this.GetScope()["Filtro"] = {};
            }
            return this.GetScope()["Filtro"];
        },
        set: function (value) {
            this.GetScope()["Filtro"] = value;
        },
        enumerable: true,
        configurable: true
    });
    R_OS.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        var parametros;
        parametros = {};
        try {
            var retorno = this.ExecutarFuncaoServerSideSynch("ValidarCompatibility", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        if (!this.GetScope().OnClientePesquisou) {
            var that = this;
            this.GetScope().OnClientePesquisou = $.proxy(this.OnClientePesquisou, this);
            this.GetScope().$watch(function () { return that.Filtro.CodigoCliente; }, this.GetScope().OnClientePesquisou);
        }
        if (!this.GetScope().OnMudouNomeCliente) {
            var that = this;
            this.GetScope().OnMudouNomeCliente = $.proxy(this.OnMudouNomeCliente, this);
            this.GetScope().$watch(function () { return that.Filtro.NomeCliente; }, this.GetScope().OnMudouNomeCliente);
        }
        if (!this.GetScope().BloquearCampos) {
            this.GetScope().BloquearCampos = $.proxy(this.BloquearCampos, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.Filtro != null) {
                return that.Filtro.CodigoCliente;
            } }, this.GetScope().BloquearCampos);
        }
        this.LimparCampos();
    };
    R_OS.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdAnalitico) {
            adicionarEventoMoura(this.grdAnalitico.ClickBotaoLinha, this.OnClicouDetalhe, this);
        }
    };
    R_OS.prototype.OnMudouNomeCliente = function () {
        if ((!this.Filtro.NomeCliente || this.Filtro.NomeCliente == "") && this.Filtro.CodigoCliente) {
            var parametros;
            parametros = {
                codigo: CNum(this.Filtro.CodigoCliente)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("OnClientePesquisou", parametros);
            this.Filtro.NomeCliente = retorno.Nome;
        }
    };
    R_OS.prototype.BloquearCampos = function () {
        if (this.Filtro.CodigoCliente > 0) {
            this.txtNomeCliente.Enabled = false;
            this.txtCNPJ.Enabled = false;
            this.txtCPF.Enabled = false;
        }
        else {
            this.txtNomeCliente.Enabled = true;
            this.txtCNPJ.Enabled = true;
            this.txtCPF.Enabled = true;
        }
    };
    R_OS.prototype.OnClicouDetalhe = function (s, e) {
        this.mdDetalhes.Show();
        this.tabModal.SetActiveTabIndex(0);
        var parametros;
        parametros = {
            codOS: e.rowKey
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGridServico", parametros);
        var retornoProd = this.ExecutarFuncaoServerSideSynch("PreencherGridProduto", parametros);
        this.grdServicos.PreencherGrid(retorno);
        this.grdProdutos.PreencherGrid(retornoProd);
    };
    R_OS.prototype.OnClientePesquisou = function () {
        if (this.Filtro.CodigoCliente) {
            var parametros;
            parametros = {
                codigo: CNum(this.Filtro.CodigoCliente)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("OnClientePesquisou", parametros);
            if (retorno == null) {
                this.Filtro.NomeCliente = "";
            }
            else {
                if (retorno.Tipo == "F") {
                    this.txtCNPJ.Visible = false;
                    this.txtCPF.Visible = true;
                    this.Filtro.CPF = retorno.CPF;
                    this.Filtro.NomeCliente = retorno.Nome;
                }
                else {
                    if (retorno.Tipo == "J") {
                        this.txtCNPJ.Visible = true;
                        this.txtCPF.Visible = false;
                        this.Filtro.CNPJ = retorno.CPF;
                        this.Filtro.NomeCliente = retorno.Nome;
                    }
                }
            }
        }
        else {
            this.Filtro.NomeCliente = "";
            this.Filtro.CNPJ = "";
            this.Filtro.CPF = "";
            this.txtCPF.Visible = true;
            this.txtCNPJ.Visible = false;
        }
        this.RefreshAngular();
    };
    R_OS.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.CPF = "";
        this.Filtro.Endereco = "";
        this.Filtro.NomeCliente = "";
        this.Filtro.PeriodoEntrega_Inicial = null;
        this.Filtro.PeriodoEntrega_Final = null;
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.ListaPreco = 0;
        this.Filtro.Objeto = 0;
        this.Filtro.TipoPesquisa = 0;
        this.Filtro.TipoOS = 0;
        this.Filtro.Situacao = 0;
        this.grdAnalitico.PreencherGrid(null);
        this.grdSintetico.PreencherGrid(null);
        this.txtCNPJ.Visible = false;
        this.txtCPF.Visible = true;
        this.Filtro.Valor = "";
        this.RefreshAngular();
    };
    R_OS.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        var codEmpresas;
        codEmpresas = this.lstEmpresa.GetValues();
        var empresas;
        if (codEmpresas) {
            empresas = codEmpresas.join(",");
        }
        try {
            parametros = {
                periodo_inicial: this.Filtro.Periodo_Inicial,
                periodo_final: this.Filtro.Periodo_Final,
                periodoEntrega_inicial: this.Filtro.PeriodoEntrega_Inicial,
                periodoEntrega_final: this.Filtro.PeriodoEntrega_Final,
                vendedor: CNum(this.Filtro.Vendedor),
                codigo_cliente: CNum(this.Filtro.CodigoCliente),
                nome_cliente: this.Filtro.NomeCliente + "",
                cpf: this.Filtro.CPF,
                situacao: CNum(this.Filtro.Situacao),
                tipo_pesquisa: CNum(this.Filtro.TipoPesquisa),
                objeto: CNum(this.Filtro.Objeto),
                valor: this.Filtro.Valor + "",
                lista_preco: CNum(this.Filtro.ListaPreco),
                participante: CNum(this.Filtro.Participante),
                orcamento: CNum(this.Filtro.Orcamento),
                endereco: this.Filtro.Endereco + "",
                tipoOS: CNum(this.Filtro.TipoOS),
                empresas: empresas + ""
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGridAnalitico", parametros);
            this.grdAnalitico.PreencherGrid(retorno);
            var retorno2 = this.ExecutarFuncaoServerSideSynch("PreencherGridSintetico", parametros);
            this.grdSintetico.PreencherGrid(retorno2);
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_OS;
}(MouraPageRelacaoAngular));
var r_OS = new R_OS();
//# sourceMappingURL=R_OS.js.map