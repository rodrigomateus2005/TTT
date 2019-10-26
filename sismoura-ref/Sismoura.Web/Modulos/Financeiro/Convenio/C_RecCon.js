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
var C_RecCon = /** @class */ (function (_super) {
    __extends(C_RecCon, _super);
    function C_RecCon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.acumulado = 0;
        return _this;
    }
    Object.defineProperty(C_RecCon.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RecCon.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RecCon.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RecCon.prototype, "btnGerarF", {
        get: function () {
            return window['btnGerarF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RecCon.prototype, "gridResumida", {
        get: function () {
            return window['gridResumida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RecCon.prototype, "btnImprContFechada", {
        get: function () {
            return window['btnImprContFechada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RecCon.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RecCon.prototype, "txtConvenio", {
        get: function () {
            return window['txtConvenio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_RecCon.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouDiscriminada) {
            this.GetScope().MudouDiscriminada = $.proxy(this.MudouDiscriminada, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Filtro.Discriminada; }, this.GetScope().MudouDiscriminada);
        }
        this.LimparCampos();
    };
    C_RecCon.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnCellPrepared, this);
            adicionarEventoMoura(this.grid.CalculateCustomSummary, this.CalculateCustomSummary, this);
            adicionarEventoMoura(this.grid.SelecionouLinha, this.SelecionouLinha, this);
        }
        if (this.gridResumida) {
            adicionarEventoMoura(this.gridResumida.CellPrepared, this.OnCellPrepared, this);
        }
        if (this.btnGerarF) {
            adicionarEventoMoura(this.btnGerarF.Click, this.OnClickGerarFechamento, this);
        }
        if (this.btnImprContFechada) {
            adicionarEventoMoura(this.btnImprContFechada.Click, this.OnClickImprimirFechada, this);
        }
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickImprimir, this);
        }
        if (this.txtConvenio) {
            adicionarEventoMoura(this.txtConvenio.Procurou, this.OnProcurouConvenio, this);
        }
    };
    C_RecCon.prototype.LimparCampos = function () {
        var _this = this;
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Convenio = 0;
        this.Filtro.Empresa = 0;
        this.Filtro.Data = this.DataServidor();
        this.Filtro.Tipo = "1";
        this.Filtro.Discriminada = true;
        this.Filtro.Ordenar = null;
        this.Filtro.TotalSeparado = CNum(0).Format(2);
        this.Filtro.Fechamento = this.DataServidor();
        this.grid.PreencherGrid(null);
        setTimeout(function () { _this.grid.deselectAll(); }, 1000);
        this.acumulado = 0;
        this.RefreshAngular();
    };
    C_RecCon.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        this.acumulado = 0;
        var parametros;
        var empresas = [];
        if (this.Filtro.Empresa == 0) {
            var length_1 = this.cboEmpresa.Combo.length;
            for (var x = 1; x < length_1; x++) {
                var value = this.cboEmpresa.Combo.children.item(x).attributes['value'].nodeValue;
                empresas.push(value);
            }
        }
        else {
            empresas.push(this.Filtro.Empresa);
        }
        if (this.ValidarCamposObrigatorios()) {
            try {
                parametros = {
                    convenio: CNum(this.Filtro.Convenio),
                    empresa: empresas,
                    data: ConvertToDate(this.Filtro.Data),
                    tipo: this.Filtro.Tipo,
                    discriminada: this.Filtro.Discriminada
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (_this.Filtro.Discriminada) {
                        _this.grid.PreencherGrid(retorno);
                        setTimeout(function () {
                            _this.grid.deselectAll();
                            _this.grid.Grid.selectAll();
                        }, 100);
                    }
                    else {
                        _this.gridResumida.PreencherGrid(retorno);
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
        }
    };
    C_RecCon.prototype.MudouDiscriminada = function () {
        this.grid.PreencherGrid(null);
        this.gridResumida.PreencherGrid(null);
        this.grid.Visible = this.Filtro.Discriminada;
        this.gridResumida.Visible = !this.Filtro.Discriminada;
    };
    C_RecCon.prototype.OnCellPrepared = function (s, e) {
        if (e.rowType == "data") {
            if (e.column["dataField"] == "Acumulado") {
                if (String.IsNullOrWhiteSpace(e.data["Acumulado"])) {
                    this.acumulado += CNum(e.data["Valor"]);
                    e.data["Acumulado"] = this.acumulado;
                }
            }
        }
        else {
            this.acumulado = 0;
        }
    };
    C_RecCon.prototype.CalculateCustomSummary = function (s, e) {
        switch (e.options.summaryProcess) {
            case "start":
                this.somaColuna = 0;
                this.counter = 0;
                break;
            case "calculate":
                if (this.grid.Grid.isRowSelected(this.grid.Grid.getSelectedRowKeys()[this.counter])) {
                    if (e.options.name == "Valor") {
                        this.somaColuna += e.options.value;
                    }
                    this.counter++;
                }
                break;
            case "finalize":
                e.options.totalValue = this.somaColuna;
                this.RefreshAngular();
                break;
        }
    };
    C_RecCon.prototype.SelecionouLinha = function (s, e) {
        this.grid.Refresh();
        this.RefreshAngular();
    };
    C_RecCon.prototype.OnClickGerarFechamento = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var dadosSelecionados = this.grid.GetSelectedRowsData;
        if (CNum(this.Filtro.Convenio) <= 0) {
            MostrarMensagemCampoObrigatorio("Convênio");
            return;
        }
        else if (dadosSelecionados.length <= 0) {
            MostrarAlerta("Por favor, selecione pelo menos um registro para gerar o fechamento!");
            return;
        }
        else if (!ConvertToDate(this.Filtro.Fechamento)) {
            MostrarMensagemCampoObrigatorio("Fechamento");
            return;
        }
        else {
            MsgBoxJS("Deseja realmente fechar o convênio?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (r) {
                if (r.Resultado == MsgBoxResult.Yes) {
                    _this.GerarFechamento(dadosSelecionados);
                }
            });
        }
    };
    C_RecCon.prototype.GerarFechamento = function (contasSelecionadas) {
        var _this = this;
        var parametros;
        var contas = contasSelecionadas;
        parametros = {
            codConvenio: CNum(this.Filtro.Convenio),
            dataVencimento: ConvertToDate(this.Filtro.Fechamento),
            codEmpresa: CNum(this.Filtro.Empresa) == 0 ? ValoresSismoura.EmpresaPadraoUsuario : CNum(this.Filtro.Empresa),
            contas: contasSelecionadas,
            tela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        try {
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarFechamento", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (retorno.Erro) {
                    MostrarAlerta(retorno.MensagemAlerta);
                }
                else {
                    MsgBoxJS(retorno.MensagemRetorno, MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
                }
                _this.LimparCampos();
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
    C_RecCon.prototype.OnClickImprimirFechada = function (s, e) {
        e.processOnServer = false;
        var parametros;
        var contas = this.grid.GetSelectedRowsData;
        if (contas.length > 0) {
            try {
                parametros = {
                    contas: contas,
                    convenio: this.txtConvenio.GetResultado(),
                    empresa: this.cboEmpresa.GetText()
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("PrepararImpressaoContasFechada", parametros, function (d) {
                    fecharEspera();
                    AbrirReport("~/Report/Fixos/", "ContasFechadasConvenio.REPX");
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
        else {
            MostrarAlerta("Não há nada para imprimir!");
        }
    };
    C_RecCon.prototype.OnClickImprimir = function (s, e) {
        if (this.Filtro.Discriminada) {
            if (this.grid.GetSelectedRowsData.length > 0) {
                this.grid.ExportarExcel(true);
            }
            else {
                MostrarAlerta("Não há nada para imprimir!");
            }
        }
        else {
            if (this.gridResumida.DataSource.length > 0) {
                this.gridResumida.ExportarExcel(false);
            }
            else {
                MostrarAlerta("Não há nada para imprimir!");
            }
        }
    };
    C_RecCon.prototype.OnProcurouConvenio = function (s, e) {
        var _this = this;
        var parametros;
        if (CNum(this.txtConvenio.GetText()) > 0) {
            try {
                parametros = {
                    codConvenio: CNum(this.txtConvenio.GetText()),
                    tela: ValoresSismoura.NomeTela,
                    usuario: ValoresSismoura.UsuarioLogado
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("OnProcurouConvenio", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (retorno.Erro) {
                        MostrarAlerta(retorno.MensagemAlerta);
                        _this.LimparCampos();
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
        }
    };
    return C_RecCon;
}(MouraPageRelacaoAngular));
var c_RecCon = new C_RecCon();
//# sourceMappingURL=C_RecCon.js.map