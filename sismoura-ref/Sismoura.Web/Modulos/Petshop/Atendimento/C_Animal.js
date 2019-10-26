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
var C_Animal = /** @class */ (function (_super) {
    __extends(C_Animal, _super);
    function C_Animal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.validarProfissional = true;
        _this.PATH_FOTOS = "~/Fotos/Animais/";
        _this.inserirItem = false;
        _this.verificouAlertaIncidencia = false;
        _this.verificouCortesia = false;
        _this.verificouFilhote = false;
        _this.profissionalPrestador = false;
        //public isAlteracaoProprietarioAnimalPermitido(): boolean {
        //    if (this.Servicos) {
        //        if (this.Servicos.length > 0) {
        //            for (var x = 0; x < this.Servicos.length; x++) {
        //                var entidade: SiSMoura.Core.Entity.ServicosAtendimento = this.Servicos[x];
        //                if (entidade.VacinaAgendada) {
        //                    //MostrarAlerta("Existem vacinas aplicadas na grade, portanto não será possivel alterar o animal do atendimento");
        //                    return false;
        //                }
        //            }
        //        }
        //    }
        //    return true;
        //}
        //protected OnTxtPetPesquisandoProprietario(s: MouraTextBoxProcura, e: MouraTextBoxProcuraPesquisandoEventArgs) {
        //    e.Valido = this.isAlteracaoProprietarioAnimalPermitido();
        //}
        //protected OnTxtPetPesquisandoAnimal(s: MouraTextBoxProcura, e: MouraTextBoxProcuraPesquisandoEventArgs) {
        //    e.Valido = this.isAlteracaoProprietarioAnimalPermitido();
        //}
        _this._mostrarMensagem = false;
        return _this;
    }
    Object.defineProperty(C_Animal.prototype, "PathFoto", {
        get: function () {
            return this.hdnPathFotoAnimal.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "VendaAtendimento", {
        get: function () {
            return this.GetScope()["VendaAtendimento"];
        },
        set: function (value) {
            this.GetScope()["VendaAtendimento"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "Servicos", {
        get: function () {
            return this.GetScope()["Servicos"];
        },
        set: function (value) {
            this.GetScope()["Servicos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "Servico", {
        get: function () {
            return this.GetScope()["Servico"];
        },
        set: function (value) {
            this.GetScope()["Servico"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "Encaminhamento", {
        get: function () {
            return this.GetScope()["Encaminhamento"];
        },
        set: function (value) {
            this.GetScope()["Encaminhamento"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "AlteracaoesCamposChave", {
        get: function () {
            return this.GetScope()["AlteracaoesCamposChave"];
        },
        set: function (value) {
            this.GetScope()["AlteracaoesCamposChave"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "AlteracaoCamposChave", {
        get: function () {
            return this.GetScope()["AlteracaoCamposChave"];
        },
        set: function (value) {
            this.GetScope()["AlteracaoCamposChave"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "Produtos", {
        get: function () {
            return this.GetScope()["Produtos"];
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "Produto", {
        get: function () {
            return this.GetScope()["Produto"];
        },
        set: function (value) {
            this.GetScope()["Produto"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtValorUnitario", {
        get: function () {
            return window['txtValorUnitario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "cboOrigemAcidente", {
        get: function () {
            return window['cboOrigemAcidente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtIncidencia", {
        get: function () {
            return window['txtIncidencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtTipoAcidente", {
        get: function () {
            return window['txtTipoAcidente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "cboGravidadeAcidente", {
        get: function () {
            return window['cboGravidadeAcidente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtValorUnitarioProduto", {
        get: function () {
            return window['txtValorUnitarioProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtMotivoDesconto", {
        get: function () {
            return window['txtMotivoDesconto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtQuantidade", {
        get: function () {
            return window['txtQuantidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtQuantidadeProduto", {
        get: function () {
            return window['txtQuantidadeProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtDesconto", {
        get: function () {
            return window['txtDesconto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtDescontoProduto", {
        get: function () {
            return window['txtDescontoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtDescontoPorcent", {
        get: function () {
            return window['txtDescontoPorcent_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtMotivoTroca", {
        get: function () {
            return window['txtMotivoTroca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtDescontoPorcentProduto", {
        get: function () {
            return window['txtDescontoPorcentProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblTotal", {
        get: function () {
            return window['lblTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblTotalProduto", {
        get: function () {
            return window['lblTotalProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "cboListaPreco", {
        get: function () {
            return window['cboListaPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "cboListaPrecoProduto", {
        get: function () {
            return window['cboListaPrecoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "cboModelo", {
        get: function () {
            return window['cboModelo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtDataProduto", {
        get: function () {
            return window['txtDataProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtDataServico", {
        get: function () {
            return window['txtDataServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtHoraServico", {
        get: function () {
            return window['txtHoraServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtHoraProduto", {
        get: function () {
            return window['txtHoraProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtProfissionalProduto", {
        get: function () {
            return window['txtProfissionalProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtObservacaoProduto", {
        get: function () {
            return window['txtObservacaoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtObservacao", {
        get: function () {
            return window['txtObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "chkCobrado", {
        get: function () {
            return window['chkCobrado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "cboEmpresa_List", {
        get: function () {
            return window['cboEmpresa_List'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "hdnDoc", {
        get: function () {
            return $('#hdnDoc')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "hdnConfigPET", {
        get: function () {
            return $('#hdnConfigPET')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "hdnPathFotoAnimal", {
        get: function () {
            return $('#hdnPathFotoAnimal')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnVacinas", {
        get: function () {
            return window['btnVacinas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnDiagnostico", {
        get: function () {
            return window['btnDiagnostico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblEndereco_TextBox", {
        get: function () {
            return $('#lblEndereco_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblComplemento_TextBox", {
        get: function () {
            return $('#lblComplemento_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblCidade_TextBox", {
        get: function () {
            return $('#lblCidade_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblFone_TextBox", {
        get: function () {
            return $('#lblFone_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblSaldoDevedor_TextBox", {
        get: function () {
            return $('#lblSaldoDevedor_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblCredito_TextBox", {
        get: function () {
            return $('#lblCredito_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblEspecie_TextBox", {
        get: function () {
            return $('#lblEspecie_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblRaca_TextBox", {
        get: function () {
            return $('#lblRaca_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblCarteirinha_TextBox", {
        get: function () {
            return $('#lblCarteirinha_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblTemperamento_TextBox", {
        get: function () {
            return $('#lblTemperamento_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblPeso_TextBox", {
        get: function () {
            return $('#lblPeso_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblDataNascimento_TextBox", {
        get: function () {
            return $('#lblDataNascimento_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblIdadeSexo_TextBox", {
        get: function () {
            return $('#lblIdadeSexo_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblPelagem_TextBox", {
        get: function () {
            return $('#lblPelagem_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblTempoDuracao", {
        get: function () {
            return window['lblTempoDuracao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblCHIP_TextBox", {
        get: function () {
            return $('#lblCHIP_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblRGA_TextBox", {
        get: function () {
            return $('#lblRGA_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblObsServico_TextBox", {
        get: function () {
            return $('#lblObsServico_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "callBackServico", {
        get: function () {
            return window['callBackServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "callBackProduto", {
        get: function () {
            return window['callBackProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "grdAgPendente", {
        get: function () {
            return window['grdAgPendente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "grdDoc", {
        get: function () {
            return window['grdDoc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "grdServicos", {
        get: function () {
            return window['grdServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "grdProdutos", {
        get: function () {
            return window['grdProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "grdParticipantes", {
        get: function () {
            return window['grdParticipantes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "grdConsultas", {
        get: function () {
            return window['grdConsultas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "grdCheckListItens", {
        get: function () {
            return window['grdCheckListItens_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnImpDoc", {
        get: function () {
            return window['btnImpDoc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnFecharAgPendente", {
        get: function () {
            return window['btnFecharAgPendente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "hdnMsgAdicionar", {
        get: function () {
            return $('#hdnMsgAdicionar')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "hdnMsgAdicionarProduto", {
        get: function () {
            return $('#hdnMsgAdicionarProduto')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "hdnUltimoProprietario", {
        get: function () {
            return $('#hdnUltimoProprietario')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "dlgParticipante", {
        get: function () {
            return window['dlgParticipante_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "dlgAgPendente", {
        get: function () {
            return window['dlgAgPendente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "dlgAtendimentoContinuo", {
        get: function () {
            return window['dlgAtendimentoContinuo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "cboEncaminhamento", {
        //get chkEncaminhamento(): MouraCheckBox {
        //    return <MouraCheckBox>window['chkEncaminhamento_Object'];
        //}
        get: function () {
            return window['cboEncaminhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "dlgConsultas", {
        get: function () {
            return window['dlgConsultas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtParticipante", {
        get: function () {
            return window['txtParticipante_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtComissaoReais", {
        get: function () {
            return window['txtComissaoReais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtCheckListProcura", {
        get: function () {
            return window['txtCheckListProcura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtCheckList", {
        get: function () {
            return window['txtCheckList_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtProfissional", {
        get: function () {
            return window['txtProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtProfissionalResponsavel", {
        get: function () {
            return window['txtProfissionalResponsavel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnContinuo", {
        get: function () {
            return window['btnContinuo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnOK", {
        get: function () {
            return window['btnOK_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnVoltar", {
        get: function () {
            return window['btnVoltar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnCancelarConsulta", {
        get: function () {
            return window['btnCancelarConsulta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnCalcularContinuos", {
        get: function () {
            return window['btnCalcularContinuos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnOKContinuo", {
        get: function () {
            return window['btnOKContinuo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnCancelarContinuo", {
        get: function () {
            return window['btnCancelarContinuo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtQuantidadeDias", {
        get: function () {
            return window['txtQuantidadeDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtQuantidadeContinuos", {
        get: function () {
            return window['txtQuantidadeContinuos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtConvenio", {
        get: function () {
            return window['txtConvenio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtAutorizacaoConvenio", {
        get: function () {
            return window['txtAutorizacaoConvenio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "chkGerarSemData", {
        get: function () {
            return window['chkGerarSemData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "grdAtendimentosContinuos", {
        get: function () {
            return window['grdAtendimentosContinuos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "sgnCheckList", {
        get: function () {
            return window['sgnCheckList_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnAssinatura", {
        get: function () {
            return window['btnAssinatura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnAdicionar", {
        get: function () {
            return window['btnAdicionar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "EnvioSms", {
        get: function () {
            return window['EnvioSms_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "dlgVacinasPendentes", {
        get: function () {
            return window['dlgVacinasPendentes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnOkPendentes", {
        get: function () {
            return window['btnOkPendentes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btrCancelarPendentes", {
        get: function () {
            return window['btrCancelarPendentes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "grdPendentes", {
        get: function () {
            return window['grdPendentes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtServicoPendente", {
        get: function () {
            return window['txtServicoPendente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "dlgVacinasAgendadas", {
        get: function () {
            return window['dlgVacinasAgendadas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "grdAgendamentos", {
        get: function () {
            return window['grdAgendamentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "grdIncidencia", {
        get: function () {
            return window['grdIncidencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnVoltarAgendamento", {
        get: function () {
            return window['btnVoltarAgendamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "dlgDiagnostico", {
        get: function () {
            return window['dlgDiagnostico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtDiagnostico", {
        get: function () {
            return window['txtDiagnostico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnVoltarDiagnostico", {
        get: function () {
            return window['btnVoltarDiagnostico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "dlgMotivoExclusao", {
        get: function () {
            return window['dlgMotivoExclusao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "dlgMotivoTroca", {
        get: function () {
            return window['dlgMotivoTroca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtMotivoExclusao", {
        get: function () {
            return window['txtMotivoExclusao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnConfirmarExclusao", {
        get: function () {
            return window['btnConfirmarExclusao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnCancelarExclusao", {
        get: function () {
            return window['btnCancelarExclusao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnConfirmarTroca", {
        get: function () {
            return window['btnConfirmarTroca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnCancelarTroca", {
        get: function () {
            return window['btnCancelarTroca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "dlgPendentes", {
        get: function () {
            return window['dlgPendentes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "grdAtendimentosPendentes", {
        get: function () {
            return window['grdAtendimentosPendentes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnVoltarPendentes", {
        get: function () {
            return window['btnVoltarPendentes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnPendentes", {
        get: function () {
            return window['btnPendentes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnHisProdutos", {
        get: function () {
            return window['btnHisProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnHisPacotes", {
        get: function () {
            return window['btnHisPacotes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnHistoricoServico", {
        get: function () {
            return window['btnHistoricoServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnImprimirTicket", {
        get: function () {
            return window['btnImprimirTicket_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnImprimirCheckList", {
        get: function () {
            return window['btnImprimirCheckList_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "fotosAnimal", {
        get: function () {
            return window['fotosAnimal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnCarregarFotos", {
        get: function () {
            return window['btnCarregarFotos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnZanthus", {
        get: function () {
            return window['btnZanthus_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnSolicitarAprovacao", {
        get: function () {
            return window['btnSolicitarAprovacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnCortesia", {
        get: function () {
            return window['btnCortesia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnEstornarConvenio", {
        get: function () {
            return window['btnEstornarConvenio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblZanthus", {
        get: function () {
            return window['lblZanthus_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblCortesia", {
        get: function () {
            return window['lblCortesia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblStatusPagamentoAPP", {
        get: function () {
            return window['lblStatusPagamentoAPP_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "hdnServicoPacote", {
        get: function () {
            return $('#hdnServicoPacote')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnFecharHistorico", {
        get: function () {
            return window['btnFecharHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "grdHistorico", {
        get: function () {
            return window['grdHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "dlgHistorico", {
        get: function () {
            return window['dlgHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnHistoricoAtendimentos", {
        get: function () {
            return window['btnHistoricoAtendimentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblHistProprietario", {
        get: function () {
            return window['lblHistProprietario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblHistAnimal", {
        get: function () {
            return window['lblHistAnimal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblHistTotal", {
        get: function () {
            return window['lblHistTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnConsulta", {
        get: function () {
            return window['btnConsulta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnPeso", {
        get: function () {
            return window['btnPeso_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "cboTipoEncaminhamento", {
        get: function () {
            return window['cboTipoEncaminhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "cboEmpresaEncaminhamento", {
        get: function () {
            return window['cboEmpresaEncaminhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtProfissionalEncaminhou", {
        get: function () {
            return window['txtProfissionalEncaminhou_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtClinicaEncaminhou", {
        get: function () {
            return window['txtClinicaEncaminhou_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtVeterinarioExternoEncaminhou", {
        get: function () {
            return window['txtVeterinarioExternoEncaminhou_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtCRMVVeterinario", {
        get: function () {
            return window['txtCRMVVeterinario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtTelefoneContatoEncaminhou", {
        get: function () {
            return window['txtTelefoneContatoEncaminhou_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "txtEmailEncaminhou", {
        get: function () {
            return window['txtEmailEncaminhou_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "ConfiguracoesPET", {
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
    Object.defineProperty(C_Animal.prototype, "IsIntegracaoZanthus", {
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
    Object.defineProperty(C_Animal.prototype, "Atendimento_Bloquear_Editar_ValorServico", {
        get: function () {
            if (this.ConfiguracoesPET) {
                return this.ConfiguracoesPET.Atendimento_Bloquear_Editar_ValorServico;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "Incidencias", {
        get: function () {
            return this.GetScope()["Incidencias"];
        },
        set: function (value) {
            this.GetScope()["Incidencias"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "PendentesAnimal", {
        get: function () {
            return this.GetScope()["PendentesAnimal"];
        },
        set: function (value) {
            this.GetScope()["PendentesAnimal"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "dlgInfoProprietario", {
        get: function () {
            return window['dlgInfoProprietario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnDlgInfoProprietarioOK", {
        get: function () {
            return window['btnDlgInfoProprietarioOK_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnDlgInfoProprietarioCadastro", {
        get: function () {
            return window['btnDlgInfoProprietarioCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "DlgInfoProprietarioInfo", {
        get: function () {
            return $('#DlgInfoProprietarioInfo')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "DivEncaminhamento", {
        get: function () {
            return $('#DivEncaminhamento')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "dvLegendaPlano", {
        get: function () {
            return $("#dvLegendaPlano")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "Participante", {
        get: function () {
            return this.GetScope()["Participante"];
        },
        set: function (value) {
            this.GetScope()["Participante"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "mdAutorizacoes", {
        get: function () {
            return window['mdAutorizacoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "lblAutorizacoes", {
        get: function () {
            return $('#lblAutorizacoes')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal.prototype, "btnFecharAutorizacao", {
        get: function () {
            return window['btnFecharAutorizacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Animal.prototype.OnTxtPetLimpouAnimal = function () {
        this.alterarVisibleBotaoPendente(false);
    };
    C_Animal.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.txtPet.TextBoxAnimal.Limpou, this.OnTxtPetLimpouAnimal, this);
        adicionarEventoMoura(this.txtPet.ProcurouAnimal, this.OnTxtPetProcurouAnimal, this);
        adicionarEventoMoura(this.txtPet.ProcurouProprietario, this.OnTxtPetProcurouProprietario, this);
        adicionarEventoMoura(this.txtServico.Procurou, this.OnTxtServicoProcurou, this);
        adicionarEventoMoura(this.txtProduto.Procurou, this.OnTxtProdutoProcurou, this);
        if (this.cboListaPreco && this.cboListaPreco.Combo) {
            adicionarEventoDevExpress(this.cboListaPreco.Combo.SelectedIndexChanged, this.OnCboListaPreco_comboBoxChange, this);
            adicionarEventoDevExpress(this.cboListaPreco.Combo.GotFocus, this.OnCboListaPrecoGotFocus, this);
        }
        if (this.cboListaPrecoProduto && this.cboListaPrecoProduto.Combo) {
            adicionarEventoDevExpress(this.cboListaPrecoProduto.Combo.SelectedIndexChanged, this.OnCboListaPrecoProduto_comboBoxChange, this);
            adicionarEventoDevExpress(this.cboListaPrecoProduto.Combo.GotFocus, this.OnCboListaPrecoProdutoGotFocus, this);
        }
        if (this.grdDoc) {
            adicionarEventoMoura(this.grdDoc.ClickBotaoImprimir, this.OnClickImprimirDoc, this);
            if (this.grdDoc.DataSource.length <= 0) {
                this.PreencherGridDocumentos();
            }
        }
        if (this.grdServicos) {
            adicionarEventoMoura(this.grdServicos.SetouItem, this.OnSetouItemServico, this);
            adicionarEventoMoura(this.grdServicos.LimpouItem, this.OnLimpouItemServico, this);
            adicionarEventoMoura(this.grdServicos.ItemAdicionado, this.OnAdiciouItemServico, this);
            adicionarEventoMoura(this.grdServicos.Validando, this.OnValidandoItemServico, this);
            adicionarEventoMoura(this.grdServicos.ExcluindoItem, this.OnExcluindoItemServico, this);
            adicionarEventoMoura(this.grdServicos.Grid.ClickBotaoLinha, this.OnGrdServicosClickBotaoLinha, this);
            adicionarEventoMoura(this.grdServicos.AlterandoItem, this.OnAlterandoItem, this);
            adicionarEventoMoura(this.grdServicos.Grid.CellPrepared, this.OnGerouCelulaGradeServicos, this);
            adicionarEventoMoura(this.grdServicos.AdicionandoItem, this.OnAdicionandoItemServico, this);
        }
        if (this.grdProdutos) {
            adicionarEventoMoura(this.grdProdutos.SetouItem, this.OnSetouItemProduto, this);
            adicionarEventoMoura(this.grdProdutos.LimpouItem, this.OnLimpouItemProduto, this);
            adicionarEventoMoura(this.grdProdutos.ItemAdicionado, this.OnAdiciouItemProduto, this);
            adicionarEventoMoura(this.grdProdutos.Validando, this.OnValidandoItemProduto, this);
            adicionarEventoMoura(this.grdProdutos.ExcluindoItem, this.OnExcluindoItemProduto, this);
            adicionarEventoMoura(this.grdProdutos.Grid.ClickBotaoLinha, this.OnGrdProdutosClickBotaoLinha, this);
        }
        if (this.grdParticipantes) {
            adicionarEventoMoura(this.grdParticipantes.Validando, this.OnValidandoItemParticipante, this);
            adicionarEventoMoura(this.grdParticipantes.ExcluindoItem, this.OnExcluindoItemParticipante, this);
            adicionarEventoMoura(this.grdParticipantes.ItemAdicionado, this.OnAdicionouParticipante, this);
            adicionarEventoMoura(this.grdParticipantes.LimpouItem, this.OnLimpouParticipante, this);
        }
        if (this.grdPendentes) {
            adicionarEventoMoura(this.grdPendentes.Validando, this.OnValidandoItemPendente, this);
            adicionarEventoMoura(this.grdPendentes.LimpouItem, this.OnLimpouItemPendente, this);
            adicionarEventoMoura(this.grdPendentes.AdicionandoItem, this.OnAdicionouItemPendente, this);
        }
        if (this.grdIncidencia) {
            adicionarEventoMoura(this.grdIncidencia.AdicionandoItem, this.OnAdicionandoGridIncidencia, this);
            adicionarEventoMoura(this.grdIncidencia.ExcluindoItem, this.OnExcluindoIncidencia, this);
            adicionarEventoMoura(this.grdIncidencia.Grid.ClickBotaoImprimir, this.OnClickImprimirDocAcidente, this);
        }
        if (this.txtParticipante) {
            adicionarEventoMoura(this.txtParticipante.Procurou, this.OnTxtParticipanteProcurou, this);
        }
        if (this.txtCheckListProcura) {
            adicionarEventoMoura(this.txtCheckListProcura.Procurou, this.OnTxtCheckListProcuraProcurou, this);
        }
        if (this.btnContinuo) {
            adicionarEventoMoura(this.btnContinuo.Click, this.OnClickAtendimentoContinuo, this);
            this.btnContinuo.Visible = false;
        }
        if (this.btnFecharAgPendente)
            adicionarEventoMoura(this.btnFecharAgPendente.Click, this.OnClickFecharAgendamento, this);
        if (this.btnOK) {
            adicionarEventoMoura(this.btnOK.Click, this.OnBtnOkClick, this);
        }
        if (this.txtProfissional) {
            adicionarEventoMoura(this.txtProfissional.AntesAbrirProcura, this.OnAntesAbrirProcuraProfissional, this);
            adicionarEventoMoura(this.txtProfissional.Procurou, this.OnTxtProfissionalProcurou, this);
        }
        if (this.txtProfissionalResponsavel) {
            adicionarEventoMoura(this.txtProfissionalResponsavel.AntesAbrirProcura, this.OnAntesAbrirProcuraProfissionalResponsavel, this);
            adicionarEventoMoura(this.txtProfissionalResponsavel.Procurou, this.OnTxtProfissionalResponsavelProcurou, this);
        }
        if (this.btnVoltar) {
            adicionarEventoMoura(this.btnVoltar.Click, this.OnBtnVoltarClick, this);
        }
        if (this.btnCalcularContinuos) {
            adicionarEventoMoura(this.btnCalcularContinuos.Click, this.OnBtnCalcularContinuosClick, this);
        }
        if (this.btnOKContinuo) {
            adicionarEventoMoura(this.btnOKContinuo.Click, this.OnBtnOkContinuosClick, this);
        }
        if (this.btnFecharAutorizacao) {
            adicionarEventoMoura(this.btnFecharAutorizacao.Click, this.OnbtnFecharAutorizacaoClick, this);
        }
        if (this.btnCancelarContinuo) {
            adicionarEventoMoura(this.btnCancelarContinuo.Click, this.OnBtnCancelarContinuosClick, this);
        }
        if (this.btnCancelarConsulta) {
            adicionarEventoMoura(this.btnCancelarConsulta.Click, this.OnBtnCancelarConsultaClick, this);
        }
        if (this.grdConsultas) {
            adicionarEventoMoura(this.grdConsultas.ClickBotaoLinha, this.OnGrdConsultasClickBotaoLinha, this);
        }
        if (this.sgnCheckList) {
            adicionarEventoMoura(this.sgnCheckList.Salvou, this.OnSalvouAssinatura, this);
        }
        if (this.btnAssinatura) {
            adicionarEventoMoura(this.btnAssinatura.Click, this.OnClickAssinatura, this);
        }
        if (this.btnVacinas) {
            adicionarEventoMoura(this.btnVacinas.Click, this.OnClickVacinas, this);
        }
        if (this.btnVoltarAgendamento) {
            adicionarEventoMoura(this.btnVoltarAgendamento.Click, this.OnClickVoltarAgendamento, this);
        }
        if (this.btnDiagnostico) {
            adicionarEventoMoura(this.btnDiagnostico.Click, this.OnClickDiagnostico, this);
        }
        if (this.btnVoltarDiagnostico) {
            adicionarEventoMoura(this.btnVoltarDiagnostico.Click, this.OnClickVoltarDiagnostico, this);
        }
        if (this.EnvioSms) {
            adicionarEventoMoura(this.EnvioSms.EnviandoMensagem, this.OnEnvioSmsEnviandoMensagem, this);
            adicionarEventoMoura(this.EnvioSms.pnModal.Fechou, this.OnEnvioSmsFechou, this);
        }
        if (this.btnOkPendentes) {
            adicionarEventoMoura(this.btnOkPendentes.Click, this.OnClickOkPendente, this);
        }
        if (this.btrCancelarPendentes) {
            adicionarEventoMoura(this.btrCancelarPendentes.Click, this.OnClickCancelarPendente, this);
        }
        if (this.grdAgendamentos) {
            adicionarEventoMoura(this.grdAgendamentos.SelecionouLinha, this.OnGrdAgendamentosClickBotaoLinha, this);
        }
        if (this.grdAgPendente)
            adicionarEventoMoura(this.grdAgPendente.SelecionouLinha, this.OnGrdAgPendentesClickBotaoLinha, this);
        if (this.btnConfirmarExclusao) {
            adicionarEventoMoura(this.btnConfirmarExclusao.Click, this.OnClickConfirmarExclusao, this);
        }
        if (this.btnConfirmarTroca) {
            adicionarEventoMoura(this.btnConfirmarTroca.Click, this.OnClickConfirmarTroca, this);
        }
        if (this.btnCancelarExclusao) {
            adicionarEventoMoura(this.btnCancelarExclusao.Click, this.OnClickCancelarExclusao, this);
        }
        if (this.btnCancelarTroca) {
            adicionarEventoMoura(this.btnCancelarTroca.Click, this.OnClickCancelarTroca, this);
        }
        if (this.btnPendentes) {
            adicionarEventoMoura(this.btnPendentes.Click, this.OnClickPendentes, this);
        }
        if (this.btnVoltarPendentes) {
            adicionarEventoMoura(this.btnVoltarPendentes.Click, this.OnClickVoltarPendentes, this);
        }
        if (this.grdAtendimentosPendentes) {
            adicionarEventoMoura(this.grdAtendimentosPendentes.SelecionouLinha, this.OnGrdAtendimentosPendentesSelecionouLinha, this);
        }
        if (this.btnHisProdutos) {
            adicionarEventoMoura(this.btnHisProdutos.Click, this.OnClickHisProdutos, this);
        }
        if (this.btnHisPacotes) {
            adicionarEventoMoura(this.btnHisPacotes.Click, this.OnClickHisPacote, this);
        }
        if (this.btnHistoricoServico) {
            adicionarEventoMoura(this.btnHistoricoServico.Click, this.OnClickHistoricoServico, this);
        }
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickImprimir, this);
        }
        if (this.btnImprimirTicket) {
            adicionarEventoMoura(this.btnImprimirTicket.Click, this.OnClickImprimirTicket, this);
        }
        if (this.btnImprimirCheckList) {
            adicionarEventoMoura(this.btnImprimirCheckList.Click, this.OnClickImprimirChecklist, this);
        }
        if (this.btnCarregarFotos) {
            adicionarEventoMoura(this.btnCarregarFotos.Click, this.OnClickCarregarFotos, this);
        }
        if (this.btnZanthus) {
            adicionarEventoMoura(this.btnZanthus.Click, this.OnClickBotaoZanthus, this);
        }
        if (this.btnCortesia) {
            adicionarEventoMoura(this.btnCortesia.Click, this.OnClickBotaoCortesia, this);
        }
        if (this.btnEstornarConvenio) {
            adicionarEventoMoura(this.btnEstornarConvenio.Click, this.OnClickBotaoEstornar, this);
        }
        if (this.txtConvenio && this.txtConvenio.Textbox) {
            adicionarEventoJQuery(this.txtConvenio.Textbox, "blur", this.OntxtConvenioLostFocus, this);
            adicionarEventoMoura(this.txtConvenio.AntesAbrirProcura, this.OnAntesAbrirProcuraConvenio, this);
            adicionarEventoMoura(this.txtConvenio.Procurou, this.OnProcurouConvenio, this);
        }
        if (this.txtAutorizacaoConvenio && this.txtAutorizacaoConvenio.Textbox) {
            adicionarEventoJQuery(this.txtAutorizacaoConvenio.Textbox, "blur", this.OntxtAutorizacaoConvenioLostFocus, this);
        }
        if (this.btnFecharHistorico) {
            adicionarEventoMoura(this.btnFecharHistorico.Click, this.OnClickBotaoFecharHistorico, this);
        }
        if (this.btnHistoricoAtendimentos) {
            adicionarEventoMoura(this.btnHistoricoAtendimentos.Click, this.OnClickBotaoHistoricoAtendimentos, this);
        }
        if (this.grdHistorico) {
            adicionarEventoMoura(this.grdHistorico.SelecionouLinha, this.OnSelecionouLinhaHistorico, this);
        }
        if (this.dlgHistorico && this.dlgHistorico.ModalDialog) {
            adicionarEventoDevExpress(this.dlgHistorico.ModalDialog.Closing, this.OnFechouModalHistorico, this);
        }
        if (this.btnConsulta) {
            adicionarEventoMoura(this.btnConsulta.Click, this.OnClickBotaoConsulta, this);
        }
        if (this.btnPeso) {
            adicionarEventoMoura(this.btnPeso.Click, this.OnClickPesos, this);
        }
        //if (this.chkEncaminhamento && this.chkEncaminhamento.Check) {
        //adicionarEventoMoura(this.chkEncaminhamento.CheckChanged, this.OnCheckEncaminhamento, this)
        //}
        if (this.cboEncaminhamento && this.cboEncaminhamento.SelectedItemChanged) {
            adicionarEventoMoura(this.cboEncaminhamento.SelectedItemChanged, this.OnCboEncaminhamento, this);
        }
        if (this.cboTipoEncaminhamento && this.cboTipoEncaminhamento.Combo) {
            adicionarEventoDevExpress(this.cboTipoEncaminhamento.Combo.SelectedIndexChanged, this.OnCboTipoEncaminhamentoComboBoxChange, this);
        }
        if (this.txtProfissionalEncaminhou) {
            adicionarEventoMoura(this.txtProfissionalEncaminhou.Procurou, this.OnTxtProfissionalEncaminhouProcurou, this);
        }
        if (this.btnDlgInfoProprietarioOK) {
            adicionarEventoMoura(this.btnDlgInfoProprietarioOK.Click, this.OnBtnDlgInfoProprietarioOKClick, this);
        }
        if (this.btnDlgInfoProprietarioCadastro) {
            adicionarEventoMoura(this.btnDlgInfoProprietarioCadastro.Click, this.OnBtnDlgInfoProprietarioCadastroClick, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnComboBoxEmpresaChange, this);
        }
        if (this.txtDataServico) {
            adicionarEventoMoura(this.txtDataServico.ValueChanged, this.OntxtDataServicoChanged, this);
        }
        if (this.txtHoraServico) {
            adicionarEventoDevExpress(this.txtHoraServico.textBoxHorario.DateChanged, this.OntxtHoraServicoChanged, this);
        }
        this.CorrigirTextoBotaoZanthus();
        this.VerificarStatusPagamentoAPP(this.EntityTela);
    };
    C_Animal.prototype.OnClickFecharAgendamento = function (s, e) {
        e.processOnServer = false;
        this.dlgAgPendente.Hide();
        if (this._mostrarMensagem) {
            setTimeout($.proxy(function () {
                MsgBoxJS("Este animal possui agendamentos de serviços cadastrados. Deseja visualiza-los?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouMSGBoxAgendamento, this), null);
            }, this), 200);
        }
        else if (this.Incidencias && this.Incidencias.length > 0 && this.txtCodigo.GetText().CNum() <= 0) {
            setTimeout($.proxy(function () {
                MsgBoxJS("Já ocorreu um acidente com este Pet, favor verificar histórico na aba Acidentes.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, null, null, "ATENÇÃO");
            }, this), 200);
        }
    };
    C_Animal.prototype.OnAdicionandoItemServico = function (s, e) {
        var _this = this;
        var entidade = e.item;
        var parametros = parametros = {
            codEmpresa: this.cboEmpresa.GetValue(),
            codProfissional: ("" + entidade.Profissional_Codigo).CNum(),
            data: entidade.Data,
            horario: entidade.Previsao.FormataHoraSismoura()
        };
        var horarioDisponivel = this.ExecutarFuncaoServerSideSynch("VerificarProfissionalHorario", parametros);
        if (horarioDisponivel == false) {
            this.valorProfissional = e.valorAlterado;
            MostrarAlerta("Este profissional não está disponível neste horário");
            e.cancelar = true;
            return;
        }
        var parametrosProfHorarioServ = {
            codProfissional: ("" + entidade.Profissional_Codigo).CNum(),
            dataServico: entidade.Data,
            horaServico: entidade.Previsao.FormataHoraSismoura(),
            CodEmpresa: "" + this.cboEmpresa.GetValue(),
            codServico: this.txtServico.GetText().CNum()
        };
        var paramEncaixe = {
            codProfissional: ("" + entidade.Profissional_Codigo).CNum(),
            dataServico: entidade.Data,
            horaServico: entidade.Previsao.FormataHoraSismoura(),
            CodEmpresa: "" + this.cboEmpresa.GetValue(),
            codServico: this.txtServico.GetText().CNum(),
            codPet: this.txtPet.TextBoxAnimal.GetText().CNum()
        };
        var retornoProfHorarioServ = this.ExecutarFuncaoServerSideSynch("IsProfissionalHorarioServico", parametrosProfHorarioServ);
        var isEncaixeProfissional = this.ExecutarFuncaoServerSideSynch("isEncaixeProfissional", paramEncaixe);
        var item = e.item;
        var prosseguir = true;
        if (retornoProfHorarioServ == true && !this.inserirItem) {
            prosseguir = false;
            MsgBoxJS("Este serviço ultrapassa o horário de saída do profissional, deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.Yes) {
                    _this.inserirItem = true;
                    _this.grdServicos.AdicionarOuAlterarItemAtual();
                }
            });
        }
        else if (isEncaixeProfissional == true && !this.inserirItem && !this.ParametrosTela.isEncaixe) {
            prosseguir = false;
            MsgBoxJS("Já existe um atendimento cadastrado no período informado, será gerado um encaixe, deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.Yes) {
                    _this.inserirItem = true;
                    _this.grdServicos.AdicionarOuAlterarItemAtual();
                }
            });
        }
        this.inserirItem = false;
        e.cancelar = !prosseguir;
    };
    C_Animal.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        setTimeout(function () {
            //if (this.ParametrosTela.Codigo_Sala && this.ParametrosTela.Codigo_Sala > 0) {
            //    this.txtServico.AddParametro("codigoSala", this.ParametrosTela.Codigo_Sala);
            //    if (this.ParametrosTela.CodProfissional) {
            //        this.txtServico.AddParametro("codigoProfissional", this.ParametrosTela.CodProfissional);
            //    }
            //}
            if (!ValoresSismoura.ConfiguracoesPetshop.Utilizar_Acidente_Atendimento)
                if (_this.tab)
                    _this.tab.AlterarVisibleAba("Incidencia", false);
            if (!_this.GetScope().MudouComissaoReal) {
                _this.GetScope().MudouComissaoReal = $.proxy(_this.MudouComissaoReal, _this);
                _this.GetScope().$watch(function (scope) { return scope.Participante.Comissao; }, _this.GetScope().MudouComissaoReal);
            }
            if (!_this.GetScope().MudouComissaoPorcentagem) {
                _this.GetScope().MudouComissaoPorcentagem = $.proxy(_this.MudouComissaoPorcentagem, _this);
                _this.GetScope().$watch(function (scope) { return scope.Participante.Comissao_Porcentagem; }, _this.GetScope().MudouComissaoPorcentagem);
            }
            if (_this.ParametrosTela.Horario_Atendimento) {
                try {
                    _this.horarioAtendimento = _this.ParametrosTela.Horario_Atendimento.ToDate();
                }
                catch (ex) {
                }
            }
            if (_this.ParametrosTela.Data_Atendimento) {
                try {
                    _this.dataAtendimento = _this.ParametrosTela.Data_Atendimento.ToDate();
                }
                catch (ex) {
                }
            }
            if (_this.ParametrosTela.CodProfissional) {
                _this.codigoProfissional = _this.ParametrosTela.CodProfissional.CNum();
                _this.codigoProfissional = _this.ParametrosTela.CodProfissional.CNum();
            }
            if (_this.ParametrosTela.codAtendimento) {
                _this.GetScope().Entity.Codigo = _this.ParametrosTela.codAtendimento.CNum();
                _this.GetScope().$applyAsync();
            }
            else if (_this.ParametrosTela.codAnimal) {
                _this.GetScope().Entity.Cod_Animal = _this.ParametrosTela.codAnimal.CNum();
                if (_this.ParametrosTela.codProprietario)
                    _this.GetScope().Entity.Cod_Proprietario = _this.ParametrosTela.codProprietario.CNum();
                _this.GetScope().$applyAsync();
            }
            else if (_this.ParametrosTela.codProprietario) {
                _this.GetScope().Entity.Cod_Proprietario = _this.ParametrosTela.codProprietario.CNum();
                _this.GetScope().$applyAsync();
            }
            if (_this.ParametrosTela.codEmpresa) {
                _this.GetScope().Entity.Empresa = _this.ParametrosTela.codEmpresa.CNum();
                _this.GetScope().$applyAsync();
            }
            if (_this.ParametrosTela.codCheckIn) {
                _this.GetScope().Entity.TempCodigoCheckIn = _this.ParametrosTela.codCheckIn.CNum();
                _this.GetScope().$applyAsync();
            }
            if (_this.ParametrosTela.codConvenio) {
                _this.GetScope().Entity.Convenio = _this.ParametrosTela.codConvenio.CNum();
            }
            if (_this.ParametrosTela.autorizacaoConvenio) {
                _this.GetScope().Entity.Autorizacao_Convenio = _this.ParametrosTela.autorizacaoConvenio;
            }
            if (_this.ParametrosTela.codigoEspera)
                _this.codigoEspera = _this.ParametrosTela.codigoEspera;
            _this.servicosAgenda = [];
            if (_this.ParametrosTela.servicos) {
                _this.servicosAgenda = JSON.parse(_this.ParametrosTela.servicos);
                setTimeout($.proxy(function () {
                    _this.txtServico.Procurar(_this.servicosAgenda[0].Codigo.toString());
                }, _this), 200);
                _this.horarioAtendimento = _this.servicosAgenda[0].Hora.ToDate();
            }
            if (_this.ParametrosTela.lancamentoPrestador) {
                _this.lancamentosPrestador = _this.ParametrosTela.lancamentoPrestador.CNum();
            }
            if (_this.ParametrosTela.faltaServicoAtendimento) {
                _this.faltaServicoAtendimento = _this.ParametrosTela.faltaServicoAtendimento;
            }
            if (_this.ParametrosTela.isAgendaConsolidada) {
                _this.isTelaAgendaConsolidada = true;
                //this.grdServicos.Grid.SetColunaEditavel("Data", false);
                //this.grdServicos.Grid.SetColunaEditavel("Profissional_Codigo", false);
                if (_this.ParametrosTela.isEncaixe) {
                    if (_this.codigoProfissional > 0)
                        _this.txtProfissional.Enabled = false;
                }
            }
            if (_this.grdServicos) {
                _this.grdServicos.Limpar();
            }
            if (_this.grdProdutos) {
                _this.grdProdutos.Limpar();
            }
            _this.CorrigirTextoBotaoZanthus();
        }, 700);
    };
    C_Animal.prototype.OnComboBoxEmpresaChange = function () {
        this.txtServico.Limpar();
        this.txtServico.LimparParametros();
        this.txtServico.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            this.Servicos = [];
            this.grdServicos.AtualizarGrid();
        }
        this.RefreshAngular();
    };
    C_Animal.prototype.VerificarAutorizacaoIncidencia = function (retorno) {
        var codProfissional = this.Servicos[0].Profissional_Codigo;
        var param = {
            codProfissional: codProfissional
        };
        var codUsuario = this.ExecutarFuncaoServerSideSynch("RetornaCodigoUsuarioByProfissional", param);
        if (codUsuario <= 0) {
            MostrarAlerta("Profissional informado no Serviço não possuí um Usuário cadastrado no sistema! Não será possível validar o acidente!");
            return;
        }
        if (retorno.Usuario != codUsuario) {
            MostrarAlerta("Usuário digitado é diferente do informado no Serviço. Não será possível prosseguir!");
            return;
        }
        this.verificouAlertaIncidencia = retorno.Autorizado;
        if (this.verificouAlertaIncidencia)
            this.ClicarGravar();
    };
    //protected VerificarAutorizacaoFilhote(retorno: MouraFuncoesAdministrativasRetorno) {
    //    let codProfissional: number = this.Servicos[0].Profissional_Codigo;
    //    this.verificouFilhote = retorno.Autorizado;
    //    if (this.verificouFilhote)
    //        this.ClicarGravar();
    //}
    C_Animal.prototype.AlterarCamposAtendimentoPago = function (isAtendimentopago) {
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
        this.cboEmpresa.Combo.disabled = !campoEnable;
        if (this.Atendimento_Bloquear_Editar_ValorServico) {
            this.txtValorUnitario.Disabled = true;
        }
    };
    C_Animal.prototype.AlterarColunasEditaveisVenda = function (editavel) {
        //Servicos
        this.grdServicos.Grid.SetColunaEditavel("Quantidade", editavel);
        if (this.Atendimento_Bloquear_Editar_ValorServico) {
            this.grdServicos.Grid.SetColunaEditavel("Valor", false);
        }
        else {
            this.grdServicos.Grid.SetColunaEditavel("Valor", editavel);
        }
        this.grdServicos.Grid.SetColunaEditavel("Desconto", editavel);
        this.grdServicos.Grid.SetColunaEditavel("Desconto_Porcentagem", editavel);
        //Produtos
        this.grdProdutos.Grid.SetColunaEditavel("Quantidade", editavel);
        if (this.Atendimento_Bloquear_Editar_ValorServico) {
            this.grdProdutos.Grid.SetColunaEditavel("Valor", false);
        }
        else {
            this.grdProdutos.Grid.SetColunaEditavel("Valor", editavel);
        }
        this.grdProdutos.Grid.SetColunaEditavel("Desconto", editavel);
        this.grdProdutos.Grid.SetColunaEditavel("Desconto_Porcentagem", editavel);
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            var index = this.grdServicos.Grid.GetColunaByFieldName("Data").index;
            var indexProf = this.grdServicos.Grid.GetColunaByFieldName("Profissional_Codigo").index;
            if (this.PodeAlterarServicoPago()) {
                this.grdServicos.Grid.SetColunaEditavel("Data", true);
                this.grdServicos.Grid.Colunas[index].IsEditavel = true;
                this.grdServicos.Grid.SetColunaEditavel("Profissional_Codigo", true);
                this.grdServicos.Grid.Colunas[indexProf].IsEditavel = true;
            }
            else {
                this.grdServicos.Grid.SetColunaEditavel("Data", editavel);
                this.grdServicos.Grid.Colunas[index].IsEditavel = editavel;
                this.grdServicos.Grid.SetColunaEditavel("Profissional_Codigo", editavel);
                this.grdServicos.Grid.Colunas[indexProf].IsEditavel = editavel;
            }
            this.grdServicos.AtualizarGrid();
        }
        this.txtMotivoDesconto.Disabled = !editavel;
    };
    C_Animal.prototype.OnGrdAgPendentesClickBotaoLinha = function (s, e) {
        this.dlgAgPendente.Hide();
        this.PreencherEntidade(e.rowKey);
    };
    C_Animal.prototype.OnGrdAgendamentosClickBotaoLinha = function (s, e) {
        var codigoAgendamento = e.rowKey;
        var parametros;
        parametros = {
            codigoAgendamento: codigoAgendamento
        };
        var agendamento = this.ExecutarFuncaoServerSideSynch("GetAgendamentoByCodigo", parametros);
        if (agendamento) {
            this.txtServico.Procurar(agendamento.Servico.Format(0));
            this.Servico.VacinaAgendada = agendamento;
            this.dlgVacinasAgendadas.Hide();
            setTimeout($.proxy(function () {
                this.txtServico.Focus();
            }, this), 100);
        }
    };
    C_Animal.prototype.OnEnvioSmsEnviandoMensagem = function (s, e) {
        e.Mensagem = replaceAll(e.Mensagem, "{Nome_Animal}", this.txtPet.TextBoxAnimal.LabelResultado);
        e.Mensagem = replaceAll(e.Mensagem, "{Nome_Proprietario}", this.txtPet.TextBoxProprietario.LabelResultado);
    };
    C_Animal.prototype.OnEnvioSmsFechou = function (s, e) {
        if (!this.selecionouAgendamento) {
            this.VerificarVacinasPendentes();
        }
    };
    C_Animal.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            //Não permite a exclusão de um atendimento gerado por Hospedagem/ Daycare
            if (this.GetScope().Entity && this.GetScope().Entity.Hospedagem > 0) {
                MostrarAlerta("Este atendimento foi gerado pela Cadastro de Hospedagem. Realize o cancelamento pela tela Cadastro de Hospedagem.");
                return false;
            }
        }
        if (this.respondeuMotivoExclusao) {
            this.respondeuMotivoExclusao = false;
            return true;
        }
        else {
            this.txtMotivoExclusao.SetText("");
            this.dlgMotivoExclusao.Show();
            return false;
        }
    };
    C_Animal.prototype.OnClickCancelarExclusao = function (s, e) {
        e.processOnServer = false;
        this.dlgMotivoExclusao.Hide();
    };
    C_Animal.prototype.OnClickCancelarTroca = function (s, e) {
        e.processOnServer = false;
        this.dlgMotivoTroca.Hide();
    };
    C_Animal.prototype.OnClickConfirmarTroca = function (s, e) {
        e.processOnServer = false;
        if (String.IsNullOrWhiteSpace(this.txtMotivoTroca.GetText())) {
            MostrarAlerta("Informe o motivo da troca!");
            this.txtMotivoTroca.Focus();
            return;
        }
        this.dlgMotivoTroca.Hide();
        var alteracoes = {};
        alteracoes.Campo_Alterado = this.nomeCampoAlterado;
        alteracoes.Data = new Date();
        alteracoes.Motivo_Alteracao = this.txtMotivoTroca.GetText();
        alteracoes.Usuario_Autorizou = this.usuarioAutorizou;
        alteracoes.Usuario_Logado = ValoresSismoura.UsuarioLogado;
        alteracoes.Valor_Anterior = this.valorAnterior;
        alteracoes.Valor_Atual = this.valorNovo;
        this.GetScope().Entity.Alteracoes_CamposChave.push(alteracoes);
        this.verificadoMudouCampoCritico = true;
        this.ClicarGravar();
    };
    C_Animal.prototype.OnClickConfirmarExclusao = function (s, e) {
        e.processOnServer = false;
        if (String.IsNullOrWhiteSpace(this.txtMotivoExclusao.GetText())) {
            MostrarAlerta("Informe o motivo da exclusão!");
            this.txtMotivoExclusao.Focus();
            return;
        }
        this.dlgMotivoExclusao.Hide();
        this.GetScope().Entity.TempMotivoExclusao = this.txtMotivoExclusao.GetText();
        this.respondeuMotivoExclusao = true;
        this.GetScope().$applyAsync();
        this.ClicarExcluir();
    };
    C_Animal.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        if (this.btnZanthus)
            this.btnZanthus.Visible = true;
        if (this.btnCortesia)
            this.btnCortesia.Visible = true;
        this.lblCortesia.Visible = false;
        Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        Entity.Operador = ValoresSismoura.UsuarioLogadoAbreviacao;
        Entity.Data = this.DataServidor();
        Entity.Servicos = [];
        Entity.Produtos = [];
        Entity.Alteracoes_CamposChave = [];
        Entity.Encaminhamento = false;
        this.Servicos = [];
        this.Produtos = [];
        this.AlteracaoesCamposChave = [];
        this.verificadoAutorizacaoDescontoAtendimento = false;
        this.verificouAlertaIncidencia = false;
        this.verificouFilhote = false;
        this.verificadoMudouCampoCritico = false;
        this.verificouCortesia = false;
        this.mudouConcluidoAposPagoeConcluido = false;
        this.mudouDeProfissionalGenerico = false;
        this.mudouDataAposConcluidoPago = false;
        this.mudouProfissionalAposConcluidoPago = false;
        this.grdServicos.Limpar();
        this.grdProdutos.Limpar();
        this.grdPendentes.Limpar();
        this.lblZanthus.Text = "";
        this.alterarVisibleBotaoDiagnostico(false);
        this.alterarVisibleBotaoPendente(false);
        this.alterarVisibleBotaoAgendamentosPendentes(false);
        this.nomeCampoAlterado = "";
        this.txtConvenio.Limpar();
        this.txtAutorizacaoConvenio.Limpar();
        this.CorrigirTextoBotaoZanthus();
        this.valorAnterior = "";
        this.valorNovo = "";
        //this.chkEncaminhamento.Enabled = true;
        this.cboEncaminhamento.Enabled = true;
        this.cboEncaminhamento.Obrigatorio = false;
        this.cboEncaminhamento.LimparSelecao();
        this.perguntouAdicionarServicoDuplicado = false;
        this.perguntouAdicionarProdutoDuplicado = false;
        this.profissionalPrestador = false;
        this.lancamentosPrestador = 0;
        this.faltaServicoAtendimento = 0;
        this.AlterarCamposAtendimentoPago(false);
        this.VerificarStatusPagamentoAPP(Entity);
        this.txtProfissional.Enabled = true;
        this.AlteraVisibleProfissionalResponsavel(false);
        this.horarioAtendimento = Entity.Data;
        this.dataAtendimento = Entity.Data;
        this.codigoProfissional = 0;
        this.codigoEspera = 0;
        this.servicosAgenda = [];
        this.verificouDesconto = false;
        this.selecionouAgendamento = false;
        this.usuarioAutorizou = 0;
        this.lblTempoDuracao.Text = "";
        //this.Encaminhamento.Tipo_Encaminhamento = "I";
        //this.HabilitarAbaEncaminhamento(false);
        this.AlterarVisibleEncaminhamento(false);
        this.Incidencias = [];
        this.txtServico.Limpar();
        this.txtServico.LimparParametros();
        this.txtServico.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    C_Animal.prototype.HabilitarAbaEncaminhamento = function (flag) {
        this.tab.AlterarVisibleAba("AbaEncaminhamento", flag);
        if (this.cboTipoEncaminhamento) {
            this.cboTipoEncaminhamento.Visible = flag;
        }
        if (this.txtCRMVVeterinario) {
            this.txtCRMVVeterinario.Visible = flag;
        }
        if (this.txtEmailEncaminhou) {
            this.txtEmailEncaminhou.Visible = flag;
        }
        if (this.txtTelefoneContatoEncaminhou) {
            this.txtTelefoneContatoEncaminhou.Visible = flag;
        }
        this.HabilitarTipoEncaminhamento(this.cboTipoEncaminhamento.GetValue());
    };
    C_Animal.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        this.PreencherServicos(entidade);
        this.PreencherProdutos(entidade);
        var parametros = {};
        //if (ValoresSismoura.ConfiguracoesPetshop.Utilizar_Acidente_Atendimento)
        //    if ((this.Incidencias && this.Incidencias.length > 0 && this.txtCodigo.GetText().CNum() <= 0) && !this.verificouAlertaIncidencia)
        //        if (this.Incidencias.length >= 1 && CNum(this.Incidencias[0].Codigo) != 0) {
        //            let profissional: string = this.Servicos[0].Profissional_Descricao;
        //            MsgBoxJS("<b>" + profissional + "</b>, você está ciente que vai realizar um atendimento em um pet que já ocasionou um acidente na companhia?",
        //                MsgBoxOptions.YesNo,
        //                MsgBoxIcon.Question,
        //                $.proxy(this.OnRespostaCienteIncidencia, this));
        //            return false;
        //        }
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
        if (this.ParametrosTela.isAgendamentoPreferencial) {
            try {
                entidade.IsAgendamentoPreferencial = true;
            }
            catch (ex) {
            }
        }
        if (entidade.Cod_Hospedagem_Servico > 1) {
            MostrarAlerta("Esse atendimento foi gerado em uma hospedagem, portanto não será permitido nenhuma alteração");
            return false;
        }
        if (entidade.Cod_Internacao_Servico > 0 || entidade.Cod_Internacao_Produto > 0) {
            MostrarAlerta("Esse atendimento foi gerado em uma internação, portanto não será permitido nenhuma alteração.");
            return false;
        }
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            //Comentar_Atualizacao_Microchip
            //let parametroValidacao: any = {
            //             codAnimal: entidade.Cod_Animal,
            //             codEmpresa: entidade.Empresa
            //         }
            //         let validarAnimalLoja: boolean = this.ExecutarFuncaoServerSideSynch("ValidarFilhoteLoja", parametroValidacao);
            //         if (validarAnimalLoja == false) {
            //             MostrarAlerta("Este filhote não está vinculado a esta loja!");
            //             return false;
            //         }
            //Fim
            if (entidade.Servicos) {
                if (entidade.Servicos.length > 0) {
                    for (var x = 0; x < entidade.Servicos.length; x++) {
                        var serv_1 = entidade.Servicos[x];
                        parametros = {
                            Data: serv_1.Data,
                            Previsao: serv_1.Hora_Servico,
                            Profissional: ("" + serv_1.Profi1).CNum(),
                            Proprietario: ("" + this.GetScope().Entity.Cod_Proprietario).CNum()
                        };
                        if (this.ExecutarFuncaoServerSideSynch("VerificaHorarioDisponivel", parametros) == true) {
                            MsgBoxJS("Já existe um agendamento com o profissional selecionado para o(s) serviço(s) informado(s) ! Não será possível realizar o agendamento.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
                            return false;
                        }
                    }
                    var codServicos_1 = [];
                    entidade.Servicos.forEach(function (q) {
                        codServicos_1.push(q.Servico);
                    });
                    parametros = {
                        codServicos: codServicos_1
                    };
                    var hasServicoVeterinario = this.ExecutarFuncaoServerSideSynch("HasServicoNaoCentroEstetico", parametros);
                    if (hasServicoVeterinario)
                        if (!this.cboEncaminhamento.GetValue() || this.cboEncaminhamento.GetValue() == "0") {
                            MostrarAlerta("Preencha o campo corretamente: Encaminhamento");
                            this.cboEncaminhamento.Obrigatorio = true;
                            return false;
                        }
                }
                if (this.servicosAgenda) {
                    if (this.servicosAgenda.length > 0) {
                        MostrarAlerta("Ainda falta serviços lançados para serem adicionados");
                        return false;
                    }
                }
            }
        }
        //if (!this.verificouCortesia)
        //    if (entidade.Cortesia > 0) {
        //        this.verificouCortesia = true;
        //        MsgBoxJS("Deseja realmente gravar o Atendimento como Cortesia?"
        //            , MsgBoxOptions.YesNo
        //            , MsgBoxIcon.Question
        //            , (result: MsgBoxResultEventArgs) => {
        //                if (result.Resultado == MsgBoxResult.Yes)
        //                    this.ClicarGravar();
        //                else
        //                    this.verificouCortesia = false;
        //            });
        //        return false;
        //    }
        if ((ValoresSismoura.PorcentagemDescontoMaximoAtendimento > 0) && (this.verificouDesconto != true)) {
            for (var x = 0; x < entidade.Servicos.length; x++) {
                var serv = entidade.Servicos[x];
                //So verifica o desconto máximo se não tiver autorização do plano. O plano pode dar um desconto maior que o permitido
                if (!serv.Codigo_Autorizacao_Plano) {
                    if ((serv.Codigo == null) && (serv.Desconto_Porcentagem > ValoresSismoura.PorcentagemDescontoMaximoAtendimento) && !this.verificadoAutorizacaoDescontoAtendimento) {
                        this.dlgFuncaoAdm.Verificar("DesAtend", ValoresSismoura.UsuarioLogado, false, this.VerificarAutorizacaoDescontoAtendimento, this);
                        return false;
                    }
                }
            }
            for (var x = 0; x < entidade.Produtos.length; x++) {
                var prod = entidade.Produtos[x];
                if ((prod.Codigo == null) && (prod.Desconto_Porcentagem > ValoresSismoura.PorcentagemDescontoMaximoAtendimento) && !this.verificadoAutorizacaoDescontoAtendimento) {
                    this.dlgFuncaoAdm.Verificar("DesAtend", ValoresSismoura.UsuarioLogado, false, this.VerificarAutorizacaoDescontoAtendimento, this);
                    return false;
                }
            }
            if (this.mudouDeProfissionalGenerico != true && this.mudouProfissionalAposConcluidoPago == true && this.GetScope().Entity.IsPago && !this.verificadoMudouCampoCritico) {
                this.dlgFuncaoAdm.Verificar("C_Ani_AltProf", ValoresSismoura.UsuarioLogado, false, this.VerificarAutorizacaoTroca, this);
                return false;
            }
            if (this.mudouDeProfissionalGenerico != true && this.mudouDataAposConcluidoPago == true && this.GetScope().Entity.IsPago && !this.verificadoMudouCampoCritico) {
                this.dlgFuncaoAdm.Verificar("C_Ani_AltData", ValoresSismoura.UsuarioLogado, false, this.VerificarAutorizacaoTroca, this);
                return false;
            }
            if (this.mudouDeProfissionalGenerico != true && this.mudouConcluidoAposPagoeConcluido == true && this.GetScope().Entity.IsPago && !this.verificadoMudouCampoCritico) {
                this.dlgFuncaoAdm.Verificar("C_Ani_AltCon", ValoresSismoura.UsuarioLogado, false, this.VerificarAutorizacaoTroca, this);
                return false;
            }
        }
        entidade.Encaminhamento = false;
        if (this.cboEncaminhamento.GetValue() == 1) {
            entidade.Encaminhamento = true;
        }
        if (entidade.Encaminhamento) {
            entidade.EntidadeEncaminhamento = {};
            entidade.EntidadeEncaminhamento = this.Encaminhamento;
        }
        entidade.Incidencias = this.Incidencias;
        if (this.codigoEspera > 0) {
            entidade.Codigo_Animais_Lista_Espera = this.codigoEspera;
        }
        entidade.Lancamento_Prestador = this.lancamentosPrestador;
        entidade.Aceite_Prestador = this.faltaServicoAtendimento;
        return true;
    };
    C_Animal.prototype.VerificarAutorizacaoDescontoAtendimento = function (retorno) {
        if (retorno.Autorizado) {
            this.verificadoAutorizacaoDescontoAtendimento = true;
            this.ClicarGravar();
        }
        else {
            this.verificadoAutorizacaoDescontoAtendimento = false;
            MostrarAlerta("Existem serviços com desconto maior que o permitido (" + ValoresSismoura.PorcentagemDescontoMaximoAtendimento.Format(2) + "%).");
        }
    };
    C_Animal.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        if (ValoresSismoura.AtendimentoConfirmarTermos && this.IsRegistroNovo) {
            MsgBoxJS("Todos os Termos foram impressos?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRepostaImprimirTodosDocumentos, this));
        }
        else {
            this.VerificarEnviarSMSDepoisGravar();
        }
        this.horarioAtendimento = null;
        this.dataAtendimento = null;
        this.codigoProfissional = 0;
        this.codigoEspera = 0;
        this.servicosAgenda = [];
        if (this.hdnUltimoProprietario.value == this.txtPet.TextBoxProprietario.GetText() || this.hdnUltimoProprietario.value == "") {
            this.txtPet.TextBoxAnimal.IndexSelecionarGrade += 1;
        }
        else {
            this.txtPet.TextBoxAnimal.IndexSelecionarGrade = 0;
        }
        this.hdnUltimoProprietario.value = this.txtPet.TextBoxProprietario.GetText();
        this.verificadoMudouCampoCritico = false;
        this.usuarioAutorizou = 0;
        this.mudouConcluidoAposPagoeConcluido = false;
        this.mudouDataAposConcluidoPago = false;
        this.mudouProfissionalAposConcluidoPago = false;
        this.mudouDeProfissionalGenerico = false;
        this.txtMotivoTroca.Limpar();
        this.valorAnterior = "";
        this.valorNovo = "";
        this.nomeCampoAlterado = "";
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
        return true;
    };
    C_Animal.prototype.OnRepostaImprimirTodosDocumentos = function (result) {
        if (result.Resultado == MsgBoxResult.No) {
            this.tab.ActiveTabIndex = 2;
        }
        this.VerificarEnviarSMSDepoisGravar();
    };
    C_Animal.prototype.OnRespostaCienteIncidencia = function (result) {
        if (result.Resultado == MsgBoxResult.Yes)
            this.dlgFuncaoAdm.Verificar("Cad_Aten_Animal_Com_Acidente", ValoresSismoura.UsuarioLogado, false, this.VerificarAutorizacaoIncidencia, this, true);
    };
    C_Animal.prototype.VerificarEnviarSMSDepoisGravar = function () {
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
    C_Animal.prototype.VerificarVacinasPendentes = function () {
        try {
            var pendentes;
            var parametros;
            parametros = {
                codigoAnimal: this.GetScope().Entity.Cod_Animal
            };
            pendentes = this.ExecutarFuncaoServerSideSynch("GetVacinasPendentesDeAgendar", parametros);
            if (pendentes && pendentes.length > 0) {
                this.GetScope()["Pendentes"] = pendentes;
                this.dlgVacinasPendentes.Show();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnBtnCancelarConsultaClick = function (s, e) {
        this.dlgConsultas.Hide();
    };
    C_Animal.prototype.OnGrdConsultasClickBotaoLinha = function (s, e) {
        if (e.columnIndex == 0) {
            this.Servico.ServicoConsulta_Origem = e.rowKey;
            this.mostrouConsulta = true;
            this.dlgConsultas.Hide();
            this.grdServicos.AdicionarOuAlterarItemAtual();
        }
    };
    C_Animal.prototype.OnGrdServicosClickBotaoLinha = function (s, e) {
        try {
            if (e.commandName == "participantes") {
                var parametros = {
                    codServico: this.Servicos[e.rowIndex].Servico_Codigo
                };
                var servico = this.ExecutarFuncaoServerSideSynch("GetServico", parametros);
                if (!servico.Solicitar_Participante) {
                    MostrarAlerta("Este serviço não está configurado para solicitar participantes");
                    return;
                }
                this.AbrirModalParticipantes(e.data);
            }
            else if (e.commandName == "btnAutorizacoes") {
                if (!this.EntityTela.Codigo) {
                    MostrarAlerta("É necessário gravar o atendimento para visualizar as autorizações dos procedimentos");
                    return;
                }
                var parametros;
                parametros = {
                    codAutorizacao: this.Servicos[e.rowIndex].Codigo_Autorizacao_Plano
                };
                this.lblAutorizacoes.innerText = this.ExecutarFuncaoServerSideSynch("RetornaAutorizacoesProcedimento", parametros);
                this.mdAutorizacoes.ModalDialog.Show();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnGrdProdutosClickBotaoLinha = function (s, e) {
        //    if (e.commandName == "participantes") {
        //        this.AbrirModalParticipantes(e.data);
        //    }
    };
    C_Animal.prototype.AbrirModalParticipantes = function (servicoParticipante) {
        try {
            this.GetScope()["ServicoParticipante"] = servicoParticipante;
            if (!servicoParticipante.Participantes) {
                servicoParticipante.Participantes = [];
            }
            this.GetScope()["Participantes"] = cloneArray(servicoParticipante.Participantes);
            this.dlgParticipante.Show();
            setTimeout($.proxy(function () {
                this.txtParticipante.Focus();
            }, this), 100);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnBtnOkClick = function (s, e) {
        try {
            e.processOnServer = false;
            var participantes = this.GetScope()["Participantes"];
            var servico = this.GetScope()["ServicoParticipante"];
            if (!participantes || participantes.length <= 0) {
                MostrarAlerta("Informe ao menos um participante");
                return;
            }
            var codigosParticipantes = [];
            for (var x = 0; x < participantes.length; x++) {
                codigosParticipantes.push(participantes[x].Profissional);
            }
            var parametros = {
                codigosParticipantes: codigosParticipantes
            };
            var retornoNomes = this.ExecutarFuncaoServerSideSynch("GetNomesParticipantes", parametros);
            servico.Participantes = participantes;
            servico.ParticipantesNomes = retornoNomes;
            this.dlgParticipante.Hide();
            this.mostrouParticipantes = true;
            if (this.GetScope()["ServicoParticipante"] == this.Servico) { //Verifica se está editando da grade ou adicionando um novo
                this.grdServicos.AdicionarOuAlterarItemAtual();
            }
            else {
                this.grdServicos.AtualizarGrid();
            }
            this.GetScope()["ServicoParticipante"] = undefined;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnBtnVoltarClick = function (s, e) {
        try {
            this.dlgParticipante.Hide();
            //this.grdServicos.AdicionarOuAlterarItemAtual();
            this.grdServicos.AtualizarGrid();
            this.GetScope()["ServicoParticipante"] = undefined;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnTxtProfissionalEncaminhouProcurou = function (s, e) {
        try {
            var parametros;
            parametros = {
                codProfissional: this.txtProfissionalEncaminhou.GetText().CNum()
            };
            var crmv = this.ExecutarFuncaoServerSideSynch("GetCrmvVeterinario", parametros);
            (!String.IsNullOrWhiteSpace(crmv)) ? this.Encaminhamento.Crmv_Veterinario = crmv : this.Encaminhamento.Crmv_Veterinario = "";
            this.GetScope().$applyAsync();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnTxtProfissionalProcurou = function (s, e) {
        try {
            this.AlteraVisibleProfissionalResponsavel(false);
            if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                var validarServicoProfissional = this.verificarServicoCategoriaSala(this.cboEmpresa.GetValue(), this.txtProfissional.GetText().CNum(), this.txtDataServico.Date, this.txtServico.GetText().CNum());
                if (validarServicoProfissional && !String.IsNullOrWhiteSpace(validarServicoProfissional)) {
                    this.txtServico.Focus();
                    this.txtServico.Limpar();
                    MostrarAlerta(validarServicoProfissional);
                    return;
                }
            }
            if (this.txtProfissional.GetText().CNum() <= 0) {
                return;
            }
            var param = {
                codProfissional: this.txtProfissional.GetText().CNum()
            };
            if (this.ExecutarFuncaoServerSideSynch("isProfissionalTerceirizado", param)) {
                this.profissionalPrestador = true;
                this.AlteraVisibleProfissionalResponsavel(true);
                this.txtProfissionalResponsavel.Focus();
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnTxtCheckListProcuraProcurou = function (s, e) {
        try {
            var parametros;
            parametros = {
                codigoAtendimento: ("" + this.GetScope().Entity.Codigo).CNum(),
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
    C_Animal.prototype.AlteraVisibleProfissionalResponsavel = function (flag) {
        this.txtProfissionalResponsavel.Obrigatorio = flag;
        this.txtProfissionalResponsavel.Visible = flag;
    };
    C_Animal.prototype.OnTxtParticipanteProcurou = function (s, e) {
        try {
            var parametros;
            var entidade;
            entidade = this.GetScope()["Participante"];
            parametros = {
                codigoParticipante: ("" + entidade.Profissional).CNum(),
                codigoServico: ("" + this.Servico.Servico_Codigo).CNum()
            };
            var retornoComissao = this.ExecutarFuncaoServerSideSynch("RetornarComissaoPorProfissionalServico", parametros);
            entidade.Comissao = (retornoComissao / 100) * this.GetTotalServicos();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnBtnCalcularContinuosClick = function (s, e) {
        try {
            var replica;
            var listaContinuos;
            replica = cloneObject(this.GetScope().Entity);
            this.PreencherServicos(replica);
            this.PreencherProdutos(replica);
            for (var x = 0; x < this.txtQuantidadeContinuos.GetText().CNum(); x++) {
                replica = cloneObject(this.GetScope().Entity);
                replica.Codigo = 0;
                replica.Data_Cadastro = new Date();
                if (this.chkGerarSemData.Check.checked) {
                    replica.Data = null;
                }
                else {
                    replica.Data = replica.Data.addDays(this.txtQuantidadeDias.GetText().CNum());
                }
                //Servicos
                for (var y = 0; y < replica.Servicos.length; y++) {
                    var servico = replica.Servicos[y];
                    servico.Codigo = 0;
                    servico.Atendimento = 0;
                    servico.Venda = null;
                    servico.Concluido = false;
                    servico.EnviouSMS = false;
                    servico.Importado_Venda = false;
                    servico.VacinaAgendada = null;
                    if (this.chkGerarSemData.Check.checked) {
                        servico.GerarSemData = true;
                        servico.Hora_Servico = "";
                        servico.Hora_Entrega = "";
                        servico.Data = null;
                        servico.Data_Alteracao = null;
                        servico.Data_Entrega = null;
                    }
                    else {
                        servico.GerarSemData = false;
                        if (servico.Data) {
                            servico.Data = servico.Data.addDays(this.txtQuantidadeDias.GetText().CNum());
                        }
                        if (servico.Data_Alteracao) {
                            servico.Data_Alteracao = servico.Data_Alteracao.addDays(this.txtQuantidadeDias.GetText().CNum());
                        }
                        if (servico.Data_Entrega) {
                            servico.Data_Entrega = servico.Data_Entrega.addDays(this.txtQuantidadeDias.GetText().CNum());
                        }
                    }
                }
                //Produtos
                for (var yProd = 0; yProd < replica.Produtos.length; yProd++) {
                    var produto = replica.Produtos[yProd];
                    produto.Codigo = 0;
                    produto.Cod_Atendimento = 0;
                    if (this.chkGerarSemData.Check.checked) {
                        //produto.GerarSemData = true;
                        produto.Hora_Utilizado = "";
                        produto.Data_Utilizado = null;
                    }
                    else {
                        //produto.GerarSemData = false;
                        if (produto.Data_Utilizado) {
                            produto.Data_Utilizado = produto.Data_Utilizado.addDays(this.txtQuantidadeDias.GetText().CNum());
                        }
                    }
                }
                listaContinuos.push(replica);
            }
            var servicosGrid = this.Servicos;
            var servs = [];
            var produtosGrid = this.Produtos;
            var prods = [];
            for (var x = 0; x < listaContinuos.length; x++) {
                //Servicos
                for (var y = 0; y < listaContinuos[x].Servicos.length; y++) {
                    var novoServicoContinuo = {};
                    novoServicoContinuo.Codigo = (x * listaContinuos[x].Servicos.length) + (y + 1); //identador (1, 2, 3, ...)
                    novoServicoContinuo.Atendimento = x + 2; //começa do 2 para não confundir o usuario, pois o primeiro é o da tela.
                    novoServicoContinuo.Data = listaContinuos[x].Servicos[y].Data;
                    for (var z = 0; z < servicosGrid.length; z++) {
                        if (listaContinuos[x].Servicos[y].Servico == servicosGrid[z].Servico_Codigo) {
                            novoServicoContinuo.Servico = servicosGrid[z].Servico_Descricao;
                        }
                    }
                    servs.push(novoServicoContinuo);
                }
                //Produtos
                for (var yProd = 0; yProd < listaContinuos[x].Produtos.length; yProd++) {
                    var novoProdutoContinuo = {};
                    novoProdutoContinuo.Codigo = (x * listaContinuos[x].Produtos.length) + (yProd + 1); //identador (1, 2, 3, ...)
                    novoProdutoContinuo.Atendimento = x + 2; //começa do 2 para não confundir o usuario, pois o primeiro é o da tela.
                    novoProdutoContinuo.Data = listaContinuos[x].Produtos[yProd].Data_Utilizado;
                    for (var zProd = 0; zProd < produtosGrid.length; zProd++) {
                        if (listaContinuos[x].Produtos[yProd].Cod_Produto == produtosGrid[zProd].Produto_Codigo) {
                            novoProdutoContinuo.Produto = produtosGrid[zProd].Produto_Descricao;
                        }
                    }
                    prods.push(novoProdutoContinuo);
                }
            }
            this.atendimentosContinuos = listaContinuos;
            this.servicosContinuos = servs;
            this.produtosContinuos = prods;
            this.grdAtendimentosContinuos.PreencherGrid(this.servicosContinuos);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnbtnFecharAutorizacaoClick = function (s, e) {
        e.processOnServer = false;
        this.mdAutorizacoes.Hide();
    };
    C_Animal.prototype.OnBtnOkContinuosClick = function (s, e) {
        e.processOnServer = false;
        this.GravarContinuos();
    };
    C_Animal.prototype.GravarContinuos = function () {
        try {
            var parametros;
            if (!this.atendimentosContinuos || this.atendimentosContinuos.length <= 0) {
                MostrarAlerta("Não foram calculados os atendimentos continuos!");
                return;
            }
            if (!this.verificouFeriados) {
                this.verificouFeriados = true;
                var datasVerificar;
                for (var x = 0; x < this.servicosContinuos.length; x++) {
                    datasVerificar.push(this.servicosContinuos[x].Data);
                }
                for (var x = 0; x < this.produtosContinuos.length; x++) {
                    datasVerificar.push(this.produtosContinuos[x].Data);
                }
                parametros = {
                    datasVerificar: datasVerificar
                };
                var feriados = this.ExecutarFuncaoServerSideSynch("VerificarDatasFeriados", parametros);
                var feriadosFormatados = [];
                var mensagem;
                for (var x = 0; x < feriados.length; x++) {
                    feriadosFormatados.push(feriados[x].FormataData());
                }
                if (feriados.length > 0) {
                    if (feriados.length > 1) {
                        mensagem = "A data " + feriadosFormatados.join(", ") + " não é dia util";
                    }
                    else {
                        mensagem = "As datas " + feriadosFormatados.join(", ") + " não são dias uteis";
                    }
                    MsgBoxJS(mensagem + ". Deseja continuar mesmo assim?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.RetornoFeriadosContinuo, this));
                    return;
                }
            }
            for (var x = 0; x < this.atendimentosContinuos.length; x++) {
                for (var y = 0; y < this.atendimentosContinuos[x].Servicos.length; y++) {
                    for (var z = 0; z < this.servicosContinuos.length; z++) {
                        if (this.atendimentosContinuos[x].Servicos[y].Codigo == this.servicosContinuos[z].Codigo) {
                            this.atendimentosContinuos[x].Servicos[y].Data = this.servicosContinuos[z].Data;
                        }
                    }
                }
                for (var yProd = 0; yProd < this.atendimentosContinuos[x].Produtos.length; yProd++) {
                    for (var zProd = 0; zProd < this.servicosContinuos.length; zProd++) {
                        if (this.atendimentosContinuos[x].Produtos[yProd].Codigo == this.servicosContinuos[zProd].Codigo) {
                            this.atendimentosContinuos[x].Produtos[yProd].Data_Utilizado = this.servicosContinuos[zProd].Data;
                        }
                    }
                }
            }
            if (this.ClicarGravar()) {
                parametros = {
                    atendimentoOrigem: this.GetScope().Entity,
                    atendimentosContinuos: this.atendimentosContinuos
                };
                try {
                    var sucesso = this.ExecutarFuncaoServerSideSynch("GravaCotinuos", parametros);
                    if (sucesso) {
                        MostrarMensagem("Operação realizada com sucesso!");
                    }
                    else {
                        MostrarMensagem("Aconteceram erros ao tentar gravar os atendimentos. Execute a função novamente");
                    }
                }
                catch (ex) {
                    LogarException(ex);
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.RetornoFeriadosContinuo = function (result) {
        if (result.Resultado = MsgBoxResult.Yes) {
            this.GravarContinuos();
        }
    };
    C_Animal.prototype.OnClickAtendimentoContinuo = function (s, e) {
        e.processOnServer = false;
        this.dlgAtendimentoContinuo.Show();
    };
    C_Animal.prototype.OnBtnCancelarContinuosClick = function (s, e) {
        e.processOnServer = false;
        this.atendimentosContinuos = null;
        this.servicosContinuos = null;
        this.produtosContinuos = null;
        this.dlgAtendimentoContinuo.Hide();
    };
    C_Animal.prototype.PreencherServicos = function (entidade) {
        try {
            var servicos = this.Servicos;
            var servicosExistentes = entidade.Servicos;
            entidade.Servicos = [];
            for (var x = 0; x < servicos.length; x++) {
                var novoServico = {};
                var servicoGrid;
                for (var y = 0; y < servicosExistentes.length; y++) {
                    if (servicosExistentes[y].Codigo != null && servicosExistentes[y].Codigo != undefined && servicosExistentes[y].Codigo > 0 && servicosExistentes[y].Codigo == servicos[x].Codigo) {
                        novoServico = servicosExistentes[y];
                        y = servicosExistentes.length;
                    }
                }
                servicoGrid = servicos[x];
                novoServico.Codigo = servicoGrid.Codigo;
                novoServico.Cod_Animal = entidade.Cod_Animal;
                novoServico.Concluido = servicoGrid.Concluido;
                var dt;
                dt = servicoGrid.Data.FormataData().ToDate();
                dt.setHours(12);
                // novoServico.Data = servicoGrid.Data.FormataData().ToDate();
                novoServico.Data = dt;
                novoServico.Data_Entrega = servicoGrid.Data_Entrega;
                novoServico.Desconto = servicoGrid.Desconto;
                novoServico.Finalizado = false;
                novoServico.Obs = servicoGrid.Observacao;
                novoServico.Qtde = servicoGrid.Quantidade;
                novoServico.Servico = servicoGrid.Servico_Codigo;
                novoServico.Usuario = ValoresSismoura.UsuarioLogado;
                novoServico.Valor = servicoGrid.Valor;
                novoServico.Desconto_Porcentagem = servicoGrid.Desconto_Porcentagem;
                novoServico.Participantes = servicoGrid.Participantes;
                novoServico.VacinaAgendada = servicoGrid.VacinaAgendada;
                novoServico.ServicoConsulta_Origem = servicoGrid.ServicoConsulta_Origem;
                novoServico.Lote = servicoGrid.Lote;
                novoServico.Data_Validade = servicoGrid.Data_Validade;
                novoServico.Laboratorio = servicoGrid.Laboratorio;
                novoServico.Partida = servicoGrid.Partida;
                novoServico.Empresa = this.GetScope().Entity.Empresa;
                novoServico.Codigo_Autorizacao_Plano = servicoGrid.Codigo_Autorizacao_Plano;
                novoServico.Lista_Preco = servicoGrid.Lista_Preco;
                novoServico.Valor_Repasse_Prestador = servicoGrid.Valor_Repasse_Prestador;
                if (!servicoGrid.Entregar) {
                    novoServico.Hora_Entrega = "";
                }
                else {
                    novoServico.Hora_Entrega = servicoGrid.Entregar.FormataHoraSismoura();
                }
                if (!servicoGrid.Pegar) {
                    novoServico.Hora_Pegar = "";
                }
                else {
                    novoServico.Hora_Pegar = servicoGrid.Pegar.FormataHoraSismoura();
                }
                if (!servicoGrid.Previsao) {
                    novoServico.Hora_Servico = "";
                }
                else {
                    novoServico.Hora_Servico = servicoGrid.Previsao.FormataHoraSismoura();
                }
                if (servicoGrid.Profissional_Codigo) {
                    novoServico.Profi1 = servicoGrid.Profissional_Codigo;
                }
                if (servicoGrid.Profissional_Responsavel)
                    novoServico.Profissional_Responsavel = servicoGrid.Profissional_Responsavel;
                if (!novoServico.Participantes) {
                    novoServico.Participantes = [];
                }
                entidade.Servicos.push(novoServico);
            }
            this.adicionarCamposComputadosAtendimento(entidade);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.PreencherProdutos = function (entidade) {
        try {
            var produtos = this.Produtos;
            var produtosExistentes = entidade.Produtos;
            entidade.Produtos = [];
            for (var x = 0; x < produtos.length; x++) {
                var novoProduto = {};
                var produtoGrid;
                for (var y = 0; y < produtosExistentes.length; y++) {
                    if (produtosExistentes[y].Codigo != null && produtosExistentes[y].Codigo != undefined && produtosExistentes[y].Codigo > 0 && produtosExistentes[y].Codigo == produtos[x].Codigo) {
                        novoProduto = produtosExistentes[y];
                        y = produtosExistentes.length;
                    }
                }
                produtoGrid = produtos[x];
                novoProduto.Codigo = produtoGrid.Codigo;
                novoProduto.Cod_Atendimento = entidade.Codigo;
                novoProduto.Cod_Produto = produtoGrid.Produto_Codigo;
                novoProduto.Qtde = produtoGrid.Quantidade;
                novoProduto.Valor_Unitario = produtoGrid.Valor;
                novoProduto.Desconto = produtoGrid.Desconto;
                novoProduto.Desconto_Porcentagem = produtoGrid.Desconto_Porcentagem;
                novoProduto.Valor_Final = produtoGrid.Total;
                novoProduto.Data_Utilizado = produtoGrid.Data;
                novoProduto.Observacao = produtoGrid.Observacao;
                novoProduto.Lote = produtoGrid.Lote;
                novoProduto.Cobrado = produtoGrid.Cobrado;
                if (!produtoGrid.Hora) {
                    novoProduto.Hora_Utilizado = "";
                }
                else {
                    novoProduto.Hora_Utilizado = produtoGrid.Hora.FormataHoraSismoura();
                }
                if (produtoGrid.Profissional_Codigo) {
                    novoProduto.Profissional_Utilizou = produtoGrid.Profissional_Codigo;
                }
                //if (!novoServico.Participantes) {
                //    novoServico.Participantes = [];
                //}
                entidade.Produtos.push(novoProduto);
            }
            this.adicionarCamposComputadosAtendimento(entidade);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.adicionarCamposComputadosAtendimento = function (atendimento) {
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
    C_Animal.prototype.GetTotalServicos = function () {
        var servicos;
        var retorno = 0;
        servicos = this.Servicos;
        for (var x = 0; x < servicos.length - 1; x++) {
            retorno += servicos[x].Total;
        }
        return retorno;
    };
    C_Animal.prototype.GetTotalProdutos = function () {
        var produtos;
        var retorno = 0;
        produtos = this.Produtos;
        for (var x = 0; x < produtos.length - 1; x++) {
            retorno += produtos[x].Total;
        }
        return retorno;
    };
    C_Animal.prototype.OnValidandoItemPendente = function (s, e) {
        var entidade;
        entidade = e.item;
        if (!entidade.Data) {
            MostrarAlerta("Informe uma data valida!");
            e.cancelar = true;
        }
        if (("" + this.cboEncaminhamento.GetValue()).CNum() <= 0) {
            MostrarAlerta("Informe se o animal foi encaminhado");
        }
        if (!entidade.Servico || entidade.Servico <= 0) {
            MostrarAlerta("Informe uma serviço valido!");
            e.cancelar = true;
        }
        if (!entidade.Dose || entidade.Dose <= 0) {
            MostrarAlerta("Informe uma dose para o serviço!");
            e.cancelar = true;
        }
    };
    C_Animal.prototype.OnValidandoItemParticipante = function (s, e) {
        try {
            var entidade;
            entidade = e.item;
            var servico = this.GetScope()["ServicoParticipante"];
            if (servico.Concluido) {
                MostrarAlerta("O serviço selecionado já foi concluído e os participantes não poderão ser alterados!");
                e.cancelar = true;
                return;
            }
            if (!(entidade.Profissional > 0)) {
                MostrarAlerta("Informe um profissional!");
                this.txtParticipante.Focus();
                e.cancelar = true;
                return;
            }
            if (!entidade.Comissao) {
                entidade.Comissao = 0;
            }
            //if (this.txtComissaoReais.ObrigatorioUsuario) {
            //    if (entidade.Comissao <= 0) {
            //        MostrarAlerta("Informe a comissão!");
            //        this.txtComissaoReais.Focus();
            //        e.cancelar = true;
            //        return;
            //    }
            //}
            if (entidade.Comissao >= servico.Total) {
                MostrarAlerta("A comissão não pode ser maior ou igual ao valor do serviço!");
                e.cancelar = true;
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnExcluindoItemParticipante = function (s, e) {
        try {
            var servico = this.GetScope()["ServicoParticipante"];
            var entidade;
            entidade = e.item;
            if (servico.Concluido) {
                MostrarAlerta("O serviço selecionado já foi concluído e os participantes não poderão ser alterados!");
                e.cancelar = true;
            }
            if (this.GetScope().Entity.IsPago) {
                MostrarAlerta("O serviço selecionado já foi pago e os participantes não poderão ser alterados!");
                e.cancelar = true;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnExcluindoIncidencia = function (s, e) {
        try {
            var entidade;
            entidade = e.item;
            if (entidade && entidade.Codigo > 0) {
                MostrarAlerta("O acidente não pode ser Excluido pois já encontra-se vinculado em um atendimento!");
                e.cancelar = true;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnAdicionouParticipante = function (s, e) {
        this.txtParticipante.Focus();
    };
    C_Animal.prototype.OnLimpouParticipante = function (s, e) {
        try {
            var entity = e.item;
            entity.Profissional = 0;
            entity.Comissao = 0;
            this.txtParticipante.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnAdicionouItemPendente = function (s, e) {
        try {
            var entidade;
            entidade = e.item;
            entidade.Nome = this.txtServicoPendente.GetResultado();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnAdicionandoGridIncidencia = function (s, e) {
        try {
            if (String.IsNullOrWhiteSpace(this.txtIncidencia.GetText())) {
                MostrarAlerta("Informe a incidência do pet");
                e.cancelar = true;
                return;
            }
            if (this.txtTipoAcidente.GetText().CNum() <= 0) {
                MostrarAlerta("Informe o Tipo do Acidente");
                e.cancelar = true;
                return;
            }
            var origemAcidente = ("" + this.cboOrigemAcidente.Combo.GetValue()).CNum();
            if (origemAcidente == 0) {
                MostrarAlerta("Informe a origem do acidente");
                e.cancelar = true;
                return;
            }
            var gravidade = ("" + this.cboGravidadeAcidente.Combo.GetValue()).CNum();
            if (gravidade == 0) {
                MostrarAlerta("Informe a gravidade do acidente");
                e.cancelar = true;
                return;
            }
            var entidade = void 0;
            entidade = e.item;
            entidade.Datahora = this.DataServidor();
            entidade.Cod_Animal = this.txtPet.TextBoxAnimal.GetText().CNum();
            entidade.Tipo_Acidente_Texto = this.txtTipoAcidente.GetResultado();
            switch (origemAcidente) {
                case 1:
                    entidade.Origem_Acidente_Texto = 'Acidente Pet';
                    break;
                case 2:
                    entidade.Origem_Acidente_Texto = 'Acidente Colaborador';
                    break;
            }
            switch (gravidade) {
                case 1:
                    entidade.Gravidade_Texto = 'Leve';
                    break;
                case 2:
                    entidade.Gravidade_Texto = 'Moderado';
                    break;
                case 3:
                    entidade.Gravidade_Texto = 'Severo';
                    break;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnLimpouItemPendente = function (s, e) {
        try {
            var entidade;
            entidade = e.item;
            entidade.Codigo = this.grdPendentes.Grid.VisibleRowsCount() + 1;
            entidade.Data = this.DataServidor();
            entidade.Dose = 0;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnLimpouItemServico = function (s, e) {
        try {
            var entidade;
            entidade = e.item;
            this.retornoComplementosItemServico = null;
            this.mostrouParticipantes = false;
            this.mostrouConsulta = false;
            this.mostrouFuncao = false;
            var servicos = this.Servicos;
            if (!servicos)
                servicos = [];
            var maxContador = 0;
            for (var x = 0; x < servicos.length; x++) {
                if (servicos[x].Contador > maxContador) {
                    maxContador = servicos[x].Contador;
                }
            }
            entidade.Contador = maxContador + 1;
            entidade.Quantidade = 1;
            entidade.Valor = 0.0;
            entidade.Desconto = 0.0;
            entidade.Concluido = false;
            this.lblTempoDuracao.Text = "";
            if (this.horarioAtendimento) {
                entidade.Previsao = this.horarioAtendimento;
            }
            else {
                entidade.Previsao = new Date();
            }
            if (this.dataAtendimento) {
                entidade.Data = this.dataAtendimento;
            }
            else {
                entidade.Data = new Date();
            }
            if (this.codigoProfissional) {
                entidade.Profissional_Codigo = this.codigoProfissional;
            }
            else {
                entidade.Profissional_Codigo = 0;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnLimpouItemProduto = function (s, e) {
        try {
            var entidade;
            entidade = e.item;
            var produtos = this.Produtos;
            if (!produtos)
                produtos = [];
            var maxContador = 0;
            for (var x = 0; x < produtos.length; x++) {
                if (produtos[x].Contador > maxContador) {
                    maxContador = produtos[x].Contador;
                }
            }
            entidade.Contador = maxContador + 1;
            entidade.Quantidade = 1;
            entidade.Valor = 0.0;
            entidade.Desconto = 0.0;
            entidade.Lote = "";
            entidade.Observacao = "";
            entidade.Cobrado = true;
            entidade.Cobrado_Text = "Sim";
            var dataServidor = this.DataServidor();
            if (this.horarioAtendimento) {
                entidade.Hora = this.horarioAtendimento;
            }
            else {
                entidade.Hora = dataServidor;
            }
            if (this.dataAtendimento) {
                entidade.Data = this.dataAtendimento;
            }
            else {
                entidade.Data = dataServidor;
            }
            if (this.codigoProfissional) {
                entidade.Profissional_Codigo = this.codigoProfissional;
            }
            else {
                entidade.Profissional_Codigo = 0;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnAlterandoItem = function (s, e) {
        var _this = this;
        var valorAntigo = e.oldRowValue;
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            if (e.fieldNameAlterado == 'Valor') {
                e.cancelar = true;
                return;
            }
            if (this.IsAtendimentoConvenio() && this.IsConvenioProprio(this.txtConvenio.GetText().CNum())) {
                if (e.fieldNameAlterado == 'Desconto' || e.fieldNameAlterado == 'Desconto_Porcentagem') {
                    e.cancelar = true;
                    MostrarAlerta("Desconto não pode ser alterado para serviços em que foi aplicado algum bônus");
                    return;
                }
            }
            if (e.fieldNameAlterado == 'Profissional_Codigo') {
                if (!this.valorProfissional || this.valorProfissional == 0) {
                    var parametros = parametros = {
                        codEmpresa: this.cboEmpresa.GetValue(),
                        codProfissional: e.valorAlterado,
                        data: e.item.Data,
                        horario: e.item.Previsao
                    };
                    var horarioDisponivel = this.ExecutarFuncaoServerSideSynch("VerificarProfissionalHorario", parametros);
                    if (horarioDisponivel == false) {
                        this.valorProfissional = e.valorAlterado;
                        MostrarAlerta("Este profissional não está disponível neste horário");
                        e.cancelar = true;
                    }
                }
                else {
                    this.valorProfissional = 0;
                    e.cancelar = true;
                }
            }
            var verificar = false;
            var verificarPrevisao = false;
            var codProfissional = e.item.Profissional_Codigo;
            var data = e.item.Data;
            var codServico = e.item.Servico_Codigo;
            if (e.fieldNameAlterado == 'Profissional_Codigo') {
                codProfissional = e.valorAlterado;
                verificar = true;
            }
            else if (e.fieldNameAlterado == 'Data') {
                data = e.valorAlterado;
                verificar = true;
            }
            else if (e.fieldNameAlterado == 'Previsao') {
                verificarPrevisao = true;
                verificar = true;
            }
            if (verificar == true && !e.cancelar) {
                if (verificarPrevisao == true) {
                    var paramEncaixe = {
                        codProfissional: codProfissional,
                        dataServico: data,
                        horaServico: e.item.Previsao,
                        CodEmpresa: "" + this.cboEmpresa.GetValue(),
                        codServico: codServico,
                        codPet: this.txtPet.TextBoxAnimal.GetText().CNum()
                    };
                    var parametrosProfHorarioServ = {
                        codProfissional: codProfissional,
                        dataServico: data,
                        horaServico: e.item.Previsao,
                        CodEmpresa: "" + this.cboEmpresa.GetValue(),
                        codServico: codServico
                    };
                    var retornoProfHorarioServ = this.ExecutarFuncaoServerSideSynch("IsProfissionalHorarioServico", parametrosProfHorarioServ);
                    var isEncaixeProfissional = this.ExecutarFuncaoServerSideSynch("isEncaixeProfissional", paramEncaixe);
                    var prosseguir = true;
                    var contador_1 = e.item.Contador;
                    var horario_1 = e.item.Previsao;
                    if (retornoProfHorarioServ == true) {
                        e.cancelar = true;
                        MsgBoxJS("Este serviço ultrapassa o horário de saída do profissional, deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                            if (result.Resultado == MsgBoxResult.Yes) {
                                for (var i = 0; i < _this.Servicos.length; i++) {
                                    if (_this.Servicos[i].Contador == contador_1) {
                                        _this.Servicos[i].Previsao = horario_1;
                                        _this.grdServicos.AtualizarGrid();
                                    }
                                }
                            }
                        });
                    }
                    else if (isEncaixeProfissional == true && !this.inserirItem && !this.ParametrosTela.isEncaixe) {
                        prosseguir = false;
                        MsgBoxJS("Já existe um atendimento cadastrado no período informado, será gerado um encaixe, deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                            if (result.Resultado == MsgBoxResult.Yes) {
                                for (var i = 0; i < _this.Servicos.length; i++) {
                                    if (_this.Servicos[i].Contador == contador_1) {
                                        _this.Servicos[i].Previsao = horario_1;
                                        _this.grdServicos.AtualizarGrid();
                                    }
                                }
                            }
                        });
                    }
                }
                else if (this.validarProfissional == true) {
                    this.validarProfissional = false;
                    var validarServicoProfissional = this.verificarServicoCategoriaSala(this.cboEmpresa.GetValue(), codProfissional, data, codServico);
                    if (validarServicoProfissional && !String.IsNullOrWhiteSpace(validarServicoProfissional)) {
                        MostrarAlerta(validarServicoProfissional);
                        e.cancelar = true;
                        return;
                    }
                    var parametrosProfHorarioServ = {
                        codProfissional: codProfissional,
                        dataServico: data,
                        horaServico: e.item.Previsao,
                        CodEmpresa: "" + this.cboEmpresa.GetValue(),
                        codServico: codServico
                    };
                    var paramEncaixe = {
                        codProfissional: codProfissional,
                        dataServico: data,
                        horaServico: e.item.Previsao,
                        CodEmpresa: "" + this.cboEmpresa.GetValue(),
                        codServico: codServico,
                        codPet: this.txtPet.TextBoxAnimal.GetText().CNum()
                    };
                    var retornoProfHorarioServ = this.ExecutarFuncaoServerSideSynch("IsProfissionalHorarioServico", parametrosProfHorarioServ);
                    var isEncaixeProfissional = this.ExecutarFuncaoServerSideSynch("isEncaixeProfissional", paramEncaixe);
                    var prosseguir = true;
                    var contador_2 = e.item.Contador;
                    var horario = e.item.Previsao;
                    var Profissional_Codigo_1 = e.item.Profissional_Codigo;
                    var Data_1 = e.item.Data;
                    if (retornoProfHorarioServ == true) {
                        e.cancelar = true;
                        MsgBoxJS("Este serviço ultrapassa o horário de saída do profissional, deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                            if (result.Resultado == MsgBoxResult.Yes) {
                                for (var i = 0; i < _this.Servicos.length; i++) {
                                    if (_this.Servicos[i].Contador == contador_2) {
                                        if (e.fieldNameAlterado == 'Profissional_Codigo') {
                                            _this.Servicos[i].Profissional_Codigo = Profissional_Codigo_1;
                                        }
                                        else if (e.fieldNameAlterado == 'Data') {
                                            _this.Servicos[i].Data = Data_1;
                                        }
                                        _this.grdServicos.AtualizarGrid();
                                    }
                                }
                            }
                        });
                    }
                    else if (isEncaixeProfissional == true && !this.inserirItem && !this.ParametrosTela.isEncaixe) {
                        prosseguir = false;
                        MsgBoxJS("Já existe um atendimento cadastrado no período informado, será gerado um encaixe, deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                            if (result.Resultado == MsgBoxResult.Yes) {
                                for (var i = 0; i < _this.Servicos.length; i++) {
                                    if (_this.Servicos[i].Contador == contador_2) {
                                        if (e.fieldNameAlterado == 'Profissional_Codigo') {
                                            _this.Servicos[i].Profissional_Codigo = Profissional_Codigo_1;
                                        }
                                        else if (e.fieldNameAlterado == 'Data') {
                                            _this.Servicos[i].Data = Data_1;
                                        }
                                        _this.grdServicos.AtualizarGrid();
                                    }
                                }
                            }
                        });
                    }
                }
                else {
                    e.cancelar = true;
                    this.validarProfissional = true;
                }
            }
        }
        var parametros;
        parametros = {
            codProfissional: valorAntigo.Profissional_Codigo
        };
        this.mudouDeProfissionalGenerico = this.ExecutarFuncaoServerSideSynch("VerificarProfissionalGenerico", parametros);
        if (e.fieldNameAlterado == "Profissional_Codigo" && valorAntigo.Concluido && this.GetScope().Entity.IsPago) {
            this.mudouProfissionalAposConcluidoPago = true;
            this.nomeCampoAlterado = "Profissional";
            this.valorAnterior = valorAntigo.Profissional_Codigo.toString();
            this.valorNovo = e.valorAlterado;
        }
        if (e.fieldNameAlterado == "Data" && valorAntigo.Concluido && this.GetScope().Entity.IsPago) {
            this.mudouDataAposConcluidoPago = true;
            this.nomeCampoAlterado = "Data";
            this.valorAnterior = valorAntigo.Data.FormataData();
            this.valorNovo = e.valorAlterado;
        }
        if ((e.fieldNameAlterado == "Concluido" || e.fieldNameAlterado == "Concluido_Text") && valorAntigo.Concluido && this.GetScope().Entity.IsPago) {
            this.mudouConcluidoAposPagoeConcluido = true;
            this.nomeCampoAlterado = "Concluído";
            this.valorAnterior = valorAntigo.Concluido_Text;
            this.valorNovo = e.valorAlterado;
        }
    };
    C_Animal.prototype.OnGerouCelulaGradeServicos = function (s, e) {
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
    C_Animal.prototype.OnExcluindoItemServico = function (s, e) {
        try {
            if (this.GetScope().Entity.IsPago || this.EntityTela.Pagamento_Status_Stoom > 0) {
                var parametros = {
                    codigoServico: e.item["Servico_Codigo"],
                    codigoEmpresa: "" + this.cboEmpresa.GetValue(),
                    codCliente: this.txtPet.TextBoxProprietario.GetText().CNum()
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
            if (this.lblZanthus) {
                if (this.lblZanthus.Text != '') {
                    MostrarAlerta("Este serviço não pode ser excluído pois o atendimento já foi integrado!");
                    e.cancelar = true;
                    return;
                }
            }
            if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                if (this.GetScope().Entity.Hospedagem > 0) {
                    MostrarAlerta("Este serviço não pode ser excluído, pois se trata de uma diária de hospedagem.");
                    e.cancelar = true;
                    return;
                }
            }
            //pré - pagamento
            //if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            //    if (this.GetScope().Entity.Status_PrePagamento_Zanthus == SiSMoura.Core.Entity.Animais_Atendimento.StatusPrePagamentoZANTHUS.AguardandoEnvio) {
            //        MostrarAlerta("Este serviço não pode ser excluído pois o atendimento está pendente de integração para o pré-pagamento!");
            //        e.cancelar = true;
            //        return;
            //    }
            //}
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnExcluindoItemProduto = function (s, e) {
        try {
            if (this.GetScope().Entity.IsPago) {
                MostrarAlerta("Este produto não pode ser excluído, pois já foi pago");
                e.cancelar = true;
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.getRetornoComplementoItemServico = function (entidade, indexItem) {
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
                    codProfissional: ("" + entidade.Profissional_Codigo).CNum(),
                    contemAgendamentoSelecionado: contemAgendamentoSelecionado,
                    dataServico: entidade.Data,
                    horaServico: entidade.Previsao,
                    codEmpresa: this.cboEmpresa.GetValue()
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
    C_Animal.prototype.OnValidandoItemServico = function (s, e) {
        try {
            var fieldAlterado = "" + e.fieldNameAlterado;
            var entidade;
            entidade = e.item;
            var servicos = this.Servicos;
            var descPorc;
            if (!servicos) {
                servicos = [];
            }
            if (e.oldRowValue.Desconto != entidade.Desconto) {
                descPorc = 100 / (entidade.Valor / entidade.Desconto);
            }
            else {
                descPorc = entidade.Desconto_Porcentagem;
            }
            this.IniciarValoresAutomaticosServico(entidade);
            if (descPorc != null && descPorc != undefined) {
                //Faz este procedimento para corriir os valores de desconto
                entidade.Desconto_Porcentagem = descPorc;
            }
            //Atualiza a variável retornoComplementosItemServico;
            this.getRetornoComplementoItemServico(entidade, e.index);
            //Não deixa inserir serviços em atendimentos gerados pela hospedagem, mas deixa eu altera algum serviço, por exemplo, aplicar um desconto no serviço.
            if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                if (this.GetScope().Entity &&
                    this.GetScope().Entity.Hospedagem > 0) {
                    e.errorText = "Não é possível inserir / alterar serviços em uma atendimento criado pela Hospedagem, para adicionar serviços utilize a tela Cadastro de Hospedagem.";
                    e.cancelar = true;
                    return;
                }
                if (this.EntityTela.Pagamento_Status_Stoom > 0 &&
                    ((fieldAlterado.toLowerCase() != "data" &&
                        fieldAlterado.toLowerCase() != "previsao" &&
                        fieldAlterado.toLowerCase() != "profissional_codigo" &&
                        fieldAlterado.toLowerCase() != "concluido") ||
                        (entidade.Concluido
                            &&
                                fieldAlterado.toLowerCase() != "concluido"))) {
                    e.errorText = "Não é possível inserir / alterar serviços em uma atendimento criado pelo Aplicativo Pet.";
                    e.cancelar = true;
                    return;
                }
            }
            if (!this.retornoComplementosItemServico) {
                MostrarAlerta("Serviço não encontrado");
                e.cancelar = true;
                return;
            }
            if (!this.retornoComplementosItemServico.IsParticipante && entidade.Profissional_Codigo <= 0) {
                e.errorText = "Informe o campo profissional";
                e.cancelar = true;
                return;
            }
            if (!entidade.Data) {
                e.errorText = "Informe a data";
                e.cancelar = true;
                return;
            }
            if (!entidade.Previsao) {
                e.errorText = "Informe a previsão";
                e.cancelar = true;
                return;
            }
            var parametros;
            parametros = {
                Data: entidade.Data,
                Previsao: entidade.Previsao.FormataHoraSismoura(),
                Profissional: ("" + entidade.Profissional_Codigo).CNum(),
                Proprietario: ("" + this.GetScope().Entity.Cod_Proprietario).CNum()
            };
            //const retorno = this.ExecutarFuncaoServerSideSynch("VerificaHorarioDisponivel", parametros);
            //if (retorno == true) {
            //    //MsgBoxJS("Já existe um agendamento para o profissional selecionado neste mesmo horário! Não será possível realizar o agendamento.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
            //    MostrarAlerta("Já existe um agendamento para o profissional selecionado neste mesmo horário! Não será possível realizar o agendamento.")
            //    e.cancelar = true;
            //    return;
            //}
            var parametrosProfHorario;
            parametrosProfHorario = {
                codProfissional: ("" + entidade.Profissional_Codigo).CNum(),
                dataServico: entidade.Data,
                horaServico: entidade.Previsao.FormataHoraSismoura()
            };
            var retornoProfHorario = this.ExecutarFuncaoServerSideSynch("IsProfissionalIndisponivelHorario", parametrosProfHorario);
            if (this.retornoComplementosItemServico.IsAtendimentoPago || this.retornoComplementosItemServico.IsAtendimentoIntegradoZanthus) {
                if (fieldAlterado.toLocaleLowerCase() == "concluido_text") {
                    if (e.oldRowValue.Concluido_Text == "Sim") {
                        e.errorText = "Não é possível alterar a coluna Concluído de um serviço já concluído e pago!";
                        e.cancelar = true;
                        return;
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
                    if (fieldAlterado.toLowerCase() == "quantidade" || fieldAlterado.toLowerCase() == "valor" ||
                        fieldAlterado.toLowerCase() == "desconto" || fieldAlterado.toLowerCase() == "desconto_porcentagem") {
                        if (this.retornoComplementosItemServico.IsAtendimentoIntegradoZanthus) {
                            e.errorText = "Não é possível alterar o valor dos serviços em um atendimento que já foi integrado";
                        }
                        else {
                            e.errorText = "Não é possível alterar o valor dos serviços em um atendimento que já foi pago";
                        }
                        e.cancelar = true;
                        return;
                    }
                    //if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                    //    let parametros: any = {
                    //        codEmpresa: this.EntityTela.Empresa,
                    //        codServico: entidade.Servico_Codigo
                    //    }
                    //    //let podeAlterar = this.ExecutarFuncaoServerSideSynch("PodeAlterarServicoPago", parametros);
                    //    let podeAlterar = this.PodeAlterarServicoPago();
                    //    if (!podeAlterar || entidade.Concluido_Text == "Sim") {
                    //        if (fieldAlterado.toLowerCase() == "profissional_codigo") {
                    //            if (this.retornoComplementosItemServico.IsAtendimentoIntegradoZanthus) {
                    //                e.errorText = "Não é possível alterar o profissional dos serviços em um atendimento que já foi integrado";
                    //            } else {
                    //                e.errorText = "Não é possível alterar o profissional dos serviços em um atendimento que já foi pago";
                    //            }
                    //            e.cancelar = true;
                    //            return;
                    //        } else if (fieldAlterado.toLowerCase() == "data") {
                    //            if (this.retornoComplementosItemServico.IsAtendimentoIntegradoZanthus) {
                    //                e.errorText = "Não é possível alterar a data dos serviços em um atendimento que já foi integrado";
                    //            } else {
                    //                e.errorText = "Não é possível alterar a data dos serviços em um atendimento que já foi pago";
                    //            }
                    //            e.cancelar = true;
                    //            return;
                    //        }
                    //    }
                    //}
                }
                this.AlterarCamposAtendimentoPago(true);
            }
            else {
                //pré - pagamento
                //if (this.retornoComplementosItemServico.IsAtendimentoEnviadoPrePagamentoZanthus) {
                //    if (e.index < 0) {
                //        e.errorText = "Não é possível incluir serviços em um atendimento que já foi integrado para pré-pagamento";
                //    } else {
                //        e.errorText = "Não é possível alterar serviços em um atendimento que já foi integrado para pré-pagamento";
                //    }
                //    e.cancelar = true;
                //    return;
                //}
            }
            if (e.index < 0 && this.perguntouAdicionarServicoDuplicado == false) {
                for (var x = 0; x <= servicos.length - 1; x++) {
                    if (servicos[x].Servico_Codigo == entidade.Servico_Codigo) {
                        this.perguntouAdicionarServicoDuplicado = true;
                        MsgBoxJS("Serviço já existente na grade. Deseja somar a quantidade?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoInserirServico, this), x);
                        e.cancelar = true;
                        return;
                    }
                }
            }
            entidade.IsRetorno = this.retornoComplementosItemServico.IsRetorno;
            var isPlano = false;
            var isServicoZerado = this.ServicoZerado(entidade.Servico_Codigo);
            if (this.IsConvenioProprio(this.txtConvenio.GetText().CNum()) && this.IsAtendimentoConvenio()) {
                isPlano = true;
            }
            if (entidade.IsRetorno) {
                entidade.Valor = 0;
                entidade.Quantidade = 0;
                entidade.Desconto = 0;
            }
            else {
                if (!isPlano && !isServicoZerado) {
                    if (entidade.Total <= 0) {
                        e.errorText = "Informe valores válidos";
                        e.cancelar = true;
                        return;
                    }
                }
                else if (!isServicoZerado) {
                    if (entidade.Total < 0) {
                        e.errorText = "Informe valores válidos";
                        e.cancelar = true;
                        return;
                    }
                }
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
            //if (this.retornoComplementosItemServico.IsProfissionalIndisponivel) {
            if (retornoProfHorario == true) {
                //MostrarAlerta("Este profissional não pode realizar o serviço no horário ou data selecionada. Verifique na tela Cadastro de Indisponibilidade do Funcionário.");
                e.errorText = "Este profissional não pode realizar o serviço no horário ou data selecionada. Verifique na tela Cadastro de Indisponibilidade do Funcionário.";
                e.cancelar = true;
                return;
            }
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
            if (this.retornoComplementosItemServico.IsParticipante && !this.mostrouParticipantes) {
                e.cancelar = true;
                this.AbrirModalParticipantes(entidade);
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
            if (e.fieldNameAlterado.toLowerCase() == "data" ||
                e.fieldNameAlterado.toLowerCase() == "previsao") {
                if (this.EntityTela.Atendimento_Origem == undefined || this.EntityTela.Atendimento_Origem <= 0) {
                    if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Preco_Automatico_Atendimento) {
                        var entidadeParam = e.item;
                        var entidadeRetorno = this.ExecutarFuncaoServerSideSynch("AtualizaPrecoServico", { servicoStr: JSON.stringify(entidadeParam), codEmpresa: this.cboEmpresa_List.value.CNum() });
                        if (entidadeRetorno.Valor <= 0 || entidadeRetorno.Lista_Preco <= 0) {
                            e.errorText = "Nenhuma lista de preço encontrada na Data e Hora informado";
                            e.cancelar = true;
                            return;
                        }
                        e.item.Lista_Preco = entidadeRetorno.Lista_Preco;
                        e.item.Valor = entidadeRetorno.Valor;
                        this.IniciarValoresAutomaticosServico(e.item);
                        this.GetScope().$applyAsync();
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.VerificarAutorizacaoTroca = function (retorno) {
        if (retorno.Autorizado) {
            this.usuarioAutorizou = retorno.Usuario;
            this.dlgMotivoTroca.Show();
        }
        else {
            this.verificadoMudouCampoCritico = false;
            MostrarAlerta("Usuário sem permissão para alterar tais informações de um serviço já concluído ou pago!");
        }
    };
    C_Animal.prototype.OnSelecionouOpcaoInserirServico = function (e) {
        try {
            if (e.Resultado == MsgBoxResult.Yes) {
                //somar a quantidade existente na grade
                var servicos = this.Servicos;
                if (!servicos) {
                    servicos = [];
                }
                if (this.Servico && this.Servico.Quantidade) {
                    servicos[e.Argument].Quantidade = servicos[e.Argument].Quantidade + this.Servico.Quantidade;
                }
                this.Servicos = servicos;
                this.grdServicos.Limpar();
                this.grdServicos.AtualizarGrid();
                this.txtServico.Focus();
            }
            else {
                //adicionar novo servico
                this.grdServicos.AdicionarOuAlterarItemAtual();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.ServicoZerado = function (servico) {
        var parametros = {
            codigoServico: servico,
            codigoEmpresa: "" + this.cboEmpresa.GetValue(),
            codCliente: this.txtPet.TextBoxProprietario.GetText().CNum(),
            diaSemana: 0,
            hora: this.txtHoraServico.textBoxHorario.GetText(),
            dataServico: this.txtDataServico.Date
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
    C_Animal.prototype.OnValidandoItemProduto = function (s, e) {
        try {
            var entidade;
            entidade = e.item;
            //this.IniciarValoresAutomaticosProduto(entidade);
            //entidade.Data.FormataDataHora()
            //entidade.Hora.FormataHoraSismoura()
            var fieldAlterado = "" + e.fieldNameAlterado;
            //var entidade: SiSMoura.Core.Entity.ServicosAtendimento;
            //entidade = e.item;
            var produtos = this.Produtos;
            if (!produtos) {
                produtos = [];
            }
            var descPorc = entidade.Desconto_Porcentagem;
            if (e.oldRowValue.Cobrado_Text != e.item.Cobrado_Text) {
                e.item.Cobrado = !e.item.Cobrado;
            }
            this.IniciarValoresAutomaticosProduto(entidade);
            if (descPorc != null && descPorc != undefined) {
                //Faz este procedimento para corriir os valores de desconto
                entidade.Desconto_Porcentagem = descPorc;
            }
            if (entidade.Produto_Codigo <= 0) {
                //MostrarAlerta("Informe o campo profissional");
                e.errorText = "Informe o Produto";
                e.cancelar = true;
                return;
            }
            if (entidade.Profissional_Codigo <= 0) {
                //MostrarAlerta("Informe o campo profissional");
                e.errorText = "Informe o profissional";
                e.cancelar = true;
                return;
            }
            if (!entidade.Data) {
                //MostrarAlerta("Informe o campo profissional");
                e.errorText = "Informe a data";
                e.cancelar = true;
                return;
            }
            if (!entidade.Hora) {
                //MostrarAlerta("Informe o campo profissional");
                e.errorText = "Informe a data";
                e.cancelar = true;
                return;
            }
            if ((!this.IsAtendimentoConvenio() || !this.IsConvenioProprio(this.txtConvenio.GetText().CNum())) && !this.ServicoZerado(entidade.Produto_Codigo)) {
                if (entidade.Total <= 0) {
                    e.errorText = "Informe valores válidos";
                    e.cancelar = true;
                    return;
                }
            }
            if (e.index < 0 && this.perguntouAdicionarProdutoDuplicado == false) { //Incluindo novo item
                for (var x = 0; x <= produtos.length - 1; x++) {
                    if (produtos[x].Produto_Codigo == entidade.Produto_Codigo) {
                        this.perguntouAdicionarProdutoDuplicado = true;
                        MsgBoxJS("Produto já existente na grade. Deseja somar a quantidade?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoInserirProduto, this), x);
                        e.cancelar = true;
                        return;
                    }
                }
            }
            if (this.GetScope().Entity.IsPago) {
                if (e.index < 0) { //Incluindo novo item
                    //MostrarAlerta("Não é possível incluir serviços em um atendimento que já foi pago");
                    e.errorText = "Não é possível incluir produtos em um atendimento que já foi pago";
                    e.cancelar = true;
                    return;
                }
                else { //Alterando um serviço
                    if (fieldAlterado.toLowerCase() == "quantidade" || fieldAlterado.toLowerCase() == "valor" ||
                        fieldAlterado.toLowerCase() == "desconto" || fieldAlterado.toLowerCase() == "desconto_porcentagem") {
                        e.errorText = "Não é possível alterar o valor dos produtos em um atendimento que já foi pago";
                        e.cancelar = true;
                        return;
                    }
                }
                this.AlterarCamposAtendimentoPago(true);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnSelecionouOpcaoInserirProduto = function (e) {
        try {
            if (e.Resultado == MsgBoxResult.Yes) {
                //somar a quantidade existente na grade           
                var produtos = this.Produtos;
                if (!produtos) {
                    produtos = [];
                }
                if (this.Produto && this.Produto.Quantidade) {
                    produtos[e.Argument].Quantidade = produtos[e.Argument].Quantidade + this.Produto.Quantidade;
                }
                this.Produtos = produtos;
                this.grdProdutos.Limpar();
                this.grdProdutos.AtualizarGrid();
                this.txtProduto.Focus();
            }
            else {
                this.grdProdutos.AdicionarOuAlterarItemAtual();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.VerificarFuncaoAdmBloquearRetorno = function (retorno) {
        this.mostrouFuncao = true;
        this.grdServicos.AdicionarOuAlterarItemAtual();
    };
    C_Animal.prototype.OnSetouItemServico = function (s, e) {
        var entidade;
        entidade = e.item;
        this.IniciarValoresAutomaticosServico(entidade);
    };
    C_Animal.prototype.OnSetouItemProduto = function (s, e) {
        var entidade;
        entidade = e.item;
        this.IniciarValoresAutomaticosProduto(entidade);
    };
    C_Animal.prototype.IniciarValoresAutomaticosServico = function (servico) {
        if (servico.__lookupGetter__("Total") == undefined) {
            servico.Total = undefined;
            servico.__defineGetter__("Total", function () {
                return (servico.Quantidade * servico.Valor) - servico.Desconto;
            });
            servico.__defineSetter__("Total", function (val) {
            });
        }
        if (servico.__lookupGetter__("Desconto_Porcentagem") == undefined) {
            servico.Desconto_Porcentagem = undefined;
            servico.__defineGetter__("Desconto_Porcentagem", function () {
                if ((servico.Valor * servico.Quantidade) == 0)
                    return 0;
                return (servico.Desconto / (servico.Valor * servico.Quantidade)) * 100;
            });
            servico.__defineSetter__("Desconto_Porcentagem", function (val) {
                if (val < 0) {
                    val = 0;
                }
                if (val > 100) {
                    val = 100;
                }
                servico.Desconto = (servico.Valor * servico.Quantidade) * (val / 100);
            });
        }
        Object.defineProperty(servico, "Concluido_Text", {
            get: function () {
                return servico.Concluido ? "Sim" : "Não";
            },
            set: function (val) {
                servico.Concluido = (val == "Sim");
            },
            enumerable: true,
            configurable: true
        });
        // if ((<any>servico).__lookupGetter__("Concluido_Text") == undefined) {
        // servico.Concluido_Text = undefined;
        //(<any>servico).__defineGetter__("Concluido_Text", function () {
        //});
        //(<any>servico).__defineSetter__("Concluido_Text", function (val) {
        //});
        // }
    };
    C_Animal.prototype.IniciarValoresAutomaticosProduto = function (produto) {
        if (produto.__lookupGetter__("Total") == undefined) {
            produto.Total = undefined;
            produto.__defineGetter__("Total", function () {
                return (produto.Quantidade * produto.Valor) - produto.Desconto;
            });
            produto.__defineSetter__("Total", function (val) {
            });
        }
        if (produto.__lookupGetter__("Desconto_Porcentagem") == undefined) {
            produto.Desconto_Porcentagem = undefined;
            produto.__defineGetter__("Desconto_Porcentagem", function () {
                if ((produto.Valor * produto.Quantidade) == 0)
                    return 0;
                return (produto.Desconto / (produto.Valor * produto.Quantidade)) * 100;
            });
            produto.__defineSetter__("Desconto_Porcentagem", function (val) {
                if (val < 0) {
                    val = 0;
                }
                if (val > 100) {
                    val = 100;
                }
                produto.Desconto = (produto.Valor * produto.Quantidade) * (val / 100);
            });
        }
        Object.defineProperty(produto, "Cobrado_Text", {
            get: function () {
                return produto.Cobrado ? "Sim" : "Não";
            },
            set: function (val) {
                produto.Cobrado = (val == "Sim");
            },
            enumerable: true,
            configurable: true
        });
        //if ((<any>produto).__lookupGetter__("Cobrado_Text") == undefined) {
        //    produto.Cobrado_Text = undefined;
        //    (<any>produto).__defineGetter__("Cobrado_Text", function () {
        //        return produto.Cobrado ? "Sim" : "Não"
        //    });
        //    (<any>produto).__defineSetter__("Cobrado_Text", function (val) {
        //        produto.Cobrado = (val == "Sim")
        //    });
        //}
    };
    C_Animal.prototype.OnAdiciouItemServico = function (s, e) {
        var _this = this;
        try {
            var entidade = e.item;
            entidade.Servico_Descricao = this.txtServico.GetResultado();
            entidade.Profissional_Descricao = this.txtProfissional.GetResultado();
            entidade.Profissional_ResponsavelNome = this.txtProfissionalResponsavel.GetResultado();
            entidade.Lista_Preco = 0;
            if (this.listaPrecos.length > 0 && this.cboListaPreco && this.cboListaPreco.Combo) {
                entidade.Lista_Preco = this.listaPrecos[this.cboListaPreco.Combo.GetSelectedIndex()].Codigo;
            }
            var param = {
                servico: entidade.Servico_Codigo,
                prestador: entidade.Profissional_Codigo,
                listaPreco: entidade.Lista_Preco
            };
            if (entidade.Profissional_Responsavel > 0) {
                entidade.Valor_Repasse_Prestador = this.ExecutarFuncaoServerSideSynch("GetValorRepassePrestador", param);
            }
            //if (entidade.VacinaAgendada) {
            //    this.alterarVisibleBotaoPendente(false);
            //}
            if (!entidade.Codigo_Autorizacao_Plano) {
                this.VerificaAutorizacaoPlano(entidade);
            }
            if (this.servicosAgenda.length > 0) {
                this.servicosAgenda.shift();
                if (this.servicosAgenda.length > 0) {
                    setTimeout($.proxy(function () {
                        _this.txtServico.Procurar(_this.servicosAgenda[0].Codigo.toString());
                    }, this), 200);
                    this.horarioAtendimento = this.servicosAgenda[0].Hora.ToDate();
                }
                else {
                    this.txtServico.Focus();
                }
            }
            else {
                this.txtServico.Focus();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.VerificaAutorizacaoPlano = function (item) {
        if (!item) {
            return;
        }
        if (!this.IsConvenioProprio(this.txtConvenio.GetText().CNum())) {
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
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.VerificarElegibilidadePlano = function (codAnimal) {
        try {
            if (!this.IsConvenioProprio(this.txtConvenio.GetText().CNum()) || !codAnimal) {
                return;
            }
            var parametros = {
                codAnimal: codAnimal
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificaElegibilidadePlano", parametros);
            if (!String.IsNullOrWhiteSpace(retorno.Alerta)) {
                MostrarAlerta(retorno.Alerta);
                this.txtConvenio.Focus();
                this.txtConvenio.Limpar();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnAdiciouItemProduto = function (s, e) {
        try {
            var entidade = e.item;
            entidade.Produto_Descricao = this.txtProduto.GetResultado();
            entidade.Profissional_Descricao = this.txtProfissionalProduto.GetResultado();
            entidade.Cobrado = this.chkCobrado.Check.checked;
            this.txtProduto.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnAntesBuscarExistente = function () {
        _super.prototype.OnAntesBuscarExistente.call(this);
        this.perguntouAdicionarServicoDuplicado = false;
        this.txtPet.TextBoxProprietario.Limpar();
        this.txtPet.TextBoxAnimal.Limpar();
    };
    C_Animal.prototype.OnDepoisBuscarExistente = function (Entidade) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            if (Entidade.Operador == null || Entidade.Operador == undefined || Entidade.Operador == "") {
                Entidade.Operador = "";
            }
            //super.OnDepoisBuscarExistente(Entidade);
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
                    //this.HabilitarAbaEncaminhamento(true);
                    this.cboEncaminhamento.SetValue("1");
                    this.AlterarVisibleEncaminhamento(true);
                    this.HabilitarTipoEncaminhamento(Entidade.EntidadeEncaminhamento.Tipo_Encaminhamento);
                    this.Encaminhamento = Entidade.EntidadeEncaminhamento;
                    this.GetScope().$applyAsync();
                }
            }
            else
                this.cboEncaminhamento.SetValue("2");
            this.perguntouAdicionarServicoDuplicado = false;
            this.VerificarStatusPagamentoAPP(Entidade);
            var InformacoesAdicionais = this.ExecutarFuncaoServerSideSynch("GetInformacoesAdicionaisAtendimento", parametros);
            this.Servicos = InformacoesAdicionais.Servicos;
            this.Produtos = InformacoesAdicionais.Produtos;
            Entidade.Checklist_Itens = InformacoesAdicionais.CheckLists;
            this.lblZanthus.Text = Entidade.Status_Envio_Zanthus_Text;
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
            this.grdCheckListItens.PreencherGrid(Entidade.Checklist_Itens);
            this.VendaAtendimento = "Venda: " + InformacoesAdicionais.CodigoVenda + " - " + InformacoesAdicionais.FormaPagamento;
            if ((InformacoesAdicionais.CodigoVenda && InformacoesAdicionais.CodigoVenda > 1) || Entidade.Pagamento_Status_Stoom > 0) {
                this.AlterarCamposAtendimentoPago(true);
            }
            else {
                this.AlterarCamposAtendimentoPago(false);
            }
            //pré-pagamento
            //if (InformacoesAdicionais.IsIntegradoZanthus || InformacoesAdicionais.IsIntegradoPrePagamentoZanthus) {
            //    this.AlterarCamposAtendimentoPago(true);
            //}
            if (InformacoesAdicionais.IsIntegradoZanthus) {
                this.AlterarCamposAtendimentoPago(true);
            }
            else if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus && Entidade.isCortesia) {
                this.btnZanthus.Visible = false;
                this.btnCortesia.Visible = false;
                this.lblCortesia.Visible = true;
                var parametros_1 = {
                    codHospedagem: Entidade.Hospedagem
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("PodeAlterarAtendimentoHospedagem", parametros_1);
                if (!retorno) {
                    this.AlterarCamposAtendimentoPago(true);
                    this.lblZanthus.Text = "Atendimento de Cortesia";
                }
            }
            var x = 0;
            if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) { //Essa verificação é realizada apenas para a PETs
                if ((this.Servicos) && (this.Servicos.length > 0)) {
                    for (x = 0; x < this.Servicos.length; x++) {
                        if (this.Servicos[x].Desconto_Porcentagem > ValoresSismoura.PorcentagemDescontoMaximoAtendimento) {
                            this.verificouDesconto = true;
                            break;
                        }
                    }
                }
            }
            if (this.ParametrosTela.codProfissional && this.isTelaAgendaConsolidada) {
                this.Servico.Profissional_Codigo = this.ParametrosTela.codProfissional;
                this.txtProfissional.SetText(this.ParametrosTela.codProfissional);
                this.codigoProfissional = this.ParametrosTela.codProfissional.CNum();
            }
            if (this.mostrarAgendamentoVacina) {
                this.preencherAgendamentos(Entidade.Cod_Animal, Entidade.Empresa, Entidade.Codigo);
            }
            this.CorrigirTextoBotaoZanthus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.PodeAlterarServicoPago = function () {
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus == false) {
            return false;
        }
        else {
            return true;
        }
        //for (var i = 0; i < this.Servicos.length; i++) {
        //    let parametros: any = {
        //        codEmpresa: this.EntityTela.Empresa,
        //        codServico: this.Servicos[i].Servico_Codigo
        //    }
        //    let podeAlterar = this.ExecutarFuncaoServerSideSynch("PodeAlterarServicoPago", parametros);
        //    if (podeAlterar && podeAlterar == true) {
        //        return true;
        //    }
        //}
        //return false;
    };
    C_Animal.prototype.OnAntesSetEntidade = function (eventArg) {
        try {
            _super.prototype.OnAntesSetEntidade.call(this, eventArg);
            if (eventArg.Entidade.Operador == null || eventArg.Entidade.Operador == undefined || eventArg.Entidade.Operador == "") {
                eventArg.Entidade.Operador = "";
            }
            if (eventArg.Entidade.Data && !eventArg.Entidade.Data.getDate) {
                eventArg.Entidade.Data = ("" + eventArg.Entidade.Data).ToDate();
            }
            eventArg.Entidade.RetornarOperadorData = function () {
                var retorno = "";
                retorno = eventArg.Entidade.Operador;
                if (eventArg.Entidade.Data) {
                    //if (eventArg.Entidade.Operador == null || eventArg.Entidade.Operador == "") {
                    //    retorno = eventArg.Entidade.Data.FormataData();
                    //} else {
                    retorno += " / " + eventArg.Entidade.Data.FormataData();
                }
                return retorno;
            };
            if (eventArg.Entidade && eventArg.Entidade.Cod_Animal) {
                this.fotosAnimal.Pasta = this.PATH_FOTOS + eventArg.Entidade.Cod_Animal.toString();
                this.fotosAnimal.Atualizar();
            }
            else {
                this.fotosAnimal.Limpar();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnTxtPetProcurouAnimal = function (s, e) {
        try {
            var parametros;
            var mostrarMensagem = false;
            var complementosAnimal;
            var incidenciaAnimal;
            var data = void 0;
            if (this.dataAtendimento) {
                data = this.dataAtendimento;
            }
            else {
                data = this.DataServidor();
            }
            var tipoProfissional = void 0;
            if (this.isTelaAgendaConsolidada && this.codigoProfissional) {
                tipoProfissional = this.codigoProfissional;
            }
            else {
                tipoProfissional = 0;
            }
            parametros = {
                codigoAtendimento: this.txtCodigo.GetText().CNum(),
                codigoAnimal: this.txtPet.TextBoxAnimal.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue(),
                considerarAtendimento: false,
                data: data,
                codProfissional: tipoProfissional
            };
            complementosAnimal = this.ExecutarFuncaoServerSideSynch("RetornarComplementosAnimal", parametros);
            if (complementosAnimal) {
                if (!this.mostrarAgendamentoVacina) {
                    this.grdAgendamentos.PreencherGrid(complementosAnimal.Agendamentos);
                }
                else if (this._mostrarMensagem) {
                    this.alterarVisibleBotaoAgendamentosPendentes(true);
                    setTimeout($.proxy(function () {
                        MsgBoxJS("Este animal possui agendamentos de serviços cadastrados. Deseja visualiza-los?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouMSGBoxAgendamento, this), null);
                    }, this), 200);
                }
                this.grdAgPendente.PreencherGrid(complementosAnimal.AgendamentosPendentes);
                if (complementosAnimal.Agendamentos && complementosAnimal.Agendamentos.length > 0) {
                    mostrarMensagem = true;
                    this.alterarVisibleBotaoPendente(true);
                }
                else {
                    this.alterarVisibleBotaoPendente(false);
                }
                this.txtDiagnostico.SetText(complementosAnimal.Diagnostico);
                this.alterarVisibleBotaoDiagnostico(!String.IsNullOrWhiteSpace(complementosAnimal.Diagnostico));
                var infoAnimal = complementosAnimal.InformacoesAnimal;
                if (this.lblEspecie_TextBox)
                    this.lblEspecie_TextBox.value = infoAnimal.Especie;
                if (this.lblRaca_TextBox)
                    this.lblRaca_TextBox.value = infoAnimal.Raca;
                if (this.lblIdadeSexo_TextBox)
                    this.lblIdadeSexo_TextBox.value = infoAnimal.IdadeSexo;
                if (this.lblPeso_TextBox)
                    this.lblPeso_TextBox.value = infoAnimal.Peso;
                if (this.lblDataNascimento_TextBox)
                    this.lblDataNascimento_TextBox.value = infoAnimal.DataNascimento;
                if (this.lblCHIP_TextBox)
                    this.lblCHIP_TextBox.value = infoAnimal.Chip;
                if (this.lblRGA_TextBox)
                    this.lblRGA_TextBox.value = infoAnimal.Rga;
                if (this.lblPelagem_TextBox)
                    this.lblPelagem_TextBox.value = infoAnimal.Pelagem;
                if (this.lblTemperamento_TextBox)
                    this.lblTemperamento_TextBox.value = infoAnimal.Temperamento;
                if (this.lblObsServico_TextBox)
                    this.lblObsServico_TextBox.value = infoAnimal.ObsServico;
                if (this.lblCarteirinha_TextBox)
                    this.lblCarteirinha_TextBox.value = infoAnimal.Carterinha_Plano;
                if (this.txtCodigo.GetText().CNum() <= 0) {
                    //Adicionado este IF para que a observação do serviço seja lançada apenas em novos atendimentos
                    if (!String.IsNullOrWhiteSpace(infoAnimal.ObsServico))
                        this.Servico.Observacao = infoAnimal.ObsServico;
                }
                this.GetScope().$applyAsync();
            }
            var parametros = {
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum()
            };
            this.Incidencias = this.ExecutarFuncaoServerSideSynch("RetornarIncidenciaAnimal", parametros);
            this._mostrarMensagem = mostrarMensagem;
            if (!this.verificarAgPendente()) {
                if (ValoresSismoura.ConfiguracoesPetshop.Utilizar_Acidente_Atendimento) {
                    if (this.Incidencias && this.Incidencias.length > 0) {
                        this.Incidencias.forEach(function (x) {
                            x.Datahora = x.Datahora.ToDate();
                        });
                    }
                    this.grdIncidencia.Grid.PreencherGrid(this.Incidencias);
                    if (this.Incidencias && this.Incidencias.length > 0 && this.txtCodigo.GetText().CNum() <= 0) {
                        setTimeout($.proxy(function () {
                            MsgBoxJS("Já ocorreu um acidente com este Pet, favor verificar histórico na aba Acidentes.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, null, null, "ATENÇÃO");
                        }, this), 200);
                    }
                }
                if (mostrarMensagem) {
                    setTimeout($.proxy(function () {
                        MsgBoxJS("Este animal possui agendamentos de serviços cadastrados. Deseja visualizá-los?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouMSGBoxAgendamento, this), null);
                    }, this), 200);
                }
            }
            this.VerificarElegibilidadePlano(this.txtPet.TextBoxAnimal.GetText().CNum());
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.preencherAgendamentos = function (codigoAnimal, codEmpresa, codigoAtendimento) {
        var tipoProfissional;
        if (this.isTelaAgendaConsolidada && this.codigoProfissional) {
            tipoProfissional = this.codigoProfissional;
        }
        else {
            tipoProfissional = 0;
        }
        var parametros = {
            codigoAtendimento: codigoAtendimento,
            codigoAnimal: codigoAnimal,
            codEmpresa: codEmpresa,
            considerarAtendimento: true,
            data: this.DataServidor(),
            codProfissional: tipoProfissional
        };
        var complementosAnimal = this.ExecutarFuncaoServerSideSynch("RetornarComplementosAnimal", parametros);
        if (complementosAnimal) {
            this.grdAgendamentos.PreencherGrid(complementosAnimal.Agendamentos);
        }
    };
    C_Animal.prototype.OnSelecionouMSGBoxAgendamentoPendente = function (e) {
        if (e.Resultado == MsgBoxResult.Yes) {
            this.mostrarAgendamentoVacina = true;
            this.dlgAgPendente.Show();
            this.grdAgPendente.Refresh();
        }
        else if (this._mostrarMensagem) {
            setTimeout($.proxy(function () {
                MsgBoxJS("Este animal possui agendamentos de serviços cadastrados. Deseja visualiza-los?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouMSGBoxAgendamento, this), null);
            }, this), 200);
        }
        else if (this.Incidencias && this.Incidencias.length > 0 && this.txtCodigo.GetText().CNum() <= 0) {
            setTimeout($.proxy(function () {
                MsgBoxJS("Já ocorreu um acidente com este Pet, favor verificar histórico na aba Acidentes.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, null, null, "ATENÇÃO");
            }, this), 200);
        }
    };
    C_Animal.prototype.OnSelecionouMSGBoxAgendamento = function (e) {
        if (e.Resultado == MsgBoxResult.Yes) {
            var btnDiag = window['btnVacinas_Object'];
            if (btnDiag) {
                btnDiag.DoClick();
            }
        }
        if (this.mostrarAgendamentoVacina) {
            this.alterarVisibleBotaoPendente(true);
        }
        if (this.Incidencias && this.Incidencias.length > 0 && this.txtCodigo.GetText().CNum() <= 0) {
            setTimeout($.proxy(function () {
                MsgBoxJS("Já ocorreu um acidente com este Pet, favor verificar histórico na aba Acidentes.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, null, null, "ATENÇÃO");
            }, this), 200);
        }
    };
    C_Animal.prototype.verificarAgPendente = function () {
        var parametros = {
            codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum()
        };
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus && (ValoresSismoura.ConfiguracoesPetshop.Tempo_Anterior > 0 || ValoresSismoura.ConfiguracoesPetshop.Tempo_Posterior > 0)) {
            if (this.grdAgPendente.DataSource && this.grdAgPendente.DataSource.length > 0 && this.txtCodigo.GetText().CNum() <= 0) {
                if (this.grdAgPendente.DataSource.length == 1) {
                    this.mostrarAgendamentoVacina = true;
                    this.PreencherEntidade(this.grdAgPendente.DataSource[0].Cod_Atendimento);
                }
                else {
                    setTimeout($.proxy(function () {
                        MsgBoxJS("Este animal possui agendamentos pendentes na data de hoje. Deseja visualiza-los?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouMSGBoxAgendamentoPendente, this), null);
                    }, this), 100);
                }
                return true;
            }
            else {
                return false;
            }
        }
    };
    C_Animal.prototype.alterarVisibleBotaoPendente = function (visible) {
        if (visible) {
            $("#" + this.btnVacinas.ID).removeClass("invisible");
        }
        else {
            $("#" + this.btnVacinas.ID).addClass("invisible");
        }
    };
    C_Animal.prototype.alterarVisibleBotaoDiagnostico = function (visible) {
        if (visible) {
            $("#" + this.btnDiagnostico.ID).removeClass("invisible");
        }
        else {
            $("#" + this.btnDiagnostico.ID).addClass("invisible");
        }
    };
    C_Animal.prototype.alterarVisibleBotaoAgendamentosPendentes = function (visible) {
        if (visible) {
            $("#" + this.btnPendentes.ID).removeClass("invisible");
        }
        else {
            $("#" + this.btnPendentes.ID).addClass("invisible");
        }
    };
    C_Animal.prototype.OnTxtPetProcurouProprietario = function (s, e) {
        try {
            var mostrarAtendimentosPendentes;
            var parametros;
            var infoProprietario;
            parametros = {
                codigoProprietario: this.txtPet.TextBoxProprietario.GetText().CNum()
            };
            var complementoProprietario = this.ExecutarFuncaoServerSideSynch("RetornarComplementosProprietario", parametros);
            if (complementoProprietario) {
                infoProprietario = complementoProprietario.InformacoesProprietario;
                this.grdAtendimentosPendentes.PreencherGrid(complementoProprietario.Pendentes);
                this.alterarVisibleBotaoAgendamentosPendentes(complementoProprietario.Pendentes && complementoProprietario.Pendentes.length > 0);
                if (this.lblEndereco_TextBox)
                    this.lblEndereco_TextBox.value = infoProprietario.Endrereco;
                if (this.lblComplemento_TextBox)
                    this.lblComplemento_TextBox.value = infoProprietario.Complemento;
                if (this.lblFone_TextBox)
                    this.lblFone_TextBox.value = infoProprietario.Telefone;
                if (this.lblCidade_TextBox)
                    this.lblCidade_TextBox.value = infoProprietario.Cidade;
                if (this.lblSaldoDevedor_TextBox)
                    this.lblSaldoDevedor_TextBox.value = infoProprietario.SaldoDevedor.Format(2);
                if (this.lblCredito_TextBox)
                    this.lblCredito_TextBox.value = infoProprietario.Credito.Format(2);
            }
            //if (this.txtPet.TextBoxProprietario.GetText().CNum() > 0 && this.txtCodigo.GetText().CNum() <= 0) {
            //    setTimeout(() => {
            //        //MsgBoxJS("Necessário revisar o cadastro do proprietário", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
            //        MsgBoxJS("Deseja revisar os dados cadastrais do cliente?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnMsgBoxCadastroProprietario, this), null);
            //    }, 300);
            //}
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnMsgBoxCadastroProprietario = function (result) {
        try {
            if (result.Resultado == MsgBoxResult.No) {
                if (this.Incidencias && this.Incidencias.length > 0 && this.txtCodigo.GetText().CNum() <= 0) {
                    setTimeout($.proxy(function () {
                        MsgBoxJS("Já ocorreu um acidente com este Pet, favor verificar histórico na aba Acidentes.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, null, null, "ATENÇÃO");
                    }, this), 200);
                }
                return;
            }
            if (this.txtPet.TextBoxProprietario.GetText().CNum() > 0) {
                //this.txtPet.TextBoxProprietario.MostrarInformacoesAdicionais();
                this.AbrirModalAtualizarInfoProprietario();
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_Animal.prototype.OnCboListaPreco_comboBoxChange = function (s, e) {
        try {
            if (this.cboListaPreco && this.cboListaPreco.Combo && this.listaPrecos) {
                if (this.cboListaPreco.Combo.GetSelectedIndex() >= 0 && this.cboListaPreco.Combo.GetSelectedIndex() < this.listaPrecos.length) {
                    //this.txtValorUnitario.SetText(this.listaPrecos[this.cboListaPreco.Combo.GetSelectedIndex()].Preco.Format(2));
                    this.Servico.Valor = this.listaPrecos[this.cboListaPreco.Combo.GetSelectedIndex()].Preco;
                    this.GetScope().$applyAsync();
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnCboTipoEncaminhamentoComboBoxChange = function (s, e) {
        try {
            this.HabilitarTipoEncaminhamento(this.cboTipoEncaminhamento.GetValue());
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.HabilitarTipoEncaminhamento = function (tipo) {
        if (tipo == "E") {
            if (this.cboEmpresaEncaminhamento) {
                this.Encaminhamento.Empresa_Encaminhou = 0;
                this.cboEmpresaEncaminhamento.Visible = false;
            }
            if (this.txtProfissionalEncaminhou) {
                this.Encaminhamento.Profissional_Encaminhou = 0;
                this.txtProfissionalEncaminhou.Visible = false;
            }
            if (this.txtClinicaEncaminhou) {
                this.txtClinicaEncaminhou.Visible = true;
            }
            if (this.txtVeterinarioExternoEncaminhou) {
                this.txtVeterinarioExternoEncaminhou.Visible = true;
            }
        }
        else {
            if (this.cboEmpresaEncaminhamento) {
                this.cboEmpresaEncaminhamento.Visible = true;
                this.Encaminhamento.Empresa_Encaminhou = ValoresSismoura.EmpresaPadraoUsuario;
            }
            if (this.txtProfissionalEncaminhou) {
                this.txtProfissionalEncaminhou.Visible = true;
            }
            if (this.txtClinicaEncaminhou) {
                this.Encaminhamento.Clinica_Encaminhou = "";
                this.txtClinicaEncaminhou.Visible = false;
            }
            if (this.txtVeterinarioExternoEncaminhou) {
                this.Encaminhamento.Veterinario_Encaminhou = "";
                this.txtVeterinarioExternoEncaminhou.Visible = false;
            }
        }
        this.GetScope().$applyAsync();
    };
    C_Animal.prototype.OnCboListaPrecoProduto_comboBoxChange = function (s, e) {
        try {
            if (this.cboListaPrecoProduto && this.cboListaPrecoProduto.Combo && this.listaPrecosProduto) {
                if (this.cboListaPrecoProduto.Combo.GetSelectedIndex() >= 0 && this.cboListaPrecoProduto.Combo.GetSelectedIndex() < this.listaPrecosProduto.length) {
                    //this.txtValorUnitario.SetText(this.listaPrecos[this.cboListaPreco.Combo.GetSelectedIndex()].Preco.Format(2));
                    this.Produto.Valor = this.listaPrecosProduto[this.cboListaPrecoProduto.Combo.GetSelectedIndex()].Preco;
                    this.GetScope().$applyAsync();
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnTxtServicoProcurou = function (s, e) {
        var _this = this;
        try {
            if (this.txtServico.GetText().CNum() > 0) {
                if (CNum(this.EntityTela.Cod_Animal) <= 0 || CNum(this.EntityTela.Cod_Proprietario) <= 0) {
                    MostrarAlerta("Informe o proprietário e o animal");
                    this.txtServico.Focus();
                    this.txtServico.Limpar();
                    return;
                }
            }
            if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                var validarServicoProfissional = this.verificarServicoCategoriaSala(this.cboEmpresa.GetValue(), this.txtProfissional.GetText().CNum(), this.txtDataServico.Date, this.txtServico.GetText().CNum());
                if (validarServicoProfissional && !String.IsNullOrWhiteSpace(validarServicoProfissional)) {
                    this.txtServico.Focus();
                    this.txtServico.Limpar();
                    MostrarAlerta(validarServicoProfissional);
                    return;
                }
            }
            //if (this.ParametrosTela.Codigo_Sala && this.ParametrosTela.Codigo_Sala > 0 && this.txtServico.GetText().CNum() > 0) {
            //    var paramProf: any = {
            //        codigoProfissional: this.txtProfissional.GetText().CNum(),
            //        codigoServico: this.txtServico.GetText().CNum()
            //    }
            //    const inserirServico = this.ExecutarFuncaoServerSideSynch("ProfissionalPodeRealizarServico", paramProf);
            //    if (!inserirServico) {
            //        this.txtServico.Focus();
            //        this.txtServico.Limpar();
            //        MostrarAlerta("Este serviço não pode ser realizado por este profissional");
            //        return;
            //    }
            //    var paramSala: any = {
            //        codigoSala: this.ParametrosTela.Codigo_Sala,
            //        codigoServico: this.txtServico.GetText().CNum()
            //    }
            //    const inserirServicoSala = this.ExecutarFuncaoServerSideSynch("SalaPodeRealizarServico", paramSala);
            //    if (!inserirServicoSala) {
            //        this.txtServico.Focus();
            //        this.txtServico.Limpar();
            //        MostrarAlerta("Este serviço não pode ser realizado na sala: " + this.ParametrosTela.Sala_Descricao);
            //        return;
            //    }
            //}
            var parametros = {
                codigoServico: this.txtServico.GetText(),
                codigoEmpresa: "" + this.cboEmpresa.GetValue(),
                codCliente: this.txtPet.TextBoxProprietario.GetText().CNum(),
                diaSemana: this.txtDataServico.Date.getDay() + 1,
                hora: this.txtHoraServico.textBoxHorario.GetText(),
                dataServico: this.txtDataServico.Date
            };
            var entidadeServico = this.GetScope().Servico;
            entidadeServico.Quantidade = 1;
            var retorno = this.ExecutarFuncaoServerSideSynch("GetInfoServico", parametros);
            if (retorno) {
                if (retorno['isServicoAtendimentoContinuo'] == "S") {
                    MostrarAlerta('Este serviço não poderá ser adicionado. Pois está marcado apenas para uso no atendimento contínuo.');
                    this.txtServico.Limpar();
                    this.txtServico.Focus();
                    return;
                }
                if (retorno['isServicoZerado'] == "S") {
                    this.txtValorUnitario.Obrigatorio = false;
                }
                else {
                    this.txtValorUnitario.Obrigatorio = true;
                }
                this.listaPrecos = retorno['lista_precos'];
                var servicoPacote = retorno['servico_pacote'];
                var Produto_Promocao = retorno['promocao_servico'];
                if (servicoPacote != null && servicoPacote != undefined && servicoPacote > 0) {
                    this.hdnServicoPacote.value = "S";
                    MostrarAlerta("O serviço informado faz parte de um pacote, não será possível alterar o valor, pois o mesmo já foi pago na venda " + servicoPacote);
                }
                else {
                    this.hdnServicoPacote.value = "N";
                }
                var duracaoServico = retorno['duracao_servico'];
                if (!String.IsNullOrWhiteSpace(duracaoServico)) {
                    this.lblTempoDuracao.Text = duracaoServico;
                }
            }
            else {
                this.listaPrecos = [];
                this.hdnServicoPacote.value = "N";
            }
            if (this.cboListaPreco && this.cboListaPreco.Combo) {
                this.cboListaPreco.Combo.ClearItems();
                this.listaPrecos.forEach(function (q) {
                    _this.cboListaPreco.Combo.AddItem(q.Descricao, q.Codigo, "");
                });
                if (this.cboListaPreco.Combo.GetItemCount() == 1) {
                    this.cboListaPreco.Combo.SetSelectedIndex(0);
                    entidadeServico.Valor = this.listaPrecos[0].Preco;
                }
                else {
                    this.cboListaPreco.Combo.SetText("");
                    entidadeServico.Valor = 0.0;
                }
            }
            else {
                if (Produto_Promocao != undefined || Produto_Promocao != null) {
                    this.txtValorUnitario.SetText(Produto_Promocao.Preco_Promocao.Format(2));
                }
                else {
                    if (this.listaPrecos.length > 0) {
                        entidadeServico.Valor = this.listaPrecos[0].Preco;
                    }
                    else {
                        entidadeServico.Valor = 0.0;
                    }
                }
            }
            this.Servico.VacinaAgendada = null;
            this.retornoComplementosItemServico = null;
            this.perguntouAdicionarServicoDuplicado = false;
            this.GetScope().$applyAsync();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnTxtProdutoProcurou = function (s, e) {
        try {
            var parametros;
            var infoProprietario;
            parametros = {
                codigoServico: this.txtProduto.GetText(),
                codigoEmpresa: this.cboEmpresa_List.value,
                diaSemana: 0,
                hora: "",
                dataServico: this.txtDataProduto.Date
            };
            var entidadeProduto = this.GetScope().Produto;
            entidadeProduto.Quantidade = 1;
            this.listaPrecosProduto = this.ExecutarFuncaoServerSideSynch("GetListasPrecos", parametros);
            if (this.cboListaPrecoProduto && this.cboListaPrecoProduto.Combo) {
                this.cboListaPrecoProduto.Combo.ClearItems();
                for (var x = 0; x < this.listaPrecosProduto.length; x++) {
                    this.cboListaPrecoProduto.Combo.AddItem(this.listaPrecosProduto[x].Descricao, this.listaPrecosProduto[x].Codigo, "");
                }
                if (this.cboListaPrecoProduto.Combo.GetItemCount() == 1) {
                    this.cboListaPrecoProduto.Combo.SetSelectedIndex(0);
                    entidadeProduto.Valor = this.listaPrecosProduto[0].Preco;
                }
                else {
                    this.cboListaPrecoProduto.Combo.SetText("");
                    entidadeProduto.Valor = 0.0;
                }
            }
            else {
                if (this.listaPrecosProduto.length > 0) {
                    entidadeProduto.Valor = this.listaPrecosProduto[0].Preco;
                }
                else {
                    entidadeProduto.Valor = 0.0;
                }
            }
            this.GetScope().$applyAsync();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnClickAssinatura = function (s, e) {
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
    C_Animal.prototype.OnClickVacinas = function (s, e) {
        e.processOnServer = false;
        this.dlgVacinasAgendadas.Show();
    };
    C_Animal.prototype.OnClickVoltarAgendamento = function (s, e) {
        e.processOnServer = false;
        this.dlgVacinasAgendadas.Hide();
    };
    C_Animal.prototype.OnClickDiagnostico = function (s, e) {
        e.processOnServer = false;
        this.dlgDiagnostico.Show();
    };
    C_Animal.prototype.OnClickVoltarDiagnostico = function (s, e) {
        e.processOnServer = false;
        this.dlgDiagnostico.Hide();
    };
    C_Animal.prototype.OnClickOkPendente = function (s, e) {
        try {
            e.processOnServer = false;
            var parametros;
            parametros = {
                codigoProprietario: this.GetScope().Entity.Cod_Proprietario,
                codigoAnimal: this.GetScope().Entity.Cod_Animal,
                codigoEmpresa: this.GetScope().Entity.Empresa,
                listaAgendamentos: this.grdPendentes.Grid.GetSelectedRowsData
            };
            this.ExecutarFuncaoServerSideSynch("GravarAgendamentosPendentes", parametros);
            this.dlgVacinasPendentes.Hide();
            MostrarMensagem("Vacinas agendadas com sucesso");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnClickCancelarPendente = function (s, e) {
        e.processOnServer = false;
        this.dlgVacinasPendentes.Hide();
    };
    C_Animal.prototype.OnClickPendentes = function (s, e) {
        e.processOnServer = false;
        this.dlgPendentes.Show();
    };
    C_Animal.prototype.OnClickVoltarPendentes = function (s, e) {
        e.processOnServer = false;
        this.dlgPendentes.Hide();
    };
    C_Animal.prototype.OnClickHisProdutos = function (s, e) {
        e.processOnServer = false;
        if (this.txtPet.TextBoxProprietario.GetText().CNum() <= 0) {
            MostrarAlerta("Insira um proprietário válido.");
            return;
        }
        abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.RelacaoVendaCliente), ["Gerar_Relatorio=S", "Codigo_Cliente=" + this.txtPet.TextBoxProprietario.GetText()]);
    };
    C_Animal.prototype.OnClickHisPacote = function (s, e) {
        e.processOnServer = false;
        if (this.txtPet.TextBoxProprietario.GetText().CNum() <= 0) {
            MostrarAlerta("Insira um proprietário válido.");
            return;
        }
        abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.ConsultaPacotes), ["Gerar_Relatorio=S", "Codigo_Cliente=" + this.txtPet.TextBoxProprietario.GetText()]);
    };
    C_Animal.prototype.OnClickHistoricoServico = function (s, e) {
        e.processOnServer = false;
        if (this.txtPet.TextBoxAnimal.GetText().CNum() <= 0) {
            MostrarAlerta("Insira um animal válido.");
            return;
        }
        abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.RelacaoDeServicoPorPeriodo), ["Gerar_Relatorio=S", "codAnimal=" + this.txtPet.TextBoxAnimal.GetText()]);
    };
    C_Animal.prototype.OnClickImprimir = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.txtCodigo.GetText().CNum() <= 0) {
                MostrarAlerta("Informe um atendimento para ser impresso!");
                return;
            }
            var parametros;
            var codModelo;
            codModelo = 0;
            if (this.cboModelo.Combo && this.cboModelo) {
                codModelo = ("" + this.cboModelo.Combo.GetValue()).CNum();
            }
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
    C_Animal.prototype.OnClickImprimirTicket = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.txtCodigo.GetText().CNum() <= 0) {
                MostrarAlerta("Informe um atendimento para ser impresso!");
                return;
            }
            var parametros;
            parametros = {
                codigoAtendimento: this.txtCodigo.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetImpressaoMatricialTicket", parametros);
            //this.ImprimirMatricial(ValoresSismoura.NomeTela + "_Ticket", retorno);
            this.ImprimirDocumentoMatricial(retorno, 42);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnClickCarregarFotos = function (s, e) {
        e.processOnServer = false;
        this.fotosAnimal.Atualizar();
    };
    C_Animal.prototype.OnClickImprimirChecklist = function (s, e) {
        try {
            e.processOnServer = false;
            var parametros;
            parametros = {
                descricaoChecklist: this.txtCheckListProcura.GetText().CNum(),
                itensChecklist: this.grdCheckListItens.DataSource
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetImpressaoMatricialChecklist", parametros);
            this.ImprimirMatricial(ValoresSismoura.NomeTela + "_CheckList", retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnGrdAtendimentosPendentesSelecionouLinha = function (s, e) {
        this.OnAtualizouID(e.rowKey, "", this.GetScope());
        this.dlgPendentes.Hide();
    };
    C_Animal.prototype.OnSalvouAssinatura = function (s, e) {
        try {
            var entidade;
            entidade = this.GetScope().Entity;
            if (!entidade.Assinatura) {
                entidade.Assinatura = {};
                entidade.Assinatura.Atendimento = entidade.Codigo;
            }
            entidade.Assinatura.Assinatura = Sting64ToByteArray(this.sgnCheckList.assinaturaBase64);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.PreencherGridDocumentos = function () {
        var source = [];
        if (this.hdnDoc && !String.IsNullOrWhiteSpace(this.hdnDoc.value)) {
            source = JSON.parse(DecodeTextoJSON(this.hdnDoc.value));
        }
        this.grdDoc.PreencherGrid(source);
    };
    C_Animal.prototype.OnClickImprimirDoc = function (s, e) {
        try {
            //this.hdnDoc.value = "" + e.rowKey;
            //this.btnImpDoc.DoClick();
            if (this.GetScope().Entity.Cod_Animal <= 0) {
                MostrarAlerta("Informe o animal");
                return;
            }
            if (this.GetScope().Entity.Empresa <= 0) {
                MostrarAlerta("Informe a empresa");
                return;
            }
            for (var x = 0; x < this.Servicos.length; x++) {
                this.Servicos[x].Data = ConvertToDate(this.Servicos[x].Data);
                this.Servicos[x].Previsao = ConvertToDate(this.Servicos[x].Previsao);
                if (this.Servicos[x].VacinaAgendada) {
                    this.Servicos[x].VacinaAgendada.Data = ConvertToDate(this.Servicos[x].VacinaAgendada.Data);
                }
            }
            var parametros;
            parametros = {
                codDocumento: e.rowKey,
                codAnimal: this.GetScope().Entity.Cod_Animal,
                codEmpresa: this.GetScope().Entity.Empresa,
                produtosAtendimento: this.Produtos,
                servicosAtendimento: this.Servicos
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetImpressaoDocumento", parametros);
            this.ImprimirDocumentoWord(retorno.Itens, retorno.Documento, "N");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnClickImprimirDocAcidente = function (s, e) {
        if (!e.data['Codigo']) {
            MostrarAlerta("Acidente ainda não foi gravado");
            return;
        }
        if (ValoresSismoura.ConfiguracoesPetshop.Documento_Padrao_Acidente <= 0) {
            MostrarAlerta("Documento padrão de Acidente não foi configurado. Configurar na Tela: Configurações do PET");
            return;
        }
        var param = {
            codAcidente: ("" + e.data['Codigo']).CNum(),
            codEmpresa: this.GetScope().Entity.Empresa,
            codAnimal: this.GetScope().Entity.Cod_Animal,
            docPadrao: ValoresSismoura.ConfiguracoesPetshop.Documento_Padrao_Acidente
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetImpressaoAcidente", param);
        this.ImprimirDocumentoWord(retorno.Itens, retorno.Documento, "N");
    };
    C_Animal.prototype.OnCboListaPrecoGotFocus = function (s, e) {
        if (this.cboListaPreco && this.cboListaPreco.Combo) {
            this.cboListaPreco.Combo.ShowDropDown();
        }
    };
    C_Animal.prototype.OnCboListaPrecoProdutoGotFocus = function (s, e) {
        if (this.cboListaPrecoProduto && this.cboListaPrecoProduto.Combo) {
            this.cboListaPrecoProduto.Combo.ShowDropDown();
        }
    };
    C_Animal.prototype.OnAntesAbrirProcuraProfissional = function (s, e) {
        e.Cancelar = false;
        this.txtProfissional.AddParametro("EmpProf", "" + this.cboEmpresa.GetValue());
    };
    C_Animal.prototype.OnAntesAbrirProcuraProfissionalResponsavel = function (s, e) {
        e.Cancelar = false;
        this.txtProfissionalResponsavel.AddParametro("EmpProf", "" + this.cboEmpresa.GetValue());
        if (this.profissionalPrestador) {
            this.txtProfissionalResponsavel.AddParametro("isTerceirizado", "2");
        }
    };
    C_Animal.prototype.OnTxtProfissionalResponsavelProcurou = function (s, e) {
        try {
            if (this.txtProfissionalResponsavel.GetText().CNum() <= 0) {
                return;
            }
            if (this.profissionalPrestador) {
                var param = {
                    codProfissional: this.txtProfissionalResponsavel.GetText().CNum()
                };
                if (this.ExecutarFuncaoServerSideSynch("isProfissionalTerceirizado", param)) {
                    MostrarAlerta("Não é possível selecionar um Prestador como Clínico Responsável");
                    this.txtProfissionalResponsavel.Limpar();
                    this.txtProfissionalResponsavel.Focus();
                    return;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnClickBotaoZanthus = function (s, e) {
        try {
            e.processOnServer = false;
            var codigo = this.txtCodigo.GetText();
            if (codigo.CNum() <= 0) {
                MostrarAlerta("Informe um atendimento!");
                return;
            }
            if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                var parametrosAtendimento;
                parametrosAtendimento = {
                    Atendimento: codigo.CNum()
                };
                var atendimentoZerado = this.ExecutarFuncaoServerSideSynch("AtendimentoZerado", parametrosAtendimento);
                if (atendimentoZerado == true && !this.IsAtendimentoConvenio()) {
                    MostrarAlerta("Não é possível integrar um atendimento somente com serviços zerados!");
                    return;
                }
            }
            var et = this.GetScope().Entity;
            var textoMensagem = "";
            //if (et.Cortesia > 0) {
            //    let msg = "";
            //    (this.IsAtendimentoConvenio()) ? msg = "Não é possível integrar um atendimento de cortesia" : msg = "não é possível enviar um atendimento de cortesia para Zanthus"
            //    MostrarAlerta(msg);
            //    return;
            //}
            if (this.IsAtendimentoConvenio()) {
                textoMensagem = "Deseja realmente integrar o atendimento?";
            }
            else {
                textoMensagem = "Deseja realmente enviar o atendimento para que seja pago na Zanthus?";
            }
            //Se possuir pelo menos 1 item pendente de autorização, não permito enviar o atendimento para a Zanthus!
            if ((this.EntityTela.Convenio > 0) && (this.IsConvenioProprio(this.EntityTela.Convenio))) {
                var entidade = this.Servicos.FirstOrDefault("Status_Plano", "4");
                if (entidade != null) {
                    MostrarAlerta("Não é possível integrar o atendimento pois existem serviços pendentes de autorização!");
                    return;
                }
            }
            //var parametros: any = {
            //    codAtendimento: et.Codigo
            //}
            //pré - pagamento
            ////Verifica se o atendimento foi enviado para pré-pagamento.
            ////Apenas atendimentos continuos(pacotes) necessitam serem enviados para o pré-pagamento. Atendimentos normais virão por padrão com o valor: NunhumaAcao.
            //var statusPrepagamento: SiSMoura.Core.Entity.Animais_Atendimento.StatusPrePagamentoZANTHUS;
            //statusPrepagamento = this.ExecutarFuncaoServerSideSynch("GetStatusPrePagamento", parametros)
            //if (!statusPrepagamento) {
            //    statusPrepagamento = SiSMoura.Core.Entity.Animais_Atendimento.StatusPrePagamentoZANTHUS.NenhumaAcao;
            //}
            //if (statusPrepagamento != SiSMoura.Core.Entity.Animais_Atendimento.StatusPrePagamentoZANTHUS.NenhumaAcao
            //    && statusPrepagamento != SiSMoura.Core.Entity.Animais_Atendimento.StatusPrePagamentoZANTHUS.PrePagamentoRealizado) {
            //    if (statusPrepagamento == SiSMoura.Core.Entity.Animais_Atendimento.StatusPrePagamentoZANTHUS.AguardandoEnvio) {
            //        MostrarAlerta("O Atendimento ainda não foi enviado para o pré-pagamento!");
            //        return;
            //    }
            //}
            MsgBoxJS(textoMensagem, MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecinouOpcaoZanthus, this), null);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnSelecinouOpcaoZanthus = function (e) {
        var _this = this;
        try {
            if (e.Resultado != MsgBoxResult.Yes) {
                return;
            }
            var parametros;
            parametros = {
                codAtendimento: this.txtCodigo.GetText().CNum(),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera("Aguarde. Efetivando a transação");
            this.ExecutarFuncaoServerSideAsynch("EnviarAtendimentoZanthus", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (!String.IsNullOrWhiteSpace(retorno)) {
                    MostrarAlerta(retorno);
                    return;
                }
                else {
                    var soma = 0;
                    if (_this.Servicos && _this.Servicos.length > 0) {
                        soma = _this.Servicos.Sum("Total");
                    }
                    if (_this.IsAtendimentoConvenio() && soma <= 0) {
                        MostrarMensagem("Atendimento do clube de vantagens finalizado com sucesso!");
                    }
                    else {
                        MostrarMensagem("Envio realizado com sucesso!");
                    }
                    if (_this.lblZanthus) {
                        if (_this.IsAtendimentoConvenio()) {
                            _this.lblZanthus.Text = "Solicitada integração de convênio";
                        }
                        else {
                            _this.lblZanthus.Text = "Enviado para Zanthus";
                        }
                    }
                    _this.AlterarCamposAtendimentoPago(true);
                    var codAtendimento = _this.txtCodigo.GetText();
                    if (codAtendimento.CNum() > 0) {
                        _this.PreencherEntidade(codAtendimento);
                    }
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
    C_Animal.prototype.OnClickBotaoCortesia = function (s, e) {
        try {
            e.processOnServer = false;
            var codigo = this.txtCodigo.GetText();
            if (codigo.CNum() <= 0) {
                MostrarAlerta("Informe um atendimento!");
                return;
            }
            var textoMensagem = "";
            textoMensagem = "Deseja realmente finalizar o atendimento de cortesia?";
            MsgBoxJS(textoMensagem, MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecinouOpcaoCortesia, this), null);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnSelecinouOpcaoCortesia = function (e) {
        try {
            if (e.Resultado != MsgBoxResult.Yes) {
                return;
            }
            var parametros;
            parametros = {
                codAtendimento: this.txtCodigo.GetText().CNum(),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("FinalizarAtendimentoCortesia", parametros);
            if (!String.IsNullOrWhiteSpace(retorno)) {
                MostrarAlerta(retorno);
                return;
            }
            else {
                MostrarMensagem("Atendimento de cortesia finalizado com sucesso!");
                this.AlterarCamposAtendimentoPago(true);
                var codAtendimento = this.txtCodigo.GetText();
                if (codAtendimento.CNum() > 0) {
                    this.PreencherEntidade(codAtendimento);
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnClickBotaoEstornar = function (s, e) {
        try {
            e.processOnServer = false;
            var codigo = this.txtCodigo.GetText();
            if (codigo.CNum() <= 0) {
                MostrarAlerta("Informe um atendimento!");
                return;
            }
            var et = this.GetScope().Entity;
            var textoMensagem = "";
            textoMensagem = "Deseja realmente estornar o atendimento de convênio?";
            MsgBoxJS(textoMensagem, MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecinouOpcaoEstornar, this), null);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnSelecinouOpcaoEstornar = function (e) {
        try {
            if (e.Resultado != MsgBoxResult.Yes) {
                return;
            }
            var parametros;
            parametros = {
                codAtendimento: this.txtCodigo.GetText().CNum(),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("EstornarAtendimentoConvenio", parametros);
            if (!String.IsNullOrWhiteSpace(retorno)) {
                MostrarAlerta(retorno);
                return;
            }
            else {
                MostrarMensagem("Atendimento estornado com sucesso!");
                this.AlterarCamposAtendimentoPago(true);
                var codAtendimento = this.txtCodigo.GetText();
                if (codAtendimento.CNum() > 0) {
                    this.PreencherEntidade(codAtendimento);
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.IsAtendimentoConvenio = function () {
        var convenio = 0;
        var autorizacao = "";
        if (this.txtConvenio) {
            convenio = this.txtConvenio.GetText().CNum();
        }
        if (this.txtAutorizacaoConvenio) {
            autorizacao = this.txtAutorizacaoConvenio.GetText();
        }
        if (convenio > 0 || !String.IsNullOrWhiteSpace(autorizacao)) {
            return true;
        }
        else {
            return false;
        }
    };
    C_Animal.prototype.CorrigirTextoBotaoZanthus = function () {
        try {
            this.btnSolicitarAprovacao.Visible = false;
            $(this.dvLegendaPlano).addClass("invisible");
            this.grdServicos.Grid.ColunaVisible("Status_Plano", false);
            if (this.btnEstornarConvenio) {
                this.btnEstornarConvenio.Visible = false;
            }
            if (!this.btnZanthus) {
                return;
            }
            if (!this.btnZanthus.Visible) {
                return;
            }
            if (this.IsAtendimentoConvenio()) {
                this.btnZanthus.Text = "Integrar Atendimento";
                this.btnEstornarConvenio.Visible = true;
            }
            else {
                this.btnZanthus.Text = "Integrar Zanthus";
                this.btnEstornarConvenio.Visible = false;
            }
            if (this.IsConvenioProprio(this.txtConvenio.GetText().CNum())) {
                this.btnEstornarConvenio.Visible = false;
                this.btnSolicitarAprovacao.Visible = true;
                $(this.dvLegendaPlano).removeClass("invisible");
                this.grdServicos.Grid.ColunaVisible("Status_Plano", true);
                this.grdServicos.Grid.ColunaVisible(this.grdServicos.Grid.GetColunaByName("botaoTemplate_btnAutorizacoes"), true);
            }
            else {
                this.btnSolicitarAprovacao.Visible = false;
                $(this.dvLegendaPlano).addClass("invisible");
                this.grdServicos.Grid.ColunaVisible("Status_Plano", false);
                this.grdServicos.Grid.ColunaVisible(this.grdServicos.Grid.GetColunaByName("botaoTemplate_btnAutorizacoes"), false);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OntxtConvenioLostFocus = function () {
        this.CorrigirTextoBotaoZanthus();
    };
    C_Animal.prototype.OnProcurouConvenio = function (s, e) {
        this.VerificarElegibilidadePlano(this.txtPet.TextBoxAnimal.GetText().CNum());
    };
    C_Animal.prototype.OnAntesAbrirProcuraConvenio = function (s, e) {
        try {
            this.txtConvenio.AddParametro("Is_Novo_Atendimento", "S");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OntxtAutorizacaoConvenioLostFocus = function () {
        this.CorrigirTextoBotaoZanthus();
    };
    C_Animal.prototype.OnClickBotaoFecharHistorico = function (s, e) {
        try {
            e.processOnServer = false;
            this.dlgHistorico.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnClickBotaoHistoricoAtendimentos = function (s, e) {
        try {
            e.processOnServer = false;
            var codAnimal = this.txtPet.TextBoxAnimal.GetText().CNum();
            if (codAnimal <= 0) {
                MostrarAlerta("Informe um animal para consultar o histórico!");
                return;
            }
            var parametros;
            parametros = {
                codAnimal: codAnimal
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("HistoricoAnimal", parametros);
            if (!retorno.Dados || retorno.Dados.length <= 0) {
                MostrarAlerta("Nenhum atendimento encontrado!");
                return;
            }
            this.grdHistorico.PreencherGrid([]);
            this.grdHistorico.PreencherGrid(retorno.Dados);
            this.grdHistorico.GroupBy("Codigo");
            this.grdHistorico.OrderBy("Codigo", "desc");
            if (retorno.Cliente) {
                this.lblHistProprietario.Text = retorno.Cliente;
            }
            else {
                this.lblHistProprietario.Text = "";
            }
            if (retorno.Animal) {
                this.lblHistAnimal.Text = retorno.Animal;
            }
            else {
                this.lblHistAnimal.Text = "";
            }
            if (retorno.Total) {
                this.lblHistTotal.Text = retorno.Total;
            }
            else {
                this.lblHistTotal.Text = "";
            }
            this.dlgHistorico.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnSelecionouLinhaHistorico = function (s, e) {
        try {
            var atendimento = "" + e.data["Codigo"];
            this.Limpar();
            this.PreencherEntidade(atendimento);
            this.dlgHistorico.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnFechouModalHistorico = function (s, e) {
        try {
            this.grdHistorico.PreencherGrid(null);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OnClickBotaoConsulta = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.txtPet.TextBoxAnimal.GetText().CNum() <= 0) {
                MostrarAlerta("Informe o animal!");
                return;
            }
            var parametros = [];
            parametros.push("codAnimal=" + this.txtPet.TextBoxAnimal.GetText().CNum());
            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroDeConsultaDoAnimal), parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.VerificarStatusPagamentoAPP = function (entity) {
        this.lblStatusPagamentoAPP.Visible = false;
        if (!ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            return;
        }
        if (!entity || !entity.Codigo || !entity.Pagamento_Status_Stoom) {
            return;
        }
        this.lblStatusPagamentoAPP.Visible = true;
        if (entity.Pagamento_Status_Stoom == 1) {
            this.lblStatusPagamentoAPP.Text = "Pagamento pré-capturado no aplicativo";
        }
        else if (entity.Pagamento_Status_Stoom == 2) {
            this.lblStatusPagamentoAPP.Text = "Pagamento do aplicativo efetivado";
        }
    };
    //protected OnClickbtnAdicionar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs) {
    //    try {
    //        e.processOnServer = false;
    //        //if (this.txtIncidencia.GetText.length == 0) {
    //        //    MostrarAlerta("Informe a incidencia!");
    //        //    return;
    //        //}
    //        var parametros: any;
    //        var entity = <SiSMoura.Core.Entity.Animais_Incidencia>{};
    //        var tela: string
    //        var usuario: any
    //        var incidenciaAnimal: SiSMoura.Core.Entity.Animais_Incidencia[];
    //        entity.Codigo = 0;
    //        entity.Cod_Atendimento = this.txtCodigo.GetText().CNum();
    //        entity.Cod_Animal = this.txtPet.TextBoxAnimal.GetText().CNum();
    //        entity.Descricao = this.txtIncidencia.GetText();
    //        //entity.Datahora = this.DataServidor();
    //        this.Incidencias.push(entity);
    //        if (this.Incidencias && this.Incidencias.length > 0) {
    //            debugger;
    //            this.grdIncidencia.Grid.PreencherGrid(this.Incidencias)
    //        }
    //    } catch (ex) {
    //        LogarException(ex);
    //    }
    //}
    //protected OnCheckEncaminhamento(s: MouraCheckBox, e: MouraEventArgs) {
    //    if (s.Check) {
    //        this.HabilitarAbaEncaminhamento(s.Checked);
    //    }
    //}//
    C_Animal.prototype.OnCboEncaminhamento = function (s, e) {
        this.AlterarVisibleEncaminhamento((s.GetValue() == 1));
    };
    C_Animal.prototype.AlterarVisibleEncaminhamento = function (value) {
        if (value) {
            $(this.DivEncaminhamento).removeClass("invisible");
            this.HabilitarTipoEncaminhamento(this.cboTipoEncaminhamento.GetValue());
        }
        else {
            this.Encaminhamento = {};
            this.Encaminhamento.Tipo_Encaminhamento = "I";
            $(this.DivEncaminhamento).addClass("invisible");
        }
    };
    C_Animal.prototype.OnClickPesos = function (s, e) {
        e.processOnServer = false;
        if (!this.txtPet || !this.txtPet.TextBoxAnimal || !this.txtCodigo) {
            return;
        }
        if (this.txtPet.TextBoxAnimal.GetText().CNum() <= 0) {
            MostrarAlerta("Informe um animal");
            return;
        }
        var url = URLTela.CadastroDeHistoricoDePeso;
        url = formataURLRelativa(url);
        abrirTelaNovaAbaParametros(url, ["animal=" + this.txtPet.TextBoxAnimal.GetText()]);
    };
    C_Animal.prototype.IsConvenioProprio = function (codConvenio) {
        try {
            //if (1 == 1) {
            //    return false;
            //}
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
    C_Animal.prototype.OnClickSolicitarConvenio = function () {
        try {
            if (!this.EntityTela)
                return;
            if (this.IsAtendimentoPago(CNum(this.EntityTela.Codigo))) {
                MostrarAlerta("Este atendimento não pode ser alterado, pois já foi pago ou integrado");
                return;
            }
            if (!this.Servicos) {
                this.Servicos = [];
            }
            var lista = this.Servicos;
            for (var x = 0; x <= lista.length - 1; x++) {
                var item = lista[x];
                if (!item.Codigo_Autorizacao_Plano) {
                    this.VerificaAutorizacaoPlano(item);
                }
            }
            this.Servicos = lista;
            this.grdServicos.AtualizarGrid();
            MostrarMensagem("Solicitação do plano atualizada com sucesso");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.IsAtendimentoPago = function (codAtendimento) {
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
    C_Animal.prototype.OnBtnDlgInfoProprietarioOKClick = function (s, e) {
        this.dlgInfoProprietario.ModalDialog.Hide();
        if (this.Incidencias && this.Incidencias.length > 0 && this.txtCodigo.GetText().CNum() <= 0) {
            setTimeout($.proxy(function () {
                MsgBoxJS("Já ocorreu um acidente com este Pet, favor verificar histórico na aba Acidentes.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, null, null, 'ATENÇÃO!');
            }, this), 200);
        }
    };
    C_Animal.prototype.OnBtnDlgInfoProprietarioCadastroClick = function (s, e) {
        //window.open("www.google.com.br", "_self");
        //Response.redirect("www.google.com.br");
        var form = document.createElement("form");
        form.method = "GET";
        form.action = "http://192.168.200.90/manager/cad_cliente_pets.php5";
        form.target = "_blank";
        document.body.appendChild(form);
        form.submit();
    };
    C_Animal.prototype.AbrirModalAtualizarInfoProprietario = function () {
        try {
            var parametros = {
                codigoProprietario: this.txtPet.TextBoxProprietario.GetText()
            };
            var infoProprietario;
            var complementoProprietario = this.ExecutarFuncaoServerSideSynch("RetornarComplementosProprietario", parametros);
            if (complementoProprietario) {
                infoProprietario = complementoProprietario.InformacoesProprietario;
                if (infoProprietario) {
                    this.DlgInfoProprietarioInfo.innerHTML = "Cliente: <b>" + (infoProprietario.Nome != null ? infoProprietario.Nome : "<<NOME NÃO ENCONTRADO>>") + "</b> </br></br>";
                    this.DlgInfoProprietarioInfo.innerHTML += "CPF / CNPJ: <b>" + (infoProprietario.CPF != null ? infoProprietario.CPF : "") + "</b> </br></br>";
                    this.DlgInfoProprietarioInfo.innerHTML += "E - Mail: <b>" + (infoProprietario.Email != null ? infoProprietario.Email : "") + "</b> </br></br>";
                    this.DlgInfoProprietarioInfo.innerHTML += "Fone: <b>" + (infoProprietario.Telefone != null ? infoProprietario.Telefone : "") + "</b> </br></br>";
                    this.DlgInfoProprietarioInfo.innerHTML += "Endere\u00E7o: <b>" + (infoProprietario.Endrereco != null ? infoProprietario.Endrereco : "") + ", " + (infoProprietario.Complemento != null ? infoProprietario.Complemento : "") + "</b> </br></br>";
                    this.DlgInfoProprietarioInfo.innerHTML += "Cidade: <b>" + (infoProprietario.Cidade != null ? infoProprietario.Cidade : "") + "</b> </br></br>";
                    this.dlgInfoProprietario.ModalDialog.Show();
                }
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_Animal.prototype.MudouComissaoReal = function (newValue, oldValue) {
        if (!this.flag) {
            this.flag = true;
            if (this.Participante.Comissao < 0) {
                this.Participante.Comissao = 0;
            }
            if (this.Participante.Comissao > 0 && this.Participante.Comissao < this.Servico.Total) {
                this.Participante.Comissao_Porcentagem = (this.Participante.Comissao / this.Servico.Total) * 100;
            }
            if (this.Participante.Comissao >= this.Servico.Total && this.Servico.Total != 0) {
                this.Participante.Comissao = 0; //this.Servico.Total;
                MsgBoxJS("A comissão não pode ser maior/igual que o valor do serviço!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, null, null, 'ATENÇÃO!');
            }
        }
        else {
            this.flag = false;
        }
        this.RefreshAngular();
    };
    C_Animal.prototype.MudouComissaoPorcentagem = function (newValue, oldValue) {
        if (!this.flag) {
            this.flag = true;
            if (this.Participante.Comissao_Porcentagem < 0) {
                this.Participante.Comissao_Porcentagem = 0;
            }
            if (this.Participante.Comissao_Porcentagem > 0 && this.Participante.Comissao_Porcentagem < 100) {
                this.Participante.Comissao = (this.Participante.Comissao_Porcentagem / 100) * this.Servico.Total;
            }
            if (this.Participante.Comissao_Porcentagem >= 100) {
                this.Participante.Comissao_Porcentagem = 0;
                MsgBoxJS("A comissão não pode ser maior/igual que o valor do serviço!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, null, null, 'ATENÇÃO!');
            }
        }
        else {
            this.flag = false;
        }
        this.RefreshAngular();
    };
    C_Animal.prototype.verificarServicoCategoriaSala = function (codEmpresa, codProfissional, data, codServico) {
        try {
            var parametros = {
                codEmpresa: codEmpresa,
                codProfissional: codProfissional,
                data: data,
                servico: codServico
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("verificarServicoCategoriaSala", parametros);
            this.txtServico.LimparParametros();
            if (retorno) {
                if (retorno.Sala) {
                    this._codSala = retorno.Sala;
                    this.txtServico.AddParametro("codigoSala", retorno.Sala);
                }
                if (codProfissional > 0)
                    this.txtServico.AddParametro("codigoProfissional", codProfissional.toString());
                if (retorno.Retorno) {
                    return retorno.Retorno;
                }
            }
            return "";
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal.prototype.OntxtDataServicoChanged = function () {
        if (this.txtServico.GetText().CNum() <= 0) {
            return;
        }
        var validarServicoProfissional = this.verificarServicoCategoriaSala(this.cboEmpresa.GetValue(), this.txtProfissional.GetText().CNum(), this.txtDataServico.Date, this.txtServico.GetText().CNum());
        if (validarServicoProfissional && !String.IsNullOrWhiteSpace(validarServicoProfissional)) {
            this.txtServico.Focus();
            this.txtServico.Limpar();
            MostrarAlerta(validarServicoProfissional);
            return;
        }
        this.AtualizarListaPrecoServico();
    };
    C_Animal.prototype.OntxtHoraServicoChanged = function () {
        if (this.txtServico.GetText().CNum() <= 0) {
            return;
        }
        this.AtualizarListaPrecoServico();
    };
    C_Animal.prototype.AtualizarListaPrecoServico = function () {
        var _this = this;
        try {
            if (this.txtServico.GetText().CNum() <= 0 || !ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Preco_Automatico_Atendimento) {
                return;
            }
            var param = {
                codigoServico: this.txtServico.GetText().CNum(),
                codigoEmpresa: this.cboEmpresa_List.value,
                diaSemana: this.txtDataServico.Date.getDay() + 1,
                hora: this.txtHoraServico.textBoxHorario.GetText(),
                dataServico: this.txtDataServico.Date
            };
            this.listaPrecos = this.ExecutarFuncaoServerSideSynch("GetListasPrecos", param);
            var entidadeServico = this.GetScope().Servico;
            entidadeServico.Quantidade = 1;
            if (this.cboListaPreco && this.cboListaPreco.Combo) {
                this.cboListaPreco.Combo.ClearItems();
                this.listaPrecos.forEach(function (q) {
                    _this.cboListaPreco.Combo.AddItem(q.Descricao, q.Codigo, "");
                });
                if (this.cboListaPreco.Combo.GetItemCount() == 1) {
                    this.cboListaPreco.Combo.SetSelectedIndex(0);
                    entidadeServico.Valor = this.listaPrecos[0].Preco;
                }
                else {
                    this.cboListaPreco.Combo.SetText("");
                    entidadeServico.Valor = 0.0;
                }
            }
            else {
                if (this.listaPrecos.length > 0) {
                    entidadeServico.Valor = this.listaPrecos[0].Preco;
                }
                else {
                    entidadeServico.Valor = 0.0;
                }
            }
            this.GetScope().$applyAsync();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Animal;
}(MouraPageCadastroAngular));
var c_Animal = new C_Animal();
//# sourceMappingURL=C_Animal.js.map