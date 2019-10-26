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
var R_BalVer = /** @class */ (function (_super) {
    __extends(R_BalVer, _super);
    function R_BalVer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_BalVer.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "cboOrigem", {
        get: function () {
            return window['cboOrigem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "chkSuspensao", {
        get: function () {
            return window['chkSuspensao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "lstConsolidacao", {
        get: function () {
            return window['lstConsolidacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "cboAssunaturaSocio", {
        get: function () {
            return window['cboAssunaturaSocio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "lblTotalAtivo", {
        get: function () {
            return window['lblTotalAtivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "lblTotalPassivo", {
        get: function () {
            return window['lblTotalPassivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "lblTotalDespesas", {
        get: function () {
            return window['lblTotalDespesas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "lblTotalReceitas", {
        get: function () {
            return window['lblTotalReceitas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "lblTotalCustos", {
        get: function () {
            return window['lblTotalCustos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "lblTotaisDebito", {
        get: function () {
            return window['lblTotaisDebito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "lblTotaisCredito", {
        get: function () {
            return window['lblTotaisCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "lblDifDebitoCredito", {
        get: function () {
            return window['lblDifDebitoCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "lblDifAtivoPassivo", {
        get: function () {
            return window['lblDifAtivoPassivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "lblTotalXPeriodo", {
        get: function () {
            return window['lblTotalXPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "lblTotalXAcumulado", {
        get: function () {
            return window['lblTotalXAcumulado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_BalVer.prototype, "DivResumo", {
        get: function () {
            return window['DivResumo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_BalVer.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtPeriodo) { }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnAlterouEmpresa, this);
        }
        if (this.cboOrigem) { }
        if (this.chkSuspensao) { }
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickImprimir, this);
        }
        if (this.grd) {
            adicionarEventoMoura(this.grd.CellPrepared, this.OnGerouLinhaTipo, this);
        }
        $('#DivResumo').css("visibility", "hidden");
    };
    R_BalVer.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCamposAlterou();
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.validarEmpresaMatriz();
    };
    R_BalVer.prototype.OnGerouLinhaTipo = function (s, e) {
        if (e.rowType == "data") {
            if (e.row.data['Tipo'] == "S") {
                e.cellElement.css("font-weight", "bold");
            }
        }
    };
    R_BalVer.prototype.OnAlterouEmpresa = function () {
        this.LimparCamposAlterou();
        this.validarEmpresaMatriz();
    };
    R_BalVer.prototype.validarEmpresaMatriz = function () {
        var parametros = {
            codEmpresa: this.cboEmpresa.GetValue()
        };
        if (!this.ExecutarFuncaoServerSideSynch("ValidarMatrizEmpresa", parametros)) {
            this.lstConsolidacao.Enabled = false;
        }
        else {
            this.lstConsolidacao.Enabled = true;
        }
    };
    R_BalVer.prototype.OnClickImprimir = function (s, e) {
        e.processOnServer = false;
        try {
            if (this.grd.DataSource.length < 1) {
                MostrarAlerta("Não há itens para serem impressos!");
                return;
            }
            var arrayBalancete_1 = [];
            this.grd.DataSource.forEach(function (q) {
                var novoBalancete = {
                    Codigo_Contabil: q.Codigo_Contabil,
                    Descricao: q.Descricao,
                    Saldo_Anterior: q.Saldo_Anterior,
                    DCA: q.DCA,
                    Debito: q.Debito,
                    Credito: q.Credito,
                    DCT: q.DCT,
                    Saldo_Atual: q.Saldo_Atual,
                    Origem: q.Origem,
                    Tipo: q.Tipo,
                    Root_Conta: q.Root_Conta
                };
                arrayBalancete_1.push(q);
            });
            var resumo = {};
            if (this.IsEncerramento() == false) {
                resumo.TotalAtivo = this.lblTotalAtivo.Text;
                resumo.TotalPassivo = this.lblTotalPassivo.Text;
                resumo.TotalDespesa = this.lblTotalDespesas.Text;
                resumo.TotalReceita = this.lblTotalReceitas.Text;
                resumo.TotalCusto = this.lblTotalCustos.Text;
                resumo.TotalDebitos = this.lblTotaisDebito.Text;
                resumo.TotalCreditos = this.lblTotaisCredito.Text;
                resumo.DifCredDeb = this.lblDifDebitoCredito.Text;
                resumo.DifAtvPsv = this.lblDifAtivoPassivo.Text;
                resumo.TotalXPeriodoLabel = this.lblTotalXPeriodo.GetTextLabelControl();
                resumo.TotalXPeriodoText = this.lblTotalXPeriodo.Text;
                resumo.TotalXAcumuladoLabel = this.lblTotalXAcumulado.GetTextLabelControl();
                resumo.TotalXAcumuladoText = this.lblTotalXAcumulado.Text;
                if (this.chkSuspensao.Checked == true || this.txtPeriodo.textBoxCalendarioInicio.GetDate().getMonth() == this.txtPeriodo.textBoxCalendarioFim.GetDate().getMonth()) {
                    resumo.TotalXAcumuladoLabel = null;
                    resumo.TotalXAcumuladoText = null;
                }
            }
            else {
                resumo = null;
            }
            var parametros = {
                arrayBalancete: JSON.stringify(arrayBalancete_1),
                codEmpresa: this.cboEmpresa.GetValue(),
                qtdePaginas: Math.ceil((this.grd.DataSource.length / 42)),
                balSuspensao: this.chkSuspensao.Checked,
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                origem: this.cboOrigem.GetValue(),
                consolidacao: this.lstConsolidacao.GetValue(),
                codUsuario: ValoresSismoura.UsuarioLogado,
                tela: ValoresSismoura.NomeTela,
                CodRepresentante: CNum(this.cboAssunaturaSocio.GetValue()),
                resumo: resumo
            };
            this.ExecutarFuncaoServerSideSynch("PreencherImpressao", parametros);
            AbrirReport("~/Report/Fixos/", "Balance.REPX");
            //AbrirReport("~/Report/Fixos/", "Balance.REPX");
            var urlTela = "ReportView.aspx?relatorio=~/Report/Fixos/Balance.REPX";
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_BalVer.prototype.LimparCamposAlterou = function () {
        this.cboOrigem.SetValue("T");
        this.grd.PreencherGrid([]);
        this.lstConsolidacao.LimparSelecao();
        this.chkSuspensao.Checked = false;
        this.cboAssunaturaSocio.LimparSelecao();
        this.RefreshAngular();
        $('#lblTotalXAcumulado').css("visibility", "hidden");
        $('#DivResumo').css("visibility", "hidden");
    };
    R_BalVer.prototype.LimparCampos = function () {
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.txtPeriodo.Iniciar();
        this.cboOrigem.SetValue("T");
        this.grd.PreencherGrid([]);
        this.lstConsolidacao.LimparSelecao();
        this.chkSuspensao.Checked = false;
        this.cboAssunaturaSocio.LimparSelecao();
        this.RefreshAngular();
        $('#lblTotalXAcumulado').css("visibility", "hidden");
        $('#DivResumo').css("visibility", "hidden");
    };
    R_BalVer.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        if (!ValidarPeriodo(this.txtPeriodo.textBoxCalendarioInicio.GetDate(), this.txtPeriodo.textBoxCalendarioFim.GetDate())) {
            MostrarAlerta("Informe corretamente o período do Balancete de Verificação.");
            return;
        }
        if (this.cboOrigem.GetText() == null) {
            MostrarAlerta("Origem selecionada inválida!");
            return;
        }
        else if (this.cboOrigem.GetValue() == null) {
            MostrarAlerta("Origem selecionada inválida!");
            return;
        }
        try {
            abrirEspera("Carregando registros, isto pode demorar um pouco...");
            if (this.lstConsolidacao.GetValue() != "") {
                var params = {
                    matriz: this.cboEmpresa.GetValue()
                };
            }
            this.grd;
            var parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                empresa: this.cboEmpresa.GetValue(),
                origem: this.cboOrigem.GetValue(),
                consolidacao: this.lstConsolidacao.GetValue()
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    fecharEspera();
                    _this.grd.PreencherGrid(GetRetornoAJAX(d));
                    _this.grd.OrderBy("Codigo_Contabil", "asc");
                    _this.grd.GroupBy("Ordem_Origem");
                    if (_this.IsEncerramento() == false && _this.grd.DataSource.length > 0) {
                        _this.GerarResumo(GetRetornoAJAX(d));
                        fecharEspera();
                    }
                    else {
                        $('#lblTotalXAcumulado').css("visibility", "hidden");
                        $('#DivResumo').css("visibility", "hidden");
                        fecharEspera();
                    }
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
            this.grd.PreencherGrid([]);
            LogarException(ex);
            fecharEspera();
        }
    };
    R_BalVer.prototype.GerarResumo = function (source) {
        var totaisBalancete = [];
        source.forEach(function (q) {
            var novoBalancete = {};
            novoBalancete.Codigo_Contabil = q.Codigo_Contabil;
            novoBalancete.Saldo_Atual = q.Saldo_Atual;
            novoBalancete.Origem = q.Origem;
            novoBalancete.Tipo = q.Tipo;
            totaisBalancete.push(q);
        });
        if (totaisBalancete.FirstOrDefault("Codigo_Contabil", "1.0.0.00.0000 ") != null) {
            var Ativo = totaisBalancete.FirstOrDefault("Codigo_Contabil", "1.0.0.00.0000 ");
            var TotalAtivo = Ativo.Saldo_Atual.Format(2);
            this.lblTotalAtivo.Text = TotalAtivo.toString() + " D";
        }
        else if (totaisBalancete.FirstOrDefault("Codigo_Contabil", "1.0.0.00.0000 ") == null) {
            this.lblTotalAtivo.Text = "00,00 D";
            var TotalAtivo = "00,00";
            MsgBoxJS("Conta Ativo não encontrada para a empresa selecionada, cadastre-a na tela Cadastro de Conta Contábil para totalizar o Ativo corretamente no Quadro de Resumo", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, function (result) {
                return true;
            });
        }
        else {
            this.lblTotalAtivo.Text = "00,00 D";
            var TotalAtivo = "00,00";
        }
        if (totaisBalancete.FirstOrDefault("Codigo_Contabil", "2.0.0.00.0000 ") != null) {
            var Passivo = totaisBalancete.FirstOrDefault("Codigo_Contabil", "2.0.0.00.0000 ");
            var TotalPassivo = Passivo.Saldo_Atual.Format(2);
            this.lblTotalPassivo.Text = TotalPassivo.toString() + " C";
        }
        else if (totaisBalancete.FirstOrDefault("Codigo_Contabil", "2.0.0.00.0000 ") == null) {
            this.lblTotalPassivo.Text = "00,00 C";
            var TotalPassivo = "00,00";
            MsgBoxJS("Conta Passivo não encontrada para a empresa selecionada, cadastre-a na tela Cadastro de Conta Contábil para totalizar o Passivo corretamente no Quadro de Resumo", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, function (result) {
                return true;
            });
        }
        else {
            this.lblTotalPassivo.Text = "00,00 C";
            var TotalPassivo = "00,00";
        }
        if (totaisBalancete.FirstOrDefault("Codigo_Contabil", "3.0.0.00.0000 ") != null) {
            var Receita = totaisBalancete.FirstOrDefault("Codigo_Contabil", "3.0.0.00.0000 ");
            var TotalReceita = Receita.Saldo_Atual.Format(2);
            this.lblTotalReceitas.Text = TotalReceita.toString() + " C";
        }
        else if (totaisBalancete.FirstOrDefault("Codigo_Contabil", "3.0.0.00.0000 ") == null) {
            this.lblTotalReceitas.Text = "00,00 C";
            var TotalReceita = "00,00";
            MsgBoxJS("Conta Receitas não encontrada para a empresa selecionada, cadastre-a na tela Cadastro de Conta Contábil para totalizar o Receitas corretamente no Quadro de Resumo", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, function (result) {
                return true;
            });
        }
        else {
            this.lblTotalReceitas.Text = "00,00 C";
            var TotalReceita = "00,00";
        }
        if (totaisBalancete.FirstOrDefault("Codigo_Contabil", "4.0.0.00.0000 ") != null) {
            var Custo = totaisBalancete.FirstOrDefault("Codigo_Contabil", "4.0.0.00.0000 ");
            var TotalCusto = Custo.Saldo_Atual.Format(2);
            this.lblTotalCustos.Text = TotalCusto.toString() + " D";
        }
        else if (totaisBalancete.FirstOrDefault("Codigo_Contabil", "4.0.0.00.0000 ") == null) {
            this.lblTotalCustos.Text = "00,00 C";
            var TotalCusto = "00,00";
            MsgBoxJS("Conta Custos não encontrada para a empresa selecionada, cadastre-a na tela Cadastro de Conta Contábil para totalizar o Custos corretamente no Quadro de Resumo", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, function (result) {
                return true;
            });
        }
        else {
            this.lblTotalCustos.Text = "00,00 C";
            var TotalCusto = "00,00";
        }
        if (totaisBalancete.FirstOrDefault("Codigo_Contabil", "5.0.0.00.0000 ") != null) {
            var Despesa = totaisBalancete.FirstOrDefault("Codigo_Contabil", "5.0.0.00.0000 ");
            var TotalDespesa = Despesa.Saldo_Atual.Format(2);
            this.lblTotalDespesas.Text = TotalDespesa.toString() + " D";
        }
        else if (totaisBalancete.FirstOrDefault("Codigo_Contabil", "5.0.0.00.0000 ") == null) {
            this.lblTotalDespesas.Text = "00,00 C";
            var TotalDespesa = "00,00";
            MsgBoxJS("Conta Despesas não encontrada para a empresa selecionada, cadastre-a na tela Cadastro de Conta Contábil para totalizar o Despesas corretamente no Quadro de Resumo", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, function (result) {
                return true;
            });
        }
        else {
            this.lblTotalDespesas.Text = "00,00 C";
            var TotalDespesa = "00,00";
        }
        var TotalDebitos = (TotalAtivo.CNum() + TotalCusto.CNum() + TotalDespesa.CNum()).Format(2);
        this.lblTotaisDebito.Text = TotalDebitos.toString() + " D";
        var TotalCreditos = (TotalPassivo.CNum() + TotalReceita.CNum()).Format(2);
        this.lblTotaisCredito.Text = TotalCreditos.toString() + " C";
        var DifDebCred = (TotalDebitos.CNum() - TotalCreditos.CNum());
        if (DifDebCred > 0) {
            this.lblDifDebitoCredito.Text = DifDebCred.Format(2) + " D";
        }
        else {
            DifDebCred = Math.abs(DifDebCred);
            this.lblDifDebitoCredito.Text = DifDebCred.Format(2) + " C";
        }
        var DifAtvPsv = (TotalAtivo.CNum() - TotalPassivo.CNum());
        if (DifAtvPsv > 0) {
            this.lblDifAtivoPassivo.Text = DifAtvPsv.Format(2) + " D";
        }
        else {
            DifAtvPsv = Math.abs(DifAtvPsv);
            this.lblDifAtivoPassivo.Text = DifAtvPsv.Format(2) + " C";
        }
        var XPeriodo = (TotalDebitos.CNum() - TotalAtivo.CNum()) - (TotalCreditos.CNum() - TotalPassivo.CNum());
        if (XPeriodo > 0) {
            this.lblTotalXPeriodo.SetTextLabelControl("Total de Prejuízos no Período:");
            this.lblTotalXPeriodo.Text = XPeriodo.Format(2) + " D";
        }
        else {
            this.lblTotalXPeriodo.SetTextLabelControl("Total de Lucro no Período:");
            XPeriodo = Math.abs(XPeriodo);
            this.lblTotalXPeriodo.Text = XPeriodo.Format(2) + " C";
        }
        if (this.chkSuspensao.Checked == false && this.txtPeriodo.textBoxCalendarioInicio.GetDate().getMonth() != this.txtPeriodo.textBoxCalendarioFim.GetDate().getMonth()) {
            var filiais = [];
            abrirEspera("Carregando registros, isto pode demorar um pouco...");
            var primeiraData = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
            primeiraData.setDate(1);
            primeiraData.setMonth(0);
            var parametros = {
                dataInicial: primeiraData,
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                empresa: this.cboEmpresa.GetValue(),
                origem: this.cboOrigem.GetValue(),
                consolidacao: this.lstConsolidacao.GetValue()
            };
            var EncSource = source;
            var ListaResultado = [];
            EncSource.forEach(function (x) {
                var indice = x.Codigo_Contabil.substring(0, 1).CNum();
                if (indice >= 3) {
                    ListaResultado.push(x);
                }
            });
            var XAcumulado = ListaResultado.Sum("Saldo_Atual");
            if (XAcumulado > 0) {
                this.lblTotalXAcumulado.SetTextLabelControl("Total de Prejuizo Acumulado: ");
                this.lblTotalXAcumulado.Text = XAcumulado.Format(2) + " D";
            }
            else {
                XAcumulado = Math.abs(XAcumulado);
                this.lblTotalXAcumulado.SetTextLabelControl("Total de Lucro Acumulado: ");
                this.lblTotalXAcumulado.Text = XAcumulado.Format(2) + " C";
            }
            $('#lblTotalXAcumulado').css("visibility", "visible");
        }
        else {
            $('#lblTotalXAcumulado').css("visibility", "hidden");
        }
        $('#DivResumo').css("visibility", "visible");
    };
    R_BalVer.prototype.IsEncerramento = function () {
        var parametros = {
            DataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
            DataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
            Empresa: this.cboEmpresa.GetValue()
        };
        return this.ExecutarFuncaoServerSideSynch("IsEncerramento", parametros);
    };
    R_BalVer.prototype.GerarAcumulado = function () {
    };
    return R_BalVer;
}(MouraPageRelacaoAngular));
var r_BalVer = new R_BalVer();
//# sourceMappingURL=R_BalVer.js.map