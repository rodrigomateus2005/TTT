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
var R_PedPen = /** @class */ (function (_super) {
    __extends(R_PedPen, _super);
    function R_PedPen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_PedPen.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PedPen.prototype, "gridDiscriminada", {
        get: function () {
            return window["gridDiscriminada_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PedPen.prototype, "gridAgrupada", {
        get: function () {
            return window["gridAgrupada_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PedPen.prototype, "mdPedido", {
        get: function () {
            return window["mdPedido_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PedPen.prototype, "dtItens", {
        get: function () {
            return window["dtItens_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PedPen.prototype, "cboSituacao", {
        get: function () {
            return window["cboSituacao_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PedPen.prototype, "lstEmpresa", {
        get: function () {
            return window["lstEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PedPen.prototype, "chkPendenteEntrega", {
        get: function () {
            return window["chkPendenteEntrega_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PedPen.prototype, "chkPendente", {
        get: function () {
            return window["chkPendente_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PedPen.prototype, "chkAprovado", {
        get: function () {
            return window["chkAprovado_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PedPen.prototype, "chkAprovadoEntrada", {
        get: function () {
            return window["chkAprovadoEntrada_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PedPen.prototype, "btnFechar", {
        get: function () {
            return window["btnFechar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PedPen.prototype, "AbaDiscriminada", {
        get: function () {
            return window["AbaDiscriminada_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_PedPen.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_PedPen.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.chkAprovado)
            adicionarEventoMoura(this.chkAprovado.CheckChanged, this.OnAprovadoChanged, this);
        if (this.chkAprovadoEntrada)
            adicionarEventoMoura(this.chkAprovadoEntrada.CheckChanged, this.OnAprovadoChanged, this);
        if (this.chkPendente)
            adicionarEventoMoura(this.chkPendente.CheckChanged, this.OnPendenteChanged, this);
        if (this.chkPendenteEntrega)
            adicionarEventoMoura(this.chkPendenteEntrega.CheckChanged, this.OnPendenteChanged, this);
        if (this.gridDiscriminada)
            adicionarEventoMoura(this.gridDiscriminada.SelecionouLinha, this.OnSelecionouLinha, this);
        if (this.gridDiscriminada)
            adicionarEventoMoura(this.gridDiscriminada.ClickBotaoLinha, this.OnClickLinha, this);
        if (this.btnFechar)
            adicionarEventoMoura(this.btnFechar.Click, this.OnClickFechar, this);
        //if (this.btnFechar) adicionarEventoDevExpress(this.btnFechar.Botao.Click, this.OnClickFechar, this);
    };
    //
    R_PedPen.prototype.OnSelecionouLinha = function (s, e) {
        try {
            abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDePedidoDeCompras), e.data["Codigo"]);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_PedPen.prototype.OnClickLinha = function (s, e) {
        if (e.commandName = "InfPedidoCompra") {
            try {
                var parametros = {};
                var codPedido = e.data["Codigo"];
                parametros = { codPedido: codPedido };
                var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGridModal", parametros);
                this.dtItens.PreencherGrid(retorno);
                this.mdPedido.Show();
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    R_PedPen.prototype.OnClickFechar = function (s, e) {
        e.processOnServer = false;
        this.mdPedido.Hide();
    };
    R_PedPen.prototype.OnAprovadoChanged = function () {
        if (this.chkAprovado.Checked == true || this.chkAprovadoEntrada.Checked == true) {
            this.chkPendente.Checked = false;
            this.chkPendenteEntrega.Checked = false;
        }
    };
    R_PedPen.prototype.OnPendenteChanged = function () {
        if (this.chkPendente.Checked == true || this.chkPendenteEntrega.Checked == true) {
            this.chkAprovado.Checked = false;
            this.chkAprovadoEntrada.Checked = false;
        }
    };
    //
    R_PedPen.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.TipoData = "DE";
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.Filtro.Fornecedor = 0;
        this.cboSituacao.SetSelectedIndex(0);
        this.Filtro.Aprovado = false;
        this.Filtro.AprovadoEntrada = false;
        this.Filtro.Pendente = false;
        this.Filtro.PendenteEntrega = false;
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.gridAgrupada.PreencherGrid(null);
        this.gridAgrupada.GroupBy("Produto_Nome");
        this.gridDiscriminada.PreencherGrid(null);
        this.Filtro.TotalPedidos = "0";
        this.Filtro.ValorTotal = "0,00";
        this.AccordionFiltros.SetExpanded(true);
        this.RefreshAngular();
    };
    R_PedPen.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        try {
            if (this.AbaDiscriminada.MouraTabPanel.ActiveTabIndex == 0) {
                this.PreencherGridDiscriminada();
            }
            else {
                this.PreencherGridAgrupada();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_PedPen.prototype.PreencherGridAgrupada = function () {
        var _this = this;
        try {
            abrirEspera();
            var parametros = {};
            parametros = {
                tipoData: this.Filtro.TipoData,
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final,
                fornecedor: CNum(this.Filtro.Fornecedor),
                situacao: CNum(this.cboSituacao.GetValue()),
                pendenteEntrega: this.Filtro.PendenteEntrega,
                pendente: this.Filtro.Pendente,
                aprovado: this.Filtro.Aprovado,
                aprovadoEntrada: this.Filtro.AprovadoEntrada,
                empresas: this.lstEmpresa.GetValues().join(","),
                agrupada: true
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.gridAgrupada.PreencherGrid(retorno.dtRelacaoPedidoPeriodoAgrupado);
                    _this.gridAgrupada.GroupBy("Produto_Nome");
                    _this.AccordionFiltros.SetExpanded(false);
                    _this.RefreshAngular();
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
    R_PedPen.prototype.PreencherGridDiscriminada = function () {
        var _this = this;
        try {
            abrirEspera();
            var parametros = {};
            parametros = {
                tipoData: this.Filtro.TipoData,
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final,
                fornecedor: CNum(this.Filtro.Fornecedor),
                situacao: CNum(this.cboSituacao.GetValue()),
                pendenteEntrega: this.Filtro.PendenteEntrega,
                pendente: this.Filtro.Pendente,
                aprovado: this.Filtro.Aprovado,
                aprovadoEntrada: this.Filtro.AprovadoEntrada,
                empresas: this.lstEmpresa.GetValues().join(","),
                agrupada: false
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.gridDiscriminada.PreencherGrid(retorno.dtRelacaoPedidoPeriodo);
                    _this.Filtro.TotalPedidos = retorno.TotalPedidos;
                    _this.Filtro.ValorTotal = retorno.ValorTotal;
                    _this.AccordionFiltros.SetExpanded(false);
                    _this.RefreshAngular();
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
    return R_PedPen;
}(MouraPageRelacaoAngular));
var r_PedPen = new R_PedPen();
//# sourceMappingURL=R_PedPen.js.map