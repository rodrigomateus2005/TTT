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
var C_Orcame = /** @class */ (function (_super) {
    __extends(C_Orcame, _super);
    function C_Orcame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.verificarAutorizacaoLimiteCrediarioCliente = false;
        _this.verificarAutorizacaoDescontoPorcentagem = false;
        //private limitarImpressaoOrcamento: boolean;
        //private solicitarQtdeCopiasMatricial: boolean;
        //private balancaOrcamento: boolean;
        //private calcularQtdePeso: boolean;
        //private usarColunaDesconto: boolean;
        // private somarFrete: boolean;
        //private rotuloFreteImp: boolean;
        //private ocultarDescUnitario: boolean;
        //private descEmpresa: number;
        //private usuarioEmpresa: boolean;
        //private informarCodigo: boolean;
        //private selecionouCartao: boolean;
        //private clientePossuiLista: boolean;
        //private enviaEmail: boolean;
        //private mensagemEstoqueMinimo: boolean;
        //private parcelaCalcularRestante: boolean;
        //private NCMExibirMsgAlerta: boolean;
        //private condicaoPgto: number;
        //private limparDadosClienteVendedor: boolean;
        //private procuraInativos: boolean;
        //private passouCalculo: boolean;
        //private qtdesInteiras: string;
        //private tipoImpressaoCabecalho: number;
        //private abrindoTela: boolean;
        //private imprimirOrdemInserido: boolean;
        //private verifQuantMsg: boolean;
        //private codigoObservacao: number;
        //private descontoComponente: boolean;
        //private pedirSenha: boolean;
        //private verificaConvenioPessoa: boolean;
        //private descontoCliente: boolean;
        //private preencherParcelas: boolean;
        _this.retornoIssMaiorQue = false;
        _this.totalProdutos = 0;
        _this.validouAutorizacaoDescPromocao = false;
        _this.verificadoAutorizacaoOrcFP = false;
        _this.verificadoAutorizacaoPag = false;
        _this.verificadoAutorizacaoMarcado = false;
        _this.verificarAutorizacaoSituacaiChequeCliente = false;
        return _this;
    }
    Object.defineProperty(C_Orcame.prototype, "Produtos", {
        get: function () {
            if (!this.GetScope()["Produtos"]) {
                return [];
            }
            else {
                return this.GetScope()["Produtos"];
            }
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "OrcamentoItens", {
        get: function () {
            if (!this.GetScope()["OrcamentoItens"]) {
                return [];
            }
            else {
                return this.GetScope()["OrcamentoItens"];
            }
        },
        set: function (value) {
            this.GetScope()["OrcamentoItens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "Pagamentos", {
        get: function () {
            if (!this.GetScope()["Pagamentos"]) {
                return [];
            }
            else {
                return this.GetScope()["Pagamentos"];
            }
        },
        set: function (value) {
            this.GetScope()["Pagamentos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "ContasReceber", {
        get: function () {
            if (!this.GetScope()["ContasReceber"]) {
                return [];
            }
            else {
                return this.GetScope()["ContasReceber"];
            }
        },
        set: function (value) {
            this.GetScope()["ContasReceber"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "Cheques", {
        get: function () {
            if (!this.GetScope()["Cheques"]) {
                return [];
            }
            else {
                return this.GetScope()["Cheques"];
            }
        },
        set: function (value) {
            this.GetScope()["Cheques"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "Tickets", {
        get: function () {
            if (!this.GetScope()["Tickets"]) {
                return [];
            }
            else {
                return this.GetScope()["Tickets"];
            }
        },
        set: function (value) {
            this.GetScope()["Tickets"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "Dinheiros", {
        get: function () {
            if (!this.GetScope()["Dinheiros"]) {
                return [];
            }
            else {
                return this.GetScope()["Dinheiros"];
            }
        },
        set: function (value) {
            this.GetScope()["Dinheiros"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "Cartoes", {
        get: function () {
            if (!this.GetScope()["Cartoes"]) {
                return [];
            }
            else {
                return this.GetScope()["Cartoes"];
            }
        },
        set: function (value) {
            this.GetScope()["Cartoes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "TipoOrcamentoInfo", {
        get: function () {
            if (!this.GetScope()["TipoOrcamentoInfo"]) {
                return null;
            }
            else {
                return this.GetScope()["TipoOrcamentoInfo"];
            }
        },
        set: function (value) {
            this.GetScope()["TipoOrcamentoInfo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "Cliente", {
        get: function () {
            if (!this.GetScope()["Cliente"]) {
                return null;
            }
            else {
                return this.GetScope()["Cliente"];
            }
        },
        set: function (value) {
            this.GetScope()["Cliente"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "ContaReceber", {
        get: function () {
            if (!this.GetScope()["ContaReceber"]) {
                return null;
            }
            else {
                return this.GetScope()["ContaReceber"];
            }
        },
        set: function (value) {
            this.GetScope()["ContaReceber"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "Produto", {
        get: function () {
            if (!this.GetScope()["Produto"]) {
                return null;
            }
            else {
                return this.GetScope()["Produto"];
            }
        },
        set: function (value) {
            this.GetScope()["Produto"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "Cheque", {
        get: function () {
            if (!this.GetScope()["Cheque"]) {
                return null;
            }
            else {
                return this.GetScope()["Cheque"];
            }
        },
        set: function (value) {
            this.GetScope()["Cheque"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "Cartao", {
        get: function () {
            if (!this.GetScope()["Cartao"]) {
                return null;
            }
            else {
                return this.GetScope()["Cartao"];
            }
        },
        set: function (value) {
            this.GetScope()["Cartao"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "OrcamentoItem", {
        get: function () {
            if (!this.GetScope()["OrcamentoItem"]) {
                return null;
            }
            else {
                return this.GetScope()["OrcamentoItem"];
            }
        },
        set: function (value) {
            this.GetScope()["OrcamentoItem"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "Pagamento", {
        get: function () {
            if (!this.GetScope()["Pagamento"]) {
                return null;
            }
            else {
                return this.GetScope()["Pagamento"];
            }
        },
        set: function (value) {
            this.GetScope()["Pagamento"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "Ticket", {
        get: function () {
            if (!this.GetScope()["Ticket"]) {
                return null;
            }
            else {
                return this.GetScope()["Ticket"];
            }
        },
        set: function (value) {
            this.GetScope()["Ticket"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "Dinheiro", {
        get: function () {
            if (!this.GetScope()["Dinheiro"]) {
                return null;
            }
            else {
                return this.GetScope()["Dinheiro"];
            }
        },
        set: function (value) {
            this.GetScope()["Dinheiro"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "Crediarios", {
        get: function () {
            if (!this.GetScope()["Crediarios"]) {
                return [];
            }
            else {
                return this.GetScope()["Crediarios"];
            }
        },
        set: function (value) {
            this.GetScope()["Crediarios"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "Crediario", {
        get: function () {
            if (!this.GetScope()["Crediario"]) {
                return null;
            }
            else {
                return this.GetScope()["Crediario"];
            }
        },
        set: function (value) {
            this.GetScope()["Crediario"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "grdCartao", {
        get: function () {
            return window['grdCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "grdProduto", {
        get: function () {
            return window['grdProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "grdPagamentos", {
        get: function () {
            return window['grdPagamentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "tabPagamento", {
        get: function () {
            return window['tabPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "grdDinheiro", {
        get: function () {
            return window['grdDinheiro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "grdTicket", {
        get: function () {
            return window['grdTicket_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "grdCrediario", {
        get: function () {
            return window['grdCrediario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "grdCheque", {
        get: function () {
            return window['grdCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "mdProdutos", {
        get: function () {
            return window['mdProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "cboDocBancario", {
        get: function () {
            return window['cboDocBancario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "cboTipoEntrega", {
        get: function () {
            return window['cboTipoEntrega_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "optTipo", {
        get: function () {
            return window['optTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "cboPlaca", {
        get: function () {
            return window['cboPlaca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "mdPagamento", {
        get: function () {
            return window['mdPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtDescontoR", {
        get: function () {
            return window['txtDescontoR_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtDescontoP", {
        get: function () {
            return window['txtDescontoP_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtHoraEntrega", {
        get: function () {
            return window['txtHoraEntrega_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtHora", {
        get: function () {
            return window['txtHora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtSubTotal", {
        get: function () {
            return window['txtSubTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtTotalProdutos", {
        get: function () {
            return window['txtTotalProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtValor", {
        get: function () {
            return window['txtValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtNome_Produto", {
        get: function () {
            return window['txtNome_Produto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtCPF", {
        get: function () {
            return window['txtCPF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtNCheque", {
        get: function () {
            return window['txtNCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "cboUndConvert", {
        get: function () {
            return window['cboUndConvert_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "cboListaPreco", {
        get: function () {
            return window['cboListaPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "cboCartao", {
        get: function () {
            return window['cboCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtUndQtde", {
        get: function () {
            return window['txtUndQtde_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtUndUnitario", {
        get: function () {
            return window['txtUndUnitario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtPedCompNum", {
        get: function () {
            return window['txtPedCompNum_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtPedCompItem", {
        get: function () {
            return window['txtPedCompItem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtQuantidade", {
        get: function () {
            return window['txtQuantidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "cboUndImprimir", {
        get: function () {
            return window['cboUndImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtMargem", {
        get: function () {
            return window['txtMargem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtPrecoCusto", {
        get: function () {
            return window['txtPrecoCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtPrecoCustoValor", {
        get: function () {
            return window['txtPrecoCustoValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtLargura", {
        get: function () {
            return window['txtLargura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtProfundidade", {
        get: function () {
            return window['txtProfundidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtAltura", {
        get: function () {
            return window['txtAltura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "cboDependente", {
        get: function () {
            return window['cboDependente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "cboLote", {
        get: function () {
            return window['cboLote_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "cboFormaPagamento", {
        get: function () {
            return window['cboFormaPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "cboSituacao", {
        get: function () {
            return window['cboSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtPorcComissao", {
        get: function () {
            return window['txtPorcComissao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtValorComissao", {
        get: function () {
            return window['txtValorComissao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtDescUnitario", {
        get: function () {
            return window['txtDescUnitario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtDescPorcentagem", {
        get: function () {
            return window['txtDescPorcentagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "lblUnitarioDescInf", {
        get: function () {
            return window['lblUnitarioDescInf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "lblTotalDescInf", {
        get: function () {
            return window['lblTotalDescInf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "lblZonaVenda", {
        get: function () {
            return window['lblZonaVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "lblObsEnd", {
        get: function () {
            return window['lblObsEnd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "lblCarga", {
        get: function () {
            return window['lblCarga_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "lblZonaEntrega", {
        get: function () {
            return window['lblZonaEntrega_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "btnRecalcular", {
        get: function () {
            return window['btnRecalcular_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtAcrescimoR", {
        get: function () {
            return window['txtAcrescimoR_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtParcela", {
        get: function () {
            return window['txtParcela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtValorCrediario", {
        get: function () {
            return window['txtValorCrediario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtQtdeFatorial", {
        get: function () {
            return window['txtQtdeFatorial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtQtdePeso", {
        get: function () {
            return window['txtQtdePeso_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtPesoUnit", {
        get: function () {
            return window['txtPesoUnit_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtPesoTotal", {
        get: function () {
            return window['txtPesoTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "lblCadastradoPor", {
        get: function () {
            return window['lblCadastradoPor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "lblAlteradoPor", {
        get: function () {
            return window['lblAlteradoPor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "lblSaldoDevedor", {
        get: function () {
            return window['lblSaldoDevedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "lblVenda", {
        get: function () {
            return window['lblVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "lblSaldo", {
        get: function () {
            return window['lblSaldo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "lblCredito", {
        get: function () {
            return window['lblCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtTransportadora", {
        get: function () {
            return window['txtTransportadora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtVendaPrecoCusto", {
        get: function () {
            return window['txtVendaPrecoCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtDocMercantil", {
        get: function () {
            return window['txtDocMercantil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtTotalCrediario", {
        get: function () {
            return window['txtTotalCrediario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtValorCreditoUtilizado", {
        get: function () {
            return window['txtValorCreditoUtilizado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtEstoque", {
        get: function () {
            return window['txtEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtEstoqueTotal", {
        get: function () {
            return window['txtEstoqueTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtComissionado", {
        get: function () {
            return window['txtComissionado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "lblDataSituacao", {
        get: function () {
            return window['lblDataSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "lblUltimoOrcamento", {
        get: function () {
            return window['lblUltimoOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "Transportadoras", {
        get: function () {
            if (!this.GetScope()["Transportadoras"]) {
                return [];
            }
            else {
                return this.GetScope()["Transportadoras"];
            }
        },
        set: function (value) {
            this.GetScope()["Transportadoras"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "Transportadora", {
        get: function () {
            if (!this.GetScope()["Transportadora"]) {
                return null;
            }
            else {
                return this.GetScope()["Transportadora"];
            }
        },
        set: function (value) {
            this.GetScope()["Transportadora"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "btnImprimirOrcamento", {
        get: function () {
            return window['btnImprimirOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtClienteCheque", {
        get: function () {
            return window['txtClienteCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtVendedor", {
        get: function () {
            return window['txtVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtNomeCliente", {
        get: function () {
            return window['txtNomeCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtEnderecoEntrega", {
        get: function () {
            return window['txtEnderecoEntrega_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtBairroEntrega", {
        get: function () {
            return window['txtBairroEntrega_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtCidadeEntrega", {
        get: function () {
            return window['txtCidadeEntrega_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtFone", {
        get: function () {
            return window['txtFone_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtMarkupOrcamentoR", {
        get: function () {
            return window['txtMarkupOrcamentoR_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtVencimentoCrediario", {
        get: function () {
            return window['txtVencimentoCrediario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtMarkupOrcamentoP", {
        get: function () {
            return window['txtMarkupOrcamentoP_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orcame.prototype, "txtTotalProd", {
        get: function () {
            return window['txtTotalProd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Orcame.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    C_Orcame.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        this.Pagamentos = [];
        this.cboSituacao.SetSelectedIndex(0);
        this.EntityTela.Situacao = this.cboSituacao.GetValue();
        this.TipoOrcamentoInfo = {};
        this.Crediario = {};
        this.txtDocMercantil.Limpar();
        this.cboLote.Visible = false;
        this.lblVenda.Visible = false;
        this.tabPagamento.AlterarVisibleAba("abaPagCDC", false);
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.diferencaTotalOrcamento = false;
        this.EntityTela.Tipo_Entrega = 0;
        //this.SituacaoOrcamento();
        this.cboTipoEntrega.SetSelectedIndex(0);
        setTimeout(function () { _this.txtHoraEntrega.textBoxHorario.SetText("00:00"); }, 100);
        //if (this.ParametrosTela) {
        //    var codigo = this.ParametrosTela.Codigo;
        //    if (CNum(codigo) > 0) {
        //        this.EntityTela.Codigo = codigo;
        //    }
        //}
        if (this.grdProduto) {
            adicionarEventoMoura(this.grdProduto.Validando, this.OnValidandoProdutoGrade, this);
            adicionarEventoMoura(this.grdProduto.AdicionandoItem, this.OnAdicionandoProdutoGrade, this);
            adicionarEventoMoura(this.grdProduto.ItemAdicionado, this.OnAdicionouProdutoGrade, this);
            //adicionarEventoMoura(this.grdProduto.ItemAlterado, this.OnAlterouProdutoGrade, this);
            adicionarEventoMoura(this.grdProduto.ExcluindoItem, this.OnExcluindoProduto, this);
            adicionarEventoMoura(this.grdProduto.LimpandoItem, this.OnLimpandoItemProduto, this);
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnPesquisouProduto, this);
        }
        if (this.txtClienteCheque) {
            adicionarEventoMoura(this.txtClienteCheque.Procurou, this.OnPesquisouChequeCliente, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnDepositoEmpresa, this);
        }
        if (this.cboDeposito) {
            adicionarEventoMoura(this.cboDeposito.SelectedItemChanged, this.OnEstoqueProduto, this);
        }
        if (this.txtCliente) {
            adicionarEventoMoura(this.txtCliente.Procurou, this.OnPesquisouCliente, this);
        }
        if (this.txtVencimentoCrediario) {
            adicionarEventoMoura(this.txtVencimentoCrediario.ValueChanged, this.OnVencimentoCrediario, this);
        }
        if (this.txtTransportadora) {
            adicionarEventoMoura(this.txtTransportadora.Procurou, this.OnPesquisouTransportadoraPlaca, this);
        }
        if (this.optTipo) {
            adicionarEventoMoura(this.optTipo.SelectionChanged, this.OnPesquisouChequeTipo, this);
        }
        if (this.txtValor) {
            adicionarEventoMoura(this.txtValor.TextChanged, this.CalcularInfoProduto, this);
        }
        if (this.txtValorComissao) {
            adicionarEventoMoura(this.txtValorComissao.TextChanged, this.CalcularInfComissao, this);
        }
        if (this.txtPorcComissao) {
            adicionarEventoMoura(this.txtPorcComissao.TextChanged, this.CalcularInfComissaoPorcentagem, this);
        }
        if (this.btnImprimirOrcamento) {
            adicionarEventoMoura(this.btnImprimirOrcamento.Click, this.OnClickImprimirOrcamento, this);
        }
        if (this.txtDescUnitario) {
            adicionarEventoMoura(this.txtDescUnitario.TextChanged, this.CalcularInfoProdutoDesc, this);
        }
        if (this.txtDescPorcentagem) {
            adicionarEventoMoura(this.txtDescPorcentagem.TextChanged, this.CalcularInfoProdutoDescPorcentagem, this);
        }
        if (this.txtDescontoR) {
            adicionarEventoMoura(this.txtDescontoR.TextChanged, this.CalcularInfoDesc, this);
        }
        if (this.txtAcrescimoR) {
            adicionarEventoMoura(this.txtAcrescimoR.TextChanged, this.CalcularInfoAcrescimo, this);
        }
        if (this.txtDescontoP) {
            adicionarEventoMoura(this.txtDescontoP.TextChanged, this.CalcularInfoDescPorcentagem, this);
        }
        if (this.txtQuantidade) {
            adicionarEventoMoura(this.txtQuantidade.TextChanged, this.CalcularInfoQtd, this);
        }
        if (this.txtVendedor) {
            adicionarEventoMoura(this.txtVendedor.Procurou, this.OnVerificaVendedor, this);
        }
        if (this.cboFormaPagamento) {
            adicionarEventoMoura(this.cboFormaPagamento.SelectedItemChanged, this.FormaPagamento, this);
        }
        if (this.cboSituacao) {
            adicionarEventoMoura(this.cboSituacao.SelectedItemChanged, this.SituacaoOrcamento, this);
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Permitir_Deposito) {
            this.cboDeposito.Visible = true;
        }
        else {
            this.cboDeposito.Visible = false;
        }
        //this.gerarPontoFidelidadeOrcamento = ValoresSismoura.ConfiguracoesRetaguarda.Gerar_Ponto_Fidelidade_Orcamento == true ? true : false;
        this.conceito = ValoresSismoura.ConfiguracoesRetaguarda.Conceito_Preco;
        //if (this.conceito == "") {
        //    this.conceito = "PREÇO POR FORA";
        //}
        var parametros = {};
        this.ultimoOrcamento();
        //this.limitarImpressaoOrcamento = ValoresSismoura.ConfiguracoesRetaguarda.Limitar_Impressao_Orcamento == true ? true : false
        //this.solicitarQtdeCopiasMatricial = ValoresSismoura.ConfiguracoesRetaguarda.Solicitar_Qtde_Copias_Matricial == true ? true : false
        //this.balancaOrcamento = ValoresSismoura.ConfiguracoesRetaguarda.Balanca_Orcamento == true ? true : false;
        //this.calcularQtdePeso = ValoresSismoura.ConfiguracoesRetaguarda.Calcular_Qtde_Peso == true ? true : false;
        //this.usarColunaDesconto = ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Mostrar_Valor_Desconto == true ? true : false;
        //this.somarFrete = ValoresSismoura.ConfiguracoesRetaguarda.Somar_Frete == true ? true : false;
        //this.rotuloFreteImp = ValoresSismoura.ConfiguracoesRetaguarda.Orc_Frete_Valor == true ? true : false;
        //this.ocultarDescUnitario = ValoresSismoura.ConfiguracoesRetaguarda.Orc_Desc_Unitario == true ? true : false;
        //this.descEmpresa = CNum(ValoresSismoura.ConfiguracoesRetaguarda.DescEmpresa)
        //this.usuarioEmpresa = ValoresSismoura.ConfiguracoesRetaguarda.Bloquear_Cliente_Empresa == true ? true : false;
        //this.parcelaCalcularRestante = ValoresSismoura.ConfiguracoesRetaguarda.Orc_Parc_Calcular_Restante == true ? true : false;
        //this.NCMExibirMsgAlerta = ValoresSismoura.ConfiguracoesRetaguarda.NF_NCM_msg_alerta_quando_incorreto == true ? true : false;
        //this.condicaoPgto = CNum(ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Forma_Pagamento_Padrao)
        this.Tickets = [];
        this.Dinheiros = [];
        //this.cboEmpresa.SetValue(this.descEmpresa);
        if (!ValoresSismoura.ConfiguracoesRetaguarda.Empresa_Padrao_Orcamento_Alterar) {
            this.cboEmpresa.Visible = false;
        }
        else {
            this.cboEmpresa.Visible = true;
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Ocultar_Desconto) {
            this.txtDescontoP.Visible = false;
            this.txtDescontoR.Visible = false;
        }
        else {
            this.txtDescontoP.Visible = true;
            this.txtDescontoR.Visible = true;
        }
        if (!ValoresSismoura.ConfiguracoesRetaguarda.OrcBloquearSub) {
            this.txtSubTotal.Visible = false;
        }
        else {
            this.txtSubTotal.Visible = true;
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Bloquear_Unitario || this.dlgFuncaoAdm.VerificarPorCodigo(624, ValoresSismoura.UsuarioLogado, false, this.VerificarAutorizacao, this)) {
            MostrarAlerta("O valor do produto está bloqueado por dois motivos: a configuração 'Bloquear Valor Unitário do Produto' está marcada como 'SIM', ou a função administrativa 'Alterar valor unitário do produto no cadastro de orçamento' esta marcada!");
            this.txtValor.ReadOnly = true;
        }
        else {
            this.txtValor.ReadOnly = false;
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Informar_Nome_Produto) {
            this.txtNome_Produto.ReadOnly = false;
        }
        else {
            this.txtNome_Produto.ReadOnly = true;
        }
        /*if (ValoresSismoura.ConfiguracoesRetaguarda.Orc_Informar_Codigo == true) {
            this.informarCodigo = true;
        }
        else {
            this.informarCodigo = false;
        }*/
        //this.mensagemEstoqueMinimo = ValoresSismoura.ConfiguracoesRetaguarda.Mensagem_Orc_Estoque_Minimo == true ? true : false;
        if (ValoresSismoura.ConfiguracoesRetaguarda.Orc_Desc_Unitario) {
            this.txtDescontoR.Visible = false;
            this.txtDescontoP.Visible = false;
        }
        else {
            this.txtDescontoR.Visible = true;
            this.txtDescontoP.Visible = true;
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Orc_Utilizar_Conversao_Unid_Produto && !ValoresSismoura.ConfiguracoesRetaguarda.Calcular_Qtde_Peso) {
            this.cboUndConvert.Visible = true;
            this.cboUndImprimir.Visible = true;
            this.txtUndQtde.Visible = true;
            this.txtUndUnitario.Visible = true;
            this.txtPedCompItem.Visible = true;
            this.txtPedCompNum.Visible = true;
            this.txtUndUnitario.SetText("1,000");
            this.txtUndQtde.SetText("1,000");
            this.txtValor.Visible = false;
            this.txtQuantidade.Visible = false;
            //this.ocultarDescUnitario = true;
        }
        else {
            this.cboUndConvert.Visible = false;
            this.cboUndImprimir.Visible = false;
            this.txtUndQtde.Visible = false;
            this.txtUndUnitario.Visible = false;
            this.txtPedCompItem.Visible = false;
            this.txtPedCompNum.Visible = false;
            this.txtUndUnitario.SetText("0,000");
            this.txtUndQtde.SetText("0,000");
            this.txtValor.Visible = true;
            this.txtQuantidade.Visible = true;
            //this.ocultarDescUnitario = false;
        }
        if (this.cboListaPreco.GetItemCount() < 1) {
            this.cboListaPreco.Visible = false;
        }
        else {
            this.cboListaPreco.Visible = true;
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Mostrar_PrecoCusto_Margem) {
            this.txtPrecoCusto.Visible = true;
            this.txtMargem.Visible = true;
            this.txtPrecoCustoValor.Visible = true;
        }
        else {
            this.txtPrecoCusto.Visible = false;
            this.txtMargem.Visible = false;
            this.txtPrecoCustoValor.Visible = false;
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Orc_Exibir_Dep) {
            this.cboDependente.Visible = true;
        }
        else {
            this.cboDependente.Visible = false;
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Exibir_Comissao_Produto) {
            this.txtPorcComissao.Visible = true;
            this.txtValorComissao.Visible = true;
        }
        else {
            this.txtPorcComissao.Visible = false;
            this.txtValorComissao.Visible = false;
        }
        if (!ValoresSismoura.ConfiguracoesRetaguarda.Exibir_Lista_Preco) {
            this.cboListaPreco.Visible = false;
        }
        if (CNum(ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Forma_Pagamento_Padrao) != 0) {
            this.cboFormaPagamento.SetSelectedIndex(CNum(ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Forma_Pagamento_Padrao));
        }
        this.TipoOrcamentoInfo = {};
        var textoFatorial = this.ExecutarFuncaoServerSideSynch("GetConfTextoFatorial", {});
        this.txtLargura.SetText(textoFatorial.Texto_Fator1);
        this.txtProfundidade.SetText(textoFatorial.Texto_Fator3);
        this.txtAltura.SetText(textoFatorial.Texto_Fator2);
        if (!ValoresSismoura.ConfiguracoesRetaguarda.Cad_Orcamento_Inf_Quant) {
            this.txtQuantidade.Visible = false;
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Permitir_Deposito) {
            this.cboDeposito.Visible = true;
        }
        else {
            this.cboDeposito.Visible = false;
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Orc_Desc_Unitario) {
            this.txtDescUnitario.Visible = false;
            this.txtDescPorcentagem.Visible = false;
        }
        else {
            this.txtDescUnitario.Visible = true;
            this.txtDescPorcentagem.Visible = true;
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Mostrar_Valor_Desconto) {
            this.lblTotalDescInf.Visible = true;
            this.lblUnitarioDescInf.Visible = true;
        }
        else {
            this.lblTotalDescInf.Visible = false;
            this.lblUnitarioDescInf.Visible = false;
        }
        //this.limparDadosClienteVendedor = true;
        if (!ValoresSismoura.ConfiguracoesRetaguarda.Habilitar_Campo_Obs_End) {
            this.lblObsEnd.Visible = false;
        }
        else {
            this.lblObsEnd.Visible = true;
        }
        if (!ValoresSismoura.ConfiguracoesRetaguarda.OrcPedCom) {
            this.txtPedCompItem.Visible = false;
            this.txtPedCompNum.Visible = false;
        }
        else {
            this.txtPedCompItem.Visible = true;
            this.txtPedCompNum.Visible = true;
        }
        if (!ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Zona_Entrega) {
            this.lblZonaEntrega.Visible = false;
        }
        else {
            this.lblZonaEntrega.Visible = true;
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Produto_Inativo_Pesquisa) {
            this.txtProduto.ExibirCheckBoxInativo = true;
        }
        else {
            this.txtProduto.ExibirCheckBoxInativo = false;
        }
        //this.passouCalculo = false;
        if (ValoresSismoura.ConfiguracoesRetaguarda.ExbtnRecalc) {
            this.btnRecalcular.Visible = true;
        }
        else {
            this.btnRecalcular.Visible = false;
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.OrcHabilitarAcrescimo) {
            this.txtAcrescimoR.Enabled = true;
        }
        else {
            this.txtAcrescimoR.Enabled = false;
        }
        //this.qtdesInteiras = ValoresSismoura.ConfiguracoesRetaguarda.Qtdes_Inteiras.replace(" ", "");
        if (ValoresSismoura.ConfiguracoesRetaguarda.Calcular_Qtde_Peso) {
            this.txtQuantidade.Visible = false;
            this.txtLargura.Visible = false;
            this.txtAltura.Visible = false;
            this.txtProfundidade.Visible = false;
            this.txtQtdeFatorial.Visible = false;
            this.txtQtdePeso.Visible = true;
            this.txtPesoTotal.Visible = true;
            this.txtPesoUnit.Visible = true;
        }
        else if (ValoresSismoura.ConfiguracoesRetaguarda.Fator_Quantidade) {
            this.txtQtdePeso.Visible = false;
            this.txtPesoTotal.Visible = false;
            this.txtPesoUnit.Visible = false;
            this.txtLargura.Visible = true;
            this.txtAltura.Visible = true;
            this.txtProfundidade.Visible = true;
            this.txtQtdeFatorial.Visible = true;
        }
        else {
            this.txtLargura.Visible = false;
            this.txtAltura.Visible = false;
            this.txtProfundidade.Visible = false;
            this.txtQtdeFatorial.Visible = false;
            this.txtQtdePeso.Visible = false;
            this.txtPesoTotal.Visible = false;
            this.txtPesoUnit.Visible = false;
        }
        /*if (ValoresSismoura.ConfiguracoesRetaguarda.Tipo_Cabecalho_Orcamento.toLowerCase() == ("1 - arquivo cabecalho_pedido.cfg").toLowerCase()) {
            this.tipoImpressaoCabecalho = 1;
        }
        else {
            this.tipoImpressaoCabecalho = 2;
        }*/
        this.cboEmpresa.Visible = true;
        //this.abrindoTela = false;
        /*if (!this.cboDeposito.Visible && !ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Deposito_Por_Orcamento) {
            this.cboDeposito.SetValue(ValoresSismoura.DepositoPadrao);
        }*/
        this.lblDataSituacao.Text = ConvertToDate(new Date()).FormataDataHora();
        this.txtVendaPrecoCusto.Visible = false;
        this.lblCarga.Visible = false;
        this.OnDepositoEmpresa();
        this.Limpar();
    };
    C_Orcame.prototype.CalcularInfComissao = function () {
        if (this.txtValorComissao.GetText()) {
            if (this.Produto.Valor > 0) {
                this.Produto.Comissao_Porcentagem = ((this.txtValorComissao.GetText().CNum() * 100) / this.Produto.Valor).Format(3).CNum();
                this.Produto.Comissao_Valor = this.txtValorComissao.GetText().CNum().Format(2).CNum();
            }
        }
    };
    C_Orcame.prototype.CalcularInfComissaoPorcentagem = function () {
        if (this.txtPorcComissao.GetText()) {
            if (this.Produto.Valor > 0) {
                this.Produto.Comissao_Valor = ((this.txtPorcComissao.GetText().CNum() / 100) * this.Produto.Valor).Format(3).CNum();
                this.Produto.Comissao_Porcentagem = this.txtPorcComissao.GetText().CNum().Format(2).CNum();
            }
        }
    };
    C_Orcame.prototype.CalcularInfoAcrescimo = function () {
        this.EntityTela.Acrescimo = (this.txtAcrescimoR.GetText() == null || this.txtAcrescimoR.GetText() == undefined) ? 0 : this.txtAcrescimoR.GetText().CNum();
        if (this.EntityTela.Acrescimo > 0) {
            this.EntityTela.Valor_Total = this.EntityTela.Valor_Total + this.EntityTela.Acrescimo;
        }
    };
    C_Orcame.prototype.OnDepositoEmpresa = function () {
        var parametros = {
            codEmpresa: this.cboEmpresa.GetValue() == undefined ? 0 : this.cboEmpresa.GetValue(),
            inativo: false
        };
        var retornoDeposito = this.ExecutarFuncaoServerSideSynch("PreencherComboDeposito", parametros);
        this.cboDeposito.ClearItems();
        for (var i = 0; i < retornoDeposito.Depositos.length; i++) {
            this.cboDeposito.AddItem(retornoDeposito.Depositos[i].Descricao, retornoDeposito.Depositos[i].Codigo, "");
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Deposito_Padrao_por_Empresa) {
            if (retornoDeposito.DepositoPadrao > 0) {
                this.cboDeposito.SetValue(retornoDeposito.DepositoPadrao);
            }
            else {
                this.cboDeposito.SetSelectedIndex(0);
            }
        }
        if (this.cboDeposito.GetItemCount()
            && !ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Deposito_Por_Orcamento
            && ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Permitir_Deposito) {
            if (retornoDeposito.DepositoPadrao > 0) {
                this.cboDeposito.SetValue(retornoDeposito.DepositoPadrao);
            }
            else {
                this.cboDeposito.SetSelectedIndex(0);
            }
        }
        if (this.cboDeposito.GetItemCount() == 0) {
            MostrarAlerta("Não foi encontrato nenhum depósito para a empresa informada. Acesse o Módulo Compras > Estoque > Estoque > Cadastro de Depósito, e realize o cadastro para a empresa informada.");
        }
    };
    C_Orcame.prototype.OnVencimentoCrediario = function () {
        this.Crediario = {};
        var totalPendente = this.CalcularTotalPendente();
        //if (ValoresSismoura.ConfiguracoesRetaguarda.Orc_Parc_Calcular_Restante) {
        if (this.EntityTela.Valor_Total - totalPendente > 0) {
            this.Crediario = {};
            this.Crediario.Valor = totalPendente;
            this.Cartao.Valor = totalPendente;
            this.Cheque.Valor_Cheque = totalPendente;
            this.Dinheiro.Valor = totalPendente;
            this.Ticket.Valor = totalPendente;
        }
        else {
            if (!this.Crediario.Valor) {
                this.Crediario = {};
                this.Crediario.Valor = this.EntityTela.Valor_Total;
            }
        }
        /* }
         else {
             if (!this.Crediario.Valor) {
                 this.Crediario = <any>{};
                 this.Crediario.Valor = this.EntityTela.Valor_Total;
             }*/
        //}
        this.Crediario.Parcela = (this.txtParcela.GetText() == null || this.txtParcela.GetText() == undefined) ? 0 : this.txtParcela.GetText().CNum();
        var x = this.Crediarios.length - 1;
        if (!this.Crediario.Parcela) {
            this.txtParcela.SetText((this.Crediarios[x].Parcela + 1).toString());
            this.Crediario.Parcela = this.Crediarios[x].Parcela + 1;
        }
        this.Crediario.Vencimento = new Date().ToDate();
    };
    C_Orcame.prototype.OnVerificaVendedor = function () {
        var parametros = {
            codigo: this.txtVendedor.GetText().CNum() == undefined ? 0 : this.txtVendedor.GetText().CNum(),
        };
        var retornaVendedor = this.ExecutarFuncaoServerSideSynch("GetVendedor", parametros);
        this.verificaVendedor(retornaVendedor);
    };
    C_Orcame.prototype.OnEstoqueProduto = function () {
        var parametros = {
            codDeposito: this.cboDeposito.GetValue() == undefined ? 0 : this.cboDeposito.GetValue(),
            produto: this.Produto.Produto == undefined ? 0 : this.Produto.Produto,
            codEmpresa: this.cboEmpresa.GetValue()
        };
        var retornoEstoque = this.ExecutarFuncaoServerSideSynch("EstoqueProduto", parametros);
        var estoque = retornoEstoque.Estoque;
        var estoqueTotal = retornoEstoque.Estoque_Total;
        this.Produto.Estoque = estoque == null ? 0 : estoque.Qtde;
        this.Produto.Estoque_Total = estoqueTotal;
        this.txtEstoque.SetText(this.Produto.Estoque.toString());
        this.txtEstoqueTotal.SetText(this.Produto.Estoque_Total.toString());
    };
    C_Orcame.prototype.OnDepoisLimpar = function (Entity) {
        var _this = this;
        try {
            Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
            Entity.Data_Cadastro = ConvertToDate(this.DataServidor());
            Entity.Data = ConvertToDate(this.DataServidor());
            Entity.Data_Entrega = ConvertToDate(this.DataServidor());
            Entity.Produtos = [];
            Entity.Cheques = [];
            Entity.Cartoes = [];
            Entity.Pagamentos = [];
            this.Dinheiros = [];
            Entity.Situacao = 1;
            this.Pagamentos = [];
            this.Produtos = [];
            this.Cartoes = [];
            this.Cheques = [];
            this.Crediarios = [];
            this.Tickets = [];
            this.grdPagamentos.PreencherGrid(null);
            this.cboSituacao.SetSelectedIndex(0);
            Entity.Situacao = this.cboSituacao.GetValue();
            this.cboTipoEntrega.SetSelectedIndex(0);
            Entity.Tipo_Entrega = this.cboTipoEntrega.GetValue();
            this.grdProduto.Limpar();
            this.lblCadastradoPor.Text = "";
            this.lblVenda.Visible = false;
            this.lblVenda.Text = "";
            this.lblDataSituacao.Text = new Date().FormataDataHora();
            this.verificadoAutorizacao = false;
            this.txtMarkupOrcamentoP.SetText("0,00");
            this.txtMarkupOrcamentoR.SetText("0,00");
            setTimeout(function () { _this.txtHoraEntrega.textBoxHorario.SetText("00:00"); }, 100);
            this.CalcularTotalOrcamento(Entity);
            // this.criarEntidadePersonalizados();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Orcame.prototype.OnExcluindoProduto = function (s, e) {
        try {
            if (this.EntityTela.Venda > 0) {
                MostrarAlerta("Não pode excluir um produto de um orçamento aprovado");
                e.cancelar = true;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Orcame.prototype.SituacaoOrcamento = function () {
        if (this.cboSituacao.GetValue()) {
            var parametros = {
                codSituacao: this.cboSituacao.GetValue() == undefined ? 0 : CNum(this.cboSituacao.GetValue())
            };
            var situacaoOrcamento = this.ExecutarFuncaoServerSideSynch("RetornoSituacaoOrcamento", parametros);
            this.situacaoOrcamento = situacaoOrcamento;
        }
        else {
            MostrarAlerta("Informe a Situação do Orçamento");
            return false;
        }
    };
    C_Orcame.prototype.CalcularInfoProduto = function () {
        this.Produto.Valor = this.txtValor.GetText().CNum();
        var parametros = {
            entidadeSTR: JSON.stringify(this.Produto),
            totalProdutos: this.EntityTela.Total_Produtos,
            frete: this.EntityTela.Frete == undefined ? 0 : this.EntityTela.Frete
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("ValidarItemGradeProduto", parametros);
        this.Produto.SubTotal = retorno.Item.SubTotal;
        this.Produto.Desconto = retorno.Item.Desconto;
        this.Produto.Total = retorno.Item.Total;
        this.Produto.Desconto_Porcentagem = retorno.Item.Desconto_Porcentagem;
    };
    C_Orcame.prototype.CalcularInfoProdutoDesc = function () {
        this.Produto.Desconto_Porcentagem = 0;
        this.Produto.Desconto = this.txtDescUnitario.GetText().CNum();
        var parametros = {
            entidadeSTR: JSON.stringify(this.Produto),
            totalProdutos: this.EntityTela.Total_Produtos,
            frete: this.EntityTela.Frete == undefined ? 0 : this.EntityTela.Frete
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("ValidarItemGradeProduto", parametros);
        this.Produto.SubTotal = retorno.Item.SubTotal;
        this.Produto.Desconto = retorno.Item.Desconto;
        this.Produto.Total = retorno.Item.Total;
        this.Produto.Desconto_Porcentagem = retorno.Item.Desconto_Porcentagem;
        //Verificar a função administrativa: Cadastro de Orçamento: Permitir Desconto em Produto da Promoção
        if (this.Validar_Permissao_Desconto_Produto_Promocao() == false) {
            return false;
        }
    };
    C_Orcame.prototype.CalcularInfoProdutoDescPorcentagem = function () {
        this.Produto.Desconto = 0;
        this.Produto.Desconto_Porcentagem = this.txtDescPorcentagem.GetText().CNum();
        var parametros = {
            entidadeSTR: JSON.stringify(this.Produto),
            totalProdutos: this.EntityTela.Total_Produtos,
            frete: this.EntityTela.Frete == undefined ? 0 : this.EntityTela.Frete
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("ValidarItemGradeProduto", parametros);
        this.Produto.SubTotal = retorno.Item.SubTotal;
        this.Produto.Desconto = retorno.Item.Desconto;
        this.Produto.Total = retorno.Item.Total;
        this.Produto.Desconto_Porcentagem = retorno.Item.Desconto_Porcentagem;
        //Verificar a função administrativa: Cadastro de Orçamento: Permitir Desconto em Produto da Promoção
        if (this.Validar_Permissao_Desconto_Produto_Promocao() == false) {
            return false;
        }
    };
    C_Orcame.prototype.Validar_Permissao_Desconto_Produto_Promocao = function () {
        var _this = this;
        if ((this.Produto.Desconto > 0 || this.Produto.Desconto_Porcentagem > 0) && (this.IsProdutoEmPromocao())) {
            var parametros = {
                nomeFuncao: "PermitirDescPromOrc",
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetAutorizacaoCadOrcFP", parametros);
            if (!retorno) {
                this.dlgFuncaoAdm.Verificar("PermitirDescPromOrc", ValoresSismoura.UsuarioLogado, false, function (retorno) {
                    if (retorno.Autorizado) {
                        _this.CalcularInfoProdutoDesc();
                        return true;
                    }
                    else {
                        return false;
                    }
                }, this, true, function (retorno) {
                    _this.txtDescUnitario.SetText("0,000");
                    _this.Produto.Desconto = 0;
                    _this.txtDescPorcentagem.SetText("0,000");
                    _this.Produto.Desconto_Porcentagem = 0;
                });
            }
        }
        return false;
    };
    C_Orcame.prototype.IsProdutoEmPromocao = function () {
        this.isProdutoEmPromocao = false;
        var parametros = {
            codProduto: this.Produto.Produto,
            codEmpresa: this.EntityTela.Empresa
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("isProdutoEmPromocao", parametros);
        if (retorno) {
            this.isProdutoEmPromocao = true;
        }
        return this.isProdutoEmPromocao;
    };
    C_Orcame.prototype.CalcularInfoDesc = function () {
        this.EntityTela.Descontop = 0;
        this.EntityTela.Desconto = this.txtDescontoR.GetText().CNum();
        var valorTotal = this.EntityTela.Valor_Total;
        if (this.EntityTela.Desconto > 0) {
            this.EntityTela.Descontop = parseFloat(((this.EntityTela.Desconto * 100) / this.EntityTela.Total_Produtos).toFixed(2));
            if (this.EntityTela.Descontop <= 100) {
                if (ValoresSismoura.ConfiguracoesRetaguarda.Desconto_Final_Promocao = "S") {
                    this.Desconto_Com_Promocao();
                }
            }
            this.EntityTela.Valor_Total = this.EntityTela.Total_Produtos - this.EntityTela.Desconto;
            if (this.EntityTela.Valor_Total < 0) {
                MostrarAlerta("O valor do desconto não pode ser maior que o do orçamento");
                this.EntityTela.Valor_Total = valorTotal;
                this.EntityTela.Desconto = "0".Format("5").CNum();
                this.EntityTela.Descontop = "0".Format("5").CNum();
                this.txtDescontoP.SetText("0,00000");
                this.txtDescontoR.SetText("0,00000");
            }
        }
        else {
            this.EntityTela.Desconto = "0".Format("5").CNum();
            this.EntityTela.Descontop = "0".Format("5").CNum();
            this.txtDescontoP.SetText("0,00000");
            this.txtDescontoR.SetText("0,00000");
            this.EntityTela.Valor_Total = this.EntityTela.Total_Produtos;
        }
    };
    C_Orcame.prototype.CalcularInfoDescPorcentagem = function () {
        this.EntityTela.Desconto = 0;
        this.EntityTela.Descontop = this.txtDescontoP.GetText().CNum();
        var valorTotal = this.EntityTela.Valor_Total;
        if (this.EntityTela.Descontop > 0) {
            this.EntityTela.Desconto = parseFloat(((this.EntityTela.Descontop * this.EntityTela.Valor_Total) / 100).toFixed(2));
            this.EntityTela.Valor_Total = this.EntityTela.Valor_Total - this.EntityTela.Desconto;
            if (this.EntityTela.Valor_Total < 0) {
                MostrarAlerta("O valor do desconto não pode ser maior que o do produto");
                this.EntityTela.Desconto = "0".Format("5").CNum();
                this.EntityTela.Descontop = "0".Format("5").CNum();
                this.txtDescontoP.SetText("0,00000");
                this.txtDescontoR.SetText("0,00000");
                this.EntityTela.Valor_Total = valorTotal;
            }
        }
        else {
            this.EntityTela.Desconto = "0".Format("5").CNum();
            this.EntityTela.Descontop = "0".Format("5").CNum();
            this.txtDescontoP.SetText("0,00000");
            this.txtDescontoR.SetText("0,00000");
            this.EntityTela.Valor_Total = this.EntityTela.Total_Produtos;
        }
    };
    C_Orcame.prototype.Desconto_Com_Promocao = function () {
        var Produtos_Promocao = 0;
        var Base_Desconto = this.EntityTela.Total_Produtos;
        for (var x = 0; x < this.Produtos.length; x++) {
            var parametros = {
                codProduto: this.Produtos[x].Produto,
                dataInicial: this.DataServidor().FormataData(),
                dataFinal: this.DataServidor().FormataData()
            };
            var preco_promocao = this.ExecutarFuncaoServerSideSynch("Verificar_Produto_Promocao", parametros);
            //Se o produto estiver em promoção
            if (preco_promocao > 0) {
                Produtos_Promocao += 1;
                Base_Desconto = Base_Desconto.Format(5).CNum() - this.Produtos[x].SubTotal.Format(5).CNum();
            }
        }
        if (Produtos_Promocao > 0) {
            var msg = "AVISO: A configuração ´DESCONTO FINAL: Não aplicar sobre produtos em promoção´ está marcada </br>" +
                "</br> Com isso, o valor informado será aplicado sobre o valor dos produtos que NÃO estão em promoção: R$ " + Base_Desconto.Format(2) +
                "</br> E não sobre o valor total da venda: R$ " + this.EntityTela.Total_Produtos.Format(2);
            MsgBoxJS(msg, MsgBoxOptions.OkOnly, MsgBoxIcon.Info, null);
            if (this.EntityTela.Descontop != 0) {
                var Desconto_Percentual_Aux = this.EntityTela.Descontop.Format(2).CNum();
                //Valor que a porcentagem digitada representa no total de produtos sem promoção
                var Porcentagem_Aux = (Base_Desconto * this.EntityTela.Descontop) / this.EntityTela.Total_Produtos;
                //Atualiza o valor do desconto percentual com base no valor de produtos que aceita o desconto
                var Desc_Reais = (this.EntityTela.Total_Produtos * Porcentagem_Aux) / 100;
                if (Porcentagem_Aux != Desconto_Percentual_Aux) {
                    MsgBoxJS(msg + "</br> </br> Sendo assim a porcentagem informada: " + Desconto_Percentual_Aux.Format(2).CNum() + "% </br> SERÁ ALTERADA para " +
                        Porcentagem_Aux.Format(2).CNum() + "% !", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, null);
                }
                this.txtDescontoR.SetText(Desc_Reais.Format(5));
                this.txtDescontoP.SetText(Porcentagem_Aux.Format(5));
                this.EntityTela.Descontop = Porcentagem_Aux.Format(5).CNum();
                this.EntityTela.Desconto = Desc_Reais.Format(5).CNum();
            }
            else if (this.txtDescontoR.GetText().CNum() > Base_Desconto) {
                //Se o valor do desconto monetário for maior que a base o sistema deve bloquear
                MsgBoxJS(msg + "</br> O limite de desconto aceito é de R$" + Base_Desconto.Format(2), MsgBoxOptions.OkOnly, MsgBoxIcon.Info, null);
                this.EntityTela.Desconto = "0".Format("5").CNum();
                this.EntityTela.Descontop = "0".Format("5").CNum();
                //this.txtDescontoP.SetText("0,00000");
                //this.txtDescontoR.SetText("0,00000");
            }
        }
    };
    C_Orcame.prototype.OnPesquisouChequeTipo = function () {
        if (this.optTipo.GetValue() == "F") {
            this.txtCPF.IsCPF = true;
            this.txtCPF.Limpar();
            if (this.Cliente) {
                if (this.Cliente.Cpf && this.Cliente.Cpf.length == 14) {
                    this.txtCPF.SetText(this.Cliente.Cpf);
                }
            }
        }
        else {
            this.txtCPF.IsCPF = false;
            this.txtCPF.Limpar();
            if (this.Cliente) {
                if (this.Cliente.Cpf && this.Cliente.Cpf.length == 18) {
                    this.txtCPF.SetText(this.Cliente.Cpf);
                }
            }
        }
    };
    C_Orcame.prototype.CalcularInfoQtd = function () {
        if (this.Produto.Volume > 0) {
            MostrarAlerta("O campo VOLUME DA CAIXA do Produto está preenchido. Sendo assim, apenas volumes inteiros poderão ser vendidos. O Volume definido para este produto é " + this.Produto.Volume_Caixa);
            this.txtQuantidade.SetText((this.Produto.Volume * this.Produto.Quantidade).Format(3));
            this.Produto.Quantidade = this.Produto.Volume * this.Produto.Quantidade;
            this.RefreshAngular();
            this.txtQuantidade.ReadOnly = true;
        }
        if (this.Produto.Quantidade > 0) {
            this.Produto.SubTotal = this.txtQuantidade.GetText().CNum() * this.Produto.Valor;
            this.Produto.Total = this.Produto.SubTotal;
        }
    };
    C_Orcame.prototype.ConverterProduto = function () {
        this.OrcamentoItens = [];
        for (var x = 0; x < this.Produtos.length; x++) {
            this.OrcamentoItem = {};
            this.OrcamentoItem.Altura = this.Produtos[x].Altura;
            this.OrcamentoItem.Nome_Produto = this.Produtos[x].Nome_Produto;
            this.OrcamentoItem.Produto = this.Produtos[x].Produto;
            this.OrcamentoItem.Quantidade = this.Produtos[x].Quantidade;
            this.OrcamentoItem.Valor_Total = this.Produtos[x].Total;
            this.OrcamentoItem.Valor = this.Produtos[x].Valor;
            this.OrcamentoItem.Fator = this.Produtos[x].Fator;
            this.OrcamentoItem.Ordem_Produto = this.Produtos[x].Ordem_Produto;
            this.OrcamentoItem.Produto = this.Produtos[x].Produto;
            this.OrcamentoItem.Lote = this.Produtos[x].Lote;
            this.OrcamentoItem.Item = (x + 1);
            this.OrcamentoItem.Subtotal = this.Produtos[x].Valor;
            this.OrcamentoItem.Deposito = this.Produtos[x].Deposito == 0 ? ValoresSismoura.DepositoPadrao : this.Produtos[x].Deposito;
            this.OrcamentoItem.Desconto = this.Produtos[x].Desconto;
            this.OrcamentoItem.Tipo_Comissao = this.Produtos[x].Tipo_Comissao == "S" ? true : false;
            this.OrcamentoItem.Situacao_Producao = (this.Produtos[x].Situacao_Producao == "0" || this.Produtos[x].Situacao_Producao == null) ? 1 : this.Produtos[x].Situacao_Producao.CNum();
            this.OrcamentoItens.push(this.OrcamentoItem);
            if (this.Produto.Tipo_Produto != 5 && (ValoresSismoura.ConfiguracoesRetaguarda.Prod_Interno_Gerar_Movimentacoes_Estoque)) {
                if (this.codConsigImportado == 0) {
                    if ((this.situacaoOrcamento.Baixar_Estoque && this.situacaoOrcamento.Codigo == this.cboSituacao.GetValue())
                        && (this.situacaoOrcamento.Gerar_Venda && this.situacaoOrcamento.Codigo != this.cboSituacao.GetValue())
                        && (this.Produto.Lote != "FC")) {
                        if (!ValoresSismoura.ConfiguracoesRetaguarda.Calcular_Fator_Custo) {
                            this.OrcamentoItem.AtualizarEstoqueLote = false;
                        }
                        else {
                            if (this.cboUndConvert.GetValue() !== this.Produto.Unidade) {
                                var parametrosUnidadeConverter = {
                                    produto: this.Produto.Produto,
                                    unidade: this.cboUndConvert.GetText()
                                };
                                var retorno = this.ExecutarFuncaoServerSideSynch("ProdutoUnidadeConversao", parametrosUnidadeConverter);
                                this.Produto.Quantidade = retorno * this.Produto.Quantidade;
                                //this.OrcamentoItem.AtualizarEstoqueLote = false;
                            }
                            /*else {
                                this.OrcamentoItem.AtualizarEstoqueLote = false;
                            }*/
                        }
                    }
                    /* else {
                         if (this.Produto.Lote !== "") {
                             this.OrcamentoItem.AtualizarEstoqueLote = true;
                         }
                     }*/
                }
                /*else {
                    if (this.situacaoOrcamento.Baixar_Estoque && this.situacaoOrcamento.Codigo == this.cboSituacao.GetValue()) {
                        if (this.Produto.Lote !== "") {
                            this.OrcamentoItem.AtualizarEstoqueLote = true;
                        }
                        else {
                            this.OrcamentoItem.AtualizarEstoqueLote = false;
                        }
                    }
                }*/
            }
            if (this.codConsigImportado == 0) {
                if (this.EntityTela.Situacao == this.situacaoOrcamento.Codigo && this.situacaoOrcamento.Transferencia_Estoque) {
                    this.OrcamentoItem.Transferencia_Estoque = true;
                    this.OrcamentoItem.Transferencia = true;
                }
                else {
                    this.OrcamentoItem.Transferencia_Estoque = false;
                    this.OrcamentoItem.Transferencia = false;
                }
            }
        }
    };
    C_Orcame.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        try {
            if (this.Produtos.length == 0) {
                MostrarAlerta("Informe o Produto");
                this.diferencaTotalOrcamento = false;
                return false;
            }
            if (!this.txtCliente.GetText() && !this.txtNomeCliente.GetText()) {
                MostrarAlerta("Informe o Cliente");
                this.diferencaTotalOrcamento = false;
                return false;
            }
            var parametros = {
                codOrcamento: this.EntityTela.Codigo == null ? 0 : this.EntityTela.Codigo,
                venda: this.EntityTela.Venda == undefined ? 0 : this.EntityTela.Venda
            };
            var antesGravar = this.ExecutarFuncaoServerSideSynch("GetAntesGravarOrcamento", parametros);
            var parametrosEmpresas = {
                codEmpresa: ValoresSismoura.EmpresaPadraoUsuario,
            };
            if (this.EntityTela.Venda > 0) {
                if (!antesGravar.VendaCancelada) {
                    MostrarAlerta("O orçamento não pode ser alterado pois possui venda");
                    return false;
                }
            }
            this.SituacaoOrcamento();
            if (ValoresSismoura.ConfiguracoesRetaguarda.Calcular_Orcamento_Automatico && this.EntityTela.Valor_Total > 0) {
                this.FormaPagamento(this.cboEmpresa.GetValue());
            }
            if (ValoresSismoura.ConfiguracoesRetaguarda.Mensagem_Bloqueio_Cheque) {
                var parametros = {
                    cliente: this.EntityTela.Codigo_Cliente
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("RetornoSituacaoCheque", parametros);
                if (!retorno) {
                    MostrarAlerta("Este cliente tem cheques com a situação bloqueada!!!");
                    //if (this.dlgFuncaoAdm.VerificarPorCodigo(5037, ValoresSismoura.UsuarioLogado, false, this.VerificarAutorizacaoSituacaiChequeCliente, this)) {
                    //    return false;
                    //}
                    return false;
                }
            }
            /*if ((this.situacaoOrcamento.Codigo == this.cboSituacao.GetValue()) && this.situacaoOrcamento.Gerar_Venda) {
                var codPdv = this.cboEmpresa.GetValue() == 0 ? ValoresSismoura.EmpresaPadraoUsuario : this.cboEmpresa.GetValue;
                if (ValoresSismoura.ConfiguracoesRetaguarda.Casas_Pdv_3) {
                    if (codPdv.toString().length < 3) {
                        MostrarAlerta("O Código do PDV configurado: " + codPdv + " não está de acordo com a configuração definida, que exige que ele tenha 3 dígitos. Altere esta configuração para prosseguir com as vendas !")
                        return false;
                    }
                }

                if (!ValoresSismoura.ConfiguracoesRetaguarda.Casas_Pdv_3) {
                    if (codPdv.toString().length > 1) {
                        MostrarAlerta("O Código do PDV configurado: " + codPdv + " não está de acordo com a configuração definida, que exige que ele tenha 3 dígitos. Altere esta configuração para prosseguir com as vendas. Ele não pode ter mais que um dígito !")
                        return false;
                    }
                }

                if (codPdv == 0) {
                    MostrarAlerta("O Código do PDV está ZERO!");
                    return false;
                }
            }*/
            if (this.cboSituacao.GetValue() == this.situacaoOrcamento.Codigo && this.situacaoOrcamento.Gerar_Venda) {
                if (this.EntityTela.Valor_Total == 0) {
                    MsgBoxJS("O orçamento está com o valor zerado, deseja realmente gerar uma venda?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnOrcamentoZerado, this));
                }
                if (this.EntityTela.Codigo_Cliente > 0) {
                    this.ClienteBloquearCrediarioVerifAtual();
                    //verificar log para gravar duplicidade boleto se é necessario
                }
            }
            if (this.txtDescontoP.Visible) {
                if (ValoresSismoura.ConfiguracoesRetaguarda.Desconto_Orcamento > 0) {
                    if (this.txtDescontoP.GetText().CNum() > ValoresSismoura.ConfiguracoesRetaguarda.Desconto_Orcamento) {
                        MsgBoxJS("O valor máximo de desconto configurado é: " + ValoresSismoura.ConfiguracoesRetaguarda.Desconto_Orcamento + "% e você informou " + this.txtDescontoP.GetText() + "%. Deseja continuar com o valor informado?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnOrcamentoZerado, this));
                        return false;
                    }
                }
            }
            if (this.cboContaCorrente.Combo.GetItemCount() <= 0) {
                MostrarAlerta("Não há nenhuma conta corrente vinculada a empresa ou a conta corrente vinculada a essa empresa foi inativada.");
                return false;
            }
            if (this.cboContaCorrente.Visible) {
                if (this.cboContaCorrente.Combo.GetValue() == 0) {
                    MostrarAlerta("Informe uma conta corrente para lançar o crediário!");
                    return false;
                }
            }
            if (this.situacaoOrcamento.Consistir_Limite_Contas_Receber /*&& this.situacaoOrcamento.Codigo == this.cboSituacao.GetValue()*/) {
                var parametros = {
                    codCliente: this.EntityTela.Codigo_Cliente
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetTotalReceberCreditoCliente", parametros);
                var limiteCredito = retorno.LimiteCreditoCliente;
                //this.ExecutarFuncaoServerSideSynch("LimiteCreditoCliente", parametros);
                if (limiteCredito > 0) {
                    if (retorno.TotalReceberCliente + this.Crediarios.Sum("Valor") > limiteCredito) {
                        MsgBoxJS("O cliente atingiu o limite de crédito permitido! Limite definido: " + limiteCredito + "deseja continuar? ", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnLimiteCreditoCliente, this));
                        //if (!this.dlgFuncaoAdm.VerificarPorCodigo(503, ValoresSismoura.UsuarioLogado, false, this.VerificarAutorizacaoLimiteCrediarioCliente, this)) {
                        //    this.txtCliente.Focus();
                        //    return false;
                        //}
                    }
                }
            }
            if (ValoresSismoura.ConfiguracoesRetaguarda.Usar_Credito_Orcamento && this.situacaoOrcamento.Gerar_Venda
                /*&& this.situacaoOrcamento.Codigo == this.cboSituacao.GetValue()*/ && this.TipoOrcamentoInfo.ValorCreditoCliente > 0) {
                MsgBoxJS("Deseja utilizar o crédito disponível como desconto? ", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnUtilizarCredito, this));
            }
            else {
                if (!this.situacaoOrcamento.Bonificado /*&& this.situacaoOrcamento.Codigo != this.cboSituacao.GetValue()*/) {
                    if (!this.diferencaTotalOrcamento) {
                        var retornoTotalPagamento = this.VerificaTotalPagamento();
                        return retornoTotalPagamento;
                    }
                }
            }
            if (this.EntityTela.Codigo > 0) {
                var parametrosBoleto = {
                    orcamento: this.EntityTela.Codigo
                };
                var boletoRecebidoTrasmitido = antesGravar.BoletoRecebidoTransmitido;
                //this.ExecutarFuncaoServerSideSynch("BoletoRecebidoTransmitido", parametrosBoleto);
                if (boletoRecebidoTrasmitido) {
                    //log de boleto
                    MostrarAlerta("Já foram gerados boletos para este orçamento, portanto suas parcelas não serão alteradas!");
                }
            }
            //consignação devoluçao por modal 
            //pontos de fidelidade
            if (ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Mesmo_Codigo) {
                if (this.EntityTela.Codigo > 0) {
                    var parametrosVendaCancelada = {
                        codOrcamento: this.EntityTela.Codigo
                    };
                    var vendaCanceladaOrcamento = this.ExecutarFuncaoServerSideSynch("GetVendaCancelada", parametrosVendaCancelada);
                    if (vendaCanceladaOrcamento) {
                        MostrarAlerta("Não será possível gerar venda para este orçamento, pois a mesma encontra-se cancelada!");
                    }
                    else {
                        MostrarAlerta("Não será possível aprovar este orçamento pois já existe uma venda com este código!");
                    }
                }
            }
            //consignação
            //if (this.Crediarios.length == 0) {
            //    if (this.situacaoOrcamento.Gerar_Receber && !this.situacaoOrcamento.Gerar_Venda /*&& this.EntityTela.Situacao == this.situacaoOrcamento.Codigo*/) {
            //        if (this.situacaoOrcamento.Gerar_Receber && this.situacaoOrcamento.Gerar_Venda /*&& this.EntityTela.Situacao == this.situacaoOrcamento.Codigo*/) {
            //            if (this.EntityTela.Valor_Total > 0) {
            //                MostrarAlerta("Ocorreu um erro ao gravar o orçamento! Cadastre o contas a receber manualmente no módulo financeiro!");
            //                return false;
            //            }
            //        }
            //    }
            //}
            if (this.situacaoOrcamento.Gerar_Venda /*&& this.situacaoOrcamento.Codigo == this.EntityTela.Situacao*/) {
                if (this.Cliente.Codigo > 0) {
                    this.ClienteBloquearCrediarioVerifAtual();
                }
            }
            if (this.Cliente.Bloquear_Crediario == "S") {
                MsgBoxJS("Módulo Retaguarda aba 3 - Inf. Complementares o cliente foi bloqueado para gerar crédito!", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, null);
            }
            var minuto;
            if (ConvertToDate(this.txtHoraEntrega.textBoxHorario.GetValue())) {
                minuto = ConvertToDate(this.txtHoraEntrega.textBoxHorario.GetValue()).getMinutes().toString().length == 1 ? "0" + ConvertToDate(this.txtHoraEntrega.textBoxHorario.GetValue()).getMinutes() : ConvertToDate(this.txtHoraEntrega.textBoxHorario.GetValue()).getMinutes();
            }
            else {
                minuto = "00";
            }
            this.ConverterProduto();
            this.EntityTela.Nome_Cliente = (this.Cliente == undefined || this.Cliente == null) ? this.Cliente.Nome : this.txtNomeCliente.GetText();
            this.EntityTela.Hora_Entrega = ConvertToDate(this.txtHoraEntrega.textBoxHorario.GetValue()) ? ConvertToDate(this.txtHoraEntrega.textBoxHorario.GetValue()).getHours() + ":" + minuto : "00:00";
            this.EntityTela.Condicao_Pagamento = this.cboFormaPagamento.GetValue();
            this.EntityTela.Data_Situacao = new Date();
            this.EntityTela.Produtos = this.OrcamentoItens;
            this.EntityTela.Cartoes = this.Cartoes;
            this.EntityTela.Cheques = this.Cheques;
            this.EntityTela.Pagamentos = this.Crediarios;
            this.EntityTela.Venda = this.EntityTela.Venda == undefined ? 0 : this.EntityTela.Venda;
            this.EntityTela.Valor_Cartao = this.Cartoes.Sum("Valor");
            this.EntityTela.Valor_Dinheiro = this.Dinheiros.Sum("Valor");
            this.EntityTela.Valor_Ticket = this.Tickets.Sum("Valor");
            this.EntityTela.Situacao = CNum(this.cboSituacao.GetValue());
            //this.EntityTela.Campo_Livre1 = this.OrcamentoPersonalizados[1].Valor;
            //this.EntityTela.Campo_Livre2 = this.OrcamentoPersonalizados[2].Valor;
            //this.EntityTela.Campo_Livre3 = this.OrcamentoPersonalizados[3].Valor;
            //this.EntityTela.Campo_Livre4 = this.OrcamentoPersonalizados[4].Valor;
            //this.EntityTela.Campo_Livre5 = this.OrcamentoPersonalizados[5].Valor;
            //this.EntityTela.Campo_Livre6 = this.OrcamentoPersonalizados[6].Valor;
            return true;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Orcame.prototype.ClienteBloquearCrediarioVerifAtual = function () {
        var verificaDiaAtualCrediario = true;
        for (var x = 0; x < this.Crediarios.length; x++) {
            if (this.DataServidor() != this.Crediarios[x].Vencimento) {
                verificaDiaAtualCrediario = false;
                x = this.Crediarios.length + 1;
            }
        }
        if (this.Cliente.Bloquear_Crediario == "S" && !verificaDiaAtualCrediario) {
            MostrarAlerta("Não será possível gerar venda para este orçamento pois não é permitido vender por crediário para este cliente. Altere a forma de pagamento!");
            return false;
        }
    };
    C_Orcame.prototype.OnDescontoPorcentagem = function (result) {
        var _this = this;
        if (result.Resultado == MsgBoxResult.No) {
            this.txtDescontoP.SetText("0");
            this.txtDescontoR.SetText("0");
            this.EntityTela.Valor_Total = this.EntityTela.Total_Produtos;
        }
        else if (result.Resultado == MsgBoxResult.Yes) {
            this.dlgFuncaoAdm.VerificarPorCodigo(620, ValoresSismoura.UsuarioLogado, false, function (retorno) {
                _this.VerificarAutorizacaoSituacaiChequeCliente(retorno);
                if (!retorno.Autorizado) {
                    _this.txtDescontoP.SetText("0");
                    _this.txtDescontoR.SetText("0");
                    _this.EntityTela.Valor_Total = _this.EntityTela.Total_Produtos;
                }
            }, this);
        }
    };
    C_Orcame.prototype.OnUtilizarCredito = function (result) {
        if (result.Resultado == MsgBoxResult.No) {
            this.txtCliente.Focus();
            if (this.situacaoOrcamento.Bonificado /*&& this.situacaoOrcamento.Codigo != this.cboSituacao.GetValue()*/) {
                if (!this.diferencaTotalOrcamento) {
                    var retornoTotalPagamento = this.VerificaTotalPagamento();
                    return retornoTotalPagamento;
                }
            }
            return false;
        }
        else if (result.Resultado == MsgBoxResult.Yes) {
            var auxSoma = (this.EntityTela.Total_Produtos + this.EntityTela.Valor_Impostos + this.EntityTela.Valor_Devolucao) - (this.EntityTela.Desconto + this.EntityTela.Acrescimo + this.EntityTela.DescontoAux);
            this.TipoOrcamentoInfo.IsValorCreditoIgualTotal = false;
            if (this.TipoOrcamentoInfo.ValorCreditoCliente > auxSoma) {
                this.TipoOrcamentoInfo.ValorCreditoCliente = auxSoma - this.EntityTela.Desconto;
                this.txtDescontoR.SetText(auxSoma.toString());
                this.TipoOrcamentoInfo.IsValorCreditoIgualTotal = true;
                this.txtValorCreditoUtilizado.SetText(auxSoma.Format(ValoresSismoura.ConfiguracoesRetaguarda.Casas_Decimais_Valor));
            }
            else {
                var desconto = this.txtDescontoR.GetText().CNum() + this.TipoOrcamentoInfo.ValorCreditoCliente;
                this.txtDescontoR.SetText(desconto.toString());
                this.txtValorCreditoUtilizado.SetText(this.TipoOrcamentoInfo.ValorCreditoCliente.Format(ValoresSismoura.ConfiguracoesRetaguarda.Casas_Decimais_Valor));
            }
            this.TipoOrcamentoInfo.ValorCreditoUtilizado = this.txtValorCreditoUtilizado.GetText().CNum();
            if (ValoresSismoura.ConfiguracoesRetaguarda.M_Func_Cred == 1) {
                this.TipoOrcamentoInfo.ValorCreditoBaixar = this.TipoOrcamentoInfo.ValorCreditoUtilizado;
            }
            else {
                this.TipoOrcamentoInfo.ValorCreditoBaixar = this.TipoOrcamentoInfo.ValorCreditoCliente;
            }
            this.CalcularTotalOrcamento(this.EntityTela);
            if (this.EntityTela.Valor_Total <= 0 && this.Pagamentos.Sum("Valor") == 0) {
                MostrarAlerta("O total do orçamento foi alterado devido à utilização do crédito do cliente.");
            }
            else {
                MostrarAlerta("O total do orçamento foi alterado devido à utilização do crédito do cliente.Revise as formas de pagamento antes de aprovar o orçamento!");
                this.mdPagamento.Show();
            }
            if (!this.VerificaTotalPagamento()) {
                this.TipoOrcamentoInfo.ValorCreditoUtilizado = 0;
                this.TipoOrcamentoInfo.ValorCreditoBaixar = 0;
                this.txtValorCreditoUtilizado.SetText("0".CNum().Format(ValoresSismoura.CasasDecimaisValor));
                this.CalcularTotalOrcamento(this.EntityTela);
            }
            return true;
        }
    };
    C_Orcame.prototype.VerificaTotalPagamento = function () {
        var _this = this;
        this.diferencaTotalOrcamento = true;
        this.EntityTela.Valor_Total = CNum(this.EntityTela.Valor_Total.Format(2));
        if (this.EntityTela.Valor_Total != this.Pagamentos.Sum("Valor")) {
            if (this.situacaoOrcamento.Gerar_Receber /*&& this.cboSituacao.GetValue() == this.situacaoOrcamento.Codigo*/) {
                MostrarAlerta("O total das formas de pagamento está diferente do total do orçamento! Valor do Orçamento: R$ " + this.EntityTela.Valor_Total.Format(2) + " Total das formas de pagamento: R$ " + this.Pagamentos.Sum("Valor").Format(2));
                return false;
            }
            else {
                MsgBoxJS("O total das formas de pagamento está diferente do total do orçamento  Valor do Orçamento: R$ " + this.EntityTela.Valor_Total.Format(2) + " Total das formas de pagamento: R$ " + this.Pagamentos.Sum("Valor").Format(2) + ".Deseja continuar ?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                    if (result.Resultado == MsgBoxResult.No) {
                        return false;
                    }
                    else {
                        _this.ClicarGravar();
                    }
                });
            }
        }
        else if (this.Pagamentos.Sum("Valor") == 0) {
            if (this.situacaoOrcamento.Gerar_Receber /*&& this.cboSituacao.GetValue() == this.situacaoOrcamento.Codigo*/) {
                MostrarAlerta("Informe as Formas de Pagamento antes de aprovar o orçamento !");
                this.mdPagamento.Show();
            }
            else {
                this.ClicarGravar();
            }
        }
        else if (this.Pagamentos.Sum("Valor") != this.EntityTela.Valor_Total && this.Cliente.Tipo == "J") {
            if (this.situacaoOrcamento.Gerar_Receber /*&& this.cboSituacao.GetValue() == this.situacaoOrcamento.Codigo*/) {
                MsgBoxJS("A soma das formas de pagamento: R$ "
                    + this.Pagamentos.Sum("Valor").Format(ValoresSismoura.CasasDecimaisValor) +
                    " está diferente do total do orçamento! Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                    if (result.Resultado == MsgBoxResult.No) {
                        return false;
                    }
                    else {
                        _this.ClicarGravar();
                    }
                });
            }
            else {
                this.ClicarGravar();
            }
        }
        else if ((this.Cliente.Codigo <= 0 && String.IsNullOrWhiteSpace(this.Cliente.Nome)) || String.IsNullOrWhiteSpace(this.EntityTela.Nome_Cliente)) {
            MostrarAlerta("Informe o código/nome de um cliente cadastrado antes de aprovar o orçamento !");
            this.txtCliente.Focus();
            return false;
        }
        else if (ValoresSismoura.ConfiguracoesRetaguarda.Mostrar_Mensagem_Campo_Comisionado) {
            if (this.EntityTela.Comissionado == 0 || this.EntityTela.Comissionado == null) {
                MsgBoxJS("Campo Comissionado não informado, deseja informá - lo ???", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                    if (result.Resultado == MsgBoxResult.Yes) {
                        _this.txtComissionado.Focus();
                        return false;
                    }
                    else {
                        _this.ClicarGravar();
                    }
                });
            }
            else {
                this.ClicarGravar();
            }
        }
        else {
            this.ClicarGravar();
        }
    };
    //protected OnComissinadoPreenchido(result: MsgBoxResultEventArgs) {
    //    if (result.Resultado == MsgBoxResult.Yes) {
    //        this.txtComissionado.Focus();
    //        return false;
    //    }
    //}
    //protected OnSomaFormaPagamento(result: MsgBoxResultEventArgs) {
    //    if (result.Resultado == MsgBoxResult.No) {
    //        return false;
    //    }
    //}
    //private diferencaTotalOrcamento: boolean;
    //protected OnDiferencaTotalOrcamento(result: MsgBoxResultEventArgs) {
    //    if (result.Resultado == MsgBoxResult.No) {
    //        this.diferencaTotalOrcamento = false;
    //    }
    //    else {
    //        this.diferencaTotalOrcamento = true;
    //    }
    //}
    C_Orcame.prototype.OnLimiteCreditoCliente = function (result) {
        var _this = this;
        if (result.Resultado == MsgBoxResult.No) {
            this.txtCliente.Focus();
            return false;
        }
        else if (result.Resultado == MsgBoxResult.Yes) {
            if (ValoresSismoura.ConfiguracoesRetaguarda.Credito_Cliente_Contas_Vencidas) {
                this.dlgFuncaoAdm.VerificarPorCodigo(504, ValoresSismoura.UsuarioLogado, false, function (retorno) {
                    _this.VerificarAutorizacaoLimiteCrediarioCliente(retorno);
                    if (retorno.Autorizado) {
                        _this.txtCliente.Focus();
                        return false;
                    }
                }, this);
            }
            return true;
        }
    };
    C_Orcame.prototype.VerificarAutorizacaoLimiteCrediarioCliente = function (retorno) {
        if (retorno.Autorizado) {
            this.verificarAutorizacaoLimiteCrediarioCliente = true;
        }
        else {
            this.verificarAutorizacaoLimiteCrediarioCliente = false;
        }
    };
    C_Orcame.prototype.VerificarAutorizacaoDescontoPorcentagem = function (retorno) {
        if (retorno.Autorizado) {
            this.verificarAutorizacaoDescontoPorcentagem = true;
        }
        else {
            this.verificarAutorizacaoDescontoPorcentagem = false;
        }
    };
    C_Orcame.prototype.OnOrcamentoZerado = function (result) {
        if (result.Resultado == MsgBoxResult.No) {
            return false;
        }
        else if (result.Resultado == MsgBoxResult.Yes) {
            return true;
        }
    };
    C_Orcame.prototype.OnDepoisGravar = function () {
        try {
            _super.prototype.OnDepoisGravar.call(this);
            if (this.EntityTela.Venda > 0) {
                var msg = "Venda " + this.EntityTela.Venda + " foi gerado por este orcamento";
                if (!ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Data_Igual_Entrega) {
                    msg += " para a data " + this.DataServidor().FormataData();
                }
                MostrarAlerta(msg);
            }
            /*var parametrosPersonalizados: any = {
                codCliente: this.EntityTela.Codigo_Cliente,
                camposValor: (this.ClientePersonalizado != undefined || this.ClientePersonalizado != null) ?
                             (this.ClientePersonalizado.PessoaEntity != undefined || this.ClientePersonalizado.PessoaEntity != null) ?
                              this.ClientePersonalizado.PessoaEntity.Campos_Valor : 0 : 0,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            }

            if (this.EntityTela.Codigo_Cliente) {
                this.ExecutarFuncaoServerSideSynch("SalvarCamposPersonalizados", parametrosPersonalizados);
            }
            */
            return true;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    C_Orcame.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        if (this.EntityTela.Venda > 0) {
            MostrarAlerta("Este orçamento não pode ser excluído pois já foi feita uma venda (" + this.EntityTela.Venda.Format(0) + ") para ele!");
            return false;
        }
        return true;
    };
    C_Orcame.prototype.OnPesquisouTransportadoraPlaca = function () {
        if (this.EntityTela) {
            if (this.EntityTela.Transportadora) {
                abrirEspera();
                var parametros = {
                    codTransportadora: this.EntityTela.Transportadora == undefined ? 0 : this.EntityTela.Transportadora
                };
                var placas = this.ExecutarFuncaoServerSideSynch("GetPlacasTransportadora", parametros);
                this.cboDeposito.ClearItems();
                this.cboPlaca.AddItem("", "", "");
                for (var i = 0; i < placas.length; i++) {
                    this.cboPlaca.AddItem(placas[i], placas[i], "");
                }
                fecharEspera();
            }
        }
    };
    C_Orcame.prototype.OnPesquisouCliente = function () {
        abrirEspera();
        var parametrosInfCliente = {
            codCliente: this.EntityTela.Codigo_Cliente
        };
        if (this.EntityTela.Codigo_Cliente > 0 || this.EntityTela.Codigo_Cliente != undefined || this.EntityTela.Codigo_Cliente != null) {
            this.Cliente = this.ExecutarFuncaoServerSideSynch("GetInformacoesCliente", parametrosInfCliente);
            this.txtNomeCliente.SetText(this.Cliente.Nome);
            this.EntityTela.Nome_Cliente = this.Cliente.Nome;
            this.txtFone.SetText(this.Cliente.Fone);
            this.txtNomeCliente.ReadOnly = true;
            this.txtFone.ReadOnly = true;
            this.consultarCPF();
            this.retornoCliente();
        }
        else {
            this.txtNomeCliente.ReadOnly = false;
            this.txtFone.ReadOnly = false;
            this.txtNomeCliente.Limpar();
            this.txtFone.Limpar();
        }
        fecharEspera();
    };
    C_Orcame.prototype.OnDepoisBuscarExistente = function (Entidade) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            var parametros = {
                codOrcamento: ("" + Entidade.Codigo).CNum(),
                codCliente: Entidade.Codigo_Cliente == undefined ? 0 : Entidade.Codigo_Cliente,
                codPrimeiroOperador: Entidade.Primeiro_Operador,
                codOperador: Entidade.Operador,
                vendedor: Entidade.Vendedor,
                venda: Entidade.Venda == null ? 0 : Entidade.Venda,
                codTransportadora: Entidade.Transportadora
            };
            abrirEspera();
            this.cboLote.Visible = false;
            //this.imprimirOrdemInserido = ValoresSismoura.ConfiguracoesRetaguarda.Imprimir_Orcamento_Ordem_Inserido == true ? true : false;
            //this.calcularQtdePeso = ValoresSismoura.ConfiguracoesRetaguarda.Calcular_Qtde_Peso == true ? true : false;
            //this.verifQuantMsg = false;
            if (Entidade.Codigo == 0) {
                //if (this.codigoObservacao == 0) {
                Entidade.Observacao = Entidade.Observacao + ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Observacao;
                //}
            }
            //this.criarEntidadePersonalizados();
            Entidade.Data_Entrega = ConvertToDate(Entidade.Data_Entrega);
            if (Entidade.Data_Entrega) {
                if (Entidade.Hora_Entrega == null) {
                    Entidade.Hora_Entrega = "00:00";
                }
                if (Entidade.Hora_Entrega.length == 4) {
                    Entidade.Hora_Entrega = "0" + Entidade.Hora_Entrega;
                }
                if ((Entidade.Hora_Entrega != "__:__") && (Entidade.Hora_Entrega != "0:00") && (Entidade.Hora_Entrega != "00:00")) {
                    var hours = Entidade.Hora_Entrega.ToDate().getHours();
                    var minutes = Entidade.Hora_Entrega.ToDate().getMinutes();
                    var seconds = Entidade.Hora_Entrega.ToDate().getSeconds();
                    Entidade.Data_Entrega.setHours(hours, minutes, seconds);
                    this.txtHora.textBoxHorario.SetText(ConvertToDate(Entidade.Data).FormataHoraMinSegSismoura());
                }
            }
            else {
                Entidade.Data_Entrega = this.DataServidor();
                Entidade.Data_Entrega.setHours(0, 0, 0);
            }
            // this.LimparValidacoesGravar();
            Entidade.Data_Cadastro = ConvertToDate(Entidade.Data_Cadastro);
            Entidade.Data_Alteracao = ConvertToDate(Entidade.Data_Alteracao);
            Entidade.Data_Entrega = ConvertToDate(Entidade.Data_Entrega);
            Entidade.Data_Recebimento = ConvertToDate(Entidade.Data_Recebimento);
            Entidade.Data_Situacao = ConvertToDate(Entidade.Data_Situacao);
            var InformacoesAdicionais = this.ExecutarFuncaoServerSideSynch("GetInformacoesAdicionaisOrcamento", parametros);
            if (Entidade.Codigo_Cliente > 0 || Entidade.Codigo_Cliente != undefined) {
                this.Cliente = InformacoesAdicionais.Cliente;
            }
            this.lblCadastradoPor.Text = InformacoesAdicionais.PrimeiroOperador;
            this.lblAlteradoPor.Text = InformacoesAdicionais.Operador;
            this.VerificaAutorizacao();
            if (Entidade.Empresa == 0) {
                Entidade.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
            }
            this.lblSaldoDevedor.Text = InformacoesAdicionais.SaldoContasReceber.Format("2");
            //this.ultimoOrcamento();
            this.lblUltimoOrcamento.Text = InformacoesAdicionais.UltimoOrcamento;
            // this.pedirSenha = false;
            this.verificaVendedor(InformacoesAdicionais.Vendedor);
            // this.pedirSenha = true;
            if (Entidade.Data_Situacao != null) {
                //this.lblDataSituacao.Text = Entidade.Data_Situacao.FormataDataHora();
                this.lblDataSituacao.Text = ConvertToDate(Entidade.Data).FormataDataHora();
            }
            this.verificaTransportadora(InformacoesAdicionais.Transportadora);
            if (ValoresSismoura.ConfiguracoesRetaguarda.Usar_Credito_Orcamento) {
                this.RetornaValorCreditoCliente(Entidade.Codigo_Cliente, 1 /* enRetaguarda */);
            }
            else {
                this.lblCredito.Text = "0,00";
            }
            if (Entidade.Venda > 0) {
                this.lblVenda.Text = Entidade.Venda.toString();
                this.lblVenda.Visible = true;
            }
            if (ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Mesmo_Codigo) {
                var parametrosVendaCancelada = {
                    codOrcamento: this.EntityTela.Codigo
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetVendaCancelada", parametrosVendaCancelada);
                if (retorno) {
                    this.lblVenda.Text = "CANCELADA";
                    this.lblVenda.Visible = true;
                    $(this.lblVenda.LabelComponente).css(""); //corna label ou property
                }
            }
            if (this.TipoOrcamentoInfo.ValorCreditoUtilizado >= this.totalProdutos) {
                this.EntityTela.Valor_Total = 0.01;
            }
            if (!ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Deposito_Por_Orcamento) {
                var retorno = this.ExecutarFuncaoServerSideSynch("GetDepositoPadrao", {});
                this.cboDeposito.SetValue(retorno);
            }
            this.Produtos = InformacoesAdicionais.Produtos;
            this.CalcularTotalOrcamento(Entidade);
            this.GetScope().Entity = Entidade;
            this.FormaPagamento(Entidade.Condicao_Pagamento);
            // var retorno = this.ExecutarFuncaoServerSideSynch("GetByCargaVendaOrcamento", parametrosCargaVenda);
            var retorno = InformacoesAdicionais.CargaVendaOrcamento;
            if (retorno > 0) {
                this.lblCarga.Visible = true;
                this.lblCarga.Text = retorno;
            }
            else {
                this.lblCarga.Visible = false;
            }
            if (this.EntityTela.Venda > 0 && this.Cliente.Codigo) {
                /*var parametrosCreditoUtilizadoCliente: any = {
                    codCliente: this.Cliente.Codigo,
                    venda: this.EntityTela.Venda
                }*/
                var retorno = InformacoesAdicionais.CreditoUtilizadoCliente;
                //this.ExecutarFuncaoServerSideSynch("GetByCreditoUtilizadoCliente", parametrosCreditoUtilizadoCliente);
                if (retorno) {
                    this.EntityTela.Credito_Utilizado = retorno;
                }
            }
            if (this.Produtos.Sum("Frete_Rateado") - this.EntityTela.Frete > 0.5) {
                MostrarAlerta("Ocorreu um erro ao ratear o frete. Por favor, refaça a nota fiscal!");
            }
            this.SituacaoOrcamento();
            this.CalculaMargemOrcamento(true, false);
            this.OrcamentoPagamentos();
            fecharEspera();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Orcame.prototype.CalculaMargemOrcamento = function (isDescReais, isDescPorc) {
        if (isDescReais === void 0) { isDescReais = false; }
        if (isDescPorc === void 0) { isDescPorc = false; }
        var somatoriaCusto = 0;
        var somatoriaSubtotal = 0;
        var valorVendaTotalProduto = 0;
        var somatoriaPrecoVenda = 0;
        if (this.Produtos.length < 0) {
            this.txtMarkupOrcamentoR.SetText("0");
            this.txtMarkupOrcamentoP.SetText("0");
            return;
        }
        this.Produtos.forEach(function (p) {
            if (p.Produto != 0 && p.Preco_Custo > 0 && p.Valor > 0) {
                somatoriaCusto = somatoriaCusto + (p.Preco_Custo * p.Quantidade);
                somatoriaSubtotal = somatoriaSubtotal + (p.SubTotal - p.Desconto);
                valorVendaTotalProduto = (p.Quantidade * p.Valor) - p.Desconto;
                somatoriaPrecoVenda = somatoriaPrecoVenda + valorVendaTotalProduto;
            }
        });
        if (isDescReais) {
            if (CNum(this.txtDescontoR.GetText()) > 0) {
                var aux = (CNum(this.txtDescontoP.GetText()) * somatoriaPrecoVenda) / 100;
                somatoriaPrecoVenda = somatoriaPrecoVenda - CNum(this.txtDescontoR.GetText());
                somatoriaSubtotal = somatoriaPrecoVenda;
            }
        }
        if (CNum(this.txtAcrescimoR.GetText()) > 0) {
            somatoriaPrecoVenda = somatoriaPrecoVenda + CNum(this.txtAcrescimoR.GetText());
        }
        var margemMarkUpOrcPorcentagem;
        var margemMarkUpValor;
        var conceito = this.conceito ? this.conceito.toUpperCase() : ""; // Verifica se é undefined
        switch (conceito) {
            case ("PREÇO POR FORA"):
                if (somatoriaCusto > 0 && somatoriaPrecoVenda > 0) {
                    margemMarkUpOrcPorcentagem = ((somatoriaPrecoVenda * 100) / somatoriaCusto) - 100;
                    margemMarkUpValor = somatoriaCusto * (margemMarkUpOrcPorcentagem / 100);
                    this.txtMarkupOrcamentoP.SetText(margemMarkUpOrcPorcentagem.Format(2));
                    this.txtMarkupOrcamentoR.SetText(margemMarkUpValor.Format(2));
                }
                break;
            default:
                if (somatoriaCusto > 0 && somatoriaPrecoVenda > 0) {
                    margemMarkUpOrcPorcentagem = (1 - (somatoriaCusto) / somatoriaSubtotal) * 100;
                    margemMarkUpValor = somatoriaCusto * (margemMarkUpOrcPorcentagem / 100);
                    this.txtMarkupOrcamentoP.SetText(margemMarkUpOrcPorcentagem.Format(2));
                    this.txtMarkupOrcamentoR.SetText(margemMarkUpValor.Format(2));
                }
                break;
        }
    };
    C_Orcame.prototype.CalcularTotalOrcamento = function (entity) {
        entity.Total_Produtos = this.Produtos.Sum("Total");
        //entity.Total_Produtos = this.Produtos.Sum("SubTotal").Format(ValoresSismoura.CasasDecimaisValor).CNum();
        entity.Valor_Total = CNum(entity.Total_Produtos) - CNum(entity.Desconto) + CNum(entity.Acrescimo) + CNum(entity.Valor_Impostos) - CNum(entity.Credito_Utilizado);
        if (CNum(entity.Valor_Total) <= 0) {
            entity.Valor_Total = 0;
        }
    };
    // #region "Produtos"
    C_Orcame.prototype.OnClickBotaoAbrirProduto = function () {
        try {
            this.mdProdutos.Show();
            this.txtProduto.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Orcame.prototype.OnClickBotaoFecharProduto = function () {
        this.diferencaTotalOrcamento = false;
        this.mdProdutos.Hide();
    };
    C_Orcame.prototype.OnPesquisouProduto = function (s, e) {
        try {
            abrirEspera();
            if (this.txtProduto.GetText().CNum() > 0) {
                var produto = this.ObterDadosProduto(this.txtProduto.GetText().CNum());
                if (produto.Tipo_Produto == 5) {
                    MostrarAlerta("Produto informado é do tipo Consumo Interno! Para que o mesmo possa ser vendido, acesse o cadastro de produto – aba Informações e altere o tipo do produto.");
                    this.txtProduto.SetText("");
                    fecharEspera();
                    return false;
                }
                var parametrosProduto = {
                    codDeposito: this.Produto.Deposito == undefined ? 0 : this.Produto.Deposito,
                    produto: this.Produto.Produto,
                    tipoCliente: this.Cliente != undefined ? this.Cliente.Tipo == undefined ? "" : this.Cliente.Tipo : "",
                    cpfCliente: this.Cliente != undefined ? this.Cliente.Cpf == undefined ? "" : this.Cliente.Cpf : "",
                    cidadeOrcamento: this.EntityTela.Cidade_Cliente == null ? this.Cliente.Cidade == undefined ? 0 : this.Cliente.Cidade : 0,
                    totalOrcamento: this.EntityTela.Valor_Total == undefined ? 0 : this.EntityTela.Valor_Total,
                    codEmpresa: this.EntityTela.Empresa,
                    codProduto: this.Produto.Produto,
                    codListaPreco: this.EntityTela.Lista_Preco == undefined ? 0 : this.EntityTela.Lista_Preco,
                    totalInformado: this.EntityTela.Total_Produtos == undefined ? 0 : this.EntityTela.Total_Produtos,
                    valorFrete: this.EntityTela.Frete == undefined ? 0 : this.EntityTela.Frete
                };
                var parametroCodProduto = {
                    CodProduto: produto.Codigo
                };
                var UtilizarOrcamento = this.ExecutarFuncaoServerSideSynch("VerificarUtilizarOrcamento", parametroCodProduto);
                if (!UtilizarOrcamento) {
                    MostrarAlerta("Este produto NÃO pode ser utilizado no orçamento.\nPara utilizar esse produto, acesse a tela Cadastro de " +
                        "Produto e utilize a opção Permitir Utilizar no Orçamento na aba Configurações.");
                    fecharEspera();
                    this.txtProduto.Limpar();
                    this.txtNome_Produto.Limpar();
                    this.txtValor.SetText("0,00");
                    this.txtUndQtde.Limpar();
                    this.txtSubTotal.SetText("0,00");
                    this.txtDescUnitario.SetText("0,000");
                    this.txtDescPorcentagem.SetText("0,000");
                    this.txtTotalProd.SetText("0,00");
                    this.txtEstoque.SetText("0,000");
                    this.txtEstoqueTotal.SetText("0,000");
                    return false;
                }
                var retornoProduto = this.ExecutarFuncaoServerSideSynch("RetornoProduto", parametrosProduto);
                if (produto.isControlado) {
                    this.cboLote.Visible = true;
                    /*var parametrosDeposito: any = {
                        codDeposito: this.Produto.Deposito == undefined ? 0 : this.Produto.Deposito,
                        codCliente: this.EntityTela.Codigo_Cliente == undefined ? 0 : this.EntityTela.Codigo_Cliente
                    }*/
                    var descricaoDeposito = retornoProduto.DescricaoDeposito;
                    //this.ExecutarFuncaoServerSideSynch("RetornoDocBancario", parametrosDeposito);
                    for (var x = 0; x < retornoProduto.EstoqueLotes.length; x++) {
                        if (retornoProduto.EstoqueLotes[x].Quantidade > 0) {
                            this.cboLote.AddItem(retornoProduto.EstoqueLotes[x].Lote + " Qtde:" + retornoProduto.EstoqueLotes[x].Quantidade + " - Dep:" + descricaoDeposito, retornoProduto.EstoqueLotes[x].Lote, "");
                        }
                    }
                    this.cboLote.AddItem("FC", "FC", "");
                }
                this.Produto.Fator = produto.Fator == 0 ? 1 : produto.Fator;
                this.Produto.Peso_Produto = produto.Peso_Produto;
                this.Produto.Preco_Custo = produto.Preco_Custo;
                this.Produto.Valor = produto.Preco_Produto;
                this.Produto.Nome_Produto = produto.Nome;
                this.Produto.SubTotal = this.Produto.Valor;
                this.Produto.Total = this.Produto.SubTotal;
                this.Produto.Tipo_Comissao = produto.Tipo_Comissao;
                if (produto.Tipo_Comissao == "V") {
                    if (this.Produto.Valor > 0) {
                        this.Produto.Comissao_Porcentagem = (produto.Valor_Comissao * 100) / this.Produto.Valor;
                        this.Produto.Comissao_Valor = produto.Valor_Comissao;
                    }
                }
                else {
                    if (this.Produto.Valor > 0) {
                        this.Produto.Comissao_Valor = (produto.Valor_Comissao / 100) * this.Produto.Valor;
                        this.Produto.Comissao_Porcentagem = produto.Valor_Comissao;
                    }
                }
                if (produto.Volume_Caixa > 0) {
                    this.Produto.Quantidade = produto.Volume_Caixa;
                    this.Produto.Volume = this.Produto.Quantidade / produto.Volume_Caixa;
                }
                else {
                    this.Produto.Volume = produto.Volume_Caixa;
                    this.Produto.Quantidade = 1;
                }
                var conceito = ValoresSismoura.ConfiguracoesRetaguarda.Conceito_Preco.toUpperCase() == "" ? "PREÇO POR FORA" : ValoresSismoura.ConfiguracoesRetaguarda.Conceito_Preco.toUpperCase();
                var margem = 0;
                if (ValoresSismoura.ConfiguracoesRetaguarda.Conceito_Preco == "PREÇO POR FORA") {
                    if (produto.Preco_Custo != 0) {
                        margem = ((this.Produto.Valor * 100) / produto.Preco_Custo) - 100;
                    }
                    else {
                        margem = 0;
                    }
                }
                else if (ValoresSismoura.ConfiguracoesRetaguarda.Conceito_Preco == "PREÇO POR DENTRO") {
                    if (produto.Preco_Custo != 0) {
                        margem = ((produto.Preco_Custo * 100) / this.Produto.Valor);
                    }
                    else {
                        margem = 0;
                    }
                }
                else if (ValoresSismoura.ConfiguracoesRetaguarda.Conceito_Preco == "(VENDA-CUSTO)/VENDA") {
                    if (produto.Preco_Custo != 0) {
                        margem = ((this.Produto.Valor - produto.Preco_Custo) / this.Produto.Valor) * 100;
                    }
                    else {
                        margem = 0;
                    }
                }
                if (retornoProduto.PrecoProdutoLista) {
                    if (retornoProduto.PrecoProdutoLista.Valor > 0) {
                        this.Produto.Valor = retornoProduto.PrecoProdutoLista.Valor;
                        this.Produto.SubTotal = this.Produto.Valor;
                        this.Produto.Total = this.Produto.SubTotal;
                    }
                }
                if (retornoProduto.Localizacao) {
                    this.Produto.Localizacao = retornoProduto.Localizacao.Descricao;
                }
                this.Produto.Margem = margem;
                this.Produto.Codigo_Barra = produto.Codigo_Barra;
                this.Produto.Deposito = this.cboDeposito.GetValue() == null ? ValoresSismoura.DepositoPadrao : this.cboDeposito.GetValue();
                this.Produto.NCM = produto.Ncm;
                this.Produto.Total_Custo = produto.Preco_Custo * this.txtQuantidade.GetText().CNum();
                /* var parametros: any = {
                     codProduto: produto.Codigo,
                     codDeposito: this.Produto.Deposito == undefined ? 0 : this.Produto.Deposito
                 }*/
                /*var parametrosProduto: any = {
                    codProduto: produto.Codigo,
                }*/
                if (ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Permitir_Deposito && this.cboDeposito.GetValue() == -1) {
                    MostrarAlerta("Não será possível adicionar o produto, pois nenhum depósito foi encontrado.");
                    return false;
                }
                var estoque = retornoProduto.Estoque;
                //this.ExecutarFuncaoServerSideSynch("GetEstoqueProdutoDeposito", parametros);
                var estoqueTotal = retornoProduto.Estoque_Total;
                //this.ExecutarFuncaoServerSideSynch("GetEstoqueProduto", parametrosProduto);
                this.Produto.Estoque = estoque == null ? 0 : estoque.Qtde;
                this.Produto.Estoque_Total = estoqueTotal;
                var parametrosProdutoUnidadeConversao = {
                    codProduto: this.Produto.Produto
                };
                var produtoUnidadeConversao = retornoProduto.ProdutoUnidadeConversao;
                //this.ExecutarFuncaoServerSideSynch("GetByProdutoUnidadeConversao", parametrosProdutoUnidadeConversao);
                for (var x = 0; x < produtoUnidadeConversao.Lenght; x++) {
                    this.cboUndConvert.Combo.AddItem(produtoUnidadeConversao.Unidade, produtoUnidadeConversao.Id, "");
                }
                this.OnEstoqueProduto();
                if (this.Cliente.Codigo != undefined) {
                    /*var parametrosCalcularDesconto_ISSQN: any = {
                        tipoCliente: this.Cliente.Tipo,
                        cpfCliente: this.Cliente.Cpf,
                        cidadeOrcamento: this.EntityTela.Cidade_Cliente == null ? this.Cliente.Cidade == undefined ? 0 : this.Cliente.Cidade : 0,
                        totalOrcamento: this.EntityTela.Valor_Total == undefined ? 0 : this.EntityTela.Valor_Total,
                        codEmpresa: this.EntityTela.Empresa,
                        codProduto: this.Produto.Produto,
                        codListaPreco: this.EntityTela.Lista_Preco == undefined ? 0 : this.EntityTela.Lista_Preco,
                        totalInformado: this.EntityTela.Total_Produtos == undefined ? 0 : this.EntityTela.Total_Produtos,
                        valorFrete: this.EntityTela.Frete == undefined ? 0 : this.EntityTela.Frete
                    }*/
                    var decontoISSQNProduto = retornoProduto.DescontoISSQN;
                    //this.ExecutarFuncaoServerSideSynch("calcularDescontoISSQN", parametrosCalcularDesconto_ISSQN);
                    this.Produto.DescontoISSQN = decontoISSQNProduto;
                }
            }
            fecharEspera();
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Orcame.prototype.OnClickAdicionarProdutoGrid = function () {
        try {
            if (this.txtProduto.GetText() == "" || this.txtProduto.GetText() == undefined || this.txtProduto.GetText() == "0") {
                MostrarAlerta("Informe o produto do orçamento!");
                return false;
            }
            if (this.cboLote.Visible) {
                if (this.cboLote.GetValue() == 0 || this.cboLote.GetValue() == null || this.cboLote.GetValue() == undefined) {
                    MostrarAlerta("Informe o lote do produto do orçamento!");
                    return false;
                }
            }
            if (this.txtValor.GetText() == "" || this.txtValor.GetText() == undefined || this.txtValor.GetText() == "0,0000") {
                MostrarAlerta("O produto não possui preço de venda! Por favor, verifique seu cadastro no módulo Compras");
                return false;
            }
            if (this.txtDescUnitario.GetText().CNum() >= this.txtValor.GetText().CNum()) {
                MostrarAlerta("O valor do desconto não pode ser maior que o valor do produto");
                return false;
            }
            this.Produto.Desconto = this.txtDescUnitario.GetText().CNum();
            this.Produto.Desconto_Porcentagem = this.txtDescPorcentagem.GetText().CNum();
            var ultimoProduto = this.Produtos.length;
            if (ultimoProduto > 0) {
                this.Produto.Item = this.Produtos[ultimoProduto - 1].Item + 1;
            }
            else {
                this.Produto.Item = 1;
            }
            this.grdProduto.AdicionarOuAlterarItemAtual();
            this.Produto.Lote = this.cboLote.GetValue();
            this.cboLote.Visible = false;
            this.cboLote.ClearItems();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Orcame.prototype.OnValidandoProdutoGrade = function (s, e) {
        var _this = this;
        try {
            var entity = e.item;
            var baixaEstoque = false;
            if (this.situacaoOrcamento != undefined) {
                baixaEstoque = this.situacaoOrcamento.Baixar_Estoque;
            }
            if (this.txtProduto.GetText().CNum() <= 0 && this.txtQuantidade.GetText().CNum() > 0) {
                MostrarAlerta("Não será possível gerar venda para produto que não estão cadastrados no sistema!!!");
            }
            if (entity.Estoque < 0 && baixaEstoque) {
                this.dlgFuncaoAdm.VerificarPorCodigo(5062, ValoresSismoura.UsuarioLogado, false, function (retorno) {
                    _this.VerificarAutorizacaoMarcado(retorno);
                    if (!retorno.Autorizado) {
                        MostrarAlerta("O item não poderá ser adicionado, pois não possui estoque suficiente. Por gentileza informe outro produto para continuar!");
                    }
                }, this);
            }
            if (this.Produto.Tipo_Produto != 5 && (ValoresSismoura.ConfiguracoesRetaguarda.Prod_Interno_Gerar_Movimentacoes_Estoque)) {
                if (ValoresSismoura.ConfiguracoesRetaguarda.bloquear_semestoque = 0 && this.Produto.Estoque <= 0) {
                    MostrarAlerta("O item não poderá ser adicionado, pois não possui estoque suficiente. Por gentileza informe outro produto para continuar!");
                    e.cancelar = true;
                }
                if (!ValoresSismoura.ConfiguracoesRetaguarda.Saida_Sem_Estoque) {
                    if (baixaEstoque) {
                        if (String.IsNullOrWhiteSpace(this.Produto.Lote) && this.Produto.Controlado) {
                            //estoque em lote verificação  VerificaEstoqueLote
                            e.cancelar = true;
                        }
                    }
                }
                if (ValoresSismoura.ConfiguracoesRetaguarda.bloquear_semestoque == 2) {
                    if ((this.cboSituacao.GetValue() == this.situacaoOrcamento.Codigo) &&
                        (!baixaEstoque || this.EntityTela.Codigo == 0 || this.situacaoOrcamento.Codigo == this.cboSituacao.GetValue())
                        && (this.Produto.Estoque - this.Produto.Quantidade < 0)) {
                        MostrarAlerta("O orçamento não poderá ser finalizado pois o item não possui estoque suficiente. Por gentileza informe outro produto para continuar!");
                        e.cancelar = false;
                    }
                }
            }
            if (this.situacaoOrcamento && this.situacaoOrcamento.Transferencia_Estoque && this.cboSituacao.GetValue() == this.situacaoOrcamento.Codigo) {
                if (this.Produto.Controlado) {
                    MostrarAlerta("A situação de orçamento selecionada realiza a transferência de estoque entre os depositos configurados. Porém existem produtos neste orçamento que são controlados por lotes, e nesse caso, a transferência de estoque não é permitida. Não será possível continuar.");
                    return false;
                }
            }
            var parametros = {
                entidadeSTR: JSON.stringify(entity),
                totalProdutos: this.EntityTela.Total_Produtos,
                frete: this.EntityTela.Frete == undefined ? 0 : this.EntityTela.Frete
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ValidarItemGradeProduto", parametros);
            if (!String.IsNullOrWhiteSpace(retorno.Alerta)) {
                MostrarAlerta(retorno.Alerta);
                e.cancelar = true;
                return;
            }
            e.item = retorno.Item;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Orcame.prototype.OnAdicionandoProdutoGrade = function (s, e) {
        try {
            var entity = e.item;
            var parametros = {
                entidadeSTR: JSON.stringify(entity)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("AdicionandoItemGradeProduto", parametros);
            if (!String.IsNullOrWhiteSpace(retorno.Alerta)) {
                MostrarAlerta(retorno.Alerta);
                e.cancelar = true;
                return;
            }
            e.item = retorno.Item;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Orcame.prototype.OnLimpandoItemProduto = function (s, e) {
        try {
            var item = e.item;
            item.Nome_Produto = "";
            item.Quantidade = 1;
            e.item = item;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Orcame.prototype.OnAdicionouProdutoGrade = function (s, e) {
        this.txtProduto.Focus();
        this.CalcularTotalOrcamento(this.EntityTela);
    };
    //protected OnAlterouProdutoGrade(s: any, e: any) {
    //    this.CalcularTotalOrcamento(this.EntityTela);
    //}
    //#endregion
    //#region "Pagamentos"
    C_Orcame.prototype.OnClickBotaoAbrirPagamento = function () {
        var parametros = {
            nomeFuncao: "CadOrcFP",
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetAutorizacaoCadOrcFP", parametros);
        if (!retorno) {
            this.dlgFuncaoAdm.VerificarPorCodigo(5047, ValoresSismoura.UsuarioLogado, false, this.VerificarAutorizacaoPag, this);
            if (this.VerificarAutorizacaoPag) {
                MostrarAlerta("Este usuário não possui acesso para alterar a forma de pagamento no orçamento!");
                this.mdPagamento.Hide();
                return false;
            }
        }
        if (this.Produtos.length == 0) {
            MostrarAlerta("Informe os produtos do orçamento!");
            return false;
        }
        else {
            this.Cartao = {};
            this.Cartao.Valor = this.EntityTela.Valor_Total;
            this.Dinheiro = {};
            this.Dinheiro.Valor = this.EntityTela.Valor_Total;
            this.Ticket = {};
            this.Ticket.Valor = this.EntityTela.Valor_Total;
            this.Cheque.Cliente = this.EntityTela.Codigo_Cliente;
            this.Cheque.Nome_Cliente = this.txtCliente.GetResultado();
            this.Cheque.Fone_Cliente = this.Cliente.Fone;
            this.Cheque.Endereco_Cliente = this.Cliente.Endereco_Nome;
            if (this.Cliente) {
                if (this.Cliente.Cpf) {
                    if (this.Cliente.Cpf.length == 14) {
                        this.txtCPF.IsCPF = true;
                    }
                    else {
                        this.txtCPF.IsCPF = false;
                    }
                }
            }
            this.Cheque.Cpf = this.Cliente.Cpf;
            this.FormaPagamento(this.EntityTela.Condicao_Pagamento);
            this.mdPagamento.Show();
            return true;
        }
    };
    C_Orcame.prototype.OnClickBotaoFecharPagamento = function () {
        this.diferencaTotalOrcamento = false;
        this.mdPagamento.Hide();
    };
    C_Orcame.prototype.OnClickBotaoIncluiPagamento = function () {
        this.diferencaTotalOrcamento = false;
        this.mdPagamento.Hide();
        this.cboFormaPagamento.LimparSelecao();
        this.cboFormaPagamento.SetValue("0");
        this.OrcamentoPagamentos();
    };
    C_Orcame.prototype.OrcamentoPagamentos = function () {
        this.Pagamentos = [];
        this.Pagamento = {};
        if (this.Cartoes.length > 0) {
            this.Pagamento = {};
            this.Pagamento.Descricao = "Cartões";
            this.Pagamento.Valor = this.Cartoes.Sum("Valor");
            if (this.Pagamento.Valor != 0) {
                this.Pagamentos.push(this.Pagamento);
            }
        }
        if (this.Dinheiros.length > 0) {
            this.Pagamento = {};
            this.Pagamento.Descricao = "Dinheiro";
            this.Pagamento.Valor = this.Dinheiros.Sum("Valor");
            if (this.Pagamento.Valor != 0) {
                this.Pagamentos.push(this.Pagamento);
            }
        }
        if (this.Tickets.length > 0) {
            this.Pagamento = {};
            this.Pagamento.Descricao = "Ticket";
            this.Pagamento.Valor = this.Tickets.Sum("Valor");
            if (this.Pagamento.Valor != 0) {
                this.Pagamentos.push(this.Pagamento);
            }
        }
        if (this.Crediarios.length > 0) {
            this.Pagamento = {};
            this.Pagamento.Descricao = "Crédiario";
            this.Pagamento.Valor = this.Crediarios.Sum("Valor");
            if (this.Pagamento.Valor != 0) {
                this.Pagamentos.push(this.Pagamento);
            }
        }
        if (this.Cheques.length > 0) {
            this.Pagamento = {};
            this.Pagamento.Descricao = "Cheque";
            this.Pagamento.Valor = this.Cheques.Sum("Valor_Cheque");
            if (this.Pagamento.Valor != 0) {
                this.Pagamentos.push(this.Pagamento);
            }
        }
        this.grdPagamentos.PreencherGrid(this.Pagamentos);
    };
    C_Orcame.prototype.OnClickIncluirCartao = function (s, e) {
        try {
            // this.Cartoes = [];
            if (this.Cartao.Codigo_Cartao == 0 && this.Cartao.Codigo_Cartao == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Cartão.");
                return false;
            }
            if (this.Cartao.Valor == 0 && this.Cartao.Valor == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Valor.");
                return false;
            }
            if (this.cboCartao.GetItemCount() == 0) {
                MostrarAlerta("Não existe nenhum cartão para ser selecionado!");
                return false;
            }
            this.Cartao.Cartao = this.cboCartao.Combo.GetText();
            this.Cartoes.push(this.Cartao);
            this.grdCartao.PreencherGrid(this.Cartoes);
            var totalPendente = this.CalcularTotalPendente();
            if (ValoresSismoura.ConfiguracoesRetaguarda.Orc_Parc_Calcular_Restante) {
                if (this.EntityTela.Valor_Total - totalPendente > 0) {
                    this.Crediario = {};
                    this.Cartao = {};
                    this.Cheque = {};
                    this.Dinheiro = {};
                    this.Ticket = {};
                    this.Crediario.Valor = totalPendente;
                    this.Cartao.Valor = totalPendente;
                    this.Cheque.Valor_Cheque = totalPendente;
                    this.Dinheiro.Valor = totalPendente;
                    this.Ticket.Valor = totalPendente;
                }
                else {
                    this.Cartao = {};
                    this.Cartao.Valor = this.EntityTela.Valor_Total;
                }
            }
            else {
                this.Cartao = {};
                this.Cartao.Valor = this.EntityTela.Valor_Total;
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Orcame.prototype.OnClickIncluirCrediario = function (s, e) {
        try {
            this.Crediario.Parcela = (this.txtParcela.GetText() == undefined || this.txtParcela.GetText() == null) ? 0 : this.txtParcela.GetText().CNum();
            this.Crediario.Vencimento = this.txtVencimentoCrediario.Date;
            this.Crediario.Valor = (this.txtValorCrediario.GetText() == undefined || this.txtValorCrediario.GetText() == null) ? 0 : this.txtValorCrediario.GetText().CNum();
            if (this.Crediario.Valor == 0 && this.Crediario.Valor == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Valor.");
                return false;
            }
            if (this.Crediario.Parcela == 0 && this.Crediario.Parcela == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Parcela.");
                return false;
            }
            if (this.Crediario.Vencimento == null && this.Crediario.Vencimento == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Vencimento.");
                return false;
            }
            if (this.Crediario.Doc_Bancario == 0 && this.Crediario.Doc_Bancario == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Doc Bancario.");
                return false;
            }
            if (this.cboFormaPagamento.GetValue() == 0 && this.Crediario.Valor > this.EntityTela.Valor_Total) {
                MostrarAlerta("O Valor informado tem que ser menor que o valor total.");
                return false;
            }
            if (this.Crediario.Vencimento.FormataData() == new Date().FormataData()) {
                MsgBoxJS("Atenção: você lançou a data de vencimento igual data de hoje. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoCrediarioDataIgual, this));
                return false;
            }
            var date1 = new Date(this.txtVencimentoCrediario.Date.getFullYear(), this.txtVencimentoCrediario.Date.getMonth(), this.txtVencimentoCrediario.Date.getDate());
            var date2 = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
            var datediff = date1.getTime() - date2.getTime();
            var retornoDate = parseInt((datediff / (24 * 60 * 60 * 1000)).toString(), 10);
            if (retornoDate < 0) {
                MsgBoxJS("Atenção: você lançou a data de vencimento menor que a data de hoje. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoCrediarioDataMenor, this));
                return false;
            }
            if (this.Crediario.Doc_Bancario > 0) {
                var parametros = {
                    docBancario: this.Crediario.Doc_Bancario == undefined ? 0 : this.Crediario.Doc_Bancario,
                    codCliente: this.EntityTela.Codigo_Cliente == undefined ? 0 : this.EntityTela.Codigo_Cliente
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("RetornoDocBancario", parametros);
                if (retorno.RetornoBloqueioDocBancario) {
                    MostrarAlerta("Este cliente possui restrição para venda em " + this.Crediario.Doc_Bancario);
                }
                if (!String.IsNullOrWhiteSpace(retorno.RetornoDescricaoDocBancario)) {
                    this.Crediario.Doc_Bancario_Descricao = retorno.RetornoDescricaoDocBancario;
                }
            }
            if (this.Crediario.Doc_Mercantil == 0 && this.Crediario.Doc_Mercantil == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Doc Mercantil.");
                return false;
            }
            if (this.Crediario.N_Doc_Mer == null && this.Crediario.N_Doc_Mer == undefined && this.Crediario.N_Doc_Mer == "") {
                MostrarAlerta("Preencha o campo corretamente: N° Doc Mercantil.");
                return false;
            }
            this.Crediario.N_Doc_Mer = this.EntityTela.N_Doc_Mercantil;
            this.Crediario.Doc_Mercantil = this.EntityTela.Doc_Mercantil;
            this.Crediario.Doc_Bancario = this.cboDocBancario.GetValue();
            this.Crediarios.push(this.Crediario);
            this.grdCrediario.PreencherGrid(this.Crediarios);
            var totalPendente = this.CalcularTotalPendente();
            //if (ValoresSismoura.ConfiguracoesRetaguarda.Orc_Parc_Calcular_Restante) {
            if (this.EntityTela.Valor_Total - totalPendente > 0) {
                this.Crediario = {};
                this.Cartao = {};
                this.Cheque = {};
                this.Dinheiro = {};
                this.Ticket = {};
                this.Crediario.Valor = totalPendente;
                this.Cartao.Valor = totalPendente;
                this.Cheque.Valor_Cheque = totalPendente;
                this.Dinheiro.Valor = totalPendente;
                this.Ticket.Valor = totalPendente;
            }
            /*} else {
                this.Crediario = <any>{};
                if (!this.Crediario.Valor) {
                    this.Crediario.Valor = this.EntityTela.Valor_Total;
                }*/
            //}
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Orcame.prototype.OnClickIncluirCheque = function (s, e) {
        try {
            /*this.Cheques = [];
            if (this.EntityTela.Cheques.length > 0) {
                this.Cheques = [];
                this.EntityTela.Cheques = [];
            }*/
            if (this.Cheque.Codigo == 0 || this.Cheque.Codigo == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Codigo.");
                return false;
            }
            if (this.Cheque.Agencia == 0 || this.Cheque.Agencia == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Agência.");
                return false;
            }
            if (this.Cheque.Vencimento == null || this.Cheque.Vencimento == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Bom Para.");
                return false;
            }
            if (this.Cheque.Banco == 0 || this.Cheque.Banco == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Banco.");
                return false;
            }
            if (this.Cliente) {
                this.Cheque.Pessoa = this.Cliente.Tipo;
                if ((this.Cheque.Pessoa == "" || this.Cheque.Pessoa == null || this.Cheque.Pessoa == undefined)) {
                    MostrarAlerta("Preencha o campo corretamente: Tipo.");
                    return false;
                }
            }
            else {
                if ((this.Cheque.Pessoa == "" || this.Cheque.Pessoa == null || this.Cheque.Pessoa == undefined)) {
                    MostrarAlerta("Preencha o campo corretamente: Tipo.");
                    return false;
                }
            }
            if (this.Cliente) {
                this.Cheque.Cpf = this.Cliente.Cpf;
                if (this.Cheque.Cpf == null || this.Cheque.Cpf == undefined || this.Cheque.Cpf == "") {
                    MostrarAlerta("Preencha o campo corretamente: CPF/CNPJ.");
                    return false;
                }
            }
            else {
                if (this.Cheque.Cpf == null || this.Cheque.Cpf == undefined || this.Cheque.Cpf == "") {
                    MostrarAlerta("Preencha o campo corretamente: CPF/CNPJ.");
                    return false;
                }
            }
            if (this.Cheque.Conta == 0 || this.Cheque.Conta == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Conta.");
                return false;
            }
            if (this.Cheque.Cliente == 0 || this.Cheque.Cliente == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Cliente.");
                return false;
            }
            if (this.Cheque.Nome_Cliente == "" || this.Cheque.Nome_Cliente == null || this.Cheque.Nome_Cliente == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Nome do Cliente.");
                return false;
            }
            if (this.Cheque.Fone_Cliente == "" || this.Cheque.Fone_Cliente == null || this.Cheque.Fone_Cliente == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Fone do Cliente.");
                return false;
            }
            if (this.Cheque.Endereco_Cliente == "" || this.Cheque.Endereco_Cliente == null || this.Cheque.Endereco_Cliente == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Endereço do Cliente.");
                return false;
            }
            if (this.Cheque.Cheque = 0) {
                MostrarAlerta("Número de cheque inválido!");
                return false;
            }
            if (this.txtNCheque.GetText() != null || this.txtNCheque.GetText() != undefined || this.txtNCheque.GetText() != "") {
                this.Cheque.Cheque = this.txtNCheque.GetText().CNum();
            }
            for (var x = 0; x < this.Cheques.length; x++) {
                if (this.Cheque.Cheque == this.Cheques[x].Cheque) {
                    MostrarAlerta("Este número de cheque já foi informado!");
                    return false;
                }
            }
            var cpf = this.Cheque.Cpf;
            if (cpf != undefined) {
                if (this.Cliente.Cpf != cpf) {
                    //.replace(".", "").replace("-", "").replace("/", "").replace(".", "")
                    MostrarAlerta("O CPF digitado é diferente do CPF do cliente");
                    return false;
                }
            }
            var parametrosVerificarChequesPendentes = {
                cliente: this.Cliente.Codigo == undefined ? 0 : this.Cliente.Codigo,
                Qtde_Total: this.Cheques.length,
                Valor_Total: this.Cheques.Sum("Valor_Cheque")
            };
            var retornoCheque = this.ExecutarFuncaoServerSideSynch("RetornaCheque", parametrosVerificarChequesPendentes);
            if (retornoCheque.VerificarChequesPendentes) {
                MostrarAlerta("Cliente com limite de cheques pendentes excedido! O limite do cliente é: R$ "
                    + retornoCheque.LimiteValorCheque +
                    "Somando todos os Cheques do Cliente com o Cheque dessa venda o valor fica: Valor Total: R$ " + retornoCheque.Qtde_total_Cheque);
                return false;
            }
            /*var parametrosVerificarValorChequesPendentes: any = {
                cliente: this.Cliente.Codigo
            }*/
            //var retornoVerificarValorChequesPendentes = this.ExecutarFuncaoServerSideSynch("VerificarValorChequesPendentes", parametrosVerificarValorChequesPendentes);
            /*var parametrosLimiteChequePendente: any = {
                cliente: this.Cliente.Codigo
            }*/
            // var retornoLimiteChequePendente = this.ExecutarFuncaoServerSideSynch("LimiteChequePendente", parametrosLimiteChequePendente);
            if (retornoCheque.LimiteChequePendente > 0) {
                if (retornoCheque.VerificarValorChequesPendentes > retornoCheque.LimiteChequePendente) {
                    MostrarAlerta("Atenção! O valor de Cheques pendentes do cliente ultrapassa o limite configurado.Valor de Cheques Pendentes: R$ "
                        + retornoCheque.VerificarValorChequesPendentes +
                        "Valor máximo configurado: R$ " + retornoCheque.LimiteChequePendente);
                    return false;
                }
            }
            /*var parametrosChequeExistente: any = {
                codCheque: this.Cheque.Codigo,
                agencia: this.Cheque.Agencia,
                banco: this.Cheque.Banco,
                conta: this.Cheque.Conta,
                numeroCheque: this.Cheque.Cheque
            }
            */
            /* var retornoChequeExistente = this.ExecutarFuncaoServerSideSynch("ChequeExistente", parametrosChequeExistente);
 
             if (retornoChequeExistente) {
                 MostrarAlerta("Já existe um cheque com estas informações cadastrado no sistema");
                 return false;
             }*/
            this.Cheque.Cpf = this.Cliente.Cpf;
            this.Cheques.push(this.Cheque);
            this.RefreshAngular();
            this.Cheque = {};
            this.grdCheque.PreencherGrid(this.Cheques);
            if (this.Cheques.length > 0) {
                this.Cheque.Cheque = this.Cheques[this.Cheques.length - 1].Cheque + 1;
                this.Cheque.Codigo = this.Cheques[this.Cheques.length - 1].Codigo + 1;
                this.Cheque.Vencimento = new Date();
                this.Cheque.Endereco_Cliente = this.Cliente.Endereco_Nome;
                this.Cheque.Cliente = this.Cliente.Codigo;
                if (this.Cliente) {
                    if (this.Cliente.Cpf) {
                        if (this.Cliente.Cpf.length == 14) {
                            this.txtCPF.IsCPF = true;
                        }
                        else {
                            this.txtCPF.IsCPF = false;
                        }
                    }
                }
                this.Cheque.Cpf = this.Cliente.Cpf;
                this.Cheque.Fone_Cliente = this.Cliente.Fone;
                this.Cheque.Nome_Cliente = this.Cliente.Nome;
                var totalPendente = this.CalcularTotalPendente();
                if (ValoresSismoura.ConfiguracoesRetaguarda.Orc_Parc_Calcular_Restante) {
                    if (this.EntityTela.Valor_Total - totalPendente > 0) {
                        this.Crediario = {};
                        this.Cartao = {};
                        this.Cheque = {};
                        this.Dinheiro = {};
                        this.Ticket = {};
                        this.Crediario.Valor = totalPendente;
                        this.Cartao.Valor = totalPendente;
                        this.Cheque.Valor_Cheque = totalPendente;
                        this.Dinheiro.Valor = totalPendente;
                        this.Ticket.Valor = totalPendente;
                    }
                    else {
                        this.Cheque = {};
                        this.Cheque.Valor_Cheque = this.EntityTela.Valor_Total;
                    }
                }
                else {
                    this.Cheque = {};
                    this.Cheque.Valor_Cheque = this.EntityTela.Valor_Total;
                }
                this.optTipo.SetValue(this.Cliente.Tipo);
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Orcame.prototype.OnClickIncluirDinheiro = function (s, e) {
        try {
            if (this.Dinheiro.Valor == 0 && this.Dinheiro.Valor == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Valor.");
                return false;
            }
            if (this.Dinheiros.length > 0) {
                this.Dinheiro.Item = this.Dinheiros[length - 1].Item + 1;
            }
            else {
                this.Dinheiro.Item = 1;
            }
            this.Dinheiros.push(this.Dinheiro);
            this.Dinheiro = {};
            this.grdDinheiro.PreencherGrid(this.Dinheiros);
            var totalPendente = this.CalcularTotalPendente();
            if (ValoresSismoura.ConfiguracoesRetaguarda.Orc_Parc_Calcular_Restante) {
                if (this.EntityTela.Valor_Total - totalPendente > 0) {
                    this.Crediario = {};
                    this.Cartao = {};
                    this.Cheque = {};
                    this.Dinheiro = {};
                    this.Ticket = {};
                    this.Crediario.Valor = totalPendente;
                    this.Cartao.Valor = totalPendente;
                    this.Cheque.Valor_Cheque = totalPendente;
                    this.Dinheiro.Valor = totalPendente;
                    this.Ticket.Valor = totalPendente;
                }
                else {
                    this.Dinheiro = {};
                    this.Dinheiro.Valor = this.EntityTela.Valor_Total;
                }
            }
            else {
                this.Dinheiro = {};
                this.Dinheiro.Valor = this.EntityTela.Valor_Total;
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Orcame.prototype.OnClickIncluirTicket = function (s, e) {
        try {
            if (this.Ticket.Valor == 0 && this.Dinheiro.Valor == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Valor.");
                return false;
            }
            if (this.Tickets.length > 0) {
                this.Ticket.Item = this.Tickets[length - 1].Item + 1;
            }
            else {
                this.Ticket.Item = 1;
            }
            this.Tickets.push(this.Ticket);
            this.Ticket = {};
            this.grdTicket.PreencherGrid(this.Tickets);
            var totalPendente = this.CalcularTotalPendente();
            if (ValoresSismoura.ConfiguracoesRetaguarda.Orc_Parc_Calcular_Restante) {
                if (this.EntityTela.Valor_Total - totalPendente > 0) {
                    this.Crediario = {};
                    this.Cartao = {};
                    this.Cheque = {};
                    this.Dinheiro = {};
                    this.Ticket = {};
                    this.Crediario.Valor = totalPendente;
                    this.Cartao.Valor = totalPendente;
                    this.Cheque.Valor_Cheque = totalPendente;
                    this.Dinheiro.Valor = totalPendente;
                    this.Ticket.Valor = totalPendente;
                }
            }
            else {
                this.Ticket = {};
                this.Ticket.Valor = this.EntityTela.Valor_Total;
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Orcame.prototype.VerificarAutorizacao = function (retorno) {
        if (retorno.Autorizado) {
            this.verificadoAutorizacao = true;
        }
        else {
            this.verificadoAutorizacao = false;
        }
    };
    C_Orcame.prototype.VerificarAutorizacaoOrcFP = function (retorno) {
        if (retorno.Autorizado) {
            this.verificadoAutorizacaoOrcFP = true;
        }
        else {
            this.verificadoAutorizacaoOrcFP = false;
        }
    };
    C_Orcame.prototype.VerificarAutorizacaoPag = function (retorno) {
        if (retorno.Autorizado) {
            this.verificadoAutorizacaoPag = true;
        }
        else {
            this.verificadoAutorizacaoPag = false;
        }
    };
    C_Orcame.prototype.VerificarAutorizacaoMarcado = function (retorno) {
        if (retorno.Autorizado) {
            this.verificadoAutorizacaoMarcado = true;
        }
        else {
            this.verificadoAutorizacaoMarcado = false;
        }
    };
    C_Orcame.prototype.VerificarAutorizacaoSituacaiChequeCliente = function (retorno) {
        if (retorno.Autorizado) {
            this.verificarAutorizacaoSituacaiChequeCliente = true;
        }
        else {
            this.verificarAutorizacaoSituacaiChequeCliente = false;
        }
    };
    C_Orcame.prototype.RetornaValorCreditoCliente = function (codCliente, modulo) {
        var valor = 0;
        var validade = false;
        var valorCredito = 0;
        if (modulo == 1 /* enRetaguarda */) {
            if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Validade_Credito) {
                validade = true;
            }
        }
        else {
            var utilizarValidadeCredito = this.ExecutarFuncaoServerSideSynch("GetCampoValidadeCreditoPdv", {});
            if (utilizarValidadeCredito) {
                validade = true;
            }
        }
        if (validade) {
            var parametrosValorCreditoCliente = {
                codCliente: codCliente,
                validade: validade
            };
            valorCredito = this.ExecutarFuncaoServerSideSynch("RetornaValorCreditoCliente", parametrosValorCreditoCliente);
        }
        else {
            var parametrosValorCliente = {
                codCliente: codCliente
            };
            valorCredito = this.ExecutarFuncaoServerSideSynch("RetornaValorCliente", parametrosValorCliente);
        }
        this.TipoOrcamentoInfo.ValorCreditoCliente = valorCredito;
        this.lblCredito.Text = this.TipoOrcamentoInfo.ValorCreditoCliente.toString();
    };
    C_Orcame.prototype.LimparCamposCliente = function () {
        this.lblObsEnd.Text = "";
        this.lblZonaEntrega.Text = "";
        this.lblZonaVenda.Text = "";
        this.Cliente = {};
        this.EntityTela.Bairro_Cliente = "";
        this.EntityTela.Endereco_Cliente = "";
        this.EntityTela.Cidade_Cliente = 0;
        this.EntityTela.Fone_Cliente = "";
        this.lblCadastradoPor.Text = "";
    };
    C_Orcame.prototype.verificaConvenioCliente = function () {
        var parametrosConvenio = {
            codCliente: this.EntityTela.Codigo_Cliente
        };
        var convenioCliente = false;
        var buscarClienteBancoFranqueador = this.ExecutarFuncaoServerSideSynch("GetBuscarClienteBancoFranqueador", parametrosConvenio);
        if (buscarClienteBancoFranqueador) {
            convenioCliente = this.ExecutarFuncaoServerSideSynch("RetornaConvenioFranquia", parametrosConvenio);
        }
        else {
            convenioCliente = this.ExecutarFuncaoServerSideSynch("RetornaConvenio", parametrosConvenio);
        }
        /*this.verificaConvenioPessoa = true;
        if (this.EntityTela.Codigo_Cliente == 0) {
            this.verificaConvenioPessoa = false;
        }*/
        if (convenioCliente) {
            MostrarAlerta("Esse é um Código de um Convênio. Por favor, informe o Código de um Cliente!");
            this.EntityTela.Codigo_Cliente = 0;
        }
        // this.verificaConvenioPessoa = false;
    };
    C_Orcame.prototype.verificaTransportadora = function (clienteTransportadora) {
        /*var parametrosClienteTransportadora: any = {
            codCliente: codCliente,
            codTransportadora: transportadora == null ? 0 : transportadora
        }

        var clienteTransportadora = this.ExecutarFuncaoServerSideSynch("GetPessoaTransportadora", parametrosClienteTransportadora);
        */
        if (clienteTransportadora) {
            if (clienteTransportadora.lenght > 1) {
                this.Transportadoras = [];
                for (var x = 0; x <= clienteTransportadora.lenght; x++) {
                    this.Transportadora = {};
                    this.Transportadora.Cliente = clienteTransportadora[x].Cliente;
                    this.Transportadora.Transportadora = clienteTransportadora[x].Transportadora;
                    this.Transportadoras.push(this.Transportadora);
                }
            }
            else if (clienteTransportadora.lenght == 1) {
                this.EntityTela.Transportadora = clienteTransportadora[0].Transportadora;
            }
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Transportadora_Cliente) {
            if (clienteTransportadora) {
                MostrarAlerta("A Transportadora informada não está vinculada ao Cliente do Orçamento!");
                this.EntityTela.Transportadora = 0;
            }
        }
    };
    C_Orcame.prototype.verificaVendedor = function (vendedor) {
        /*var parametrosVendedor: any = {
            codigo: vendedor
        }

        var vendedor = this.ExecutarFuncaoServerSideSynch("GetVendedor", parametrosVendedor);*/
        if (vendedor) {
            this.lblCadastradoPor.Text = vendedor.Abreviacao;
            if (vendedor.Demitido || vendedor.Situacao == 2) {
                MostrarAlerta("Funcionário " + vendedor.Abreviacao + " encontra - se Demitido ou Afastado!");
                this.txtVendedor.Limpar();
            }
        }
    };
    C_Orcame.prototype.calculaSaldoDevedor = function () {
        var parametrosSaldo = {
            codOrcamento: this.EntityTela.Codigo
        };
        if (this.EntityTela.Codigo > 0) {
            var saldo = this.ExecutarFuncaoServerSideSynch("GetSaldoContasReceber", parametrosSaldo);
            this.lblSaldoDevedor.Text = saldo.Format("2");
        }
    };
    C_Orcame.prototype.ultimoOrcamento = function () {
        var parametrosUltimoOrcamento = {};
        var ultimoOrcamento = this.ExecutarFuncaoServerSideSynch("UltimoOrcamento", parametrosUltimoOrcamento);
        this.lblUltimoOrcamento.Text = ultimoOrcamento;
    };
    C_Orcame.prototype.VerificaAutorizacao = function () {
        this.dlgFuncaoAdm.VerificarPorCodigo(5081, ValoresSismoura.UsuarioLogado, false, this.VerificarAutorizacao, this);
        if (this.verificadoAutorizacao) {
            if (ValoresSismoura.UsuarioLogado != this.EntityTela.Vendedor) {
                this.verificadoAutorizacao = false;
                this.dlgFuncaoAdm.VerificarPorCodigo(5081, ValoresSismoura.UsuarioLogado, false, this.VerificarAutorizacao, this);
                if (!this.verificadoAutorizacao) {
                    MostrarAlerta("A configuração: 'Orçamento - Permitir que o vendedor visualize apenas seus orçamentos' está habilitada, esta ação necessita de privilégios.");
                }
            }
        }
        if (this.EntityTela.Orcamento_Distribuidora == "S") {
            MostrarAlerta("Este orçamento foi feito pelo módulo distribuidora e não poderá ser aberto neste módulo!");
        }
    };
    C_Orcame.prototype.retornoCliente = function () {
        var _this = this;
        this.verificaConvenioCliente();
        if (this.EntityTela.Codigo_Cliente == 0) {
            this.txtCliente.Limpar();
            this.LimparCamposCliente();
        }
        if (this.EntityTela.Lista_Preco) {
            if (!ValoresSismoura.ConfiguracoesRetaguarda.ListPrecOrc && !this.cboListaPreco.Visible) {
                this.cboListaPreco.Enabled = false;
            }
        }
        this.TipoOrcamentoInfo = {};
        if (this.Cliente.IsInativo) {
            MostrarAlerta("Cliente inativo !");
            this.txtCliente.Limpar();
        }
        // Verifica se o cliente possui uma situação padrão informada no cadastro de clientes.
        if (this.Cliente.Situacao_Orcamento > 0) {
            this.EntityTela.Situacao = this.Cliente.Situacao_Orcamento;
        }
        var parametros = {
            codCliente: this.EntityTela.Codigo_Cliente,
            codEmpresa: this.EntityTela.Empresa,
            codTransportadora: this.EntityTela.Transportadora == undefined ? 0 : this.EntityTela.Transportadora
        };
        var retornoCliente = this.ExecutarFuncaoServerSideSynch("RetornoCliente", parametros);
        if (retornoCliente.bloquearVendedorOrcamento) {
            MostrarAlerta("Não será possível realizar orçamentos para este cliente, pois o mesmo encontra-se bloqueado em seu cadastro.");
            this.txtCliente.Limpar();
            fecharEspera();
            return;
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Observacao_Cliente && this.EntityTela.Codigo_Cliente == 0) {
            if (this.Cliente.Obs != "") {
                MostrarAlerta(this.Cliente.Obs + "Observação do Cliente");
            }
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Cliente_Exibir_Nome == "F") {
            if (this.Cliente.Tipo == "J") {
                this.txtCliente.Procurar(this.Cliente.Codigo.toString());
                this.txtCliente.LabelResultado.textContent = this.Cliente.Nome_Fantasia;
            }
            else {
                this.txtCliente.Procurar(this.Cliente.Codigo.toString());
                this.txtCliente.LabelResultado.textContent = this.Cliente.Apelido;
            }
        }
        else {
            this.txtCliente.Procurar(this.Cliente.Codigo.toString());
            //this.txtCliente.LabelResultado.textContent = this.Cliente.Nome;
        }
        if (this.Cliente.Fone_Entrega == "") {
            this.EntityTela.Fone_Cliente = this.Cliente.Fone;
        }
        else {
            this.EntityTela.Fone_Cliente = this.Cliente.Fone_Entrega;
        }
        /*if (this.Cliente.Desconto_Venda != 0) {
            this.descontoCliente = true;
        }*/
        this.RetornaValorCreditoCliente(this.EntityTela.Codigo_Cliente, 1 /* enRetaguarda */);
        if (ValoresSismoura.ConfiguracoesRetaguarda.Info_Preencher_Endereco) {
            if (this.Cliente.Numero != "") {
                this.EntityTela.Endereco_Cliente = this.Cliente.Endereco_Nome + this.Cliente.Numero;
            }
            else {
                this.EntityTela.Endereco_Cliente = this.Cliente.Endereco_Nome;
            }
            this.EntityTela.Bairro_Cliente = this.Cliente.Bairro;
            this.EntityTela.Cidade_Cliente = (this.Cliente.Cidade == null || this.Cliente.Cidade == undefined) ? 0 : this.Cliente.Cidade.CNum();
        }
        this.EntityTela.Comissionado = this.Cliente.Comissionado;
        if (this.Cliente.Vendedor != 0 && (ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Vendedor || ValoresSismoura.ConfiguracoesRetaguarda.Buscar_Vendedor_Cliente))
            if (this.EntityTela.Vendedor != 0 && this.EntityTela.Codigo == 0 && this.EntityTela.Vendedor != this.Cliente.Vendedor) {
                MsgBoxJS("Já existe um vendedor neste orçamento.Deseja alterar para o vendedor do cliente ?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoVendedorCliente, this));
                this.EntityTela.Vendedor = this.Cliente.Vendedor;
            }
            else {
                if (this.EntityTela.Codigo == 0) {
                    this.EntityTela.Vendedor = this.Cliente.Vendedor;
                }
            }
        /*if (ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Vendedor) {
            this.EntityTela.Vendedor = 0;
        }*/
        if (ValoresSismoura.ConfiguracoesRetaguarda.Buscar_Vendedor_Cliente) {
            if (this.Cliente.Vendedor > 0 && this.EntityTela.Vendedor == 0 && this.Cliente != {}) {
                this.EntityTela.Vendedor = this.Cliente.Vendedor;
            }
        }
        if ((ValoresSismoura.ConfiguracoesRetaguarda.Orc_Subst_Vendedor)
            && (this.Cliente.Vendedor > 0 && this.EntityTela.Vendedor > 0
                && (this.Cliente.Vendedor != this.EntityTela.Vendedor))) {
            MsgBoxJS("Já existe um vendedor neste orçamento.Deseja alterar para o vendedor do cliente ?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoVendedorCliente, this));
            this.EntityTela.Vendedor = this.Cliente.Vendedor;
        }
        /*var parametrosIsNumber: any = {
            codCliente: this.EntityTela.Codigo_Cliente
        }*/
        var isNumberCodCliente = retornoCliente.IsNumberCodCliente;
        //this.ExecutarFuncaoServerSideSynch("IsNumberCodCliente", parametrosIsNumber);
        if (!isNumberCodCliente && this.Cliente.Vender_Preco_Custo == "S") {
            MsgBoxJS("Cliente informado está marcado: 'Vender a Preço de Custo'. Deseja habilitar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoClienteVendaPrecoCusto, this));
        }
        else {
            this.txtVendaPrecoCusto.Visible = false;
        }
        if (!String.IsNullOrWhiteSpace(this.Cliente.Doc_Mercantil.toString()) && this.Cliente.Doc_Mercantil.toString() != "0") {
            this.txtDocMercantil.SetText(this.Cliente.Doc_Mercantil.toString());
        }
        /* if (ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Forma_Pagamento_Padrao <= "0") {
             this.cboFormaPagamento.SetSelectedIndex(this.Cliente.Condicao_Pagamento);
             //this.preencherParcelas = true;
         }*/
        if (this.Cliente.Codigo > 0 && ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Forma_Pagamento_Padrao <= "0") {
            if (this.Cliente.Codigo != this.EntityTela.Codigo_Cliente && this.Cliente.Condicao_Pagamento > 0) {
                this.cboFormaPagamento.SetSelectedIndex(this.Cliente.Condicao_Pagamento);
            }
            var retornoTotalPagamento = this.RetornarTotalInformado(false);
            if (ValoresSismoura.ConfiguracoesRetaguarda.Orc_Parc_Calcular_Restante) {
                this.Produto.Valor = this.EntityTela.Valor_Total - retornoTotalPagamento;
            }
            else {
                this.Produto.Valor = this.EntityTela.Valor_Total;
            }
            /*var parametrosEmpresa: any = {
                codEmpresa: this.EntityTela.Empresa
            }*/
            var empresa = retornoCliente.Empresa;
            //this.ExecutarFuncaoServerSideSynch("GetEmpresa", parametrosEmpresa);
            var valorProdutos = 0;
            if (this.Cliente.Tipo == "J" && !String.IsNullOrWhiteSpace(this.Cliente.Cpf) && this.EntityTela.Cidade_Cliente == empresa.Cidade) {
                for (var x = 0; x < this.Produtos.length; x++) {
                    /* var parametrosProduto: any = {
                         codProduto: this.Produtos[x].Produto
                     }*/
                    //var produto = this.ExecutarFuncaoServerSideSynch("GetProduto", parametrosProduto);
                    this.totalProdutos = this.totalProdutos + this.Produtos[x].Valor;
                    if (empresa.Iss_Maior_Que <= this.Produtos[x].Valor) {
                        this.retornoIssMaiorQue = true;
                        if (this.Produtos[x].Servico != "0") {
                            valorProdutos = valorProdutos + this.Produtos[x].SubTotal;
                        }
                    }
                }
                if (this.retornoIssMaiorQue) {
                    var somaDescontoISSQN = ((valorProdutos * empresa.Desconto_ISSQN) / 100);
                    this.totalProdutos = ((this.totalProdutos - somaDescontoISSQN) - retornoTotalPagamento);
                }
                else {
                    this.totalProdutos = ((valorProdutos - this.EntityTela.Frete) - retornoTotalPagamento);
                }
            }
            else {
                this.totalProdutos = (valorProdutos - this.EntityTela.Frete);
            }
            if (ValoresSismoura.ConfiguracoesRetaguarda.Orc_Somar_Frete) {
                this.totalProdutos = this.totalProdutos + this.EntityTela.Frete;
            }
            if (this.Pagamentos.length == 0) {
                this.FormaPagamento(this.EntityTela.Condicao_Pagamento);
            }
            //this.preencherParcelas = true;
        }
        if (this.EntityTela.Codigo > 0 && this.EntityTela.Codigo !== null) {
            if (this.Cliente.Obs != "" && this.Cliente.Exibir_Observacao && this.EntityTela.Codigo.toString() == "") {
                MsgBoxJS("Deseja inserir a observação do cliente na observação do Orçamento ?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnClienteObs, this));
            }
            if (ValoresSismoura.ConfiguracoesRetaguarda.Usar_Credito_Orcamento) {
                this.RetornaValorCreditoCliente(this.EntityTela.Codigo_Cliente, 1 /* enRetaguarda */);
                if (this.TipoOrcamentoInfo.ValorCreditoCliente > 0 && this.EntityTela.Codigo.toString() == "") {
                    var msg = "Este Cliente possui um crédito de R$ " +
                        this.TipoOrcamentoInfo.ValorCreditoCliente.Format(2) +
                        " e esta operação será descontada deste crédito!" + "/n"
                        + "OBS: O crédito será descontado APENAS se a situação do Orçamento gerar uma venda!";
                    MsgBoxJS(msg, MsgBoxOptions.OkOnly, MsgBoxIcon.Info, null);
                }
            }
        }
        //var parametrosContaReceberCliente: any = {
        //    codCliente: this.Cliente.Codigo
        //}
        var saldo = retornoCliente.SaldoContasReceberCliente;
        //this.ExecutarFuncaoServerSideSynch("GetSaldoContasReceberCliente", parametrosContaReceberCliente);
        this.lblSaldoDevedor.Text = saldo;
        this.calculaSaldoDevedor();
        if (new Date().getDay() >= 15 && this.lblSaldo.Text > "0" && this.EntityTela.Codigo == 0) {
            this.dlgFuncaoAdm.Verificar("BloqCr15", ValoresSismoura.UsuarioLogado, false, function (retorno) {
                _this.VerificarAutorizacao(retorno);
                if (!retorno.Autorizado) {
                    MsgBoxJS("Não é possível vender no crediário depois do dia 15 para clientes com contas em aberto, Deseja continuar mesmo assim ?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(_this.OnLimparCliente, _this));
                    _this.dlgFuncaoAdm.VerificarPorCodigo(5025, ValoresSismoura.UsuarioLogado, false, function (retorno) {
                        _this.VerificarAutorizacao(retorno);
                        if (!retorno.Autorizado) {
                            _this.LimparCamposCliente();
                        }
                    }, _this);
                }
            }, this);
        }
        if (this.EntityTela.Codigo > 0 && this.EntityTela.Codigo != null) {
            if (this.EntityTela.Codigo.toString() == "") {
                this.verificaTransportadora(retornoCliente.Transportadora);
            }
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Calcular_Orcamento_Automatico) {
            this.FormaPagamento(this.EntityTela.Condicao_Pagamento);
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Orcamento_Zona_Entrega) {
            var parametrosZonaEntregaCliente = {
                codCliente: this.Cliente.Codigo
            };
            var zonaEntrega = this.ExecutarFuncaoServerSideSynch("GetZonaEntregaCliente", parametrosZonaEntregaCliente);
            var parametrosDiasSemanaEntrega = {
                codCliente: this.Cliente.Codigo
            };
            var diasSemanaEntrega = this.ExecutarFuncaoServerSideSynch("RetornaGetDiasSemanaDisponiveisCliente", parametrosDiasSemanaEntrega);
            if (!String.IsNullOrWhiteSpace(diasSemanaEntrega)) {
                this.lblZonaVenda.Text = zonaEntrega + " " + diasSemanaEntrega;
            }
            else {
                this.lblZonaVenda.Text = "";
            }
        }
        this.verificaTransportadora(retornoCliente.Transportadora);
        fecharEspera();
    };
    C_Orcame.prototype.OnClienteObs = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.EntityTela.Observacao = this.Cliente.Obs;
        }
        else {
            this.EntityTela.Observacao = this.EntityTela.Observacao + " - " + this.Cliente.Obs;
        }
    };
    C_Orcame.prototype.OnSelecionouOpcaoClienteVendaPrecoCusto = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.txtVendaPrecoCusto.Visible = true;
        }
        else {
            this.txtVendaPrecoCusto.Visible = false;
        }
    };
    C_Orcame.prototype.OnSelecionouOpcaoVendedorCliente = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.EntityTela.Vendedor = this.Cliente.Vendedor;
        }
    };
    C_Orcame.prototype.OnSelecionouOpcaoCrediarioDataIgual = function (result) {
        if (result.Resultado == MsgBoxResult.No) {
            this.Crediario = {};
        }
        else {
            var parametros = {
                docBancario: this.Crediario.Doc_Bancario == undefined ? 0 : this.Crediario.Doc_Bancario,
                codCliente: this.EntityTela.Codigo_Cliente == undefined ? 0 : this.EntityTela.Codigo_Cliente
            };
            var retornoDocBancario = this.ExecutarFuncaoServerSideSynch("RetornoDocBancario", parametros);
            if (!String.IsNullOrWhiteSpace(retornoDocBancario)) {
                this.Crediario.Doc_Bancario_Descricao = retornoDocBancario.RetornoDescricaoDocBancario;
            }
            this.Crediario.Parcela = (this.txtParcela.GetText() == undefined || this.txtParcela.GetText() == null) ? 0 : this.txtParcela.GetText().CNum();
            this.Crediario.Vencimento = this.txtVencimentoCrediario.Date;
            this.Crediario.Valor = (this.txtValorCrediario.GetText() == undefined || this.txtValorCrediario.GetText() == null) ? 0 : this.txtValorCrediario.GetText().CNum();
            this.Crediario.N_Doc_Mer = this.EntityTela.N_Doc_Mercantil;
            this.Crediario.Doc_Mercantil = this.EntityTela.Doc_Mercantil;
            this.Crediarios.push(this.Crediario);
            this.grdCrediario.PreencherGrid(this.Crediarios);
            var totalPendente = this.CalcularTotalPendente();
            // if (ValoresSismoura.ConfiguracoesRetaguarda.Orc_Parc_Calcular_Restante) {
            if (this.EntityTela.Valor_Total - totalPendente > 0) {
                this.Crediario = {};
                this.Cartao = {};
                this.Cheque = {};
                this.Dinheiro = {};
                this.Ticket = {};
                this.Crediario.Valor = totalPendente;
                this.Cartao.Valor = totalPendente;
                this.Cheque.Valor_Cheque = totalPendente;
                this.Dinheiro.Valor = totalPendente;
                this.Ticket.Valor = totalPendente;
            }
            else {
                this.Crediario = {};
                if (!this.Crediario.Valor) {
                    this.Crediario.Valor = this.EntityTela.Valor_Total;
                }
            }
            /*} else {
                this.Crediario = <any>{};
                if (!this.Crediario.Valor) {
                    this.Crediario.Valor = this.EntityTela.Valor_Total;
                }*/
            //}
            this.RefreshAngular();
        }
    };
    C_Orcame.prototype.OnSelecionouOpcaoCrediarioDataMenor = function (result) {
        if (result.Resultado == MsgBoxResult.No) {
            this.Crediario = {};
        }
        else {
            var parametros = {
                docBancario: this.Crediario.Doc_Bancario == undefined ? 0 : this.Crediario.Doc_Bancario,
                codCliente: this.EntityTela.Codigo_Cliente == undefined ? 0 : this.EntityTela.Codigo_Cliente
            };
            var retornoDocBancario = this.ExecutarFuncaoServerSideSynch("RetornoDocBancario", parametros);
            if (!String.IsNullOrWhiteSpace(retornoDocBancario)) {
                this.Crediario.Doc_Bancario_Descricao = retornoDocBancario.RetornoDescricaoDocBancario;
            }
            this.Crediario.Parcela = (this.txtParcela.GetText() == undefined || this.txtParcela.GetText() == null) ? 0 : this.txtParcela.GetText().CNum();
            this.Crediario.Vencimento = this.txtVencimentoCrediario.Date;
            this.Crediario.Valor = (this.txtValorCrediario.GetText() == undefined || this.txtValorCrediario.GetText() == null) ? 0 : this.txtValorCrediario.GetText().CNum();
            this.Crediario.N_Doc_Mer = this.EntityTela.N_Doc_Mercantil;
            this.Crediario.Doc_Mercantil = this.EntityTela.Doc_Mercantil;
            this.Crediarios.push(this.Crediario);
            this.grdCrediario.PreencherGrid(this.Crediarios);
            var totalPendente = this.CalcularTotalPendente();
            //if (ValoresSismoura.ConfiguracoesRetaguarda.Orc_Parc_Calcular_Restante) {
            if (this.EntityTela.Valor_Total - totalPendente > 0) {
                this.Crediario = {};
                this.Cartao = {};
                this.Cheque = {};
                this.Dinheiro = {};
                this.Ticket = {};
                this.Crediario.Valor = totalPendente;
                this.Cartao.Valor = totalPendente;
                this.Cheque.Valor_Cheque = totalPendente;
                this.Dinheiro.Valor = totalPendente;
                this.Ticket.Valor = totalPendente;
            }
            else {
                this.Crediario = {};
                if (!this.Crediario.Valor) {
                    this.Crediario.Valor = this.EntityTela.Valor_Total;
                }
            }
            // }
            /*else {
                this.Crediario = <any>{};
                if (!this.Crediario.Valor) {
                    this.Crediario.Valor = this.EntityTela.Valor_Total;
                }

            }*/
            this.RefreshAngular();
        }
        return true;
    };
    C_Orcame.prototype.OnLimparCliente = function (result) {
        if (result.Resultado == MsgBoxResult.No) {
            this.LimparCamposCliente();
        }
    };
    C_Orcame.prototype.VerificaAutorizacaoVendedor = function () {
        this.dlgFuncaoAdm.VerificarPorCodigo(5272, ValoresSismoura.UsuarioLogado, false, this.VerificarAutorizacao, this);
        if (!this.verificadoAutorizacao) {
            this.EntityTela.Vendedor = 0;
        }
        this.verificaVendedor(this.EntityTela.Vendedor);
        if (ValoresSismoura.ConfiguracoesRetaguarda.Solicitar_Senha_Vendedor_Orcamento /*&& this.pedirSenha == true*/) {
            if (this.EntityTela.Vendedor != ValoresSismoura.UsuarioLogado) {
                this.dlgFuncaoAdm.Verificar("", this.EntityTela.Vendedor, true, this.VerificarAutorizacao, this);
            }
            if (this.EntityTela.Vendedor == 0) {
                this.EntityTela.Vendedor = ValoresSismoura.UsuarioLogado;
            }
        }
    };
    C_Orcame.prototype.RetornarTotalInformado = function (calcularTotalInformado) {
        var soma = 0;
        if (ValoresSismoura.ConfiguracoesRetaguarda.Orc_Parc_Calcular_Restante || calcularTotalInformado) {
            soma = soma + this.Crediarios.Sum("Valor")
                + this.Cheques.Sum("Valor_Cheque")
                + this.Dinheiros.Sum("Valor")
                + this.Cartoes.Sum("Valor")
                + this.Tickets.Sum("Valor");
            //adicionar o cdc
            if (soma > 0) {
                return soma;
            }
            return 0;
        }
    };
    C_Orcame.prototype.CalcularTotalPendente = function () {
        var total = 0;
        var totalInformado = 0;
        total = this.EntityTela.Valor_Total;
        totalInformado = totalInformado + this.Crediarios.Sum("Valor")
            + this.Cheques.Sum("Valor_Cheque")
            + this.Dinheiros.Sum("Valor")
            + this.Cartoes.Sum("Valor")
            + this.Tickets.Sum("Valor");
        //if (this.parcelaCalcularRestante) {
        //    //calcular cdc
        //}
        if (totalInformado > 0) {
            this.totalPendente = total - totalInformado;
        }
        else {
            this.totalPendente = total;
        }
        return this.totalPendente;
    };
    C_Orcame.prototype.FormaPagamento = function (codPamgamento) {
        abrirEspera();
        this.EntityTela.Condicao_Pagamento = this.cboFormaPagamento.GetValue();
        this.EntityTela.Condicao_Pagamento = this.EntityTela.Condicao_Pagamento == null ? 0 : this.EntityTela.Condicao_Pagamento;
        if (this.EntityTela.Codigo == 0 || !this.EntityTela.Codigo) {
            this.EntityTela.Desconto = (this.txtDescontoR.GetText() == null || this.txtDescontoR.GetText() == undefined) ? 0 : this.txtDescontoR.GetText().CNum();
            this.EntityTela.Descontop = (this.txtDescontoP.GetText() == null || this.txtDescontoP.GetText() == undefined) ? 0 : this.txtDescontoP.GetText().CNum();
        }
        var parametrosTotal = {
            isValorCreditoIgualTotal: this.TipoOrcamentoInfo.IsValorCreditoIgualTotal != undefined ? this.TipoOrcamentoInfo.IsValorCreditoIgualTotal : false,
            totalProduto: this.EntityTela.Total_Produtos != undefined ? this.EntityTela.Total_Produtos : 0,
            valorFrete: this.EntityTela.Frete != undefined ? this.EntityTela.Frete : 0,
            valorImposto: this.EntityTela.Valor_Impostos != undefined ? this.EntityTela.Valor_Impostos : 0,
            acrescimo: (this.EntityTela.Acrescimo != undefined || this.EntityTela.Acrescimo != null) ? this.EntityTela.Acrescimo : 0,
            desconto: this.EntityTela.Desconto,
            valorDevolucao: this.EntityTela.Valor_Devolucao != undefined ? this.EntityTela.Valor_Devolucao : 0,
            valorCrediario: this.TipoOrcamentoInfo.ValorCreditoCliente != undefined && this.TipoOrcamentoInfo.ValorCreditoCliente.toString() != "0,00" ? parseFloat(this.TipoOrcamentoInfo.ValorCreditoCliente.toString()) : 0,
        };
        //this.EntityTela.Valor_Total = this.ExecutarFuncaoServerSideSynch("totalOrcamento", parametrosTotal);
        //this.CalcularInfoDesc();
        //this.CalcularInfoDescPorcentagem();
        var totalInformado = this.CalcularTotalPendente();
        var parametrosFormaPagamento = {
            codFormaPagamento: this.EntityTela.Condicao_Pagamento != undefined ? this.EntityTela.Condicao_Pagamento : codPamgamento,
            totalFinal: this.EntityTela.Valor_Total != undefined ? this.EntityTela.Valor_Total : 0,
            totalInformado: totalInformado != undefined ? totalInformado : 0,
            dataEntrega: this.EntityTela.Data_Entrega != undefined ? ConvertToDate(this.EntityTela.Data_Entrega) : null,
            totalDesconto_ISSQN: this.Produto.DescontoISSQN != undefined ? this.Produto.DescontoISSQN : 0,
            totalProduto: this.EntityTela.Total_Produtos != undefined ? this.EntityTela.Total_Produtos : 0,
            valorFrete: this.EntityTela.Frete != undefined ? this.EntityTela.Frete : 0,
            docBancario: this.Crediario.Doc_Bancario != undefined ? this.Crediario.Doc_Bancario : 0,
            docBancarioDescricao: this.Crediario.Doc_Bancario_Descricao != undefined ? this.Crediario.Doc_Bancario_Descricao : "",
            orcamentoDesconto: this.EntityTela.Desconto,
            orcamentoAcresc: (this.EntityTela.Acrescimo != undefined || this.EntityTela.Acrescimo != null) ? this.EntityTela.Acrescimo : 0,
        };
        var formaPagamentos = this.ExecutarFuncaoServerSideSynch("CalcularFormaPagamento", parametrosFormaPagamento);
        for (var x = 0; x < formaPagamentos.length; x++) {
            this.Crediario = {};
            this.Crediario.Parcela = formaPagamentos[x].Parcela;
            this.Crediario.Vencimento = formaPagamentos[x].Vencimento.ToDate();
            this.Crediario.Valor = formaPagamentos[x].Valor;
            this.Crediarios.push(this.Crediario);
        }
        var parametrosCrediarios = {
            codOrcamento: this.EntityTela.Codigo
        };
        if (this.EntityTela.Codigo > 0 && this.Crediarios.length == 0) {
            this.Crediarios = this.ExecutarFuncaoServerSideSynch("GetCrediarios", parametrosCrediarios);
        }
        this.EntityTela.Acrescimo = (this.EntityTela.Acrescimo == null || this.EntityTela.Acrescimo == undefined) ? formaPagamentos.Sum("Acrescimo") : this.EntityTela.Acrescimo;
        this.EntityTela.Desconto = (this.EntityTela.Desconto == null || this.EntityTela.Desconto == undefined) ? formaPagamentos.Sum("Desconto") : this.EntityTela.Desconto;
        this.EntityTela.Descontop = (this.EntityTela.Descontop == null || this.EntityTela.Descontop == undefined) ? formaPagamentos.Sum("Desconto_Porcentagem") : this.EntityTela.Descontop;
        this.grdCrediario.PreencherGrid(this.Crediarios);
        var totalPendente = this.CalcularTotalPendente();
        if (this.Crediarios.length == 0) {
            this.Crediario = {};
            this.Crediario.Parcela = 1;
            this.Crediario.Valor = totalPendente;
            this.Crediario.Vencimento = new Date().ToDate();
        }
        else {
            var count = this.Crediarios.length - 1;
            this.Crediario = {};
            this.Crediario.Parcela = this.Crediarios[count].Parcela;
            this.Crediario.Valor = totalPendente;
            this.Crediario.Vencimento = new Date().ToDate();
        }
        this.OrcamentoPagamentos();
        var parametrosCheque = {
            codOrcamento: this.EntityTela.Codigo
        };
        if (this.EntityTela.Codigo > 0) {
            this.Cheques = this.ExecutarFuncaoServerSideSynch("GetCheques", parametrosCheque);
        }
        else if (this.Cheques.length == 0) {
            this.Cheque.Codigo = 1;
            this.Cheque.Vencimento = new Date();
            this.Cheque.Endereco_Cliente = this.Cliente.Endereco_Nome;
            this.Cheque.Cliente = this.Cliente.Codigo;
            this.Cheque.Cheque = 1;
            if (this.Cliente) {
                if (this.Cliente.Cpf) {
                    if (this.Cliente.Cpf.length == 14) {
                        this.txtCPF.IsCPF = true;
                    }
                    else {
                        this.txtCPF.IsCPF = false;
                    }
                }
            }
            this.Cheque.Cpf = this.Cliente.Cpf;
            this.Cheque.Fone_Cliente = this.Cliente.Fone;
            this.Cheque.Nome_Cliente = this.Cliente.Nome;
            this.Cheque.Valor_Cheque = this.EntityTela.Valor_Total;
            this.optTipo.SetValue(this.Cliente.Tipo);
        }
        var parametrosCartao = {
            codOrcamento: this.EntityTela.Codigo
        };
        this.cboCartao.SetSelectedIndex(0);
        this.Cartao = {};
        this.Cartao.Valor = this.EntityTela.Valor_Total;
        if (this.EntityTela.Codigo > 0) {
            this.Cartoes = this.ExecutarFuncaoServerSideSynch("GetCartoes", parametrosCartao);
        }
        this.Dinheiro = {};
        if (this.EntityTela.Valor_Dinheiro > 0) {
            this.Dinheiros = [];
            this.Dinheiro.Item = 1;
            this.Dinheiro.Valor = this.EntityTela.Valor_Dinheiro;
            this.Dinheiros.push(this.Dinheiro);
        }
        else {
            this.Dinheiro.Valor = this.EntityTela.Valor_Total;
        }
        this.Ticket = {};
        if (this.EntityTela.Valor_Ticket > 0) {
            this.Tickets = [];
            this.Ticket.Item = 1;
            this.Ticket.Valor = this.EntityTela.Valor_Ticket;
            this.Tickets.push(this.Ticket);
        }
        else {
            this.Ticket.Valor = this.EntityTela.Valor_Total;
        }
        this.grdCartao.PreencherGrid(this.Cartoes);
        this.grdDinheiro.PreencherGrid(this.Dinheiros);
        this.grdTicket.PreencherGrid(this.Tickets);
        this.grdCheque.PreencherGrid(this.Cheques);
        this.grdCrediario.PreencherGrid(this.Crediarios);
        this.RefreshAngular();
        fecharEspera();
    };
    //#endregion
    C_Orcame.prototype.OnClickImprimirOrcamento = function (s, e) {
        e.processOnServer = false;
        try {
            if (this.EntityTela.Codigo > 0) {
                this.Imprimir(this.EntityTela.Codigo, 1);
            }
            else {
                MostrarAlerta("Informe um orçamento para imprimir");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Orcame.prototype.Imprimir = function (codOrcamento, codModelo) {
        var parametros;
        parametros = {
            codOrcamento: codOrcamento,
            codModelo: codModelo
        };
        var texto = this.ExecutarFuncaoServerSideSynch("Imprimir", parametros);
        abrirTelaNovaAbaParametros(formataURLRelativa("/EditorHTML.aspx?EmailEnvio=" + "" + "&NomeAnexo=" + "" + texto), null);
    };
    /*protected criarEntidadePersonalizados() {
        var that = this;
        $("[moura-personalizado-campo]").each(function (index, element) {
            var campo = parseInt($(element).attr("moura-personalizado-campo"));
 
            for (var x = 1; x < 6; x++) {
                if (that.OrcamentoPersonalizados[x].Tipo_CampoEnum == campo) {
                    encontrado = Entidade.PessoaEntity.Campos_Valor[x];
                    break;
                }
            }

            if (!encontrado) {
                encontrado = <SiSMoura.Core.Entity.Campo_Cliente_Valor>{};

                encontrado.Campo = campo;
                encontrado.Cliente = Entidade.Pessoa;
            }

            listaOrdem.push(encontrado);
        });

        this.OrcamentoPersonalizado = listaOrdem;
    }*/
    C_Orcame.prototype.OnPesquisouChequeCliente = function () {
        var parametrosInfCliente = {
            codCliente: this.txtClienteCheque.GetText().CNum()
        };
        if (this.txtClienteCheque.GetText()) {
            this.Cliente = this.ExecutarFuncaoServerSideSynch("GetInformacoesCliente", parametrosInfCliente);
        }
        this.Cheque.Codigo = 1;
        this.Cheque.Vencimento = new Date();
        this.Cheque.Endereco_Cliente = this.Cliente.Endereco_Nome;
        this.Cheque.Cliente = this.Cliente.Codigo;
        this.Cheque.Cheque = 1;
        // this.Cheque.Cpf = this.Cliente.Cpf;
        if (this.Cliente) {
            if (this.Cliente.Cpf) {
                if (this.Cliente.Cpf.length == 14) {
                    this.txtCPF.IsCPF = true;
                    this.txtCPF.SetText(this.Cliente.Cpf);
                }
                else {
                    this.txtCPF.IsCPF = false;
                    this.txtCPF.SetText(this.Cliente.Cpf);
                }
            }
        }
        this.Cheque.Fone_Cliente = this.Cliente.Fone;
        this.Cheque.Nome_Cliente = this.Cliente.Nome;
        this.Cheque.Valor_Cheque = this.EntityTela.Valor_Total;
        this.optTipo.SetValue(this.Cliente.Tipo);
    };
    C_Orcame.prototype.consultarCPF = function () {
        var retorno;
        var parametros;
        var msg;
        if (!this.Cliente.Cpf || this.Cliente.Cpf.trim() == "") {
            return;
        }
        parametros = {
            codCliente: this.Cliente.Codigo,
            cpfCliente: this.Cliente.Cpf
        };
        retorno = this.ExecutarFuncaoServerSideSynch("ValidarCPF", parametros);
        if (!retorno || retorno == '') {
            return;
        }
        if (retorno.toLowerCase().substring(0, 4) == 'erro' && retorno.indexOf("|") > 0) {
            MsgBoxJS(retorno.split("|")[1], MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(this.OnClicouOKMsgBoxCPFInvalido, this));
        }
    };
    C_Orcame.prototype.OnClicouOKMsgBoxCPFInvalido = function (resultado) {
        this.txtCliente.Limpar();
        this.GetScope().$applyAsync();
    };
    return C_Orcame;
}(MouraPageCadastroAngular));
var c_Orcame = new C_Orcame();
//# sourceMappingURL=C_Orcame.js.map