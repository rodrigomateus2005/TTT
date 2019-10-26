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
var R_AcTerc = /** @class */ (function (_super) {
    __extends(R_AcTerc, _super);
    function R_AcTerc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.atendimentoServicoFaltante = 0;
        return _this;
    }
    Object.defineProperty(R_AcTerc.prototype, "grdServicos", {
        get: function () {
            return window['grdServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "grdEscala", {
        get: function () {
            return window['grdEscala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnAceitarServicos", {
        get: function () {
            return window['btnAceitarServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnRecusarServicos", {
        get: function () {
            return window['btnRecusarServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "txtPeriodoEscala", {
        get: function () {
            return window['txtPeriodoEscala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnAceitarEscala", {
        get: function () {
            return window['btnAceitarEscala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnRecusarEscala", {
        get: function () {
            return window['btnRecusarEscala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "divSolicitacaoEscala", {
        get: function () {
            return $('#divSolicitacaoEscala')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "divAceiteEscala", {
        get: function () {
            return $('#divAceiteEscala')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnFaltaServico", {
        get: function () {
            return window['btnFaltaServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "divAtendimentoFaltaServico", {
        get: function () {
            return $('#divAtendimentoFaltaServico')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "divServicoFaltante", {
        get: function () {
            return $('#divServicoFaltante')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "txtPeriodoAtendimentosFaltante", {
        get: function () {
            return window['txtPeriodoAtendimentosFaltante_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnGerarFaltaAtendimento", {
        get: function () {
            return window['btnGerarFaltaAtendimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "grdAtendimentosFaltaServico", {
        get: function () {
            return window['grdAtendimentosFaltaServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "lblAtendimentoFaltaServico", {
        get: function () {
            return window['lblAtendimentoFaltaServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "dlgFaltaServico", {
        get: function () {
            return window['dlgFaltaServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "grdServicosFaltantes", {
        get: function () {
            return window['grdServicosFaltantes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "Servicos", {
        get: function () {
            return this.GetScope()["Servicos"];
        },
        set: function (value) {
            this.GetScope()["Servicos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnSalvarRecusa", {
        get: function () {
            return window['btnSalvarRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnVoltarAtendimentos", {
        get: function () {
            return window['btnVoltarAtendimentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "dlgMotivoRecusaServicos", {
        get: function () {
            return window['dlgMotivoRecusaServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "txtMotivoRecusaServicos", {
        get: function () {
            return window['txtMotivoRecusaServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "txtObservacaoRecusaServicos", {
        get: function () {
            return window['txtObservacaoRecusaServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnConfirmarRecusaServicos", {
        get: function () {
            return window['btnConfirmarRecusaServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnCancelarRecusaServicos", {
        get: function () {
            return window['btnCancelarRecusaServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "PeriodosSelecionados", {
        get: function () {
            return this.GetScope()["PeriodosSelecionados"];
        },
        set: function (value) {
            this.GetScope()["PeriodosSelecionados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "dlgMotivoRecusaEscala", {
        get: function () {
            return window['dlgMotivoRecusaEscala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "txtMotivoRecusaEscala", {
        get: function () {
            return window['txtMotivoRecusaEscala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnConfirmarRecusaEscala", {
        get: function () {
            return window['btnConfirmarRecusaEscala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnCancelarRecusaEscala", {
        get: function () {
            return window['btnCancelarRecusaEscala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnConfirmarSolicitacao", {
        get: function () {
            return window['btnConfirmarSolicitacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "dlgConfirmarSolicitacao", {
        get: function () {
            return window['dlgConfirmarSolicitacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "cboEmpresaEscala", {
        get: function () {
            return window['cboEmpresaEscala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnFinalizarSolicitacao", {
        get: function () {
            return window['btnFinalizarSolicitacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "dlgHistoricoServicos", {
        //Histórico
        get: function () {
            return window['dlgHistoricoServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "txtPeriodoHistoricoServicos", {
        get: function () {
            return window['txtPeriodoHistoricoServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnGerarHistoricoServicos", {
        get: function () {
            return window['btnGerarHistoricoServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "grdHistoricoServicos", {
        get: function () {
            return window['grdHistoricoServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnHistoricoServicos", {
        get: function () {
            return window['btnHistoricoServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnExtrato", {
        get: function () {
            return window['btnExtrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "dlgHistoricoRecusa", {
        get: function () {
            return window['dlgHistoricoRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "txtPeriodoHistoricoRecusa", {
        get: function () {
            return window['txtPeriodoHistoricoRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnHistoricoRecusa", {
        get: function () {
            return window['btnHistoricoRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnGerarHistoricoRecusa", {
        get: function () {
            return window['btnGerarHistoricoRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "grdHistoricoRecusa", {
        get: function () {
            return window['grdHistoricoRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnHistoricoServicoFaltante", {
        //Serviços Faltantes
        get: function () {
            return window['btnHistoricoServicoFaltante_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "dlgHistoricoServicoFaltante", {
        get: function () {
            return window['dlgHistoricoServicoFaltante_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "txtPeriodoServicoFaltante", {
        get: function () {
            return window['txtPeriodoServicoFaltante_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "btnGerarServicoFaltante", {
        get: function () {
            return window['btnGerarServicoFaltante_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AcTerc.prototype, "grdHistoricoServicoFaltante", {
        get: function () {
            return window['grdHistoricoServicoFaltante_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_AcTerc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdServicos) {
            adicionarEventoMoura(this.grdServicos.CellPrepared, this.OnGrdServicosCellPrepared, this);
        }
        if (this.grdEscala) {
            adicionarEventoMoura(this.grdEscala.CellPrepared, this.OnGrdEscalaCellPrepared, this);
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickGerar, this);
        }
        if (this.btnAceitarServicos) {
            adicionarEventoMoura(this.btnAceitarServicos.Click, this.OnClickAceitarServicos, this);
        }
        if (this.btnRecusarServicos) {
            adicionarEventoMoura(this.btnRecusarServicos.Click, this.OnClickRecusarServicos, this);
        }
        if (this.btnConfirmarRecusaServicos) {
            adicionarEventoMoura(this.btnConfirmarRecusaServicos.Click, this.OnClickConfirmarRecusaServicos, this);
        }
        if (this.btnCancelarRecusaServicos) {
            adicionarEventoMoura(this.btnCancelarRecusaServicos.Click, this.OnClickCancelarRecusaServicos, this);
        }
        if (this.btnAceitarEscala) {
            adicionarEventoMoura(this.btnAceitarEscala.Click, this.OnClickAceitarEscala, this);
        }
        if (this.btnRecusarEscala) {
            adicionarEventoMoura(this.btnRecusarEscala.Click, this.OnClickRecusarEscala, this);
        }
        if (this.btnConfirmarRecusaEscala) {
            adicionarEventoMoura(this.btnConfirmarRecusaEscala.Click, this.OnClickConfirmarRecusaEscala, this);
        }
        if (this.btnCancelarRecusaEscala) {
            adicionarEventoMoura(this.btnCancelarRecusaEscala.Click, this.OnClickCancelarRecusaEscala, this);
        }
        if (this.dlgMotivoRecusaEscala) {
            adicionarEventoMoura(this.dlgMotivoRecusaEscala.Fechou, this.OnFechouModalMotivoRecusaEscala, this);
        }
        if (this.grdEscala) {
            adicionarEventoMoura(this.grdEscala.ClickBotaoLinha, this.OnGrdEscalaClicouBotao, this);
        }
        if (this.btnConfirmarSolicitacao) {
            adicionarEventoMoura(this.btnConfirmarSolicitacao.Click, this.OnClickConfirmarSolicitacao, this);
        }
        if (this.btnFinalizarSolicitacao) {
            adicionarEventoMoura(this.btnFinalizarSolicitacao.Click, this.OnClickFinalizarSolicitacao, this);
        }
        if (this.btnFaltaServico) {
            adicionarEventoMoura(this.btnFaltaServico.Click, this.OnClickFaltaServico, this);
        }
        if (this.dlgMotivoRecusaServicos) {
            adicionarEventoMoura(this.dlgMotivoRecusaServicos.Fechou, this.OnFechouModalMotivoRecusaServicos, this);
        }
        //Falta de Serviço
        if (this.btnGerarFaltaAtendimento) {
            adicionarEventoMoura(this.btnGerarFaltaAtendimento.Click, this.OnClickGerarFaltaAtendimento, this);
        }
        if (this.grdAtendimentosFaltaServico) {
            adicionarEventoMoura(this.grdAtendimentosFaltaServico.SelecionouLinha, this.OnGrdAtendimentosFaltaServicoClickBotaoLinha, this);
        }
        if (this.btnVoltarAtendimentos) {
            adicionarEventoMoura(this.btnVoltarAtendimentos.Click, this.OnClickVoltarAtendimentos, this);
        }
        //Histórico
        if (this.btnHistoricoServicos) {
            adicionarEventoMoura(this.btnHistoricoServicos.Click, this.OnClickHistoricoServico, this);
        }
        if (this.btnGerarHistoricoServicos) {
            adicionarEventoMoura(this.btnGerarHistoricoServicos.Click, this.OnClickGerarHistoricoServico, this);
        }
        if (this.dlgHistoricoServicos) {
            adicionarEventoMoura(this.dlgHistoricoServicos.Fechou, this.OnFechouModalHistoricoServico, this);
        }
        if (this.btnExtrato) {
            adicionarEventoMoura(this.btnExtrato.Click, this.OnClickBtnExtrato, this);
        }
        if (this.btnHistoricoRecusa) {
            adicionarEventoMoura(this.btnHistoricoRecusa.Click, this.OnClickHistoricoRecusa, this);
        }
        if (this.txtMotivoRecusaServicos) {
            adicionarEventoMoura(this.txtMotivoRecusaServicos.Procurou, this.OnProcurouMotivoRecusaServicos, this);
        }
        if (this.btnGerarHistoricoRecusa) {
            adicionarEventoMoura(this.btnGerarHistoricoRecusa.Click, this.OnClickGerarHistoricoRecusa, this);
        }
        if (this.dlgHistoricoRecusa) {
            adicionarEventoMoura(this.dlgHistoricoRecusa.Fechou, this.OnFechouModalHistoricoRecusa, this);
        }
        if (this.grdHistoricoRecusa) {
            adicionarEventoMoura(this.grdHistoricoRecusa.CellPrepared, this.OnGrdHistoricoRecusaCellPrepared, this);
        }
        if (this.dlgHistoricoServicos) {
            adicionarEventoMoura(this.dlgFaltaServico.Fechou, this.OnFechouModalFaltaServico, this);
        }
        if (this.grdServicosFaltantes) {
            adicionarEventoMoura(this.grdServicosFaltantes.AdicionandoItem, this.OnClickIncluirServicoFaltante, this);
        }
        if (this.btnSalvarRecusa) {
            adicionarEventoMoura(this.btnSalvarRecusa.Click, this.OnClickSalvarRecusa, this);
        }
        if (this.btnHistoricoServicoFaltante) {
            adicionarEventoMoura(this.btnHistoricoServicoFaltante.Click, this.OnClickHistoricoServicoFaltante, this);
        }
        if (this.dlgHistoricoServicoFaltante) {
            adicionarEventoMoura(this.dlgHistoricoServicoFaltante.Fechou, this.OnFechouModalHistoricoServicoFaltante, this);
        }
        if (this.btnGerarServicoFaltante) {
            adicionarEventoMoura(this.btnGerarServicoFaltante.Click, this.OnClickGerarServicoFaltante, this);
        }
        if (this.grdHistoricoServicoFaltante) {
            adicionarEventoMoura(this.grdHistoricoServicoFaltante.CellPrepared, this.OnGrdHistoricoServicoFaltanteCellPrepared, this);
        }
    };
    R_AcTerc.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PeriodosSelecionados = [];
        this.AtualizaVisibleEscala();
        this.AlteraVisibleAtendimentoFaltante(true);
    };
    R_AcTerc.prototype.PreencherGradeServicos = function () {
        var _this = this;
        try {
            this.grdServicos.PreencherGrid(null);
            this.grdServicos.Grid.clearSelection();
            var parametros = { codUsuario: ValoresSismoura.UsuarioLogado };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGridServicos", parametros, function (d) {
                try {
                    fecharEspera();
                    _this.grdServicos.PreencherGrid(GetRetornoAJAX(d));
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
            this.grdServicos.PreencherGrid([]);
            LogarException(ex);
            fecharEspera();
        }
    };
    R_AcTerc.prototype.ConfigurarGradeEscala = function () {
        this.grdEscala.GroupBy("Dia");
        this.grdEscala.FixarColuna("Dia", true);
        this.grdEscala.FixarColuna("DiaSemana", true);
        var opt = this.grdEscala.Grid.option("paging");
        opt.pageSize = 200;
        this.grdEscala.Grid.option("paging", opt);
    };
    R_AcTerc.prototype.PreencherGradeEscala = function () {
        var _this = this;
        try {
            this.PeriodosSelecionados = [];
            this.AtualizaVisibleEscala();
            this.grdEscala.PreencherGrid(null);
            var parametros = {
                codUsuario: ValoresSismoura.UsuarioLogado,
                dataInicial: this.txtPeriodoEscala.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodoEscala.textBoxCalendarioFim.GetDate()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGridEscala", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grdEscala.Colunas = retorno.ColunasGrade;
                    _this.grdEscala.iniciarGrid();
                    _this.ConfigurarGradeEscala();
                    _this.grdEscala.PreencherGrid(retorno.Dados);
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
            this.grdEscala.PreencherGrid([]);
            fecharEspera();
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnGrdServicosCellPrepared = function (s, e) {
        if (e.rowType == "data" && e.data) {
            var valorReceber = ("" + e.data['Valor_Receber']).CNum();
            if (valorReceber <= 0) {
                e.cellElement.css("color", "red");
            }
            var status_1 = ("" + e.data['Status_Aceite']).CNum();
            if (status_1 == 3 && e.column.dataField == "Cor_Status") {
                e.cellElement.css("background-color", "yellow");
            }
        }
    };
    R_AcTerc.prototype.OnGrdEscalaCellPrepared = function (s, e) {
        try {
            var name_1 = "";
            if (e.column && e.column) {
                name_1 = e.column.name;
            }
            if (e.rowType == "data" && e.data) {
                if (name_1.substring(0, 18).toLowerCase() == "botaotemplate_hora") {
                    var dados = e.data[replaceAllNoCase(name_1, "botaotemplate_", "")];
                    var cor = dados.split("|")[1];
                    var empresa = dados.split("|")[2];
                    if (!String.IsNullOrWhiteSpace(cor)) {
                        e.cellElement.css("background-color", cor);
                        e.cellElement.css("color", cor);
                        e.cellElement.addClass("botaoFull");
                        if (cor.toLowerCase() != "white") {
                            $(e.cellElement).find("input").attr("title", empresa.split("-")[1]);
                        }
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnGrdHistoricoRecusaCellPrepared = function (s, e) {
        if (e.rowType == "data" && e.data) {
            var status_2 = ("" + e.data['Status_Aceite']).CNum();
            if (e.column.dataField == "Cor_Status") {
                if (status_2 == 2) {
                    e.cellElement.css("background-color", "blue");
                }
                else if (status_2 == 3) {
                    e.cellElement.css("background-color", "yellow");
                }
            }
        }
    };
    R_AcTerc.prototype.OnClickIncluirServicoFaltante = function (s, e) {
        if (this.txtServico.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o serviço para adicionar");
            e.cancelar = true;
            return;
        }
        var novoItem = e.item;
        novoItem.Nome_Servico = this.txtServico.GetResultado();
    };
    R_AcTerc.prototype.OnClickGerar = function (s, e) {
        e.processOnServer = false;
        (this.tab.GetActiveTabIndex() == 0) ? this.PreencherGradeServicos() : this.PreencherGradeEscala();
    };
    R_AcTerc.prototype.AlteraVisibleAtendimentoFaltante = function (visible) {
        try {
            if (visible) {
                $(this.divAtendimentoFaltaServico).removeClass("invisible");
                $(this.divServicoFaltante).addClass("invisible");
            }
            else {
                $(this.divAtendimentoFaltaServico).addClass("invisible");
                $(this.divServicoFaltante).removeClass("invisible");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnClickGerarFaltaAtendimento = function (s, e) {
        e.processOnServer = false;
        try {
            var dataInicio = this.txtPeriodoAtendimentosFaltante.textBoxCalendarioInicio.GetDate();
            var dataFim = this.txtPeriodoAtendimentosFaltante.textBoxCalendarioFim.GetDate();
            if (!this.ValidarPeriodo(dataInicio, dataFim)) {
                MostrarAlerta("Informe um período correto");
                return;
            }
            var param = {
                codUsuario: ValoresSismoura.UsuarioLogado,
                dataInicial: dataInicio,
                dataFinal: dataFim
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GerarAtendimentosFaltaServico", param);
            this.grdAtendimentosFaltaServico.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnClickVoltarAtendimentos = function (s, e) {
        e.processOnServer = false;
        try {
            this.AlteraVisibleAtendimentoFaltante(true);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnGrdAtendimentosFaltaServicoClickBotaoLinha = function (s, e) {
        try {
            if (!e.data) {
                return;
            }
            if (this.ExecutarFuncaoServerSideSynch("VerificaAtendimentoRecusado", { atendimento: ("" + e.data.Atendimento).CNum() })) {
                MostrarAlerta("Atendimento já recusado por falta de serviço");
                return;
            }
            this.atendimentoServicoFaltante = ("" + e.data.Atendimento).CNum();
            if (this.atendimentoServicoFaltante <= 0) {
                return;
            }
            this.lblAtendimentoFaltaServico.Text = this.atendimentoServicoFaltante.toString();
            this.grdServicosFaltantes.Grid.Refresh();
            this.AlteraVisibleAtendimentoFaltante(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnClickAceitarServicos = function (s, e) {
        e.processOnServer = false;
        try {
            if (this.grdServicos.GetSelectedRowsData.length <= 0) {
                MostrarAlerta("Selecione ao menos um registro para poder Aceitar");
                return;
            }
            var sair_1 = false;
            this.grdServicos.GetSelectedRowsData.forEach(function (q) {
                if (q.Valor_Receber <= 0) {
                    MostrarAlerta("Não é possível dar aceite em Serviço sem Valor Configurado");
                    sair_1 = true;
                    return;
                }
            });
            if (sair_1)
                return;
            MsgBoxJS("Deseja realmente aceitar os atendimento(s) selecionado(s)?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespostaAceitarServicos, this));
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnClickRecusarServicos = function (s, e) {
        e.processOnServer = false;
        try {
            if (this.grdServicos.GetSelectedRowsData.length <= 0) {
                MostrarAlerta("Selecione ao menos um registro para poder Recusar");
                return;
            }
            var sair_2 = false;
            this.grdServicos.GetSelectedRowsData.forEach(function (q) {
                if (q.Valor_Receber <= 0) {
                    MostrarAlerta("Não é possível recusar Serviço sem Valor Configurado");
                    sair_2 = true;
                    return;
                }
            });
            if (sair_2)
                return;
            this.dlgMotivoRecusaServicos.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnClickAceitarEscala = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            if (!this.grdEscala.DataSource || this.grdEscala.DataSource.length <= 0) {
                MostrarAlerta("É preciso gerar a escala antes de aprovar");
                return;
            }
            MsgBoxJS("Deseja realmente aprovar a escala de <b>" + this.txtPeriodoEscala.textBoxCalendarioInicio.GetDate().FormataData() + "</b> at\u00E9 \n                        <b>" + this.txtPeriodoEscala.textBoxCalendarioFim.GetDate().FormataData() + "</b>? Ap\u00F3s aprovado, a escala n\u00E3o poder\u00E1 ser alterada.", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.No)
                    return;
                _this.AceitarRecusarEscala(true);
            });
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnClickRecusarEscala = function (s, e) {
        e.processOnServer = false;
        try {
            if (!this.grdEscala.DataSource || this.grdEscala.DataSource.length <= 0) {
                MostrarAlerta("É preciso gerar a escala antes de recusar");
                return;
            }
            this.dlgMotivoRecusaEscala.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnClickConfirmarRecusaEscala = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            if (String.IsNullOrWhiteSpace(this.txtMotivoRecusaEscala.GetText())) {
                return;
            }
            MsgBoxJS("Deseja realmente recusar a escala de <b>" + this.txtPeriodoEscala.textBoxCalendarioInicio.GetDate().FormataData() + "</b> at\u00E9 \n                        <b>" + this.txtPeriodoEscala.textBoxCalendarioFim.GetDate().FormataData() + "</b>? Ap\u00F3s recusada, a mesma ser\u00E1 analisada pelo backoffice.", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.No)
                    return;
                _this.AceitarRecusarEscala(false);
                _this.dlgMotivoRecusaEscala.Hide();
            });
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnClickCancelarRecusaEscala = function (s, e) {
        e.processOnServer = false;
        try {
            this.dlgMotivoRecusaEscala.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.AceitarRecusarEscala = function (isAceitar) {
        var _this = this;
        try {
            var codPrestador = this.ExecutarFuncaoServerSideSynch("GetCodProfissional", { usuario: ValoresSismoura.UsuarioLogado });
            if (codPrestador <= 0)
                return;
            var param = {
                codPrestador: codPrestador,
                dataInicial: this.txtPeriodoEscala.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodoEscala.textBoxCalendarioFim.GetDate()
            };
            var escala = this.ExecutarFuncaoServerSideSynch("GetEscalaPeriodo", param);
            var newEntity = {};
            if (escala) {
                if (escala.Status == 1 /* Aceite */) {
                    MostrarAlerta("J\u00E1 existe escala aceita no periodo: <b>" + escala.Data_Inicial.FormataData() + "</b> e <b>" + escala.Data_Final.FormataData() + "</b>. N\u00E3o ser\u00E1 poss\u00EDvel prosseguir.");
                    return;
                }
                newEntity = escala;
            }
            newEntity.Data_Inicial = this.txtPeriodoEscala.textBoxCalendarioInicio.GetDate();
            newEntity.Data_Final = this.txtPeriodoEscala.textBoxCalendarioFim.GetDate();
            newEntity.Data_Ultimo_Status = new Date();
            newEntity.Prestador = codPrestador;
            newEntity.Status = 1 /* Aceite */;
            if (!isAceitar) {
                newEntity.Status = 2 /* Recusado */;
                newEntity.Descricao_Recusa = this.txtMotivoRecusaEscala.GetText();
            }
            param = {
                entidadeStr: JSON.stringify(newEntity),
                codUsuario: ValoresSismoura.UsuarioLogado,
                tela: ValoresSismoura.NomeTela
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GravarAceiteEscala", param, function (d) {
                try {
                    fecharEspera();
                    if (d) {
                        (isAceitar) ? MostrarMensagem("Aceite realizado com sucesso!") : MostrarMensagem("Recusa realizada com sucesso!");
                        _this.PreencherGradeEscala();
                    }
                    else {
                        MostrarError("Ocorreu um erro no sistema");
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
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnGrdEscalaClicouBotao = function (s, e) {
        try {
            if (String.IsNullOrWhiteSpace(e.commandName)) {
                return;
            }
            if (e.data['Dia'] <= new Date()) {
                MostrarAlerta("Selecione um período após o dia de hoje");
                return;
            }
            if (!this.ExecutarFuncaoServerSideSynch("ValidarDataSolicitacao", { usuario: ValoresSismoura.UsuarioLogado, data: e.data['Dia'] })) {
                MostrarAlerta("O periodo que está tentando solicitar ainda não foi aceite");
                return;
            }
            if (e.commandName.substring(0, 5).toLowerCase() == "hora-") {
                var periodoEncontrado = false;
                var cor = ("" + e.data[e.commandName]).split("|")[1];
                if (cor.toLocaleLowerCase() == "orange" || cor.toLocaleLowerCase() == "yellow") {
                    MostrarAlerta("Período já solicitado");
                    return;
                }
                if (this.PeriodosSelecionados.length > 0) {
                    for (var i = 0; i < this.PeriodosSelecionados.length; i++) {
                        if (this.PeriodosSelecionados[i].Hora == e.commandName.split("-")[1] &&
                            this.PeriodosSelecionados[i].Data == e.data['Dia'] &&
                            this.PeriodosSelecionados[i].DiaSemana == this.RetornaDiaSemana(("" + e.data['DiaSemana']))) {
                            this.grdEscala.Grid.getCellElement(e.rowIndex, e.columnIndex).css("background-color", cor);
                            this.grdEscala.Grid.getCellElement(e.rowIndex, e.columnIndex).css("color", cor);
                            this.PeriodosSelecionados.splice(i, 1);
                            periodoEncontrado = true;
                            break;
                        }
                    }
                }
                if (!periodoEncontrado) {
                    var tipo = "";
                    (cor.toLocaleLowerCase() == "white") ? tipo = "E" : tipo = "I";
                    var empresa = 0;
                    if (tipo == "I") {
                        empresa = ("" + e.data[e.commandName]).split("|")[2].CNum();
                    }
                    this.PeriodosSelecionados.push({
                        Data: e.data['Dia'],
                        Hora: e.commandName.split("-")[1],
                        DiaSemana: this.RetornaDiaSemana(("" + e.data['DiaSemana']).toLowerCase()),
                        Tipo: tipo,
                        Empresa: empresa
                    });
                    if (tipo == "E") {
                        this.grdEscala.Grid.getCellElement(e.rowIndex, e.columnIndex).css("background-color", "yellow");
                        this.grdEscala.Grid.getCellElement(e.rowIndex, e.columnIndex).css("color", "yellow");
                    }
                    else {
                        this.grdEscala.Grid.getCellElement(e.rowIndex, e.columnIndex).css("background-color", "orange");
                        this.grdEscala.Grid.getCellElement(e.rowIndex, e.columnIndex).css("color", "orange");
                    }
                }
                this.AtualizaVisibleEscala();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.AtualizaVisibleEscala = function () {
        try {
            if (this.PeriodosSelecionados.length > 0) {
                $(this.divSolicitacaoEscala).removeClass("invisible");
                $(this.divAceiteEscala).addClass("invisible");
            }
            else {
                $(this.divSolicitacaoEscala).addClass("invisible");
                $(this.divAceiteEscala).removeClass("invisible");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.RetornaDiaSemana = function (diaSemana) {
        var retorno = 0;
        try {
            switch (diaSemana.toLowerCase()) {
                case "domingo":
                    retorno = 1;
                    break;
                case "segunda-feira":
                    retorno = 2;
                    break;
                case "terça-feira":
                    retorno = 3;
                    break;
                case "quarta-feira":
                    retorno = 4;
                    break;
                case "quinta-feira":
                    retorno = 5;
                    break;
                case "sexta-feira":
                    retorno = 6;
                    break;
                case "sabado":
                    retorno = 7;
                    break;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    R_AcTerc.prototype.OnClickConfirmarSolicitacao = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            if (!this.PeriodosSelecionados || this.PeriodosSelecionados.length <= 0) {
                MostrarAlerta("Nenhum período selecionado");
                return;
            }
            MsgBoxJS("Informe para qual unidade é a solicitação de escala.", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, function (result) {
                var empresas = _this.ExecutarFuncaoServerSideSynch("GetEmpresasProfissional", { usuario: ValoresSismoura.UsuarioLogado });
                if (!empresas || !empresas.Empresas)
                    return;
                _this.cboEmpresaEscala.Combo.ClearItems();
                empresas.Empresas.forEach(function (q) {
                    _this.cboEmpresaEscala.Combo.AddItem(q.Empresa, q.Codigo, "");
                });
                _this.dlgConfirmarSolicitacao.Show();
            });
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.AceitarRecusar = function (isAceitar) {
        var _this = this;
        try {
            var codProfissional_1 = this.ExecutarFuncaoServerSideSynch("GetCodProfissional", { usuario: ValoresSismoura.UsuarioLogado });
            if (codProfissional_1 <= 0)
                return;
            var newList_1 = [];
            this.grdServicos.GetSelectedRowsData.forEach(function (q) {
                var newEntity = {};
                newEntity.Atendimento = q.Atendimento;
                newEntity.Codigo_Animais_Servicos = q.Codigo_Animais_Servicos;
                newEntity.Profissional = codProfissional_1;
                newEntity.Aceitou = isAceitar;
                newEntity.Status_Aceite = 1 /* Aceite */;
                if (!isAceitar) {
                    newEntity.Status_Aceite = 2 /* Recusado */;
                    newEntity.Motivo_Recusa = _this.txtMotivoRecusaServicos.GetText().CNum();
                    newEntity.Observacao_Recusa = _this.txtObservacaoRecusaServicos.GetText();
                    newEntity.Data_Recusa = new Date();
                }
                else {
                    newEntity.Valor_Aceitado = ("" + q.Valor_Receber).replace('.', ',').CNum();
                }
                newList_1.push(newEntity);
            });
            var param = {
                lista: newList_1,
                codUsuario: ValoresSismoura.UsuarioLogado,
                tela: ValoresSismoura.NomeTela
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("Gravar", param, function (d) {
                try {
                    fecharEspera();
                    if (d) {
                        (isAceitar) ? MostrarMensagem("Aceite realizado com sucesso!") : MostrarMensagem("Recusa realizada com sucesso!");
                        _this.PreencherGradeServicos();
                    }
                    else {
                        MostrarError("Ocorreu um erro no sistema");
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
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnClickFinalizarSolicitacao = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            if (("" + this.cboEmpresaEscala.GetValue()).CNum() <= 0) {
                MostrarAlerta("Informe para qual unidade deseja solicitar o horário");
                return;
            }
            var codPrestador_1 = this.ExecutarFuncaoServerSideSynch("GetCodProfissional", { usuario: ValoresSismoura.UsuarioLogado });
            if (codPrestador_1 <= 0)
                return;
            var listaPeriodos_1 = [];
            this.PeriodosSelecionados.forEach(function (q) {
                if (q.Empresa <= 0)
                    q.Empresa = ("" + _this.cboEmpresaEscala.GetValue()).CNum();
                listaPeriodos_1.push({
                    Data: q.Data,
                    Dia: q.DiaSemana,
                    Empresa: q.Empresa,
                    Hora: q.Hora,
                    Profissional: codPrestador_1,
                    Tipo: q.Tipo
                });
            });
            var param = {
                periodos: JSON.stringify(listaPeriodos_1),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("GravarSolicitacoes", param, function (d) {
                (d) ? MostrarMensagem("Solicitações gravadas com sucesso") : MostrarError("Ocorreu um erro no sistema");
                _this.dlgConfirmarSolicitacao.Hide();
                fecharEspera();
            }, function (er) {
                fecharEspera();
                LogarExceptionAjax(er);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnRespostaAceitarServicos = function (result) {
        if (result.Resultado == MsgBoxResult.No)
            return;
        this.AceitarRecusar(true);
    };
    R_AcTerc.prototype.OnRespostaRecusarServicos = function (result) {
        if (result.Resultado == MsgBoxResult.No)
            return;
        this.AceitarRecusar(false);
        this.dlgMotivoRecusaServicos.Hide();
    };
    R_AcTerc.prototype.OnClickConfirmarRecusaServicos = function (s, e) {
        e.processOnServer = false;
        try {
            if (this.txtMotivoRecusaServicos.GetText().CNum() <= 0) {
                MostrarAlerta("Informe o motivo da recusa!");
                this.txtMotivoRecusaServicos.Focus();
                return;
            }
            MsgBoxJS("Deseja realmente recusar os atendimento(s) selecionado(s)?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespostaRecusarServicos, this));
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnClickFaltaServico = function (s, e) {
        e.processOnServer = false;
        this.grdAtendimentosFaltaServico.Refresh();
        this.dlgFaltaServico.Show();
    };
    R_AcTerc.prototype.OnClickCancelarRecusaServicos = function (s, e) {
        e.processOnServer = false;
        this.txtMotivoRecusaServicos.Limpar();
        this.txtObservacaoRecusaServicos.Limpar();
        this.dlgMotivoRecusaServicos.Hide();
    };
    R_AcTerc.prototype.OnClickHistoricoServico = function (s, e) {
        e.processOnServer = false;
        this.dlgHistoricoServicos.Show();
        this.grdHistoricoServicos.Refresh();
    };
    R_AcTerc.prototype.OnClickHistoricoRecusa = function (s, e) {
        e.processOnServer = false;
        this.dlgHistoricoRecusa.Show();
        this.grdHistoricoRecusa.Refresh();
    };
    R_AcTerc.prototype.OnProcurouMotivoRecusaServicos = function (e) {
        try {
            if (this.txtMotivoRecusaServicos.GetText().CNum() == 3) {
                MostrarAlerta("Para utilizar esse motivo, utilize o Botão: Falta de Serviço");
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnClickSalvarRecusa = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            if (this.Servicos.length <= 0) {
                MostrarAlerta("Não é possível recusar sem nenhum serviço");
                return;
            }
            var newList_2 = [];
            this.Servicos.forEach(function (q) {
                var newEntity = {
                    Atendimento: _this.atendimentoServicoFaltante,
                    Codigo_Servico: q.Codigo_Servico
                };
                newList_2.push(newEntity);
            });
            MsgBoxJS("Deseja realmente recusar com falta do(s) serviço(s) informado(s)?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.No)
                    return;
                var param = {
                    lista: newList_2,
                    codUsuario: ValoresSismoura.UsuarioLogado,
                    tela: ValoresSismoura.NomeTela
                };
                abrirEspera("");
                _this.ExecutarFuncaoServerSideAsynch("SalvarServicosFaltantes", param, function (d) {
                    try {
                        fecharEspera();
                        if (d) {
                            MostrarMensagem("Recusa realizada com sucesso");
                            _this.dlgFaltaServico.Hide();
                        }
                        else {
                            MostrarError("Ocorreu um erro no sistema");
                        }
                    }
                    catch (ex) {
                        fecharEspera();
                        LogarException(ex);
                    }
                }, function (erro) {
                    fecharEspera();
                    LogarExceptionAjax(erro);
                }, _this);
            });
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnClickGerarHistoricoServico = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            var dataInicio = this.txtPeriodoHistoricoServicos.textBoxCalendarioInicio.GetDate();
            var dataFim = this.txtPeriodoHistoricoServicos.textBoxCalendarioFim.GetDate();
            if (!this.ValidarPeriodo(dataInicio, dataFim)) {
                MostrarAlerta("Informe um período correto");
                return;
            }
            var param = {
                codUsuario: ValoresSismoura.UsuarioLogado,
                dataInicial: dataInicio,
                dataFinal: dataFim
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarHistorico", param, function (d) {
                try {
                    fecharEspera();
                    _this.grdHistoricoServicos.PreencherGrid(GetRetornoAJAX(d));
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
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnClickGerarHistoricoRecusa = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            var dataInicio = this.txtPeriodoHistoricoRecusa.textBoxCalendarioInicio.GetDate();
            var dataFim = this.txtPeriodoHistoricoRecusa.textBoxCalendarioFim.GetDate();
            if (!this.ValidarPeriodo(dataInicio, dataFim)) {
                MostrarAlerta("Informe um período correto");
                return;
            }
            var param = {
                codUsuario: ValoresSismoura.UsuarioLogado,
                dataInicial: dataInicio,
                dataFinal: dataFim
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarHistoricoRecusa", param, function (d) {
                try {
                    fecharEspera();
                    _this.grdHistoricoRecusa.PreencherGrid(GetRetornoAJAX(d));
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
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.ValidarPeriodo = function (dataInicio, dataFim) {
        if (!dataInicio || !dataFim) {
            return false;
        }
        return true;
    };
    R_AcTerc.prototype.OnClickBtnExtrato = function (s, e) {
        e.processOnServer = false;
        try {
            if (this.grdHistoricoServicos.DataSource.length <= 0) {
                MostrarAlerta("Nenhum registro para gerar o Extrato");
                return;
            }
            var arrayServicos_1 = [];
            this.grdHistoricoServicos.DataSource.forEach(function (q) {
                var novoServico = {
                    Atendimento: q.Atendimento,
                    Codigo_Servico: q.Codigo_Servico,
                    Data_Atendimento: q.Data_Atendimento,
                    Empresa: q.Empresa,
                    Proprietario: q.Proprietario,
                    Cpf_Proprietario: q.Cpf_Proprietario,
                    Hora_Atendimento: q.Hora_Atendimento,
                    Servico: q.Servico,
                    Valor_Servico: ("" + q.Valor_Servico).CNum()
                };
                arrayServicos_1.push(q);
            });
            var param = {
                arrayServicos: JSON.stringify(arrayServicos_1),
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            this.ExecutarFuncaoServerSideSynch("PreencherImpressao", param);
            //const urlTela = "ReportDesign.aspx?caminho=~/Report/Fixos&nome=ExtratoPrestadorServico.REPX";
            var urlTela = "ReportView.aspx?relatorio=~/Report/Fixos/ExtratoPrestadorServico.REPX";
            abrirTelaNovaAbaParametros(formataURLRelativa(urlTela), []);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnFechouModalMotivoRecusaServicos = function (s, e) {
        this.txtMotivoRecusaServicos.Limpar();
        this.txtObservacaoRecusaServicos.Limpar();
    };
    R_AcTerc.prototype.OnFechouModalMotivoRecusaEscala = function (s, e) {
        this.txtMotivoRecusaEscala.Limpar();
    };
    R_AcTerc.prototype.OnFechouModalConfirmarSolicitacao = function (s, e) {
    };
    R_AcTerc.prototype.OnFechouModalHistoricoServico = function (s, e) {
        this.txtPeriodoHistoricoServicos.Iniciar();
        this.grdHistoricoServicos.PreencherGrid([]);
    };
    R_AcTerc.prototype.OnFechouModalHistoricoRecusa = function (s, e) {
        this.txtPeriodoHistoricoRecusa.Iniciar();
        this.grdHistoricoRecusa.PreencherGrid([]);
    };
    R_AcTerc.prototype.OnFechouModalFaltaServico = function (s, e) {
        this.atendimentoServicoFaltante = 0;
        this.txtPeriodoAtendimentosFaltante.Iniciar();
        this.grdAtendimentosFaltaServico.PreencherGrid(null);
        this.Servicos = [];
        this.txtServico.Limpar();
        this.grdServicosFaltantes.Grid.PreencherGrid(null);
        this.AlteraVisibleAtendimentoFaltante(true);
    };
    R_AcTerc.prototype.OnClickHistoricoServicoFaltante = function (s, e) {
        e.processOnServer = false;
        this.dlgHistoricoServicoFaltante.Show();
        this.grdHistoricoServicoFaltante.Refresh();
    };
    R_AcTerc.prototype.OnClickGerarServicoFaltante = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            var dataInicio = this.txtPeriodoServicoFaltante.textBoxCalendarioInicio.GetDate();
            var dataFim = this.txtPeriodoServicoFaltante.textBoxCalendarioFim.GetDate();
            if (!this.ValidarPeriodo(dataInicio, dataFim)) {
                MostrarAlerta("Informe um período correto");
                return;
            }
            var param = {
                codUsuario: ValoresSismoura.UsuarioLogado,
                dataInicial: dataInicio,
                dataFinal: dataFim
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarHistoricoServicoFaltante", param, function (d) {
                try {
                    fecharEspera();
                    _this.grdHistoricoServicoFaltante.PreencherGrid(GetRetornoAJAX(d));
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
            LogarException(ex);
        }
    };
    R_AcTerc.prototype.OnGrdHistoricoServicoFaltanteCellPrepared = function (s, e) {
        if (e.rowType == "data" && e.data) {
            var status_3 = ("" + e.data['Status_Aceite']).CNum();
            if (e.column.dataField == "Cor_Status") {
                if (status_3 == 2) {
                    e.cellElement.css("background-color", "blue");
                }
                else if (status_3 == 3) {
                    e.cellElement.css("background-color", "yellow");
                }
            }
        }
    };
    R_AcTerc.prototype.OnFechouModalHistoricoServicoFaltante = function (s, e) {
        this.txtPeriodoServicoFaltante.Iniciar();
        this.grdHistoricoServicoFaltante.PreencherGrid([]);
    };
    return R_AcTerc;
}(MouraPageAngular));
var r_AcTerc = new R_AcTerc();
//# sourceMappingURL=R_AcTerc.js.map