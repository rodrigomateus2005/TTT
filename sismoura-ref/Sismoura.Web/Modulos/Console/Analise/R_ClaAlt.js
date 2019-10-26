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
var R_ClaAlt = /** @class */ (function (_super) {
    __extends(R_ClaAlt, _super);
    function R_ClaAlt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ClaAlt.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "txtObjetivoResumido", {
        get: function () {
            return window['txtObjetivoResumido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "btnAlterarObjetivo", {
        get: function () {
            return window['btnAlterarObjetivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "mdClassificacao", {
        //get chkClassificadas(): MouraCheckBox {
        //    return window['chkClassificadas_Object'];
        //}
        get: function () {
            return window['mdClassificacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "txtHistorico", {
        get: function () {
            return window['txtHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "lblCodigo", {
        get: function () {
            return window['lblCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "lblCliente", {
        get: function () {
            return window['lblCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "lblTela", {
        get: function () {
            return window['lblTela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "btnClassificar", {
        get: function () {
            return window['btnClassificar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "txtHorasDesenvolvimento", {
        //get cboClassificacao(): MouraComboBox {
        //    return window['cboClassificacao_Object'];
        //}
        get: function () {
            return window['txtHorasDesenvolvimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "txtHorasAnalise", {
        get: function () {
            return window['txtHorasAnalise_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "txtHorasTeste", {
        get: function () {
            return window['txtHorasTeste_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "cboClassificadas", {
        get: function () {
            return window['cboClassificadas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "accRelacao", {
        get: function () {
            return window['accRelacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "txtIncluirHistorico", {
        get: function () {
            return window['txtIncluirHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "btnIncluir", {
        get: function () {
            return window['btnIncluir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "txtAnalise", {
        get: function () {
            return window['txtAnalise_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "cboResponsavel", {
        get: function () {
            return window['cboResponsavel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "cboMotivo", {
        get: function () {
            return window['cboMotivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "txtResolvida", {
        get: function () {
            return window['txtResolvida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ClaAlt.prototype, "btnRecusar", {
        get: function () {
            return window['btnRecusar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ClaAlt.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnGridSelecionouItem, this);
            adicionarEventoMoura(this.grid.CellPrepared, this.OnGridCellPrepared, this);
        }
        if (this.btnClassificar) {
            adicionarEventoMoura(this.btnClassificar.Click, this.OnClickClassificar, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickCancelar, this);
        }
        if (this.btnIncluir) {
            adicionarEventoMoura(this.btnIncluir.Click, this.OnClickIncluir, this);
        }
        if (this.btnRecusar) {
            adicionarEventoMoura(this.btnRecusar.Click, this.OnClickRecusar, this);
        }
        if (this.btnAlterarObjetivo) {
            adicionarEventoMoura(this.btnAlterarObjetivo.Click, this.OnClickAlterarObjetivo, this);
        }
        this.LimparCampos();
    };
    R_ClaAlt.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouMotivo) {
            this.GetScope().MudouMotivo = $.proxy(this.MudouMotivo, this);
            this.GetScope().$watch(function (scope) { return scope.Motivo; }, this.GetScope().MudouMotivo);
        }
        if (this.txtResolvida) {
            this.txtResolvida.Visible = false;
        }
    };
    R_ClaAlt.prototype.MudouMotivo = function () {
        if (this.txtResolvida) {
            if (this.cboMotivo.GetValue() != 4 && this.txtResolvida.Visible) {
                this.txtResolvida.Visible = false;
            }
            else if (this.cboMotivo.GetValue() == 4) {
                this.txtResolvida.Visible = true;
            }
        }
    };
    R_ClaAlt.prototype.OnClickRecusar = function (s, e) {
        e.processOnServer = false;
        this.Recusar();
    };
    R_ClaAlt.prototype.Recusar = function () {
        try {
            if (this.txtAnalise.GetText() == "") {
                MostrarAlerta("Informe o motivo da devolução!");
                this.txtAnalise.Focus();
                return;
            }
            if (this.cboResponsavel.GetSelectedIndex() == -1) {
                MostrarAlerta("Informe o usuário que receberá a devolução!");
                this.cboResponsavel.Focus();
                return;
            }
            if (this.cboMotivo.GetSelectedIndex() == -1) {
                MostrarAlerta("Informe o Motivo da Recusa!");
                this.cboMotivo.Focus();
                return;
            }
            if (this.txtResolvida.Visible && this.txtResolvida.GetText() == "") {
                MostrarAlerta("Informe a Atividade Resolvida!");
                this.txtResolvida.Focus();
                return;
            }
            if (!this.verificadoAutorizacaoAprovar) {
                this.dlgFuncaoAdm.Verificar("C_DevAti", ValoresSismoura.UsuarioLogado, false, this.VerificarAutorizacaoAprovar, this);
            }
            if (!this.verificadoAutorizacaoAprovar) {
                return;
            }
            var parametros;
            parametros = {
                codAtividade: this.lblCodigo.Text.CNum(),
                descMotivo: this.cboMotivo.GetText(),
                descricao: this.txtAnalise.GetText(),
                codUsuarioDevolver: this.cboResponsavel.GetValue(),
                codUsuario: ValoresSismoura.UsuarioLogado,
                nomeTela: ValoresSismoura.NomeTela
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("RecusaAtividade", parametros);
            if (retorno) {
                MostrarMensagem("Devolvido com sucesso!");
                this.mdClassificacao.Hide();
                this.PreencherGrade();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        finally {
            this.verificadoAutorizacaoAprovar = false;
        }
    };
    R_ClaAlt.prototype.VerificarAutorizacaoAprovar = function (retorno) {
        if (retorno.Autorizado) {
            this.verificadoAutorizacaoAprovar = true;
            this.Recusar();
        }
        else {
            this.verificadoAutorizacaoAprovar = false;
        }
    };
    R_ClaAlt.prototype.OnClickClassificar = function (s, e) {
        e.processOnServer = false;
        if (this.txtHorasDesenvolvimento.GetText().CNum() <= 0 || this.txtHorasAnalise.GetText().CNum() <= 0 || this.txtHorasTeste.GetText().CNum() <= 0) {
            MostrarAlerta("É necessário informar as horas da atividade!");
            return;
        }
        var parametros;
        parametros = {
            codAtividade: this.lblCodigo.Text.CNum(),
            horasDesenvolvimento: this.txtHorasDesenvolvimento.GetText().CNum(),
            horasAnalise: this.txtHorasAnalise.GetText().CNum(),
            horasTeste: this.txtHorasTeste.GetText().CNum(),
            nomeTela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("AlterarCategoriaAtividade", parametros);
        if (retorno) {
            MostrarMensagem("Atividade classificada com sucesso!");
            this.mdClassificacao.Hide();
            this.PreencherGrade();
        }
        else {
            MostrarAlerta("A atividade não foi classificada!");
        }
    };
    R_ClaAlt.prototype.OnClickIncluir = function (s, e) {
        e.processOnServer = false;
        var parametros;
        parametros = {
            codAtividade: this.lblCodigo.Text.CNum(),
            descricao: this.txtIncluirHistorico.GetText(),
            nomeTela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("InserirHistorico", parametros);
        if (retorno) {
            MostrarMensagem("Histórico inserido com sucesso!");
        }
        this.PreencherHistorico(this.lblCodigo.Text.CNum());
        this.txtIncluirHistorico.SetText("");
    };
    R_ClaAlt.prototype.OnClickCancelar = function (s, e) {
        e.processOnServer = false;
        this.mdClassificacao.Hide();
    };
    R_ClaAlt.prototype.OnGridSelecionouItem = function (s, e) {
        this.CarregarHistorico(e.data.Codigo, e.data.Codigo_Cliente, e.data.Cliente, e.data.Tela, e.data.Responsavel_Cadastro, CNum(e.data.Horas_Desenvolvimento), CNum(e.data.Horas_Analise), CNum(e.data.Horas_Teste), e.data.Descricao_Objetivo);
        this.mdClassificacao.Show();
    };
    R_ClaAlt.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.verificadoAutorizacaoAprovar = false;
        this.txtCliente.Limpar();
        this.cboClassificadas.SetValue(0);
        this.grid.PreencherGrid(null);
    };
    R_ClaAlt.prototype.CarregarHistorico = function (codAtividade, codCliente, cliente, tela, responsavelCadastro, horasDesenvolvimento, horasAnalise, horasTeste, objetivoResumido) {
        //var atividades: SiSMoura.Core.Entity.Console_Atividade[];
        this.lblCodigo.Text = "" + codAtividade;
        this.lblCliente.Text = "" + codCliente + " - " + cliente;
        if (tela == null) {
            tela = "-";
        }
        this.txtObjetivoResumido.SetText(objetivoResumido);
        this.lblTela.Text = "" + tela;
        //this.cboClassificacao.SetValue(categoriaAtv);
        this.txtHorasDesenvolvimento.SetText("" + horasDesenvolvimento);
        this.txtHorasAnalise.SetText("" + horasAnalise);
        this.txtHorasTeste.SetText("" + horasTeste);
        this.cboResponsavel.Combo.SetText(responsavelCadastro);
        this.cboMotivo.Combo.SetText("");
        this.PreencherHistorico(codAtividade);
        this.PreencherAnalise(codAtividade);
    };
    R_ClaAlt.prototype.PreencherAnalise = function (codAtividade) {
        var parametros;
        var analise;
        parametros = {
            codAtividade: codAtividade
        };
        analise = this.ExecutarFuncaoServerSideSynch("getAnaliseAtividade", parametros);
        this.txtAnalise.SetText(analise);
    };
    R_ClaAlt.prototype.PreencherHistorico = function (codAtividade) {
        var parametros;
        var atividades;
        parametros = {
            codigo: codAtividade
        };
        atividades = this.ExecutarFuncaoServerSideSynch("getHistoricoAtividade", parametros);
        this.txtHistorico.SetText(atividades);
    };
    R_ClaAlt.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        var atividades;
        parametros = {
            dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
            dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
            cliente: this.txtCliente.GetText().CNum(),
            classificadas: this.cboClassificadas.GetValue().CNum()
        };
        abrirEspera();
        this.ExecutarFuncaoServerSideAsynch("getAtividadesAlteracao", parametros, function (d) {
            fecharEspera();
            atividades = GetRetornoAJAX(d);
            _this.grid.PreencherGrid(atividades);
            _this.accRelacao.SetExpanded(false);
        }, function (erro) {
            fecharEspera();
            LogarException(erro);
        }, this);
    };
    R_ClaAlt.prototype.OnGridCellPrepared = function (s, e) {
        try {
            if (this.cboClassificadas.GetValue() == 0) {
                if (e.rowType == "data" && e.data != null) {
                    if (CNum(e.data.Horas_Desenvolvimento) <= 0) {
                        e.cellElement.css("color", "#d62828");
                    }
                    else {
                        e.cellElement.css("color", "#17ba00");
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_ClaAlt.prototype.OnClickAlterarObjetivo = function (s, e) {
        try {
            e.processOnServer = false;
            var parametros;
            var retorno;
            parametros = {
                codAtividade: CNum(this.lblCodigo.Text),
                objetivo: this.txtObjetivoResumido.GetText(),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            retorno = this.ExecutarFuncaoServerSideSynch("AlterarObjetivo", parametros);
            MostrarMensagem("Objetivo alterado com sucesso!");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_ClaAlt;
}(MouraPageRelacaoAngular));
var r_ClaAlt = new R_ClaAlt();
//# sourceMappingURL=R_ClaAlt.js.map