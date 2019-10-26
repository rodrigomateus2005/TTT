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
var R_RazAna = /** @class */ (function (_super) {
    __extends(R_RazAna, _super);
    function R_RazAna() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RazAna.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RazAna.prototype, "txtContaContabil_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaContabil_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RazAna.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RazAna.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RazAna.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RazAna.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RazAna.prototype, "mdLancamento", {
        get: function () {
            return window['mdLancamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RazAna.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_RazAna.prototype.Init = function () {
        _super.prototype.Init.call(this);
        var parametros = {};
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.AntesAbrirProcura, this.OnContaContabilAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaContabil.PesquisandoContabil, this.OnContaContabilPesquisando, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.PreencherEmpresaContabil, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.onGridSelecionouLinha, this);
            adicionarEventoMoura(this.grid.CellPrepared, this.OnGridCellPrepared, this);
        }
        if (this.dlgTelaModal) {
            adicionarEventoMoura(this.dlgTelaModal.Retornou, this.OnRetornouTelaModalCadastro, this);
        }
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickImprimir, this);
        }
        this.PreencherEmpresaContabil();
    };
    R_RazAna.prototype.PreencherEmpresaContabil = function () {
        this.txtContaContabil.Limpar();
        if (this.txtContaContabil_hdnEmpresaContabil != undefined) {
            this.txtContaContabil_hdnEmpresaContabil.value = this.cboEmpresa.GetValue();
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.AntesAbrirProcura, this.OnContaContabilAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaContabil.PesquisandoContabil, this.OnContaContabilPesquisando, this);
        }
    };
    R_RazAna.prototype.LimparCampos = function () {
        this.txtContaContabil.Limpar();
        this.txtPeriodo.IniciarDataAtual();
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.grid.PreencherGrid([]);
    };
    R_RazAna.prototype.OnContaContabilAntesAbrirProcura = function (s, ev) {
        this.txtContaContabil.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    R_RazAna.prototype.OnRetornouTelaModalCadastro = function (s, e) {
        try {
            this.PreencherGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_RazAna.prototype.OnContaContabilPesquisando = function (s, ev) {
        this.txtContaContabil.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var retornoContaSintetica = false;
        var parametros;
        var parametroReduzido;
        var parametroSintetica;
        parametros = {
            codigoContaContabil: this.txtContaContabil.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue()
        };
        parametroReduzido = {
            reduzido: this.txtContaContabil.TextBoxAdicional.value.CNum(),
            codEmpresa: ValoresSismoura.EmpresaPadraoUsuario
        };
        if (this.txtContaContabil.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Contábil não pertence a empresa selecionada!');
                    this.txtContaContabil.Limpar();
                    this.txtContaContabil.Focus();
                }
            }
            retornoContaSintetica = this.ExecutarFuncaoServerSideSynch("IsContaSinteticaReduzido", parametroReduzido);
            if (retornoContaSintetica) {
                ev.Cancelar = true;
                MostrarAlerta('A Conta Contábil informada precisa ser Analítica!');
                this.txtContaContabil.Limpar();
                this.txtContaContabil.Focus();
            }
        }
    };
    R_RazAna.prototype.onGridSelecionouLinha = function (s, e) {
        var parametros = [];
        parametros.push("codigo=" + e.data.LCTO);
        this.dlgTelaModal.AbrirTelaModal(formataURLRelativa(URLTela.CadastroLancamentoContabil), parametros, "");
    };
    R_RazAna.prototype.ValidarPeriodo = function (dataInicio, dataFim) {
        if (!dataInicio)
            return false;
        if (!dataFim)
            return false;
        return true;
    };
    R_RazAna.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var dataInicio = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
        var dataFim = this.txtPeriodo.textBoxCalendarioFim.GetDate();
        if (!this.ValidarPeriodo(dataInicio, dataFim)) {
            MostrarAlerta("Informe um período correto!");
            return;
        }
        try {
            var parametros = {
                dataInicial: dataInicio,
                dataFinal: dataFim,
                codEmpresa: this.cboEmpresa.GetValue(),
                contaContabil: this.txtContaContabil.TextBoxAdicional.value.CNum()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("getRazaoAnalitico", parametros, function (d) {
                try {
                    fecharEspera();
                    _this.grid.PreencherGrid(GetRetornoAJAX(d));
                    _this.grid.GroupBy("Conta");
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            this.grid.PreencherGrid([]);
            LogarException(ex);
        }
    };
    R_RazAna.prototype.OnClickImprimir = function (s, e) {
        e.processOnServer = false;
        try {
            if (this.grid.DataSource.length < 1) {
                MostrarAlerta("Não há itens para serem impressos!");
                return;
            }
            var arrayRazao_1 = [];
            this.grid.DataSource.forEach(function (q) {
                var novoRazao = {
                    Conta: q.Conta,
                    Dia: q.Dia,
                    Data: q.Data,
                    LCTO: q.LCTO,
                    Contra_Partida: q.Contra_Partida,
                    Historico: q.Historico,
                    Debito: q.Debito,
                    Credito: q.Credito,
                    Saldo: q.Saldo,
                    DC: q.DC
                };
                arrayRazao_1.push(q);
            });
            var parametros = {
                arrayRazao: JSON.stringify(arrayRazao_1),
                codEmpresa: this.cboEmpresa.GetValue(),
                qtdePaginas: Math.ceil((this.grid.DataSource.length / 42)),
                //balSuspensao: this.chkSuspensao.Checked,
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                //origem: this.cboOrigem.GetValue(),
                //consolidacao: this.lstConsolidacao.GetValue(),
                codUsuario: ValoresSismoura.UsuarioLogado,
                tela: ValoresSismoura.NomeTela
            };
            this.ExecutarFuncaoServerSideSynch("PreencherImpressao", parametros);
            var urlTela = "ReportView.aspx?relatorio=~/Report/Fixos/RazaoAnalitica.REPX";
            //AbrirReport("~/Report/Fixos/", "RazaoAnalitica.REPX");
            abrirTelaNovaAbaParametros(formataURLRelativa(urlTela), []);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_RazAna.prototype.OnGridCellPrepared = function (s, e) {
        if (e.rowType == "data" && e.data) {
            if (e.row.data['Contra_Partida'] == "" && e.row.data['Historico'] != "Saldo Anterior") {
                e.cellElement.css("background", "#FF5252");
                //$("body").find("[aria-label = 'Column Contra Partida, Value ']").css("background", "#FF5252");
            }
        }
    };
    return R_RazAna;
}(MouraPageRelacaoAngular));
var r_RazAna = new R_RazAna();
//# sourceMappingURL=R_RazAna.js.map