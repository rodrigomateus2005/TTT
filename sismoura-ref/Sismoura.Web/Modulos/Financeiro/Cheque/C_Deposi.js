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
var C_Deposi = /** @class */ (function (_super) {
    __extends(C_Deposi, _super);
    function C_Deposi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Deposi.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Deposi.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Deposi.prototype, "GridDepositados", {
        get: function () {
            return window['GridDepositados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Deposi.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Deposi.prototype, "chkNaoGerarLancamento", {
        get: function () {
            return window['chkNaoGerarLancamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Deposi.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Deposi.prototype, "txtTipoLancamentoBaixa", {
        get: function () {
            return window['txtTipoLancamentoBaixa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Deposi.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Deposi.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Deposi.prototype, "btnDepositar", {
        get: function () {
            return window['btnDepositar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Deposi.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.GridDepositados.Visible = false;
        if (!ValoresSismoura.UtilizarModuloContabil) {
            this.txtTipoLancamentoBaixa.Visible = false;
        }
        this.LimparCampos();
    };
    C_Deposi.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtTipoLancamentoBaixa) {
            adicionarEventoMoura(this.txtTipoLancamentoBaixa.Procurou, this.ProcurouTipoLancamentoBaixa, this);
        }
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.SelecionouEmpresa, this);
        }
        if (this.cboContaCorrente) {
            adicionarEventoDevExpress(this.cboContaCorrente.Combo.SelectedIndexChanged, this.SelecionouContaCorrente, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.Grid_SelecionouLinha, this);
        }
        if (this.btnDepositar) {
            adicionarEventoMoura(this.btnDepositar.Click, this.ClickBotaoDepositar, this);
        }
    };
    C_Deposi.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                empresas: this.lstEmpresa.GetValues().join(",")
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno);
                fecharEspera();
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
    C_Deposi.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.chkNaoGerarLancamento.Checked = false;
        this.Filtro.SituacaoBaixa = null;
        this.cboContaCorrente.Limpar();
        this.Filtro.ContaContabil = "";
        this.Filtro.Data = this.DataServidor();
        this.txtTipoLancamentoBaixa.Limpar();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.grid.PreencherGrid(null);
        this.cboContaCorrente.Preencher(this.lstEmpresa.GetValuesNumber(), false);
        this.RefreshAngular();
    };
    C_Deposi.prototype.ClickBotaoDepositar = function (s, e) {
        MsgBoxJS("Deseja realmente depositar o(s) cheque(s) selecionado(s) ?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, $.proxy(this.OnSelecionouMsgBox, this), "depositar_cheques");
    };
    C_Deposi.prototype.OnSelecionouMsgBox = function (e) {
        if (e.Argument == "depositar_cheques" && e.Resultado == MsgBoxResult.Yes) {
            this.DepositarCheques();
        }
        else if (e.Argument == "imprimir_cheque_depositado" && e.Resultado == MsgBoxResult.Yes) {
            this.GridDepositados.ImprimirGrid();
        }
    };
    C_Deposi.prototype.DepositarCheques = function () {
        var _this = this;
        var parametros;
        var validanator = true;
        var codigos;
        var mensagem = "Preencha o campo corretamente: ";
        try {
            codigos = this.GetValoresRowsSelecionadas("Codigo");
            if (codigos.length <= 0) {
                mensagem = "Selecione o(s) cheque(s) que deseja depositar";
                validanator = false;
            }
            else if (CNum(this.Filtro.SituacaoBaixa) <= 0) {
                mensagem += "Situação";
                validanator = false;
            }
            else if (String.IsNullOrWhiteSpace(this.cboContaCorrente.GetContaCorrente())) {
                mensagem += "Conta Corrente";
                validanator = false;
            }
            else if (CNum(this.Filtro.ContaContabil) <= 0) {
                mensagem += "Conta Contábil";
                validanator = false;
            }
            else if (!this.Filtro.Data && !ConvertToDate(this.Filtro.Data)) {
                mensagem += "Data Depósito";
                validanator = false;
            }
            if (!validanator) {
                MostrarAlerta(mensagem);
                return;
            }
            parametros = {
                codigosGrid: this.GetValoresRowsSelecionadas("Codigo"),
                situacaoBaixa: CNum(this.Filtro.SituacaoBaixa),
                contaCorrente: this.cboContaCorrente.GetContaCorrente(),
                contaContabil: CNum(this.Filtro.ContaContabil),
                data: this.Filtro.Data,
                tipoLancamentoBaixa: CNum(this.Filtro.TipoLancamentoBaixa),
                empresaSelecionada: this.cboContaCorrente.GetEmpresa(),
                naoGerarLancamento: this.chkNaoGerarLancamento.Checked,
                tela: ValoresSismoura.NomeTela
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("DepositarCheques", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (!String.IsNullOrWhiteSpace(retorno.Mensagem)) {
                    MostrarAlerta(retorno.Mensagem);
                    return;
                }
                _this.GridDepositados.PreencherGrid(retorno.listaCheques);
                MsgBoxJS("Deseja imprimir o(s) cheque(s) depositado(s) ?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, $.proxy(_this.OnSelecionouMsgBox, _this), "imprimir_cheque_depositado");
                _this.PreencherGrade();
                _this.Filtro.SituacaoBaixa = null;
                _this.cboContaCorrente.Limpar();
                _this.Filtro.ContaContabil = "";
                _this.Filtro.DataDeposito = _this.DataServidor();
                _this.txtTipoLancamentoBaixa.Limpar();
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
    };
    C_Deposi.prototype.GetValoresRowsSelecionadas = function (campo) {
        var retorno = [];
        try {
            for (var i = 0; i < this.grid.GetSelectedRowsData.length; i++) {
                retorno.push(this.grid.GetSelectedRowsData[i][campo]);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    C_Deposi.prototype.ProcurouTipoLancamentoBaixa = function (s, e) {
        var parametros;
        var entity;
        var empresa;
        try {
            parametros = {
                tipoLancamentoBaixa: CNum(this.txtTipoLancamentoBaixa.GetText())
            };
            entity = this.ExecutarFuncaoServerSideSynch("obterPorCodigo", parametros);
            if (this.cboContaCorrente.GetEmpresa() > 0) {
                empresa = this.cboContaCorrente.GetEmpresa();
            }
            else {
                empresa = ValoresSismoura.EmpresaPadraoUsuario;
            }
            if (!entity && entity.Tipo_Configuracao == "DC" || !(entity.Empresa == empresa)) {
                MostrarAlerta("Registro não encontrado ou Inativo");
                this.txtTipoLancamentoBaixa.SetText("");
                this.txtTipoLancamentoBaixa.Limpar();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Deposi.prototype.SelecionouContaCorrente = function (s, e) {
        this.txtTipoLancamentoBaixa.Limpar();
        this.txtTipoLancamentoBaixa.LimparParametros();
        this.txtTipoLancamentoBaixa.AddParametro("TipoConfiguracaoContabil", "DC");
        this.txtTipoLancamentoBaixa.AddParametro("codEmpresa", this.cboContaCorrente.GetEmpresa().toString());
        this.txtContaContabil.Limpar();
        this.txtContaContabil.LimparParametros();
        this.txtContaContabil.AddParametro("Empresa", this.cboContaCorrente.GetEmpresa().toString());
    };
    C_Deposi.prototype.SelecionouEmpresa = function () {
        this.cboContaCorrente.Preencher(this.lstEmpresa.GetValuesRelacaoNumber(), false);
    };
    C_Deposi.prototype.Grid_SelecionouLinha = function (s, e) {
        this.grid.Grid.element().find("tr").css("font-weight", "normal");
        for (var x = 0; x < this.grid.Grid.getSelectedRowKeys().length; x++) {
            var index = this.grid.Grid.getRowIndexByKey(this.grid.Grid.getSelectedRowKeys()[x]);
            this.grid.Grid.getRowElement(index).css("font-weight", "bold");
        }
    };
    return C_Deposi;
}(MouraPageRelacaoAngular));
var c_Deposi = new C_Deposi();
//# sourceMappingURL=C_Deposi.js.map