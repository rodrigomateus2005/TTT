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
var VendaWEB = /** @class */ (function (_super) {
    __extends(VendaWEB, _super);
    function VendaWEB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(VendaWEB.prototype, "ItensVenda", {
        get: function () {
            return this.grdProd.DataSource;
        },
        set: function (value) {
            this.grdProd.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "TelaPagamento", {
        get: function () {
            if (!this._telaPagamento) {
                this._telaPagamento = new ConcluirPagamento(this);
            }
            return this._telaPagamento;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "TelaComanda", {
        get: function () {
            if (!this._telaComanda) {
                this._telaComanda = new ComandaVenda(this);
            }
            return this._telaComanda;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "grdProd", {
        get: function () {
            return window['grdProd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "btnCancelarVenda", {
        get: function () {
            return window['btnCancelarVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "btnConcluirVenda", {
        get: function () {
            return window['btnConcluirVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "txtVendedor", {
        get: function () {
            return window['txtVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "txtQuantidade", {
        get: function () {
            return window['txtQuantidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "txtValorUnitario", {
        get: function () {
            return window['txtValorUnitario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "txtSubTotal", {
        get: function () {
            return window['txtSubTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "txtTotal", {
        get: function () {
            return window['txtTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "mdConcluir", {
        get: function () {
            return window['mdConcluir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "IsPagamentoAberto", {
        get: function () {
            return this.mdConcluir.ModalDialog.GetVisible();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "btnCancelarItem", {
        get: function () {
            return window['btnCancelarItem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "mdMaisOpcoes", {
        get: function () {
            return window['mdMaisOpcoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "btnOpcoes", {
        get: function () {
            return window['btnOpcoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "btnOpcGravarComanda", {
        get: function () {
            return window['btnOpcGravarComanda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "hdnProdutoAtivo", {
        get: function () {
            return $("#hdnProdutoAtivo")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "mdPDV", {
        get: function () {
            return window['mdPDV_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "cboPDV", {
        get: function () {
            return window['cboPDV_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "cboCaixa", {
        get: function () {
            return window['cboCaixa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "btnOKPDV", {
        get: function () {
            return window['btnOKPDV_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "btnPgPrincipalPDV", {
        get: function () {
            return window['btnPgPrincipalPDV_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "dvPrincipalVenda", {
        get: function () {
            return $("#dvPrincipalVenda")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "ProdutoAtivo", {
        get: function () {
            if (String.IsNullOrWhiteSpace(this.hdnProdutoAtivo.value)) {
                return null;
            }
            else {
                return JSON.parse(DecodeTextoJSON(this.hdnProdutoAtivo.value));
            }
        },
        set: function (value) {
            if (value) {
                this.hdnProdutoAtivo.value = EncodeTextoJSON(JSON.stringify(value));
            }
            else {
                this.hdnProdutoAtivo.value = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "hdnInformacoesVenda", {
        get: function () {
            return $("#hdnInformacoesVenda")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "InfVenda", {
        get: function () {
            if (String.IsNullOrWhiteSpace(this.hdnInformacoesVenda.value)) {
                return null;
            }
            else {
                return JSON.parse(DecodeTextoJSON(this.hdnInformacoesVenda.value));
            }
        },
        set: function (value) {
            if (value) {
                this.hdnInformacoesVenda.value = EncodeTextoJSON(JSON.stringify(value));
            }
            else {
                this.hdnInformacoesVenda.value = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "hdnConfigVenda", {
        get: function () {
            return $("#hdnConfigVenda")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaWEB.prototype, "Configuracoes", {
        get: function () {
            if (String.IsNullOrWhiteSpace(this.hdnConfigVenda.value)) {
                return null;
            }
            else {
                return JSON.parse(DecodeTextoJSON(this.hdnConfigVenda.value));
            }
        },
        set: function (value) {
            if (value) {
                this.hdnConfigVenda.value = EncodeTextoJSON(JSON.stringify(value));
            }
            else {
                this.hdnConfigVenda.value = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    VendaWEB.prototype.IsTelaIniciada = function () {
        if (this.InfVenda && this.InfVenda.PDV > 0 && this.Configuracoes) {
            return true;
        }
        else {
            return false;
        }
    };
    VendaWEB.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnConcluirVenda) {
            adicionarEventoMoura(this.btnConcluirVenda.Click, this.OnClickBotaoConcluir, this);
        }
        if (this.btnCancelarVenda) {
            adicionarEventoMoura(this.btnCancelarVenda.Click, this.OnClickCancelarVenda, this);
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnPesquisouProduto, this);
            adicionarEventoMoura(this.txtProduto.KeyPressProcura, this.OnKeyPressProduto, this);
        }
        if (this.txtQuantidade) {
            adicionarEventoJQuery(this.txtQuantidade.Textbox, "change", this.OnChangeValores, this);
        }
        if (this.txtValorUnitario) {
            adicionarEventoJQuery(this.txtValorUnitario.Textbox, "change", this.OnChangeValores, this);
            adicionarEventoJQuery(this.txtValorUnitario.Textbox, "keydown", this.OnKeyDownUnitario, this);
        }
        if (this.mdConcluir && this.mdConcluir.ModalDialog) {
            adicionarEventoDevExpress(this.mdConcluir.ModalDialog.Closing, this.OnFechouModalPagamento, this);
        }
        if (this.btnCancelarItem) {
            adicionarEventoMoura(this.btnCancelarItem.Click, this.OnClickBotaoCancelarItem, this);
        }
        if (this.mdMaisOpcoes && this.mdMaisOpcoes.ModalDialog) {
            adicionarEventoDevExpress(this.mdMaisOpcoes.ModalDialog.Closing, this.OnFechouModalOpcoes, this);
        }
        if (this.btnOpcoes) {
            adicionarEventoMoura(this.btnOpcoes.Click, this.OnClickMaisOpcoes, this);
        }
        if (this.btnOpcGravarComanda) {
            adicionarEventoMoura(this.btnOpcGravarComanda.Click, this.OnClickBotaoGravarComanda, this);
        }
        if (this.btnOKPDV) {
            adicionarEventoMoura(this.btnOKPDV.Click, this.OnClickBotaoOKInf, this);
        }
        if (this.cboPDV && this.cboPDV.Combo) {
            adicionarEventoDevExpress(this.cboPDV.Combo.SelectedIndexChanged, this.OnSelectedIndexChangedPDV, this);
        }
        if (this.btnPgPrincipalPDV) {
            adicionarEventoMoura(this.btnPgPrincipalPDV.Click, this.OnClickBotaoPaginaPrincipal, this);
        }
        this.TelaPagamento.Init();
        this.TelaComanda.Init();
        if (!this.IsTelaIniciada()) {
            this.NovaVenda();
        }
        this.CriarAtalhosVenda();
    };
    VendaWEB.prototype.NovaVenda = function () {
        try {
            this.txtVendedor.Limpar();
            this.LimparCamposInformarProduto();
            this.ItensVenda = [];
            this.CalculaTotalVenda();
            this.grdProd.OrderBy("Item", "desc");
            this.FocoNovaVenda();
            this.TelaPagamento.hdnEmitiuSAT.value = "";
            this.TelaPagamento.hdnVendaAtiva.value = "";
            this.TelaPagamento.TelaCartao.CartoesInformados = [];
            this.TelaPagamento.TelaCartao.LimparCamposCartao();
            //Verifica se o caixa selecionado está aberto
            this.VerificaCaixaAberto();
            if (!this.IsTelaIniciada()) {
                setTimeout($.proxy(function () {
                    this.mdPDV.Show();
                    this.cboPDV.Focus();
                    this.CarregarCaixasAbertos();
                }, this), 100);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    VendaWEB.prototype.VerificaCaixaAberto = function () {
        try {
            if (!this.InfVenda || this.InfVenda.Caixa <= 0 || this.InfVenda.PDV <= 0) {
                return;
            }
            var retorno;
            var parametros;
            parametros = {
                codPDV: this.InfVenda.PDV,
                codCaixa: this.InfVenda.Caixa
            };
            retorno = this.ExecutarFuncaoServerSideSynch("IsCaixaAberto", parametros);
            if (!retorno) {
                MostrarAlerta("O caixa selecionado já não está mais aberto!");
                var informacoes = {};
                informacoes.Caixa = 0;
                informacoes.PDV = 0;
                this.InfVenda = informacoes;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    VendaWEB.prototype.FocoNovaVenda = function () {
        this.txtVendedor.Focus();
    };
    VendaWEB.prototype.LimparCamposInformarProduto = function () {
        var zero = 0;
        this.txtProduto.Limpar();
        this.txtQuantidade.SetText((1).Format(ValoresSismoura.CasasDecimaisEstoque));
        this.txtValorUnitario.SetText(zero.Format(ValoresSismoura.CasasDecimaisValor));
        this.ProdutoAtivo = null;
        this.CalculaSubTotal();
    };
    VendaWEB.prototype.OnClickBotaoOKInf = function (s, e) {
        e.processOnServer = false;
        try {
            var pdv = ("" + this.cboPDV.GetValue()).CNum();
            var caixa = ("" + this.cboCaixa.GetValue()).CNum();
            if (pdv <= 0) {
                MostrarAlerta("Informe o PDV!");
                this.cboPDV.Focus();
                return;
            }
            if (this.cboCaixa.GetSelectedIndex() < 0) {
                MostrarAlerta("Informe o Caixa!");
                this.cboCaixa.Focus();
                return;
            }
            var retorno;
            var parametros;
            parametros = {
                codPDV: pdv,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            retorno = this.ExecutarFuncaoServerSideSynch("GetInformacoesVenda", parametros);
            if (!retorno) {
                MostrarAlerta("Ocorreu um erro ao obter informações do PDV");
                return;
            }
            if (!String.IsNullOrWhiteSpace(retorno.Mensagem_Retorno)) {
                MostrarAlerta(retorno.Mensagem_Retorno);
                return;
            }
            var informacoes = {};
            informacoes.Caixa = caixa;
            informacoes.PDV = pdv;
            informacoes.DepositoPadrao = retorno.DepositoPadrao;
            informacoes.Empresa = retorno.Empresa;
            //Seta as configurações da venda
            this.Configuracoes = retorno.Configuracoes;
            this.InfVenda = informacoes;
            this.mdPDV.Hide();
            this.FocoNovaVenda();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    VendaWEB.prototype.OnClickBotaoPaginaPrincipal = function (s, e) {
        e.processOnServer = false;
        window.location.href = formataURLRelativa("Principal.aspx");
    };
    VendaWEB.prototype.OnSelectedIndexChangedPDV = function (s, e) {
        this.CarregarCaixasAbertos();
    };
    VendaWEB.prototype.CarregarCaixasAbertos = function () {
        try {
            var retorno;
            var parametros;
            this.cboCaixa.ClearItems();
            parametros = {
                codPDV: ("" + this.cboPDV.GetValue()).CNum()
            };
            retorno = this.ExecutarFuncaoServerSideSynch("GetCaixasAbertos", parametros);
            var texto;
            var dataAbertura;
            if (retorno) {
                this.cboCaixa.AddItem("## NENHUM ##", 0, "");
                for (var x = 0; x <= retorno.length - 1; x++) {
                    dataAbertura = ("" + retorno[x]['Data_Abertura']).ToDate();
                    texto = "Abertura: " + dataAbertura.FormataData() + " " + dataAbertura.FormataHoraSismoura() + ' - ' + retorno[x]['Usuario_Abertura'];
                    this.cboCaixa.AddItem(texto, retorno[x]['Caixa'], "");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    VendaWEB.prototype.OnPesquisouProduto = function (s, e) {
        var retorno;
        var parametros;
        try {
            if (this.txtProduto.GetText().CNum() <= 0) {
                return;
            }
            parametros = {
                codProduto: this.txtProduto.GetText().CNum()
            };
            retorno = this.ExecutarFuncaoServerSideSynch("GetInformacoesProduto", parametros);
            if (!retorno) {
                MostrarAlerta('Produto não encontrado');
                this.txtProduto.Limpar();
                this.txtProduto.Focus();
                return;
            }
            if (retorno.Inativo) {
                MsgBoxJS("Produto inativo!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(this.OnMensagemRetornoProduto, this), null);
                //MostrarAlerta("Produto inativo!");
                this.LimparCamposInformarProduto();
                this.txtProduto.Focus();
                return;
            }
            if (retorno.Controlado) {
                MsgBoxJS("Não é possível vender produtos controlados nesta tela", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(this.OnMensagemRetornoProduto, this), null);
                //MostrarAlerta("Não é possível vender produtos controlados nesta tela");
                this.LimparCamposInformarProduto();
                this.txtProduto.Focus();
                return;
            }
            //Validações para o SAT
            if (this.Configuracoes.Documento_Fiscal_Venda == 1) {
                if (retorno.Servico || retorno.Servico_Pet) {
                    MsgBoxJS("Não é possível vender serviços com o SAT", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(this.OnMensagemRetornoProduto, this), null);
                    //MostrarAlerta("Não é possível vender serviços com o SAT");
                    this.LimparCamposInformarProduto();
                    this.txtProduto.Focus();
                    return;
                }
            }
            if (!this.IsTelaIniciada()) {
                this.NovaVenda();
                return;
            }
            this.ProdutoAtivo = retorno;
            this.txtValorUnitario.SetText(retorno.Unitario.Format(ValoresSismoura.CasasDecimaisValor));
            this.CalculaSubTotal();
            this.CalculaTotalVenda();
        }
        catch (ex) {
            LogarException(ex);
            this.txtProduto.Limpar();
            this.txtProduto.Focus();
        }
    };
    VendaWEB.prototype.OnMensagemRetornoProduto = function (e) {
        this.LimparCamposInformarProduto();
        this.txtProduto.Focus();
    };
    VendaWEB.prototype.OnKeyPressProduto = function (s, e) {
        //Pressionou *
        if (e.Tecla == 42) {
            var valorProduto = this.txtProduto.GetText();
            if (valorProduto.CNum() > 0) {
                this.txtQuantidade.SetText(valorProduto.CNum().Format(ValoresSismoura.CasasDecimaisEstoque));
                this.txtProduto.Limpar();
                this.txtProduto.Focus();
                StopPropagationJQuery(e.JQueryKey);
                e.Cancelar = true;
            }
        }
    };
    VendaWEB.prototype.OnChangeValores = function () {
        this.CalculaSubTotal();
    };
    VendaWEB.prototype.OnKeyDownUnitario = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (tecla && tecla == 13) {
            if (this.AdicionarProdutoInformadoNaTela()) {
                StopPropagationJQuery(e);
            }
        }
    };
    VendaWEB.prototype.AdicionarProdutoInformadoNaTela = function () {
        var retorno;
        if (this.txtProduto.GetText().CNum() > 0 &&
            this.txtQuantidade.GetText().CNum() > 0 &&
            this.txtValorUnitario.GetText().CNum() > 0) {
            if (!this.ProdutoAtivo) {
                MostrarAlerta("Nenhum produto informado!");
                return false;
            }
            retorno = this.AdicionarProdutoVenda(this.ProdutoAtivo, this.txtQuantidade.GetText().CNum(), this.txtValorUnitario.GetText().CNum(), this.txtVendedor.GetText().CNum());
        }
        else {
            retorno = false;
        }
        return retorno;
    };
    VendaWEB.prototype.CalculaSubTotal = function () {
        this.txtSubTotal.SetText((this.txtQuantidade.GetText().CNum() * this.txtValorUnitario.GetText().CNum()).Format(2));
    };
    VendaWEB.prototype.CalculaTotalVenda = function () {
        var soma = 0;
        for (var x = 0; x <= this.ItensVenda.length - 1; x++) {
            soma += this.ItensVenda[x].Total;
        }
        this.txtTotal.SetText(soma.Format(2));
    };
    VendaWEB.prototype.OnClickBotaoConcluir = function (s, e) {
        e.processOnServer = false;
        this.ConcluirVenda();
    };
    VendaWEB.prototype.ConcluirVenda = function () {
        if (!this.IsTelaIniciada())
            return;
        if (this.ItensVenda.length <= 0)
            return;
        this.CalculaTotalVenda();
        this.TelaPagamento.AbrirTelaPagamento(this.txtTotal.GetText().CNum());
    };
    VendaWEB.prototype.ValidarItemAdicionar = function (codigoProduto, nomeProduto, quantidade, unitario) {
        if (codigoProduto <= 0) {
            MostrarAlerta("Produto não informado");
            return false;
        }
        if (String.IsNullOrWhiteSpace(nomeProduto)) {
            MostrarAlerta("Produto não informado");
            return false;
        }
        if (quantidade <= 0) {
            MostrarAlerta("Quantidade não informada");
            return false;
        }
        if (unitario <= 0) {
            MostrarAlerta("Valor unitário não informado");
            return false;
        }
        return true;
    };
    VendaWEB.prototype.AdicionarProdutoVenda = function (produtoEntity, quantidade, unitario, codVendedor) {
        if (!produtoEntity) {
            return false;
        }
        if (!this.ValidarItemAdicionar(produtoEntity.Codigo, produtoEntity.Descricao, quantidade, unitario)) {
            return false;
        }
        var item = {};
        var lista = this.ItensVenda;
        item = produtoEntity;
        item.Item = this.ProximoItem();
        item.Quantidade = quantidade;
        item.Unitario = unitario;
        item.Total = (quantidade * unitario).Format(2).CNum();
        item.Vendedor = codVendedor;
        lista.push(item);
        this.ItensVenda = lista;
        this.CalculaTotalVenda();
        this.LimparCamposInformarProduto();
        this.txtProduto.Focus();
        return true;
    };
    VendaWEB.prototype.ProximoItem = function () {
        var itens = [];
        var retorno = 0;
        for (var x = 0; x <= this.ItensVenda.length - 1; x++) {
            itens.push(this.ItensVenda[x].Item);
        }
        if (itens.length > 0) {
            retorno = Math.max.apply(Math, itens);
        }
        return retorno + 1;
    };
    VendaWEB.prototype.OnClickCancelarVenda = function (s, e) {
        e.processOnServer = false;
        this.CancelarVenda();
    };
    VendaWEB.prototype.CancelarVenda = function () {
        if (!this.IsTelaIniciada())
            return;
        if (this.ItensVenda.length <= 0) {
            return;
        }
        MsgBoxJS("Deseja realmente cancelar esta venda?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoCancelarVenda, this), "");
    };
    VendaWEB.prototype.OnSelecionouOpcaoCancelarVenda = function (e) {
        if (e.Resultado == MsgBoxResult.Yes) {
            this.NovaVenda();
        }
    };
    VendaWEB.prototype.CriarAtalhosVenda = function () {
        adicionarEventoJQuery(document, "keydown", this.CancelaTeclasBrowser, this);
        adicionarEventoJQuery(this.dvPrincipalVenda, "keydown", this.KeyF3, this);
        adicionarEventoJQuery(this.dvPrincipalVenda, "keydown", this.KeyF5, this);
        adicionarEventoJQuery(this.dvPrincipalVenda, "keydown", this.KeyF8, this);
        adicionarEventoJQuery(this.dvPrincipalVenda, "keydown", this.KeyF11, this);
    };
    VendaWEB.prototype.KeyF11 = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (!tecla || tecla != enmKeyCode.F11) {
            return;
        }
        if (e.ctrlKey || e.altKey) {
            return;
        }
        StopPropagationJQuery(e);
        if (!this.IsPagamentoAberto) {
            this.CancelarVenda();
        }
    };
    VendaWEB.prototype.KeyF8 = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (!tecla || tecla != enmKeyCode.F8) {
            return;
        }
        if (e.ctrlKey || e.altKey) {
            return;
        }
        StopPropagationJQuery(e);
        if (!this.IsPagamentoAberto) {
            this.CancelarItem();
        }
    };
    VendaWEB.prototype.KeyF3 = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (!tecla || tecla != enmKeyCode.F3) {
            return;
        }
        if (e.ctrlKey || e.altKey) {
            return;
        }
        StopPropagationJQuery(e);
        if (!this.IsPagamentoAberto) {
            this.GravarComanda();
        }
    };
    VendaWEB.prototype.CancelaTeclasBrowser = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (e.ctrlKey || e.altKey) {
            return;
        }
        if (tecla == enmKeyCode.F5 || tecla == enmKeyCode.F6) {
            //Caso não tenha evento mapeado para o F5, o sistema cancela a tecla para não dar refresh na página
            //Caso não tenha evento mapeado para o F6, o sistema cancela a tecla para não enviar o foco para a url
            StopPropagationJQuery(e);
        }
    };
    VendaWEB.prototype.KeyF5 = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (!tecla || tecla != enmKeyCode.F5) {
            return;
        }
        if (e.ctrlKey || e.altKey) {
            return;
        }
        StopPropagationJQuery(e);
        this.ConcluirVenda();
    };
    VendaWEB.prototype.CriarAtalhoVenda = function (atalho, funcaoExecutar, context) {
        shortcut.remove(atalho);
        var options = {
            'type': 'keydown',
            'propagate': false,
            'target': document
        };
        shortcut.add(atalho, $.proxy(funcaoExecutar, context), options);
    };
    VendaWEB.prototype.OnFechouModalPagamento = function (s, e) {
        this.txtVendedor.Focus();
    };
    VendaWEB.prototype.OnFechouModalOpcoes = function (s, e) {
        this.txtVendedor.Focus();
    };
    VendaWEB.prototype.OnClickBotaoCancelarItem = function (s, e) {
        e.processOnServer = false;
        this.CancelarItem();
    };
    VendaWEB.prototype.CancelarItem = function () {
        if (!this.IsTelaIniciada())
            return;
        if (this.ItensVenda.length <= 0)
            return;
        this.mdMaisOpcoes.Hide();
        InputBoxJS("Cancelar Item", "Informe o item que será cancelado", "", this.OnRetornoInputCancelarItem, this);
    };
    VendaWEB.prototype.OnRetornoInputCancelarItem = function (e) {
        var item = e.Valor.CNum();
        var encontrou = false;
        if (item <= 0) {
            return;
        }
        var lista = this.ItensVenda;
        for (var x = 0; x <= lista.length - 1; x++) {
            if (lista[x].Item == item) {
                lista.splice(x, 1);
                encontrou = true;
                break;
            }
        }
        if (encontrou) {
            this.ItensVenda = lista;
            this.CalculaTotalVenda();
        }
        else {
            MostrarAlerta("Item não encontrado!");
        }
    };
    VendaWEB.prototype.OnClickMaisOpcoes = function (s, e) {
        e.processOnServer = false;
        if (!this.IsTelaIniciada())
            return;
        this.mdMaisOpcoes.Show();
    };
    VendaWEB.prototype.OnClickBotaoGravarComanda = function (s, e) {
        e.processOnServer = false;
        this.GravarComanda();
    };
    VendaWEB.prototype.GravarComanda = function () {
        if (!this.IsTelaIniciada())
            return;
        this.mdMaisOpcoes.Hide();
        if (this.ItensVenda.length <= 0) {
            return;
        }
        this.TelaComanda.AbrirComanda();
    };
    return VendaWEB;
}(MouraPageAngular));
var vendaWEB = new VendaWEB();
//# sourceMappingURL=VendaWEB.js.map