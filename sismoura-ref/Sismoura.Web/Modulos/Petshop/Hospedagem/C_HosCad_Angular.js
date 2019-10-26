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
var C_HosCad_Angular = /** @class */ (function (_super) {
    __extends(C_HosCad_Angular, _super);
    function C_HosCad_Angular() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PATH_DOCUMENTOS_HOSPEDAGEM = "~/Documentos/Hospedagem/";
        _this.ExecutarCheckoutDepoisGravar = false;
        _this.validouInformacoesHospedagem = false;
        _this.enviarEmailCheckout = false;
        _this.verificadoAutorizacaoDescontoHospedagem = false;
        return _this;
    }
    Object.defineProperty(C_HosCad_Angular.prototype, "ConfiguracoesPET", {
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
    Object.defineProperty(C_HosCad_Angular.prototype, "GetHorarioCheckout", {
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
    Object.defineProperty(C_HosCad_Angular.prototype, "GetProfissionalDiaria", {
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
    Object.defineProperty(C_HosCad_Angular.prototype, "Atendimento_Bloquear_Editar_ValorServico", {
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
    Object.defineProperty(C_HosCad_Angular.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "hdnConfigPET", {
        get: function () {
            return $('#hdnConfigPET')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "hdnReserva", {
        get: function () {
            return $("#hdnReserva")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "hdnServicosHospedagem", {
        get: function () {
            return $("#hdnServicosHospedagem")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "lblDataCadastro", {
        get: function () {
            return window['lblDataCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "lblStatus", {
        get: function () {
            return window['lblStatus_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "lblQtdeDias", {
        get: function () {
            return window['lblQtdeDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "lblDias2", {
        get: function () {
            return window['lblDias2_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnVacinas", {
        get: function () {
            return window['btnVacinas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "hdnAgendamentoVisible", {
        get: function () {
            return $("#hdnAgendamentoVisible")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtDataEntrada", {
        get: function () {
            return window['txtDataEntrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtHoraEntrada", {
        get: function () {
            return window['txtHoraEntrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtUsuarioEntrada", {
        get: function () {
            return window['txtUsuarioEntrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtLocalHospedagem", {
        get: function () {
            return window['txtLocalHospedagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "cboBaia", {
        get: function () {
            return window['cboBaia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "Baias", {
        get: function () {
            return this.GetScope()["Baias"];
        },
        set: function (value) {
            this.GetScope()["Baias"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtObservacao", {
        get: function () {
            return window['txtObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtDataSaida", {
        get: function () {
            return window['txtDataSaida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "cboServicoDiaria", {
        get: function () {
            return window['cboServicoDiaria_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnRecalcularDiarias", {
        get: function () {
            return window['btnRecalcularDiarias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnAdicionarDiaria", {
        get: function () {
            return window['btnAdicionarDiaria_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "grdDiarias", {
        get: function () {
            return window['grdDiarias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnAnexo", {
        get: function () {
            return window['btnAnexo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnEmail", {
        get: function () {
            return window['btnEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "dlgAnexo", {
        get: function () {
            return window['dlgAnexo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "dlgMotivoCortesia", {
        get: function () {
            return window['dlgMotivoCortesia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "EnviarEmail", {
        get: function () {
            return window['EnviarEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "cboListaPreco", {
        get: function () {
            return window['cboListaPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtValorUnitario", {
        get: function () {
            return window['txtValorUnitario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtQuantidadeServico", {
        get: function () {
            return window['txtQuantidadeServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtDesconto", {
        get: function () {
            return window['txtDesconto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtDescontoPorcent", {
        get: function () {
            return window['txtDescontoPorcent_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "lblTotal", {
        get: function () {
            return window['lblTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtObservacaoServico", {
        get: function () {
            return window['txtObservacaoServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "chkConcluido", {
        get: function () {
            return window['chkConcluido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtProfissional", {
        get: function () {
            return window['txtProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnAdicionar", {
        get: function () {
            return window['btnAdicionar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnNovoServico", {
        get: function () {
            return window['btnNovoServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnReplicar", {
        get: function () {
            return window['btnReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "grdReplicarServicos", {
        get: function () {
            return window['grdReplicarServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "dlgReplicar", {
        get: function () {
            return window['dlgReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "dlgMotivoCancelamento", {
        get: function () {
            return window['dlgMotivoCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtMdlMotivoCanc", {
        get: function () {
            return window['txtMdlMotivoCanc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtMotivoCortesia", {
        get: function () {
            return window['txtMotivoCortesia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "chkCortesia", {
        get: function () {
            return window['chkCortesia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnOKCortesia", {
        get: function () {
            return window['btnOKCortesia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnCancelarCortesia", {
        get: function () {
            return window['btnCancelarCortesia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnMldMotivoCancConfirmar", {
        get: function () {
            return window['btnMldMotivoCancConfirmar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnMldMotivoCancCancelar", {
        get: function () {
            return window['btnMldMotivoCancCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "rblTipoIntervalo", {
        get: function () {
            return window['rblTipoIntervalo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "optTipoHospedagem", {
        get: function () {
            return window['optTipoHospedagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtIntervaloReplicacoes", {
        get: function () {
            return window['txtIntervaloReplicacoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtQtdeReplicacoes", {
        get: function () {
            return window['txtQtdeReplicacoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnReplicarServicos", {
        get: function () {
            return window['btnReplicarServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnCancelarReplicar", {
        get: function () {
            return window['btnCancelarReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "grdServicos", {
        get: function () {
            return window['grdServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "grdProdutosConsumidos", {
        get: function () {
            return window['grdProdutosConsumidos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtDataCheckout", {
        get: function () {
            return window['txtDataCheckout_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtHoraCheckout", {
        get: function () {
            return window['txtHoraCheckout_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "cboServicoCheckout", {
        get: function () {
            return window['cboServicoCheckout_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "lblInfoExcedido", {
        get: function () {
            return window['lblInfoExcedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtFuncionarioCheckout", {
        get: function () {
            return window['txtFuncionarioCheckout_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "cboListaPrecoProduto", {
        get: function () {
            return window['cboListaPrecoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtValorUnitarioProduto", {
        get: function () {
            return window['txtValorUnitarioProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtQuantidadeProduto", {
        get: function () {
            return window['txtQuantidadeProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtDescontoProduto", {
        get: function () {
            return window['txtDescontoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtDescontoPorcentProduto", {
        get: function () {
            return window['txtDescontoPorcentProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "lblTotalProduto", {
        get: function () {
            return window['lblTotalProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtDataProduto", {
        get: function () {
            return window['txtDataProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtHoraProduto", {
        get: function () {
            return window['txtHoraProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtProfissionalProduto", {
        get: function () {
            return window['txtProfissionalProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtObservacaoProduto", {
        get: function () {
            return window['txtObservacaoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "chkCobrado", {
        get: function () {
            return window['chkCobrado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnAdicionarProduto", {
        get: function () {
            return window['btnAdicionarProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnReplicarProduto", {
        get: function () {
            return window['btnReplicarProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnNovoProduto", {
        get: function () {
            return window['btnNovoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "grdProdutos", {
        get: function () {
            return window['grdProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "dlgReplicarProduto", {
        get: function () {
            return window['dlgReplicarProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "optTipoIntervaloProduto", {
        get: function () {
            return window['optTipoIntervaloProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtIntervaloReplicacoesProduto", {
        get: function () {
            return window['txtIntervaloReplicacoesProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtQtdeReplicacoesProduto", {
        get: function () {
            return window['txtQtdeReplicacoesProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "grdReplicarProdutos", {
        get: function () {
            return window['grdReplicarProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnModalReplicarProdutos", {
        get: function () {
            return window['btnModalReplicarProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnModalCancelarReplicarProdutos", {
        get: function () {
            return window['btnModalCancelarReplicarProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "grdAgendamentos", {
        get: function () {
            return window['grdAgendamentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnVoltarAgendamento", {
        get: function () {
            return window['btnVoltarAgendamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "Diarias", {
        get: function () {
            if (this.GetScope()["Diarias"]) {
                return this.GetScope()["Diarias"];
            }
            return [];
        },
        set: function (value) {
            this.GetScope()["Diarias"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "Diaria", {
        get: function () {
            if (this.GetScope() && this.GetScope()["Diaria"]) {
                return this.GetScope()["Diaria"];
            }
            return {};
        },
        set: function (value) {
            this.GetScope()["Diaria"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "Servicos", {
        get: function () {
            if (this.GetScope() && this.GetScope()["Servicos"]) {
                return this.GetScope()["Servicos"];
            }
            return [];
        },
        set: function (value) {
            this.GetScope()["Servicos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "Servico", {
        get: function () {
            if (this.GetScope() && this.GetScope()["Servico"]) {
                return this.GetScope()["Servico"];
            }
            return {};
        },
        set: function (value) {
            this.GetScope()["Servico"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "ProdutosConsumidos", {
        get: function () {
            if (this.GetScope() && this.GetScope()["ProdutosConsumidos"]) {
                return this.GetScope()["ProdutosConsumidos"];
            }
            return [];
        },
        set: function (value) {
            this.GetScope()["ProdutosConsumidos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "ProdutoConsumido", {
        get: function () {
            if (this.GetScope() && this.GetScope()["ProdutoConsumido"]) {
                return this.GetScope()["ProdutoConsumido"];
            }
            return {};
        },
        set: function (value) {
            this.GetScope()["ProdutoConsumido"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtValorUnitarioProdutoConsumido", {
        get: function () {
            return window['txtValorUnitarioProdutoConsumido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtQuantidadeProdutoConsumido", {
        get: function () {
            return window['txtQuantidadeProdutoConsumido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "Produto", {
        set: function (value) {
            this.GetScope()["Produto"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "ServicosDiarias", {
        get: function () {
            if (this.GetScope() && this.GetScope()["ServicosDiarias"]) {
                return this.GetScope()["ServicosDiarias"];
            }
            return [];
        },
        set: function (value) {
            this.GetScope()["ServicosDiarias"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "ServicosCarregadosBaia", {
        get: function () {
            if (this.GetScope() && this.GetScope()["ServicosCarregadosBaia"]) {
                return this.GetScope()["ServicosCarregadosBaia"];
            }
            return [];
        },
        set: function (value) {
            this.GetScope()["ServicosCarregadosBaia"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "Produtos", {
        get: function () {
            if (this.GetScope() && this.GetScope()["Produtos"]) {
                return this.GetScope()["Produtos"];
            }
            return [];
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "Atendimentos", {
        get: function () {
            return this.GetScope()["Atendimentos"];
        },
        set: function (value) {
            this.GetScope()["Atendimentos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "ListasPrecosServicos", {
        get: function () {
            return this.GetScope()["ListasPrecosServicos"];
        },
        set: function (value) {
            this.GetScope()["ListasPrecosServicos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "ListasPrecosProdutos", {
        get: function () {
            return this.GetScope()["ListasPrecosProdutos"];
        },
        set: function (value) {
            this.GetScope()["ListasPrecosProdutos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "grdAtendimentos", {
        get: function () {
            return window['grdAtendimentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnConsultas", {
        get: function () {
            return window['btnConsultas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnCancelarHospedagem", {
        get: function () {
            return window['btnCancelarHospedagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnCheckout", {
        get: function () {
            return window['btnCheckout_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "grdCheckListItens", {
        get: function () {
            return window['grdCheckListItens_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtCheckListProcura", {
        get: function () {
            return window['txtCheckListProcura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtProfissionalCheckList", {
        get: function () {
            return window['txtProfissionalCheckList_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtCheckList", {
        get: function () {
            return window['txtCheckList_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnImprimirCheckList", {
        get: function () {
            return window['btnImprimirCheckList_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "sgnCheckList", {
        get: function () {
            return window['sgnCheckList_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnAssinatura", {
        get: function () {
            return window['btnAssinatura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "lstSemana", {
        get: function () {
            return window['lstSemana_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "DiasSemana", {
        get: function () {
            return this.GetScope()['DiasSemana'];
        },
        set: function (values) {
            this.GetScope()['DiasSemana'] = values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "tabAvaliacoes", {
        /* Avaliacoes DO PET */
        get: function () {
            return window['tabAvaliacoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtVeterinario", {
        get: function () {
            return window['txtVeterinario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtAssunto", {
        get: function () {
            return window['txtAssunto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "cboModelo", {
        get: function () {
            return window['cboModelo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtDataRetorno", {
        get: function () {
            return window['txtDataRetorno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtFichaClinica", {
        get: function () {
            return window['txtFichaClinica_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtDescricaoFichaClinica", {
        get: function () {
            return window['txtDescricaoFichaClinica_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtDiagnostico", {
        get: function () {
            return window['txtDiagnostico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtExameFisico", {
        get: function () {
            return window['txtExameFisico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtDescricaoExameFisico", {
        get: function () {
            return window['txtDescricaoExameFisico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtAnamnese", {
        get: function () {
            return window['txtAnamnese_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtDescricaoAnamnese", {
        get: function () {
            return window['txtDescricaoAnamnese_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnSalvarConsulta", {
        get: function () {
            return window['btnSalvarConsulta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "mdlAdicDiariaDaycare", {
        get: function () {
            return window['mdlAdicDiariaDaycare_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "cboTipoDiaria", {
        get: function () {
            return window['cboTipoDiaria_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtDataDiaria", {
        get: function () {
            return window['txtDataDiaria_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnAdicionarDiariaAvulsa", {
        get: function () {
            return window['btnAdicionarDiariaAvulsa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "dlgAdicionalCheckout", {
        get: function () {
            return window['dlgAdicionalCheckout_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "cboOpcaoAdicaoHoraCheckout", {
        get: function () {
            return window['cboOpcaoAdicaoHoraCheckout_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnConfirmarAcaoCheckout", {
        get: function () {
            return window['btnConfirmarAcaoCheckout_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnCancelarAcaoCheckout", {
        get: function () {
            return window['btnCancelarAcaoCheckout_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "cboServicoAcaoCheckout", {
        get: function () {
            return window['cboServicoAcaoCheckout_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "lblValorAdicional", {
        get: function () {
            return window['lblValorAdicional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnImprimirFicha", {
        get: function () {
            return window['btnImprimirFicha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "DiariaCalculada", {
        get: function () {
            return this.GetScope()["DiariaCalculada"];
        },
        set: function (value) {
            this.GetScope()["DiariaCalculada"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtDescontoDiaria", {
        get: function () {
            return window['txtDescontoDiaria_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtDescontoPorcentDiaria", {
        get: function () {
            return window['txtDescontoPorcentDiaria_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "DadosAdicionaisPET", {
        get: function () {
            return this.GetScope()['DadosAdicionaisPET'];
        },
        set: function (value) {
            this.GetScope()['DadosAdicionaisPET'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtVetRespPet", {
        get: function () { return window['txtVetRespPet_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtFoneVetRespPet", {
        get: function () { return window['txtFoneVetRespPet_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "cboRestricaoAlimentar", {
        get: function () { return window['cboRestricaoAlimentar_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtRestricaoAlimentar", {
        get: function () { return window['txtRestricaoAlimentar_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtRacaoPet", {
        get: function () { return window['txtRacaoPet_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtQuantidadeRacao", {
        get: function () { return window['txtQuantidadeRacao_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "cboCarteiraVacinacao", {
        get: function () { return window['cboCarteiraVacinacao_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "cboAtestado", {
        get: function () { return window['cboAtestado_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "cboCastrado", {
        get: function () { return window['cboCastrado_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtUsuarioAvaliacao", {
        get: function () {
            return window['txtUsuarioAvaliacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "cboFichaAvaliacao", {
        get: function () {
            return window['cboFichaAvaliacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "cboQuantidadeMesesDaycare", {
        get: function () {
            return window['cboQuantidadeMesesDaycare_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "grdFichaAvaliacao", {
        get: function () {
            return window['grdFichaAvaliacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "grdAvaliacoesRealizadas", {
        get: function () {
            return window['grdAvaliacoesRealizadas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "grdVisualizarFichaAval", {
        get: function () {
            return window['grdVisualizarFichaAval_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtDataAvaliacao", {
        get: function () {
            return window['txtDataAvaliacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtObservacaoFicha", {
        get: function () {
            return window['txtObservacaoFicha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtObsFichaVisualizar", {
        get: function () {
            return window['txtObsFichaVisualizar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "txtHoraAvaliacao", {
        get: function () {
            return window['txtHoraAvaliacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "FichasAvaliacao", {
        get: function () {
            return this.GetScope()['FichasAvaliacao'];
        },
        set: function (value) {
            this.GetScope()['FichasAvaliacao'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "btnSalvarFicha", {
        get: function () {
            return window['btnSalvarFicha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosCad_Angular.prototype, "mdlVisualizarFichaAval", {
        get: function () {
            return window['mdlVisualizarFichaAval_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_HosCad_Angular.prototype.OnAntesBuscarExistente = function () {
        _super.prototype.OnAntesBuscarExistente.call(this);
        this.habilitar(false);
    };
    C_HosCad_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtPet && this.txtPet.TextBoxAnimal) {
            adicionarEventoMoura(this.txtPet.PesquisandoAnimal, this.OnPesquisandoAnimal, this);
            adicionarEventoMoura(this.txtPet.ProcurouAnimal, this.OnDepoisProcurouAnimal, this);
        }
        if (this.btnRecalcularDiarias) {
            adicionarEventoMoura(this.btnRecalcularDiarias.Click, this.onRecalcularDias, this);
        }
        if (this.btnAdicionarDiaria) {
            adicionarEventoMoura(this.btnAdicionarDiaria.Click, this.onAdicionarDiaria, this);
        }
        if (this.btnAdicionarDiariaAvulsa) {
            adicionarEventoMoura(this.btnAdicionarDiariaAvulsa.Click, this.onAdicionarDiariaAvulsaDaycare, this);
        }
        if (this.grdDiarias) {
            adicionarEventoMoura(this.grdDiarias.Grid.ClickBotaoLinha, this.OnAtualizandoPresenca, this);
            adicionarEventoMoura(this.grdDiarias.Validando, this.OnValidandoAlteracaoDiaria, this);
            adicionarEventoMoura(this.grdDiarias.AlterandoItem, this.OnAlterandoDiaria, this);
            adicionarEventoMoura(this.grdDiarias.SetouItem, this.OnSetouItemDiaria, this);
            adicionarEventoMoura(this.grdDiarias.SelecionouItem, this.OnSelecionouLinhaDiaria, this);
        }
        if (this.txtLocalHospedagem) {
            adicionarEventoMoura(this.txtLocalHospedagem.Procurou, this.OnDepoisProcuraLocal, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.onMudouEmpresa, this);
        }
        if (this.btnAnexo) {
            adicionarEventoMoura(this.btnAnexo.Click, this.OnBtnAnexoClick, this);
        }
        if (this.btnEmail) {
            adicionarEventoMoura(this.btnEmail.Click, this.OnBtnEmailClick, this);
        }
        if (this.btnImprimirFicha) {
            adicionarEventoMoura(this.btnImprimirFicha.Click, this.OnBtnFichaClick, this);
        }
        if (this.grdServicos) {
            adicionarEventoMoura(this.grdServicos.AdicionandoItem, this.OnSetouItemServico, this);
            adicionarEventoMoura(this.grdServicos.LimpouItem, this.OnLimpouItemServico, this);
            adicionarEventoMoura(this.grdServicos.ItemAdicionado, this.OnAdiciouItemServico, this);
            adicionarEventoMoura(this.grdServicos.Validando, this.OnValidandoItemServico, this);
            adicionarEventoMoura(this.grdServicos.ExcluindoItem, this.OnExcluindoItemServico, this);
            adicionarEventoMoura(this.grdServicos.AlterandoItem, this.OnAlterandoItem, this);
        }
        if (this.grdProdutosConsumidos) {
            adicionarEventoMoura(this.grdProdutosConsumidos.AdicionandoItem, this.OnSetouItemProdutoConsumido, this);
            adicionarEventoMoura(this.grdProdutosConsumidos.SetouItem, this.OnSetouItemProdutoConsumido, this);
            adicionarEventoMoura(this.grdProdutosConsumidos.LimpouItem, this.OnLimpouItemProdutoConsumido, this);
            adicionarEventoMoura(this.grdProdutosConsumidos.ItemAdicionado, this.OnAdiciouItemProdutoConsumido, this);
            adicionarEventoMoura(this.grdProdutosConsumidos.Validando, this.OnValidandoItemProdutoConsumido, this);
            adicionarEventoMoura(this.grdProdutosConsumidos.ExcluindoItem, this.OnExcluindoItemProdutoConsumido, this);
        }
        if (this.btnNovoServico) {
            adicionarEventoMoura(this.btnNovoServico.Click, this.LimparCamposServico, this);
        }
        if (this.btnReplicarServicos) {
            adicionarEventoMoura(this.btnReplicarServicos.Click, this.OnReplicarServicos, this);
        }
        if (this.btnCancelarReplicar) {
            adicionarEventoMoura(this.btnCancelarReplicar.Click, this.OnCancelarReplicar, this);
        }
        if (this.cboListaPreco && this.cboListaPreco.Combo) {
            adicionarEventoDevExpress(this.cboListaPreco.Combo.SelectedIndexChanged, this.OnCboListaPreco_comboBoxChange, this);
            adicionarEventoDevExpress(this.cboListaPreco.Combo.GotFocus, this.OnCboListaPrecoGotFocus, this);
        }
        if (this.cboBaia && this.cboBaia.Combo) {
            adicionarEventoDevExpress(this.cboBaia.Combo.SelectedIndexChanged, this.OnCboBaia_comboBoxChange, this);
            adicionarEventoDevExpress(this.cboBaia.Combo.GotFocus, this.OnCboBaiaGotFocus, this);
        }
        if (this.txtServico) {
            adicionarEventoMoura(this.txtServico.Procurou, this.OnTxtServicoProcurou, this);
            adicionarEventoMoura(this.txtServico.LostFocus, this.OnTxtServicoProcurou, this);
        }
        if (this.txtDesconto) {
            adicionarEventoMoura(this.txtDesconto.TextChanged, this.OnTxtDescontoServicoChange, this);
        }
        if (this.txtDescontoPorcent) {
            adicionarEventoMoura(this.txtDescontoPorcent.TextChanged, this.OnTxtDescontoPorcentServicoChange, this);
        }
        if (this.txtQuantidadeServico) {
            adicionarEventoMoura(this.txtQuantidadeServico.TextChanged, this.OnTxtQuantidadeServicoChange, this);
        }
        if (this.txtValorUnitarioProdutoConsumido) {
            adicionarEventoMoura(this.txtValorUnitarioProdutoConsumido.TextChanged, this.OnTxtValorProdutoConsumidoChange, this);
        }
        if (this.txtQuantidadeProdutoConsumido) {
            adicionarEventoMoura(this.txtQuantidadeProdutoConsumido.TextChanged, this.txtQuantidadeProdutoConsumidoChange, this);
        }
        if (this.txtQuantidadeProdutoConsumido) {
            adicionarEventoMoura(this.txtQuantidadeProdutoConsumido.TextChanged, this.OnTxtQuantidadeServicoChange, this);
        }
        if (this.grdAtendimentos) {
            adicionarEventoMoura(this.grdAtendimentos.SelecionouLinha, this.OnSelecionouAtendimentoGrid, this);
            adicionarEventoMoura(this.grdAtendimentos.ClickBotaoLinha, this.OnClickBotaoLinha, this);
        }
        //PRODUTOS
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnTxtProdutoProcurou, this);
        }
        if (this.txtDescontoProduto) {
            adicionarEventoMoura(this.txtDescontoProduto.TextChanged, this.OnTxtDescontoProdutoChange, this);
        }
        if (this.txtDescontoPorcentProduto) {
            adicionarEventoMoura(this.txtDescontoPorcentProduto.TextChanged, this.OnTxtDescontoPorcentProdutoChange, this);
        }
        if (this.txtQuantidadeProduto) {
            adicionarEventoMoura(this.txtQuantidadeProduto.TextChanged, this.txtQuantidadeProdutoChange, this);
        }
        if (this.cboListaPrecoProduto && this.cboListaPrecoProduto.Combo) {
            adicionarEventoDevExpress(this.cboListaPrecoProduto.Combo.SelectedIndexChanged, this.OnCboListaPrecoProduto_comboBoxChange, this);
            adicionarEventoDevExpress(this.cboListaPrecoProduto.Combo.GotFocus, this.OnCboListaPrecoProdutoGotFocus, this);
        }
        if (this.btnAdicionarProduto) {
            adicionarEventoMoura(this.btnAdicionarProduto.Click, this.OnAdicionarProduto, this);
        }
        if (this.grdProdutos) {
            adicionarEventoMoura(this.grdProdutos.Validando, this.OnValidandoProdutoGrade, this);
            adicionarEventoMoura(this.grdProdutos.Grid.ExcluindoLinhaGrade, this.OnValidandoProdutoGrade, this);
        }
        if (this.btnNovoProduto) {
            adicionarEventoMoura(this.btnNovoProduto.Click, this.LimparCamposProdutos, this);
        }
        if (this.btnReplicarProduto) {
            adicionarEventoMoura(this.btnReplicarProduto.Click, this.ReplicarProdutos, this);
        }
        if (this.btnModalReplicarProdutos) {
            adicionarEventoMoura(this.btnModalReplicarProdutos.Click, this.OnReplicarProdutos, this);
        }
        if (this.btnModalCancelarReplicarProdutos) {
            adicionarEventoMoura(this.btnModalCancelarReplicarProdutos.Click, this.OnCancelarReplicacaoProdutos, this);
        }
        if (this.btnConsultas) {
            adicionarEventoMoura(this.btnConsultas.Click, this.OnClickConsultas, this);
        }
        if (this.btnCancelarHospedagem) {
            adicionarEventoMoura(this.btnCancelarHospedagem.Click, this.OnBtnCancelarHospedagem, this);
        }
        if (this.btnMldMotivoCancConfirmar) {
            adicionarEventoMoura(this.btnMldMotivoCancConfirmar.Click, this.onBtnMdlMotivoCancConfirmar, this);
        }
        if (this.btnMldMotivoCancCancelar) {
            adicionarEventoMoura(this.btnMldMotivoCancCancelar.Click, this.onBtnMdlMotivoCancCancelar, this);
        }
        if (this.btnCheckout) {
            adicionarEventoMoura(this.btnCheckout.Click, this.FinalizarHotelDaycare, this);
        }
        if (this.btnOKCortesia)
            adicionarEventoMoura(this.btnOKCortesia.Click, this.OnBtnOKCortesiaClick, this);
        if (this.btnCancelarCortesia)
            adicionarEventoMoura(this.btnCancelarCortesia.Click, this.OnBtnCancelarCortesiaClick, this);
        if (this.optTipoHospedagem) {
            adicionarEventoMoura(this.optTipoHospedagem.SelectionChanged, this.OnMudouOptTipoHospedagem, this);
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
        if (this.txtDataEntrada) {
            adicionarEventoMoura(this.txtDataEntrada.LostFocus, this.OnTxtDataEntradaLostFocus, this);
        }
        if (this.txtDataSaida) {
            adicionarEventoMoura(this.txtDataSaida.LostFocus, this.OnTxtDataSaidaLostFocus, this);
        }
        if (this.txtVeterinario) {
            adicionarEventoMoura(this.txtVeterinario.AntesAbrirProcura, this.OnAntesAbrirProcuraVeterinario, this);
        }
        if (this.txtFichaClinica) {
            adicionarEventoMoura(this.txtFichaClinica.Procurou, this.OnProcurouFichaClinica, this);
        }
        if (this.txtExameFisico) {
            adicionarEventoMoura(this.txtExameFisico.Procurou, this.OnProcurouExameFisico, this);
        }
        if (this.txtAnamnese) {
            adicionarEventoMoura(this.txtAnamnese.Procurou, this.OnProcurouAnamnese, this);
        }
        if (this.btnConsultas) {
            adicionarEventoMoura(this.btnConsultas.Click, this.OnBtnSalvarConsulta, this);
        }
        if (this.lstSemana) {
            adicionarEventoMoura(this.lstSemana.SelectionChanged, this.OnLstSemanaItemChanged, this);
        }
        if (this.cboTipoDiaria && this.cboTipoDiaria.Combo) {
            adicionarEventoDevExpress(this.cboTipoDiaria.Combo.SelectedIndexChanged, this.OnCboTipoDiariaChange, this);
        }
        if (this.cboOpcaoAdicaoHoraCheckout.Combo) {
            adicionarEventoDevExpress(this.cboOpcaoAdicaoHoraCheckout.Combo.SelectedIndexChanged, this.OnCboOpcaoAdicaoHoraCheckoutChanged, this);
        }
        if (this.cboServicoAcaoCheckout.Combo) {
            adicionarEventoDevExpress(this.cboServicoAcaoCheckout.Combo.SelectedIndexChanged, this.OnCboServicoAcaoCheckoutChanged, this);
        }
        if (this.btnConfirmarAcaoCheckout) {
            adicionarEventoMoura(this.btnConfirmarAcaoCheckout.Click, this.OnBtnConfirmarAcaoCheckoutClick, this);
        }
        if (this.btnCancelarAcaoCheckout) {
            adicionarEventoMoura(this.btnCancelarAcaoCheckout.Click, this.OnBtnCancelarAcaoCheckoutClick, this);
        }
        if (this.cboServicoDiaria && this.cboServicoDiaria.Combo) {
            adicionarEventoDevExpress(this.cboServicoDiaria.Combo.SelectedIndexChanged, this.OnCboServicoDiaria_SelectedIndexChanged, this);
        }
        if (this.txtDescontoDiaria) {
            adicionarEventoMoura(this.txtDescontoDiaria.LostFocus, this.onTxtDescontoDiariaLostFocus, this);
        }
        if (this.txtDescontoPorcentDiaria) {
            adicionarEventoMoura(this.txtDescontoPorcentDiaria.LostFocus, this.onTxtDescontoPorcentDiaria, this);
        }
        if (this.cboFichaAvaliacao) {
            adicionarEventoDevExpress(this.cboFichaAvaliacao.Combo.SelectedIndexChanged, this.OnCboFichaAvaliacaoChanged, this);
        }
        if (this.cboQuantidadeMesesDaycare && this.cboQuantidadeMesesDaycare.Combo) {
            adicionarEventoDevExpress(this.cboQuantidadeMesesDaycare.Combo.SelectedIndexChanged, this.OnCboQuantidadeMesesDaycare_SelectedIndexChanged, this);
        }
        if (this.btnSalvarFicha) {
            adicionarEventoMoura(this.btnSalvarFicha.Click, this.onBtnSalvarFicha, this);
        }
        if (this.cboRestricaoAlimentar && this.cboRestricaoAlimentar.Combo) {
            adicionarEventoDevExpress(this.cboRestricaoAlimentar.Combo.SelectedIndexChanged, this.OnCboRestricaoAlimentar_SelectedIndexChanged, this);
        }
        adicionarEventoMoura(this.grdAvaliacoesRealizadas.SelecionouLinha, this.OnSelecionouLinhaFichaAvaliacao, this);
        adicionarEventoMoura(this.grdAvaliacoesRealizadas.ExcluiuLinhaGrade, this.OnExcluirFichaAvaliacao, this);
        adicionarEventoMoura(this.grdAvaliacoesRealizadas.ExcluindoLinhaGrade, this.OnExcluindoFichaAvaliacao, this);
    };
    C_HosCad_Angular.prototype.OnLstSemanaItemChanged = function (s, e) {
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
                    this.AtualizarLabelQtdeDias();
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
    C_HosCad_Angular.prototype.OnDepoisProcurouAnimal = function (s, e) {
        var _this = this;
        setTimeout(function () {
            if (_this.txtPet.TextBoxAnimal.GetText().CNum() > 0) {
                var parametros = {
                    codAnimal: _this.txtPet.TextBoxAnimal.GetText().CNum()
                };
                var avaliacao = _this.ExecutarFuncaoServerSideSynch("GetAvaliacaoComportamental", parametros);
                if (avaliacao && avaliacao.Codigo > 0) {
                    if (!(avaliacao.Aprovado) || avaliacao.Aprovado == 'N') {
                        MsgBoxJS("O PET não está aprovado para entrar na hospedagem.", MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
                        _this.Limpar();
                        return;
                    }
                }
                else {
                    MsgBoxJS("A avaliação comportamental do PET ainda não foi realizada. Deseja realiza-lá agora?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(_this.OnRespostaAvaliacaoComportamental, _this));
                    return;
                }
            }
        }, 300);
    };
    C_HosCad_Angular.prototype.OnMsgBoxAlterandoDiasSemana = function (result) {
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
    C_HosCad_Angular.prototype.OnTxtDataEntradaLostFocus = function () {
        var _this = this;
        try {
            setTimeout(function () {
                if (!(_this.VerificarDatas())) {
                    return;
                }
                _this.PreencherBaias(_this.txtLocalHospedagem.GetText().CNum());
                if (_this.txtCodigo.GetText().CNum() == 0
                    && _this.cboServicoDiaria.GetValue() > 0
                    && _this.optTipoHospedagem.GetValue().CNum() != 2 /* DAYCARE */) {
                    _this.btnRecalcularDiarias.DoClick();
                }
                _this.AtualizarLabelQtdeDias();
            }, 300);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.OnTxtDataSaidaLostFocus = function () {
        var _this = this;
        try {
            setTimeout(function () {
                if (!(_this.VerificarDatas())) {
                    return;
                }
                _this.PreencherBaias(_this.txtLocalHospedagem.GetText().CNum());
                if (_this.txtCodigo.GetText().CNum() == 0
                    && _this.cboServicoDiaria.GetValue() > 0
                    && _this.optTipoHospedagem.GetValue().CNum() != 2 /* DAYCARE */) {
                    _this.btnRecalcularDiarias.DoClick();
                }
                _this.AtualizarLabelQtdeDias();
            }, 300);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.AtualizarLabelQtdeDias = function () {
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
            totalDias = this.GetNumeroDiariasGerar(false);
        }
        this.lblQtdeDias.Text = "Quantidade de dias: " + totalDias;
        this.lblDias2.Text = this.lblQtdeDias.Text;
    };
    C_HosCad_Angular.prototype.VerificarDatas = function () {
        //if (true == true) { return true }
        var retorno = true;
        if (!this.txtDataEntrada.Date) {
            this.txtDataEntrada.Date = this.DataServidor();
        }
        if (!this.txtDataSaida.Date) {
            this.txtDataSaida.Date = this.DataServidor();
        }
        var dataInicial = this.txtDataEntrada.Date.ToDate();
        var dataFinal = this.txtDataSaida.Date.ToDate();
        var dataAtual = this.DataServidor();
        dataInicial.setHours(0, 0, 0, 0);
        dataFinal.setHours(0, 0, 0, 0);
        dataAtual.setHours(0, 0, 0, 0);
        if (this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */) { //Daycare
            if (!this.validarDataDaycare()) {
                return false;
            }
        }
        else { //Hotel
            if (!this.validarDataHotel()) {
                return false;
            }
        }
        //Verifica se está tentando alterar a data de uma hospedagem que já foi salva, a data pode ser alterada para uma data futura, mas não para uma retroativa.
        if (this.GetScope().Entity && this.GetScope().Entity.Codigo > 0) {
            var dtSaidaHospedagem;
            var parametros = {
                codHospedagem: this.GetScope().Entity.Codigo
            };
            var hospedagem = this.ExecutarFuncaoServerSideSynch("GetHospedagemByCodigo", parametros);
            if (hospedagem) {
                dtSaidaHospedagem = hospedagem.Data_Saida.ToDate();
                dtSaidaHospedagem.setHours(0, 0, 0, 0);
                if (dataFinal.isBefore(dtSaidaHospedagem, false)) {
                    MostrarAlerta("A data final não pode ser modificada para uma data retroativa para uma hospedagem já salva.");
                    this.txtDataSaida.Date = dtSaidaHospedagem;
                    return false;
                }
            }
        }
        return true;
    };
    C_HosCad_Angular.prototype.validarDataDaycare = function () {
        var dataInicial = this.txtDataEntrada.Date.ToDate();
        var dataFinal = this.txtDataSaida.Date.ToDate();
        var dataAtual = this.DataServidor();
        dataInicial.setHours(0, 0, 0, 0);
        dataFinal.setHours(0, 0, 0, 0);
        dataAtual.setHours(0, 0, 0, 0);
        if (dataInicial.isBefore(dataAtual, false) && this.txtCodigo.GetText().CNum() == 0 && this.hdnReserva.value.CNum() == 0) {
            MostrarAlerta("A data de entrada deve ser maior ou igual a data atual.");
            this.txtDataEntrada.Date = this.DataServidor();
            var dt = this.txtDataEntrada.Date.ToDate();
            this.txtDataSaida.Date = this.calcularUltimoDiaMensalidadeDaycare(dt);
            this.AtualizarLabelQtdeDias();
            return false;
        }
        if (dataInicial.isAfter(dataFinal, true)) {
            MostrarAlerta("A data de entrada deve ser menor que a data final");
            var dt = this.txtDataEntrada.Date.ToDate();
            this.txtDataSaida.Date = this.calcularUltimoDiaMensalidadeDaycare(dt);
            this.AtualizarLabelQtdeDias();
            return false;
        }
        if (this.cboTipoDiaria.GetValue() == 1 /* MENSAL */) {
            //Verificar se está dando o mes fechado. Pois como o tipo do daycare é mensal, o período precisa compreender a meses fechados.
            var diffDays = calcularDiferencaData(dataInicial, dataFinal, DiferencaData.Days);
            if (diffDays % 30 != 0) {
                var dt = this.txtDataEntrada.Date.ToDate();
                this.txtDataSaida.Date = this.calcularUltimoDiaMensalidadeDaycare(dt);
                this.AtualizarLabelQtdeDias();
            }
            return false;
        }
        if (this.txtCodigo.GetText().CNum() == 0
            && this.hdnReserva.value.CNum() == 0
            && this.cboTipoDiaria.GetValue() == 1 /* MENSAL */) {
            var dt = this.txtDataEntrada.Date.ToDate();
            this.txtDataSaida.Date = this.calcularUltimoDiaMensalidadeDaycare(dt);
        }
        return true;
    };
    C_HosCad_Angular.prototype.validarDataHotel = function () {
        var dataInicial = this.txtDataEntrada.Date.ToDate();
        var dataFinal = this.txtDataSaida.Date.ToDate();
        var dataAtual = this.DataServidor();
        dataInicial.setHours(0, 0, 0, 0);
        dataFinal.setHours(0, 0, 0, 0);
        dataAtual.setHours(0, 0, 0, 0);
        if (this.txtCodigo.GetText().CNum() == 0 && this.hdnReserva.value.CNum() == 0) {
            if (dataInicial.isBefore(dataAtual, false)) {
                MostrarAlerta("A data de entrada deve ser maior ou igual a data atual.");
                this.txtDataEntrada.Date = this.DataServidor();
                this.txtDataSaida.Date = this.DataServidor();
                this.txtDataSaida.Date = this.DataServidor().addDays(1);
                this.AtualizarLabelQtdeDias();
                return false;
            }
            if (dataInicial.isAfter(dataFinal, true)) {
                MostrarAlerta("A data de entrada deve ser menor que a data final.");
                this.txtDataEntrada.Date = this.DataServidor();
                this.txtDataSaida.Date = this.DataServidor();
                this.txtDataSaida.Date = this.DataServidor().addDays(1);
                this.AtualizarLabelQtdeDias();
                return false;
            }
        }
        return true;
    };
    C_HosCad_Angular.prototype.OnTxtCheckListProcuraProcurou = function (s, e) {
        try {
            var parametros;
            parametros = {
                codHospedagem: CNum(this.GetScope().Entity.Codigo),
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
    C_HosCad_Angular.prototype.OnSalvouAssinatura = function (s, e) {
        try {
            var entidade;
            entidade = this.GetScope().Entity;
            if (!entidade.Assinatura) {
                entidade.Assinatura = {};
                entidade.Assinatura.Hospedagem = entidade.Codigo;
            }
            entidade.Assinatura.Assinatura = Sting64ToByteArray(this.sgnCheckList.assinaturaBase64);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.OnClickAssinatura = function (s, e) {
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
    C_HosCad_Angular.prototype.OnClickImprimirChecklist = function (s, e) {
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
    C_HosCad_Angular.prototype.OnMudouOptTipoHospedagem = function (s, e) {
        //console.log("OnMudouOptTipoHospedagem")
        this.alterarCamposTipoHospedagem();
        this.AtualizarLabelQtdeDias();
        this.LimparDiarias();
        this.txtLocalHospedagem.Limpar();
        this.Baias = [];
        this.cboBaia.Combo.ClearItems();
        return;
    };
    C_HosCad_Angular.prototype.OnClickConsultas = function (s, e) {
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
    C_HosCad_Angular.prototype.OnBtnCancelarHospedagem = function (s, e) {
        var _this = this;
        try {
            e.processOnServer = false;
            if (this.txtCodigo.GetText().CNum() == 0) {
                MostrarAlerta("Informe uma hospedagem.");
                return;
            }
            var entidade = this.GetScope().Entity;
            if (entidade && entidade.Codigo) {
                if (entidade.Cancelada) {
                    MostrarAlerta("Esta hospedagem já foi cancelada.");
                    return false;
                }
                if (entidade.Finalizado) {
                    MostrarAlerta("Esta hospedagem já foi finalizada, não será possível realizar seu cancelamento.");
                    return false;
                }
                var parametros = {
                    codHospedagem: entidade.Codigo
                };
                var atendimentos;
                atendimentos = this.ExecutarFuncaoServerSideSynch("GetAtendimentosHospedagem", parametros);
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
                    MsgBoxJS("Já foi realizado o pagamento desta hospedagem, não será possível realizar o seu cancelamento.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
                    return;
                }
                else if (hasAtendimentosEnviadosZanthus) {
                    MsgBoxJS("Atenção! Existem atendimentos que foram enviados para pagamento. Deseja realmente realizar o cancelamento desta hospedagem?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                        if (result.Resultado == MsgBoxResult.No) {
                            return;
                        }
                        else {
                            //Exibir modal para informar o motivo do cancelamento.
                            _this.txtMdlMotivoCanc.Limpar();
                            _this.dlgMotivoCancelamento.ModalDialog.Show();
                        }
                    });
                }
                else {
                    //Exibir modal para informar o motivo do cancelamento.
                    this.txtMdlMotivoCanc.Limpar();
                    this.dlgMotivoCancelamento.ModalDialog.Show();
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.onBtnMdlMotivoCancConfirmar = function (s, e) {
        try {
            if (String.IsNullOrWhiteSpace(this.txtMdlMotivoCanc.GetText())) {
                MostrarAlerta("Informe o motivo do cancelamento.");
                return;
            }
            var parametros = {
                codHospedagem: this.txtCodigo.GetText().CNum(),
                motivoCancelamento: this.txtMdlMotivoCanc.GetText(),
                Tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            //Realizar o cancelamento.
            var retorno = this.ExecutarFuncaoServerSideSynch("PetzCancelarHospedagem", parametros);
            if (retorno) {
                MostrarMensagem("Hospedagem cancelada com sucesso!");
                this.PreencherEntidade("" + this.txtCodigo.GetText().CNum());
            }
            else {
                MostrarError("Falha ao realizar o cancelamento da hospedagem.");
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
    C_HosCad_Angular.prototype.onBtnMdlMotivoCancCancelar = function (s, e) {
        this.dlgMotivoCancelamento.ModalDialog.Hide();
        this.txtMdlMotivoCanc.Limpar();
        MostrarAlerta("Cancelamento da Hospedagem não efetudado. Operação cancelada pelo usuário.");
    };
    C_HosCad_Angular.prototype.CarregarServicosVinculadosBaias = function () {
        if (!(this.cboBaia.Combo.GetValue() > 0)) {
            return;
        }
        var parametros = {
            baia: this.cboBaia.Combo.GetValue()
        };
        this.ServicosDiarias = this.ExecutarFuncaoServerSideSynch("GetServicosVinculadosBaia", parametros);
        this.ServicosCarregadosBaia = this.ServicosDiarias;
        this.PreencherServicosHospedagem(this.ServicosDiarias);
    };
    C_HosCad_Angular.prototype.PreencherServicosHospedagem = function (value) {
        this.cboServicoDiaria.ClearItems();
        this.cboServicoCheckout.ClearItems();
        this.cboServicoAcaoCheckout.ClearItems();
        if (this.ServicosDiarias && this.ServicosDiarias.length > 0) {
            for (var i = 0; i < this.ServicosDiarias.length; i++) {
                var descricao = this.ServicosDiarias[i].Nome;
                if (this.ServicosDiarias[i].Valor && this.ServicosDiarias[i].Valor > 0) {
                    descricao += " - R$ " + this.ServicosDiarias[i].Valor.Format(2);
                }
                this.cboServicoDiaria.AddItem(descricao, this.ServicosDiarias[i].Codigo, "");
                this.cboServicoCheckout.AddItem(descricao, this.ServicosDiarias[i].Codigo, "");
                this.cboServicoAcaoCheckout.AddItem(descricao, this.ServicosDiarias[i].Codigo, "");
            }
        }
    };
    C_HosCad_Angular.prototype.OnPesquisandoAnimal = function (s, e) {
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
    C_HosCad_Angular.prototype.OnSelecionouAtendimentoGrid = function (s, e) {
        try {
            var codAtendimento = ("" + e.data['Cod_Atendimento']).CNum();
            abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeAtendimento), "" + codAtendimento);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.OnValidandoProdutoGrade = function (s, e) {
        try {
            switch (e.fieldNameAlterado) {
                case "Quantidade":
                    if (e.item.Quantidade == null || e.valorAlterado == 0) {
                        e.item.Quantidade = e.oldRowValue.Qtde;
                        e.cancelar = true;
                        return;
                    }
                    e.item.Valor = ((e.item.Quantidade * e.item.Preco_Produto) - e.item.Desconto).Format(ValoresSismoura.CasasDecimaisValor);
                    break;
                case "Preco_Produto":
                    if (e.item.Preco_Produto == null || e.item.Preco_Produto == 0) {
                        e.item.Preco_Produto = e.oldRowValue.Preco_Produto;
                        e.cancelar = true;
                        return;
                    }
                    e.item.Valor = ((e.item.Quantidade * e.valorAlterado) - e.item.Desconto).Format(ValoresSismoura.CasasDecimaisValor);
                    break;
                case "Data_Execucao":
                    var dataHoraEntrada = this.GetDataHoraEntrada();
                    var dataHoraSaida = this.GetDataHoraPrevisaoSaida();
                    dataHoraSaida.setSeconds(0);
                    dataHoraEntrada.setSeconds(0);
                    var dataHoraAlterando = new Date(e.valorAlterado);
                    var hora = e.item.Hora_Execucao.getHours();
                    var minutos = e.item.Hora_Execucao.getMinutes();
                    dataHoraAlterando.setHours(hora);
                    dataHoraAlterando.setMinutes(minutos);
                    dataHoraAlterando.setSeconds(0);
                    if (dataHoraAlterando == null || (dataHoraAlterando < dataHoraEntrada || dataHoraAlterando > dataHoraSaida)) {
                        e.item.Data_Execucao = e.oldRowValue.Data_Execucao;
                        e.cancelar = true;
                        MostrarAlerta("A data não está dentro do período de estadia.");
                        //return;
                    }
                    else {
                        e.item.Data_Execucao = e.valorAlterado;
                    }
                    break;
                case "Hora_Execucao":
                    var dataHoraEntrada = this.GetDataHoraEntrada();
                    var dataHoraSaida = this.GetDataHoraPrevisaoSaida();
                    dataHoraSaida.setSeconds(0);
                    dataHoraEntrada.setSeconds(0);
                    var dataHoraAlterando = new Date(e.item.Data_Execucao);
                    var hora = e.valorAlterado.getHours();
                    var minutos = e.valorAlterado.getMinutes();
                    dataHoraAlterando.setHours(hora);
                    dataHoraAlterando.setMinutes(minutos);
                    dataHoraAlterando.setSeconds(0);
                    if (dataHoraAlterando == null || !(dataHoraAlterando.isBetween(dataHoraEntrada, dataHoraSaida, false))) {
                        e.item.Data_Execucao = e.oldRowValue.Data_Execucao;
                        e.cancelar = true;
                        MostrarAlerta("O Horário deve estar dentro do período de entrada e saída.");
                        //return;
                    }
                    else {
                        e.item.Data_Execucao = e.valorAlterado;
                    }
                    break;
                default:
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.GetDataHoraEntrada = function () {
        try {
            var data = this.txtDataEntrada.Date;
            var hora = this.txtHoraEntrada.textBoxHorario.GetText().split(':')[0].CNum();
            var minutos = this.txtHoraEntrada.textBoxHorario.GetText().split(':')[1].CNum();
            data.setHours(hora, minutos, 0, 0);
            return data;
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.GetDataHoraPrevisaoSaida = function () {
        try {
            var data = this.txtDataSaida.Date;
            //var hora: number = this.txtHoraCheckout.textBoxHorario.GetText().split(':')[0].CNum();
            //var minutos: number = this.txtHoraCheckout.textBoxHorario.GetText().split(':')[1].CNum();
            var hora = this.GetHorarioCheckout.split(':')[0].CNum();
            var minutos = this.GetHorarioCheckout.split(':')[1].CNum();
            data.setHours(hora, minutos, 0, 0);
            return data;
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.SetHoraData = function (data, isDataEntrada) {
        try {
            var data = data;
            var hora;
            var minutos;
            if (isDataEntrada) {
                hora = this.txtHoraEntrada.textBoxHorario.GetText().split(':')[0].CNum();
                minutos = this.txtHoraEntrada.textBoxHorario.GetText().split(':')[1].CNum();
            }
            else {
                hora = this.txtHoraCheckout.textBoxHorario.GetText().split(':')[0].CNum();
                minutos = this.txtHoraCheckout.textBoxHorario.GetText().split(':')[1].CNum();
            }
            data.setHours(hora, minutos, 0, 0);
            return data;
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.txtHoraEntrada.textBoxHorario.SetDate(this.DataServidor());
        this.txtLocalHospedagem.AddParametro("codEmpresa", ValoresSismoura.EmpresaPadraoUsuario.toString());
        this.LerParametrosURL();
        this.MostrarOcultarCamposAvaliacao();
        this.alterarCamposTipoHospedagem();
        this.cboTipoDiaria.Visible = false;
        if (!this.GetScope().calcularDescontoPDiaria) {
            this.GetScope().calcularDescontoPDiaria = $.proxy(this.calcularDescontoPDiaria, this);
            this.GetScope().$watch(function (scope) { return scope.DiariaCalculada.Desconto_Porcentagem; }, this.GetScope().calcularDescontoPDiaria);
        }
        if (!this.GetScope().calcularDescontoDiaria) {
            this.GetScope().calcularDescontoDiaria = $.proxy(this.calcularDescontoDiaria, this);
            this.GetScope().$watch(function (scope) { return scope.DiariaCalculada.Desconto; }, this.GetScope().calcularDescontoDiaria);
        }
    };
    C_HosCad_Angular.prototype.OnExcluindoServicoGrade = function (s, e) {
        if (!(this.Servicos || this.Servicos.length > 0)) {
            e.cancelar = true;
            return;
        }
        var codigoAtendimento = e.item["Atendimento"];
        var codServico = e.item["Servico"];
        var _contador = e.item["Item"];
        try {
            if (codigoAtendimento && codigoAtendimento > 0) {
                if (this.GetScope().Entity.Finalizado) {
                    MostrarAlerta("Não é possível excluir o serviço de uma hospedagem finalizada!");
                    e.cancelar = true;
                    return;
                }
                var parametros = {
                    codAtendimento: codigoAtendimento
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("IsAtendimentoPago", parametros);
                if (retorno) {
                    MostrarAlerta("Esse serviço já foi pago. Não é possível excluí-lo!");
                    e.cancelar = true;
                    return;
                }
                var parametros = {
                    codAtendimento: codigoAtendimento,
                    codServico: codServico
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("IsServicoConcluido", parametros);
                if (retorno) {
                    MostrarAlerta("O Atendimento desse serviço já foi concluido. Não é possível excluí-lo!");
                    e.cancelar = true;
                    return;
                }
            }
            var parametros = {
                Contador: _contador
            };
            if (_contador > 0) {
                MsgBoxJS("Deseja realmente excluir o serviço?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnMsgBoxEcluirServicoGrade, this), parametros);
                e.cancelar = true;
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.OnExcluindoProdutoGrade = function (s, e) {
        if (!(this.Produtos || this.Produtos.length > 0)) {
            e.cancelar = true;
            return;
        }
        var codigoAtendimento = e.item["Atendimento"];
        var codServico = e.item["Produto"];
        var _contador = e.item["Item"];
        try {
            if (codigoAtendimento && codigoAtendimento > 0) {
                if (this.GetScope().Entity.Finalizado) {
                    MostrarAlerta("Não é possível excluir o produto de uma hospedagem finalizada!");
                    e.cancelar = true;
                    return;
                }
                var parametros = {
                    codAtendimento: codigoAtendimento
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("IsAtendimentoPago", parametros);
                if (retorno) {
                    MostrarAlerta("Esse produto já foi pago. Não é possível excluí-lo!");
                    e.cancelar = true;
                    return;
                }
            }
            var parametros = {
                Contador: _contador
            };
            if (_contador > 0) {
                MsgBoxJS("Deseja realmente excluir o produto?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnMsgBoxEcluirProdutoGrade, this), parametros);
                e.cancelar = true;
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.OnMsgBoxEcluirServicoGrade = function (resultado) {
        try {
            if (resultado.Resultado == MsgBoxResult.No) {
                return;
            }
            var contador = resultado.Argument.Contador;
            var indexToRemove = -1;
            for (var i = 0; i < this.Servicos.length; i++) {
                if (this.Servicos[i].Item == contador) {
                    indexToRemove = i;
                    break;
                }
            }
            if (indexToRemove > -1) {
                this.Servicos.splice(indexToRemove, 1);
            }
            this.grdServicos.Grid.PreencherGrid(this.Servicos);
            this.grdServicos.Grid.Refresh();
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.OnMsgBoxEcluirProdutoGrade = function (resultado) {
        try {
            if (resultado.Resultado == MsgBoxResult.No) {
                return;
            }
            var contador = resultado.Argument.Contador;
            var indexToRemove = -1;
            for (var i = 0; i < this.Produtos.length; i++) {
                if (this.Produtos[i].Item == contador) {
                    indexToRemove = i;
                    break;
                }
            }
            if (indexToRemove > -1) {
                this.Produtos.splice(indexToRemove, 1);
            }
            this.grdProdutos.Grid.PreencherGrid(this.Produtos);
            this.grdProdutos.Grid.Refresh();
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.ValidarAdicionarServico = function (entidade) {
        if (this.IsHospedagemFinalizada()) {
            return false;
        }
        if (ValoresSismoura.ConfiguracoesPetshop.Permitir_Checkout_Hospedagem_Sem_Pagamento) {
            MostrarAlerta("Não será possível adicionar serviços, o sistema está operando em modo de homologação. Entre em contato com o suporte de TI.");
            return false;
        }
        if (entidade.Servico <= 0) {
            MostrarAlerta("Informe o serviço");
            return false;
        }
        if (!entidade.Data_Execucao) {
            MostrarAlerta("Informe a data do serviço");
            return false;
        }
        var dataServico = entidade.Data_Execucao.ToDate();
        dataServico.setHours(entidade.Hora_Servico.getHours(), entidade.Hora_Servico.getMinutes(), 0, 0);
        var dataEntrada = this.GetDataHoraEntrada();
        var dataSaida = this.GetDataHoraPrevisaoSaida();
        var isServicoNaData = false;
        if (dataServico.getTime() < dataEntrada.getTime() || dataServico.getTime() > dataSaida.getTime()) {
            MostrarAlerta("Informe a data do serviço dentro do período da hospedagem.");
            return false;
        }
        else {
            if (CNum(this.optTipoHospedagem.GetValue()) == 1 /* HOTEL */) {
                isServicoNaData = true;
            }
        }
        this.Diarias.forEach(function (x) {
            //A hora da diária não é informada, então eu uso a mesma hora do serviço, o que importa é o dia.
            var dia = x.Dia_Servico.ToDate();
            dia.setHours(dataServico.getHours(), dataServico.getMinutes(), 0, 0);
            if (dia.ToDate().getTime() == dataServico.ToDate().getTime()) {
                isServicoNaData = true;
                return;
            }
        });
        if (!isServicoNaData) {
            MostrarAlerta("Informe a data do serviço dentro do período da hospedagem.");
            return false;
        }
        if (!(entidade.Valor > 0)) {
            MostrarAlerta("Informe o valor do serviço");
            return false;
        }
        if (!(entidade.Qtde > 0)) {
            MostrarAlerta("Informe a quantidade do serviço");
            return false;
        }
        if (!(entidade.Profissional > 0)) {
            MostrarAlerta("Informe o profissional do serviço");
            return false;
        }
        return true;
    };
    C_HosCad_Angular.prototype.LimparCamposServico = function () {
        this.txtServico.Limpar();
        this.cboListaPreco.LimparSelecao();
        this.txtValorUnitario.SetText("0");
        this.txtQuantidadeServico.SetText("1");
        this.txtDesconto.SetText("0");
        this.txtDescontoPorcent.SetText("0");
        this.lblTotal.SetText("0");
        this.txtProfissional.Limpar();
        this.txtObservacaoServico.SetText("");
        this.chkConcluido.Checked = false;
    };
    C_HosCad_Angular.prototype.LerParametrosURL = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.QueryString.CodigoReserva && CNum(_this.QueryString.CodigoReserva)) {
                try {
                    _this.hdnReserva.value = _this.QueryString.CodigoReserva;
                    if (_this.hdnReserva && _this.hdnReserva.value.CNum() > 0) {
                        var reserva;
                        var parametros = {
                            codReserva: _this.hdnReserva.value.CNum()
                        };
                        reserva = _this.ExecutarFuncaoServerSideSynch("GetReservaByCodigo", parametros);
                        if (reserva && reserva.Cancelada) {
                            MostrarAlerta("A reserva foi cancelada. Não será possível prosseguir com o check-in");
                            _this.LimparParametrosURL();
                            _this.QueryString.CodigoReserva = null;
                            _this.Limpar();
                            return;
                        }
                        if (reserva && reserva.Hospedagem == 0) {
                            var entidade = _this.GetScope().Entity;
                            entidade.Codigo_Reserva = reserva.Codigo;
                            entidade.Empresa = reserva.Empresa;
                            entidade.Local = reserva.Local;
                            entidade.Data_Entrada = ConvertToDate(reserva.Data_Entrada);
                            entidade.Data_Saida = ConvertToDate(reserva.Data_Saida);
                            entidade.Observacao = reserva.Observacao;
                            entidade.Baia = reserva.Baia;
                            entidade.Animal = reserva.Animal;
                            entidade.Proprietario = reserva.Proprietario;
                            entidade.Tipo_Hospedagem = reserva.Tipo_Hospedagem;
                            entidade.DiasSemana = reserva.DiasSemana;
                            entidade.Profissional_CheckList = reserva.Profissional_CheckList;
                            entidade.CheckList = reserva.CheckList;
                            entidade.CheckListCodigo = reserva.CheckListCodigo;
                            entidade.Checklist_Itens = reserva.Checklist_Itens;
                            entidade.Assinatura = reserva.Assinatura;
                            entidade.isImportandoReserva = true;
                            if (reserva.Tipo_Hospedagem == 2 /* DAYCARE */) {
                                entidade.Tipo_Diaria = 1 /* MENSAL */;
                            }
                            var parametros = {
                                codReserva: reserva.Codigo
                            };
                            var infoAdicionais = _this.ExecutarFuncaoServerSideSynch("GetInformacoesAdicionaisReserva", parametros);
                            if (infoAdicionais) {
                                _this.Atendimentos = [];
                                if (infoAdicionais.Atendimentos && infoAdicionais.Atendimentos.length > 0) {
                                    _this.Atendimentos = infoAdicionais.Atendimentos;
                                    _this.grdAtendimentos.PreencherGrid(_this.Atendimentos);
                                }
                            }
                            _this.RefreshAngular();
                            _this.grdCheckListItens.PreencherGrid(reserva.Checklist_Itens);
                            _this.cboEmpresa.SetValue(reserva.Empresa);
                            _this.optTipoHospedagem.SetValue(reserva.Tipo_Hospedagem.toString());
                            if (reserva.Animal > 0) {
                                _this.txtPet.TextBoxAnimal.Procurar(reserva.Animal.toString());
                            }
                            if (reserva.Proprietario > 0) {
                                _this.txtPet.TextBoxProprietario.Procurar(reserva.Proprietario.toString());
                            }
                            _this.txtLocalHospedagem.Procurar(reserva.Local.toString());
                            _this.txtDataEntrada.Date = ConvertToDate(reserva.Data_Entrada);
                            _this.txtDataSaida.Date = ConvertToDate(reserva.Data_Saida);
                            if (reserva.Observacao != null) {
                                _this.txtObservacao.SetText(reserva.Observacao);
                            }
                            _this.txtUsuarioEntrada.Procurar(reserva.Funcionario.toString());
                            _this.PreencherBaias(reserva.Local);
                            _this.cboBaia.Combo.SetValue(reserva.Baia);
                            _this.lstSemana.Visible = false;
                            if (entidade.Tipo_Hospedagem == 2 /* DAYCARE */) {
                                var dias = [];
                                entidade.DiasSemana.forEach(function (x) {
                                    dias.push(x.toString());
                                });
                                _this.lstSemana.Visible = true;
                                _this.lstSemana.btnDesmarcar.DoClick();
                                _this.lstSemana.SetValues(dias);
                            }
                            _this.AtualizarLabelQtdeDias();
                            _this.CarregarServicosVinculadosBaias();
                            _this.Diarias = reserva.Diarias;
                            _this.grdDiarias.Grid.PreencherGrid(_this.Diarias);
                            _this.habilitar(false);
                            _this.QueryString.CodigoReserva = null;
                        }
                        else {
                            _this.txtCodigo.Procurar(reserva.Hospedagem.toString());
                            _this.QueryString.CodigoReserva = null;
                        }
                    }
                }
                catch (ex) {
                    LogarException(ex);
                }
            }
            else if (_this.QueryString.CodigoHospedagem && CNum(_this.QueryString.CodigoHospedagem)) {
                _this.txtCodigo.Procurar(_this.QueryString.CodigoHospedagem);
                _this.QueryString.CodigoHospedagem = null;
            }
        }, 700);
    };
    C_HosCad_Angular.prototype.onMudouEmpresa = function (s, e) {
        this.txtLocalHospedagem.LimparParametros();
        this.txtLocalHospedagem.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
        this.txtLocalHospedagem.Limpar();
        this.Baias = [];
        this.cboBaia.Combo.ClearItems();
    };
    C_HosCad_Angular.prototype.OnDepoisProcuraLocal = function (s, e) {
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
                    this.cboBaia.Combo.ClearItems();
                    return;
                }
                var local = this.ExecutarFuncaoServerSideSynch("GetLocal", parametros);
                if (!(local.Empresa == codEmpresa)) {
                    MostrarAlerta("O Local não pertence a empresa selecionada.");
                    this.txtLocalHospedagem.Limpar();
                    this.Baias = [];
                    this.cboBaia.Combo.ClearItems();
                    return;
                }
                var localHosp = this.optTipoHospedagem.GetValue().CNum();
                if (local.Tipo_Hospedagem != localHosp) {
                    MostrarAlerta("O Local informado não pertence ao tipo de hospedagem selecionada.");
                    this.txtLocalHospedagem.Limpar();
                    this.Baias = [];
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
    C_HosCad_Angular.prototype.onAdicionarDiariaAvulsaDaycare = function (s, e) {
        e.processOnServer = false;
        try {
            if (!this.podeAdicionarDiariaAvulsa()) {
                return;
            }
            var parametros = {
                dataDiaria: this.txtDataDiaria.Date.ToDate(),
                codServicoAplicar: this.cboServicoDiaria.GetValue(),
                codProfissional: this.GetProfissionalDiaria.Codigo,
                diariasGradeJSON: JSON.stringify(this.Diarias),
                codHospedagem: this.txtCodigo.GetText().CNum(),
                descontoP: this.DiariaCalculada.Desconto_Porcentagem
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("AdicionarDiariaAvulsaDayCare", parametros);
            if (retorno && retorno.length > 0) {
                this.grdDiarias.Grid.PreencherGrid([]);
                this.Diarias = retorno;
                this.grdDiarias.Grid.PreencherGrid(retorno);
            }
            this.LimparCamposDesconto();
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.onAdicionarDiaria = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.IsHospedagemFinalizada()) {
                return;
            }
            if (!this.validarAdicionarDiaria()) {
                return;
            }
            if (!this.podeAdicionarDiaria(0, this.cboServicoDiaria.GetValue(), this.GetProfissionalDiaria.Codigo, this.GetDataHoraEntrada(), false)) {
                return;
            }
            if (this.optTipoHospedagem.GetValue().CNum() == 1 /* HOTEL */) {
                this.adicionarDiariaHotel();
            }
            else {
                this.adicionarDiariaDayCare();
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.adicionarDiariaHotel = function () {
        try {
            this.grdDiarias.Grid.PreencherGrid([]);
            var parametros = {
                codServicoAplicar: this.cboServicoDiaria.GetValue(),
                codHospedagem: this.txtCodigo.GetText().CNum(),
                diariasJSON: JSON.stringify(this.Diarias),
                dataInicial: this.txtDataEntrada.Date,
                codProfissional: this.GetProfissionalDiaria.Codigo,
                isDiariaExtendidaCheckout: false,
                quantidadeServico: 1
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("AdicionarDiaria", parametros);
            this.Diarias = retorno;
            this.grdDiarias.Grid.PreencherGrid(retorno);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.adicionarDiariaDayCare = function () {
        var parametros = {
            dataInicial: this.txtDataEntrada.Date,
            dataFinal: this.txtDataSaida.Date,
            codServicoAplicar: this.cboServicoDiaria.GetValue(),
            codProfissional: this.GetProfissionalDiaria.Codigo,
            aplicarTodos: true,
            diariasGradeJSON: JSON.stringify(this.Diarias),
            codHospedagem: this.txtCodigo.GetText().CNum(),
            descontoP: this.DiariaCalculada.Desconto_Porcentagem,
            diasSemana: this.lstSemana.SelectedValues
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("AdicionarDiariaDayCare", parametros);
        if (retorno && retorno.length > 0) {
            this.grdDiarias.Grid.PreencherGrid([]);
            this.Diarias = retorno;
            this.grdDiarias.Grid.PreencherGrid(retorno);
        }
    };
    C_HosCad_Angular.prototype.podeAdicionarDiaria = function (codAtendimento, codServico, codProfissional, dataExecucao, isCheckout) {
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
                var qtdeDiarias = this.GetNumeroDiariasGerar(isCheckout);
                if (this.Diarias.length > 0 && this.Diarias.length == qtdeDiarias && !isCheckout) {
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
    C_HosCad_Angular.prototype.GetNumeroDiariasGerar = function (isCheckout) {
        try {
            var diasSemana = [];
            if (CNum(this.optTipoHospedagem.GetValue()) == 2 /* DAYCARE */
                && this.cboTipoDiaria.GetValue() != 2 /* AVULSA */) {
                diasSemana = this.lstSemana.SelectedValues;
            }
            var horaCheckin = this.txtHoraEntrada.textBoxHorario.GetText();
            var horaCheckout = this.txtHoraCheckout.textBoxHorario.GetText();
            var dataSaida = this.GetDataHoraPrevisaoSaida();
            if (isCheckout) {
                horaCheckout = this.DataRealizandoCheckout.FormataHoraSismoura();
                dataSaida = this.DataRealizandoCheckout;
            }
            var parametros = {
                dataEntrada: this.GetDataHoraEntrada(),
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
    C_HosCad_Angular.prototype.GetNumeroDiariasGerarDaycare = function () {
        try {
            var qtdeDiarias = 0;
            var diasSemana = [];
            if (CNum(this.optTipoHospedagem.GetValue()) == 2 /* DAYCARE */
                && this.cboTipoDiaria.GetValue() != 2 /* AVULSA */) {
                diasSemana = this.lstSemana.SelectedValues;
                var parametros = {
                    dataEntrada: this.txtDataEntrada.Date,
                    dataSaida: this.txtDataSaida.Date,
                    diasSemana: diasSemana
                };
                qtdeDiarias = this.ExecutarFuncaoServerSideSynch("GetQuantidadeDiariasDayCare", parametros);
            }
            else {
                qtdeDiarias = 0;
                if (this.Diarias) {
                    qtdeDiarias = this.Diarias.length;
                }
            }
            return qtdeDiarias;
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.onRecalcularDias = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.IsHospedagemFinalizada()) {
                return;
            }
            if (this.txtCodigo.GetText().CNum() == 0 && this.hdnReserva.value.CNum() == 0) {
                this.Diarias = [];
            }
            if (this.optTipoHospedagem.GetValue().CNum() == 1 /* HOTEL */) {
                this.RecalcularDiariasHotel();
            }
            else {
                this.RecalcularDiariasDayCare();
            }
            this.cboServicoDiaria.LimparSelecao();
            this.LimparCamposDesconto();
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.RecalcularDiariasHotel = function () {
        try {
            if (!this.validarAdicionarDiaria()) {
                return;
            }
            if (!this.podeAdicionarDiaria(0, this.cboServicoDiaria.GetValue(), this.GetProfissionalDiaria.Codigo, this.GetDataHoraEntrada(), false)) {
                return;
            }
            this.grdDiarias.Grid.PreencherGrid([]);
            var horaCheckin = this.txtHoraEntrada.textBoxHorario.GetText();
            var horaCheckout = this.txtHoraCheckout.textBoxHorario.GetText();
            var parametros = {
                dataInicial: this.GetDataHoraEntrada(),
                horaCheckin: horaCheckin,
                horaCheckout: horaCheckout,
                dataFinal: this.GetDataHoraPrevisaoSaida(),
                codServicoAplicar: this.cboServicoDiaria.GetValue(),
                codProfissional: this.GetProfissionalDiaria.Codigo,
                aplicarTodos: true,
                diariasJSON: JSON.stringify(this.Diarias),
                descontoP: this.DiariaCalculada.Desconto_Porcentagem,
                codFuncionario: this.txtUsuarioEntrada.GetText().CNum(),
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
    C_HosCad_Angular.prototype.RecalcularDiariasDayCare = function () {
        try {
            if (!this.validarAdicionarDiaria()) {
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
            this.grdDiarias.Grid.PreencherGrid([]);
            var parametros = {
                dataInicial: this.GetDataHoraEntrada(),
                dataFinal: this.GetDataHoraPrevisaoSaida(),
                codServicoAplicar: this.cboServicoDiaria.GetValue(),
                codProfissional: this.GetProfissionalDiaria.Codigo,
                aplicarTodos: true,
                diariasJSON: JSON.stringify(this.Diarias),
                codHospedagem: this.txtCodigo.GetText().CNum(),
                descontoP: this.DiariaCalculada.Desconto_Porcentagem,
                diasSemana: this.lstSemana.SelectedValues
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("RecalcularDiariasDayCare2", parametros);
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
    C_HosCad_Angular.prototype.validarAdicionarDiaria = function () {
        if (!this.GetProfissionalDiaria || this.GetProfissionalDiaria.Codigo <= 0) {
            MostrarAlerta("O profissional utilizado para lançar as diárias não foi encontrado. Informe o parâmetro na tela de configurações.");
            return false;
        }
        if (this.txtDataEntrada.Date == null || this.txtDataEntrada.Date == undefined) {
            MostrarAlerta("Informe a data de entrada.");
            return false;
        }
        if (this.txtDataSaida.Date == null || this.txtDataSaida.Date == undefined) {
            MostrarAlerta("Informe a data de saída.");
            return false;
        }
        var dataInicial = this.GetDataHoraEntrada();
        var dataFinal = this.GetDataHoraPrevisaoSaida();
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
    C_HosCad_Angular.prototype.OnDepoisLimpar = function (Entity) {
        var _this = this;
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.DataRealizandoCheckout = undefined;
        this.ExecutarCheckoutDepoisGravar = false;
        this.enviarEmailCheckout = false;
        this.validouInformacoesHospedagem = false;
        this.txtPet.TextBoxProprietario.Limpar();
        this.txtPet.TextBoxAnimal.Limpar();
        this.lblStatus.LabelComponente.style.color = "black";
        this.lblStatus.Visible = false;
        this.btnVacinas.Visible = false;
        this.txtDataEntrada.Date = this.DataServidor();
        this.grdAgendamentos.PreencherGrid([]);
        this.lblDataCadastro.Text = this.DataServidor().FormataData();
        this.hdnReserva.value = "0";
        this.hdnAgendamentoVisible.value = "0";
        this.retornoComplementosItemServico = null;
        this.txtLocalHospedagem.Limpar();
        this.Baias = [];
        this.cboBaia.Combo.ClearItems();
        this.txtObservacao.Limpar();
        this.txtHoraEntrada.textBoxHorario.SetDate(this.DataServidor());
        this.ServicosDiarias = [];
        this.cboServicoDiaria.Combo.ClearItems();
        this.cboServicoDiaria.LimparSelecao();
        this.Diarias = [];
        this.grdDiarias.Grid.PreencherGrid([]);
        this.AtualizarLabelQtdeDias();
        this.txtDataSaida.Date = this.DataServidor().addDays(1);
        if (this.cboQuantidadeMesesDaycare) {
            this.cboQuantidadeMesesDaycare.SetValue(1);
        }
        ////ABA Servicos.
        this.txtServico.Limpar;
        this.cboServicoDiaria.LimparSelecao();
        this.Servicos = [];
        this.grdServicos.Grid.PreencherGrid([]);
        this.LimparCamposServico();
        this.DiariaCalculada = {};
        this.verificadoAutorizacaoDescontoHospedagem = false;
        ////ABA Saida Checkout
        this.cboServicoCheckout.LimparSelecao();
        this.cboServicoCheckout.Combo.ClearItems();
        this.txtFuncionarioCheckout.Limpar();
        this.txtHoraCheckout.textBoxHorario.SetText(this.GetHorarioCheckout);
        if (this.btnCheckout) {
            this.btnCheckout.Visible = false;
        }
        //// ABA Produtos
        this.LimparCamposProdutos();
        this.Produtos = [];
        if (this.grdProdutos) {
            this.grdProdutos.Grid.PreencherGrid([]);
        }
        this.grdProdutosConsumidos.Grid.PreencherGrid([]);
        //if (this.ProdutosConsumidos) { this.ProdutosConsumidos = []; }
        setTimeout(function () {
            Entity.Tipo_Hospedagem = 1 /* HOTEL */;
            Entity.Data_Entrada = _this.DataServidor();
            Entity.Data_Saida = _this.DataServidor().addDays(1);
            Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
            Entity.Usuario_Cadastro = ValoresSismoura.UsuarioLogado;
            Entity.Usuario_Entrada = ValoresSismoura.UsuarioLogado;
        }, 100);
        //Entity.Usuario_Saida = ValoresSismoura.UsuarioLogado;
        this.Diarias = [];
        this.Baias = [];
        if (this.sgnCheckList) {
            this.sgnCheckList.limpar();
        }
        this.optTipoHospedagem.SetValue("" + 1);
        this.lstSemana.Visible = false;
        this.LimparCamposAvaliacaoAnimal();
        this.grdAtendimentos.PreencherGrid([]);
        this.cboTipoDiaria.SetValue(0 /* NENHUMA */);
        this.alterarCamposTipoHospedagem();
        this.mudarTipoDiaria();
        this.txtLocalHospedagem.LimparParametros();
        this.txtLocalHospedagem.AddParametro("codEmpresa", ValoresSismoura.EmpresaPadraoUsuario.toString());
        //Aba Avaliação
        this.limparCamposFichaAvaliacao();
        this.DadosAdicionaisPET = {};
        this.RefreshAngular();
        setTimeout(function () {
            _this.habilitar(true);
        }, 100);
    };
    C_HosCad_Angular.prototype.LimparCamposProdutos = function () {
        this.txtProduto.Limpar();
        this.cboListaPrecoProduto.LimparSelecao();
        this.txtValorUnitarioProduto.Limpar();
        this.txtQuantidadeProduto.SetText("1");
        this.txtDescontoProduto.Limpar();
        this.txtDescontoPorcentProduto.Limpar();
        this.lblTotalProduto.Limpar();
        this.txtDataProduto.Date = this.DataServidor();
        this.txtHoraProduto.textBoxHorario.SetDate(this.DataServidor());
        this.txtProfissionalProduto.Limpar();
        this.txtObservacaoProduto.Limpar();
        this.chkCobrado.Checked = false;
    };
    C_HosCad_Angular.prototype.OnAntesGravar = function () {
        this.TratarEntidadeAntesGravar();
        if (this.txtCodigo.GetText().CNum() == 0) {
            if (!this.validouInformacoesHospedagem) {
                this.validarInformacoesAntesGravar();
                return;
            }
        }
        else {
            if (this.GetScope().Entity && this.GetScope().Entity.Cancelada) {
                MostrarAlerta("A hospedagem está cancelada. Não será possível continuar com a operação.");
                return;
            }
        }
        return _super.prototype.OnAntesGravar.call(this);
    };
    C_HosCad_Angular.prototype.LimparDiarias = function () {
        this.Diarias = [];
        this.grdDiarias.Grid.PreencherGrid([]);
    };
    C_HosCad_Angular.prototype.TratarEntidadeAntesGravar = function () {
        try {
            var entidade = this.GetScope().Entity;
            entidade.Data_Entrada = this.GetDataHoraEntrada().ToDate();
            entidade.Data_Saida = this.GetDataHoraPrevisaoSaida().ToDate();
            entidade.Baia = this.cboBaia.Combo.GetValue();
            entidade.Servico_Hospesdagem = ValoresSismoura.ConfiguracoesPetshop.Hospedagem_Codigo;
            if (this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */) {
                entidade.Tipo_Diaria = this.cboTipoDiaria.GetValue();
            }
            if (entidade.Codigo == 0) {
                entidade.Data_Cadastro = this.DataServidor();
            }
            entidade.DiasSemana = [];
            if (this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */) {
                entidade.DiasSemana = this.RetornarDiasSemana();
            }
            entidade.Servicos = [];
            entidade.Produtos = [];
            entidade.ProdutosConsumidos = [];
            var usuarioCheckin = this.txtUsuarioEntrada.GetText().CNum();
            entidade.Servicos.push.apply(entidade.Servicos, this.Diarias);
            entidade.Servicos.push.apply(entidade.Servicos, this.Servicos);
            entidade.Produtos.push.apply(entidade.Produtos, this.Produtos);
            entidade.ProdutosConsumidos.push.apply(entidade.ProdutosConsumidos, this.ProdutosConsumidos);
            if (entidade.DiasHospedagem) {
                for (var i = 0; i < entidade.DiasHospedagem.length; i++) {
                    entidade.DiasHospedagem[i].Dia = entidade.DiasHospedagem[i].Dia.ToDate();
                    entidade.DiasHospedagem[i].Data_Inicio = entidade.DiasHospedagem[i].Data_Inicio.ToDate();
                    entidade.DiasHospedagem[i].Data_Fim = entidade.DiasHospedagem[i].Data_Fim.ToDate();
                }
            }
            //Informações Adicionais do PET. Solicitado para ser gravado pela hospedagem, pois na Petz não é utilizado o cadastro de Animal.
            if (!entidade.AnimalEntity)
                entidade.AnimalEntity = {};
            if (this.DadosAdicionaisPET) {
                entidade.AnimalEntity.Veterinario_Responsavel = this.DadosAdicionaisPET.vetResponsavel;
                entidade.AnimalEntity.Fone_Veterinario_Responsavel = this.DadosAdicionaisPET.foneVetResponsavel;
                entidade.AnimalEntity.DDD_Veterinario_Responsavel = this.DadosAdicionaisPET.dddFoneVetResponsavel;
                entidade.AnimalEntity.Restricao_Alimentar = this.DadosAdicionaisPET.restricaoAlimentar == "1" ? true : false;
                entidade.AnimalEntity.Restricao_Alimentar_Text = this.DadosAdicionaisPET.restricaoAlimentarTexto;
                entidade.AnimalEntity.Racao_Utilizada = this.DadosAdicionaisPET.racaoPET;
                entidade.AnimalEntity.Quantidade_Racao = this.DadosAdicionaisPET.quantidadeRacao;
                entidade.AnimalEntity.Carteira_Vacinacao = this.DadosAdicionaisPET.carteiraVacinacao == "1" ? true : false;
                entidade.AnimalEntity.Atestado = this.DadosAdicionaisPET.atestado == "1" ? true : false;
                entidade.AnimalEntity.Castrado = this.DadosAdicionaisPET.castrado == "1" ? true : false;
            }
            this.GetScope().Entity = entidade;
            this.RefreshAngular();
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.RetornarDiasSemana = function () {
        var retorno = [];
        var parametros = {
            diariasJSON: JSON.stringify(this.Diarias)
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetDiasSemanaDiarias", parametros);
        return retorno;
    };
    C_HosCad_Angular.prototype.OnMudouCodigo = function (s, e) {
        var entidade = this.GetScope().Entity;
        this.PreencherEntidade(this.txtCodigo.GetText());
        entidade.Codigo = this.txtCodigo.GetText().CNum();
    };
    C_HosCad_Angular.prototype.OnDepoisBuscarExistente = function (Entidade) {
        var _this = this;
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        Entidade.Avaliacao_Animal = {};
        setTimeout(function () {
            _this.PreencherInformacoesTela(Entidade);
        }, 100);
    };
    C_HosCad_Angular.prototype.OnDepoisGravar = function () {
        var _this = this;
        setTimeout(function () {
            _this.PreencherInformacoesTela(_this.GetScope().Entity);
            if (_this.ExecutarCheckoutDepoisGravar) {
                _this.CheckOut();
                _this.ExecutarCheckoutDepoisGravar = false;
            }
            if (_this.enviarEmailCheckout) {
                _this.EnviarEmailHospedagem(1 /* enCheckout */);
                _this.enviarEmailCheckout = false;
            }
            _this.LimparParametrosURL();
        }, 100);
        return _super.prototype.OnDepoisGravar.call(this);
    };
    C_HosCad_Angular.prototype.OnAntesSetEntidade = function (entidade) {
        _super.prototype.OnAntesSetEntidade.call(this, entidade);
        if (entidade.Entidade && entidade.Entidade.Codigo > 0) {
            entidade.Entidade.Data_Cadastro = entidade.Entidade.Data_Cadastro.ToDate();
            entidade.Entidade.Data_Entrada = entidade.Entidade.Data_Entrada.ToDate();
            entidade.Entidade.Data_Saida = entidade.Entidade.Data_Saida.ToDate();
        }
    };
    C_HosCad_Angular.prototype.OnGravouSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
    };
    C_HosCad_Angular.prototype.OnExcluiuSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
    };
    C_HosCad_Angular.prototype.PreencherInformacoesTela = function (entidade) {
        var _this = this;
        if (this.txtCodigo.GetText().CNum() <= 0) {
            return;
        }
        var parametros = {
            codHospedagem: entidade.Codigo,
            codLocal: entidade.Local
        };
        var InformacoesAdicionais = this.ExecutarFuncaoServerSideSynch("GetInformacoesAdicionaisHospedagem", parametros);
        this.Servicos = InformacoesAdicionais.Servicos;
        this.Produtos = InformacoesAdicionais.Produtos;
        this.Diarias = InformacoesAdicionais.Diarias;
        this.Baias = InformacoesAdicionais.Baias;
        this.Atendimentos = InformacoesAdicionais.Atendimentos;
        this.ServicosDiarias = InformacoesAdicionais.ServicosHospedagem;
        this.ServicosCarregadosBaia = InformacoesAdicionais.ServicosHospedagem;
        this.ProdutosConsumidos = InformacoesAdicionais.ProdutosConsumidos;
        this.FichasAvaliacao = InformacoesAdicionais.FichasAvaliacao;
        this.lstSemana.Visible = false;
        if (entidade.Tipo_Hospedagem == 2 /* DAYCARE */) {
            this.lstSemana.Visible = true;
            this.lstSemana.LimparSelecao();
            this.lstSemana.SetValues(InformacoesAdicionais.DiasSemana);
            this.DiasSemana = this.lstSemana.GetValues();
        }
        entidade.Checklist_Itens = InformacoesAdicionais.CheckList.Itens;
        this.grdCheckListItens.PreencherGrid(entidade.Checklist_Itens);
        if (this.Diarias) {
            this.grdDiarias.Grid.PreencherGrid(this.Diarias);
        }
        if (this.Servicos) {
            this.grdServicos.Grid.PreencherGrid(this.Servicos);
        }
        if (this.ProdutosConsumidos) {
            this.grdProdutosConsumidos.Grid.PreencherGrid(this.ProdutosConsumidos);
        }
        if (this.Produtos) {
            this.grdProdutos.Grid.PreencherGrid(this.Produtos);
        }
        if (entidade.Baia) {
            this.cboBaia.SetValue(entidade.Baia);
        }
        if (this.Atendimentos) {
            this.grdAtendimentos.PreencherGrid(this.Atendimentos);
        }
        if (this.FichasAvaliacao) {
            this.grdAvaliacoesRealizadas.PreencherGrid(this.FichasAvaliacao);
        }
        if (entidade.Codigo > 0) {
            this.txtHoraEntrada.textBoxHorario.SetText(entidade.Data_Entrada.ToDate().FormataHoraSismoura());
            this.txtHoraCheckout.textBoxHorario.SetText(entidade.Data_Saida.ToDate().FormataHoraSismoura());
        }
        else {
            var CheckInHorario = this.ExecutarFuncaoServerSideSynch("GetCheckInHorario", undefined);
            if (CheckInHorario) {
                this.txtHoraEntrada.textBoxHorario.SetText(CheckInHorario);
            }
            var CheckOutHorario = this.ExecutarFuncaoServerSideSynch("GetCheckOutHorario", undefined);
            if (CheckOutHorario) {
                this.txtHoraCheckout.textBoxHorario.SetText(CheckOutHorario);
            }
        }
        entidade.Data_Cadastro = entidade.Data_Cadastro.ToDate();
        entidade.Data_Entrada = entidade.Data_Entrada.ToDate();
        entidade.Data_Saida = entidade.Data_Saida.ToDate();
        setTimeout(function () {
            if (entidade.Data_Cadastro) {
                _this.lblDataCadastro.Text = entidade.Data_Cadastro.ToDate().FormataData();
            }
            _this.AtualizarLabelStatus(_this.GetScope().Entity);
            if (_this.btnCheckout) {
                _this.btnCheckout.Visible = !entidade.Finalizado;
            }
            if (_this.GetScope().Entity.Tipo_Hospedagem == 2 /* DAYCARE */) {
                _this.mudarTipoDiaria();
            }
            _this.PreencherServicosHospedagem(_this.ServicosDiarias);
            _this.AtualizarLabelStatus(_this.GetScope().Entity);
            _this.AtualizarLabelQtdeDias();
            _this.alterarCamposTipoHospedagem();
            var parametros = {
                codHospedagem: entidade.Codigo
            };
            var retorno = _this.ExecutarFuncaoServerSideSynch("PETZ_AtendimentosHospedagemEnviadoZanthus", parametros);
            if (retorno) {
                _this.chkCortesia.Enabled = false;
            }
            else {
                _this.chkCortesia.Enabled = true;
            }
            _this.habilitar(false);
        }, 100);
        //Informações Adicionais do PET. Solicitado para ser gravado pela hospedagem, pois na Petz não é utilizado o cadastro de Animal.
        if (entidade.AnimalEntity && entidade.AnimalEntity.Codigo == this.txtPet.TextBoxAnimal.GetText().CNum()) {
            this.DadosAdicionaisPET.vetResponsavel = entidade.AnimalEntity.Veterinario_Responsavel;
            this.DadosAdicionaisPET.foneVetResponsavel = entidade.AnimalEntity.Fone_Veterinario_Responsavel;
            this.DadosAdicionaisPET.dddFoneVetResponsavel = entidade.AnimalEntity.DDD_Veterinario_Responsavel;
            this.DadosAdicionaisPET.restricaoAlimentar = entidade.AnimalEntity.Restricao_Alimentar ? '1' : '2';
            this.DadosAdicionaisPET.restricaoAlimentarTexto = entidade.AnimalEntity.Restricao_Alimentar_Text;
            this.DadosAdicionaisPET.racaoPET = entidade.AnimalEntity.Racao_Utilizada;
            this.DadosAdicionaisPET.quantidadeRacao = entidade.AnimalEntity.Quantidade_Racao;
            this.DadosAdicionaisPET.carteiraVacinacao = entidade.AnimalEntity.Carteira_Vacinacao ? '1' : '2';
            this.DadosAdicionaisPET.atestado = entidade.AnimalEntity.Atestado ? '1' : '2';
            this.DadosAdicionaisPET.castrado = entidade.AnimalEntity.Castrado ? '1' : '2';
        }
        this.GetScope().Entity = entidade;
        this.RefreshAngular();
    };
    C_HosCad_Angular.prototype.OnCboListaPreco_comboBoxChange = function (s, e) {
        try {
            if (this.cboListaPreco && this.cboListaPreco.Combo && this.ListasPrecosServicos) {
                if (this.cboListaPreco.Combo.GetSelectedIndex() >= 0 && this.cboListaPreco.Combo.GetSelectedIndex() < this.ListasPrecosServicos.length) {
                    var valorUnitario = this.ListasPrecosServicos[this.cboListaPreco.Combo.GetSelectedIndex()].Preco;
                    this.txtValorUnitario.SetText(valorUnitario.Format(ValoresSismoura.CasasDecimaisValor));
                    this.Servico.Valor = valorUnitario;
                    this.CalcularTotalServico();
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.OnCboListaPrecoProduto_comboBoxChange = function (s, e) {
        try {
            if (this.cboListaPrecoProduto && this.cboListaPrecoProduto.Combo && this.ListasPrecosProdutos) {
                if (this.cboListaPrecoProduto.Combo.GetSelectedIndex() >= 0 && this.cboListaPrecoProduto.Combo.GetSelectedIndex() < this.ListasPrecosProdutos.length) {
                    this.txtValorUnitarioProduto.SetText(this.ListasPrecosProdutos[this.cboListaPrecoProduto.Combo.GetSelectedIndex()].Preco.Format(ValoresSismoura.CasasDecimaisValor));
                    this.CalcularTotalProduto();
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.OnCboListaPrecoGotFocus = function (s, e) {
        if (this.cboListaPreco && this.cboListaPreco.Combo) {
            this.cboListaPreco.Combo.ShowDropDown();
        }
    };
    C_HosCad_Angular.prototype.OnCboListaPrecoProdutoGotFocus = function (s, e) {
        if (this.cboListaPrecoProduto && this.cboListaPrecoProduto.Combo) {
            this.cboListaPrecoProduto.Combo.ShowDropDown();
        }
    };
    C_HosCad_Angular.prototype.CalcularTotalServico = function () {
        try {
            var total = ((this.txtQuantidadeServico.GetText().CNum() * this.txtValorUnitario.GetText().CNum()) - this.txtDesconto.GetText().CNum()).Format(ValoresSismoura.CasasDecimaisValor);
            this.lblTotal.SetText(total);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.OnTxtServicoProcurou = function (s, e) {
        try {
            if (this.txtServico.GetText().CNum() <= 0) {
                return;
            }
            //servicoEntity.Qtde = 1;
            var parametros;
            parametros = {
                codProduto: this.txtServico.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue()
            };
            this.ListasPrecosServicos = this.ExecutarFuncaoServerSideSynch("GetListasPrecos", parametros);
            if (this.cboListaPreco && this.cboListaPreco.Combo) {
                this.cboListaPreco.Combo.ClearItems();
                for (var x = 0; x < this.ListasPrecosServicos.length; x++) {
                    this.cboListaPreco.Combo.AddItem(this.ListasPrecosServicos[x].Descricao, this.ListasPrecosServicos[x].Codigo, "");
                }
                if (this.cboListaPreco.Combo.GetItemCount() == 1) {
                    this.cboListaPreco.Combo.SetSelectedIndex(0);
                    //this.txtValorUnitario.SetText(this.ListasPrecosServicos[0].Preco.Format(ValoresSismoura.CasasDecimaisValor));
                    var valorUnitario = this.ListasPrecosServicos[this.cboListaPreco.Combo.GetSelectedIndex()].Preco;
                    this.txtValorUnitario.SetText(valorUnitario.Format(ValoresSismoura.CasasDecimaisValor));
                    this.Servico.Valor = valorUnitario;
                }
                else {
                    this.cboListaPreco.Combo.SetText("");
                    this.txtValorUnitario.SetText("0".CNum().Format(ValoresSismoura.CasasDecimaisValor));
                }
            }
            else {
                if (this.ListasPrecosServicos.length > 0) {
                    this.txtValorUnitario.SetText(this.ListasPrecosServicos[0].Preco.Format(ValoresSismoura.CasasDecimaisValor));
                }
                else {
                    this.txtValorUnitario.SetText("0".CNum().Format(ValoresSismoura.CasasDecimaisValor));
                }
            }
            this.CalcularTotalServico();
            this.retornoComplementosItemServico = null;
            this.perguntouAdicionarServicoDuplicado = false;
            this.GetScope().$applyAsync();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.OnTxtDescontoProdutoChange = function () {
        var descontoPorc;
        if ((this.txtQuantidadeProduto.GetText().CNum() * this.txtValorUnitarioProduto.GetText().CNum()) != 0) {
            descontoPorc = ((this.txtDescontoProduto.GetText().CNum() / (this.txtValorUnitarioProduto.GetText().CNum() * this.txtQuantidadeProduto.GetText().CNum())) * 100).Format(2);
            if (!this.validarDesconto(descontoPorc)) {
                this.txtDescontoProduto.SetText("0");
                return;
            }
            this.txtDescontoPorcentProduto.SetText(descontoPorc);
        }
        this.CalcularTotalProduto();
    };
    C_HosCad_Angular.prototype.OnTxtDescontoServicoChange = function () {
        var descontoPorc;
        if ((this.txtQuantidadeServico.GetText().CNum() * this.txtValorUnitario.GetText().CNum()) != 0) {
            descontoPorc = ((this.txtDesconto.GetText().CNum() / (this.txtValorUnitario.GetText().CNum() * this.txtQuantidadeServico.GetText().CNum())) * 100).Format(2);
            if (!this.validarDesconto(descontoPorc)) {
                this.txtDesconto.SetText("0");
                return;
            }
            this.txtDescontoPorcent.SetText(descontoPorc);
        }
        this.CalcularTotalServico();
    };
    C_HosCad_Angular.prototype.OnTxtDescontoPorcentProdutoChange = function () {
        var desconto = ((this.txtDescontoPorcentProduto.GetText().CNum() / 100) * this.lblTotalProduto.GetText().CNum()).Format(ValoresSismoura.CasasDecimaisValor);
        if (!this.validarDesconto(this.txtDescontoPorcentProduto.GetText())) {
            this.txtDescontoPorcentProduto.SetText("0");
            return;
        }
        this.txtDescontoProduto.SetText(desconto);
        this.CalcularTotalProduto();
    };
    C_HosCad_Angular.prototype.OnTxtDescontoPorcentServicoChange = function () {
        var desconto = ((this.txtDescontoPorcent.GetText().CNum() / 100) * this.lblTotal.GetText().CNum()).Format(ValoresSismoura.CasasDecimaisValor);
        if (!this.validarDesconto(this.txtDescontoPorcent.GetText())) {
            this.txtDescontoPorcent.SetText("0");
            return;
        }
        this.txtDesconto.SetText(desconto);
        this.CalcularTotalServico();
    };
    C_HosCad_Angular.prototype.OnTxtQuantidadeServicoChange = function () {
        if (this.txtQuantidadeServico.GetText().CNum() == 0) {
            this.txtQuantidadeServico.SetText("1");
        }
        this.CalcularTotalServico();
    };
    C_HosCad_Angular.prototype.txtQuantidadeProdutoChange = function () {
        if (this.txtQuantidadeProduto.GetText().CNum() == 0) {
            this.txtQuantidadeProduto.SetText("1");
        }
        this.CalcularTotalProduto();
    };
    C_HosCad_Angular.prototype.validarDesconto = function (varlorP) {
        if (varlorP.CNum() > 99.99) {
            MostrarAlerta("O valor do desconto não pode ultrapassasr 99.99%");
            return false;
        }
        if (varlorP.CNum() < 0) {
            MostrarAlerta("O valor do desconto não pode ser inferior a 0");
            return false;
        }
        return true;
    };
    C_HosCad_Angular.prototype.ReplicarServicos = function (s, e) {
        try {
            if (this.IsHospedagemFinalizada()) {
                return;
            }
            if (this.Servicos == undefined || this.Servicos == null || this.Servicos.length == 0) {
                MostrarAlerta("Para realizar a replicação é necessário adicionar um serviço na grade e preencher sua hora de execução");
                return;
            }
            e.processOnServer = false;
            if (this.dlgReplicar) {
                this.dlgReplicar.ModalDialog.Show();
                this.grdReplicarServicos.PreencherGrid(this.Servicos);
                if (this.txtServico) {
                    this.txtServico.Focus();
                }
            }
            return false;
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.ReplicarProdutos = function (s, e) {
        try {
            if (this.IsHospedagemFinalizada()) {
                return;
            }
            if (this.Produtos == undefined || this.Produtos == null || this.Produtos.length == 0) {
                MostrarAlerta("Para realizar a replicação é necessário adicionar um produto na grade e preencher sua hora de execução");
                return;
            }
            e.processOnServer = false;
            if (this.dlgReplicarProduto) {
                this.dlgReplicarProduto.ModalDialog.Show();
                this.grdReplicarProdutos.PreencherGrid(this.Produtos);
                if (this.txtProduto) {
                    this.txtProduto.Focus();
                }
            }
            return false;
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.OnCancelarReplicar = function (s, e) {
        try {
            this.LimparModalReplicarServico();
            this.dlgReplicar.Hide();
        }
        catch (e) {
        }
    };
    C_HosCad_Angular.prototype.OnReplicarServicos = function (s, e) {
        try {
            if (this.txtIntervaloReplicacoes.GetText().CNum() <= 0) {
                MostrarAlerta("Informe um intervalo valído para realizar a replicação.");
                return;
            }
            if (this.txtQtdeReplicacoes.GetText().CNum() <= 0) {
                MostrarAlerta("Informe a quantidade de replicações.");
                return;
            }
            if (this.txtQtdeReplicacoes.GetText().CNum() > 1000) {
                MostrarAlerta("A quantidade de replicações não pode ser maior que 1000.");
                this.txtQtdeReplicacoes.SetText("1");
                return;
            }
            switch (this.rblTipoIntervalo.GetValue()) {
                case "d":
                    if (this.txtIntervaloReplicacoes.GetText().CNum() > 365) {
                        MostrarAlerta("A quantidade de dias não pode ser maior que 365.");
                        return;
                    }
                    break;
                case "m":
                    if (this.txtIntervaloReplicacoes.GetText().CNum() > 1439) {
                        MostrarAlerta("A quantidade de minutos não pode ser maior que 1439.");
                        return;
                    }
                    break;
                case "h":
                    if (this.txtIntervaloReplicacoes.GetText().CNum() > 23) {
                        MostrarAlerta("A quantidade de horas não pode ser maior que 23.");
                        return;
                    }
                    break;
                default:
            }
            var selecionados = this.grdReplicarServicos.GetSelectedRowsData;
            var contadores = [];
            if (selecionados.length == 0) {
                MostrarAlerta("Selecione ao menos um item na grade.");
                return;
            }
            for (var i = 0; i < selecionados.length; i++) {
                contadores.push(selecionados[i].Contador);
            }
            var parametros = {
                TipoIntervalo: this.rblTipoIntervalo.GetValue(),
                ValorIntervalo: this.txtIntervaloReplicacoes.GetText().CNum(),
                servicosJSON: JSON.stringify(this.Servicos),
                quantidadeReplicacoes: this.txtQtdeReplicacoes.GetText().CNum(),
                codigosSelecionados: contadores,
                dataSaida: this.GetDataHoraPrevisaoSaida().ToDate()
            };
            var resultado = this.ExecutarFuncaoServerSideSynch("ReplicarServicos", parametros);
            if (resultado) {
                this.Servicos = resultado;
                this.grdServicos.Grid.PreencherGrid(this.Servicos);
                this.LimparModalReplicarServico();
                this.dlgReplicar.Hide();
            }
            else {
                MostrarAlerta("A replicação não foi realizada.");
                this.LimparModalReplicarServico();
                this.dlgReplicar.Hide();
            }
        }
        catch (e) {
            LogarException(e);
        }
        finally {
            this.LimparModalReplicarServico();
            this.dlgReplicar.Hide();
        }
    };
    C_HosCad_Angular.prototype.CalcularTotalProduto = function () {
        try {
            var total = ((this.txtQuantidadeProduto.GetText().CNum() * this.txtValorUnitarioProduto.GetText().CNum()) - this.txtDescontoProduto.GetText().CNum()).Format(ValoresSismoura.CasasDecimaisValor);
            this.lblTotalProduto.SetText(total);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.LimparModalReplicarServico = function () {
        //this.grdReplicarServicos.LimparSelecao();
        this.grdReplicarServicos.PreencherGrid([]);
        this.txtIntervaloReplicacoes.SetText("");
        this.txtQtdeReplicacoes.SetText("");
        this.rblTipoIntervalo.SetValue("m");
    };
    C_HosCad_Angular.prototype.LimparModalReplicarProduto = function () {
        //this.grdReplicarProdutos.LimparSelecao();
        this.grdReplicarProdutos.PreencherGrid([]);
        this.txtIntervaloReplicacoesProduto.SetText("");
        this.txtQtdeReplicacoesProduto.SetText("");
        this.optTipoIntervaloProduto.SetValue("m");
    };
    C_HosCad_Angular.prototype.OnTxtProdutoProcurou = function (s, e) {
        try {
            var parametros;
            parametros = {
                codProduto: this.txtProduto.GetText().CNum()
            };
            var isProduto = this.ExecutarFuncaoServerSideSynch("ValidarProduto", parametros);
            if (!isProduto) {
                MostrarAlerta("Este é um serviço do Pet Shop e não pode ser adicionado na aba Produtos, adicione na aba Serviços");
                this.txtProduto.Focus();
                this.txtProduto.Limpar();
                return;
            }
            parametros = {
                codProduto: this.txtProduto.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue()
            };
            this.ListasPrecosProdutos = this.ExecutarFuncaoServerSideSynch("GetListasPrecos", parametros);
            if (this.cboListaPrecoProduto && this.cboListaPrecoProduto.Combo) {
                this.cboListaPrecoProduto.Combo.ClearItems();
                for (var x = 0; x < this.ListasPrecosProdutos.length; x++) {
                    this.cboListaPrecoProduto.Combo.AddItem(this.ListasPrecosProdutos[x].Descricao, this.ListasPrecosProdutos[x].Codigo, "");
                }
                if (this.cboListaPrecoProduto.Combo.GetItemCount() == 1) {
                    this.cboListaPrecoProduto.Combo.SetSelectedIndex(0);
                    this.txtValorUnitarioProduto.SetText(this.ListasPrecosProdutos[0].Preco.Format(ValoresSismoura.CasasDecimaisValor));
                }
                else {
                    this.cboListaPrecoProduto.Combo.SetText("");
                    this.txtValorUnitarioProduto.SetText("0".CNum().Format(ValoresSismoura.CasasDecimaisValor));
                }
            }
            else {
                if (this.ListasPrecosProdutos.length > 0) {
                    this.txtValorUnitarioProduto.SetText(this.ListasPrecosProdutos[0].Preco.Format(ValoresSismoura.CasasDecimaisValor));
                }
                else {
                    this.txtValorUnitarioProduto.SetText("0".CNum().Format(ValoresSismoura.CasasDecimaisValor));
                }
            }
            this.CalcularTotalProduto();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.OnAdicionarProduto = function (s, e) {
        try {
            if (!this.ValidarAdicionarProduto()) {
                return;
            }
            var parametros = {
                codProduto: this.txtProduto.GetText().CNum()
            };
            var produtoEntity = this.ExecutarFuncaoServerSideSynch("GetProdutoPorCodigo", parametros);
            if (produtoEntity == null || produtoEntity == undefined) {
                MostrarAlerta("Produto não encontrado");
                return;
            }
            var hora = this.txtHoraProduto.textBoxHorario.GetText().split(':')[0].CNum();
            var minutos = this.txtHoraProduto.textBoxHorario.GetText().split(':')[1].CNum();
            var horaExecProduto = new Date();
            horaExecProduto.setHours(hora);
            horaExecProduto.setMinutes(minutos);
            var produto = {};
            produto.Profissional = this.txtProfissionalProduto.GetText().CNum();
            produto.Nome_Profissional = this.txtProfissionalProduto.GetResultado();
            produto.Produto = this.txtProduto.GetText().CNum();
            produto.Nome_Produto = this.txtProduto.GetResultado();
            produto.Cobrar = !this.chkCobrado.Checked;
            produto.Item = this.Produtos.length + 1;
            produto.Data = horaExecProduto;
            produto.Funcionario = ValoresSismoura.UsuarioLogado;
            produto.Hospedagem = this.txtCodigo.GetText().CNum();
            produto.Observacao = this.txtObservacaoProduto.GetText();
            produto.Atendimento = 0;
            produto.Venda = 0;
            produto.Concluido = false;
            produto.Valor = this.txtValorUnitarioProduto.GetText().CNum();
            produto.Desconto = this.txtDescontoProduto.GetText().CNum();
            produto.Desconto_Porcentagem = this.txtDescontoPorcentProduto.GetText().CNum();
            produto.Qtde = this.txtQuantidadeProduto.GetText().CNum();
            produto.Valor_Final = this.lblTotalProduto.GetText().CNum();
            this.Produtos.push(produto);
            this.grdProdutos.Grid.PreencherGrid(this.Produtos);
            this.LimparCamposProdutos();
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.OnReplicarProdutos = function (s, e) {
        try {
            if (this.txtIntervaloReplicacoesProduto.GetText().CNum() <= 0) {
                MostrarAlerta("Informe um intervalo valído para realizar a replicação.");
                return;
            }
            if (this.txtQtdeReplicacoesProduto.GetText().CNum() <= 0) {
                MostrarAlerta("Informe a quantidade de replicações.");
                return;
            }
            if (this.txtQtdeReplicacoesProduto.GetText().CNum() > 1000) {
                MostrarAlerta("A quantidade de replicações não pode ser maior que 1000.");
                this.txtQtdeReplicacoes.SetText("1");
                return;
            }
            switch (this.optTipoIntervaloProduto.GetValue()) {
                case "d":
                    if (this.txtIntervaloReplicacoesProduto.GetText().CNum() > 365) {
                        MostrarAlerta("A quantidade de dias não pode ser maior que 365.");
                        return;
                    }
                    break;
                case "m":
                    if (this.txtIntervaloReplicacoesProduto.GetText().CNum() > 1439) {
                        MostrarAlerta("A quantidade de minutos não pode ser maior que 1439.");
                        return;
                    }
                    break;
                case "h":
                    if (this.txtIntervaloReplicacoesProduto.GetText().CNum() > 23) {
                        MostrarAlerta("A quantidade de horas não pode ser maior que 23.");
                        return;
                    }
                    break;
                default:
            }
            var selecionados = this.grdReplicarProdutos.GetSelectedRowsData;
            var contadores = [];
            if (selecionados.length == 0) {
                MostrarAlerta("Selecione ao menos um item na grade.");
                return;
            }
            for (var i = 0; i < selecionados.length; i++) {
                contadores.push(selecionados[i].Contador);
            }
            var parametros = {
                TipoIntervalo: this.optTipoIntervaloProduto.GetValue(),
                ValorIntervalo: this.txtIntervaloReplicacoesProduto.GetText().CNum(),
                produtosJSON: this.Produtos,
                quantidadeReplicacoes: this.txtQtdeReplicacoesProduto.GetText().CNum(),
                codigosSelecionados: contadores
            };
            var resultado = this.ExecutarFuncaoServerSideSynch("ReplicarProdutos", parametros);
            if (resultado) {
                this.Produtos = resultado;
                this.grdProdutos.Grid.PreencherGrid(this.Produtos);
                this.LimparModalReplicarProduto();
                this.dlgReplicarProduto.Hide();
            }
            else {
                MostrarAlerta("A replicação não foi realizada.");
                this.LimparModalReplicarProduto();
                this.dlgReplicarProduto.Hide();
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.OnCancelarReplicacaoProdutos = function (s, e) {
        try {
            this.LimparModalReplicarProduto();
            this.dlgReplicarProduto.Hide();
        }
        catch (e) {
        }
    };
    C_HosCad_Angular.prototype.ValidarAdicionarProduto = function () {
        if (this.txtProduto.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o Produto.");
            return false;
        }
        if (!this.txtDataProduto.IsValido()) {
            MostrarAlerta("Informe a data do produto");
            return false;
        }
        var dataProduto = this.txtDataProduto.Date.ToDate();
        dataProduto.setHours(this.txtHoraProduto.textBoxHorario.GetText().split(':')[0].CNum(), this.txtHoraProduto.textBoxHorario.GetText().split(':')[1].CNum(), 0, 0);
        var dataEntrada = this.GetDataHoraEntrada();
        var dataSaida = this.GetDataHoraPrevisaoSaida();
        var isProdutoNaData = false;
        if (dataProduto.getTime() < dataEntrada.getTime() || dataProduto.getTime() > dataSaida.getTime()) {
            MostrarAlerta("Informe a data do produto dentro do período da hospedagem.");
            return false;
        }
        else {
            if (CNum(this.optTipoHospedagem.GetValue()) == 1 /* HOTEL */) {
                isProdutoNaData = true;
            }
        }
        this.Diarias.forEach(function (x) {
            //A hora da diária não é informada, então eu uso a mesma hora do serviço, o que importa é o dia.
            var dia = x.Dia_Servico.ToDate();
            dia.setHours(dataProduto.getHours(), dataProduto.getMinutes(), 0, 0);
            if (dia.ToDate().getTime() == dataProduto.ToDate().getTime()) {
                isProdutoNaData = true;
                return;
            }
        });
        if (!isProdutoNaData) {
            MostrarAlerta("Informe a data do produto dentro do período da hospedagem.");
            return false;
        }
        if (!(this.txtValorUnitarioProduto.GetText().CNum() > 0)) {
            MostrarAlerta("Informe o valor do produto");
            return false;
        }
        if (!(this.txtQuantidadeProduto.GetText().CNum() > 0)) {
            MostrarAlerta("Informe a quantidade do produto");
            return false;
        }
        if (!(this.txtProfissionalProduto.GetText().CNum() > 0)) {
            MostrarAlerta("Informe o profissional do produto.");
            return false;
        }
        return true;
    };
    C_HosCad_Angular.prototype.VerificarPagamentoHospedagem = function (codHospedagem) {
        try {
            var isEnviadoZanthus = true;
            var isPagoZanthus = true;
            var atendimentoPendenteEnvioZanthus = "";
            var atendimentoPendentePagamentoZanthus = "";
            var parametros = {
                codHospedagem: codHospedagem
            };
            var atendimentos;
            atendimentos = this.ExecutarFuncaoServerSideSynch("GetAtendimentosHospedagem", parametros);
            if (atendimentos && atendimentos.length > 0) {
                atendimentos.forEach(function (x) {
                    var status = x.Status_Envio_Zanthus;
                    if (status == null || status == undefined) {
                        status = 1 /* AguardandoEnvio */;
                    }
                    switch (status) {
                        case 1 /* AguardandoEnvio */:
                            isEnviadoZanthus = false;
                            if (String.IsNullOrWhiteSpace(atendimentoPendenteEnvioZanthus)) {
                                atendimentoPendenteEnvioZanthus = "" + x.Codigo;
                            }
                            else {
                                atendimentoPendenteEnvioZanthus += ", " + x.Codigo;
                            }
                            break;
                        case 2 /* EnvioEfetuado */:
                            isPagoZanthus = false;
                            if (String.IsNullOrWhiteSpace(atendimentoPendentePagamentoZanthus)) {
                                atendimentoPendentePagamentoZanthus = "" + x.Codigo;
                            }
                            else {
                                atendimentoPendentePagamentoZanthus += ", " + x.Codigo;
                            }
                            break;
                        default:
                    }
                });
            }
            //Verifica se enviou os atendimentos;
            var msg = "";
            if (this.GetScope().Entity.Tipo_Hospedagem == 2 /* DAYCARE */) {
                msg += "Atenção! Para realizar a finalização do day care é necessário enviar o atendimento para a Zanthus.";
            }
            else {
                msg += "Atenção! Para realizar o checkout da hospedagem é necessário enviar o atendimento para a Zanthus.";
            }
            msg += "\nVerifique abaixo o(s) atendimento(s) não enviado(s):\n" + atendimentoPendenteEnvioZanthus;
            if (!isEnviadoZanthus) {
                MsgBoxJS(msg, MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
                return false;
            }
            else {
                msg = "";
                //Verifica se pagou os atendimentos;
                if (this.GetScope().Entity.Tipo_Hospedagem == 2 /* DAYCARE */) {
                    msg += "Atenção! Para realizar a finalização do day care é necessário realizar o pagamento do atendimento.";
                }
                else {
                    msg += "Atenção! Para realizar o checkout da hospedagem é necessário realizar o pagamento do atendimento.";
                }
                msg += "\nVerifique abaixo o(s) atendimento(s) não pago(s):\n" + atendimentoPendentePagamentoZanthus;
                if (!isPagoZanthus) {
                    MsgBoxJS(msg, MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
                    return false;
                }
            }
            return true;
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.FinalizarHotelDaycare = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        //Data do checkout/finalização.
        this.ExecutarCheckoutDepoisGravar = false;
        this.DataRealizandoCheckout = this.DataServidor();
        this.txtDataCheckout.Date = this.DataServidor();
        this.txtHoraCheckout.textBoxHorario.SetText(this.DataRealizandoCheckout.FormataHoraSismoura());
        this.GetScope().Entity.Usuario_Saida = ValoresSismoura.UsuarioLogado;
        this.GetScope().Entity.Data_Checkout = this.DataRealizandoCheckout.ToDate();
        this.TratarEntidadeAntesGravar();
        if (!this.ValidarFinalizacaoHotelDaycare()) {
            return;
        }
        var msg = "Deseja realizar o checkout?";
        if (this.GetScope().Entity.Tipo_Hospedagem == 2 /* DAYCARE */) {
            msg = "Deseja finalizar o daycare?";
        }
        MsgBoxJS(msg, MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
            if (result.Resultado == MsgBoxResult.Yes) {
                //Fluxo para finalização do daycare e hotel.
                if (_this.EntityTela.isCortesia) {
                    _this.dlgFuncaoAdm.Verificar("C_HosCad_Cortesia", ValoresSismoura.UsuarioLogado, false, _this.VerificarPermissaoCortesia, _this, true);
                }
                else {
                    if (_this.GetScope().Entity.Tipo_Hospedagem == 2 /* DAYCARE */) {
                        _this.FinalizarDayCare();
                    }
                    else {
                        _this.FinalizarHotel();
                    }
                }
            }
        });
    };
    C_HosCad_Angular.prototype.VerificarPermissaoCortesia = function (retorno) {
        if (retorno.Autorizado) {
            this.EntityTela.Usuario_Aut_Cortesia = retorno.Usuario;
            this.dlgMotivoCortesia.Show();
        }
        else {
            MostrarAlerta("Usuário sem permissão para finalizar como cortesia");
        }
    };
    C_HosCad_Angular.prototype.OnBtnOKCortesiaClick = function (s, e) {
        e.processOnServer = false;
        if (String.IsNullOrWhiteSpace(this.txtMotivoCortesia.GetText())) {
            return;
        }
        this.EntityTela.Motivo_Cortesia = this.txtMotivoCortesia.GetText();
        this.txtMotivoCortesia.SetText("");
        this.dlgMotivoCortesia.Hide();
        if (this.EntityTela.Tipo_Hospedagem == 2 /* DAYCARE */) {
            this.FinalizarDayCare();
        }
        else {
            this.FinalizarHotel();
        }
    };
    C_HosCad_Angular.prototype.OnBtnCancelarCortesiaClick = function (s, e) {
        e.processOnServer = false;
        this.txtMotivoCortesia.SetText("");
        this.dlgMotivoCortesia.Hide();
    };
    C_HosCad_Angular.prototype.GetQuantidadeHorasExcedidas = function () {
        //Verificar se está saindo antes ou depois da data configurada no checkout.
        var dtEntradaHotel = this.GetDataHoraEntrada().ToDate();
        var dtSaidaProgramada = this.GetDataHoraPrevisaoSaida().ToDate();
        var dtSaindoHotel = this.DataRealizandoCheckout.ToDate();
        var parametros = {
            dataEntrada: dtEntradaHotel,
            dataSaida: dtSaidaProgramada,
            dataCheckout: dtSaindoHotel
        };
        return this.ExecutarFuncaoServerSideSynch("GetQuantidadeHorasExcedidas", parametros);
    };
    C_HosCad_Angular.prototype.FinalizarHotel = function () {
        var _this = this;
        try {
            var quantidadeHorasExcedeu = this.GetQuantidadeHorasExcedidas();
            if (quantidadeHorasExcedeu == 0) {
                //Saindo na data correta;
                this.CheckOut();
            }
            else if (quantidadeHorasExcedeu < 0) {
                //Saindo antes da data prevista;
                MsgBoxJS("A data previsa para a saida foi " + this.GetDataHoraPrevisaoSaida().ToDate().FormataDataHora() + ".\nDeseja realmete realizar o checkout antes da data prevista para a sa\u00EDda?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (result) {
                    if (result.Resultado == MsgBoxResult.Yes) {
                        _this.CheckOut();
                    }
                });
            }
            else {
                if (!this.GetScope().Entity.Calculou_Diaria_Adicional_CheckOut) {
                    //Saindo depois da data prevista, exibir mensagem solicitando uma das ações do usuário: 
                    //1-Lançar uma diária;
                    //2-Lançar "X" serviço por hora ultrapassada;
                    //3-Fazer o checkout sem cobrança adicional;
                    this.cboOpcaoAdicaoHoraCheckout.LimparSelecao();
                    this.cboServicoAcaoCheckout.LimparSelecao();
                    this.cboServicoAcaoCheckout.Visible = false;
                    this.cboServicoAcaoCheckout.Obrigatorio = false;
                    this.lblValorAdicional.Visible = true;
                    this.lblValorAdicional.Text = "Horas adicionais " + quantidadeHorasExcedeu + "H";
                    this.dlgAdicionalCheckout.ModalDialog.Show();
                }
                else {
                    this.CheckOut();
                }
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.ValidarFinalizacaoHotelDaycare = function () {
        var entidade = this.GetScope().Entity;
        if (this.txtCodigo.GetText().CNum() <= 0 || this.GetScope().Entity.Codigo == 0) {
            MostrarAlerta("Informe a hospedagem");
            return false;
        }
        if (entidade.Cancelada) {
            MostrarAlerta("A hospedagem está cancelada. Não será possível continuar com a operação.");
            return false;
        }
        if (this.IsHospedagemFinalizada()) {
            return false;
        }
        if (!this.txtDataCheckout.IsValido()) {
            MostrarAlerta("Informe a Data de Saída");
            return false;
        }
        if (this.GetScope().Entity.Usuario_Saida <= 0 && ValoresSismoura.UsuarioLogado != 0) {
            MostrarAlerta("Informe o funcionário responsável pelo check-out");
            return false;
        }
        if (this.GetScope().Entity.Data_Checkout.isBefore(this.GetScope().Entity.Data_Entrada, false)) {
            MostrarAlerta("A data de saída não pode ser menor que a data de entrada.");
            return false;
        }
        if (this.ProdutosConsumidos && this.ProdutosConsumidos.length > 0) {
            var hasProdutoNaoPago = false;
            this.ProdutosConsumidos.forEach(function (fn) {
                if (!fn.Pago) {
                    hasProdutoNaoPago = true;
                    return;
                }
            });
            if (hasProdutoNaoPago) {
                MostrarAlerta("Por favor, verifique os produtos que não foram pagos.");
                return false;
            }
        }
        if (!ValoresSismoura.ConfiguracoesPetshop.Permitir_Checkout_Hospedagem_Sem_Pagamento && !this.EntityTela.isCortesia) {
            //Para o hotel a validação será realizada em outro fluxo.
            if (this.GetScope().Entity.Tipo_Hospedagem == 2 /* DAYCARE */) {
                if (!this.VerificarPagamentoHospedagem(this.GetScope().Entity.Codigo)) {
                    return false;
                }
            }
        }
        return true;
    };
    C_HosCad_Angular.prototype.CheckoutHospedagem = function (s, e) {
        try {
            e.processOnServer = false;
            var entidade = this.GetScope().Entity;
            if (entidade.Cancelada) {
                MostrarAlerta("A hospedagem está cancelada. Não será possível continuar com a operação.");
                return;
            }
            //Fluxo para finalização do daycare.
            if (entidade.Tipo_Hospedagem == 2 /* DAYCARE */) {
                this.FinalizarDayCare();
                return;
            }
            this.ExecutarCheckoutDepoisGravar = false;
            this.DataRealizandoCheckout = this.DataServidor();
            this.txtDataCheckout.Date = this.DataServidor();
            this.txtHoraCheckout.textBoxHorario.SetText(this.DataRealizandoCheckout.FormataHoraSismoura());
            this.GetScope().Entity.Usuario_Saida = ValoresSismoura.UsuarioLogado;
            this.GetScope().Entity.Data_Checkout = this.DataRealizandoCheckout.ToDate();
            this.TratarEntidadeAntesGravar();
            if (!this.ValidacoesCheckout()) {
                return;
            }
            var parametros = {
                hospedagemJSON: JSON.stringify(entidade)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("CheckoutHospedagem", parametros);
            var retCheckout;
            switch (retorno) {
                case 0 /* nenhumaAcao */:
                    this.CheckOut();
                    break;
                case 2 /* saindoAntesPrevisto */:
                    //var msg: string;
                    //var a = this.GetDataHoraCheckout().FormataDataHora();
                    //var b: string = entidade.Data_Saida.ToDate().FormataDataHora();
                    //msg = `A data e o horário informados (${a}) para o check-out são menores que os registros salvos(${b}).\n`
                    //msg = msg + "Deseja alterar o serviço de hospedagem para a diferença?"
                    //MsgBoxJS(msg, MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnMesageBoxCheckout, this), parametros);
                    this.CheckOut();
                    break;
                case 1 /* saindoAposPrevisto */:
                    //Já gerou as diárias excedentes do checkout, não precisa perguntar novamente
                    var qtdeDiarias = this.GetNumeroDiariasGerar(true);
                    if (this.Diarias.length >= qtdeDiarias) {
                        this.CheckOut();
                        return;
                    }
                    var msg;
                    //var a = this.GetDataHoraCheckout().FormataDataHora();
                    var a = this.DataServidor().FormataDataHora();
                    var b = entidade.Data_Saida.ToDate().FormataDataHora();
                    msg = "Voc\u00EA est\u00E1 realizando o check-out do cliente depois da data de sa\u00EDda que foi informada inicialmente (" + b + ").\n";
                    msg = msg + "Deseja gerar um novo serviço de hospedagem para a diferença";
                    MsgBoxJS(msg, MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnMesageBoxCheckoutAposDataPrevista, this), parametros);
                    break;
                default:
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.FinalizarDayCare = function () {
        var _this = this;
        try {
            if (this.DataRealizandoCheckout.isBefore(this.GetScope().Entity.Data_Saida, false)) {
                MsgBoxJS("Você está finalizando o daycare antes da data prevista. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(function (resultado) {
                    if (resultado.Resultado == MsgBoxResult.Yes) {
                        _this.CheckOut();
                    }
                }, this));
            }
            else {
                this.CheckOut();
            }
        }
        catch (e) {
        }
    };
    C_HosCad_Angular.prototype.ValidacoesCheckout = function () {
        if (this.IsHospedagemFinalizada()) {
            return;
        }
        if (!this.txtDataCheckout.IsValido()) {
            MostrarAlerta("Informe a Data de Saída");
            return false;
        }
        if (this.txtCodigo.GetText().CNum() <= 0 || this.GetScope().Entity.Codigo == 0) {
            MostrarAlerta("Informe a hospedagem");
            return false;
        }
        if (this.GetScope().Entity.Usuario_Saida <= 0 && ValoresSismoura.UsuarioLogado != 0) {
            MostrarAlerta("Informe o funcionário responsável pelo check-out");
            return false;
        }
        if (this.GetScope().Entity.Data_Checkout.isBefore(this.GetScope().Entity.Data_Entrada, false)) {
            MostrarAlerta("A data de saída não pode ser menor que a data de entrada.");
            return false;
        }
        if (this.ProdutosConsumidos && this.ProdutosConsumidos.length > 0) {
            var hasProdutoNaoPago = false;
            this.ProdutosConsumidos.forEach(function (fn) {
                if (!fn.Pago) {
                    hasProdutoNaoPago = true;
                    return;
                }
            });
            if (hasProdutoNaoPago) {
                MostrarAlerta("Por favor, verifique os produtos que não foram pagos.");
                return false;
            }
        }
        return true;
    };
    C_HosCad_Angular.prototype.ValidacoesFinalizacaoDaycare = function () {
        if (this.IsHospedagemFinalizada()) {
            return;
        }
        if (!this.txtDataCheckout.IsValido()) {
            MostrarAlerta("Informe a Data de Saída");
            return false;
        }
        if (this.txtCodigo.GetText().CNum() <= 0 || this.GetScope().Entity.Codigo == 0) {
            MostrarAlerta("Informe a hospedagem");
            return false;
        }
        if (this.GetScope().Entity.Usuario_Saida <= 0 && ValoresSismoura.UsuarioLogado != 0) {
            MostrarAlerta("Informe o funcionário responsável pela finalização do daycare");
            return false;
        }
        if (this.GetScope().Entity.Data_Checkout.isBefore(this.GetScope().Entity.Data_Entrada, false)) {
            MostrarAlerta("A data de saída não pode ser menor que a data de entrada.");
            return false;
        }
        if (this.ProdutosConsumidos && this.ProdutosConsumidos.length > 0) {
            var hasProdutoNaoPago = false;
            this.ProdutosConsumidos.forEach(function (fn) {
                if (!fn.Pago) {
                    hasProdutoNaoPago = true;
                    return;
                }
            });
            if (hasProdutoNaoPago) {
                MostrarAlerta("Por favor, verifique os produtos que não foram pagos.");
                return false;
            }
        }
        return true;
    };
    C_HosCad_Angular.prototype.OnMesageBoxCheckoutAposDataPrevista = function (resultado) {
        if (resultado.Resultado == MsgBoxResult.No) {
            this.CheckOut();
        }
        else {
            if (this.cboServicoCheckout.GetValue() <= 0) {
                MostrarAlerta("Informe o serviço de checkout que será cobrado na diária excedente.");
                return;
            }
            //Fará o lançamento da diária pelo tempo excedido.
            var qtdeDiarias = this.GetNumeroDiariasGerar(true);
            while (this.Diarias.length < qtdeDiarias) {
                this.AdicionarDiariaCheckout(this.cboServicoCheckout.GetValue());
            }
            this.ExecutarCheckoutDepoisGravar = true;
            this.ClicarGravar();
        }
    };
    C_HosCad_Angular.prototype.AdicionarDiariaCheckout = function (servico, quantidade) {
        try {
            if (!this.GetProfissionalDiaria || this.GetProfissionalDiaria.Codigo <= 0) {
                MostrarAlerta("O profissional utilizado para lançar as diárias não foi encontrado. Informe o parâmetro na tela de configurações.");
                return false;
            }
            if (!this.podeAdicionarDiaria(0, servico, this.GetProfissionalDiaria.Codigo, this.GetDataHoraEntrada(), true)) {
                return;
            }
            this.grdDiarias.Grid.PreencherGrid([]);
            if (!quantidade || quantidade == 0) {
                quantidade = 1;
            }
            var parametros = {
                codServicoAplicar: servico,
                codHospedagem: this.txtCodigo.GetText().CNum(),
                diariasJSON: JSON.stringify(this.Diarias),
                dataInicial: this.GetDataHoraEntrada(),
                codProfissional: this.GetProfissionalDiaria.Codigo,
                isDiariaExtendidaCheckout: true,
                descontoP: this.DiariaCalculada.Desconto_Porcentagem,
                quantidadeServico: quantidade
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("AdicionarDiaria", parametros);
            this.Diarias = retorno;
            this.grdDiarias.Grid.PreencherGrid(retorno);
            //Atualiza a data da saída para a data que está fazendo o checkout;
            //this.txtDataSaida.TextBoxCalendario.SetDate(this.DataRealizandoCheckout);
            this.txtDataCheckout.Date = this.DataRealizandoCheckout;
            this.txtHoraCheckout.textBoxHorario.SetText(this.DataRealizandoCheckout.FormataHoraSismoura());
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.CheckOut = function () {
        var entidade = this.GetScope().Entity;
        try {
            if (!ValoresSismoura.ConfiguracoesPetshop.Permitir_Checkout_Hospedagem_Sem_Pagamento && !this.EntityTela.isCortesia) {
                if (!this.VerificarPagamentoHospedagem(entidade.Codigo)) {
                    return;
                }
            }
            this.GetScope().Entity.isFazendoCheckout = true;
            this.GetScope().Entity.Usuario_Saida = ValoresSismoura.UsuarioLogado;
            this.GetScope().Entity.Data_Checkout = this.DataRealizandoCheckout;
            this.GetScope().Entity.Finalizado = true;
            this.TratarEntidadeAntesGravar();
            this.enviarEmailCheckout = true;
            this.ClicarGravar();
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.AtualizarLabelStatus = function (entidade) {
        try {
            this.lblStatus.Visible = false;
            if (entidade) {
                if (entidade.Finalizado) {
                    if (entidade.Tipo_Hospedagem == 2 /* DAYCARE */) {
                        this.lblStatus.Text = "Day Care Finalizado " + entidade.Data_Checkout.ToDate().FormataDataHora().toString();
                    }
                    else {
                        this.lblStatus.Text = "Check-out realizado " + entidade.Data_Checkout.ToDate().FormataDataHora().toString();
                    }
                    if (entidade.isCortesia) {
                        this.lblStatus.Text += " - Cortesia";
                    }
                    this.lblStatus.LabelComponente.style.color = "red";
                    this.lblStatus.Visible = true;
                }
                else if (entidade.Cancelada) {
                    this.lblStatus.LabelComponente.style.color = "red";
                    this.lblStatus.Visible = true;
                    if (entidade.Tipo_Hospedagem == 2 /* DAYCARE */) {
                        this.lblStatus.Text = "Day Care cancelado " + entidade.Data_Cancelamento.ToDate().FormataDataHora().toString() + " \n Motivo: " + entidade.Motivo_Cancelamento;
                    }
                    else {
                        this.lblStatus.Text = "Hospedagem cancelada " + entidade.Data_Cancelamento.ToDate().FormataDataHora().toString() + " \n Motivo: " + entidade.Motivo_Cancelamento;
                    }
                }
                else if (entidade.Codigo > 0) {
                    if (entidade.Tipo_Hospedagem == 2 /* DAYCARE */) {
                        this.lblStatus.Text = "Day Care Cadastrado";
                    }
                    else {
                        this.lblStatus.Text = "Hospedagem Cadastrada";
                    }
                    this.lblStatus.LabelComponente.style.color = "black";
                    this.lblStatus.Visible = true;
                }
            }
        }
        catch (e) {
        }
    };
    C_HosCad_Angular.prototype.OnBtnAnexoClick = function (s, e) {
        e.processOnServer = false;
        if (this.EntityTela.Codigo <= 0) {
            MostrarAlerta("Informe uma hospedagem já cadastrada");
            return;
        }
        this.dlgAnexo.MostrarClient(this.PATH_DOCUMENTOS_HOSPEDAGEM + this.EntityTela.Codigo);
    };
    C_HosCad_Angular.prototype.OnBtnFichaClick = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.GetScope().Entity.Codigo <= 0) {
                MostrarAlerta("Informe uma hospedagem existente!");
                return;
            }
            var parametros;
            parametros = {
                codHospedagem: this.GetScope().Entity.Codigo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetImpressaoHospedagem", parametros);
            if (!retorno) {
                MostrarAlerta("Não foi possível imprimir a ficha. Verifique se ela foi configurada corretamente.");
                return;
            }
            this.ImprimirDocumentoWord(retorno.Itens, retorno.Documento, "N");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.OnBtnEmailClick = function (s, e) {
        e.processOnServer = false;
        if (!this.EntityTela.Codigo) {
            MostrarAlerta("Informe uma hospedagem cadastrada");
            return;
        }
        var parametros;
        parametros = {
            codHospedagem: this.EntityTela.Codigo,
            codProprietario: this.EntityTela.Proprietario
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("RetornarInformacoesEmail", parametros);
        this.EnviarEmail.MostrarClient(retorno.destinatarios, retorno.anexos, "Cadastro de Hospedagem", "");
        //this.EnviarEmail
    };
    C_HosCad_Angular.prototype.OnAtualizandoPresenca = function (s, e) {
        if (e.commandName == "ATUALIZAR_PRESENCA") {
            if (this.GetScope().Entity && this.GetScope().Entity.Finalizado) {
                MostrarAlerta("A hospedagem já foi finalizada.");
                return;
            }
            if (this.GetScope().Entity && this.GetScope().Entity.Cancelada) {
                MostrarAlerta("A hospedagem está cancelada. Não será possível continuar com a operação.");
                return;
            }
            var diaria = e.data;
            if (String.IsNullOrWhiteSpace(diaria.Presenca_Text) || diaria.Presenca_Text == 'Não Marcada') {
                MostrarAlerta("Informe a presença.");
                return;
            }
            var param = {
                jsonDiaria: JSON.stringify(e.data),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch('AtualizarPresencaPet', param);
            if (retorno) {
                MostrarMensagem("Presença atualizada com sucesso.");
                return;
            }
            else {
                MostrarAlerta("Ocorreu um problama ao atualizar a parcela.");
                return;
            }
        }
    };
    C_HosCad_Angular.prototype.OnClickBotaoLinha = function (s, e) {
        if (e.commandName == "Integrar_Atendimento_Zanthus") {
            if (this.EntityTela.isCortesia) {
                MostrarAlerta("A hospedagem é uma cortesia, não será possível continuar com a operação.");
                return;
            }
            if (this.GetScope().Entity && this.GetScope().Entity.Cancelada) {
                MostrarAlerta("A hospedagem está cancelada. Não será possível continuar com a operação.");
                return;
            }
            var parametros;
            parametros = {
                codAtendimento: e.data['Cod_Atendimento']
            };
            MsgBoxJS("Deseja realmente enviar o atendimento para que seja pago na Zanthus?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecinouOpcaoZanthus, this), parametros);
        }
    };
    C_HosCad_Angular.prototype.OnSelecinouOpcaoZanthus = function (e) {
        var _this = this;
        try {
            if (e.Resultado != MsgBoxResult.Yes) {
                return;
            }
            var parametros;
            parametros = {
                codAtendimento: e.Argument.codAtendimento,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera('Aguarde. Enviando atendimento para a Zanthus...');
            this.ExecutarFuncaoServerSideAsynch("EnviarAtendimentoZanthus", parametros, function (d) {
                fecharEspera();
                try {
                    var retorno = JSON.parse(d);
                    fecharEspera();
                    if (!String.IsNullOrWhiteSpace(retorno.d)) {
                        MostrarAlerta(retorno.d);
                        return;
                    }
                    MostrarMensagem("Envio realizado com sucesso!");
                    _this.ClicarGravar();
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                LogarException(erro);
                fecharEspera();
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.OnCboBaiaGotFocus = function (s, e) {
        if (this.cboBaia && this.cboBaia.Combo) {
            this.cboBaia.Combo.ShowDropDown();
        }
    };
    C_HosCad_Angular.prototype.OnCboBaia_comboBoxChange = function (s, e) {
        var _this = this;
        try {
            //Verifica se a baia está ocupada por outro animal, se estiver precisa verificar se o animal é do mesmo proprietário.
            var baiaHospedagem = this.GetScope().Entity.Baia;
            var parametros;
            if (baiaHospedagem && baiaHospedagem > 0) {
                //Alterando a BAIA
                if (baiaHospedagem != this.cboBaia.Combo.GetValue()) {
                    parametros = {
                        codLocal: this.txtLocalHospedagem.GetText().CNum(),
                        dataInicial: this.GetDataHoraEntrada().ToDate(),
                        dataFinal: this.GetDataHoraPrevisaoSaida().ToDate(),
                        codBaia: this.cboBaia.Combo.GetValue()
                    };
                    var baiaInfo = this.ExecutarFuncaoServerSideSynch("GetDadosBaia", parametros);
                    if (baiaInfo) {
                        if ((this.optTipoHospedagem.GetValue().CNum() == 1 /* HOTEL */)
                            && (baiaInfo.Animais_Baia > 0 && baiaInfo.Proprietario != this.EntityTela.Proprietario)
                            && !(baiaInfo.Permitir_Pet_Proprietario_Diferente)) {
                            MostrarAlerta("Esta baia está sendo utilizada por outro proprietário.");
                            if (baiaHospedagem && baiaHospedagem > 0) {
                                this.cboBaia.Combo.SetValue(baiaHospedagem.toString());
                            }
                            else {
                                this.cboBaia.LimparSelecao();
                            }
                        }
                        else {
                            debugger;
                            parametros = {
                                valorBaiaAnterior: baiaHospedagem,
                                valorBaiaNovo: this.cboBaia.Combo.GetValue()
                            };
                            var msg = "A baia desta hospedagem está sendo alterada. Confirmando esta operação as diárias deverão ser recalculadas. Deseja continuar com a ação?";
                            MsgBoxJS(msg, MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnMsgBoxAlterarBaia, this), parametros);
                            this.txtObservacao.Focus();
                            return;
                        }
                    }
                }
            }
            else {
                setTimeout(function () {
                    _this.CarregarServicosVinculadosBaias();
                }, 300);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.PreencherBaias = function (codLocal) {
        try {
            if (this.txtLocalHospedagem.GetText().CNum() <= 0) {
                return;
            }
            var parametros;
            parametros = {
                codLocal: this.txtLocalHospedagem.GetText().CNum(),
                dataInicial: this.GetDataHoraEntrada().ToDate(),
                dataFinal: this.GetDataHoraPrevisaoSaida().ToDate(),
                codHospedagem: this.txtCodigo.GetText().CNum(),
                codReserva: this.hdnReserva.value.CNum()
            };
            this.Baias = this.ExecutarFuncaoServerSideSynch("GetBaiasByLocal", parametros);
            if (this.cboBaia && this.cboBaia.Combo) {
                var baiaBKP = this.cboBaia.GetValue();
                this.cboBaia.Combo.ClearItems();
                for (var x = 0; x < this.Baias.length; x++) {
                    if (this.txtCodigo.GetText().CNum() == 0 && this.hdnReserva.value.CNum() == 0) {
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
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.MostrarOcultarCamposAvaliacao = function () {
        debugger;
        var exibirFichaClinica = ValoresSismoura.ConfiguracoesPetshop.Utilizar_Ficha_Clinica;
        if (exibirFichaClinica) {
            if (this.txtFichaClinica) {
                this.txtFichaClinica.Visible = true;
                this.txtDescricaoFichaClinica.Visible = true;
                //this.txtDescricaoFichaClinica.Obrigatorio = true;
            }
        }
        else {
            if (this.txtDiagnostico) {
                this.txtDiagnostico.Obrigatorio = true;
            }
        }
    };
    C_HosCad_Angular.prototype.OnAntesAbrirProcuraVeterinario = function (s, e) {
        e.Cancelar = false;
        this.txtVeterinario.AddParametro("EmpProf", "" + this.cboEmpresa.GetValue());
    };
    C_HosCad_Angular.prototype.OnProcurouFichaClinica = function (s, e) {
        var retorno;
        var parametros;
        if (!this.txtFichaClinica) {
            return;
        }
        parametros = {
            codFichaClinica: this.txtFichaClinica.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetInformacoesFichaClinica", parametros);
        if (!String.IsNullOrWhiteSpace(retorno)) {
            this.GetScope().Entity.Avaliacao_Animal.Ficha_Clinica = retorno;
            this.RefreshAngular();
        }
    };
    C_HosCad_Angular.prototype.OnProcurouExameFisico = function (s, e) {
        var retorno;
        var parametros;
        if (!this.txtExameFisico) {
            return;
        }
        parametros = {
            codExame: this.txtExameFisico.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetInformacoesExameFisico", parametros);
        if (!String.IsNullOrWhiteSpace(retorno)) {
            this.GetScope().Entity.Avaliacao_Animal.Exame_Fisico = retorno;
            this.RefreshAngular();
        }
    };
    C_HosCad_Angular.prototype.OnProcurouAnamnese = function (s, e) {
        var retorno;
        var parametros;
        if (!this.txtAnamnese) {
            return;
        }
        parametros = {
            codAnamnese: this.txtAnamnese.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetInformacoesAnamnese", parametros);
        if (!String.IsNullOrWhiteSpace(retorno)) {
            this.GetScope().Entity.Avaliacao_Animal.Anamnese = retorno;
            this.RefreshAngular();
        }
    };
    C_HosCad_Angular.prototype.OnBtnSalvarConsulta = function (s, e) {
        e.processOnServer = false;
        if (!this.ValidarCamposAvaliacaoAnimal()) {
            return;
        }
        var entidade = this.GetScope().Entity.Avaliacao_Animal;
        entidade.Hospedagem = this.txtCodigo.GetText().CNum();
        entidade.Cod_Animal = this.txtPet.TextBoxAnimal.GetText().CNum();
        entidade.Data = this.DataServidor().ToDate();
        entidade.Empresa = this.cboEmpresa.GetValue();
        entidade.Usuario = ValoresSismoura.UsuarioLogado;
        var parametros = {
            entidade: entidade,
            tela: ValoresSismoura.NomeTela.toString(),
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GravarAvaliacaoAnimal", parametros);
        if (retorno) {
            MostrarMensagem("Avaliação salva com sucesso!");
            this.LimparCamposAvaliacaoAnimal();
        }
        else {
            MostrarError("Ocorreu um erro inesperado ao gravar a avaliação.");
            return;
        }
    };
    C_HosCad_Angular.prototype.ValidarCamposAvaliacaoAnimal = function () {
        try {
            if (this.txtCodigo.GetText().CNum() == 0) {
                MostrarAlerta("Informe a Hospedagem para gravar a avaliação.");
                return;
            }
            if (this.txtVeterinario.GetText().CNum() == 0) {
                MostrarAlerta("Informe o veterinário responsável pela avaliação.");
                return;
            }
            if (this.txtAssunto.GetText().CNum() == 0) {
                MostrarAlerta("Informe o assunto.");
                return;
            }
            if (this.cboModelo.GetSelectedIndex() < 0) {
                MostrarAlerta("Informe o modelo para a avaliação.");
                return;
            }
            if (ValoresSismoura.ConfiguracoesPetshop.Utilizar_Data_Retorno) {
                if (!this.txtDataRetorno || !this.txtDataRetorno.Date) {
                    MostrarAlerta("Infome a data de retorno");
                    return;
                }
                var dtRetornoAvaliacao;
                dtRetornoAvaliacao = this.txtDataRetorno.Date.ToDate();
                dtRetornoAvaliacao.setHours(this.GetDataHoraEntrada().ToDate().getHours(), this.GetDataHoraEntrada().ToDate().getMinutes(), 0);
                if (dtRetornoAvaliacao.ToDate().getTime() < this.GetDataHoraEntrada().ToDate().getTime()) {
                    MostrarAlerta("A data do retorno não pode ser menor que a data de entrada da hospedagem");
                    return;
                }
            }
            if (ValoresSismoura.ConfiguracoesPetshop.Utilizar_Ficha_Clinica) {
                if (String.IsNullOrWhiteSpace(this.txtDescricaoFichaClinica.GetText())) {
                    MostrarAlerta("Informe a ficha clínica.");
                    return;
                }
            }
            else {
                if (String.IsNullOrWhiteSpace(this.txtDiagnostico.GetText())) {
                    MostrarAlerta("Informe o diagnóstico.");
                    return;
                }
            }
            return true;
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.LimparCamposAvaliacaoAnimal = function () {
        try {
            if (this.txtVeterinario) {
                this.txtVeterinario.Limpar();
            }
            if (this.txtAssunto) {
                this.txtAssunto.Limpar();
            }
            if (this.cboModelo) {
                this.cboModelo.LimparSelecao();
            }
            if (this.txtDataRetorno) {
                this.txtDataRetorno.Date = this.DataServidor();
            }
            if (this.txtFichaClinica) {
                this.txtFichaClinica.Limpar();
            }
            if (this.txtDescricaoFichaClinica) {
                this.txtDescricaoFichaClinica.Limpar();
            }
            if (this.txtDiagnostico) {
                this.txtDiagnostico.Limpar();
            }
            if (this.txtExameFisico) {
                this.txtExameFisico.Limpar();
            }
            if (this.txtDescricaoExameFisico) {
                this.txtDescricaoExameFisico.Limpar();
            }
            if (this.txtAnamnese) {
                this.txtAnamnese.Limpar();
            }
            if (this.txtDescricaoAnamnese) {
                this.txtDescricaoAnamnese.Limpar();
            }
            if (this.GetScope().Entity) {
                this.GetScope().Entity.Avaliacao_Animal = {};
                this.RefreshAngular();
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.habilitar = function (flag) {
        try {
            this.txtPet.TextBoxProprietario.Disabled = !flag;
            this.txtPet.TextBoxAnimal.Disabled = !flag;
            this.optTipoHospedagem.Enabled = flag;
            this.cboTipoDiaria.Enabled = flag;
            this.txtLocalHospedagem.Enabled = flag;
            this.txtLocalHospedagem.Disabled = !flag;
            this.cboEmpresa.Enabled = flag;
            //if (this.GetScope().Entity && (this.GetScope().Entity.Finalizado || )) {
            //    this.chkCortesia.Enabled = false;
            //} 
            if (ValoresSismoura.UsuarioLogado != 0) {
                this.txtUsuarioEntrada.Disabled = true;
                this.txtFuncionarioCheckout.Disabled = true;
            }
            else {
                this.txtUsuarioEntrada.Disabled = false;
                this.txtFuncionarioCheckout.Disabled = false;
            }
            //Aba CheckList - Avaliação comportamental.
            this.HabilitarDesabilitarCamposAvaliacaoFisica(flag);
            //Aba dados adicionais PET
            this.habilitarCamposDadosAdicionaisPET(true);
            if (this.txtCodigo.GetText().CNum() > 0 && this.GetScope().Entity && (this.GetScope().Entity.Finalizado || this.GetScope().Entity.Cancelada)) {
                this.txtDataEntrada.Enabled = flag;
                this.txtHoraEntrada.Enabled = flag;
                this.txtDataSaida.Enabled = flag;
                this.txtVeterinario.Disabled = !flag;
                this.txtAssunto.Disabled = !flag;
                this.txtDataRetorno.Enabled = flag;
                this.txtHoraCheckout.Enabled = flag;
                this.txtObservacao.Disabled = !flag;
                this.txtFuncionarioCheckout.Disabled = !flag;
                this.txtUsuarioEntrada.Disabled = true;
                this.txtFuncionarioCheckout.Disabled = true;
                if (this.txtFichaClinica) {
                    this.txtFichaClinica.Disabled = !flag;
                    this.txtDescricaoFichaClinica.Disabled = !flag;
                }
                this.cboQuantidadeMesesDaycare.Enabled = flag;
                this.cboBaia.Enabled = flag;
                this.cboServicoDiaria.Enabled = flag;
                this.cboModelo.Enabled = flag;
                this.cboServicoCheckout.Enabled = flag;
                //this.grdDiarias.Grid.Enabled = flag;  
                this.grdServicos.btnAdiconar.SetEnabled(flag);
                this.grdServicos.btnNovo.SetEnabled(flag);
                this.grdServicos.Grid.Enabled = flag;
                this.grdProdutosConsumidos.btnAdiconar.SetEnabled(flag);
                this.grdProdutosConsumidos.Grid.Enabled = flag;
                this.lstSemana.Enabled = flag;
                this.txtUsuarioEntrada.Disabled = true;
                this.txtFuncionarioCheckout.Disabled = true;
                this.btnSalvarFicha.SetEnabled(flag);
                this.habilitarCamposDadosAdicionaisPET(false);
                this.btnConsultas.SetEnabled(flag);
                this.btnSalvarConsulta.SetEnabled(flag);
                this.btnEmail.SetEnabled(flag);
                this.btnRecalcularDiarias.SetEnabled(flag);
                this.btnAdicionarDiaria.SetEnabled(flag);
            }
            this.habilitarDesabilitarGridDiarias();
            this.habilitarCamposFichaAvaliacao();
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.habilitarDesabilitarGridDiarias = function () {
        var habilitar = false;
        if (this.txtCodigo.GetText().CNum() > 0 && this.GetScope().Entity && (this.GetScope().Entity.Finalizado || this.GetScope().Entity.Cancelada)) {
            habilitar = false;
        }
        else if (this.txtCodigo.GetText().CNum() > 0 && this.GetScope().Entity) {
            habilitar = true;
        }
        this.grdDiarias.Grid.PermitirEditarGrid = habilitar;
        this.grdDiarias.Grid.SetColunaEditavel("Presenca_Text", habilitar);
        this.grdDiarias.Grid.SetColunaEditavel("Dia_Servico", habilitar);
        this.grdDiarias.Grid.SetColunaEditavel("Dia_Semana", habilitar);
        this.grdDiarias.Grid.SetColunaEditavel("Servico", habilitar);
        this.grdDiarias.Grid.ColunaVisible(this.grdDiarias.Grid.GetColunaByName("botaoTemplate_ATUALIZAR_PRESENCA"), habilitar);
    };
    C_HosCad_Angular.prototype.HabilitarDesabilitarCamposAvaliacaoFisica = function (habilitar) {
        //Aba CheckList - Avaliação Fisica.
        if (this.txtCheckListProcura.GetText().CNum() > 0) {
            this.txtCheckListProcura.Disabled = !habilitar;
            this.txtCheckList.Disabled = !habilitar;
            this.txtProfissionalCheckList.Disabled = !habilitar;
            if (!this.EntityTela.Assinatura || !this.EntityTela.Assinatura.Assinatura || this.EntityTela.Assinatura.Assinatura.length == 0) {
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
    C_HosCad_Angular.prototype.habilitarCamposDadosAdicionaisPET = function (flag) {
        this.txtVetRespPet.Enabled = flag;
        this.txtFoneVetRespPet.Enabled = flag;
        this.cboRestricaoAlimentar.Enabled = flag;
        this.txtRestricaoAlimentar.Enabled = flag;
        this.txtRacaoPet.Enabled = flag;
        this.txtQuantidadeRacao.Enabled = flag;
        this.cboCarteiraVacinacao.Enabled = flag;
        this.cboAtestado.Enabled = flag;
        this.cboCastrado.Enabled = flag;
    };
    C_HosCad_Angular.prototype.OnMsgBoxAlterarBaia = function (resultado) {
        var _this = this;
        try {
            debugger;
            if (resultado.Resultado == MsgBoxResult.No) {
                this.cboBaia.SetValue(resultado.Argument.valorBaiaAnterior);
                return;
            }
            this.cboBaia.SetValue(resultado.Argument.valorBaiaNovo);
            setTimeout(function () {
                _this.CarregarServicosVinculadosBaias();
            }, 300);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.OnSelecionouLinhaDiaria = function (s, e) {
        try {
            debugger;
            var linha = e.item;
            console.log(linha);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.IsHospedagemFinalizada = function () {
        if (this.GetScope().Entity && this.GetScope().Entity.Codigo > 0 && this.GetScope().Entity.Finalizado) {
            MostrarAlerta("Esta hospedagem já foi finalizada, não será possível altera-lá.");
            return true;
        }
        return false;
    };
    C_HosCad_Angular.prototype.OnValidandoAlteracaoDiaria = function (s, e) {
        try {
            var fieldAlterado = "" + e.fieldNameAlterado;
            var entidade;
            entidade = e.item;
            var servicos = this.Servicos;
            if (!servicos) {
                servicos = [];
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
            if (fieldAlterado.toLocaleLowerCase() == "servico") {
                e.errorText = "O serviço não pode ser alterado.";
                e.item.Servico = e.oldRowValue.Servico;
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
                if (this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */ &&
                    this.cboTipoDiaria.GetValue().CNum() == 1 /* MENSAL */) {
                    e.errorText = "A data não pode ser alterada para uma diária do daycare.";
                    e.item.Dia_Servico = e.oldRowValue.Dia_Servico;
                    e.cancelar = true;
                    return;
                }
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
                if (!(novoDia.isBetween(this.GetDataHoraEntrada().ToDate(), this.GetDataHoraPrevisaoSaida().ToDate(), false))) {
                    e.errorText = "A data informada está fora do período da hospedagem.";
                    e.item.Dia_Servico = e.oldRowValue.Dia_Servico;
                    e.cancelar = true;
                    return;
                }
                if (DiffDays(this.SetHoraData(novoDia, false), this.GetDataHoraPrevisaoSaida().ToDate()) == 0) {
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
    C_HosCad_Angular.prototype.IniciarValoresAutomaticosDiaria = function (Servico) {
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
    C_HosCad_Angular.prototype.OnSetouItemDiaria = function (s, e) {
        var entidade;
        entidade = e.item;
        this.IniciarValoresAutomaticosDiaria(entidade);
    };
    C_HosCad_Angular.prototype.OnAlterandoDiaria = function (s, e) {
        var valorAntigo = e.oldRowValue;
    };
    C_HosCad_Angular.prototype.getRetornoComplementoItemServico = function (entidade, indexItem, codBaia) {
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
    C_HosCad_Angular.prototype.OnSetouItemServico = function (s, e) {
        var entidade;
        entidade = e.item;
        this.IniciarValoresAutomaticosServico(entidade);
    };
    C_HosCad_Angular.prototype.IniciarValoresAutomaticosServico = function (servico) {
        if (servico.__lookupGetter__("Valor_Final") == undefined) {
            servico.Valor_Final = undefined;
            servico.__defineGetter__("Valor_Final", function () {
                return (servico.Qtde * servico.Valor) - servico.Desconto;
            });
            servico.__defineSetter__("Valor_Final", function (val) {
            });
        }
        if (servico.__lookupGetter__("Desconto_Porcentagem") == undefined) {
            servico.Desconto_Porcentagem = undefined;
            servico.__defineGetter__("Desconto_Porcentagem", function () {
                if ((servico.Valor * servico.Qtde) == 0)
                    return 0;
                return (servico.Desconto / (servico.Valor * servico.Qtde)) * 100;
            });
            servico.__defineSetter__("Desconto_Porcentagem", function (val) {
                if (val < 0) {
                    val = 0;
                }
                if (val > 100) {
                    val = 100;
                }
                servico.Desconto = (servico.Valor * servico.Qtde) * (val / 100);
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
    };
    C_HosCad_Angular.prototype.OnLimpouItemServico = function (s, e) {
        try {
            var entidade;
            entidade = e.item;
            var servicos = [];
            if (this.Servicos) {
                servicos = this.Servicos;
            }
            if (!servicos)
                servicos = [];
            var maxContador = 0;
            for (var x = 0; x < servicos.length; x++) {
                if (servicos[x].Item > maxContador) {
                    maxContador = servicos[x].Item;
                }
            }
            entidade.Item = maxContador + 1;
            entidade.Qtde = 1;
            entidade.Valor = 0.0;
            entidade.Desconto = 0.0;
            entidade.Valor_Final = 0.0;
            entidade.Concluido = false;
            entidade.Data_Execucao = this.DataServidor();
            entidade.Data_Cadastro = this.DataServidor();
            entidade.Profissional = 0;
            entidade.Presenca_Text = "Não";
            entidade.Concluido_Text = "Não";
            entidade.Dia_Servico = this.DataServidor();
            entidade.Hospedagem = 0;
            entidade.Hora_Servico = this.DataServidor();
            this.cboListaPreco.ClearItems();
            //this.txtHoraServico.textBoxHorario.SetText(this.DataServidor().FormataHoraSismoura());
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.OnAdiciouItemServico = function (s, e) {
        try {
            var entidade = e.item;
            entidade.Nome_Servico = this.txtServico.GetResultado();
            entidade.Nome_Profissional = this.txtProfissional.GetResultado();
            entidade.Funcionario = ValoresSismoura.UsuarioLogado;
            this.txtServico.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.OnValidandoItemServico = function (s, e) {
        try {
            this.GetScope().$applyAsync();
            var fieldAlterado = "" + e.fieldNameAlterado;
            var entidade;
            entidade = e.item;
            var servicos = this.Servicos;
            if (!servicos) {
                servicos = [];
            }
            var descPorc = entidade.Desconto_Porcentagem;
            //this.IniciarValoresAutomaticosServico(entidade);
            if (descPorc != null && descPorc != undefined) {
                //Faz este procedimento para corriir os valores de desconto
                entidade.Desconto_Porcentagem = descPorc;
            }
            if (!this.ValidarAdicionarServico(entidade)) {
                e.cancelar = true;
                return;
            }
            //Atualiza a variável retornoComplementosItemServico;
            this.getRetornoComplementoItemServico(entidade, e.index);
            if (!this.retornoComplementosItemServico) {
                MostrarAlerta("Serviço não encontrado");
                e.cancelar = true;
                return;
            }
            if (this.retornoComplementosItemServico.IsHospedagem) {
                MostrarAlerta("Serviço é uma hospedagem.");
                return;
            }
            if (this.retornoComplementosItemServico.IsInternacao) {
                MostrarAlerta("Serviço é uma internação.");
                return;
            }
            if (!this.retornoComplementosItemServico.IsParticipante && entidade.Profissional <= 0) {
                e.errorText = "Informe o campo profissional";
                e.cancelar = true;
                return;
            }
            if (!entidade.Data_Cadastro) {
                e.errorText = "Informe a data";
                e.cancelar = true;
                return;
            }
            if (!entidade.Data_Execucao) {
                e.errorText = "Informe a previsão";
                e.cancelar = true;
                return;
            }
            var parametros;
            parametros = {
                Data: entidade.Data_Cadastro,
                Previsao: entidade.Data_Execucao.FormataHoraSismoura(),
                Profissional: ("" + entidade.Profissional).CNum(),
                Proprietario: ("" + this.GetScope().Entity.Proprietario).CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificaHorarioDisponivel", parametros);
            if (retorno == true) {
                MsgBoxJS("Já existe um agendamento para o profissional selecionado neste mesmo horário! Não será possível realizar o agendamento.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
                e.cancelar = true;
                return;
            }
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
                }
                this.AlterarCamposAtendimentoPago(true);
            }
            if (e.index < 0 && this.perguntouAdicionarServicoDuplicado == false) {
                for (var x = 0; x <= servicos.length - 1; x++) {
                    if (servicos[x].Servico == entidade.Servico) {
                        this.perguntouAdicionarServicoDuplicado = true;
                        //MsgBoxJS("Serviço já existente na grade. Deseja somar a quantidade?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoInserirServico, this), x);
                        //e.cancelar = true;
                        //return;
                        //adicionar novo servico
                        this.grdServicos.AdicionarOuAlterarItemAtual();
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
            if (this.retornoComplementosItemServico.IsServicoComDoses) {
                e.errorText = "Este serviço contém DOSES e deve ser agendado pelo AGENDAMENTO DE VACINAS/VERMÍFUGOS e não pode ser agendado deste modo AVULSO !";
                e.cancelar = true;
                return;
            }
            if (this.retornoComplementosItemServico.IsProfissionalIndisponivel) {
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
            if (this.retornoComplementosItemServico.IsMostrarFuncaoAdmRetorno && !this.mostrouFuncao) {
                this.dlgFuncaoAdm.Verificar("BloRetCo", ValoresSismoura.UsuarioLogado, false, this.VerificarFuncaoAdmBloquearRetorno, this);
                e.cancelar = true;
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.AlterarCamposAtendimentoPago = function (isAtendimentopago) {
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
    C_HosCad_Angular.prototype.AlterarColunasEditaveisVenda = function (editavel) {
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
    };
    C_HosCad_Angular.prototype.OnSelecionouOpcaoInserirServico = function (e) {
        try {
            if (e.Resultado == MsgBoxResult.Yes) {
                //somar a quantidade existente na grade
                var servicos = this.Servicos;
                if (!servicos) {
                    servicos = [];
                }
                if (this.Servico && this.Servico.Qtde) {
                    servicos[e.Argument].Qtde = servicos[e.Argument].Qtde + this.Servico.Qtde;
                }
                this.Servicos = servicos;
                this.grdServicos.Grid.PreencherGrid([]);
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
    C_HosCad_Angular.prototype.VerificarFuncaoAdmBloquearRetorno = function (retorno) {
        this.mostrouFuncao = true;
        this.grdServicos.AdicionarOuAlterarItemAtual();
    };
    C_HosCad_Angular.prototype.OnExcluindoItemServico = function (s, e) {
        if (!(this.Servicos || this.Servicos.length > 0)) {
            e.cancelar = true;
            return;
        }
        var codigoAtendimento = e.item["Atendimento"];
        var codServico = e.item["Servico"];
        var _contador = e.item["Item"];
        try {
            if (codigoAtendimento && codigoAtendimento > 0) {
                if (this.GetScope().Entity.Finalizado) {
                    MostrarAlerta("Não é possível excluir o serviço de uma hospedagem finalizada!");
                    e.cancelar = true;
                    return;
                }
                var parametros = {
                    codAtendimento: codigoAtendimento
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("IsAtendimentoPago", parametros);
                if (retorno) {
                    MostrarAlerta("Esse serviço já foi pago. Não é possível excluí-lo!");
                    e.cancelar = true;
                    return;
                }
                var parametros = {
                    codAtendimento: codigoAtendimento,
                    codServico: codServico
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("IsServicoConcluido", parametros);
                if (retorno) {
                    MostrarAlerta("O Atendimento desse serviço já foi concluido. Não é possível excluí-lo!");
                    e.cancelar = true;
                    return;
                }
            }
            var parametros = {
                Contador: _contador
            };
            if (_contador > 0) {
                MsgBoxJS("Deseja realmente excluir o serviço?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnMsgBoxEcluirServicoGrade, this), parametros);
                e.cancelar = true;
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.OnAlterandoItem = function (s, e) {
        var valorAntigo = e.oldRowValue;
        if (valorAntigo.IsPago) {
            if (e.fieldNameAlterado == 'Valor') {
                e.cancelar = true;
                return;
            }
        }
    };
    C_HosCad_Angular.prototype.OnSetouItemProdutoConsumido = function (s, e) {
        var entidade;
        entidade = e.item;
        this.IniciarValoresAutomaticosProdutosConsumidos(entidade);
    };
    C_HosCad_Angular.prototype.IniciarValoresAutomaticosProdutosConsumidos = function (produto) {
        if (produto.__lookupGetter__("Valor_Total") == undefined) {
            produto.Valor_Total = undefined;
            produto.__defineGetter__("Valor_Total", function () {
                return (produto.Quantidade * produto.Valor_Unitario);
            });
            produto.__defineSetter__("Valor_Total", function (val) {
            });
        }
        Object.defineProperty(produto, "Pago_Text", {
            get: function () {
                return produto.Pago ? "Sim" : "Não";
            },
            set: function (val) {
                produto.Pago = (val == "Sim");
            },
            enumerable: true,
            configurable: true
        });
    };
    C_HosCad_Angular.prototype.OnLimpouItemProdutoConsumido = function (s, e) {
        try {
            var entidade;
            entidade = e.item;
            var produtos = [];
            if (this.ProdutosConsumidos) {
                produtos = this.ProdutosConsumidos;
            }
            if (!produtos)
                produtos = [];
            var maxContador = 0;
            for (var x = 0; x < produtos.length; x++) {
                if (produtos[x].Item > maxContador) {
                    maxContador = produtos[x].Item;
                }
            }
            entidade.Item = maxContador + 1;
            entidade.Quantidade = 1;
            entidade.Valor_Unitario = 0.0;
            entidade.Valor_Total = 0.0;
            entidade.Pago = false;
            entidade.Pago_Text = "Não";
            entidade.Hospedagem = 0;
            entidade.Atendimento = 0;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.OnAdiciouItemProdutoConsumido = function (s, e) {
        try {
            var entidade = e.item;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.OnValidandoItemProdutoConsumido = function (s, e) {
        try {
            this.GetScope().$applyAsync();
            var fieldAlterado = "" + e.fieldNameAlterado;
            var entidade;
            entidade = e.item;
            var produtos = this.ProdutosConsumidos;
            if (!produtos) {
                produtos = [];
            }
            //this.IniciarValoresAutomaticosProdutosConsumidos(entidade);
            if (ValoresSismoura.ConfiguracoesPetshop.Permitir_Checkout_Hospedagem_Sem_Pagamento) {
                e.errorText = "Não será possível adicionar produtos a esta hospedagem, o sistema está operando em modo de homologação. Entre em contato com o suporte de TI.";
                e.cancelar = true;
                return;
            }
            if (!entidade.Codigo_Barras || String.IsNullOrWhiteSpace(entidade.Codigo_Barras)) {
                e.errorText = "Informe o código de barras";
                e.cancelar = true;
                return;
            }
            if (!entidade.Nome_Produto || String.IsNullOrWhiteSpace(entidade.Nome_Produto)) {
                e.errorText = "Informe o nome do produto.";
                e.cancelar = true;
                return;
            }
            if (!entidade.Valor_Unitario || entidade.Valor_Unitario == 0) {
                e.errorText = "Informe o valor unitário do produto";
                e.cancelar = true;
                return;
            }
            if (!entidade.Quantidade || entidade.Quantidade == 0) {
                e.errorText = "Informe a quantidade do produto";
                e.cancelar = true;
                return;
            }
            if (this.GetScope().Entity.Finalizado) {
                if (fieldAlterado.toLocaleLowerCase() == "Pago_Text") {
                    if (e.oldRowValue.Pago_Text == "Sim") {
                        e.errorText = "A hospedagem já foi finalizada.";
                        e.cancelar = true;
                        return;
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.OnExcluindoItemProdutoConsumido = function (s, e) {
        if (!(this.ProdutosConsumidos || this.ProdutosConsumidos.length > 0)) {
            e.cancelar = true;
            return;
        }
        var codigoAtendimento = e.item["Atendimento"];
        var cod_barras = e.item["Codigo_Barras"];
        var _contador = e.item["Item"];
        try {
            if (codigoAtendimento && codigoAtendimento > 0) {
                if (this.GetScope().Entity.Finalizado) {
                    MostrarAlerta("Não é possível excluir o serviço de uma hospedagem finalizada!");
                    e.cancelar = true;
                    return;
                }
            }
            var parametros = {
                Contador: _contador
            };
            if (_contador > 0) {
                MsgBoxJS("Deseja realmente excluir o produto?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnMsgBoxEcluirProdutoConsumidoGrade, this), parametros);
                e.cancelar = true;
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.OnMsgBoxEcluirProdutoConsumidoGrade = function (resultado) {
        try {
            if (resultado.Resultado == MsgBoxResult.No) {
                return;
            }
            var contador = resultado.Argument.Contador;
            var indexToRemove = -1;
            for (var i = 0; i < this.ProdutosConsumidos.length; i++) {
                if (this.ProdutosConsumidos[i].Item == contador) {
                    indexToRemove = i;
                    break;
                }
            }
            if (indexToRemove > -1) {
                this.ProdutosConsumidos.splice(indexToRemove, 1);
            }
            this.grdProdutosConsumidos.Grid.PreencherGrid(this.ProdutosConsumidos);
            this.grdProdutosConsumidos.Grid.Refresh();
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.OnAlterandoItemProdutoConsumido = function (s, e) {
        var valorAntigo = e.oldRowValue;
    };
    C_HosCad_Angular.prototype.OnTxtValorProdutoConsumidoChange = function () {
        this.CalcularTotalProdutoConsumido();
    };
    C_HosCad_Angular.prototype.txtQuantidadeProdutoConsumidoChange = function () {
        if (this.txtQuantidadeProdutoConsumido.GetText().CNum() == 0) {
            this.txtQuantidadeProdutoConsumido.SetText("1");
        }
        this.CalcularTotalProdutoConsumido();
    };
    C_HosCad_Angular.prototype.CalcularTotalProdutoConsumido = function () {
        try {
            var total = this.txtQuantidadeProdutoConsumido.GetText().CNum() * this.txtValorUnitarioProdutoConsumido.GetText().CNum();
            if (this.ProdutoConsumido) {
                this.ProdutoConsumido.Valor_Total = total;
                this.RefreshAngular();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.validarInformacoesAntesGravar = function () {
        try {
            var totalDias = 0;
            if (this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */) {
                totalDias = this.GetNumeroDiariasGerarDaycare();
            }
            else {
                totalDias = this.GetNumeroDiariasGerar(false);
            }
            var mensgem = "\n                                    Aten\u00E7\u00E3o. o per\u00EDodo da hospedagem informado foi de " + this.txtDataEntrada.Date.ToDate().FormataData() + " \n                                    at\u00E9 " + this.txtDataSaida.Date.ToDate().FormataData() + " totalizando " + totalDias + " dia(s). Deseja confirmar as datas e prosseguir?\n                                    ";
            MsgBoxJS(mensgem, MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnValidandoInformacoesHospedagem, this));
        }
        catch (e) {
        }
    };
    C_HosCad_Angular.prototype.OnValidandoInformacoesHospedagem = function (result) {
        if (result.Resultado == MsgBoxResult.No) {
            return;
        }
        this.validouInformacoesHospedagem = true;
        this.ClicarGravar();
    };
    C_HosCad_Angular.prototype.OnRespostaAvaliacaoComportamental = function (resultado) {
        try {
            var animal = CNum(this.txtPet.TextBoxAnimal.GetText().CNum());
            //Foi solicitado por Luana  que a avaliação comportamental não seja obrigatória, para não travar o processo de check-in/reserva
            //this.Limpar();
            if (resultado.Resultado == MsgBoxResult.No) {
                return;
            }
            var parametrosTela = [];
            parametrosTela.push("pet=" + animal);
            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.AvaliacaoComportamental), parametrosTela);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.alterarCamposTipoHospedagem = function () {
        var _this = this;
        try {
            if (!this.optTipoHospedagem.GetValue()) {
                return;
            }
            //console.log("alterarCamposTipoHospedagem")
            this.grdDiarias.Grid.ColunaVisible(this.grdServicos.Grid.GetColunaByName("botaoExcluir"), false);
            if (this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */) {
                this.tab.AlterarVisibleAba("AbaSaida", false);
                if (this.btnCheckout) {
                    this.btnCheckout.Text = "Finalizar Daycare";
                }
                if (this.txtCodigo.GetText().CNum() == 0) {
                    this.txtDataEntrada.Enabled = true;
                    this.txtDataEntrada.Disabled = false;
                    this.cboQuantidadeMesesDaycare.Enabled = true;
                }
                else {
                    this.txtDataEntrada.Enabled = false;
                    this.txtDataEntrada.Disabled = true;
                    this.cboQuantidadeMesesDaycare.Enabled = false;
                }
                this.txtDataDiaria.Visible = false;
                this.btnAdicionarDiariaAvulsa.Visible = false;
                this.cboServicoDiaria.Visible = false;
                this.lblQtdeDias.Visible = false;
                this.lblDias2.Visible = false;
                this.btnAdicionarDiaria.Visible = false;
                this.btnRecalcularDiarias.Visible = false;
                this.lstSemana.Visible = false;
                this.cboTipoDiaria.Visible = true;
                this.txtDataSaida.Enabled = false;
                setTimeout(function () {
                    _this.mudarTipoDiaria();
                }, 300);
                this.cboQuantidadeMesesDaycare.Visible = true;
            }
            else {
                this.tab.AlterarVisibleAba("AbaSaida", true);
                if (this.btnCheckout) {
                    this.btnCheckout.Text = "Check-out";
                }
                this.txtDataEntrada.Enabled = false;
                this.txtDataEntrada.Disabled = true;
                this.lstSemana.Visible = false;
                this.txtDataDiaria.Visible = false;
                this.btnAdicionarDiariaAvulsa.Visible = false;
                this.cboServicoDiaria.Visible = true;
                this.lblQtdeDias.Visible = true;
                this.lblDias2.Visible = true;
                this.btnAdicionarDiaria.Visible = true;
                this.btnRecalcularDiarias.Visible = true;
                this.cboTipoDiaria.Visible = false;
                this.txtDataSaida.Enabled = true;
                this.cboQuantidadeMesesDaycare.Visible = false;
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.calcularUltimoDiaMensalidadeDaycare = function (dtInicial) {
        try {
            var quantidadeMeses = this.cboQuantidadeMesesDaycare.GetValue();
            if (!quantidadeMeses || quantidadeMeses <= 0) {
                quantidadeMeses = 1;
            }
            var dtAux = dtInicial;
            dtAux.setHours(0, 0, 0, 0);
            var diasLancar = 30 * quantidadeMeses;
            //Estou adicionando desta forma pois preciso considerar a data inicial como um dia utilizado.
            for (var i = 1; i < diasLancar; i++) {
                dtAux = dtAux.addDays(1);
            }
            return dtAux;
        }
        catch (e) {
        }
    };
    C_HosCad_Angular.prototype.mudarTipoDiaria = function () {
        if (!(this.optTipoHospedagem.GetValue().CNum() == 2 /* DAYCARE */)) {
            return;
        }
        var tipoDiaria = this.cboTipoDiaria.GetValue() && this.cboTipoDiaria.GetValue() > 0 ? this.cboTipoDiaria.GetValue() : 0 /* NENHUMA */;
        console.log("mudarTipoDiaria - tipo: " + tipoDiaria);
        this.grdDiarias.Grid.ColunaVisible(this.grdServicos.Grid.GetColunaByName("botaoExcluir"), false);
        if (tipoDiaria == 0 /* NENHUMA */) {
            this.txtDataDiaria.Visible = false;
            this.btnAdicionarDiariaAvulsa.Visible = false;
            this.cboServicoDiaria.Visible = false;
            this.lstSemana.Visible = false;
            this.lblQtdeDias.Visible = false;
            this.lblDias2.Visible = false;
            this.btnAdicionarDiaria.Visible = false;
            this.btnRecalcularDiarias.Visible = false;
        }
        else if (tipoDiaria == 2 /* AVULSA */) {
            this.txtDataDiaria.Visible = true;
            this.btnAdicionarDiariaAvulsa.Visible = true;
            this.cboServicoDiaria.Visible = true;
            this.lstSemana.Visible = false;
            this.lblQtdeDias.Visible = false;
            this.lblDias2.Visible = false;
            this.btnAdicionarDiaria.Visible = false;
            this.btnRecalcularDiarias.Visible = false;
            if (this.txtCodigo.GetText().CNum() == 0) {
                this.txtDataSaida.Date = this.DataServidor().addDays(1);
                this.txtDataDiaria.Date = this.DataServidor();
            }
            if (this.txtCodigo.GetText().CNum() == 0) {
                this.grdDiarias.Grid.ColunaVisible(this.grdServicos.Grid.GetColunaByName("botaoExcluir"), true);
            }
            this.cboQuantidadeMesesDaycare.Visible = false;
            this.txtDataSaida.Enabled = true;
        }
        else {
            this.txtDataDiaria.Visible = false;
            this.btnAdicionarDiariaAvulsa.Visible = false;
            this.cboServicoDiaria.Visible = true;
            this.lstSemana.Visible = true;
            this.lblQtdeDias.Visible = true;
            this.lblDias2.Visible = true;
            this.btnAdicionarDiaria.Visible = true;
            this.btnRecalcularDiarias.Visible = true;
            if (this.txtCodigo.GetText().CNum() == 0) {
                var dt = this.txtDataEntrada.Date.ToDate();
                dt.setHours(0, 0, 0, 0);
                this.txtDataSaida.Date = this.calcularUltimoDiaMensalidadeDaycare(dt);
            }
            this.cboQuantidadeMesesDaycare.Visible = true;
            this.txtDataSaida.Enabled = false;
        }
    };
    C_HosCad_Angular.prototype.OnCboTipoDiariaChange = function (s, e) {
        try {
            this.mudarTipoDiaria();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.podeAdicionarDiariaAvulsa = function () {
        if (this.IsHospedagemFinalizada()) {
            return;
        }
        if (!this.validarAdicionarDiaria()) {
            return;
        }
        if (!this.podeAdicionarDiaria(0, this.cboServicoDiaria.GetValue(), this.GetProfissionalDiaria.Codigo, this.GetDataHoraEntrada(), false)) {
            return;
        }
        if (!this.txtDataDiaria.Date) {
            MsgBoxJS("Informe a data da diária.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
            return;
        }
        var dataDiaria = this.txtDataDiaria.Date.ToDate();
        dataDiaria.setHours(0, 0, 0, 0);
        var dataEntrada = this.txtDataEntrada.Date.ToDate();
        dataEntrada.setHours(0, 0, 0, 0);
        //Verifica se a data informada é maior que a data de entrada.
        if (dataDiaria.getTime() < dataEntrada.getTime()) {
            MsgBoxJS("A data informada está fora do período da hospedagem.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
            return;
        }
        var dataSaida = this.txtDataSaida.Date.ToDate();
        dataSaida.setHours(0, 0, 0, 0);
        //Verifica se a data informada é maior que a data de entrada.
        if (dataDiaria.getTime() > dataSaida.getTime()) {
            MsgBoxJS("A data informada está fora do período da hospedagem..", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
            return;
        }
        //Verifica se existe disponibilidade na data informada.
        var baia = this.cboBaia.GetValue();
        var parametros = {
            codBaia: baia,
            dataDiaria: dataDiaria
        };
        var isDataDisponivel = this.ExecutarFuncaoServerSideSynch("isBaiaDisponivelData", parametros);
        if (!isDataDisponivel) {
            MsgBoxJS("Não existe disponibilidade na data informada.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
            return;
        }
        //Verifica se já foi adicionada esta data na grid de diárias.
        var isDataLivre = true;
        dataDiaria.setHours(0, 0, 0, 0);
        if (this.Diarias && this.Diarias.length > 0) {
            this.Diarias.forEach(function (x) {
                var dtDiariaGrade = x.Dia_Servico;
                dtDiariaGrade.setHours(0, 0, 0, 0);
                if (dataDiaria.getTime() == dtDiariaGrade.getTime()) {
                    isDataLivre = false;
                }
            });
        }
        if (!isDataLivre) {
            MsgBoxJS("Já existe uma diária nesta mesma data.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
            return;
        }
        var parametros = {
            codAnimal: CNum(this.txtPet.TextBoxAnimal.GetText()),
            dataDiaria: dataDiaria,
            tipoHospedagem: this.cboTipoDiaria.GetValue()
        };
        var hospedagemReservaPendente = this.ExecutarFuncaoServerSideSynch("GetHospedagemReservaPendenteByAimal", parametros);
        var reserva = hospedagemReservaPendente.reserva;
        var hospedagem = hospedagemReservaPendente.hospedagem;
        if (reserva) {
            MsgBoxJS("O pet possui a reserva " + reserva.Codigo + " em aberto.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
            return;
        }
        if (hospedagem) {
            MsgBoxJS("O pet possui uma hospedagem " + hospedagem.Codigo + " em aberto.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
            return;
        }
        return true;
    };
    C_HosCad_Angular.prototype.OnCboServicoAcaoCheckoutChanged = function (s, e) {
        this.AtualizarCalculoHorasAdicionais();
    };
    C_HosCad_Angular.prototype.AtualizarCalculoHorasAdicionais = function () {
        try {
            var valorServico;
            var servicoSelecionado = this.cboServicoAcaoCheckout.GetValue();
            var servicos = this.ServicosCarregadosBaia;
            if (servicos && servicos.length > 0 && servicoSelecionado > 0) {
                servicos.forEach(function (x) {
                    if (x.Codigo == servicoSelecionado
                        && x.Valor
                        && x.Valor > 0) {
                        valorServico = CNum(x.Valor);
                        return;
                    }
                });
            }
            var opcao = this.cboOpcaoAdicaoHoraCheckout.GetValue();
            var horasAdicionais = this.GetQuantidadeHorasExcedidas();
            switch (CNum(opcao)) {
                case 2 /* enADICIONAR_VALOR_SERVICO */:
                    valorServico = valorServico * horasAdicionais;
                    this.lblValorAdicional.Text = "Horas adicionais " + horasAdicionais + "h- valor adiconal R$ " + (valorServico > 0 ? valorServico.Format(2) : 0.00);
                    break;
                case 3 /* enADICIONAR_DIARIA */:
                    var quantidadeDiariasAdicionar = horasAdicionais / 24;
                    if (quantidadeDiariasAdicionar < 1) {
                        quantidadeDiariasAdicionar = 1;
                    }
                    quantidadeDiariasAdicionar = Math.floor(quantidadeDiariasAdicionar);
                    valorServico = valorServico * quantidadeDiariasAdicionar;
                    this.lblValorAdicional.Text = "Dia(s) excedido(s) " + Math.floor(quantidadeDiariasAdicionar) + " - valor adiconal R$ " + (valorServico > 0 ? valorServico.Format(2) : 0.00);
                    break;
                default:
                    this.lblValorAdicional.Text = "Horas adicionais " + horasAdicionais + "h";
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.OnCboOpcaoAdicaoHoraCheckoutChanged = function (s, e) {
        try {
            var opcao = this.cboOpcaoAdicaoHoraCheckout.GetValue();
            if (opcao == 3 /* enADICIONAR_DIARIA */
                || opcao == 2 /* enADICIONAR_VALOR_SERVICO */) {
                this.cboServicoAcaoCheckout.Obrigatorio = true;
                this.cboServicoAcaoCheckout.Visible = true;
                this.lblValorAdicional.Text = "";
                this.lblValorAdicional.Visible = true;
                this.AtualizarCalculoHorasAdicionais();
            }
            else {
                this.cboServicoAcaoCheckout.Obrigatorio = false;
                this.cboServicoAcaoCheckout.Visible = false;
                this.lblValorAdicional.Visible = false;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.OnBtnConfirmarAcaoCheckoutClick = function (s, e) {
        try {
            var opcao = this.cboOpcaoAdicaoHoraCheckout.GetValue();
            if (!opcao) {
                return;
            }
            if (opcao == 2 /* enADICIONAR_VALOR_SERVICO */
                || opcao == 3 /* enADICIONAR_DIARIA */) {
                if (!this.cboServicoAcaoCheckout.GetValue() || this.cboServicoAcaoCheckout.GetValue() == 0) {
                    return;
                }
            }
            switch (CNum(opcao)) {
                case 2 /* enADICIONAR_VALOR_SERVICO */:
                    var quantidadeHorasExcedeu = this.GetQuantidadeHorasExcedidas();
                    this.AdicionarDiariaCheckout(this.cboServicoAcaoCheckout.GetValue(), quantidadeHorasExcedeu);
                    this.ExecutarCheckoutDepoisGravar = true;
                    this.GetScope().Entity.Calculou_Diaria_Adicional_CheckOut = true;
                    this.GetScope().Entity.isFazendoCheckout = true;
                    this.RefreshAngular();
                    this.ClicarGravar();
                    break;
                case 3 /* enADICIONAR_DIARIA */:
                    var quantidadeHorasExcedeu = this.GetQuantidadeHorasExcedidas();
                    var quantidadeDiariasAdicionar = quantidadeHorasExcedeu / 24;
                    if (quantidadeDiariasAdicionar < 1) {
                        quantidadeDiariasAdicionar = 1;
                    }
                    for (var x = 1; x <= quantidadeDiariasAdicionar; x++) {
                        this.AdicionarDiariaCheckout(this.cboServicoAcaoCheckout.GetValue());
                    }
                    this.ExecutarCheckoutDepoisGravar = true;
                    this.GetScope().Entity.Calculou_Diaria_Adicional_CheckOut = true;
                    this.GetScope().Entity.isFazendoCheckout = true;
                    this.RefreshAngular();
                    this.ClicarGravar();
                    break;
                default:
                    this.CheckOut();
            }
            this.dlgAdicionalCheckout.ModalDialog.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.OnBtnCancelarAcaoCheckoutClick = function (s, e) {
        this.dlgAdicionalCheckout.ModalDialog.Hide();
    };
    C_HosCad_Angular.prototype.EnviarEmailHospedagem = function (operacao) {
        var parametros;
        if (!this.EntityTela.Codigo) {
            MostrarAlerta("Informe uma hospedagem cadastrada");
            return;
        }
        if (!this.EntityTela.Finalizado) {
            MostrarAlerta("Esta hospedagem ainda não foi finalizada");
            return;
        }
        try {
            var parametros;
            parametros = {
                codHospedagem: this.EntityTela.Codigo,
                codOperecaoEmail: operacao
            };
            abrirEspera("Aguarde. Enviando email...");
            this.ExecutarFuncaoServerSideAsynch("EnviarEmailHospedagem", parametros, function (d) {
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
    C_HosCad_Angular.prototype.calcularDescontoPDiaria = function () {
        try {
            var codServico = this.cboServicoDiaria.GetValue();
            if (!codServico || codServico == 0) {
                this.LimparCamposDesconto();
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
            var quantidadeGerar = 0;
            if (this.GetScope().Entity.Tipo_Hospedagem == 1 /* HOTEL */) {
                quantidadeGerar = this.GetNumeroDiariasGerar(false);
                if (this.Diarias) {
                    var diariasGeradas = 0;
                    this.Diarias.forEach(function (x) {
                        if (x.Atendimento && x.Atendimento > 0) {
                            diariasGeradas += 1;
                        }
                    });
                    quantidadeGerar = quantidadeGerar - diariasGeradas;
                }
            }
            else {
                if (this.cboTipoDiaria.GetValue() == 2 /* AVULSA */) {
                    quantidadeGerar = 1;
                }
                else {
                    quantidadeGerar = this.GetNumeroDiariasGerarDaycare();
                    if (this.Diarias) {
                        var diariasGeradas = 0;
                        this.Diarias.forEach(function (x) {
                            if (x.Atendimento && x.Atendimento > 0) {
                                diariasGeradas += 1;
                            }
                        });
                        quantidadeGerar = quantidadeGerar - diariasGeradas;
                    }
                }
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
    C_HosCad_Angular.prototype.calcularDescontoDiaria = function () {
        try {
            var codServico = this.cboServicoDiaria.GetValue();
            if (!codServico || codServico == 0) {
                this.LimparCamposDesconto();
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
            var quantidadeGerar = 0;
            //Hotel
            if (this.GetScope().Entity.Tipo_Hospedagem == 1 /* HOTEL */) {
                quantidadeGerar = this.GetNumeroDiariasGerar(false);
                if (this.Diarias) {
                    var diariasGeradas = 0;
                    this.Diarias.forEach(function (x) {
                        if (x.Atendimento && x.Atendimento > 0) {
                            diariasGeradas += 1;
                        }
                    });
                    quantidadeGerar = quantidadeGerar - diariasGeradas;
                }
            }
            else { //Daycare
                if (this.cboTipoDiaria.GetValue() == 2 /* AVULSA */) {
                    quantidadeGerar = 1;
                }
                else {
                    quantidadeGerar = this.GetNumeroDiariasGerarDaycare();
                    if (this.Diarias) {
                        var diariasGeradas = 0;
                        this.Diarias.forEach(function (x) {
                            if (x.Atendimento && x.Atendimento > 0) {
                                diariasGeradas += 1;
                            }
                        });
                        quantidadeGerar = quantidadeGerar - diariasGeradas;
                    }
                }
            }
            this.DiariaCalculada.Valor = servico.Valor * quantidadeGerar;
            this.DiariaCalculada.Qtde = quantidadeGerar;
            var descontoP = 0;
            if (this.DiariaCalculada.Desconto && this.DiariaCalculada.Desconto > 0) {
                //descontoP = (((((this.DiariaCalculada.Valor - this.DiariaCalculada.Desconto) / this.DiariaCalculada.Valor) - 1) * 100) * -1);
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
    C_HosCad_Angular.prototype.onTxtDescontoDiariaLostFocus = function (s) {
        try {
            this.verificarDescontoMaxPermitido(false);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.onTxtDescontoPorcentDiaria = function (s) {
        try {
            this.verificarDescontoMaxPermitido(false);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.verificarDescontoMaxPermitido = function (verificarSenha, onError) {
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
    C_HosCad_Angular.prototype.OnCboServicoDiaria_SelectedIndexChanged = function (s, e) {
        //this.LimparCamposDesconto();
        this.calcularDescontoDiaria();
        this.calcularDescontoPDiaria();
    };
    C_HosCad_Angular.prototype.OnCboQuantidadeMesesDaycare_SelectedIndexChanged = function (s, e) {
        var dataAtual = this.txtDataEntrada.Date.ToDate();
        var dataFinalCalculada = dataAtual.addMonths(this.cboQuantidadeMesesDaycare.GetValue());
        this.txtDataSaida.Date = dataFinalCalculada;
        this.AtualizarLabelQtdeDias();
    };
    C_HosCad_Angular.prototype.LimparCamposDesconto = function () {
        this.verificadoAutorizacaoDescontoHospedagem = false;
        this.DiariaCalculada.Valor_Final = 0;
        this.DiariaCalculada.Valor = 0;
        this.DiariaCalculada.Qtde = 0;
        this.DiariaCalculada.Desconto = 0;
        this.DiariaCalculada.Desconto_Porcentagem = 0;
        this.RefreshAngular();
    };
    C_HosCad_Angular.prototype.OnCboFichaAvaliacaoChanged = function (s, e) {
        try {
            var parametros;
            parametros = {
                codFicha: this.cboFichaAvaliacao.GetValue()
            };
            var fichaAvaliacao = this.ExecutarFuncaoServerSideSynch("GetFichaAvaliacao", parametros);
            this.grdFichaAvaliacao.PreencherGrid(fichaAvaliacao);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosCad_Angular.prototype.onBtnSalvarFicha = function (s, e) {
        var _this = this;
        try {
            if (e.cancelEventAndBubble)
                return;
            if (!this.EntityTela || CNum(this.EntityTela.Codigo) == 0) {
                MostrarAlerta("Informe uma hospedagem.");
                return;
            }
            var avaliacao = {};
            //var avaliacao_item: SiSMoura.Core.Entity.Animais_Hospedagem_Ficha_Avaliacao[] = []
            avaliacao.Data = this.txtDataAvaliacao.Date;
            avaliacao.Data.setHours(this.txtHoraAvaliacao.textBoxHorario.GetDate().getHours(), this.txtHoraAvaliacao.textBoxHorario.GetDate().getMinutes());
            avaliacao.Hospedagem = this.EntityTela.Codigo;
            avaliacao.Usuario_Avaliacao = this.txtUsuarioAvaliacao.GetText().CNum();
            avaliacao.Itens = [];
            avaliacao.Observacao = this.txtObservacaoFicha.GetText();
            var itensGrid = this.grdFichaAvaliacao.DataSource;
            for (var x = 0; x < itensGrid.length; x++) {
                var item = {};
                item.Ficha_Avaliacao_Item = itensGrid[x].Codigo;
                item.Resposta = itensGrid[x].Resposta;
                item.Observacao = itensGrid[x].Observacao;
                avaliacao.Itens.push(item);
            }
            MsgBoxJS("Confirmar a avalia\u00E7\u00E3o na data e hora " + avaliacao.Data.FormataDataHora() + "?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.No) {
                    return;
                }
                _this.GetScope().Entity.Fichas_Avaliacao.push(avaliacao);
                _this.RefreshAngular();
                _this.limparCamposFichaAvaliacao();
                _this.ClicarGravar();
            });
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.limparCamposFichaAvaliacao = function () {
        this.txtUsuarioAvaliacao.Limpar();
        this.txtDataAvaliacao.Date = this.DataServidor();
        this.txtHoraAvaliacao.textBoxHorario.SetDate(this.DataServidor());
        this.cboFichaAvaliacao.LimparSelecao();
        this.grdFichaAvaliacao.PreencherGrid([]);
        this.grdVisualizarFichaAval.PreencherGrid([]);
        this.txtObservacaoFicha.Limpar();
    };
    C_HosCad_Angular.prototype.habilitarCamposFichaAvaliacao = function () {
        this.txtUsuarioAvaliacao.Disabled = false;
        this.txtDataAvaliacao.Disabled = false;
        this.txtHoraAvaliacao.Disabled = false;
        this.txtObservacaoFicha.Disabled = false;
        this.cboFichaAvaliacao.Enabled = true;
        this.btnSalvarFicha.SetEnabled(true);
        this.grdFichaAvaliacao.Enabled = true;
        if (this.txtCodigo.GetText().CNum() > 0) {
            if (this.GetScope().Entity.Cancelada || this.GetScope().Entity.Finalizado) {
                this.txtUsuarioAvaliacao.Disabled = true;
                this.txtDataAvaliacao.Disabled = true;
                this.txtHoraAvaliacao.Disabled = true;
                this.txtObservacaoFicha.Disabled = true;
                this.cboFichaAvaliacao.Enabled = false;
                this.btnSalvarFicha.SetEnabled(false);
                this.grdFichaAvaliacao.Enabled = false;
            }
        }
        ;
    };
    C_HosCad_Angular.prototype.OnExcluindoFichaAvaliacao = function (s, e) {
        if (!this.GetScope().Entity || this.GetScope().Entity.Cancelada || this.GetScope().Entity.Finalizado) {
            MostrarAlerta("Não será possível excluir este registro.");
            e.cancelar = true;
            return;
        }
    };
    C_HosCad_Angular.prototype.OnExcluirFichaAvaliacao = function (s, e) {
        try {
            var codFicha = CNum(e.item.Hospedagem_Ficha_Avaliacao);
            var parametros = {
                codFicha: codFicha,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ExcluirFichaAvaliacao", parametros);
            if (retorno) {
                MostrarMensagem("Avaliação excluída com sucesso.");
            }
            else {
                MostrarError("Erro ao excluir avaliação.");
            }
        }
        catch (e) {
        }
    };
    C_HosCad_Angular.prototype.OnSelecionouLinhaFichaAvaliacao = function (s, e) {
        try {
            var codFicha = ("" + e.data['Hospedagem_Ficha_Avaliacao']).CNum();
            var parametros = {
                codFicha: codFicha
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetDadosAvaliacao", parametros);
            if (!retorno || !retorno.DadosFichaAvaliacao) {
                return;
            }
            this.txtObsFichaVisualizar.SetText(retorno.DadosFichaAvaliacao[0].Observacao);
            this.grdVisualizarFichaAval.PreencherGrid(retorno.DadosFichaAvaliacao);
            this.mdlVisualizarFichaAval.Show();
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosCad_Angular.prototype.OnCboRestricaoAlimentar_SelectedIndexChanged = function (s, e) {
        this.txtRestricaoAlimentar.Obrigatorio = false;
        if (this.cboRestricaoAlimentar && this.cboRestricaoAlimentar.GetValue() == "1") { // 1 = Sim / 2 = Não
            this.txtRestricaoAlimentar.Obrigatorio = true;
        }
    };
    return C_HosCad_Angular;
}(MouraPageCadastroAngular));
var c_HosCad_Angular = new C_HosCad_Angular();
//# sourceMappingURL=C_HosCad_Angular.js.map