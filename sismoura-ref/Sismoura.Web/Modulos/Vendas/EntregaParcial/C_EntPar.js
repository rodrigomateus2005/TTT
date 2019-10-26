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
var C_EntPar = /** @class */ (function (_super) {
    __extends(C_EntPar, _super);
    function C_EntPar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cliente = 0;
        _this.totalPendente = 0;
        _this.flag = true;
        _this.flagQtde = true;
        _this.contasReceber = [];
        return _this;
    }
    Object.defineProperty(C_EntPar.prototype, "Entrega", {
        get: function () {
            var that = this.GetScope()["Entrega"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Entrega"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "Entrega_Itens", {
        get: function () {
            return this.GetScope()["Entrega_Itens"];
        },
        set: function (value) {
            this.GetScope()["Entrega_Itens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "Pagamento", {
        get: function () {
            var that = this.GetScope()["Pagamento"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Pagamento"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "Pagamentos", {
        get: function () {
            return this.GetScope()["Pagamentos"];
        },
        set: function (value) {
            this.GetScope()["Pagamentos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "Data_Dia", {
        get: function () {
            var that = this.GetScope()["Data_Dia"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Data_Dia"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "Data_Hora", {
        get: function () {
            var that = this.GetScope()["Data_Hora"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Data_Hora"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "txtHora", {
        get: function () {
            return window['txtHora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "optFiltro", {
        get: function () {
            return window['optFiltro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "txtVenda", {
        get: function () {
            return window['txtVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "txtOrcamento", {
        get: function () {
            return window['txtOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "btnCarregar", {
        get: function () {
            return window['btnCarregar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "btnOkPagto", {
        get: function () {
            return window['btnOkPagto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "btnCancelarPagto", {
        get: function () {
            return window['btnCancelarPagto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "btnPagamento", {
        get: function () {
            return window['btnPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "mdPagamento", {
        get: function () {
            return window['mdPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "btnEntregaTotal", {
        get: function () {
            return window['btnEntregaTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "grdProdutos", {
        get: function () {
            return window['grdProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "grdPagamento", {
        get: function () {
            return window['grdPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "lblValorTotalEntrega", {
        get: function () {
            return window['lblValorTotalEntrega_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "lblValorTotal", {
        get: function () {
            return window['lblValorTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "lblQtdePendente", {
        get: function () {
            return window['lblQtdePendente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "lblQtdeEntrega", {
        get: function () {
            return window['lblQtdeEntrega_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "lblQtde", {
        get: function () {
            return window['lblQtde_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "lblPagtoRestante", {
        get: function () {
            return window['lblPagtoRestante_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "dvPrincipalVenda", {
        get: function () {
            return $("#dvPrincipalVenda")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "cboFormaPagto", {
        get: function () {
            return window['cboFormaPagto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntPar.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_EntPar.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.optFiltro) {
            adicionarEventoMoura(this.optFiltro.SelectionChanged, this.OnFiltroChange, this);
        }
        if (this.btnCarregar) {
            adicionarEventoMoura(this.btnCarregar.Click, this.OnClickBotaoCarregar, this);
        }
        if (this.btnEntregaTotal) {
            adicionarEventoMoura(this.btnEntregaTotal.Click, this.OnClickBotaoEntregaTotal, this);
        }
        if (this.btnPagamento) {
            adicionarEventoMoura(this.btnPagamento.Click, this.OnClickBotaoPagamento, this);
        }
        if (this.btnCancelarPagto) {
            adicionarEventoMoura(this.btnCancelarPagto.Click, this.CancelarPagamento, this);
        }
        if (this.cboFormaPagto) {
            adicionarEventoMoura(this.cboFormaPagto.SelectedItemChanged, this.FormaPagamento, this);
        }
        if (this.btnOkPagto) {
            adicionarEventoMoura(this.btnOkPagto.Click, this.PagamentoOk, this);
        }
        if (this.grdProdutos) {
            adicionarEventoMoura(this.grdProdutos.ItemAlterado, this.OnValidandoCampos, this);
        }
        if (this.grdPagamento) {
            adicionarEventoMoura(this.grdPagamento.Validando, this.OnValidandoPagamento, this);
        }
        if (this.txtOrcamento) {
            adicionarEventoMoura(this.txtOrcamento.Procurou, this.OnProcurouOrcamento, this);
        }
        if (this.grdProdutos) {
            adicionarEventoMoura(this.txtCodigo.Procurou, this.onProcurou, this);
        }
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickImprimir, this);
        }
        adicionarEventoJQuery(this.dvPrincipalVenda, "keydown", this.KeyF7, this);
    };
    C_EntPar.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherCampos();
        //if (!(<any>this.GetScope()).Entrega_Itens) {
        //    (<any>this.GetScope()).OnMudouQtdEntregar = $.proxy(this.OnMudouQtdEntregar, this);
        //    var that = this;
        //    this.GetScope().$watch(function () { return that.EntityTela.Entrega_Itens; }, (<any>this.GetScope()).OnSelecionouManequim);
        //}
    };
    C_EntPar.prototype.CancelarPagamento = function () {
        // this.Pagamentos = [];
        this.mdPagamento.Hide();
    };
    C_EntPar.prototype.PagamentoOk = function () {
        this.mdPagamento.Hide();
    };
    C_EntPar.prototype.KeyF7 = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (!tecla || tecla != enmKeyCode.F7) {
            return;
        }
        if (e.ctrlKey || e.altKey) {
            return;
        }
        StopPropagationJQuery(e);
        this.OnClickBotaoPagamento();
    };
    C_EntPar.prototype.FormaPagamento = function (codPamgamento) {
        abrirEspera();
        this.Pagamentos = [];
        var totalInformado = this.CalcularTotalFaltante();
        var parametrosFormaPagamento = {
            codFormaPagamento: this.cboFormaPagto.GetValue(),
            totalFinal: this.lblValorTotalEntrega.Text.CNum(),
            totalInformado: totalInformado != undefined ? totalInformado : 0,
            dataEntrega: this.EntityTela.Data_Entrega != undefined ? ConvertToDate(this.EntityTela.Data_Entrega) : null,
            totalDesconto_ISSQN: 0,
            totalProduto: this.lblValorTotal.Text.CNum(),
            valorFrete: 0,
            docBancario: 0,
            docBancarioDescricao: "",
            orcamentoDesconto: 0,
            orcamentoAcresc: 0,
        };
        var formaPagamentos = this.ExecutarFuncaoServerSideSynch("CalcularFormaPagamento", parametrosFormaPagamento);
        var valorFalta = 0;
        for (var x = 0; x < formaPagamentos.length; x++) {
            this.Pagamento = {};
            this.Pagamento.Parcela = formaPagamentos[x].Parcela;
            this.Pagamento.Vencimento = formaPagamentos[x].Vencimento.ToDate();
            this.Pagamento.Valor = formaPagamentos[x].Valor + formaPagamentos[x].Desconto;
            this.Pagamentos.push(this.Pagamento);
            valorFalta = (this.lblValorTotalEntrega.Text.CNum() - formaPagamentos[x].Valor) + valorFalta;
            this.Pagamento = {};
        }
        if (formaPagamentos.length == 0) {
            this.Pagamento.Valor = this.lblValorTotalEntrega.Text.CNum().Format(2);
        }
        this.Pagamento.Parcela = 1;
        this.Pagamento.Vencimento = this.DataServidor();
        this.lblPagtoRestante.Text = valorFalta < 0 ? valorFalta.Format(2) : "0,00";
        this.RefreshAngular();
        fecharEspera();
    };
    C_EntPar.prototype.CalcularTotalFaltante = function () {
        var total = 0;
        var totalInformado = 0;
        total = this.lblValorTotalEntrega.Text.CNum();
        totalInformado = totalInformado + this.Pagamentos.Sum("Valor");
        if (totalInformado > 0) {
            this.totalPendente = total - totalInformado;
        }
        else {
            this.totalPendente = total;
        }
        return this.totalPendente;
    };
    C_EntPar.prototype.onProcurou = function (s, e) {
        try {
            if (this.EntityTela.Venda = 0) {
                MostrarAlerta("Nenhuma venda cadastrada para essa entrega parcial.");
            }
            if (this.EntityTela.Orcamento = 0) {
                MostrarAlerta("Nenhum orçamento cadastrado para essa entrega parcial.");
            }
            return;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_EntPar.prototype.OnProcurouOrcamento = function (s, e) {
        try {
            abrirEspera();
            if (CNum(this.txtOrcamento.GetText()) > 0) {
                var parametros = {
                    codOrcamento: CNum(this.txtOrcamento.GetText())
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetByOrcamento", parametros);
                this.txtCliente.Procurar(retorno.Cliente);
                if (String.IsNullOrWhiteSpace(this.txtCliente.GetText())) {
                    MostrarAlerta("Este cliente não esta cadastrado, informe um cliente cadastrado");
                }
                if (!String.IsNullOrWhiteSpace(retorno.Mensagem)) {
                    this.txtOrcamento.Limpar();
                    this.txtCliente.Limpar();
                    this.txtVenda.Procurar(retorno.Venda);
                    MostrarAlerta(retorno.Mensagem);
                    return;
                }
            }
            fecharEspera();
            return;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_EntPar.prototype.OnValidandoPagamento = function (s, e) {
        if (e.item.Valor != undefined) {
            e.item.Valor = e.item.Valor;
            var valorFalta = 0;
            valorFalta = (this.lblValorTotalEntrega.Text.CNum() - e.item.Valor.toString().CNum()) + valorFalta;
            this.lblPagtoRestante.Text = valorFalta.Format(2);
        }
        else {
            e.cancelar = true;
        }
    };
    C_EntPar.prototype.OnValidandoCampos = function (s, e) {
        if (e.item.Qtde_Entregar < 0) {
            if (this.flagQtde) {
                MostrarAlerta("A quantidade para entregar não pode ser menor que zero");
                e.item.Qtde_Entregar = 0;
                this.flagQtde = false;
            }
        }
        e.item.Valor_Entregar = e.item.Valor_Unitario * e.item.Qtde_Entregar;
        var valorEntregue = this.Entrega_Itens.map(function (item) {
            if (!item.Valor_Unitario) {
                item.Valor_Unitario = 0;
            }
            if (!item.Qtde_Entregar) {
                item.Qtde_Entregar = 0;
            }
            return (item.Valor_Unitario * item.Qtde_Entregar);
        }).reduce(function (total, valor) {
            return total + valor;
        }).Format(2);
        //var valorEntregue: number = e.item.Valor_Entregar + this.lblValorTotalEntrega.Text.CNum();
        this.lblValorTotalEntrega.Text = valorEntregue;
        this.lblQtdeEntrega.Text = (this.lblQtdeEntrega.Text.CNum() + e.item.Qtde_Entregar).Format(2);
        if (e.item.Qtde_Entregar > e.item.Qtde_Pendente) {
            if (this.flag) {
                MostrarAlerta("A quantidade para entregar não pode ser maior do que a quantidade pendente!");
                this.flag = false;
            }
            e.item.Qtde_Entregar = 0;
            e.item.Valor_Entregar = 0;
            this.lblValorTotalEntrega.Text = (0).Format(2);
            this.lblQtdeEntrega.Text = (0).Format(2);
        }
        //}
        //this.lblValorTotalEntrega.Text = this.Entrega_Itens.Sum("Valor_Entregar").Format(2)
    };
    C_EntPar.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        var dataEntrega = Entity.Data_Entrega.ToDate();
        this.txtData.Date = dataEntrega;
        this.txtHora.textBoxHorario.SetDate(dataEntrega);
        if (!this.EntityTela.Codigo || this.EntityTela.Codigo <= 0) {
            return;
        }
        //let tipoPesquisa = this.optFiltro.GetValue();
        var retorno;
        if (Entity.Venda > 0) {
            retorno = this.CarregarItensVenda(Entity.Venda, Entity.Codigo);
            this.optFiltro.SetValue("V");
            this.txtVenda.Procurar(Entity.Venda.toString());
        }
        else if (Entity.Orcamento > 0) {
            retorno = this.CarregarItensOrcamento(Entity.Orcamento, Entity.Codigo);
            this.optFiltro.SetValue("O");
            this.txtOrcamento.Procurar(Entity.Orcamento.toString());
        }
        this.txtCliente.Procurar(this.cliente.toString());
        this.Data_Hora = ConvertToDate(Entity.Data_Cadastro);
        this.txtHora.textBoxHorario.SetText(this.Data_Hora);
        this.Entrega_Itens = retorno;
        this.EntityTela.Lista_Contas_Receber = this.contasReceber;
        this.lblQtde.Text = this.Entrega_Itens.Sum("Quantidade").Format(2);
        this.lblValorTotal.Text = this.Entrega_Itens.Sum("Valor_Total").Format(2);
        this.lblQtdePendente.Text = this.Entrega_Itens.Sum("Qtde_Pendente").Format(2);
        this.lblQtdeEntrega.Text = this.Entrega_Itens.Sum("Qtde_Entregar").Format(2);
        this.lblValorTotalEntrega.Text = this.Entrega_Itens.Sum("Valor_Entregar").Format(2);
        this.RefreshAngular();
    };
    C_EntPar.prototype.OnDepoisLimpar = function () {
        _super.prototype.OnDepoisLimpar.call(this, this.EntityTela);
        this.PreencherCampos();
        this.txtCliente.Limpar();
        this.cliente = 0;
        this.contasReceber = [];
        this.lblQtde.Text = "";
        this.lblValorTotal.Text = "";
        this.lblQtdePendente.Text = "";
        this.lblQtdeEntrega.Text = "";
        this.lblValorTotalEntrega.Text = "";
    };
    C_EntPar.prototype.OnClickBotaoEntregaTotal = function () {
        var qtdePendente = 0;
        var qtdeEstoque = 0;
        var mensagemProduto = [];
        var mensagemEstoqueAtual = [];
        var mensagemQtdeEntregar = [];
        for (var x = 0; x < this.Entrega_Itens.length; x++) {
            if (this.Entrega_Itens[x].Qtde_Pendente <= 0) {
                qtdePendente++;
            }
            if (qtdePendente == this.Entrega_Itens.Sum("Qtde_Entregar") && (qtdePendente != 0 && this.Entrega_Itens.Sum("Qtde_Entregar") != 0)) {
                MostrarAlerta("Não é possível realizar essa operação! A entrega selecionada já foi realizada por completo.");
            }
            if (ValoresSismoura.ConfiguracoesRetaguarda.EntregaParc_Estoque_Negativo
                && this.Entrega_Itens[x].Estoque_Atual < this.Entrega_Itens[x].Qtde_Pendente) {
                mensagemProduto.push(this.Entrega_Itens[x].Nome_Produto);
                mensagemEstoqueAtual.push(this.Entrega_Itens[x].Estoque_Atual);
                mensagemQtdeEntregar.push(this.Entrega_Itens[x].Qtde_Entregar);
                qtdeEstoque++;
            }
            if (qtdeEstoque > 0 && x == (this.Entrega_Itens.length - 1)) {
                MsgBoxJS("O estoque atual do item é menor que a quantidade marcada para ser entregue: <br/>"
                    + "Produto: " + mensagemProduto.join(",") +
                    ", <br/> Estoque Atual: " + mensagemEstoqueAtual.join(",")
                    + ",<br/> Estoque a ser Entregue: " + mensagemQtdeEntregar.join(",")
                    + "<br/> Essa movimentação deixará o estoque dos itens acima negativo! do item acima negativo!", MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
            }
            this.Entrega_Itens[x].Qtde_Entregar = this.Entrega_Itens[x].Qtde_Pendente;
            this.Entrega_Itens[x].Valor_Entregar = this.Entrega_Itens[x].Qtde_Entregar * this.Entrega_Itens[x].Valor_Unitario;
            this.RefreshAngular();
            this.grdProdutos.Grid.Refresh();
            this.lblQtde.Text = this.Entrega_Itens.Sum("Quantidade").Format(2);
            this.lblValorTotal.Text = this.Entrega_Itens.Sum("Valor_Total").Format(2);
            this.lblQtdePendente.Text = this.Entrega_Itens.Sum("Qtde_Pendente").Format(2);
            this.lblQtdeEntrega.Text = this.Entrega_Itens.Sum("Qtde_Entregar").Format(2);
            this.lblValorTotalEntrega.Text = this.Entrega_Itens.Sum("Valor_Entregar").Format(2);
            this.RefreshAngular();
        }
    };
    C_EntPar.prototype.OnClickBotaoPagamento = function () {
        /*if (!this.EntityTela.Codigo || this.Entrega_Itens.length <= 0 ) {
            MostrarAlerta("Informe uma quantidade de entrega para gerenciar o pagamento.");
            return;
        }*/
        if (this.Entrega_Itens["Quantidade"] <= 0) {
            MostrarAlerta("Informe uma quantidade a entregar.");
            return;
        }
        this.Pagamento = {};
        this.Pagamento.Parcela = 1;
        this.Pagamento.Vencimento = this.DataServidor();
        this.RefreshAngular();
        var valorFalta = 0;
        valorFalta = (this.lblValorTotalEntrega.Text.CNum() - this.Pagamentos.Sum("Valor")) + valorFalta;
        this.lblPagtoRestante.Text = valorFalta.Format(2);
        if (!String.IsNullOrWhiteSpace(this.lblValorTotalEntrega.Text)) {
            if (this.lblValorTotalEntrega.Text.CNum() > 0) {
                this.Pagamentos = [];
                this.mdPagamento.Show();
            }
            else {
                MostrarAlerta("Informe a quantidade que será entregue");
            }
        }
    };
    C_EntPar.prototype.OnClickBotaoCarregar = function () {
        var tipoPesquisa = this.optFiltro.GetValue();
        var retorno;
        this.EntityTela.Orcamento = this.txtOrcamento.GetText().CNum();
        this.EntityTela.Venda = this.txtVenda.GetText().CNum();
        if ((!this.EntityTela.Orcamento || this.EntityTela.Orcamento <= 0) && (!this.EntityTela.Venda || this.EntityTela.Venda <= 0) &&
            (!this.EntityTela.Codigo || this.EntityTela.Codigo <= 0)) {
            MostrarAlerta("Informe o código da venda ou orçamento desejado!");
            return;
        }
        if (tipoPesquisa == "V") {
            retorno = this.CarregarItensVenda(this.EntityTela.Venda, 0);
        }
        else if (tipoPesquisa == "O") {
            retorno = this.CarregarItensOrcamento(this.EntityTela.Orcamento, 0);
        }
        this.Entrega_Itens = retorno;
        this.txtCliente.Procurar(this.cliente.toString());
        this.lblQtde.Text = this.Entrega_Itens.Sum("Quantidade").Format(2);
        this.lblValorTotal.Text = this.Entrega_Itens.Sum("Valor_Total").Format(2);
        this.lblQtdePendente.Text = this.Entrega_Itens.Sum("Qtde_Pendente").Format(2);
        this.lblQtdeEntrega.Text = this.Entrega_Itens.Sum("Qtde_Entregar").Format(2);
        this.lblValorTotalEntrega.Text = this.Entrega_Itens.Sum("Valor_Entregar").Format(2);
        this.RefreshAngular();
    };
    C_EntPar.prototype.CarregarItensVenda = function (codVenda, codEntrega) {
        var parametros = {
            codVenda: CNum(codVenda),
            codEntrega: CNum(this.EntityTela.Codigo),
            depositoPadrao: ValoresSismoura.DepositoPadrao
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("CarregarItensVenda", parametros);
        if (!retorno) {
            MostrarAlerta("Nenhum item encontrado!");
            this.txtVenda.Focus();
            return;
        }
        this.contasReceber = retorno.Contas_Receber;
        this.cliente = retorno.Cliente;
        return retorno.Entrega_Itens;
    };
    C_EntPar.prototype.CarregarItensOrcamento = function (codOrcamento, codEntrega) {
        var parametros = {
            codOrcamento: CNum(codOrcamento),
            codEntrega: CNum(this.EntityTela.Codigo),
            depositoPadrao: ValoresSismoura.DepositoPadrao
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("CarregarItensOrcamento", parametros);
        if (!retorno) {
            MostrarAlerta("Nenhum item encontrado!");
            this.txtOrcamento.Focus();
            return;
        }
        this.contasReceber = retorno.Contas_Receber;
        this.cliente = retorno.Cliente;
        return retorno.Produtos;
    };
    C_EntPar.prototype.VerificarVendaPDV = function (codVenda) {
        var parametros = {
            codVenda: CNum(codVenda)
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("VerificarVendaPDV", parametros);
        if (!retorno) {
            MostrarAlerta("A venda selecionada foi gerada pelo módulo PDV.Sendo assim o estoque não sera baixado novamente!");
            return true;
        }
        return retorno;
    };
    C_EntPar.prototype.VerificarProdutos = function () {
        var codDepositos = [];
        var codProdutos = [];
        for (var x = 0; x < this.Entrega_Itens.length; x++) {
            if (this.Entrega_Itens[x].Qtde_Entregar > 0) {
                var deposito = this.Entrega_Itens[x].Deposito.toString().split("-");
                codDepositos.push(deposito[0]);
                codProdutos.push(this.Entrega_Itens[x].Cod_Produto);
            }
        }
        var produtos = codProdutos.join(",");
        var depositos = codDepositos.join(",");
        var parametros = {
            codProdutos: produtos,
            codDepositos: depositos
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("VerificarProdutos", parametros);
        if (!String.IsNullOrWhiteSpace(retorno)) {
            MostrarAlerta(retorno);
            return false;
        }
        return true;
    };
    C_EntPar.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        //this.EntityTela.Data_Entrega = (this.Data_Dia + '' + this.Data_Hora).ToDate().FormataDataHora()
        var codVenda = this.txtVenda.GetText() == undefined ? 0 : this.txtVenda.GetText().CNum();
        if (this.Entrega_Itens.length == 0) {
            MostrarAlerta("Não há itens para gravar na entrega!");
            return false;
        }
        if (!String.IsNullOrWhiteSpace(this.txtCliente.GetText())) {
            if (this.txtCliente.GetText().CNum() <= 0) {
                MostrarAlerta("Informe um cliente");
                return false;
            }
        }
        if (this.Entrega_Itens.Sum("Qtde_Entregar") <= 0) {
            MostrarAlerta("Informe a Quantidade da Entrega!");
            return false;
        }
        if (this.Entrega_Itens.Sum("Qtde_Entregar") > 0 && this.Entrega_Itens.Sum("Qtde_Pendente") <= 0) {
            MostrarAlerta("A quantidade para entrega não pode ser maior  do que a quantidade pendente");
            return false;
        }
        if (this.Pagamentos.Sum("Valor") < this.Entrega_Itens.Sum("Valor_Entregar")
            || ((this.Pagamentos.Sum("Valor") == 0)
                && (this.Entrega_Itens.Sum("Valor_Entregar") == 0))) {
            if (this.Entrega_Itens.Sum("Qtde_Entregue") <= 0) {
                MostrarAlerta("Total de Parcelas é diferente do Total da Entrega!");
                return false;
            }
        }
        var retorno = this.VerificarVendaPDV(codVenda);
        if (!retorno) {
            return retorno;
        }
        if (retorno && ValoresSismoura.ConfiguracoesRetaguarda.EntregaParc_Estoque_Negativo) {
            var retornoProduto = this.VerificarProdutos();
            if (!retornoProduto) {
                return retornoProduto;
            }
        }
        this.converterPagamento();
        this.converterEntregaParcialItem();
        this.EntityTela.Venda = this.txtVenda.GetText().CNum();
        this.EntityTela.Orcamento = this.txtOrcamento.GetText().CNum();
        this.EntityTela.Data_Cadastro = this.DataServidor();
        this.EntityTela.Data_Entrega = this.DataServidor();
        this.EntityTela.Orcamento = this.EntityTela.Orcamento == null ? 0 : this.EntityTela.Orcamento;
        return true;
    };
    C_EntPar.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        this.EntityTela.Lista_Contas_Receber = this.contasReceber;
        return true;
    };
    C_EntPar.prototype.OnFiltroChange = function () {
        if (this.optFiltro.GetValue() == "V") {
            this.txtVenda.Visible = true;
            this.txtOrcamento.Visible = false;
        }
        else if (this.optFiltro.GetValue() == "O") {
            this.txtVenda.Visible = false;
            this.txtOrcamento.Visible = true;
        }
        this.txtVenda.Limpar();
        this.txtOrcamento.Limpar();
        this.txtCliente.Limpar();
        if (this.Entrega) {
            this.Entrega = [];
        }
        if (this.Entrega_Itens) {
            this.Entrega_Itens = [];
        }
        this.RefreshAngular();
    };
    C_EntPar.prototype.PreencherCampos = function () {
        if (this.txtVenda) {
            this.txtVenda.Visible = false;
        }
        if (this.txtOrcamento) {
            this.txtOrcamento.Visible = false;
        }
        if (this.optFiltro) {
            this.optFiltro.SetValue("V");
            this.OnFiltroChange();
        }
        var dateNow = this.DataServidor();
        this.Data_Dia = dateNow.FormataData();
        this.txtHora.textBoxHorario.SetDate(dateNow);
        this.RefreshAngular();
    };
    C_EntPar.prototype.converterPagamento = function () {
        this.EntityTela.Lista_Contas_Receber = [];
        for (var x = 0; x < this.Pagamentos.length; x++) {
            var contasReceber = {};
            contasReceber.Codigo_Cliente = this.txtCliente.GetText().CNum();
            contasReceber.Numero_Documento = this.optFiltro.GetValue() == "O" ? this.txtOrcamento.GetText() : this.txtVenda.GetText();
            contasReceber.Conta_Contabil = 1;
            contasReceber.Conta_Corrente = 1;
            contasReceber.Doc_Bancario = 1;
            contasReceber.Doc_Merc = 1;
            contasReceber.Valor = this.Pagamentos[x].Valor;
            contasReceber.Data_Vencimento = ConvertToDate(this.Pagamentos[x].Vencimento);
            contasReceber.Parcela = this.Pagamentos[x].Parcela;
            contasReceber.Data_Emissao = ConvertToDate(this.DataServidor);
            contasReceber.Observacao = 'CADASTRADO VIA ENTREGA PARCIAL';
            contasReceber.Baixa = 0;
            contasReceber.Operador = ValoresSismoura.UsuarioLogado;
            contasReceber.Gerar = 1;
            this.EntityTela.Lista_Contas_Receber.push(contasReceber);
        }
    };
    C_EntPar.prototype.converterEntregaParcialItem = function () {
        this.EntityTela.Entrega_Itens = [];
        for (var x = 0; x < this.Entrega_Itens.length; x++) {
            var entregaItem = {};
            var deposito = this.Entrega_Itens[x].Deposito.toString().split("-");
            var codDepositos = deposito[0];
            entregaItem.Deposito = codDepositos;
            entregaItem.Item = x + 1;
            entregaItem.Produto = this.Entrega_Itens[x].Cod_Produto;
            entregaItem.Quantidade_Entregue = this.Entrega_Itens[x].Qtde_Entregar;
            this.EntityTela.Entrega_Itens.push(entregaItem);
        }
    };
    C_EntPar.prototype.OnClickImprimir = function (s, e) {
        e.processOnServer = false;
        try {
            if (this.EntityTela.Codigo > 0 && this.cliente > 0) {
                this.Imprimir(this.EntityTela.Codigo, 1);
            }
            else {
                MostrarAlerta("Informe uma entrega com cliente!");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_EntPar.prototype.Imprimir = function (codEntrega, codModelo) {
        var parametros;
        parametros = {
            codEntrega: codEntrega,
            codModelo: codModelo
        };
        var texto = this.ExecutarFuncaoServerSideSynch("Imprimir", parametros);
        abrirTelaNovaAbaParametros(formataURLRelativa("/EditorHTML.aspx?EmailEnvio=" + "" + "&NomeAnexo=" + "" + texto), null);
    };
    return C_EntPar;
}(MouraPageCadastroAngular));
var c_EntPar = new C_EntPar();
//# sourceMappingURL=C_EntPar.js.map