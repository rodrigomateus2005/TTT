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
var C_AgeAni = /** @class */ (function (_super) {
    __extends(C_AgeAni, _super);
    function C_AgeAni() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._OcultouCliente = false;
        _this._mostrarMensagem = false;
        return _this;
    }
    Object.defineProperty(C_AgeAni.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "EnvioSms", {
        get: function () {
            return window['EnvioSms_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "btnAvancarServico", {
        get: function () {
            return window['btnAvancarServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "btnAvancarEncaminhamento", {
        get: function () {
            return window['btnAvancarEncaminhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "btnAvancarUnidade", {
        get: function () {
            return window['btnAvancarUnidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "btnCancelamento", {
        get: function () {
            return window['btnCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "accUnidades", {
        get: function () {
            return window['accUnidades_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "accConfirmacao", {
        get: function () {
            return window['accConfirmacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "accServicos", {
        get: function () {
            return window['accServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "accEncaminhamento", {
        get: function () {
            return window['accEncaminhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "accValores", {
        get: function () {
            return window['accValores_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "Servico", {
        get: function () {
            return this.GetScope()["Servico"];
        },
        set: function (value) {
            this.GetScope()["Servico"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "Servicos", {
        get: function () {
            return this.GetScope()["Servicos"];
        },
        set: function (value) {
            this.GetScope()["Servicos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "Confirmacoes", {
        get: function () {
            return this.GetScope()["Confirmacoes"];
        },
        set: function (value) {
            this.GetScope()["Confirmacoes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "Valor", {
        get: function () {
            return this.GetScope()["Valor"];
        },
        set: function (value) {
            this.GetScope()["Valor"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "Valores", {
        get: function () {
            return this.GetScope()["Valores"];
        },
        set: function (value) {
            this.GetScope()["Valores"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "grdServicos", {
        get: function () {
            return window['grdServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "grdValores", {
        get: function () {
            return window['grdValores_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "cboEncaminhamento", {
        get: function () {
            return window['cboEncaminhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "cboPreferencial", {
        get: function () {
            return window['cboPreferencial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "cboEstado", {
        get: function () {
            return window['cboEstado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "lblEmpresa", {
        get: function () {
            return window['lblEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "cboCidade", {
        get: function () {
            return window['cboCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "cboOrdenacao", {
        get: function () {
            return window['cboOrdenacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "cboPeriodo", {
        get: function () {
            return window['cboPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "cboEmpresaEncaminhamento", {
        get: function () {
            return window['cboEmpresaEncaminhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "txtProfissionalEncaminhou", {
        get: function () {
            return window['txtProfissionalEncaminhou_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "txtVeterinarioExterno", {
        get: function () {
            return window['txtVeterinarioExterno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "txtProfissionalPreferencial", {
        get: function () {
            return window['txtProfissionalPreferencial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "txtVeterinarioExternoEncaminhou", {
        get: function () {
            return window['txtVeterinarioExternoEncaminhou_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "txtCRMVVeterinario", {
        get: function () {
            return window['txtCRMVVeterinario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "txtClinicaEncaminhou", {
        get: function () {
            return window['txtClinicaEncaminhou_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "txtTelefoneContatoEncaminhou", {
        get: function () {
            return window['txtTelefoneContatoEncaminhou_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "txtEmailEncaminhou", {
        get: function () {
            return window['txtEmailEncaminhou_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "Encaminhamento", {
        get: function () {
            return this.GetScope()["Encaminhamento"];
        },
        set: function (value) {
            this.GetScope()["Encaminhamento"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "DivEncaminhamento", {
        get: function () {
            return $('#DivEncaminhamento')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "btnVacinas", {
        get: function () {
            return window['btnVacinas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "dlgVacinasAgendadas", {
        get: function () {
            return window['dlgVacinasAgendadas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "dlgIG", {
        get: function () {
            return window['dlgIG_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "dlgProfissional", {
        get: function () {
            return window['dlgProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "grdAgendamentos", {
        get: function () {
            return window['grdAgendamentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "grdAgendamentosPendentes", {
        get: function () {
            return window['grdAgendamentosPendentes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "grdProfissionais", {
        get: function () {
            return window['grdProfissionais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "txtIG", {
        get: function () {
            return window['txtIG_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "btnVoltarAgendamento", {
        get: function () {
            return window['btnVoltarAgendamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "btnOkIG", {
        get: function () {
            return window['btnOkIG_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "agpCadastro", {
        get: function () {
            return window['agpCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "agpServico", {
        get: function () {
            return window['agpServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "agpEncaminhamento", {
        get: function () {
            return window['agpEncaminhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "agpUnidade1", {
        get: function () {
            return window['agpUnidade1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "agpUnidade2", {
        get: function () {
            return window['agpUnidade2_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "grdUnidades", {
        get: function () {
            return window['grdUnidades_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "btnBuscar", {
        get: function () {
            return window['btnBuscar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "grdConfirmacao", {
        get: function () {
            return window['grdConfirmacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "btnSolicitarAprovacao", {
        get: function () {
            return window['btnSolicitarAprovacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "btnEstornarConvenio", {
        get: function () {
            return window['btnEstornarConvenio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "dvLegendaPlano", {
        get: function () {
            return $("#dvLegendaPlano")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "grdConsultas", {
        get: function () {
            return window['grdConsultas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "dlgConsultas", {
        get: function () {
            return window['dlgConsultas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "dlgMotivoCancelamento", {
        get: function () {
            return window['dlgMotivoCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "btnConfirmarCancelamento", {
        get: function () {
            return window['btnConfirmarCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "btnCancelarCancelamento", {
        get: function () {
            return window['btnCancelarCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "cboMotivoCancelamento", {
        get: function () {
            return window['cboMotivoCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "txtMotivoCancelamento", {
        get: function () {
            return window['txtMotivoCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "btnCancelarProfissional", {
        get: function () {
            return window['btnCancelarProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "dlgMotivoExclusao", {
        get: function () {
            return window['dlgMotivoExclusao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "btnConfirmarExclusao", {
        get: function () {
            return window['btnConfirmarExclusao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "btnCancelarExclusao", {
        get: function () {
            return window['btnCancelarExclusao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "cboMotivoExclusao", {
        get: function () {
            return window['cboMotivoExclusao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgeAni.prototype, "txtMotivoExclusao", {
        get: function () {
            return window['txtMotivoExclusao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_AgeAni.prototype.CorrigirTextoBotaoZanthus = function () {
        try {
            this.btnSolicitarAprovacao.Visible = false;
            $(this.dvLegendaPlano).addClass("invisible");
            this.grdValores.Grid.ColunaVisible("Status_Plano", false);
            if (this.btnEstornarConvenio) {
                this.btnEstornarConvenio.Visible = false;
            }
            if (this.IsAtendimentoConvenio()) {
                this.btnEstornarConvenio.Visible = true;
            }
            else {
                this.btnEstornarConvenio.Visible = false;
            }
            if (this.IsConvenioProprio(this.txtPet.TextBoxConvenio.GetText().CNum())) {
                this.btnEstornarConvenio.Visible = false;
                this.btnSolicitarAprovacao.Visible = true;
                $(this.dvLegendaPlano).removeClass("invisible");
                this.grdValores.Grid.ColunaVisible("Status_Plano", true);
                this.grdValores.Grid.ColunaVisible("Codigo_Autorizacao_Plano", true);
                this.grdValores.Grid.ColunaVisible("Status_Plano_Descricao", true);
                this.grdValores.Grid.ColunaVisible("Observacao_Plano", true);
                this.grdValores.Grid.ColunaVisible(this.grdValores.Grid.GetColunaByName("botaoTemplate_btnAutorizacoes"), true);
            }
            else {
                this.btnSolicitarAprovacao.Visible = false;
                $(this.dvLegendaPlano).addClass("invisible");
                this.grdValores.Grid.ColunaVisible("Status_Plano", false);
                this.grdValores.Grid.ColunaVisible("Codigo_Autorizacao_Plano", false);
                this.grdValores.Grid.ColunaVisible("Status_Plano_Descricao", false);
                this.grdValores.Grid.ColunaVisible("Observacao_Plano", false);
                this.grdValores.Grid.ColunaVisible(this.grdValores.Grid.GetColunaByName("botaoTemplate_btnAutorizacoes"), false);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnGerouCelulaGradeValores = function (s, e) {
        if (e.rowType == "data" && e.data) {
            var valorColuna = e.data['Status_Plano'];
            var coluna = e.column;
            if (valorColuna && coluna && coluna.dataField && coluna.dataField == "Status_Plano") {
                var corCelula = "";
                switch (valorColuna) {
                    case 1: {
                        //autorizado; 
                        corCelula = "green";
                        break;
                    }
                    case 2: {
                        //negado; 
                        corCelula = "red";
                        break;
                    }
                    case 3: {
                        //desconto progressivo; 
                        corCelula = "yellow";
                        break;
                    }
                    case 4: {
                        //Aguardando autorização;
                        corCelula = "orange";
                        break;
                    }
                    default: {
                        corCelula = "";
                        break;
                    }
                }
                if (!String.IsNullOrWhiteSpace(corCelula)) {
                    e.cellElement.css("background-color", corCelula);
                    e.cellElement.css("color", corCelula);
                }
            }
        }
    };
    C_AgeAni.prototype.IsConvenioProprio = function (codConvenio) {
        try {
            if (!codConvenio) {
                return false;
            }
            var parametros;
            parametros = {
                codConvenio: codConvenio
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("IsConvenioProprio", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.IsAtendimentoConvenio = function () {
        var convenio = 0;
        var autorizacao = "";
        if (this.txtPet.TextBoxConvenio) {
            convenio = this.txtPet.TextBoxConvenio.GetText().CNum();
        }
        if (convenio > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    C_AgeAni.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboMotivoCancelamento)
            adicionarEventoMoura(this.cboMotivoCancelamento.SelectedItemChanged, this.OnMotivoSelectedItemChanged, this);
        if (this.cboMotivoExclusao)
            adicionarEventoMoura(this.cboMotivoExclusao.SelectedItemChanged, this.OnMotivoExclusaoSelectedItemChanged, this);
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickImprimir, this);
        }
        if (this.btnCancelamento)
            adicionarEventoMoura(this.btnCancelamento.Click, this.OnClickBotaoCancelar, this);
        if (this.txtPet) {
            adicionarEventoMoura(this.txtPet.TextBoxAnimal.Procurou, this.OnPesquisouPet, this);
            adicionarEventoMoura(this.txtPet.TextBoxProprietario.Procurou, this.OnPesquisouProprietario, this);
        }
        if (this.accCadastro)
            this.accCadastro.SetExpanded(true);
        if (this.accServicos) {
            this.accServicos.SetExpanded(false);
            adicionarEventoJQuery(this.accServicos.LabelLink, "click", this.OnLabelLinkClick, this);
        }
        if (this.accUnidades) {
            this.accUnidades.SetExpanded(false);
            adicionarEventoJQuery(this.accUnidades.LabelLink, "click", this.OnLabelLinkClick, this);
        }
        if (this.accEncaminhamento) {
            this.accEncaminhamento.SetExpanded(false);
            adicionarEventoJQuery(this.accEncaminhamento.LabelLink, "click", this.OnLabelLinkClick, this);
        }
        if (this.accConfirmacao) {
            this.accConfirmacao.SetExpanded(false);
            adicionarEventoJQuery(this.accConfirmacao.LabelLink, "click", this.OnLabelLinkClick, this);
        }
        if (this.accValores) {
            this.accValores.SetExpanded(false);
            adicionarEventoJQuery(this.accValores.LabelLink, "click", this.OnLabelLinkClick, this);
        }
        if (this.grdServicos) {
            adicionarEventoMoura(this.grdServicos.AdicionandoItem, this.OnAdicionandoItemServico, this);
            adicionarEventoMoura(this.grdServicos.ItemAdicionado, this.OnAdiciouItemServico, this);
            adicionarEventoMoura(this.grdServicos.ItemExcluido, this.OnItemExcluido, this);
            adicionarEventoMoura(this.grdServicos.Validando, this.OnValidandoItemServico, this);
            adicionarEventoMoura(this.grdServicos.Grid.ClickBotaoLinha, this.OnClicouBotaoLinhaServico, this);
        }
        if (this.grdConfirmacao)
            adicionarEventoMoura(this.grdConfirmacao.ClickBotaoLinha, this.OnClicouBotaoLinhaServicoConfirmacao, this);
        if (this.txtServico)
            adicionarEventoMoura(this.txtServico.Procurou, this.OnTxtServicoProcurou, this);
        //if (this.cboEncaminhamento && this.cboEncaminhamento.SelectedItemChanged)
        //    adicionarEventoMoura(this.cboEncaminhamento.SelectedItemChanged, this.OnCboEncaminhamento, this)
        if (this.cboEstado && this.cboEstado.SelectedItemChanged)
            adicionarEventoMoura(this.cboEstado.SelectedItemChanged, this.PreencherCidades, this);
        if (this.txtProfissionalEncaminhou)
            adicionarEventoMoura(this.txtProfissionalEncaminhou.Procurou, this.OnTxtProfissionalEncaminhouProcurou, this);
        if (this.txtVeterinarioExterno)
            adicionarEventoMoura(this.txtVeterinarioExterno.Procurou, this.OnTxtVeterinarioExternoProcurou, this);
        if (this.btnVacinas)
            adicionarEventoMoura(this.btnVacinas.Click, this.OnClickVacinas, this);
        if (this.grdAgendamentos)
            adicionarEventoMoura(this.grdAgendamentos.SelecionouLinha, this.OnGrdAgendamentosClickBotaoLinha, this);
        if (this.grdAgendamentosPendentes)
            adicionarEventoMoura(this.grdAgendamentosPendentes.ClickBotaoLinha, this.OnClicouBotaoLinhaAgendamento, this);
        if (this.grdProfissionais)
            adicionarEventoMoura(this.grdProfissionais.SelecionouLinha, this.OnGrdProfissionaisClickBotaoLinha, this);
        if (this.btnVoltarAgendamento)
            adicionarEventoMoura(this.btnVoltarAgendamento.Click, this.OnClickVoltarAgendamento, this);
        if (this.btnOkIG)
            adicionarEventoMoura(this.btnOkIG.Click, this.OnClickbtnIg, this);
        if (this.btnBuscar) {
            adicionarEventoMoura(this.btnBuscar.Click, this.GerarGradeUnidades, this);
        }
        if (this.grdUnidades) {
            adicionarEventoMoura(this.grdUnidades.CellPrepared, this.OnGridCellPrepared, this);
            adicionarEventoMoura(this.grdUnidades.ClickBotaoLinha, this.OnGridClicouBotao, this);
        }
        if (this.txtPet) {
            adicionarEventoMoura(this.txtPet.TextBoxAnimal.Limpou, this.OnTxtPetLimpouAnimal, this);
            adicionarEventoMoura(this.txtPet.ProcurouAnimal, this.OnTxtPetProcurouAnimal, this);
        }
        if (this.txtCRMVVeterinario)
            adicionarEventoMoura(this.txtCRMVVeterinario.TextChanged, this.OntxtCRMVVeterinarioTextChanged, this);
        if (this.cboPreferencial)
            adicionarEventoMoura(this.cboPreferencial.SelectedItemChanged, this.OncboPreferencialSelectedItemChanged, this);
        if (this.grdValores) {
            adicionarEventoMoura(this.grdValores.Validando, this.OnValidandoItemValoresServico, this);
            adicionarEventoMoura(this.grdValores.Grid.CellPrepared, this.OnGerouCelulaGradeValores, this);
        }
        if (this.btnCancelarCancelamento)
            adicionarEventoMoura(this.btnCancelarCancelamento.Click, this.OnClickCancelarCancelamento, this);
        if (this.btnConfirmarCancelamento)
            adicionarEventoMoura(this.btnConfirmarCancelamento.Click, this.OnClickConfirmarCancelamento, this);
        if (this.btnCancelarProfissional)
            adicionarEventoMoura(this.btnCancelarProfissional.Click, this.OnClickCancelarProfissional, this);
        $("#btnAvancarCadastro_Botao").focusin(function () {
            $('#txtPet_TextBoxProprietario_TextBox').focus();
        });
        $("#btnAvancarServico_Botao").focusin(function () {
            $('#grdServicos_btnAdiconar_Botao').focus();
        });
        $("#btnAvancarUnidade_Botao").focusin(function () {
            $('#btnBuscar_Botao').focus();
        });
        $("#btnAvancarEncaminhamento_Botao").focusin(function () {
            $('#cboEncaminhamento_comboBox').focus();
        });
        this.CorrigirTextoBotaoZanthus();
    };
    C_AgeAni.prototype.OnClicouBotaoLinhaAgendamento = function (s, e) {
        try {
            if (!e.data) {
                return;
            }
            if (e.commandName == "Cancelar") {
                this._codAgendamento = e.data['Codigo'];
                ;
                this.dlgMotivoExclusao.Show();
            }
            else if (e.commandName == "Reagendar") {
                var servicos = [];
                var servicosAdicionar_1 = [];
                var possuiConcluido_1 = false;
                var parametros = {
                    codigoAgendamento: e.rowKey
                };
                servicos = this.ExecutarFuncaoServerSideSynch("getServicosAtendimento", parametros);
                this.isPago = this.ExecutarFuncaoServerSideSynch("isPago", parametros);
                servicos.forEach(function (s) {
                    if (s.Concluido) {
                        possuiConcluido_1 = true;
                    }
                    else {
                        servicosAdicionar_1.push(s);
                    }
                });
                this.isReagendamento = true;
                if (!possuiConcluido_1 || this.isPago) {
                    this.PreencherEntidade(e.rowKey);
                }
                else {
                    this.Servicos = servicosAdicionar_1;
                    this.EntityTela.Atendimento_Reagendamento = e.rowKey;
                }
                this.empresa = this.ExecutarFuncaoServerSideSynch("getEmpresaAtendimento", parametros);
                if (this.empresa) {
                    this.EntityTela.Empresa = this.empresa.Codigo;
                }
                this.alterarVisibleBotaoPendente(false);
                this.dlgVacinasAgendadas.Hide();
                this.accCadastro.SetExpanded(false);
                this.accServicos.SetExpanded(true);
                this.grdServicos.AtualizarGrid();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnClickBotaoCancelar = function (s, e) {
        e.processOnServer = false;
        if (this.ValidarAntesGravar(true)) {
            this.dlgMotivoCancelamento.Show();
        }
    };
    C_AgeAni.prototype.OnClickConfirmarProfissional = function (s, e) {
        e.processOnServer = false;
        this.confirmacaoAgenda(s, this.horarioForaEscala);
        this.dlgProfissional.Hide();
    };
    C_AgeAni.prototype.OnClickCancelarProfissional = function (s, e) {
        e.processOnServer = false;
        this.dlgProfissional.Hide();
    };
    C_AgeAni.prototype.OnMotivoSelectedItemChanged = function () {
        var parametro = {
            codMotivo: this.cboMotivoCancelamento.GetValue()
        };
        var exibirObservacao = this.ExecutarFuncaoServerSideSynch("ExibirObservacao", parametro);
        if (exibirObservacao == true) {
            this.txtMotivoCancelamento.Visible = true;
        }
        else {
            this.txtMotivoCancelamento.Visible = false;
            this.txtMotivoCancelamento.SetText("");
        }
    };
    C_AgeAni.prototype.OnMotivoExclusaoSelectedItemChanged = function () {
        var parametro = {
            codMotivo: this.cboMotivoExclusao.GetValue()
        };
        var exibirObservacao = this.ExecutarFuncaoServerSideSynch("ExibirObservacao", parametro);
        if (exibirObservacao == true) {
            this.txtMotivoExclusao.Visible = true;
        }
        else {
            this.txtMotivoExclusao.Visible = false;
            this.txtMotivoExclusao.SetText("");
        }
    };
    C_AgeAni.prototype.OnClickCancelarCancelamento = function (s, e) {
        e.processOnServer = false;
        this.dlgMotivoCancelamento.Hide();
    };
    C_AgeAni.prototype.OnClickCancelarExclusao = function (s, e) {
        this.txtMotivoExclusao.Visible = false;
        this.txtMotivoExclusao.SetText("");
        this.cboMotivoExclusao.SetValue("");
        this._codAgendamento = 0;
        this.dlgMotivoExclusao.Hide();
    };
    C_AgeAni.prototype.OnClickConfirmarExclusao = function (s, e) {
        var _this = this;
        try {
            if (!this.cboMotivoExclusao.GetValue() || this.cboMotivoExclusao.GetValue() == null || this.cboMotivoExclusao.GetValue() == 0) {
                MostrarAlerta("Informe o motivo do cancelamento!");
                this.cboMotivoExclusao.Focus();
                return;
            }
            if (String.IsNullOrWhiteSpace(this.txtMotivoExclusao.GetText()) && this.txtMotivoExclusao.Visible == true) {
                MostrarAlerta("Informe a observação do cancelamento!");
                this.txtMotivoExclusao.Focus();
                return;
            }
            MsgBoxJS("Deseja realmente cancelar o agendamento?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.Yes) {
                    try {
                        var parametros = {
                            atendimento: _this._codAgendamento,
                            tela: ValoresSismoura.NomeTela,
                            codUsuario: ValoresSismoura.UsuarioLogado,
                            motivo: _this.txtMotivoExclusao.GetText(),
                            codMotivo: _this.cboMotivoExclusao.GetValue()
                        };
                        var retorno = _this.ExecutarFuncaoServerSideSynch("ExcluirAgendamento", parametros);
                        _this.dlgMotivoExclusao.Hide();
                        _this.atualizarAgendamentos(false);
                        MostrarMensagem("Atendimento cancelado com sucesso");
                    }
                    catch (ex) {
                        _this.dlgMotivoExclusao.Hide();
                        fecharEspera();
                        LogarException(ex);
                    }
                }
            });
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnClickConfirmarCancelamento = function (s, e) {
        e.processOnServer = false;
        try {
            if (!this.cboMotivoCancelamento.GetValue() || this.cboMotivoCancelamento.GetValue() == null || this.cboMotivoCancelamento.GetValue() == 0) {
                MostrarAlerta("Informe o motivo do cancelamento!");
                this.cboMotivoCancelamento.Focus();
                return;
            }
            if (String.IsNullOrWhiteSpace(this.txtMotivoCancelamento.GetText()) && this.txtMotivoCancelamento.Visible == true) {
                MostrarAlerta("Informe a observação do cancelamento!");
                this.txtMotivoCancelamento.Focus();
                return;
            }
            MsgBoxJS("Deseja realmente gravar o agendamento como não finalizado?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespostaCancelarAtendimento, this));
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnRespostaCancelarAtendimento = function (result) {
        var _this = this;
        if (result.Resultado == MsgBoxResult.No)
            return;
        this.dlgMotivoCancelamento.Hide();
        try {
            this.EntityTela.Servicos.forEach(function (s) {
                s.AgendamentoNaoFinalizado = true;
            });
            this.EntityTela.AgendamentoNaoFinalizado = true;
            this.EntityTela.TempCodigoMotivoExclusao = this.cboMotivoCancelamento.GetValue();
            this.EntityTela.TempMotivoExclusao = this.txtMotivoCancelamento.GetText();
            var parametros = {
                entidadeSTR: JSON.stringify(this.EntityTela),
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("GravarAgendamentoNaoFinalizado", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (retorno && !String.IsNullOrWhiteSpace(retorno)) {
                        _this.Limpar();
                        MostrarMensagem(retorno);
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
    C_AgeAni.prototype.OnClickImprimir = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.txtCodigo.GetText().CNum() <= 0) {
                MostrarAlerta("Informe um atendimento para ser impresso!");
                return;
            }
            var parametros;
            var codModelo;
            codModelo = 2;
            //if (this.cboModelo.Combo && this.cboModelo) {
            //codModelo = ("" + this.cboModelo.Combo.GetValue()).CNum();
            //}
            parametros = {
                codigoAtendimento: this.txtCodigo.GetText().CNum(),
                codigoModelo: codModelo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetImpressaoMatricialAtendimento", parametros);
            if (!String.IsNullOrWhiteSpace(retorno.Alerta)) {
                MostrarAlerta(retorno.Alerta);
            }
            else {
                if (String.IsNullOrWhiteSpace(retorno.ImpressaoMatricial)) {
                    this.ImprimirDocumentoWord(retorno.TagsImpressaoWord, retorno.ImpressaoWord, "S");
                }
                else {
                    this.ImprimirMatricial(ValoresSismoura.NomeTela + "_Impressao", retorno.ImpressaoMatricial);
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnGerouCelulaGradeServicos = function (s, e) {
        if (e.rowType == "data" && e.data) {
            var valorColuna = e.data['Status_Plano'];
            var coluna = e.column;
            if (valorColuna && coluna && coluna.dataField && coluna.dataField == "Status_Plano") {
                var corCelula = "";
                switch (valorColuna) {
                    case 1: {
                        //autorizado; 
                        corCelula = "green";
                        break;
                    }
                    case 2: {
                        //negado; 
                        corCelula = "red";
                        break;
                    }
                    case 3: {
                        //desconto progressivo; 
                        corCelula = "yellow";
                        break;
                    }
                    case 4: {
                        //Aguardando autorização;
                        corCelula = "orange";
                        break;
                    }
                    default: {
                        corCelula = "";
                        break;
                    }
                }
                if (!String.IsNullOrWhiteSpace(corCelula)) {
                    e.cellElement.css("background-color", corCelula);
                    e.cellElement.css("color", corCelula);
                }
            }
        }
    };
    C_AgeAni.prototype.OnGrdServicosClickBotaoLinha = function (s, e) {
        try {
            if (e.commandName == "btnAutorizacoes") {
                if (!this.EntityTela.Codigo) {
                    MostrarAlerta("É necessário gravar o atendimento para visualizar as autorizações dos procedimentos");
                    return;
                }
                var parametros;
                parametros = {
                    codAutorizacao: this.Servicos[e.rowIndex].Codigo_Autorizacao_Plano
                };
                //this.lblAutorizacoes.innerText = this.ExecutarFuncaoServerSideSynch("RetornaAutorizacoesProcedimento", parametros);
                //this.mdAutorizacoes.ModalDialog.Show();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnExcluindoItemServico = function (s, e) {
        try {
            if (this.GetScope().Entity.IsPago || this.EntityTela.Pagamento_Status_Stoom > 0) {
                var parametros = {
                    codigoServico: e.item["Servico_Codigo"]
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetInfoServico", parametros);
                if (retorno) {
                    var servicoPacote = retorno['servico_pacote'];
                    if (servicoPacote != null && servicoPacote != undefined && servicoPacote > 0) {
                        MostrarAlerta("Este serviço não pode ser excluído, pois já foi pago");
                        e.cancelar = true;
                        return;
                    }
                }
            }
            if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                if (this.GetScope().Entity.Hospedagem > 0) {
                    MostrarAlerta("Este serviço não pode ser excluído, pois se trata de uma diária de hospedagem.");
                    e.cancelar = true;
                    return;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnAdiciouItemValoresServico = function (s, e) {
        try {
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnLimpouItemServico = function (s, e) {
        try {
            var entidade;
            entidade = e.item;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OncboPreferencialSelectedItemChanged = function (s, e) {
        if (this.cboPreferencial.GetValue() == "S") {
            this.txtProfissionalPreferencial.Visible = true;
        }
        else {
            this.txtProfissionalPreferencial.Limpar();
            this.txtProfissionalPreferencial.Visible = false;
        }
    };
    C_AgeAni.prototype.OntxtCRMVVeterinarioTextChanged = function () {
        try {
            var crmv = this.Encaminhamento.Crmv_Veterinario;
            this.Encaminhamento = {};
            this.Encaminhamento.Crmv_Veterinario = crmv;
            if (String.IsNullOrWhiteSpace(this.txtCRMVVeterinario.GetText())) {
                this.txtProfissionalEncaminhou.Limpar();
                this.AlterarVisibleEncaminhamento(false);
                return;
            }
            this.cboEncaminhamento.Enabled = true;
            var parametros = {};
            parametros = {
                CRMV: this.txtCRMVVeterinario.GetText(),
                Tipo: 2
            };
            var retorno = void 0;
            //VERIFICA SE É VETERINÁRIO EXTERNO
            retorno = this.ExecutarFuncaoServerSideSynch("GetProfissionalByCRMV", parametros);
            if (retorno > 0) {
                this.txtVeterinarioExterno.Procurar(retorno.toString());
                this.cboEncaminhamento.SetValue("E");
                this.AlterarVisibleEncaminhamento(true);
                this.txtVeterinarioExternoEncaminhou.Visible = false;
                this.txtVeterinarioExterno.Visible = true;
                this.Encaminhamento.Tipo_Encaminhamento = this.cboEncaminhamento.GetValue();
                this.cboEncaminhamento.Enabled = false;
            }
            else {
                parametros = {
                    CRMV: this.txtCRMVVeterinario.GetText(),
                    Tipo: 1
                };
                retorno = this.ExecutarFuncaoServerSideSynch("GetProfissionalByCRMV", parametros);
                if (retorno > 0) {
                    this.txtProfissionalEncaminhou.Procurar(retorno.toString());
                    this.cboEncaminhamento.SetValue("I");
                    this.AlterarVisibleEncaminhamento(true);
                    this.Encaminhamento.Tipo_Encaminhamento = this.cboEncaminhamento.GetValue();
                    this.cboEncaminhamento.Enabled = false;
                    this.txtVeterinarioExterno.Visible = false;
                }
                else {
                    if (this.txtCRMVVeterinario.GetText() == this._CRMVDigitado) {
                        this.cboEncaminhamento.SetValue("E");
                        this.AlterarVisibleEncaminhamento(true);
                        this.cboEncaminhamento.Enabled = false;
                        this.Encaminhamento.Tipo_Encaminhamento = this.cboEncaminhamento.GetValue();
                        this.ObrigarEncaminhamento(false);
                        //this.cboEmpresaEncaminhamento.Obrigatorio = true;
                        this.txtVeterinarioExternoEncaminhou.Visible = true;
                        this.txtVeterinarioExterno.Visible = false;
                        return;
                    }
                    this.ObrigarEncaminhamento(true);
                    this._CRMVDigitado = this.txtCRMVVeterinario.GetText();
                    MostrarAlerta("Nenhum profissional encontrado, verifique o CRMV digitado!");
                    this.txtCRMVVeterinario.Limpar();
                    this.AlterarVisibleEncaminhamento(false);
                    this.Encaminhamento.Tipo_Encaminhamento = "";
                }
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_AgeAni.prototype.alterarEncaminhamento = function (tipo) {
        this.txtVeterinarioExternoEncaminhou.Visible = false;
        this.cboEncaminhamento.Enabled = false;
        if (tipo == "I") {
            this.cboEncaminhamento.Enabled = false;
            this.txtProfissionalEncaminhou.Visible = true;
        }
        else {
            this.txtVeterinarioExterno.Visible = true;
            this.ObrigarEncaminhamento(false);
            //this.cboEmpresaEncaminhamento.Obrigatorio = true;            
        }
    };
    C_AgeAni.prototype.VerificarElegibilidadePlano = function (codAnimal) {
        try {
            if (!this.IsConvenioProprio(this.txtPet.TextBoxConvenio.GetText().CNum()) || !codAnimal) {
                return;
            }
            var parametros = {
                codAnimal: codAnimal
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificaElegibilidadePlano", parametros);
            if (!String.IsNullOrWhiteSpace(retorno.Alerta)) {
                MostrarAlerta(retorno.Alerta);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnAdiciouItemServico = function (s, e) {
        this.ExibirEncaminhamento();
        this.limparUnidade();
        this.txtServico.Focus();
        this.AtualizarParametrosProfissional();
    };
    C_AgeAni.prototype.AtualizarParametrosProfissional = function () {
        this.txtProfissionalPreferencial.LimparParametros();
        var servicos;
        this.Servicos.forEach(function (q) {
            if (String.IsNullOrWhiteSpace(servicos)) {
                servicos = q.Servico_Codigo.toString();
            }
            else {
                servicos += ", " + q.Servico_Codigo.toString();
            }
        });
        this.txtProfissionalPreferencial.AddParametro("servicosStr", servicos);
    };
    C_AgeAni.prototype.AdicionarValoresServicos = function () {
        var _this = this;
        this.Valores = [];
        var contador = 1;
        var parametros = {
            cliente: this.txtPet.TextBoxProprietario.GetText().CNum()
        };
        if (this.Servicos && this.Servicos.length > 0) {
            this.Servicos.forEach(function (entidade) {
                if (!entidade.Concluido) {
                    if (!entidade.Zerado) {
                        if (!entidade.Codigo_Autorizacao_Plano) {
                            _this.VerificaAutorizacaoPlano(entidade);
                        }
                    }
                    entidade.Contador = contador;
                    if (!_this.EntityTela.IsPago) {
                        entidade.Tipo_Desconto = 0;
                        entidade.Concluido = false;
                        entidade.Concluido_Text = "Não";
                    }
                    if (_this.AgendaByServico) {
                        _this.horasAtendimento.forEach(function (q) {
                            if (entidade.Servico_Descricao == q.data['Servico']) {
                                _this.horaAtendimento = q;
                            }
                        });
                    }
                    entidade.Profissional_Codigo = _this.horaAtendimento.data[_this.horaAtendimento.commandName].split("|")[1].CNum();
                    entidade.Profissional_Descricao = _this.horaAtendimento.data[_this.horaAtendimento.commandName].split("|")[2];
                    if (_this.horaAtendimento) {
                        var valorCampo = _this.horaAtendimento.data[_this.horaAtendimento.commandName].split("|")[0];
                        if (valorCampo.toLowerCase() == "black") {
                            _this.IniciarValoresAutomaticosServico(entidade, false);
                        }
                        else {
                            _this.IniciarValoresAutomaticosServico(entidade, true);
                        }
                    }
                    else {
                        _this.IniciarValoresAutomaticosServico(entidade, true);
                    }
                    if (_this.EntityTela.IsPago) {
                        _this.Servicos.forEach(function (s) {
                            if (s.Servico_Codigo = entidade.Servico_Codigo) {
                                entidade.Lista_Preco = s.Lista_Preco;
                                entidade.Valor = s.Valor;
                                entidade.Total = s.Total;
                                entidade.Desconto = s.Desconto;
                                entidade.Tipo_Desconto = s.Tipo_Desconto;
                            }
                        });
                    }
                    contador += 1;
                    _this.Valores.push(entidade);
                }
            });
            this.grdValores.Grid.PreencherGrid(this.Valores);
            this.grdValores.AtualizarGrid();
        }
    };
    C_AgeAni.prototype.IniciarValoresAutomaticosServico = function (servico, dentroEscala) {
        if (!servico.Desconto_Porcentagem)
            servico.Desconto_Porcentagem = 0;
        if (!servico.Quantidade)
            servico.Quantidade = 1;
        if (!servico.Desconto)
            servico.Desconto = 0;
        if (this.txtCodigo.GetText().CNum() == 0 || this.isReagendamento) {
            if (!servico.Zerado) {
                var param = {
                    codigoServico: servico.Servico_Codigo,
                    codigoEmpresa: ("" + this.horaAtendimento.data['Codigo_Empresa']).CNum(),
                    diaSemana: this.txtData.Date.getDay() + 1,
                    hora: this.horaAtendimento.commandName.split("|")[1].replace("_", ":"),
                    dataServico: this.txtData.Date,
                    profissional: servico.Profissional_Codigo,
                    dentroEscala: dentroEscala
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetValorServico", param);
                if (retorno) {
                    servico.Valor = retorno['Valor'];
                    servico.Lista_Preco = retorno['Lista'];
                }
            }
            else {
                servico.Valor = 0;
            }
        }
        if (servico.Desconto_Porcentagem && servico.Desconto_Porcentagem > 0) {
            if ((servico.Valor * servico.Quantidade) == 0) {
                servico.Desconto = 0;
            }
            else {
                servico.Desconto = (servico.Valor * servico.Quantidade) / 100 * servico.Desconto_Porcentagem;
            }
        }
        servico.Total = (servico.Quantidade * servico.Valor) - servico.Desconto;
    };
    C_AgeAni.prototype.getRetornoComplementoItemServico = function (entidade, indexItem) {
        try {
            var validar = false;
            if (!this.retornoComplementosItemServico || this.retornoComplementosItemServico.Codigo_Servico != entidade.Servico_Codigo) {
                validar = true;
            }
            else if ((this.retornoComplementosItemServico) && (this.retornoComplementosItemServico.IsProfissionalEmpresa == false)) {
                validar = true;
            }
            else {
                validar = false;
            }
            if (validar) {
                var parametros;
                var contemAgendamentoSelecionado = false;
                if (entidade.VacinaAgendada) {
                    this.selecionouAgendamento = true;
                    contemAgendamentoSelecionado = true;
                }
                else {
                    this.selecionouAgendamento = false;
                }
                parametros = {
                    codServico: ("" + entidade.Servico_Codigo).CNum(),
                    indexItem: indexItem,
                    codAtendimento: ("" + this.GetScope().Entity.Codigo).CNum(),
                    codAnimal: ("" + this.GetScope().Entity.Cod_Animal).CNum(),
                    contemAgendamentoSelecionado: contemAgendamentoSelecionado
                };
                if (parametros.codAtendimento == null || parametros.codAtendimento == undefined) {
                    parametros.codAtendimento = 0;
                }
                if (parametros.codAnimal == null || parametros.codAnimal == undefined) {
                    parametros.codAnimal = 0;
                }
                if (parametros.codProfissional == null || parametros.codProfissional == undefined) {
                    parametros.codProfissional = 0;
                }
                if (parametros.codServico == null || parametros.codServico == undefined) {
                    parametros.codServico = 0;
                }
                this.retornoComplementosItemServico = this.ExecutarFuncaoServerSideSynch("RetornarComplementosItemServico", parametros);
            }
            return this.retornoComplementosItemServico;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Object.defineProperty(C_AgeAni.prototype, "Atendimento_Bloquear_Editar_ValorServico", {
        get: function () {
            return ValoresSismoura.ConfiguracoesPetshop.Atendimento_Bloquear_Editar_ValorServico;
        },
        enumerable: true,
        configurable: true
    });
    C_AgeAni.prototype.AlterarColunasEditaveisVenda = function (editavel) {
        //Servicos
        if (this.Atendimento_Bloquear_Editar_ValorServico) {
            this.grdServicos.Grid.SetColunaEditavel("Valor", false);
        }
        else {
            this.grdServicos.Grid.SetColunaEditavel("Valor", editavel);
        }
        this.grdServicos.Grid.SetColunaEditavel("Desconto", editavel);
        this.grdServicos.Grid.SetColunaEditavel("Desconto_Porcentagem", editavel);
        //this.txtMotivoDesconto.Disabled = !editavel;
    };
    C_AgeAni.prototype.AlterarCamposAtendimentoPago = function (isAtendimentopago) {
        var campoEnable;
        if (isAtendimentopago) {
            campoEnable = false;
        }
        else {
            campoEnable = true;
        }
        this.AlterarColunasEditaveisVenda(campoEnable);
        this.txtPet.TextBoxAnimal.Disabled = !campoEnable;
        this.txtPet.TextBoxProprietario.Disabled = !campoEnable;
    };
    C_AgeAni.prototype.ServicoZerado = function (servico) {
        var parametros = {
            codigoServico: servico
        };
        var servicoZerado = false;
        var retorno = this.ExecutarFuncaoServerSideSynch("GetInfoServico", parametros);
        if (retorno) {
            if (retorno['isServicoZerado'] == "S") {
                return true;
            }
        }
        return false;
    };
    C_AgeAni.prototype.OnValidandoItemServico = function (s, e) {
        try {
            var fieldAlterado = "" + e.fieldNameAlterado;
            var entidade;
            e.item.Quantidade = 1;
            entidade = e.item;
            var servicos = this.Servicos;
            var descPorc;
            if (!servicos) {
                servicos = [];
            }
            //Atualiza a variável retornoComplementosItemServico;
            this.getRetornoComplementoItemServico(entidade, e.index);
            if (this.retornoComplementosItemServico) {
                if (this.retornoComplementosItemServico.IsAtendimentoPago || this.retornoComplementosItemServico.IsAtendimentoIntegradoZanthus) {
                    if (e.index < 0) {
                        if (this.retornoComplementosItemServico.IsAtendimentoIntegradoZanthus) {
                            e.errorText = "Não é possível incluir serviços em um atendimento que já foi integrado";
                        }
                        else {
                            e.errorText = "Não é possível incluir serviços em um atendimento que já foi pago";
                        }
                        e.cancelar = true;
                        return;
                    }
                    this.AlterarCamposAtendimentoPago(true);
                }
                if (e.index < 0 && this.perguntouAdicionarServicoDuplicado == false) {
                    for (var x = 0; x <= servicos.length - 1; x++) {
                        if (servicos[x].Servico_Codigo == entidade.Servico_Codigo) {
                            this.perguntouAdicionarServicoDuplicado = true;
                            MostrarAlerta("Serviço já adicionado!");
                            e.cancelar = true;
                            return;
                        }
                    }
                }
                if (this.perguntouAdicionarServicoDuplicado)
                    this.perguntouAdicionarServicoDuplicado = false;
                entidade.IsRetorno = this.retornoComplementosItemServico.IsRetorno;
                var isPlano = false;
                var isServicoZerado = this.ServicoZerado(entidade.Servico_Codigo);
                if (this.IsConvenioProprio(this.txtPet.TextBoxConvenio.GetText().CNum()) && this.IsAtendimentoConvenio()) {
                    isPlano = true;
                }
                if (entidade.IsRetorno) {
                    entidade.Valor = 0;
                    entidade.Quantidade = 0;
                    entidade.Desconto = 0;
                }
                if (this.retornoComplementosItemServico.IsAtendimentoEmComanda) {
                    e.errorText = "Não é possível incluir serviços em um atendimento que está em uma comanda";
                    e.cancelar = true;
                    return;
                }
                if (this.retornoComplementosItemServico.IsServicoComDoses && !entidade.VacinaAgendada) {
                    e.errorText = "Este serviço contém DOSES e deve ser agendado pelo AGENDAMENTO DE VACINAS/VERMÍFUGOS e não pode ser agendado deste modo AVULSO !";
                    e.cancelar = true;
                    return;
                }
                var listaConsultasSemRetorno = this.retornoComplementosItemServico.ConsultasSemRetorno;
                if (listaConsultasSemRetorno && listaConsultasSemRetorno.length > 0 && !this.mostrouConsulta) {
                    this.dlgConsultas.Show();
                    e.cancelar = true;
                    this.grdConsultas.PreencherGrid(listaConsultasSemRetorno);
                    return;
                }
                if (this.retornoComplementosItemServico.IsMostrarFuncaoAdmRetorno && !this.mostrouFuncao) {
                    this.dlgFuncaoAdm.Verificar("BloRetCo", ValoresSismoura.UsuarioLogado, false, this.VerificarFuncaoAdmBloquearRetorno, this);
                    e.cancelar = true;
                    return;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.VerificarFuncaoAdmBloquearRetorno = function (retorno) {
        this.mostrouFuncao = true;
        this.grdServicos.AdicionarOuAlterarItemAtual();
    };
    C_AgeAni.prototype.IsAtendimentoPago = function (codAtendimento) {
        var parametros;
        parametros = {
            codAtendimento: codAtendimento
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("IsAtendimentoPago", parametros);
        if (retorno) {
            return true;
        }
        else {
            return false;
        }
    };
    C_AgeAni.prototype.OnClickSolicitarConvenio = function () {
        try {
            if (!this.EntityTela)
                return;
            if (this.IsAtendimentoPago(CNum(this.EntityTela.Codigo))) {
                MostrarAlerta("Este atendimento não pode ser alterado, pois já foi pago ou integrado");
                return;
            }
            if (!this.Valores) {
                this.Valores = [];
            }
            var lista = this.Valores;
            for (var x = 0; x <= lista.length - 1; x++) {
                var item = lista[x];
                if (!item.Codigo_Autorizacao_Plano) {
                    this.VerificaAutorizacaoPlano(item);
                }
            }
            this.Valores = lista;
            this.grdValores.AtualizarGrid();
            MostrarMensagem("Solicitação do plano atualizada com sucesso");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnValidandoItemValoresServico = function (s, e) {
        var _this = this;
        try {
            var fieldAlterado = "" + e.fieldNameAlterado;
            var entidade;
            entidade = e.item;
            var servicos = this.Servicos;
            var descPorc;
            if (!servicos) {
                servicos = [];
            }
            if (!this.exibiuAlertaAlteracao)
                this.exibiuAlertaAlteracao = false;
            if (this.IsAtendimentoConvenio() && this.IsConvenioProprio(this.txtPet.TextBoxConvenio.GetText().CNum())) {
                if ((e.fieldNameAlterado == 'Desconto' || e.fieldNameAlterado == 'Desconto_Porcentagem') && this.exibiuAlertaAlteracao == false) {
                    this.exibiuAlertaAlteracao = true;
                    e.cancelar = true;
                    e.errorText = "Desconto não pode ser alterado para serviços em que foi aplicado algum bônus";
                    return;
                }
            }
            if (this.EntityTela.IsPago) {
                this.exibiuAlertaAlteracao = true;
                e.cancelar = true;
                e.errorText = "Desconto não pode ser alterado pois o atendimento já foi pago";
                return;
            }
            if (this.exibiuAlertaAlteracao) {
                this.exibiuAlertaAlteracao = false;
                e.cancelar = true;
                return;
            }
            if (e.fieldNameAlterado == 'Tipo_Desconto') {
                entidade.Desconto = 0;
                if (entidade.Tipo_Desconto == 1) {
                    entidade.Desconto_Porcentagem = ValoresSismoura.ConfiguracoesPetshop.Porcentagem_Desconto_Fidelidade;
                }
                else if (entidade.Tipo_Desconto == 2) {
                    entidade.Desconto_Porcentagem = ValoresSismoura.ConfiguracoesPetshop.Porcentagem_Desconto_Cliente_Novo;
                }
                else {
                    entidade.Desconto_Porcentagem = 0;
                }
            }
            if (e.oldRowValue.Desconto != entidade.Desconto) {
                descPorc = 100 / (entidade.Valor / entidade.Desconto);
                entidade.Desconto_Porcentagem = 0;
            }
            else {
                descPorc = entidade.Desconto_Porcentagem;
            }
            if (this.AgendaByServico) {
                this.horasAtendimento.forEach(function (q) {
                    if (entidade.Servico_Descricao == q.data['Servico']) {
                        _this.horaAtendimento = q;
                    }
                });
            }
            if (this.horaAtendimento) {
                var valorCampo = this.horaAtendimento.data[this.horaAtendimento.commandName].split("|")[0];
                if (valorCampo.toLowerCase() == "black") {
                    this.IniciarValoresAutomaticosServico(entidade, false);
                }
                else {
                    this.IniciarValoresAutomaticosServico(entidade, true);
                }
            }
            else {
                this.IniciarValoresAutomaticosServico(entidade, true);
            }
            if (descPorc != null && descPorc != undefined) {
                //Faz este procedimento para corriir os valores de desconto
                entidade.Desconto_Porcentagem = descPorc;
            }
            //Atualiza a variável retornoComplementosItemServico;
            this.getRetornoComplementoItemServico(entidade, e.index);
            if (this.retornoComplementosItemServico.IsAtendimentoPago || this.retornoComplementosItemServico.IsAtendimentoIntegradoZanthus) {
                if (e.index >= 0) { //Alterando um serviço
                    if (fieldAlterado.toLowerCase() == "desconto" || fieldAlterado.toLowerCase() == "desconto_porcentagem" || fieldAlterado.toLowerCase() == "tipo_desconto") {
                        if (this.retornoComplementosItemServico.IsAtendimentoIntegradoZanthus) {
                            e.errorText = "Não é possível alterar o valor dos serviços em um atendimento que já foi integrado";
                        }
                        else {
                            e.errorText = "Não é possível alterar o valor dos serviços em um atendimento que já foi pago";
                        }
                        e.cancelar = true;
                        return;
                    }
                }
                this.AlterarCamposAtendimentoPago(true);
            }
            entidade.IsRetorno = this.retornoComplementosItemServico.IsRetorno;
            var isPlano = false;
            var isServicoZerado = this.ServicoZerado(entidade.Servico_Codigo);
            entidade.Zerado = isServicoZerado;
            if (this.IsConvenioProprio(this.txtPet.TextBoxConvenio.GetText().CNum()) && this.IsAtendimentoConvenio()) {
                isPlano = true;
            }
            if (entidade.IsRetorno) {
                entidade.Valor = 0;
                entidade.Quantidade = 0;
                entidade.Desconto = 0;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.VerificaAutorizacaoPlano = function (item) {
        if (!item) {
            return;
        }
        if (!this.IsConvenioProprio(this.txtPet.TextBoxConvenio.GetText().CNum())) {
            return;
        }
        try {
            var parametros = {
                codAnimal: CNum(this.EntityTela.Cod_Animal),
                codServico: CNum(item.Servico_Codigo),
                valorServicoAtendimento: CNum(item.Valor),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado,
                qtdeServicoAtendimento: CNum(item.Quantidade)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("SolicitarAutorizacaoConvenio", parametros);
            if (retorno) {
                item.Codigo_Autorizacao_Plano = retorno.Codigo;
                item.Status_Plano = retorno.Status;
                item.Status_Plano_Descricao = retorno.StatusDescricao;
                item.Observacao_Plano = retorno.Codigo_RetornoDescricao;
                if (retorno.Valor_Aprovado) {
                    item.Valor = retorno.Valor_Aprovado;
                }
                if (retorno.Desconto_Servico) {
                    item.Desconto_Porcentagem = retorno.Desconto_Servico;
                }
                if (retorno.Codigo_Retorno == 3) {
                    MostrarAlerta("Atenção, o Pet já utilizou a quantidade máxima configurada para o serviço" + item.Servico_Descricao + '!');
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnItemExcluido = function (s, e) {
        this.ExibirEncaminhamento();
        this.limparUnidade();
        this.AtualizarParametrosProfissional();
    };
    C_AgeAni.prototype.limparUnidade = function () {
        this.grdUnidades.PreencherGrid(null);
        this.horaAtendimento = null;
        this.horasAtendimento = [];
    };
    C_AgeAni.prototype.OnLabelLinkClick = function (ev) {
        this.atualizarGrids();
    };
    C_AgeAni.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.agpCadastro.LabelControl.remove();
        this.agpServico.LabelControl.remove();
        this.agpEncaminhamento.LabelControl.remove();
        this.agpUnidade1.LabelControl.remove();
        this.agpUnidade2.LabelControl.remove();
        this.AlterarVisibleEncaminhamento(false);
    };
    C_AgeAni.prototype.OnTxtPetLimpouAnimal = function () {
        this.alterarVisibleBotaoPendente(false);
        this._mostrarMensagem = false;
    };
    C_AgeAni.prototype.OnClickVacinas = function (s, e) {
        e.processOnServer = false;
        this.dlgVacinasAgendadas.Show();
        this.grdAgendamentos.Refresh();
        this.grdAgendamentosPendentes.Refresh();
        this.RefreshAngular();
    };
    C_AgeAni.prototype.OnClickVoltarAgendamento = function (s, e) {
        e.processOnServer = false;
        this.dlgVacinasAgendadas.Hide();
    };
    C_AgeAni.prototype.OnClickbtnIg = function (s, e) {
        e.processOnServer = false;
        this.dlgIG.Hide();
    };
    C_AgeAni.prototype.OnGrdAgendamentosClickBotaoLinha = function (s, e) {
        var codigoAgendamento = e.rowKey;
        var parametros;
        parametros = {
            codigoAgendamento: codigoAgendamento
        };
        var agendamento = this.ExecutarFuncaoServerSideSynch("GetAgendamentoByCodigo", parametros);
        if (agendamento) {
            var parametros_1 = {
                codigoServico: agendamento.Servico
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetInfoServico", parametros_1);
            var duracaoServico;
            if (retorno) {
                if (String.IsNullOrWhiteSpace(retorno['nome'])) {
                    MostrarAlerta('Serviço não encontrado ou inativo!');
                    return;
                }
                if (retorno['isServicoAtendimentoContinuo'] == "S") {
                    MostrarAlerta('Este serviço não poderá ser adicionado. Pois está marcado apenas para uso no atendimento contínuo.');
                    return;
                }
                duracaoServico = retorno['duracao_servico'];
                if (!String.IsNullOrWhiteSpace(retorno['grupo'])) {
                    this.Servico.Grupo = retorno['grupo'];
                }
            }
            this.Servico.Servico_Codigo = agendamento.Servico;
            this.Servico.Servico_Descricao = retorno['nome'];
            this.Servico.ServicoDuracao = duracaoServico;
            this.Servico.ServicoDuracaoMinutos = retorno['duracao_servico_minutos'];
            this.Servico.Especie = retorno['Especie'];
            this.Servico.VacinaAgendada = agendamento;
            this.grdServicos.AdicionarOuAlterarItemAtual();
            this.accServicos.SetExpanded(true);
            this.dlgVacinasAgendadas.Hide();
        }
    };
    C_AgeAni.prototype.OnGrdProfissionaisClickBotaoLinha = function (s, e) {
        var codigoProfissional = e.rowKey;
        var parametros = {
            codigoProfissional: codigoProfissional
        };
        var profissional = this.ExecutarFuncaoServerSideSynch("GetProfissional", parametros);
        if (profissional) {
            this.profissionalSelecionado = profissional;
            this.confirmacaoAgenda(s, this.horarioForaEscala);
            this.dlgProfissional.Hide();
        }
    };
    C_AgeAni.prototype.OnTxtPetProcurouAnimal = function (s, e) {
        try {
            this.CorrigirTextoBotaoZanthus();
            this.atualizarAgendamentos(true);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.atualizarAgendamentos = function (exibirMensagem) {
        if (this.txtPet.TextBoxAnimal.GetText().CNum() == 0)
            return;
        var parametros = {
            codigoAnimal: this.txtPet.TextBoxAnimal.GetText().CNum()
        };
        var complementosAnimal = this.ExecutarFuncaoServerSideSynch("RetornarComplementosAnimal", parametros);
        if (complementosAnimal) {
            if (this.txtCodigo.GetText().CNum() == 0 && ((complementosAnimal.Agendamentos && complementosAnimal.Agendamentos.length > 0) || complementosAnimal.AgendamentosPendentes && complementosAnimal.AgendamentosPendentes.length > 0)) {
                this._mostrarMensagem = true;
                this.grdAgendamentos.PreencherGrid(complementosAnimal.Agendamentos);
                this.grdAgendamentosPendentes.PreencherGrid(complementosAnimal.AgendamentosPendentes);
                this.grdAgendamentosPendentes.Refresh();
                this.grdAgendamentos.Refresh();
                if (complementosAnimal.AgendamentosPendentes && complementosAnimal.AgendamentosPendentes.length > 0) {
                    this.tab.AlterarVisibleAba("AbaAgendamento", true);
                }
                else {
                    this.tab.AlterarVisibleAba("AbaAgendamento", false);
                }
                if (complementosAnimal.Agendamentos && complementosAnimal.Agendamentos.length > 0) {
                    this.tab.AlterarVisibleAba("AbaVacinas", true);
                }
                else {
                    this.tab.AlterarVisibleAba("AbaVacinas", false);
                }
                this.alterarVisibleBotaoPendente(true);
            }
            else {
                this.alterarVisibleBotaoPendente(false);
                this.dlgVacinasAgendadas.Hide();
            }
            if (this._mostrarMensagem && exibirMensagem) {
                setTimeout($.proxy(function () {
                    MsgBoxJS("Este pet tem indicação clínica para uma melhor saúde animal", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, $.proxy(this.OnSelecionouMSGBoxAgendamentos, this), null);
                }, this), 200);
            }
        }
        else {
            this.dlgVacinasAgendadas.Hide();
        }
    };
    C_AgeAni.prototype.alterarVisibleBotaoPendente = function (visible) {
        if (visible) {
            $("#" + this.btnVacinas.ID).removeClass("invisible");
        }
        else {
            $("#" + this.btnVacinas.ID).addClass("invisible");
        }
    };
    C_AgeAni.prototype.confirmacaoAgenda = function (s, e) {
        var _this = this;
        var cor;
        var index = 0;
        var achou = false;
        try {
            this.codEmpresa = ("" + e.data['Codigo_Empresa']).CNum();
            var dataAtendimento = ("" + e.data['Data_Atendimento']);
            if (e.commandName.substring(0, 5).toLowerCase() == "hora|") {
                if (this.AgendaByServico) {
                    if (!this.horasAtendimento) {
                        this.horasAtendimento = [];
                    }
                    else {
                        var continuar_1 = true;
                        this.horasAtendimento.forEach(function (q) {
                            if (q.data['Codigo_Empresa'] != e.data['Codigo_Empresa']) {
                                continuar_1 = false;
                            }
                        });
                        if (!continuar_1) {
                            MostrarAlerta("Não é possível escolher horários em empresas diferentes!");
                            return;
                        }
                    }
                    this.horasAtendimento.forEach(function (q) {
                        if (q.rowIndex == e.rowIndex) {
                            _this.horaAtendimento = q;
                            index = _this.horasAtendimento.indexOf(q);
                            achou = true;
                        }
                    });
                }
                if (!achou && this.AgendaByServico) {
                    this.horaAtendimento = null;
                }
                var valorCampo = "" + e.data[e.commandName].split("|")[0];
                var intervalo_1 = 0;
                if (this.linhaAgendamento() == 14) {
                    intervalo_1 = 60;
                }
                else {
                    intervalo_1 = 15;
                }
                if (!String.IsNullOrWhiteSpace(valorCampo)) {
                    var duracao_1 = 0;
                    this.Servicos.forEach(function (s) {
                        if (s.Servico_Descricao == ("" + e.data['Servico']) || !_this.AgendaByServico) {
                            if (s.ServicoDuracaoMinutos == 0) {
                                duracao_1 += intervalo_1;
                            }
                            else {
                                duracao_1 += s.ServicoDuracaoMinutos;
                            }
                        }
                    });
                    var tamanho = 0;
                    var colunas = duracao_1 / intervalo_1;
                    if (colunas > 0)
                        colunas -= 1;
                    tamanho = colunas + e.columnIndex;
                    if (tamanho > this.grdUnidades.Colunas.length - 1) {
                        tamanho = this.grdUnidades.Colunas.length - 1;
                    }
                    if (tamanho > colunas + e.columnIndex) {
                        tamanho -= 1;
                    }
                    if (valorCampo.toLowerCase() == "green") {
                        for (var i = e.columnIndex; i <= tamanho; i++) {
                            if (this.grdUnidades.Grid.getCellElement(e.rowIndex, i).css("color") == "rgb(0, 0, 0)") {
                                MostrarAlerta("Este horário ultrapassa o horário disponível do profissional!");
                                return;
                            }
                        }
                    }
                    if (this.AgendaByServico) {
                        for (var i = 0; i < this.grdUnidades.VisibleRowsCount() - 1; i++) {
                            var coluna = this.grdUnidades.Grid.getCellElement(i, e.columnIndex);
                            if (coluna) {
                                if (coluna.css("color") == "rgb(255, 0, 0)") {
                                    MostrarAlerta("Este horário já foi selecionado para outro serviço!");
                                    return;
                                }
                            }
                        }
                    }
                    if (this.horarioForaEscala) {
                        tamanho = colunas + this.horarioForaEscala.columnIndex;
                        if (tamanho > this.grdUnidades.Colunas.length - 1) {
                            tamanho = this.grdUnidades.Colunas.length - 1;
                        }
                        cor = this.horarioForaEscala.data[this.horarioForaEscala.commandName].split("|")[0];
                        for (var i = this.horarioForaEscala.columnIndex; i <= tamanho; i++) {
                            this.grdUnidades.Grid.getCellElement(this.horarioForaEscala.rowIndex, i).css("background-color", cor);
                            this.grdUnidades.Grid.getCellElement(this.horarioForaEscala.rowIndex, i).css("color", cor);
                        }
                        //e.data[this.horarioForaEscala.commandName] = "Black|0|"
                    }
                    if (this.horaAtendimento) {
                        tamanho = colunas + this.horaAtendimento.columnIndex;
                        if (tamanho > this.grdUnidades.Colunas.length - 1) {
                            tamanho = this.grdUnidades.Colunas.length - 1;
                        }
                        cor = this.horaAtendimento.data[this.horaAtendimento.commandName].split("|")[0];
                        for (var i = this.horaAtendimento.columnIndex; i <= tamanho; i++) {
                            this.grdUnidades.Grid.getCellElement(this.horaAtendimento.rowIndex, i).css("background-color", cor);
                            this.grdUnidades.Grid.getCellElement(this.horaAtendimento.rowIndex, i).css("color", cor);
                        }
                    }
                    cor = "yellow";
                    tamanho = colunas + e.columnIndex;
                    if (tamanho > this.grdUnidades.Colunas.length - 1) {
                        tamanho = this.grdUnidades.Colunas.length - 1;
                    }
                    if (tamanho > colunas + e.columnIndex) {
                        tamanho -= 1;
                    }
                    for (var i = e.columnIndex; i <= tamanho; i++) {
                        this.grdUnidades.Grid.getCellElement(e.rowIndex, i).css("background-color", cor);
                        this.grdUnidades.Grid.getCellElement(e.rowIndex, i).css("color", cor);
                    }
                    //if (valorCampo.toLowerCase() == "black") {
                    //    e.data[e.commandName] = "Black|" + this.profissionalSelecionado.Codigo + "|" + this.profissionalSelecionado.Descricao;
                    //    this.grdProfissionais.PreencherGrid(null);
                    //}
                    this.horaAtendimento = e;
                    if (this.AgendaByServico) {
                        if (this.horaAtendimento && this.horaAtendimento.rowIndex > 0) {
                            if (achou) {
                                this.horasAtendimento.splice(index, 1);
                            }
                            this.horasAtendimento.push(this.horaAtendimento);
                        }
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnGridClicouBotao = function (s, e) {
        var _this = this;
        try {
            if (String.IsNullOrWhiteSpace(e.commandName)) {
                return;
            }
            if (e.commandName.substring(0, 5).toLowerCase() == "hora|") {
                var valorCampo = "" + e.data[e.commandName].split("|")[0];
                if (String.IsNullOrWhiteSpace(valorCampo) || valorCampo.toLowerCase() == "white") {
                    MostrarAlerta("A unidade não está aberta neste horário!");
                    return;
                }
                if (e.data[e.commandName].split("|")[1] == "0") {
                    MostrarAlerta("Nenhum profissional disponível este horário!");
                    return;
                }
                MsgBoxJS("Deseja selecionar este horário para o atendimento?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                    if (result.Resultado == MsgBoxResult.No) {
                        return;
                    }
                    else {
                        _this.confirmacaoAgenda(s, e);
                        //if (valorCampo.toLowerCase() == "black") {
                        //    this.horarioForaEscala = e;
                        //    var arrservicos: number[] = [];
                        //    if (!this.AgendaByServico) {
                        //        for (var i = 0; i < this.Servicos.length; i++) {
                        //            arrservicos.push(this.Servicos[i].Servico_Codigo);
                        //        }
                        //    } else {
                        //        let param: any = {
                        //            servico: e.data['Servico']
                        //        };
                        //        let ret = this.ExecutarFuncaoServerSideSynch("GetServicoByNome", param);
                        //        if (ret) {
                        //            arrservicos.push(ret);
                        //        }
                        //    }
                        //    let parametros: any = {
                        //        Empresa: e.data["Codigo_Empresa"],
                        //        servicos: arrservicos
                        //    }
                        //    let retorno = this.ExecutarFuncaoServerSideSynch("GetProfissionaisDisponiveis", parametros);
                        //    if (retorno) {
                        //        this.grdProfissionais.PreencherGrid(retorno);
                        //        this.dlgProfissional.Show();
                        //    } else {
                        //        MostrarAlerta("Nenhum profissional disponível!");
                        //    }
                        //} else {
                        //    this.confirmacaoAgenda(s, e);
                        //}
                    }
                }, null);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnSelecionouMSGBoxAgendamentos = function (e) {
        var btnDiag = window['btnVacinas_Object'];
        if (btnDiag) {
            btnDiag.DoClick();
        }
    };
    C_AgeAni.prototype.OnTxtProfissionalEncaminhouProcurou = function (s, e) {
        try {
            var parametros;
            parametros = {
                codVeterinarioInterno: this.txtProfissionalEncaminhou.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("getInfoVeterinarioInterno", parametros);
            if (retorno) {
                this.Encaminhamento.Telefone_Veterinario = retorno['telefone'];
                this.Encaminhamento.Email_Veterinario = retorno['email'];
            }
            this.GetScope().$applyAsync();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnTxtVeterinarioExternoProcurou = function (s, e) {
        try {
            var parametros;
            parametros = {
                codVeterinario: this.txtVeterinarioExterno.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("getInfoVeterinarioExterno", parametros);
            if (retorno) {
                this.Encaminhamento.Telefone_Veterinario = retorno['telefone'];
                this.Encaminhamento.Email_Veterinario = retorno['email'];
                this.Encaminhamento.Clinica_Encaminhou = retorno['clinica'];
            }
            this.GetScope().$applyAsync();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    //protected OnCboEncaminhamento(s: MouraComboBox, e: MouraEventArgs) {
    //    let exibir: boolean = true;
    //    this.AlterarVisibleEncaminhamento(exibir);
    //    this.Encaminhamento.Tipo_Encaminhamento = s.GetValue();
    //}
    C_AgeAni.prototype.AlterarVisibleEncaminhamento = function (value) {
        if (value) {
            $(this.DivEncaminhamento).removeClass("invisible");
            this.HabilitarTipoEncaminhamento(this.cboEncaminhamento.GetValue());
        }
        else {
            this.Encaminhamento = {};
            $(this.DivEncaminhamento).addClass("invisible");
        }
    };
    C_AgeAni.prototype.HabilitarTipoEncaminhamento = function (tipo) {
        if (tipo == "E") {
            if (this.cboEmpresaEncaminhamento)
                this.cboEmpresaEncaminhamento.Visible = false;
            if (this.txtProfissionalEncaminhou)
                this.txtProfissionalEncaminhou.Visible = false;
            if (this.txtVeterinarioExternoEncaminhou)
                this.txtVeterinarioExternoEncaminhou.Visible = true;
            if (this.txtClinicaEncaminhou)
                this.txtClinicaEncaminhou.Visible = true;
            this.ObrigarEncaminhamento(false);
        }
        else {
            if (this.cboEmpresaEncaminhamento)
                //this.cboEmpresaEncaminhamento.Visible = true;
                if (this.txtProfissionalEncaminhou)
                    this.txtProfissionalEncaminhou.Visible = true;
            if (this.txtVeterinarioExternoEncaminhou)
                this.txtVeterinarioExternoEncaminhou.Visible = false;
            if (this.txtClinicaEncaminhou)
                this.txtClinicaEncaminhou.Visible = false;
            this.ObrigarEncaminhamento(true);
        }
        this.GetScope().$applyAsync();
    };
    C_AgeAni.prototype.ObrigarEncaminhamento = function (flag) {
        this.cboEmpresaEncaminhamento.Obrigatorio = false;
        this.txtProfissionalEncaminhou.Obrigatorio = false;
        this.txtTelefoneContatoEncaminhou.Obrigatorio = false;
        this.txtEmailEncaminhou.Obrigatorio = false;
    };
    C_AgeAni.prototype.OnTxtServicoProcurou = function (s, e) {
        try {
            var parametros = {
                codigoServico: this.txtServico.GetText()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetInfoServico", parametros);
            if (retorno) {
                if (retorno['isServicoAtendimentoContinuo'] == "S") {
                    MostrarAlerta('Este serviço não poderá ser adicionado. Pois está marcado apenas para uso no atendimento contínuo.');
                    this.txtServico.Limpar();
                    this.txtServico.Focus();
                    return;
                }
                var duracaoServico = retorno['duracao_servico'];
                if (!String.IsNullOrWhiteSpace(duracaoServico)) {
                    this.Servico.ServicoDuracao = duracaoServico;
                }
                this.Servico.Linha = retorno['Linha'];
                this.Servico.ServicoDuracaoMinutos = retorno['duracao_servico_minutos'];
                this.Servico.Especie = retorno['Especie'];
                if (!String.IsNullOrWhiteSpace(retorno['grupo'])) {
                    this.Servico.Grupo = retorno['grupo'];
                }
                if (this.txtServico.GetText().CNum() > 0) {
                    this.AbrirIGServico(this.txtServico.GetText().CNum(), this.txtPet.TextBoxAnimal.GetText().CNum(), false);
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.AbrirIGServico = function (codServico, codAnimal, exibirNaoEncontrado) {
        try {
            var param = {
                codServico: codServico,
                codAnimal: codAnimal
            };
            this.txtIG.SetText("");
            var retorno = this.ExecutarFuncaoServerSideSynch("GetIgServico", param);
            if (retorno && !String.IsNullOrWhiteSpace(retorno)) {
                this.txtIG.SetText(retorno);
                this.dlgIG.ModalDialog.Show();
            }
            else if (exibirNaoEncontrado) {
                MostrarAlerta("IG não disponível para este serviço");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnPesquisouProprietario = function (s, e) {
        try {
            if (this.txtPet.TextBoxProprietario.GetText().CNum() > 0) {
                if (this.txtPet.TextBoxAnimal.GetText().CNum() == 0 && (!this.EntityTela.Codigo || this.EntityTela.Codigo == null || this.EntityTela.Codigo == 0)) {
                    this.txtPet.TextBoxProprietario.LabelResultado.click();
                }
                var parametros = {
                    codProprietario: this.txtPet.TextBoxProprietario.GetText().CNum()
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("getEstadoCidadeProprietario", parametros);
                if (retorno) {
                    this.cboEstado.LimparSelecao();
                    this.cboEstado.SetValue(retorno['estado']);
                    this.PreencherCidades();
                    if (!this.listaCidades || this.listaCidades.length == 0) {
                        this.cboEstado.SetValue("");
                        return;
                    }
                    if (this.listaCidades.FindAll("codigo", CNum(retorno['cidade'])).length > 0) {
                        this.cboCidade.Combo.SetValue(CNum(retorno['cidade']));
                    }
                }
                var param = {
                    cliente: this.txtPet.TextBoxProprietario.GetText().CNum()
                };
                var ret = this.ExecutarFuncaoServerSideSynch("isClienteNovo", param);
                if (ret) {
                    this.tipoDesconto = 2;
                }
                else {
                    this.tipoDesconto = 1;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnPesquisouPet = function (s, e) {
        try {
            if (!this.EntityTela)
                return;
            var msg = [];
            if (this.EntityTela.Codigo && this.EntityTela.Codigo > 0)
                return;
            var parametros = {
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetContratoAtivoAnimal", parametros);
            if (retorno) {
                var contrato = retorno.Contrato;
                if (contrato) {
                    var retorno = this.ExecutarFuncaoServerSideSynch("VerificaElegibilidadePlano", parametros);
                    if (!String.IsNullOrWhiteSpace(retorno.Alerta)) {
                        MostrarAlerta(retorno.Alerta);
                        this.EntityTela.Convenio = 0;
                    }
                    else {
                        this.EntityTela.Convenio = 2;
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.linhaAgendamento = function () {
        if (!this.Servicos || this.Servicos.length == 0) {
            return 0;
        }
        else {
            return this.Servicos[0].Linha;
        }
    };
    C_AgeAni.prototype.OnAdicionandoItemServico = function (s, e) {
        var entidade = e.item;
        if (this.Servicos.length > 0) {
            var item = this.Servicos.filter(function (q) { return q.Linha != entidade.Linha; });
            if (item && item.length > 0) {
                e.cancelar = true;
                MostrarAlerta('Não é possível adicionar serviços de linhas diferentes!');
                return;
            }
        }
        if (String.IsNullOrWhiteSpace(entidade.Servico_Descricao)) {
            entidade.Servico_Descricao = this.txtServico.hdnLabelResultadoText.value;
        }
        e.item = entidade;
        this.txtServico.Focus();
    };
    C_AgeAni.prototype.habilitarCampos = function (flag) {
        this.txtPet.TextBoxProprietario.Disabled = !flag;
        this.txtPet.TextBoxConvenio.Disabled = !flag;
        this.txtPet.TextBoxAnimal.Disabled = !flag;
    };
    C_AgeAni.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.habilitarCampos(true);
        this.grdServicos.btnAdiconar.Visible = true;
        this.txtServico.ReadOnly = false;
        this.tipoDesconto = 0;
        this.isPago = false;
        Entity.Data = this.DataServidor();
        this.empresa = null;
        this.isReagendamento = false;
        this.btnCancelamento.Visible = true;
        this.btnImprimir.Visible = false;
        this.Servicos = [];
        this.Servico = null;
        this.Valores = [];
        this.Confirmacoes = [];
        this.cboMotivoCancelamento.SetValue("");
        this.txtMotivoCancelamento.Visible = false;
        this.txtMotivoCancelamento.SetText("");
        this._codAgendamento = 0;
        this.cboMotivoExclusao.SetValue("");
        this.txtMotivoExclusao.Visible = false;
        this.txtMotivoExclusao.SetText("");
        this.perguntouAdicionarServicoDuplicado = false;
        this.txtData.Date = new Date();
        this._CRMVDigitado = "";
        this._OcultouCliente = false;
        this.accCadastro.SetExpanded(true);
        this.accServicos.SetExpanded(false);
        this.accUnidades.SetExpanded(false);
        this.accConfirmacao.SetExpanded(false);
        this.accEncaminhamento.SetExpanded(false);
        this.accValores.SetExpanded(false);
        this.accEncaminhamento.Visible = false;
        this.AlterarVisibleEncaminhamento(false);
        this.cboEncaminhamento.SetValue("");
        this.grdServicos.AtualizarGrid();
        this.cboPreferencial.SetValue("N");
        this.cboOrdenacao.SetValue("D");
        this.txtProfissionalPreferencial.Visible = false;
        this.cboPeriodo.Combo.SetValue(0);
        this.cboEstado.LimparSelecao();
        this.cboCidade.LimparSelecao();
        this.limparUnidade();
        this.grdConfirmacao.PreencherGrid(null);
        this.grdValores.Grid.PreencherGrid(null);
        this.AlterarCamposUnidades(false, "");
        this.RefreshAngular();
    };
    C_AgeAni.prototype.OnBtnAvancarUnidadeClick = function () {
        try {
            debugger;
            if (this.txtCodigo.GetText().CNum() == 0 || this.isReagendamento) {
                if (!this.horaAtendimento) {
                    MostrarAlerta("Selecione o horário de atendimento");
                    return;
                }
                this.CorrigirTextoBotaoZanthus();
                if (this.AgendaByServico) {
                    this.EntityTela.Empresa = ("" + this.horasAtendimento[0].data['Codigo_Empresa']).CNum();
                }
                else {
                    this.EntityTela.Empresa = ("" + this.horaAtendimento.data['Codigo_Empresa']).CNum();
                }
                this.criarGradeValores(this.EntityTela);
                this.AdicionarValoresServicos();
            }
            this.accUnidades.SetExpanded(false);
            this.accValores.SetExpanded(true);
            this.grdValores.AtualizarGrid();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnBtnAvancarServicoClick = function () {
        if (!this.Servicos || this.Servicos.length == 0) {
            MostrarAlerta("Informe ao menos algum serviço");
            return;
        }
        this.accServicos.SetExpanded(false);
        if (this.accEncaminhamento.Visible) {
            this.accEncaminhamento.SetExpanded(true);
        }
        else {
            this.accUnidades.SetExpanded(true);
        }
    };
    C_AgeAni.prototype.OnBtnAvancarValoresClick = function () {
        var _this = this;
        try {
            debugger;
            if (this.txtCodigo.GetText().CNum() == 0 || this.isReagendamento) {
                if (this.AgendaByServico) {
                    if (!this.horasAtendimento || this.horasAtendimento.length != this.Servicos.filter(function (q) { return q.Concluido == false; }).length) {
                        MostrarAlerta("Informe o horário de todos os serviços");
                        return;
                    }
                }
            }
            this.accValores.SetExpanded(false);
            this.accConfirmacao.SetExpanded(true);
            var codEmpresa;
            if (this.horaAtendimento) {
                codEmpresa = this.horaAtendimento.data["Codigo_Empresa"];
            }
            else {
                codEmpresa = this.EntityTela.Empresa;
            }
            var horaSelecionada;
            var dt;
            dt = this.txtData.Date;
            dt.setHours(12);
            this.Confirmacoes = [];
            this.Valores.forEach(function (v) {
                var confirmacao = {};
                if (_this.AgendaByServico) {
                    _this.horasAtendimento.forEach(function (q) {
                        if (v.Servico_Descricao == q.data['Servico']) {
                            _this.horaAtendimento = q;
                        }
                    });
                }
                if (_this.txtCodigo.GetText().CNum() > 0 && !_this.isReagendamento) {
                    confirmacao.Data = v.Data;
                    confirmacao.Empresa_Descricao = _this.lblEmpresa.Text;
                    confirmacao.Hora = v.Previsao.FormataHoraSismoura();
                }
                else {
                    horaSelecionada = _this.horaAtendimento.commandName.split("|")[1].replace("_", ":");
                    confirmacao.Data = _this.txtData.Date;
                    confirmacao.Empresa_Descricao = _this.horaAtendimento.data["Fantasia"];
                    confirmacao.Hora = horaSelecionada;
                }
                confirmacao.Tipo_Desconto = v.Tipo_Desconto;
                confirmacao.Codigo = v.Codigo;
                confirmacao.Servico_Codigo = v.Servico_Codigo;
                confirmacao.Servico_Nome = v.Servico_Descricao;
                confirmacao.Profissional_Codigo = v.Profissional_Codigo;
                confirmacao.Profissional_Descricao = v.Profissional_Descricao;
                confirmacao.Empresa_Codigo = codEmpresa;
                confirmacao.Servico_Valor = v.Valor;
                confirmacao.Total = v.Total;
                confirmacao.Servico_Duracao = v.ServicoDuracao;
                confirmacao.Concluido = v.Concluido;
                confirmacao.Codigo_Autorizacao_Plano = v.Codigo_Autorizacao_Plano;
                confirmacao.Desconto = v.Desconto;
                confirmacao.Desconto_Porcentagem = v.Desconto_Porcentagem;
                confirmacao.Quantidade = v.Quantidade;
                confirmacao.Lista_Preco = v.Lista_Preco;
                confirmacao.Valor_Repasse_Prestador = v.Valor_Repasse_Prestador;
                confirmacao.VacinaAgendada = v.VacinaAgendada;
                _this.Confirmacoes.push(confirmacao);
            });
            this.Servicos.forEach(function (v) {
                if (v.Concluido) {
                    var confirmacao = {};
                    if (_this.AgendaByServico) {
                        _this.horaAtendimento = _this.horasAtendimento[0];
                    }
                    confirmacao.Codigo = v.Codigo;
                    confirmacao.Tipo_Desconto = v.Tipo_Desconto;
                    confirmacao.Data = v.Data;
                    confirmacao.Hora = v.Previsao.FormataHoraSismoura();
                    confirmacao.Servico_Codigo = v.Servico_Codigo;
                    confirmacao.Servico_Nome = v.Servico_Descricao;
                    confirmacao.Profissional_Codigo = v.Profissional_Codigo;
                    confirmacao.Profissional_Descricao = v.Profissional_Descricao;
                    confirmacao.Empresa_Codigo = codEmpresa;
                    confirmacao.Empresa_Descricao = _this.horaAtendimento.data["Fantasia"];
                    confirmacao.Servico_Valor = v.Valor;
                    confirmacao.Total = v.Total;
                    confirmacao.Servico_Duracao = v.ServicoDuracao;
                    confirmacao.Concluido = v.Concluido;
                    confirmacao.Codigo_Autorizacao_Plano = v.Codigo_Autorizacao_Plano;
                    confirmacao.Desconto = v.Desconto;
                    confirmacao.Desconto_Porcentagem = v.Desconto_Porcentagem;
                    confirmacao.Quantidade = v.Quantidade;
                    confirmacao.Lista_Preco = v.Lista_Preco;
                    confirmacao.Valor_Repasse_Prestador = v.Valor_Repasse_Prestador;
                    confirmacao.VacinaAgendada = v.VacinaAgendada;
                    _this.Confirmacoes.push(confirmacao);
                }
            });
            this.grdConfirmacao.PreencherGrid(this.Confirmacoes);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    C_AgeAni.prototype.OnBtnAvancarCadastroClick = function () {
        this.accCadastro.SetExpanded(false);
        this.accServicos.SetExpanded(true);
        this.atualizarGrids();
    };
    C_AgeAni.prototype.atualizarGrids = function () {
        this.grdServicos.AtualizarGrid();
        //this.grdUnidades.Refresh()
        this.grdValores.AtualizarGrid();
        this.grdConfirmacao.Refresh();
        this.RefreshAngular();
    };
    C_AgeAni.prototype.OnBtnAvancarEncaminhamentoClick = function () {
        if (this.cboEncaminhamento.GetValue() <= 0)
            return;
        if (this.cboEncaminhamento.GetValue() == "I") {
            if (this.cboEmpresaEncaminhamento.GetValue() <= 0 && this.cboEmpresaEncaminhamento.Obrigatorio)
                return;
            if (this.txtProfissionalEncaminhou.GetText().CNum() <= 0 && this.txtProfissionalEncaminhou.Obrigatorio)
                return;
            if (String.IsNullOrWhiteSpace(this.txtTelefoneContatoEncaminhou.GetText()) && this.txtTelefoneContatoEncaminhou.Obrigatorio)
                return;
            if (String.IsNullOrWhiteSpace(this.txtEmailEncaminhou.GetText()) && this.txtEmailEncaminhou.Obrigatorio)
                return;
        }
        this.accEncaminhamento.SetExpanded(false);
        this.accUnidades.SetExpanded(true);
    };
    C_AgeAni.prototype.ExibirEncaminhamento = function () {
        var exibir = false;
        if (!this.Servicos)
            return;
        for (var i = 0; i < this.Servicos.length; i++) {
            if (this.Servicos[i].Grupo.CNum() == 29 ||
                this.Servicos[i].Grupo.CNum() == 40 ||
                this.Servicos[i].Grupo.CNum() == 90 ||
                this.Servicos[i].Grupo.CNum() == 126 ||
                this.Servicos[i].Grupo.CNum() == 102) {
                exibir = true;
                break;
            }
        }
        this.accEncaminhamento.Visible = exibir;
        if (!exibir) {
            this.Encaminhamento = {};
        }
    };
    C_AgeAni.prototype.PreencherCidades = function () {
        try {
            var parametros = {
                estado: this.cboEstado.GetValue()
            };
            this.listaCidades = [];
            this.cboCidade.Combo.ClearItems();
            var retorno = this.ExecutarFuncaoServerSideSynch("GetCidadeByEstadoPetz", parametros);
            this.listaCidades = retorno;
            if (this.listaCidades) {
                for (var x = 0; x < this.listaCidades.length; x++) {
                    this.cboCidade.Combo.AddItem(this.listaCidades[x].Cidade, this.listaCidades[x].Codigo, "");
                }
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_AgeAni.prototype.OnGridCellPrepared = function (s, e) {
        try {
            var name = "";
            if (e.column && e.column) {
                name = e.column.name;
            }
            if (e.rowType == "data" && e.data) {
                if (name.substring(0, 18).toLowerCase() == "botaotemplate_hora") {
                    var cor = e.data[replaceAllNoCase(name, "botaotemplate_", "")];
                    if (cor) {
                        var dadosAtendimento = cor.split("|")[2];
                        cor = cor.split("|")[0];
                        if (!String.IsNullOrWhiteSpace(cor)) {
                            e.cellElement.css("background-color", cor);
                            e.cellElement.css("color", cor);
                            e.cellElement.addClass("botaoFull");
                            if (!String.IsNullOrWhiteSpace(dadosAtendimento)) {
                                $(e.cellElement).find("input").attr("title", dadosAtendimento);
                            }
                        }
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.verificarCamposPreenchidos = function () {
        if (DiffDays(this.txtData.Date, Date.now()) > 1) {
            MostrarAlerta("Não é possível realizar agendamento para uma data retroativa");
            return false;
        }
        if (!this.cboOrdenacao.GetValue() || !this.cboEstado.GetValue() || !this.cboCidade.GetValue() || !this.txtData.Date || !this.cboPeriodo.GetValue() || !this.cboPreferencial.GetValue())
            return false;
        if (!this.EntityTela.Cod_Animal || this.EntityTela.Cod_Animal <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Código do Animal");
            return false;
        }
        if (!this.Servicos || this.Servicos.length == 0) {
            MostrarAlerta("Informe ao menos um serviço");
            return false;
        }
        if (this.cboPreferencial.GetValue() == "S" && this.txtProfissionalPreferencial.GetText().CNum() == 0) {
            MostrarAlerta("Informe o profissional preferencial");
            return false;
        }
        return true;
    };
    C_AgeAni.prototype.criarGradeServicos = function (isPago) {
        var _this = this;
        try {
            var parametros = {
                isPago: isPago
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("CriarGridServicos", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grdServicos.Grid.Colunas = retorno.ColunasGrade;
                    _this.grdServicos.Grid.TotalizacoesColunas = retorno.Totalizacoes;
                    _this.grdServicos.Grid.AlturaGrade = 300;
                    _this.grdServicos.Grid.ExibirLinhaFiltro = false;
                    _this.grdServicos.Grid.iniciarGrid();
                    if (isPago) {
                        _this.grdServicos.btnAdiconar.Visible = false;
                        _this.txtServico.ReadOnly = true;
                    }
                    else {
                        _this.grdServicos.btnAdiconar.Visible = true;
                        _this.txtServico.ReadOnly = false;
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
            fecharEspera();
        }
    };
    C_AgeAni.prototype.criarGradeValores = function (Entidade) {
        var _this = this;
        try {
            var isPago = void 0;
            if (Entidade.IsPago) {
                this.tipoDesconto = 0;
                isPago = true;
            }
            else {
                isPago = false;
            }
            var parametros = {
                cliente: Entidade.Cod_Proprietario,
                clubz: this.IsConvenioProprio(Entidade.Convenio),
                codDesconto: this.tipoDesconto,
                codEmpresa: Entidade.Empresa,
                isPago: isPago,
                linhaAgendamento: this.linhaAgendamento()
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("CriarGridValores", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grdValores.Grid.Colunas = retorno.ColunasGrade;
                    _this.grdValores.Grid.TotalizacoesColunas = retorno.Totalizacoes;
                    _this.grdValores.Grid.AlturaGrade = 300;
                    _this.grdValores.Grid.ExibirLinhaFiltro = false;
                    if (Entidade.IsPago) {
                        _this.grdValores.Grid.PermitirEditarGrid = false;
                    }
                    else {
                        _this.grdValores.Grid.PermitirEditarGrid = true;
                    }
                    _this.grdValores.Grid.iniciarGrid();
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
            fecharEspera();
        }
    };
    C_AgeAni.prototype.CarregarServicosAgendamento = function () {
        try {
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.RelacaoAgendaByServico = function () {
        var _this = this;
        try {
            var dt;
            dt = this.txtData.Date;
            dt.setHours(12);
            var arrservicos = [];
            var empresa = 0;
            var codAgendamento = 0;
            if (this.isReagendamento) {
                empresa = this.EntityTela.Empresa;
                if (this.EntityTela.IsPago) {
                    codAgendamento = this.EntityTela.Codigo;
                }
            }
            this.Servicos.forEach(function (s) {
                if (!s.Concluido) {
                    arrservicos.push(s.Servico_Codigo);
                }
            });
            abrirEspera("");
            var tipoProfissional = void 0;
            if (this.linhaAgendamento() == 12) {
                tipoProfissional = 1;
            }
            else {
                tipoProfissional = 2;
            }
            var parametros = {
                data: dt,
                servicos: arrservicos,
                codProfissional: this.txtProfissionalPreferencial.GetText().CNum(),
                uf: this.cboEstado.GetText(),
                cidade: this.cboCidade.GetText(),
                tipoProfissional: tipoProfissional,
                periodo: this.cboPeriodo.GetValue(),
                codCliente: this.txtPet.TextBoxProprietario.GetText().CNum(),
                filtro: this.cboOrdenacao.GetValue(),
                empresaCodigo: empresa,
                codAgendamento: codAgendamento,
                linhaAgendamento: this.linhaAgendamento()
            };
            this.ExecutarFuncaoServerSideAsynch("RelacaoAgendaByServico", parametros, function (d) {
                try {
                    fecharEspera();
                    _this.AgendaByServico = true;
                    var retorno = GetRetornoAJAX(d);
                    if (!retorno || retorno.Dados.length == 0) {
                        MostrarAlerta("Nenhuma loja disponível para este atendimento");
                    }
                    else {
                        _this.grdUnidades.Colunas = retorno.ColunasGrade;
                        _this.grdUnidades.TotalizacoesColunas = retorno.Totalizacoes;
                        _this.grdUnidades.AlturaGrade = 300;
                        _this.grdUnidades.ExibirLinhaFiltro = false;
                        _this.grdUnidades.iniciarGrid();
                        _this.grdUnidades.PreencherGrid(retorno.Dados);
                        _this.ConfigurarGrade();
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
        catch (e) {
            fecharEspera();
            LogarException(e);
        }
    };
    C_AgeAni.prototype.RelacaoAgenda = function () {
        var _this = this;
        this.AgendaByServico = false;
        var dt;
        dt = this.txtData.Date;
        dt.setHours(12);
        var arrservicos = [];
        this.Servicos.forEach(function (s) {
            if (!s.Concluido) {
                arrservicos.push(s.Servico_Codigo);
            }
        });
        var tipoProfissional;
        if (this.linhaAgendamento() == 12) {
            tipoProfissional = 1;
        }
        else {
            tipoProfissional = 2;
        }
        var parametros = {
            data: dt,
            servicos: arrservicos,
            codProfissional: this.txtProfissionalPreferencial.GetText().CNum(),
            uf: this.cboEstado.GetText(),
            cidade: this.cboCidade.GetText(),
            tipoProfissional: tipoProfissional,
            periodo: this.cboPeriodo.GetValue(),
            codCliente: this.txtPet.TextBoxProprietario.GetText().CNum(),
            filtro: this.cboOrdenacao.GetValue(),
            linhaAgendamento: this.linhaAgendamento()
        };
        this.ExecutarFuncaoServerSideAsynch("RelacaoAgenda", parametros, function (d) {
            try {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (!retorno || retorno.Dados.length == 0) {
                    if (_this.Servicos.length == 1) {
                        MostrarAlerta("Nenhuma loja disponível para este atendimento");
                    }
                    else {
                        MsgBoxJS("Nenhum profissional encontrado, o sistema irá pesquisar por profissionais diferentes", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, function (result) {
                            _this.RelacaoAgendaByServico();
                        });
                    }
                }
                else {
                    _this.grdUnidades.Colunas = retorno.ColunasGrade;
                    _this.grdUnidades.TotalizacoesColunas = retorno.Totalizacoes;
                    _this.grdUnidades.AlturaGrade = 300;
                    _this.grdUnidades.ExibirLinhaFiltro = false;
                    _this.grdUnidades.iniciarGrid();
                    _this.grdUnidades.PreencherGrid(retorno.Dados);
                    _this.ConfigurarGrade();
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
        abrirEspera("");
    };
    C_AgeAni.prototype.GerarGradeUnidades = function (s, e) {
        e.processOnServer = false;
        try {
            this.grdUnidades.PreencherGrid(null);
            if (!this.verificarCamposPreenchidos()) {
                return;
            }
            //Caso não for NULL eu volto ele para null
            if (this.horaAtendimento) {
                this.horaAtendimento = null;
            }
            this.horasAtendimento = [];
            if (ValoresSismoura.ConfiguracoesPetshop.Limite_Tempo_Agendamento) {
                if (DiffDays(Date.now(), this.txtData.Date) > ValoresSismoura.ConfiguracoesPetshop.Limite_Tempo_Agendamento) {
                    MostrarAlerta("Não é possível realizar agendamentos para mais de " + ValoresSismoura.ConfiguracoesPetshop.Limite_Tempo_Agendamento + " dias.");
                    return;
                }
            }
            if (!this.isReagendamento) {
                this.RelacaoAgenda();
            }
            else {
                this.RelacaoAgendaByServico();
            }
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    C_AgeAni.prototype.BuscarUnidadeSelecionada = function () {
        var _this = this;
        try {
            if (!this.verificarCamposPreenchidos()) {
                return;
            }
            //Caso não for NULL eu volto ele para null
            if (this.horaAtendimento) {
                this.horaAtendimento = null;
            }
            this.horasAtendimento = [];
            if (ValoresSismoura.ConfiguracoesPetshop.Limite_Tempo_Agendamento) {
                if (DiffDays(Date.now(), this.txtData.Date) > ValoresSismoura.ConfiguracoesPetshop.Limite_Tempo_Agendamento) {
                    MostrarAlerta("Não é possível realizar agendamentos para mais de " + ValoresSismoura.ConfiguracoesPetshop.Limite_Tempo_Agendamento + " dias.");
                    return;
                }
            }
            this.AgendaByServico = false;
            var dt;
            dt = this.txtData.Date;
            dt.setHours(12);
            var arrservicos = [];
            for (var i = 0; i < this.Servicos.length; i++) {
                arrservicos.push(this.Servicos[i].Servico_Codigo);
            }
            var hora_1 = null;
            this.AgendaByServico = true;
            this.Servicos.forEach(function (s) {
                if (hora_1 == null) {
                    hora_1 = s.Previsao;
                }
                else if (hora_1 != s.Previsao) {
                    _this.AgendaByServico = false;
                }
            });
            if (!this.AgendaByServico) {
                var parametros = {
                    data: dt,
                    servicos: arrservicos,
                    codProfissional: this.Servicos[0].Profissional_Codigo,
                    uf: this.cboEstado.GetText(),
                    cidade: this.cboCidade.GetText(),
                    tipoProfissional: 1,
                    periodo: this.cboPeriodo.GetValue(),
                    codCliente: this.txtPet.TextBoxProprietario.GetText().CNum(),
                    filtro: this.cboOrdenacao.GetValue(),
                    codAgendamento: 0
                };
                this.ExecutarFuncaoServerSideAsynch("RelacaoAgenda", parametros, function (d) {
                    try {
                        fecharEspera();
                        var retorno = GetRetornoAJAX(d);
                        _this.grdUnidades.Colunas = retorno.ColunasGrade;
                        _this.grdUnidades.TotalizacoesColunas = retorno.Totalizacoes;
                        _this.grdUnidades.AlturaGrade = 300;
                        _this.grdUnidades.iniciarGrid();
                        _this.grdUnidades.PreencherGrid(retorno.Dados);
                        _this.ConfigurarGrade();
                    }
                    catch (ex) {
                        fecharEspera();
                        LogarException(ex);
                    }
                }, function (erro) {
                    fecharEspera();
                    LogarExceptionAjax(erro);
                }, this);
                abrirEspera("");
            }
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    C_AgeAni.prototype.ConfigurarGrade = function () {
        this.grdUnidades.FixarColuna("Servico", true);
        this.grdUnidades.FixarColuna("Fantasia", true);
        if (this.isByServico) {
            this.grdUnidades.GroupBy("Servico");
        }
        this.grdUnidades.GroupBy("Fantasia");
    };
    C_AgeAni.prototype.FuncaoSort = function (data) {
        var retorno;
        if (this.txtPet.TextBoxProprietario.GetText().CNum() > 0) {
            retorno = "##" + Right(new Array(20).join("0") + data.Distancia_Empresa, 20) + "|" + data.Fantasia;
        }
        else {
            retorno = "|" + data.Fantasia;
        }
        return retorno;
    };
    C_AgeAni.prototype.FuncaoCustomText = function (data) {
        var valor = data.valueText;
        if (!String.IsNullOrWhiteSpace(valor)) {
            return ("" + valor).split("|")[1];
        }
        else {
            return "";
        }
    };
    C_AgeAni.prototype.PreencherServicos = function (entidade) {
        try {
            if (!entidade.Servicos) {
                entidade.Servicos = [];
            }
            var servicosExistentes = entidade.Servicos;
            entidade.Servicos = [];
            var lista = void 0;
            var escolheuUnidade_1;
            if (entidade.AgendamentoNaoFinalizado) {
                if (this.Confirmacoes && this.Confirmacoes.length > 0) {
                    lista = this.Confirmacoes;
                    escolheuUnidade_1 = true;
                }
                else if (this.Valores && this.Valores.length > 0) {
                    lista = this.Valores;
                }
                else if (this.Servicos && this.Servicos.length > 0) {
                    lista = this.Servicos;
                }
            }
            else {
                lista = this.Confirmacoes;
                escolheuUnidade_1 = true;
            }
            lista.forEach(function (servicoGrid) {
                var novoServico = {};
                servicosExistentes.forEach(function (q) {
                    if (q.Codigo && q.Codigo > 0 && q.Codigo == servicoGrid.Codigo) {
                        novoServico = q;
                    }
                });
                novoServico.VacinaAgendada = servicoGrid.VacinaAgendada;
                novoServico.Tipo_Desconto = servicoGrid.Tipo_Desconto;
                novoServico.Codigo = servicoGrid.Codigo;
                novoServico.Cod_Animal = entidade.Cod_Animal;
                novoServico.Concluido = servicoGrid.Concluido;
                novoServico.Desconto = servicoGrid.Desconto;
                novoServico.Finalizado = false;
                novoServico.Qtde = servicoGrid.Quantidade;
                novoServico.Servico = servicoGrid.Servico_Codigo;
                novoServico.Usuario = ValoresSismoura.UsuarioLogado;
                novoServico.Desconto_Porcentagem = servicoGrid.Desconto_Porcentagem;
                novoServico.Lista_Preco = servicoGrid.Lista_Preco;
                if (escolheuUnidade_1) {
                    var dt;
                    dt = servicoGrid.Data.FormataData().ToDate();
                    dt.setHours(12);
                    novoServico.Data = dt;
                    novoServico.Valor = servicoGrid.Servico_Valor;
                    novoServico.Empresa = servicoGrid.Empresa_Codigo;
                    if (!servicoGrid.Hora) {
                        novoServico.Hora_Servico = "";
                    }
                    else {
                        novoServico.Hora_Servico = servicoGrid.Hora;
                    }
                }
                else {
                    novoServico.Empresa = 0;
                    novoServico.Hora_Servico = "";
                    novoServico.Valor = servicoGrid.Total;
                }
                novoServico.Codigo_Autorizacao_Plano = servicoGrid.Codigo_Autorizacao_Plano;
                novoServico.Lista_Preco = servicoGrid.Lista_Preco;
                novoServico.Valor_Repasse_Prestador = servicoGrid.Valor_Repasse_Prestador;
                if (servicoGrid.Profissional_Codigo) {
                    novoServico.Profi1 = servicoGrid.Profissional_Codigo;
                }
                entidade.Servicos.push(novoServico);
            });
            this.adicionarCamposComputadosAtendimento(entidade);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.adicionarCamposComputadosAtendimento = function (atendimento) {
        if (atendimento.__lookupGetter__("Valor_Total") == undefined) {
            atendimento.Valor_Total = undefined;
            atendimento.__defineGetter__("Valor_Total", function () {
                var valorTotal = 0.0;
                if (atendimento.Servicos) {
                    for (var x = 0; x < atendimento.Servicos.length; x++) {
                        valorTotal += (atendimento.Servicos[x].Valor * atendimento.Servicos[x].Qtde) - atendimento.Servicos[x].Desconto;
                    }
                }
                if (atendimento.Produtos) {
                    for (var x = 0; x < atendimento.Produtos.length; x++) {
                        valorTotal += (atendimento.Produtos[x].Valor_Unitario * atendimento.Produtos[x].Qtde) - atendimento.Produtos[x].Desconto;
                    }
                }
                return valorTotal;
            });
            atendimento.__defineSetter__("Valor_Total", function (val) {
            });
        }
    };
    C_AgeAni.prototype.ValidarAntesGravar = function (agendamentoNaoFinalizado) {
        var _this = this;
        if (agendamentoNaoFinalizado) {
            if (!this.EntityTela.Cod_Proprietario || this.EntityTela.Cod_Proprietario == 0) {
                this.Limpar();
                return false;
            }
            if (!this.EntityTela.Cod_Animal || this.EntityTela.Cod_Animal == 0) {
                this.Limpar();
                return false;
            }
            if (!this.Servicos || this.Servicos.length == 0) {
                this.Limpar();
                return false;
            }
        }
        else {
            if (!this.Servicos || this.Servicos.length == 0) {
                MostrarAlerta("É necessário informar ao menos um serviço antes de finalizar o agendamento");
                return false;
            }
            if (!this.Valores || this.Valores.length == 0) {
                MostrarAlerta("É necessário precificar os serviços antes de finalizar o agendamento");
                return false;
            }
            if (!this.Confirmacoes || this.Confirmacoes.length == 0) {
                MostrarAlerta("É necessário confirmar os serviços antes de finalizar o agendamento");
                return false;
            }
        }
        var entidade = this.GetScope().Entity;
        //entidade.NaoVerificarEscala = true;
        entidade.AgendamentoNaoFinalizado = agendamentoNaoFinalizado;
        this.PreencherServicos(entidade);
        var parametros = {};
        if (this.ParametrosTela.Codigo_Sala) {
            entidade.Codigo_Sala = this.ParametrosTela.Codigo_Sala;
        }
        if (this.ParametrosTela.Motivo_Reagendamento) {
            entidade.Motivo_Reagendamento = this.ParametrosTela.Motivo_Reagendamento;
        }
        if (this.ParametrosTela.Atendimento_Reagendamento) {
            entidade.Atendimento_Reagendamento = this.ParametrosTela.Atendimento_Reagendamento;
        }
        if (this.ParametrosTela.Sala_Descricao) {
            entidade.Sala_Descricao = this.ParametrosTela.Sala_Descricao;
        }
        if (this.cboPreferencial.GetValue() == "S") {
            entidade.IsAgendamentoPreferencial = true;
        }
        else {
            entidade.IsAgendamentoPreferencial = false;
        }
        if (!agendamentoNaoFinalizado) {
            if (entidade.Cod_Hospedagem_Servico > 1) {
                MostrarAlerta("Esse atendimento foi gerado em uma hospedagem, portanto não será permitido nenhuma alteração");
                return false;
            }
            if (entidade.Cod_Internacao_Servico > 0 || entidade.Cod_Internacao_Produto > 0) {
                MostrarAlerta("Esse atendimento foi gerado em uma internação, portanto não será permitido nenhuma alteração.");
                return false;
            }
            if (entidade.Servicos) {
                if (entidade.Servicos.length > 0) {
                    entidade.Servicos.forEach(function (serv) {
                        parametros = {
                            Data: serv.Data,
                            Previsao: serv.Hora_Servico,
                            Profissional: ("" + serv.Profi1).CNum(),
                            Proprietario: ("" + _this.GetScope().Entity.Cod_Proprietario).CNum()
                        };
                        if (_this.ExecutarFuncaoServerSideSynch("VerificaHorarioDisponivel", parametros) == true) {
                            MsgBoxJS("Já existe um agendamento com o profissional selecionado para o(s) serviço(s) informado(s) ! Não será possível realizar o agendamento.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
                            return false;
                        }
                    });
                }
                if (this.servicosAgenda) {
                    if (this.servicosAgenda.length > 0) {
                        MostrarAlerta("Ainda falta serviços lançados para serem adicionados");
                        return false;
                    }
                }
            }
        }
        if (this.Confirmacoes && this.Confirmacoes.length > 0) {
            if (this.txtCodigo.GetText().CNum() == 0) {
                if (this.AgendaByServico) {
                    entidade.Empresa = ("" + this.horasAtendimento[0].data['Codigo_Empresa']).CNum();
                    entidade.Data = ("" + this.horasAtendimento[0].data['Data_Atendimento']).ToDate();
                }
                else {
                    entidade.Empresa = ("" + this.horaAtendimento.data['Codigo_Empresa']).CNum();
                    entidade.Data = ("" + this.horaAtendimento.data['Data_Atendimento']).ToDate();
                }
            }
        }
        entidade.Encaminhamento = false;
        if (this.accEncaminhamento.Visible) {
            entidade.Encaminhamento = true;
        }
        if (entidade.Encaminhamento) {
            entidade.EntidadeEncaminhamento = {};
            entidade.EntidadeEncaminhamento = this.Encaminhamento;
        }
        return true;
    };
    C_AgeAni.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        return this.ValidarAntesGravar(false);
    };
    C_AgeAni.prototype.VerificarVacinasPendentes = function () {
        try {
            var pendentes;
            var parametros;
            parametros = {
                codigoAnimal: this.GetScope().Entity.Cod_Animal
            };
            pendentes = this.ExecutarFuncaoServerSideSynch("GetVacinasPendentesDeAgendar", parametros);
            if (pendentes && pendentes.length > 0) {
                this.GetScope()["Pendentes"] = pendentes;
                this.dlgVacinasAgendadas.Show();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.VerificarEnviarSMSDepoisGravar = function () {
        try {
            var parametros;
            parametros = {
                codigoAtendimento: this.GetScope().Entity.Codigo
            };
            var pessoaEnviarSms = this.ExecutarFuncaoServerSideSynch("VerificarEnviarSMSDepoisGravar", parametros);
            if (pessoaEnviarSms) {
                this.EnvioSms.AbrirClient(ValoresSismoura.NomeTela, ["55" + pessoaEnviarSms.Celular.replace(" ", "").replace("-", "")]);
            }
            else {
                if (!this.selecionouAgendamento) {
                    this.VerificarVacinasPendentes();
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.VerificarEnviarSMSDepoisGravar();
        if (this.EntityTela.Encaminhamento) {
            //this.chkEncaminhamento.Enabled = false;
            this.cboEncaminhamento.Enabled = false;
            if (this.EntityTela.EntidadeEncaminhamento) {
                //this.HabilitarAbaEncaminhamento(true);         
                this.AlterarVisibleEncaminhamento(true);
                this.HabilitarTipoEncaminhamento(this.EntityTela.EntidadeEncaminhamento.Tipo_Encaminhamento);
                this.Encaminhamento = this.EntityTela.EntidadeEncaminhamento;
                this.GetScope().$applyAsync();
            }
        }
        var parametros = {
            codAgendamento: this.EntityTela.Codigo
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("EnviarEmail", parametros);
        if (retorno) {
            MostrarMensagem("Email enviado com sucesso");
        }
        //MsgBoxJS("Script recepcionista",
        //    MsgBoxOptions.OkOnly,
        //    MsgBoxIcon.Info,
        //    (result: MsgBoxResultEventArgs) => {
        //        let parametros: any = {
        //            codAgendamento: this.EntityTela.Codigo
        //        };
        //        let retorno = this.ExecutarFuncaoServerSideSynch("EnviarEmail", parametros)
        //        if (retorno) {
        //            MostrarMensagem("Email enviado com sucesso");
        //        }
        //    });
        return true;
    };
    C_AgeAni.prototype.OnClicouBotaoLinhaServico = function (s, e) {
        try {
            if (!e.data) {
                return;
            }
            var item = e.data;
            if (e.commandName == "informacoes_gerais") {
                this.AbrirIGServico(item.Servico_Codigo, this.txtPet.TextBoxAnimal.GetText().CNum(), true);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnClicouBotaoLinhaServicoConfirmacao = function (s, e) {
        try {
            if (!e.data) {
                return;
            }
            var item = e.data;
            if (e.commandName == "informacoes_gerais") {
                this.AbrirIGServico(item.Servico_Codigo, this.txtPet.TextBoxAnimal.GetText().CNum(), true);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.OnDepoisBuscarExistente = function (Entidade) {
        var _this = this;
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            this.grdServicos.btnAdiconar.Visible = true;
            this.txtServico.ReadOnly = false;
            this.btnImprimir.Visible = true;
            this.btnCancelamento.Visible = false;
            if (Entidade.Operador == null || Entidade.Operador == undefined || Entidade.Operador == "") {
                Entidade.Operador = "";
            }
            if (!Entidade.Servicos) {
                Entidade.Servicos = [];
            }
            if (!Entidade.Produtos) {
                Entidade.Produtos = [];
            }
            var parametros = {
                codigoAtendimento: Entidade.Codigo
            };
            if (Entidade.Encaminhamento) {
                this.cboEncaminhamento.Enabled = false;
                if (Entidade.EntidadeEncaminhamento) {
                    this.cboEncaminhamento.SetValue(Entidade.EntidadeEncaminhamento.Tipo_Encaminhamento);
                    this.AlterarVisibleEncaminhamento(true);
                    this.HabilitarTipoEncaminhamento(Entidade.EntidadeEncaminhamento.Tipo_Encaminhamento);
                    this.Encaminhamento = Entidade.EntidadeEncaminhamento;
                    this.GetScope().$applyAsync();
                }
            }
            this.perguntouAdicionarServicoDuplicado = false;
            //this.VerificarStatusPagamentoAPP(Entidade);            
            var InformacoesAdicionais = this.ExecutarFuncaoServerSideSynch("GetInformacoesAdicionaisAtendimento", parametros);
            this.Servicos = InformacoesAdicionais.Servicos;
            this.tipoDesconto = 0;
            this.Servicos.forEach(function (s) {
                _this.tipoDesconto = s.Tipo_Desconto;
            });
            this.criarGradeValores(Entidade);
            this.Valores = InformacoesAdicionais.Valores;
            this.Confirmacoes = InformacoesAdicionais.Confirmacoes;
            this.grdConfirmacao.PreencherGrid(this.Confirmacoes);
            Entidade.Checklist_Itens = InformacoesAdicionais.CheckLists;
            //this.lblZanthus.Text = Entidade.Status_Envio_Zanthus_Text;
            if (InformacoesAdicionais.PertenceEmpresa) {
                MostrarMensagem("Usuário não pertence a empresa do atendimento!");
                this.Limpar();
                return;
            }
            if (InformacoesAdicionais.IsFromExame) {
                MostrarAlerta("Este atendimento é um Exame!");
                this.Limpar();
                return;
            }
            if (Entidade.Cod_Hospedagem_Servico > 1) {
                MostrarAlerta("Esse atendimento foi gerado em uma hospedagem, portanto não será permitido nenhuma alteração");
            }
            if (Entidade.Cod_Internacao_Servico > 0 || Entidade.Cod_Internacao_Produto > 0) {
                MostrarAlerta("Esse atendimento foi gerado em uma internação, portanto não será permitido nenhuma alteração.");
            }
            if ((InformacoesAdicionais.CodigoVenda && InformacoesAdicionais.CodigoVenda > 1) || Entidade.Pagamento_Status_Stoom > 0) {
                this.AlterarCamposAtendimentoPago(true);
            }
            else {
                this.AlterarCamposAtendimentoPago(false);
            }
            if (InformacoesAdicionais.IsIntegradoZanthus) {
                this.AlterarCamposAtendimentoPago(true);
            }
            else if (Entidade.isCortesia) {
                //this.btnZanthus.Visible = false;
                //this.btnCortesia.Visible = false;
                //this.lblCortesia.Visible = true;
                var parametros_2 = {
                    codHospedagem: Entidade.Hospedagem
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("PodeAlterarAtendimentoHospedagem", parametros_2);
                if (!retorno) {
                    this.AlterarCamposAtendimentoPago(true);
                    //this.lblZanthus.Text = "Atendimento de Cortesia";
                }
            }
            this.CorrigirTextoBotaoZanthus();
            if (this.isReagendamento) {
                this.Valores = [];
                this.Confirmacoes = [];
                this.grdConfirmacao.PreencherGrid(null);
                if (this.empresa) {
                    this.AlterarCamposUnidades(true, this.empresa.Fantasia);
                }
                this.RefreshAngular();
            }
            else {
                this.AlterarCamposUnidades(true, this.Confirmacoes[0].Empresa_Descricao);
            }
            this.criarGradeServicos(Entidade.IsPago);
            if (!this.isReagendamento) {
                this.accCadastro.SetExpanded(true);
                this.accServicos.SetExpanded(false);
                this.accUnidades.SetExpanded(false);
                this.accConfirmacao.SetExpanded(true);
                this.accEncaminhamento.SetExpanded(false);
                this.accValores.SetExpanded(false);
            }
            if (Entidade.Encaminhamento) {
                this.ExibirEncaminhamento();
                this.alterarEncaminhamento(this.Encaminhamento.Tipo_Encaminhamento);
            }
            if (Entidade.IsPago) {
                this.habilitarCampos(false);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgeAni.prototype.AlterarCamposUnidades = function (flag, empresa) {
        this.lblEmpresa.Visible = flag;
        this.lblEmpresa.Text = empresa;
        this.cboEstado.Enabled = !flag;
        this.cboCidade.Enabled = !flag;
        this.cboOrdenacao.Enabled = !flag;
        if (this.isReagendamento == false) {
            this.txtData.Enabled = !flag;
            this.cboPeriodo.Enabled = !flag;
            this.cboPreferencial.Enabled = !flag;
            this.btnBuscar.SetEnabled(!flag);
            this.grdUnidades.Enabled = !flag;
        }
    };
    return C_AgeAni;
}(MouraPageCadastroAngular));
var c_AgeAni = new C_AgeAni();
//# sourceMappingURL=C_AgeAni.js.map