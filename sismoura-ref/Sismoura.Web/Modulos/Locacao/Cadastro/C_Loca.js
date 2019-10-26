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
var C_Loca = /** @class */ (function (_super) {
    __extends(C_Loca, _super);
    function C_Loca() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ProdutosExistentesLocacao = 0;
        _this.flag = true;
        return _this;
    }
    Object.defineProperty(C_Loca.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "btnImprimirContrato", {
        get: function () {
            return window['btnImprimirContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "cboSituacao", {
        get: function () {
            return window['cboSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "lblUltimaLocacao", {
        get: function () {
            return window['lblUltimaLocacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtCliente", {
        //#region AbaLocacao
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtPeriodoLocacao", {
        get: function () {
            return window['txtPeriodoLocacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtDataLocacao", {
        get: function () {
            return window['txtDataLocacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtHoraLocacao", {
        get: function () {
            return window['txtHoraLocacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "cboTipoCobranca", {
        get: function () {
            return window['cboTipoCobranca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtPrevisaoDevolucao", {
        get: function () {
            return window['txtPrevisaoDevolucao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "agp1", {
        get: function () {
            return $('#agp1_Label')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtCNPJCPF", {
        get: function () {
            return window['txtCNPJCPF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtRG", {
        get: function () {
            return window['txtRG_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtCEPLocatario", {
        get: function () {
            return window['txtCEPLocatario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtCEPObra", {
        get: function () {
            return window['txtCEPObra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "btnEstoque", {
        get: function () {
            return window['btnEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "lblEstoqueAtual", {
        get: function () {
            return window['lblEstoqueAtual_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtPrecoLocacao", {
        get: function () {
            return window['txtPrecoLocacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtQuantidade", {
        get: function () {
            return window['txtQuantidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtDescontoUnitario", {
        get: function () {
            return window['txtDescontoUnitario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtDescontoUnitarioPorc", {
        get: function () {
            return window['txtDescontoUnitarioPorc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtDescontoR", {
        get: function () {
            return window['txtDescontoR_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtDescontoRPorc", {
        get: function () {
            return window['txtDescontoRPorc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtDeslocamentoEntrega", {
        get: function () {
            return window['txtDeslocamentoEntrega_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtDeslocamentoRetirada", {
        get: function () {
            return window['txtDeslocamentoRetirada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "Produto", {
        get: function () {
            return this.GetScope()["Produto"];
        },
        set: function (value) {
            this.GetScope()["Produto"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "Produtos", {
        get: function () {
            return this.GetScope()["Produtos"];
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "grdProdutos", {
        get: function () {
            return window['grdProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "lblTotalFinal", {
        get: function () {
            return window['lblTotalFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "Conta", {
        get: function () {
            return this.GetScope()["Conta"];
        },
        set: function (value) {
            this.GetScope()["Conta"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "Contas", {
        get: function () {
            return this.GetScope()["Contas"];
        },
        set: function (value) {
            this.GetScope()["Contas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "Indenizacao", {
        get: function () {
            return this.GetScope()["Indenizacao"];
        },
        set: function (value) {
            this.GetScope()["Indenizacao"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "Indenizacoes", {
        get: function () {
            return this.GetScope()["Indenizacoes"];
        },
        set: function (value) {
            this.GetScope()["Indenizacoes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "grdContasPagar", {
        get: function () {
            return window['grdContasPagar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtDocMercantil", {
        get: function () {
            return window['txtDocMercantil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtParcela", {
        get: function () {
            return window['txtParcela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtFormaRecebimento", {
        get: function () {
            return window['txtFormaRecebimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtValor", {
        get: function () {
            return window['txtValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtDataVencimento", {
        get: function () {
            return window['txtDataVencimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtPeriodoLocacaoCobranca", {
        get: function () {
            return window['txtPeriodoLocacaoCobranca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "grdIndenizacao", {
        get: function () {
            return window['grdIndenizacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtDocMercantilInd", {
        //#endregion
        //#region AbaIndenizacao
        get: function () {
            return window['txtDocMercantilInd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtParcelaInd", {
        get: function () {
            return window['txtParcelaInd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtFormaRecebimentoInd", {
        get: function () {
            return window['txtFormaRecebimentoInd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtContaContabilInd", {
        get: function () {
            return window['txtContaContabilInd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "cboContaCorrenteInd", {
        get: function () {
            return window['cboContaCorrenteInd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtValorInd", {
        get: function () {
            return window['txtValorInd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtDataVencimentoInd", {
        get: function () {
            return window['txtDataVencimentoInd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "cboMotivoInd", {
        get: function () {
            return window['cboMotivoInd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "btnFichaDevolucao", {
        //#endregion
        //#region AbaDevolucao
        get: function () {
            return window['btnFichaDevolucao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "btnSolicitacaoRetirada", {
        get: function () {
            return window['btnSolicitacaoRetirada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtHoraDevolucao", {
        get: function () {
            return window['txtHoraDevolucao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtDataDevolucao", {
        get: function () {
            return window['txtDataDevolucao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtDescricaoAvarias", {
        get: function () {
            return window['txtDescricaoAvarias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "lstDeclaracoes", {
        get: function () {
            return window['lstDeclaracoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "Devolucao", {
        get: function () {
            return this.GetScope()["Devolucao"];
        },
        set: function (value) {
            this.GetScope()["Devolucao"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "Devolucoes", {
        get: function () {
            return this.GetScope()["Devolucoes"];
        },
        set: function (value) {
            this.GetScope()["Devolucoes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "grdDevolucao", {
        get: function () {
            return window['grdDevolucao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "btnFichaManutencao", {
        //#endregion
        //#region AbaManutencao
        get: function () {
            return window['btnFichaManutencao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtHoraManutencao", {
        get: function () {
            return window['txtHoraManutencao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtDataManutencao", {
        get: function () {
            return window['txtDataManutencao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "Manutencao", {
        get: function () {
            return this.GetScope()["Equipamento"];
        },
        set: function (value) {
            this.GetScope()["Equipamento"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "Manutencoes", {
        get: function () {
            return this.GetScope()["Equipamentos"];
        },
        set: function (value) {
            this.GetScope()["Equipamentos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "grdEquipamento", {
        get: function () {
            return window['grdEquipamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "btnFichaSubstituicao", {
        //#endregion
        //#region AbaSubstituicao
        get: function () {
            return window['btnFichaSubstituicao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtEquipamento", {
        get: function () {
            return window['txtEquipamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "cboDepositoSubstituicao", {
        get: function () {
            return window['cboDepositoSubstituicao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "btnEstoqueSubstituicao", {
        get: function () {
            return window['btnEstoqueSubstituicao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "lblEstoqueAtualSubstituicao", {
        get: function () {
            return window['lblEstoqueAtualSubstituicao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtPrecoLocacaoSubstituicao", {
        get: function () {
            return window['txtPrecoLocacaoSubstituicao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtDescontoUnitarioSubstituicao", {
        get: function () {
            return window['txtDescontoUnitarioSubstituicao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtDescontoUnitarioPorcSubstituicao", {
        get: function () {
            return window['txtDescontoUnitarioPorcSubstituicao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtHoraSubstituicao", {
        get: function () {
            return window['txtHoraSubstituicao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtDataSubstituicao", {
        get: function () {
            return window['txtDataSubstituicao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "EquipamentoRemover", {
        get: function () {
            return this.GetScope()["EquipamentoRemover"];
        },
        set: function (value) {
            this.GetScope()["EquipamentoRemover"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "EquipamentosRemover", {
        get: function () {
            return this.GetScope()["EquipamentosRemover"];
        },
        set: function (value) {
            this.GetScope()["EquipamentosRemover"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "grdEquipamentoRemover", {
        get: function () {
            return window['grdEquipamentoRemover_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "EquipamentoAdicionar", {
        get: function () {
            return this.GetScope()["EquipamentoAdicionar"];
        },
        set: function (value) {
            this.GetScope()["EquipamentoAdicionar"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "EquipamentosAdicionar", {
        get: function () {
            return this.GetScope()["EquipamentosAdicionar"];
        },
        set: function (value) {
            this.GetScope()["EquipamentosAdicionar"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "grdEquipamentosAdicionar", {
        get: function () {
            return window['grdEquipamentosAdicionar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "mdEstoque", {
        //#endregion   
        //#region Modal_Estoque
        get: function () {
            return window['mdEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "lblProduto", {
        get: function () {
            return window['lblProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "grdDepositoEstoque", {
        get: function () {
            return window['grdDepositoEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "mdImprimir", {
        //#endregion
        //#region Modal_Imprimir
        get: function () {
            return window['mdImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "lblImprimir", {
        get: function () {
            return window['lblImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "grdImprimir", {
        get: function () {
            return window['grdImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtClienteObra", {
        //#endregion
        get: function () {
            return window['txtClienteObra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtNomeObra", {
        get: function () {
            return window['txtNomeObra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtEnderecoObra", {
        get: function () {
            return window['txtEnderecoObra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtNumeroObra", {
        get: function () {
            return window['txtNumeroObra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtComplementoObra", {
        get: function () {
            return window['txtComplementoObra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtBairroObra", {
        get: function () {
            return window['txtBairroObra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtCidadeObra", {
        get: function () {
            return window['txtCidadeObra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtContato", {
        get: function () {
            return window['txtContato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "txtTelefoneObra", {
        get: function () {
            return window['txtTelefoneObra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Loca.prototype, "Obra", {
        get: function () {
            return this.GetScope()["Obra"];
        },
        set: function (value) {
            this.GetScope()["Obra"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_Loca.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.txtPeriodoLocacao) {
            adicionarEventoDevExpress(this.txtPeriodoLocacao.textBoxCalendarioInicio.DateChanged, this.OnPeriodoLocacaoInicioChange, this);
            adicionarEventoDevExpress(this.txtPeriodoLocacao.textBoxCalendarioFim.DateChanged, this.OnPeriodoLocacaoFimChange, this);
        }
        if (this.cboTipoCobranca) {
            adicionarEventoMoura(this.cboTipoCobranca.SelectedItemChanged, this.OnPeriodoLocacaoInicioChange, this);
        }
        if (this.txtCliente) {
            adicionarEventoMoura(this.txtCliente.Procurou, this.OnPesquisouCliente, this);
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Pesquisando, this.OnPesquisouProduto, this);
        }
        if (this.txtEquipamento) {
            adicionarEventoMoura(this.txtEquipamento.Procurou, this.OnPesquisouEquipamento, this);
        }
        if (this.grdImprimir) {
            adicionarEventoMoura(this.grdImprimir.ClickBotaoImprimir, this.OnClickImprimirDoc, this);
        }
        if (this.btnImprimirContrato) {
            adicionarEventoMoura(this.btnImprimirContrato.Click, this.OnClickImprimirContrato, this);
        }
        if (this.btnFichaDevolucao) {
            adicionarEventoMoura(this.btnFichaDevolucao.Click, this.OnClickFichaDevolucao, this);
        }
        if (this.btnFichaManutencao) {
            adicionarEventoMoura(this.btnFichaManutencao.Click, this.OnClickFichaManutencao, this);
        }
        if (this.btnFichaSubstituicao) {
            adicionarEventoMoura(this.btnFichaSubstituicao.Click, this.OnClickFichaSubstituicao, this);
        }
        if (this.btnSolicitacaoRetirada) {
            adicionarEventoMoura(this.btnSolicitacaoRetirada.Click, this.OnClickSolicitacaoRetirada, this);
        }
        if (this.btnEstoque) {
            adicionarEventoMoura(this.btnEstoque.Click, this.OnClickEstoque, this);
        }
        if (this.btnEstoqueSubstituicao) {
            adicionarEventoMoura(this.btnEstoqueSubstituicao.Click, this.OnClickEstoqueSubstituicao, this);
        }
        if (this.grdProdutos) {
            adicionarEventoMoura(this.grdProdutos.ItemAdicionado, this.OnAdiciouItemProduto, this);
            adicionarEventoMoura(this.grdProdutos.Validando, this.OnValidandoEstoqueProduto, this);
            adicionarEventoMoura(this.grdProdutos.ExcluindoItem, this.OnExcluindoItemProduto, this);
            adicionarEventoMoura(this.grdProdutos.SelecionouItem, this.OnGrdProdutosSelecionouItem, this);
        }
        if (this.grdDepositoEstoque) {
            adicionarEventoMoura(this.grdDepositoEstoque.SelecionouLinha, this.OngrdDepositoEstoqueSelecionouItem, this);
        }
        if (this.grdEquipamentosAdicionar) {
            adicionarEventoMoura(this.grdEquipamentosAdicionar.Validando, this.OnValidandoItemSubstituicao, this);
            adicionarEventoMoura(this.grdEquipamentosAdicionar.SelecionouItem, this.OnGrdEquipamentosAdicionarSelecionouItem, this);
        }
        if (this.grdDevolucao) {
            adicionarEventoMoura(this.grdDevolucao.AlterandoItem, this.OnEditandoItemDevolucao, this);
        }
        if (this.grdContasPagar) {
            adicionarEventoMoura(this.grdContasPagar.Validando, this.OnValidandoItemContasPagar, this);
            adicionarEventoMoura(this.grdContasPagar.LimpandoItem, this.OnLimpandoItemContasPagar, this);
            adicionarEventoMoura(this.grdContasPagar.Grid.ClickBotaoImprimir, this.OnClickImprimirFatura, this);
        }
        if (this.grdIndenizacao) {
            adicionarEventoMoura(this.grdIndenizacao.Validando, this.OnValidandoItemIndenizacao, this);
            adicionarEventoMoura(this.grdIndenizacao.LimpandoItem, this.OnLimpandoItemIndenizacao, this);
        }
        if (this.txtCEPLocatario) {
            adicionarEventoMoura(this.txtCEPLocatario.PesquisouCEP, this.OnConsultarCEPLocatario, this);
        }
        if (this.txtCEPObra) {
            adicionarEventoMoura(this.txtCEPObra.PesquisouCEP, this.OnConsultarCEPObra, this);
        }
        if (this.txtDataDevolucao) {
            adicionarEventoMoura(this.txtDataDevolucao.ValueChanged, this.OnDataDevolucaoChange, this);
        }
        if (this.txtHoraDevolucao && this.txtHoraDevolucao.textBoxHorario) {
            adicionarEventoDevExpress(this.txtHoraDevolucao.textBoxHorario.DateChanged, this.OnHoraDevolucaoChange, this);
        }
        if (this.txtDataManutencao) {
            adicionarEventoMoura(this.txtDataManutencao.ValueChanged, this.OnDataManutencaoChange, this);
        }
        if (this.txtHoraManutencao && this.txtHoraManutencao.textBoxHorario) {
            adicionarEventoDevExpress(this.txtHoraManutencao.textBoxHorario.DateChanged, this.OnHoraManutencaoChange, this);
        }
        if (this.txtDataSubstituicao) {
            adicionarEventoMoura(this.txtDataSubstituicao.ValueChanged, this.OnDataSubstituicaoChange, this);
        }
        if (this.txtHoraSubstituicao && this.txtHoraSubstituicao.textBoxHorario) {
            adicionarEventoDevExpress(this.txtHoraSubstituicao.textBoxHorario.DateChanged, this.OnHoraSubstituicaoChange, this);
        }
        if (this.cboDeposito) {
            adicionarEventoDevExpress(this.cboDeposito.Combo.SelectedIndexChanged, this.OnComboBoxDepositoChange, this);
        }
        if (this.txtPrecoLocacao) {
            adicionarEventoMoura(this.txtPrecoLocacao.TextChanged, this.OnTxtPrecoLocacaoChange, this);
        }
        if (this.txtDescontoUnitario) {
            adicionarEventoMoura(this.txtDescontoUnitario.TextChanged, this.OnTxtDescontoUnitarioChange, this);
        }
        if (this.txtDescontoUnitarioPorc && this.txtDescontoUnitario) {
            adicionarEventoMoura(this.txtDescontoUnitarioPorc.TextChanged, this.OnTxtDescontoUnitarioPorcChange, this);
        }
        if (this.cboDepositoSubstituicao) {
            adicionarEventoDevExpress(this.cboDepositoSubstituicao.Combo.SelectedIndexChanged, this.OnComboBoxDepositoSubstituicaoChange, this);
        }
        if (this.txtPrecoLocacaoSubstituicao) {
            adicionarEventoMoura(this.txtPrecoLocacaoSubstituicao.TextChanged, this.OnTxtPrecoLocacaoSubstituicaoChange, this);
        }
        if (this.txtDescontoUnitarioSubstituicao) {
            adicionarEventoMoura(this.txtDescontoUnitarioSubstituicao.TextChanged, this.OnTxtDescontoUnitarioSubstituicaoChange, this);
        }
        if (this.txtDescontoUnitarioPorcSubstituicao && this.txtDescontoUnitarioSubstituicao) {
            adicionarEventoMoura(this.txtDescontoUnitarioPorcSubstituicao.TextChanged, this.OnTxtDescontoUnitarioPorcSubstituicaoChange, this);
        }
        if (this.txtDescontoR) {
            adicionarEventoMoura(this.txtDescontoR.TextChanged, this.OnTxtDescontoRChange, this);
        }
        if (this.txtDescontoRPorc) {
            adicionarEventoMoura(this.txtDescontoRPorc.TextChanged, this.OnTxtDescontoRPorcChange, this);
        }
        if (this.txtDeslocamentoEntrega) {
            adicionarEventoMoura(this.txtDeslocamentoEntrega.TextChanged, this.OnTxtDeslocEntregaChange, this);
        }
        if (this.txtDeslocamentoRetirada) {
            adicionarEventoMoura(this.txtDeslocamentoRetirada.TextChanged, this.OnTxtDeslocRetiradaChange, this);
        }
        if (this.txtClienteObra) {
            adicionarEventoMoura(this.txtClienteObra.ProcurouObra, this.OnTxtClienteObraProcurouObra, this);
        }
    };
    C_Loca.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouTipo) {
            this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.PessoaEntity.Tipo; }, this.GetScope().MudouTipo);
        }
        if (!this.GetScope().MudouDeclaracao) {
            this.GetScope().MudouDeclaracao = $.proxy(this.MudouDeclaracao, this);
            this.GetScope().$watch(function (scope) { if (scope.Entity.DevolucaoEntity != null) {
                return scope.Entity.DevolucaoEntity.Avaria;
            } }, this.GetScope().MudouDeclaracao);
        }
        if (!this.GetScope().LimparObra) {
            this.GetScope().LimparObra = $.proxy(this.LimparObra, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Obra_Cliente; }, this.GetScope().LimparObra);
        }
        if (!this.GetScope().LimparEquipamento) {
            this.GetScope().LimparEquipamento = $.proxy(this.LimparEquipamento, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.Produto != null) {
                return that.Produto.Produto_Codigo;
            } }, this.GetScope().LimparEquipamento);
        }
        this.OnDepoisLimpar(this.GetScope().Entity);
        if (this.ParametrosTela.Id) {
            this.EntityTela.Id = this.ParametrosTela.Id;
            this.txtCodigo.Procurar(this.ParametrosTela.Id);
            //this.CarregarAbas(this.ParametrosTela.Id);
            this.RefreshAngular();
        }
        this.txtTelefoneObra.TextBoxTelefone.readOnly = true;
        this.txtTelefoneObra.TextBoxDDD.readOnly = true;
    };
    C_Loca.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        if (!Entidade.Produtos) {
            Entidade.Produtos = [];
        }
        if (!Entidade.Contas_Receber) {
            Entidade.Contas_Receber = [];
        }
        Entidade.DevolucaoEntity = {};
        Entidade.DevolucaoEntity.Itens = [];
        Entidade.ManutencaoEntity = {};
        Entidade.ManutencaoEntity.Itens = [];
        Entidade.SubstituicaoEntity = {};
        Entidade.SubstituicaoEntity.Itens = [];
        //this.GetScope().$applyAsync();
        this.MudouDeclaracao(Entidade.DevolucaoEntity.Avaria, Entidade.DevolucaoEntity.Avaria);
        //this.CarregarAbas(Entidade);
        setTimeout($.proxy(function () { this.CarregarAbas(Entidade); }, this), 500);
        this.ValidarAbasVisiveis();
    };
    C_Loca.prototype.CarregarAbas = function (entidade) {
        var parametros;
        parametros = {
            codLocacao: this.txtCodigo.GetText().CNum()
        };
        var parametrosObra;
        parametrosObra = {
            codObra: this.txtClienteObra.TextBoxObra.GetText()
        };
        if (!entidade) {
            entidade = {};
        }
        entidade.DevolucaoEntity = {};
        entidade.ManutencaoEntity = {};
        entidade.SubstituicaoEntity = {};
        var data = ConvertToDate(entidade.Data_Locacao);
        this.txtHoraLocacao.textBoxHorario.SetDate(data);
        entidade.DevolucaoEntity.Data = new Date();
        entidade.ManutencaoEntity.Data_Manutencao = new Date();
        entidade.SubstituicaoEntity.Data_Substituicao = new Date();
        this.Devolucao = {};
        this.Devolucoes = [];
        this.EquipamentosRemover = [];
        this.EquipamentoAdicionar = {};
        this.EquipamentosAdicionar = [];
        this.grdDevolucao.Grid.deselectAll();
        this.grdEquipamento.Grid.deselectAll();
        this.grdEquipamentoRemover.Grid.deselectAll();
        this.grdEquipamentosAdicionar.Grid.deselectAll();
        this.grdIndenizacao.Grid.deselectAll();
        //this.grdDevolucao.Limpar();
        //this.grdEquipamento.Limpar();
        //this.grdEquipamentoRemover.Limpar();
        //this.grdEquipamentosAdicionar.Limpar();
        this.txtHoraDevolucao.textBoxHorario.SetDate(new Date());
        this.txtHoraManutencao.textBoxHorario.SetDate(new Date());
        this.txtHoraSubstituicao.textBoxHorario.SetDate(new Date());
        this.Produtos = [];
        this.ProdutosExistentesLocacao = this.ExecutarFuncaoServerSideSynch("GetEquipamentoItensLocacao", parametros);
        var Produtos = this.ExecutarFuncaoServerSideSynch("GetProdutosLocacao", parametros);
        var Devolucoes = this.ExecutarFuncaoServerSideSynch("GetProdutosDevolucao", parametros);
        var Manutencoes = this.ExecutarFuncaoServerSideSynch("GetProdutosManutencao", parametros);
        var EquipamentosRemover = this.ExecutarFuncaoServerSideSynch("GetProdutosRemover", parametros);
        var Contas = this.ExecutarFuncaoServerSideSynch("GetContasReceberLocacao", parametros);
        var Indenizacoes = this.ExecutarFuncaoServerSideSynch("GetIndenizacoesLocacao", parametros);
        if (this.txtClienteObra.TextBoxObra.GetText().CNum() > 0) {
            var obra = this.ExecutarFuncaoServerSideSynch("GetByObra", parametrosObra);
            this.PreencherObra(obra);
        }
        this.Conta.Locacao_Inicial = entidade.Locacao_Inicial;
        this.Conta.Locacao_Final = entidade.Locacao_Final;
        this.Produtos = Produtos;
        this.Devolucoes = Devolucoes;
        this.Manutencoes = Manutencoes;
        this.EquipamentosRemover = EquipamentosRemover;
        this.Contas = Contas;
        this.Indenizacoes = Indenizacoes;
        this.GetScope().$applyAsync();
        this.AtualizarUltimaLocacao();
        this.totalizarProdutos(entidade);
    };
    C_Loca.prototype.OnGravouSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
        setTimeout($.proxy(function () { this.CarregarAbas(entidade); }, this), 1000);
        setTimeout($.proxy(function () { this.ValidarAbasVisiveis(); }, this), 1000);
    };
    C_Loca.prototype.OnExcluiuSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
        setTimeout($.proxy(function () { this.CarregarAbas(entidade); }, this), 1000);
        setTimeout($.proxy(function () { this.ValidarAbasVisiveis(); }, this), 1000);
    };
    C_Loca.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        try {
            var parametros;
            var entidade = this.GetScope().Entity;
            var finalizado;
            var codLocacao = 0;
            if ((this.grdEquipamentoRemover.Grid.GetSelectedRowsData.length > 0 && this.grdDevolucao.Grid.GetSelectedRowsData.length > 0)
                || (this.grdEquipamentoRemover.Grid.GetSelectedRowsData.length > 0 && this.grdEquipamento.Grid.GetSelectedRowsData.length > 0)
                || (this.grdDevolucao.Grid.GetSelectedRowsData.length > 0 && this.grdEquipamento.Grid.GetSelectedRowsData.length > 0)) {
                MsgBoxJS("Está sendo realizada mais de uma operação ao mesmo tempo(Devolução, Manutenção ou Substituição), essa ação poderá ocasionar conflito e por esse motivo deve se realizar uma operação por vez!", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, $.proxy(null, this));
                return false;
            }
            //var hora = entidade.Data_Locacao.ToDate();
            //Atividade: 924750
            //Este if foi criado por causa de um erro esporádico que salva um registro com o horário zerado.
            //if (hora.getHours().toString() == "00" && hora.getMinutes().toString() == "00" && hora.getSeconds().toString() == "00") {
            //    entidade.Data_Locacao = new Date();
            //}
            //Atividade 924750 convertida para Correção Documentada, onde foi solicitado adicionar
            // um campo para que o usuário selecione a hora da locação.
            var data = ConvertToDate(this.EntityTela.Data_Locacao);
            this.EntityTela.Data_Locacao = this.AlterarEntidadeData(data, this.txtHoraLocacao.textBoxHorario.GetDate());
            if (entidade.Id != null || entidade.Id != undefined) {
                codLocacao = entidade.Id;
            }
            parametros = {
                codSituacao: entidade.Situacao,
                codLocacao: codLocacao
            };
            finalizado = this.ExecutarFuncaoServerSideSynch("isSituacaoFinalizada", parametros);
            if (finalizado) {
                MostrarAlerta("A locação não pode ser alterada, pois a mesma ja foi finalizada!");
                return false;
            }
            parametros = {
                codLocacao: codLocacao
            };
            var IsEquipamentosDevolvidos = this.ExecutarFuncaoServerSideSynch("IsEquipamentosDevolvidos", parametros);
            //if ((this.ProdutosExistentesLocacao == 0) && (this.Produtos.length == 0 || this.Produtos == undefined)) {
            if (this.Produtos.length == 0 && !IsEquipamentosDevolvidos) {
                MostrarAlerta("É necessário adicionar ao menos um equipamento!!");
                return false;
            }
            this.PreencherProdutos(entidade);
            this.PreencherSubstituicoes(entidade);
            this.PreencherDevolucoes(entidade);
            this.PreencherManutencoes(entidade);
            this.PreencherContasReceber(entidade);
            this.PreencherIndenizacoes(entidade);
            this.totalizarProdutos(entidade, true);
            entidade.Total_Geral = this.lblTotalFinal.Text.CNum();
            this.Devolucoes = [];
        }
        catch (ex) {
            LogarException(ex);
        }
        return true;
    };
    C_Loca.prototype.PreencherProdutos = function (entidade) {
        var produtosExistentes = entidade.Produtos;
        entidade.Produtos = [];
        for (var x = 0; x < this.Produtos.length; x++) {
            var novoProduto = {};
            var produtoGrid;
            for (var y = 0; y < produtosExistentes.length; y++) {
                if (produtosExistentes[y].Produto == this.Produtos[x].Produto_Codigo) {
                    novoProduto = produtosExistentes[y];
                    y = produtosExistentes.length;
                }
            }
            produtoGrid = this.Produtos[x];
            novoProduto.Id = produtoGrid.Id;
            novoProduto.Locacao = produtoGrid.Locacao;
            novoProduto.Produto = produtoGrid.Produto_Codigo;
            novoProduto.Deposito = produtoGrid.Deposito;
            novoProduto.Qtde_Locada = produtoGrid.Quantidade;
            novoProduto.Qtde_Devolvida = produtoGrid.Qtde_Devolvida;
            novoProduto.Preco_Locacao = produtoGrid.Preco_Locacao;
            novoProduto.Desc_Valor = produtoGrid.Desconto_Unitario;
            novoProduto.Desc_Perc = produtoGrid.Desconto_Unitario_Porcentagem;
            novoProduto.Data_Devolucao = produtoGrid.Data_Devolucao;
            novoProduto.Substituido = false;
            if (novoProduto.Deposito <= 0) {
                MostrarAlerta("Produto: " + produtoGrid.Descricao + " não foi informado o depósito!");
                return false;
            }
            entidade.Produtos.push(novoProduto);
        }
    };
    C_Loca.prototype.PreencherContasReceber = function (entidade) {
        var parametros = {
            codLocacao: this.txtCodigo.GetText().CNum()
        };
        var contasExistentes = this.ExecutarFuncaoServerSideSynch("GetByContasReceber", parametros);
        entidade.Contas_Receber = [];
        for (var x = 0; x < this.Contas.length; x++) {
            var novaConta = {};
            var contaGrid;
            for (var y = 0; y < contasExistentes.length; y++) {
                if (contasExistentes[y].Codigo == this.Contas[x].Codigo) {
                    novaConta = contasExistentes[y];
                    y = contasExistentes.length;
                }
            }
            contaGrid = this.Contas[x];
            novaConta.Codigo = contaGrid.Codigo;
            novaConta.N_Doc_Merc = contaGrid.N_Doc_Mercantil;
            novaConta.Data_Vencimento = contaGrid.Data_Vencimento;
            novaConta.Locacao_Inicial = contaGrid.Locacao_Inicial;
            novaConta.Locacao_Final = contaGrid.Locacao_Final;
            if (novaConta.Codigo <= 0 || novaConta.Codigo == undefined || novaConta.Codigo == null) {
                novaConta.Doc_Merc = contaGrid.Documento_Mercantil;
                novaConta.Valor = contaGrid.Valor;
                novaConta.Parcela = contaGrid.Parcela;
                novaConta.Doc_Bancario = contaGrid.Forma_Recebimento;
                novaConta.Conta_Corrente = contaGrid.Conta_Corrente;
                novaConta.Conta_Contabil = contaGrid.Conta_Contabil;
                novaConta.Baixa = (contaGrid.Baixa === "S" ? true : false);
            }
            entidade.Contas_Receber.push(novaConta);
        }
    };
    C_Loca.prototype.PreencherIndenizacoes = function (entidade) {
        var parametros = {
            codLocacao: this.txtCodigo.GetText().CNum()
        };
        var indenizacoesExistentes = this.ExecutarFuncaoServerSideSynch("GetByIndenizacoes", parametros);
        entidade.Contas_Receber_Indenizacao = [];
        for (var x = 0; x < this.Indenizacoes.length; x++) {
            var novaIndenizacao = {};
            var indenizacaoGrid;
            for (var y = 0; y < indenizacoesExistentes.length; y++) {
                if (indenizacoesExistentes[y].Codigo == this.Indenizacoes[x].Codigo) {
                    novaIndenizacao = indenizacoesExistentes[y];
                    y = indenizacoesExistentes.length;
                }
            }
            indenizacaoGrid = this.Indenizacoes[x];
            novaIndenizacao.Codigo = indenizacaoGrid.Codigo;
            novaIndenizacao.N_Doc_Merc = indenizacaoGrid.N_Doc_Mercantil;
            novaIndenizacao.Data_Vencimento = indenizacaoGrid.Data_Vencimento;
            novaIndenizacao.Locacao_Indenizacao_Motivo = indenizacaoGrid.Motivo_Indenizacao;
            novaIndenizacao.Doc_Merc = indenizacaoGrid.Documento_Mercantil;
            novaIndenizacao.Valor = indenizacaoGrid.Valor;
            novaIndenizacao.Parcela = indenizacaoGrid.Parcela;
            novaIndenizacao.Doc_Bancario = indenizacaoGrid.Forma_Recebimento;
            novaIndenizacao.Conta_Corrente = indenizacaoGrid.Conta_Corrente;
            novaIndenizacao.Conta_Contabil = indenizacaoGrid.Conta_Contabil;
            novaIndenizacao.Baixa = (indenizacaoGrid.Baixa === "S" ? true : false);
            entidade.Contas_Receber_Indenizacao.push(novaIndenizacao);
        }
    };
    C_Loca.prototype.PreencherDevolucoes = function (entidade) {
        if (!entidade.DevolucaoEntity) {
            entidade.DevolucaoEntity = {};
            entidade.DevolucaoEntity.Itens = [];
        }
        entidade.DevolucaoEntity.Itens = [];
        var novaDevolucao;
        var produtosSelecionados = this.grdDevolucao.Grid.GetSelectedRowsData;
        var produtosExistentes = this.Produtos;
        if (produtosSelecionados != undefined && produtosSelecionados != null && produtosSelecionados.length > 0) {
            for (var x = 0; x < produtosSelecionados.length; x++) {
                //var novoProduto = <SiSMoura.Core.Entity.Locacao_Equipamento_Item>{};
                var produtoGrid;
                produtoGrid = produtosSelecionados[x];
                if (produtosSelecionados[x].Quantidade > 0) {
                    novaDevolucao = {};
                    novaDevolucao.Produto = produtosSelecionados[x].Produto;
                    this.GetScope().Entity.Produtos.FirstOrDefault('Produto', novaDevolucao.Produto).Data_Devolucao = this.AlterarEntidadeData(this.txtDataDevolucao.Date, this.txtHoraDevolucao.textBoxHorario.GetDate());
                    novaDevolucao.Quantidade = produtosSelecionados[x].Quantidade;
                    entidade.DevolucaoEntity.Itens.push(novaDevolucao);
                    //Atualiza a quantidade na tabela Locacao_Equipamento_Itens
                    for (var y = 0; y < produtosExistentes.length; y++) {
                        if (produtosExistentes[y].Id == produtosSelecionados[x].Id) {
                            //novoProduto = produtosExistentes[y];
                            //y = produtosExistentes.length;
                            produtosExistentes[y].Qtde_Devolvida = produtoGrid.Quantidade;
                        }
                        //else {
                        //    produtosExistentes[y].Qtde_Devolvida = 0;
                        //}
                    }
                }
            }
            //this.EntityTela.Produtos = produtosExistentes;
            entidade.DevolucaoEntity.Data = this.AlterarEntidadeData(this.txtDataDevolucao.Date, this.txtHoraDevolucao.textBoxHorario.GetDate());
            this.GetScope().Entity.Produtos;
        }
        else {
            entidade.DevolucaoEntity.Itens = null;
            entidade.DevolucaoEntity = null;
        }
        return entidade.DevolucaoEntity;
    };
    C_Loca.prototype.PreencherManutencoes = function (entidade) {
        if (!entidade.ManutencaoEntity) {
            entidade.ManutencaoEntity = {};
            entidade.ManutencaoEntity.Itens = [];
        }
        var manutencoesExistentes = entidade.ManutencaoEntity.Itens;
        entidade.ManutencaoEntity.Itens = [];
        var novaManutencao;
        var produtosSelecionados = this.grdEquipamento.Grid.GetSelectedRowsData;
        if (produtosSelecionados != undefined && produtosSelecionados != null && produtosSelecionados.length > 0) {
            for (var x = 0; x < produtosSelecionados.length; x++) {
                novaManutencao = {};
                novaManutencao.Produto = produtosSelecionados[x].Produto;
                entidade.ManutencaoEntity.Itens.push(novaManutencao);
            }
            entidade.ManutencaoEntity.Data_Manutencao = this.AlterarEntidadeData(this.txtDataManutencao.Date, this.txtHoraManutencao.textBoxHorario.GetDate());
        }
        else {
            entidade.ManutencaoEntity = null;
        }
    };
    C_Loca.prototype.PreencherSubstituicoes = function (entidade) {
        if (!entidade.SubstituicaoEntity) {
            entidade.SubstituicaoEntity = {};
            entidade.SubstituicaoEntity.Itens = [];
        }
        var produtosSelecionados = this.grdEquipamentoRemover.Grid.GetSelectedRowsData;
        var substituicoesExistentes = entidade.SubstituicaoEntity.Itens;
        var novaSubstituicao;
        entidade.SubstituicaoEntity.Itens = [];
        if (!entidade.Produtos) {
            entidade.Produtos = [];
        }
        if (this.EquipamentosAdicionar != undefined && this.EquipamentosAdicionar != null && this.EquipamentosAdicionar.length > 0) {
            for (var x = 0; x < entidade.Produtos.length; x++) {
                for (var y = 0; y < produtosSelecionados.length; y++) {
                    if (entidade.Produtos[x].Id == produtosSelecionados[y].IdEquipamentoItem) {
                        entidade.Produtos[x].Substituido = true;
                        entidade.Produtos[x].Id = produtosSelecionados[y].IdEquipamentoItem;
                        novaSubstituicao = {};
                        novaSubstituicao.Produto = produtosSelecionados[y].Produto;
                        novaSubstituicao.Id = produtosSelecionados[y].IdSubstituicao;
                        novaSubstituicao.Tipo_Movimentacao = "E";
                        entidade.SubstituicaoEntity.Itens.push(novaSubstituicao);
                    }
                }
            }
            for (var x = 0; x < this.EquipamentosAdicionar.length; x++) {
                novaSubstituicao = {};
                novaSubstituicao.Produto = this.EquipamentosAdicionar[x].Produto_Codigo;
                novaSubstituicao.Tipo_Movimentacao = "S";
                entidade.SubstituicaoEntity.Itens.push(novaSubstituicao);
            }
            for (var x = 0; x < this.EquipamentosAdicionar.length; x++) {
                var novoProduto = {};
                var produtoGrid;
                produtoGrid = this.EquipamentosAdicionar[x];
                novoProduto.Id = produtoGrid.IdEquipamentoItem;
                novoProduto.Locacao = (this.txtCodigo.GetText() != "") ? this.txtCodigo.GetText().CNum() : 0;
                novoProduto.Produto = produtoGrid.Produto_Codigo;
                novoProduto.Deposito = produtoGrid.Deposito;
                novoProduto.Qtde_Locada = produtoGrid.Quantidade;
                novoProduto.Preco_Locacao = produtoGrid.Preco_Locacao;
                novoProduto.Desc_Valor = produtoGrid.Desconto_Unitario;
                novoProduto.Desc_Perc = produtoGrid.Desconto_Unitario_Porcentagem;
                if (novoProduto.Deposito <= 0) {
                    MostrarAlerta("Produto: " + produtoGrid.Descricao + " não foi informado o depósito!");
                    return false;
                }
                entidade.Produtos.push(novoProduto);
            }
            entidade.SubstituicaoEntity.Data_Substituicao = this.AlterarEntidadeData(this.txtDataSubstituicao.Date, this.txtHoraSubstituicao.textBoxHorario.GetDate());
        }
        else {
            entidade.SubstituicaoEntity = null;
        }
    };
    C_Loca.prototype.ValidarAbasVisiveis = function () {
        if (this.txtCodigo) {
            if (this.txtCodigo.GetText().CNum() > 0) {
                //this.tab.AlterarVisibleAba("AbaLocacao", true);
                this.tab.AlterarVisibleAba("AbaDevolucao", true);
                this.tab.AlterarVisibleAba("AbaManutencao", true);
                this.tab.AlterarVisibleAba("AbaSubstituicao", true);
                //this.tab.Painel.SetVisible(false);
            }
            else {
                //this.tab.AlterarVisibleAba("AbaLocacao", true);
                this.tab.AlterarVisibleAba("AbaDevolucao", false);
                this.tab.AlterarVisibleAba("AbaManutencao", false);
                this.tab.AlterarVisibleAba("AbaSubstituicao", false);
            }
        }
    };
    C_Loca.prototype.AtualizarUltimaLocacao = function () {
        var retorno;
        var parametros;
        retorno = this.ExecutarFuncaoServerSideSynch("GetUltimaLocacao", parametros);
        if (this.lblUltimaLocacao) {
            this.lblUltimaLocacao.Text = retorno;
        }
    };
    C_Loca.prototype.OnDepoisLimpar = function (Entity) {
        var dataAtual = this.DataServidor();
        Entity.Codigo_Usuario = ValoresSismoura.UsuarioLogado;
        Entity.Codigo_Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        Entity.Data_Locacao = dataAtual;
        this.txtHoraLocacao.textBoxHorario.SetDate(dataAtual);
        Entity.Locacao_Inicial = null;
        Entity.Locacao_Final = null;
        var parametros;
        parametros = {
            codLocacao: this.txtCodigo.GetText().CNum()
        };
        var param = this.ExecutarFuncaoServerSideSynch("GetObservacaoParamento", parametros);
        if (param) {
            Entity.Horario_Funcionamento = param.Horario_Funcionamento;
            Entity.Observacao_Contrato = param.Observacao_Contrato;
        }
        parametros = {};
        var retorno = this.ExecutarFuncaoServerSideSynch("GetSituacaoPadrao", parametros);
        Entity.Situacao = retorno;
        Entity.PessoaEntity = {};
        Entity.PessoaEntity.Tipo = "F";
        Entity.Deslocamento_Entrega = 0;
        Entity.Deslocamento_Retirada = 0;
        Entity.Desconto_Valor = 0;
        Entity.Desconto_Perc = 0;
        Entity.Produtos = [];
        Entity.DevolucaoEntity = {};
        Entity.DevolucaoEntity.Itens = [];
        Entity.ManutencaoEntity = {};
        Entity.ManutencaoEntity.Itens = [];
        Entity.SubstituicaoEntity = {};
        Entity.SubstituicaoEntity.Itens = [];
        Entity.Contas_Receber = [];
        Entity.Total_Geral = 0;
        Entity.DevolucaoEntity.Avaria = 1;
        this.Produto = {};
        this.Produtos = [];
        this.Devolucao = {};
        this.Devolucoes = [];
        this.Manutencao = {};
        this.Manutencoes = [];
        this.EquipamentosRemover = [];
        this.EquipamentoAdicionar = {};
        this.EquipamentosAdicionar = [];
        this.Conta = {};
        this.Contas = [];
        this.Indenizacao = {};
        this.Indenizacoes = [];
        this.txtParcela.SetText("1");
        this.txtDataVencimento.Date = new Date();
        this.txtParcelaInd.SetText("1");
        this.txtDataVencimentoInd.Date = new Date();
        this.txtContaContabilInd.Limpar();
        this.cboContaCorrenteInd.Limpar();
        //this.grdProdutos.Limpar();
        //this.grdDevolucao.Limpar();
        //this.grdEquipamento.Limpar();
        //this.grdEquipamentoRemover.Limpar();
        //this.grdEquipamentosAdicionar.Limpar();
        //this.grdContasPagar.Limpar();
        this.grdProdutos.Grid.PreencherGrid(null);
        this.grdDevolucao.Grid.PreencherGrid(null);
        this.grdEquipamento.Grid.PreencherGrid(null);
        this.grdEquipamentoRemover.Grid.PreencherGrid(null);
        this.grdEquipamentosAdicionar.Grid.PreencherGrid(null);
        this.grdContasPagar.Grid.PreencherGrid(null);
        this.grdIndenizacao.Grid.PreencherGrid(null);
        this.lblTotalFinal.Text = (0).Format(ValoresSismoura.CasasDecimaisValor);
        this.cboContaCorrente.Limpar();
        this.txtCodigo.Limpar();
        this.ValidarAbasVisiveis();
        this.LimparObra();
        this.respostaEstoque = false;
        this.lblEstoqueAtual.Text = '';
        //setTimeout($.proxy(function () { this.CarregarAbas(Entity) }, this), 500);
        this.GetScope().$applyAsync();
    };
    C_Loca.prototype.LimparEquipamento = function () {
        if (!this.Produto.Produto_Codigo || this.Produto.Produto_Codigo <= 0) {
            this.Produto = {};
            this.lblEstoqueAtual.Text = '';
        }
    };
    C_Loca.prototype.LimparObra = function () {
        if (this.Obra) {
            this.Obra = {};
        }
    };
    C_Loca.prototype.OnClickFichaDevolucao = function (s, e) {
        e.processOnServer = false;
        var parametros;
        var impressoes;
        parametros = {
            codLocacao: this.txtCodigo.GetText().CNum(),
            codModelo: 2
        };
        this.lblImprimir.Text = "Selecione uma devolução para impressão";
        impressoes = this.ExecutarFuncaoServerSideSynch("RetornaImpressoesByModelo", parametros);
        if (impressoes) {
            this.grdImprimir.PreencherGrid(impressoes);
        }
        this.mdImprimir.Show();
    };
    C_Loca.prototype.OnClickFichaManutencao = function (s, e) {
        e.processOnServer = false;
        var parametros;
        var impressoes;
        parametros = {
            codLocacao: this.txtCodigo.GetText().CNum(),
            codModelo: 3
        };
        this.lblImprimir.Text = "Selecione uma manutenção para impressão";
        impressoes = this.ExecutarFuncaoServerSideSynch("RetornaImpressoesByModelo", parametros);
        if (impressoes) {
            this.grdImprimir.PreencherGrid(impressoes);
        }
        this.mdImprimir.Show();
    };
    C_Loca.prototype.OnClickFichaSubstituicao = function (s, e) {
        e.processOnServer = false;
        var parametros;
        var impressoes;
        parametros = {
            codLocacao: this.txtCodigo.GetText().CNum(),
            codModelo: 4
        };
        this.lblImprimir.Text = "Selecione uma substituição para impressão";
        impressoes = this.ExecutarFuncaoServerSideSynch("RetornaImpressoesByModelo", parametros);
        if (impressoes) {
            this.grdImprimir.PreencherGrid(impressoes);
        }
        this.mdImprimir.Show();
    };
    C_Loca.prototype.OnClickImprimirFatura = function (s, e) {
        try {
            if (e.data.Codigo == null || e.data.Codigo == undefined || e.data.Codigo <= 0) {
                MostrarAlerta("É necessário que a conta esteja gravada para imprimi-la");
                return false;
            }
            this.Imprimir(this.txtCodigo.GetText().CNum(), 5, e.data.Codigo);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Loca.prototype.OnClickSolicitacaoRetirada = function (s, e) {
        e.processOnServer = false;
        try {
            var parametros;
            var devolucao;
            devolucao = this.PreencherDevolucoes(this.EntityTela);
            if (!devolucao) {
                MostrarAlerta("Favor selecionar o equipamento que será devolvido.");
                return;
            }
            parametros = {
                codLocacao: this.txtCodigo.GetText().CNum(),
                infoDevolucao: devolucao
            };
            var texto = this.ExecutarFuncaoServerSideSynch("ImprimirRetirada", parametros);
            abrirTelaNovaAbaParametros(formataURLRelativa("/EditorHTML.aspx?EmailEnvio=" + "" + this.GetScope().Entity.PessoaEntity.Email + "&NomeAnexo=" + "" + texto), null);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Loca.prototype.OnClickImprimirDoc = function (s, e) {
        try {
            this.Imprimir(this.txtCodigo.GetText().CNum(), e.data.codModelo, e.data.codTransacao);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Loca.prototype.OnClickImprimirContrato = function (s, e) {
        e.processOnServer = false;
        try {
            this.Imprimir(this.txtCodigo.GetText().CNum(), 1, 0);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Loca.prototype.Imprimir = function (codLocacao, codModelo, codTransacao) {
        var parametros;
        parametros = {
            codLocacao: codLocacao,
            codModelo: codModelo,
            codTransacao: codTransacao
        };
        var texto = this.ExecutarFuncaoServerSideSynch("Imprimir", parametros);
        abrirTelaNovaAbaParametros(formataURLRelativa("/EditorHTML.aspx?EmailEnvio=" + "" + this.GetScope().Entity.PessoaEntity.Email + "&NomeAnexo=" + "" + texto), null);
    };
    C_Loca.prototype.OnClickEstoque = function (s, e) {
        e.processOnServer = false;
        var parametros;
        var estoqueDepositoProdutos;
        if (this.txtProduto.GetText().CNum() <= 0) {
            MostrarAlerta("Informe um produto!");
            this.txtProduto.Focus();
            return;
        }
        parametros = {
            codProduto: this.txtProduto.GetText().CNum(),
            codEmpresa: this.EntityTela.Codigo_Empresa,
            codDeposito: this.cboDeposito.GetValue()
        };
        this.lblProduto.Text = this.txtProduto.GetResultado();
        estoqueDepositoProdutos = this.ExecutarFuncaoServerSideSynch("RetornarEstoqueDepositoProduto", parametros);
        if (estoqueDepositoProdutos) {
            this.grdDepositoEstoque.PreencherGrid(estoqueDepositoProdutos);
        }
        this.mdEstoque.Show();
    };
    C_Loca.prototype.OnClickEstoqueSubstituicao = function (s, e) {
        e.processOnServer = false;
        var parametros;
        var estoqueDepositoProdutos;
        if (this.txtEquipamento.GetText().CNum() <= 0) {
            MostrarAlerta("Informe um produto!");
            this.txtEquipamento.Focus();
            return;
        }
        parametros = {
            codProduto: this.txtEquipamento.GetText().CNum(),
            codEmpresa: this.EntityTela.Codigo_Empresa,
            codDeposito: this.cboDepositoSubstituicao.GetValue()
        };
        this.lblProduto.Text = this.txtEquipamento.GetResultado();
        estoqueDepositoProdutos = this.ExecutarFuncaoServerSideSynch("RetornarEstoqueDepositoProduto", parametros);
        if (estoqueDepositoProdutos) {
            this.grdDepositoEstoque.PreencherGrid(estoqueDepositoProdutos);
        }
        this.mdEstoque.Show();
    };
    C_Loca.prototype.OnConsultarCEPLocatario = function (s, e) {
        if (e.EncontrouEndereco) {
            var entidade = this.GetScope().Entity;
            entidade.PessoaEntity.Bairro = e.Bairro;
            entidade.PessoaEntity.Endereco_Nome = e.Endereco;
            entidade.PessoaEntity.Cidade = e.CidadeCodigo;
            this.GetScope().$applyAsync();
        }
        else {
            this.txtCEPLocatario.Focus();
        }
    };
    C_Loca.prototype.OnConsultarCEPObra = function (s, e) {
        if (e.EncontrouEndereco) {
            var entidade = this.GetScope().Entity;
            entidade.Bairro_Obra = e.Bairro;
            entidade.Endereco_Obra = e.Endereco;
            entidade.Cidade_Obra = e.CidadeCodigo;
            this.GetScope().$applyAsync();
        }
        else {
            this.txtCEPObra.Focus();
        }
    };
    C_Loca.prototype.MudouTipo = function (newValue, oldValue) {
        if (String.IsNullOrWhiteSpace(newValue)) {
            newValue = "F";
        }
        if (newValue == "F") {
            this.agp1.innerText = "CPF";
            this.agp1.innerHTML = "CPF";
            this.txtCNPJCPF.IsCPF = true;
            this.txtRG.SetTextLabelControl("R.G.");
        }
        else {
            this.agp1.innerText = "CNPJ";
            this.agp1.innerHTML = "CNPJ";
            this.txtCNPJCPF.IsCPF = false;
            this.txtRG.SetTextLabelControl("I.E.");
        }
    };
    C_Loca.prototype.MudouDeclaracao = function (newValue, oldValue) {
        if (String.IsNullOrWhiteSpace(newValue)) {
            newValue = "1";
        }
        this.lstDeclaracoes.SetValue(newValue);
        if (newValue == "1") {
            this.txtDescricaoAvarias.Visible = false;
        }
        else {
            this.txtDescricaoAvarias.Visible = true;
        }
    };
    C_Loca.prototype.OnPesquisouCliente = function (s, e) {
        var entidade = this.GetScope().Entity;
        var parametros;
        var retorno;
        parametros = {
            codCliente: this.txtCliente.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetClienteByCodigo", parametros);
        if (retorno) {
            this.MudouTipo(retorno.Tipo, entidade.PessoaEntity.Tipo);
            entidade.PessoaEntity = retorno;
        }
        this.GetScope().$applyAsync();
    };
    C_Loca.prototype.OnPesquisouProduto = function (s, e) {
        var entidade = this.GetScope().Entity;
        var parametros;
        var retorno;
        var flag = false;
        if (this.Produtos && this.Produtos.length > 0) {
            for (var x = 0; x < this.Produtos.length; x++) {
                if (this.Produtos[x].Produto_Codigo === this.txtProduto.GetText().CNum()) {
                    flag = true;
                }
            }
        }
        parametros = {
            codProduto: this.txtProduto.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetProdutoByCodigo", parametros);
        if (retorno) {
            this.Produto.Descricao = retorno.Nome;
            this.Produto.Controle_Interno = retorno.Controle_Interno;
        }
        if (!flag) {
            this.lblEstoqueAtual.Text = '';
            this.Produto.Quantidade = 1;
            this.Produto.Desconto_Unitario = 0;
            this.Produto.Desconto_Unitario_Porcentagem = 0;
            if (retorno) {
                this.Produto.Preco_Locacao = this.RetornaValorCalculado(retorno.Preco_Locacao);
                this.Produto.Total = this.Produto.Quantidade * (this.Produto.Preco_Locacao - this.Produto.Desconto_Unitario);
            }
        }
        this.AtualizarEstoqueAtual();
        this.GetScope().$applyAsync();
    };
    C_Loca.prototype.OnPesquisouEquipamento = function (s, e) {
        var entidade = this.GetScope().Entity;
        var parametros;
        var retorno;
        parametros = {
            codProduto: this.txtEquipamento.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetProdutoByCodigo", parametros);
        if (retorno) {
            this.EquipamentoAdicionar.Quantidade = 1;
            this.EquipamentoAdicionar.Preco_Locacao = this.RetornaValorCalculado(retorno.Preco_Locacao);
            this.EquipamentoAdicionar.Descricao = retorno.Nome;
            this.EquipamentoAdicionar.Controle_Interno = retorno.Controle_Interno;
            this.EquipamentoAdicionar.Desconto_Unitario = 0;
            this.EquipamentoAdicionar.Desconto_Unitario_Porcentagem = 0;
            this.EquipamentoAdicionar.Total = this.EquipamentoAdicionar.Quantidade * (this.EquipamentoAdicionar.Preco_Locacao - this.EquipamentoAdicionar.Desconto_Unitario);
        }
        this.AtualizarEstoqueAtual();
        this.GetScope().$applyAsync();
    };
    C_Loca.prototype.OnValidandoEstoqueProduto = function (s, e) {
        var _this = this;
        if (this.respostaEstoque == false) {
            if ((this.lblEstoqueAtual.Text.CNum() <= 0) || (this.lblEstoqueAtual.Text < e.item.Quantidade)) {
                MsgBoxJS("Atualmente não existe quantidade suficiente deste produto no estoque, deseja continuar com a Locação ?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                    if (result.Resultado == MsgBoxResult.No) {
                        _this.txtProduto.Limpar();
                        _this.cboDeposito.LimparSelecao();
                        _this.txtQuantidade.SetText("0");
                        _this.txtPrecoLocacao.SetText("0,00");
                        _this.txtDescontoUnitario.SetText("0,00");
                        _this.txtDescontoUnitarioPorc.SetText("0,00");
                        _this.respostaEstoque = false;
                    }
                    else {
                        _this.respostaEstoque = true;
                        _this.grdProdutos.AdicionarOuAlterarItemAtual();
                    }
                }, null);
                e.cancelar = true;
                return;
            }
            //else {
            //    this.OnValidandoItemProduto(s, e);
            //}
        }
        e.item.Data_Devolucao = undefined;
        this.OnValidandoItemProduto(s, e);
    };
    C_Loca.prototype.OnValidandoItemProduto = function (s, e) {
        var entidade;
        var parametros;
        if (e.item.Produto_Codigo <= 0) {
            MostrarAlerta("Informe o Produto!");
            e.cancelar = true;
            this.txtProduto.Focus();
            return;
        }
        if (e.item.Quantidade <= 0) {
            MostrarAlerta("Informe a quantidade!");
            e.cancelar = true;
            this.txtQuantidade.Focus();
            return;
        }
        if (this.cboDeposito.GetValue() <= 0) {
            MostrarAlerta("Informe o depósito do produto!");
            e.cancelar = true;
            this.cboDeposito.Focus();
            return;
        }
        if (e.item.Preco_Locacao <= 0) {
            MostrarAlerta("Informe o valor do produto!");
            e.cancelar = true;
            this.txtPrecoLocacao.Focus();
            return;
        }
        e.item.Deposito = this.cboDeposito.GetValue();
        e.item.Total = (e.item.Preco_Locacao - e.item.Desconto_Unitario) * e.item.Quantidade;
        e.item.Qtde_Devolvida = 0;
        entidade = this.GetScope().Entity;
        if (this.Produtos && this.Produtos.length > 0) {
            for (var x = 0; x < this.Produtos.length; x++) {
                if (this.Produtos[x].Produto_Codigo === e.item.Produto_Codigo) {
                    this.Produtos[x].Preco_Locacao = this.Produto.Preco_Locacao;
                }
            }
        }
        this.lblEstoqueAtual.Text = "";
        this.totalizarProdutos(entidade);
        this.GetScope().$applyAsync();
    };
    C_Loca.prototype.OnValidandoItemSubstituicao = function (s, e) {
        var entidade = this.GetScope().Entity;
        var parametros;
        if (this.cboDepositoSubstituicao.GetValue() <= 0) {
            MostrarAlerta("Informe o depósito do produto!");
            e.cancelar = true;
            return;
        }
        if (this.txtEquipamento.GetText() == undefined || this.txtEquipamento.GetText() == null || this.txtEquipamento.GetText() == "") {
            MostrarAlerta("Informe o equipamento!");
            e.cancelar = true;
            return;
        }
        if (e.item.Preco_Locacao <= 0) {
            MostrarAlerta("Informe o valor do produto!");
            e.cancelar = true;
            return;
        }
        e.item.Deposito = this.cboDepositoSubstituicao.GetValue();
        e.item.Total = (e.item.Preco_Locacao - e.item.Desconto_Unitario) * e.item.Quantidade;
        if (this.EquipamentosAdicionar && this.EquipamentosAdicionar.length > 0) {
            for (var x = 0; x < this.EquipamentosAdicionar.length; x++) {
                if (this.EquipamentosAdicionar[x].Produto_Codigo === e.item.Produto_Codigo) {
                    this.EquipamentosAdicionar.splice(x, 1);
                }
            }
        }
        this.GetScope().$applyAsync();
    };
    C_Loca.prototype.OnLimpandoItemContasPagar = function (s, e) {
        e.item.Conta_Corrente = 0;
        this.cboContaCorrente.Limpar();
        e.item.Parcela = 1;
        this.txtParcela.SetText("1");
        e.item.Data_Vencimento = new Date();
        this.txtDataVencimento.Date = new Date();
        e.item.Valor = this.lblTotalFinal.Text;
        this.txtValor.SetText(this.lblTotalFinal.Text);
        this.txtPeriodoLocacaoCobranca.textBoxCalendarioInicio.SetDate(this.txtPeriodoLocacao.textBoxCalendarioInicio.GetDate());
        this.txtPeriodoLocacaoCobranca.textBoxCalendarioFim.SetDate(this.txtPeriodoLocacao.textBoxCalendarioFim.GetDate());
        if (this.GetScope().Entity != null) {
            e.item.Locacao_Inicial = this.GetScope().Entity.Locacao_Inicial;
            e.item.Locacao_Final = this.GetScope().Entity.Locacao_Final;
        }
        else {
            e.item.Locacao_Inicial = null;
            e.item.Locacao_Final = null;
        }
    };
    C_Loca.prototype.OnLimpandoItemIndenizacao = function (s, e) {
        e.item.Conta_Corrente = 0;
        e.item.Parcela = 1;
        e.item.Data_Vencimento = new Date();
        e.item.Valor = 0.0;
        //e.item = [];
        //this.LimparCamposIndenizacao();
    };
    C_Loca.prototype.LimparCamposIndenizacao = function () {
        this.cboContaCorrenteInd.Limpar();
        this.txtParcelaInd.SetText("1");
        this.txtDataVencimentoInd.Date = new Date();
        this.txtValorInd.SetText("0.0");
        this.txtDocMercantilInd.Limpar();
        this.cboMotivoInd.SetValue("");
        this.txtFormaRecebimentoInd.Limpar();
    };
    C_Loca.prototype.OnValidandoItemContasPagar = function (s, e) {
        if (e.index == -1) {
            var parametros;
            parametros = {
                codLocacao: this.txtCodigo.GetText().CNum()
            };
            this.ProdutosExistentesLocacao = this.ExecutarFuncaoServerSideSynch("GetEquipamentoItensLocacao", parametros);
            e.item.Conta_Corrente = this.cboContaCorrente.GetContaCorrente().CNum();
            e.item.Conta_Corrente_Texto = this.cboContaCorrente.GetContaCorrenteText();
            e.item.Documento_Mercantil = this.txtDocMercantil.GetText().CNum();
            e.item.Documento_Mercantil_Texto = this.txtDocMercantil.GetResultado();
            e.item.Forma_Recebimento_Texto = this.txtFormaRecebimento.GetResultado();
            e.item.Conta_Contabil_Texto = this.txtContaContabil.GetResultado();
            e.item.Data_Vencimento = this.txtDataVencimento.Date;
            e.item.Baixa = "N";
            e.item.Locacao_Final = this.txtPeriodoLocacaoCobranca.textBoxCalendarioFim.GetDate();
            e.item.Locacao_Inicial = this.txtPeriodoLocacaoCobranca.textBoxCalendarioInicio.GetDate();
            if (e.item.Parcela == null || e.item.Parcela == undefined) {
                e.item.Parcela = 1;
            }
            if (e.item.Valor == null || e.item.Valor == undefined || e.item.Valor <= 0) {
                MostrarAlerta("Preencha corretamente o campo valor");
                this.txtValor.Focus();
                e.cancelar = true;
                return;
            }
            if (e.item.Locacao_Inicial == undefined || e.item.Locacao_Inicial == null || e.item.Locacao_Final == undefined || e.item.Locacao_Final == null) {
                MostrarAlerta("Preencha corretamente o campo Período da Locação");
                e.cancelar = true;
                return;
            }
            if (e.item.Data_Vencimento == undefined || e.item.Data_Vencimento == null) {
                MostrarAlerta("Preencha corretamente o campo Data de Vencimento");
                this.txtDataVencimento.Focus();
                e.cancelar = true;
                return;
            }
            if (e.item.Conta_Corrente == null || e.item.Conta_Corrente == undefined || e.item.Conta_Corrente <= 0) {
                MostrarAlerta("Preencha corretamente o campo Conta Corrente");
                this.cboContaCorrente.Combo.Focus();
                e.cancelar = true;
                return;
            }
            if (e.item.Conta_Contabil == null || e.item.Conta_Contabil == undefined || e.item.Conta_Contabil <= 0) {
                MostrarAlerta("Preencha corretamente o campo Conta Contabil");
                this.txtContaContabil.Focus();
                e.cancelar = true;
                return;
            }
            if (this.Contas.length > 0) {
                var values = [];
                if (this.Contas.length != 0) {
                    for (var x = 0; x < this.Contas.length; x++) {
                        values[x] = this.Contas[x].Contador;
                    }
                }
                var codigo = Math.max.apply(Math, values);
                if (e.item.Contador == 0 || e.item.Contador == undefined || e.item.Contador == null) {
                    e.item.Contador = codigo + 1;
                }
            }
        }
    };
    C_Loca.prototype.OnValidandoItemIndenizacao = function (s, e) {
        if (e.index == -1) {
            if (e.item.Parcela == null || e.item.Parcela == undefined) {
                e.item.Parcela = 1;
            }
            if (e.item.Valor == null || e.item.Valor == undefined || e.item.Valor <= 0) {
                MostrarAlerta("Preencha corretamente o campo Valor");
                this.txtValorInd.Focus();
                e.cancelar = true;
                return;
            }
            if (e.item.Data_Vencimento == undefined || e.item.Data_Vencimento == null) {
                MostrarAlerta("Preencha corretamente o campo Data de Vencimento");
                this.txtDataVencimentoInd.Focus();
                e.cancelar = true;
                return;
            }
            if (this.cboContaCorrenteInd.GetContaCorrente().CNum() == null || this.cboContaCorrenteInd.GetContaCorrente().CNum() == undefined || this.cboContaCorrenteInd.GetContaCorrente().CNum() <= 0) {
                MostrarAlerta("Preencha corretamente o campo Conta Corrente");
                this.cboContaCorrenteInd.Combo.Focus();
                e.cancelar = true;
                return;
            }
            if (e.item.Conta_Contabil == null || e.item.Conta_Contabil == undefined || e.item.Conta_Contabil <= 0) {
                MostrarAlerta("Preencha corretamente o campo Conta Contábil");
                this.txtContaContabilInd.Focus();
                e.cancelar = true;
                return;
            }
            if (this.cboMotivoInd.GetValue().CNum() == null || this.cboMotivoInd.GetValue().CNum() == undefined || this.cboMotivoInd.GetValue().CNum() <= 0) {
                MostrarAlerta("Preencha corretamente o campo Motivo da Indenização");
                this.cboMotivoInd.Focus();
                e.cancelar = true;
                return;
            }
            e.item.Conta_Corrente = this.cboContaCorrenteInd.GetContaCorrente().CNum();
            e.item.Conta_Corrente_Texto = this.cboContaCorrenteInd.GetContaCorrenteText();
            e.item.Documento_Mercantil = this.txtDocMercantilInd.GetText().CNum();
            e.item.Documento_Mercantil_Texto = this.txtDocMercantilInd.GetResultado();
            e.item.Forma_Recebimento_Texto = this.txtFormaRecebimentoInd.GetResultado();
            //e.item.Conta_Contabil = this.txtContaContabilInd.GetText().CNum();
            e.item.Conta_Contabil_Texto = this.txtContaContabilInd.GetResultado();
            e.item.Data_Vencimento = this.txtDataVencimentoInd.Date;
            e.item.Baixa = "N";
            e.item.Motivo_Indenizacao = this.cboMotivoInd.GetValue().CNum();
            e.item.Motivo_Indenizacao_Texto = this.cboMotivoInd.GetText();
            if (this.Indenizacoes.length > 0) {
                var values = [];
                if (this.Indenizacoes.length != 0) {
                    for (var x = 0; x < this.Indenizacoes.length; x++) {
                        values[x] = this.Indenizacoes[x].Contador;
                    }
                }
                var codigo = Math.max.apply(Math, values);
                if (e.item.Contador == 0 || e.item.Contador == undefined || e.item.Contador == null) {
                    e.item.Contador = codigo + 1;
                }
            }
        }
    };
    C_Loca.prototype.OnAdiciouItemProduto = function (s, e) {
        this.totalizarProdutos(this.GetScope().Entity);
        for (var x = 0; x < this.Devolucoes.length; x++) {
            if (this.Devolucoes[x].Codigo == e.item.Produto_Codigo) {
                this.Devolucoes.splice(x, 1);
            }
        }
        this.Devolucao.Produto = this.Produto.Produto_Codigo;
        this.Devolucao.Descricao = this.Produto.Descricao;
        this.Devolucao.Qtde_Devolvida = this.Produto.Qtde_Devolvida;
        this.Devolucoes.push(this.Devolucao);
        for (var x = 0; x < this.Manutencoes.length; x++) {
            if (this.Manutencoes[x].Produto == e.item.Produto_Codigo) {
                this.Manutencoes.splice(x, 1);
            }
        }
        this.Manutencao.Produto = this.Produto.Produto_Codigo;
        this.Manutencao.Descricao = this.Produto.Descricao;
        this.Manutencoes.push(this.Manutencao);
        for (var x = 0; x < this.EquipamentosRemover.length; x++) {
            if (this.EquipamentosRemover[x].Produto == e.item.Produto_Codigo) {
                this.EquipamentosRemover.splice(x, 1);
            }
        }
        this.EquipamentoRemover.Produto = this.Produto.Produto_Codigo;
        this.EquipamentoRemover.Descricao = this.Produto.Descricao;
        this.EquipamentoRemover.Qtde_Locada = this.Produto.Quantidade;
        this.EquipamentoRemover.Qtde_Devolvida = this.Produto.Qtde_Devolvida;
        this.EquipamentosRemover.push(this.EquipamentoRemover);
    };
    C_Loca.prototype.totalizarProdutos = function (entidade, gravando) {
        if (!entidade) {
            entidade = this.GetScope().Entity;
        }
        if (entidade.Desconto_Valor == null || entidade.Desconto_Valor == undefined) {
            entidade.Desconto_Valor = this.txtDescontoR.GetText().CNum();
        }
        if (entidade.Deslocamento_Retirada == null || entidade.Deslocamento_Retirada == undefined) {
            entidade.Deslocamento_Retirada = this.txtDeslocamentoRetirada.GetText().CNum();
        }
        if (entidade.Deslocamento_Entrega == null || entidade.Deslocamento_Entrega == undefined) {
            entidade.Deslocamento_Entrega = this.txtDeslocamentoEntrega.GetText().CNum();
        }
        var total;
        var totalContas;
        var parametros;
        var retorno;
        retorno = 0;
        total = 0;
        totalContas = 0;
        this.lblTotalFinal.Text = (0).Format(ValoresSismoura.CasasDecimaisValor);
        //if (this.txtPrecoCusto.GetText().CNum() * this.txtQuantidade.GetText().CNum() >= 999999999999) {
        //    return false;
        //}     
        var entidadeProduto;
        if (gravando) {
            if (entidade.Produtos) {
                if (entidade.Produtos.length > 0) {
                    for (var x = 0; x < entidade.Produtos.length; x++) {
                        entidadeProduto = entidade.Produtos[x];
                        if (!entidadeProduto.Substituido) {
                            total += (entidadeProduto.Preco_Locacao - entidadeProduto.Desc_Valor) * entidadeProduto.Qtde_Locada;
                            totalContas += (entidadeProduto.Preco_Locacao - entidadeProduto.Desc_Valor) * (entidadeProduto.Quantidade - entidadeProduto.Qtde_Devolvida);
                        }
                    }
                }
            }
        }
        else {
            if (this.Produtos) {
                if (this.Produtos.length > 0) {
                    for (var x = 0; x < this.Produtos.length; x++) {
                        entidadeProduto = this.Produtos[x];
                        total += (entidadeProduto.Preco_Locacao - entidadeProduto.Desconto_Unitario) * entidadeProduto.Quantidade;
                        totalContas += (entidadeProduto.Preco_Locacao - entidadeProduto.Desconto_Unitario) * (entidadeProduto.Quantidade - entidadeProduto.Qtde_Devolvida);
                    }
                }
            }
        }
        if (total > 999999999999 || totalContas > 999999999999) {
            return false;
        }
        retorno = ((total - entidade.Desconto_Valor + entidade.Deslocamento_Retirada + entidade.Deslocamento_Entrega));
        this.lblTotalFinal.Text = (retorno).Format(ValoresSismoura.CasasDecimaisValor);
        this.Conta.Valor = (retorno).Format(ValoresSismoura.CasasDecimaisValor);
        retorno = ((totalContas - entidade.Desconto_Valor + entidade.Deslocamento_Retirada + entidade.Deslocamento_Entrega));
        this.GetScope().$applyAsync();
        return true;
    };
    C_Loca.prototype.RetornaValorCalculado = function (valor) {
        var entidade = this.GetScope().Entity;
        var parametros;
        var desconto = 0;
        if (entidade.Tipo_Cobranca == null || entidade.Tipo_Cobranca == undefined || entidade.Tipo_Cobranca == 0) {
            return valor;
        }
        parametros = {
            codTipo: entidade.Tipo_Cobranca
        };
        desconto = this.ExecutarFuncaoServerSideSynch("GetDescontoByTipo", parametros);
        return (valor -= (valor * (desconto / 100)));
    };
    C_Loca.prototype.AtualizarEstoqueAtual = function () {
        var retorno;
        var parametros;
        var codDepositoAux;
        if (String.IsNullOrWhiteSpace(this.cboDeposito.GetValue())) {
            codDepositoAux = 0;
        }
        else {
            codDepositoAux = this.cboDeposito.GetValue();
        }
        parametros = {
            codDeposito: codDepositoAux,
            codProduto: this.txtProduto.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetEstoqueAtual", parametros);
        if (this.lblEstoqueAtual) {
            this.lblEstoqueAtual.Text = retorno;
        }
    };
    C_Loca.prototype.AtualizarEstoqueAtualSubstituicao = function () {
        var retorno;
        var parametros;
        var codDepositoAux;
        if (String.IsNullOrWhiteSpace(this.cboDepositoSubstituicao.GetValue())) {
            codDepositoAux = 0;
        }
        else {
            codDepositoAux = this.cboDepositoSubstituicao.GetValue();
        }
        parametros = {
            codDeposito: codDepositoAux,
            codProduto: this.txtEquipamento.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetEstoqueAtual", parametros);
        if (this.EquipamentosAdicionar.length > 0) {
            for (var x = 0; x < this.EquipamentosAdicionar.length; x++) {
                if (this.EquipamentosAdicionar[x].Produto_Codigo == this.txtProduto.GetText().CNum() && this.EquipamentosAdicionar[x].Deposito == codDepositoAux) {
                    retorno = retorno - this.EquipamentosAdicionar[x].Quantidade;
                }
            }
        }
        if (this.lblEstoqueAtualSubstituicao) {
            this.lblEstoqueAtualSubstituicao.Text = retorno;
        }
    };
    C_Loca.prototype.OnExcluindoItemProduto = function (s, e) {
        var retorno;
        var parametros;
        parametros = {
            codLocacao: this.txtCodigo.GetText().CNum(),
            codProduto: e.item.Produto_Codigo
        };
        retorno = this.ExecutarFuncaoServerSideSynch("ValidaEquipamentoDevolvido", parametros);
        if (retorno) {
            MostrarAlerta("O produto não poderá ser excluído, pois o mesmo já foi devolvido!");
            e.cancelar = true;
            return;
        }
        retorno = this.ExecutarFuncaoServerSideSynch("ValidaEquipamentoManutencao", parametros);
        if (retorno) {
            MostrarAlerta("O produto não poderá ser excluído, pois o mesmo já passou por manutenção!");
            e.cancelar = true;
            return;
        }
        retorno = this.ExecutarFuncaoServerSideSynch("ValidaEquipamentoSubstituido", parametros);
        if (retorno) {
            MostrarAlerta("O produto não poderá ser excluído, pois o mesmo já foi substituído!");
            e.cancelar = true;
            return;
        }
        this.totalizarProdutos(this.GetScope().Entity);
        for (var x = 0; x < this.Devolucoes.length; x++) {
            if (this.Devolucoes[x].Produto_Codigo == e.item.Produto_Codigo) {
                this.Devolucoes.splice(x, 1);
            }
        }
        for (var x = 0; x < this.Manutencoes.length; x++) {
            if (this.Manutencoes[x].Produto == e.item.Produto_Codigo) {
                this.Manutencoes.splice(x, 1);
            }
        }
        for (var x = 0; x < this.EquipamentosRemover.length; x++) {
            if (this.EquipamentosRemover[x].Produto == e.item.Produto_Codigo) {
                this.EquipamentosRemover.splice(x, 1);
            }
        }
    };
    C_Loca.prototype.OnGrdProdutosSelecionouItem = function (s, e) {
        var entidadeProduto = e.item;
        if (entidadeProduto) {
            this.Produto = entidadeProduto;
        }
        this.Produto = this.Produto;
        this.AtualizarEstoqueAtual();
        this.GetScope().$applyAsync();
    };
    C_Loca.prototype.OngrdDepositoEstoqueSelecionouItem = function (s, e) {
        this.Produto.Deposito = e.rowKey;
        this.cboDeposito.SetValue(e.rowKey);
        this.mdEstoque.Hide();
        this.Produto = this.Produto;
        this.AtualizarEstoqueAtual();
        this.GetScope().$applyAsync();
    };
    C_Loca.prototype.OnGrdEquipamentosAdicionarSelecionouItem = function (s, e) {
        var entidadeProduto = e.item;
        if (entidadeProduto) {
            this.EquipamentoAdicionar = entidadeProduto;
        }
        this.EquipamentoAdicionar = this.EquipamentoAdicionar;
        this.GetScope().$applyAsync();
    };
    C_Loca.prototype.OnEditandoItemDevolucao = function (s, e) {
        if (e.item != null && e.item != undefined) {
            var parametros;
            parametros = {
                codLocacao: this.txtCodigo.GetText().CNum(),
                codProduto: e.item.Produto
            };
            var qtde = this.ExecutarFuncaoServerSideSynch("GetQtdeRestanteByLocacaoProduto", parametros);
            if (e.item.Quantidade > qtde) {
                if (this.flag) {
                    MostrarAlerta("A quantidade informada para devolução do item " + e.item.Produto + " - " + e.item.Descricao + " é maior que a quantidade locada.");
                    this.flag = !this.flag;
                }
                else {
                    this.flag = true;
                }
                e.cancelar = true;
                return;
            }
        }
    };
    C_Loca.prototype.OnComboBoxDepositoChange = function () {
        this.AtualizarEstoqueAtual();
    };
    C_Loca.prototype.OnComboBoxDepositoSubstituicaoChange = function () {
        this.AtualizarEstoqueAtualSubstituicao();
    };
    C_Loca.prototype.OnTxtPrecoLocacaoChange = function () {
        this.OnTxtDescontoUnitarioChange();
        this.OnTxtDescontoUnitarioPorcChange();
    };
    C_Loca.prototype.OnTxtPrecoLocacaoSubstituicaoChange = function () {
        this.OnTxtDescontoUnitarioSubstituicaoChange();
        this.OnTxtDescontoUnitarioPorcSubstituicaoChange();
    };
    C_Loca.prototype.OnTxtDescontoUnitarioChange = function () {
        this.Produto.Desconto_Unitario = this.txtDescontoUnitario.GetText().CNum();
        this.Produto.Desconto_Unitario_Porcentagem = this.txtDescontoUnitarioPorc.GetText().CNum();
        this.Produto.Preco_Locacao = this.txtPrecoLocacao.GetText().CNum();
        if (this.Produto.Desconto_Unitario >= this.Produto.Preco_Locacao && this.Produto.Desconto_Unitario > 0) {
            MostrarAlerta("O Valor do desconto unitário não pode ser maior ou igual ao Preço de Custo do produto!");
            this.txtDescontoUnitario.SetText("0");
            this.txtDescontoUnitarioPorc.SetText("0");
            this.Produto.Desconto_Unitario = 0;
            this.Produto.Desconto_Unitario_Porcentagem = 0;
            this.GetScope().$applyAsync();
            return;
        }
        if (this.Produto.Desconto_Unitario_Porcentagem == 0) {
            if (this.Produto.Desconto_Unitario > 0) {
                this.Produto.Desconto_Unitario_Porcentagem = (100 * this.Produto.Desconto_Unitario) / (this.Produto.Preco_Locacao * (100 - this.Produto.Desconto_Unitario_Porcentagem) / 100);
            }
        }
        else {
            if (this.Produto.Desconto_Unitario > 0) {
                this.Produto.Desconto_Unitario_Porcentagem = (this.Produto.Desconto_Unitario * 100 / this.Produto.Preco_Locacao);
            }
        }
        this.GetScope().$applyAsync();
    };
    C_Loca.prototype.OnTxtDescontoUnitarioSubstituicaoChange = function () {
        this.EquipamentoAdicionar.Desconto_Unitario = this.txtDescontoUnitarioSubstituicao.GetText().CNum();
        this.EquipamentoAdicionar.Desconto_Unitario_Porcentagem = this.txtDescontoUnitarioPorcSubstituicao.GetText().CNum();
        if (this.EquipamentoAdicionar.Desconto_Unitario >= this.EquipamentoAdicionar.Preco_Locacao && this.EquipamentoAdicionar.Desconto_Unitario > 0) {
            MostrarAlerta("O Valor do desconto unitário não pode ser maior ou igual ao Preço de Custo do produto!");
            this.txtDescontoUnitarioSubstituicao.SetText("0");
            this.txtDescontoUnitarioPorcSubstituicao.SetText("0");
            this.EquipamentoAdicionar.Desconto_Unitario = 0;
            this.EquipamentoAdicionar.Desconto_Unitario_Porcentagem = 0;
            this.GetScope().$applyAsync();
            return;
        }
        if (this.EquipamentoAdicionar.Desconto_Unitario_Porcentagem == 0) {
            if (this.EquipamentoAdicionar.Desconto_Unitario > 0) {
                this.EquipamentoAdicionar.Desconto_Unitario_Porcentagem = (100 * this.EquipamentoAdicionar.Desconto_Unitario) / (this.EquipamentoAdicionar.Preco_Locacao * (100 - this.EquipamentoAdicionar.Desconto_Unitario_Porcentagem) / 100);
            }
        }
        else {
            if (this.EquipamentoAdicionar.Desconto_Unitario > 0) {
                this.EquipamentoAdicionar.Desconto_Unitario_Porcentagem = (this.EquipamentoAdicionar.Desconto_Unitario * 100 / this.EquipamentoAdicionar.Preco_Locacao);
            }
        }
        this.GetScope().$applyAsync();
    };
    C_Loca.prototype.OnTxtDescontoUnitarioPorcChange = function () {
        this.Produto.Desconto_Unitario = this.txtDescontoUnitario.GetText().CNum();
        this.Produto.Desconto_Unitario_Porcentagem = this.txtDescontoUnitarioPorc.GetText().CNum();
        this.Produto.Preco_Locacao = this.txtPrecoLocacao.GetText().CNum();
        var ValorAnt;
        var ValorDesc;
        ValorAnt = 0;
        ValorDesc = this.Produto.Preco_Locacao;
        if (this.Produto.Desconto_Unitario_Porcentagem > 99.99) {
            MostrarAlerta("Desc. Unitário % não pode ser maior do que 99,9");
            this.txtDescontoUnitario.SetText("0");
            this.txtDescontoUnitarioPorc.SetText("0");
            this.Produto.Desconto_Unitario = 0;
            this.Produto.Desconto_Unitario_Porcentagem = 0;
            this.GetScope().$applyAsync();
            return;
        }
        this.Produto.Desconto_Unitario = ((this.Produto.Desconto_Unitario_Porcentagem / 100) * ValorDesc + ValorAnt);
        ValorAnt = this.Produto.Desconto_Unitario;
        ValorDesc = this.Produto.Preco_Custo - this.Produto.Desconto_Unitario;
        this.GetScope().$applyAsync();
    };
    C_Loca.prototype.OnTxtDescontoUnitarioPorcSubstituicaoChange = function () {
        this.EquipamentoAdicionar.Desconto_Unitario = this.txtDescontoUnitarioSubstituicao.GetText().CNum();
        this.EquipamentoAdicionar.Desconto_Unitario_Porcentagem = this.txtDescontoUnitarioPorcSubstituicao.GetText().CNum();
        var ValorAnt;
        var ValorDesc;
        ValorAnt = 0;
        ValorDesc = this.EquipamentoAdicionar.Preco_Locacao;
        if (this.EquipamentoAdicionar.Desconto_Unitario_Porcentagem > 99.99) {
            MostrarAlerta("Desc. Unitário % não pode ser maior do que 99,9");
            this.txtDescontoUnitarioPorcSubstituicao.SetText("0");
            this.txtDescontoUnitarioSubstituicao.SetText("0");
            this.EquipamentoAdicionar.Desconto_Unitario = 0;
            this.EquipamentoAdicionar.Desconto_Unitario_Porcentagem = 0;
            this.GetScope().$applyAsync();
            return;
        }
        this.EquipamentoAdicionar.Desconto_Unitario = ((this.EquipamentoAdicionar.Desconto_Unitario_Porcentagem / 100) * ValorDesc + ValorAnt);
        ValorAnt = this.EquipamentoAdicionar.Desconto_Unitario;
        ValorDesc = this.EquipamentoAdicionar.Preco_Custo - this.EquipamentoAdicionar.Desconto_Unitario;
        this.GetScope().$applyAsync();
    };
    C_Loca.prototype.OnTxtDescontoRChange = function () {
        var entidade = this.GetScope().Entity;
        entidade.Desconto_Valor = this.txtDescontoR.GetText().CNum();
        entidade.Desconto_Perc = this.txtDescontoRPorc.GetText().CNum();
        if (entidade.Desconto_Valor >= this.GetTotal()) {
            MostrarAlerta("O valor do desconto não pode ser maior ou igual o valor total!");
            this.txtDescontoR.SetText("0");
            this.txtDescontoRPorc.SetText("0");
            entidade.Desconto_Valor = 0;
            entidade.Desconto_Perc = 0;
            this.GetScope().$applyAsync();
            return;
        }
        if (entidade.Desconto_Perc == 0) {
            if (entidade.Desconto_Valor >= 0) {
                entidade.Desconto_Perc = (100 * entidade.Desconto_Valor) / (this.GetTotal() * (100 - entidade.Desconto_Perc) / 100);
            }
        }
        else {
            if (entidade.Desconto_Valor >= 0) {
                entidade.Desconto_Perc = (entidade.Desconto_Valor * 100 / this.GetTotal());
            }
        }
        this.totalizarProdutos(entidade);
        this.GetScope().$applyAsync();
    };
    C_Loca.prototype.OnTxtDescontoRPorcChange = function () {
        var entidade = this.GetScope().Entity;
        entidade.Desconto_Valor = this.txtDescontoR.GetText().CNum();
        entidade.Desconto_Perc = this.txtDescontoRPorc.GetText().CNum();
        var ValorAnt;
        var ValorDesc;
        ValorAnt = 0;
        ValorDesc = this.GetTotal();
        if (entidade.Desconto_Perc > 100) {
            MostrarAlerta("O valor do desconto em porcentagem, não pode ultrapassar de 100%.");
            this.txtDescontoR.SetText("");
            this.txtDescontoRPorc.SetText("");
            entidade.Desconto_Valor = 0;
            entidade.Desconto_Perc = 0;
            this.GetScope().$applyAsync();
            return;
        }
        entidade.Desconto_Valor = ((entidade.Desconto_Perc / 100) * ValorDesc + ValorAnt);
        ValorAnt = entidade.Desconto_Valor;
        ValorDesc = this.GetTotal() - entidade.Desconto_Valor;
        this.totalizarProdutos(entidade);
        this.GetScope().$applyAsync();
    };
    C_Loca.prototype.OnTxtDeslocRetiradaChange = function () {
        this.GetScope().Entity.Deslocamento_Retirada = this.txtDeslocamentoRetirada.GetText().CNum();
        this.GetScope().$applyAsync();
        this.totalizarProdutos();
    };
    C_Loca.prototype.OnTxtDeslocEntregaChange = function () {
        this.GetScope().Entity.Deslocamento_Entrega = this.txtDeslocamentoEntrega.GetText().CNum();
        this.GetScope().$applyAsync();
        this.totalizarProdutos(this.GetScope().Entity);
    };
    C_Loca.prototype.GetTotal = function () {
        var total;
        total = 0;
        if (this.Produtos) {
            if (this.Produtos.length > 0) {
                for (var x = 0; x < this.Produtos.length; x++) {
                    var entidadeProduto = this.Produtos[x];
                    total += entidadeProduto.Total;
                }
            }
        }
        return total;
    };
    C_Loca.prototype.OnDataDevolucaoChange = function () {
        this.GetScope().Entity.DevolucaoEntity.Data = this.AlterarEntidadeData(this.txtDataDevolucao.Date, this.txtHoraDevolucao.textBoxHorario.GetDate());
    };
    C_Loca.prototype.OnHoraDevolucaoChange = function () {
        this.GetScope().Entity.DevolucaoEntity.Data = this.AlterarEntidadeData(this.txtDataDevolucao.Date, this.txtHoraDevolucao.textBoxHorario.GetDate());
    };
    C_Loca.prototype.OnDataManutencaoChange = function () {
        this.GetScope().Entity.ManutencaoEntity.Data_Manutencao = this.AlterarEntidadeData(this.txtDataManutencao.Date, this.txtHoraManutencao.textBoxHorario.GetDate());
    };
    C_Loca.prototype.OnHoraManutencaoChange = function () {
        this.GetScope().Entity.ManutencaoEntity.Data_Manutencao = this.AlterarEntidadeData(this.txtDataManutencao.Date, this.txtHoraManutencao.textBoxHorario.GetDate());
    };
    C_Loca.prototype.OnDataSubstituicaoChange = function () {
        this.GetScope().Entity.SubstituicaoEntity.Data_Substituicao = this.AlterarEntidadeData(this.txtDataSubstituicao.Date, this.txtHoraSubstituicao.textBoxHorario.GetDate());
    };
    C_Loca.prototype.OnHoraSubstituicaoChange = function () {
        this.GetScope().Entity.SubstituicaoEntity.Data_Substituicao = this.AlterarEntidadeData(this.txtDataSubstituicao.Date, this.txtHoraSubstituicao.textBoxHorario.GetDate());
    };
    C_Loca.prototype.OnPeriodoLocacaoInicioChange = function () {
        var entidade = this.GetScope().Entity;
        var parametros;
        var valor = 0;
        var data;
        if (!entidade.Locacao_Inicial) {
            entidade.Locacao_Inicial = entidade.Data_Locacao;
        }
        data = entidade.Locacao_Inicial;
        if (this.cboTipoCobranca.GetValue() == null || this.cboTipoCobranca.GetValue() == undefined || this.cboTipoCobranca.GetValue() == 0) {
            return valor;
        }
        parametros = {
            codTipo: this.cboTipoCobranca.GetValue()
        };
        valor = this.ExecutarFuncaoServerSideSynch("GetQtdeDiasByTipo", parametros);
        this.GetScope().Entity.Tipo_Cobranca = this.cboTipoCobranca.GetValue();
        if (data != null) {
            this.GetScope().Entity.Locacao_Final = data.addDays(valor);
            this.GetScope().Entity.Previsao_Devolucao = this.GetScope().Entity.Locacao_Final;
            this.Conta.Locacao_Inicial = this.GetScope().Entity.Locacao_Inicial;
            this.Conta.Locacao_Final = this.GetScope().Entity.Locacao_Final;
        }
        this.GetScope().$applyAsync();
    };
    C_Loca.prototype.OnPeriodoLocacaoFimChange = function () {
        this.Conta.Locacao_Inicial = this.GetScope().Entity.Locacao_Inicial;
        this.Conta.Locacao_Final = this.GetScope().Entity.Locacao_Final;
        this.GetScope().$applyAsync();
    };
    C_Loca.prototype.AlterarEntidadeData = function (data, hora) {
        if (!data) {
            data = new Date();
        }
        var minutes = 0, hour = 0;
        if (!hora) {
            minutes = hora.getMinutes();
            hour = hora.getHours();
        }
        var dataEntidade;
        dataEntidade = new Date(data.getFullYear(), data.getMonth(), data.getDate(), hora.getHours(), hora.getMinutes());
        return dataEntidade;
    };
    C_Loca.prototype.OnTxtClienteObraProcurouObra = function (s, e) {
        try {
            var parametros;
            parametros = {
                codObra: this.txtClienteObra.TextBoxObra.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetByObra", parametros);
            this.PreencherObra(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Loca.prototype.PreencherObra = function (retorno) {
        if (retorno) {
            this.Obra.Nome_Obra = retorno.Nome;
            this.Obra.Cep_Obra = retorno.Cep;
            this.Obra.Endereco_Obra = retorno.Endereco;
            this.Obra.Numero_Obra = retorno.Numero;
            this.Obra.Complemento_Obra = retorno.Complemento;
            this.Obra.Bairro_Obra = retorno.Bairro;
            this.Obra.Cidade_Obra = retorno.Cidade;
            this.Obra.Contato_Obra = retorno.Contato;
            this.Obra.Ddd_Telefone_Obra = retorno.Ddd_Fone;
            this.Obra.Telefone_Obra = retorno.Telefone;
        }
    };
    return C_Loca;
}(MouraPageCadastroAngular));
var c_Loca = new C_Loca();
//# sourceMappingURL=C_Loca.js.map