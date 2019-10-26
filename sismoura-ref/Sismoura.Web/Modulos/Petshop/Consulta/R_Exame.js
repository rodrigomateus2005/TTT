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
var R_Exame = /** @class */ (function (_super) {
    __extends(R_Exame, _super);
    function R_Exame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.atendimento = 0;
        return _this;
    }
    Object.defineProperty(R_Exame.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Exame.prototype, "Grid", {
        get: function () {
            return window["Grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Exame.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Exame.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Exame.prototype, "lstStatus", {
        get: function () {
            return window['lstStatus_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Exame.prototype, "accFiltro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Exame.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Exame.prototype, "txtLaboratio", {
        get: function () {
            return window['txtLaboratio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Exame.prototype, "txtVeterinario", {
        get: function () {
            return window['txtVeterinario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Exame.prototype, "pnC", {
        get: function () {
            return $('#pnC')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Exame.prototype, "txtTempoAtualizacao", {
        get: function () {
            return window['txtTempoAtualizacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Exame.prototype, "chkTempoAdicionar", {
        get: function () {
            return window['chkTempoAdicionar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Exame.prototype, "dlgMotivoRecusa", {
        get: function () {
            return window['dlgMotivoRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Exame.prototype, "txtMotivoRecusa", {
        get: function () {
            return window['txtMotivoRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Exame.prototype, "txtObservacaoRecusa", {
        get: function () {
            return window['txtObservacaoRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Exame.prototype, "btnConfirmarRecusa", {
        get: function () {
            return window['btnConfirmarRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Exame.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.lstEmpresa.LimparSelecao();
        this.txtTempoAtualizacao.SetText('30');
        this.chkTempoAdicionar.Checked = true;
        if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        }
        this.txtPet.Limpar();
        this.txtVeterinario.Limpar();
        this.atendimento = 0;
        //  this.Grid.PreencherGrid([]);
    };
    R_Exame.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_Exame.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.CellPrepared, this.OnGridCellPrepared, this);
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouLinha, this);
            adicionarEventoMoura(this.Grid.ClickBotaoLinha, this.OnGridClickBotaoLinha, this);
            this.PreencherLabel();
        }
        if (this.dlgMotivoRecusa) {
            adicionarEventoMoura(this.dlgMotivoRecusa.Fechou, this.OnFechouModalMotivoRecusa, this);
        }
        if (this.btnConfirmarRecusa) {
            adicionarEventoMoura(this.btnConfirmarRecusa.Click, this.OnClickConfirmarRecusa, this);
        }
    };
    R_Exame.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (this.txtTempoAtualizacao.GetText().CNum() != 0 && this.chkTempoAdicionar.Check.checked == false) {
            return MostrarAlerta("Marque a opção de Atualizar a cada (segundos)");
        }
        if (this.chkTempoAdicionar.Check.checked && this.txtTempoAtualizacao.GetText().CNum() < 10) {
            return MostrarAlerta("O tempo de atualização deve ser maior ou igual a 10 segundos");
        }
        if (this.accFiltro) {
            this.accFiltro.SetExpanded(false);
        }
        var teste;
        teste = this.Refresh();
    };
    R_Exame.prototype.GerarGrade = function () {
        var empresas;
        empresas = this.lstEmpresa.GetValuesRelacao();
        var status;
        status = this.lstStatus.SelectedValues;
        try {
            var parametros = {
                arrEmpresas: empresas,
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                arrStatus: status,
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum(),
                laboratorio: this.txtLaboratio.GetText().CNum(),
                solicitante: this.txtVeterinario.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("RelacaoExames", parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Exame.prototype.Refresh = function () {
        var codigo = 0;
        if (this.chkTempoAdicionar.Check.checked) {
            this.GerarGrade();
            codigo = setInterval($.proxy(function () {
                this.GerarGrade();
            }, this), this.txtTempoAtualizacao.GetText().CNum() * 1000);
        }
        else {
            this.GerarGrade();
        }
        return codigo.toString();
    };
    R_Exame.prototype.OnGridCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data) {
                var corFundo = "" + e.data["Cor_Fundo_CSS"];
                var corFonte = "" + e.data["Cor_Fonte_CSS"];
                if (!String.IsNullOrWhiteSpace(corFundo)) {
                    e.cellElement.css("background-color", corFundo);
                }
                if (!String.IsNullOrWhiteSpace(corFonte)) {
                    e.cellElement.css("color", corFonte);
                }
            }
        }
        catch (ex) {
        }
    };
    R_Exame.prototype.OnGridSelecionouLinha = function (s, e) {
        try {
            var status_1 = ("" + e.data['Codigo_Status']).CNum();
            if (status_1 != ValoresSismoura.ConfiguracoesPetshop.Status_Exame_Execucao) {
                MostrarAlerta("Só é possível prosseguir com Exames Recebidos (Em Execução)");
                return;
            }
            var codigo = "" + e.data['Atendimento'];
            var parametros = [];
            if (!String.IsNullOrWhiteSpace(codigo)) {
                parametros.push("codigo=" + codigo);
            }
            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroDeExame), parametros);
        }
        catch (ex) {
        }
    };
    R_Exame.prototype.OnGridClickBotaoLinha = function (s, e) {
        var _this = this;
        try {
            var status_2 = ("" + this.Grid.DataSource[e.rowIndex].Codigo_Status).CNum();
            if (status_2 != ValoresSismoura.ConfiguracoesPetshop.Status_Exame_Pendente) {
                MostrarAlerta("Só é possível prosseguir com um Exame Pendente");
                return;
            }
            this.atendimento = ("" + this.Grid.DataSource[e.rowIndex].Atendimento).CNum();
            switch (e.commandName) {
                case 'btnRecebido':
                    MsgBoxJS("Deseja realmente informar que o exame foi recebido para entrar em execução?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                        if (result.Resultado == MsgBoxResult.No)
                            return;
                        var param = {
                            atendimento: _this.atendimento,
                            codUsuario: ValoresSismoura.UsuarioLogado,
                            tela: ValoresSismoura.NomeTela
                        };
                        abrirEspera();
                        _this.ExecutarFuncaoServerSideAsynch("ReceberExame", param, function (d) {
                            fecharEspera();
                            if (d) {
                                MostrarMensagem("Exame Recebido e em Execução");
                                _this.GerarGrade();
                            }
                            else {
                                MostrarError("Ocorreu um erro no sistema");
                            }
                        }, function (err) {
                            fecharEspera();
                            LogarExceptionAjax(err);
                        }, _this);
                    });
                    break;
                case 'btnRecusado':
                    this.dlgMotivoRecusa.Show();
                    break;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Exame.prototype.OnClickConfirmarRecusa = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            if (this.txtMotivoRecusa.GetText().CNum() <= 0) {
                MostrarAlerta("Informe o motivo da recusa!");
                this.txtMotivoRecusa.Focus();
                return;
            }
            MsgBoxJS("Deseja realmente recusar o Exame?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.No)
                    return;
                var param = {
                    atendimento: _this.atendimento,
                    motivoRecusa: _this.txtMotivoRecusa.GetText().CNum(),
                    observacao: _this.txtObservacaoRecusa.GetText(),
                    codUsuario: ValoresSismoura.UsuarioLogado,
                    tela: ValoresSismoura.NomeTela
                };
                abrirEspera();
                _this.ExecutarFuncaoServerSideAsynch("RecusarExame", param, function (d) {
                    fecharEspera();
                    if (d) {
                        MostrarMensagem("Exame Recusado com sucesso");
                        _this.dlgMotivoRecusa.Hide();
                        _this.GerarGrade();
                        if (ValoresSismoura.ConfiguracoesPetshop.Configuracao_Email_Exame_Recusado <= 0) {
                            MostrarAlerta("Configuração de e e-mail não encontrada");
                            return;
                        }
                        if (ValoresSismoura.ConfiguracoesPetshop.Remetente_Email_Exame_Recusado <= 0) {
                            MostrarAlerta("Nenhuma e-mail configurado como remetente");
                            return;
                        }
                        var param_1 = {
                            atendimento: _this.atendimento
                        };
                        (_this.ExecutarFuncaoServerSideSynch("EnviarEmailExameRecusado", param_1)) ?
                            MostrarMensagem("E-mail enviado com sucesso") :
                            MostrarAlerta("Erro ao enviar e-mail. Verifique se o profissional solicitante possue e-mail cadastrado no sistema");
                    }
                    else {
                        MostrarError("Ocorreu um erro no sistema");
                    }
                }, function (err) {
                    fecharEspera();
                    LogarExceptionAjax(err);
                }, _this);
            });
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Exame.prototype.OnFechouModalMotivoRecusa = function (s, e) {
        this.txtMotivoRecusa.Limpar();
        this.txtObservacaoRecusa.Limpar();
    };
    R_Exame.prototype.PreencherLabel = function () {
        try {
            var retorno = this.ExecutarFuncaoServerSideSynch("SituacaoExame", undefined);
            this.pnC.innerHTML = retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_Exame;
}(MouraPageRelacaoAngular));
var r_Exame = new R_Exame();
//# sourceMappingURL=R_Exame.js.map