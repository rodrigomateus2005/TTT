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
var C_Tela = /** @class */ (function (_super) {
    __extends(C_Tela, _super);
    function C_Tela() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Tela.prototype, "grdTela", {
        get: function () {
            return window['grdTela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "grdIngredientes", {
        get: function () {
            return window['grdIngredientes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "grdCombo", {
        get: function () {
            return window['grdCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "grdAcompanhamentos", {
        get: function () {
            return window['grdAcompanhamentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtMinima", {
        get: function () {
            return window['txtMinima_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtMaxima", {
        get: function () {
            return window['txtMaxima_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtLinhas", {
        get: function () {
            return window['txtLinhas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtColunas", {
        get: function () {
            return window['txtColunas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtMargemTopoMenu", {
        get: function () {
            return window['txtMargemTopoMenu_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtZoomTeclado", {
        get: function () {
            return window['txtZoomTeclado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtProdutoIngrediente", {
        get: function () {
            return window['txtProdutoIngrediente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtLinhaIngrediente", {
        get: function () {
            return window['txtLinhaIngrediente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtColunaIngrediente", {
        get: function () {
            return window['txtColunaIngrediente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtProdutoAcompanhamento", {
        get: function () {
            return window['txtProdutoAcompanhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtLarguraBotaoRodape", {
        get: function () {
            return window['txtLarguraBotaoRodape_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtLinhaAcompanhamento", {
        get: function () {
            return window['txtLinhaAcompanhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtColunaAcompanhamento", {
        get: function () {
            return window['txtColunaAcompanhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "Telas", {
        get: function () {
            return this.GetScope()["Telas"];
        },
        set: function (value) {
            this.GetScope()["Telas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "lblFoto", {
        get: function () {
            return window['lblFoto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "cboTipoInformativo", {
        get: function () {
            return window['cboTipoInformativo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "Ingrediente", {
        get: function () {
            if (!this.GetScope()["Ingrediente"]) {
                this.GetScope()["Ingrediente"] = {};
            }
            return this.GetScope()["Ingrediente"];
        },
        set: function (value) {
            this.GetScope()["Ingrediente"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "Ingredientes", {
        get: function () {
            if (!this.GetScope()["Ingredientes"]) {
                this.GetScope()["Ingredientes"] = [];
            }
            return this.GetScope()["Ingredientes"];
        },
        set: function (value) {
            this.GetScope()["Ingredientes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "Combo", {
        get: function () {
            if (!this.GetScope()["Combo"]) {
                this.GetScope()["Combo"] = {};
            }
            return this.GetScope()["Combo"];
        },
        set: function (value) {
            this.GetScope()["Combo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "Combos", {
        get: function () {
            if (!this.GetScope()["Combos"]) {
                this.GetScope()["Combos"] = [];
            }
            return this.GetScope()["Combos"];
        },
        set: function (value) {
            this.GetScope()["Combos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "Acompanhamento", {
        get: function () {
            if (!this.GetScope()["Acompanhamento"]) {
                this.GetScope()["Acompanhamento"] = {};
            }
            return this.GetScope()["Acompanhamento"];
        },
        set: function (value) {
            this.GetScope()["Acompanhamento"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "Acompanhamentos", {
        get: function () {
            return this.GetScope()["Acompanhamentos"];
        },
        set: function (value) {
            this.GetScope()["Acompanhamentos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoTela", {
        get: function () {
            return window['fotoTela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "CorFundo", {
        get: function () {
            return window['CorFundo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "CorTextoSenha", {
        get: function () {
            return window['CorTextoSenha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "CorTitulo", {
        get: function () {
            return window['CorTitulo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "CorProdutoModalAdicionais", {
        get: function () {
            return window['CorProdutoModalAdicionais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "CorTituloModalAdicionais", {
        get: function () {
            return window['CorTituloModalAdicionais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "CorTotal", {
        get: function () {
            return window['CorTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "CorSubtitulo1ModalAdicionais", {
        get: function () {
            return window['CorSubtitulo1ModalAdicionais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "CorSubtitulo2ModalAdicionais", {
        get: function () {
            return window['CorSubtitulo2ModalAdicionais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "CorPrecoModalAdicionais", {
        get: function () {
            return window['CorPrecoModalAdicionais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "CorDescricaoRodape", {
        get: function () {
            return window['CorDescricaoRodape_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "CorBordaBotaoRodape", {
        get: function () {
            return window['CorBordaBotaoRodape_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtTamanhoFonteRodape", {
        get: function () {
            return window['txtTamanhoFonteRodape_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "CorSelecaoRodape", {
        get: function () {
            return window['CorSelecaoRodape_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "CorFundoBotaoRodape", {
        get: function () {
            return window['CorFundoBotaoRodape_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "CorBordaCampo", {
        get: function () {
            return window['CorBordaCampo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "CorLinhaImpar", {
        get: function () {
            return window['CorLinhaImpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "CorLinhaPar", {
        get: function () {
            return window['CorLinhaPar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "CorNomeProduto", {
        get: function () {
            return window['CorNomeProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "CorPrecoProduto", {
        get: function () {
            return window['CorPrecoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "chkExibirBotao", {
        get: function () {
            return window['chkExibirBotao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "chkProximaTela", {
        get: function () {
            return window['chkProximaTela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "chkExibirBotaoAgora", {
        get: function () {
            return window['chkExibirBotaoAgora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "chkExibirBotaoViagem", {
        get: function () {
            return window['chkExibirBotaoViagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "chkExibirBotaoOk", {
        get: function () {
            return window['chkExibirBotaoOk_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "chkExibirCadastrarPedido", {
        get: function () {
            return window['chkExibirCadastrarPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtAlturaImgBotao", {
        get: function () {
            return window['txtAlturaImgBotao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtLarguraImgBotao", {
        get: function () {
            return window['txtLarguraImgBotao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtAlturaBotaoModal", {
        get: function () {
            return window['txtAlturaBotaoModal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtLarguraBotaoModal", {
        get: function () {
            return window['txtLarguraBotaoModal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtAlturaTitulo", {
        get: function () {
            return window['txtAlturaTitulo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtAlturaBotaoPagamento", {
        get: function () {
            return window['txtAlturaBotaoPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtLarguraBotaoPagamento", {
        get: function () {
            return window['txtLarguraBotaoPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtAlturaBotaoMenu", {
        get: function () {
            return window['txtAlturaBotaoMenu_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtAlturaBotaoMenuLateral", {
        /*get txtLarguraBotaoMenu(): MouraTextBox {
            return window['txtLarguraBotaoMenu_Object'];
        }*/
        get: function () {
            return window['txtAlturaBotaoMenuLateral_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtLarguraBotaoMenuLateral", {
        get: function () {
            return window['txtLarguraBotaoMenuLateral_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtAlturaBotaoModalAdicionais", {
        get: function () {
            return window['txtAlturaBotaoModalAdicionais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtLarguraBotaoModalAdicionais", {
        get: function () {
            return window['txtLarguraBotaoModalAdicionais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtAlturaBotaoRodape", {
        get: function () {
            return window['txtAlturaBotaoRodape_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtLarguraPedido", {
        get: function () {
            return window['txtLarguraPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtLarguraImgPedido", {
        get: function () {
            return window['txtLarguraImgPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtAlturaBotaoSenha", {
        get: function () {
            return window['txtAlturaBotaoSenha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtLarguraBotaoSenha", {
        get: function () {
            return window['txtLarguraBotaoSenha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtFonteNomeProduto", {
        get: function () {
            return window['txtFonteNomeProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtTamFonteSenha", {
        get: function () {
            return window['txtTamFonteSenha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtTamanhoFonteTotal", {
        get: function () {
            return window['txtTamanhoFonteTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtFontePrecoProduto", {
        get: function () {
            return window['txtFontePrecoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtFonteProdutoModalAdicionais", {
        get: function () {
            return window['txtFonteProdutoModalAdicionais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtFonteTituloModalAdicionais", {
        get: function () {
            return window['txtFonteTituloModalAdicionais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtFonteSubtitulo1ModalAdicionais", {
        get: function () {
            return window['txtFonteSubtitulo1ModalAdicionais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtFonteSubtitulo2ModalAdicionais", {
        get: function () {
            return window['txtFonteSubtitulo2ModalAdicionais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtFontePrecoModalAdicionais", {
        get: function () {
            return window['txtFontePrecoModalAdicionais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtTextoRodape", {
        get: function () {
            return window['txtTextoRodape_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoRodape", {
        get: function () {
            return window['fotoRodape_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoBotaoAvancar", {
        get: function () {
            return window['fotoBotaoAvancar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoBotaoVoltar", {
        get: function () {
            return window['fotoBotaoVoltar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoBotaoEditarPedido", {
        get: function () {
            return window['fotoBotaoEditarPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoBotaoAgora", {
        get: function () {
            return window['fotoBotaoAgora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoBotaoViagem", {
        get: function () {
            return window['fotoBotaoViagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoBotaoOk", {
        get: function () {
            return window['fotoBotaoOk_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoBotaoCadastrarPedido", {
        get: function () {
            return window['fotoBotaoCadastrarPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoBotaoDinheiro", {
        get: function () {
            return window['fotoBotaoDinheiro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoBotaoCredito", {
        get: function () {
            return window['fotoBotaoCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoPedidoEfetuado", {
        get: function () {
            return window['fotoPedidoEfetuado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoBotaoDebito", {
        get: function () {
            return window['fotoBotaoDebito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoBotaoVale", {
        get: function () {
            return window['fotoBotaoVale_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoBotaoCaixa", {
        get: function () {
            return window['fotoBotaoCaixa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoBotaoCupomNumerico", {
        get: function () {
            return window['fotoBotaoCupomNumerico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtCombo", {
        get: function () {
            return window['txtCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtLinhaCombo", {
        get: function () {
            return window['txtLinhaCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtColunaCombo", {
        get: function () {
            return window['txtColunaCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoFundoModal", {
        get: function () {
            return window['fotoFundoModal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoFundoModalConfirmacao", {
        get: function () {
            return window['fotoFundoModalConfirmacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "fotoFundoModalAdicionais", {
        get: function () {
            return window['fotoFundoModalAdicionais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "imgIngrediente", {
        get: function () {
            return window['imgIngrediente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "imgCombo", {
        get: function () {
            return window['imgCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "imgAcompanhamento", {
        get: function () {
            return window['imgAcompanhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "imgBuscar", {
        get: function () {
            return window['imgBuscar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "imgQrCode", {
        get: function () {
            return window['imgQrCode_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtTamanhoFonteTitulo", {
        get: function () {
            return window['txtTamanhoFonteTitulo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtAlturaBotaoVoltar", {
        get: function () {
            return window['txtAlturaBotaoVoltar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtLarguraBotaoVoltar", {
        get: function () {
            return window['txtLarguraBotaoVoltar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtAlturaBotaoAvancar", {
        get: function () {
            return window['txtAlturaBotaoAvancar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tela.prototype, "txtLarguraBotaoAvancar", {
        get: function () {
            return window['txtLarguraBotaoAvancar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Tela.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdTela) {
            adicionarEventoMoura(this.grdTela.Grid.SelecionouLinha, this.OnGrdSelecionouTela, this);
        }
        if (this.grdIngredientes) {
            adicionarEventoMoura(this.grdIngredientes.Validando, this.OnClickIncluirIngrediente, this);
        }
        if (this.grdAcompanhamentos) {
            adicionarEventoMoura(this.grdAcompanhamentos.Validando, this.OnClickIncluirAcompanhamento, this);
        }
        if (this.grdCombo) {
            adicionarEventoMoura(this.grdCombo.Validando, this.OnClickIncluirCombo, this);
        }
        if (this.cboTipo) {
            adicionarEventoMoura(this.cboTipo.SelectedItemChanged, this.LimparCamposTipo, this);
        }
    };
    C_Tela.prototype.OnGrdSelecionouTela = function (s, e) {
        this.EntityTela.Codigo = e.data.Codigo;
        this.PreencherEntidade(e.data.Codigo);
        this.RefreshAngular();
    };
    C_Tela.prototype.ValidarCampos = function () {
        debugger;
        if (this.CorTitulo.GetColor() == null || this.CorTitulo.GetColor() == "") {
            MostrarAlerta("Preencha o campo corretamente: Cor Título.");
            return false;
        }
        if (this.cboTipo.GetValue() != 13 && this.cboTipo.GetValue() != 1 && this.cboTipo.GetValue() != "6") {
            if (this.EntityTela.Altura_Titulo == undefined || this.EntityTela.Altura_Titulo == 0) {
                MostrarAlerta("Preencha o campo corretamente: Espaço em px correspondente ao título.");
                return false;
            }
            if (this.EntityTela.Tamanho_Fonte_Titulo == undefined || this.EntityTela.Tamanho_Fonte_Titulo == 0) {
                MostrarAlerta("Preencha o campo corretamente: Tamanho da Fonte do Título da Página.");
                return false;
            }
            if (this.EntityTela.Altura_Botao_Voltar == undefined || this.EntityTela.Altura_Botao_Voltar == 0) {
                MostrarAlerta("Preencha o campo corretamente: Altura em px do Botão Voltar.");
                return false;
            }
            if (this.EntityTela.Largura_Botao_Voltar == undefined || this.EntityTela.Largura_Botao_Voltar == 0) {
                MostrarAlerta("Preencha o campo corretamente: Largura em px do Botão Voltar.");
                return false;
            }
            if (this.EntityTela.Altura_Botao_Avancar == undefined || this.EntityTela.Altura_Botao_Avancar == 0) {
                MostrarAlerta("Preencha o campo corretamente: Altura em px do Botão Avançar.");
                return false;
            }
            if (this.EntityTela.Largura_Botao_Avancar == undefined || this.EntityTela.Largura_Botao_Avancar == 0) {
                MostrarAlerta("Preencha o campo corretamente: Largura em px do Botão Avançar.");
                return false;
            }
            if (this.cboTipo.GetValue() == "8" && this.cboTipo.GetValue() == "7" && this.cboTipo.GetValue() == "11") {
                if (this.CorBordaCampo.GetColor() == null || this.CorBordaCampo.GetColor() == "") {
                    MostrarAlerta("Preencha o campo corretamente: Cor da Borda do Campo.");
                    return false;
                }
            }
        }
        if (this.EntityTela.Tipo == 4) {
            if (this.CorFundo.GetColor() == null || this.CorFundo.GetColor() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cor Fundo Senha.");
                return false;
            }
            if (this.CorTextoSenha.GetColor() == null || this.CorTextoSenha.GetColor() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cor Botão Senha.");
                return false;
            }
            if (this.EntityTela.Altura_Botao_Senha == undefined || this.EntityTela.Altura_Botao_Senha == 0) {
                MostrarAlerta("Preencha o campo corretamente: Altura em px do Botão de Senha.");
                return false;
            }
            if (this.EntityTela.Largura_Botao_Senha == undefined || this.EntityTela.Largura_Botao_Senha == 0) {
                MostrarAlerta("Preencha o campo corretamente: Largura em px do Botão de Senha.");
                return false;
            }
            if (this.EntityTela.Tam_Fonte_Senha == undefined || this.EntityTela.Tam_Fonte_Senha == 0) {
                MostrarAlerta("Preencha o campo corretamente: Tamanho em px da Fonte do Botão de Senha.");
                return false;
            }
        }
        var foto = this.fotoTela.FormatImg();
        if (foto == undefined) {
            MostrarAlerta("Preencha o campo corretamente: Imagem de Fundo.");
            return false;
        }
        if (this.EntityTela.Tipo == 2 || this.EntityTela.Tipo == 3) {
            if (this.EntityTela.Selecao_Minima == undefined || this.EntityTela.Selecao_Minima.toString() == "") {
                MostrarAlerta("Preencha o campo corretamente: Seleção Mínima.");
                return false;
            }
            if (this.EntityTela.Selecao_Maxima == undefined || this.EntityTela.Selecao_Maxima.toString() == "") {
                MostrarAlerta("Preencha o campo corretamente: Seleção Máxima.");
                return false;
            }
            if (this.EntityTela.Linhas == undefined || this.EntityTela.Linhas.toString() == "") {
                MostrarAlerta("Preencha o campo corretamente: Linhas.");
                return false;
            }
            if (this.EntityTela.Colunas == undefined || this.EntityTela.Colunas.toString() == "") {
                MostrarAlerta("Preencha o campo corretamente: Colunas.");
                return false;
            }
            if (this.EntityTela.Altura_Img_Botao == undefined || this.EntityTela.Altura_Img_Botao == 0) {
                MostrarAlerta("Preencha o campo corretamente: Altura em px da Imagem do Botão.");
                return false;
            }
            if (this.EntityTela.Largura_Img_Botao == undefined || this.EntityTela.Largura_Img_Botao == 0) {
                MostrarAlerta("Preencha o campo corretamente: Largura em px da Imagem do Botão.");
                return false;
            }
            /* if (this.EntityTela.Texto_Rodape == undefined || this.EntityTela.Texto_Rodape == "") {
                 MostrarAlerta("Preencha o campo corretamente: Texto da Imagem de Rodapé.");
                 return false;
             } */
            if (this.CorBordaBotaoRodape.GetColor() == null || this.CorBordaBotaoRodape.GetColor() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cor Borda Botão Rodapé.");
                return false;
            }
            if (this.EntityTela.Tamanho_Fonte_Rodape == undefined || this.EntityTela.Tamanho_Fonte_Rodape == 0) {
                MostrarAlerta("Preencha o campo corretamente: Tamanho Fonte Rodapé.");
                return false;
            }
            if (this.CorSelecaoRodape.GetColor() == null || this.CorSelecaoRodape.GetColor() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cor da Seleção do Botão do Rodapé.");
                return false;
            }
            if (this.CorFundoBotaoRodape.GetColor() == null || this.CorFundoBotaoRodape.GetColor() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cor do Fundo do Botão do Rodapé.");
                return false;
            }
            if (this.CorLinhaImpar.GetColor() == null || this.CorLinhaImpar.GetColor() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cor da Linha Impar.");
                return false;
            }
            if (this.CorLinhaPar.GetColor() == null || this.CorLinhaPar.GetColor() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cor da Linha Par.");
                return false;
            }
            if (this.EntityTela.Fonte_Nome_Produto == undefined || this.EntityTela.Fonte_Nome_Produto == 0) {
                MostrarAlerta("Preencha o campo corretamente: Fonte Nome Produto.");
                return false;
            }
            if (this.EntityTela.Fonte_Preco_Produto == undefined || this.EntityTela.Fonte_Preco_Produto == 0) {
                MostrarAlerta("Preencha o campo corretamente: Fonte Preço Produto.");
                return false;
            }
            if (this.EntityTela.Largura_Pedido == undefined || this.EntityTela.Largura_Pedido == 0) {
                MostrarAlerta("Preencha o campo corretamente: Largura em px do local do Sanduíche.");
                return false;
            }
            if (this.EntityTela.Largura_Img_Pedido == undefined || this.EntityTela.Largura_Img_Pedido == 0) {
                MostrarAlerta("Preencha o campo corretamente: Largura em px da Img do local do Sanduíche.");
                return false;
            }
            if (this.CorNomeProduto.GetColor() == null || this.CorNomeProduto.GetColor() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cor Nome Produto.");
                return false;
            }
            if (this.CorPrecoProduto.GetColor() == null || this.CorPrecoProduto.GetColor() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cor Preço Produto.");
                return false;
            }
            var fotoRodape = this.fotoRodape.FormatImg();
            if (fotoRodape == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Imagem do Rodapé.");
                return false;
            }
            if (this.CorTotal.GetColor() == null || this.CorTotal.GetColor() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cor Texto Total.");
                return false;
            }
            if (this.EntityTela.Tamanho_Fonte_Total == undefined || this.EntityTela.Tamanho_Fonte_Total == 0) {
                MostrarAlerta("Preencha o campo corretamente: Tamanho da Fonto do Texto Total.");
                return false;
            }
            if (this.Ingredientes.length == 0 && this.EntityTela.Tipo == 2) {
                if (this.Ingrediente.Produto == undefined || this.Ingrediente.Produto == null) {
                    MostrarAlerta("Preencha o campo corretamente: Produto.");
                    return false;
                }
                if (this.Ingrediente.Linha == undefined || this.Ingrediente.Linha == "") {
                    MostrarAlerta("Preencha o campo corretamente: Linha do Produto.");
                    return false;
                }
                if (this.Ingrediente.Coluna == undefined || this.Ingrediente.Coluna == "") {
                    MostrarAlerta("Preencha o campo corretamente: Coluna do Produto.");
                    return false;
                }
            }
            if (this.Acompanhamentos.length == 0 && this.EntityTela.Tipo == 3) {
                if (this.Acompanhamento.Produto == undefined || this.Acompanhamento.Produto == null) {
                    MostrarAlerta("Preencha o campo corretamente: Produto.");
                    return false;
                }
                if (this.Acompanhamento.Linha == undefined || this.Acompanhamento.Linha == "") {
                    MostrarAlerta("Preencha o campo corretamente: Linha do Produto.");
                    return false;
                }
                if (this.Acompanhamento.Coluna == undefined || this.Acompanhamento.Coluna == "") {
                    MostrarAlerta("Preencha o campo corretamente: Coluna do Produto.");
                    return false;
                }
            }
        }
        if (this.EntityTela.Tipo == 9) {
            if (this.EntityTela.Altura_Img_Botao == undefined || this.EntityTela.Altura_Img_Botao == 0) {
                MostrarAlerta("Preencha o campo corretamente: Altura em px da Imagem do Botão.");
                return false;
            }
            if (this.EntityTela.Largura_Img_Botao == undefined || this.EntityTela.Largura_Img_Botao == 0) {
                MostrarAlerta("Preencha o campo corretamente: Largura em px da Imagem do Botão.");
                return false;
            }
            if (this.EntityTela.Fonte_Nome_Produto == undefined || this.EntityTela.Fonte_Nome_Produto == 0) {
                MostrarAlerta("Preencha o campo corretamente: Fonte Nome Produto.");
                return false;
            }
            if (this.EntityTela.Fonte_Produto_Modal_Adicionais == undefined || this.EntityTela.Fonte_Produto_Modal_Adicionais == 0) {
                MostrarAlerta("Preencha o campo corretamente: Fonte Nome Produto Modal Adicionais.");
                return false;
            }
            if (this.EntityTela.Fonte_Preco_Produto == undefined || this.EntityTela.Fonte_Preco_Produto == 0) {
                MostrarAlerta("Preencha o campo corretamente: Fonte Preço Produto.");
                return false;
            }
            if (this.EntityTela.Fonte_Preco_Modal_Adicionais == undefined || this.EntityTela.Fonte_Preco_Modal_Adicionais == 0) {
                MostrarAlerta("Preencha o campo corretamente: Fonte Preço Produto Modal Adicionais.");
                return false;
            }
            if (this.EntityTela.Fonte_Titulo_Modal_Adicionais == undefined || this.EntityTela.Fonte_Titulo_Modal_Adicionais == 0) {
                MostrarAlerta("Preencha o campo corretamente: Fonte Título do Modal Adicionais.");
                return false;
            }
            if (this.EntityTela.Fonte_Subtitulo1_Modal_Adicionais == undefined || this.EntityTela.Fonte_Subtitulo1_Modal_Adicionais == 0) {
                MostrarAlerta("Preencha o campo corretamente: Fonte Subtítulo 1 do Modal Adicionais.");
                return false;
            }
            if (this.EntityTela.Fonte_Subtitulo2_Modal_Adicionais == undefined || this.EntityTela.Fonte_Subtitulo2_Modal_Adicionais == 0) {
                MostrarAlerta("Preencha o campo corretamente: Fonte Subtítulo 2 do Modal Adicionais.");
                return false;
            }
            if (this.CorProdutoModalAdicionais.GetColor() == null || this.CorProdutoModalAdicionais.GetColor() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cor Título.");
                return false;
            }
            if (this.CorPrecoModalAdicionais.GetColor() == null || this.CorPrecoModalAdicionais.GetColor() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cor Título.");
                return false;
            }
            if (this.CorTituloModalAdicionais.GetColor() == null || this.CorTituloModalAdicionais.GetColor() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cor Título.");
                return false;
            }
            if (this.CorSubtitulo1ModalAdicionais.GetColor() == null || this.CorSubtitulo1ModalAdicionais.GetColor() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cor Título.");
                return false;
            }
            if (this.CorSubtitulo2ModalAdicionais.GetColor() == null || this.CorSubtitulo2ModalAdicionais.GetColor() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cor Título.");
                return false;
            }
            if (this.CorLinhaImpar.GetColor() == null || this.CorLinhaImpar.GetColor() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cor da Linha Impar.");
                return false;
            }
            if (this.CorLinhaPar.GetColor() == null || this.CorLinhaPar.GetColor() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cor da Linha Par.");
                return false;
            }
            if (this.Combos.length == 0) {
                if (this.Combo.Combo == undefined || this.Combo.Combo == null) {
                    MostrarAlerta("Preencha o campo corretamente: Combo.");
                    return false;
                }
                if (this.Combo.Linha == undefined || this.Combo.Linha == "") {
                    MostrarAlerta("Preencha o campo corretamente: Linha do Combo.");
                    return false;
                }
                if (this.Combo.Coluna == undefined || this.Combo.Coluna == "") {
                    MostrarAlerta("Preencha o campo corretamente: Coluna do Combo.");
                    return false;
                }
            }
        }
        if (this.EntityTela.Tipo == 8 || this.EntityTela.Tipo == 11 || this.EntityTela.Tipo == 7) {
            if (this.EntityTela.Zoom_Teclado == undefined || this.EntityTela.Zoom_Teclado == 0) {
                MostrarAlerta("Preencha o campo corretamente: Zoom do Teclado.");
                return false;
            }
        }
        if (this.EntityTela.Tipo == 13) {
            var imgIngrediente = this.imgIngrediente.FormatImg();
            if (imgIngrediente == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Botão Menu Ingredientes.");
                return false;
            }
            var imgCombo = this.imgCombo.FormatImg();
            if (imgCombo == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Botão Menu Combo.");
                return false;
            }
            var imgAcompanhamento = this.imgAcompanhamento.FormatImg();
            if (imgAcompanhamento == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Botão Menu Acompanhamento.");
                return false;
            }
            var imgBuscar = this.imgBuscar.FormatImg();
            if (imgBuscar == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Botão Menu Buscar Pedido.");
                return false;
            }
            var imgQrCode = this.imgQrCode.FormatImg();
            if (imgQrCode == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Botão Menu QRCode.");
                return false;
            }
            if (this.EntityTela.Altura_Botao_Menu == undefined || this.EntityTela.Altura_Botao_Menu == 0) {
                MostrarAlerta("Preencha o campo corretamente: Altura em px do Botão do Menu.");
                return false;
            }
            if (this.EntityTela.Margem_Topo_Menu == undefined || this.EntityTela.Margem_Topo_Menu == 0) {
                MostrarAlerta("Preencha o campo corretamente: Margem Topo do Menu.");
                return false;
            }
            /*if (this.EntityTela.Largura_Botao_Menu == undefined || this.EntityTela.Largura_Botao_Menu == 0) {
                MostrarAlerta("Preencha o campo corretamente: Largura em px do Botão do Menu.");
                return false;
            }*/
            if (this.EntityTela.Altura_Botao_Menu_Lateral == undefined || this.EntityTela.Altura_Botao_Menu_Lateral == 0) {
                MostrarAlerta("Preencha o campo corretamente: Altura em px do Botão do Menu Lateral.");
                return false;
            }
            if (this.EntityTela.Largura_Botao_Menu_Lateral == undefined || this.EntityTela.Largura_Botao_Menu_Lateral == 0) {
                MostrarAlerta("Preencha o campo corretamente: Largura em px do Botão do Menu Lateral.");
                return false;
            }
        }
        if (this.EntityTela.Tipo == 12) {
            if (this.EntityTela.Altura_Botao_Pagamento == undefined || this.EntityTela.Altura_Botao_Pagamento == 0) {
                MostrarAlerta("Preencha o campo corretamente: Altura em px do Botão do Pagamento.");
                return false;
            }
            /*if (this.EntityTela.Largura_Botao_Pagamento == undefined || this.EntityTela.Largura_Botao_Pagamento == 0) {
                MostrarAlerta("Preencha o campo corretamente: Largura em px do Botão do Pagamento.");
                return false;
            }*/
        }
    };
    C_Tela.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        debugger;
        var retorno = this.ValidarCampos();
        if (retorno == false) {
            return retorno;
        }
        if (CNum(this.cboTipo.GetValue()) == 1 && CNum(this.cboTipoInformativo.GetValue()) == 0) {
            MostrarAlerta("Preencha o campo corretamente: " + this.cboTipoInformativo.GetTextLabelControl());
            return false;
        }
        if (this.Ingredientes.length > 0) {
            this.EntityTela.TelaProdutos = this.Ingredientes;
        }
        else if (this.EntityTela.Tipo == 2 && this.Ingredientes.length == 0) {
            MostrarAlerta("Preencha o campo corretamente: Adicione um Ingrediente.");
            return false;
        }
        if (this.Acompanhamentos.length > 0) {
            this.EntityTela.TelaProdutos = this.Acompanhamentos;
        }
        else if (this.EntityTela.Tipo == 3 && this.Acompanhamentos.length == 0) {
            MostrarAlerta("Preencha o campo corretamente: Adicione um Acompanhamentos / Opcionais / Bebidas.");
            return false;
        }
        if (this.Combos.length > 0) {
            this.EntityTela.TelaCombos = this.Combos;
        }
        else if (this.EntityTela.Tipo == 9 && this.Combos.length == 0) {
            MostrarAlerta("Preencha o campo corretamente: Adicione um Combo.");
            return false;
        }
        if (this.EntityTela.Tipo != 13) {
            var fotoModal = this.fotoFundoModal.FormatImg();
            if (fotoModal == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Imagem de Fundo do Modal.");
                return false;
            }
        }
        if (this.EntityTela.Tipo == 9) {
            var fotoModalAdicionais = this.fotoFundoModalAdicionais.FormatImg();
            if (fotoModalAdicionais == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Imagem de Fundo do Modal Adicionais do Combo.");
                return false;
            }
            var fotoModalConfirmacao = this.fotoFundoModalConfirmacao.FormatImg();
            if (fotoModalConfirmacao == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Imagem de Fundo do Modal Confirmação do Combo.");
                return false;
            }
        }
        if (this.EntityTela.Tipo == 10) {
            var fotoBotaoCupom = this.fotoBotaoCupomNumerico.FormatImg();
            if (fotoBotaoCupom == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Imagem do Botão de Digitar Cupom.");
                return false;
            }
        }
        this.EntityTela.Img_Fundo_Modal = this.fotoFundoModal.OnConvertStringToByteArray();
        this.EntityTela.Img_Fundo_Modal_Confirmacao_Combo = this.fotoFundoModalConfirmacao.OnConvertStringToByteArray();
        this.EntityTela.Img_Fundo_Modal_Adicionais_Combo = this.fotoFundoModalAdicionais.OnConvertStringToByteArray();
        this.EntityTela.Foto_Botao_Cupom = this.fotoBotaoCupomNumerico.OnConvertStringToByteArray();
        this.EntityTela.Foto_Fundo = this.fotoTela.OnConvertStringToByteArray();
        this.EntityTela.Img_Rodape = this.fotoRodape.OnConvertStringToByteArray();
        this.EntityTela.Img_Botao_Cadastrar_Pedido = this.fotoBotaoCadastrarPedido.OnConvertStringToByteArray();
        this.EntityTela.Img_Botao_Agora = this.fotoBotaoAgora.OnConvertStringToByteArray();
        this.EntityTela.Img_Botao_Viagem = this.fotoBotaoViagem.OnConvertStringToByteArray();
        this.EntityTela.Img_Botao_Ok = this.fotoBotaoOk.OnConvertStringToByteArray();
        this.EntityTela.Img_Botao_Avancar = this.fotoBotaoAvancar.OnConvertStringToByteArray();
        this.EntityTela.Img_Botao_Voltar = this.fotoBotaoVoltar.OnConvertStringToByteArray();
        this.EntityTela.Img_Botao_Editar_Pedido = this.fotoBotaoEditarPedido.OnConvertStringToByteArray();
        this.EntityTela.Img_Botao_Dinheiro = this.fotoBotaoDinheiro.OnConvertStringToByteArray();
        this.EntityTela.Img_Botao_Credito = this.fotoBotaoCredito.OnConvertStringToByteArray();
        this.EntityTela.Img_Pedido_Efetuado = this.fotoPedidoEfetuado.OnConvertStringToByteArray();
        this.EntityTela.Img_Botao_Debito = this.fotoBotaoDebito.OnConvertStringToByteArray();
        this.EntityTela.Img_Botao_Vale = this.fotoBotaoVale.OnConvertStringToByteArray();
        this.EntityTela.Img_Botao_Caixa = this.fotoBotaoCaixa.OnConvertStringToByteArray();
        this.EntityTela.Cor_Fundo_Senha = this.CorFundo.GetColor();
        this.EntityTela.Cor_Texto_Senha = this.CorTextoSenha.GetColor();
        this.EntityTela.Cor_Titulo = this.CorTitulo.GetColor();
        this.EntityTela.Cor_Total = this.CorTotal.GetColor();
        this.EntityTela.Cor_Nome_Produto = this.CorNomeProduto.GetColor();
        this.EntityTela.Cor_Preco_Produto = this.CorPrecoProduto.GetColor();
        this.EntityTela.Cor_Borda_Campo = this.CorBordaCampo.GetColor();
        this.EntityTela.Cor_Borda_Rodape = this.CorBordaBotaoRodape.GetColor();
        this.EntityTela.Cor_Descricao_Rodape = this.CorDescricaoRodape.GetColor();
        this.EntityTela.Cor_Fundo_Botao_Rodape = this.CorFundoBotaoRodape.GetColor();
        this.EntityTela.Cor_Linha_Impar = this.CorLinhaImpar.GetColor();
        this.EntityTela.Cor_Linha_Par = this.CorLinhaPar.GetColor();
        this.EntityTela.Cor_Selecao_Rodape = this.CorSelecaoRodape.GetColor();
        this.EntityTela.Cor_Titulo_Modal_Adicionais = this.CorTituloModalAdicionais.GetColor();
        this.EntityTela.Cor_Nome_Produto_Modal_Adicionais = this.CorProdutoModalAdicionais.GetColor();
        this.EntityTela.Cor_Preco_Modal_Adicionais = this.CorPrecoModalAdicionais.GetColor();
        this.EntityTela.Cor_Subtitulo1_Modal_Adicionais = this.CorSubtitulo1ModalAdicionais.GetColor();
        this.EntityTela.Cor_Subtitulo2_Modal_Adicionais = this.CorSubtitulo2ModalAdicionais.GetColor();
        this.EntityTela.Botao_Menu_Ingrediente = this.imgIngrediente.OnConvertStringToByteArray();
        this.EntityTela.Botao_Menu_Combo = this.imgCombo.OnConvertStringToByteArray();
        this.EntityTela.Botao_Menu_Acompanhamento = this.imgAcompanhamento.OnConvertStringToByteArray();
        this.EntityTela.Botao_Menu_Buscar_Pedido = this.imgBuscar.OnConvertStringToByteArray();
        this.EntityTela.Botao_Menu_QRCode = this.imgQrCode.OnConvertStringToByteArray();
        this.RefreshAngular();
        return true;
    };
    C_Tela.prototype.OnGrdSelecionouTelaIngrediente = function (s, e) {
        this.Ingrediente.Linha = e.data.Linha;
        this.Ingrediente.Coluna = e.data.Coluna;
        this.Ingrediente.Produto = e.data.Produto;
        this.Ingrediente.Altura_Img_Botao = e.data.Altura_Img_Botao;
        this.Ingrediente.Largura_Img_Botao = e.data.Largura_Img_Botao;
        this.RefreshAngular();
    };
    C_Tela.prototype.OnGrdSelecionouTelaAcompanhamento = function (s, e) {
        this.Acompanhamento.Linha = e.data.Linha;
        this.Acompanhamento.Coluna = e.data.Coluna;
        this.Acompanhamento.Produto = e.data.Produto;
        this.Acompanhamento.Altura_Img_Botao = e.data.Altura_Img_Botao;
        this.Acompanhamento.Largura_Img_Botao = e.data.Largura_Img_Botao;
        this.RefreshAngular();
    };
    C_Tela.prototype.OnGrdSelecionouTelaCombo = function (s, e) {
        this.Combo.Linha = e.data.Linha;
        this.Combo.Coluna = e.data.Coluna;
        this.Combo.Combo = e.data.Combo;
        this.RefreshAngular();
    };
    C_Tela.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
        if (!this.GetScope().MudouTipo) {
            this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Tipo; }, this.GetScope().MudouTipo);
        }
    };
    C_Tela.prototype.CamposNaoVisiveis = function (tipo) {
        if (tipo == 2 || tipo == 3) {
            this.txtLinhas.Visible = true;
            this.txtColunas.Visible = true;
            this.txtMaxima.Visible = true;
            this.txtMinima.Visible = true;
            this.chkExibirCadastrarPedido.Visible = true;
            this.chkProximaTela.Visible = true;
            this.txtTextoRodape.Visible = true;
            this.CorDescricaoRodape.Visible = true;
            this.CorBordaBotaoRodape.Visible = true;
            this.txtTamanhoFonteRodape.Visible = true;
            this.CorSelecaoRodape.Visible = true;
            this.CorFundoBotaoRodape.Visible = true;
            this.CorLinhaImpar.Visible = true;
            this.CorLinhaPar.Visible = true;
            this.txtAlturaImgBotao.Visible = true;
            this.CorTotal.Visible = true;
            this.txtTamanhoFonteTotal.Visible = true;
            this.txtLarguraImgBotao.Visible = true;
            this.txtAlturaBotaoRodape.Visible = true;
            this.txtLarguraBotaoRodape.Visible = true;
            this.txtAlturaBotaoModal.Visible = true;
            this.txtLarguraBotaoModal.Visible = true;
            this.txtZoomTeclado.Visible = false;
            this.CorNomeProduto.Visible = true;
            this.CorPrecoProduto.Visible = true;
            this.txtLarguraImgPedido.Visible = true;
            this.txtLarguraPedido.Visible = true;
            this.txtFonteNomeProduto.Visible = true;
            this.txtFontePrecoProduto.Visible = true;
            this.txtAlturaBotaoModalAdicionais.Visible = false;
            this.txtLarguraBotaoModalAdicionais.Visible = false;
            this.CorPrecoModalAdicionais.Visible = false;
            this.CorProdutoModalAdicionais.Visible = false;
            this.CorTituloModalAdicionais.Visible = false;
            this.CorSubtitulo2ModalAdicionais.Visible = false;
            this.CorSubtitulo1ModalAdicionais.Visible = false;
            this.txtFontePrecoModalAdicionais.Visible = false;
            this.txtFonteProdutoModalAdicionais.Visible = false;
            this.txtFonteTituloModalAdicionais.Visible = false;
            this.txtFonteSubtitulo1ModalAdicionais.Visible = false;
            this.txtFonteSubtitulo2ModalAdicionais.Visible = false;
            this.txtAlturaBotaoSenha.Visible = false;
            this.txtLarguraBotaoSenha.Visible = false;
            this.txtTamFonteSenha.Visible = false;
            this.txtAlturaBotaoAvancar.Visible = true;
            this.txtLarguraBotaoAvancar.Visible = true;
            this.txtAlturaBotaoVoltar.Visible = true;
            this.txtLarguraBotaoVoltar.Visible = true;
            this.txtTamanhoFonteTitulo.Visible = true;
            this.txtAlturaTitulo.Visible = true;
            $("#fotoBotaoCupomNumerico_Panel").hide();
            $("#fotoPedidoEfetuado_Panel").hide();
            $("#fotoFundoModalConfirmacao_Panel").hide();
            $("#fotoFundoModalAdicionais_Panel").hide();
            $("#imgIngrediente_Panel").hide();
            $("#imgCombo_Panel").hide();
            $("#imgAcompanhamento_Panel").hide();
            $("#imgBuscar_Panel").hide();
            $("#imgQrCode_Panel").hide();
        }
        else {
            this.txtLinhas.Visible = false;
            this.txtColunas.Visible = false;
            this.txtMaxima.Visible = false;
            this.txtMinima.Visible = false;
            this.CorTotal.Visible = false;
            this.txtTamanhoFonteTotal.Visible = false;
            //this.CorEditarPedido.Visible = false;
            this.chkProximaTela.Visible = false;
            this.txtTextoRodape.Visible = false;
            this.CorDescricaoRodape.Visible = false;
            this.CorBordaBotaoRodape.Visible = false;
            this.txtTamanhoFonteRodape.Visible = false;
            this.CorSelecaoRodape.Visible = false;
            this.CorFundoBotaoRodape.Visible = false;
            this.CorLinhaImpar.Visible = false;
            this.CorLinhaPar.Visible = false;
            this.txtAlturaImgBotao.Visible = false;
            this.txtLarguraImgBotao.Visible = false;
            this.txtAlturaBotaoRodape.Visible = false;
            this.txtLarguraBotaoRodape.Visible = false;
            this.txtAlturaBotaoModal.Visible = false;
            this.txtLarguraBotaoModal.Visible = false;
            this.txtZoomTeclado.Visible = false;
            this.txtLarguraImgPedido.Visible = false;
            this.txtLarguraPedido.Visible = false;
            this.txtFonteNomeProduto.Visible = false;
            this.CorNomeProduto.Visible = false;
            this.CorPrecoProduto.Visible = false;
            this.txtFontePrecoProduto.Visible = false;
            this.txtAlturaBotaoModalAdicionais.Visible = false;
            this.txtLarguraBotaoModalAdicionais.Visible = false;
            this.CorPrecoModalAdicionais.Visible = false;
            this.CorProdutoModalAdicionais.Visible = false;
            this.CorTituloModalAdicionais.Visible = false;
            this.CorSubtitulo2ModalAdicionais.Visible = false;
            this.CorSubtitulo1ModalAdicionais.Visible = false;
            this.txtFontePrecoModalAdicionais.Visible = false;
            this.txtFonteProdutoModalAdicionais.Visible = false;
            this.txtFonteTituloModalAdicionais.Visible = false;
            this.txtFonteSubtitulo1ModalAdicionais.Visible = false;
            this.txtFonteSubtitulo2ModalAdicionais.Visible = false;
            this.txtAlturaBotaoSenha.Visible = false;
            this.txtLarguraBotaoSenha.Visible = false;
            this.txtLarguraBotaoPagamento.Visible = false;
            this.txtAlturaBotaoPagamento.Visible = false;
            // this.txtLarguraBotaoMenu.Visible = false;
            this.txtAlturaBotaoMenu.Visible = false;
            this.txtAlturaBotaoAvancar.Visible = false;
            this.txtLarguraBotaoAvancar.Visible = false;
            this.txtAlturaBotaoVoltar.Visible = false;
            this.txtLarguraBotaoVoltar.Visible = false;
            this.CorBordaCampo.Visible = false;
            this.txtTamanhoFonteTitulo.Visible = false;
            this.txtAlturaTitulo.Visible = false;
            this.txtTamFonteSenha.Visible = false;
            $("#fotoFundoModalConfirmacao_Panel").hide();
            $("#fotoPedidoEfetuado_Panel").hide();
            $("#fotoFundoModalAdicionais_Panel").hide();
            $("#fotoBotaoCupomNumerico_Panel").hide();
            $("#imgIngrediente_Panel").hide();
            $("#imgCombo_Panel").hide();
            $("#imgAcompanhamento_Panel").hide();
            $("#imgBuscar_Panel").hide();
            $("#imgQrCode_Panel").hide();
        }
        if (tipo == 9) {
            this.CorNomeProduto.Visible = true;
            this.CorPrecoProduto.Visible = true;
            this.txtAlturaImgBotao.Visible = true;
            this.txtLarguraImgBotao.Visible = true;
            this.txtAlturaBotaoRodape.Visible = true;
            this.txtAlturaBotaoModal.Visible = true;
            this.txtLarguraBotaoModal.Visible = true;
            this.txtLarguraBotaoRodape.Visible = true;
            this.txtZoomTeclado.Visible = false;
            this.txtFonteNomeProduto.Visible = true;
            this.txtFontePrecoProduto.Visible = true;
            this.txtAlturaBotaoModalAdicionais.Visible = true;
            this.txtLarguraBotaoModalAdicionais.Visible = true;
            this.CorPrecoModalAdicionais.Visible = true;
            this.CorProdutoModalAdicionais.Visible = true;
            this.CorTituloModalAdicionais.Visible = true;
            this.CorSubtitulo2ModalAdicionais.Visible = true;
            this.CorSubtitulo1ModalAdicionais.Visible = true;
            this.txtFontePrecoModalAdicionais.Visible = true;
            this.txtFonteProdutoModalAdicionais.Visible = true;
            this.txtFonteTituloModalAdicionais.Visible = true;
            this.txtFonteSubtitulo1ModalAdicionais.Visible = true;
            this.txtFonteSubtitulo2ModalAdicionais.Visible = true;
            this.txtAlturaBotaoSenha.Visible = false;
            this.txtLarguraBotaoSenha.Visible = false;
            this.txtTamFonteSenha.Visible = false;
            this.CorLinhaImpar.Visible = true;
            this.txtAlturaBotaoAvancar.Visible = true;
            this.txtLarguraBotaoAvancar.Visible = true;
            this.txtAlturaBotaoVoltar.Visible = true;
            this.txtLarguraBotaoVoltar.Visible = true;
            this.txtTamanhoFonteTitulo.Visible = true;
            this.txtAlturaTitulo.Visible = true;
            this.CorLinhaPar.Visible = true;
            $("#fotoFundoModalConfirmacao_Panel").show();
            $("#fotoFundoModalAdicionais_Panel").show();
            $("#fotoBotaoCupomNumerico_Panel").hide();
            $("#imgIngrediente_Panel").hide();
            $("#imgCombo_Panel").hide();
            $("#imgAcompanhamento_Panel").hide();
            $("#imgBuscar_Panel").hide();
            $("#imgQrCode_Panel").hide();
        }
        else if (tipo != 2 && tipo != 3) {
            this.txtAlturaImgBotao.Visible = false;
            this.txtLarguraImgBotao.Visible = false;
            this.txtAlturaBotaoRodape.Visible = false;
            this.txtLarguraBotaoRodape.Visible = false;
            this.txtZoomTeclado.Visible = false;
            this.txtAlturaBotaoModal.Visible = false;
            this.txtLarguraBotaoModal.Visible = false;
            this.txtFonteNomeProduto.Visible = false;
            this.txtFontePrecoProduto.Visible = false;
            this.CorPrecoModalAdicionais.Visible = false;
            this.CorProdutoModalAdicionais.Visible = false;
            this.CorTituloModalAdicionais.Visible = false;
            this.CorSubtitulo2ModalAdicionais.Visible = false;
            this.CorSubtitulo1ModalAdicionais.Visible = false;
            this.txtFontePrecoModalAdicionais.Visible = false;
            this.txtFonteProdutoModalAdicionais.Visible = false;
            this.txtFonteTituloModalAdicionais.Visible = false;
            this.txtFonteSubtitulo1ModalAdicionais.Visible = false;
            this.txtFonteSubtitulo2ModalAdicionais.Visible = false;
            this.txtAlturaBotaoSenha.Visible = false;
            this.txtLarguraBotaoSenha.Visible = false;
            this.CorLinhaImpar.Visible = false;
            this.CorLinhaPar.Visible = false;
            this.txtTamFonteSenha.Visible = false;
            $("#fotoFundoModalConfirmacao_Panel").hide();
            $("#fotoFundoModalAdicionais_Panel").hide();
            $("#fotoBotaoCupomNumerico_Panel").hide();
            $("#imgIngrediente_Panel").hide();
            $("#imgCombo_Panel").hide();
            $("#imgAcompanhamento_Panel").hide();
            $("#imgBuscar_Panel").hide();
            $("#imgQrCode_Panel").hide();
        }
        if (tipo == 5) {
            this.txtAlturaBotaoAvancar.Visible = true;
            this.txtLarguraBotaoAvancar.Visible = true;
            this.txtAlturaBotaoVoltar.Visible = true;
            this.txtLarguraBotaoVoltar.Visible = true;
            this.txtTamanhoFonteTitulo.Visible = true;
            this.txtAlturaTitulo.Visible = true;
        }
        if (tipo == 8 || tipo == 11 || tipo == 7) {
            this.txtZoomTeclado.Visible = true;
            this.CorBordaCampo.Visible = true;
            this.txtAlturaBotaoAvancar.Visible = true;
            this.txtLarguraBotaoAvancar.Visible = true;
            this.txtAlturaBotaoVoltar.Visible = true;
            this.txtLarguraBotaoVoltar.Visible = true;
            this.txtAlturaBotaoAvancar.Visible = true;
            this.txtTamanhoFonteTitulo.Visible = true;
            this.txtAlturaTitulo.Visible = true;
        }
        else {
            //this.txtLarguraBotaoMenu.Visible = false;
            this.txtAlturaBotaoMenu.Visible = false;
            this.txtMargemTopoMenu.Visible = false;
            this.txtAlturaBotaoMenuLateral.Visible = false;
            this.txtLarguraBotaoMenuLateral.Visible = false;
        }
        if (tipo == 4) {
            this.txtAlturaBotaoSenha.Visible = true;
            this.txtLarguraBotaoSenha.Visible = true;
            this.txtTamFonteSenha.Visible = true;
            this.txtAlturaBotaoAvancar.Visible = true;
            this.txtLarguraBotaoAvancar.Visible = true;
            this.txtAlturaBotaoVoltar.Visible = true;
            this.txtLarguraBotaoVoltar.Visible = true;
            this.txtTamanhoFonteTitulo.Visible = true;
            this.txtAlturaTitulo.Visible = true;
            this.txtAlturaBotaoAvancar.Visible = true;
            this.txtLarguraBotaoAvancar.Visible = true;
            this.txtAlturaBotaoVoltar.Visible = true;
            this.txtLarguraBotaoVoltar.Visible = true;
            this.txtAlturaBotaoAvancar.Visible = true;
            this.txtTamanhoFonteTitulo.Visible = true;
            this.txtAlturaTitulo.Visible = true;
        }
        if (tipo == 12) {
            this.txtAlturaBotaoPagamento.Visible = true;
            this.txtLarguraBotaoPagamento.Visible = true;
            $("#fotoPedidoEfetuado_Panel").show();
            this.txtAlturaBotaoAvancar.Visible = true;
            this.txtLarguraBotaoAvancar.Visible = true;
            this.txtAlturaBotaoVoltar.Visible = true;
            this.txtLarguraBotaoVoltar.Visible = true;
            this.txtTamanhoFonteTitulo.Visible = true;
            this.txtAlturaTitulo.Visible = true;
        }
        if (tipo == 10) {
            $("#fotoBotaoCupomNumerico_Panel").show();
            this.txtAlturaBotaoAvancar.Visible = true;
            this.txtLarguraBotaoAvancar.Visible = true;
            this.txtAlturaBotaoVoltar.Visible = true;
            this.txtLarguraBotaoVoltar.Visible = true;
            this.txtTamanhoFonteTitulo.Visible = true;
            this.txtAlturaTitulo.Visible = true;
        }
        if (tipo == 13) {
            $("#imgIngrediente_Panel").show();
            $("#imgCombo_Panel").show();
            $("#imgAcompanhamento_Panel").show();
            $("#imgBuscar_Panel").show();
            $("#imgQrCode_Panel").show();
            this.txtAlturaBotaoMenu.Visible = true;
            //this.txtLarguraBotaoMenu.Visible = true;
            this.txtAlturaBotaoMenuLateral.Visible = true;
            this.txtLarguraBotaoMenuLateral.Visible = true;
            this.txtMargemTopoMenu.Visible = true;
            this.txtAlturaBotaoAvancar.Visible = false;
            this.txtLarguraBotaoAvancar.Visible = false;
            this.txtAlturaBotaoVoltar.Visible = false;
            this.txtLarguraBotaoVoltar.Visible = false;
            this.txtAlturaBotaoAvancar.Visible = false;
            this.CorBordaCampo.Visible = false;
            this.txtTamanhoFonteTitulo.Visible = false;
            this.txtAlturaTitulo.Visible = false;
        }
        else {
            // this.txtLarguraBotaoMenu.Visible = false;
            this.txtAlturaBotaoMenu.Visible = false;
            this.txtMargemTopoMenu.Visible = false;
            this.txtAlturaBotaoMenuLateral.Visible = false;
            this.txtLarguraBotaoMenuLateral.Visible = false;
        }
        this.cboTipoInformativo.Visible = (CNum(this.cboTipo.GetValue()) == 1);
    };
    C_Tela.prototype.MudouTipo = function (newValue, oldValue) {
        if (this.cboTipo.GetValue() == "1" || this.cboTipo.GetValue() == "6" || this.cboTipo.GetSelectedIndex() == -1) {
            this.tab.AlterarVisibleAba("AbaIngrediente", false);
            this.tab.AlterarVisibleAba("AbaAcompanhamento", false);
            this.tab.AlterarVisibleAba("AbaImgRodape", false);
            this.tab.AlterarVisibleAba("AbaSenha", false);
            this.tab.AlterarVisibleAba("AbaPedido", false);
            this.tab.AlterarVisibleAba("AbaPagamento", false);
            this.tab.AlterarVisibleAba("AbaCombo", false);
            this.tab.AlterarVisibleAba("AbaMenu", false);
            this.CamposNaoVisiveis(0);
        }
        else if (this.cboTipo.GetValue() == "2") {
            this.tab.AlterarVisibleAba("AbaIngrediente", true);
            this.tab.AlterarVisibleAba("AbaAcompanhamento", false);
            this.tab.AlterarVisibleAba("AbaSenha", false);
            this.tab.AlterarVisibleAba("AbaPedido", false);
            this.tab.AlterarVisibleAba("AbaImgRodape", true);
            this.tab.AlterarVisibleAba("AbaPagamento", false);
            this.tab.AlterarVisibleAba("AbaCombo", false);
            this.tab.AlterarVisibleAba("AbaMenu", false);
            this.CamposNaoVisiveis(2);
        }
        else if (this.cboTipo.GetValue() == "3") {
            this.tab.AlterarVisibleAba("AbaIngrediente", false);
            this.tab.AlterarVisibleAba("AbaAcompanhamento", true);
            this.tab.AlterarVisibleAba("AbaSenha", false);
            this.tab.AlterarVisibleAba("AbaPedido", false);
            this.tab.AlterarVisibleAba("AbaImgRodape", true);
            this.tab.AlterarVisibleAba("AbaPagamento", false);
            this.tab.AlterarVisibleAba("AbaCombo", false);
            this.tab.AlterarVisibleAba("AbaMenu", false);
            this.CamposNaoVisiveis(3);
        }
        else if (this.cboTipo.GetValue() == "4") {
            this.tab.AlterarVisibleAba("AbaIngrediente", false);
            this.tab.AlterarVisibleAba("AbaAcompanhamento", false);
            this.tab.AlterarVisibleAba("AbaSenha", true);
            this.tab.AlterarVisibleAba("AbaPedido", false);
            this.tab.AlterarVisibleAba("AbaImgRodape", false);
            this.tab.AlterarVisibleAba("AbaPagamento", false);
            this.tab.AlterarVisibleAba("AbaCombo", false);
            this.tab.AlterarVisibleAba("AbaMenu", false);
            this.CamposNaoVisiveis(4);
        }
        else if (this.cboTipo.GetValue() == "5") {
            this.tab.AlterarVisibleAba("AbaIngrediente", false);
            this.tab.AlterarVisibleAba("AbaAcompanhamento", false);
            this.tab.AlterarVisibleAba("AbaSenha", false);
            this.tab.AlterarVisibleAba("AbaPedido", true);
            this.tab.AlterarVisibleAba("AbaImgRodape", false);
            this.tab.AlterarVisibleAba("AbaPagamento", false);
            this.tab.AlterarVisibleAba("AbaCombo", false);
            this.tab.AlterarVisibleAba("AbaMenu", false);
            this.CamposNaoVisiveis(5);
        }
        else if (this.cboTipo.GetValue() == "9") {
            this.tab.AlterarVisibleAba("AbaIngrediente", false);
            this.tab.AlterarVisibleAba("AbaAcompanhamento", false);
            this.tab.AlterarVisibleAba("AbaImgRodape", false);
            this.tab.AlterarVisibleAba("AbaSenha", false);
            this.tab.AlterarVisibleAba("AbaPedido", false);
            this.tab.AlterarVisibleAba("AbaPagamento", false);
            this.tab.AlterarVisibleAba("AbaCombo", true);
            this.tab.AlterarVisibleAba("AbaMenu", false);
            this.CamposNaoVisiveis(9);
        }
        else if (this.cboTipo.GetValue() == "12") {
            this.tab.AlterarVisibleAba("AbaIngrediente", false);
            this.tab.AlterarVisibleAba("AbaAcompanhamento", false);
            this.tab.AlterarVisibleAba("AbaImgRodape", false);
            this.tab.AlterarVisibleAba("AbaSenha", false);
            this.tab.AlterarVisibleAba("AbaPedido", false);
            this.tab.AlterarVisibleAba("AbaPagamento", true);
            this.tab.AlterarVisibleAba("AbaCombo", false);
            this.tab.AlterarVisibleAba("AbaMenu", false);
            this.CamposNaoVisiveis(12);
        }
        else if (this.cboTipo.GetValue() == "13") {
            this.tab.AlterarVisibleAba("AbaIngrediente", false);
            this.tab.AlterarVisibleAba("AbaAcompanhamento", false);
            this.tab.AlterarVisibleAba("AbaImgRodape", false);
            this.tab.AlterarVisibleAba("AbaSenha", false);
            this.tab.AlterarVisibleAba("AbaPedido", false);
            this.tab.AlterarVisibleAba("AbaPagamento", false);
            this.tab.AlterarVisibleAba("AbaCombo", false);
            this.tab.AlterarVisibleAba("AbaMenu", true);
            this.CamposNaoVisiveis(13);
        }
        else if (this.cboTipo.GetValue() == "8" || this.cboTipo.GetValue() == "11" || this.cboTipo.GetValue() == "7" || this.cboTipo.GetValue() == "10") {
            this.tab.AlterarVisibleAba("AbaIngrediente", false);
            this.tab.AlterarVisibleAba("AbaAcompanhamento", false);
            this.tab.AlterarVisibleAba("AbaSenha", false);
            this.tab.AlterarVisibleAba("AbaPedido", false);
            this.tab.AlterarVisibleAba("AbaImgRodape", false);
            this.tab.AlterarVisibleAba("AbaPagamento", false);
            this.tab.AlterarVisibleAba("AbaCombo", false);
            this.tab.AlterarVisibleAba("AbaMenu", false);
            if (this.cboTipo.GetValue() == "8") {
                this.CamposNaoVisiveis(8);
            }
            if (this.cboTipo.GetValue() == "11") {
                this.CamposNaoVisiveis(11);
            }
            if (this.cboTipo.GetValue() == "7") {
                this.CamposNaoVisiveis(7);
            }
            if (this.cboTipo.GetValue() == "10") {
                this.CamposNaoVisiveis(10);
            }
        }
        this.PreencherGrade();
    };
    C_Tela.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGrade();
        this.CamposNaoVisiveis(0);
        this.fotoTela.Limpar();
        this.fotoRodape.Limpar();
        this.CorTitulo.Limpar();
        this.CorTotal.Limpar();
        this.CorPrecoProduto.Limpar();
        this.CorNomeProduto.Limpar();
        this.CorTituloModalAdicionais.Limpar();
        this.CorSubtitulo1ModalAdicionais.Limpar();
        this.CorSubtitulo2ModalAdicionais.Limpar();
        this.CorPrecoModalAdicionais.Limpar();
        this.CorProdutoModalAdicionais.Limpar();
        this.CorBordaBotaoRodape.Limpar();
        this.CorBordaCampo.Limpar();
        this.CorDescricaoRodape.Limpar();
        this.CorFundoBotaoRodape.Limpar();
        this.CorLinhaImpar.Limpar();
        this.CorLinhaPar.Limpar();
        this.CorSelecaoRodape.Limpar();
        this.fotoBotaoAgora.Limpar();
        this.fotoBotaoViagem.Limpar();
        this.fotoFundoModal.Limpar();
        this.fotoBotaoOk.Limpar();
        this.fotoBotaoCadastrarPedido.Limpar();
        this.fotoBotaoAvancar.Limpar();
        this.fotoBotaoCupomNumerico.Limpar();
        this.fotoBotaoVoltar.Limpar();
        this.fotoBotaoEditarPedido.Limpar();
        this.fotoBotaoDinheiro.Limpar();
        this.fotoBotaoCredito.Limpar();
        this.fotoPedidoEfetuado.Limpar();
        this.fotoBotaoDebito.Limpar();
        this.fotoBotaoVale.Limpar();
        this.fotoBotaoCaixa.Limpar();
        this.imgIngrediente.Limpar();
        this.imgAcompanhamento.Limpar();
        this.imgCombo.Limpar();
        this.imgBuscar.Limpar();
        this.imgQrCode.Limpar();
    };
    C_Tela.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Tela.prototype.PreencherGrade = function () {
        try {
            var retorno = this.ExecutarFuncaoServerSideSynch("GetFoodTela", {});
            this.Telas = retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Tela.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        var parametros = {
            codTela: this.EntityTela.Codigo
        };
        var retornoIngredientes = this.ExecutarFuncaoServerSideSynch("GetIngredientes", parametros);
        this.Ingredientes = retornoIngredientes;
        var parametrosAcompanhamento = {
            codTela: this.EntityTela.Codigo
        };
        var parametrosCombo = {
            codTela: this.EntityTela.Codigo
        };
        var retornoAcompanhamentos = this.ExecutarFuncaoServerSideSynch("GetAcompanhamentos", parametrosAcompanhamento);
        this.Acompanhamentos = retornoAcompanhamentos;
        var retornoCombos = this.ExecutarFuncaoServerSideSynch("GetCombos", parametrosCombo);
        this.Combos = retornoCombos;
        if (Entidade.Img_Fundo_Modal != null) {
            this.fotoFundoModal.Img.src = this.fotoFundoModal.OnConvertByteArrayToString(Entidade.Img_Fundo_Modal);
        }
        if (Entidade.Img_Fundo_Modal_Confirmacao_Combo != null) {
            this.fotoFundoModalConfirmacao.Img.src = this.fotoFundoModalConfirmacao.OnConvertByteArrayToString(Entidade.Img_Fundo_Modal_Confirmacao_Combo);
        }
        if (Entidade.Foto_Botao_Cupom != null) {
            this.fotoBotaoCupomNumerico.Img.src = this.fotoBotaoCupomNumerico.OnConvertByteArrayToString(Entidade.Foto_Botao_Cupom);
        }
        if (Entidade.Img_Fundo_Modal_Adicionais_Combo != null) {
            this.fotoFundoModalAdicionais.Img.src = this.fotoFundoModalAdicionais.OnConvertByteArrayToString(Entidade.Img_Fundo_Modal_Adicionais_Combo);
        }
        if (Entidade.Botao_Menu_Ingrediente != null) {
            this.imgIngrediente.Img.src = this.imgIngrediente.OnConvertByteArrayToString(Entidade.Botao_Menu_Ingrediente);
        }
        if (Entidade.Botao_Menu_Combo != null) {
            this.imgCombo.Img.src = this.imgCombo.OnConvertByteArrayToString(Entidade.Botao_Menu_Combo);
        }
        if (Entidade.Botao_Menu_Acompanhamento != null) {
            this.imgAcompanhamento.Img.src = this.imgAcompanhamento.OnConvertByteArrayToString(Entidade.Botao_Menu_Acompanhamento);
        }
        if (Entidade.Botao_Menu_Buscar_Pedido != null) {
            this.imgBuscar.Img.src = this.imgBuscar.OnConvertByteArrayToString(Entidade.Botao_Menu_Buscar_Pedido);
        }
        if (Entidade.Botao_Menu_QRCode != null) {
            this.imgQrCode.Img.src = this.imgQrCode.OnConvertByteArrayToString(Entidade.Botao_Menu_QRCode);
        }
        this.fotoTela.Img.src = this.fotoTela.OnConvertByteArrayToString(Entidade.Foto_Fundo);
        this.fotoRodape.Img.src = this.fotoRodape.OnConvertByteArrayToString(Entidade.Img_Rodape);
        this.CorTextoSenha.SetColor(Entidade.Cor_Texto_Senha);
        this.CorFundo.SetColor(Entidade.Cor_Fundo_Senha);
        this.CorTitulo.SetColor(Entidade.Cor_Titulo);
        this.CorTotal.SetColor(Entidade.Cor_Total);
        this.CorDescricaoRodape.SetColor(Entidade.Cor_Descricao_Rodape);
        this.CorLinhaPar.SetColor(Entidade.Cor_Linha_Par);
        this.CorLinhaImpar.SetColor(Entidade.Cor_Linha_Impar);
        this.CorFundoBotaoRodape.SetColor(Entidade.Cor_Fundo_Botao_Rodape);
        this.CorBordaBotaoRodape.SetColor(Entidade.Cor_Borda_Rodape);
        this.CorBordaCampo.SetColor(Entidade.Cor_Borda_Campo);
        this.CorSelecaoRodape.SetColor(Entidade.Cor_Selecao_Rodape);
        this.CorNomeProduto.SetColor(Entidade.Cor_Nome_Produto);
        this.CorPrecoProduto.SetColor(Entidade.Cor_Preco_Produto);
        this.CorTituloModalAdicionais.SetColor(Entidade.Cor_Titulo_Modal_Adicionais);
        this.CorSubtitulo2ModalAdicionais.SetColor(Entidade.Cor_Subtitulo2_Modal_Adicionais);
        this.CorSubtitulo1ModalAdicionais.SetColor(Entidade.Cor_Subtitulo1_Modal_Adicionais);
        this.CorProdutoModalAdicionais.SetColor(Entidade.Cor_Nome_Produto_Modal_Adicionais);
        this.CorPrecoModalAdicionais.SetColor(Entidade.Cor_Preco_Modal_Adicionais);
        this.fotoBotaoAgora.Img.src = this.fotoBotaoAgora.OnConvertByteArrayToString(Entidade.Img_Botao_Agora);
        this.fotoBotaoViagem.Img.src = this.fotoBotaoViagem.OnConvertByteArrayToString(Entidade.Img_Botao_Viagem);
        this.fotoBotaoOk.Img.src = this.fotoBotaoOk.OnConvertByteArrayToString(Entidade.Img_Botao_Ok);
        this.fotoBotaoCadastrarPedido.Img.src = this.fotoBotaoCadastrarPedido.OnConvertByteArrayToString(Entidade.Img_Botao_Cadastrar_Pedido);
        this.fotoBotaoAvancar.Img.src = this.fotoBotaoAvancar.OnConvertByteArrayToString(Entidade.Img_Botao_Avancar);
        this.fotoBotaoVoltar.Img.src = this.fotoBotaoVoltar.OnConvertByteArrayToString(Entidade.Img_Botao_Voltar);
        this.fotoBotaoEditarPedido.Img.src = this.fotoBotaoEditarPedido.OnConvertByteArrayToString(Entidade.Img_Botao_Editar_Pedido);
        this.fotoBotaoDinheiro.Img.src = this.fotoBotaoDinheiro.OnConvertByteArrayToString(Entidade.Img_Botao_Dinheiro);
        this.fotoBotaoCredito.Img.src = this.fotoBotaoCredito.OnConvertByteArrayToString(Entidade.Img_Botao_Credito);
        this.fotoPedidoEfetuado.Img.src = this.fotoPedidoEfetuado.OnConvertByteArrayToString(Entidade.Img_Pedido_Efetuado);
        this.fotoBotaoDebito.Img.src = this.fotoBotaoDebito.OnConvertByteArrayToString(Entidade.Img_Botao_Debito);
        this.fotoBotaoVale.Img.src = this.fotoBotaoVale.OnConvertByteArrayToString(Entidade.Img_Botao_Vale);
        this.fotoBotaoCaixa.Img.src = this.fotoBotaoCaixa.OnConvertByteArrayToString(Entidade.Img_Botao_Caixa);
        this.imgIngrediente.Img.src = this.imgIngrediente.OnConvertByteArrayToString(Entidade.Botao_Menu_Ingrediente);
        this.imgCombo.Img.src = this.imgCombo.OnConvertByteArrayToString(Entidade.Botao_Menu_Combo);
        this.imgAcompanhamento.Img.src = this.imgAcompanhamento.OnConvertByteArrayToString(Entidade.Botao_Menu_Acompanhamento);
        this.imgBuscar.Img.src = this.imgBuscar.OnConvertByteArrayToString(Entidade.Botao_Menu_Buscar_Pedido);
        this.imgQrCode.Img.src = this.imgQrCode.OnConvertByteArrayToString(Entidade.Botao_Menu_QRCode);
        this.RefreshAngular();
    };
    C_Tela.prototype.OnClickIncluirIngrediente = function (s, e) {
        try {
            if (this.EntityTela.Linhas == 0 && this.EntityTela.Linhas == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Linhas.");
                return false;
            }
            if (this.EntityTela.Colunas == 0 && this.EntityTela.Colunas == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Colunas");
                return false;
            }
            for (var x = 0; x < this.Ingredientes.length; x++) {
                if (this.txtProdutoIngrediente.GetText() == this.Ingredientes[x].Produto) {
                    MostrarAlerta("Este produto já foi inserido");
                    e.cancelar = true;
                    return false;
                }
                if (this.txtLinhaIngrediente.GetText() == this.Ingredientes[x].Linha && this.txtColunaIngrediente.GetText() == this.Ingredientes[x].Coluna) {
                    MostrarAlerta("Esta linha e coluna já foi inserido");
                    e.cancelar = true;
                    return false;
                }
            }
            if (e.index < 0) {
                e.item.Codigo = 0;
                var maiorContador;
                if (this.EntityTela.Codigo == null) {
                    this.EntityTela.Codigo = 0;
                }
                var parametros = {
                    codTela: this.EntityTela.Codigo
                };
                var count = this.Telas.length;
                if (e.item.Codigo == 0) {
                    var retorno = this.ExecutarFuncaoServerSideSynch("GetMaximoProduto", parametros);
                    maiorContador = retorno.Max("Codigo") + 1;
                    if (this.Telas.length == 0) {
                        e.item.Codigo = maiorContador;
                    }
                    else {
                        e.item.Codigo = (this.Telas[count - 1].Codigo + 1);
                    }
                }
                e.item.Produto_Nome = this.txtProdutoIngrediente.GetResultado();
                e.item.Produto = this.txtProdutoIngrediente.GetText();
                e.item.Tela = this.EntityTela.Codigo;
                e.item.Linha = this.txtLinhaIngrediente.GetText();
                e.item.Coluna = this.txtColunaIngrediente.GetText();
                this.Ingrediente = {};
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Tela.prototype.OnClickIncluirAcompanhamento = function (s, e) {
        try {
            if (this.EntityTela.Linhas == 0 && this.EntityTela.Linhas == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Linhas.");
                return false;
            }
            if (this.EntityTela.Colunas == 0 && this.EntityTela.Colunas == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Colunas");
                return false;
            }
            for (var x = 0; x < this.Acompanhamentos.length; x++) {
                if (this.txtProdutoAcompanhamento.GetText() == this.Acompanhamentos[x].Produto) {
                    MostrarAlerta("Este produto já foi inserido");
                    e.cancelar = true;
                    return false;
                }
                if (this.txtLinhaAcompanhamento.GetText() == this.Acompanhamentos[x].Linha && this.txtColunaAcompanhamento.GetText() == this.Acompanhamentos[x].Coluna) {
                    MostrarAlerta("Esta linha e coluna já foi inserido");
                    e.cancelar = true;
                    return false;
                }
            }
            if (e.index < 0) {
                e.item.Codigo = 0;
                var maiorContador;
                if (this.EntityTela.Codigo == null) {
                    this.EntityTela.Codigo = 0;
                }
                var parametros = {
                    codTela: this.EntityTela.Codigo
                };
                var count = this.Telas.length;
                if (e.item.Codigo == 0) {
                    var retorno = this.ExecutarFuncaoServerSideSynch("GetMaximoProduto", parametros);
                    maiorContador = retorno.Max("Codigo") + 1;
                    if (this.Telas.length == 0) {
                        e.item.Codigo = maiorContador;
                    }
                    else {
                        e.item.Codigo = (this.Telas[count - 1].Codigo + 1);
                    }
                }
                e.item.Produto_Nome = this.txtProdutoAcompanhamento.GetResultado();
                e.item.Produto = this.txtProdutoAcompanhamento.GetText();
                e.item.Tela = this.EntityTela.Codigo;
                e.item.Linha = this.txtLinhaAcompanhamento.GetText();
                e.item.Coluna = this.txtColunaAcompanhamento.GetText();
                this.Acompanhamento = {};
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Tela.prototype.OnClickIncluirCombo = function (s, e) {
        try {
            debugger;
            if (this.Combo.Combo == 0 && this.Combo.Combo == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Combo.");
                return false;
            }
            if (this.Combo.Linha == 0 && this.Combo.Linha == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Linhas.");
                return false;
            }
            if (this.Combo.Coluna == 0 && this.Combo.Coluna == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Colunas");
                return false;
            }
            for (var x = 0; x < this.Combos.length; x++) {
                if (this.txtCombo.GetText() == this.Combos[x].Combo) {
                    MostrarAlerta("Este produto já foi inserido");
                    e.cancelar = true;
                    return false;
                }
                if (this.txtLinhaCombo.GetText() == this.Combos[x].Linha && this.txtColunaCombo.GetText() == this.Combos[x].Coluna) {
                    MostrarAlerta("Esta linha e coluna já foi inserido");
                    e.cancelar = true;
                    return false;
                }
            }
            if (e.index < 0) {
                e.item.Codigo = 0;
                var maiorContador;
                if (this.EntityTela.Codigo == null) {
                    this.EntityTela.Codigo = 0;
                }
                var parametros = {
                    codTela: this.EntityTela.Codigo
                };
                var count = this.Telas.length;
                if (e.item.Codigo == 0) {
                    var retorno = this.ExecutarFuncaoServerSideSynch("GetMaximoCombo", parametros);
                    maiorContador = retorno.Max("Codigo") + 1;
                    if (this.Telas.length == 0) {
                        e.item.Codigo = maiorContador;
                    }
                    else {
                        e.item.Codigo = (this.Telas[count - 1].Codigo + 1);
                    }
                }
                e.item.Combo_Descricao = this.txtCombo.GetResultado();
                e.item.Combo = this.txtCombo.GetText();
                e.item.Tela = this.EntityTela.Codigo;
                e.item.Linha = this.txtLinhaCombo.GetText();
                e.item.Coluna = this.txtColunaCombo.GetText();
                this.Combo = {};
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Tela.prototype.LimparCamposTipo = function (tipo) {
        this.EntityTela.TelaProdutos = [];
        this.Acompanhamentos = [];
        this.Ingredientes = [];
        this.Combos = [];
        this.txtColunas.Limpar();
        this.txtLinhas.Limpar();
        this.txtMaxima.Limpar();
        this.txtMinima.Limpar();
        this.Telas = [];
        this.txtProdutoIngrediente.Limpar();
        this.txtLinhaIngrediente.Limpar();
        this.txtColunaIngrediente.Limpar();
        this.txtProdutoAcompanhamento.Limpar();
        this.txtLinhaAcompanhamento.Limpar();
        this.txtColunaAcompanhamento.Limpar();
        this.cboTipoInformativo.LimparSelecao();
        this.CorTextoSenha.Limpar();
        this.CorFundo.Limpar();
        this.txtAlturaImgBotao.Limpar();
        this.txtLarguraImgBotao.Limpar();
        this.txtAlturaBotaoRodape.Limpar();
        this.txtLarguraBotaoRodape.Limpar();
        this.txtAlturaBotaoModal.Limpar();
        this.txtAlturaBotaoModal.Limpar();
        this.CorPrecoProduto.Limpar();
        this.CorNomeProduto.Limpar();
        this.CorProdutoModalAdicionais.Limpar();
        this.CorPrecoModalAdicionais.Limpar();
        this.CorTituloModalAdicionais.Limpar();
        this.CorSubtitulo2ModalAdicionais.Limpar();
        this.txtLarguraBotaoPagamento.Limpar();
        this.txtAlturaBotaoPagamento.Limpar();
        //this.txtLarguraBotaoMenu.Limpar();
        this.txtAlturaBotaoMenu.Limpar();
        this.txtLarguraBotaoMenuLateral.Limpar();
        this.txtAlturaBotaoMenuLateral.Limpar();
        this.CorBordaBotaoRodape.Limpar();
        this.txtTamanhoFonteRodape.Limpar();
        this.CorBordaCampo.Limpar();
        this.CorDescricaoRodape.Limpar();
        this.CorFundoBotaoRodape.Limpar();
        this.CorLinhaImpar.Limpar();
        this.CorLinhaPar.Limpar();
        this.CorSelecaoRodape.Limpar();
        this.txtMargemTopoMenu.Limpar();
        this.CorSubtitulo1ModalAdicionais.Limpar();
        this.txtZoomTeclado.Limpar();
        this.fotoRodape.Limpar();
        this.txtTextoRodape.Limpar();
        this.chkExibirCadastrarPedido.Check.checked = false;
        this.chkExibirBotaoAgora.Check.checked = false;
        this.chkExibirBotaoOk.Check.checked = false;
        this.chkExibirBotaoViagem.Check.checked = false;
        this.chkProximaTela.Check.checked = false;
        this.EntityTela.Cor_Texto_Senha = {};
        this.EntityTela.Cor_Fundo_Senha = null;
        this.EntityTela.Colunas = null;
        this.EntityTela.Linhas = null;
        this.EntityTela.Selecao_Maxima = null;
        this.EntityTela.Selecao_Minima = null;
        this.EntityTela.Exibir_Botao_Agora = null;
        this.EntityTela.Exibir_Botao_Ok = null;
        this.EntityTela.Exibir_Botao_Viagem = null;
        this.EntityTela.Texto_Rodape = null;
        this.EntityTela.Img_Rodape = [];
        this.EntityTela.Altura_Img_Botao = null;
        this.EntityTela.Largura_Img_Botao = null;
        this.EntityTela.TelaCombos = [];
        this.cboTipoInformativo.LimparSelecao();
        this.EntityTela.Tipo_Informativo = 0;
        this.fotoTela.Limpar();
        this.fotoRodape.Limpar();
        this.fotoBotaoCupomNumerico.Limpar();
        this.EntityTela.Foto_Botao_Cupom = null;
        this.EntityTela.Botao_Menu_Ingrediente = null;
        this.EntityTela.Botao_Menu_Combo = null;
        this.EntityTela.Botao_Menu_Acompanhamento = null;
        this.EntityTela.Botao_Menu_Buscar_Pedido = null;
        this.EntityTela.Botao_Menu_QRCode = null;
        this.imgIngrediente.Limpar();
        this.imgAcompanhamento.Limpar();
        this.imgCombo.Limpar();
        this.imgBuscar.Limpar();
        this.imgQrCode.Limpar();
    };
    return C_Tela;
}(MouraPageCadastroAngular));
var c_Tela = new C_Tela();
//# sourceMappingURL=C_Tela.js.map