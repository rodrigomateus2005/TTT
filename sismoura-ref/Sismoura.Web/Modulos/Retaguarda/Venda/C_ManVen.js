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
var C_ManVen = /** @class */ (function (_super) {
    __extends(C_ManVen, _super);
    function C_ManVen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ManVen.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtDataVenda", {
        get: function () {
            return window['txtDataVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtHora", {
        get: function () {
            return window['txtHora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtDesconto", {
        get: function () {
            return window['txtDesconto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtAcrescimo", {
        get: function () {
            return window['txtAcrescimo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtAcrescimoPor", {
        get: function () {
            return window['txtAcrescimoPor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtTotalVenda", {
        get: function () {
            return window['txtTotalVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtVendedor", {
        get: function () {
            return window['txtVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtDescontoPor", {
        get: function () {
            return window['txtDescontoPor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtRecebido", {
        get: function () {
            return window['txtRecebido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtValorFinal", {
        get: function () {
            return window['txtValorFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "lstTipoCliente", {
        get: function () {
            return window['lstTipoCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "VendaItens", {
        get: function () {
            return this.GetScope()["VendaItens"];
        },
        set: function (value) {
            this.GetScope()["VendaItens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "VendaItem", {
        get: function () {
            return this.GetScope()[" "];
        },
        set: function (value) {
            this.GetScope()["VendaItem"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "cboEcf", {
        get: function () {
            return window['cboEcf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "cboTipoImpressao", {
        get: function () {
            return window['cboTipoImpressao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtCOO", {
        get: function () {
            return window['txtCOO_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtCNPJ", {
        get: function () {
            return window['txtCNPJ_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtCPF", {
        get: function () {
            return window['txtCPF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtItem", {
        get: function () {
            return window['txtItem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtDataCupom", {
        get: function () {
            return window['txtDataCupom_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtHoraCupom", {
        get: function () {
            return window['txtHoraCupom_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtQtde", {
        get: function () {
            return window['txtQtde_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtUnitario", {
        get: function () {
            return window['txtUnitario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtTotal", {
        get: function () {
            return window['txtTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtObservacao", {
        get: function () {
            return window['txtObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "cboFormaPagamento", {
        get: function () {
            return window['cboFormaPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtParcelaCrediario", {
        get: function () {
            return window['txtParcelaCrediario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtVencimentoCrediario", {
        get: function () {
            return window['txtVencimentoCrediario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtValorCrediario", {
        get: function () {
            return window['txtValorCrediario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "cboDocBancario", {
        get: function () {
            return window['cboDocBancario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "cboConta", {
        get: function () {
            return window['cboConta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "grdCrediario", {
        get: function () {
            return window['grdCrediario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtParcelaParcelamento", {
        get: function () {
            return window['txtParcelaParcelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtDiasVencimento", {
        get: function () {
            return window['txtDiasVencimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtVencimentoInicial", {
        get: function () {
            return window['txtVencimentoInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "optDias", {
        get: function () {
            return window['optDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtDias", {
        get: function () {
            return window['txtDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtDia", {
        get: function () {
            return window['txtDia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "grdParcelamento", {
        get: function () {
            return window['grdParcelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "cboCDC", {
        get: function () {
            return window['cboCDC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "cboParcelaTaxas", {
        get: function () {
            return window['cboParcelaTaxas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtParcela", {
        get: function () {
            return window['txtParcela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtVencimento", {
        get: function () {
            return window['txtVencimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtValorParcela", {
        get: function () {
            return window['txtValorParcela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "grdCDC", {
        get: function () {
            return window['grdCDC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "grdCartao", {
        get: function () {
            return window['grdCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtCodigoCheque", {
        get: function () {
            return window['txtCodigoCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "cboTipoCheque", {
        get: function () {
            return window['cboTipoCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtDataCheque", {
        get: function () {
            return window['txtDataCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtCNPJCheque", {
        get: function () {
            return window['txtCNPJCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtCPFCheque", {
        get: function () {
            return window['txtCPFCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtValorCheque", {
        get: function () {
            return window['txtValorCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtBanco", {
        get: function () {
            return window['txtBanco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtAgencia", {
        get: function () {
            return window['txtAgencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtConta", {
        get: function () {
            return window['txtConta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtNCheque", {
        get: function () {
            return window['txtNCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtClienteCheque", {
        get: function () {
            return window['txtClienteCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtNomeTitular", {
        get: function () {
            return window['txtNomeTitular_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtTelefoneTitular", {
        get: function () {
            return window['txtTelefoneTitular_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtEnderecoTitular", {
        get: function () {
            return window['txtEnderecoTitular_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "grdCheque", {
        get: function () {
            return window['grdCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "cboCartao", {
        get: function () {
            return window['cboCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtValorCartao", {
        get: function () {
            return window['txtValorCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtValorCDC", {
        get: function () {
            return window['txtValorCDC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtValorDinheiro", {
        get: function () {
            return window['txtValorDinheiro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtValorTicket", {
        get: function () {
            return window['txtValorTicket_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "grdDinheiro", {
        get: function () {
            return window['grdDinheiro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "grdTicket", {
        get: function () {
            return window['grdTicket_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "Crediarios", {
        get: function () {
            return this.GetScope()["Crediarios"];
        },
        set: function (value) {
            this.GetScope()["Crediarios"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "Parcelamentos", {
        get: function () {
            return this.GetScope()["Parcelamentos"];
        },
        set: function (value) {
            this.GetScope()["Parcelamentos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "ListaCDC", {
        get: function () {
            return this.GetScope()["ListaCDC"];
        },
        set: function (value) {
            this.GetScope()["ListaCDC"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "Cartoes", {
        get: function () {
            return this.GetScope()["Cartoes"];
        },
        set: function (value) {
            this.GetScope()["Cartoes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "Cheques", {
        get: function () {
            return this.GetScope()["Cheques"];
        },
        set: function (value) {
            this.GetScope()["Cheques"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "Dinheiros", {
        get: function () {
            return this.GetScope()["Dinheiros"];
        },
        set: function (value) {
            this.GetScope()["Dinheiros"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "Tickets", {
        get: function () {
            return this.GetScope()["Tickets"];
        },
        set: function (value) {
            this.GetScope()["Tickets"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "hdnEmpresasPermitidasUsuario", {
        get: function () {
            return $('#hdnEmpresasPermitidasUsuario')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "hdnTotalPendente", {
        get: function () {
            return $('#hdnTotalPendente')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "mdImportarVendas", {
        //Modal Importar Vendas
        get: function () {
            return window['mdImportarVendas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "btnImportarVendas", {
        get: function () {
            return window['btnImportarVendas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "btnGerarVendas", {
        get: function () {
            return window['btnGerarVendas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtProdutoVenda", {
        get: function () {
            return window['txtProdutoVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "txtValorVenda", {
        get: function () {
            return window['txtValorVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "chkBuscar_Valor", {
        get: function () {
            return window['chkBuscar_Valor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ManVen.prototype, "grdVendas", {
        get: function () {
            return window['grdVendas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ManVen.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grd) {
            adicionarEventoMoura(this.grd.ExcluindoItem, this.OnClickExcluirVendaItens, this);
            adicionarEventoMoura(this.grd.SelecionouItem, this.OnAlterandoItem, this);
            adicionarEventoMoura(this.grd.AdicionandoItem, this.OnAdicionandoItem, this);
            adicionarEventoMoura(this.grd.Validando, this.OnValidandoItem, this);
        }
        if (this.grdCheque) {
            adicionarEventoMoura(this.grdCheque.AdicionandoItem, this.OnAdicionandoItemCheque, this);
        }
        if (this.grdCDC) {
            adicionarEventoMoura(this.grdCDC.AdicionandoItem, this.OnAdicionandoItemCDC, this);
            adicionarEventoMoura(this.grdCDC.ExcluindoItem, this.OnClickExcluirCDC, this);
        }
        if (this.grdDinheiro) {
            adicionarEventoMoura(this.grdDinheiro.AdicionandoItem, this.OnAdicionandoItemDinheiro, this);
        }
        if (this.grdTicket) {
            adicionarEventoMoura(this.grdTicket.AdicionandoItem, this.OnAdicionandoItemTicket, this);
        }
        if (this.grdCrediario) {
            adicionarEventoMoura(this.grdCrediario.AdicionandoItem, this.OnAdicionandoItemCrediario, this);
            adicionarEventoMoura(this.grdCrediario.ExcluindoItem, this.OnClickExcluirCrediario, this);
        }
        if (this.grdCartao) {
            adicionarEventoMoura(this.grdCartao.AdicionandoItem, this.OnAdicionandoItemCartao, this);
        }
        if (this.grdVendas) {
            adicionarEventoMoura(this.grdVendas.SelecionouLinha, this.OnSelecionouLinhaImportarVenda, this);
        }
        if (this.lstTipoCliente) {
            adicionarEventoMoura(this.lstTipoCliente.SelectionChanged, this.OnSelecionarTipoCliente, this);
        }
        if (this.cboCDC) {
            adicionarEventoMoura(this.cboCDC.SelectedItemChanged, this.OnSelecionarCDC, this);
        }
        if (this.cboParcelaTaxas) {
            adicionarEventoMoura(this.cboParcelaTaxas.SelectedItemChanged, this.OnSelecionarParcelaTaxas, this);
        }
        if (this.txtAcrescimoPor) {
            adicionarEventoMoura(this.txtAcrescimoPor.TextChanged, this.OnChangeAcrescimoP, this);
        }
        if (this.txtAcrescimo) {
            adicionarEventoMoura(this.txtAcrescimo.TextChanged, this.OnChangeAcrescimo, this);
        }
        if (this.txtCOO) {
            adicionarEventoMoura(this.txtCOO.TextChanged, this.OnChangeCOO, this);
        }
        if (this.txtDesconto) {
            adicionarEventoMoura(this.txtDesconto.TextChanged, this.OnChangeDesconto, this);
        }
        if (this.txtQtde) {
            adicionarEventoMoura(this.txtQtde.TextChanged, this.OnChangeQuantidade, this);
        }
        if (this.txtRecebido) {
            adicionarEventoMoura(this.txtRecebido.TextChanged, this.OnChangeRecebido, this);
        }
        if (this.txtTotal) {
            adicionarEventoMoura(this.txtTotal.TextChanged, this.OnChangeTotal, this);
        }
        if (this.txtParcela) {
            adicionarEventoMoura(this.txtParcela.TextChanged, this.OnChangeParcelaCDC, this);
        }
        if (this.cboFormaPagamento) {
            adicionarEventoMoura(this.cboFormaPagamento.SelectedItemChanged, this.OnSelecionarFormaPagamento, this);
        }
        if (this.txtParcelaCrediario) {
            adicionarEventoMoura(this.txtParcelaCrediario.TextChanged, this.OnChangeParcelaCrediario, this);
        }
        if (this.txtUnitario) {
            adicionarEventoMoura(this.txtUnitario.TextChanged, this.OnChangeUnitario, this);
        }
        if (this.btnImportarVendas) {
            adicionarEventoMoura(this.btnImportarVendas.Click, this.MostrarModalImpVendas, this);
        }
        if (this.btnGerarVendas) {
            adicionarEventoMoura(this.btnGerarVendas.Click, this.GerarVendas, this);
        }
        if (this.mdImportarVendas) {
            adicionarEventoMoura(this.mdImportarVendas.Fechou, this.OnFechouMdImportarVendas, this);
        }
        if (this.txtCliente) {
            adicionarEventoMoura(this.txtCliente.AbriuProcura, this.OnAbriuProcuraCliente, this);
            adicionarEventoMoura(this.txtCliente.Procurou, this.OnProcurouCliente, this);
        }
        if (this.txtClienteCheque) {
            adicionarEventoMoura(this.txtCliente.Procurou, this.OnProcurouClienteCheque, this);
        }
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnProcurouProduto, this);
        }
        if (this.txtParcelaCrediario) {
            adicionarEventoMoura(this.txtValorCartao.TextChanged, this.OnChangeValorCartao, this);
        }
        if (this.txtValorDinheiro) {
            adicionarEventoJQuery(this.txtValorDinheiro.Textbox, "keydown", this.OnKeyDownValorDinheiro, this);
        }
        if (this.txtValorTicket) {
            adicionarEventoJQuery(this.txtValorTicket.Textbox, "keydown", this.OnKeyDownValorTicket, this);
        }
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.Limpou, this.OnLimparCampos, this);
            //adicionarEventoMoura(this.txtCodigo.TextChanged, this.OnAntesBuscarExistente, this);
        }
        if (this.cboTipoCheque) {
            adicionarEventoMoura(this.cboTipoCheque.SelectedItemChanged, this.OnSelecionarTipoCheque, this);
        }
        this.txtDataVenda.Date = new Date();
        this.txtHora.textBoxHorario.SetDate(new Date());
        this.Habilita(true, false);
        this.txtCNPJ.Visible = false;
        this.txtCNPJCheque.Visible = false;
    };
    C_ManVen.prototype.OnLimparCampos = function () {
        this.Crediarios = [];
        this.Dinheiros = [];
        this.Tickets = [];
        this.Cartoes = [];
        this.ListaCDC = [];
        this.Cheques = [];
        this.VendaItens = [];
    };
    C_ManVen.prototype.OnSelecionarCDC = function () {
        var parametros = {
            codCDC: this.cboCDC.GetValue().CNum()
        };
        var cdcDias = this.ExecutarFuncaoServerSideSynch("GetByCDCDias", parametros);
        for (var x = 0; x < cdcDias.length; x++) {
            this.cboParcelaTaxas.AddItem((cdcDias[x].Dias + " - " + cdcDias[x].Fator).toString(), cdcDias[x].Dias, "");
        }
    };
    C_ManVen.prototype.OnSelecionarFormaPagamento = function () {
        if (this.txtTotalVenda.GetText().CNum() > 0) {
            var parametros = {
                codFormaPagamento: this.cboFormaPagamento.GetValue().CNum(),
                totalVenda: this.txtTotalVenda.GetText().CNum(),
                totalCrediario: this.txtValorCrediario.GetText().CNum(),
                totalPendente: this.hdnTotalPendente.value.CNum(),
                crediarios: this.Crediarios
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetByFormaPagamento", parametros);
            this.Crediarios = [];
            this.Crediarios = retorno;
        }
    };
    C_ManVen.prototype.OnChangeValorCartao = function () {
        if (this.cboCartao.GetText().CNum() == -1) {
            MostrarAlerta("Não existe nenhum cartão para ser selecionado!");
            return false;
        }
        for (var x = 0; x < this.Cartoes.length; x++) {
            if (this.Cartoes[x].Codigo_Cartao == this.cboCartao.GetValue()) {
                this.Cartoes[x].Valor = this.txtValorCartao.GetText().CNum();
            }
        }
    };
    C_ManVen.prototype.OnKeyDownValorDinheiro = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (!tecla) {
            return;
        }
        if (tecla == 187) {
            this.txtValorDinheiro.SetText((this.txtValorFinal.GetText().CNum() - this.RetornarTotalInformado()).Format(2));
        }
    };
    C_ManVen.prototype.OnKeyDownValorTicket = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (!tecla) {
            return;
        }
        if (tecla == 187) {
            this.txtValorTicket.SetText((this.txtValorFinal.GetText().CNum() - this.RetornarTotalInformado()).Format(2));
        }
    };
    C_ManVen.prototype.OnKeyDownValorCheque = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (!tecla) {
            return;
        }
        if (tecla == 187) {
            this.txtValorCheque.SetText((this.txtValorFinal.GetText().CNum() - this.RetornarTotalInformado()).Format(2));
        }
    };
    //private respondeuCDC: boolean;
    //private respontaCDC = function (result) {
    //    if (result.Resultado == MsgBoxResult.Yes) {
    //        this.respondeuCDC = true;
    //    }
    //    else {
    //        this.respondeuCDC = false;
    //    }
    //}
    C_ManVen.prototype.respontaCDC = function (e) {
        try {
            if (e.Resultado == MsgBoxResult.No) {
                this.ListaCDC.splice((e.Argument - 1), 1);
                this.GetScope().$applyAsync();
            }
            else {
                //adicionar novo servico
                this.grdCDC.AdicionarOuAlterarItemAtual();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ManVen.prototype.OnAdicionandoItemCrediario = function (s, e) {
        if (this.txtParcelaCrediario.GetText().CNum() == 0) {
            MostrarAlerta("Informe a Parcela do Crediário");
            e.cancelar = true;
        }
        if (this.txtVencimentoCrediario.Date == null) {
            MostrarAlerta("Informe o Vencimento do Crediário");
            return false;
        }
        if (this.txtValorCrediario.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o Valor do Crediário");
            return false;
        }
        this.Crediarios[this.txtParcelaCrediario.GetText().CNum()].Parcela = this.txtParcelaCrediario.GetText().CNum();
        this.Crediarios[this.txtParcelaCrediario.GetText().CNum()].Data_Vencimento = this.txtVencimentoCrediario.Date;
        this.Crediarios[this.txtParcelaCrediario.GetText().CNum()].Valor = this.txtValorCrediario.GetText().CNum();
        this.Crediarios[this.txtParcelaCrediario.GetText().CNum()].Documento_Bancario = this.cboDocBancario.GetValue();
        this.Crediarios[this.txtParcelaCrediario.GetText().CNum()].Conta_Corrente = this.cboConta.GetText().CNum();
        this.GetScope().Entity.FormaPagamentoString = this.cboFormaPagamento.GetText();
        this.Crediarios[this.txtParcelaCrediario.GetText().CNum()].Cdc = false;
        this.Crediarios = e.item;
        this.GetScope().$applyAsync();
        return true;
    };
    C_ManVen.prototype.OnAdicionandoItemCDC = function (s, e) {
        if (this.txtVencimento.Date == null) {
            MostrarAlerta("Informe o Vencimento do CDC");
            return false;
        }
        var counter = 1;
        if (this.ListaCDC.length == 0) {
            e.item.Codigo = 1;
        }
        else {
            e.item.Codigo = counter + 1;
        }
        var diff = calcularDiferencaData(this.txtVencimento.Date, new Date(), DiferencaData.Days);
        if (diff == 0) {
            MsgBoxJS("Atenção: você lançou a data de vencimento igual data de hoje. Deseja continuar? ", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.respontaCDC, this), e.item.Codigo);
        }
        if (this.txtVencimento.Date)
            if (this.ListaCDC.length > 0) {
                this.txtParcela.SetText((this.ListaCDC[length - 1].Parcela + 1).toString());
            }
            else {
                this.txtParcela.SetText("1");
            }
        e.item.Cdc = true;
        e.item.Parcela = this.txtParcela.GetText().CNum();
        e.item.Valor = this.txtValorCDC.GetText();
        e.item.Vencimento = this.txtVencimento.Date;
        this.ListaCDC = e.item;
        this.GetScope().$applyAsync();
        return true;
    };
    C_ManVen.prototype.OnAdicionandoItemCheque = function (s, e) {
        if (this.txtDataCheque.Date == null) {
            MostrarAlerta("Informe o Vencimento");
            e.cancelar = true;
        }
        if (this.txtValorCheque.GetText().CNum() == 0) {
            MostrarAlerta("O valor do cheque não pode ser menor ou igual a R$0,00!");
            return false;
        }
        if (this.txtCodigoCheque.GetText().CNum() == 0) {
            e.cancelar = true;
        }
        var parametrosCheque = {};
        var chequeObrigaNome = this.ExecutarFuncaoServerSideSynch("ChequeObrigaNome", parametrosCheque);
        if (chequeObrigaNome == true) {
            if (this.txtClienteCheque.GetText().CNum() == 0) {
                MostrarAlerta("Informe o Titular do Cheque!");
                return false;
            }
        }
        e.item.Cdc = false;
        e.item.Codigo = this.txtCodigoCheque.GetText();
        e.item.Vencimento = this.txtDataCheque.Date;
        e.item.Valor = this.txtValorCheque.GetText();
        this.Cheques = e.item;
        this.GetScope().$applyAsync();
        return true;
    };
    C_ManVen.prototype.OnAdicionandoItemDinheiro = function (s, e) {
        if (this.txtValorDinheiro.GetText().CNum() == 0) {
            MostrarAlerta("Informe o Valor na aba dinheiro!");
            return false;
        }
        e.item.Cdc = false;
        var counter = 1;
        e.item.Cdc = false;
        if (this.Dinheiros.length == 0) {
            e.item.Item = 1;
        }
        else {
            e.item.Item = counter + 1;
        }
        e.item.Valor_Dinheiro = this.txtValorDinheiro.GetText();
        this.Dinheiros = e.item;
        this.GetScope().$applyAsync();
        return true;
    };
    C_ManVen.prototype.OnAdicionandoItemTicket = function (s, e) {
        if (this.txtValorTicket.GetText().CNum() == 0) {
            MostrarAlerta("Informe o Valor na aba ticket!");
            return false;
        }
        var counter = 1;
        e.item.Cdc = false;
        if (this.Tickets.length == 0) {
            e.item.Item = 1;
        }
        else {
            e.item.Item = counter + 1;
        }
        e.item.Valor_Ticket = this.txtValorTicket.GetText();
        this.Tickets = e.item;
        this.GetScope().$applyAsync();
        return true;
    };
    C_ManVen.prototype.OnAdicionandoItemCartao = function (s, e) {
        if (this.cboCartao.GetValue() == null) {
            MostrarAlerta("Informe o Cartão na aba cartão!");
            return false;
        }
        if (this.txtValorCartao.GetText().CNum() == 0) {
            MostrarAlerta("Informe o Valor na aba cartão!");
            return false;
        }
        e.item.Cdc = false;
        e.item.Cartao = this.cboCartao.GetText();
        e.item.Valor = this.txtValorCartao.GetText();
        this.Cartoes = e.item;
        this.GetScope().$applyAsync();
        return true;
    };
    C_ManVen.prototype.OnSelecionarParcelaTaxas = function () {
        if (this.txtValorCDC.GetText().CNum() <= 0) {
            MostrarAlerta("Informe um valor maior que zero para o valor base.");
            return false;
        }
        var parametros = {
            codCDC: this.cboCDC.GetValue().CNum()
        };
        var cdc = this.ExecutarFuncaoServerSideSynch("GetByCDC", parametros);
        var parametrosFator = {
            cdcDias: this.cboParcelaTaxas.GetText()
        };
        var fator = this.ExecutarFuncaoServerSideSynch("GetByFator", parametrosFator);
        var data = new Date();
        if (cdc.Dias_Debito != 0) {
            data = data.addDays(cdc.Dias_Debito);
        }
        var descontado = (this.txtValorCDC.GetText().CNum() + cdc.Descontado) - cdc.Descontado;
        var valor = (this.txtValorCDC.GetText().CNum() + cdc.Descontado) * fator.CNum();
        for (var x = 0; x < this.ListaCDC.length; x++) {
            this.ListaCDC[x].Data_Vencimento = data.addMonths(x + 1);
            this.ListaCDC[x].Valor = valor;
        }
    };
    C_ManVen.prototype.OnSelecionouLinhaImportarVenda = function (s, e, eModal) {
        this.txtCodigo.SetText(e.data["Codigo"]);
        eModal.ClearHandlers();
        this.LimparModalImpVendas();
    };
    C_ManVen.prototype.OnGravouSucesso = function (s, e) {
        this.Limpar();
        this.verificaAutorizacaoPrograma = false;
    };
    C_ManVen.prototype.OnAlterandoItem = function (s, e) {
        var retornoProdutoControlado = this.VerificaProdutoControlado(e.item.Produto);
        if (retornoProdutoControlado == true) {
            MostrarAlerta("Não é possível alterar um produto controlado!");
            return false;
        }
        return true;
    };
    C_ManVen.prototype.OnProcurouCliente = function () {
        if (this.GetScope().Entity.Cliente == 0) {
            MostrarAlerta("Informe o Código de um Cliente!");
            return false;
        }
        var parametros = {
            codCliente: this.txtCliente.GetText().CNum()
        };
        var verificaConvenioPessoa = this.ExecutarFuncaoServerSideSynch("VerificaConvenioPessoa", parametros);
        if (verificaConvenioPessoa) {
            MostrarAlerta("Esse é um Código de um Convênio. Por favor, informe o Código de um Cliente!");
            this.txtCliente.Limpar();
            return false;
        }
        if (this.GetScope().Entity.ClienteEntity != undefined) {
            if (this.GetScope().Entity.ClienteEntity.Cpf.toString().length == 14) {
                this.txtCPF.SetText(this.GetScope().Entity.Cpf_Cliente);
                this.lstTipoCliente.SetValue("F");
                this.lstTipoCliente.Disabled = false;
                this.txtCPF.Visible = true;
                this.txtCNPJ.Visible = false;
            }
            else {
                this.txtCNPJ.SetText(this.GetScope().Entity.Cpf_Cliente);
                this.lstTipoCliente.SetValue("J");
                this.lstTipoCliente.Disabled = false;
                this.txtCPF.Visible = false;
                this.txtCNPJ.Visible = true;
            }
        }
        this.PreencherFormaPagamento(this.txtCodigo.GetText().CNum());
        this.OnSelecionarTipoCliente();
        return true;
    };
    C_ManVen.prototype.OnProcurouClienteCheque = function () {
        if (this.txtClienteCheque.GetText().CNum() > 0) {
            var parametros = {
                codCliente: this.txtClienteCheque.GetText().CNum()
            };
            var pessoa = this.ExecutarFuncaoServerSideSynch("GetByPessoa", parametros);
            if (pessoa.Cpf.length == 14) {
                this.cboTipoCheque.SetValue("F");
                this.txtCPFCheque.SetText(this.GetScope().Entity.Cpf_Cliente);
                this.txtCPFCheque.Visible = true;
                this.txtCNPJCheque.Visible = false;
            }
            else {
                this.txtCNPJCheque.SetText(this.GetScope().Entity.Cpf_Cliente);
                this.cboTipoCheque.SetValue("J");
                this.txtCPFCheque.Visible = false;
                this.txtCNPJCheque.Visible = true;
            }
            return true;
        }
    };
    C_ManVen.prototype.OnAbriuProcuraCliente = function () {
        this.lstTipoCliente.Disabled = true;
        this.txtCNPJ.Disabled = false;
        if (this.txtCodigo.GetText() == "") {
            MostrarMensagem("Informe o Código da Venda!");
        }
        else {
            if (!this.verificaAutorizacaoPrograma) {
                var parametrosPrograma = {
                    programa: "climanve"
                };
                var codigoFuncaoAdm = this.ExecutarFuncaoServerSideSynch("GetByCodigoFuncaoAdm", parametrosPrograma);
                this.dlgFuncaoAdm.Verificar("Retorno", codigoFuncaoAdm, true, this.VerificaAutorizacaoPrograma, this);
            }
        }
    };
    C_ManVen.prototype.VerificaAutorizacaoPrograma = function (retorno) {
        if (retorno.Autorizado) {
            this.verificaAutorizacaoPrograma = true;
            this.lstTipoCliente.Disabled = true;
            this.txtCNPJ.Disabled = true;
        }
        else {
            this.verificaAutorizacaoPrograma = false;
            MostrarAlerta("Usuário sem autorização para a operação !");
            return false;
        }
    };
    C_ManVen.prototype.OnSelecionarTipoCliente = function () {
        if (this.lstTipoCliente.GetValue() == "F") {
            this.txtCNPJ.Visible = false;
            this.txtCPF.Visible = true;
        }
        else {
            this.txtCNPJ.Visible = true;
            this.txtCPF.Visible = false;
        }
    };
    C_ManVen.prototype.OnSelecionarTipoCheque = function () {
        if (this.cboTipoCheque.GetValue() == 0) {
            this.txtCNPJCheque.Visible = false;
            this.txtCPFCheque.Visible = true;
        }
        else {
            this.txtCNPJCheque.Visible = true;
            this.txtCPFCheque.Visible = false;
        }
    };
    C_ManVen.prototype.OnChangeAcrescimoP = function () {
        if (this.txtDescontoPor.GetText().CNum() > 0 && this.txtAcrescimoPor.GetText().CNum() > 0) {
            MostrarAlerta("Já foi informado um valor de desconto.Para informar um acréscimo retire o valor de desconto!");
            return false;
        }
        else {
            this.txtAcrescimoPor.SetText(((this.txtAcrescimo.GetText().CNum() / 100) * this.txtTotalVenda.GetText().CNum()).Format(2).toString());
            this.CalcularTotal();
        }
    };
    C_ManVen.prototype.OnChangeParcelaCDC = function () {
        for (var x = 0; x < this.ListaCDC.length; x++) {
            if (this.ListaCDC[x].Parcela == this.txtParcela.GetText().CNum()) {
                this.txtVencimento.Date = this.ListaCDC[x].Data_Vencimento;
                this.txtValorParcela.SetText(this.ListaCDC[x].Valor.toString());
                return true;
            }
        }
        MostrarAlerta("Parcela não registrada !");
        return false;
    };
    C_ManVen.prototype.OnChangeParcelaCrediario = function () {
        for (var x = 0; x < this.Crediarios.length; x++) {
            if (this.Crediarios[x].Parcela == this.txtParcelaCrediario.GetText().CNum()) {
                this.txtVencimento.Date = this.ListaCDC[x].Data_Vencimento;
                this.txtValorParcela.SetText(this.ListaCDC[x].Valor.toString());
                return true;
            }
        }
        if (this.txtParcelaCrediario.GetText().CNum() == 0 || this.txtParcelaCrediario.GetText().CNum() > this.Crediarios.length) {
            this.txtParcelaCrediario.SetText("1");
        }
        else {
            this.txtParcelaCrediario.SetText((this.Crediarios.length - 1).toString());
        }
        if (this.txtParcelaCrediario.GetText().CNum() < this.Crediarios.length - 1) {
            this.txtVencimentoCrediario.Date = this.Crediarios[this.txtParcelaCrediario.GetText().CNum()].Data_Vencimento;
            this.txtValorCrediario.SetText(this.Crediarios[this.txtParcelaCrediario.GetText().CNum()].Valor.Format(2));
            if (this.Crediarios[this.txtParcelaCrediario.GetText().CNum()].Documento_Bancario != null) {
                this.cboDocBancario.SetValue(this.Crediarios[this.txtParcelaCrediario.GetText().CNum()].Documento_Bancario);
            }
        }
    };
    C_ManVen.prototype.OnChangeDescontoPor = function () {
        if (this.txtDescontoPor.GetText().CNum() >= 100) {
            this.txtDescontoPor.SetText("0,00");
            MostrarAlerta("O desconto não pode ser maior que 100%!");
            return false;
        }
        this.txtDesconto.SetText(((this.txtDescontoPor.GetText().CNum() / 100) * this.txtTotalVenda.GetText().CNum()).Format(2).toString());
        this.CalcularTotal();
        if (this.txtValorFinal.GetText().CNum() <= 0) {
            MostrarAlerta("O Valor Final da venda não pode ser menor que zero.");
            this.txtDescontoPor.SetText("0,00");
            this.txtDesconto.SetText(((this.txtDescontoPor.GetText().CNum() / 100) * this.txtTotalVenda.GetText().CNum()).Format(2).toString());
            return false;
        }
        this.CalcularTotal();
    };
    C_ManVen.prototype.OnChangeAcrescimo = function () {
        if (this.txtDescontoPor.GetText().CNum() > 0 && this.txtAcrescimo.GetText().CNum() > 0) {
            MostrarAlerta("Já foi informado um valor de desconto. Para informar um acréscimo retire o valor de desconto!");
            return false;
        }
        else {
            this.txtAcrescimo.SetText(((this.txtAcrescimoPor.GetText().CNum() / 100) * this.txtTotalVenda.GetText().CNum()).Format(2).toString());
            this.CalcularTotal();
        }
    };
    C_ManVen.prototype.OnChangeCOO = function () {
        if (this.txtDataVenda.Date && !this.txtDataCupom.Date) {
            this.txtDataCupom.Date = this.txtDataVenda.Date;
            this.txtHoraCupom.textBoxHorario.SetText(this.txtHora.textBoxHorario.GetText());
            return true;
        }
    };
    C_ManVen.prototype.OnChangeDesconto = function () {
        if (this.txtTotalVenda.GetText().CNum() == 0) {
            return true;
        }
        if (this.txtDescontoPor.GetText().CNum() > 0 && this.txtAcrescimoPor.GetText().CNum() > 0) {
            MostrarAlerta("Já foi informado um valor de acréscimo.Para informar desconto retire o valor de acréscimo!");
            return false;
        }
        if (this.txtDesconto.GetText().CNum() >= this.txtTotalVenda.GetText().CNum()) {
            this.txtDesconto.SetText("0,00");
            MostrarAlerta("O valor do desconto não pode ser igual ou ultrapassar o valor total da venda!");
            return false;
        }
        this.txtDescontoPor.SetText(((this.txtDesconto.GetText().CNum() / 100) * this.txtTotal.GetText().CNum()).Format(2).toString());
        this.CalcularTotal();
    };
    C_ManVen.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.txtDataVenda.Date == null) {
            MostrarAlerta("Informe a Data da Venda!");
            return false;
        }
        if (String.IsNullOrWhiteSpace(this.txtHora.textBoxHorario.GetText())) {
            MostrarAlerta("Informe a Hora da Venda!");
            return false;
        }
        if (this.txtTotalVenda.GetText().CNum() == 0) {
            MostrarAlerta("O Total da Venda não pode ser ZERO !");
            return false;
        }
        if (this.txtDesconto.GetText().CNum() > this.txtTotalVenda.GetText().CNum()) {
            MostrarAlerta("O Desconto não pode ser maior que o valor da venda !");
            return false;
        }
        if (this.txtDescontoPor.GetText().CNum() > 100) {
            MostrarAlerta("O Desconto não pode ser maior que 100% !");
            return false;
        }
        if (this.txtRecebido.GetText().CNum() == 0) {
            MostrarAlerta("Informe o Valor Recebido!");
            return false;
        }
        if (this.txtCliente.GetText().CNum() == 0) {
            MostrarAlerta("Informe o Cliente!");
            return false;
        }
        var volumes = 0;
        for (var x = 0; x <= (this.VendaItens.length - 1); x++) {
            volumes = volumes + this.VendaItens[x].Quantidade;
        }
        this.GetScope().Entity.Desconto_Porcentagem = this.txtDescontoPor.GetText().CNum();
        this.GetScope().Entity.Volumes = volumes.Format(3).toString().CNum();
        var parametros = {};
        var retornoReceberAutomaticoManutencao = this.ExecutarFuncaoServerSideSynch("ReceberAutomaticoManutencao", parametros);
        if (retornoReceberAutomaticoManutencao == true) {
            var parametros_1 = {
                codVenda: this.txtCodigo.GetText().CNum()
            };
            var contaReceber = this.ExecutarFuncaoServerSideSynch("GetByContasReceberBaixadas", parametros_1);
            if (contaReceber) {
                MostrarAlerta("Esta venda contém parcelas baixadas. As contas a receber NÃO serão alteradas !");
                this.GetScope().Entity.Conta_Receber_Baixada = false;
                return false;
            }
            this.GetScope().Entity.Conta_Receber_Baixada = true;
        }
        else {
            var parametrosVendaValor = {
                codVenda: this.txtCodigo.GetText().CNum()
            };
            var vendaValor = this.ExecutarFuncaoServerSideSynch("GetByVendaValor", parametrosVendaValor);
            if (vendaValor[0].Valor > 0 || vendaValor[0].Valor_Cliente > 0) {
                if (this.txtValorFinal.GetText().CNum() != this.txtRecebido.GetText().CNum()) {
                    MostrarAlerta("Valores de pagamento diferentes!");
                    this.mdImportarVendas.Show();
                    return false;
                }
            }
        }
        var parametrosGerarLancamentoCaixaManutencaoVenda = {};
        var gerarLancamentoCaixaManutencaoVenda = this.ExecutarFuncaoServerSideSynch("GerarLancamentoCaixaManutencaoVenda", parametrosGerarLancamentoCaixaManutencaoVenda);
        if (gerarLancamentoCaixaManutencaoVenda == true && this.txtValorFinal.GetText().CNum() < this.txtRecebido.GetText().CNum()) {
            this.GetScope().Entity.Valor_Troca = this.txtRecebido.GetText().CNum() - this.txtValorFinal.GetText().CNum();
        }
        else {
            this.GetScope().Entity.Valor_Troca = 0;
        }
        if (this.cboEcf.GetSelectedIndex() > 0) {
            if (this.txtCOO.GetText().CNum() == 0) {
                this.GetScope().Entity.Codigo_Cupom_Fiscal = null;
            }
            if (!this.txtDataCupom.Date) {
                this.txtDataCupom.Date = this.txtDataVenda.Date;
            }
            this.GetScope().Entity.Cupom_Fiscal = true;
        }
        else {
            this.GetScope().Entity.Cupom_Fiscal = false;
            this.GetScope().Entity.Codigo_Cupom_Fiscal = null;
            this.GetScope().Entity.Ecf = null;
            this.GetScope().Entity.Data_Cupom = null;
        }
        if (this.txtCliente.GetText().CNum() > 0) {
            var parametrosCliente = {
                codCliente: this.txtCliente.GetText().CNum()
            };
            var cliente = this.ExecutarFuncaoServerSideSynch("GetByCliente", parametrosCliente);
            if (cliente != null) {
                this.GetScope().Entity.Nome_Cliente = cliente.Nome;
                this.GetScope().Entity.Endereco_Cliente = cliente.Endereco_Nome;
                this.GetScope().Entity.Fone_Cliente = cliente.Fone_Numero;
            }
        }
        if (this.txtValorParcela.GetText().CNum() > 0) {
            this.GetScope().Entity.Valor_Cliente = this.txtValorParcela.GetText().CNum();
        }
        if (this.RetornarTotalInformado() != this.txtValorFinal.GetText().CNum()) {
            MostrarAlerta("O Valor total das formas de pagamento está diferentes do valor total da venda!");
            return false;
        }
        var parametrosGetByContasReceberBaixadas = {
            codVenda: this.GetScope().Entity.Codigo
        };
        var contasReceberBiaxadas = this.ExecutarFuncaoServerSideSynch("GetByContasReceberBaixadas", parametrosGetByContasReceberBaixadas);
        if (contasReceberBiaxadas) {
            MostrarAlerta("Existe conta a receber para esta venda ja baixada!");
            return false;
        }
        if (this.Crediarios.length == 0 && this.ListaCDC.length == 0 && this.Cartoes.length == 0 && this.Dinheiros.length == 0 && this.Tickets.length == 0 && this.Cheques.length == 0) {
            MostrarAlerta("Informe ao menos uma parcela!");
            return false;
        }
        if (this.Crediarios.length > 0) {
            this.GetScope().Entity.VendaPagamentos = this.Crediarios;
            var total = 0;
            for (var x = 0; x < this.Crediarios.length; x++) {
                total = total + this.Crediarios[x].Valor;
            }
            this.GetScope().Entity.Valor_Cliente = total;
        }
        else if (this.ListaCDC.length > 0) {
            this.GetScope().Entity.VendaPagamentos = this.ListaCDC;
            var total = 0;
            for (var x = 0; x < this.ListaCDC.length; x++) {
                total = total + this.ListaCDC[x].Valor;
            }
            this.GetScope().Entity.Valor_Cliente = total;
        }
        else if (this.Cartoes.length > 0) {
            this.PreencherCartao(this.GetScope().Entity);
        }
        else if (this.Dinheiros.length > 0) {
            this.GetScope().Entity.VendaPagamentos = this.Dinheiros;
        }
        else if (this.Tickets.length > 0) {
            this.GetScope().Entity.VendaPagamentos = this.Tickets;
        }
        else if (this.Cheques.length > 0) {
            this.GetScope().Entity.Cheques = this.Cheques;
            var Valor_Cheque_Vista = 0;
            var Valor_Cheque_Prazo = 0;
            if (this.GetScope().Entity.Valor_Final > 0) {
                for (var x = 0; x < this.Cheques.length; x++) {
                    if (this.Cheques[x].Vencimento <= new Date()) {
                        Valor_Cheque_Vista = Valor_Cheque_Vista + this.Cheques[x].Valor_Cheque;
                    }
                    else {
                        Valor_Cheque_Prazo = Valor_Cheque_Prazo + this.Cheques[x].Valor_Cheque;
                    }
                }
                if (Valor_Cheque_Vista != 0) {
                    this.GetScope().Entity.Valor_Cheque_Vista = Valor_Cheque_Vista;
                }
                if (Valor_Cheque_Prazo != 0) {
                    this.GetScope().Entity.Valor_Cheque_Prazo = Valor_Cheque_Prazo;
                }
            }
        }
        return true;
    };
    C_ManVen.prototype.PreencherCartao = function (entidade) {
        var cartaoManutencaoVendaRetorno = this.Cartoes;
        entidade.Cartoes = [];
        for (var x = 0; x < cartaoManutencaoVendaRetorno.length; x++) {
            var novoCartao = {};
            var cartaoGrid = void 0;
            cartaoGrid = cartaoManutencaoVendaRetorno[x];
            novoCartao.Cartao = cartaoGrid.Cartao.CNum();
            novoCartao.Codigo = cartaoGrid.Codigo_Cartao;
            novoCartao.Valor = cartaoGrid.Valor;
            entidade.Cartoes.push(novoCartao);
        }
    };
    C_ManVen.prototype.PreencherVendaItem = function (entidade) {
        var vendaItensRetorno = this.VendaItens;
        entidade.Produtos = [];
        for (var x = 0; x < vendaItensRetorno.length; x++) {
            var novaVendaItem = {};
            var vendaItemGrid = void 0;
            vendaItemGrid = vendaItensRetorno[x];
            novaVendaItem.Id = vendaItemGrid.Id;
            novaVendaItem.Venda = vendaItemGrid.Venda;
            novaVendaItem.Item = vendaItemGrid.Item;
            novaVendaItem.Produto = vendaItemGrid.Produto.CNum();
            novaVendaItem.Quantidade = vendaItemGrid.Quantidade;
            novaVendaItem.Valor_Unitario = vendaItemGrid.Valor_Unitario;
            novaVendaItem.Valor_Total = vendaItemGrid.Valor_Total;
            novaVendaItem.Valor_Custo = vendaItemGrid.Valor_Custo;
            novaVendaItem.Comissao = vendaItemGrid.Comissao;
            novaVendaItem.Cancelado = vendaItemGrid.Cancelado;
            novaVendaItem.Desconto = vendaItemGrid.Desconto;
            novaVendaItem.Bomba = vendaItemGrid.Bomba;
            novaVendaItem.Atendimento = vendaItemGrid.Atendimento;
            novaVendaItem.Vendedor = vendaItemGrid.Vendedor;
            novaVendaItem.Observacao = vendaItemGrid.Observacao;
            novaVendaItem.Bico = vendaItemGrid.Bico;
            novaVendaItem.Lista_Preco = vendaItemGrid.Lista_Preco;
            novaVendaItem.Valor_Venda = vendaItemGrid.Valor_Venda;
            novaVendaItem.Encerranteqtde = vendaItemGrid.Encerranteqtde;
            novaVendaItem.Encerrantevalor = vendaItemGrid.Encerrantevalor;
            novaVendaItem.Finalizar_Atendimento = vendaItemGrid.Finalizar_Atendimento;
            novaVendaItem.Taxa_Tributaria = vendaItemGrid.Taxa_Tributaria;
            novaVendaItem.Fator2 = vendaItemGrid.Fator2;
            novaVendaItem.Fator3 = vendaItemGrid.Fator3;
            novaVendaItem.Deposito = vendaItemGrid.Deposito;
            novaVendaItem.Comanda = vendaItemGrid.Comanda;
            novaVendaItem.Lote = vendaItemGrid.Lote;
            novaVendaItem.Pago_Comissao = vendaItemGrid.Pago_Comissao;
            novaVendaItem.Data_Comissao_Paga = vendaItemGrid.Data_Comissao_Paga;
            novaVendaItem.Pontos_Produto = vendaItemGrid.Pontos_Produto;
            novaVendaItem.Qtde_Prescrita = vendaItemGrid.Qtde_Prescrita;
            novaVendaItem.Qtde_Solicitada = vendaItemGrid.Qtde_Solicitada;
            novaVendaItem.Codigo_Fornecedor = vendaItemGrid.Codigo_Fornecedor;
            novaVendaItem.Codigo_Abastecimento = vendaItemGrid.Codigo_Abastecimento;
            novaVendaItem.Acrescimo = vendaItemGrid.Acrescimo;
            novaVendaItem.Preco_Produto_Normal = vendaItemGrid.Preco_Produto_Normal;
            novaVendaItem.Promocao = vendaItemGrid.Promocao;
            novaVendaItem.Farmacia_Receita = vendaItemGrid.Farmacia_Receita;
            novaVendaItem.Truncar_Total = vendaItemGrid.Truncar_Total;
            novaVendaItem.Tipo_Comissao = vendaItemGrid.Tipo_Comissao;
            novaVendaItem.Comissao_Valor = vendaItemGrid.Comissao_Valor;
            novaVendaItem.Numero_Cartao_Presente = vendaItemGrid.Numero_Cartao_Presente;
            novaVendaItem.Cliente_Cartao_Presente = vendaItemGrid.Cliente_Cartao_Presente;
            novaVendaItem.Observacao_Cartao_Presente = vendaItemGrid.Observacao_Cartao_Presente;
            novaVendaItem.Kit = vendaItemGrid.Kit;
            novaVendaItem.Brinde = vendaItemGrid.Brinde;
            entidade.Produtos.push(novaVendaItem);
        }
    };
    C_ManVen.prototype.OnClickExcluirVendaItens = function (s, e) {
        var lista = [];
        var retornoProdutoControlado = this.VerificaProdutoControlado(e.item.Produto);
        if (retornoProdutoControlado == true) {
            MostrarAlerta("Não é possível alterar um produto controlado!");
            e.cancelar = true;
        }
        for (var x = 0; x < this.VendaItens.length; x++) {
            if (this.VendaItens.length == 1) {
                this.VendaItens = [];
            }
            else {
                if (this.VendaItens[x] != e.item) {
                    lista.push(this.VendaItens[x]);
                }
            }
        }
        this.VendaItens = [];
        this.VendaItens = lista;
        this.CalcularTotal();
    };
    C_ManVen.prototype.CalcularTotal = function () {
        var soma = 0;
        for (var x = 0; x < this.VendaItens.length; x++) {
            soma = soma + this.VendaItens[x].Valor_Total;
        }
        this.txtTotalVenda.SetText(soma.Format(2).toString());
        soma = soma + this.txtAcrescimo.GetText().CNum() - this.txtDesconto.GetText().CNum();
        this.txtValorFinal.SetText(soma.Format(2).toString());
        this.txtAcrescimoPor.SetText(((this.GetScope().Entity.Acrescimo * 100) / this.GetScope().Entity.Valor).Format(2).toString());
    };
    C_ManVen.prototype.OnValidandoItem = function (s, e) {
        if (String.IsNullOrWhiteSpace(this.txtProduto.GetText())) {
            MostrarAlerta("Informe o Produto!");
            e.cancelar = true;
            return;
        }
        if (this.txtQtde.GetText().CNum() == 0) {
            MostrarAlerta("Informe a quantidade!");
            return;
        }
        if (this.txtUnitario.GetText().CNum() == 0) {
            MostrarAlerta("Informe o valor unitário!");
            return;
        }
        if (this.txtTotal.GetText().CNum() == 0) {
            MostrarAlerta("Informe o valor total!");
            return;
        }
        e.item.Item = this.txtItem.GetText();
        e.item.Produto = this.txtProduto.GetText();
        e.item.Quantidade = this.txtQtde.GetText();
        e.item.Valor_Unitario = this.txtUnitario.GetText();
        e.item.Valor_Total = this.txtTotal.GetText();
        e.item.Observacao = this.txtObservacao.GetText();
    };
    C_ManVen.prototype.OnAdicionandoItem = function (s, e) {
        this.VendaItem = e.item;
        this.GetScope().$applyAsync();
        return true;
    };
    C_ManVen.prototype.OnProcurouProduto = function () {
        var retornoProdutoControlado = this.VerificaProdutoControlado(this.txtProduto.GetText().CNum());
        if (retornoProdutoControlado == true) {
            MostrarAlerta("Não é possível alterar um produto controlado!");
            return false;
        }
        return true;
    };
    C_ManVen.prototype.OnChangeQuantidade = function () {
        if (this.txtQtde.GetText().CNum() <= 0) {
            this.txtQtde.SetText("0,000");
        }
        var parametros = {
            codProduto: this.txtProduto.GetText().CNum(),
            qtde: this.txtQtde.GetText()
        };
        var verificarQuantidade = this.ExecutarFuncaoServerSideSynch("VerificarQuantidade", parametros);
        if (verificarQuantidade) {
            this.txtQtde.Tipo = MouraTextBoxTipo.Numerico;
            MostrarAlerta("Este produto só aceita quantidades inteiras!");
            this.txtQtde.SetText("");
            return false;
        }
        this.txtTotal.SetText((this.txtQtde.GetText().CNum() * this.txtUnitario.GetText().CNum()).Format(3).toString());
        return true;
    };
    C_ManVen.prototype.OnChangeRecebido = function () {
        this.CalcularTotal();
        return true;
    };
    C_ManVen.prototype.OnChangeTotal = function () {
        if (this.txtTotal.GetText().CNum() <= 0) {
            this.txtTotal.SetText((this.txtUnitario.GetText().CNum() * this.txtQtde.GetText().CNum()).Format(2).toString());
        }
        return true;
    };
    C_ManVen.prototype.OnChangeUnitario = function () {
        if (this.txtUnitario.GetText().CNum() < 0) {
            this.txtUnitario.SetText("0,000");
        }
        this.txtTotal.SetText((this.txtUnitario.GetText().CNum() * this.txtQtde.GetText().CNum()).Format(2).toString());
        return true;
    };
    C_ManVen.prototype.VerificaProdutoControlado = function (codProduto) {
        var parametros = {
            codProduto: codProduto
        };
        var produtoControlado = this.ExecutarFuncaoServerSideSynch("VerificaProdutoControlado", parametros);
        return produtoControlado;
    };
    C_ManVen.prototype.MostrarModalImpVendas = function (s, e) {
        e.processOnServer = false;
        this.mdImportarVendas.Show();
        this.grdVendas.AjustarWidth();
    };
    C_ManVen.prototype.GerarVendas = function (s, e) {
        e.processOnServer = false;
        var retorno;
        var parametros;
        if (this.txtPeriodo.textBoxCalendarioInicio.GetDate() == null && this.txtPeriodo.textBoxCalendarioFim.GetDate() == null) {
            MostrarAlerta("Informe a Data da Venda !");
            return false;
        }
        parametros = {
            dataInicio: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
            dataFim: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
            codProduto: this.txtProduto.GetText().CNum(),
            valorVenda: this.txtValorVenda.GetText().CNum(),
            chkValor: this.chkBuscar_Valor.Check.checked,
            empresasUsuario: this.hdnEmpresasPermitidasUsuario.value
        };
        retorno = this.ExecutarFuncaoServerSideSynch("ImportarVendas", parametros);
        this.grdVendas.PreencherGrid(retorno);
        return true;
    };
    C_ManVen.prototype.OnFechouMdImportarVendas = function (s, e) {
        this.LimparModalImpVendas();
    };
    C_ManVen.prototype.OnAntesBuscarExistente = function () {
        _super.prototype.OnAntesBuscarExistente.call(this);
        var parametrosVenda = {
            codVenda: this.txtCodigo.GetText().CNum(),
            empresaUsuario: this.hdnEmpresasPermitidasUsuario.value
        };
        var venda = this.ExecutarFuncaoServerSideSynch("GetByVenda", parametrosVenda);
        var parametros = {
            codVenda: this.txtCodigo.GetText().CNum()
        };
        var verificaVendaCrediario = this.ExecutarFuncaoServerSideSynch("verificaVendaCrediario", parametros);
        var parametrosManutencao = {};
        var getManutencaoVendasBloquearCrediario = this.ExecutarFuncaoServerSideSynch("getManutencaoVendasBloquearCrediario", parametrosManutencao);
        if (verificaVendaCrediario && getManutencaoVendasBloquearCrediario == true) {
            MostrarAlerta("Forma de Pagamento em Crediário, a venda não pode ser alterada, pois já existe Contas a Receber");
            return false;
        }
        else {
            this.CalcularTotal();
            var parametrosRoteadoCaixaAberto = {
                codVenda: this.txtCodigo.GetText().CNum(),
                empresaUsuario: this.hdnEmpresasPermitidasUsuario.value
            };
            if (venda.Roteador_Puxou == false) {
                var verificarRoteadoCaixaAberto = this.ExecutarFuncaoServerSideSynch("VerificaRoteadoCaixaAberto", parametrosRoteadoCaixaAberto);
                if (verificarRoteadoCaixaAberto) {
                    MostrarAlerta("O caixa da venda " + venda.Codigo + " está aberto, é preciso fechar o mesmo para modificar a venda");
                    setTimeout($.proxy(function () { this.LimparEntity(); }, this), 500);
                    return false;
                }
            }
            var parametrosPrograma = {
                programa: "P_man_C"
            };
            var codigoFuncaoAdm = this.ExecutarFuncaoServerSideSynch("GetByCodigoFuncaoAdm", parametrosPrograma);
            if (venda != null) {
                this.dlgFuncaoAdm.Verificar("Retorno", codigoFuncaoAdm, true, this.VerificaAutorizacaoPrograma, this);
            }
            if (venda.Cancelada == true) {
                MostrarAlerta("Esta venda está CANCELADA e não pode ser alterada. Vá no item CANCELAR VENDA para voltar a venda como ATIVA se esta for a necessidade!");
                setTimeout($.proxy(function () { this.LimparEntity(); }, this), 500);
                return false;
            }
            if (venda.Cliente != 0) {
                this.OnProcurouCliente();
                this.PreencherFormaPagamento(venda.Codigo);
            }
            this.Habilita(false, true);
        }
        this.GetScope().Entity = venda;
        var parametrosVendaItem = {
            codVenda: this.txtCodigo.GetText().CNum(),
            codOrcamento: this.GetScope().Entity.Codigo_Orcamento
        };
        this.GetScope().Entity.Codigo_Orcamento = this.GetScope().Entity.Codigo_Orcamento;
        if (this.GetScope().Entity.Ecf == undefined) {
            this.cboEcf.SetSelectedIndex(0);
        }
        var vendaItens = this.ExecutarFuncaoServerSideSynch("GetByVendaItens", parametrosVendaItem);
        this.VendaItens = vendaItens;
        this.GetScope().Entity.Produtos = vendaItens;
        this.grd.Grid.PreencherGrid(this.VendaItens);
        this.CalcularTotal();
        if (this.GetScope().Entity.Cliente == 0) {
            MostrarAlerta("Informe um cliente");
            return false;
        }
        return true;
    };
    C_ManVen.prototype.LimparEntity = function () {
        this.GetScope().Entity = {};
        this.txtCPF.Limpar();
        this.GetScope().$applyAsync();
    };
    C_ManVen.prototype.PreencherFormaPagamento = function (codVenda) {
        var parametrosCrediario = {
            codVenda: codVenda
        };
        var vendaCrediarios = this.ExecutarFuncaoServerSideSynch("CarregarCrediarios", parametrosCrediario);
        this.Crediarios = vendaCrediarios;
        this.grdCrediario.Grid.PreencherGrid(this.Crediarios);
        //let parametrosParcelamentoDiretos: any = {
        //    codVenda: codVenda
        //}
        //var vendaParcelamento = this.ExecutarFuncaoServerSideSynch("CarregarParcelamentoDiretos", parametrosParcelamentoDiretos);
        //this.Parcelamentos = vendaParcelamento;
        //this.grdParcelamento.Grid.PreencherGrid(this.Parcelamentos);
        var parametrosCDC = {
            codVenda: codVenda
        };
        var vendaListaCDC = this.ExecutarFuncaoServerSideSynch("CarregarListaCDC", parametrosCDC);
        this.ListaCDC = vendaListaCDC;
        this.grdCDC.Grid.PreencherGrid(this.ListaCDC);
        var parametrosCheques = {
            codVenda: codVenda
        };
        var vendaCheques = this.ExecutarFuncaoServerSideSynch("CarregarCheques", parametrosCheques);
        this.Cheques = vendaCheques;
        this.grdCheque.Grid.PreencherGrid(this.Cheques);
        var parametrosCartoes = {
            codVenda: codVenda
        };
        var vendaCartoes = this.ExecutarFuncaoServerSideSynch("CarregarCartoes", parametrosCartoes);
        this.Cartoes = vendaCartoes;
        this.grdCartao.Grid.PreencherGrid(this.Cartoes);
        var parametrosTickets = {
            codVenda: codVenda
        };
        var vendaTicketsDinheiros = this.ExecutarFuncaoServerSideSynch("CarregarTicketsDinheiros", parametrosTickets);
        if (vendaTicketsDinheiros[0].Valor_Ticket != undefined) {
            this.Tickets = vendaTicketsDinheiros;
            this.grdTicket.Grid.PreencherGrid(this.Tickets);
        }
        if (vendaTicketsDinheiros[0].Valor_Dinheiro != undefined) {
            this.Dinheiros = vendaTicketsDinheiros;
            this.grdDinheiro.Grid.PreencherGrid(this.Dinheiros);
        }
        if (this.Crediarios.length > 0) {
            this.tab.SetActiveTabIndex(0);
            this.GetScope().Entity.VendaPagamentos = this.Crediarios;
        }
        if (this.Parcelamentos.length > 0) {
            this.tab.SetActiveTabIndex(1);
        }
        if (this.ListaCDC.length > 0) {
            this.tab.SetActiveTabIndex(2);
            this.GetScope().Entity.VendaPagamentos = this.ListaCDC;
        }
        if (this.Cartoes.length > 0) {
            this.tab.SetActiveTabIndex(4);
        }
        if (this.Cheques.length > 0) {
            this.tab.SetActiveTabIndex(3);
            this.GetScope().Entity.Cheques = this.Cheques;
        }
        if (this.Tickets.length > 0) {
            this.tab.SetActiveTabIndex(6);
            this.GetScope().Entity.VendaPagamentos = this.Tickets;
        }
        if (this.Dinheiros.length > 0) {
            this.tab.SetActiveTabIndex(5);
            this.GetScope().Entity.VendaPagamentos = this.Tickets;
        }
        this.txtVencimentoCrediario.Date = new Date();
        this.txtDataCheque.Date = new Date();
        this.txtVencimentoInicial.Date = new Date();
        this.txtVencimento.Date = new Date();
        this.txtParcela.SetText("1");
    };
    C_ManVen.prototype.LimparModalImpVendas = function () {
        this.txtPeriodo.Iniciar();
        this.txtProdutoVenda.Limpar();
        this.chkBuscar_Valor.Check.checked = false;
        this.txtValorVenda.Limpar();
        this.grdVendas.PreencherGrid(null);
    };
    C_ManVen.prototype.CalcularTotalPendente = function () {
        var total = this.txtTotalVenda.GetText().CNum();
        for (var x = 0; x < this.Crediarios.length; x++) {
            if (this.Crediarios[x].Data_Vencimento != null) {
                total = total - this.Crediarios[x].Valor;
            }
            if (total >= 0) {
                this.hdnTotalPendente.value = total.toString();
            }
        }
    };
    C_ManVen.prototype.RetornarTotalInformado = function () {
        var soma = 0;
        if (this.Crediarios.length > 0) {
            for (var x = 0; x < this.Crediarios.length; x++) {
                soma = soma + this.Crediarios[x].Valor;
            }
        }
        if (this.ListaCDC.length > 0) {
            for (var x = 0; x < this.ListaCDC.length; x++) {
                soma = soma + this.ListaCDC[x].Valor;
            }
        }
        if (this.Cheques.length > 0) {
            for (var x = 0; x < this.Cheques.length; x++) {
                soma = soma + this.Cheques[x].Valor_Cheque;
            }
        }
        if (this.Tickets.length > 0) {
            for (var x = 0; x < this.Tickets.length; x++) {
                soma = soma + this.Tickets[x].Valor;
            }
        }
        if (this.Cartoes.length > 0) {
            for (var x = 0; x < this.Cartoes.length; x++) {
                soma = soma + this.Cartoes[x].Valor;
            }
        }
        if (this.Dinheiros.length > 0) {
            for (var x = 0; x < this.Dinheiros.length; x++) {
                soma = soma + this.Dinheiros[x].Valor;
            }
        }
        return soma.Format(2).CNum();
    };
    C_ManVen.prototype.Habilita = function (flag, flagEnabled) {
        this.txtDataVenda.Disabled = !flagEnabled;
        this.txtHora.textBoxHorario.SetEnabled(flagEnabled);
        this.txtVendedor.Disabled = flag;
        this.cboEcf.Enabled = flagEnabled;
        this.txtCliente.Disabled = flag;
        this.txtDataCupom.Disabled = !flagEnabled;
        this.txtHoraCupom.textBoxHorario.SetEnabled(flagEnabled);
        this.txtItem.Disabled = flag;
        this.txtProduto.Disabled = flag;
        this.txtQtde.Disabled = flag;
        this.txtUnitario.Disabled = flag;
        this.txtTotal.Disabled = flag;
        this.txtObservacao.Disabled = flag;
        this.cboTipoImpressao.Enabled = flagEnabled;
        this.txtTotalVenda.Disabled = flag;
        this.txtDesconto.Disabled = flag;
        this.txtDescontoPor.Disabled = flag;
        this.txtAcrescimo.Disabled = flag;
        this.txtAcrescimoPor.Disabled = flag;
        this.txtValorFinal.Disabled = flag;
        this.txtRecebido.Disabled = flag;
        this.cboFormaPagamento.Enabled = flagEnabled;
        this.txtParcelaCrediario.Disabled = flag;
        this.txtVencimentoCrediario.Disabled = !flagEnabled;
        this.txtValorCrediario.Disabled = flag;
        this.cboDocBancario.Enabled = flagEnabled;
        this.cboConta.Enabled = flagEnabled;
        this.txtParcelaParcelamento.Disabled = flag;
        this.txtDiasVencimento.Disabled = flag;
        this.txtVencimentoInicial.Disabled = !flagEnabled;
        this.optDias.Disabled = flag;
        this.txtDias.Disabled = flag;
        this.txtDia.Disabled = flag;
        this.cboCDC.Enabled = flagEnabled;
        this.cboParcelaTaxas.Enabled = flagEnabled;
        this.txtParcela.Disabled = flag;
        this.txtVencimento.Disabled = !flagEnabled;
        this.txtValorParcela.Disabled = flag;
        this.txtCodigoCheque.Disabled = flag;
        this.cboTipoCheque.Enabled = flagEnabled;
        this.txtDataCheque.Disabled = !flagEnabled;
        this.txtCNPJCheque.Disabled = flag;
        this.txtCPFCheque.Disabled = flag;
        this.txtValorCheque.Disabled = flag;
        this.txtBanco.Disabled = flag;
        this.txtAgencia.Disabled = flag;
        this.txtConta.Disabled = flag;
        this.txtNCheque.Disabled = flag;
        this.txtClienteCheque.Disabled = flag;
        this.txtNomeTitular.Disabled = flag;
        this.txtTelefoneTitular.Disabled = flag;
        this.txtEnderecoTitular.Disabled = flag;
        this.cboCartao.Enabled = flagEnabled;
        this.txtValorCartao.Disabled = flag;
        this.txtValorDinheiro.Disabled = flag;
        this.txtValorTicket.Disabled = flag;
        this.txtCOO.Disabled = flag;
        this.txtCPF.Disabled = flag;
        this.lstTipoCliente.Disabled = flag;
        this.txtValorCDC.Disabled = flag;
    };
    C_ManVen.prototype.OnClickExcluirCrediario = function (s, e) {
        var parametros = {
            venda: this.GetScope().Entity.Codigo,
        };
        var contaReceber = this.ExecutarFuncaoServerSideSynch("GetByContaReceber", parametros);
        if (contaReceber) {
            MostrarAlerta("Existe conta a receber para esta venda ja baixada !");
            e.cancelar = true;
            return false;
        }
    };
    C_ManVen.prototype.OnClickExcluirCDC = function (s, e) {
        var parametros = {
            venda: this.GetScope().Entity.Codigo,
        };
        var contaReceber = this.ExecutarFuncaoServerSideSynch("GetByContaReceber", parametros);
        if (contaReceber) {
            MostrarAlerta("Existe conta a receber para esta venda ja baixada !");
            e.cancelar = true;
            return false;
        }
    };
    return C_ManVen;
}(MouraPageCadastroAngular));
var c_ManVen = new C_ManVen();
//# sourceMappingURL=C_ManVen.js.map