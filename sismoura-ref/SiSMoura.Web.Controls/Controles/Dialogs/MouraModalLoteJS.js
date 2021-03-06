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
var MouraModalLoteTipoJS;
(function (MouraModalLoteTipoJS) {
    MouraModalLoteTipoJS[MouraModalLoteTipoJS["Entrada"] = 1] = "Entrada";
    MouraModalLoteTipoJS[MouraModalLoteTipoJS["Saida"] = 2] = "Saida";
})(MouraModalLoteTipoJS || (MouraModalLoteTipoJS = {}));
var MouraModalLoteJS = /** @class */ (function (_super) {
    __extends(MouraModalLoteJS, _super);
    function MouraModalLoteJS(id) {
        var _this = _super.call(this, id) || this;
        _this.Tipo = MouraModalLoteTipoJS.Entrada;
        if (!_this.Cancelou)
            _this.Cancelou = new MouraEventHandler();
        if (!_this.InformouLote)
            _this.InformouLote = new MouraEventHandler();
        return _this;
    }
    Object.defineProperty(MouraModalLoteJS.prototype, "Cancelou", {
        get: function () {
            return window[this.ID + "_Cancelou"];
        },
        set: function (value) {
            window[this.ID + "_Cancelou"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "InformouLote", {
        get: function () {
            return window[this.ID + "_InformouLote"];
        },
        set: function (value) {
            window[this.ID + "_InformouLote"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "Tipo", {
        get: function () {
            return this.tipo;
        },
        set: function (tipo) {
            this.tipo = tipo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "pnModal", {
        get: function () {
            return window[this.ID + "_pnModal_Modal"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "cboProduto", {
        get: function () {
            return window[this.ID + "_cboProduto_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "lblDeposito", {
        get: function () {
            return $("#" + this.ID + "_lblDeposito_LabelComponente")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "cboLote", {
        get: function () {
            return window[this.ID + "_cboLote_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "lblQtdeRestante", {
        get: function () {
            return $("#" + this.ID + "_lblQtdeRestante_LabelComponente")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "txtDataRecebimento", {
        get: function () {
            return window[this.ID + "_txtDataRecebimento_TextBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "txtDataFabricacao", {
        get: function () {
            return window[this.ID + "_txtDataFabricacao_TextBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "txtValidade", {
        get: function () {
            return window[this.ID + "_txtValidade_TextBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "txtFornecedor", {
        get: function () {
            return window[this.ID + "_txtFornecedor_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "txtPeso", {
        get: function () {
            return $("#" + this.ID + "_txtPeso_TextBox")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "txtQuantidade", {
        get: function () {
            return $("#" + this.ID + "_txtQuantidade_TextBox")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "cboLocalizacao1", {
        get: function () {
            return window[this.ID + "_cboLocalizacao1_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "cboLocalizacao2", {
        get: function () {
            return window[this.ID + "_cboLocalizacao2_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "cboLocalizacao3", {
        get: function () {
            return window[this.ID + "_cboLocalizacao3_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "hdnDepositoCodigo", {
        get: function () {
            return $("#" + this.ID + "_hdnDepositoCodigo")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "hdnProdutos", {
        get: function () {
            return $("#" + this.ID + "_hdnProdutos")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "hdnRegistroInformados", {
        get: function () {
            return $("#" + this.ID + "_hdnRegistroInformados")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "hdnLotesExistentes", {
        get: function () {
            return $("#" + this.ID + "_hdnLotesExistentes")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "btnAdicionar", {
        get: function () {
            return window[this.ID + "_btnAdicionar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "hdnBloquearFornecedor", {
        get: function () {
            return $("#" + this.ID + "_hdnBloquearFornecedor")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "btnOK", {
        get: function () {
            return window[this.ID + "_btnOK_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "btnCancelar", {
        get: function () {
            return window[this.ID + "_btnCancelar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "grd", {
        get: function () {
            return window[this.ID + "_grd_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalLoteJS.prototype, "Produtos", {
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
    Object.defineProperty(MouraModalLoteJS.prototype, "Informados", {
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
    Object.defineProperty(MouraModalLoteJS.prototype, "LotesExistentes", {
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
    Object.defineProperty(MouraModalLoteJS.prototype, "LotesExistentesEInformados", {
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
                if (this.Tipo == MouraModalLoteTipoJS.Entrada) {
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
    MouraModalLoteJS.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.btnAdicionar) {
            adicionarEventoMoura(this.btnAdicionar.Click, this.OnBtnAdicionarClick, this);
        }
        if (this.cboProduto) {
            this.cboProduto.SelectedIndexChanged.RemoveHandler($.proxy(this.OnCboProdutoChange, this));
            this.cboProduto.SelectedIndexChanged.AddHandler($.proxy(this.OnCboProdutoChange, this));
        }
        if (this.grd) {
            adicionarEventoMoura(this.grd.ExcluiuLinhaGrade, this.OnGridExcluiuItem, this);
            this.atualizarLabels();
        }
        if (this.btnOK) {
            adicionarEventoMoura(this.btnOK.Click, this.OnClickOk, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickCancelar, this);
        }
        if (this.cboLote) {
            this.cboLote.SelectedIndexChanged.RemoveHandler($.proxy(this.OnCboLoteChange, this));
            this.cboLote.SelectedIndexChanged.AddHandler($.proxy(this.OnCboLoteChange, this));
        }
    };
    MouraModalLoteJS.prototype.validar = function () {
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
        if (this.Tipo == MouraModalLoteTipoJS.Saida) {
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
    MouraModalLoteJS.prototype.abrir = function () {
        this.pnModal.Show();
        this.Limpar();
    };
    MouraModalLoteJS.prototype.Limpar = function () {
        this.cboProduto.SetSelectedIndex(-1);
        this.lblDeposito.innerText = "";
        this.hdnDepositoCodigo.value = "";
        this.Produtos = [];
        this.Informados = [];
        this.PreencherGrade();
        this.atualizarLabels();
        this.limparLote();
    };
    MouraModalLoteJS.prototype.limparLote = function () {
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
    MouraModalLoteJS.prototype.preencherItem = function (item) {
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
    MouraModalLoteJS.prototype.atualizarLabels = function () {
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
    MouraModalLoteJS.prototype.getQuantidadeInformadaByProduto = function (produto) {
        return this.getQuantidadeInformadaByProdutoLote(produto, null);
    };
    MouraModalLoteJS.prototype.getQuantidadeInformadaByProdutoLote = function (produto, lote) {
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
    MouraModalLoteJS.prototype.getInformadoByProdutoLote = function (produto, lote) {
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
    MouraModalLoteJS.prototype.adicionar = function () {
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
            this.PreencherGrade();
            this.limparLote();
            this.atualizarLabels();
        }
    };
    MouraModalLoteJS.prototype.OnCboProdutoChange = function () {
        this.atualizarLabels();
    };
    MouraModalLoteJS.prototype.OnCboLoteChange = function () {
        var lote = this.LotesExistentesEInformados.FirstOrDefault("Lote", this.cboLote.GetText());
        this.txtFornecedor.Limpar();
        if (lote) {
            if (lote.Fornecedor > 0) {
                this.txtFornecedor.Procurar(lote.Fornecedor.toString());
            }
        }
    };
    MouraModalLoteJS.prototype.OnBtnAdicionarClick = function (s, e) {
        try {
            e.processOnServer = false;
            this.adicionar();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraModalLoteJS.prototype.OnGridExcluiuItem = function (s, ev) {
        this.Informados = this.grd.DataSource;
        this.atualizarLabels();
    };
    MouraModalLoteJS.prototype.Mostrar = function (produtos, tipo, informados, bloquearFornecedor, codFornecedor) {
        try {
            this.Produtos = produtos;
            var listaProdutos = [];
            for (var x = 0; x <= produtos.length - 1; x++) {
                var item = produtos[x];
                listaProdutos.push(item.Produto + "|" + item.Deposito_Codigo);
            }
            var param = {
                produtos: JSON.stringify(listaProdutos),
                tipo: (tipo == MouraModalLoteTipoJS.Entrada ? "E" : "S")
            };
            var retornoSTR = this.ExecutarHttpRequest("GetInformacoesModalLote", param);
            var retorno = JSON.parse(DecodeTextoJSON(retornoSTR));
            this.cboProduto.ClearItems();
            for (var x = 0; x <= retorno.Produtos.length - 1; x++) {
                var itemCombo = retorno.Produtos[x];
                this.cboProduto.AddItem(itemCombo.Nome, itemCombo.Codigo, "");
            }
            if (this.cboProduto.GetItemCount() == 1) {
                this.cboProduto.SetSelectedIndex(0);
            }
            else {
                this.cboProduto.SetSelectedIndex(-1);
            }
            this.LotesExistentes = retorno.Lotes;
            this.tipo = tipo;
            if (codFornecedor) {
                this.txtFornecedor.Procurar("" + codFornecedor);
            }
            else {
                this.txtFornecedor.Limpar();
            }
            this.txtFornecedor.Disabled = bloquearFornecedor;
            if (bloquearFornecedor) {
                this.hdnBloquearFornecedor.value = "1";
            }
            else {
                this.hdnBloquearFornecedor.value = "0";
            }
            this.Informados = informados;
            this.PreencherGrade();
            this.atualizarLabels();
            this.pnModal.Show();
        }
        catch (ex) {
            LogarException(ex);
            throw ex;
        }
    };
    MouraModalLoteJS.prototype.PreencherGrade = function () {
        this.grd.PreencherGrid(this.Informados);
    };
    MouraModalLoteJS.prototype.OnClickCancelar = function (s, e) {
        e.processOnServer = false;
        this.Cancelou.FireEvent(this, new MouraEventArgs());
        this.pnModal.Hide();
    };
    MouraModalLoteJS.prototype.ConfimarLote = function () {
        try {
            var naoConfirmados = this.grd.GetUnselectedRowsData;
            var msg = "";
            for (var x = 0; x <= naoConfirmados.length - 1; x++) {
                msg += naoConfirmados[x].Lote.trim() + ",";
            }
            msg = msg.substring(0, msg.length - 1);
            if (naoConfirmados.length == 0) {
                MostrarAlerta("Conferência realizada com sucesso! Atenção os lotes confirmados ficam sob responsabilidade do usuário que realizou a entrada");
                return true;
            }
            else {
                MsgBoxJS("O(s) Lote(s) " + msg + " não foi(ram) confirmado(s)! A nota não poderá ser gravada sem confirmar"
                    + " o(s) Lote(s) do(s) produto(s)!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
            }
            return false;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraModalLoteJS.prototype.OnClickOk = function (s, e) {
        try {
            e.processOnServer = false;
            if (ValoresSismoura.ConfiguracoesRetaguarda.Confirmar_Controlado_Lote && this.Tipo == MouraModalLoteTipoJS.Entrada) {
                if (!this.ConfimarLote()) {
                    e.cancelEventAndBubble = true;
                    return false;
                }
            }
            if (this.VerificaEstoquesInformados()) {
                this.InformouLote.FireEvent(this, new MouraEventArgs());
                this.pnModal.Hide();
            }
            else {
                MostrarAlerta("A quantidade informada é diferente da solicitada!");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraModalLoteJS.prototype.VerificaEstoquesInformados = function () {
        for (var x = 0; x <= this.Produtos.length - 1; x++) {
            var prod = this.Produtos[x];
            var lista = this.Informados.FindAll("Produto_Codigo", prod.Produto);
            lista = lista.FindAll("Deposito_Codigo", prod.Deposito_Codigo);
            var totalInformado = lista.Sum("Quantidade");
            if (prod.Quantidade != totalInformado) {
                return false;
            }
        }
        return true;
    };
    return MouraModalLoteJS;
}(MouraControl));
//# sourceMappingURL=MouraModalLoteJS.js.map