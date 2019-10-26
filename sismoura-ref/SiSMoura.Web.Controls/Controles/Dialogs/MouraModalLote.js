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
var MouraModalLoteTipo;
(function (MouraModalLoteTipo) {
    MouraModalLoteTipo[MouraModalLoteTipo["Entrada"] = 1] = "Entrada";
    MouraModalLoteTipo[MouraModalLoteTipo["Saida"] = 2] = "Saida";
})(MouraModalLoteTipo || (MouraModalLoteTipo = {}));
var MouraModalLote = /** @class */ (function (_super) {
    __extends(MouraModalLote, _super);
    function MouraModalLote(id) {
        var _this = _super.call(this, id) || this;
        _this.Tipo = MouraModalLoteTipo.Entrada;
        return _this;
    }
    Object.defineProperty(MouraModalLote.prototype, "Tipo", {
        get: function () {
            return this.tipo;
        },
        set: function (tipo) {
            this.tipo = tipo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "pnModal", {
        get: function () {
            return window[this.ID + "_pnModal_Modal"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "cboProduto", {
        get: function () {
            return window[this.ID + "_cboProduto_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "lblDeposito", {
        get: function () {
            return $("#" + this.ID + "_lblDeposito_LabelComponente")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "cboLote", {
        get: function () {
            return window[this.ID + "_cboLote_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "lblQtdeRestante", {
        get: function () {
            return $("#" + this.ID + "_lblQtdeRestante_LabelComponente")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "txtDataRecebimento", {
        get: function () {
            return window[this.ID + "_txtDataRecebimento_TextBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "txtDataFabricacao", {
        get: function () {
            return window[this.ID + "_txtDataFabricacao_TextBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "txtValidade", {
        get: function () {
            return window[this.ID + "_txtValidade_TextBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "txtFornecedor", {
        get: function () {
            return window[this.ID + "_txtFornecedor_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "txtPeso", {
        get: function () {
            return $("#" + this.ID + "_txtPeso_TextBox")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "txtQuantidade", {
        get: function () {
            return $("#" + this.ID + "_txtQuantidade_TextBox")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "cboLocalizacao1", {
        get: function () {
            return window[this.ID + "_cboLocalizacao1_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "cboLocalizacao2", {
        get: function () {
            return window[this.ID + "_cboLocalizacao2_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "cboLocalizacao3", {
        get: function () {
            return window[this.ID + "_cboLocalizacao3_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "hdnDepositoCodigo", {
        get: function () {
            return $("#" + this.ID + "_hdnDepositoCodigo")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "hdnProdutos", {
        get: function () {
            return $("#" + this.ID + "_hdnProdutos")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "hdnRegistroInformados", {
        get: function () {
            return $("#" + this.ID + "_hdnRegistroInformados")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "hdnLotesExistentes", {
        get: function () {
            return $("#" + this.ID + "_hdnLotesExistentes")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "btnAdicionar", {
        get: function () {
            return $("#" + this.ID + "_btnAdicionar")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "hdnBloquearFornecedor", {
        get: function () {
            return $("#" + this.ID + "_hdnBloquearFornecedor")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "grd", {
        //get btnOK(): HTMLButtonElement {
        //    return <HTMLButtonElement> $("#" + this.ID + " #hdnBackup")[0];
        //}
        //get btnCancelar(): HTMLButtonElement {
        //    return <HTMLButtonElement> $("#" + this.ID + " #hdnBackup")[0];
        //}
        get: function () {
            return window[this.ID + "_grd_Grid"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "Produtos", {
        get: function () {
            var retorno;
            if (this.hdnProdutos.value == "")
                return [];
            try {
                retorno = JSON.parse(this.hdnProdutos.value.split("'").join('"'));
            }
            catch (ex) {
                retorno = [];
            }
            return retorno;
        },
        set: function (produtos) {
            this.hdnProdutos.value = JSON.stringify(produtos);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "Informados", {
        get: function () {
            var retorno;
            if (this.hdnRegistroInformados.value == "")
                return [];
            try {
                retorno = JSON.parse(this.hdnRegistroInformados.value.split("'").join('"'));
            }
            catch (ex) {
                retorno = [];
            }
            return retorno;
        },
        set: function (produtos) {
            this.hdnRegistroInformados.value = JSON.stringify(produtos);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "LotesExistentes", {
        get: function () {
            var retorno;
            if (this.hdnLotesExistentes.value == "")
                return [];
            try {
                retorno = JSON.parse(this.hdnLotesExistentes.value.split("'").join('"'));
            }
            catch (ex) {
                retorno = [];
            }
            return retorno;
        },
        set: function (produtos) {
            this.hdnLotesExistentes.value = JSON.stringify(produtos);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLote.prototype, "LotesExistentesEInformados", {
        get: function () {
            var informados = this.Informados;
            var lotesExistentes = this.LotesExistentes;
            for (var x = 0; x < informados.length; x++) {
                var lote = null;
                for (var y = 0; y < lotesExistentes.length; y++) {
                    if (informados[x].Produto_Codigo == lotesExistentes[y].Produto
                        && informados[x].Lote == lotesExistentes[y].Lote
                        && informados[x].Deposito_Codigo == lotesExistentes[y].Deposito
                        && informados[x].Fornecedor_Codigo == lotesExistentes[y].Fornecedor) {
                        lote == lotesExistentes[y];
                        lotesExistentes.splice(lotesExistentes.indexOf(lote), 1);
                    }
                }
                if (lote == null) {
                    lote = {};
                    lote.Quantidade = 0;
                }
                lote.Produto = informados[x].Produto_Codigo;
                lote.Lote = informados[x].Lote;
                lote.Deposito = informados[x].Deposito_Codigo;
                lote.Fornecedor = informados[x].Fornecedor_Codigo;
                if (this.Tipo == MouraModalLoteTipo.Entrada) {
                    lote.Quantidade += informados[x].Quantidade;
                }
                else {
                    lote.Quantidade -= informados[x].Quantidade;
                }
                if (lote.Quantidade > 0) {
                    lotesExistentes.push(lote);
                }
            }
            return lotesExistentes;
        },
        enumerable: true,
        configurable: true
    });
    MouraModalLote.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.btnAdicionar) {
            $(this.btnAdicionar).off("click", ($.proxy(this.OnBtnAdicionarClick, this)));
            $(this.btnAdicionar).click($.proxy(this.OnBtnAdicionarClick, this));
        }
        if (this.cboProduto) {
            this.cboProduto.SelectedIndexChanged.RemoveHandler($.proxy(this.OnCboProdutoChange, this));
            this.cboProduto.SelectedIndexChanged.AddHandler($.proxy(this.OnCboProdutoChange, this));
        }
        if (this.grd) {
            $(this.grd).off("ClickExcluir", ($.proxy(this.OnGridExcluirButtonMouraClick, this)));
            $(this.grd).on("ClickExcluir", $.proxy(this.OnGridExcluirButtonMouraClick, this));
            this.atualizarLabels();
        }
    };
    MouraModalLote.prototype.validar = function () {
        if (this.cboProduto.GetSelectedIndex() < 0) {
            toastr.warning("Informe um Produto!");
            return false;
        }
        if (this.cboLote.GetText() == "") {
            toastr.warning("Informe um Lote!");
            return false;
        }
        if (this.txtValidade.GetDate() == null) {
            toastr.warning("Informe a validade do Lote!");
            return false;
        }
        if (this.txtQuantidade.value.CNum() <= 0) {
            toastr.warning("Informe a quantidade do Lote!");
            return false;
        }
        var qtdeRestante;
        qtdeRestante = this.lblQtdeRestante.innerText.CNum();
        qtdeRestante += this.getQuantidadeInformadaByProdutoLote(this.cboProduto.GetValue(), this.cboLote.GetText());
        if (qtdeRestante < this.txtQuantidade.value.CNum()) {
            toastr.warning("Quantidade informada é maior que a quantidade restante!");
            return false;
        }
        if (this.Tipo == MouraModalLoteTipo.Saida) {
            var loteExistente = null;
            var lotesExistentes;
            lotesExistentes = this.LotesExistentesEInformados;
            for (var x = 0; x < lotesExistentes.length; x++) {
                if (lotesExistentes[x].Produto == this.cboProduto.GetValue()
                    && lotesExistentes[x].Lote == this.cboLote.GetText()
                    && lotesExistentes[x].Deposito == this.hdnDepositoCodigo.value.CNum()
                    && lotesExistentes[x].Fornecedor == this.txtFornecedor.GetText().CNum()) {
                    loteExistente = lotesExistentes[x];
                }
            }
            if (loteExistente == null) {
                toastr.warning("O lote " + this.cboLote.GetText() + " não existe!");
                return false;
            }
            if (loteExistente.Quantidade < this.txtQuantidade.value.CNum()) {
                toastr.warning("O lote " + loteExistente.Lote + " não possui quantidade necessária!");
                return false;
            }
        }
        return true;
    };
    MouraModalLote.prototype.abrir = function () {
        this.pnModal.Show();
        this.limpar();
    };
    MouraModalLote.prototype.limpar = function () {
        this.cboProduto.SetSelectedIndex(-1);
        this.lblDeposito.innerText = "";
        this.hdnDepositoCodigo.value = "";
        this.limparLote();
    };
    MouraModalLote.prototype.limparLote = function () {
        this.cboLote.SetText("");
        this.txtDataRecebimento.SetDate(null);
        this.txtDataFabricacao.SetDate(null);
        this.txtValidade.SetDate(null);
        if (this.hdnBloquearFornecedor.value.CNum() == 0) {
            this.txtFornecedor.Limpar();
        }
        this.txtPeso.value = "";
        this.txtQuantidade.value = "";
        this.cboLocalizacao1.SetSelectedIndex(-1);
        this.cboLocalizacao2.SetSelectedIndex(-1);
        this.cboLocalizacao3.SetSelectedIndex(-1);
    };
    MouraModalLote.prototype.preencherItem = function (item) {
        item.Produto_Codigo = this.cboProduto.GetValue();
        item.Produto_Descricao = this.cboProduto.GetText();
        item.Deposito_Codigo = parseInt(this.hdnDepositoCodigo.value);
        item.Deposito_Descricao = this.lblDeposito.innerText;
        item.Lote = this.cboLote.GetText();
        item.DataRecebimento = this.txtDataRecebimento.GetDate();
        item.DataFabricacao = this.txtDataFabricacao.GetDate();
        item.Validade = this.txtValidade.GetDate();
        item.Fornecedor_Codigo = this.txtFornecedor.GetText().CNum();
        item.Fornecedor_Nome = this.txtFornecedor.GetResultado();
        item.Peso = this.txtPeso.value.CNum();
        item.Quantidade = this.txtQuantidade.value.CNum();
        item.Localizacao1_Codigo = this.cboLocalizacao1.GetValue();
        item.Localizacao1_Descricao = this.cboLocalizacao1.GetText();
        item.Localizacao2_Codigo = this.cboLocalizacao2.GetValue();
        item.Localizacao2_Descricao = this.cboLocalizacao2.GetText();
        item.Localizacao3_Codigo = this.cboLocalizacao3.GetValue();
        item.Localizacao3_Descricao = this.cboLocalizacao3.GetText();
        return item;
    };
    MouraModalLote.prototype.atualizarLabels = function () {
        this.hdnDepositoCodigo.value = "0";
        this.lblDeposito.innerText = "";
        this.lblQtdeRestante.innerText = "";
        if (this.cboProduto.GetValue() <= 0)
            return;
        var produtos;
        var produto;
        var qtdeInformada = this.getQuantidadeInformadaByProduto(this.cboProduto.GetValue());
        produtos = this.Produtos;
        for (var x = 0; x < produtos.length; x++) {
            if (produtos[x].Produto == this.cboProduto.GetValue()) {
                produto = produtos[x];
            }
        }
        var lotes;
        lotes = this.LotesExistentesEInformados;
        if (this.cboLote.GetText() == "") {
            this.cboLote.ClearItems();
            for (var x = 0; x < lotes.length; x++) {
                if (lotes[x].Produto == produto.Produto) {
                    this.cboLote.AddItem(lotes[x].Lote, lotes[x].Lote, "");
                }
            }
        }
        this.hdnDepositoCodigo.value = "" + produto.Deposito_Codigo;
        this.lblDeposito.innerText = produto.Deposito_Descricao;
        this.lblQtdeRestante.innerText = "" + (produto.Quantidade - qtdeInformada);
    };
    MouraModalLote.prototype.getQuantidadeInformadaByProduto = function (produto) {
        return this.getQuantidadeInformadaByProdutoLote(produto, null);
    };
    MouraModalLote.prototype.getQuantidadeInformadaByProdutoLote = function (produto, lote) {
        if (produto <= 0)
            return 0;
        var informados;
        var qtdeInformada = 0;
        informados = this.Informados;
        for (var x = 0; x < informados.length; x++) {
            if (informados[x].Produto_Codigo == produto) {
                if (lote == null || lote == informados[x].Lote) {
                    qtdeInformada += informados[x].Quantidade;
                }
            }
        }
        return qtdeInformada;
    };
    MouraModalLote.prototype.getInformadoByProdutoLote = function (produto, lote) {
        var informados;
        var retorno = null;
        informados = this.Informados;
        for (var x = 0; x < informados.length; x++) {
            if (informados[x].Produto_Codigo == produto) {
                if (lote == informados[x].Lote) {
                    retorno = informados[x];
                }
            }
        }
        return retorno;
    };
    MouraModalLote.prototype.adicionar = function () {
        if (this.validar()) {
            var informados;
            var novo;
            informados = this.Informados;
            novo = this.getInformadoByProdutoLote(this.cboProduto.GetValue(), this.cboLote.GetText());
            if (novo == null) {
                novo = {};
            }
            else {
                informados.splice(informados.indexOf(novo), 1);
            }
            this.preencherItem(novo);
            informados.push(novo);
            this.Informados = informados;
            this.grd.PerformCallback(JSON.stringify(informados));
            this.limparLote();
            this.atualizarLabels();
        }
    };
    MouraModalLote.prototype.OnCboProdutoChange = function () {
        this.atualizarLabels();
    };
    MouraModalLote.prototype.OnBtnAdicionarClick = function (ev) {
        ev.preventDefault();
        this.adicionar();
    };
    MouraModalLote.prototype.OnGridExcluirButtonMouraClick = function (ev) {
        ev.preventDefault();
        var informados;
        informados = this.Informados;
        informados.splice(ev.VisibleIndex, 1);
        this.Informados = informados;
        this.grd.PerformCallback(JSON.stringify(informados));
        this.atualizarLabels();
    };
    return MouraModalLote;
}(MouraControl));
//# sourceMappingURL=MouraModalLote.js.map