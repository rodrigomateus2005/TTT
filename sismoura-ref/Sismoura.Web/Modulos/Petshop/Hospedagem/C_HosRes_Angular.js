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
var RetornoValidacaoAtendimento = /** @class */ (function () {
    function RetornoValidacaoAtendimento() {
    }
    return RetornoValidacaoAtendimento;
}());
var C_HosRes_Angular = /** @class */ (function (_super) {
    __extends(C_HosRes_Angular, _super);
    function C_HosRes_Angular() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FLAG_GRID_BAIAS_ONALTEROU = false;
        _this.PATH_DOCUMENTOS_RESERVA = "~/Documentos/Hospedagem/Reserva";
        _this.validouInformacoesReserva = false;
        _this.verificadoAutorizacaoDescontoHospedagem = false;
        _this.enviarEmailPagamentoDepoisGravar = false;
        return _this;
    }
    Object.defineProperty(C_HosRes_Angular.prototype, "hdnConfigPET", {
        get: function () {
            return $('#hdnConfigPET')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "ConfiguracoesPET", {
        get: function () {
            if (this.hdnConfigPET && !String.IsNullOrWhiteSpace(this.hdnConfigPET.value)) {
                return JSON.parse(DecodeTextoJSON(this.hdnConfigPET.value));
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "IsIntegracaoZanthus", {
        get: function () {
            if (this.ConfiguracoesPET) {
                return this.ConfiguracoesPET.Integracao_Zanthus;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "GetHorarioCheckin", {
        get: function () {
            if (this.ConfiguracoesPET) {
                return this.ConfiguracoesPET.Hospedagem_Checkin;
            }
            else {
                return "";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "GetHorarioCheckout", {
        get: function () {
            if (this.ConfiguracoesPET) {
                return this.ConfiguracoesPET.Hospedagem_Checkout;
            }
            else {
                return "";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "GetProfissionalDiaria", {
        get: function () {
            if (this.ConfiguracoesPET) {
                return this.ConfiguracoesPET.Profissional_Utilizar_Diaria_Hospedagem;
            }
            else {
                return;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "hdnEsperaReserva", {
        get: function () {
            return $("#hdnEsperaReserva")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "hdnServicosHospedagem", {
        get: function () {
            return $("#hdnServicosHospedagem")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "lblSituacaoHospedagem", {
        get: function () {
            return window['lblSituacaoHospedagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "lblSituacaoPagamento", {
        get: function () {
            return window['lblSituacaoPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "lblModalEsperaInformacoes", {
        get: function () {
            return window['lblModalEsperaInformacoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "btnHospedagem", {
        get: function () {
            return window['btnHospedagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "btnEmail", {
        get: function () {
            return window['btnEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "btnEnviarEmailPagamento", {
        get: function () {
            return window['btnEnviarEmailPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "btnEsperaReserva", {
        get: function () {
            return window['btnEsperaReserva_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "btnCancelarReserva", {
        get: function () {
            return window['btnCancelarReserva_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "cboBaia", {
        get: function () {
            return window['cboBaia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "cboTamanhoBaia", {
        get: function () {
            return window['cboTamanhoBaia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "btnModalEsperaConfirmar", {
        get: function () {
            return window['btnModalEsperaConfirmar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "btnModalEsperaCancelar", {
        get: function () {
            return window['btnModalEsperaCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "txtLocalHospedagem", {
        get: function () {
            return window['txtLocalHospedagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "Baias", {
        get: function () {
            return this.GetScope()["Baias"];
        },
        set: function (value) {
            this.GetScope()["Baias"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "optTipoHospedagem", {
        get: function () {
            return window['optTipoHospedagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "txtFuncionario", {
        get: function () {
            return window['txtFuncionario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "dlgAdicionarEspera", {
        get: function () {
            return window['dlgAdicionarEspera_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "dlgMotivoCancelamento", {
        get: function () {
            return window['dlgMotivoCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "txtMdlMotivoCanc", {
        get: function () {
            return window['txtMdlMotivoCanc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "btnMldMotivoCancConfirmar", {
        get: function () {
            return window['btnMldMotivoCancConfirmar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "btnMldMotivoCancCancelar", {
        get: function () {
            return window['btnMldMotivoCancCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "lstSemana", {
        get: function () {
            return window['lstSemana_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "grdCheckListItens", {
        get: function () {
            return window['grdCheckListItens_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "txtCheckListProcura", {
        get: function () {
            return window['txtCheckListProcura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "txtProfissionalCheckList", {
        get: function () {
            return window['txtProfissionalCheckList_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "txtCheckList", {
        get: function () {
            return window['txtCheckList_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "btnImprimirCheckList", {
        get: function () {
            return window['btnImprimirCheckList_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "sgnCheckList", {
        get: function () {
            return window['sgnCheckList_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "btnAssinatura", {
        get: function () {
            return window['btnAssinatura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "dlgIndicarParceiro", {
        get: function () {
            return window['dlgIndicarParceiro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "gridIndicacao", {
        get: function () {
            return window['gridIndicacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "btnDlgIndicacaoConfirmar", {
        get: function () {
            return window['btnDlgIndicacaoConfirmar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "btnDlgIndicacaoCancelar", {
        get: function () {
            return window['btnDlgIndicacaoCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "lblModalIndicacaoInformacoes", {
        get: function () {
            return window['lblModalIndicacaoInformacoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "btnIndicarParceiro", {
        get: function () {
            return window['btnIndicarParceiro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "lblQtdeDias", {
        get: function () {
            return window['lblQtdeDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "lblDias2", {
        get: function () {
            return window['lblDias2_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "cboServicoDiaria", {
        get: function () {
            return window['cboServicoDiaria_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "btnRecalcularDiarias", {
        get: function () {
            return window['btnRecalcularDiarias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "grdDiarias", {
        get: function () {
            return window['grdDiarias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "grdAtendimentos", {
        get: function () {
            return window['grdAtendimentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "Atendimentos", {
        get: function () {
            return this.GetScope()["Atendimentos"];
        },
        set: function (value) {
            this.GetScope()["Atendimentos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "ServicosDiarias", {
        get: function () {
            return this.GetScope()["ServicosDiarias"];
        },
        set: function (value) {
            this.GetScope()["ServicosDiarias"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "Diarias", {
        get: function () {
            return this.GetScope()["Diarias"];
        },
        set: function (value) {
            this.GetScope()["Diarias"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "Diaria", {
        get: function () {
            return this.GetScope()["Diaria"];
        },
        set: function (value) {
            this.GetScope()["Diaria"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "DiasSemana", {
        get: function () {
            return this.GetScope()['DiasSemana'];
        },
        set: function (values) {
            this.GetScope()['DiasSemana'] = values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "cboMeioPagamento", {
        get: function () {
            return window['cboMeioPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "AtendimentoExcluido", {
        get: function () {
            return this.GetScope()["AtendimentoExcluido"];
        },
        set: function (value) {
            this.GetScope()["AtendimentoExcluido"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "DiariasExcluidas", {
        get: function () {
            return this.GetScope()["DiariasExcluidas"];
        },
        set: function (value) {
            this.GetScope()["DiariasExcluidas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "DiariaCalculada", {
        get: function () {
            return this.GetScope()["DiariaCalculada"];
        },
        set: function (value) {
            this.GetScope()["DiariaCalculada"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "txtDescontoDiaria", {
        get: function () {
            return window['txtDescontoDiaria_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosRes_Angular.prototype, "txtDescontoPorcentDiaria", {
        get: function () {
            return window['txtDescontoPorcentDiaria_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_HosRes_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnHospedagem) {
            adicionarEventoMoura(this.btnHospedagem.Click, this.OnBtnHospedagemClick, this);
        }
        if (this.btnCancelarReserva) {
            adicionarEventoMoura(this.btnCancelarReserva.Click, this.OnbtnCancelarReserva, this);
        }
        if (this.btnEmail) {
            adicionarEventoMoura(this.btnEmail.Click, this.OnbtnEmail, this);
        }
        if (this.btnEnviarEmailPagamento) {
            adicionarEventoMoura(this.btnEnviarEmailPagamento.Click, this.OnbtnEnviarEmailPagamento, this);
        }
        if (this.txtPeriodo) {
            adicionarEventoDevExpress(this.txtPeriodo.textBoxCalendarioInicio.LostFocus, this.OnTxtDataEntradaLostFocus, this);
            adicionarEventoDevExpress(this.txtPeriodo.textBoxCalendarioFim.LostFocus, this.OnTxtDataSaidaLostFocus, this);
        }
        if (this.optTipoHospedagem) {
            adicionarEventoMoura(this.optTipoHospedagem.SelectionChanged, this.OnMudouOptTipoHospedagem, this);
        }
        if (this.txtPet && this.txtPet.TextBoxAnimal) {
            adicionarEventoMoura(this.txtPet.PesquisandoAnimal, this.OnPesquisandoAnimal, this);
            adicionarEventoMoura(this.txtPet.PesquisandoProprietario, this.OnPesquisandoProprietario, this);
        }
        if (this.txtLocalHospedagem) {
            adicionarEventoMoura(this.txtLocalHospedagem.Procurou, this.OnDepoisProcuraLocal, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.onMudouEmpresa, this);
        }
        if (this.cboBaia && this.cboBaia.Combo) {
            adicionarEventoDevExpress(this.cboBaia.Combo.SelectedIndexChanged, this.OnCboBaia_comboBoxChange, this);
            adicionarEventoDevExpress(this.cboBaia.Combo.GotFocus, this.OnCboBaiaGotFocus, this);
        }
        if (this.cboMeioPagamento && this.cboMeioPagamento.Combo) {
            adicionarEventoDevExpress(this.cboMeioPagamento.Combo.ValueChanged, this.OnCboMeioPagamento_ValueChange, this);
        }
        if (this.cboServicoDiaria && this.cboServicoDiaria.Combo) {
            adicionarEventoDevExpress(this.cboServicoDiaria.Combo.SelectedIndexChanged, this.OnCboServicoDiaria_SelectedIndexChanged, this);
        }
        if (this.btnEsperaReserva) {
            adicionarEventoMoura(this.btnEsperaReserva.Click, this.OnBtnEsperaReservaClick, this);
        }
        if (this.btnModalEsperaConfirmar) {
            adicionarEventoMoura(this.btnModalEsperaConfirmar.Click, this.OnConfirmarEsperaReserva, this);
        }
        if (this.btnModalEsperaCancelar) {
            adicionarEventoMoura(this.btnModalEsperaCancelar.Click, this.OnCancelarCriarEsperaReserva, this);
        }
        if (this.btnMldMotivoCancConfirmar) {
            adicionarEventoMoura(this.btnMldMotivoCancConfirmar.Click, this.onBtnMdlMotivoCancConfirmar, this);
        }
        if (this.btnMldMotivoCancCancelar) {
            adicionarEventoMoura(this.btnMldMotivoCancCancelar.Click, this.onBtnMdlMotivoCancCancelar, this);
        }
        if (this.sgnCheckList) {
            adicionarEventoMoura(this.sgnCheckList.Salvou, this.OnSalvouAssinatura, this);
        }
        if (this.btnAssinatura) {
            adicionarEventoMoura(this.btnAssinatura.Click, this.OnClickAssinatura, this);
        }
        if (this.btnImprimirCheckList) {
            adicionarEventoMoura(this.btnImprimirCheckList.Click, this.OnClickImprimirChecklist, this);
        }
        if (this.txtCheckListProcura) {
            adicionarEventoMoura(this.txtCheckListProcura.Procurou, this.OnTxtCheckListProcuraProcurou, this);
        }
        if (this.btnDlgIndicacaoConfirmar) {
            adicionarEventoMoura(this.btnDlgIndicacaoConfirmar.Click, this.onBtnDlgIndicacaoConfirmar, this);
        }
        if (this.btnDlgIndicacaoCancelar) {
            adicionarEventoMoura(this.btnDlgIndicacaoCancelar.Click, this.onBtnDlgIndicacaoCancelar, this);
        }
        if (this.btnIndicarParceiro) {
            adicionarEventoMoura(this.btnIndicarParceiro.Click, this.onBtnIndicarParceiro, this);
        }
        if (this.btnRecalcularDiarias) {
            adicionarEventoMoura(this.btnRecalcularDiarias.Click, this.onRecalcularDias, this);
        }
        if (this.grdDiarias) {
            adicionarEventoMoura(this.grdDiarias.Validando, this.OnValidandoAlteracaoDiaria, this);
            adicionarEventoMoura(this.grdDiarias.AlterandoItem, this.OnAlterandoDiaria, this);
            adicionarEventoMoura(this.grdDiarias.SetouItem, this.OnSetouItemDiaria, this);
        }
        if (this.grdAtendimentos) {
            adicionarEventoMoura(this.grdAtendimentos.SelecionouLinha, this.OnSelecionouAtendimentoGrid, this);
            adicionarEventoMoura(this.grdAtendimentos.ClickBotaoLinha, this.OnClickBotaoLinha, this);
        }
        if (this.lstSemana) {
            adicionarEventoMoura(this.lstSemana.SelectionChanged, this.OnLstSemanaItemChanged, this);
        }
        if (this.txtDescontoDiaria) {
            adicionarEventoMoura(this.txtDescontoDiaria.LostFocus, this.onTxtDescontoDiariaLostFocus, this);
        }
        if (this.txtDescontoPorcentDiaria) {
            adicionarEventoMoura(this.txtDescontoPorcentDiaria.LostFocus, this.onTxtDescontoPorcentDiaria, this);
        }
    };
    C_HosRes_Angular.prototype.OnSelecionouAtendimentoGrid = function (s, e) {
        try {
            var codAtendimento = ("" + e.data['Cod_Atendimento']).CNum();
            abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeAtendimento), "" + codAtendimento);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosRes_Angular.prototype.OnClickBotaoLinha = function (s, e) {
        var _this = this;
        if (this.GetScope().Entity && this.GetScope().Entity.Cancelada) {
            MostrarAlerta("A reserva está cancelada. Não será possível continuar com a operação.");
            return;
        }
        var codAtendimento = CNum(e.data['Cod_Atendimento']);
        if (e.commandName == "enviar_email_cobranca") {
            var valorTotalAtend = CNum(e.data['Valor_Total']);
            var parametros;
            parametros = {
                codAtendimento: codAtendimento,
                valorEnviar: valorTotalAtend
            };
            MsgBoxJS("Deseja enviar o email com o valor R$ " + valorTotalAtend + "?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                //Enviar o email com o valor do atendimento para pagamento.
            }, parametros);
        }
        else if (e.commandName == "integrar_atendimento_zanthus") {
            //Verifica se o pagamento já está autorizado.
            var parametros = {
                codAtendimento: codAtendimento
            };
            //Pagamento Online.
            if (this.GetScope().Entity && this.GetScope().Entity.Meio_Pagamento == 2 /* enLinkEmail */) {
                var pagamento = this.ExecutarFuncaoServerSideSynch("GetPagamentoByAtendimento", parametros);
                if (!pagamento || pagamento.Codigo == 0) {
                    MostrarAlerta("Não foi possível identificar o pagamento deste atendimento.");
                    return;
                }
                if (pagamento.Cancelado) {
                    MsgBoxJS("O Pagamento deste atendimento foi cancelado por que expirou o prazo para pagamento.", MsgBoxOptions.YesNo, MsgBoxIcon.Info);
                    return;
                }
                if (pagamento.Status_Pagamento_Stoom == 2 /* enCapturado */) {
                    MsgBoxJS("O Pagamento j\u00E1 foi autorizado e capturado", MsgBoxOptions.YesNo, MsgBoxIcon.Info);
                    return;
                }
                if (pagamento.Status_Pagamento_Stoom != 1 /* enAutorizado */) {
                    MsgBoxJS("O Pagamento ainda n\u00E3o foi autorizado.", MsgBoxOptions.YesNo, MsgBoxIcon.Info);
                    return;
                }
            }
            //Envia o atendimento para a Zanthus. Quando a atendimento é enviado, o pagamento também é capturado pelo Robo de Integração, 
            //caso o meio de pagamento for online.
            MsgBoxJS("Deseja integrar o atendimento com a Zanthus?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (e) {
                try {
                    if (e.Resultado != MsgBoxResult.Yes) {
                        return;
                    }
                    var parametros;
                    parametros = {
                        codAtendimento: codAtendimento,
                        tela: ValoresSismoura.NomeTela,
                        codUsuario: ValoresSismoura.UsuarioLogado
                    };
                    var retorno = _this.ExecutarFuncaoServerSideSynch("EnviarAtendimentoZanthus", parametros);
                    if (!String.IsNullOrWhiteSpace(retorno)) {
                        MostrarAlerta(retorno);
                        return;
                    }
                    MostrarMensagem("Envio realizado com sucesso!");
                    _this.PreencherEntidade(_this.txtCodigo.GetText());
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, parametros);
        }
    };
    C_HosRes_Angular.prototype.OnPesquisandoProprietario = function (s, e) {
        try {
            if (!e.Valido) {
                return;
            }
            //Validação apenas para novas reservas.
            if (this.txtCodigo.GetText().CNum() == 0) {
                if (e.Retorno && e.Retorno.Codigo.CNum() > 0) {
                    var parametros = {
                        codProprietario: e.Retorno.Codigo.CNum()
                    };
                    //Verifica se o proprietário tem email cadastrado.
                    var ret = this.ExecutarFuncaoServerSideSynch("hasEmailProprietario", parametros);
                    if (!ret) {
                        MsgBoxJS("O proprietário informado não possui e-mail em seu cadastro, por favor atualize o cadastro do proprietário.", MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
                        e.Valido = false;
                        this.Limpar();
                    }
                }
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.OnLstSemanaItemChanged = function (s, e) {
        try {
            if (this.Diarias && this.Diarias.length > 0) {
                var existeDiariaPaga = false;
                this.Diarias.forEach(function (x) {
                    if (x.IsPago) {
                        existeDiariaPaga = true;
                        return;
                    }
                });
                var mensagem;
                if (existeDiariaPaga) {
                    mensagem = "Existem diárias que já foram pagas, não será possível recalcular os dias. Utilize o botão Adicionar Diária.";
                    MsgBoxJS(mensagem, MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
                    return;
                }
                mensagem = "As diárias já foram calculadas, alterando os dias da semana será necessário realizar o recálculo. Deseja prosseguir?";
                MsgBoxJS(mensagem, MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnMsgBoxAlterandoDiasSemana, this));
            }
            else {
                this.DiasSemana = this.lstSemana.GetValues();
                this.AtualizarLabelQtdeDias();
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.OnMsgBoxAlterandoDiasSemana = function (result) {
        try {
            if (result.Resultado == MsgBoxResult.No) {
                this.lstSemana.SetValues(this.DiasSemana);
                this.AtualizarLabelQtdeDias();
                return;
            }
            this.LimparDiarias();
            this.RecalcularDiariasDayCare();
            this.DiasSemana = this.lstSemana.GetValues();
            this.AtualizarLabelQtdeDias();
        }
        catch (e) {
        }
    };
    C_HosRes_Angular.prototype.LimparDiarias = function () {
        this.Diarias = [];
        this.grdDiarias.Limpar();
    };
    C_HosRes_Angular.prototype.OnTxtDataEntradaLostFocus = function () {
        var _this = this;
        try {
            setTimeout(function () {
                if (!(_this.VerificarDatas(true))) {
                    return;
                }
                _this.PreencherBaias(_this.txtLocalHospedagem.GetText().CNum());
                if (_this.tab.IsAbaVisible('AbaDiarias') && _this.txtCodigo.GetText().CNum() == 0 && _this.cboServicoDiaria.GetValue() > 0) {
                    _this.btnRecalcularDiarias.DoClick();
                }
                _this.AtualizarLabelQtdeDias();
            }, 300);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.OnTxtDataSaidaLostFocus = function () {
        var _this = this;
        try {
            setTimeout(function () {
                if (!(_this.VerificarDatas(false))) {
                    return;
                }
                _this.PreencherBaias(_this.txtLocalHospedagem.GetText().CNum());
                if (_this.tab.IsAbaVisible('AbaDiarias') && _this.txtCodigo.GetText().CNum() == 0 && _this.cboServicoDiaria.GetValue() > 0) {
                    _this.btnRecalcularDiarias.DoClick();
                }
                _this.AtualizarLabelQtdeDias();
            }, 300);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.VerificarDatas = function (isDataInicial) {
        //if (true == true) { return true }
        var retorno = true;
        var dataAtual = this.DataServidor();
        dataAtual.setHours(0, 0, 0, 0);
        if (!this.txtPeriodo.textBoxCalendarioInicio.GetDate()) {
            this.txtPeriodo.textBoxCalendarioInicio.SetDate(this.DataServidor());
        }
        if (!this.txtPeriodo.textBoxCalendarioFim.GetDate()) {
            this.txtPeriodo.textBoxCalendarioFim.SetDate(this.DataServidor());
        }
        var dataInicial = this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate();
        var dataFinal = this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate();
        dataInicial.setHours(0, 0, 0, 0);
        dataFinal.setHours(0, 0, 0, 0);
        if (dataInicial.isBefore(dataAtual, false) && this.txtCodigo.GetText().CNum() == 0) {
            MsgBoxJS("A data de entrada deve ser maior ou igual a data atual.", MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
            this.txtPeriodo.textBoxCalendarioInicio.SetDate(this.DataServidor());
            if (this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */) {
                var dt = this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate();
                this.txtPeriodo.textBoxCalendarioFim.SetDate(this.calcularUltimoDiaMensalidadeDaycare(dt));
            }
            this.AtualizarLabelQtdeDias();
            return false;
        }
        else if (dataInicial.isAfter(dataFinal, true)) {
            if (isDataInicial) {
                //MostrarAlerta("A data de entrada deve ser menor que a data final.");
                MsgBoxJS("A data de entrada deve ser menor que a data final.", MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
            }
            else {
                //MostrarAlerta("A data de saída deve ser maior que a data de entrada.");
                MsgBoxJS("A data de saída deve ser maior que a data de entrada.", MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
            }
            if (this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */) {
                var dt = this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate();
                //this.txtDataSaida.Date = dt.addDays(30);
                this.txtPeriodo.textBoxCalendarioFim.SetDate(this.calcularUltimoDiaMensalidadeDaycare(dt));
                this.AtualizarLabelQtdeDias();
                return false;
            }
            else {
                var dt = this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate();
                this.txtPeriodo.textBoxCalendarioFim.SetDate(dt.addDays(1));
                this.AtualizarLabelQtdeDias();
                return false;
            }
        }
        else if (this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */ && DiffDays(dataInicial, dataFinal) < 30 ||
            this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */ && DiffDays(dataInicial, dataFinal) > 30) {
            //MostrarAlerta("Para o daycare a data de entrada e saída devem ter um período de 30 dias.");
            MsgBoxJS("Para o daycare a data de entrada e saída devem ter um período de 30 dias.", MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
            var dt = this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate();
            //this.txtDataSaida.Date = dt.addDays(30);
            this.txtPeriodo.textBoxCalendarioFim.SetDate(this.calcularUltimoDiaMensalidadeDaycare(dt));
            this.AtualizarLabelQtdeDias();
            return false;
        }
        else {
            if (this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */
                && this.txtCodigo.GetText().CNum() == 0) {
                var dt = this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate();
                this.txtPeriodo.textBoxCalendarioFim.SetDate(this.calcularUltimoDiaMensalidadeDaycare(dt));
            }
        }
        return true;
    };
    C_HosRes_Angular.prototype.OnCboBaiaGotFocus = function (s, e) {
        if (this.cboBaia && this.cboBaia.Combo) {
            this.cboBaia.Combo.ShowDropDown();
        }
    };
    C_HosRes_Angular.prototype.OnCboMeioPagamento_ValueChange = function (s, e) {
        this.VerificarVisibilidadeAbas();
        this.enviarEmailPagamentoDepoisGravar = false;
        this.alterarModoPagamento();
    };
    C_HosRes_Angular.prototype.OnCboServicoDiaria_SelectedIndexChanged = function (s, e) {
        this.LimparCamposDesconto();
        this.calcularDescontoDiaria();
        this.calcularDescontoPDiaria();
    };
    C_HosRes_Angular.prototype.OnCboBaia_comboBoxChange = function (s, e) {
        var _this = this;
        try {
            //Verifica se a baia está ocupada por outro animal, se estiver precisa verificar se o animal é do mesmo proprietário.
            var baiaReserva = this.GetScope().Entity.Baia;
            var parametros;
            if (baiaReserva && baiaReserva == this.cboBaia.Combo.GetValue()) {
            }
            else {
                parametros = {
                    codLocal: this.txtLocalHospedagem.GetText().CNum(),
                    dataInicial: this.GetDataHoraEntrada().ToDate(),
                    dataFinal: this.GetDataHoraSaida().ToDate(),
                    codBaia: this.cboBaia.Combo.GetValue()
                };
                var baiaInfo = this.ExecutarFuncaoServerSideSynch("GetDadosBaia", parametros);
                if (baiaInfo) {
                    if ((this.optTipoHospedagem.GetValue().CNum() == 1 /* HOTEL */)
                        && (baiaInfo.Animais_Baia > 0 && baiaInfo.Proprietario != this.EntityTela.Proprietario)
                        && !(baiaInfo.Permitir_Pet_Proprietario_Diferente)) {
                        MostrarAlerta("Esta baia está sendo utilizada por outro proprietário.");
                        if (baiaReserva && baiaReserva > 0) {
                            this.cboBaia.Combo.SetValue(baiaReserva.toString);
                        }
                        else {
                            this.cboBaia.LimparSelecao();
                        }
                    }
                }
            }
            setTimeout(function () {
                _this.CarregarServicosVinculadosBaias();
            }, 300);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosRes_Angular.prototype.PreencherBaias = function (codLocal) {
        try {
            if (this.txtLocalHospedagem.GetText().CNum() <= 0) {
                return;
            }
            var parametros;
            parametros = {
                codLocal: this.txtLocalHospedagem.GetText().CNum(),
                dataInicial: this.GetDataHoraEntrada().ToDate(),
                dataFinal: this.GetDataHoraSaida().ToDate(),
                codReserva: this.txtCodigo.GetText().CNum()
            };
            this.Baias = this.ExecutarFuncaoServerSideSynch("GetBaiasByLocal", parametros);
            if (this.Baias.length == 0) {
                MostrarAlerta("Não há disponibilidade de baias no período selecionado.");
            }
            else {
                var baiaBKP = this.cboBaia.GetValue();
                if (this.cboBaia && this.cboBaia.Combo) {
                    this.cboBaia.Combo.ClearItems();
                    for (var x = 0; x < this.Baias.length; x++) {
                        if (this.txtCodigo.GetText().CNum() == 0) {
                            if (this.Baias[x].Animais_Baia >= this.Baias[x].Lotacao_Maxima) {
                                //Baia sem espaço.
                                continue;
                            }
                            else {
                                if ((!this.Baias[x].Permitir_Pet_Proprietario_Diferente) //Se a baia não permitir animais de outros proprietários no mesmo espaço
                                    && this.optTipoHospedagem.GetValue().CNum() == 1 /* HOTEL */) { //Se o tipo de hospedagem for Hotel
                                    if (this.Baias[x].Animais_Baia > 0 && this.Baias[x].Proprietario != this.txtPet.TextBoxProprietario.GetText().CNum()) { //Se tiver animal na baia e for de proprietário diferente do que está entrando na hospedagem
                                        continue;
                                    }
                                }
                            }
                        }
                        var desc = this.Baias[x].Codigo + " - " + this.Baias[x].Descricao;
                        if (this.Baias[x].Lotacao_Maxima > 1) {
                            desc += " - CAPACIDADE: [" + this.Baias[x].Capacidade + " ]";
                        }
                        this.cboBaia.Combo.AddItem(desc.toUpperCase(), this.Baias[x].Codigo, "");
                    }
                    if (baiaBKP && baiaBKP != 0) {
                        this.cboBaia.SetValue(baiaBKP);
                        //this.CarregarServicosVinculadosBaias(null, null);
                    }
                    else {
                        this.cboBaia.Combo.SetText("");
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosRes_Angular.prototype.OnDepoisBuscarExistente = function (Entidade) {
        var _this = this;
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        setTimeout(function () {
            _this.PreencherInformacoesTela(Entidade);
            _this.HabilitarDesabilitarControles(false);
        }, 100);
    };
    C_HosRes_Angular.prototype.PreencherInformacoesTela = function (entidade) {
        if (this.txtCodigo.GetText().CNum() <= 0) {
            return;
        }
        var parametros = {
            codReserva: entidade.Codigo,
            codLocal: entidade.Local
        };
        if (entidade &&
            entidade.Meio_Pagamento == 2 /* enLinkEmail */ &&
            !(ValoresSismoura.ConfiguracoesPetshop.Hospedagem_Utilizar_Pagamento_Email)) {
            var msg = "Esta reserva foi registrada com a modalidade de pagamento por e-mail,";
            msg += " no momento o sistema está com a configuração de pagamento por e-mail desabilitada.";
            msg += "\nPara visualizar esta reserva, habilite a configuração de pagamento por e-mail.";
            MsgBoxJS(msg, MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
            this.txtCodigo.Limpar();
            return;
        }
        var InformacoesAdicionais = this.ExecutarFuncaoServerSideSynch("GetInformacoesAdicionaisReserva", parametros);
        this.Diarias = InformacoesAdicionais.Diarias;
        this.Baias = InformacoesAdicionais.Baias;
        this.ServicosDiarias = InformacoesAdicionais.ServicosHospedagem;
        this.Atendimentos = InformacoesAdicionais.Atendimentos;
        this.lstSemana.Visible = false;
        if (entidade.Tipo_Hospedagem == 2 /* DAYCARE */) {
            this.lstSemana.Visible = true;
            this.lstSemana.LimparSelecao();
            this.lstSemana.SetValues(InformacoesAdicionais.DiasSemana);
        }
        if (this.Diarias) {
            this.grdDiarias.Grid.PreencherGrid(this.Diarias);
        }
        if (this.Atendimentos) {
            this.grdAtendimentos.PreencherGrid(this.Atendimentos);
        }
        if (entidade.Baia) {
            this.cboBaia.SetValue(entidade.Baia);
        }
        if (this.btnHospedagem) {
            if (entidade.Codigo > 0) {
                this.btnHospedagem.Visible = true;
                this.btnCancelarReserva.Visible = true;
                //this.tab.AlterarVisibleAba("AbaCheckList", true);
                //this.VerificarVisibilidadeAbas()
            }
        }
        //if (entidade.Cancelada && entidade.Pagamento_Email_STOOM && entidade.Pagamento_Email_STOOM.Codigo > 0) {
        if (entidade.Cancelada && InformacoesAdicionais.DiariasExcluidas && InformacoesAdicionais.DiariasExcluidas.length > 0) {
            this.DiariasExcluidas = InformacoesAdicionais.DiariasExcluidas;
            this.AtendimentoExcluido = InformacoesAdicionais.AtendimentoExcluido;
            this.Diarias = InformacoesAdicionais.DiariasExcluidas;
            this.Atendimentos = InformacoesAdicionais.AtendimentoExcluido;
            if (this.Diarias) {
                this.grdDiarias.Grid.PreencherGrid(this.Diarias);
            }
            if (this.Atendimentos) {
                this.grdAtendimentos.PreencherGrid(this.Atendimentos);
            }
        }
        this.AtualizarLabelSituacao(entidade);
        this.AtualizarLabelSituacaoPagamento(entidade);
        this.PreencherServicosHospedagem(this.ServicosDiarias);
        this.txtPeriodo.textBoxCalendarioInicio.SetDate(entidade.Data_Entrada.ToDate());
        this.txtPeriodo.textBoxCalendarioFim.SetDate(entidade.Data_Saida.ToDate());
        this.AtualizarLabelQtdeDias();
        this.VerificarVisibilidadeAbas();
        this.GetScope().Entity = entidade;
        this.RefreshAngular();
    };
    C_HosRes_Angular.prototype.AtualizarLabelSituacao = function (entidade) {
        this.lblSituacaoHospedagem.LabelComponente.style.color = "black";
        if (entidade.Hospedagem > 0) {
            var parametros = {
                codHospedagem: entidade.Hospedagem
            };
            var hospedagem = this.ExecutarFuncaoServerSideSynch("GetHospedagemByCodigo", parametros);
            if (hospedagem && hospedagem.Finalizado) {
                this.lblSituacaoHospedagem.Text = "HOSPEDAGEM FINALIZADA: " + hospedagem.Codigo;
            }
            else {
                this.lblSituacaoHospedagem.Text = "HOSPEDAGEM CADASTRADA: " + hospedagem.Codigo;
                this.lblSituacaoHospedagem.LabelComponente.style.color = "green";
            }
        }
        else if (entidade.Cancelada) {
            var texto = "RESERVA CANCELADA\n";
            texto += entidade.Motivo_Cancelamento;
            this.lblSituacaoHospedagem.Text = texto;
            this.lblSituacaoHospedagem.LabelComponente.style.color = "red";
        }
        else if (entidade.Codigo > 0) {
            this.lblSituacaoHospedagem.Text = "RESERVA CADASTRADA";
            this.lblSituacaoHospedagem.LabelComponente.style.color = "black";
        }
        else {
            this.lblSituacaoHospedagem.Text = "";
        }
    };
    C_HosRes_Angular.prototype.AtualizarLabelSituacaoPagamento = function (entidade) {
        if (ValoresSismoura.ConfiguracoesPetshop.Hospedagem_Utilizar_Pagamento_Email) {
            this.lblSituacaoPagamento.Visible = true;
            if (entidade.Pagamento_Email_STOOM
                && entidade.Meio_Pagamento == 2 /* enLinkEmail */
                && entidade.Pagamento_Email_STOOM.Codigo > 0) {
                switch (entidade.Pagamento_Email_STOOM.Status_Pagamento_Stoom) {
                    case 1 /* enAutorizado */:
                        this.lblSituacaoPagamento.Text = "Pagamento pré aprovado pelo pagamento via email.";
                        this.lblSituacaoPagamento.LabelComponente.style.color = "orange";
                        break;
                    case 2 /* enCapturado */:
                        this.lblSituacaoPagamento.Text = "Pagamento aprovado pelo pagamento via email.";
                        this.lblSituacaoPagamento.LabelComponente.style.color = "green";
                        break;
                    default: //SiSMoura.Core.Entity.Petz_Pagamento_Email_Stoom.enSTOOMStatusPagamento.enNaoAutorizado:
                        if (entidade.Cancelada) {
                            this.lblSituacaoPagamento.Visible = false;
                        }
                        else {
                            this.lblSituacaoPagamento.Text = "Pagamento não aprovado pelo pagamento via email.";
                            this.lblSituacaoPagamento.LabelComponente.style.color = "red";
                        }
                        break;
                }
            }
            else {
                this.lblSituacaoPagamento.Visible = false;
                //this.btnEmailPagamento.Visible = false;
            }
        }
        else {
            //this.btnEmailPagamento.Visible = false;
            this.lblSituacaoPagamento.Visible = false;
        }
    };
    C_HosRes_Angular.prototype.OnDepoisGravar = function () {
        var _this = this;
        _super.prototype.OnDepoisGravar.call(this);
        if (this.isCadastroNovo) {
            this.EnviarEmailHospedagem(0 /* enCadastroReserva */);
            if (ValoresSismoura.ConfiguracoesPetshop.Hospedagem_Utilizar_Pagamento_Email) {
                if (this.GetScope().Entity.Pagamento_Email_STOOM
                    && this.GetScope().Entity.Meio_Pagamento == 2 /* enLinkEmail */) {
                    this.EnviarEmailPagamento();
                }
            }
        }
        if (this.enviarEmailPagamentoDepoisGravar) {
            this.EnviarEmailPagamento();
        }
        setTimeout(function () {
            _this.PreencherEntidade("" + _this.GetScope().Entity.Codigo);
        }, 300);
        return true;
    };
    C_HosRes_Angular.prototype.OnMsgBoxEnviarEmailReserva = function (resultado) {
        if (resultado.Resultado == MsgBoxResult.No) {
            return;
        }
        this.EnviarEmailHospedagem(0 /* enCadastroReserva */);
    };
    C_HosRes_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (this.tab) {
            this.VerificarVisibilidadeAbas();
        }
        if (this.txtPeriodo) {
            this.txtPeriodo.IniciarDataAtual();
            var data = new Date();
            data = data.addDays(1);
            this.txtPeriodo.textBoxCalendarioFim.SetDate(data);
        }
        this.txtLocalHospedagem.LimparParametros();
        this.txtLocalHospedagem.AddParametro("codEmpresa", ValoresSismoura.EmpresaPadraoUsuario.toString());
        this.PreencherReserva();
        if (!this.GetScope().calcularDescontoPDiaria) {
            this.GetScope().calcularDescontoPDiaria = $.proxy(this.calcularDescontoPDiaria, this);
            this.GetScope().$watch(function (scope) { return scope.DiariaCalculada.Desconto_Porcentagem; }, this.GetScope().calcularDescontoPDiaria);
        }
        if (!this.GetScope().calcularDescontoDiaria) {
            this.GetScope().calcularDescontoDiaria = $.proxy(this.calcularDescontoDiaria, this);
            this.GetScope().$watch(function (scope) { return scope.DiariaCalculada.Desconto; }, this.GetScope().calcularDescontoDiaria);
        }
    };
    C_HosRes_Angular.prototype.PreencherReserva = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.QueryString.CodigoEspera) {
                try {
                    _this.hdnEsperaReserva.value = _this.QueryString.CodigoEspera;
                    if (_this.hdnEsperaReserva && _this.hdnEsperaReserva.value.CNum() > 0) {
                        var espera;
                        var parametros = {
                            codEsperaReserva: _this.hdnEsperaReserva.value.CNum()
                        };
                        espera = _this.ExecutarFuncaoServerSideSynch("GetReservaEspera", parametros);
                        if (espera) {
                            var entidade = _this.GetScope().Entity;
                            entidade.EsperaReserva = espera.Codigo;
                            entidade.Empresa = espera.Empresa;
                            entidade.Data_Entrada = ConvertToDate(espera.Data_Entrada);
                            entidade.Data_Saida = ConvertToDate(espera.Data_Saida);
                            entidade.Animal = espera.Animal;
                            entidade.Proprietario = espera.Proprietario;
                            _this.RefreshAngular();
                            _this.cboEmpresa.SetValue(espera.Empresa);
                            if (espera.Animal > 0) {
                                _this.txtPet.TextBoxAnimal.Procurar(espera.Animal.toString());
                            }
                            if (espera.Proprietario > 0) {
                                _this.txtPet.TextBoxProprietario.Procurar(espera.Proprietario.toString());
                            }
                            //this.txtLocalHospedagem.Procurar(reserva.Local.toString());
                            _this.txtPeriodo.textBoxCalendarioInicio.SetDate(ConvertToDate(espera.Data_Entrada));
                            _this.txtPeriodo.textBoxCalendarioFim.SetDate(ConvertToDate(espera.Data_Saida));
                            _this.QueryString.CodigoEspera = null;
                        }
                    }
                }
                catch (ex) {
                    LogarException(ex);
                }
            }
            else if (_this.QueryString.CodigoReserva && CNum(_this.QueryString.CodigoReserva) > 0) {
                _this.txtCodigo.Procurar(_this.QueryString.CodigoReserva);
            }
        }, 700);
    };
    C_HosRes_Angular.prototype.OnPesquisandoAnimal = function (s, e) {
        try {
            if (!e.Valido) {
                return;
            }
            var parametros = {
                codAnimal: CNum(e.Valor),
                codHospedagem: this.txtCodigo.GetText().CNum()
            };
            var informacoesAnimal;
            informacoesAnimal = this.ExecutarFuncaoServerSideSynch("GetInformacoesAnimalHospedagem", parametros);
            if (informacoesAnimal) {
                if (informacoesAnimal.IsEspecieBloqueadaHospedagem) {
                    MsgBoxJS("A esp\u00E9cie do PET: " + informacoesAnimal.EspecieNome + " n\u00E3o \u00E9 permitda na hospedagem.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
                    this.txtPet.TextBoxProprietario.Limpar();
                    e.Valido = false;
                    return;
                }
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.OnMudouOptTipoHospedagem = function (s, e) {
        if (this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */) {
            this.lstSemana.Visible = true;
        }
        else {
            this.lstSemana.Visible = false;
        }
        this.IniciarDataTipoHospedagem();
        this.VerificarVisibilidadeAbas();
        this.AtualizarLabelQtdeDias();
        this.LimparDiarias();
        this.txtLocalHospedagem.Limpar();
        this.Baias = [];
        this.cboBaia.Combo.ClearItems();
        return;
    };
    C_HosRes_Angular.prototype.IniciarDataTipoHospedagem = function () {
        if (this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */) {
            this.lstSemana.Visible = true;
            var dt = this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate();
            dt.setHours(0, 0, 0, 0);
            this.txtPeriodo.textBoxCalendarioFim.SetDate(this.calcularUltimoDiaMensalidadeDaycare(dt));
            this.lstSemana.btnMarcar.DoClick();
        }
        else {
            var data = this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate();
            data = data.addDays(1);
            this.txtPeriodo.textBoxCalendarioFim.SetDate(data);
        }
        this.AtualizarLabelQtdeDias();
    };
    C_HosRes_Angular.prototype.OnDepoisProcuraLocal = function (s, e) {
        if (this.txtLocalHospedagem.GetText().CNum() > 0) {
            try {
                var parametros = {
                    codLocal: this.txtLocalHospedagem.GetText().CNum()
                };
                var codEmpresa = this.GetScope().Entity.Empresa;
                if (this.txtPet.TextBoxProprietario.GetText().CNum() == 0) {
                    MostrarAlerta("Informe o proprietário desta hospedagem.");
                    this.txtLocalHospedagem.Limpar();
                    this.Baias = [];
                    //this.grdBaias.Limpar();
                    this.cboBaia.Combo.ClearItems();
                    return;
                }
                var local = this.ExecutarFuncaoServerSideSynch("GetLocal", parametros);
                if (!(local.Empresa == codEmpresa)) {
                    MostrarAlerta("O Local não pertence a empresa selecionada.");
                    this.txtLocalHospedagem.Limpar();
                    this.Baias = [];
                    //this.grdBaias.Limpar();
                    this.cboBaia.Combo.ClearItems();
                    return;
                }
                var localHosp = CNum(this.optTipoHospedagem.GetValue());
                if (local.Tipo_Hospedagem != localHosp) {
                    MostrarAlerta("O Local informado não pertence ao tipo de hospedagem selecionada.");
                    this.txtLocalHospedagem.Limpar();
                    this.Baias = [];
                    //this.grdBaias.Limpar();
                    this.cboBaia.Combo.ClearItems();
                    return;
                }
                this.PreencherBaias(this.txtLocalHospedagem.GetText().CNum());
            }
            catch (e) {
                LogarException(e);
            }
        }
        else {
            this.Baias = [];
            this.cboBaia.Combo.ClearItems();
        }
    };
    C_HosRes_Angular.prototype.OnbtnCancelarReserva = function (s, e) {
        var _this = this;
        try {
            if (this.txtCodigo.GetText().CNum() == 0) {
                MostrarAlerta("Informe uma reserva.");
                return;
            }
            var entidade = this.GetScope().Entity;
            if (entidade && entidade.Codigo > 0 && entidade.Cancelada) {
                MostrarAlerta("Esta reserva já foi cancelada.");
                return false;
            }
            if (entidade.Hospedagem != 0) {
                MostrarAlerta("Não será possível cancelar esta reserva pois já foi gerado um checkin dela.");
                return;
            }
            var parametros = {
                codReserva: this.GetScope().Entity.Codigo
            };
            var atendimentos;
            var pagamentoStoom;
            var retorno = this.ExecutarFuncaoServerSideSynch("PETZ_DadosReserva", parametros);
            if (!retorno) {
                return false;
            }
            atendimentos = retorno.Atendimentos;
            pagamentoStoom = retorno.PagamentoStoom;
            //Verifica se o pagamento já foi realizado.
            if (pagamentoStoom
                && (pagamentoStoom.Status_Pagamento_Stoom == 1 /* enAutorizado */
                    || pagamentoStoom.Status_Pagamento_Stoom == 2 /* enCapturado */)) {
                MostrarAlerta("Não será possível excluir esta reserva, pois seu pagamento já foi efetuado.");
                return false;
            }
            var hasAtendimentosEnviadosZanthus = false;
            var hasAtendimentoPagosZanthus = false;
            if (atendimentos && atendimentos.length > 0) {
                atendimentos.forEach(function (x) {
                    var status = x.Status_Envio_Zanthus;
                    if (status == null || status == undefined) {
                        status = 1 /* AguardandoEnvio */;
                    }
                    switch (status) {
                        case 2 /* EnvioEfetuado */:
                            //Pergunta se vai cancelar a hospedagem, pois o atendimento já foi enviado para pagamento.
                            hasAtendimentosEnviadosZanthus = true;
                            break;
                        case 3 /* AtendimentoPago */:
                            //Não deve permitir o cancelamento da hospedagem.
                            hasAtendimentoPagosZanthus = true;
                            break;
                        default:
                    }
                    if (hasAtendimentosEnviadosZanthus || hasAtendimentoPagosZanthus) {
                        return;
                    }
                });
            }
            if (hasAtendimentoPagosZanthus) {
                MsgBoxJS("Já foi realizado o pagamento desta reserva, não será possível fazer a alteração.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
                return false;
            }
            else if (hasAtendimentosEnviadosZanthus) {
                MsgBoxJS("Atenção! Existem atendimentos que foram enviados para pagamento no PDV da Zanthus, deseja realmente cancelar a reserva?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                    if (result.Resultado == MsgBoxResult.No) {
                        return false;
                    }
                    else {
                        //this.onBtnMdlMotivoCancConfirmar(null, null);
                        _this.dlgMotivoCancelamento.ModalDialog.Show();
                        return;
                    }
                });
            }
            else {
                MsgBoxJS("Deseja realmente cancelar esta reserva?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnMsgBoxCancelarReserva, this), undefined);
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.OnMsgBoxCancelarReserva = function (resultado) {
        try {
            if (resultado.Resultado == MsgBoxResult.No) {
                return;
            }
            this.dlgMotivoCancelamento.ModalDialog.Show();
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.OnbtnEmail = function (s, e) {
        var entidade = this.GetScope().Entity;
        if (this.txtCodigo.GetText().CNum() == 0 || !entidade) {
            MostrarAlerta("Informe uma reserva cadastrada.");
            return;
        }
        if (entidade.Cancelada) {
            MostrarAlerta("Esta reserva foi cancelada.");
            return;
        }
        if (entidade.Meio_Pagamento == 2 /* enLinkEmail */) {
            if (entidade.Pagamento_Email_STOOM.Status_Pagamento_Stoom == 1 /* enAutorizado */
                || entidade.Pagamento_Email_STOOM.Status_Pagamento_Stoom == 2 /* enCapturado */) {
                MostrarAlerta("Esta reserva já foi paga.");
                return;
            }
        }
        this.EnviarEmailHospedagem(0 /* enCadastroReserva */);
    };
    C_HosRes_Angular.prototype.OnbtnEnviarEmailPagamento = function (s, e) {
        var entidade = this.GetScope().Entity;
        if (this.txtCodigo.GetText().CNum() == 0 || !entidade) {
            MostrarAlerta("Informe uma reserva cadastrada.");
            return;
        }
        if (entidade.Cancelada) {
            MostrarAlerta("Esta reserva foi cancelada.");
            return;
        }
        if (entidade.Meio_Pagamento != 2 /* enLinkEmail */) {
            MostrarAlerta("Esta reserva não possui a opção de pagamento online.");
            return;
        }
        if (entidade.Meio_Pagamento == 2 /* enLinkEmail */) {
            if (entidade.Pagamento_Email_STOOM.Status_Pagamento_Stoom == 1 /* enAutorizado */
                || entidade.Pagamento_Email_STOOM.Status_Pagamento_Stoom == 2 /* enCapturado */) {
                MostrarAlerta("Esta reserva já foi paga.");
                return;
            }
        }
        this.EnviarEmailPagamento();
    };
    C_HosRes_Angular.prototype.OnBtnHospedagemClick = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.txtCodigo.GetText().CNum() == 0) {
                MostrarAlerta("Informe uma reserva.");
                return;
            }
            var parametros = {
                codReserva: this.txtCodigo.GetText().CNum()
            };
            var entidade = this.ExecutarFuncaoServerSideSynch("GetReservaByCodigo", parametros);
            if (!entidade) {
                MostrarAlerta("Reserva não encontrada.");
                return false;
            }
            if (entidade && entidade.Codigo > 0 && entidade.Cancelada) {
                MostrarAlerta("Esta reserva foi cancelada.");
                return false;
            }
            if (entidade.Codigo > 0 && entidade.Hospedagem > 0) {
                MostrarAlerta("J\u00E1 foi gerada a hospedagem: " + entidade.Hospedagem + " para esta reserva.");
                return false;
            }
            var parametros = {
                codReserva: this.txtCodigo.GetText().CNum()
            };
            var retorno;
            retorno = this.ExecutarFuncaoServerSideSynch("GetChecklistByReserva", parametros);
            if (!retorno || retorno.length == 0) {
                MostrarAlerta("O CheckList ainda não foi feito, por favor preencha o checklist.");
                return false;
            }
            //Pagamento Online
            if (ValoresSismoura.ConfiguracoesPetshop.Hospedagem_Utilizar_Pagamento_Email) {
                if (entidade.Meio_Pagamento == 2 /* enLinkEmail */) {
                    if (entidade.Pagamento_Email_STOOM &&
                        entidade.Pagamento_Email_STOOM.Codigo > 0 &&
                        entidade.Pagamento_Email_STOOM.Status_Pagamento_Stoom == 0 /* enNaoAutorizado */) {
                        MostrarAlerta("N\u00E3o ser\u00E1 poss\u00EDvel realizar o check-in desta reserva, pois o pagamento n\u00E3o identificado.");
                        return false;
                    }
                    //Solicitado por Francisco Petz. Deixar realizar o checkin somente depois de capturar o pagamento e emitir nota no PDV da Zanthus(Status Envio Zanthus = 3 - Pago).
                    var parametros = {
                        codAtendimento: entidade.Pagamento_Email_STOOM.Atendimento
                    };
                    var pagamento = this.ExecutarFuncaoServerSideSynch("GetPagamentoByAtendimento", parametros);
                    if (pagamento.Status_Pagamento_Stoom != 2 /* enCapturado */) {
                        MostrarAlerta("O Pagamento ainda n\u00E3o foi capturado. Envie o atendimento para Zanthus.");
                        return;
                    }
                    //Obtem o atendimento gerado para o pagamento online desta reserva.
                    var atendimento = this.ExecutarFuncaoServerSideSynch("GetAtendimentoByID", parametros);
                    if (!atendimento) {
                        MostrarMensagem("Ocorreu um problema ao obter o atendimento desta reserva.");
                        return;
                    }
                    if (atendimento.Status_Envio_Zanthus != 3 /* AtendimentoPago */) {
                        MsgBoxJS("Aten\u00E7\u00E3o. A nota do atendimento:" + atendimento.Codigo + " ainda n\u00E3o foi emitida, por favor realize a emiss\u00E3o desta nota no PDV.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
                        return;
                    }
                }
            }
            var parametros = {
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum()
            };
            var avaliacao = this.ExecutarFuncaoServerSideSynch("GetAvaliacaoComportamental", parametros);
            if (avaliacao && avaliacao.Codigo > 0) {
                if (!(avaliacao.Aprovado) || avaliacao.Aprovado == 'N') {
                    //MostrarAlerta(`O PET não está aprovado para entrar na hospedagem.`);
                    MsgBoxJS("O PET não está aprovado para entrar na hospedagem.", MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
                    return false;
                }
            }
            else {
                //MostrarAlerta(`A avaliação comportamental do PET ainda não foi realizada.`);
                MsgBoxJS("A avaliação comportamental do PET ainda não foi realizada. Deseja realiza-lá agora?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespostaAvaliacaoComportamental, this));
                //return false;
            }
            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroHospedagemPetz + "?CodigoReserva=" + this.txtCodigo.GetText().CNum()), null);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.txtCodigo.Limpar();
        this.HabilitarDesabilitarControles(true);
        this.validouInformacoesReserva = false;
        this.enviarEmailPagamentoDepoisGravar = false;
        this.verificadoAutorizacaoDescontoHospedagem = false;
        this.txtPet.TextBoxProprietario.Limpar();
        this.txtPet.TextBoxAnimal.Limpar();
        this.hdnEsperaReserva.value = "0";
        this.txtLocalHospedagem.LimparParametros();
        this.txtLocalHospedagem.AddParametro("codEmpresa", ValoresSismoura.EmpresaPadraoUsuario.toString());
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.cboBaia.Combo.ClearItems();
        if (ValoresSismoura.UsuarioLogado > 0) {
            Entity.Funcionario = ValoresSismoura.UsuarioLogado;
            this.txtFuncionario.Disabled = true;
        }
        if (this.btnHospedagem) {
            this.btnHospedagem.Visible = false;
            this.btnCancelarReserva.Visible = false;
        }
        if (this.btnEnviarEmailPagamento) {
            this.btnEnviarEmailPagamento.Visible = false;
        }
        this.lblSituacaoHospedagem.Text = "";
        Entity.Tipo_Hospedagem = 1 /* HOTEL */;
        this.optTipoHospedagem.SetValue("1");
        this.lblModalIndicacaoInformacoes.Text = "";
        this.gridIndicacao.PreencherGrid(null);
        this.lstSemana.Visible = false;
        this.lblSituacaoHospedagem.LabelComponente.style.color = "black";
        this.cboMeioPagamento.SetValue("");
        this.VerificarVisibilidadeAbas();
        this.Baias = [];
        this.ServicosDiarias = [];
        this.cboServicoDiaria.Combo.ClearItems();
        this.cboServicoDiaria.LimparSelecao();
        this.Diarias = null;
        this.DiariaCalculada = {};
        this.grdDiarias.Limpar();
        this.grdAtendimentos.PreencherGrid(null);
        this.retornoComplementosItemServico = null;
        this.lblSituacaoPagamento.Visible = false;
        this.grdCheckListItens.PreencherGrid(null);
        if (this.txtPeriodo) {
            this.txtPeriodo.IniciarDataAtual();
            var data = new Date();
            data = data.addDays(1);
            this.txtPeriodo.textBoxCalendarioFim.SetDate(data);
        }
        this.IniciarDataTipoHospedagem();
        this.AtualizarLabelQtdeDias();
    };
    C_HosRes_Angular.prototype.onMudouEmpresa = function (s, e) {
        this.txtLocalHospedagem.Limpar();
        this.Baias = [];
        this.cboBaia.Combo.ClearItems();
        this.txtLocalHospedagem.LimparParametros();
        this.txtLocalHospedagem.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    C_HosRes_Angular.prototype.VerificarVisibilidadeAbas = function () {
        //Aba checklist só é exibida para uma reserva cadastrada.
        this.tab.AlterarVisibleAba("AbaCheckList", this.txtCodigo.GetText().CNum() > 0);
        this.btnEnviarEmailPagamento.Visible = false;
        if (this.grdAtendimentos.Grid && this.grdAtendimentos.DataSource.length > 0) {
            this.grdAtendimentos.ColunaVisible(this.grdAtendimentos.GetColunaByName("botaoTemplate_enviar_email_cobranca"), false);
        }
        if (CNum(this.cboMeioPagamento.GetValue()) == 2 /* enLinkEmail */) {
            if (this.btnEnviarEmailPagamento && this.txtCodigo.GetText().CNum() > 0) {
                this.btnEnviarEmailPagamento.Visible = true;
                if (this.grdAtendimentos.Grid && this.grdAtendimentos.DataSource.length > 0) {
                    this.grdAtendimentos.ColunaVisible(this.grdAtendimentos.GetColunaByName("botaoTemplate_enviar_email_cobranca"), true);
                }
            }
        }
        if (this.tab.IsAbaVisible("AbaDiarias")) {
            this.tab.SetActiveTabIndex(0);
        }
    };
    C_HosRes_Angular.prototype.OnAntesDeletar = function () {
        if (this.txtCodigo.GetText().CNum() > 0) {
            var parametros = {
                codReserva: this.txtCodigo.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetReservaByCodigo", parametros);
            if (retorno) {
                if (retorno.Hospedagem > 0 || retorno.Utilizado) {
                    MostrarAlerta("A reserva n\u00E3o pode ser exclu\u00EDda, pois est\u00E1 sendo utilizada na hospedagem: " + retorno.Hospedagem);
                    return false;
                }
            }
        }
        return _super.prototype.OnAntesDeletar.call(this);
    };
    C_HosRes_Angular.prototype.OnAntesGravar = function () {
        this.TratarEntidadeAntesGravar();
        if (this.txtCodigo.GetText().CNum() == 0) {
            if (!this.validouInformacoesReserva) {
                this.validarInformacoesAntesGravar();
                return;
            }
        }
        return _super.prototype.OnAntesGravar.call(this);
    };
    C_HosRes_Angular.prototype.EnviarEmailHospedagem = function (operacao) {
        var parametros;
        if (!this.EntityTela.Codigo) {
            MostrarAlerta("Informe uma reserva cadastrada");
            return;
        }
        try {
            var parametros;
            parametros = {
                codReserva: this.EntityTela.Codigo,
                codOperecaoEmail: operacao
            };
            abrirEspera("Aguarde. Enviando email da Reserva...");
            this.ExecutarFuncaoServerSideAsynch("EnviarEmailReserva", parametros, function (d) {
                try {
                    var retorno = JSON.parse(d);
                    fecharEspera();
                    if (retorno) {
                        MostrarMensagem("Email enviado com sucesso.");
                    }
                    else {
                        MostrarAlerta("Email não enviado.");
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
        return true;
    };
    C_HosRes_Angular.prototype.EnviarEmailPagamento = function () {
        var parametros;
        if (!this.EntityTela.Codigo) {
            MostrarAlerta("Informe uma reserva cadastrada");
            return;
        }
        try {
            var parametros;
            parametros = {
                codReserva: this.EntityTela.Codigo
            };
            abrirEspera("Aguarde. Enviando email de pagamento...");
            this.ExecutarFuncaoServerSideAsynch("EnviarEmailPagamento", parametros, function (d) {
                try {
                    var retorno = JSON.parse(d);
                    fecharEspera();
                    if (retorno) {
                        MostrarMensagem("Email enviado com sucesso.");
                    }
                    else {
                        MostrarAlerta("Email não enviado.");
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
        return true;
    };
    C_HosRes_Angular.prototype.OnBtnEsperaReservaClick = function (s, e) {
        try {
            debugger;
            e.processOnServer = false;
            if (this.txtPet.TextBoxProprietario.GetText().CNum() == 0) {
                MostrarAlerta("Informe o Proprietário.");
                return;
            }
            if (this.txtPet.TextBoxAnimal.GetText().CNum() == 0) {
                MostrarAlerta("Informe o Animal.");
                return;
            }
            if (this.dlgAdicionarEspera) {
                var informacoes;
                informacoes = "Proprietário: " + this.txtPet.TextBoxProprietario.GetResultado();
                informacoes += "\nAnimal: " + this.txtPet.TextBoxAnimal.GetResultado();
                informacoes += "\nPeríodo: " + this.txtPeriodo.textBoxCalendarioInicio.GetDate().FormataData();
                informacoes += " - " + this.txtPeriodo.textBoxCalendarioFim.GetDate().FormataData();
                informacoes += "\nEmpresa: " + this.cboEmpresa.GetText();
                this.lblModalEsperaInformacoes.Text = informacoes.toString();
                this.dlgAdicionarEspera.ModalDialog.Show();
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.OnConfirmarEsperaReserva = function (s, e) {
        try {
            debugger;
            e.processOnServer = false;
            if (!(this.cboTamanhoBaia.GetValue())) {
                MostrarAlerta("Informe o tamanho da baia que o proprietário deseja aguardar.");
                return;
            }
            var ReservaEspera = {};
            ReservaEspera.Animal = this.txtPet.TextBoxAnimal.GetText().CNum();
            ReservaEspera.Proprietario = this.txtPet.TextBoxProprietario.GetText().CNum();
            ReservaEspera.Data_Cadastro = this.DataServidor();
            ReservaEspera.Data_Entrada = this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate();
            ReservaEspera.Data_Saida = this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate();
            ReservaEspera.Tipo_Hospedagem = this.optTipoHospedagem.GetValue().CNum();
            ReservaEspera.Empresa = this.cboEmpresa.GetValue();
            ReservaEspera.Tamanho_Baia = this.cboTamanhoBaia.GetValue();
            var parametros = {
                espera: ReservaEspera,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("AdicionarListaEsperaReserva", parametros);
            if (retorno) {
                MostrarMensagem("A solicitação de reserva foi adicionada a lista de espera.");
            }
            else {
                MostrarAlerta("Erro ao adicionar a reserva na espera.");
            }
            this.dlgAdicionarEspera.Hide();
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.OnCancelarCriarEsperaReserva = function (s, e) {
        try {
            e.processOnServer = false;
            this.lblModalEsperaInformacoes.Text = "";
            this.dlgAdicionarEspera.Hide();
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.OnMsBoxVisualizarEspera = function (resultado) {
        try {
            if (resultado.Resultado == MsgBoxResult.No) {
                return;
            }
            var parametrosTela = [];
            parametrosTela.push("dataInicial=" + ConvertToDate(resultado.Argument.dataInicial).FormataData());
            parametrosTela.push("dataFinal=" + ConvertToDate(resultado.Argument.dataFinal).FormataData());
            parametrosTela.push("codEmpresa=" + CNum(resultado.Argument.codEmpresa));
            parametrosTela.push("tamanhoBaia=" + CNum(resultado.Argument.tamanhoBaia));
            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.RelacaoReservaEspera), parametrosTela);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.onBtnMdlMotivoCancConfirmar = function (s, e) {
        try {
            if (String.IsNullOrWhiteSpace(this.txtMdlMotivoCanc.GetText())) {
                MostrarAlerta("Informe o motivo do cancelamento.");
                return;
            }
            this.TratarEntidadeAntesGravar();
            var parametros = {
                ReservaCancelar: JSON.stringify(this.GetScope().Entity),
                motivoCancelamento: this.txtMdlMotivoCanc.GetText(),
                Tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var result = this.ExecutarFuncaoServerSideSynch("CancelarReserva", parametros);
            if (result) {
                var parametros;
                var codReserva = this.txtCodigo.GetText().CNum();
                this.txtCodigo.Limpar();
                this.txtCodigo.Procurar(codReserva.toString());
                MostrarMensagem("Reserva cancelada com sucesso.");
                this.EnviarEmailHospedagem(1 /* enCancelamentoReserva */);
                parametros = {
                    codReserva: codReserva
                };
                var baiaReservaCancelada = this.ExecutarFuncaoServerSideSynch("GetBaiaReservaCancelada", parametros);
                parametros = {
                    dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                    dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                    codEmpresa: this.cboEmpresa.GetValue(),
                    tamanhoBaia: baiaReservaCancelada.Tamanho_Baia
                };
                var esperas = this.ExecutarFuncaoServerSideSynch("GetEsperasPeriodo", parametros);
                debugger;
                if (esperas.values && esperas.values.length > 0) {
                    var existeBaiaDisponivel = false;
                    var lista = esperas.values;
                    lista.forEach(function (item) {
                        if (item.Tamanho_Baia == baiaReservaCancelada.Tamanho_Baia) {
                            existeBaiaDisponivel = true;
                        }
                    });
                    parametros = {
                        dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                        dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                        codEmpresa: this.cboEmpresa.GetValue(),
                        tamanhoBaia: baiaReservaCancelada.Tamanho_Baia
                    };
                    if (existeBaiaDisponivel) {
                        MsgBoxJS("Existem reservas em espera no mesmo período desta que foi cancelada. Deseja visualiza-las?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnMsBoxVisualizarEspera, this), parametros);
                    }
                }
            }
            else {
                MostrarAlerta("Falha ao cancelar a reserva.");
            }
        }
        catch (e) {
            LogarException(e);
        }
        finally {
            this.txtMdlMotivoCanc.Limpar();
            this.dlgMotivoCancelamento.Hide();
        }
    };
    C_HosRes_Angular.prototype.onBtnMdlMotivoCancCancelar = function (s, e) {
        this.dlgMotivoCancelamento.ModalDialog.Hide();
        this.txtMdlMotivoCanc.Limpar();
        MostrarAlerta("Operação cancelada.");
    };
    C_HosRes_Angular.prototype.OnTxtCheckListProcuraProcurou = function (s, e) {
        try {
            var parametros;
            var entidade = this.GetScope().Entity;
            if (this.txtCheckListProcura.GetText().CNum() <= 0) {
                return;
            }
            if (!(entidade) || entidade.Codigo == null || entidade.Codigo == 0) {
                if (this.tab.Visible) {
                    MostrarAlerta("Informe uma reserva cadastrada.");
                    return;
                }
                else {
                    return;
                }
            }
            parametros = {
                codHospedagem: entidade.Hospedagem,
                codReserva: entidade.Codigo,
                codigoChecklist: this.GetScope().Entity.CheckListCodigo,
                checkListExistentes: this.GetScope().Entity.Checklist_Itens
            };
            if (!parametros.checkListExistentes) {
                parametros.checkListExistentes = [];
            }
            if (!parametros.codigoChecklist) {
                parametros.codigoChecklist = 0;
            }
            var checkListAtualizado = this.ExecutarFuncaoServerSideSynch("GetCheckListPreenchido", parametros);
            if (!checkListAtualizado) {
                checkListAtualizado = {};
                checkListAtualizado.Itens = [];
                checkListAtualizado.Descricao = "";
            }
            this.GetScope().Entity.Checklist_Itens = checkListAtualizado.Itens;
            this.GetScope().Entity.CheckList = checkListAtualizado.Descricao;
            this.grdCheckListItens.PreencherGrid(checkListAtualizado.Itens);
            this.GetScope().$applyAsync();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosRes_Angular.prototype.OnSalvouAssinatura = function (s, e) {
        try {
            var entidade;
            entidade = this.GetScope().Entity;
            if (!entidade.Assinatura) {
                entidade.Assinatura = {};
                entidade.Assinatura.Reserva = entidade.Codigo;
                entidade.Assinatura.Hospedagem = entidade.Hospedagem;
            }
            entidade.Assinatura.Assinatura = Sting64ToByteArray(this.sgnCheckList.assinaturaBase64);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosRes_Angular.prototype.OnClickAssinatura = function (s, e) {
        try {
            e.processOnServer = false;
            if (!window['atob']) {
                MostrarAlerta("Navegador não suporta esse recurso");
                return;
            }
            var assinatura = "";
            var entidade;
            entidade = this.GetScope().Entity;
            if (entidade.Assinatura && entidade.Assinatura.Assinatura && entidade.Assinatura.Assinatura.length > 0) {
                assinatura = ByteArrayToSting64(entidade.Assinatura.Assinatura);
            }
            this.sgnCheckList.assinaturaBase64 = assinatura;
            this.sgnCheckList.abrir();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosRes_Angular.prototype.OnClickImprimirChecklist = function (s, e) {
        try {
            e.processOnServer = false;
            var parametros;
            parametros = {
                descricaoChecklist: this.txtCheckListProcura.GetText(),
                itensChecklist: this.grdCheckListItens.DataSource
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetImpressaoMatricialChecklist", parametros);
            this.ImprimirMatricial(ValoresSismoura.NomeTela + "_CheckList", retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosRes_Angular.prototype.ExibirHoteisParceiros = function () {
        try {
            debugger;
            if (this.dlgAdicionarEspera) {
                var informacoes;
                informacoes = "Proprietário: " + this.txtPet.TextBoxProprietario.GetResultado();
                informacoes += "\nAnimal: " + this.txtPet.TextBoxAnimal.GetResultado();
                informacoes += "\nPeríodo: " + this.txtPeriodo.textBoxCalendarioInicio.GetDate().FormataData();
                informacoes += " - " + this.txtPeriodo.textBoxCalendarioFim.GetDate().FormataData();
                informacoes += "\nEmpresa: " + this.cboEmpresa.GetText();
                this.lblModalIndicacaoInformacoes.Text = informacoes.toString();
                this.dlgIndicarParceiro.ModalDialog.Show();
            }
            var parametros = {
                codEmpresa: this.cboEmpresa.GetValue(),
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum(),
                tipoHospedagem: this.optTipoHospedagem.GetValue()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetHoteisParceiros", parametros);
            this.gridIndicacao.PreencherGrid(retorno);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.onBtnDlgIndicacaoConfirmar = function (s, e) {
        try {
            debugger;
            e.processOnServer = false;
            var indicacoes = [];
            if (this.gridIndicacao && this.gridIndicacao.DataSource && this.gridIndicacao.DataSource.length > 0) {
                var selecionados = this.gridIndicacao.Grid.getSelectedRowKeys();
                if (selecionados) {
                    for (var i = 0; i < selecionados.length; i++) {
                        var indicacao = {};
                        indicacao.Animal = this.txtPet.TextBoxAnimal.GetText().CNum();
                        indicacao.Proprietario = this.txtPet.TextBoxProprietario.GetText().CNum();
                        indicacao.Data_Indicacao = this.DataServidor();
                        indicacao.Usuario_Indicou = this.txtFuncionario.GetText().CNum();
                        indicacao.Fornecedor = CNum(selecionados[i]);
                        indicacoes.push(indicacao);
                    }
                }
            }
            var parametros = {
                indicacoes: indicacoes,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GravarIndicacoes", parametros);
            if (retorno) {
                MostrarMensagem("Indicação realizada com sucesso.");
                this.EnviarEmailIndicacaoParceiro();
            }
            else {
                MostrarAlerta("Erro ao realizar indicação de hotel parceiro.");
            }
            this.dlgIndicarParceiro.Hide();
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.onBtnDlgIndicacaoCancelar = function (s, e) {
        try {
            e.processOnServer = false;
            this.lblModalIndicacaoInformacoes.Text = "";
            this.dlgIndicarParceiro.Hide();
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.onBtnIndicarParceiro = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.cboEmpresa.GetValue() == 0) {
                MostrarAlerta("Informe a empresa.");
                return;
            }
            if (this.txtFuncionario.GetText().CNum() == 0) {
                MostrarAlerta("Informe o funcionário responsável pela indicação.");
                return;
            }
            if (this.txtPet.TextBoxProprietario.GetText().CNum() == 0) {
                MostrarAlerta("Informe o Proprietário.");
                return;
            }
            if (this.txtPet.TextBoxAnimal.GetText().CNum() == 0) {
                MostrarAlerta("Informe o Animal.");
                return;
            }
            this.ExibirHoteisParceiros();
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.EnviarEmailIndicacaoParceiro = function () {
        try {
            var parametros;
            parametros = {
                codProprietario: this.txtPet.TextBoxProprietario.GetText().CNum(),
                codEmpresa: ValoresSismoura.EmpresaPadraoUsuario,
                codUsuario: this.txtFuncionario.GetText().CNum(),
                parceiros: this.gridIndicacao.Grid.getSelectedRowKeys()
            };
            abrirEspera("Aguarde. Enviando email...");
            this.ExecutarFuncaoServerSideAsynch("EmailIndicacaoHotelParceiro", parametros, function (d) {
                try {
                    var retorno = JSON.parse(d);
                    fecharEspera();
                    if (retorno) {
                        MostrarMensagem("Email enviado com sucesso.");
                    }
                    else {
                        MostrarAlerta("Email não enviado.");
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
        return true;
    };
    C_HosRes_Angular.prototype.GetDataHoraEntrada = function () {
        try {
            var data = this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate();
            var hora = ValoresSismoura.ConfiguracoesPetshop.Hospedagem_Checkin.split(':')[0].CNum();
            var minutos = ValoresSismoura.ConfiguracoesPetshop.Hospedagem_Checkin.split(':')[1].CNum();
            data.setHours(hora);
            data.setMinutes(minutos);
            data.setSeconds(0);
            return data;
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.GetDataHoraSaida = function () {
        try {
            var data = this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate();
            var hora = ValoresSismoura.ConfiguracoesPetshop.Hospedagem_Checkout.split(':')[0].CNum();
            var minutos = ValoresSismoura.ConfiguracoesPetshop.Hospedagem_Checkout.split(':')[1].CNum();
            data.setHours(hora);
            data.setMinutes(minutos);
            data.setSeconds(0);
            return data;
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.CarregarServicosVinculadosBaias = function () {
        if (!(this.cboBaia.Combo.GetValue() > 0)) {
            this.cboServicoDiaria.ClearItems();
            return;
        }
        var parametros = {
            baia: this.cboBaia.Combo.GetValue()
        };
        this.ServicosDiarias = this.ExecutarFuncaoServerSideSynch("GetServicosVinculadosBaia", parametros);
        this.PreencherServicosHospedagem(this.ServicosDiarias);
    };
    C_HosRes_Angular.prototype.PreencherServicosHospedagem = function (value) {
        this.cboServicoDiaria.ClearItems();
        if (this.ServicosDiarias && this.ServicosDiarias.length > 0) {
            for (var i = 0; i < this.ServicosDiarias.length; i++) {
                var descricao = this.ServicosDiarias[i].Nome;
                if (this.ServicosDiarias[i].Valor && this.ServicosDiarias[i].Valor > 0) {
                    descricao += " - R$ " + this.ServicosDiarias[i].Valor.Format(2);
                }
                this.cboServicoDiaria.AddItem(descricao, this.ServicosDiarias[i].Codigo, "");
            }
        }
    };
    C_HosRes_Angular.prototype.onRecalcularDias = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.isReservaFinalizada()) {
                return;
            }
            if (this.txtCodigo.GetText().CNum() == 0) {
                this.Diarias = [];
            }
            if (this.optTipoHospedagem.GetValue().CNum() == 1 /* HOTEL */) {
                this.RecalcularDiariasHotel();
            }
            else {
                this.RecalcularDiariasDayCare();
            }
            this.DiariaCalculada.Desconto = 0;
            this.DiariaCalculada.Valor = 0;
            this.DiariaCalculada.Valor_Final = 0;
            this.DiariaCalculada.Qtde = 0;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosRes_Angular.prototype.isReservaFinalizada = function () {
        if (this.GetScope().Entity.Hospedagem > 0) {
            MostrarAlerta("Esta reserva já foi utilizada, não será possível recalcular as diárias.");
            return true;
        }
        if (this.GetScope().Entity.Cancelada) {
            MostrarAlerta("Esta reserva foi cancelada.");
            return true;
        }
        return false;
    };
    C_HosRes_Angular.prototype.RecalcularDiariasHotel = function () {
        try {
            if (!this.validarCalculoDias()) {
                return;
            }
            if (!this.podeAdicionarDiaria(0, this.cboServicoDiaria.GetValue(), this.GetProfissionalDiaria.Codigo, this.GetDataHoraEntrada(), false)) {
                return;
            }
            this.grdDiarias.Grid.PreencherGrid(null);
            var horaCheckin = this.GetHorarioCheckin;
            var horaCheckout = this.GetHorarioCheckout;
            var parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                horaCheckin: horaCheckin,
                horaCheckout: horaCheckout,
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                codServicoAplicar: this.cboServicoDiaria.GetValue(),
                codProfissional: this.GetProfissionalDiaria.Codigo,
                aplicarTodos: true,
                diariasJSON: JSON.stringify(this.Diarias),
                descontoP: this.DiariaCalculada.Desconto_Porcentagem,
                codFuncionario: this.txtFuncionario.GetText().CNum(),
                codHospedagem: this.txtCodigo.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("RecalcularDiarias", parametros);
            this.Diarias = retorno;
            this.grdDiarias.Grid.PreencherGrid(retorno);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.RecalcularDiariasDayCare = function () {
        try {
            if (!this.validarCalculoDias()) {
                return;
            }
            if (this.lstSemana.SelectedValues.length == 0) {
                MostrarAlerta("Selecione os dias da semana ao qual as diárias serão aplicadas.");
                return;
            }
            var existeDiariaPaga = false;
            this.Diarias.forEach(function (x) {
                if (x.IsPago) {
                    existeDiariaPaga = true;
                    return;
                }
            });
            if (existeDiariaPaga) {
                var mensagem = "Existem diárias que já foram pagas, não será possível recalcular os dias. Utilize o botão Adicionar Diária.";
                MsgBoxJS(mensagem, MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
                return;
            }
            this.grdDiarias.Grid.PreencherGrid(null);
            var parametros = {
                dataInicial: this.GetDataHoraEntrada().ToDate(),
                dataFinal: this.GetDataHoraSaida().ToDate(),
                codServicoAplicar: this.cboServicoDiaria.GetValue(),
                codProfissional: this.GetProfissionalDiaria.Codigo,
                aplicarTodos: true,
                diariasJSON: JSON.stringify(this.Diarias),
                codHospedagem: this.txtCodigo.GetText().CNum(),
                descontoP: this.DiariaCalculada.Desconto_Porcentagem,
                diasSemana: this.lstSemana.SelectedValues
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("RecalcularDiariasDayCare", parametros);
            if (!retorno || retorno.length == 0) {
                MostrarAlerta("As diárias não foram adicionadas, verifique se os dias da semana estão dentro do período informado.");
                return;
            }
            else {
                var qtdeDiarias = this.GetNumeroDiariasGerarDaycare();
                if ((retorno.length < qtdeDiarias) || retorno.length > qtdeDiarias) {
                    MostrarAlerta("O número de diárias calculadas pelo sistema não confere com as datas de entrada e saída, verifique se os dias da semana estão dentro do período informado.");
                    return;
                }
            }
            this.Diarias = retorno;
            this.grdDiarias.Grid.PreencherGrid(retorno);
        }
        catch (e) {
            throw e;
        }
    };
    C_HosRes_Angular.prototype.GetNumeroDiariasGerar = function () {
        try {
            var diasSemana = [];
            if (CNum(this.optTipoHospedagem.GetValue()) == 2 /* DAYCARE */) {
                diasSemana = this.lstSemana.SelectedValues;
            }
            var horaCheckin = this.GetHorarioCheckin;
            var horaCheckout = this.GetHorarioCheckout;
            var dataSaida = this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate();
            var parametros = {
                dataEntrada: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataSaida: dataSaida,
                horaCheckin: horaCheckin,
                horaCheckout: horaCheckout,
                diasSemana: diasSemana
            };
            var qtdeDiarias = this.ExecutarFuncaoServerSideSynch("GetQuantidadeDiarias", parametros);
            return qtdeDiarias;
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.validarCalculoDias = function () {
        if (!this.GetProfissionalDiaria || this.GetProfissionalDiaria.Codigo <= 0) {
            MostrarAlerta("O profissional utilizado para lançar as diárias não foi encontrado. Informe o parâmetro na tela de configurações.");
            return false;
        }
        if (this.txtPeriodo.textBoxCalendarioInicio.GetDate() == null || this.txtPeriodo.textBoxCalendarioInicio.GetDate() == undefined) {
            MostrarAlerta("Informe a data de entrada.");
            return false;
        }
        if (this.txtPeriodo.textBoxCalendarioFim.GetDate() == null || this.txtPeriodo.textBoxCalendarioFim.GetDate() == undefined) {
            MostrarAlerta("Informe a data de saída.");
            return false;
        }
        var dataInicial = this.GetDataHoraEntrada();
        var dataFinal = this.GetDataHoraSaida();
        if (dataInicial.getTime() > dataFinal.getTime()) {
            MostrarAlerta("A data de entrada não pode ser maior que a data de saída.");
            return false;
        }
        var selectedValue = this.cboServicoDiaria.GetValue();
        if (selectedValue == null) {
            MostrarAlerta("Informe o serviço da diária.");
            return false;
        }
        return true;
    };
    C_HosRes_Angular.prototype.podeAdicionarDiaria = function (codAtendimento, codServico, codProfissional, dataExecucao, isCheckout) {
        try {
            var entidade = {};
            entidade.Atendimento = codAtendimento;
            entidade.Servico = codServico;
            entidade.Profissional = codProfissional;
            entidade.Data_Execucao = dataExecucao;
            if (!entidade.Servico || entidade.Servico == 0) {
                MostrarAlerta("Serviço não informado.");
                return false;
            }
            this.retornoComplementosItemServico = this.getRetornoComplementoItemServico(entidade);
            if (!this.retornoComplementosItemServico.IsProfissionalAutorizadoFazerServico) {
                //MostrarAlerta("Este profissional não pode realizar o serviço selecionado. Verifique na tela Tipo de Profissional X Grupo de Serviço");
                MostrarAlerta("Este profissional não pode realizar o serviço selecionado. Verifique na tela Tipo de Profissional X Grupo de Serviço");
                return false;
            }
            if (!this.retornoComplementosItemServico.IsProfissionalEmpresa) {
                //MostrarAlerta("O Profissional informado não pode realizar nenhum serviço para a empresa do atendimento.Para permitir, abra o Cadastro de Profissional e marque- o na empresa desejada.Logo após realize novamente o procedimento.");
                MostrarAlerta("O Profissional informado não pode realizar nenhum serviço para a empresa do atendimento.Para permitir, abra o Cadastro de Profissional e marque- o na empresa desejada.Logo após realize novamente o procedimento.");
                return false;
            }
            if (this.retornoComplementosItemServico.IsAtendimentoPago || this.retornoComplementosItemServico.IsAtendimentoIntegradoZanthus) {
                if (this.retornoComplementosItemServico.IsAtendimentoIntegradoZanthus) {
                    MostrarAlerta("Não é possível incluir serviços em um atendimento que já foi integrado");
                }
                else {
                    MostrarAlerta("Não é possível incluir serviços em um atendimento que já foi pago");
                }
                return false;
            }
            if (this.Diarias) {
                var qtdeDiarias = this.GetNumeroDiariasGerar();
                if (this.Diarias.length > 0 && this.Diarias.length == qtdeDiarias) {
                    MostrarAlerta("As diárias já foram preenchidas dentro do período de entrada e saída.");
                    return false;
                }
            }
            return true;
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.OnValidandoAlteracaoDiaria = function (s, e) {
        try {
            var fieldAlterado = "" + e.fieldNameAlterado;
            var entidade;
            entidade = e.item;
            var diarias = this.Diarias;
            if (!diarias) {
                diarias = [];
            }
            if (!entidade.Dia_Servico) {
                e.errorText = "Informe o dia da diária";
                e.cancelar = true;
                return;
            }
            if (!entidade.Servico || entidade.Servico == 0) {
                e.errorText = "Serviço não informado.";
                e.cancelar = true;
                return;
            }
            this.getRetornoComplementoItemServico(entidade, e.index, CNum(this.cboBaia.GetValue()));
            if (!this.retornoComplementosItemServico.IsProfissionalAutorizadoFazerServico) {
                //MostrarAlerta("Este profissional não pode realizar o serviço selecionado. Verifique na tela Tipo de Profissional X Grupo de Serviço");
                e.errorText = "Este profissional não pode realizar o serviço selecionado. Verifique na tela Tipo de Profissional X Grupo de Serviço";
                e.cancelar = true;
                return;
            }
            if (!this.retornoComplementosItemServico.IsProfissionalEmpresa) {
                //MostrarAlerta("O Profissional informado não pode realizar nenhum serviço para a empresa do atendimento.Para permitir, abra o Cadastro de Profissional e marque- o na empresa desejada.Logo após realize novamente o procedimento.");
                e.errorText = "O Profissional informado não pode realizar nenhum serviço para a empresa do atendimento.Para permitir, abra o Cadastro de Profissional e marque- o na empresa desejada.Logo após realize novamente o procedimento.";
                e.cancelar = true;
                return;
            }
            if (this.retornoComplementosItemServico.IsAtendimentoPago || this.retornoComplementosItemServico.IsAtendimentoIntegradoZanthus) {
                if (fieldAlterado.toLocaleLowerCase() == "Presenca_Text") {
                    if (e.oldRowValue.Presenca_Text == "Sim") {
                        e.errorText = "Não é possível alterar a coluna Presença de uma diária já concluída e paga!";
                        e.cancelar = true;
                        return;
                    }
                    if (e.item.Presenca_Text == "Sim") {
                        e.item.Concluido = true;
                        e.item.Presenca = "S";
                    }
                    else if (e.item.Presenca_Text == "Não") {
                        e.item.Concluido = false;
                        e.item.Presenca = "N";
                    }
                    else {
                        e.item.Concluido = false;
                        e.item.Presenca = ""; //Valor em branco caracteriza que não informou se o PET veio ou não.
                    }
                }
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
                else { //Alterando um serviço
                    if (fieldAlterado.toLowerCase() == "servico") {
                        if (this.retornoComplementosItemServico.IsAtendimentoIntegradoZanthus) {
                            e.errorText = "Não é possível alterar uma diária de um atendimento que já foi integrado";
                        }
                        else {
                            e.errorText = "Não é possível alterar uma diária de um atendimento que já foi pago";
                        }
                        e.cancelar = true;
                        return;
                    }
                }
            }
            if (fieldAlterado.toLocaleLowerCase() == "servico") {
                var listaServicos = this.DeserializarJSONEncoded(this.hdnServicosHospedagem.value);
                if (!this.retornoComplementosItemServico.IsPermitidoBaia) {
                    e.errorText = "O Serviço selecionado não pode ser aplicado a baia que foi selecionada para esta hospedagem.";
                    e.item.Servico = e.oldRowValue.Servico;
                    e.cancelar = true;
                    return;
                }
                if (this.retornoComplementosItemServico.IsAtendimentoPago) {
                    e.errorText = "O Serviço não pode ser alterado, pois o atendimento já foi pago.";
                    e.item.Servico = e.oldRowValue.Servico;
                    e.cancelar = true;
                    return;
                }
                listaServicos.forEach(function (x) {
                    if (x.Codigo == e.item.Servico) {
                        e.item.Valor = x.Valor;
                        e.item.Valor_Final = x.Valor;
                    }
                });
            }
            if (fieldAlterado.toLocaleLowerCase() == "dia_servico") {
                var novoDia = this.SetHoraData(e.item.Dia_Servico, true);
                var isDataRepetida = false;
                //Verifica se a nova data está conflitando com uma data já calculada;
                this.Diarias.forEach(function (x) {
                    if (DiffDays(novoDia.ToDate(), x.Dia_Servico.ToDate()) == 0) {
                        isDataRepetida = true;
                        return;
                    }
                });
                if (isDataRepetida) {
                    e.errorText = "A data informada já foi registrada na hospedagem.";
                    e.item.Dia_Servico = e.oldRowValue.Dia_Servico;
                    e.cancelar = true;
                    return;
                }
                if (!(novoDia.isBetween(this.GetDataHoraEntrada().ToDate(), this.GetDataHoraSaida().ToDate(), false))) {
                    e.errorText = "A data informada está fora do período da hospedagem.";
                    e.item.Dia_Servico = e.oldRowValue.Dia_Servico;
                    e.cancelar = true;
                    return;
                }
                if (DiffDays(this.SetHoraData(novoDia, false), this.GetDataHoraSaida().ToDate()) == 0) {
                    e.errorText = "A data informada está fora do período da hospedagem.";
                    e.item.Dia_Servico = e.oldRowValue.Dia_Servico;
                    e.cancelar = true;
                    return;
                }
                var parametros = {
                    codLocal: this.txtLocalHospedagem.GetText().CNum(),
                    dataInicial: this.SetHoraData(novoDia, true).ToDate(),
                    dataFinal: this.SetHoraData(novoDia, false).ToDate(),
                    codBaia: this.cboBaia.Combo.GetValue()
                };
                //Verificar se a data selecionanda está livre para a baia desta hospedagem;
                var baiaInfo = this.ExecutarFuncaoServerSideSynch("GetDadosBaia", parametros);
                if (baiaInfo) {
                    if ((this.optTipoHospedagem.GetValue().CNum() == 1 /* HOTEL */)
                        && (baiaInfo.Animais_Baia > 0 && baiaInfo.Proprietario != this.EntityTela.Proprietario)
                        && !(baiaInfo.Permitir_Pet_Proprietario_Diferente)) {
                        e.errorText = "A data está indisponível no dia informado";
                        e.item.Dia_Servico = e.oldRowValue.Dia_Servico;
                        e.cancelar = true;
                        return;
                    }
                    else {
                        if (this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */) {
                            if (baiaInfo.Animais_Baia == baiaInfo.Lotacao_Maxima) {
                                e.errorText = "A data está indisponível no dia informado";
                                e.item.Dia_Servico = e.oldRowValue.Dia_Servico;
                                e.cancelar = true;
                                return;
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
    C_HosRes_Angular.prototype.IniciarValoresAutomaticosDiaria = function (Servico) {
        Object.defineProperty(Servico, "Presenca_Text", {
            get: function () {
                var retorno = "Não Marcada";
                if (Servico.Presenca == "S") {
                    retorno = "Sim";
                }
                else if (Servico.Presenca == "N") {
                    retorno = "Não";
                }
                return retorno;
            },
            set: function (val) {
                if (val == "Sim") {
                    Servico.Presenca = "S";
                }
                else if (val == "Não") {
                    Servico.Presenca = "N";
                }
                else { //Não Marcada
                    Servico.Presenca = "";
                }
            },
            enumerable: true,
            configurable: true
        });
    };
    C_HosRes_Angular.prototype.OnSetouItemDiaria = function (s, e) {
        var entidade;
        entidade = e.item;
        this.IniciarValoresAutomaticosDiaria(entidade);
    };
    C_HosRes_Angular.prototype.OnAlterandoDiaria = function (s, e) {
        var valorAntigo = e.oldRowValue;
    };
    C_HosRes_Angular.prototype.getRetornoComplementoItemServico = function (entidade, indexItem, codBaia) {
        try {
            if (!indexItem || indexItem < 0)
                indexItem = 0;
            if (!codBaia || codBaia < 0)
                codBaia = 0;
            var validar = false;
            if (!this.retornoComplementosItemServico || this.retornoComplementosItemServico.Codigo_Servico != entidade.Servico) {
                validar = true;
            }
            else if ((this.retornoComplementosItemServico) && (this.retornoComplementosItemServico.IsProfissionalEmpresa == false)) {
                validar = true;
            }
            else {
                validar = false;
            }
            //debugger;
            if (validar) {
                var parametros;
                var contemAgendamentoSelecionado = false;
                parametros = {
                    codServico: ("" + entidade.Servico).CNum(),
                    indexItem: indexItem,
                    codAtendimento: ("" + entidade.Atendimento).CNum(),
                    codAnimal: ("" + this.GetScope().Entity.Animal).CNum(),
                    codProfissional: ("" + entidade.Profissional).CNum(),
                    contemAgendamentoSelecionado: false,
                    dataServico: entidade.Data_Execucao,
                    horaServico: entidade.Data_Execucao.ToDate(),
                    codEmpresa: this.cboEmpresa.GetValue(),
                    codBaia: codBaia
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
    C_HosRes_Angular.prototype.SetHoraData = function (data, isDataEntrada) {
        try {
            var data = data;
            var hora;
            var minutos;
            if (isDataEntrada) {
                hora = this.GetHorarioCheckin.split(':')[0].CNum();
                minutos = this.GetHorarioCheckin.split(':')[1].CNum();
            }
            else {
                hora = this.GetHorarioCheckout.split(':')[0].CNum();
                minutos = this.GetHorarioCheckout.split(':')[1].CNum();
            }
            data.setHours(hora);
            data.setMinutes(minutos);
            data.setSeconds(0);
            return data;
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.AtualizarLabelQtdeDias = function () {
        var totalDias = 0;
        if (this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */) {
            totalDias = this.GetNumeroDiariasGerarDaycare();
            if (this.lstSemana.GetValues().length == 0) {
                this.lblQtdeDias.Text = "Quantidade de dias: 0";
                this.lblDias2.Text = this.lblQtdeDias.Text;
                return;
            }
        }
        else {
            totalDias = this.getQuantidadeDias();
        }
        this.lblQtdeDias.Text = "Quantidade de dias: " + totalDias;
        this.lblDias2.Text = this.lblQtdeDias.Text;
    };
    C_HosRes_Angular.prototype.GetNumeroDiariasGerarDaycare = function () {
        try {
            var diasSemana = [];
            if (CNum(this.optTipoHospedagem.GetValue()) == 2 /* DAYCARE */) {
                diasSemana = this.lstSemana.SelectedValues;
            }
            var parametros = {
                dataEntrada: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataSaida: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                diasSemana: diasSemana
            };
            var qtdeDiarias = this.ExecutarFuncaoServerSideSynch("GetQuantidadeDiariasDayCare", parametros);
            return qtdeDiarias;
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.TratarEntidadeAntesGravar = function () {
        try {
            var entidade = this.GetScope().Entity;
            entidade.Data_Entrada = this.GetDataHoraEntrada().ToDate();
            entidade.Data_Saida = this.GetDataHoraSaida().ToDate();
            entidade.Proprietario_Nome = this.txtPet.TextBoxProprietario.GetResultado().toString();
            entidade.Baia = this.cboBaia.Combo.GetValue();
            entidade.DiasSemana = [];
            if (this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */) {
                entidade.DiasSemana = this.RetornarDiasSemana();
            }
            this.PreencherItens(entidade);
            this.GetScope().Entity = entidade;
            this.RefreshAngular();
            this.isCadastroNovo = false;
            if (entidade.Codigo && entidade.Codigo != null) {
                if (entidade.Codigo == 0) {
                    this.isCadastroNovo = true;
                }
            }
            else {
                this.isCadastroNovo = true;
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.PreencherItens = function (entidade) {
        try {
            entidade.Diarias = [];
            entidade.Diarias.push.apply(entidade.Diarias, this.Diarias);
            return true;
        }
        catch (e) {
            LogarException(e);
            return false;
        }
    };
    C_HosRes_Angular.prototype.RetornarDiasSemana = function () {
        var retorno = [];
        if (CNum(this.cboMeioPagamento.GetValue()) == 2 /* enLinkEmail */) {
            var parametros = {
                diariasJSON: JSON.stringify(this.Diarias)
            };
            retorno = this.ExecutarFuncaoServerSideSynch("GetDiasSemanaDiarias", parametros);
        }
        else {
            this.lstSemana.SelectedValues.forEach(function (x) {
                var dia = {};
                switch (CNum(x)) {
                    case 0 /* DOMINGO */:
                        x = 0 /* DOMINGO */;
                        break;
                    case 1 /* SEGUNDA */:
                        x = 1 /* SEGUNDA */;
                        break;
                    case 2 /* TERCA */:
                        x = 2 /* TERCA */;
                        break;
                    case 3 /* QUARTA */:
                        x = 3 /* QUARTA */;
                        break;
                    case 4 /* QUINTA */:
                        x = 4 /* QUINTA */;
                        break;
                    case 5 /* SEXTA */:
                        x = 5 /* SEXTA */;
                        break;
                    case 6 /* SABADO */:
                        x = 6 /* SABADO */;
                        break;
                }
                dia = x;
                retorno.push(dia);
            });
        }
        return retorno;
    };
    C_HosRes_Angular.prototype.HabilitarDesabilitarControles = function (isLimpandoTela) {
        //var habilitar: boolean = this.Habilitar();
        var habilitar = true;
        if (this.txtCodigo.GetText().CNum() > 0) {
            habilitar = false;
        }
        if (isLimpandoTela) {
            habilitar = true;
        }
        this.cboEmpresa.Enabled = habilitar;
        this.txtFuncionario.Disabled = !habilitar;
        this.txtPeriodo.textBoxCalendarioInicio.SetEnabled(habilitar);
        this.txtPeriodo.textBoxCalendarioFim.SetEnabled(habilitar);
        this.txtPet.TextBoxAnimal.Disabled = !habilitar;
        this.txtPet.TextBoxProprietario.Disabled = !habilitar;
        this.optTipoHospedagem.Enabled = habilitar;
        this.cboServicoDiaria.Enabled = habilitar;
        this.btnRecalcularDiarias.SetEnabled(habilitar);
        this.txtLocalHospedagem.Disabled = !habilitar;
        this.cboBaia.Enabled = habilitar;
        this.btnEsperaReserva.SetEnabled(habilitar);
        this.btnIndicarParceiro.SetEnabled(habilitar);
        if (ValoresSismoura.ConfiguracoesPetshop.Hospedagem_Utilizar_Pagamento_Email) {
            if (this.cboMeioPagamento.Combo) {
                if (this.EntityTela && this.EntityTela.Meio_Pagamento == 2 /* enLinkEmail */) {
                    if (this.EntityTela.Pagamento_Email_STOOM
                        && (this.EntityTela.Pagamento_Email_STOOM.Status_Pagamento_Stoom == 1 /* enAutorizado */
                            || this.EntityTela.Pagamento_Email_STOOM.Status_Pagamento_Stoom == 2 /* enCapturado */))
                        this.cboMeioPagamento.Enabled = habilitar;
                }
            }
        }
        this.HabilitarDesabilitarCamposAvaliacaoFisica(habilitar);
        if (this.lstSemana.Visible) {
            this.lstSemana.Enabled = habilitar;
        }
    };
    C_HosRes_Angular.prototype.HabilitarDesabilitarCamposAvaliacaoFisica = function (habilitar) {
        //Aba CheckList - Avaliação Fisica.
        if (this.txtCheckListProcura.GetText().CNum() > 0 && this.GetScope().Entity && this.GetScope().Entity.CheckListCodigo > 0) {
            this.txtCheckListProcura.Disabled = !habilitar;
            this.txtCheckList.Disabled = !habilitar;
            this.txtProfissionalCheckList.Disabled = !habilitar;
            if (!this.EntityTela.Assinatura.Assinatura || this.EntityTela.Assinatura.Assinatura.length == 0) {
                this.sgnCheckList.btnSalvar.disabled = false;
                this.sgnCheckList.btnLimpar.disabled = false;
                this.sgnCheckList.setEnabled(true);
            }
            else {
                this.sgnCheckList.btnSalvar.disabled = !habilitar;
                this.sgnCheckList.btnLimpar.disabled = !habilitar;
                this.sgnCheckList.setEnabled(habilitar);
            }
            this.grdCheckListItens.Enabled = habilitar;
            this.grdCheckListItens.PermitirEditarGrid = habilitar;
        }
        else {
            this.txtCheckListProcura.Disabled = false;
            this.txtCheckList.Disabled = false;
            this.txtProfissionalCheckList.Disabled = false;
            this.sgnCheckList.btnSalvar.disabled = false;
            this.sgnCheckList.btnLimpar.disabled = false;
            this.sgnCheckList.setEnabled(true);
            this.grdCheckListItens.PermitirEditarGrid = true;
            this.grdCheckListItens.Enabled = true;
        }
    };
    C_HosRes_Angular.prototype.validarInformacoesAntesGravar = function () {
        try {
            var totalDias = 0;
            if (this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */) {
                totalDias = this.GetNumeroDiariasGerarDaycare();
            }
            else {
                totalDias = this.getQuantidadeDias();
            }
            var mensgem = "\n                                    Aten\u00E7\u00E3o. o per\u00EDodo da reserva informado foi de " + this.txtPeriodo.textBoxCalendarioInicio.GetDate().FormataData() + " \n                                    at\u00E9 " + this.txtPeriodo.textBoxCalendarioFim.GetDate().FormataData() + " totalizando " + totalDias + " dia(s). Deseja confirmar as datas e prosseguir com a reserva?\n                                    ";
            MsgBoxJS(mensgem, MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnValidandoInformacoesReserva, this));
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.OnValidandoInformacoesReserva = function (result) {
        if (result.Resultado == MsgBoxResult.No) {
            return;
        }
        this.validouInformacoesReserva = true;
        this.ClicarGravar();
    };
    C_HosRes_Angular.prototype.getQuantidadeDias = function () {
        var totalDias = this.GetNumeroDiariasGerar();
        return totalDias;
    };
    C_HosRes_Angular.prototype.OnRespostaAvaliacaoComportamental = function (resultado) {
        try {
            if (resultado.Resultado == MsgBoxResult.No) {
                return;
            }
            var parametrosTela = [];
            parametrosTela.push("pet=" + CNum(this.txtPet.TextBoxAnimal.GetText().CNum()));
            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.AvaliacaoComportamental), parametrosTela);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.calcularUltimoDiaMensalidadeDaycare = function (dtInicial) {
        try {
            var dtAux = dtInicial;
            dtAux.setHours(0, 0, 0, 0);
            //Estou adicionando desta forma pois preciso considerar a data inicial como um dia utilizado.
            for (var i = 1; i < 30; i++) {
                dtAux = dtAux.addDays(1);
            }
            return dtAux;
        }
        catch (e) {
        }
    };
    C_HosRes_Angular.prototype.calcularDescontoPDiaria = function () {
        try {
            var codServico = this.cboServicoDiaria.GetValue();
            if (!codServico || codServico == 0) {
                this.DiariaCalculada.Valor = 0;
                this.DiariaCalculada.Qtde = 0;
                this.DiariaCalculada.Valor_Final = 0;
                this.DiariaCalculada.Desconto = 0;
                return;
            }
            var listaServicos = this.DeserializarJSONEncoded(this.hdnServicosHospedagem.value);
            var servico = {};
            listaServicos.forEach(function (x) {
                if (x.Codigo == codServico) {
                    servico = x;
                }
            });
            if (!servico)
                return;
            var quantidadeGerar = 0; //this.GetNumeroDiariasGerar();
            if (this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */) {
                quantidadeGerar = this.GetNumeroDiariasGerarDaycare();
            }
            else {
                quantidadeGerar = this.getQuantidadeDias();
            }
            if (this.Diarias) {
                var diariasGeradas = 0;
                this.Diarias.forEach(function (x) {
                    if (x.Atendimento && x.Atendimento > 0) {
                        diariasGeradas += 1;
                    }
                });
                quantidadeGerar = quantidadeGerar - diariasGeradas;
            }
            this.DiariaCalculada.Valor = servico.Valor * quantidadeGerar;
            this.DiariaCalculada.Qtde = quantidadeGerar;
            var descontoP = 0;
            if (this.DiariaCalculada.Desconto_Porcentagem && this.DiariaCalculada.Desconto_Porcentagem > 0) {
                descontoP = this.DiariaCalculada.Desconto_Porcentagem;
                if (descontoP >= 100) {
                    MostrarAlerta("O desconto deve ser inferiro a 100%");
                    this.DiariaCalculada.Valor_Final = this.DiariaCalculada.Valor;
                    this.DiariaCalculada.Desconto = 0;
                    this.DiariaCalculada.Desconto_Porcentagem = 0;
                    return;
                }
            }
            else {
                this.DiariaCalculada.Valor_Final = this.DiariaCalculada.Valor;
                this.DiariaCalculada.Desconto = 0;
                this.DiariaCalculada.Desconto_Porcentagem = 0;
            }
            if (descontoP > 0) {
                this.DiariaCalculada.Desconto_Porcentagem = descontoP;
                this.DiariaCalculada.Valor_Final = this.DiariaCalculada.Valor - ((this.DiariaCalculada.Valor * this.DiariaCalculada.Desconto_Porcentagem) / 100);
                this.DiariaCalculada.Desconto = this.DiariaCalculada.Valor - this.DiariaCalculada.Valor_Final;
            }
            this.RefreshAngular();
            this.verificadoAutorizacaoDescontoHospedagem = false;
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.calcularDescontoDiaria = function () {
        try {
            var codServico = this.cboServicoDiaria.GetValue();
            if (!codServico || codServico == 0) {
                this.DiariaCalculada.Valor = 0;
                this.DiariaCalculada.Qtde = 0;
                this.DiariaCalculada.Valor_Final = 0;
                this.DiariaCalculada.Desconto = 0;
                return;
            }
            var listaServicos = this.DeserializarJSONEncoded(this.hdnServicosHospedagem.value);
            var servico = {};
            listaServicos.forEach(function (x) {
                if (x.Codigo == codServico) {
                    servico = x;
                }
            });
            if (!servico)
                return;
            var quantidadeGerar = 0; //this.GetNumeroDiariasGerar();
            if (this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */) {
                quantidadeGerar = this.GetNumeroDiariasGerarDaycare();
            }
            else {
                quantidadeGerar = this.getQuantidadeDias();
            }
            if (this.Diarias) {
                var diariasGeradas = 0;
                this.Diarias.forEach(function (x) {
                    if (x.Atendimento && x.Atendimento > 0) {
                        diariasGeradas += 1;
                    }
                });
                quantidadeGerar = quantidadeGerar - diariasGeradas;
            }
            this.DiariaCalculada.Valor = servico.Valor * quantidadeGerar;
            this.DiariaCalculada.Qtde = quantidadeGerar;
            var descontoP = 0;
            if (this.DiariaCalculada.Desconto && this.DiariaCalculada.Desconto > 0) {
                descontoP = (((((this.DiariaCalculada.Valor - this.DiariaCalculada.Desconto) / this.DiariaCalculada.Valor) - 1) * 100) * -1);
                descontoP = parseFloat(descontoP.toFixed(2));
                if (descontoP >= 100) {
                    MostrarAlerta("O desconto deve ser inferiro a 100%");
                    this.DiariaCalculada.Valor_Final = this.DiariaCalculada.Valor;
                    this.DiariaCalculada.Desconto = 0;
                    this.DiariaCalculada.Desconto_Porcentagem = 0;
                    return;
                }
            }
            else {
                this.DiariaCalculada.Valor_Final = this.DiariaCalculada.Valor;
                this.DiariaCalculada.Desconto = 0;
                this.DiariaCalculada.Desconto_Porcentagem = 0;
            }
            if (descontoP > 0) {
                this.DiariaCalculada.Desconto_Porcentagem = descontoP;
                this.DiariaCalculada.Valor_Final = this.DiariaCalculada.Valor - ((this.DiariaCalculada.Valor * this.DiariaCalculada.Desconto_Porcentagem) / 100);
                this.DiariaCalculada.Desconto = this.DiariaCalculada.Valor - this.DiariaCalculada.Valor_Final;
            }
            this.RefreshAngular();
            this.verificadoAutorizacaoDescontoHospedagem = false;
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.onTxtDescontoDiariaLostFocus = function (s) {
        try {
            this.verificarDescontoMaxPermitido(false);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.onTxtDescontoPorcentDiaria = function (s) {
        try {
            this.verificarDescontoMaxPermitido(false);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.verificarDescontoMaxPermitido = function (verificarSenha, onError) {
        var _this = this;
        try {
            if (!this.DiariaCalculada || !(this.DiariaCalculada.Desconto_Porcentagem > 0)) {
                return;
            }
            if (!this.verificadoAutorizacaoDescontoHospedagem) {
                this.dlgFuncaoAdm.Verificar("DescHospedagem", ValoresSismoura.UsuarioLogado, false, function (retorno) {
                    if (retorno.Autorizado) {
                        var parametros = {
                            codUsuario: retorno.Usuario
                        };
                        var descMaximoGrupoUsuario = CNum(_this.ExecutarFuncaoServerSideSynch("RetornarDescontoMaximoGrupo", parametros));
                        if (descMaximoGrupoUsuario == 0) {
                            MostrarAlerta("O usu\u00E1rio n\u00E3o pode aplicar descontos.");
                            if (verificarSenha && onError) {
                                onError();
                                return;
                            }
                            if (ValoresSismoura.UsuarioLogado == retorno.Usuario) {
                                _this.verificarDescontoMaxPermitido(true, function () {
                                    _this.LimparCamposDesconto();
                                });
                            }
                            return;
                        }
                        else if (_this.DiariaCalculada.Desconto_Porcentagem > descMaximoGrupoUsuario) {
                            MostrarAlerta("O usu\u00E1rio n\u00E3o pode aplicar este desconto. O desconto m\u00E1ximo para o usu\u00E1rio \u00E9 " + descMaximoGrupoUsuario + "%");
                            if (verificarSenha && onError) {
                                onError();
                                return;
                            }
                            if (ValoresSismoura.UsuarioLogado == retorno.Usuario) {
                                _this.verificarDescontoMaxPermitido(true, function () {
                                    _this.LimparCamposDesconto();
                                });
                            }
                            return;
                        }
                        _this.DiariaCalculada.Valor_Final = _this.DiariaCalculada.Valor - ((_this.DiariaCalculada.Valor * _this.DiariaCalculada.Desconto_Porcentagem) / 100);
                        _this.DiariaCalculada.Desconto = _this.DiariaCalculada.Valor - _this.DiariaCalculada.Valor_Final;
                        _this.RefreshAngular();
                        _this.verificadoAutorizacaoDescontoHospedagem = true;
                    }
                    else {
                        MostrarAlerta("O usu\u00E1rio n\u00E3o pode aplicar descontos.");
                        //this.LimparCamposDesconto();
                        if (ValoresSismoura.UsuarioLogado == retorno.Usuario) {
                            _this.verificarDescontoMaxPermitido(true, function () {
                                _this.LimparCamposDesconto();
                            });
                        }
                        return;
                    }
                }, this, verificarSenha, function (retorno) {
                    _this.LimparCamposDesconto();
                    return;
                });
            }
            else {
                this.DiariaCalculada.Valor_Final = this.DiariaCalculada.Valor - ((this.DiariaCalculada.Valor * this.DiariaCalculada.Desconto_Porcentagem) / 100);
                this.DiariaCalculada.Desconto = this.DiariaCalculada.Valor - this.DiariaCalculada.Valor_Final;
                this.RefreshAngular();
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.LimparCamposDesconto = function () {
        this.verificadoAutorizacaoDescontoHospedagem = false;
        this.DiariaCalculada.Valor_Final = 0;
        this.DiariaCalculada.Valor = 0;
        this.DiariaCalculada.Qtde = 0;
        this.DiariaCalculada.Desconto = 0;
        this.DiariaCalculada.Desconto_Porcentagem = 0;
        this.RefreshAngular();
    };
    C_HosRes_Angular.prototype.alterarModoPagamento = function () {
        var _this = this;
        try {
            this.enviarEmailPagamentoDepoisGravar = false;
            //Verifica se é uma reserva já cadastrada.
            if (this.GetScope().Entity && this.GetScope().Entity.Codigo > 0) {
                var parametros = {
                    codReserva: this.GetScope().Entity.Codigo
                };
                var reservaBanco = this.ExecutarFuncaoServerSideSynch("GetReservaByCodigo", parametros);
                if (!this.podeAlterarMeioPagamento()) {
                    //this.validouAlterarMeioPagamento = false;
                    this.GetScope().Entity.Meio_Pagamento = reservaBanco.Meio_Pagamento;
                    this.cboMeioPagamento.SetValue(this.GetScope().Entity.Meio_Pagamento);
                    this.RefreshAngular();
                    this.VerificarVisibilidadeAbas();
                    return;
                }
                //Solicitar função administrativa para alterar o modo de pagamento.
                this.dlgFuncaoAdm.Verificar("AltModPagtoHosp", ValoresSismoura.UsuarioLogado, false, function (ret) {
                    if (ret.Autorizado) {
                        if (reservaBanco) {
                            if (reservaBanco.Meio_Pagamento == CNum(_this.cboMeioPagamento.GetValue())) {
                                return;
                            }
                            else {
                                _this.verificarStatusAtendimento(function (result) {
                                    if (!result || !result.retorno) {
                                        MostrarAlerta(result.mensagem);
                                        _this.GetScope().Entity.Meio_Pagamento = reservaBanco.Meio_Pagamento;
                                        _this.cboMeioPagamento.SetValue(CNum(_this.cboMeioPagamento.GetValue()));
                                        _this.RefreshAngular();
                                        _this.VerificarVisibilidadeAbas();
                                        return;
                                    }
                                    if (result.status == 3 /* AtendimentoPago */) {
                                        MostrarAlerta(result.mensagem);
                                        return;
                                    }
                                    else if (result.status == 2 /* EnvioEfetuado */) {
                                        MsgBoxJS("Atenção! Existem atendimentos que foram enviados para pagamento no PDV da Zanthus. Deseja realmente alterar o meio de pagamento?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                                            if (result.Resultado == MsgBoxResult.No) {
                                                MostrarAlerta("Operação cancelada pelo usuário.");
                                                _this.GetScope().Entity.Meio_Pagamento = reservaBanco.Meio_Pagamento;
                                                _this.cboMeioPagamento.SetValue(_this.GetScope().Entity.Meio_Pagamento);
                                                _this.RefreshAngular();
                                                _this.VerificarVisibilidadeAbas();
                                                return;
                                            }
                                            else {
                                                var param = {
                                                    reservaJson: JSON.stringify(_this.GetScope().Entity),
                                                    meioPagamentoNovo: CNum(_this.cboMeioPagamento.GetValue()),
                                                    tela: ValoresSismoura.NomeTela,
                                                    codUsuario: ValoresSismoura.UsuarioLogado
                                                };
                                                var retorno = _this.ExecutarFuncaoServerSideSynch("alterarModoPagamentoReserva", param);
                                                if (retorno.Status) {
                                                    MostrarMensagem(retorno.Mensagem);
                                                    _this.ClicarGravar();
                                                }
                                                else {
                                                    MostrarError(retorno.Mensagem);
                                                    _this.GetScope().Entity.Meio_Pagamento = reservaBanco.Meio_Pagamento;
                                                    _this.cboMeioPagamento.SetValue(_this.GetScope().Entity.Meio_Pagamento);
                                                    _this.RefreshAngular();
                                                    _this.VerificarVisibilidadeAbas();
                                                }
                                            }
                                        });
                                    }
                                    else {
                                        MsgBoxJS("Deseja realmente alterar o modo de pagamento?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                                            if (result.Resultado == MsgBoxResult.No) {
                                                MostrarAlerta("Operação cancelada pelo usuário.");
                                                _this.GetScope().Entity.Meio_Pagamento = reservaBanco.Meio_Pagamento;
                                                _this.cboMeioPagamento.SetValue(_this.GetScope().Entity.Meio_Pagamento);
                                                _this.RefreshAngular();
                                                _this.VerificarVisibilidadeAbas();
                                                return;
                                            }
                                            else {
                                                var param = {
                                                    reservaJson: JSON.stringify(_this.GetScope().Entity),
                                                    meioPagamentoNovo: CNum(_this.GetScope().Entity.Meio_Pagamento),
                                                    tela: ValoresSismoura.NomeTela,
                                                    codUsuario: ValoresSismoura.UsuarioLogado
                                                };
                                                var retorno = _this.ExecutarFuncaoServerSideSynch("alterarModoPagamentoReserva", param);
                                                if (retorno.Status) {
                                                    MostrarMensagem(retorno.Mensagem);
                                                    _this.enviarEmailPagamentoDepoisGravar = false;
                                                    if (_this.GetScope().Entity.Meio_Pagamento == 2 /* enLinkEmail */) {
                                                        _this.enviarEmailPagamentoDepoisGravar = true;
                                                    }
                                                    _this.ClicarGravar();
                                                }
                                                else {
                                                    MostrarError(retorno.Mensagem);
                                                }
                                            }
                                        });
                                    }
                                });
                            }
                        }
                    }
                    else {
                        _this.GetScope().Entity.Meio_Pagamento = reservaBanco.Meio_Pagamento;
                        _this.cboMeioPagamento.SetValue(_this.GetScope().Entity.Meio_Pagamento);
                        _this.RefreshAngular();
                        _this.VerificarVisibilidadeAbas();
                        return;
                    }
                }, this, false, function (ret) {
                    _this.GetScope().Entity.Meio_Pagamento = reservaBanco.Meio_Pagamento;
                    _this.cboMeioPagamento.SetValue(_this.GetScope().Entity.Meio_Pagamento);
                    _this.RefreshAngular();
                    _this.VerificarVisibilidadeAbas();
                    return;
                });
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.verificarStatusAtendimento = function (callback) {
        try {
            var parametros = {
                codReserva: this.GetScope().Entity.Codigo
            };
            var atendimentos;
            var pagamentoStoom;
            var retorno = this.ExecutarFuncaoServerSideSynch("PETZ_DadosReserva", parametros);
            if (!retorno) {
                var result = {};
                result.mensagem = "Reserva não encontrada.";
                result.retorno = false;
                callback(result);
            }
            atendimentos = retorno.Atendimentos;
            pagamentoStoom = retorno.PagamentoStoom;
            //Verifica se o pagamento já foi realizado.
            if (pagamentoStoom
                && (pagamentoStoom.Status_Pagamento_Stoom == 1 /* enAutorizado */
                    || pagamentoStoom.Status_Pagamento_Stoom == 2 /* enCapturado */)) {
                var result = {};
                result.mensagem = "Já foi realizado o pagamento desta reserva.";
                result.retorno = false;
                callback(result);
            }
            var hasAtendimentosEnviadosZanthus = false;
            var hasAtendimentoPagosZanthus = false;
            if (atendimentos && atendimentos.length > 0) {
                atendimentos.forEach(function (x) {
                    var status = x.Status_Envio_Zanthus;
                    if (status == null || status == undefined) {
                        status = 1 /* AguardandoEnvio */;
                    }
                    switch (status) {
                        case 2 /* EnvioEfetuado */:
                            //Pergunta se vai cancelar a hospedagem, pois o atendimento já foi enviado para pagamento.
                            hasAtendimentosEnviadosZanthus = true;
                            break;
                        case 3 /* AtendimentoPago */:
                            //Não deve permitir o cancelamento da hospedagem.
                            hasAtendimentoPagosZanthus = true;
                            break;
                        default:
                    }
                });
            }
            if (hasAtendimentoPagosZanthus) {
                //MsgBoxJS("Já foi realizado o pagamento desta reserva, não será possível fazer a alteração.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
                //return false;
                var result = {};
                result.mensagem = "Já foi realizado o pagamento desta reserva, não será possível fazer a alteração.";
                result.retorno = false;
                result.status = 3 /* AtendimentoPago */;
                callback(result);
            }
            else if (hasAtendimentosEnviadosZanthus) {
                var result = {};
                result.mensagem = "Atenção! Existem atendimentos que foram enviados para pagamento no PDV da Zanthus. Deseja realmente alterar o meio de pagamento?";
                result.retorno = true;
                result.status = 2 /* EnvioEfetuado */;
                callback(result);
            }
            else {
                var result = {};
                result.mensagem = "";
                result.retorno = true;
                result.status = 1 /* AguardandoEnvio */;
                callback(result);
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosRes_Angular.prototype.podeAlterarMeioPagamento = function () {
        try {
            //Verifica se a reserva já foi utilizada.
            if (this.GetScope().Entity.Hospedagem > 0) {
                MostrarAlerta("Já foi realizado um check-in desta reserva. Não será possível alterar a forma de pagamento.");
                return false;
            }
            if (this.GetScope().Entity.Cancelada) {
                MostrarAlerta("A reserva está cancelada. Não será possível alterar a forma de pagamento.");
                return false;
            }
            return true;
        }
        catch (e) {
            LogarException(e);
        }
    };
    return C_HosRes_Angular;
}(MouraPageCadastroAngular));
var c_HosRes_Angular = new C_HosRes_Angular();
//# sourceMappingURL=C_HosRes_Angular.js.map